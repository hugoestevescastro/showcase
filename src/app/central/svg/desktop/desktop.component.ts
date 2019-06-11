import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})
export class SvgDesktopComponent implements OnInit {
  @Input() step: number;
  constructor() { }

  ngOnInit() {
  }

}
