import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private activeTab: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.activeTab = params.id;
    });
  }

  ngOnInit() {
  }

}
