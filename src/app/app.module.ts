import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MissionControlComponent } from './missioncontrol/missioncontrol.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { MissionService } from './services/mission.service'

@NgModule({
  declarations: [
    AppComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
