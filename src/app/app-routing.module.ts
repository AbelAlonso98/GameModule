import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {path: 'rock-paper-scissors', component: RockPaperScissorsComponent},
  {path: 'tic-tac-toe', component:TicTacToeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
