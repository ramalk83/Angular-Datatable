import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {ResDataModal} from '../modals/resDataModal';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  apiUrl='https://jsonplaceholder.typicode.com/todos';

 constructor(private http:HttpClient) {}

  getData(): Observable<ResDataModal>{
   return this.http.get<ResDataModal>(this.apiUrl)
  }

}
