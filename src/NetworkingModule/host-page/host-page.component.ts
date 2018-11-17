import { Component, OnInit } from "@angular/core";
import { GetIP } from "../ip-getter";
import { Router } from "@angular/router";
import { FileManagerService } from "../../file-manager.service";
import { NetworkManagerService } from '../../network-manager.service';

@Component({
  moduleId: module.id,
  selector: "net-host-page",
  templateUrl: "./host-page.component.html"
})
export class HostPageComponent implements OnInit {
  localIP = GetIP().address;

  ngOnInit() {}
  constructor(private router: Router, private fileMan: FileManagerService, private networkMan: NetworkManagerService) {}

  onBack() {
    this.fileMan.ClearItems();
    this.networkMan.StopServer();
    this.router.navigate(["explore"]);
  }
}
