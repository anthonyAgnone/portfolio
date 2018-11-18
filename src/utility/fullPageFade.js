/*!
 * fullpage.js Fading Effect Extension 0.0.8 for fullPage.js v3
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
window.fp_fadingEffectExtension = function() {
  var e,
    t,
    n,
    i,
    o = this,
    a = fp_utils,
    l = fp_utils.$,
    r = fullpage_api.getFullpageData(),
    s = r.options,
    c = r.internals,
    f = s.scrollingSpeed,
    d = '.fullpage-wrapper',
    p = '.active',
    u = '.fp-section',
    m = u + p,
    g = '.fp-slide',
    v = '.fp-slidesContainer',
    E = g + p,
    h = 'fp-fading-animations',
    y = '#' + h,
    w = 'fp-fading-sheet',
    S = '#' + w
  function T(e) {
    e.detail ? ((i = !1), C()) : ((i = n.autoScrolling), O())
  }
  function _() {
    var e
    ;(e = l(d)[0]).addEventListener('afterResponsive', T),
      e.addEventListener('destroy', C),
      (n = a.deepExtend({}, s)),
      (i = n.autoScrolling),
      (s.scrollBar = !1),
      b('sections') && fullpage_api.setAutoScrolling(!0)
    var o = b('slides') ? L(g) : '',
      r = b('sections') ? L(u) : ''
    s.fadingEffect && x(w, r + o), c.removeAnimation(l(v)), clearTimeout(t), (t = setTimeout(A, 300))
  }
  function b(e) {
    return !0 === s.fadingEffect || s.fadingEffect === e
  }
  function x(e, t) {
    if (!l('#' + e).length) {
      var n = document.head || document.getElementsByTagName('head')[0]
      a.appendTo(
        ((i = e),
        (o = t),
        ((r = document.createElement('style')).type = 'text/css'),
        (r.id = i),
        r.styleSheet ? (r.styleSheet.cssText = o) : r.appendChild(document.createTextNode(o)),
        r),
        n
      )
    }
    var i, o, r
  }
  function A() {
    e = 'all ' + f + 'ms ' + s.easingcss3
    var t = b('slides') ? B(g) : '',
      n = b('sections') ? B(u) : ''
    x(h, t + n)
  }
  function B(t) {
    return t + '{-webkit-transition: ' + e + ';transition: ' + e + ';}'
  }
  function L(e) {
    return (
      (e === g ? '.fp-slidesContainer {width: 100% !important;transform: none!important;}' : '') +
      e +
      '{width: 100% !important;position: absolute !important;left: 0;top: 0;visibility: hidden;opacity: 0;}' +
      e +
      '.active{visibility: visible;opacity: 1;}'
    )
  }
  function C() {
    if ((a.remove(l(y)), N())) {
      var e = l(E, l(m)[0])[0],
        t = l(v, l(m)[0])
      c.removeAnimation(t),
        a.remove(l(S)),
        (s.scrollBar = n.scrollBar),
        fullpage_api.setAutoScrolling(i),
        null != e && c.silentLandscapeScroll(e)
    }
  }
  function N() {
    return l(S).length
  }
  function O() {
    ;(s.fadingEffect = !0), N() || (_(), window.scrollTo(0, 0), c.silentScroll(0))
  }
  ;(o.update = function(e) {
    a.remove(l(y)), (f = e), A()
  }),
    (o.turnOn = O),
    (o.turnOff = C),
    (o.apply = _),
    (o.c = c.c)
  var k = o['common'.charAt(0)]
  return (
    'complete' === document.readyState && k('fadingEffect'),
    window.addEventListener('load', function() {
      k('fadingEffect')
    }),
    o
  )
}
