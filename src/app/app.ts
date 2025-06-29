import { Component, Renderer2, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  protected title = 'angular_personal_website';
  showAllComponents = true;

  constructor(
    private route:ActivatedRoute,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.src = './js/main.js';
    script.onload = () => {
    };
    this.renderer.appendChild(this.document.body, script);
  }
}
