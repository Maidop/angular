import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Filme} from '../model/Filme';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {iterator} from 'rxjs/internal-compatibility';
import {Studio} from '../model/Studio';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit, OnDestroy {

  filmeList$: Observable<Filme[]>;
  filmeEditar: Filme;
  tooltip = '';
  total: number;
  display = false;

  constructor(private filmeService: FilmeService,
              private titleService: Title) {
    this.total = 0;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Cine BootCamp - Filmes');
    this.gerarFilmes();
    // this.filmeService.remove(filme);
    // this.filmeService.findAll().subscribe(filmeList => this.filmeList = filmeList);
    this.filmeList$ = this.filmeService.findAll();
    this.total = this.filmeService.total();
  }

  editar(filme: Filme): void {
    this.filmeEditar = JSON.parse(JSON.stringify(filme));
    this.showDialog();
  }

  showDialog() {
    this.display = true;
  }

  size(): Observable<number> {
    return this.filmeService.size();
  }

  atualizarRegistros(): void {
    this.filmeList$ = this.filmeService.findAll();
    this.filmeEditar = null;
    this.display = false;
  }

  excluir(filme: Filme): void {
    this.filmeService.remove(filme);
    this.filmeList$ = this.filmeService.findAll();
  }

  private gerarFilmes() {
    const filme = new Filme();
    filme.id = 1;
    filme.titulo = 'Star Wars';
    filme.precoBilhete = 35.20;
    filme.inativo = false;
    filme.dimensao = true;
    this.filmeService.add(filme);

    const filme2 = new Filme();
    filme2.id = 2;
    filme2.titulo = 'Marley e Eu';
    filme2.precoBilhete = 25.20;
    filme2.inativo = false;
    filme2.dimensao = false;
    this.filmeService.add(filme2);

    const filme3 = new Filme();
    filme3.id = 3;
    filme3.titulo = 'Avatar';
    filme3.precoBilhete = 12.20;
    filme3.inativo = false;
    filme3.dimensao = true;
    this.filmeService.add(filme3);

    const filme4 = new Filme();
    filme4.id = 4;
    filme4.titulo = 'The Purge';
    filme4.precoBilhete = 5.20;
    filme4.inativo = false;
    filme4.dimensao = false;
    this.filmeService.add(filme4);

    const filme5 = new Filme();
    filme5.id = 5;
    filme5.titulo = 'Poeira em Alto Mar';
    filme5.precoBilhete = 40.20;
    filme5.inativo = true;
    filme5.dimensao = false;
    this.filmeService.add(filme5);

    const filme6 = new Filme();
    filme6.id = 6;
    filme6.titulo = 'O dia que Bahia Virou Monstro';
    filme6.precoBilhete = 0.35;
    filme6.inativo = true;
    filme6.dimensao = true;
    this.filmeService.add(filme6);

    const filme7 = new Filme();
    filme7.id = 7;
    filme7.titulo = 'Kill Bill';
    filme7.precoBilhete = 1500.00;
    filme7.inativo = false;
    filme7.dimensao = false;
    this.filmeService.add(filme7);

    const filme8 = new Filme();
    filme8.id = 8;
    filme8.titulo = 'Harry Potter e a Pedra Filosofal';
    filme8.precoBilhete = 22.50;
    filme8.inativo = false;
    filme8.dimensao = true;
    this.filmeService.add(filme8);

    const filme9 = new Filme();
    filme9.id = 9;
    filme9.titulo = 'Senhor dos Anéis - A Ordem do Anel';
    filme9.precoBilhete = 12.50;
    filme9.inativo = false;
    filme9.dimensao = true;
    this.filmeService.add(filme9);

    const filme10 = new Filme();
    filme10.id = 10;
    filme10.titulo = 'John Wick';
    filme10.precoBilhete = 16.30;
    filme10.inativo = false;
    filme10.dimensao = true;
    this.filmeService.add(filme10);
  }

  getTotal(): Observable<number> {
    return this.filmeService.getTotal();
  }

  public setTootip(filme: Filme): string {
    if (filme.precoBilhete <= 10) {
      this.tooltip = 'Custo Baixo';
      return  this.tooltip;
    } else if (filme.precoBilhete > 10 && filme.precoBilhete < 20) {
      this.tooltip = 'Custo Regular';
      return  this.tooltip;
    } else if (filme.precoBilhete >= 20 && filme.precoBilhete < 40) {
      this.tooltip = 'Custo Médio';
      return  this.tooltip;
    } else if (filme.precoBilhete >= 40) {
      this.tooltip = 'Custo Alto';
      return  this.tooltip;
    }
  }

  ngOnDestroy(): void {
    this.filmeService.clear();
  }

}
