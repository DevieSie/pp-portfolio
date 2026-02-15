import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { AboutPage } from './pages/about-page/about-page';
import { ResumePage } from './pages/resume-page/resume-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { PosPage } from './pages/pos-page/pos-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainPage },
  { path: 'about', component: AboutPage },
  { path: 'resume', component: ResumePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'pos', component: PosPage },
  { path: '**', redirectTo: 'main' },
];