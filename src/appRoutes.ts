import { Routes } from "@angular/router";
import { FrontPageComponent } from './front-page/front-page.component';
import { FileExplorerComponent } from './FileExplorer/file-explorer/file-explorer.component';
import { HostPageComponent } from './NetworkingModule/host-page/host-page.component';

const appRoutes: Routes = [
    // {path: '', component: FrontPageComponent},
    {path: 'explore', component: FileExplorerComponent},
    // Temporaryly set default to File Explorer
    {path: '', component: FileExplorerComponent},
    {path: 'host', component: HostPageComponent},
    {path: 'landing', component: HostPageComponent}
  ]

export {appRoutes}