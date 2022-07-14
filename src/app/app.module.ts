import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IframelyEmbedComponent } from './iframely-embed/iframely-embed.component';
import { SafeHtmlPipe } from './safe.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: IframelyEmbedComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    IframelyEmbedComponent,
    SafeHtmlPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }