import LearnedItem from "./learned-item";
import Technology from "./technology";

export default interface Project{
  id:number;
  title:string;
  technologies:Technology[];
  description:string;
  githubURL:string;
  websiteURL?:string;
  learnedItems:LearnedItem[];
}

export function getExpressiveId(project:Project):string{
  const modifiedTitle = project.title.replace(" ", "-");
  return String(project.id) + modifiedTitle;
}

export function getIdFromExpressiveId(expressiveId:string):number{
  const splitArray = expressiveId.split('-');
  return Number.parseInt(splitArray[0]);
}