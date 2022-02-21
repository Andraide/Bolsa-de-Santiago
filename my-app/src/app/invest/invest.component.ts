import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IntrumentsService } from '../services/instruments.service';


@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  instruments$: Observable<any>;

  constructor(private instrumentService: IntrumentsService) {}

  ngOnInit(): void {
    this.instruments$ = this.instrumentService.getIntruments()
  }
}
