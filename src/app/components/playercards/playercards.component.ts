import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var bootstrap: any;

@Component({
  selector: 'app-playercards',
  templateUrl: './playercards.component.html',
  styleUrls: ['./playercards.component.scss']
})
export class PlayercardsComponent implements OnInit {

  baseurl = 'https://valorant-api.com/v1'; 
  cards_array: any = [];
  single_card_array: any = [];
  term: any;
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPlayerCards();
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

  getPlayerCards() {
    this.http.get(this.baseurl + '/playercards').subscribe((cards: any) => {
      this.cards_array = cards.data;
      console.log("Cards", this.cards_array);
    })
  }

  getSinglePlayerCard(playercard_uuid: string) {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    this.http.get(this.baseurl + '/playercards/' + playercard_uuid).subscribe((cards: any) => {
      this.single_card_array.push(cards.data);
      myModal.show();
      console.log("Card Data", this.single_card_array);
    })
  }

  closeSinglePlayerCard() {
    this.single_card_array.length = 0;
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    myModal.hide();
  }

}
