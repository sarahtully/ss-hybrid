import { TabsPage } from './tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LocationListPage } from '../pages/location-list/location-list';
import { TutorialPage } from './tutorial/tutorial';

// The page the user lands on after opening the app and without a session
// export const FirstRunPage = TutorialPage;
// TODO: remove temp first run page
export const FirstRunPage = TabsPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = LocationListPage;
export const Tab2Root = AboutPage;
export const Tab3Root = ContactPage;