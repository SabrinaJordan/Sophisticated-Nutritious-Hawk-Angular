import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
})
export class AboutUs {
  @Input()
  member5Alt: string = 'Image of Michael Brown'
  @Input()
  member6Alt: string = 'Image of Emily Davis'
  @ContentChild('member3Content')
  member3Content: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('member3Job')
  member3Job: TemplateRef<any>
  @ContentChild('member2')
  member2: TemplateRef<any>
  @Input()
  member4Alt: string = 'Image of Sarah Lee'
  @ContentChild('member4')
  member4: TemplateRef<any>
  @Input()
  member6Src: string =
    'https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member6Content')
  member6Content: TemplateRef<any>
  @ContentChild('member1Content')
  member1Content: TemplateRef<any>
  @ContentChild('member4Job')
  member4Job: TemplateRef<any>
  @Input()
  member5Src: string =
    'https://images.unsplash.com/photo-1626967175524-c0bf5d61b21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member6')
  member6: TemplateRef<any>
  @Input()
  member4Src: string =
    'https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member2Job')
  member2Job: TemplateRef<any>
  @ContentChild('member2Content')
  member2Content: TemplateRef<any>
  @Input()
  member3Src: string =
    'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  member2Src: string =
    'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1MDUxNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('member5Job')
  member5Job: TemplateRef<any>
  @Input()
  member3Alt: string = 'Image of Alex Johnson'
  @ContentChild('member5')
  member5: TemplateRef<any>
  @ContentChild('content11')
  content11: TemplateRef<any>
  @Input()
  member2Alt: string = 'Image of Jane Smith'
  @ContentChild('member3')
  member3: TemplateRef<any>
  @Input()
  member1Alt: string = 'Image of John Doe'
  @Input()
  member1Src: string = '/assets/20230920_095757~2-1400w.jpg'
  @ContentChild('member4Content')
  member4Content: TemplateRef<any>
  @ContentChild('member6Job')
  member6Job: TemplateRef<any>
  @ContentChild('member1')
  member1: TemplateRef<any>
  @ContentChild('actionContent1')
  actionContent1: TemplateRef<any>
  @ContentChild('member5Content')
  member5Content: TemplateRef<any>
  @ContentChild('member1Job')
  member1Job: TemplateRef<any>
  constructor() {}
}
