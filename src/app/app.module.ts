import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/map.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AModule } from './modules/a/a.module';
import { BModule } from './modules/b/b.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AModule,
    BModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
