import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss']
})
export class BundlesComponent implements OnInit {

  baseurl = 'https://valorant-api.com/v1'; 
  bundles_array: any = [];
  term: any;
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBundles()
  }

  @HostListener('window:scroll')
  checkScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  getBundles() {
    this.http.get(this.baseurl + '/bundles').subscribe((bundles: any) => {
      this.bundles_array = bundles.data;
      console.log("Bundles", this.bundles_array);
    })
  }

}
