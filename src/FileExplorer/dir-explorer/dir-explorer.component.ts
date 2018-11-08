import { Component, OnInit } from "@angular/core";
import { DirScannerService } from "../../dir-scanner.service";
import { Item } from "../../item-model";

import * as os from "os";
import * as path from 'path'
const homedir: string = os.homedir();

@Component({
  moduleId: module.id,
  selector: "file-dir-explorer",
  templateUrl: "./dir-explorer.component.html",
  styleUrls: ["./dir-explorer.component.css"]
})
export class DirExplorerComponent implements OnInit {

  dirFolders: Array<Item> = [];
  dirFiles: Array<Item> = [];
  currentDir: string;
  prevDir: string;

  GetDirInfo(dir : string) {
    this.currentDir = dir
    this.dirFiles = this.scanner.ScanDirectory(dir).files;
    this.dirFolders = this.scanner.ScanDirectory(dir).folders;
  }

  onItemClicked(itemInfo: {isDir: boolean, path: string }){
    if(itemInfo.isDir){
      this.GetDirInfo(itemInfo.path)
      console.log('Directory Clicked')
    } else {
      console.log('File clicked')
    }
  }
  onNavButtonsClicked(button: string){
    console.log('Nav button clicked')
    if(button === 'home'){
      this.GetDirInfo(homedir)
    } else if(button === 'back'){
      this.prevDir = this.currentDir;
      console.log(this.currentDir)
      //Solve path parsing
      this.currentDir = path.normalize(this.currentDir + '/..')
      this.GetDirInfo(this.currentDir)
    } else { 
      if(this.prevDir !== null) { 
        this.GetDirInfo(this.prevDir)
      }
    }
  }

  ngOnInit() {}

  constructor(private scanner: DirScannerService) {
    this.GetDirInfo(homedir);
    console.log(this.dirFiles);
  }
}
