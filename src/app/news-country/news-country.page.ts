import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-news-country',
  templateUrl: './news-country.page.html',
  styleUrls: ['./news-country.page.scss'],
})
export class NewsCountryPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService, private router: Router, public modalController: ModalController) { }


  ngOnInit() {
    this.newsService
      .data('top-headlines?country=us')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  NewsOne(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-one']);
  }
}
