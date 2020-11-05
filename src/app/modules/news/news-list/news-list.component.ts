import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private newsService: NewsService) { }

  restList = [];

  ngOnInit(): void {
    this.newsService.getData().subscribe(res => {
      this.restList = res;
    });
   }

   ngAfterViewInit() {
    console.log('ngAfterViewOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}


