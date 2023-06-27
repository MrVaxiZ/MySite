import { Component, OnInit } from '@angular/core';
import { PanZoomConfig, PanZoomConfigOptions } from 'ngx-panzoom';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent implements OnInit {

  panZoomConfig: PanZoomConfig = new PanZoomConfig();

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.panZoomConfig.zoomOnDoubleClick = true;
  }

}
