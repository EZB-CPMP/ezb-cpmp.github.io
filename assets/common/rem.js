!function (a, b) {
    function h() {
      let d = e
        .getBoundingClientRect()
        .width;
      b = b || 540,
      d > b && (d = b),
        f = 100 * d / a,
        e.style.fontSize = f + "px",
      c.body && i()
    }

    function i() {
      c.body.style.position = "relative",
      c.body.style.fontSize = 16 / f + "rem",
      c.body.style.margin = "0 auto"
      c.body.style.maxWidth = b + "px"
    }

    let g,
      c = document,
      d = window,
      e = c.documentElement,
      f = 16;
    h(),
      d.addEventListener("resize", function () {
        clearTimeout(g),
          g = setTimeout(h(), 300)
      }, !1),
      d.addEventListener("pageshow", function (a) {
        a.persisted && (clearTimeout(g), g = setTimeout(h(), 300))
      }, !1),
      d.addEventListener("DOMContentLoaded", function () {
        i()
      }, !1)
  }(720, 640);