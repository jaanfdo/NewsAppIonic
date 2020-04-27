import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { NewsOneModelPage } from '../news-one-model/news-one-model.page';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.page.html',
  styleUrls: ['./news-category.page.scss'],
})
export class NewsCategoryPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService, public modalController: ModalController) { }

  ngOnInit() {
    this.newsService
      .data('top-headlines?category=technology')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  async NewsOne(article) {
    const modal = await this.modalController.create({
      component: NewsOneModelPage,
      componentProps: {
        'article': article,
      }
    });
    return await modal.present();
  }
}
