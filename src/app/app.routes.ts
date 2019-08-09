import { Routes } from '@angular/router';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES:Routes = [
	{ path: 'portafolio', component: PortafolioComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'item/:id', component: ItemComponent },
	{ path: 'search/:termino', component: SearchComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'portafolio' }
];
