import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Podcast } from '../models/podcast.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  // Reemplaza esta URL con la de tu backend Django
  private apiUrl = 'http://tu-backend-django.com'; // Sin /api si ya está incluido en la ruta

  constructor(private http: HttpClient) { }

  getPodcastsByCreator(creatorId: number) {
    return this.http.get<{podcasts: Podcast[]}>(`${this.apiUrl}/podcasts_por_creador/${creatorId}`);
  }
}