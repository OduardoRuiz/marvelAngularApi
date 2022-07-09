import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { IndexComponent } from './marvel/index/index.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './marvel/characters/characters.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
