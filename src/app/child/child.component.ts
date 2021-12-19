import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() boxColor;
  @Input() placeholderText;

  @Output () inputEvent = new EventEmitter()


  count:number =0
  ngOnInit() {
  }

  onCreate(teval){
    if(teval.value.length>0 ){
      this.count = this.count + 1;
      this.inputEvent.emit(teval.value);
      console.log(teval.value);
    }
   
  }

}