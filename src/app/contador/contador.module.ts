import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
    ContadorComponent],
    exports:[
    ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})

export class ContadorModule{

}