import { Component, inject } from '@angular/core';
import { TypeWriter } from '../services/type-writer';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  titles = ["I'm a Developer", "I'm a Professor"];
  
  typeWriter:TypeWriter = inject(TypeWriter);

  image_url = "./images/home-bg.webp";

  typedText$ = this.typeWriter
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));

}
