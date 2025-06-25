import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    { id: 1, name: 'HTML', precentage: 100 },
    { id: 2, name: 'CSS', precentage: 90 },
    { id: 3, name: 'Bootstrap', precentage: 90 },
    { id: 4, name: 'JavaScript', precentage: 90 },
    { id: 5, name: 'JQuery', precentage: 90 },
    { id: 6, name: 'Angular', precentage: 85 },
    { id: 7, name: 'TypeScript', precentage: 75 },
    { id: 8, name: 'VueJs', precentage: 80 },
    { id: 9, name: 'PHP', precentage: 85 },
    { id: 10, name: 'Node', precentage: 85 },
    { id: 11, name: 'Java', precentage: 65 },
    { id: 12, name: 'Python', precentage: 70 },
    { id: 13, name: 'Bash', precentage: 85 },
    { id: 14, name: 'Ionic', precentage: 75 },
    {
      id: 15,
      name: 'Databases - Mysql, Mariadb, PostgresSQL, MSSQL',
      precentage: 90,
    },
  ];
}
