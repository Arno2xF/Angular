import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([]);

  constructor() {
    this.articles$.subscribe({
      next: (articles) => {
        localStorage.setItem('articles', JSON.stringify(articles));
      },
    });
  }

  public addArticle(article: Article) {
    this.articles$.value.push(article);
    this.articles$.next(this.articles$.value);
  }

  public readArticle(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str);
  }

  public remove(selectedArticles: Set<Article>) {
    const articles = this.articles$.value.filter(
      (a) => !selectedArticles.has(a)
    );
    this.articles$.next(articles);
  }
}
