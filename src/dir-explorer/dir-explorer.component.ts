import { Component, OnInit } from "@angular/core";
import { DirScannerService } from "../dir-scanner.service";
import { Item } from "../item-model";

import * as os from "os";
const homedir: string = os.homedir();

@Component({
  selector: "app-dir-explorer",
  templateUrl: "./dir-explorer/dir-explorer.component.html",
  styleUrls: ["./dir-explorer/dir-explorer.component.css"]
})
export class DirExplorerComponent implements OnInit {

  dirFolders: Array<Item> = [];
  dirFiles: Array<Item> = [];

  GetDirInfo(dir : string) {
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

  ngOnInit() {}

  constructor(private scanner: DirScannerService) {
    this.GetDirInfo(homedir);
    console.log(this.dirFiles);
  }
}
