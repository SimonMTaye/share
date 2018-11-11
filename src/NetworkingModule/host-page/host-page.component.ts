import { Component, OnInit } from "@angular/core";
import { GetIP } from "../ip-getter";

@Component({
  moduleId: module.id,
  selector: "net-host-page",
  templateUrl: "./host-page.component.html"
})
export class HostPageComponent implements OnInit {

localIP = GetIP().address;

ngOnInit() {}
constructor() {}
}
