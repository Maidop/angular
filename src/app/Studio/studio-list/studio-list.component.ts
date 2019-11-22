import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Studio} from '../../model/Studio';
import {Title} from '@angular/platform-browser';
import {StudioService} from '../../service/studio.service';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {

  studioList$: Observable<Studio[]>;
  studioEditar: Studio;
  display = false;
  constructor(private studioService: StudioService,
              private titleService: Title) {  }

  ngOnInit() {
    this.titleService.setTitle('Cine BootCamp - Studio');
    this.gerarStudios();
    this.studioList$ = this.studioService.findAll();
  }

  editar(studio: Studio): void {
    this.studioEditar = JSON.parse(JSON.stringify(studio));
    this.showDialog();
  }

  showDialog() {
    this.display = true;
  }

  size(): Observable<number> {
    return this.studioService.size();
  }

  atualizarRegistros(): void {
    this.studioList$ = this.studioService.findAll();
    this.studioEditar = null;
    this.display = false;
  }

  excluir(studio: Studio): void {
    this.studioService.remove(studio);
    this.studioList$ = this.studioService.findAll();
  }

  private gerarStudios() {
    this.studioService.size().subscribe(size => {
      if (size === 0) {
        const studio = new Studio();
        studio.id = 1;
        studio.nome = 'Fox';
        studio.pais = 'EUA';
        studio.quantidadeFilmes = 0;
        this.studioService.add(studio);

        const studio2 = new Studio();
        studio2.id = 2;
        studio2.nome = 'Warner';
        studio2.pais = 'EUA';
        studio2.quantidadeFilmes = 0;
        this.studioService.add(studio2);

        const studio3 = new Studio();
        studio3.id = 3;
        studio3.nome = 'Disney';
        studio3.pais = 'EUA';
        studio3.quantidadeFilmes = 0;
        this.studioService.add(studio3);
      }
    });
  }
}
