import { Component, OnInit} from "@angular/core";
import { DirScannerService } from '../../dir-scanner.service';
import { Item } from '../../item-model';


import * as os from "os";
import * as path from 'path'
const homedir: string = os.homedir();

@Component({
  moduleId: module.id,
  selector: "file-explorer",
  templateUrl: "./file-explorer.component.html"
})
export class FileExplorerComponent implements OnInit {
  currentDir: string;
  prevDir: string;
  dirFolders: Array<Item> = []
  dirFiles: Array<Item> = []

  onItemClicked(itemInfo: {isDir: boolean, path: string }){
    if(itemInfo.isDir){
      this.SwitchDir(itemInfo.path)
      console.log('Directory Clicked')
    } else {
      console.log('File clicked')
    }
  }

  onNavButtonsClicked(button: string) {
    console.log("Nav button clicked");
    if (button === "home") {
      this.SwitchDir(homedir);
    } else if (button === "back") {
      this.prevDir = this.currentDir;
      console.log(this.currentDir);
      this.currentDir = path.normalize(this.currentDir + "/..");
      this.SwitchDir(this.currentDir);
    } else {
      if (this.prevDir !== null) {
        this.SwitchDir(this.prevDir);
      }
    }
  }
  SwitchDir(dir : string) {
    this.currentDir = dir
    this.dirFiles = this.scanner.ScanDirectory(dir).files;
    this.dirFolders = this.scanner.ScanDirectory(dir).folders;
  }
  constructor (private scanner : DirScannerService) {
    this.SwitchDir(homedir);
  }

  ngOnInit() {}

}
