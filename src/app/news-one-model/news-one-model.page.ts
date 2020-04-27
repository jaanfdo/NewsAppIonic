import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-news-one-model',
  templateUrl: './news-one-model.page.html',
  styleUrls: ['./news-one-model.page.scss'],
})
export class NewsOneModelPage implements OnInit {

  @Input() article: any;

  constructor(public navParams: NavParams, private modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get('article'));
    this.article = navParams.get('article');
  }

  ngOnInit(): void {
  }

  async closeModal() {
    // const onClosedData: string = "Wrapped Up!";
    // await this.modalController.dismiss(onClosedData);
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
