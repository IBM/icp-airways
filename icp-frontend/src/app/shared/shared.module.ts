import { CountryRefactorPipe } from './pipes/country.pipe';
import { TimeRefactorPipe } from './pipes/time.pipe';
import { NgModule} from '@angular/core'
@NgModule({
    declarations: [ TimeRefactorPipe, CountryRefactorPipe ],
    exports: [ TimeRefactorPipe, CountryRefactorPipe ]
})
export class SharedModule{
    
}