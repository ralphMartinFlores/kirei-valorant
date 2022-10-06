import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss']
})
export class BundlesComponent implements OnInit {

  baseurl = 'https://valorant-api.com/v1'; 
  bundles_array: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBundles()
  }

  getBundles() {
    this.http.get(this.baseurl + '/bundles').subscribe((bundles: any) => {
      this.bundles_array = bundles.data;
      console.log("Bundles", this.bundles_array);
    })
  }

}
