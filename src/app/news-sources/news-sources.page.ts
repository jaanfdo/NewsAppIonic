import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-sources',
  templateUrl: './news-sources.page.html',
  styleUrls: ['./news-sources.page.scss'],
})
export class NewsSourcesPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService) {
    this.newsService
      .sourcedata('sources')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  ngOnInit() {
  }
}
