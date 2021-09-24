import { Component, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.scss'],
})
export class ArticleTableComponent implements OnInit {
  public selectedArticles = new Set<Article>();
  constructor() {}

  @Input() articles: Article[] | null = [];
  @Output() articleToggle = new EventEmitter<Set<Article>>();
  ngOnInit(): void {}

  public toggle(a: Article) {
    console.log('Toggle', a);
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      this.articleToggle.emit(this.selectedArticles);
      return;
    }

    this.selectedArticles.add(a);
    this.articleToggle.emit(this.selectedArticles);
  }
}
