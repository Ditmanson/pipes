import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits: string): number {
    console.log(targetUnits);
    if (!value) {
      return 0;
    }
    switch (targetUnits) {
      case 'km':
        return value * 1.6 ;
      case 'm':
        return value * 1609.34 ;
      default:
        return value;
    }
  }
  // transform(value: number, targetUnits: string): unknown {
  //   console.log(targetUnits);
  //   if (!value) {
  //     return 0;
  //   }
  //   switch (targetUnits) {
  //     case 'km':
  //       return (value as number) * 1.6 ;
  //     case 'm':
  //       return (value as number) * 1609.34 ;
  //     default:
  //       return (value as number)
  //   }
  //   return 1.61*(value as number);
  // }

}
