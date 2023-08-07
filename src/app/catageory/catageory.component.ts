import { Component,Input } from '@angular/core';
import { Catageoryitems } from '../interface/catageoryitems';

@Component({
  selector: 'app-catageory',
  templateUrl: './catageory.component.html',
  styleUrls: ['./catageory.component.css']
})
export class CatageoryComponent {

  @Input() catageory!:Catageoryitems
}
