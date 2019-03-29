import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.page.html',
  styleUrls: ['./news-one.page.scss'],
})
export class NewsOnePage implements OnInit {
  article;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log(this.newsService.currentArticle);
    this.article = this.newsService.currentArticle;
  }



}
