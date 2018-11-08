import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NetworkingModule } from './NetworkingModule/networking.module';
import { FileExplorerModule } from './FileExplorer/file-explorer.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
      
  ],
  imports: [
    BrowserModule,
    NetworkingModule,
    FileExplorerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}