import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../../item-model";



@Component({
  moduleId: module.id,
  selector: "file-dir-explorer",
  templateUrl: "./dir-explorer.component.html",
  styleUrls: ["./dir-explorer.component.css"]
})
export class DirExplorerComponent implements OnInit {

  @Input() dirFolders: Array<Item>
  @Input() dirFiles: Array<Item>

  @Output()
  clicked = new EventEmitter<{ isDir: boolean; path: string }>();   

  onItemClicked(itemInfo: {isDir: boolean, path: string }){
    this.clicked.emit(itemInfo)
  }
  

  ngOnInit() {}

  constructor() {

  }
}
