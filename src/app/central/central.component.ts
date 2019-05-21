import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { sleep } from '../utilities';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.sass']
})
export class CentralComponent implements OnInit {
  @ViewChild('info') info: ElementRef;
  @ViewChild('svg') svg: ElementRef;

  public isMobile: boolean;
  public isAnimated: boolean = false;
  private isAnimationComplete: boolean = false;

  constructor(private deviceService: DeviceDetectorService, private renderer: Renderer2) {
    this.checkDevice();
  }

  ngOnInit() {
  }

  async ngAfterViewChecked() {
    if(this.isAnimated && !this.isAnimationComplete) {
      await this.fadeIn();
    }
  }

  checkDevice() {
    this.isMobile = this.deviceService.isMobile();
  }

  async fadeOut() {
    this.renderer.setStyle(this.info.nativeElement, 'animation', 'fade-out 1s');
    this.renderer.setStyle(this.info.nativeElement, 'opacity', '0');
    await sleep(1000);
    this.isAnimated = true;
  }
  async fadeIn() {
    this.isAnimationComplete = true;
    this.renderer.setStyle(this.svg.nativeElement, 'animation', 'rotate 1s cubic-bezier(0.785, 0.135, 0.150, 0.860) both');
    this.renderer.setStyle(this.svg.nativeElement, 'opacity', '1');
    await sleep(1000);
  }

}
