import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AService } from '../../services/a.service';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.scss'],
  providers: [CommonService]
})
export class AHomeComponent implements OnInit {

  constructor(public aService: AService, public commonService: CommonService) { }

  ngOnInit(): void {
  }

  setName(name: string) {
    this.aService.setName(name)
  }

  setTitle(title: string) {
    this.commonService.setTitle(title);
  }

}
