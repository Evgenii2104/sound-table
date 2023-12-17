import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {SoundInterfaces} from "../core/interfaces/sound.interfaces";
import {elementAt} from "rxjs";

@Component({
  selector: 'mc-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.scss']
})
export class SoundsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'link'];
  dataSource: SoundInterfaces[];
  value: '';


  ngOnInit() {
   this.dataSource = [
    {id: 1, name: 'Symphony', link: 'Symphony__.mp3'},
    {id: 2, name: 'Basta', link: 'basta-na-zare.mp3'},
    {id: 3, name: 'Kombinacija', link: 'kombinacija-ne-zabyvaj.mp3'},
    {id: 4, name: 'Xolidayboy', link: 'xolidayboy-moja-huliganka.mp3'},
    ];
  }

  onPlay(event: any) {
    this.value = event.target.firstChild.data
  }
}
