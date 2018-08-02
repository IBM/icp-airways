import { Pipe, PipeTransform } from '@angular/core'
import { pipe } from 'rxjs';
@Pipe({
    name: 'timeRefactor'
})
export class TimeRefactorPipe implements PipeTransform {
     private character:any=':'
     private position:any=2
    transform(value: any, ...args: any[]) {
        if (value.length !==4 ){
            value = '0'+value
        }
        return [value.slice(0, this.position), this.character, value.slice(this.position)].join('');
    }
}