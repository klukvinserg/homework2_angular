import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemNewsComponent } from './item-news/item-news.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsListComponent } from './news-list/news-list.component';



const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'card/:id', component: NewsCardComponent},
  {path: 'item-news', component: ItemNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
