import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private selected: News;

  getSelectedNews(): News {
    return this.selected;
  }

  setSelectedNews(news: News) {
    this.selected = news;
  }

  getData(): Observable<News[]>{
    return this.http.get<News[]>('assets/news.json');
}

getDataById(id): Observable<News> {
  return this.http.get<News[]>('assets/news.json').pipe(map((res: any) => {
     return res.find(item => item.id === id);
  }));
}

}
