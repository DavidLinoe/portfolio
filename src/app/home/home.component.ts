import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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
  }

}
