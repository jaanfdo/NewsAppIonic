import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
const API_URL = environment.ApiUrl;
const API_KEY = environment.ApiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) { }

  data(url) {
    return this.http.get(API_URL + '/' + url + '&apiKey=' + API_KEY);
  }
}
