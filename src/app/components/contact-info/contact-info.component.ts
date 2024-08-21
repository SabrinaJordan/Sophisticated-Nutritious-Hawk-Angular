import { Component, Input } from '@angular/core'

@Component({
  selector: 'contact-info',
  templateUrl: 'contact-info.component.html',
  styleUrls: ['contact-info.component.css'],
})
export class ContactInfo {
  @Input()
  content2: string =
    'We are here to assist you in unlocking the power of your data.'
  @Input()
  content3: string =
    'Our team of experts is ready to provide tailored solutions for your business.'
  @Input()
  clientContactEmail: string = 'info@8bitinsights.com'
  @Input()
  mailingAddress: string = 'P.O. Box 413, Traverse City, MI 49685'
  @Input()
  content1: string =
    'Feel free to reach out to us for any inquiries or to discuss how we can help with your data consulting needs.'
  @Input()
  content4: string = "Let's start the conversation today!"
  @Input()
  sabrinaPhone: string = '+1 (231) 631-1073'
  @Input()
  content5: string = 'Follow us on social media for updates and insights.'
  @Input()
  heading1: string = 'Contact Us'
  constructor() {}
}
