import { Component, HostListener, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var bootstrap: any;

@Component({
  selector: 'app-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.scss']
})
export class AgentsListComponent implements OnInit {

  baseurl = 'https://valorant-api.com/v1'; 
  agents_array: any = [];
  single_agent_array: any = [];
  role_array: any = [];
  term: any;
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAgentsList();
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

  getAgentsList() {
    this.http.get(this.baseurl + '/agents').subscribe((agents: any) => {
      this.agents_array = agents.data;
      console.log("Agents", this.agents_array);
    })
  }

  getSingleAgent(agent_id: string) {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    this.http.get(this.baseurl + '/agents/' + agent_id).subscribe((agent: any) => {
      this.single_agent_array.push(agent.data);
      this.role_array.push(agent.data.role);
      myModal.show();
      console.log("Agent Info", this.single_agent_array);
      console.log("Role Info", this.role_array);
    })
  }

  closeSingleAgentModal() {
    this.single_agent_array.length = 0;
    this.role_array.length = 0;
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    myModal.hide();
  }

}
