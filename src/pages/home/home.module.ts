import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HttpClientModule,
    PipesModule
  ],
})
export class HomePageModule {}
