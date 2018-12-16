import * as fs from "fs";
// import * as path from 'path'

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
      this.type = "folder";
    } else {
      this.type = "blank-file";
    }

    this.icon = `./assets/icons/${this.type}.png`;
    this.accessTime = thisStat.atime.toDateString();
    this.creationTime = thisStat.birthtime.toDateString().slice(4);

    if (thisStat.ctime.getTime() > thisStat.mtime.getTime()) {
      this.modifiedTime = thisStat.ctime.toDateString().slice(4);
    } else {
      this.modifiedTime = thisStat.mtime.toDateString().slice(4);
    }

    if (this.isDirectory) {
      this.fileSize = fs.readdirSync(this.path).length;
    } else {
      this.fileSize = thisStat.size;
    }
  }
}
