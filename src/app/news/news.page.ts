import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { Categories, Country } from '../value';
import { ModalController } from '@ionic/angular';
import { NewsOneModelPage } from '../news-one-model/news-one-model.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  selectedArticle: any;
  category: any;
  country: any;
  sources: any;

  constructor(private newsService: NewsService, private router: Router, public modalController: ModalController) {
    this.category = Categories;
    this.country = Country;
    this.newsService
      .sourcedata('sources')
      .subscribe(data => {
        console.log(data);
        this.sources = data;
      });
  }

  ngOnInit() {
    this.newsService
      .data('top-headlines?sources=techcrunch')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }
  NewsOne(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-one']);
  }

  async NewsCatgeory(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-one']);

    const modal = await this.modalController.create({
      component: NewsOneModelPage,
      componentProps: {
        'article': article,
      }
    });
    return await modal.present();
  }

  async NewsCountry(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-one']);

    const modal = await this.modalController.create({
      component: NewsOneModelPage,
      componentProps: {
        'article': article,
      }
    });
    return await modal.present();
  }

  async NewsSource(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-one']);

    const modal = await this.modalController.create({
      component: NewsOneModelPage,
      componentProps: {
        'article': article,
      }
    });
    return await modal.present();
  }
}
