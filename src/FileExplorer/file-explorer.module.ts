import { NgModule } from '@angular/core';
import { DirExplorerComponent } from './dir-explorer/dir-explorer.component';
import { FileFolderComponent } from './file-folder/file-folder.component';
import { CommonModule } from '@angular/common';
import { NavOverlayComponent } from './nav-overlay/nav-overlay.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';

@NgModule ({
    declarations: [
    DirExplorerComponent,
    NavOverlayComponent,
    FileFolderComponent,
    FileExplorerComponent
    ],
    imports: [
        CommonModule
    ], 
    exports: [
        FileExplorerComponent
    ]
})

export class FileExplorerModule {

}