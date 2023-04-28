const sectionTemplate = `<section>
	<div class="inline equal">
		<div class="input margin">
			<!-- TYPE -->
			<select data-attr="type">
				<option value="title">Title</option>
				<option value="else">Something Else</option>
			</select>
			<label>Type</label>
		</div>

		<!-- ROLE -->
		<div class="input margin">
			<select data-attr="role">
				<option value="any">Any</option>
				<option value="deacon">Deacon</option>
				<option value="role3">Role 3</option>
			</select>
			<label>Role</label>
		</div>

		<!-- DATE -->
		<div class="input margin">
			<input type="text" placeholder="material" data-attr="date">
			<label>Date Range (Optional)</label>
		</div>

		<button class="icon close secondary" onclick="ContentEditor.remove(this)">
			<img src="assets/ic_close.svg" alt="Remove Section">
		</button>
		<button class="icon drag secondary" onclick="ContentEditor.drag(this)">
			<img src="assets/ic_drag.svg" alt="Drag/Drop">
		</button>
	</div>

	<div class="input content">
		<textarea data-attr="en" placeholder="material"></textarea>
		<label>English</label>
	</div>

	<div class="input content">
		<textarea data-attr="ar" placeholder="material"></textarea>
		<label>Arabic</label>
	</div>

	<div class="input content">
		<textarea data-attr="cp" placeholder="material"></textarea>
		<label>Coptic</label>
	</div>

</section>`;