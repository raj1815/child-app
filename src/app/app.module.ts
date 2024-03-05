import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('app-element', element);
  }
}
