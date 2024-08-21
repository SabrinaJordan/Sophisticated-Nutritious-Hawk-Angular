import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  image1Src: string = '/assets/_5632fda2-3162-458c-b07b-aef27645b1b0-1500w.jpg'
  @Input()
  imageSrc2: string = '/assets/final-200w.png'
  @Input()
  imageSrc1: string = '/assets/final-200w.png'
  @Input()
  content1: string = 'Where Values Inspire Vision and Insights'
  @Input()
  action1: string = 'Learn More'
  @Input()
  image1Alt: string = 'Data Consulting Image'
  @Input()
  action2: string = 'Get in Touch'
  @Input()
  imageAlt2: string = 'image'
  @Input()
  heading1: string = 'Unlock the Power of Your Data with 8bit Insights'
  @Input()
  imageAlt1: string = 'image'
  constructor() {}
}
