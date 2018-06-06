import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 heading: string = 'Person Details';
 person: any = {
   name:{
     first: 'Jane',
     last: ' Doe',
    } ,
   gender:'f' ,
   address: '700 Van Ness Ave', 
 };  
 getInitial(){
   if(this.person.gender === 'm'){
     return 'Mr.';
   } else if(this.person.gender === 'f'){
     return 'Mrs.';
   } else{
     return '';
   }
 }
 getAddress(){
   if (this.person.address){

   }
 }
}
