import { Component } from '@angular/core';
import { AppService } from './app.service';
import { DatePipe } from '@angular/common';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'username', 'email', 'address', 'phone', 'company'];
  dataSource: Object;
  currentDateTime: String;
  background: ThemePalette = 'primary';

  constructor(
    public appService: AppService,
    public datepipe: DatePipe
  ){
    this.currentDateTime =this.datepipe.transform((new Date), 'dd-MMMM-yyyy');
  
  }

  ngOnInit(): void {
    this.userDetails();
  }

  userDetails(){
    this.appService.getUserDetails().subscribe({
      next : (res)=>{
        console.log('res---', res);
        this.dataSource = res;
      },
      error : (e)=>{
      },
      complete: ()=>{
      }
    })
  }
  
}
