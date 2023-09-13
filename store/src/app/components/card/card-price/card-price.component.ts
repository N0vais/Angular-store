import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input()
  gameType:string = "Digital Ps4"
  @Input()
  gamePrice:string = "R$ 250,00"

  constructor() { }

  ngOnInit(): void {
  }

}
