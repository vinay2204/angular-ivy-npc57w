import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


users =[];
pushUser(data){
this.users.push(data);
}

onRemoveUser(item){
  this.users.splice(item, 1)
  }
  



admins=[];
pushAdmin(data){
  this.admins.push(data)
}

onRemoveAdmin(item){
  this.users.splice(item,1)
}




}

