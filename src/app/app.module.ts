import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { CentralComponent } from './central/central.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SvgDesktopComponent } from './central/svg/desktop/desktop.component';
import { MobileComponent } from './central/svg/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    OverlayComponent,
    SvgDesktopComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
