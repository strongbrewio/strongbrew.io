/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { StrongbrewComponent } from './components/strongbrew/strongbrew.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { appRouting } from './app.routes';
import { TestimonialService } from './services/testimonial.service';
import { TechnologyService } from './services/technology.service';
import { TechnologyStackComponent } from './components/strongbrew/technology-stack.component';
import { TestimonialsComponent } from './components/strongbrew/testimonials.component';
import { AboutComponent } from './components/strongbrew/about.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [ AppComponent, TopBarComponent, ContactComponent, StrongbrewComponent,
    WorkshopsComponent, TechnologyStackComponent, TestimonialsComponent, AboutComponent],
  providers: [TestimonialService, TechnologyService],
  imports: [
    UniversalModule,
    FormsModule,
    appRouting
  ]
})
export class AppModule {

}
