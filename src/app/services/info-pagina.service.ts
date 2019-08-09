import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { InfoPagina } from './../interfaces/info-pagina.interface';

@Injectable({
	providedIn: 'root'
})
export class InfoPaginaService {

	public loaderI:boolean = true;
	public info:InfoPagina = {};
	public infoError:string;

	public loaderE:boolean = true;
	public equipo:any[] = [];
	public equipoError:string;

	constructor(private _httpClient:HttpClient) {
		this.cargarProductos();
		this.cargarEquipo();
	}

	private cargarProductos() {
		this._httpClient.get(`assets/data/data-pagina.json`)
			.subscribe(
				(data:InfoPagina) => {
					this.loaderI = false;
					this.info = data;
				},
				(err) => {
					console.error(err);
					let error:any = err.error.message != null ? err.error.message : err.message;
					this.loaderI = false;
					this.infoError= error
				}
			);
	}

	private cargarEquipo() {
		this._httpClient.get(`https://angular-html-f3c6b.firebaseio.com/equipo.json`)
			.subscribe(
				(data:any) => {
					this.loaderE = false;
					this.equipo = data;
				},
				(err) => {
					console.error(err);
					let error:any = err.error.message != null ? err.error.message : err.message;
					this.loaderE = false;
					this.equipoError= error
				}
			);
	}

}
