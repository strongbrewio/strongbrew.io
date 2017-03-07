import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: `
        <h2>What are we about</h2>
        <h3>We are about giving awesome training/coaching in webapplications</h3>
        <p>
            We (Brecht Billiet and Kwinten Pisman) are giving frontend-software-workshops for quite a while now. Since the
            traction is getting hotter and hotter, we decided to put a name behind our concept: StrongBrew. StrongBrew does not
            only stand for the fact that we adore the famous belgian beers, but we also look at our workshops as brews, certain
            recipes to create awesome webapps. We also hold strong opinions of how one should create webapplications, and even
            though there are multiple ways to get stuff done, we would love to teach you how we do things.
        </p>
`,
})
export class AboutComponent {
}
