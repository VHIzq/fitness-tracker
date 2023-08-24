import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css']
})
export class CurrentTraningComponent implements OnInit {
  progress = 0;

  ngOnInit(): void {
    this.setupSpinner();
  }

  /**
   * setupSpinner
   */
  public setupSpinner() {
    setInterval(() => {
      this.progress =+ 5;
    }, 1000);
  }

  

}
