import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import Project from "./types/project";

@Injectable({
  providedIn: 'root'
})
export class InMemoryProjectDataService implements InMemoryDbService{
  private readonly imagesPath = "../../../assets/project-images/";
  getImage(imageName:string){
    return this.imagesPath + imageName + ".png";
  }

  createDb(){
    const projects:Project[] = [
      {
        id: 0,
        title: "Wordle Replica",
        description:
          "my own remake of the popular internet game <a href='https://www.nytimes.com/games/wordle/index.html'>Wordle</a>", 
        technologies: ["ReactJS"],
        githubRepoName: "react-wordle",
        imageUrls: [this.getImage("wordle_screenshot")],
        websiteUrl: "https://ali-haitham-wordle.stackblitz.io"
      },{
        id: 1,
        title: "Noxe",
        description:
          "a web app that allows you to browse all the trending movies and tv-shows. It uses <a href='https://themoviedb.org'>themoviedb.org's</a> api",
        technologies: ["ReactJS", "Bootstrap"],
        githubRepoName: "noxe",
        imageUrls: [this.getImage("noxe_screenshot")],
        websiteUrl: "https://ali-haitham-noxe.web.app"
      },
      {
        id: 2,
        title: "Visual-sort",
        description: "a web app that can visualizes many of the more common sorting algorithms. The included sorting algorithms include (but are not limited to): selection sort, insertion sort, quick sort, merge sort, heap sort, radix sort", 
        technologies: ["ReactJS"],
        githubRepoName: "visual-sort",
        imageUrls:[this.getImage("visual_sort_screenshot")],
        websiteUrl: "https://visual-sort-98115.web.app/"
      },{
        id: 3,
        title: "Pheromone",
        description: "a static landing page, made as a replication of <a href='https://wordpress.dankov-themes.com/pheromone/#'>this webpage</a>. It is made fully responsive, with my own js for bootstrap components such as the navbar, carousels, and dropdowns.",
        technologies: ["Vanilla (HTML, CSS, JS)"],
        githubRepoName: "pheromone",
        imageUrls:[this.getImage("pheromone_screenshot")],
        websiteUrl: "https://visual-sort-98115.web.app/"
      }
    ];

    return {projects};
  }

  
}