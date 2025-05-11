import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-subir-episodio',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './subir-episodio.component.html',
  styleUrls: ['./subir-episodio.component.css']
})
export class SubirEpisodioComponent implements OnDestroy{
  videoFile: File | null = null;
  videoUrl: string | null = null;
  
  episode = {
    title: ''
  };

  onFileSelected(event: any) {
    // Primero limpiar la vista previa
    this.videoUrl = null;
    
    // Pequeño delay para asegurar que Angular actualice el DOM
    setTimeout(() => {
      const file: File = event.target.files[0];
      
      if (file) {
        this.videoFile = file;
        
        // Liberar URL anterior si existe
        if (this.videoUrl) {
          URL.revokeObjectURL(this.videoUrl);
        }
        
        // Crear nueva URL
        this.videoUrl = URL.createObjectURL(file);
      }
    }, 100);
  }

  onSubmit(form: NgForm) {
    if (this.videoFile && form.valid) {
      // Aquí iría la lógica para subir el video 
      console.log('Subiendo video:', {
        file: this.videoFile,
        title: this.episode.title
      });
      
      // Limpiar después de subir
      this.videoFile = null;
      this.videoUrl = null;
      this.episode.title = '';
      form.resetForm();
    }
  }

  ngOnDestroy() {
    // Liberar la URL cuando el componente se destruye
    if (this.videoUrl) {
      URL.revokeObjectURL(this.videoUrl);
    }
  }
}