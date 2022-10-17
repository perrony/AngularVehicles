import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = `${environment.API_URL}api/cep`;

interface ICep {
  cep: string;
  ibge: string;
  publicplace: string;
  complement: string;
  district: string; 
  locality: string;    
  uf: string;     
  gia: string;  
  ddd: string;  
  siafi: string;  
}

interface ICepResponse {
  data: ICep | null;
  message: string | null;
  error: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class SearchCepService {

  constructor(
    private http: HttpClient,
    ) { }

  searchCEP(cep: string){
   if(cep) {
      cep = cep.replace(/\D/g,'');
      let validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
         return this.http.get<ICepResponse>(`${URL}/${cep}`);
      }
    }
   return null;
  }


}
