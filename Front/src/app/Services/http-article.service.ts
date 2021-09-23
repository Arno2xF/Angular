import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';

const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(protected http: HttpClient) {
    super();
    console.log('http service');
    this.refresh();
  }

  public addArticle(article: Article) {
    super.addArticle(article);
    this.http.post<void>(url, article).subscribe({
      next: () => {
        console.log('Success');
        this.refresh();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }

  public refresh() {
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        console.log('data: ', articles);
        this.articles = articles;
        this.save();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }
}
