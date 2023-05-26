interface ProjectProps {
  children?: React.ReactNode | React.ReactNode[]
  title: string;
  description: string;
}

type ProjectPropsImg = ProjectProps & {
  image: string;
}