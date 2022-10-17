import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddressCompanies } from 'src/app/share/models/companies/AddressCompanies';
import { environment } from 'src/environments/environment';

const URL: any = `${environment.API_URL}api/addresscompanies`;

interface IAddressCompaniesResponse {
  data: IAddressCompanies[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})


export class AddressCompanyService {


  getAddressCompany(company: number): Observable<IAddressCompaniesResponse> {
    return this.http.get<IAddressCompaniesResponse>(`${URL}/company/${company}`)
  }

  getAddressCompanyId(id: any): Observable<IAddressCompanies> {
    return this.http.get<IAddressCompanies>(`${URL}/id/${id}`)
  }


  constructor(
    protected http: HttpClient,
  ) { }

  save(record: IAddressCompanies) {
    if (record.id) {
      return this.update(URL, record);
    }
    return this.create(URL, record);
  }

  private create(url: any, record: IAddressCompanies) {
    return this.http.post<IAddressCompaniesResponse>(`${url}`, record);
  }

  private update(URL: any, record: IAddressCompanies) {
    return this.http.put<IAddressCompaniesResponse>(`${URL}`, record);
  }

  public delete(id: number){
    return this.http.delete(`${URL}/${id}`);
  }

 

}
