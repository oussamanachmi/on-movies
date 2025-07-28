import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'on-movies';

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects === '/') {
          this.renderer.addClass(document.body, 'home-page');
          this.renderer.removeClass(document.body, 'not-home');
          console.log(document.body);
        } else {
          this.renderer.addClass(document.body, 'not-home');
          this.renderer.removeClass(document.body, 'home-page');
        }
      });
  }
}
