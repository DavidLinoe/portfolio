import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{
  loading: boolean = true; // Estado de carregamento

  constructor() { }

  ngOnInit(): void {
    // Simulação de carregamento de imagens
    setTimeout(() => {
      this.loading = false; // Altera o estado de carregamento quando as imagens são carregadas
    }, 2000); // Tempo de simulação, ajuste conforme necessário
  }
}
