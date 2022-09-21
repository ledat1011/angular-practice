import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-obs-sim-detail',
  templateUrl: './obs-sim-detail.component.html',
  styleUrls: ['./obs-sim-detail.component.css']
})
export class ObsSimDetailComponent implements OnInit {
  @Input() data?: string;

  @Output() newItemEvent = new EventEmitter<string>();
  value = "";
  constructor(private route: ActivatedRoute, private router: Router) {

    if (route.snapshot.data["value"]) {
      this.value = route.snapshot.data["value"];
    }
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        console.log(data);

        // …
      });
  }

}
