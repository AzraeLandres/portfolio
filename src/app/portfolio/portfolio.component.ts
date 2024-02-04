import { Component, OnInit } from '@angular/core';

import { ProjectServiceService } from '../project-service.service';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectServiceService) {}

  ngOnInit(): void {}
}
