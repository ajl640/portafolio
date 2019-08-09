import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../services/productos.service';
import { ProductoDescripcion } from './../../interfaces/producto-descripcion.interface';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	public loaderP:boolean = true;
	public producto:ProductoDescripcion;
	public id:string;
	public productosError:string;

	constructor(
		private _activatedRoute:ActivatedRoute,
		public _productosService:ProductosService
	) { }

	ngOnInit() {
		this._activatedRoute.params.subscribe(parans => {
			let id = parans['id'];
			if (id !== undefined) {
				this._productosService.getProducto(id)
					.subscribe(
						(data:ProductoDescripcion) => {
							this.loaderP = false;
							this.id = id;
							this.producto = data;
						},
						(err) => {
							console.error(err);
							let error:any = err.error.message != null ? err.error.message : err.message;
							this.loaderP = false;
							this.productosError= error
						}
					);
			}
		});
	}

}
