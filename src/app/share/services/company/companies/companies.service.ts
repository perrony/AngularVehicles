import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICompanies } from 'src/app/share/models/companies/Companies';
import { environment } from 'src/environments/environment';


const URL = `${environment.API_URL}api/companies`;



interface ICompaniesResponse {
  data: ICompanies;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    protected http: HttpClient,
  ) { }

loadCompany(){
    return this.http.get<ICompaniesResponse>(URL);
 }

 private create(url: any, record: ICompanies) {
  return this.http.post<ICompaniesResponse>(URL, record)
}

private update(URL: any, record: ICompanies) {
  return this.http.put<ICompaniesResponse>(URL, record)
}

save(record: ICompanies) {

  if (record.id) {
    return this.update(URL, record);
  }
  return this.create(URL, record);

}

}
