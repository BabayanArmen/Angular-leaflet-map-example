import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  private title: string = "";

  constructor() { }

  setTitle(title: string) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }
}
