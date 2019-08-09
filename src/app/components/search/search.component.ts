import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../services/productos.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	constructor(
		private _activatedRoute:ActivatedRoute,
		public _productosService:ProductosService
	) { }

	ngOnInit() {
		this._activatedRoute.params.subscribe(parans => {
			let termino = parans['termino'];
			this._productosService.buscarProducto(termino);
		});
	}

}
