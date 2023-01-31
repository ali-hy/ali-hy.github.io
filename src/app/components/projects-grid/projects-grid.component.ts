import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/project.service';
import Project, { getGithubRepoUrl } from 'src/app/types/project';


@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss']
})
export class ProjectsGridComponent implements OnInit {
  $projects!:Observable<Project[]>;

  constructor(
    private projectService:ProjectService
  ) { }

  getGithubRepoUrl(project:Project){
    return getGithubRepoUrl(project);
  }

  ngOnInit(): void {
    this.$projects = this.projectService.getProjects();
  }

}
