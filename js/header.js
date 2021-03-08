function gotoFAQ() {
  $("html").animate({ scrollTop: $(".faq").offset().top - 30 }, "slow");
  $(".mob_menu_btn").trigger("click");
}

$(document).ready(function () {
  window.isMobile = function () {
    return screen.width <= 768;
  };

  $(".faq_flex .ask").on("click", function () {
    if ($(this).parent("div").hasClass("open")) {
      $(".faq_flex div").removeClass("open");
    } else {
      $(".faq_flex div").removeClass("open");
      $(this).parent("div").addClass("open");
    }
    return false;
  });

  if (window.isMobile()) {
    $(window).scroll(function () {
      var sh = screen.height;
      if ($(window).scrollTop() < $(".form_side").offset().top - sh + 150) {
        $(".join_it").addClass("fix_pos");
      } else {
        $(".join_it").removeClass("fix_pos");
      }
    });
    $(".join_it").click(function () {
      $("html").animate({ scrollTop: $(".form_side").offset().top - 60 }, "slow");
      return false;
    });
  }

  if (window.isMobile()) {
    $(".info .text_info").insertAfter(".solutions");
    $(".lnk_lead").insertAfter(".advantages");
    $(".faq").insertAfter(".form_side");
  }
  $(".banner-content_text_wrap").each(function (i, el) {
    if (!$(this).find(".on-banner").length < 1) {
      $(this).find(".banner-description").addClass("no-title");
    }
  });

  $(".on-banner-titles ").each(function (i, el) {
    if ($(this).find(".banner-additional-info").hasClass("hide")) {
      $(this).css("bottom", "30px");
    }
  });

  if (window.isMobile()) {
    document.addEventListener("touchstart", function () {}, true);
    //close links popup  by any click on screen
    $("html,body").click(function () {
      $(".mob_menu_btn").removeClass("open");
      $("body").removeClass("nav-isOpen");
      $(".mob_menu_btn").find("img").attr("src", "images/humburger-manue.svg");
      $(".header .logo").removeClass("closeMenu");
      $(".header .logo img").attr("src", "images/logo_yes.png");
      $("nav").removeClass("slideRight");
    });
    $(".mob_menu_btn,.slideRight a,.sub_nav_items .ttl").click(function (event) {
      event.stopPropagation();
    });
    //close links popup

    $(".logo").on("click", function () {
      if ($(this).hasClass("closeMenu")) {
        $(".header nav").attr("aria-expanded", "false");
        $(".mob_menu_btn").removeClass("open");
        $(".mob_menu_btn").find("img").attr("src", "images/humburger-manue.svg");
        $(".header .logo").removeClass("closeMenu");
        $(".header .logo img").attr("src", "images/logo_yes.png");
        $("nav").removeClass("slideRight");
      }
    });

    $(".mob_menu_btn").on("click", function () {
      if ($(this).hasClass("open")) {
        $(".header nav").attr("aria-expanded", "false");
        $("body").removeClass("nav-isOpen");
        $(this).removeClass("open");
        $(this).find("img").attr("src", "images/humburger-manue.svg");
        $(".header .logo").removeClass("closeMenu");
        $(".header .logo img").attr("src", "images/logo_yes.png");
        $("nav").removeClass("slideRight");
      } else {
        $(".header nav").attr("aria-expanded", "true");
        $(this).addClass("open");
        $("body").addClass("nav-isOpen");
        $(this).find("img").attr("src", "images/icon-close-white.svg");
        //  $(".header .logo img").attr("src", "images/humburger-manue.svg");
        $(".header .logo").addClass("closeMenu");
        $("nav").addClass("slideRight");
      }
    });
    $(".sub_manue_firstLv >li > a").on("click", function () {
      var act = $(this).next(".sub_nav");
      if ($(act).hasClass("active")) {
        $(act).removeClass("active");
        $(this).removeClass("open");
        return false;
      } else {
        $(".sub_nav").removeClass("active");
        $(act).addClass("active");
        $(".header nav").attr("aria-expanded", "true");
        $(".header nav a").removeClass("open");
        $(this).addClass("open");
        return false;
      }
    });

    $(".header nav .sub_nav_items .ttl").on("click", function () {
      var act = $(this).closest(".item");

      if ($(act).find(".ttl").hasClass("active")) {
        $(act).find(".ttl").removeClass("active");
        $(act).find(".sub_lnk").removeClass("on");
        $(".plus-icon").removeClass("active");
        $(".plus-icon_sub").removeClass("on_plus-icon");
      } else {
        $(".header nav .sub_nav_items .ttl").removeClass("active");
        $(act).find(".ttl").addClass("active");
        $(".sub_lnk").removeClass("on");
        $(act).find(".sub_lnk").addClass("on");
        $(".plus-icon").removeClass("active");
        $(".plus-icon_sub").removeClass("on_plus-icon");
      }
    });

    $(" .header nav .sub_nav_items .plus-icon").on("click", function () {
      var act = $(this);
      if ($(act).hasClass("active")) {
        $(act).removeClass("active");
        $(act).next(".plus-icon_sub").removeClass("on_plus-icon");
      } else {
        $(act).addClass("active");
        $(act).next(".plus-icon_sub").addClass("on_plus-icon");
      }
      return false;
    });
  } else {
    $(" .header nav .sub_nav_items .plus-icon").on("click", function () {
      var act = $(this);
      if ($(act).hasClass("active")) {
        $(act).removeClass("active");
        $(act).next(".plus-icon_sub").removeClass("on_plus-icon");
      } else {
        $(act).addClass("active");
        $(act).next(".plus-icon_sub").addClass("on_plus-icon");
      }
      return false;
    });

    $(".sub_manue_firstLv >li > a").on("mouseenter", function () {
      var self = $(this);
      expendMegaMenue(self);
    });

    $(".sub_manue_firstLv >li > a").focusin(function () {
      var self = $(this);
      expendMegaMenue(self);
    });

    $("header a.selected").on("click", function () {
      $(".sub_manue_firstLv").attr("aria-expanded", "true");
    });

    $(".sub_manue_firstLv >li > a").on("touchstart", function () {
      var self = $(this);
      expendMegaMenue(self);
    });

    $(".header").on("mouseleave", function () {
      closeMegaNav();
    });

    $(".my_sebsc, .logo").focusin(function () {
      closeMegaNav();
    });
  }
});

function closeMegaNav() {
  $(".header").removeClass("height200");
  $(".form_side").removeClass("z-1");
  $(".sub_manue_firstLv").attr("aria-expanded", "false");
  $(".sub_manue_firstLv> li  a").removeClass("selected");
  $(".sub_nav").fadeOut(300);
}

function expendMegaMenue(self) {
  $(".header").addClass("height200");
  $(".form_side").addClass("z-1");
  $(".sub_nav").hide();
  $(".sub_manue_firstLv").attr("aria-expanded", "true");
  self.next(".sub_nav").show();
  $(".sub_manue_firstLv> li  a").removeClass("selected");
  self.addClass("selected");
}

$(".search-box").click(activeSearch);
$(".input-search").keypress(activeSearchOnKeyPress);
$(".input-result").click(onSelect);

function activeSearch() {
  $(this).toggleClass("active");
}

function activeSearchOnKeyPress() {
  $(".search-box").addClass("active");
}

$(".input-result").on("mouseover", addHover);

function addHover() {
  $(".input-result").removeClass("hover");

  $(this).addClass("hover");
}

function onSelect(e) {
  let searchResult = e.target.innerText;

  var inputSearch = document.querySelector(".input-search");
  inputSearch.value = searchResult;

  // console.log(searchResult);
}
