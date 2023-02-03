import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss']
})
export class TextAreaInputComponent implements OnInit {
  @Input() AIresponse: string = 'AI demo text';
  constructor() { }

  ngOnInit(): void {
  }

}