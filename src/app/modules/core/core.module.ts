import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavComponent, HeaderContainerComponent],
  imports: [
    CommonModule,
    ClickOutsideModule,
    HttpClientModule
  ],
  exports: [HeaderContainerComponent]
})
export class CoreModule { }
