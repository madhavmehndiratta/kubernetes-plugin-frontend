// kubernetes.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface KubernetesResponse {
  items?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class KubernetesService {
  private apiUrl = 'http://127.0.0.1:8002/api/v1';

  constructor(private http: HttpClient) { }

  getPods(): Observable<KubernetesResponse> { // Adjust return type to Observable<KubernetesResponse>
    return this.http.get<KubernetesResponse>(`${this.apiUrl}/pods`);
  }
}
