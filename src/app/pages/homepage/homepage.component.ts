import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/project.service';
import Project from 'src/app/types/project';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  constructor(private projectService : ProjectService){
  }

  $projects !: Observable<Project[]>;

  getProjectRouterLink(project:Project){
    return this.projectService.getProjectRouterLink(project);
  }

  ngOnInit(): void {
    this.$projects = this.projectService.getProjects();
  }
}
