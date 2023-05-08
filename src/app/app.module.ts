import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EducationComponent } from './_Headers/education/education.component';
import { SkillsComponent } from './_Headers/skills/skills.component';
import { WorkExperienceComponent } from './_Headers/work-experience/work-experience.component';
import { FeaturedProjectsComponent } from './_Headers/featured-projects/featured-projects.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    FeaturedProjectsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
