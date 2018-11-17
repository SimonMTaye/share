import { Injectable } from "@angular/core";
import { FileManagerService } from "./file-manager.service";

import * as express from "express";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as archiver from "archiver";

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
    let fileName = "";
    let fileSize = 666;

    if (itemArray.length > 1 || itemArray[0].isDirectory) {
      this.CreateArchive();
      fileToSend = path.join(os.tmpdir(), "/temp.zip")
      //fileSize = fs.statSync(fileToSend).size
      fileName = "files.zip";
    } else {
      fileToSend = this.fileMan.itemArray[0].path;
      fileName = this.fileMan.itemArray[0].name;
      fileSize = this.fileMan.itemArray[0].fileSize;
    }

    console.log("Connecting");
    console.log("File size of zip: " + fileSize)
      let file = fs.createReadStream(fileToSend);
      res.set({
        "Content-Disposition" : `attachment; filename = ${fileName}`,
        'Content-Length': fileSize
      })
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
  })

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

  CreateArchive() {
    let filesZip = archiver("zip", { store: true });
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
      console.log(
        "archiver has been finalized and the output file descriptor has closed."
      );
    });

    filesZip.on("error", function(err) {
      throw err;
    });

    filesZip.on("warning", function(err) {
      if (err.code === "ENOENT") {
        // log warning
        console.log("ENONET error occured");
      } else {
        // throw error
        throw err;
      }
    });

    filesZip.finalize();

  }
}
