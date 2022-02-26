import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() currentUserDetails: User;
  constructor() {}

  ngOnInit(): void {}
}
