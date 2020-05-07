import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Country } from '../value';
import { NewsOneModelPage } from '../news-one-model/news-one-model.page';

@Component({
  selector: 'app-news-country',
  templateUrl: './news-country.page.html',
  styleUrls: ['./news-country.page.scss'],
})
export class NewsCountryPage implements OnInit {
  data: any;
  country: any;
  onecountry: any;
  defaultFilter: any;
  constructor(private newsService: NewsService, private router: Router, private _Avroute: ActivatedRoute,
    public modalController: ModalController) {
    this.country = Country;
    let id = this._Avroute.snapshot.paramMap.get('country');
    if (id !== null && id !== undefined && id !== '') {
      this.defaultFilter = id;
      this.GetNews(id);
    } else {
      id = this.country[0]['id'];
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
  GetNews(item: any) {
    //this.countryTitle = item.name;
    this.onecountry = this.country.filter(p => p.id.indexOf(item) >= 0)[0];
    this.newsService
      .data('top-headlines?country=' + item)
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
