import { Component, OnInit } from '@angular/core';
import { DataService, DataState } from 'src/app/modules/core/services/data.service';
import { Observable } from 'rxjs';
import { Home } from '../home-list-container/home-list-container.component';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less']
})
export class HomeContainerComponent implements OnInit {

  home$: Observable<DataState<Home>>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.home$ = this.dataService.getHome$();

    this.dataService.loadHome();

  }

}
