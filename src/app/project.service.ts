import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, Observable } from 'rxjs';
import Project, { getExpressiveId } from './types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projectsUrl = "api/projects";

  constructor(private http:HttpClient) {
  }
  
  getProjectRouterLink(project:Project){
    return '/project/' + getExpressiveId(project)
  }

  getProjects(){
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProjectById(id:number){
    return this.http.get<Project>(`${this.projectsUrl}/${id}`);
  }

  getProjectTitles():Observable<string[]>{
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      map((projects) => projects.map(project => project.title))
    )
  }

}
