import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BHomeComponent } from './pages/bhome/bhome.component';



@NgModule({
  declarations: [
    BHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'b/home', component: BHomeComponent}
    ]),
  ]
})
export class BModule { }
