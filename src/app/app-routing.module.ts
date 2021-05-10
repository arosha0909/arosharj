import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { LauoutComponent } from './main/lauout/lauout.component';
import { LobbyComponent } from './main/lobby/lobby.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { TokenAccessComponent } from './token-access/token-access.component';

const routes: Routes = [
  {
    path: 'token/:token',
    children: [
      {
        path: '**',
        component: TokenAccessComponent,
      }
    ],
  },
  {
    path: '',
    component: LauoutComponent,
    children: [
      {
        path: '',
        component: LobbyComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
