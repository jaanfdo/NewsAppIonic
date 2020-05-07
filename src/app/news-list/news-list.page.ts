import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  data:any;
  title:any;
  constructor(private newsService: NewsService, private router: Router, private _Avroute: ActivatedRoute) { }

  ngOnInit() {
    this.getNews();
  }

  NewsOne(article) {
    this.newsService.currentArticle = article;
    console.log(this.newsService.currentArticle);
    this.router.navigate(['/news-one']);
  }

  getNews(): void {
    this.title = this._Avroute.snapshot.paramMap.get('sourcename');
    const id = this._Avroute.snapshot.paramMap.get('source');
    if (id !== null && id !== undefined && id !== '') {
      this.newsService
        .data('top-headlines?sources=' + id)
        .subscribe(data => {
          console.log(data);
          this.data = data;
        });
    }
  }
}
