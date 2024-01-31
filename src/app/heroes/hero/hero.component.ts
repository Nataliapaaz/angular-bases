import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string ="ironman";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `My name ${this.name} and I am ${this.age} years old`;
  }

  changeHero(): string {
    this.name = 'Hulk';
    return this.name;
  };

  changeAge(): number {
    this.age = 35;
    return this.age;
  };

  resetForm(): void {
    this.name = "ironman";
    this.age = 45;

    //document.querySelectorAll('h1')!.forEach(element =>
    //  {element.innerHTML = '<h1>Desde Angular</h1>';
  //});
  };

}
