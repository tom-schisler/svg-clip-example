$(document).ready(function () {
  $(".svg-container .fsElementContent").each(function () {
    $(this)
      .find("svg a")
      .on("mouseenter", function () {
        $(this).parent().addClass("hover"),
          $(this).parent().siblings().addClass("siblings");
      }),
      $(this)
        .find("svg a")
        .on("mouseout", function () {
          $(this).parent().removeClass("hover"),
            $(this).parent().siblings().removeClass("siblings");
        }),
      $(this)
        .find("svg a")
        .on("click", function () {
          return (
            $(".content-container .fsContent")
              .css("opacity", "0")
              .css("visibility", "hidden")
              .css("max-height", "0")
              .css("transform", "translate(0,10%)"),
            $(".svg-container svg").removeClass("active"),
            $(this).parent().addClass("active"),
            $(this).parent().hasClass("students")
              ? $(".content-container .fsContent.students")
                  .css("opacity", "1")
                  .css("visibility", "visible")
                  .css("max-height", "9999px")
                  .css("transform", "translate(0,0)")
              : $(this).parent().hasClass("alumni")
              ? $(".content-container .fsContent.alumni")
                  .css("opacity", "1")
                  .css("visibility", "visible")
                  .css("max-height", "9999px")
                  .css("transform", "translate(0,0)")
              : $(this).parent().hasClass("educators")
              ? $(".content-container .fsContent.educators")
                  .css("opacity", "1")
                  .css("visibility", "visible")
                  .css("max-height", "9999px")
                  .css("transform", "translate(0,0)")
              : $(this).parent().hasClass("brookline")
              ? $(".content-container .fsContent.brookline")
                  .css("opacity", "1")
                  .css("visibility", "visible")
                  .css("max-height", "9999px")
                  .css("transform", "translate(0,0)")
              : $(this).parent().hasClass("trustees")
              ? $(".content-container .fsContent.trustees")
                  .css("opacity", "1")
                  .css("visibility", "visible")
                  .css("max-height", "9999px")
                  .css("transform", "translate(0,0)")
              : $(this).parent().hasClass("families") &&
                $(".content-container .fsContent.families")
                  .css("opacity", "1")
                  .css("visibility", "visible")
                  .css("max-height", "9999px")
                  .css("transform", "translate(0,0)"),
            !1
          );
        }),
      setTimeout(function () {
        if (
          $(window).width() < 800 &&
          !$(".svg-container.mobile svg.active").length
        ) {
          var t = $(".svg-container.mobile svg.students");
          t.find("a").click(),
            t.addClass("active hover"),
            t.siblings().addClass("siblings");
        }
      }, 7e3),
      $(document).on("click", function (t) {
        $(t.target).closest($(".svg-content svg a")).length ||
          $(".content-container .fsContent")
            .css("opacity", "0")
            .css("visibility", "hidden")
            .css("max-height", "0");
      }),
      (window.onload = function () {
        var t = $(window).width(),
          e = $(window).height();
        new TimelineMax()
          .fromTo(
            ".intro-container",
            2,
            { autoAlpha: 0 },
            { autoAlpha: 1 },
            0.5
          )
          .fromTo(
            ".svg-container",
            1.5,
            { autoAlpha: 0 },
            { autoAlpha: 1 },
            "+=0.25"
          )
          .fromTo(
            ".svg-container #svg-01",
            1.25,
            { xPercent: -t, yPercent: 0, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-02",
            1.25,
            { xPercent: -t, yPercent: e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-03",
            1.25,
            { xPercent: 0, yPercent: -e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-04",
            1.25,
            { xPercent: 0, yPercent: e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-05",
            1.25,
            { xPercent: 0, yPercent: -e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-06",
            1.25,
            { xPercent: 0, yPercent: -e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-07",
            1.25,
            { xPercent: 0, yPercent: e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-08",
            1.25,
            { xPercent: t / 2, yPercent: -e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-09",
            1.25,
            { xPercent: t, yPercent: -e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-10",
            1.25,
            { xPercent: t, yPercent: e, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container #svg-11",
            1.25,
            { xPercent: t, yPercent: 0, scale: 2 },
            { xPercent: 0, yPercent: 0, scale: 1 },
            3
          )
          .fromTo(
            ".svg-container svg text",
            1,
            { autoAlpha: 0 },
            { autoAlpha: 1 },
            "+=0.25"
          );
      });
  }, 500);
});
