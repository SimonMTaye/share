import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { DirExplorerComponent } from './dir-explorer/dir-explorer.component';
import { OverlayUiComponent } from './overlay-ui/overlay-ui.component';
import { FileFolderComponent } from './file-folder/file-folder.component';
import { NetworkingModule } from './NetworkingModule/networking.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    DirExplorerComponent,
    OverlayUiComponent,
    FileFolderComponent   
  ],
  imports: [
    BrowserModule,
    NetworkingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}