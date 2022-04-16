import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor () { }
  ngOnInit() {
    // Register the ScrollTrigger with gsap
    gsap.registerPlugin(ScrollTrigger);

    //Loop over all the sections and set animations
    gsap.utils.toArray("section").forEach((section: any, i) => {

      gsap.to(section, {
        scrollTrigger: {
          // Trigger the animation as soon as the section comes into view
          trigger: section,
          
          // Pin the section to give a feeling like slide for next section
          pin: true,

          // Remove the extra pin space added by default
          pinSpacing: false
        }
      });
    });
  }
}
