import { Repository } from './data/repository.js';
import { Router } from './core/router.js';
import { CalendarPage } from './pages/calendar/calendar.js';
import { DocumentPage } from './pages/document/document.js';
import { DocumentOutline } from './pages/document/outline.js';
import { SaintEvaluator } from './pages/document/saint-evaluator.js';
import { DocumentSearch } from './pages/document/search.js';
import { SeasonEvaluator } from './pages/document/season-evaluator.js';
import { HomePage } from './pages/home/home.js';
import { SettingsPage } from './pages/settings/settings.js';

const loader = document.querySelector('loading.init-loader');
loader.classList.add('show');
await Repository.getUpdates();
loader.classList.remove('show');

HomePage.init();
Router.process();

// to be able to access it from html
window.Router = Router;
window.DocumentPage = DocumentPage;
window.DocumentSearch = DocumentSearch;
window.DocumentOutline = DocumentOutline;
window.SettingsPage = SettingsPage;
window.CalendarPage = CalendarPage;
window.SeasonEvaluator = SeasonEvaluator; // needed to execute reflection calls
window.SaintEvaluator = SaintEvaluator; // same!