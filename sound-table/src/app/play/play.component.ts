import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from "@angular/core";
@Component({
  selector: 'mc-play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.scss']
})

export class PlayComponent implements OnInit, OnChanges {
  @Input() value: any
constructor(private renderer: Renderer2, private el: ElementRef) {
}

  ngOnChanges(changes: SimpleChanges) {
    for (let propValue in changes) {
      let chng = changes[propValue];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propValue}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

changeEl() {
    //const audio = this.el.nativeElement.querySelector('audio')
  this.renderer.destroy()
  this.renderer.createElement('audio')
}

ngOnInit() {
    this.changeEl()
}
}
