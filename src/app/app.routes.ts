import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurHistoryPageComponent } from './pages/our-history-page/our-history-page.component';

export const routes: Routes = [
    {path: "",component: HomePageComponent},
    {path: "storia",component: OurHistoryPageComponent}
];
