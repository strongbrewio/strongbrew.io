import { Component } from '@angular/core';

@Component({
    selector: 'top-bar',
    template: `
<ul>
    <li><a [routerLink]="['/strongbrew']">Strongbrew</a></li>
    <li><a [routerLink]="['/workshops']">Workshops</a></li>
    <li><a [routerLink]="['/contact']">Contact</a></li>
</ul>
`,
})
export class TopBarComponent {
}
