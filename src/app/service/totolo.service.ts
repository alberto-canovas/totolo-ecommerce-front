import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TotoloService {

  constructor(private http: HttpClient) { }
  
  // Datos mock actualizados para coincidir exactamente con la base de datos
  private mockProducts = [
    { id: 1, name: 'Goku Super Saiyan', description: 'Figura articulada de Goku en Super Saiyan con pose...', price: 19.99, stock: 10, image: '/images/goku.jpg' },
    { id: 2, name: 'Pikachu LED', description: 'Figura de Pikachu con base iluminada, ideal para e...', price: 14.99, stock: 10, image: '/images/pikachu.jpg' },
    { id: 3, name: 'Mario Bross', description: 'Impresión 3D de Mario Bross', price: 24.99, stock: 5, image: '/images/mario.jpg' },
    { id: 4, name: 'Grogu (Baby Yoda)', description: 'Baby Yoda (Grogu) con capa y orejas grandes, muy d...', price: 17.5, stock: 12, image: '/images/grogu.jpg' },
    { id: 5, name: 'Spider-Man Acrobático', description: 'Figura de Spider-Man colgando de una telaraña, pos...', price: 21, stock: 7, image: '/images/spiderman.jpg' },
    { id: 6, name: 'Dragón Oriental', description: 'Figura de un dragón chino con detalles escamosos y...', price: 18.75, stock: 4, image: '/images/dragon.jpg' },
    { id: 10, name: 'Among Us Personalizado', description: 'Figura de Among Us personalizada con sombrero y ma...', price: 9.99, stock: 15, image: '/images/amongus.jpg' }
  ];
  
  public getProducts$(): Observable<any>{
    // Comentamos la llamada HTTP y devolvemos los datos mockeados
    // return this.http.get('http://localhost:8080/totolo/v1/products');
      
    // Usamos 'of' para devolver la lista de productos como un Observable
    return of(this.mockProducts);
  }

}
