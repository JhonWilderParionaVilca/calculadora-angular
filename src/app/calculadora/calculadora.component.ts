import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operando1: number = 0.0;
  operando2: number = 0.0;

  resultado: number = 0.0;
  msg: string = '';

  obtenerOperando1(event: Event){
    this.operando1 = parseFloat((<HTMLInputElement>event.target).value);
  }

  obtenerOperando2(event: Event){
    this.operando2 = parseFloat((<HTMLInputElement>event.target).value);
  }

  sumar(){
    this.msg = `La suma de ${this.operando1} + ${this.operando2} es: `
    this.resultado = this.operando1 + this.operando2;
    // console.log(this.operando1)
    // console.log(this.operando2)
    // console.log(this.resultado)
  }
  multiplicar(){
    this.msg = `La multiplicación de ${this.operando1} * ${this.operando2} es: `
    this.resultado = this.operando1 * this.operando2;
  }

}
