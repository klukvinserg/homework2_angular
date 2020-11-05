import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})

export class NewsCardComponent implements OnInit {

 currentId: number;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    route.params.subscribe(params => {
      this.currentId = +params.id;
      this.getData();
    });
  }

  currentItem: News;

  ngOnInit(): void {
  }

  getData() {
    if (this.newsService.getSelectedNews() && (this.newsService.getSelectedNews().id === this.currentId)) {
      this.currentItem = this.newsService.getSelectedNews();
    } else {
      this.getItemById(this.currentId);
    }
  }

  getItemById(id) {
    this.newsService.getDataById(id).subscribe(res => {
      this.currentItem = res;
    });

}
}
