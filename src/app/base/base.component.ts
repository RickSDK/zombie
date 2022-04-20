import { Component, OnInit } from '@angular/core';
import { BaseColorsComponent } from '../base-colors/base-colors.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent extends BaseColorsComponent implements OnInit {
  public title = 'title';
  public buttonIdx = 0;

  constructor() { super(); }

  ngOnInit(): void {
  }
  ngClassSegment(num: number, buttonIdx: number) {
    if (num == buttonIdx)
      return 'btn btn-warning segmentButton roundButton';
    else
      return 'btn btn-success segmentButton roundButton';
  }
}

