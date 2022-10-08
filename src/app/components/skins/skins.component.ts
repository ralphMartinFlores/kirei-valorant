import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var bootstrap: any;

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {

  baseurl = 'https://valorant-api.com/v1'; 
  weapon_id: string;
  weapon_id_decoded: string;
  skins_array: any = [];
  chromas_array: any = [];
  term: any;
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSkins();
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

  getSkins() {
    this.weapon_id_decoded = localStorage.getItem("Weapon ID") as string;
    this.weapon_id = window.atob(this.weapon_id_decoded);
    this.http.get(this.baseurl + '/weapons/' + this.weapon_id).subscribe((skins: any) => {
      this.skins_array = skins.data.skins;
      console.log("Skins", this.skins_array);
    })
  }

  openChromasModal() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    myModal.show();
    // this.http.get(this.baseurl + '/weapons/' + weapon_id).subscribe((weapon: any) => {
    //   this.chromas_array.push(weapon.data);
    //   myModal.show();
    //   console.log("Chromas", this.chromas_array);
    // })
  }

}
