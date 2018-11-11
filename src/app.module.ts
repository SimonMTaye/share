import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NetworkingModule } from './NetworkingModule/networking.module';
import { FileExplorerModule } from './FileExplorer/file-explorer.module';
import { appRoutes } from './appRoutes';



@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent      
  ],
  imports: [
    BrowserModule,
    NetworkingModule,
    FileExplorerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}