import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { SkinsComponent } from './components/skins/skins.component';
import { PlayercardsComponent } from './components/playercards/playercards.component';
import { BundlesComponent } from './components/bundles/bundles.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AgentsListComponent,
    HomeComponent,
    MapsComponent,
    WeaponsComponent,
    SkinsComponent,
    PlayercardsComponent,
    BundlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
