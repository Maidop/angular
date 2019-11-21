import { Injectable } from '@angular/core';
import {Studio} from '../model/Studio';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  private studioList: Studio[];
  private KEY_STUDIO = 'KEY_STUDIO';

  constructor() {
    this.studioList = [];
  }

  findAll(): Observable<Studio[]> {
    return of(JSON.parse(localStorage.getItem(this.KEY_STUDIO)));
  }

  add(studio: Studio): void {
    this.studioList.push(studio);
    localStorage.setItem(this.KEY_STUDIO, JSON.stringify(this.studioList));
  }

  editar(studio: Studio) {
    const index = this.studioList.findIndex(item => item.id === studio.id);
    this.studioList[index] = studio;
    localStorage.setItem(this.KEY_STUDIO, JSON.stringify(this.studioList));
  }

  remove(studio: Studio): void {
    const index = this.studioList.findIndex(item => item.id === studio.id);

    this.studioList.splice(index, 1);
    localStorage.setItem(this.KEY_STUDIO, JSON.stringify(this.studioList));
  }

  size(): Observable<number> {
    return of(this.studioList.length);
  }

  clear(): void {
    this.studioList = [];
    localStorage.removeItem(this.KEY_STUDIO);
  }
}
