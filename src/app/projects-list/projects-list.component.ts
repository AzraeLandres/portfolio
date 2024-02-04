import { Component, Input } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { Project, Skill, Tag } from '../../../model/tags';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css',
})
export class ProjectsListComponent {
  skills!: Skill[];
  tags!: Tag[];
  projects!: Project[];
  constructor(private projectService: ProjectServiceService) {}

  hasSkill(project: Project, skill: string): boolean {
    return project.skills.some((s) => s.name === skill);
  }

  hasTag(project: Project, tag: string): boolean {
    return project.tags.some((t) => t.name === tag);
  }
  displayProjects() {
    this.projectService.getProjects().subscribe((project: Project[]) => {
      console.log(project);

      for (let i = 0; i < project.length; i++) {
        console.log(project[i]);
      }

      this.projects = project;
    });
  }

  ngOnInit(): void {
    this.displayProjects();
  }
}
