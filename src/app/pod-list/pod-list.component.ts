// pod-list.component.ts

import { Component, OnInit } from '@angular/core';
import { KubernetesService } from '../kubernetes.service';

interface KubernetesResponse {
  items?: any[];
}

@Component({
  selector: 'app-pod-list',
  templateUrl: './pod-list.component.html',
  styleUrls: ['./pod-list.component.css']
})
export class PodListComponent implements OnInit {
  pods: any[] = [];

  constructor(private kubernetesService: KubernetesService) { }

  ngOnInit(): void {
    this.loadPods();
  }

  loadPods() {
    this.kubernetesService.getPods().subscribe(
      (data: KubernetesResponse) => {
        this.pods = data.items || [];
      },
      (error: any) => {
        console.error('Error fetching pods:', error);
      }
    );
  }
}
