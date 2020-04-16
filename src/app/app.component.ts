import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nexquare';



 public  componentsList=[];

  constructor(){

    this.componentsList = [
   
    ]
  }

  addComponent(){
// alert('add component')
    this.componentsList.push('componet'+ (this.componentsList.length+1));  
  }
  deleteComponent(i){

this.componentsList.splice(i,1);


  }
}
