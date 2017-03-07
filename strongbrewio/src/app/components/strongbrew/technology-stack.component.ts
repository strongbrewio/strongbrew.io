import { Component, Input } from '@angular/core';

@Component({
    selector: 'technology-stack',
    template: `
        <h2>Technology stack</h2>
        <ul>
            <li *ngFor="let technology of technologies">{{technology.alt}}</li>
        </ul>
`,
})
export class TechnologyStackComponent {
    @Input() technologies: Array<{image: string, alt: string}>;
}
