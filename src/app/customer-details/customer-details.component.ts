import { Component,OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { UserService } from '../service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MembersService } from '../service/members.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit,AfterViewInit{
  userdata = new MatTableDataSource<any>();
  customersget:any
constructor(private customerdetail:UserService,private member:MembersService){}

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit() {
  this.userdata.paginator = this.paginator;
}

ngOnInit(){
  this.getmethod();
this.userdata.data =this.customerdetail.userdetail
console.log(this.userdata.data)
}

getmethod(){
    
  this.member.getdata().subscribe(data=>{
    console.log(data)
    this.customersget=data
  })
  // this.member.getdata().subscribe()

}
displayedColumns:string[]=['userid', 'username' , 'mail', 'number','location'];

}
