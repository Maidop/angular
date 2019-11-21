import {Injectable} from '@angular/core';
import {Filme} from '../model/Filme';
import {Observable, of, of as observableOF, throwError} from 'rxjs';
import {delay} from 'rxjs/operators';
import {error} from 'util';

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
    // return throwError(error('ERRO'));
    return of(JSON.parse(localStorage.getItem(this.KEY_FILMES)));
  }

  add(filme: Filme): void {
    this.filmeList.push(filme);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  remove(filme: Filme): void {
    const index = this.filmeList.findIndex(item => item.id === filme.id);

    this.filmeList.splice(index, 1);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  total(filmeList$: Observable<Filme[]>): number {
    let total;
    total = 0;
    for (const filme of this.filmeList) {
      total = total + filme.precoBilhete;
    }
    return total;
  }

  clear(): void {
    this.filmeList = [];
    localStorage.removeItem(this.KEY_FILMES);
  }
}
