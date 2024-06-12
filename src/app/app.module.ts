import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './pages/error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
