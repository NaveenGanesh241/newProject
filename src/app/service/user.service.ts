import { Injectable } from '@angular/core';
import {userdetails} from '../interface/catageoryitems'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  userdetail:userdetails[]=[
    {
      userid:1,
      username:'Anbu',
      mail:'anbu@gmail.com',
      number:9876654322,
      location:'Chennai'
    },

    {
      userid:2,
      username:'Babu',
      mail:'babu@gmail.com',
      number:9876654123,
      location:'Madurai'
    },
    {
      userid:3,
      username:'Chandru',
      mail:'chandru@gmail.com',
      number:9871234322,
      location:'Dindigul'
    },
    {
      userid:4,
      username:'Devi',
      mail:'devi@gmail.com',
      number:9823654322,
      location:'Vellore'
    },
    {
      userid:5,
      username:'Eniyan',
      mail:'eniyan@gmail.com',
      number:9876654522,
      location:'Theni'
    },
    {
      userid:6,
      username:'Fahad',
      mail:'fahad@gmail.com',
      number:9899084322,
      location:'Coimbatore'
    },
    {
      userid:7,
      username:'Gopi',
      mail:'gopi@gmail.com',
      number:8886654322,
      location:'Erode'
    },
    {
      userid:8,
      username:'Hari',
      mail:'hari@gmail.com',
      number:9876654322,
      location:'Sivagangai'
    },
    {
      userid:9,
      username:'Iasi',
      mail:'isai@gmail.com',
      number:9876600022,
      location:'Virudhunagr'
    },
    {
      userid:10,
      username:'Jothi',
      mail:'jothi@gmail.com',
      number:8899654322,
      location:'Tanjore'
    },
]


  getdata()
  {
    return this.userdetail;
  }
}
