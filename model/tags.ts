export interface Tag {
  id: number;
  name: string;
}

export interface Skill {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  name: string;
  about: string;
  link: string;
  tags: Tag[];
  skills: Skill[];
}
