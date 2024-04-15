import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { ICurrency } from './interfaces/currency.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bog';


  currencies: ICurrency[] = [];
  constructor(private _dataService: DataService) {
    this._dataService.getCurrencies().subscribe((data) => {
      console.log(data.data);

      // პირდაპირ ის ნაწილი შევინახე სადაც იყო ინფორმაცია
      // თვითონ root ნაწილი დავაიგნორე
      this.currencies = data.data;
    })
  }
}
