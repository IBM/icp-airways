import { slideTrigger } from './../animations';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

// declaring my own dataType. Values are in union i.e the variable value can either be 'left' or 'right'
type PaneType = 'left' | 'right';

@Component({
  selector: 'app-slide-auth',
  templateUrl: './slide-auth.component.html',
  styleUrls: ['./slide-auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideTrigger]
})
export class SlideAuthComponent implements OnInit {
  @Input() activePane: PaneType = 'left';
  constructor() {}

  ngOnInit() {}
}
