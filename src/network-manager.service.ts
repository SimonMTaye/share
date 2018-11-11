import { Injectable } from "@angular/core";
import { FileManagerService } from "./file-manager.service";

import * as express from "express";
import * as fs from "fs";

const app = express();

@Injectable({
  providedIn: "root"
})

export class NetworkManagerService {
  constructor(private fileMan: FileManagerService) {}

  SendFiles() {
    let itemArray = this.fileMan.itemPath;

    app.listen(90210, () => {
      console.log("Started File Sharing Server");
    });  

    app.get("/", (_req, res) => {
      console.log('Connecting')
      for (let i =0 ; i = itemArray.length;) {
        let file = fs.createReadStream(itemArray[i])
        file.pipe(res)
        res.on('finish' , () => {
          i++
        })
        res.on('error', () => { console.log('Error')})
        file.on('error', () => { console.log('Error')})
      }

    });

  }
}
