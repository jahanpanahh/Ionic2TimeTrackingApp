import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StopTimingPage} from '../pages/stop-timing/stop-timing'
import { ProjectsProvider } from '../providers/projects/projects';
import { HoursMinutesSecondsPipe } from '../pipes/hours-minutes-seconds/hours-minutes-seconds';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HoursMinutesSecondsPipe,
    StopTimingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjectsProvider
  ]
})
export class AppModule {}
