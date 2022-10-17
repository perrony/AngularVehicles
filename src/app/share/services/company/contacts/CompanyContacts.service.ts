import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompanyContacts } from 'src/app/share/models/companies/CompanyContacts';

import { environment } from 'src/environments/environment';

const URL = `${environment.API_URL}api/contatoempresa`

@Injectable({
  providedIn: 'root'
})
export class CompanyContactsService {

  loadCompanyContacts(empresa: number): Observable<ICompanyContacts> {
    return this.http.get<ICompanyContacts>(`${URL}/empresa/${empresa}`);
  }



  constructor(
    private http: HttpClient
  ) { }


  private create(url: any, record: ICompanyContacts) {
    return this.http.post(URL, record)
  }

  private update(URL: any, record: ICompanyContacts) {
    return this.http.put(URL, record)
  }

  save(record: ICompanyContacts) {

    if (record.id) {
      return this.update(URL, record);
    }
    return this.create(URL, record);

  }

  public delete(id: number){
    return this.http.delete(`${URL}/${id}`);
  }

}
