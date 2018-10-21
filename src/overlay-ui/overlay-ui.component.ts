import { Component, OnInit } from '@angular/core';
import { FileManagerService } from '../file-manager.service';

@Component({
  selector: 'app-overlay-ui',
  templateUrl: './overlay-ui/overlay-ui.component.html',
  styleUrls: ['./overlay-ui/overlay-ui.component.css']
})
export class OverlayUiComponent implements OnInit {

  constructor(private fileManager: FileManagerService) { }


  onSend() {
    //this.fileManager.ClearItems();
    //sendItem function.
    console.log('Items being sent')
  }

  ngOnInit() {
  }

}
