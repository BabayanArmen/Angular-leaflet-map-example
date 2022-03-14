import { Component, OnInit } from '@angular/core';
import { AService } from 'src/app/modules/a/services/a.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-bhome',
  templateUrl: './bhome.component.html',
  styleUrls: ['./bhome.component.scss'],
  providers: [CommonService]
})
export class BHomeComponent implements OnInit {

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
