import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {
  transform(value:number,power:number) :number {
    return Math.pow(value,power)
  

 
  }

}
