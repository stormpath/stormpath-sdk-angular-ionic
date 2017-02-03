import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StormpathIonicModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, StormpathIonicModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}