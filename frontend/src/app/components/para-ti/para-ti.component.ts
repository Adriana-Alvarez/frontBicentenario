import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface PodcastData {
  id: number;
  titulo: string;
  premium: boolean;
  creadores_idcreador: number;
  creator_name?: string;
  upload_date?: string;
  duration?: string;
  tematicas?: string[];
  thumbnail_url?: string;
}

@Component({
  selector: 'app-para-ti',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './para-ti.component.html',
  styleUrl: './para-ti.component.css'
})
export class ParaTiComponent implements OnInit {
  podcasts: PodcastData[] = [];
  private apiUrl = '/'; // Aqui se pone el endpoint del backend para las recomendaciones

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRecommendedPodcasts();
  }

  fetchRecommendedPodcasts(): void {
    this.http.get<PodcastData[]>(this.apiUrl).subscribe(
      (data) => {
        this.podcasts = data;
        console.log('Recommended Podcasts fetched:', this.podcasts);
      },
      (error) => {
        console.error('Error fetching recommended podcasts:', error);
      }
    );
  }
}