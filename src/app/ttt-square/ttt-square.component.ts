import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ttt-square',
  templateUrl: './ttt-square.component.html',
  styleUrls: ['./ttt-square.component.css']
})
export class TttSquareComponent {
  @Input() value: string = '?';
}
