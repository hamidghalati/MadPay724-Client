import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './routes/routes.routing';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AuthModule,
    RouterModule.forRoot(adminRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


