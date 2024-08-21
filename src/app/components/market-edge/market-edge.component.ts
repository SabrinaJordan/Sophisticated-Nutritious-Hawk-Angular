import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'market-edge',
  templateUrl: 'market-edge.component.html',
  styleUrls: ['market-edge.component.css'],
})
export class MarketEdge {
  @Input()
  secondaryAction: string = 'Learn more about us'
  @Input()
  sectionDescription: string =
    'Discover how 8bit Insights can transform your data into decisions and actions'
  @Input()
  feature2Title: string = 'Everything-You-Need Data  Expertise'
  @Input()
  feature2ImageAlt: string = 'Data Visualization Expertise Image'
  @Input()
  feature2Description: string =
    'We can cleanse, move, transform, model, and visualize your data; integrated from disparate source systems into elegant, accurate, and timely reports and alerts to drive your success to new heights.'
  @Input()
  feature3ImageSrc: string =
    '/assets/_40b71423-6da1-4bda-a103-4469ad7a9243-300h.jpg'
  @Input()
  feature3Description: string =
    'Unlock the insights from your data to make the best decisions for your strategic and operational goals, and empower your people to take action toward improvements and efficiency.'
  @Input()
  sectionTitle: string = 'Our Market Edge'
  @Input()
  feature1Description: string =
    'We tailor our data consulting services to meet your specific industry and business needs. Our experience encompasses financial services, retail, non-profit, educational, governmental, and industrial clients.'
  @Input()
  mainAction: string = 'Book a consultation now'
  @Input()
  feature2ImageSrc: string = '/assets/abstract%20art%201-300h.png'
  @Input()
  feature1ImageAlt: string = 'Customized Data Solutions Image'
  @Input()
  feature3ImageAlt: string = 'Data-driven Decision Making Image'
  @Input()
  slogan: string = 'Empowering Your Data Journey'
  @Input()
  feature1ImageSrc: string =
    '/assets/dtc_168_d306010f-7966-4616-948b-38c8835e0fdb-1400w.jpg'
  @Input()
  feature3Title: string = 'Data-driven Decision Making'
  @ContentChild('feature1Title1')
  feature1Title1: TemplateRef<any>
  constructor() {}
}
