import { Component, Input } from '@angular/core';

@Component({
    selector: 'testimonials',
    template: `
        <h2>Testimonials</h2>
        <ul>
            <li *ngFor="let testimonial of testimonials">{{testimonial.description}}</li>
        </ul>
`,
})
export class TestimonialsComponent {
    @Input() testimonials: Array<{person: string, description: string}>;
}
