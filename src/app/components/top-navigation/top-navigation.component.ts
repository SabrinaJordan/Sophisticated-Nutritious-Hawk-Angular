import { Component, Input } from '@angular/core'

@Component({
  selector: 'top-navigation',
  templateUrl: 'top-navigation.component.html',
  styleUrls: ['top-navigation.component.css'],
})
export class TopNavigation {
  @Input()
  logoSrc: string = '/assets/final-1400w.png'
  @Input()
  link1: string = 'Home'
  @Input()
  action2: string = 'Action 2'
  @Input()
  link5: string = 'Values'
  @Input()
  link3: string = 'About Us'
  @Input()
  link2: string = 'Services'
  @Input()
  link4: string = 'Contact'
  @Input()
  action1: string = 'Email Us'
  @Input()
  logoAlt: string = '8bit Insights Logo'
  constructor() {}
}
