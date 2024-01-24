import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  { path: 'contact', component: ContactComponent, title: 'Page de contact' },
  { path: 'home', component: HomeComponent, title: "Page d'accueil" },
  { path: 'about', component: AboutComponent, title: 'Page de description' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
