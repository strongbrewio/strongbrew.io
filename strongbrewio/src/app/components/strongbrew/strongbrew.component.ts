import { Component } from '@angular/core';
import { TestimonialService } from '../../services/testimonial.service';
import { TechnologyService } from '../../services/technology.service';

@Component({
    selector: 'strongbrew',
    template: `
        <h1>Hi there! Have you tried our awesome brews?</h1>
        <about></about>
        <testimonials [testimonials]="testimonials"></testimonials>
        <technology-stack [technologies]="technologies"></technology-stack>
`,
})
export class StrongbrewComponent {
    testimonials = this.testimonialService.testimonials;
    technologies = this.technologyService.technologies;

    constructor(private testimonialService: TestimonialService, private technologyService: TechnologyService) {

    }
}
