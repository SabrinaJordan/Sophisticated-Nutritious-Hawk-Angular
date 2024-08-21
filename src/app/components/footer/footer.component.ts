import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @ContentChild('link4')
  link4: TemplateRef<any>
  @ContentChild('link1')
  link1: TemplateRef<any>
  @ContentChild('link2')
  link2: TemplateRef<any>
  @ContentChild('link3')
  link3: TemplateRef<any>
  @ContentChild('link5')
  link5: TemplateRef<any>
  @Input()
  logoSrc: string = '/assets/final%20long%208bit%20logo-200h.png'
  @Input()
  logoAlt: string = '8bit Insights Logo'
  constructor() {}
}
