import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articles: Article[] = [
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

  public addArticle(article: Article) {
    this.articles.push(article);
  }
}
