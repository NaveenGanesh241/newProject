import { Component,OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { UserService } from '../service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MembersService } from '../service/members.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog'
import { DialogformComponent } from '../dialogform/dialogform.component';
import { MatSort } from '@angular/material/sort';
import { AutoFocusTarget } from '@angular/cdk/dialog';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit,AfterViewInit {
//   userdata = new MatTableDataSource<any>();
//   customersget:any
constructor(private customerdetail:UserService,private member:MembersService,private dialog:MatDialog){}
displayedColumns: string[] = ['id', 'name', 'mail', 'dob','age','gender', 'actions'];
dataSource!: MatTableDataSource<any>;
@ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
// @ViewChild(MatPaginator) paginator!: MatPaginator;

// ngAfterViewInit() {
  // this.userdata.paginator = this.paginator;
// }

ngOnInit():void{
// this.userdata.data =this.customerdetail.userdetail
this.showusers()
}

// getmethod(){
    
//   this.member.getdata().subscribe(data=>{
//     console.log(data)
//     this.customersget=data
//   })

// }
// displayedColumns:string[]=['userid', 'username' , 'mail', 'number','location'];

opendialogform()
{
  const dialogref  = this.dialog.open(DialogformComponent)
  dialogref.afterClosed().subscribe({
    next:(val)=>
    {
      if(val){
        this.showusers()
      }
    }
  })
}

showusers(){
this.member.showusers().subscribe({
  next:(res)=>{
    this.dataSource=new MatTableDataSource(res);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator
    console.log(res)
  },
  error:console.log
})
}

deleteuser(id:number){
  this.member.deleteuser(id).subscribe({
    next:(res)=>{
      console.warn("Deleted user");
      this.showusers()
    },
    error:console.log 
  })
}

updateuser(data:any)
{
const dialogref=this.dialog.open(DialogformComponent,{
  data,
})
dialogref.afterClosed().subscribe({
  next:(val)=>
  {
    if(val){
      this.showusers()
    }
  }
})
}

}
