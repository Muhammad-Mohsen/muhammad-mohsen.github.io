export class MenuItem {
	constructor(
		readonly text: String,
		readonly image?: String,
		readonly constraints?: any[],
		readonly menu?: MenuItem[],
		readonly path?: String
	) {}
}
