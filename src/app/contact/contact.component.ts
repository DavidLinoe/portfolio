import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  public loading: boolean = true; // Estado de carregamento
  private date = new Date()
  private mes = this.date.getMonth() - 1
  private idade = this.date.getFullYear() - 2005
  public age: any;
  ngOnInit(): void {
    if (this.mes <= 11) {
      this.age = this.idade - 1
    }
    else {
      this.age = this.idade

    }

    window.onload = () => {
      this.loading = false; // Altera o estado de carregamento quando todos os recursos da página forem carregados
    };

  }
}
