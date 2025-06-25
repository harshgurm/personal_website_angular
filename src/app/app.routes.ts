import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { PortfolioDetails } from './portfolio-details/portfolio-details';
import { Skills } from './skills/skills';
import { Resume } from './resume/resume';

export const routes: Routes = [
    {
        path: "home",
        component: Home
    },
    {
        path: "about",
        component: About
    },
    {
        path: "skills",
        component: Skills
    },
        {
        path: "resume",
        component: Resume
    },
    {
        path: "portfolio",
        component: Portfolio
    },
    {
        path:"portfolio/:id",
        component: PortfolioDetails
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }
];
