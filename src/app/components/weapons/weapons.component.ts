import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  baseurl = 'https://valorant-api.com/v1';
  weapon_id_encoded: any;
  weapons_array: any[] = [];
  single_weapon_array: any = [];
  view_skin_weapon_array: any = [];
  term: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getWeaponsList();
  }

  getWeaponsList() {
    this.http.get(this.baseurl + '/weapons').subscribe((weapons: any) => {
      this.weapons_array = weapons.data;
      console.log("Weapons", this.weapons_array);
    })
  }

  openDetailsModal(weapon_id: string) {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    myModal.show();
    this.http.get(this.baseurl + '/weapons/' + weapon_id).subscribe((weapon: any) => {
      this.single_weapon_array.push(weapon.data);
      console.log("Weapon Data", this.single_weapon_array);
    })
  }

  closeDetailsModal() {
    this.single_weapon_array.length = 0;
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    myModal.hide();
    console.log("Weapon Data", this.single_weapon_array);
  }

  viewSkins(weapon_id: string) {
    this.weapon_id_encoded = window.btoa(weapon_id);
    localStorage.setItem("Weapon ID", this.weapon_id_encoded);
    this.router.navigate(['skins']);
  }

}
