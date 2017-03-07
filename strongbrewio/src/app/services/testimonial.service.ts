import { Injectable } from '@angular/core';
@Injectable()
export class TestimonialService {
    testimonials = [
        {
            person: 'John Doe',
            description: `lipsum`
        },
        {
            person: 'Jane Doe',
            description: `lipsum`
        }]
}