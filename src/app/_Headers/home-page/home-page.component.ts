import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  hideContentAfterDiv: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isRouteActive(routePath: string): boolean {
    return this.router.url === routePath;
  }
}
