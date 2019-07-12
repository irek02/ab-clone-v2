import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { DataState, DataService } from '../../../core/services/data.service';
import { Filters, HomeTypes, FilterBarState } from '../../../core/containers/header-container/header-container.component';
import { Router } from '@angular/router';

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
export class HomeListContainerComponent implements OnInit, OnDestroy {

  homes$: Observable<DataState<Home[]>>;
  filterBarState$ = new BehaviorSubject<FilterBarState>({ homeType: { open: false, filters: [] } });
  subscription: Subscription;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.homes$ = this.dataService.getHomes$();

    this.subscription = this.dataService.getFiltersFromUrlQueryParams().subscribe((filters: Filters) => {

      const filterBarState = this.filterBarState$.getValue();
      filterBarState.homeType.filters = filters.homeType;

      this.filterBarState$.next(filterBarState);

      this.dataService.loadHomes(filters);

    });

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

  toggleFilterDropdown(filter: string) {

    const filters = this.filterBarState$.getValue();
    filters[filter].open = !filters[filter].open;

    this.filterBarState$.next(filters);

  }

  closeFilterDropdown(filter: string) {

    const filters = this.filterBarState$.getValue();
    filters[filter].open = false;

    this.filterBarState$.next(filters);

  }

  applyFilters(filters: Filters) {

    this.closeFilterDropdown('homeType');

    this.router.navigate(['homes'], { queryParams: { 'home-type': filters.homeType } });

  }

}
