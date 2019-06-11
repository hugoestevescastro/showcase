import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { sleep } from 'src/app/utilities';

@Component({
  selector: 'app-svg-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.sass']
})
export class MobileComponent implements OnInit {
  @ViewChild('svg') svg: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.svg.nativeElement);
  }
  async animate() {
    this.renderer.addClass(this.svg.nativeElement, 'scale-animation');
    await sleep(2000);
    this.renderer.addClass(this.svg.nativeElement, 'add-text');
  }

}
