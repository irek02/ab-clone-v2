import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomesRoutingModule } from './homes-routing.module';
import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterHomeTypeFormComponent } from './components/filter-home-type-form/filter-home-type-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeImageGalleryComponent } from './components/home-image-gallery/home-image-gallery.component';
import { HomeReserveComponent } from './components/home-reserve/home-reserve.component';
import { HomeMapComponent } from './components/home-map/home-map.component';
import { HomeHostComponent } from './components/home-host/home-host.component';

@NgModule({
  declarations: [
    HomeListContainerComponent,
    HomeListComponent,
    HomeComponent,
    HomeContainerComponent,
    FiltersComponent,
    FilterHomeTypeFormComponent,
    HomeImageGalleryComponent,
    HomeReserveComponent,
    HomeMapComponent,
    HomeHostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomesRoutingModule,
  ]
})
export class HomesModule { }
