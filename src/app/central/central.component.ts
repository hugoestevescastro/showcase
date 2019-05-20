import { Component, OnInit, HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.sass']
})
export class CentralComponent implements OnInit {
  public isMobile: boolean;
  constructor(private deviceService: DeviceDetectorService) {
    this.checkDevice();
  }

  ngOnInit() {
  }

  checkDevice() {
    this.isMobile = this.deviceService.isMobile();
  }

}
