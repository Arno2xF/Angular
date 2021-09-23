import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
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

  public load() {}

  public remove(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }

  public save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
