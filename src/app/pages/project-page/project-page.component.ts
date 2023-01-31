import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/project.service';
import Project, { getIdFromExpressiveId } from 'src/app/types/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  extractedId !: number;
  $project !: Observable<Project>;

  constructor(
    private route:ActivatedRoute,
    private projectService:ProjectService
    ){
  }

  ngOnInit(){
    this.extractedId = getIdFromExpressiveId(this.route.snapshot.paramMap.get('id'))
    this.$project = this.projectService.getProjectById(this.extractedId);
  }
}
