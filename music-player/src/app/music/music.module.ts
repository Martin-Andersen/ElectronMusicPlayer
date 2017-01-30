import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AutoCompleteModule } from 'primeng/primeng';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';

@NgModule({
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicProgressComponent,
    MusicSearchComponent,
    MusicPlayerComponent
  ],
  declarations: [
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicProgressComponent,
    MusicSearchComponent,
    MusicPlayerComponent]
})
export class MusicModule { }
