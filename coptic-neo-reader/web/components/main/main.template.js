const mainTemplate = `<span class="loading"></span>
<header>
	<h1>Coptic Neo-Reader</h1>
	<h4>Coptic Orthodox Church</h4>
</header>

<!-- sub-header -->
<section>
	<img src="{subHeaderImage}" alt="Sub Header Image">
	<div>
		<div id="copticDate">{copticDate}</div>
		<div id="gregorianDate">{gregorianDate}</div>
	</div>
</section>

<!-- main menu -->
<section class="main-menu">
	<h3>Content Library</h3>
	<ul>{mainMenuList}</ul>
</section>`;

const mainMenuItemTemplate = `<div class="main-menu-item">
	<img src="{menuItemImage}" alt="Menu Item Image">
	<h5>{menuItemTitle}</h5>
</div>`;
