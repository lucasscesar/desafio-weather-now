import { Component, OnInit, Input } from '@angular/core';
import { City } from './../../models/card/city.model';
import { TemperatureFormatPipe } from '../../pipes/temperature-format/temperature-format.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() id: string;

  city: City;
  lastUpdate: Date;

  constructor(private pipe: TemperatureFormatPipe) {
    this.getCity();
  }

  ngOnInit() { }

  getCity = () => {
    this.city = new City('2172797', 'São Paulo, BR', this.pipe.transform(35), 77, 1007);
    this.lastUpdate = new Date();
  }

  getTemperatureStyle = () => {
    if (this.city.temperature <= 5) {
      return 'card__temperature--cold';
    } else if (this.city.temperature > 5 && this.city.temperature <= 25) {
      return 'card__temperature--neutral';
    } else {
      return 'card__temperature--hot';
    }
  }

}
