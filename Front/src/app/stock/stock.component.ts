import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from '../Services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  public selectedArticles = new Set<Article>();

  constructor(public articleService: ArticleService) { }

  public ngOnInit(): void {
  }

  public remove()  {
    console.log('Remove');
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.clear();
  }

  public toggle(a: Article) {
    console.log('Toggle', a);
    if (this.selectedArticles.has(a)){
      this.selectedArticles.delete(a);
      return;
    }

    this.selectedArticles.add(a);
  }
}
