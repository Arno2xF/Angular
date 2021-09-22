import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articles!: Article[];

  constructor() { 
    this.load();
  }

  public addArticle(article: Article) {
    this.articles.push(article);
    this.save();
  }

  public load() {
    const str = localStorage.getItem("articles");
    if (!str) {
      this.articles = [
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
      return;
    }
    this.articles = JSON.parse(str);
  }

  public save() {
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }
}
