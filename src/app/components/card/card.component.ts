import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { AppCore } from '../../app.core';
import { City } from '../../models/city.model';
import { CityService } from '../../services/city/city.service';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() details: boolean;

  private subscription: Subscription;

  card: Card;
  error: boolean = true;
  loading: boolean = true;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.card = new Card(this.name);
    this.callAPI();
    this.handleInterval();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private handleSuccess = (city: City) => {
    this.error = false;
    this.loading = false;

    this.card.lastUpdated = new Date();
    this.card.humidity = city.main.humidity;
    this.card.pressure = city.main.pressure;
    this.card.temperature = Math.floor(city.main.temp);
  }

  private handleInterval = () => {
    const minutes = 10 * 60 * 1000;

    interval(minutes)
      .pipe(flatMap(() => {
        this.loading = true;
        return this.cityService.getCityByName(this.name)
      }))
      .subscribe(
        city => this.handleSuccess(city),
        err => {
          this.error = true;
          this.loading = false;

          AppCore.handleError(err);
        });
  }

  callAPI = () => {
    this.loading = true;

    this.cityService.getCityByName(this.name).subscribe(
      city => this.handleSuccess(city),
      err => {
        this.error = true;
        this.loading = false;

        AppCore.handleError(err);
      });
  }

  getTemperatureStyle = () => {
    if (this.card.temperature <= 5) {
      return 'card__temperature--cold';
    } else if (this.card.temperature > 5 && this.card.temperature <= 25) {
      return 'card__temperature--neutral';
    } else {
      return 'card__temperature--hot';
    }
  }

  hasError = () => this.error;

  isLoading = () => this.loading;

  isDetails = () => this.details;

}
