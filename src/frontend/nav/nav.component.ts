import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  bodyElement = document.body;
  changetheme:boolean = false;
  theme:string = "../../assets/night.svg"
  nameMode:string = "Dark Mode";
  changeTheme(): void{
    
    if (this.changetheme) {
        document.documentElement.removeAttribute("data-theme");
        this.changetheme  = false;
        this.nameMode = "Dark Mode";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      this.changetheme = true;
      this.nameMode = "Light Mode";
    }
    
    this.theme = this.changetheme?"../../assets/sun.svg":"../../assets/night.svg";
    
  }

  
}
