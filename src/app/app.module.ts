import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule } from '@angular/forms';
//Services
import { ThemoviedbService } from './services/themoviedb.service';

//Routes
import { APP_ROUTING } from './routes';
import { ImageValidatorPipe } from './pipes/image-validator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ExplorerComponent,
    DetailsComponent,
    ImageValidatorPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    ThemoviedbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
