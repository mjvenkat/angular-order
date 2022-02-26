import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
})
export class LeftMenuComponent implements OnInit {
  @Input() contentTypeTo: string = 'books';
  constructor() {}

  ngOnInit(): void {}

  printValue(value: string) {
    this.contentTypeTo = value;
    console.log(value);
  }
}
