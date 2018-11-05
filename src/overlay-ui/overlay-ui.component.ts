import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileManagerService } from '../file-manager.service';

@Component({
  selector: 'app-overlay-ui',
  templateUrl: './overlay-ui/overlay-ui.component.html',
  styleUrls: ['./overlay-ui/overlay-ui.component.css']
})
export class OverlayUiComponent implements OnInit {

  @Output() navclick = new EventEmitter<string>();

  constructor(private fileManager: FileManagerService) { }

  onNavClick(button: string){
    this.navclick.emit(button)
    console.log(button + ' button clicked')
  }

  onSend() {
    //this.fileManager.ClearItems();
    //sendItem function.
    console.log('Items being sent')
  }

  ngOnInit() {
  }

}
