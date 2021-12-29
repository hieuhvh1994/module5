import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.scss']
})
export class ProgessBarComponent implements OnInit {

  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progess + 5;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
