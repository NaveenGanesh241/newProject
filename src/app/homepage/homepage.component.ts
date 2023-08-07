import { Component } from '@angular/core';
import { Catageoryitems } from '../interface/catageoryitems';
import {CatageoryService} from '../service/catageory.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
catageory?:Catageoryitems[]
constructor(private catservice:CatageoryService,private router:Router){}
ngOnInit():void{
  this.catageory=this.catservice.catageory
}

}
