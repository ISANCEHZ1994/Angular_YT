import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // If these variables give error => get to tsconfig.json "strictPropertyInitialization": false
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter(); // its going to emit something (think on EVENTS/CALLBACKS)

  constructor() { };

  ngOnInit(): void {
  };

  onClick(){ // this method is being used inside button.component HOWEVER to give it full functionality we also have to 
            //  change things inside both header HTML and TS
    this.btnClick.emit();
  };

}
