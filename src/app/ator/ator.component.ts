import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ator} from '../model/Ator';
import {AtorService} from '../service/ator.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.scss']
})
export class AtorComponent implements OnInit {
  atorList$: Observable<Ator[]>;
  atorEditar: Ator;
  display = false;

  constructor(private atorService: AtorService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Cine BootCamp - Atores');
    this.gerarAtors();
    this.atorList$ = this.atorService.findAll();
  }

  editar(ator: Ator): void {
    this.atorEditar = JSON.parse(JSON.stringify(ator));
    this.showDialog();
  }

  showDialog() {
    this.display = true;
  }

  size(): Observable<number> {
    return this.atorService.size();
  }

  atualizarRegistros(): void {
    this.atorList$ = this.atorService.findAll();
    this.atorEditar = null;
    this.display = false;
  }

  excluir(ator: Ator): void {
    this.atorService.remove(ator);
    this.atorList$ = this.atorService.findAll();
  }

  private gerarAtors(): void {
    this.atorService.size().subscribe(size => {
      if (size === 0) {
        const ator = new Ator();
        ator.id = 1;
        ator.nome = 'Abiguinho';
        ator.idade = 16;
        this.atorService.add(ator);

        const ator2 = new Ator();
        ator2.id = 2;
        ator2.nome = 'klasdjfasçdjf';
        ator2.idade = 23;
        this.atorService.add(ator2);

        const ator3 = new Ator();
        ator3.id = 3;
        ator3.nome = 'sdfasdfa';
        ator3.idade = 45;
        this.atorService.add(ator3);

        const ator4 = new Ator();
        ator4.id = 4;
        ator4.nome = 'hgsdhdgsdfa';
        ator4.idade = 25;
        this.atorService.add(ator4);
      }
    });
  }


}
