import { ViewService } from 'src/app/services/view.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-areaheader',
  templateUrl: './areaheader.component.html',
  styleUrls: ['./areaheader.component.css'],
})
export class AreaheaderComponent implements OnInit {
  showCreateOrderForm: boolean = false;

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {
    this.viewService
      .onToggle()
      .subscribe((value) => (this.showCreateOrderForm = value));
  }

  toggleOrderArea(value: any) {
    this.viewService.toggleOrderArea(value);
  }
}
