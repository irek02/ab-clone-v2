import { Component, OnInit, Input } from '@angular/core';
import { HomeExtended } from '../../containers/home-container/home-container.component';

@Component({
  selector: 'app-home-host',
  templateUrl: './home-host.component.html',
  styleUrls: ['./home-host.component.less']
})
export class HomeHostComponent implements OnInit {

  @Input() home: HomeExtended;

  constructor() { }

  ngOnInit() {
  }

}
