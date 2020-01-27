
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { BoardComponent } from './components/board/board.component';
import { ChessPieceComponent } from './components/chess-piece/chess-piece.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    PlayComponent,
    BoardComponent,
    ChessPieceComponent,
    SquareComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
