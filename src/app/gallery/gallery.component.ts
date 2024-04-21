import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  public loading: boolean = true; // Estado de carregamento


  ngOnInit(): void {

      window.onload = () => {
        this.loading = false; // Altera o estado de carregamento quando todos os recursos da página forem carregados
      };
  
  }
}
