import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filme} from '../model/Filme';
import {FilmeService} from '../service/filme.service';
import {AtorService} from '../service/ator.service';
import {StudioService} from '../service/studio.service';
import {Router} from '@angular/router';
import {Ator} from '../model/Ator';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent {

  @Input() filme: Filme;

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  atorList: Ator[];

  constructor(private filmeService: FilmeService,
              private atorService: AtorService,
              private studioService: StudioService,
              private router: Router) {
    atorService.findAll().subscribe(atores => {
      this.atorList = atores;
    });
  }

  adicionar(): void {
    if (this.editar) {
      this.filmeService.editar(this.filme);
    } else {
      this.filmeService.add(this.filme);
    }
    this.onPersist.emit();
    this.router.navigate(['/filme-list']);
  }

}
