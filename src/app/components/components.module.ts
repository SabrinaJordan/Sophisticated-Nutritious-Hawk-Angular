import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { MarketEdge } from './market-edge/market-edge.component'
import { ContactInfo } from './contact-info/contact-info.component'
import { AboutUs } from './about-us/about-us.component'
import { Header } from './header/header.component'
import { Footer } from './footer/footer.component'
import { Values } from './values/values.component'
import { TopNavigation } from './top-navigation/top-navigation.component'

@NgModule({
  declarations: [
    MarketEdge,
    ContactInfo,
    AboutUs,
    Header,
    Footer,
    Values,
    TopNavigation,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MarketEdge,
    ContactInfo,
    AboutUs,
    Header,
    Footer,
    Values,
    TopNavigation,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
