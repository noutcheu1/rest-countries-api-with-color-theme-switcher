import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  bodyElement = document.body;
  changetheme:boolean = false;

  changeTheme(): void{
    
    if (this.changetheme) {
        document.documentElement.removeAttribute("data-theme");
        this.changetheme  = false;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      this.changetheme = true;
    }
    
    
  }

  
}
