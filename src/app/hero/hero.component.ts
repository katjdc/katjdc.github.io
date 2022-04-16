import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @ViewChild('animatedFlower1', { static: true }) animatedFlower1!: ElementRef<HTMLDivElement>;
  @ViewChild('animatedFlower2', { static: true }) animatedFlower2!: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.initAnimations();
  }

  initScrollAnimations(): void {
    gsap.to(this.animatedFlower1.nativeElement, {
      scrollTrigger: {
        trigger: this.animatedFlower1.nativeElement,
        scrub: true,
        start: '110% center'
      },
      duration: 1.1,
      scale: 1.2,
    });
    gsap.to(this.animatedFlower2.nativeElement, {
      scrollTrigger: {
        trigger: this.animatedFlower2.nativeElement,
        scrub: true,
        start: '80% center'
      },
      duration: 1.1,
      scale: 1.2,
    });
  }

  initAnimations(): void {
    gsap.from(this.animatedFlower1.nativeElement, {
      duration: 2,
      opacity: 0,
      x: -50,
      delay: 1,
    });
    gsap.from(this.animatedFlower2.nativeElement, {
      duration: 2,
      opacity: 0,
      x: -50,
      delay: 1,
    });
  }

}
