export const FrontendTech = [
  "ReactJS",
  "ReactNative",
  "Flutter",
  "Ionic",
  "Angular",
  "Vanilla (HTML, CSS, JS)",
  "Bootstrap",
  "jQuery",
  "Redux"
] as const;

export const BackendTech = [
  "Node.js",
  "Springboot",
  "ASP.Net"
] as const;

export const OtherTech = [
  "Firebase",
  "AWS"
] as const;

const Technologies = [...FrontendTech, ...BackendTech, ...OtherTech] as const;

type Technology = typeof Technologies[number];

export default Technology;