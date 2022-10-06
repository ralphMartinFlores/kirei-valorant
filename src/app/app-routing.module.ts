import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { BundlesComponent } from './components/bundles/bundles.component';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';
import { PlayercardsComponent } from './components/playercards/playercards.component';
import { SkinsComponent } from './components/skins/skins.component';
import { WeaponsComponent } from './components/weapons/weapons.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agents', component: AgentsListComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'skins', component: SkinsComponent },
  { path: 'playercards', component: PlayercardsComponent },
  { path: 'bundles', component: BundlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
