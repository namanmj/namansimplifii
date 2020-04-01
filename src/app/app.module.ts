import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeftsectionComponent } from './leftsection/leftsection.component';
import { RightsectionComponent } from './rightsection/rightsection.component';
import { ArraysectionComponent } from './arraysection/arraysection.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftsectionComponent,
    RightsectionComponent,
    ArraysectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
