import {Injectable} from '@angular/core';
import {Filme} from '../model/Filme';
import {Observable, of, of as observableOF, throwError} from 'rxjs';
import {delay} from 'rxjs/operators';
import {error} from 'util';
import {Ator} from '../model/Ator';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmeList: Filme[];
  private KEY_FILMES = 'KEY_FILMES';

  constructor() {
    this.filmeList = [];
  }

  findAll(): Observable<Filme[]> {
    return of(JSON.parse(localStorage.getItem(this.KEY_FILMES)));
  }

  add(filme: Filme): void {
    this.filmeList.push(filme);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  editar(filme: Filme) {
    const index = this.filmeList.findIndex(item => item.id === filme.id);
    this.filmeList[index] = filme;
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  remove(filme: Filme): void {
    const index = this.filmeList.findIndex(item => item.id === filme.id);

    this.filmeList.splice(index, 1);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  size(): Observable<number> {
    return of(this.filmeList.length);
  }

  clear(): void {
    this.filmeList = [];
    localStorage.removeItem(this.KEY_FILMES);
  }

  // metodo gaspar
  getTotal(): Observable<number> {
    return  of(this.filmeList.reduce((soma, filme) => soma + filme.precoBilhete, 0));
  }

  total(): number {
    let total;
    total = 0;
    for (const filme of this.filmeList) {
      total = total + filme.precoBilhete;
    }
    return total;
  }
}
