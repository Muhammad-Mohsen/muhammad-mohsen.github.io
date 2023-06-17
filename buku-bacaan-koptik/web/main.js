import { Router } from "./core/router.js";
import { MainMenu } from "./data/main-menu.js";
import { DocumentPage } from "./pages/document/document.js";
import { DocumentOutline } from "./pages/document/outline.js";
import { DocumentSearch } from "./pages/document/search.js";
import { HomePage } from "./pages/home/home.js";

MainMenu.setURI('', MainMenu.DATA);
HomePage.init();
Router.process();

// to be able to access it from html
window.Router = Router;
window.DocumentPage = DocumentPage;
window.DocumentSearch = DocumentSearch;
window.DocumentOutline = DocumentOutline;