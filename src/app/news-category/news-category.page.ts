import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';

import { ModalController, LoadingController } from '@ionic/angular';
import { NewsOneModelPage } from '../news-one-model/news-one-model.page';
import { Categories } from '../value';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.page.html',
  styleUrls: ['./news-category.page.scss'],
})
export class NewsCategoryPage implements OnInit {
  data: any;
  category: any;
  onecategory: any;
  defaultFilter: any;
  loading: any;

  customAlertOptions: any = {
    header: 'Category',
    translucent: true
  };

  constructor(private newsService: NewsService, public modalController: ModalController,
    private _Avroute: ActivatedRoute, public loadingController: LoadingController) {
    this.category = Categories;
    let id = this._Avroute.snapshot.paramMap.get('category');
    if (id !== null && id !== undefined && id !== '') {
      this.defaultFilter = id;
      this.GetNews(id);
    } else {
      id = this.category[0]['id'];
      this.defaultFilter = id;
      this.GetNews(id);
    }
  }

  ngOnInit() {

  }

  OnChange(event) {
    //alert("You are selected : " + event.target.value);
    this.GetNews(event.target.value);
  }

  async GetNews(item: any) {
    //this.presentLoading();
    // const loading = await this.loadingController.create({
    //   message: 'Loading...',
    //   duration: 5000
    // });
    // await loading.present();
    // console.log('Loading...');
    this.onecategory = this.category.filter(p => p.id.indexOf(item) >= 0)[0];
    console.log(this.onecategory);
    await this.newsService
      .data('top-headlines?category=' + item)
      .subscribe(data => {
        console.log(data);
        this.data = data;
        //this.dismissLoading();
        //loading.onDidDismiss();
        //console.log('Loading dismissed!');
      });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await this.loading.present();
    console.log('Loading...');
  }

  async dismissLoading() {
    await this.loadingController.dismiss(null, null, null);
    console.log('Loading dismissed!');
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
