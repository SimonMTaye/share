import { NgModule } from '@angular/core';
import { DirExplorerComponent } from './dir-explorer/dir-explorer.component';
import { OverlayUiComponent } from './overlay-ui/overlay-ui.component';
import { FileFolderComponent } from './file-folder/file-folder.component';
import { CommonModule } from '@angular/common';

@NgModule ({
    declarations: [
    DirExplorerComponent,
    OverlayUiComponent,
    FileFolderComponent
    ],
    imports: [
        CommonModule
    ], 
    exports: [
        DirExplorerComponent,
        OverlayUiComponent, 
        FileFolderComponent
    ]
})

export class FileExplorerModule {

}