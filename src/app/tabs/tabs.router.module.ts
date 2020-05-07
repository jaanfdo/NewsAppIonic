import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: '../news-category/news-category.module#NewsCategoryPageModule'
          }
        ]
      },
      {
        path: 'country',
        children: [
          {
            path: '',
            loadChildren: '../news-country/news-country.module#NewsCountryPageModule'
          }
        ]
      },
      {
        path: 'category/:category',
        children: [
          {
            path: '',
            loadChildren: '../news-category/news-category.module#NewsCategoryPageModule'
          }
        ]
      },
      {
        path: 'country/:country',
        children: [
          {
            path: '',
            loadChildren: '../news-country/news-country.module#NewsCountryPageModule'
          }
        ]
      },
      {
        path: 'source',
        children: [
          {
            path: '',
            loadChildren: '../news-sources/news-sources.module#NewsSourcesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
