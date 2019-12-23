import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: { text: 'Home', icon: 'home' } },
  { path: 'components', component: ComponentsComponent, data: { text: 'Components', icon: 'web' } },
  { path: 'contacts', component: ContactsComponent, data: { text: 'Contacts', icon: 'subject' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
