import { Injectable } from '@angular/core';

@Injectable()
export class AService {
  private name: string = ''

  constructor() { }

  setName(name: string) {
    this.name = name
  }

  getName() {
    return this.name;
  }
}
