import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IntrumentsService } from '../services/instruments.service';

@Component({
  selector: 'app-suitcase',
  templateUrl: './suitcase.component.html',
  styleUrls: ['./suitcase.component.css']
})
export class SuitcaseComponent {
  suitcase$: Observable<any>;

  constructor(private instruments: IntrumentsService) {}

  ngOnInit() {
    this.suitcase$ = this.instruments.getUserInstruments();
    this.instruments.getUserInstruments().subscribe((res) => console.log(res))


  }
}
