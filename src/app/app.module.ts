import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TttSquareComponent } from './ttt-square/ttt-square.component';

@NgModule({
  declarations: [
    AppComponent,
    RockPaperScissorsComponent,
    TicTacToeComponent,
    TttSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
