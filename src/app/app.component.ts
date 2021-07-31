import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries';
  dark = false ;
    // darkmode css
   dmBg ='hsl(207, 26%, 17%)';
   dmText = 'hsl(0, 0%, 100%)';
   dmBlock ='hsl(209, 23%, 22%)';
   
    //  lighMode css 
   lmBg = 'hsl(0, 0%, 98%)' ;
   lmText = 'hsl(200, 15%, 8%)';
   lmBlock = ' hsl(0, 0%, 100%)';

  darkMode(){
     this.dark = !this.dark ;
     console.log(this.dark);
     
     document.documentElement.style.setProperty('--bg',this.dmBg);
     document.documentElement.style.setProperty('--text',this.dmText);
     document.documentElement.style.setProperty('--block',this.dmBlock);
  }

  lightMode(){
      this.dark = !this.dark ;
      document.documentElement.style.setProperty('--bg',this.lmBg);
      document.documentElement.style.setProperty('--text',this.lmText);
      document.documentElement.style.setProperty('--block',this.lmBlock);
  }
  
}
