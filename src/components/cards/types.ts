import { ComponentChildren } from "@mae/misc/types";

export interface ProjectProps {
  children?: ComponentChildren
  title: string;
  description: string;
}

export type ProjectPropsImg = ProjectProps & {
  image: string;
}