import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MembersService } from '../service/members.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialogform',
  templateUrl: './dialogform.component.html',
  styleUrls: ['./dialogform.component.css']
})
export class DialogformComponent implements OnInit{
  newform !: FormGroup;

 ngOnInit():void{
  this.newform.patchValue(this.data)
 }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  constructor(private fb:FormBuilder,private memser:MembersService,
    private dialog:MatDialogRef<DialogformComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){
  this.newform= this.fb.group({
    name:new FormControl("",[Validators.required]),
    mail:new FormControl("",[Validators.required,Validators.email]),
    dob:new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required]),
    gender:new FormControl("",[Validators.required])
  })
}
getcontrol(name:any) :AbstractControl | null
  {
    return this.newform.get(name)
  }

  
newformsubmit(){
  console.log(this.newform.valid)
  if(this.data){
    
    this.memser.updateuser(this.data.id,this.newform.value).subscribe({
      next:(value:any)=>{
        console.warn("Updated Successfully ")
        this.dialog.close(true);
      },
      error:(err:any)=>{
        console.log(err)
      }
    })

  }
  else{

    this.memser.adduser(this.newform.value).subscribe({
        next:(value:any)=>{
          console.warn("Successfully Added")
          this.dialog.close(true);
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
  }
  
  // console.log(this.age)
  console.log(this.newform.value.dob.getFullYear())
  console.log(this.currentdate.getFullYear() - this.newform.value.dob.getFullYear())
}
// currentdate : Date
currentdate =new Date

// age  = this.currentdate.getFullYear() - this.newform.value.dob.getFullYear()


}
