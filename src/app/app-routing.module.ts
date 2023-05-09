import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './_Headers/home-page/home-page.component';
import { EducationComponent } from './_Headers/education/education.component';
import { SkillsComponent } from './_Headers/skills/skills.component';
import { WorkExperienceComponent } from './_Headers/work-experience/work-experience.component';
import { FeaturedProjectsComponent } from './_Headers/featured-projects/featured-projects.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'featured-projects', component: FeaturedProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
