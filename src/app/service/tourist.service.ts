import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tourist} from "../model/tourist";

const API_TOURIST = 'http://localhost:8080/api/tourists'

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<Tourist[]> {
    return this._httpClient.get<Tourist[]>(API_TOURIST)
  }

  getById(id: String): Observable<Tourist> {
    return this._httpClient.get<Tourist>(API_TOURIST + `/${id}`)
  }
  delete(id: String) {
    return this._httpClient.delete<Tourist>(API_TOURIST + `/${id}`);
  }
  edit(id: string,tourist:Tourist):Observable<Tourist>{
    return this._httpClient.put<Tourist>(API_TOURIST + `/${id}`,tourist)
  }
  create(tourist:Tourist) : Observable<Tourist>{
    return this._httpClient.post<Tourist>(API_TOURIST,tourist)
  }
}

