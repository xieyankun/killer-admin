;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 0 128 0C57.312 0 0 57.312 0 128l0 896 64 0L64 192c0-70.688 50.144-128 112-128l672 0c61.856 0 112 57.312 112 128l0 832 64 0L1024 128C1024 57.312 966.688 0 896 0zM256 384l512 0 0-64L256 320 256 384zM256 544l512 0 0-64L256 480 256 544zM256 704l512 0 0-64L256 640 256 704z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M843.998609 1001.73913H180.001391C142.848 1001.73913 111.304348 971.464348 111.304348 934.956522V200.347826c0-36.507826 31.565913-66.782609 68.697043-66.782609h154.134261v83.545044c0 27.670261 13.267478 50.109217 29.629218 50.109217h296.381217c16.361739 0 29.629217-22.438957 29.629217-50.109217V133.565217h154.223305C881.152 133.565217 912.695652 163.84 912.695652 200.347826v734.608696c0 36.507826-31.543652 66.782609-68.697043 66.782608zM756.869565 422.956522H267.130435v44.521739h489.73913v-44.521739z m0 178.086956H267.130435v44.521739h489.73913v-44.521739z m0 178.086957H267.130435v44.521739h489.73913v-44.521739z m-127.666087-534.194087h-233.73913c-21.504 0-38.956522-14.246957-38.956522-31.810783V149.504c0-17.563826 17.452522-31.810783 38.956522-31.810783h2.359652a55.407304 55.407304 0 0 1-2.359652-15.89426C395.464348 57.878261 447.799652 22.26087 512.333913 22.26087s116.869565 35.59513 116.869565 79.538087c0 5.453913-0.823652 10.774261-2.359652 15.89426h2.359652c21.526261 0 38.956522 14.246957 38.956522 31.810783v63.621565c0 17.563826-17.430261 31.810783-38.956522 31.810783zM548.374261 66.114783h-67.227826v66.114782h67.227826V66.114783z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)