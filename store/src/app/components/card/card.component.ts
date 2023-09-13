import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardImage:string =""
  //vem do card-label-componet que são subcomponets do card
  @Input()
  gameLabel:string = ""
  //vem do card-price component que são subcomponets do card
  @Input()
  gameType:string = "Digital Ps4"
  @Input()
  gamePrice:string = "R$ 250,00"


  constructor() { }

  ngOnInit(): void {
  }

}
