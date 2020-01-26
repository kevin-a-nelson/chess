
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent,
    HomeComponent,
    PlayComponent,
    BoardComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
