import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { Reason } from 'src/app/_models/reason';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  reasons: Reason[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getReasons()
      .subscribe(
        (data: Reason[]) => {
          this.reasons = data;
        }
      );
  }

}
