import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  hideContentAfterDiv: boolean = false;
  showPhoneInfo = false;
  showEmailInfo = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isRouteActive(routePath: string): boolean {
    return this.router.url === routePath;
  }

  toggleContactInfo(infoType: string) {
    if(infoType === 'phone') {
      this.showPhoneInfo = !this.showPhoneInfo
    } else if (infoType === 'email') {
      this.showEmailInfo = !this.showEmailInfo
    }
  }
}
