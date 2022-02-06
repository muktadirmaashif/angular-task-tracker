import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // declaring inputs, receiving them for button.component.html 
  @Input() text!: string; 
  @Input() color!: string;
  @Output() btnClick = new EventEmitter(); //buttonclick function 
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
    
  }

}
