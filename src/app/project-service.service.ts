import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../../model/tags';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/projects/all');
  }
}
