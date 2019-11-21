import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Studio} from '../model/Studio';
import {StudioService} from '../service/studio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studio-form',
  templateUrl: './studio-form.component.html',
  styleUrls: ['./studio-form.component.scss']
})
export class StudioFormComponent{

  @Input() studio: Studio = new Studio();

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  constructor(private studioService: StudioService,
              private router: Router) { }

  adicionar(): void {
    if (this.editar) {
      this.studioService.editar(this.studio);
    } else {
      this.studioService.add(this.studio);
    }
    this.onPersist.emit();
    this.router.navigate(['/studio-list']);
  }

}
