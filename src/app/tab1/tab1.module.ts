import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicStorageModule } from '@ionic/storage';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {SharedPipeModule} from '../../pipe/shared-pipe-module/shared-pipe.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedPipeModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}