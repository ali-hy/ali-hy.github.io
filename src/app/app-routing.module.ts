import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: "project/:id",
    component: ProjectPageComponent,
  },{
    path: "projects",
    component: ProjectsPageComponent
  },{
    path: "",
    component: HomepageComponent,
    pathMatch: "full"
  },{
    path:"**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
