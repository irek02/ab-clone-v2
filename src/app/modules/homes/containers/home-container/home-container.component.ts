import { Component, OnInit } from '@angular/core';
import { DataService, DataState } from 'src/app/modules/core/services/data.service';
import { Observable } from 'rxjs';
import { HomeTypes } from 'src/app/modules/core/containers/header-container/header-container.component';

export interface HomeExtended {
  type: HomeTypes;
  title: string;
  location: string;
  price: number;
  image_urls: string[];
  rating: {
    count: number;
    stars: number;
  };
  description: string;
  amenities: { name: string; status: string; }[];
  reviews: { name: string; date: string; review: string; }[];
  host: {
    name: string,
    location: string,
    joined: string,
    reviews: number,
    verified: boolean,
    response_time: string,
    image_url: string
  };
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less']
})
export class HomeContainerComponent implements OnInit {

  home$: Observable<DataState<HomeExtended>>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.home$ = this.dataService.getHome$();

    this.dataService.loadHome();

  }

}
