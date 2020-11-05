import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { ItemNewsComponent } from './item-news/item-news.component';
import { NewsCardComponent } from './news-card/news-card.component';


@NgModule({
  declarations: [NewsListComponent, ItemNewsComponent, NewsCardComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
