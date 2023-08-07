import { Injectable } from '@angular/core';
import { Catageoryitems } from '../interface/catageoryitems';

@Injectable({
  providedIn: 'root'
})
export class CatageoryService {
  constructor() { }
  catageory:Catageoryitems[]=[{
    cname:'Mens',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDL96KQ9sdH_PUS88gTN9f1ICjlJdrElRDA&usqp=CAU",
    offer:'40%'
  },
  {
    cname:'Women',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8cgikRL95ru_8m7uWf9J765HELKzBvWV1A&usqp=CAU",
    offer:'40%'
  },
  {
    cname:'Kids',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhr7wguwF8hRdzz2HjBzdp5fQ0NzCL7yfgg&usqp=CAU",
    offer:'40%'
  },
  {
    cname:'Shoes',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4AQe7kWpzulJNL3_YCa681whROydSwylBA&usqp=CAU",
    offer:'40%'
  },
  {
    cname:'Accessories',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzIvi8ojjL4cm45Y9q1K8rsWc-0v236Ixpg&usqp=CAU",
    offer:'40%'
  },
  {
    cname:'Householdes',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzks8b3_14k60GgUQvDKpjYAVxM2SLFWs0A&usqp=CAU",
    offer:'40%'
  },
  {
    cname:'Electronics',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45wZV7QHe2GRemLRmHSQCd9aDniNsjbGx9A&usqp=CAU",
    offer:'40%'
  },
  {
    cname:'Mobile',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7Agdng9KIwwEu3vpfPvx8e8EQoijFPQxIw&usqp=CAU",
    offer:'40%'
  },
  
]

}
