import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-values',
  templateUrl: 'values.component.html',
  styleUrls: ['values.component.css'],
})
export class Values {
  @ContentChild('feature1Description3')
  feature1Description3: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @ContentChild('feature3Description6')
  feature3Description6: TemplateRef<any>
  @Input()
  feature1ImgSrc: string = '/assets/img_20201011_120505-1400w.jpg'
  @Input()
  feature3ImgAlt: string = 'Data Visualization Image'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @Input()
  feature1ImgSrc2: string = '/assets/20230923_182003-1400w.jpg'
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @Input()
  feature2ImgAlt2: string = 'Data Transformation Image'
  @ContentChild('feature3Title42')
  feature3Title42: TemplateRef<any>
  @ContentChild('feature3Description4')
  feature3Description4: TemplateRef<any>
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1639815188508-13f7370f664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgSrc2: string =
    'https://images.unsplash.com/photo-1639815188508-13f7370f664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature3Description42')
  feature3Description42: TemplateRef<any>
  @Input()
  imageSrc: string = '/assets/8%20bit%20values-200h.png'
  @Input()
  feature2ImgAlt: string = 'Data Transformation Image'
  @ContentChild('feature2Title2')
  feature2Title2: TemplateRef<any>
  @Input()
  imageAlt: string = 'image'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature1Title3')
  feature1Title3: TemplateRef<any>
  @Input()
  feature1ImgAlt: string = 'Data Cleansing Image'
  @ContentChild('feature3Title6')
  feature3Title6: TemplateRef<any>
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @Input()
  feature3ImgAlt2: string = 'Data Visualization Image'
  @Input()
  feature1ImgAlt2: string = 'Data Cleansing Image'
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @Input()
  feature3ImgSrc2: string =
    'https://images.unsplash.com/photo-1680458842024-9a87dc72faa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature2Description2')
  feature2Description2: TemplateRef<any>
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1680458842024-9a87dc72faa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3OTIxMnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature3Title4')
  feature3Title4: TemplateRef<any>
  activeTab: number = 0
  constructor() {}
}
