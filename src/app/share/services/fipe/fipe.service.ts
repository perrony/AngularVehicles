import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IBrand } from '../../models/fipe/Brand';
import { IModelyear } from '../../models/fipe/ModelYear';
import { IReference } from '../../models/fipe/Reference';
import { IVehicle } from '../../models/fipe/Vehicle';




@Injectable({
  providedIn: 'root'
})
export class FipeService {

  private readonly API_FIPE_REFERENCE = `${environment.API_URL}api/veiculos/fipe/referencia`;
  private readonly API_FIPE_BRAND = `${environment.API_URL}api/veiculos/fipe/marcas`;
  private readonly API_FIPE_MODEL = `${environment.API_URL}api/veiculos/fipe/modelos`;
  private readonly API_FIPE_MODELYEAR = `${environment.API_URL}api/veiculos/fipe/anomodelo`;
  private readonly API_FIPE_VEHICLE = `${environment.API_URL}api/veiculos/fipe/veiculo`;
  private readonly API_FIPE_CODE = `${environment.API_URL}api/veiculos/fipe/codigofipe`;


  getReference(): Observable<IReference[]> {
    return this.http.get<IReference[]>(this.API_FIPE_REFERENCE);
  }

  getBrand(tipo: number,referencia: number): Observable<IBrand[]> {
      return this.http.get<IBrand[]>(this.API_FIPE_BRAND+'/'+tipo+'/'+referencia);
  }

  getModel(tipo: number,referencia: number, marca: number): Observable<IModelyear[]> {
    return this.http.get<IBrand[]>(this.API_FIPE_MODEL+'/'+tipo+'/'+referencia+'/'+marca);
  }

  getModelYear(tipo: number,referencia: number,marca: number, modelo: number): Observable<IModelyear[]> {
    return this.http.get<IModelyear[]>(this.API_FIPE_MODELYEAR+'/'+tipo+'/'+referencia+'/'+marca+'/'+modelo);

  }

  getVehicle(tipo: number, referencia: number, marca: number, modelo: number, anoModelo: number, tipoConsulta: number): Observable<IVehicle> {
    return this.http.get<IVehicle>(this.API_FIPE_VEHICLE+'/'+tipo+'/'+referencia+'/'+marca+'/'+modelo+'/'+anoModelo+'/'+tipoConsulta);
  }


  getFipeCode(tipo: number, referencia: number, codigoFipe: string){
    return this.http.get<IVehicle>(this.API_FIPE_CODE+'/'+tipo+'/'+referencia+'/'+codigoFipe)
  }

  constructor(
    private http: HttpClient
  ) { }
}
