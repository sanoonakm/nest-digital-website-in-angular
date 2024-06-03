import { Component } from '@angular/core';
import { CaurosalComponent } from '../../units/caurosal/caurosal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CaurosalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
