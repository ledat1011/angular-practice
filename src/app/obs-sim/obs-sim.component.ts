import { Component, OnInit } from '@angular/core';
import { ObsSimService } from '../obs-sim.service';

import { MessageService } from '../message.service';
@Component({
  selector: 'app-obs-sim',
  templateUrl: './obs-sim.component.html',
  styleUrls: ['./obs-sim.component.css']
})
export class ObsSimComponent implements OnInit {
  app: ObsSimApp[] = [];
  constructor(private obsSimService: ObsSimService) { }

  ngOnInit(): void {
    this.getInfor();

  }

  toUpperCase(value: string): string {
    return value.toUpperCase();
  }

  changeAppName(value: any): void {
    console.log(value);

  }

  getInfor() {
    this.obsSimService.getInfor().subscribe(item => this.app = item);
  }

}

export interface ObsSimApp {
  id: number;
  name: string;
}
