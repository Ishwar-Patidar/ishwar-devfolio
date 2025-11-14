import bootstrapImg from "../assets/images/skills/bootstrap.png";
import htmlImg from "../assets/images/skills/html5.png";
import cssImg from "../assets/images/skills/css3.png";
import reactImg from "../assets/images/skills/react.png";
import nestImg from "../assets/images/svg/nestjs.svg";
import nodejsImg from "../assets/images/skills/nodejs.png";
import typescriptImg from "../assets/images/skills/typescript.png";
import javaScriptImg from "../assets/images/skills/js.png";
import mongodbImg from "../assets/images/skills/mongodb.png";
import mysqlImg from "../assets/images/svg/mysql.svg";
import gitImg from "../assets/images/svg/git.svg";

export interface SkillsInterface {
  level: number;
  name: string;
  imgPath: string;
}

export const SkillsData: SkillsInterface[] = [
  { name: "ReactJS", level: 90, imgPath: reactImg },
  { name: "NestJS", level: 90, imgPath: nestImg },
  { name: "NodeJS", level: 80, imgPath: nodejsImg },
  { name: "JavaScript", level: 80, imgPath: javaScriptImg },
  { name: "TypeScript", level: 80, imgPath: typescriptImg },
  { name: "HTML5", level: 90, imgPath: htmlImg },
  { name: "CSS3", level: 90, imgPath: cssImg },
  { name: "Bootstrap", level: 90, imgPath: bootstrapImg },
  { name: "MongoDB", level: 85, imgPath: mongodbImg },
  { name: "MySQL", level: 85, imgPath: mysqlImg },
  { name: "Git / GitHub / GitLab", level: 85, imgPath: gitImg },
];
