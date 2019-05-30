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
  private isToGoBack: boolean = false;

  constructor(private deviceService: DeviceDetectorService, private renderer: Renderer2) {
    this.checkDevice();
  }

  ngOnInit() {
  }
  checkDevice() {
    this.isMobile = this.deviceService.isMobile();
  }
  async ngAfterViewChecked() {
    if(this.isAnimated && !this.isAnimationComplete) {
      this.animation_intro_s2();
    }
    else if (!this.isAnimated && !this.isAnimationComplete && this.isToGoBack) {
      await this.animation_end_s2();
    }
  }

  async animation_intro_s1() {
    this.renderer.addClass(this.info.nativeElement, 'fade-out-animation');
    await sleep(1000);
    this.isAnimated = true;
  }
  async animation_intro_s2() {
    this.isAnimationComplete = true;
    this.renderer.addClass(this.svg.nativeElement, 'cubic-animation-appear');
    await sleep(1000);
  }
  async animation_end_s1() {
    this.renderer.addClass(this.svg.nativeElement, 'cubic-animation-disappear');
    await sleep(1000);
    this.isAnimationComplete = false;
    this.isAnimated = false;
    this.isToGoBack = true;
  }
  async animation_end_s2() {
    this.renderer.addClass(this.info.nativeElement, 'fade-in-animation');
    await sleep(1000);
    this.isToGoBack = false;
  }

}
