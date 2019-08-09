import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from './../../../services/info-pagina.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(
		private _router:Router,
		public _infoPaginaService:InfoPaginaService
	) { }

	ngOnInit() {
	}

	public buscarProducto(termino:string) {
		if (termino.length > 0) {
			this._router.navigate(['/search', termino]);
		}
		else {
			console.error('Debe introducir un parametro de búsqueda')
		}
	}

}
