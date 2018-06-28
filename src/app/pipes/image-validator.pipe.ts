import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageValidator'
})
export class ImageValidatorPipe implements PipeTransform {

  transform(value: any): any {
    return (value.backdrop_path!=null)?"http://image.tmdb.org/t/p/w500"+value.backdrop_path:"assets/img/noimage.png";
  }

}
