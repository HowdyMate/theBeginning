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
    $(".btn-three").on("click",() => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.second').offset().top - 50
      }, 100);
    });
    $(".nav-item a:contains('about')").on("click",() => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.second').offset().top - 50
      }, 100);
    });
    $(".nav-item a:contains('home')").on("click",() => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.top').offset().top - 50
      }, 100);
    });
    $(".nav-item a:contains('services')").on("click",() => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.third').offset().top - 50
      }, 100);
    });
    $(".nav-item a:contains('works')").on("click",() => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.fourth').offset().top - 50
      }, 100);
    });
    $(".nav-item a:contains('contacts')").on("click",() => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.fifth').offset().top - 50
      }, 100);
    });
    $("ul.navbar-nav li").on("click",()=>{
      $("ul.navbar-nav li a").removeClass("active");
      $(this).addClass("active");
    });
  }
}
