import { Injectable } from "@angular/core";
import { FileManagerService } from "./file-manager.service";

import * as express from "express";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as archiver from "archiver";
import { Response } from 'express-serve-static-core';

const app = express();

@Injectable({
  providedIn: "root"
})
export class NetworkManagerService {
  constructor(private fileMan: FileManagerService) {}

  server = app.listen(43234, () => {
    console.log("Started File Sharing Server");
  });

  responder = app.get("/", (_req, res) => {
    let itemArray = this.fileMan.itemArray;
    let fileToSend = "";

    if (itemArray.length > 1 || itemArray[0].isDirectory) {
      this.CreateArchive()
        .then(size => {
          fileToSend = path.join(os.tmpdir(), "/temp.zip");
          res.set({
            "Content-Disposition": `attachment; filename = files.zip`,
            "Content-Length": size
          });
          this.SendResponse(res, fileToSend)
        })
        .catch(err => {
          throw err;
        });
    } else {
      fileToSend = this.fileMan.itemArray[0].path;
      res.set({
        "Content-Disposition": `attachment; filename = ${
          this.fileMan.itemArray[0].name
        }          `,
        "Content-Length": this.fileMan.itemArray[0].fileSize
      });
      this.SendResponse(res, fileToSend)      
    }
  });

  SendResponse (res: Response, fileToSend: string){
    console.log("Connecting");
      let file = fs.createReadStream(fileToSend);
      file.pipe(res);
      file.on("finish", () => {
        console.log("Files sent");
      });
      res.on("error", e => {
        console.log(e);
      });
      file.on("error", (e: Error) => {
        console.log(e);
      });
  }

  SendFiles() {
    this.StartServer();
  }

  StartServer() {
    if (!this.server.listening) {
      this.server.listen(43234);
    }
  }

  StopServer() {
    this.server.close();
  }

  CreateArchive(): Promise<number | void> {
    return new Promise((resolve, reject) => {
      let filesZip = archiver("zip", { store: true });
      if (fs.existsSync(os.tmpdir() + "/temp.zip")) {
        fs.unlinkSync(os.tmpdir() + "/temp.zip");
      }
      let output = fs.createWriteStream(os.tmpdir() + "/temp.zip");
      filesZip.pipe(output);

      this.fileMan.itemArray.forEach(item => {
        if (!item.isDirectory) {
          filesZip.append(fs.createReadStream(item.path), { name: item.name });
        } else {
          filesZip.directory(item.path, item.name);
        }
      });

      output.on("end", function() {
        console.log("Data has been drained");
      });

      output.on("close", function() {
        console.log(filesZip.pointer() + " total bytes");
        resolve(filesZip.pointer());
        console.log(
          "archiver has been finalized and the output file descriptor has closed."
        );
      });

      filesZip.on("error", function(err) {
        reject(err);
      });

      filesZip.on("warning", function(err) {
        if (err.code === "ENOENT") {
          // log warning
          console.log("ENONET error occured");
        } else {
          reject(err);
        }
      });

      filesZip.finalize();
    });
  }
}
