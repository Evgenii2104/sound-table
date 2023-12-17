import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from "@angular/core";
@Component({
  selector: 'mc-play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.scss']
})

export class PlayComponent implements OnInit, OnChanges {
  @Input() value: any;
  containerF: string
constructor(private renderer: Renderer2, private el: ElementRef) {
}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['value']) {
      this.changeEl()
    }
  }

changeEl() {
    if(this.containerF) {
      this.renderer.removeChild(this.el.nativeElement, this.containerF);
    }
  const appF = this.el.nativeElement
   this.containerF = this.renderer.createElement('audio')
  this.renderer.setAttribute(this.containerF, 'controls', '')
  this.renderer.addClass(this.containerF, 'audio')
  const itemF = this.renderer.createElement('source')
  this.value.slice(0, -1)
  this.renderer.setAttribute(itemF, 'src', `assets/sound/${this.value}`)
  this.renderer.appendChild(this.containerF, itemF)
  this.renderer.appendChild(appF, this.containerF)
}

ngOnInit() {
}
}
