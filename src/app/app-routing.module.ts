import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FilmeListComponent} from './Filme/filme-list/filme-list.component';
import {Ator} from './model/Ator';
import {AtorComponent} from './Ator/ator/ator.component';
import {AtorFormComponent} from './Ator/ator-form/ator-form.component';
import {StudioListComponent} from './Studio/studio-list/studio-list.component';
import {StudioFormComponent} from './Studio/studio-form/studio-form.component';
import {FilmFormComponent} from './Filme/film-form/film-form.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'filme-list', component: FilmeListComponent,
  },
  {
    path: 'filme-form', component: FilmFormComponent,
  },
  {
    path: 'ator', component: AtorComponent,
  },
  {
    path: 'ator-form', component: AtorFormComponent,
  },
  {
    path: 'studio-list', component: StudioListComponent,
  },
  {
    path: 'studio-form', component: StudioFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
