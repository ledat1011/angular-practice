import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ObsSimApp } from './obs-sim/obs-sim.component';

@Injectable({
  providedIn: 'root'
})
export class ObsSimService {

  constructor(private messageService: MessageService) { }

  getInfor(): Observable<ObsSimApp[]> {

    let obsApp: ObsSimApp[] = [
      {
        id: 1,
        name: "Upload Flow"
      },
      {
        id: 2,
        name: "Download Flow"
      },
      {
        id: 3,
        name: "Remote flow"
      }
    ]
    this.messageService.add("OKE NE");
    return of(obsApp);
  }
}
