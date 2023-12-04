import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { HomeComponent } from './sections/home/home.component';
import { UpgradePopupComponent } from './upgrade-popup/upgrade-popup.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FlipCardComponent,
    HomeComponent,
    UpgradePopupComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
