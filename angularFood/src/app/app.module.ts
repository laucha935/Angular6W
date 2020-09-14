import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { FoodDescComponent } from './food-desc/food-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFoodComponent,
    FoodDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
