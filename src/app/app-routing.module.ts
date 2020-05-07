import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-one', loadChildren: './news-one/news-one.module#NewsOnePageModule' },
  { path: 'news-category', loadChildren: './news-category/news-category.module#NewsCategoryPageModule' },
  { path: 'news-country', loadChildren: './news-country/news-country.module#NewsCountryPageModule' },
  { path: 'news-sources', loadChildren: './news-sources/news-sources.module#NewsSourcesPageModule' },
  { path: 'newssources/:source/:sourcename', loadChildren: './news-list/news-list.module#NewsListPageModule' },
  { path: 'newscategory/:category', loadChildren: './news-category/news-category.module#NewsCategoryPageModule' },
  { path: 'newscountry/:country', loadChildren: './news-country/news-country.module#NewsCountryPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
