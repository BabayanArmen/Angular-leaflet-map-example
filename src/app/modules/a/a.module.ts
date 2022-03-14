import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AHomeComponent } from './pages/ahome/ahome.component';
import { AService } from './services/a.service';




@NgModule({
  declarations: [
    AHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'a/home', component: AHomeComponent}
    ]),
  ],
  providers: [AService]
})
export class AModule { }
