import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../../containers/home-list-container/home-list-container.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @Input() home: Home;

  constructor() { }

  ngOnInit() {
  }

}
