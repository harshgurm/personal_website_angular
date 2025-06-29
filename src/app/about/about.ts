import { Component, inject } from '@angular/core';
import { TypeWriter } from '../services/type-writer';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [AsyncPipe],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  profile_image:string = "./images/my-profile.webp";
  email:string = "harshgurm@gmail.com";
  total_experience = new Date().getFullYear() - 2016;
  teaching_experience = new Date().getFullYear() - 2023;
  description = [`I am a Senior Full Stack developer with ${this.total_experience}+ years of experience in multiple backend and front-end languages.
            I have ${this.teaching_experience}+ years of teaching experience. I am teaching Database, Advance Database Management, Full Stack
            development and Agile Development courses at George Brown College.
            I am also teaching online Full Stack development bootcamps to students at University of Calgary, Concordia
            University and Western University.
            I am passionate about coding and I love to learn new languages. I thrive on challenges! If I don’t know the
            answer to a technical problem, I am able to research and implement the appropriate solution.`];
  
  typeWriter:TypeWriter = inject(TypeWriter);

  about_me_description$ = this.typeWriter
    .getTypewriterEffect(this.description)
    .pipe(map((text) => text));

  // about_me_description = `I am a Senior Full Stack developer with ${this.total_experience}+ years of experience in multiple backend and front-end languages.
  //           I have ${this.teaching_experience}+ years of teaching experience. I am teaching Database, Advance Database Management, Full Stack
  //           development and Agile related courses at George Brown College.
  //           I am also teaching online Full Stack development bootcamps to students at University of Calgary, Concordia
  //           University and Western University.
  //           I am passionate about coding and I love to learn new languages. I thrive on challenges! If I don’t know the
  //           answer to a technical problem, I am able to research and implement the appropriate solution.`;

  profile_details = [
    { title: "Software Development", description: this.total_experience + "+ years of experience", link:""},
    { title: "Teaching", description: this.teaching_experience + "+ years of experience", link:""},
    { title: "Degree/Diploma", description: "Computer Programming", link:""},
    { title: "Email", description: "harshgurm@gmail.com", link:""},
    { title: "Hobbies", description: "Running, Cycling, Watching movies", link:""},
    { title: "Reviews", description: "Rate My Professor" , link: "https://www.ratemyprofessors.com/professor/2878569"},
  ]
}
