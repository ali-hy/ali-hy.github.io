import LearnedItem from "./learned-item";
import Technology from "./technology";

export default interface Project{
  id:number;
  title:string;
  technologies:Technology[];
  description:string;
  githubRepoOwner?:string;
  githubRepoName:string;
  imageUrls:string[];
  websiteUrl?:string;
  learnedItems?:LearnedItem[];
}

export function getGithubRepoUrl(project:Project){
  return `https://github.com/${project.githubRepoOwner ? project.githubRepoOwner : 'ali-hy'}/${project.githubRepoName}`;
}

export function getExpressiveId(project:Project):string{
  const modifiedTitle = project.title.replace(" ", "-");
  return String(project.id) + '-' + modifiedTitle;
}

export function getIdFromExpressiveId(expressiveId:string|null):number{
  if(typeof expressiveId === null){
    window.alert("looking for id param when there isn't one");
  }
  const splitArray = (expressiveId as string).split('-');
  return Number.parseInt(splitArray[0]);
}