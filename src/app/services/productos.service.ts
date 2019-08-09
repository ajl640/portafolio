import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Producto } from './../interfaces/producto.interface';

@Injectable({
	providedIn: 'root'
})
export class ProductosService {

	public loaderP:boolean = true;
	public productos:Producto[] = [];
	public productosFiltrado:Producto[] = [];
	public productosError:string;

	constructor(private _httpClient:HttpClient) {
		this.cargarProductos();
	}

	private cargarProductos() {
		return new Promise((resolve, reject) => {
			this._httpClient.get(`https://angular-html-f3c6b.firebaseio.com/productos_idx.json`)
				.subscribe(
					(data:Producto[]) => {
						this.loaderP = false;
						this.productos = data;
						resolve();
					},
					(err) => {
						console.error(err);
						let error:any = err.error.message != null ? err.error.message : err.message;
						this.loaderP = false;
						this.productosError= error
						reject();
					}
				);
		});
	}

	public getProducto(id:string) {
		return this._httpClient.get(`https://angular-html-f3c6b.firebaseio.com/productos/${id}.json`)
	}

	public buscarProducto(termino:string) {
		if(this.productos.length === 0) {
			this.cargarProductos()
				.then(()=> {
					this.filtrarPorductos(termino);
				});
		}
		else {
			this.filtrarPorductos(termino);
		}
	}

	private filtrarPorductos(termino:string){
		termino = termino.toLowerCase();
		this.productosFiltrado = [];
		this.productos.forEach((prod) => {
			const titulo = prod.titulo.toLowerCase();
			if (prod.categoria.indexOf(termino) >= 0 || titulo.indexOf(termino) >= 0) {
				this.productosFiltrado.push(prod);
			}
		});
	}

}
