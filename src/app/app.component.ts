import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosListaComponent } from './components/productos-lista/productos-lista.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductosListaComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'totolo-front';
}
