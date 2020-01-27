import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/city.model';
import { TemperatureFormatPipe } from '../../pipes/temperature-format/temperature-format.pipe';
import { CityService } from '../../services/city/city.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() id: string;

  city: City;
  lastUpdate: Date;

  constructor(private pipe: TemperatureFormatPipe, private cityService: CityService) {
    this.getCity();
  }

  ngOnInit() { }

  getCity = () => {
    this.city = new City('2172797', 'São Paulo, BR', this.pipe.transform(88), 77, 1007);
    this.lastUpdate = new Date();

    this.cityService.getCityById('2172797')
      .subscribe(city => console.log(city))
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
