import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var bootstrap: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  baseurl = 'https://valorant-api.com/v1'; 
  maps_array: any = [];
  single_map_array: any = [];
  term: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMapsList();
  }

  getMapsList() {
    this.http.get(this.baseurl + '/maps').subscribe((maps: any) => {
      this.maps_array = maps.data;
      console.log("Maps", this.maps_array);
    })
  }

  getSingleMap(map_id: string) {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    this.http.get(this.baseurl + '/maps/' + map_id).subscribe((map: any) => {
      this.single_map_array.push(map.data);
      myModal.show();
      console.log("Map Info", this.single_map_array);
    })
  }

  closeSingleAgentModal() {
    this.single_map_array.length = 0;
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    myModal.hide();
  }

}
