import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-one', loadChildren: './news-one/news-one.module#NewsOnePageModule' },
  { path: 'news-country', loadChildren: './news-country/news-country.module#NewsCountryPageModule' },
  //{ path: 'news-category', loadChildren: './news-category/news-category.module#NewsCategoryPageModule' },
  //{ path: 'news-one-model', loadChildren: './news-one-model/news-one-model.module#NewsOneModelPageModule' },
  // { path: 'item', loadChildren: './item/item.module#ItemPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
