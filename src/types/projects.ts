export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    githubUrl: string;
}

export type ProjectsData = Project[];