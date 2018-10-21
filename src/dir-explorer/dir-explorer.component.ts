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
  dir: string;
  dirFolders: Array<Item> = [];
  dirFiles: Array<Item> = [];

  GetDirInfo() {
    if (!this.dir) {
      this.dir = homedir;
    }
    this.dirFiles = this.scanner.ScanDirectory(this.dir).files;
    this.dirFolders = this.scanner.ScanDirectory(this.dir).folders;
  }

  ngOnInit() {}

  constructor(private scanner: DirScannerService) {
    this.GetDirInfo();
    console.log(this.dirFiles);
  }
}
