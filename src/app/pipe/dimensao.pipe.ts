import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dimensao'
})
export class DimensaoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      return '3D';
    } else {
      return '2D';
    }
  }

}
