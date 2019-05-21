import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.sass']
})
export class CentralComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  public isMobile: boolean;
  constructor(private deviceService: DeviceDetectorService, private renderer: Renderer2) {
    this.checkDevice();
  }

  ngOnInit() {
  }

  checkDevice() {
    this.isMobile = this.deviceService.isMobile();
  }

  fadeOut() {
    this.renderer.setStyle(this.name.nativeElement, 'animation', 'fade-out 1s');
    this.renderer.setStyle(this.name.nativeElement, 'opacity', '0');
  }

}
