import { Component, OnInit } from '@angular/core';
import { HomeTypes } from 'src/app/modules/core/containers/header-container/header-container.component';

export interface Home {
  type: HomeTypes;
  title: string;
  location: string;
  price: number;
  image_url: string;
  rating: {
    count: number;
    stars: number;
  };
}

@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less']
})
export class HomeListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
