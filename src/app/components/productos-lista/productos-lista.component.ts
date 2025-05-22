import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TotoloService } from '../../service/totolo.service';

@Component({
  selector: 'productos-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent {
  productos$: Observable<any>;

  constructor(private totoloService: TotoloService) {
    this.productos$ = this.totoloService.getProducts$();
  }
}
