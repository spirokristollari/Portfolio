import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animationState: 'One' }  },
  { path: 'about', component: AboutComponent, data: { animationState: 'Two' } },
  { path: 'projects', component: ProjectsComponent, data: { animationState: 'Three' } },
  { path: 'skills', component: SkillsComponent, data: { animationState: 'Four' } },
  { path: '**', redirectTo: 'projects'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
