import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FilmeListComponent} from './Filme/filme-list/filme-list.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { InativoPipe } from './pipe/inativo.pipe';
import { DimensaoPipe } from './pipe/dimensao.pipe';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import { AtorComponent } from './Ator/ator/ator.component';
import { AtorFormComponent } from './Ator/ator-form/ator-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { StudioListComponent } from './Studio/studio-list/studio-list.component';
import { StudioFormComponent } from './Studio/studio-form/studio-form.component';
import { FilmFormComponent } from './Filme/film-form/film-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule, ScrollPanelModule} from 'primeng/primeng';
import { AtorValidadorComponent } from './Ator/ator-validador/ator-validador.component';
import {TableModule} from 'primeng/table';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeListComponent,
    InativoPipe,
    DimensaoPipe,
    NavBarComponent,
    AtorComponent,
    AtorFormComponent,
    StudioListComponent,
    StudioFormComponent,
    FilmFormComponent,
    AtorValidadorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ButtonModule,
    MultiSelectModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    DialogModule,
    ScrollPanelModule,
    ReactiveFormsModule,
    PaginatorModule,
    TableModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
