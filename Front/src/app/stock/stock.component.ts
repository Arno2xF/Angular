import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  articles: Article[] = [
    {
      name: 'Tournevis', price: 2.99, qty: 120
    },
    {
      name: 'Marteau', price: 7.90, qty: 45
    },
    {
      name: 'Perceuse', price: 25.99, qty: 180
    },
    {
      name: 'Pelle', price: 15.00, qty: 7
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
