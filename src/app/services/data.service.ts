import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency, ICurrencyRoot } from '../interfaces/currency.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
  
  apiURL: string = 'https://bankofgeorgia.ge/api/currencies/history/';

  getCurrencies() {
    // <> ამის შიგნით შეგვიძლია განვსაზღვროთ რა მონაცემები
    // მოგვდის სერვერიდან
    return this._http.get<ICurrencyRoot>(this.apiURL);
  }

}
