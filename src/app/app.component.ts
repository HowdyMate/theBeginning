import { Component } from '@angular/core';
//import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beginning';
  ngOnInit() {
    $(".btn-three").click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.second').offset().top
      }, 1500);
    });
  }
}
