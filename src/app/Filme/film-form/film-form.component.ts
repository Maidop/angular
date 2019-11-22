import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filme} from '../../model/Filme';
import {FilmeService} from '../../service/filme.service';
import {AtorService} from '../../service/ator.service';
import {StudioService} from '../../service/studio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ator} from '../../model/Ator';
import {Observable} from 'rxjs';
import {Studio} from '../../model/Studio';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent {

  @Input() filme: Filme = new Filme();

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  atorList: Ator[];
  studioList: Studio[];

  constructor(private filmeService: FilmeService,
              private atorService: AtorService,
              private studioService: StudioService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    atorService.findAll().subscribe(atores => {
      this.atorList = atores;
    });
    studioService.findAll().subscribe(studio => {
      this.studioList = studio;
    });
    this.activatedRoute.queryParams.subscribe(p => {
      const id = p['id'];
      if (id) {
        this.filmeService.get(id).subscribe(res => {
          this.filme = res;
          this.editar = true;
        });
      }
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
