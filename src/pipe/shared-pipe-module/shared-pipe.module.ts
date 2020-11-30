import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SafePipe} from '../safe.pipe';
import {AppModule} from '../../app/app.module';



@NgModule({
    declarations: [
        SafePipe
    ],
    exports: [
        SafePipe
    ]
})
export class SharedPipeModule { }
