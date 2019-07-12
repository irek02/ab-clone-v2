import { Component, OnInit, Input } from '@angular/core';
import { HomeExtended } from '../../containers/home-container/home-container.component';

@Component({
  selector: 'app-home-reserve',
  templateUrl: './home-reserve.component.html',
  styleUrls: ['./home-reserve.component.less']
})
export class HomeReserveComponent implements OnInit {

  @Input() home: HomeExtended;

  constructor() { }

  ngOnInit() {
  }

}
