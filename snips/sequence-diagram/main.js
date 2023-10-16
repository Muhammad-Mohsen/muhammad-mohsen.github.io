const Plotter = (function () {

	let sessionData, packets, endpoints, endpointsMap, endpointsHoverMap, raw;

	function plot(data) {
		try {
			data = JSON.parse(data);
			sessionData = data.query;

			packets = data.moduleLogs[0].messagePacketArray;
			endpointsMap = data.moduleLogs[0].endPointsLabels;
			endpointsHoverMap = data.moduleLogs[0].endPointsHover;
			endpoints = getEndpointLabels(data.moduleLogs[0].endPointsLabels);
			raw = data.moduleLogs[0].rawData;

		} catch {
			alert('Invalid log data');
			console.log(data);
		}

		document.querySelector('header').innerHTML = Header(sessionData);
		document.querySelector('.sections').innerHTML = Sections(endpoints);
		document.querySelector('.sequence').innerHTML = compileSequence();

		document.title = `${sessionData.searchValue} | Contivio Logs`;
	}

	function compileSequence() {
		return ['', ...packets].reduce((a, p) => { // to make reduce work, put in a dummy first element to append to
			const arrowInfo = getArrowInfo(p);
			return a += `<div class="message" style="background:${arrowInfo.background}">
						<div class="timestamp">${p.timeStamp}</div>
						<div class="arrow ${arrowInfo.direction}${p.dottedLine ? ' dotted' : ''}"
							style="margin-left:${arrowInfo.margin};width:${arrowInfo.width};color:${arrowInfo.lineColor};border-color:${arrowInfo.lineColor};">

							<div class="description" data-description="${escapeHtml(p.message)}" title="${escapeHtml(p.messageDescription)}" onclick="Plotter.showMessageDetails(event)" style="color:${arrowInfo.color};">${escapeHtml(p.messageDescription)}</div>
						</div>
					</div>
				`});
	}

	function getArrowInfo(packet) {
		const segments = endpoints.length;
		packet.labelIndexa = getEndpointIndex(packet.labelIndexa);
		packet.labelIndexb = getEndpointIndex(packet.labelIndexb);

		const marginLeft = Math.min(packet.labelIndexa, packet.labelIndexb);
		let length = Math.abs(packet.labelIndexb - packet.labelIndexa);
		let direction = packet.labelIndexb > packet.labelIndexa ? 'right' : 'left';

		// debug (length 0) messages
		if (!length) {
			direction = 'neutral';
			length = 1;
		}

		return {
			margin: `calc(${marginLeft} * calc(calc(100% - 80px) / ${segments}))`,
			width: `calc(${length} * calc(calc(100% - 80px) / ${segments}))`,
			direction: direction,
			color: getColor(packet.fontColor, true),
			lineColor: getColor(packet.lineColor, true),
			background: getColor(packet.backgroundColor),
		}
	}

	function getEndpointLabels(endpointsMap) {
		return Object.keys(endpointsMap).map(k => {
			return {
				label: endpointsMap[k],
				hover: endpointsHoverMap[k]
			}
		});
	}
	function getEndpointIndex(index) {
		const keys = Object.keys(endpointsMap).map(k => parseInt(k));
		return keys.indexOf(index) + 1;
	}

	function showMessageDetails(evt) {
		new MessageDetails(evt);
	}

	// color utils
	function getColor(colorInt, foreground) {
		colors = ['#EBF1F9', '#E7E9F4', '#E5EBFD', '#EAFAFF', '#E4F9F9', '#E1FCED'];
		return foreground ? invertColor(colors[Math.abs(colorInt) % 6]) : colors[Math.abs(colorInt) % 6];
	}
	function invertColor(hex) {
		function padZero(str, len) {
			len = len || 2;
			var zeros = new Array(len).join('0');
			return (zeros + str).slice(-len);
		}

		if (hex.indexOf('#') == 0) hex = hex.slice(1);

		// invert color components
		var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
			g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
			b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
		// pad each with zeros and return
		return '#' + padZero(r) + padZero(g) + padZero(b);
	}

	// raw data
	function displayRawData() {
		const w = window.open(undefined, undefined, `scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=${screen.width},height=${screen.height}`);
		w.document.title = `${sessionData.searchValue} | Raw Data`;
		w.document.body.innerText =raw;
	}

	return {
		plot: plot,
		showMessageDetails: showMessageDetails,
		displayRawData: displayRawData,
	}
})();

const Header = function (headerData) {
	return `
	<h3>${headerData.searchValue}</h3>
	<code>${headerData.module}</code>
	<p>${headerData.from} 🡪 ${headerData.to}</p>
	<button style="display:${raw ? '' : 'none'}" onclick="Plotter.displayRawData();">VIEW DATA</button>`;
}

const Sections = function (endpoints) {
	return [...endpoints].reduce((h, e) => h += `<section><header title="${e.hover || e.label}">${e.label}</header></section>`, '');
}

// the details popup into its own class
const MessageDetails = function (event) {
	const message = event.target;
	let details, connector;

	showPopup(); // this does everything!

	function showPopup() {
		const detailsText = escapeHtml(message.getAttribute('data-description'))?.replaceAll('\n', '<br>');
		document.querySelector('aside').insertAdjacentHTML('beforeend',
			`<div class="message-card">
				<div class="message-header">
					<button class="copy" onclick="Plotter.copyMessageDetails(event)"></button>
					<button class="remove" onclick="Plotter.removeMessageDetails(event)"></button>
				</div>
				<span onmousedown="event.stopPropagation();">${detailsText}</span>
			</div>`
		);

		details = document.querySelector('aside .message-card:last-child');

		// calculate the initial position of the popup
		const mRect = message.getBoundingClientRect();
		details.style.top = `${mRect.y + document.documentElement.scrollTop}px`;
		details.style.left = `${mRect.x}px`;

		details.querySelector('.copy').onclick = () => {
			navigator.clipboard.writeText(details.innerText);
		}
		details.querySelector('.remove').onclick = () => {
			details.remove();
			connector.remove();
		}

		draggable(); // make it draggable
		drawConnector(); // draw connector
	}

	// draggable util
	function draggable() {
		var pressed, start;

		// add touchstart, touchend, touchmove!
		function mousedown(evt) {
			pressed = true;
			start = {
				x: getCoordinate(evt, 'x'),
				y: getCoordinate(evt, 'y'),
				offset: {
					x: details.offsetLeft,
					y: details.offsetTop
				}
			}
		}
		function mousemove(evt) {
			if (!pressed || !start) return;

			details.style.left = (start.offset.x + getCoordinate(evt, 'x') - start.x) + 'px';
			details.style.top = (start.offset.y + getCoordinate(evt, 'y') - start.y) + 'px';

			// recalculate the connector
			drawConnector(evt.target.nextElementSibling, message, evt.target);
		}
		function mouseup(evt) {
			if (start) evt.stopImmediatePropagation();
			details.classList.remove('dragging');
			start = pressed = null;
		}

		function getCoordinate(evt, coor) {
			if (coor == 'x') {
				if (typeof TouchEvent != 'undefined' && evt instanceof TouchEvent) return evt.screenX || evt.changedTouches[0].screenX;
				else return evt.pageX;
			}

			if (typeof TouchEvent != 'undefined' && evt instanceof TouchEvent) return evt.screenY || evt.changedTouches[0].screenY;
			else return evt.pageY;
		}

		details.addEventListener('mousedown', mousedown);
		details.addEventListener('mousemove', mousemove);
		window.addEventListener('mouseup', mouseup, true);

		details.addEventListener('touchstart', mousedown);
		details.addEventListener('touchmove', mousemove);
		window.addEventListener('touchend', mouseup, true);
	}
	function drawConnector() {
		connector = connector || document.createElement('div');
		connector.classList.add('connector');

		const currentScroll = document.documentElement.scrollTop; // boundingClientRect gets the position with respect to viewport, so we add the scrollTop to get the total
		const mRect = message.getBoundingClientRect();
		const dRect = details.getBoundingClientRect();

		const m = { // message element position
			x: mRect.x + (message.clientWidth / 2),
			y: mRect.y + currentScroll + (message.clientHeight / 2),
		}
		const d = { // details element (popup) position
			x: dRect.x + (details.clientWidth / 2),
			y: dRect.y + currentScroll + (details.clientHeight / 2),
		}

		const connectorLength = Math.sqrt((d.x - m.x) ** 2 + (d.y - m.y) ** 2); // pythagoras
		const connectorAngle = Math.atan((d.y - m.y) / (d.x - m.x)) + (d.x > m.x ? 3.14 : 0); // add pi if the popup is to the right of the message

		connector.style.left = `${d.x}px`;
		connector.style.top = `${d.y}px`;

		connector.style.width = `${connectorLength}px`;
		connector.style.transform = `rotate(${connectorAngle}rad)`;

		details.insertAdjacentElement('afterend', connector);
	}
};

Plotter.plot(sessionStorage.getItem('plot')); // plotData is passed by the page that opened this one!

function escapeHtml(unsafe) {
	if (!unsafe) return;

	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
