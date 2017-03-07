import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { StrongbrewComponent } from './components/strongbrew/strongbrew.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { ModuleWithProviders } from '@angular/core';
export const routes = [
    {path: "", redirectTo: "/strongbrew", pathMatch: "full"},
    { path: "strongbrew", component: StrongbrewComponent},
    { path: "workshops", component: WorkshopsComponent},
    { path: "contact", component: ContactComponent}
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
