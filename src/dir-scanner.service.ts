import { Injectable } from "@angular/core";

import * as fs from "fs";
import { Item } from "./item-model";

@Injectable({
  providedIn: "root"
})
export class DirScannerService {
  ScanDirectory(dir: string): { folders: Array<Item>; files: Array<Item> } {
    let folderItems: Array<Item> = [];
    let fileItems: Array<Item> = [];
    fs.readdirSync(dir).forEach(x => {
      let item = new Item(x, dir);
      if (item.isDirectory) {
        folderItems.push(item);
      } else {
        fileItems.push(item);
      }
    });
    return { folders: folderItems, files: fileItems };
  }
  constructor() {}
}
