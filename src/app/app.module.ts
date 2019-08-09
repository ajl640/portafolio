import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';


// Routes
import { ROUTES } from './app.routes';


// Services
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    LoadingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      useHash:true,
      scrollPositionRestoration:'enabled'
    }),
    HttpClientModule
  ],
  providers: [
    InfoPaginaService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
