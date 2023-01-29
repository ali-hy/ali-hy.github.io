import Technology from "./technology";

export default interface LearnedItem{
  title: Technology | string;
  changeType: "new" | "improved";
  description?:string;
}