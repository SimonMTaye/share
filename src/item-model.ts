import * as fs from "fs";
import * as path from 'path'

export class Item {
  path: string;
  name: string;

  isDirectory: boolean;
  type: string;
  icon: string;

  fileSize: number;

  accessTime: string;
  creationTime: string;
  modifiedTime: string;

  constructor(name: string, parentDir: string) {
    this.name = name;
    this.path = parentDir + "/" + name;
    let thisStat = fs.statSync(this.path);

    this.isDirectory = thisStat.isDirectory();
    if (this.isDirectory) {
      this.type = 'folder';
    } else {
      this.type = 'blank-file';
    }
    
    this.icon = `./assets/icons/${this.type}.png`
    this.accessTime = thisStat.atime.toDateString();
    this.creationTime = thisStat.birthtime.toDateString();
  
    if (thisStat.ctime.getTime() > thisStat.mtime.getTime()) {
      this.modifiedTime = thisStat.ctime.toDateString();
    } else {
      this.modifiedTime = thisStat.mtime.toDateString();
    }

    this.fileSize = thisStat.size;
  }
}
