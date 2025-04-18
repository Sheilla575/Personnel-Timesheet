!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : ((t = t || self).ApexCharts = e())
})(this, function () {
  'use strict'
  function v (t) {
    return (v =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          })(t)
  }
  function r (t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function')
  }
  function a (t, e) {
    for (var i = 0; i < e.length; i++) {
      var a = e[i]
      newFunction()
    }

    function newFunction () {
      ;(a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        'value' in a && (a.writable = !0),
        Object.defineProperty(t, a.key, a)
    }
  }
  function n (t, e, i) {
    return e && a(t.prototype, e), i && a(t, i), t
  }
  function o (t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (t[e] = i),
      t
    )
  }
  function s (e, t) {
    var i,
      a = Object.keys(e)
    return (
      Object.getOwnPropertySymbols &&
        ((i = Object.getOwnPropertySymbols(e)),
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
        a.push.apply(a, i)),
      a
    )
  }
  function M (e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {}
      t % 2
        ? s(Object(i), !0).forEach(function (t) {
            o(e, t, i[t])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : s(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
          })
    }
    return e
  }
  function l (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError('Super expression must either be null or a function')
    ;(t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 }
    })),
      e && i(t, e)
  }
  function h (t) {
    return (h = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
  }
  function i (t, e) {
    return (i =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t
      })(t, e)
  }
  function c (r) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1
      if (Reflect.construct.sham) return !1
      if ('function' == typeof Proxy) return !0
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        )
      } catch (t) {
        return !1
      }
    })()
    return function () {
      var t,
        e,
        i,
        a,
        s = h(r)
      return (
        (e = n
          ? ((t = h(this).constructor), Reflect.construct(s, arguments, t))
          : s.apply(this, arguments)),
        (i = this),
        !(a = e) || ('object' != typeof a && 'function' != typeof a)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return t
            })(i)
          : a
      )
    }
  }
  function A (t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return d(t)
      })(t) ||
      (function (t) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t)
      })(t) ||
      (function (t) {
        if (t) {
          if ('string' == typeof t) return d(t, void 0)
          var e = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === e && t.constructor && (e = t.constructor.name),
            'Map' === e || 'Set' === e
              ? Array.from(t)
              : 'Arguments' === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              ? d(t, void 0)
              : void 0
          )
        }
      })(t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function d (t, e) {
    ;(null == e || e > t.length) && (e = t.length)
    for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i]
    return a
  }
  var I =
      (n(
        C,
        [
          {
            key: 'shadeRGBColor',
            value: function (t, e) {
              var i = e.split(','),
                a = t < 0 ? 0 : 255,
                s = t < 0 ? -1 * t : t,
                r = parseInt(i[0].slice(4), 10),
                n = parseInt(i[1], 10),
                o = parseInt(i[2], 10)
              return (
                'rgb(' +
                (Math.round((a - r) * s) + r) +
                ',' +
                (Math.round((a - n) * s) + n) +
                ',' +
                (Math.round((a - o) * s) + o) +
                ')'
              )
            }
          },
          {
            key: 'shadeHexColor',
            value: function (t, e) {
              var i = parseInt(e.slice(1), 16),
                a = t < 0 ? 0 : 255,
                s = t < 0 ? -1 * t : t,
                r = i >> 16,
                n = (i >> 8) & 255,
                o = 255 & i
              return (
                '#' +
                (
                  16777216 +
                  65536 * (Math.round((a - r) * s) + r) +
                  256 * (Math.round((a - n) * s) + n) +
                  (Math.round((a - o) * s) + o)
                )
                  .toString(16)
                  .slice(1)
              )
            }
          },
          {
            key: 'shadeColor',
            value: function (t, e) {
              return C.isColorHex(e)
                ? this.shadeHexColor(t, e)
                : this.shadeRGBColor(t, e)
            }
          }
        ],
        [
          {
            key: 'bind',
            value: function (t, e) {
              return function () {
                return t.apply(e, arguments)
              }
            }
          },
          {
            key: 'isObject',
            value: function (t) {
              return t && 'object' === v(t) && !Array.isArray(t) && null != t
            }
          },
          {
            key: 'listToArray',
            value: function (t) {
              for (var e = [], i = 0; i < t.length; i++) e[i] = t[i]
              return e
            }
          },
          {
            key: 'extend',
            value: function (e, i) {
              var a = this
              'function' != typeof Object.assign &&
                (Object.assign = function (t) {
                  if (null == t)
                    throw new TypeError(
                      'Cannot convert undefined or null to object'
                    )
                  for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var a = arguments[i]
                    if (null != a)
                      for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s])
                  }
                  return e
                })
              var s = Object.assign({}, e)
              return (
                this.isObject(e) &&
                  this.isObject(i) &&
                  Object.keys(i).forEach(function (t) {
                    a.isObject(i[t]) && t in e
                      ? (s[t] = a.extend(e[t], i[t]))
                      : Object.assign(s, o({}, t, i[t]))
                  }),
                s
              )
            }
          },
          {
            key: 'extendArray',
            value: function (t, e) {
              var i = []
              return (
                t.map(function (t) {
                  i.push(C.extend(e, t))
                }),
                i
              )
            }
          },
          {
            key: 'monthMod',
            value: function (t) {
              return t % 12
            }
          },
          {
            key: 'clone',
            value: function (t) {
              if ('[object Array]' === Object.prototype.toString.call(t)) {
                for (var e = [], i = 0; i < t.length; i++)
                  e[i] = this.clone(t[i])
                return e
              }
              if ('[object Null]' === Object.prototype.toString.call(t))
                return null
              if ('[object Date]' === Object.prototype.toString.call(t))
                return t
              if ('object' !== v(t)) return t
              var a = {}
              for (var s in t) t.hasOwnProperty(s) && (a[s] = this.clone(t[s]))
              return a
            }
          },
          {
            key: 'log10',
            value: function (t) {
              return Math.log(t) / Math.LN10
            }
          },
          {
            key: 'roundToBase10',
            value: function (t) {
              return Math.pow(10, Math.floor(Math.log10(t)))
            }
          },
          {
            key: 'roundToBase',
            value: function (t, e) {
              return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
            }
          },
          {
            key: 'parseNumber',
            value: function (t) {
              return null === t ? t : parseFloat(t)
            }
          },
          {
            key: 'randomId',
            value: function () {
              return (Math.random() + 1).toString(36).substring(4)
            }
          },
          {
            key: 'noExponents',
            value: function (t) {
              var e = String(t).split(/[eE]/)
              if (1 === e.length) return e[0]
              var i = '',
                a = t < 0 ? '-' : '',
                s = e[0].replace('.', ''),
                r = Number(e[1]) + 1
              if (r < 0) {
                for (i = a + '0.'; r++; ) i += '0'
                return i + s.replace(/^-/, '')
              }
              for (r -= s.length; r--; ) i += '0'
              return s + i
            }
          },
          {
            key: 'getDimensions',
            value: function (t) {
              var e = getComputedStyle(t),
                i = [],
                a = t.clientHeight,
                s = t.clientWidth
              return (
                (a -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)),
                (s -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                i.push(s),
                i.push(a),
                i
              )
            }
          },
          {
            key: 'getBoundingClientRect',
            value: function (t) {
              var e = t.getBoundingClientRect()
              return {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: t.clientWidth,
                height: t.clientHeight,
                x: e.left,
                y: e.top
              }
            }
          },
          {
            key: 'getLargestStringFromArr',
            value: function (t) {
              return t.reduce(function (t, e) {
                return (
                  Array.isArray(e) &&
                    (e = e.reduce(function (t, e) {
                      return t.length > e.length ? t : e
                    })),
                  t.length > e.length ? t : e
                )
              }, 0)
            }
          },
          {
            key: 'hexToRgba',
            value: function () {
              var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : '#999999',
                e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0.6
              '#' !== t.substring(0, 1) && (t = '#999999')
              for (
                var i = (i = t.replace('#', '')).match(
                    new RegExp('(.{' + i.length / 3 + '})', 'g')
                  ),
                  a = 0;
                a < i.length;
                a++
              )
                i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16)
              return void 0 !== e && i.push(e), 'rgba(' + i.join(',') + ')'
            }
          },
          {
            key: 'getOpacityFromRGBA',
            value: function (t) {
              return parseFloat(t.replace(/^.*,(.+)\)/, '$1'))
            }
          },
          {
            key: 'rgb2hex',
            value: function (t) {
              return (t = t.match(
                /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
              )) && 4 === t.length
                ? '#' +
                    ('0' + parseInt(t[1], 10).toString(16)).slice(-2) +
                    ('0' + parseInt(t[2], 10).toString(16)).slice(-2) +
                    ('0' + parseInt(t[3], 10).toString(16)).slice(-2)
                : ''
            }
          },
          {
            key: 'isColorHex',
            value: function (t) {
              return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(
                t
              )
            }
          },
          {
            key: 'polarToCartesian',
            value: function (t, e, i, a) {
              var s = ((a - 90) * Math.PI) / 180
              return { x: t + i * Math.cos(s), y: e + i * Math.sin(s) }
            }
          },
          {
            key: 'escapeString',
            value: function (t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'x',
                i = t.toString().slice()
              return i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, e)
            }
          },
          {
            key: 'negToZero',
            value: function (t) {
              return t < 0 ? 0 : t
            }
          },
          {
            key: 'moveIndexInArray',
            value: function (t, e, i) {
              if (i >= t.length)
                for (var a = i - t.length + 1; a--; ) t.push(void 0)
              return t.splice(i, 0, t.splice(e, 1)[0]), t
            }
          },
          {
            key: 'extractNumber',
            value: function (t) {
              return parseFloat(t.replace(/[^\d.]*/g, ''))
            }
          },
          {
            key: 'findAncestor',
            value: function (t, e) {
              for (; (t = t.parentElement) && !t.classList.contains(e); );
              return t
            }
          },
          {
            key: 'setELstyles',
            value: function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
            }
          },
          {
            key: 'isNumber',
            value: function (t) {
              return (
                !isNaN(t) &&
                parseFloat(Number(t)) === t &&
                !isNaN(parseInt(t, 10))
              )
            }
          },
          {
            key: 'isFloat',
            value: function (t) {
              return Number(t) === t && t % 1 != 0
            }
          },
          {
            key: 'isSafari',
            value: function () {
              return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }
          },
          {
            key: 'isFirefox',
            value: function () {
              return -1 < navigator.userAgent.toLowerCase().indexOf('firefox')
            }
          },
          {
            key: 'isIE11',
            value: function () {
              if (
                -1 !== window.navigator.userAgent.indexOf('MSIE') ||
                -1 < window.navigator.appVersion.indexOf('Trident/')
              )
                return !0
            }
          },
          {
            key: 'isIE',
            value: function () {
              var t = window.navigator.userAgent,
                e = t.indexOf('MSIE ')
              if (0 < e)
                return parseInt(t.substring(e + 5, t.indexOf('.', e)), 10)
              if (0 < t.indexOf('Trident/')) {
                var i = t.indexOf('rv:')
                return parseInt(t.substring(i + 3, t.indexOf('.', i)), 10)
              }
              var a = t.indexOf('Edge/')
              return (
                0 < a && parseInt(t.substring(a + 5, t.indexOf('.', a)), 10)
              )
            }
          }
        ]
      ),
      C),
    E =
      (n(S, [
        {
          key: 'getDefaultFilter',
          value: function (t, e) {
            var i = this.w
            t.unfilter(!0),
              new window.SVG.Filter().size('120%', '180%', '-5%', '-40%'),
              'none' !== i.config.states.normal.filter
                ? this.applyFilter(
                    t,
                    e,
                    i.config.states.normal.filter.type,
                    i.config.states.normal.filter.value
                  )
                : i.config.chart.dropShadow.enabled &&
                  this.dropShadow(t, i.config.chart.dropShadow, e)
          }
        },
        {
          key: 'addNormalFilter',
          value: function (t, e) {
            var i = this.w
            i.config.chart.dropShadow.enabled &&
              !t.node.classList.contains('apexcharts-marker') &&
              this.dropShadow(t, i.config.chart.dropShadow, e)
          }
        },
        {
          key: 'addLightenFilter',
          value: function (t, i, e) {
            var a = this,
              s = this.w,
              r = e.intensity
            I.isFirefox() ||
              (t.unfilter(!0),
              new window.SVG.Filter(),
              t.filter(function (t) {
                var e = s.config.chart.dropShadow
                ;(e.enabled ? a.addShadow(t, i, e) : t).componentTransfer({
                  rgb: { type: 'linear', slope: 1.5, intercept: r }
                })
              }),
              t.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse'),
              this._scaleFilterSize(t.filterer.node))
          }
        },
        {
          key: 'addDarkenFilter',
          value: function (t, i, e) {
            var a = this,
              s = this.w,
              r = e.intensity
            I.isFirefox() ||
              (t.unfilter(!0),
              new window.SVG.Filter(),
              t.filter(function (t) {
                var e = s.config.chart.dropShadow
                ;(e.enabled ? a.addShadow(t, i, e) : t).componentTransfer({
                  rgb: { type: 'linear', slope: r }
                })
              }),
              t.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse'),
              this._scaleFilterSize(t.filterer.node))
          }
        },
        {
          key: 'applyFilter',
          value: function (t, e, i) {
            var a =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5
            switch (i) {
              case 'none':
                this.addNormalFilter(t, e)
                break
              case 'lighten':
                this.addLightenFilter(t, e, { intensity: a })
                break
              case 'darken':
                this.addDarkenFilter(t, e, { intensity: a })
            }
          }
        },
        {
          key: 'addShadow',
          value: function (t, e, i) {
            var a = i.blur,
              s = i.top,
              r = i.left,
              n = i.color,
              o = i.opacity,
              l = t
                .flood(Array.isArray(n) ? n[e] : n, o)
                .composite(t.sourceAlpha, 'in')
                .offset(r, s)
                .gaussianBlur(a)
                .merge(t.source)
            return t.blend(t.source, l)
          }
        },
        {
          key: 'dropShadow',
          value: function (t, e) {
            var i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              a = e.top,
              s = e.left,
              r = e.blur,
              n = e.color,
              o = e.opacity,
              l = e.noUserSpaceOnUse,
              h = this.w
            return (
              t.unfilter(!0),
              (I.isIE() && 'radialBar' === h.config.chart.type) ||
                ((n = Array.isArray(n) ? n[i] : n),
                t.filter(function (t) {
                  var e =
                    I.isSafari() || I.isFirefox() || I.isIE()
                      ? t
                          .flood(n, o)
                          .composite(t.sourceAlpha, 'in')
                          .offset(s, a)
                          .gaussianBlur(r)
                      : t
                          .flood(n, o)
                          .composite(t.sourceAlpha, 'in')
                          .offset(s, a)
                          .gaussianBlur(r)
                          .merge(t.source)
                  t.blend(t.source, e)
                }),
                l ||
                  t.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse'),
                this._scaleFilterSize(t.filterer.node)),
              t
            )
          }
        },
        {
          key: 'setSelectionFilter',
          value: function (t, e, i) {
            var a,
              s = this.w
            void 0 !== s.globals.selectedDataPoints[e] &&
              -1 < s.globals.selectedDataPoints[e].indexOf(i) &&
              (t.node.setAttribute('selected', !0),
              'none' !== (a = s.config.states.active.filter) &&
                this.applyFilter(t, e, a.type, a.value))
          }
        },
        {
          key: '_scaleFilterSize',
          value: function (i) {
            !(function (t) {
              for (var e in t) t.hasOwnProperty(e) && i.setAttribute(e, t[e])
            })({ width: '200%', height: '200%', x: '-50%', y: '-50%' })
          }
        }
      ]),
      S),
    X =
      (n(k, [
        {
          key: 'setEasingFunctions',
          value: function () {
            var t
            if (!this.w.globals.easing) {
              switch (this.w.config.chart.animations.easing) {
                case 'linear':
                  t = '-'
                  break
                case 'easein':
                  t = '<'
                  break
                case 'easeout':
                  t = '>'
                  break
                case 'easeinout':
                  t = '<>'
                  break
                case 'swing':
                  t = function (t) {
                    return --t * t * (2.70158 * t + 1.70158) + 1
                  }
                  break
                case 'bounce':
                  t = function (t) {
                    return t < 1 / 2.75
                      ? 7.5625 * t * t
                      : t < 2 / 2.75
                      ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                      : t < 2.5 / 2.75
                      ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                      : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
                  }
                  break
                case 'elastic':
                  t = function (t) {
                    return t === !!t
                      ? t
                      : Math.pow(2, -10 * t) *
                          Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) +
                          1
                  }
                  break
                default:
                  t = '<>'
              }
              this.w.globals.easing = t
            }
          }
        },
        {
          key: 'animateLine',
          value: function (t, e, i, a) {
            t.attr(e).animate(a).attr(i)
          }
        },
        {
          key: 'animateCircleRadius',
          value: function (t, e, i, a, s, r) {
            ;(e = e || 0),
              t
                .attr({ r: e })
                .animate(a, s)
                .attr({ r: i })
                .afterAll(function () {
                  r()
                })
          }
        },
        {
          key: 'animateCircle',
          value: function (t, e, i, a, s) {
            t.attr({ r: e.r, cx: e.cx, cy: e.cy })
              .animate(a, s)
              .attr({ r: i.r, cx: i.cx, cy: i.cy })
          }
        },
        {
          key: 'animateRect',
          value: function (t, e, i, a, s) {
            t.attr(e)
              .animate(a)
              .attr(i)
              .afterAll(function () {
                return s()
              })
          }
        },
        {
          key: 'animatePathsGradually',
          value: function (t) {
            var e = t.el,
              i = t.realIndex,
              a = t.j,
              s = t.fill,
              r = t.pathFrom,
              n = t.pathTo,
              o = t.speed,
              l = t.delay,
              h = this.w,
              c = 0
            h.config.chart.animations.animateGradually.enabled &&
              (c = h.config.chart.animations.animateGradually.delay),
              h.config.chart.animations.dynamicAnimation.enabled &&
                h.globals.dataChanged &&
                'bar' !== h.config.chart.type &&
                (c = 0),
              this.morphSVG(
                e,
                i,
                a,
                'line' !== h.config.chart.type || h.globals.comboCharts
                  ? s
                  : 'stroke',
                r,
                n,
                o,
                l * c
              )
          }
        },
        {
          key: 'showDelayedElements',
          value: function () {
            this.w.globals.delayedElements.forEach(function (t) {
              t.el.classList.remove('apexcharts-element-hidden')
            })
          }
        },
        {
          key: 'animationCompleted',
          value: function (t) {
            var e = this.w
            e.globals.animationEnded ||
              ((e.globals.animationEnded = !0),
              this.showDelayedElements(),
              'function' == typeof e.config.chart.events.animationEnd &&
                e.config.chart.events.animationEnd(this.ctx, { el: t, w: e }))
          }
        },
        {
          key: 'morphSVG',
          value: function (t, e, i, a, s, r, n, o) {
            var l = this,
              h = this.w
            function c (t) {
              return (
                'radar' === h.config.chart.type && (n = 1),
                'M 0 '.concat(h.globals.gridHeight)
              )
            }
            ;(s = s || t.attr('pathFrom')),
              (r = r || t.attr('pathTo')),
              (!s || -1 < s.indexOf('undefined') || -1 < s.indexOf('NaN')) &&
                (s = c()),
              (-1 < r.indexOf('undefined') || -1 < r.indexOf('NaN')) &&
                (r = c()),
              h.globals.shouldAnimate || (n = 1),
              t
                .plot(s)
                .animate(1, h.globals.easing, o)
                .plot(s)
                .animate(n, h.globals.easing, o)
                .plot(r)
                .afterAll(function () {
                  I.isNumber(i)
                    ? i ===
                        h.globals.series[h.globals.maxValsInArrayIndex].length -
                          2 &&
                      h.globals.shouldAnimate &&
                      l.animationCompleted(t)
                    : 'none' !== a &&
                      h.globals.shouldAnimate &&
                      ((!h.globals.comboCharts &&
                        e === h.globals.series.length - 1) ||
                        h.globals.comboCharts) &&
                      l.animationCompleted(t),
                    l.showDelayedElements()
                })
          }
        }
      ]),
      k),
    Y =
      (n(
        w,
        [
          {
            key: 'drawLine',
            value: function (t, e, i, a) {
              var s =
                  4 < arguments.length && void 0 !== arguments[4]
                    ? arguments[4]
                    : '#a8a8a8',
                r =
                  5 < arguments.length && void 0 !== arguments[5]
                    ? arguments[5]
                    : 0,
                n =
                  6 < arguments.length && void 0 !== arguments[6]
                    ? arguments[6]
                    : null
              return this.w.globals.dom.Paper.line().attr({
                x1: t,
                y1: e,
                x2: i,
                y2: a,
                stroke: s,
                'stroke-dasharray': r,
                'stroke-width': n
              })
            }
          },
          {
            key: 'drawRect',
            value: function () {
              var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                i =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                a =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                s =
                  4 < arguments.length && void 0 !== arguments[4]
                    ? arguments[4]
                    : 0,
                r =
                  5 < arguments.length && void 0 !== arguments[5]
                    ? arguments[5]
                    : '#fefefe',
                n =
                  6 < arguments.length && void 0 !== arguments[6]
                    ? arguments[6]
                    : 1,
                o =
                  7 < arguments.length && void 0 !== arguments[7]
                    ? arguments[7]
                    : null,
                l =
                  8 < arguments.length && void 0 !== arguments[8]
                    ? arguments[8]
                    : null,
                h =
                  9 < arguments.length && void 0 !== arguments[9]
                    ? arguments[9]
                    : 0,
                c = this.w.globals.dom.Paper.rect()
              return (
                c.attr({
                  x: t,
                  y: e,
                  width: 0 < i ? i : 0,
                  height: 0 < a ? a : 0,
                  rx: s,
                  ry: s,
                  opacity: n,
                  'stroke-width': null !== o ? o : 0,
                  stroke: null !== l ? l : 'none',
                  'stroke-dasharray': h
                }),
                c.node.setAttribute('fill', r),
                c
              )
            }
          },
          {
            key: 'drawPolygon',
            value: function (t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : '#e1e1e1',
                i =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                a =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : 'none'
              return this.w.globals.dom.Paper.polygon(t).attr({
                fill: a,
                stroke: e,
                'stroke-width': i
              })
            }
          },
          {
            key: 'drawCircle',
            value: function (t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                i = this.w.globals.dom.Paper.circle(2 * t)
              return null !== e && i.attr(e), i
            }
          },
          {
            key: 'drawPath',
            value: function (t) {
              var e = t.d,
                i = void 0 === e ? '' : e,
                a = t.stroke,
                s = void 0 === a ? '#a8a8a8' : a,
                r = t.strokeWidth,
                n = void 0 === r ? 1 : r,
                o = t.fill,
                l = t.fillOpacity,
                h = void 0 === l ? 1 : l,
                c = t.strokeOpacity,
                d = void 0 === c ? 1 : c,
                g = t.classes,
                u = t.strokeLinecap,
                p = void 0 === u ? null : u,
                f = t.strokeDashArray,
                x = void 0 === f ? 0 : f,
                b = this.w
              return (
                null === p && (p = b.config.stroke.lineCap),
                (-1 < i.indexOf('undefined') || -1 < i.indexOf('NaN')) &&
                  (i = 'M 0 '.concat(b.globals.gridHeight)),
                b.globals.dom.Paper.path(i).attr({
                  fill: o,
                  'fill-opacity': h,
                  stroke: s,
                  'stroke-opacity': d,
                  'stroke-linecap': p,
                  'stroke-width': n,
                  'stroke-dasharray': x,
                  class: g
                })
              )
            }
          },
          {
            key: 'group',
            value: function () {
              var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                e = this.w.globals.dom.Paper.group()
              return null !== t && e.attr(t), e
            }
          },
          {
            key: 'move',
            value: function (t, e) {
              return ['M', t, e].join(' ')
            }
          },
          {
            key: 'line',
            value: function (t, e) {
              var i =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                a = null
              return (
                null === i
                  ? (a = ['L', t, e].join(' '))
                  : 'H' === i
                  ? (a = ['H', t].join(' '))
                  : 'V' === i && (a = ['V', e].join(' ')),
                a
              )
            }
          },
          {
            key: 'curve',
            value: function (t, e, i, a, s, r) {
              return ['C', t, e, i, a, s, r].join(' ')
            }
          },
          {
            key: 'quadraticCurve',
            value: function (t, e, i, a) {
              return ['Q', t, e, i, a].join(' ')
            }
          },
          {
            key: 'arc',
            value: function (t, e, i, a, s, r, n) {
              return [
                7 < arguments.length && void 0 !== arguments[7] && arguments[7]
                  ? 'a'
                  : 'A',
                t,
                e,
                i,
                a,
                s,
                r,
                n
              ].join(' ')
            }
          },
          {
            key: 'renderPaths',
            value: function (t) {
              var e,
                i = t.j,
                a = t.realIndex,
                s = t.pathFrom,
                r = t.pathTo,
                n = t.stroke,
                o = t.strokeWidth,
                l = t.strokeLinecap,
                h = t.fill,
                c = t.animationDelay,
                d = t.initialSpeed,
                g = t.dataChangeSpeed,
                u = t.className,
                p = t.shouldClipToGrid,
                f = void 0 === p || p,
                x = t.bindEventsOnPaths,
                b = void 0 === x || x,
                m = t.drawShadow,
                v = void 0 === m || m,
                y = this.w,
                w = new E(this.ctx),
                k = new X(this.ctx),
                A = this.w.config.chart.animations.enabled,
                S =
                  A && this.w.config.chart.animations.dynamicAnimation.enabled,
                C = !!(
                  (A && !y.globals.resized) ||
                  (S && y.globals.dataChanged && y.globals.shouldAnimate)
                )
              C ? (e = s) : ((e = r), (y.globals.animationEnded = !0))
              var L,
                P = y.config.stroke.dashArray,
                T = Array.isArray(P) ? P[a] : y.config.stroke.dashArray,
                z = this.drawPath({
                  d: e,
                  stroke: n,
                  strokeWidth: o,
                  fill: h,
                  fillOpacity: 1,
                  classes: u,
                  strokeLinecap: l,
                  strokeDashArray: T
                })
              z.attr('index', a),
                f &&
                  z.attr({
                    'clip-path': 'url(#gridRectMask'.concat(y.globals.cuid, ')')
                  }),
                'none' !== y.config.states.normal.filter.type
                  ? w.getDefaultFilter(z, a)
                  : y.config.chart.dropShadow.enabled &&
                    v &&
                    (!y.config.chart.dropShadow.enabledOnSeries ||
                      (y.config.chart.dropShadow.enabledOnSeries &&
                        -1 !==
                          y.config.chart.dropShadow.enabledOnSeries.indexOf(
                            a
                          ))) &&
                    ((L = y.config.chart.dropShadow), w.dropShadow(z, L, a)),
                b &&
                  (z.node.addEventListener(
                    'mouseenter',
                    this.pathMouseEnter.bind(this, z)
                  ),
                  z.node.addEventListener(
                    'mouseleave',
                    this.pathMouseLeave.bind(this, z)
                  ),
                  z.node.addEventListener(
                    'mousedown',
                    this.pathMouseDown.bind(this, z)
                  )),
                z.attr({ pathTo: r, pathFrom: s })
              var I = {
                el: z,
                j: i,
                realIndex: a,
                pathFrom: s,
                pathTo: r,
                fill: h,
                strokeWidth: o,
                delay: c
              }
              return (
                !A || y.globals.resized || y.globals.dataChanged
                  ? (!y.globals.resized && y.globals.dataChanged) ||
                    k.showDelayedElements()
                  : k.animatePathsGradually(M(M({}, I), {}, { speed: d })),
                y.globals.dataChanged &&
                  S &&
                  C &&
                  k.animatePathsGradually(M(M({}, I), {}, { speed: g })),
                z
              )
            }
          },
          {
            key: 'drawPattern',
            value: function (e, i, a) {
              var s =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : '#a8a8a8',
                r =
                  4 < arguments.length && void 0 !== arguments[4]
                    ? arguments[4]
                    : 0
              return this.w.globals.dom.Paper.pattern(i, a, function (t) {
                'horizontalLines' === e
                  ? t.line(0, 0, a, 0).stroke({ color: s, width: r + 1 })
                  : 'verticalLines' === e
                  ? t.line(0, 0, 0, i).stroke({ color: s, width: r + 1 })
                  : 'slantedLines' === e
                  ? t.line(0, 0, i, a).stroke({ color: s, width: r })
                  : 'squares' === e
                  ? t.rect(i, a).fill('none').stroke({ color: s, width: r })
                  : 'circles' === e &&
                    t.circle(i).fill('none').stroke({ color: s, width: r })
              })
            }
          },
          {
            key: 'drawGradient',
            value: function (t, e, i, a, s) {
              var r =
                  5 < arguments.length && void 0 !== arguments[5]
                    ? arguments[5]
                    : null,
                n =
                  6 < arguments.length && void 0 !== arguments[6]
                    ? arguments[6]
                    : null,
                o =
                  7 < arguments.length && void 0 !== arguments[7]
                    ? arguments[7]
                    : null,
                l =
                  8 < arguments.length && void 0 !== arguments[8]
                    ? arguments[8]
                    : 0,
                h = this.w
              e.length < 9 && 0 === e.indexOf('#') && (e = I.hexToRgba(e, a)),
                i.length < 9 && 0 === i.indexOf('#') && (i = I.hexToRgba(i, s))
              var c = 0,
                d = 1,
                g = 1,
                u = null
              null !== n &&
                ((c = void 0 !== n[0] ? n[0] / 100 : 0),
                (d = void 0 !== n[1] ? n[1] / 100 : 1),
                (g = void 0 !== n[2] ? n[2] / 100 : 1),
                (u = void 0 !== n[3] ? n[3] / 100 : null))
              var p,
                f,
                x = !(
                  'donut' !== h.config.chart.type &&
                  'pie' !== h.config.chart.type &&
                  'polarArea' !== h.config.chart.type &&
                  'bubble' !== h.config.chart.type
                ),
                b =
                  null === o || 0 === o.length
                    ? h.globals.dom.Paper.gradient(
                        x ? 'radial' : 'linear',
                        function (t) {
                          t.at(c, e, a),
                            t.at(d, i, s),
                            t.at(g, i, s),
                            null !== u && t.at(u, e, a)
                        }
                      )
                    : h.globals.dom.Paper.gradient(
                        x ? 'radial' : 'linear',
                        function (e) {
                          ;(Array.isArray(o[l]) ? o[l] : o).forEach(function (
                            t
                          ) {
                            e.at(t.offset / 100, t.color, t.opacity)
                          })
                        }
                      )
              return (
                x
                  ? ((p = h.globals.gridWidth / 2),
                    (f = h.globals.gridHeight / 2),
                    'bubble' !== h.config.chart.type
                      ? b.attr({
                          gradientUnits: 'userSpaceOnUse',
                          cx: p,
                          cy: f,
                          r: r
                        })
                      : b.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 }))
                  : 'vertical' === t
                  ? b.from(0, 0).to(0, 1)
                  : 'diagonal' === t
                  ? b.from(0, 0).to(1, 1)
                  : 'horizontal' === t
                  ? b.from(0, 1).to(1, 1)
                  : 'diagonal2' === t && b.from(1, 0).to(0, 1),
                b
              )
            }
          },
          {
            key: 'drawText',
            value: function (t) {
              var e,
                i = t.x,
                a = t.y,
                s = t.text,
                r = t.textAnchor,
                n = t.fontSize,
                o = t.fontFamily,
                l = t.fontWeight,
                h = t.foreColor,
                c = t.opacity,
                d = t.cssClass,
                g = void 0 === d ? '' : d,
                u = t.isPlainText,
                p = void 0 === u || u,
                f = this.w
              return (
                void 0 === s && (s = ''),
                (r = r || 'start'),
                (h && h.length) || (h = f.config.chart.foreColor),
                (o = o || f.config.chart.fontFamily),
                (l = l || 'regular'),
                (e = Array.isArray(s)
                  ? f.globals.dom.Paper.text(function (t) {
                      for (var e = 0; e < s.length; e++)
                        0 === e ? t.tspan(s[e]) : t.tspan(s[e]).newLine()
                    })
                  : p
                  ? f.globals.dom.Paper.plain(s)
                  : f.globals.dom.Paper.text(function (t) {
                      return t.tspan(s)
                    })).attr({
                  x: i,
                  y: a,
                  'text-anchor': r,
                  'dominant-baseline': 'auto',
                  'font-size': n,
                  'font-family': o,
                  'font-weight': l,
                  fill: h,
                  class: 'apexcharts-text ' + g
                }),
                (e.node.style.fontFamily = o),
                (e.node.style.opacity = c),
                e
              )
            }
          },
          {
            key: 'drawMarker',
            value: function (t, e, i) {
              t = t || 0
              var a,
                s,
                r,
                n = i.pSize || 0,
                o = null
              return (
                'square' === i.shape
                  ? ((a = void 0 === i.pRadius ? n / 2 : i.pRadius),
                    (null !== e && n) || (a = n = 0),
                    (s = 1.2 * n + a),
                    (r = this.drawRect(s, s, s, s, a)).attr({
                      x: t - s / 2,
                      y: e - s / 2,
                      cx: t,
                      cy: e,
                      class: i.class ? i.class : '',
                      fill: i.pointFillColor,
                      'fill-opacity': i.pointFillOpacity
                        ? i.pointFillOpacity
                        : 1,
                      stroke: i.pointStrokeColor,
                      'stroke-width': i.pWidth ? i.pWidth : 0,
                      'stroke-opacity': i.pointStrokeOpacity
                        ? i.pointStrokeOpacity
                        : 1
                    }),
                    (o = r))
                  : ('circle' !== i.shape && i.shape) ||
                    (I.isNumber(e) || (e = n = 0),
                    (o = this.drawCircle(n, {
                      cx: t,
                      cy: e,
                      class: i.class ? i.class : '',
                      stroke: i.pointStrokeColor,
                      fill: i.pointFillColor,
                      'fill-opacity': i.pointFillOpacity
                        ? i.pointFillOpacity
                        : 1,
                      'stroke-width': i.pWidth ? i.pWidth : 0,
                      'stroke-opacity': i.pointStrokeOpacity
                        ? i.pointStrokeOpacity
                        : 1
                    }))),
                o
              )
            }
          },
          {
            key: 'pathMouseEnter',
            value: function (t, e) {
              var i,
                a = this.w,
                s = new E(this.ctx),
                r = parseInt(t.node.getAttribute('index'), 10),
                n = parseInt(t.node.getAttribute('j'), 10)
              'function' == typeof a.config.chart.events.dataPointMouseEnter &&
                a.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                  seriesIndex: r,
                  dataPointIndex: n,
                  w: a
                }),
                this.ctx.events.fireEvent('dataPointMouseEnter', [
                  e,
                  this.ctx,
                  { seriesIndex: r, dataPointIndex: n, w: a }
                ]),
                ('none' !== a.config.states.active.filter.type &&
                  'true' === t.node.getAttribute('selected')) ||
                  'none' === a.config.states.hover.filter.type ||
                  'none' === a.config.states.active.filter.type ||
                  a.globals.isTouchDevice ||
                  ((i = a.config.states.hover.filter),
                  s.applyFilter(t, r, i.type, i.value))
            }
          },
          {
            key: 'pathMouseLeave',
            value: function (t, e) {
              var i = this.w,
                a = new E(this.ctx),
                s = parseInt(t.node.getAttribute('index'), 10),
                r = parseInt(t.node.getAttribute('j'), 10)
              'function' == typeof i.config.chart.events.dataPointMouseLeave &&
                i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                  seriesIndex: s,
                  dataPointIndex: r,
                  w: i
                }),
                this.ctx.events.fireEvent('dataPointMouseLeave', [
                  e,
                  this.ctx,
                  { seriesIndex: s, dataPointIndex: r, w: i }
                ]),
                ('none' !== i.config.states.active.filter.type &&
                  'true' === t.node.getAttribute('selected')) ||
                  ('none' !== i.config.states.hover.filter.type &&
                    a.getDefaultFilter(t, s))
            }
          },
          {
            key: 'pathMouseDown',
            value: function (t, e) {
              var i,
                a,
                s,
                r,
                n,
                o = this.w,
                l = new E(this.ctx),
                h = parseInt(t.node.getAttribute('index'), 10),
                c = parseInt(t.node.getAttribute('j'), 10),
                d = 'false'
              'true' === t.node.getAttribute('selected')
                ? (t.node.setAttribute('selected', 'false'),
                  -1 < o.globals.selectedDataPoints[h].indexOf(c) &&
                    ((i = o.globals.selectedDataPoints[h].indexOf(c)),
                    o.globals.selectedDataPoints[h].splice(i, 1)))
                : (!o.config.states.active.allowMultipleDataPointsSelection &&
                    0 < o.globals.selectedDataPoints.length &&
                    ((o.globals.selectedDataPoints = []),
                    (a = o.globals.dom.Paper.select(
                      '.apexcharts-series path'
                    ).members),
                    (s = o.globals.dom.Paper.select(
                      '.apexcharts-series circle, .apexcharts-series rect'
                    ).members),
                    (r = function (t) {
                      Array.prototype.forEach.call(t, function (t) {
                        t.node.setAttribute('selected', 'false'),
                          l.getDefaultFilter(t, h)
                      })
                    })(a),
                    r(s)),
                  t.node.setAttribute('selected', 'true'),
                  (d = 'true'),
                  void 0 === o.globals.selectedDataPoints[h] &&
                    (o.globals.selectedDataPoints[h] = []),
                  o.globals.selectedDataPoints[h].push(c)),
                'true' === d
                  ? 'none' !== (n = o.config.states.active.filter) &&
                    l.applyFilter(t, h, n.type, n.value)
                  : 'none' !== o.config.states.active.filter.type &&
                    l.getDefaultFilter(t, h),
                'function' == typeof o.config.chart.events.dataPointSelection &&
                  o.config.chart.events.dataPointSelection(e, this.ctx, {
                    selectedDataPoints: o.globals.selectedDataPoints,
                    seriesIndex: h,
                    dataPointIndex: c,
                    w: o
                  }),
                e &&
                  this.ctx.events.fireEvent('dataPointSelection', [
                    e,
                    this.ctx,
                    {
                      selectedDataPoints: o.globals.selectedDataPoints,
                      seriesIndex: h,
                      dataPointIndex: c,
                      w: o
                    }
                  ])
            }
          },
          {
            key: 'rotateAroundCenter',
            value: function (t) {
              var e = t.getBBox()
              return { x: e.x + e.width / 2, y: e.y + e.height / 2 }
            }
          },
          {
            key: 'getTextRects',
            value: function (t, e, i, a) {
              var s =
                  !(4 < arguments.length && void 0 !== arguments[4]) ||
                  arguments[4],
                r = this.w,
                n = this.drawText({
                  x: -200,
                  y: -200,
                  text: t,
                  textAnchor: 'start',
                  fontSize: e,
                  fontFamily: i,
                  foreColor: '#fff',
                  opacity: 0
                })
              a && n.attr('transform', a), r.globals.dom.Paper.add(n)
              var o = n.bbox()
              return (
                s || (o = n.node.getBoundingClientRect()),
                n.remove(),
                { width: o.width, height: o.height }
              )
            }
          },
          {
            key: 'placeTextWithEllipsis',
            value: function (t, e, i) {
              if (
                'function' == typeof t.getComputedTextLength &&
                0 < (t.textContent = e).length &&
                t.getComputedTextLength() >= i / 0.8
              ) {
                for (var a = e.length - 3; 0 < a; a -= 3)
                  if (t.getSubStringLength(0, a) <= i / 0.8)
                    return void (t.textContent = e.substring(0, a) + '...')
                t.textContent = '.'
              }
            }
          }
        ],
        [
          {
            key: 'setAttrs',
            value: function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
            }
          }
        ]
      ),
      w),
    e =
      (n(y, [
        {
          key: 'setOrientations',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n,
              o =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              l = this.w
            'vertical' === t.label.orientation &&
              ((e = null !== o ? o : 0),
              null !==
                (i = l.globals.dom.baseEl.querySelector(
                  ".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(
                    e,
                    "']"
                  )
                )) &&
                ((a = i.getBoundingClientRect()),
                i.setAttribute(
                  'x',
                  parseFloat(i.getAttribute('x')) - a.height + 4
                ),
                'top' === t.label.position
                  ? i.setAttribute(
                      'y',
                      parseFloat(i.getAttribute('y')) + a.width
                    )
                  : i.setAttribute(
                      'y',
                      parseFloat(i.getAttribute('y')) - a.width
                    ),
                (r = (s = this.annoCtx.graphics.rotateAroundCenter(i)).x),
                (n = s.y),
                i.setAttribute(
                  'transform',
                  'rotate(-90 '.concat(r, ' ').concat(n, ')')
                )))
          }
        },
        {
          key: 'addBackgroundToAnno',
          value: function (t, e) {
            var i = this.w
            if (!e.label.text || (e.label.text && !e.label.text.trim()))
              return null
            var a = i.globals.dom.baseEl
                .querySelector('.apexcharts-grid')
                .getBoundingClientRect(),
              s = t.getBoundingClientRect(),
              r = e.label.style.padding.left,
              n = e.label.style.padding.right,
              o = e.label.style.padding.top,
              l = e.label.style.padding.bottom
            'vertical' === e.label.orientation &&
              ((o = e.label.style.padding.left),
              (l = e.label.style.padding.right),
              (r = e.label.style.padding.top),
              (n = e.label.style.padding.bottom))
            var h = s.left - a.left - r,
              c = s.top - a.top - o,
              d = this.annoCtx.graphics.drawRect(
                h - i.globals.barPadForNumericAxis,
                c,
                s.width + r + n,
                s.height + o + l,
                e.label.borderRadius,
                e.label.style.background,
                1,
                e.label.borderWidth,
                e.label.borderColor,
                0
              )
            return e.id && d.node.classList.add(e.id), d
          }
        },
        {
          key: 'annotationsBackground',
          value: function () {
            function i (t, e, i) {
              var a,
                s,
                r = o.globals.dom.baseEl.querySelector(
                  '.apexcharts-'
                    .concat(i, '-annotations .apexcharts-')
                    .concat(i, "-annotation-label[rel='")
                    .concat(e, "']")
                )
              r &&
                ((a = r.parentNode),
                (s = n.addBackgroundToAnno(r, t)) && a.insertBefore(s.node, r))
            }
            var n = this,
              o = this.w
            o.config.annotations.xaxis.map(function (t, e) {
              i(t, e, 'xaxis')
            }),
              o.config.annotations.yaxis.map(function (t, e) {
                i(t, e, 'yaxis')
              }),
              o.config.annotations.points.map(function (t, e) {
                i(t, e, 'point')
              })
          }
        },
        {
          key: 'makeAnnotationDraggable',
          value: function (e, t, i) {
            var r = this.w.config.annotations[t][i]
            e.draggable().on('dragend', function (t) {
              var e = t.target.getAttribute('x'),
                i = t.target.getAttribute('y'),
                a = t.target.getAttribute('cx'),
                s = t.target.getAttribute('cy')
              ;(r.x = e), (r.y = i), a && s && ((r.x = a), (r.y = s))
            }),
              e.node.addEventListener('mousedown', function (t) {
                t.stopPropagation(),
                  e.selectize({
                    pointSize: 8,
                    rotationPoint: !1,
                    pointType: 'rect'
                  }),
                  e.resize().on('resizedone', function (t) {
                    var e = t.target.getAttribute('width'),
                      i = t.target.getAttribute('height'),
                      a = t.target.getAttribute('r')
                    ;(r.width = e), (r.height = i), a && (r.radius = a)
                  })
              })
          }
        },
        {
          key: 'getStringX',
          value: function (t) {
            var e = this.w,
              i = t
            e.config.xaxis.convertedCatToNumeric &&
              e.globals.categoryLabels.length &&
              (t = e.globals.categoryLabels.indexOf(t) + 1)
            var a = e.globals.labels.indexOf(t),
              s = e.globals.dom.baseEl.querySelector(
                '.apexcharts-xaxis-texts-g text:nth-child(' + (a + 1) + ')'
              )
            return s && (i = parseFloat(s.getAttribute('x'))), i
          }
        }
      ]),
      y),
    g =
      (n(m, [
        {
          key: 'addXaxisAnnotation',
          value: function (t, e, i) {
            var a = this.w,
              s = this.invertAxis ? a.globals.minY : a.globals.minX,
              r = this.invertAxis ? a.globals.maxY : a.globals.maxX,
              n = this.invertAxis ? a.globals.yRange[0] : a.globals.xRange,
              o = (t.x - s) / (n / a.globals.gridWidth)
            this.annoCtx.inversedReversedAxis &&
              (o = (r - t.x) / (n / a.globals.gridWidth))
            var l = t.label.text
            ;('category' !== a.config.xaxis.type &&
              !a.config.xaxis.convertedCatToNumeric) ||
              this.invertAxis ||
              a.globals.dataFormatXNumeric ||
              (o = this.annoCtx.helpers.getStringX(t.x))
            var h,
              c,
              d,
              g,
              u,
              p,
              f,
              x = t.strokeDashArray
            I.isNumber(o) &&
              (null === t.x2 || void 0 === t.x2
                ? ((h = this.annoCtx.graphics.drawLine(
                    o + t.offsetX,
                    0 + t.offsetY,
                    o + t.offsetX,
                    a.globals.gridHeight + t.offsetY,
                    t.borderColor,
                    x,
                    t.borderWidth
                  )),
                  e.appendChild(h.node),
                  t.id && h.node.classList.add(t.id))
                : ((d = (t.x2 - s) / (n / a.globals.gridWidth)),
                  this.annoCtx.inversedReversedAxis &&
                    (d = (r - t.x2) / (n / a.globals.gridWidth)),
                  ('category' !== a.config.xaxis.type &&
                    !a.config.xaxis.convertedCatToNumeric) ||
                    this.invertAxis ||
                    a.globals.dataFormatXNumeric ||
                    (d = this.annoCtx.helpers.getStringX(t.x2)),
                  d < o && ((c = o), (o = d), (d = c)),
                  (g = this.annoCtx.graphics.drawRect(
                    o + t.offsetX,
                    0 + t.offsetY,
                    d - o,
                    a.globals.gridHeight + t.offsetY,
                    0,
                    t.fillColor,
                    t.opacity,
                    1,
                    t.borderColor,
                    x
                  )).node.classList.add('apexcharts-annotation-rect'),
                  g.attr(
                    'clip-path',
                    'url(#gridRectMask'.concat(a.globals.cuid, ')')
                  ),
                  e.appendChild(g.node),
                  t.id && g.node.classList.add(t.id)),
              (u = 'top' === t.label.position ? 4 : a.globals.gridHeight),
              (p = this.annoCtx.graphics.getTextRects(
                l,
                parseFloat(t.label.style.fontSize)
              )),
              (f = this.annoCtx.graphics.drawText({
                x: o + t.label.offsetX,
                y:
                  u +
                  t.label.offsetY -
                  ('vertical' === t.label.orientation
                    ? 'top' === t.label.position
                      ? p.width / 2 - 12
                      : -p.width / 2
                    : 0),
                text: l,
                textAnchor: t.label.textAnchor,
                fontSize: t.label.style.fontSize,
                fontFamily: t.label.style.fontFamily,
                fontWeight: t.label.style.fontWeight,
                foreColor: t.label.style.color,
                cssClass: 'apexcharts-xaxis-annotation-label '
                  .concat(t.label.style.cssClass, ' ')
                  .concat(t.id ? t.id : '')
              })).attr({ rel: i }),
              e.appendChild(f.node),
              this.annoCtx.helpers.setOrientations(t, i))
          }
        },
        {
          key: 'drawXAxisAnnotations',
          value: function () {
            var i = this,
              t = this.w,
              a = this.annoCtx.graphics.group({
                class: 'apexcharts-xaxis-annotations'
              })
            return (
              t.config.annotations.xaxis.map(function (t, e) {
                i.addXaxisAnnotation(t, a.node, e)
              }),
              a
            )
          }
        }
      ]),
      m),
    P =
      (n(
        b,
        [
          {
            key: 'getStackedSeriesTotals',
            value: function () {
              var t = this.w,
                e = []
              if (0 === t.globals.series.length) return e
              for (
                var i = 0;
                i < t.globals.series[t.globals.maxValsInArrayIndex].length;
                i++
              ) {
                for (var a = 0, s = 0; s < t.globals.series.length; s++)
                  void 0 !== t.globals.series[s][i] &&
                    (a += t.globals.series[s][i])
                e.push(a)
              }
              return (t.globals.stackedSeriesTotals = e)
            }
          },
          {
            key: 'getSeriesTotalByIndex',
            value: function () {
              var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : null
              return null === t
                ? this.w.config.series.reduce(function (t, e) {
                    return t + e
                  }, 0)
                : this.w.globals.series[t].reduce(function (t, e) {
                    return t + e
                  }, 0)
            }
          },
          {
            key: 'isSeriesNull',
            value: function () {
              var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : null
              return (
                0 ===
                (null === t
                  ? this.w.config.series.filter(function (t) {
                      return null !== t
                    })
                  : this.w.config.series[t].data.filter(function (t) {
                      return null !== t
                    })
                ).length
              )
            }
          },
          {
            key: 'seriesHaveSameValues',
            value: function (t) {
              return this.w.globals.series[t].every(function (t, e, i) {
                return t === i[0]
              })
            }
          },
          {
            key: 'getCategoryLabels',
            value: function (t) {
              var e = this.w,
                i = t.slice()
              return (
                e.config.xaxis.convertedCatToNumeric &&
                  (i = t.map(function (t) {
                    return e.config.xaxis.labels.formatter(
                      t - e.globals.minX + 1
                    )
                  })),
                i
              )
            }
          },
          {
            key: 'getLargestSeries',
            value: function () {
              var t = this.w
              t.globals.maxValsInArrayIndex = t.globals.series
                .map(function (t) {
                  return t.length
                })
                .indexOf(
                  Math.max.apply(
                    Math,
                    t.globals.series.map(function (t) {
                      return t.length
                    })
                  )
                )
            }
          },
          {
            key: 'getLargestMarkerSize',
            value: function () {
              var t = this.w,
                e = 0
              return (
                t.globals.markers.size.forEach(function (t) {
                  e = Math.max(e, t)
                }),
                (t.globals.markers.largestSize = e)
              )
            }
          },
          {
            key: 'getSeriesTotals',
            value: function () {
              var t = this.w
              t.globals.seriesTotals = t.globals.series.map(function (t, e) {
                var i = 0
                if (Array.isArray(t))
                  for (var a = 0; a < t.length; a++) i += t[a]
                else i += t
                return i
              })
            }
          },
          {
            key: 'getSeriesTotalsXRange',
            value: function (s, r) {
              var n = this.w
              return n.globals.series.map(function (t, e) {
                for (var i = 0, a = 0; a < t.length; a++)
                  n.globals.seriesX[e][a] > s &&
                    n.globals.seriesX[e][a] < r &&
                    (i += t[a])
                return i
              })
            }
          },
          {
            key: 'getPercentSeries',
            value: function () {
              var o = this.w
              o.globals.seriesPercent = o.globals.series.map(function (t, e) {
                var i = []
                if (Array.isArray(t))
                  for (var a = 0; a < t.length; a++) {
                    var s = o.globals.stackedSeriesTotals[a],
                      r = 0
                    s && (r = (100 * t[a]) / s), i.push(r)
                  }
                else {
                  var n =
                    (100 * t) /
                    o.globals.seriesTotals.reduce(function (t, e) {
                      return t + e
                    }, 0)
                  i.push(n)
                }
                return i
              })
            }
          },
          {
            key: 'getCalculatedRatios',
            value: function () {
              var t,
                e,
                i,
                a,
                s = this.w.globals,
                r = [],
                n = 0,
                o = [],
                l = 0.1,
                h = 0
              if (((s.yRange = []), s.isMultipleYAxis))
                for (var c = 0; c < s.minYArr.length; c++)
                  s.yRange.push(Math.abs(s.minYArr[c] - s.maxYArr[c])),
                    o.push(0)
              else s.yRange.push(Math.abs(s.minY - s.maxY))
              ;(s.xRange = Math.abs(s.maxX - s.minX)),
                (s.zRange = Math.abs(s.maxZ - s.minZ))
              for (var d = 0; d < s.yRange.length; d++)
                r.push(s.yRange[d] / s.gridHeight)
              if (
                ((e = s.xRange / s.gridWidth),
                (i = Math.abs(s.initialMaxX - s.initialMinX) / s.gridWidth),
                (t = s.yRange / s.gridWidth),
                (a = s.xRange / s.gridHeight),
                (n = (s.zRange / s.gridHeight) * 16) || (n = 1),
                s.minY !== Number.MIN_VALUE &&
                  0 !== Math.abs(s.minY) &&
                  (s.hasNegs = !0),
                s.isMultipleYAxis)
              ) {
                o = []
                for (var g = 0; g < r.length; g++) o.push(-s.minYArr[g] / r[g])
              } else
                o.push(-s.minY / r[0]),
                  s.minY !== Number.MIN_VALUE &&
                    0 !== Math.abs(s.minY) &&
                    ((l = -s.minY / t), (h = s.minX / e))
              return {
                yRatio: r,
                invertedYRatio: t,
                zRatio: n,
                xRatio: e,
                initialXRatio: i,
                invertedXRatio: a,
                baseLineInvertedY: l,
                baseLineY: o,
                baseLineX: h
              }
            }
          },
          {
            key: 'getLogSeries',
            value: function (t) {
              var i = this,
                a = this.w
              return (
                (a.globals.seriesLog = t.map(function (t, e) {
                  return a.config.yaxis[e] && a.config.yaxis[e].logarithmic
                    ? t.map(function (t) {
                        return null === t ? null : i.getLogVal(t, e)
                      })
                    : t
                })),
                a.globals.invalidLogScale ? t : a.globals.seriesLog
              )
            }
          },
          {
            key: 'getLogVal',
            value: function (t, e) {
              var i = this.w
              return (
                (Math.log(t) - Math.log(i.globals.minYArr[e])) /
                (Math.log(i.globals.maxYArr[e]) -
                  Math.log(i.globals.minYArr[e]))
              )
            }
          },
          {
            key: 'getLogYRatios',
            value: function (t) {
              var r = this,
                n = this.w,
                o = this.w.globals
              return (
                (o.yLogRatio = t.slice()),
                (o.logYRange = o.yRange.map(function (t, e) {
                  if (n.config.yaxis[e] && r.w.config.yaxis[e].logarithmic) {
                    var i,
                      a = -Number.MAX_VALUE,
                      s = Number.MIN_VALUE
                    return (
                      o.seriesLog.forEach(function (t, e) {
                        t.forEach(function (t) {
                          n.config.yaxis[e] &&
                            n.config.yaxis[e].logarithmic &&
                            ((a = Math.max(t, a)), (s = Math.min(t, s)))
                        })
                      }),
                      (i = Math.pow(
                        o.yRange[e],
                        Math.abs(s - a) / o.yRange[e]
                      )),
                      (o.yLogRatio[e] = i / o.gridHeight),
                      i
                    )
                  }
                })),
                o.invalidLogScale ? t.slice() : o.yLogRatio
              )
            }
          }
        ],
        [
          {
            key: 'checkComboSeries',
            value: function (t) {
              var e = !1,
                i = 0
              return (
                t.length &&
                  void 0 !== t[0].type &&
                  ((e = !0),
                  t.forEach(function (t) {
                    ;('bar' !== t.type &&
                      'column' !== t.type &&
                      'candlestick' !== t.type) ||
                      i++
                  })),
                { comboBarCount: i, comboCharts: e }
              )
            }
          },
          {
            key: 'extendArrayProps',
            value: function (t, e, i) {
              return (
                e.yaxis && (e = t.extendYAxis(e, i)),
                e.annotations &&
                  (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)),
                  e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)),
                  e.annotations.points && (e = t.extendPointAnnotations(e))),
                e
              )
            }
          }
        ]
      ),
      b),
    u =
      (n(x, [
        {
          key: 'addYaxisAnnotation',
          value: function (t, e, i) {
            var a,
              s,
              r,
              n,
              o = this.w,
              l = t.strokeDashArray,
              h = this._getY1Y2('y1', t),
              c = t.label.text
            null === t.y2 || void 0 === t.y2
              ? ((a = this.annoCtx.graphics.drawLine(
                  0 + t.offsetX,
                  h + t.offsetY,
                  o.globals.gridWidth + t.offsetX,
                  h + t.offsetY,
                  t.borderColor,
                  l,
                  t.borderWidth
                )),
                e.appendChild(a.node),
                t.id && a.node.classList.add(t.id))
              : ((r = this._getY1Y2('y2', t)) > h &&
                  ((s = h), (h = r), (r = s)),
                (n = this.annoCtx.graphics.drawRect(
                  0 + t.offsetX,
                  r + t.offsetY,
                  o.globals.gridWidth + t.offsetX,
                  h - r,
                  0,
                  t.fillColor,
                  t.opacity,
                  1,
                  t.borderColor,
                  l
                )).node.classList.add('apexcharts-annotation-rect'),
                n.attr(
                  'clip-path',
                  'url(#gridRectMask'.concat(o.globals.cuid, ')')
                ),
                e.appendChild(n.node),
                t.id && n.node.classList.add(t.id))
            var d = 'right' === t.label.position ? o.globals.gridWidth : 0,
              g = this.annoCtx.graphics.drawText({
                x: d + t.label.offsetX,
                y: (r || h) + t.label.offsetY - 3,
                text: c,
                textAnchor: t.label.textAnchor,
                fontSize: t.label.style.fontSize,
                fontFamily: t.label.style.fontFamily,
                fontWeight: t.label.style.fontWeight,
                foreColor: t.label.style.color,
                cssClass: 'apexcharts-yaxis-annotation-label '
                  .concat(t.label.style.cssClass, ' ')
                  .concat(t.id ? t.id : '')
              })
            g.attr({ rel: i }), e.appendChild(g.node)
          }
        },
        {
          key: '_getY1Y2',
          value: function (t, e) {
            var i,
              a,
              s,
              r,
              n = 'y1' === t ? e.y : e.y2,
              o = this.w
            return (
              this.annoCtx.invertAxis
                ? ((i = o.globals.labels.indexOf(n)),
                  o.config.xaxis.convertedCatToNumeric &&
                    (i = o.globals.categoryLabels.indexOf(n)),
                  (a = o.globals.dom.baseEl.querySelector(
                    '.apexcharts-yaxis-texts-g text:nth-child(' + (i + 1) + ')'
                  )) && (r = parseFloat(a.getAttribute('y'))))
                : ((s = o.config.yaxis[e.yAxisIndex].logarithmic
                    ? (n = new P(this.annoCtx.ctx).getLogVal(n, e.yAxisIndex)) /
                      o.globals.yLogRatio[e.yAxisIndex]
                    : (n - o.globals.minYArr[e.yAxisIndex]) /
                      (o.globals.yRange[e.yAxisIndex] / o.globals.gridHeight)),
                  (r = o.globals.gridHeight - s),
                  o.config.yaxis[e.yAxisIndex] &&
                    o.config.yaxis[e.yAxisIndex].reversed &&
                    (r = s)),
              r
            )
          }
        },
        {
          key: 'drawYAxisAnnotations',
          value: function () {
            var i = this,
              t = this.w,
              a = this.annoCtx.graphics.group({
                class: 'apexcharts-yaxis-annotations'
              })
            return (
              t.config.annotations.yaxis.map(function (t, e) {
                i.addYaxisAnnotation(t, a.node, e)
              }),
              a
            )
          }
        }
      ]),
      x),
    p =
      (n(f, [
        {
          key: 'addPointAnnotation',
          value: function (t, e, i) {
            var a = this.w,
              s = 0,
              r = 0,
              n = 0
            this.annoCtx.invertAxis &&
              console.warn(
                'Point annotation is not supported in horizontal bar charts.'
              )
            var o,
              l,
              h = parseFloat(t.y)
            'string' == typeof t.x
              ? ((l = a.globals.labels.indexOf(t.x)),
                a.config.xaxis.convertedCatToNumeric &&
                  (l = a.globals.categoryLabels.indexOf(t.x)),
                (s = this.annoCtx.helpers.getStringX(t.x)),
                null === t.y && (h = a.globals.series[t.seriesIndex][l]))
              : (s =
                  (t.x - a.globals.minX) /
                  (a.globals.xRange / a.globals.gridWidth)),
              (o = a.config.yaxis[t.yAxisIndex].logarithmic
                ? (h = new P(this.annoCtx.ctx).getLogVal(h, t.yAxisIndex)) /
                  a.globals.yLogRatio[t.yAxisIndex]
                : (h - a.globals.minYArr[t.yAxisIndex]) /
                  (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight))
            var c,
              d,
              g,
              u,
              p,
              f,
              x,
              r =
                a.globals.gridHeight -
                o -
                parseFloat(t.label.style.fontSize) -
                t.marker.size,
              n = a.globals.gridHeight - o
            a.config.yaxis[t.yAxisIndex] &&
              a.config.yaxis[t.yAxisIndex].reversed &&
              ((r = o + parseFloat(t.label.style.fontSize) + t.marker.size),
              (n = o)),
              I.isNumber(s) &&
                ((c = {
                  pSize: t.marker.size,
                  pWidth: t.marker.strokeWidth,
                  pointFillColor: t.marker.fillColor,
                  pointStrokeColor: t.marker.strokeColor,
                  shape: t.marker.shape,
                  pRadius: t.marker.radius,
                  class: 'apexcharts-point-annotation-marker '
                    .concat(t.marker.cssClass, ' ')
                    .concat(t.id ? t.id : '')
                }),
                (d = this.annoCtx.graphics.drawMarker(
                  s + t.marker.offsetX,
                  n + t.marker.offsetY,
                  c
                )),
                e.appendChild(d.node),
                (g = t.label.text ? t.label.text : ''),
                (u = this.annoCtx.graphics.drawText({
                  x: s + t.label.offsetX,
                  y: r + t.label.offsetY,
                  text: g,
                  textAnchor: t.label.textAnchor,
                  fontSize: t.label.style.fontSize,
                  fontFamily: t.label.style.fontFamily,
                  fontWeight: t.label.style.fontWeight,
                  foreColor: t.label.style.color,
                  cssClass: 'apexcharts-point-annotation-label '
                    .concat(t.label.style.cssClass, ' ')
                    .concat(t.id ? t.id : '')
                })).attr({ rel: i }),
                e.appendChild(u.node),
                t.customSVG.SVG &&
                  ((p = this.annoCtx.graphics.group({
                    class:
                      'apexcharts-point-annotations-custom-svg ' +
                      t.customSVG.cssClass
                  })).attr({
                    transform: 'translate('
                      .concat(s + t.customSVG.offsetX, ', ')
                      .concat(r + t.customSVG.offsetY, ')')
                  }),
                  (p.node.innerHTML = t.customSVG.SVG),
                  e.appendChild(p.node)),
                t.image.path &&
                  ((f = t.image.width ? t.image.width : 20),
                  (x = t.image.height ? t.image.height : 20),
                  this.annoCtx.addImage({
                    x: s + t.image.offsetX - f / 2,
                    y: r + t.image.offsetY - x / 2,
                    width: f,
                    height: x,
                    path: t.image.path,
                    appendTo: '.apexcharts-point-annotations'
                  })))
          }
        },
        {
          key: 'drawPointAnnotations',
          value: function () {
            var i = this,
              t = this.w,
              a = this.annoCtx.graphics.group({
                class: 'apexcharts-point-annotations'
              })
            return (
              t.config.annotations.points.map(function (t, e) {
                i.addPointAnnotation(t, a.node, e)
              }),
              a
            )
          }
        }
      ]),
      f)
  function f (t) {
    r(this, f), (this.w = t.w), (this.annoCtx = t)
  }
  function x (t) {
    r(this, x), (this.w = t.w), (this.annoCtx = t)
  }
  function b (t) {
    r(this, b), (this.ctx = t), (this.w = t.w)
  }
  function m (t) {
    r(this, m),
      (this.w = t.w),
      (this.annoCtx = t),
      (this.invertAxis = this.annoCtx.invertAxis)
  }
  function y (t) {
    r(this, y), (this.w = t.w), (this.annoCtx = t)
  }
  function w (t) {
    r(this, w), (this.ctx = t), (this.w = t.w)
  }
  function k (t) {
    r(this, k), (this.ctx = t), (this.w = t.w), this.setEasingFunctions()
  }
  function S (t) {
    r(this, S), (this.ctx = t), (this.w = t.w)
  }
  function C () {
    r(this, C)
  }
  var t,
    L,
    T = {
      name: 'en',
      options: {
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        shortMonths: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        days: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        toolbar: {
          exportToSVG: 'Download SVG',
          exportToPNG: 'Download PNG',
          exportToCSV: 'Download CSV',
          menu: 'Menu',
          selection: 'Selection',
          selectionZoom: 'Selection Zoom',
          zoomIn: 'Zoom In',
          zoomOut: 'Zoom Out',
          pan: 'Panning',
          reset: 'Reset Zoom'
        }
      }
    },
    z =
      (n(Oe, [
        {
          key: 'init',
          value: function () {
            return {
              annotations: {
                position: 'front',
                yaxis: [this.yAxisAnnotation],
                xaxis: [this.xAxisAnnotation],
                points: [this.pointAnnotation],
                texts: [],
                images: [],
                shapes: []
              },
              chart: {
                animations: {
                  enabled: !0,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: { delay: 150, enabled: !0 },
                  dynamicAnimation: { enabled: !0, speed: 350 }
                },
                background: 'transparent',
                locales: [T],
                defaultLocale: 'en',
                dropShadow: {
                  enabled: !1,
                  enabledOnSeries: void 0,
                  top: 2,
                  left: 2,
                  blur: 4,
                  color: '#000',
                  opacity: 0.35
                },
                events: {
                  animationEnd: void 0,
                  beforeMount: void 0,
                  mounted: void 0,
                  updated: void 0,
                  click: void 0,
                  mouseMove: void 0,
                  legendClick: void 0,
                  markerClick: void 0,
                  selection: void 0,
                  dataPointSelection: void 0,
                  dataPointMouseEnter: void 0,
                  dataPointMouseLeave: void 0,
                  beforeZoom: void 0,
                  zoomed: void 0,
                  scrolled: void 0
                },
                foreColor: '#373d3f',
                fontFamily: 'Helvetica, Arial, sans-serif',
                height: 'auto',
                parentHeightOffset: 15,
                redrawOnParentResize: !0,
                id: void 0,
                group: void 0,
                offsetX: 0,
                offsetY: 0,
                selection: {
                  enabled: !1,
                  type: 'x',
                  fill: { color: '#24292e', opacity: 0.1 },
                  stroke: {
                    width: 1,
                    color: '#24292e',
                    opacity: 0.4,
                    dashArray: 3
                  },
                  xaxis: { min: void 0, max: void 0 },
                  yaxis: { min: void 0, max: void 0 }
                },
                sparkline: { enabled: !1 },
                brush: { enabled: !1, autoScaleYaxis: !0, target: void 0 },
                stacked: !1,
                stackType: 'normal',
                toolbar: {
                  show: !0,
                  offsetX: 0,
                  offsetY: 0,
                  tools: {
                    download: !0,
                    selection: !0,
                    zoom: !0,
                    zoomin: !0,
                    zoomout: !0,
                    pan: !0,
                    reset: !0,
                    customIcons: []
                  },
                  export: {
                    csv: {
                      filename: void 0,
                      columnDelimiter: ',',
                      headerCategory: 'category',
                      headerValue: 'value',
                      dateFormatter: function (t) {
                        return new Date(t).toDateString()
                      }
                    }
                  },
                  autoSelected: 'zoom'
                },
                type: 'line',
                width: '100%',
                zoom: {
                  enabled: !0,
                  type: 'x',
                  autoScaleYaxis: !1,
                  zoomedArea: {
                    fill: { color: '#90CAF9', opacity: 0.4 },
                    stroke: { color: '#0D47A1', opacity: 0.4, width: 1 }
                  }
                }
              },
              plotOptions: {
                area: { fillTo: 'origin' },
                bar: {
                  horizontal: !1,
                  columnWidth: '70%',
                  barHeight: '70%',
                  distributed: !1,
                  startingShape: 'flat',
                  endingShape: 'flat',
                  rangeBarOverlap: !0,
                  colors: {
                    ranges: [],
                    backgroundBarColors: [],
                    backgroundBarOpacity: 1,
                    backgroundBarRadius: 0
                  },
                  dataLabels: {
                    position: 'top',
                    maxItems: 100,
                    hideOverflowingLabels: !0,
                    orientation: 'horizontal'
                  }
                },
                bubble: { minBubbleRadius: void 0, maxBubbleRadius: void 0 },
                candlestick: {
                  colors: { upward: '#00B746', downward: '#EF403C' },
                  wick: { useFillColor: !0 }
                },
                heatmap: {
                  radius: 2,
                  enableShades: !0,
                  shadeIntensity: 0.5,
                  reverseNegativeShade: !1,
                  distributed: !1,
                  useFillColorAsStroke: !1,
                  colorScale: {
                    inverse: !1,
                    ranges: [],
                    min: void 0,
                    max: void 0
                  }
                },
                radialBar: {
                  inverseOrder: !1,
                  startAngle: 0,
                  endAngle: 360,
                  offsetX: 0,
                  offsetY: 0,
                  hollow: {
                    margin: 5,
                    size: '50%',
                    background: 'transparent',
                    image: void 0,
                    imageWidth: 150,
                    imageHeight: 150,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    imageClipped: !0,
                    position: 'front',
                    dropShadow: {
                      enabled: !1,
                      top: 0,
                      left: 0,
                      blur: 3,
                      color: '#000',
                      opacity: 0.5
                    }
                  },
                  track: {
                    show: !0,
                    startAngle: void 0,
                    endAngle: void 0,
                    background: '#f2f2f2',
                    strokeWidth: '97%',
                    opacity: 1,
                    margin: 5,
                    dropShadow: {
                      enabled: !1,
                      top: 0,
                      left: 0,
                      blur: 3,
                      color: '#000',
                      opacity: 0.5
                    }
                  },
                  dataLabels: {
                    show: !0,
                    name: {
                      show: !0,
                      fontSize: '16px',
                      fontFamily: void 0,
                      fontWeight: 600,
                      color: void 0,
                      offsetY: 0,
                      formatter: function (t) {
                        return t
                      }
                    },
                    value: {
                      show: !0,
                      fontSize: '14px',
                      fontFamily: void 0,
                      fontWeight: 400,
                      color: void 0,
                      offsetY: 16,
                      formatter: function (t) {
                        return t + '%'
                      }
                    },
                    total: {
                      show: !1,
                      label: 'Total',
                      fontSize: '16px',
                      fontWeight: 600,
                      fontFamily: void 0,
                      color: void 0,
                      formatter: function (t) {
                        return (
                          t.globals.seriesTotals.reduce(function (t, e) {
                            return t + e
                          }, 0) /
                            t.globals.series.length +
                          '%'
                        )
                      }
                    }
                  }
                },
                pie: {
                  customScale: 1,
                  offsetX: 0,
                  offsetY: 0,
                  startAngle: 0,
                  expandOnClick: !0,
                  dataLabels: { offset: 0, minAngleToShowLabel: 10 },
                  donut: {
                    size: '65%',
                    background: 'transparent',
                    labels: {
                      show: !1,
                      name: {
                        show: !0,
                        fontSize: '16px',
                        fontFamily: void 0,
                        fontWeight: 600,
                        color: void 0,
                        offsetY: -10,
                        formatter: function (t) {
                          return t
                        }
                      },
                      value: {
                        show: !0,
                        fontSize: '20px',
                        fontFamily: void 0,
                        fontWeight: 400,
                        color: void 0,
                        offsetY: 10,
                        formatter: function (t) {
                          return t
                        }
                      },
                      total: {
                        show: !1,
                        showAlways: !1,
                        label: 'Total',
                        fontSize: '16px',
                        fontWeight: 400,
                        fontFamily: void 0,
                        color: void 0,
                        formatter: function (t) {
                          return t.globals.seriesTotals.reduce(function (t, e) {
                            return t + e
                          }, 0)
                        }
                      }
                    }
                  }
                },
                polarArea: {
                  rings: { strokeWidth: 1, strokeColor: '#e8e8e8' }
                },
                radar: {
                  size: void 0,
                  offsetX: 0,
                  offsetY: 0,
                  polygons: {
                    strokeWidth: 1,
                    strokeColors: '#e8e8e8',
                    connectorColors: '#e8e8e8',
                    fill: { colors: void 0 }
                  }
                }
              },
              colors: void 0,
              dataLabels: {
                enabled: !0,
                enabledOnSeries: void 0,
                formatter: function (t) {
                  return null !== t ? t : ''
                },
                textAnchor: 'middle',
                distributed: !1,
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: '12px',
                  fontFamily: void 0,
                  fontWeight: 600,
                  colors: void 0
                },
                background: {
                  enabled: !0,
                  foreColor: '#fff',
                  borderRadius: 2,
                  padding: 4,
                  opacity: 0.9,
                  borderWidth: 1,
                  borderColor: '#fff',
                  dropShadow: {
                    enabled: !1,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#000',
                    opacity: 0.45
                  }
                },
                dropShadow: {
                  enabled: !1,
                  top: 1,
                  left: 1,
                  blur: 1,
                  color: '#000',
                  opacity: 0.45
                }
              },
              fill: {
                type: 'solid',
                colors: void 0,
                opacity: 0.85,
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: void 0,
                  inverseColors: !0,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 100],
                  colorStops: []
                },
                image: { src: [], width: void 0, height: void 0 },
                pattern: {
                  style: 'squares',
                  width: 6,
                  height: 6,
                  strokeWidth: 2
                }
              },
              grid: {
                show: !0,
                borderColor: '#e0e0e0',
                strokeDashArray: 0,
                position: 'back',
                xaxis: { lines: { show: !1 } },
                yaxis: { lines: { show: !0 } },
                row: { colors: void 0, opacity: 0.5 },
                column: { colors: void 0, opacity: 0.5 },
                padding: { top: 0, right: 10, bottom: 0, left: 12 }
              },
              labels: [],
              legend: {
                show: !0,
                showForSingleSeries: !1,
                showForNullSeries: !0,
                showForZeroSeries: !0,
                floating: !1,
                position: 'bottom',
                horizontalAlign: 'center',
                inverseOrder: !1,
                fontSize: '12px',
                fontFamily: void 0,
                fontWeight: 400,
                width: void 0,
                height: void 0,
                formatter: void 0,
                tooltipHoverFormatter: void 0,
                offsetX: -20,
                offsetY: 4,
                labels: { colors: void 0, useSeriesColors: !1 },
                markers: {
                  width: 12,
                  height: 12,
                  strokeWidth: 0,
                  fillColors: void 0,
                  strokeColor: '#fff',
                  radius: 12,
                  customHTML: void 0,
                  offsetX: 0,
                  offsetY: 0,
                  onClick: void 0
                },
                itemMargin: { horizontal: 5, vertical: 2 },
                onItemClick: { toggleDataSeries: !0 },
                onItemHover: { highlightDataSeries: !0 }
              },
              markers: {
                discrete: [],
                size: 0,
                colors: void 0,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                shape: 'circle',
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: void 0,
                onDblClick: void 0,
                showNullDataPoints: !0,
                hover: { size: void 0, sizeOffset: 3 }
              },
              noData: {
                text: void 0,
                align: 'center',
                verticalAlign: 'middle',
                offsetX: 0,
                offsetY: 0,
                style: { color: void 0, fontSize: '14px', fontFamily: void 0 }
              },
              responsive: [],
              series: void 0,
              states: {
                normal: { filter: { type: 'none', value: 0 } },
                hover: { filter: { type: 'lighten', value: 0.15 } },
                active: {
                  allowMultipleDataPointsSelection: !1,
                  filter: { type: 'darken', value: 0.65 }
                }
              },
              title: {
                text: void 0,
                align: 'left',
                margin: 5,
                offsetX: 0,
                offsetY: 0,
                floating: !1,
                style: {
                  fontSize: '14px',
                  fontWeight: 900,
                  fontFamily: void 0,
                  color: void 0
                }
              },
              subtitle: {
                text: void 0,
                align: 'left',
                margin: 5,
                offsetX: 0,
                offsetY: 30,
                floating: !1,
                style: {
                  fontSize: '12px',
                  fontWeight: 400,
                  fontFamily: void 0,
                  color: void 0
                }
              },
              stroke: {
                show: !0,
                curve: 'smooth',
                lineCap: 'butt',
                width: 2,
                colors: void 0,
                dashArray: 0
              },
              tooltip: {
                enabled: !0,
                enabledOnSeries: void 0,
                shared: !0,
                followCursor: !1,
                intersect: !1,
                inverseOrder: !1,
                custom: void 0,
                fillSeriesColor: !1,
                theme: 'light',
                style: { fontSize: '12px', fontFamily: void 0 },
                onDatasetHover: { highlightDataSeries: !1 },
                x: { show: !0, format: 'dd MMM', formatter: void 0 },
                y: {
                  formatter: void 0,
                  title: {
                    formatter: function (t) {
                      return t + ': '
                    }
                  }
                },
                z: { formatter: void 0, title: 'Size: ' },
                marker: { show: !0, fillColors: void 0 },
                items: { display: 'flex' },
                fixed: {
                  enabled: !1,
                  position: 'topRight',
                  offsetX: 0,
                  offsetY: 0
                }
              },
              xaxis: {
                type: 'category',
                categories: [],
                convertedCatToNumeric: !1,
                sorted: !1,
                offsetX: 0,
                offsetY: 0,
                labels: {
                  show: !0,
                  rotate: -45,
                  rotateAlways: !1,
                  hideOverlappingLabels: !0,
                  trim: !1,
                  minHeight: void 0,
                  maxHeight: 120,
                  showDuplicates: !0,
                  style: {
                    colors: [],
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: void 0,
                    cssClass: ''
                  },
                  offsetX: 0,
                  offsetY: 0,
                  format: void 0,
                  formatter: void 0,
                  datetimeUTC: !0,
                  datetimeFormatter: {
                    year: 'yyyy',
                    month: "MMM 'yy",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                    minute: 'HH:mm:ss'
                  }
                },
                axisBorder: {
                  show: !0,
                  color: '#e0e0e0',
                  width: '100%',
                  height: 1,
                  offsetX: 0,
                  offsetY: 0
                },
                axisTicks: {
                  show: !0,
                  color: '#e0e0e0',
                  height: 6,
                  offsetX: 0,
                  offsetY: 0
                },
                tickAmount: void 0,
                tickPlacement: 'on',
                min: void 0,
                max: void 0,
                range: void 0,
                floating: !1,
                position: 'bottom',
                title: {
                  text: void 0,
                  offsetX: 0,
                  offsetY: 0,
                  style: {
                    color: void 0,
                    fontSize: '12px',
                    fontWeight: 900,
                    fontFamily: void 0,
                    cssClass: ''
                  }
                },
                crosshairs: {
                  show: !0,
                  width: 1,
                  position: 'back',
                  opacity: 0.9,
                  stroke: { color: '#b6b6b6', width: 1, dashArray: 3 },
                  fill: {
                    type: 'solid',
                    color: '#B1B9C4',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5
                    }
                  },
                  dropShadow: {
                    enabled: !1,
                    left: 0,
                    top: 0,
                    blur: 1,
                    opacity: 0.4
                  }
                },
                tooltip: {
                  enabled: !0,
                  offsetY: 0,
                  formatter: void 0,
                  style: { fontSize: '12px', fontFamily: void 0 }
                }
              },
              yaxis: this.yAxis,
              theme: {
                mode: 'light',
                palette: 'palette1',
                monochrome: {
                  enabled: !1,
                  color: '#008FFB',
                  shadeTo: 'light',
                  shadeIntensity: 0.65
                }
              }
            }
          }
        }
      ]),
      Oe),
    F =
      (n(Ne, [
        {
          key: 'drawAxesAnnotations',
          value: function () {
            var t = this.w
            if (t.globals.axisCharts) {
              for (
                var e = this.yAxisAnnotations.drawYAxisAnnotations(),
                  i = this.xAxisAnnotations.drawXAxisAnnotations(),
                  a = this.pointsAnnotations.drawPointAnnotations(),
                  s = t.config.chart.animations.enabled,
                  r = [e, i, a],
                  n = [i.node, e.node, a.node],
                  o = 0;
                o < 3;
                o++
              )
                t.globals.dom.elGraphical.add(r[o]),
                  !s ||
                    t.globals.resized ||
                    t.globals.dataChanged ||
                    ('scatter' !== t.config.chart.type &&
                      'bubble' !== t.config.chart.type &&
                      1 < t.globals.dataPoints &&
                      n[o].classList.add('apexcharts-element-hidden')),
                  t.globals.delayedElements.push({ el: n[o], index: 0 })
              this.helpers.annotationsBackground()
            }
          }
        },
        {
          key: 'drawShapeAnnos',
          value: function () {
            var i = this
            this.w.config.annotations.shapes.map(function (t, e) {
              i.addShape(t, e)
            })
          }
        },
        {
          key: 'drawImageAnnos',
          value: function () {
            var i = this
            this.w.config.annotations.images.map(function (t, e) {
              i.addImage(t, e)
            })
          }
        },
        {
          key: 'drawTextAnnos',
          value: function () {
            var i = this
            this.w.config.annotations.texts.map(function (t, e) {
              i.addText(t, e)
            })
          }
        },
        {
          key: 'addXaxisAnnotation',
          value: function (t, e, i) {
            this.xAxisAnnotations.addXaxisAnnotation(t, e, i)
          }
        },
        {
          key: 'addYaxisAnnotation',
          value: function (t, e, i) {
            this.yAxisAnnotations.addYaxisAnnotation(t, e, i)
          }
        },
        {
          key: 'addPointAnnotation',
          value: function (t, e, i) {
            this.pointsAnnotations.addPointAnnotation(t, e, i)
          }
        },
        {
          key: 'addText',
          value: function (t, e) {
            var i = t.x,
              a = t.y,
              s = t.text,
              r = t.textAnchor,
              n = t.foreColor,
              o = t.fontSize,
              l = t.fontFamily,
              h = t.fontWeight,
              c = t.cssClass,
              d = t.backgroundColor,
              g = t.borderWidth,
              u = t.strokeDashArray,
              p = t.borderRadius,
              f = t.borderColor,
              x = t.appendTo,
              b = void 0 === x ? '.apexcharts-annotations' : x,
              m = t.paddingLeft,
              v = void 0 === m ? 4 : m,
              y = t.paddingRight,
              w = void 0 === y ? 4 : y,
              k = t.paddingBottom,
              A = void 0 === k ? 2 : k,
              S = t.paddingTop,
              C = void 0 === S ? 2 : S,
              L = this.w,
              P = this.graphics.drawText({
                x: i,
                y: a,
                text: s,
                textAnchor: r || 'start',
                fontSize: o || '12px',
                fontWeight: h || 'regular',
                fontFamily: l || L.config.chart.fontFamily,
                foreColor: n || L.config.chart.foreColor,
                cssClass: c
              }),
              T = L.globals.dom.baseEl.querySelector(b)
            T && T.appendChild(P.node)
            var z,
              I = P.bbox()
            t.draggable && this.helpers.makeAnnotationDraggable(P, 'texts', e),
              s &&
                ((z = this.graphics.drawRect(
                  I.x - v,
                  I.y - C,
                  I.width + v + w,
                  I.height + A + C,
                  p,
                  d || 'transparent',
                  1,
                  g,
                  f,
                  u
                )),
                T.insertBefore(z.node, P.node))
          }
        },
        {
          key: 'addShape',
          value: function (t, e) {
            var i = {
                type: t.type,
                x: t.x || 0,
                y: t.y || 0,
                x1: t.x1 || 0,
                y1: t.y1 || 0,
                lineColor: t.lineColor || '#a8a8a8',
                dashArray: t.dashArray || 0,
                strokeWidth: t.strokeWidth || null,
                width: t.width || '100%',
                height: t.height || 50,
                circleRadius: t.radius || 25,
                backgroundColor: t.backgroundColor || '#fff',
                opacity: t.opacity || 1,
                borderWidth: t.borderWidth || 0,
                borderRadius: t.borderRadius || 4,
                borderColor: t.borderColor || '#c2c2c2',
                appendTo: t.appendTo || '.apexcharts-annotations'
              },
              a = this.w
            ;-1 < String(i.width).indexOf('%') &&
              (i.width =
                (parseInt(i.width, 10) * parseInt(a.globals.svgWidth, 10)) /
                100)
            var s = null
            switch (i.type) {
              case 'circle':
                s = this.graphics.drawCircle(i.circleRadius, {
                  fill: i.backgroundColor,
                  stroke: i.borderColor,
                  'stroke-width': i.borderWidth,
                  opacity: i.opacity,
                  cx: i.x,
                  cy: i.y
                })
                break
              case 'line':
                s = this.graphics.drawLine(
                  i.x,
                  i.y,
                  i.x1,
                  i.y1,
                  i.lineColor,
                  i.dashArray,
                  i.strokeWidth
                )
                break
              default:
                s = this.graphics.drawRect(
                  i.x,
                  i.y,
                  i.width,
                  i.height,
                  i.borderRadius,
                  i.backgroundColor,
                  i.opacity,
                  i.borderWidth,
                  i.borderColor
                )
            }
            var r = a.globals.dom.baseEl.querySelector(i.appendTo)
            r && r.appendChild(s.node),
              t.draggable &&
                (this.helpers.makeAnnotationDraggable(s, 'shapes', e),
                s.node.classList.add('apexcharts-resizable-element'))
          }
        },
        {
          key: 'addImage',
          value: function (t, e) {
            var i = this.w,
              a = t.path,
              s = t.x,
              r = void 0 === s ? 0 : s,
              n = t.y,
              o = void 0 === n ? 0 : n,
              l = t.width,
              h = void 0 === l ? 20 : l,
              c = t.height,
              d = void 0 === c ? 20 : c,
              g = t.appendTo,
              u = void 0 === g ? '.apexcharts-annotations' : g,
              p = i.globals.dom.Paper.image(a)
            p.size(h, d).move(r, o)
            var f = i.globals.dom.baseEl.querySelector(u)
            f && f.appendChild(p.node),
              t.draggable &&
                (this.helpers.makeAnnotationDraggable(p, 'images', e),
                p.node.classList.add('apexcharts-resizable-element'))
          }
        },
        {
          key: 'addXaxisAnnotationExternal',
          value: function (t, e, i) {
            return (
              this.addAnnotationExternal({
                params: t,
                pushToMemory: e,
                context: i,
                type: 'xaxis',
                contextMethod: i.addXaxisAnnotation
              }),
              i
            )
          }
        },
        {
          key: 'addYaxisAnnotationExternal',
          value: function (t, e, i) {
            return (
              this.addAnnotationExternal({
                params: t,
                pushToMemory: e,
                context: i,
                type: 'yaxis',
                contextMethod: i.addYaxisAnnotation
              }),
              i
            )
          }
        },
        {
          key: 'addPointAnnotationExternal',
          value: function (t, e, i) {
            return (
              void 0 === this.invertAxis &&
                (this.invertAxis = i.w.globals.isBarHorizontal),
              this.addAnnotationExternal({
                params: t,
                pushToMemory: e,
                context: i,
                type: 'point',
                contextMethod: i.addPointAnnotation
              }),
              i
            )
          }
        },
        {
          key: 'addAnnotationExternal',
          value: function (t) {
            var e = t.params,
              i = t.pushToMemory,
              a = t.context,
              s = t.type,
              r = t.contextMethod,
              n = a,
              o = n.w,
              l = o.globals.dom.baseEl.querySelector(
                '.apexcharts-'.concat(s, '-annotations')
              ),
              h = l.childNodes.length + 1,
              c = new z(),
              d = Object.assign(
                {},
                'xaxis' === s
                  ? c.xAxisAnnotation
                  : 'yaxis' === s
                  ? c.yAxisAnnotation
                  : c.pointAnnotation
              ),
              g = I.extend(d, e)
            switch (s) {
              case 'xaxis':
                this.addXaxisAnnotation(g, l, h)
                break
              case 'yaxis':
                this.addYaxisAnnotation(g, l, h)
                break
              case 'point':
                this.addPointAnnotation(g, l, h)
            }
            var u = o.globals.dom.baseEl.querySelector(
                '.apexcharts-'
                  .concat(s, '-annotations .apexcharts-')
                  .concat(s, "-annotation-label[rel='")
                  .concat(h, "']")
              ),
              p = this.helpers.addBackgroundToAnno(u, g)
            return (
              p && l.insertBefore(p.node, u),
              i &&
                o.globals.memory.methodsToExec.push({
                  context: n,
                  id: g.id ? g.id : I.randomId(),
                  method: r,
                  label: 'addAnnotation',
                  params: e
                }),
              a
            )
          }
        },
        {
          key: 'clearAnnotations',
          value: function (t) {
            var i = t.w,
              e = i.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations'
              )
            i.globals.memory.methodsToExec.map(function (t, e) {
              ;('addText' !== t.label && 'addAnnotation' !== t.label) ||
                i.globals.memory.methodsToExec.splice(e, 1)
            }),
              (e = I.listToArray(e)),
              Array.prototype.forEach.call(e, function (t) {
                for (; t.firstChild; ) t.removeChild(t.firstChild)
              })
          }
        },
        {
          key: 'removeAnnotation',
          value: function (t, i) {
            var a = t.w,
              e = a.globals.dom.baseEl.querySelectorAll('.'.concat(i))
            e &&
              (a.globals.memory.methodsToExec.map(function (t, e) {
                t.id === i && a.globals.memory.methodsToExec.splice(e, 1)
              }),
              Array.prototype.forEach.call(e, function (t) {
                t.parentElement.removeChild(t)
              }))
          }
        }
      ]),
      Ne),
    R =
      (n(He, [
        {
          key: 'clippedImgArea',
          value: function (t) {
            var e = this.w,
              i = e.config,
              a = parseInt(e.globals.gridWidth, 10),
              s = parseInt(e.globals.gridHeight, 10),
              r = s < a ? a : s,
              n = t.image,
              o = 0,
              l = 0,
              l =
                void 0 === t.width && void 0 === t.height
                  ? void 0 !== i.fill.image.width &&
                    void 0 !== i.fill.image.height
                    ? ((o = i.fill.image.width + 1), i.fill.image.height)
                    : ((o = r + 1), r)
                  : ((o = t.width), t.height),
              h = document.createElementNS(e.globals.SVGNS, 'pattern')
            Y.setAttrs(h, {
              id: t.patternID,
              patternUnits: t.patternUnits ? t.patternUnits : 'userSpaceOnUse',
              width: o + 'px',
              height: l + 'px'
            })
            var c = document.createElementNS(e.globals.SVGNS, 'image')
            h.appendChild(c),
              c.setAttributeNS(window.SVG.xlink, 'href', n),
              Y.setAttrs(c, {
                x: 0,
                y: 0,
                preserveAspectRatio: 'none',
                width: o + 'px',
                height: l + 'px'
              }),
              (c.style.opacity = t.opacity),
              e.globals.dom.elDefs.node.appendChild(h)
          }
        },
        {
          key: 'getSeriesIndex',
          value: function (t) {
            var e = this.w
            return (
              (('bar' === e.config.chart.type ||
                'rangeBar' === e.config.chart.type) &&
                e.config.plotOptions.bar.distributed) ||
              'heatmap' === e.config.chart.type
                ? (this.seriesIndex = t.seriesNumber)
                : (this.seriesIndex = t.seriesNumber % e.globals.series.length),
              this.seriesIndex
            )
          }
        },
        {
          key: 'fillPath',
          value: function (t) {
            var e = this.w
            this.opts = t
            var i,
              a,
              s,
              r = this.w.config
            this.seriesIndex = this.getSeriesIndex(t)
            var n = this.getFillColors()[this.seriesIndex]
            'function' == typeof n &&
              (n = n({
                seriesIndex: this.seriesIndex,
                dataPointIndex: t.dataPointIndex,
                value: t.value,
                w: e
              }))
            var o,
              l,
              h = this.getFillType(this.seriesIndex),
              c = Array.isArray(r.fill.opacity)
                ? r.fill.opacity[this.seriesIndex]
                : r.fill.opacity,
              d = n
            return (
              t.color && (n = t.color),
              -1 === n.indexOf('rgb')
                ? n.length < 9 && (d = I.hexToRgba(n, c))
                : -1 < n.indexOf('rgba') && (c = I.getOpacityFromRGBA(n)),
              t.opacity && (c = t.opacity),
              'pattern' === h && (a = this.handlePatternFill(a, n, c, d)),
              'gradient' === h &&
                (s = this.handleGradientFill(n, c, this.seriesIndex)),
              (i =
                'image' === h
                  ? ((o = r.fill.image.src),
                    (l = t.patternID ? t.patternID : ''),
                    this.clippedImgArea({
                      opacity: c,
                      image: Array.isArray(o)
                        ? t.seriesNumber < o.length
                          ? o[t.seriesNumber]
                          : o[0]
                        : o,
                      width: t.width ? t.width : void 0,
                      height: t.height ? t.height : void 0,
                      patternUnits: t.patternUnits,
                      patternID: 'pattern'
                        .concat(e.globals.cuid)
                        .concat(t.seriesNumber + 1)
                        .concat(l)
                    }),
                    'url(#pattern'
                      .concat(e.globals.cuid)
                      .concat(t.seriesNumber + 1)
                      .concat(l, ')'))
                  : 'gradient' === h
                  ? s
                  : 'pattern' === h
                  ? a
                  : d),
              t.solid && (i = d),
              i
            )
          }
        },
        {
          key: 'getFillType',
          value: function (t) {
            var e = this.w
            return Array.isArray(e.config.fill.type)
              ? e.config.fill.type[t]
              : e.config.fill.type
          }
        },
        {
          key: 'getFillColors',
          value: function () {
            var t = this.w,
              e = t.config,
              i = this.opts,
              a = []
            return (
              t.globals.comboCharts
                ? 'line' === t.config.series[this.seriesIndex].type
                  ? t.globals.stroke.colors instanceof Array
                    ? (a = t.globals.stroke.colors)
                    : a.push(t.globals.stroke.colors)
                  : t.globals.fill.colors instanceof Array
                  ? (a = t.globals.fill.colors)
                  : a.push(t.globals.fill.colors)
                : 'line' === e.chart.type
                ? t.globals.stroke.colors instanceof Array
                  ? (a = t.globals.stroke.colors)
                  : a.push(t.globals.stroke.colors)
                : t.globals.fill.colors instanceof Array
                ? (a = t.globals.fill.colors)
                : a.push(t.globals.fill.colors),
              void 0 !== i.fillColors &&
                ((a = []),
                i.fillColors instanceof Array
                  ? (a = i.fillColors.slice())
                  : a.push(i.fillColors)),
              a
            )
          }
        },
        {
          key: 'handlePatternFill',
          value: function (t, e, i, a) {
            var s = this.w.config,
              r = this.opts,
              n = new Y(this.ctx),
              o =
                void 0 === s.fill.pattern.strokeWidth
                  ? Array.isArray(s.stroke.width)
                    ? s.stroke.width[this.seriesIndex]
                    : s.stroke.width
                  : Array.isArray(s.fill.pattern.strokeWidth)
                  ? s.fill.pattern.strokeWidth[this.seriesIndex]
                  : s.fill.pattern.strokeWidth,
              l = e
            return s.fill.pattern.style instanceof Array
              ? void 0 !== s.fill.pattern.style[r.seriesNumber]
                ? n.drawPattern(
                    s.fill.pattern.style[r.seriesNumber],
                    s.fill.pattern.width,
                    s.fill.pattern.height,
                    l,
                    o,
                    i
                  )
                : a
              : n.drawPattern(
                  s.fill.pattern.style,
                  s.fill.pattern.width,
                  s.fill.pattern.height,
                  l,
                  o,
                  i
                )
          }
        },
        {
          key: 'handleGradientFill',
          value: function (t, e, i) {
            var a = this.w.config,
              s = this.opts,
              r = new Y(this.ctx),
              n = new I(),
              o = a.fill.gradient.type,
              l = t,
              h =
                void 0 === a.fill.gradient.opacityFrom
                  ? e
                  : Array.isArray(a.fill.gradient.opacityFrom)
                  ? a.fill.gradient.opacityFrom[i]
                  : a.fill.gradient.opacityFrom
            ;-1 < l.indexOf('rgba') && (h = I.getOpacityFromRGBA(l))
            var c,
              d,
              g,
              u =
                void 0 === a.fill.gradient.opacityTo
                  ? e
                  : Array.isArray(a.fill.gradient.opacityTo)
                  ? a.fill.gradient.opacityTo[i]
                  : a.fill.gradient.opacityTo
            return (
              void 0 === a.fill.gradient.gradientToColors ||
              0 === a.fill.gradient.gradientToColors.length
                ? (d =
                    'dark' === a.fill.gradient.shade
                      ? n.shadeColor(
                          -1 * parseFloat(a.fill.gradient.shadeIntensity),
                          -1 < t.indexOf('rgb') ? I.rgb2hex(t) : t
                        )
                      : n.shadeColor(
                          parseFloat(a.fill.gradient.shadeIntensity),
                          -1 < t.indexOf('rgb') ? I.rgb2hex(t) : t
                        ))
                : -1 <
                    (d = c =
                      a.fill.gradient.gradientToColors[s.seriesNumber]).indexOf(
                      'rgba'
                    ) && (u = I.getOpacityFromRGBA(c)),
              a.fill.gradient.inverseColors && ((g = l), (l = d), (d = g)),
              -1 < l.indexOf('rgb') && (l = I.rgb2hex(l)),
              -1 < d.indexOf('rgb') && (d = I.rgb2hex(d)),
              r.drawGradient(
                o,
                l,
                d,
                h,
                u,
                s.size,
                a.fill.gradient.stops,
                a.fill.gradient.colorStops,
                i
              )
            )
          }
        }
      ]),
      He),
    D =
      (n(De, [
        {
          key: 'setGlobalMarkerSize',
          value: function () {
            var e = this.w
            if (
              ((e.globals.markers.size = Array.isArray(e.config.markers.size)
                ? e.config.markers.size
                : [e.config.markers.size]),
              0 < e.globals.markers.size.length)
            ) {
              if (e.globals.markers.size.length < e.globals.series.length + 1)
                for (var t = 0; t <= e.globals.series.length; t++)
                  void 0 === e.globals.markers.size[t] &&
                    e.globals.markers.size.push(e.globals.markers.size[0])
            } else
              e.globals.markers.size = e.config.series.map(function (t) {
                return e.config.markers.size
              })
          }
        },
        {
          key: 'plotChartMarkers',
          value: function (t, e, i, a) {
            var s,
              r =
                4 < arguments.length && void 0 !== arguments[4] && arguments[4],
              n = this.w,
              o = e,
              l = t,
              h = null,
              c = new Y(this.ctx)
            if (
              ((0 < n.globals.markers.size[e] || r) &&
                (h = c.group({
                  class: r ? '' : 'apexcharts-series-markers'
                })).attr(
                  'clip-path',
                  'url(#gridRectMarkerMask'.concat(n.globals.cuid, ')')
                ),
              l.x instanceof Array)
            )
              for (var d = 0; d < l.x.length; d++) {
                var g,
                  u = 1 === i && 1 === d ? 1 : 1 === i && 0 === d ? 0 : i,
                  p = 'apexcharts-marker'
                ;('line' !== n.config.chart.type &&
                  'area' !== n.config.chart.type) ||
                  n.globals.comboCharts ||
                  n.config.tooltip.intersect ||
                  (p += ' no-pointer-events'),
                  (Array.isArray(n.config.markers.size)
                    ? 0 < n.globals.markers.size[e]
                    : 0 < n.config.markers.size) || r
                    ? (I.isNumber(l.y[d])
                        ? (p += ' w'.concat(I.randomId()))
                        : (p = 'apexcharts-nullpoint'),
                      (g = this.getMarkerConfig(p, e, u)),
                      n.config.series[o].data[i] &&
                        (n.config.series[o].data[i].fillColor &&
                          (g.pointFillColor =
                            n.config.series[o].data[i].fillColor),
                        n.config.series[o].data[i].strokeColor &&
                          (g.pointStrokeColor =
                            n.config.series[o].data[i].strokeColor)),
                      a && (g.pSize = a),
                      (s = c.drawMarker(l.x[d], l.y[d], g)).attr('rel', u),
                      s.attr('j', u),
                      s.attr('index', e),
                      s.node.setAttribute('default-marker-size', g.pSize),
                      new E(this.ctx).setSelectionFilter(s, e, u),
                      this.addEvents(s),
                      h && h.add(s))
                    : (void 0 === n.globals.pointsArray[e] &&
                        (n.globals.pointsArray[e] = []),
                      n.globals.pointsArray[e].push([l.x[d], l.y[d]]))
              }
            return h
          }
        },
        {
          key: 'getMarkerConfig',
          value: function (t, e) {
            var i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              a = this.w,
              s = this.getMarkerStyle(e),
              r = a.globals.markers.size[e],
              n = a.config.markers
            return (
              null !== i &&
                n.discrete.length &&
                n.discrete.map(function (t) {
                  t.seriesIndex === e &&
                    t.dataPointIndex === i &&
                    ((s.pointStrokeColor = t.strokeColor),
                    (s.pointFillColor = t.fillColor),
                    (r = t.size))
                }),
              {
                pSize: r,
                pRadius: n.radius,
                pWidth:
                  n.strokeWidth instanceof Array
                    ? n.strokeWidth[e]
                    : n.strokeWidth,
                pointStrokeColor: s.pointStrokeColor,
                pointFillColor: s.pointFillColor,
                shape: n.shape instanceof Array ? n.shape[e] : n.shape,
                class: t,
                pointStrokeOpacity:
                  n.strokeOpacity instanceof Array
                    ? n.strokeOpacity[e]
                    : n.strokeOpacity,
                pointStrokeDashArray:
                  n.strokeDashArray instanceof Array
                    ? n.strokeDashArray[e]
                    : n.strokeDashArray,
                pointFillOpacity:
                  n.fillOpacity instanceof Array
                    ? n.fillOpacity[e]
                    : n.fillOpacity,
                seriesIndex: e
              }
            )
          }
        },
        {
          key: 'addEvents',
          value: function (t) {
            var e = this.w,
              i = new Y(this.ctx)
            t.node.addEventListener(
              'mouseenter',
              i.pathMouseEnter.bind(this.ctx, t)
            ),
              t.node.addEventListener(
                'mouseleave',
                i.pathMouseLeave.bind(this.ctx, t)
              ),
              t.node.addEventListener(
                'mousedown',
                i.pathMouseDown.bind(this.ctx, t)
              ),
              t.node.addEventListener('click', e.config.markers.onClick),
              t.node.addEventListener('dblclick', e.config.markers.onDblClick),
              t.node.addEventListener(
                'touchstart',
                i.pathMouseDown.bind(this.ctx, t),
                { passive: !0 }
              )
          }
        },
        {
          key: 'getMarkerStyle',
          value: function (t) {
            var e = this.w,
              i = e.globals.markers.colors,
              a = e.config.markers.strokeColor || e.config.markers.strokeColors
            return {
              pointStrokeColor: a instanceof Array ? a[t] : a,
              pointFillColor: i instanceof Array ? i[t] : i
            }
          }
        }
      ]),
      De),
    H =
      (n(Re, [
        {
          key: 'draw',
          value: function (t, e, i) {
            var a = this.w,
              s = new Y(this.ctx),
              r = i.realIndex,
              n = i.pointsPos,
              o = i.zRatio,
              l = i.elParent,
              h = s.group({
                class: 'apexcharts-series-markers apexcharts-series-'.concat(
                  a.config.chart.type
                )
              })
            if (
              (h.attr(
                'clip-path',
                'url(#gridRectMarkerMask'.concat(a.globals.cuid, ')')
              ),
              n.x instanceof Array)
            )
              for (var c = 0; c < n.x.length; c++) {
                var d = e + 1,
                  g = !0
                0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1)
                var u,
                  p = 0,
                  f = a.globals.markers.size[r]
                o !== 1 / 0 &&
                  ((f = a.globals.seriesZ[r][d] / o),
                  (u = a.config.plotOptions.bubble).minBubbleRadius &&
                    f < u.minBubbleRadius &&
                    (f = u.minBubbleRadius),
                  u.maxBubbleRadius &&
                    f > u.maxBubbleRadius &&
                    (f = u.maxBubbleRadius)),
                  a.config.chart.animations.enabled || (p = f)
                var x,
                  b = n.x[c],
                  m = n.y[c],
                  p = p || 0
                ;(null !== m && void 0 !== a.globals.series[r][d]) || (g = !1),
                  g && ((x = this.drawPoint(b, m, p, f, r, d, e)), h.add(x)),
                  l.add(h)
              }
          }
        },
        {
          key: 'drawPoint',
          value: function (t, e, i, a, s, r, n) {
            var o,
              l,
              h = this.w,
              c = s,
              d = new X(this.ctx),
              g = new E(this.ctx),
              u = new R(this.ctx),
              p = new D(this.ctx),
              f = new Y(this.ctx),
              x = p.getMarkerConfig('apexcharts-marker', c),
              b = u.fillPath({
                seriesNumber: s,
                dataPointIndex: r,
                patternUnits: 'objectBoundingBox',
                value: h.globals.series[s][n]
              }),
              m = f.drawCircle(i)
            if (
              (h.config.series[c].data[r] &&
                h.config.series[c].data[r].fillColor &&
                (b = h.config.series[c].data[r].fillColor),
              m.attr({
                cx: t,
                cy: e,
                fill: b,
                stroke: x.pointStrokeColor,
                r: a,
                'stroke-width': x.pWidth,
                'stroke-dasharray': x.pointStrokeDashArray,
                'stroke-opacity': x.pointStrokeOpacity
              }),
              h.config.chart.dropShadow.enabled &&
                ((o = h.config.chart.dropShadow), g.dropShadow(m, o, s)),
              !this.initialAnim ||
                h.globals.dataChanged ||
                h.globals.resized ||
                ((l = h.config.chart.animations.speed),
                d.animateCircleRadius(
                  m,
                  0,
                  a,
                  l,
                  h.globals.easing,
                  function () {
                    window.setTimeout(function () {
                      d.animationCompleted(m)
                    }, 100)
                  }
                )),
              h.globals.dataChanged)
            )
              if (this.dynamicAnim) {
                var v,
                  y,
                  w,
                  k,
                  A = h.config.chart.animations.dynamicAnimation.speed
                null !=
                  (k =
                    h.globals.previousPaths[s] &&
                    h.globals.previousPaths[s][n]) &&
                  ((v = k.x), (y = k.y), (w = void 0 !== k.r ? k.r : a))
                for (var S = 0; S < h.globals.collapsedSeries.length; S++)
                  h.globals.collapsedSeries[S].index === s && ((A = 1), (a = 0))
                0 === t && 0 === e && (a = 0),
                  d.animateCircle(
                    m,
                    { cx: v, cy: y, r: w },
                    { cx: t, cy: e, r: a },
                    A,
                    h.globals.easing
                  )
              } else m.attr({ r: a })
            return (
              m.attr({ rel: r, j: r, index: s, 'default-marker-size': a }),
              g.setSelectionFilter(m, s, r),
              p.addEvents(m),
              m.node.classList.add('apexcharts-marker'),
              m
            )
          }
        },
        {
          key: 'centerTextInBubble',
          value: function (t) {
            var e = this.w
            return {
              y: (t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4)
            }
          }
        }
      ]),
      Re),
    N =
      (n(Fe, [
        {
          key: 'dataLabelsCorrection',
          value: function (t, e, i, a, s, r, n) {
            var o = this.w,
              l = !1,
              h = new Y(this.ctx).getTextRects(i, n),
              c = h.width,
              d = h.height
            void 0 === o.globals.dataLabelsRects[a] &&
              (o.globals.dataLabelsRects[a] = []),
              o.globals.dataLabelsRects[a].push({
                x: t,
                y: e,
                width: c,
                height: d
              })
            var g,
              u = o.globals.dataLabelsRects[a].length - 2,
              p =
                void 0 !== o.globals.lastDrawnDataLabelsIndexes[a]
                  ? o.globals.lastDrawnDataLabelsIndexes[a][
                      o.globals.lastDrawnDataLabelsIndexes[a].length - 1
                    ]
                  : 0
            return (
              void 0 === o.globals.dataLabelsRects[a][u] ||
                ((t > (g = o.globals.dataLabelsRects[a][p]).x + g.width + 2 ||
                  e > g.y + g.height + 2 ||
                  t + c < g.x) &&
                  (l = !0)),
              (0 !== s && !r) || (l = !0),
              { x: t, y: e, textRects: h, drawnextLabel: l }
            )
          }
        },
        {
          key: 'drawDataLabel',
          value: function (t, e, i) {
            var a = this,
              s =
                4 < arguments.length && void 0 !== arguments[4]
                  ? arguments[4]
                  : 2,
              r = this.w,
              n = new Y(this.ctx),
              o = r.config.dataLabels,
              l = 0,
              h = i,
              c = null
            if (!o.enabled || t.x instanceof Array != 1) return c
            c = n.group({ class: 'apexcharts-data-labels' })
            for (var d = 0; d < t.x.length; d++) {
              var g,
                u,
                p,
                f = t.x[d] + o.offsetX
              ;(l = t.y[d] + o.offsetY + s),
                isNaN(f) ||
                  (1 === i && 0 === d && (h = 0),
                  1 === i && 1 === d && (h = 1),
                  (g = r.globals.series[e][h]),
                  (u = ''),
                  (p = function (t) {
                    return r.config.dataLabels.formatter(t, {
                      ctx: a.ctx,
                      seriesIndex: e,
                      dataPointIndex: h,
                      w: r
                    })
                  }),
                  'bubble' === r.config.chart.type
                    ? ((u = p((g = r.globals.seriesZ[e][h]))),
                      (l = t.y[d]),
                      (l = new H(this.ctx).centerTextInBubble(l, e, h).y))
                    : void 0 !== g && (u = p(g)),
                  this.plotDataLabelsText({
                    x: f,
                    y: l,
                    text: u,
                    i: e,
                    j: h,
                    parent: c,
                    offsetCorrection: !0,
                    dataLabelsConfig: r.config.dataLabels
                  }))
            }
            return c
          }
        },
        {
          key: 'plotDataLabelsText',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n,
              o = this.w,
              l = new Y(this.ctx),
              h = t.x,
              c = t.y,
              d = t.i,
              g = t.j,
              u = t.text,
              p = t.textAnchor,
              f = t.parent,
              x = t.dataLabelsConfig,
              b = t.color,
              m = t.alwaysDrawDataLabel,
              v = t.offsetCorrection
            ;(Array.isArray(o.config.dataLabels.enabledOnSeries) &&
              o.config.dataLabels.enabledOnSeries.indexOf(d) < 0) ||
              ((e = { x: h, y: c, drawnextLabel: !0 }),
              v &&
                (e = this.dataLabelsCorrection(
                  h,
                  c,
                  u,
                  d,
                  g,
                  m,
                  parseInt(x.style.fontSize, 10)
                )),
              o.globals.zoomed || ((h = e.x), (c = e.y)),
              e.textRects &&
                (h + e.textRects.width < -20 || h > o.globals.gridWidth + 20) &&
                (u = ''),
              (i = o.globals.dataLabels.style.colors[d]),
              ((('bar' === o.config.chart.type ||
                'rangeBar' === o.config.chart.type) &&
                o.config.plotOptions.bar.distributed) ||
                o.config.dataLabels.distributed) &&
                (i = o.globals.dataLabels.style.colors[g]),
              b && (i = b),
              (a = x.offsetX),
              (s = x.offsetY),
              ('bar' !== o.config.chart.type &&
                'rangeBar' !== o.config.chart.type) ||
                (s = a = 0),
              e.drawnextLabel &&
                ((r = l.drawText({
                  width: 100,
                  height: parseInt(x.style.fontSize, 10),
                  x: h + a,
                  y: c + s,
                  foreColor: i,
                  textAnchor: p || x.textAnchor,
                  text: u,
                  fontSize: x.style.fontSize,
                  fontFamily: x.style.fontFamily,
                  fontWeight: x.style.fontWeight || 'normal'
                })).attr({ class: 'apexcharts-datalabel', cx: h, cy: c }),
                x.dropShadow.enabled &&
                  ((n = x.dropShadow), new E(this.ctx).dropShadow(r, n)),
                f.add(r),
                void 0 === o.globals.lastDrawnDataLabelsIndexes[d] &&
                  (o.globals.lastDrawnDataLabelsIndexes[d] = []),
                o.globals.lastDrawnDataLabelsIndexes[d].push(g)))
          }
        },
        {
          key: 'addBackgroundToDataLabel',
          value: function (t, e) {
            var i = this.w,
              a = i.config.dataLabels.background,
              s = a.padding,
              r = a.padding / 2,
              n = e.width,
              o = e.height,
              l = new Y(this.ctx).drawRect(
                e.x - s,
                e.y - r / 2,
                n + 2 * s,
                o + r,
                a.borderRadius,
                'transparent' === i.config.chart.background
                  ? '#fff'
                  : i.config.chart.background,
                a.opacity,
                a.borderWidth,
                a.borderColor
              )
            return (
              a.dropShadow.enabled &&
                new E(this.ctx).dropShadow(l, a.dropShadow),
              l
            )
          }
        },
        {
          key: 'dataLabelsBackground',
          value: function () {
            var t = this.w
            if ('bubble' !== t.config.chart.type)
              for (
                var e = t.globals.dom.baseEl.querySelectorAll(
                    '.apexcharts-datalabels text'
                  ),
                  i = 0;
                i < e.length;
                i++
              ) {
                var a,
                  s = e[i],
                  r = s.getBBox(),
                  n = null
                r.width &&
                  r.height &&
                  (n = this.addBackgroundToDataLabel(s, r)),
                  n &&
                    (s.parentNode.insertBefore(n.node, s),
                    (a = s.getAttribute('fill')),
                    !t.config.chart.animations.enabled ||
                    t.globals.resized ||
                    t.globals.dataChanged
                      ? n.attr({ fill: a })
                      : n.animate().attr({ fill: a }),
                    s.setAttribute(
                      'fill',
                      t.config.dataLabels.background.foreColor
                    ))
              }
          }
        },
        {
          key: 'bringForward',
          value: function () {
            for (
              var t = this.w,
                e = t.globals.dom.baseEl.getElementsByClassName(
                  'apexcharts-datalabels'
                ),
                i = t.globals.dom.baseEl.querySelector(
                  '.apexcharts-plot-series:last-child'
                ),
                a = 0;
              a < e.length;
              a++
            )
              i && i.insertBefore(e[a], i.nextSibling)
          }
        }
      ]),
      Fe),
    O =
      (n(Ye, [
        {
          key: 'handleBarDataLabels',
          value: function (t) {
            var e = t.x,
              i = t.y,
              a = t.y1,
              s = t.y2,
              r = t.i,
              n = t.j,
              o = t.realIndex,
              l = t.series,
              h = t.barHeight,
              c = t.barWidth,
              d = t.barYPosition,
              g = t.visibleSeries,
              u = t.renderedPath,
              p = this.w,
              f = new Y(this.barCtx.ctx),
              x = Array.isArray(this.barCtx.strokeWidth)
                ? this.barCtx.strokeWidth[o]
                : this.barCtx.strokeWidth,
              b = e + parseFloat(c * g),
              m = i + parseFloat(h * g)
            p.globals.isXNumeric &&
              !p.globals.isBarHorizontal &&
              ((b = e + parseFloat(c * (g + 1))),
              (m = i + parseFloat(h * (g + 1)) - x))
            var v = e,
              y = i,
              w = p.config.dataLabels,
              k = this.barCtx.barOptions.dataLabels
            void 0 !== d && this.barCtx.isTimelineBar && (y = m = d)
            var A,
              S = w.offsetX,
              C = w.offsetY,
              L = { width: 0, height: 0 }
            p.config.dataLabels.enabled &&
              ((A =
                String(p.globals.minY).length > String(p.globals.maxY).length
                  ? p.globals.minY
                  : p.globals.maxY),
              (L = f.getTextRects(
                p.globals.yLabelFormatters[0](A),
                parseFloat(w.style.fontSize)
              )))
            var P = {
                x: e,
                y: i,
                i: r,
                j: n,
                renderedPath: u,
                bcx: b,
                bcy: m,
                barHeight: h,
                barWidth: c,
                textRects: L,
                strokeWidth: x,
                dataLabelsX: v,
                dataLabelsY: y,
                barDataLabelsConfig: k,
                offX: S,
                offY: C
              },
              T = this.barCtx.isHorizontal
                ? this.calculateBarsDataLabelsPosition(P)
                : this.calculateColumnsDataLabelsPosition(P)
            return (
              u.attr({
                cy: T.bcy,
                cx: T.bcx,
                j: n,
                val: l[r][n],
                barHeight: h,
                barWidth: c
              }),
              this.drawCalculatedDataLabels({
                x: T.dataLabelsX,
                y: T.dataLabelsY,
                val: this.barCtx.isTimelineBar ? [a, s] : l[r][n],
                i: o,
                j: n,
                barWidth: c,
                barHeight: h,
                textRects: L,
                dataLabelsConfig: w
              })
            )
          }
        },
        {
          key: 'calculateColumnsDataLabelsPosition',
          value: function (t) {
            var e = this.w,
              i = t.i,
              a = t.j,
              s = t.y,
              r = t.bcx,
              n = t.barWidth,
              o = t.barHeight,
              l = t.textRects,
              h = t.dataLabelsY,
              c = t.barDataLabelsConfig,
              d = t.strokeWidth,
              g = t.offX,
              u = t.offY,
              o = Math.abs(o),
              p = 'vertical' === e.config.plotOptions.bar.dataLabels.orientation
            r -= d / 2
            var f = e.globals.gridWidth / e.globals.dataPoints,
              x = e.globals.isXNumeric ? r - n / 2 + g : r - f + n / 2 + g
            p && (x = x + l.height / 2 - d / 2 - 2)
            var b = this.barCtx.series[i][a] < 0,
              m = s
            switch (
              (this.barCtx.isReversed &&
                ((m = s - o + (b ? 2 * o : 0)), (s -= o)),
              c.position)
            ) {
              case 'center':
                h = p
                  ? b
                    ? m + o / 2 + u
                    : m + o / 2 - u
                  : b
                  ? m - o / 2 + l.height / 2 + u
                  : m + o / 2 + l.height / 2 - u
                break
              case 'bottom':
                h = p
                  ? b
                    ? m + o + u
                    : m + o - u
                  : b
                  ? m - o + l.height + d + u
                  : m + o - l.height / 2 + d - u
                break
              case 'top':
                h = p
                  ? b
                    ? m + u
                    : m - u
                  : b
                  ? m - l.height / 2 - u
                  : m + l.height + u
            }
            return (
              e.config.chart.stacked ||
                (h < 0
                  ? (h = 0 + d)
                  : h + l.height / 3 > e.globals.gridHeight &&
                    (h = e.globals.gridHeight - d)),
              { bcx: r, bcy: s, dataLabelsX: x, dataLabelsY: h }
            )
          }
        },
        {
          key: 'calculateBarsDataLabelsPosition',
          value: function (t) {
            var e = this.w,
              i = t.x,
              a = t.i,
              s = t.j,
              r = t.bcy,
              n = t.barHeight,
              o = t.barWidth,
              l = t.textRects,
              h = t.dataLabelsX,
              c = t.strokeWidth,
              d = t.barDataLabelsConfig,
              g = t.offX,
              u = t.offY,
              p = e.globals.gridHeight / e.globals.dataPoints,
              o = Math.abs(o),
              f =
                r -
                (this.barCtx.isTimelineBar ? 0 : p) +
                n / 2 +
                l.height / 2 +
                u -
                3,
              x = this.barCtx.series[a][s] < 0,
              b = i
            switch (
              (this.barCtx.isReversed &&
                ((b = i + o - (x ? 2 * o : 0)), (i = e.globals.gridWidth - o)),
              d.position)
            ) {
              case 'center':
                h = x ? b + o / 2 - g : b - o / 2 + g
                break
              case 'bottom':
                h = x
                  ? b + o - c - Math.round(l.width / 2) - g
                  : b - o + c + Math.round(l.width / 2) + g
                break
              case 'top':
                h = x
                  ? b - c + Math.round(l.width / 2) - g
                  : b - c - Math.round(l.width / 2) + g
            }
            return (
              e.config.chart.stacked ||
                (h < 0
                  ? (h = h + l.width + c)
                  : h + l.width / 2 > e.globals.gridWidth &&
                    (h = e.globals.gridWidth - l.width - c)),
              { bcx: i, bcy: r, dataLabelsX: h, dataLabelsY: f }
            )
          }
        },
        {
          key: 'drawCalculatedDataLabels',
          value: function (t) {
            var e = t.x,
              i = t.y,
              a = t.val,
              s = t.i,
              r = t.j,
              n = t.textRects,
              o = t.barHeight,
              l = t.barWidth,
              h = t.dataLabelsConfig,
              c = this.w,
              d = 'rotate(0)'
            'vertical' === c.config.plotOptions.bar.dataLabels.orientation &&
              (d = 'rotate(-90, '.concat(e, ', ').concat(i, ')'))
            var g,
              u,
              p,
              f,
              x = new N(this.barCtx.ctx),
              b = new Y(this.barCtx.ctx),
              m = h.formatter,
              v = null,
              y = -1 < c.globals.collapsedSeriesIndices.indexOf(s)
            return (
              h.enabled &&
                !y &&
                ((v = b.group({
                  class: 'apexcharts-data-labels',
                  transform: d
                })),
                (g = ''),
                void 0 !== a &&
                  (g = m(a, { seriesIndex: s, dataPointIndex: r, w: c })),
                0 === a && c.config.chart.stacked && (g = ''),
                (u = c.globals.series[s][r] <= 0),
                (p = c.config.plotOptions.bar.dataLabels.position),
                'vertical' ===
                  c.config.plotOptions.bar.dataLabels.orientation &&
                  ('top' === p && (h.textAnchor = u ? 'end' : 'start'),
                  'center' === p && (h.textAnchor = 'middle'),
                  'bottom' === p && (h.textAnchor = u ? 'end' : 'start')),
                this.barCtx.isTimelineBar &&
                  this.barCtx.barOptions.dataLabels.hideOverflowingLabels &&
                  l < b.getTextRects(g, parseFloat(h.style.fontSize)).width &&
                  (g = ''),
                c.config.chart.stacked &&
                  this.barCtx.barOptions.dataLabels.hideOverflowingLabels &&
                  (this.barCtx.isHorizontal
                    ? ((0 <
                        (l =
                          Math.abs(c.globals.series[s][r]) /
                          this.barCtx.invertedYRatio[this.barCtx.yaxisIndex]) &&
                        n.width / 1.6 > l) ||
                        (l < 0 && n.width / 1.6 < l)) &&
                      (g = '')
                    : ((o =
                        Math.abs(c.globals.series[s][r]) /
                        this.barCtx.yRatio[this.barCtx.yaxisIndex]),
                      n.height / 1.6 > o && (g = ''))),
                (f = M({}, h)),
                this.barCtx.isHorizontal &&
                  a < 0 &&
                  ('start' === h.textAnchor
                    ? (f.textAnchor = 'end')
                    : 'end' === h.textAnchor && (f.textAnchor = 'start')),
                x.plotDataLabelsText({
                  x: e,
                  y: i,
                  text: g,
                  i: s,
                  j: r,
                  parent: v,
                  dataLabelsConfig: f,
                  alwaysDrawDataLabel: !0,
                  offsetCorrection: !0
                })),
              v
            )
          }
        }
      ]),
      Ye),
    W =
      (n(Xe, [
        {
          key: 'getAllSeriesEls',
          value: function () {
            return this.w.globals.dom.baseEl.getElementsByClassName(
              'apexcharts-series'
            )
          }
        },
        {
          key: 'getSeriesByName',
          value: function (t) {
            return this.w.globals.dom.baseEl.querySelector(
              "[seriesName='".concat(I.escapeString(t), "']")
            )
          }
        },
        {
          key: 'isSeriesHidden',
          value: function (t) {
            var e = this.getSeriesByName(t),
              i = parseInt(e.getAttribute('data:realIndex'), 10)
            return {
              isHidden: e.classList.contains('apexcharts-series-collapsed'),
              realIndex: i
            }
          }
        },
        {
          key: 'addCollapsedClassToSeries',
          value: function (i, a) {
            var t = this.w
            function e (t) {
              for (var e = 0; e < t.length; e++)
                t[e].index === a &&
                  i.node.classList.add('apexcharts-series-collapsed')
            }
            e(t.globals.collapsedSeries), e(t.globals.ancillaryCollapsedSeries)
          }
        },
        {
          key: 'toggleSeries',
          value: function (t) {
            var e = this.isSeriesHidden(t)
            return (
              this.ctx.legend.legendHelpers.toggleDataSeries(
                e.realIndex,
                e.isHidden
              ),
              e.isHidden
            )
          }
        },
        {
          key: 'showSeries',
          value: function (t) {
            var e = this.isSeriesHidden(t)
            e.isHidden &&
              this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !0)
          }
        },
        {
          key: 'hideSeries',
          value: function (t) {
            var e = this.isSeriesHidden(t)
            e.isHidden ||
              this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !1)
          }
        },
        {
          key: 'resetSeries',
          value: function () {
            var t =
                !(0 < arguments.length && void 0 !== arguments[0]) ||
                arguments[0],
              e =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                !(2 < arguments.length && void 0 !== arguments[2]) ||
                arguments[2],
              a = this.w,
              s = I.clone(a.globals.initialSeries)
            ;(a.globals.previousPaths = []),
              i
                ? ((a.globals.collapsedSeries = []),
                  (a.globals.ancillaryCollapsedSeries = []),
                  (a.globals.collapsedSeriesIndices = []),
                  (a.globals.ancillaryCollapsedSeriesIndices = []))
                : (s = this.emptyCollapsedSeries(s)),
              (a.config.series = s),
              t &&
                (e &&
                  ((a.globals.zoomed = !1),
                  this.ctx.updateHelpers.revertDefaultAxisMinMax()),
                this.ctx.updateHelpers._updateSeries(
                  s,
                  a.config.chart.animations.dynamicAnimation.enabled
                ))
          }
        },
        {
          key: 'emptyCollapsedSeries',
          value: function (t) {
            for (var e = this.w, i = 0; i < t.length; i++)
              -1 < e.globals.collapsedSeriesIndices.indexOf(i) &&
                (t[i].data = [])
            return t
          }
        },
        {
          key: 'toggleSeriesOnHover',
          value: function (t, e) {
            var i = this.w,
              a = i.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-series, .apexcharts-datalabels'
              )
            if ('mousemove' === t.type) {
              var s = parseInt(e.getAttribute('rel'), 10) - 1,
                r = null,
                n = null
              i.globals.axisCharts || 'radialBar' === i.config.chart.type
                ? i.globals.axisCharts
                  ? ((r = i.globals.dom.baseEl.querySelector(
                      ".apexcharts-series[data\\:realIndex='".concat(s, "']")
                    )),
                    (n = i.globals.dom.baseEl.querySelector(
                      ".apexcharts-datalabels[data\\:realIndex='".concat(
                        s,
                        "']"
                      )
                    )))
                  : (r = i.globals.dom.baseEl.querySelector(
                      ".apexcharts-series[rel='".concat(1 + s, "']")
                    ))
                : (r = i.globals.dom.baseEl.querySelector(
                    ".apexcharts-series[rel='".concat(1 + s, "'] path")
                  ))
              for (var o = 0; o < a.length; o++)
                a[o].classList.add(this.legendInactiveClass)
              null !== r &&
                (i.globals.axisCharts ||
                  r.parentNode.classList.remove(this.legendInactiveClass),
                r.classList.remove(this.legendInactiveClass),
                null !== n && n.classList.remove(this.legendInactiveClass))
            } else if ('mouseout' === t.type)
              for (var l = 0; l < a.length; l++)
                a[l].classList.remove(this.legendInactiveClass)
          }
        },
        {
          key: 'highlightRangeInSeries',
          value: function (t, e) {
            function i (t) {
              for (var e = 0; e < n.length; e++)
                n[e].classList[t](s.legendInactiveClass)
            }
            var a,
              s = this,
              r = this.w,
              n = r.globals.dom.baseEl.getElementsByClassName(
                'apexcharts-heatmap-rect'
              )
            'mousemove' === t.type
              ? ((a = parseInt(e.getAttribute('rel'), 10) - 1),
                i('add'),
                (function (t) {
                  for (var e = 0; e < n.length; e++) {
                    var i = parseInt(n[e].getAttribute('val'), 10)
                    i >= t.from &&
                      i <= t.to &&
                      n[e].classList.remove(s.legendInactiveClass)
                  }
                })(r.config.plotOptions.heatmap.colorScale.ranges[a]))
              : 'mouseout' === t.type && i('remove')
          }
        },
        {
          key: 'getActiveConfigSeriesIndex',
          value: function () {
            var a =
                0 < arguments.length && void 0 !== arguments[0] && arguments[0],
              s = this.w,
              t = 0
            if (1 < s.config.series.length)
              for (
                var e = s.config.series.map(function (t, e) {
                    var i = !1
                    return (
                      a &&
                        (i =
                          'bar' === s.config.series[e].type ||
                          'column' === s.config.series[e].type),
                      t.data && 0 < t.data.length && !i ? e : -1
                    )
                  }),
                  i = 0;
                i < e.length;
                i++
              )
                if (-1 !== e[i]) {
                  t = e[i]
                  break
                }
            return t
          }
        },
        {
          key: 'getPreviousPaths',
          value: function () {
            var o = this.w
            ;(o.globals.previousPaths = []),
              ['line', 'area', 'bar', 'candlestick', 'radar'].forEach(function (
                t
              ) {
                for (
                  var e = o.globals.dom.baseEl.querySelectorAll(
                      '.apexcharts-'.concat(t, '-series .apexcharts-series')
                    ),
                    i = 0;
                  i < e.length;
                  i++
                )
                  !(function (t, e, i) {
                    for (
                      var a,
                        s = t[e].childNodes,
                        r = {
                          type: i,
                          paths: [],
                          realIndex: t[e].getAttribute('data:realIndex')
                        },
                        n = 0;
                      n < s.length;
                      n++
                    )
                      s[n].hasAttribute('pathTo') &&
                        ((a = s[n].getAttribute('pathTo')),
                        r.paths.push({ d: a }))
                    o.globals.previousPaths.push(r)
                  })(e, i, t)
              }),
              this.handlePrevBubbleScatterPaths('bubble'),
              this.handlePrevBubbleScatterPaths('scatter')
            var t = o.globals.dom.baseEl.querySelectorAll(
              '.apexcharts-heatmap .apexcharts-series'
            )
            if (0 < t.length)
              for (var e = 0; e < t.length; e++) {
                for (
                  var i = o.globals.dom.baseEl.querySelectorAll(
                      ".apexcharts-heatmap .apexcharts-series[data\\:realIndex='".concat(
                        e,
                        "'] rect"
                      )
                    ),
                    a = [],
                    s = 0;
                  s < i.length;
                  s++
                )
                  a.push({ color: i[s].getAttribute('color') })
                o.globals.previousPaths.push(a)
              }
            o.globals.axisCharts || (o.globals.previousPaths = o.globals.series)
          }
        },
        {
          key: 'handlePrevBubbleScatterPaths',
          value: function (t) {
            var e = this.w,
              i = e.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-'.concat(t, '-series .apexcharts-series')
              )
            if (0 < i.length)
              for (var a = 0; a < i.length; a++) {
                for (
                  var s = e.globals.dom.baseEl.querySelectorAll(
                      '.apexcharts-'
                        .concat(
                          t,
                          "-series .apexcharts-series[data\\:realIndex='"
                        )
                        .concat(a, "'] circle")
                    ),
                    r = [],
                    n = 0;
                  n < s.length;
                  n++
                )
                  r.push({
                    x: s[n].getAttribute('cx'),
                    y: s[n].getAttribute('cy'),
                    r: s[n].getAttribute('r')
                  })
                e.globals.previousPaths.push(r)
              }
          }
        },
        {
          key: 'clearPreviousPaths',
          value: function () {
            var t = this.w
            ;(t.globals.previousPaths = []), (t.globals.allSeriesCollapsed = !1)
          }
        },
        {
          key: 'handleNoData',
          value: function () {
            var t,
              e = this.w,
              i = e.config.noData,
              a = new Y(this.ctx),
              s = e.globals.svgWidth / 2,
              r = e.globals.svgHeight / 2,
              n = 'middle'
            ;(e.globals.noData = !0),
              (e.globals.animationEnded = !0),
              'left' === i.align
                ? ((s = 10), (n = 'start'))
                : 'right' === i.align &&
                  ((s = e.globals.svgWidth - 10), (n = 'end')),
              'top' === i.verticalAlign
                ? (r = 50)
                : 'bottom' === i.verticalAlign &&
                  (r = e.globals.svgHeight - 50),
              (s += i.offsetX),
              (r = r + parseInt(i.style.fontSize, 10) + 2 + i.offsetY),
              void 0 !== i.text &&
                '' !== i.text &&
                ((t = a.drawText({
                  x: s,
                  y: r,
                  text: i.text,
                  textAnchor: n,
                  fontSize: i.style.fontSize,
                  fontFamily: i.style.fontFamily,
                  foreColor: i.style.color,
                  opacity: 1,
                  class: 'apexcharts-text-nodata'
                })),
                e.globals.dom.Paper.add(t))
          }
        },
        {
          key: 'setNullSeriesToZeroValues',
          value: function (t) {
            for (var e = this.w, i = 0; i < t.length; i++)
              if (0 === t[i].length)
                for (
                  var a = 0;
                  a < t[e.globals.maxValsInArrayIndex].length;
                  a++
                )
                  t[i].push(0)
            return t
          }
        },
        {
          key: 'hasAllSeriesEqualX',
          value: function () {
            for (
              var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0;
              a < i.length - 1;
              a++
            )
              if (i[a][0] !== i[a + 1][0]) {
                t = !1
                break
              }
            return (e.globals.allSeriesHasEqualX = t)
          }
        },
        {
          key: 'filteredSeriesX',
          value: function () {
            return this.w.globals.seriesX.map(function (t) {
              return 0 < t.length ? t : []
            })
          }
        }
      ]),
      Xe),
    B =
      (n(Ee, [
        {
          key: 'initVariables',
          value: function (t) {
            var e = this.w
            ;(this.barCtx.series = t),
              (this.barCtx.totalItems = 0),
              (this.barCtx.seriesLen = 0),
              (this.barCtx.visibleI = -1),
              (this.barCtx.visibleItems = 1)
            for (var i = 0; i < t.length; i++)
              if (
                (0 < t[i].length &&
                  ((this.barCtx.seriesLen = this.barCtx.seriesLen + 1),
                  (this.barCtx.totalItems += t[i].length)),
                e.globals.isXNumeric)
              )
                for (var a = 0; a < t[i].length; a++)
                  e.globals.seriesX[i][a] > e.globals.minX &&
                    e.globals.seriesX[i][a] < e.globals.maxX &&
                    this.barCtx.visibleItems++
              else this.barCtx.visibleItems = e.globals.dataPoints
            0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1)
          }
        },
        {
          key: 'initialPositions',
          value: function () {
            var t,
              e,
              i,
              a,
              s,
              r,
              n,
              o,
              l,
              h = this.w,
              c = h.globals.dataPoints
            return (
              this.barCtx.isTimelineBar && (c = h.globals.labels.length),
              this.barCtx.isHorizontal
                ? ((a = (i = h.globals.gridHeight / c) / this.barCtx.seriesLen),
                  h.globals.isXNumeric &&
                    (a =
                      (i = h.globals.gridHeight / this.barCtx.totalItems) /
                      this.barCtx.seriesLen),
                  (a =
                    (a * parseInt(this.barCtx.barOptions.barHeight, 10)) / 100),
                  (n =
                    this.barCtx.baseLineInvertedY +
                    h.globals.padHorizontal +
                    (this.barCtx.isReversed ? h.globals.gridWidth : 0) -
                    (this.barCtx.isReversed
                      ? 2 * this.barCtx.baseLineInvertedY
                      : 0)),
                  (e = (i - a * this.barCtx.seriesLen) / 2))
                : ((l = h.globals.gridWidth / this.barCtx.visibleItems),
                  h.config.xaxis.convertedCatToNumeric &&
                    (l = h.globals.gridWidth / h.globals.dataPoints),
                  (s =
                    ((l / this.barCtx.seriesLen) *
                      parseInt(this.barCtx.barOptions.columnWidth, 10)) /
                    100),
                  h.globals.isXNumeric &&
                    ((o = this.barCtx.xRatio),
                    h.config.xaxis.convertedCatToNumeric &&
                      (o = this.barCtx.initialXRatio),
                    h.globals.minXDiff &&
                      0.5 !== h.globals.minXDiff &&
                      0 < h.globals.minXDiff / o &&
                      (l = h.globals.minXDiff / o),
                    (s =
                      ((l / this.barCtx.seriesLen) *
                        parseInt(this.barCtx.barOptions.columnWidth, 10)) /
                      100) < 1 && (s = 1)),
                  (r =
                    h.globals.gridHeight -
                    this.barCtx.baseLineY[this.barCtx.yaxisIndex] -
                    (this.barCtx.isReversed ? h.globals.gridHeight : 0) +
                    (this.barCtx.isReversed
                      ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex]
                      : 0)),
                  (t =
                    h.globals.padHorizontal +
                    (l - s * this.barCtx.seriesLen) / 2)),
              {
                x: t,
                y: e,
                yDivision: i,
                xDivision: l,
                barHeight: a,
                barWidth: s,
                zeroH: r,
                zeroW: n
              }
            )
          }
        },
        {
          key: 'getPathFillColor',
          value: function (e, i, a, t) {
            var s = this.w,
              r = new R(this.barCtx.ctx),
              n = null,
              o = this.barCtx.barOptions.distributed ? a : i
            return (
              0 < this.barCtx.barOptions.colors.ranges.length &&
                this.barCtx.barOptions.colors.ranges.map(function (t) {
                  e[i][a] >= t.from && e[i][a] <= t.to && (n = t.color)
                }),
              s.config.series[i].data[a] &&
                s.config.series[i].data[a].fillColor &&
                (n = s.config.series[i].data[a].fillColor),
              r.fillPath({
                seriesNumber: this.barCtx.barOptions.distributed ? o : t,
                dataPointIndex: a,
                color: n,
                value: e[i][a]
              })
            )
          }
        },
        {
          key: 'getStrokeWidth',
          value: function (t, e, i) {
            var a = 0,
              s = this.w
            return (
              void 0 === this.barCtx.series[t][e] ||
              null === this.barCtx.series[t][e]
                ? (this.barCtx.isNullValue = !0)
                : (this.barCtx.isNullValue = !1),
              s.config.stroke.show &&
                (this.barCtx.isNullValue ||
                  (a = Array.isArray(this.barCtx.strokeWidth)
                    ? this.barCtx.strokeWidth[i]
                    : this.barCtx.strokeWidth)),
              a
            )
          }
        },
        {
          key: 'barBackground',
          value: function (t) {
            var e,
              i,
              a = t.j,
              s = t.i,
              r = t.x1,
              n = t.x2,
              o = t.y1,
              l = t.y2,
              h = t.elSeries,
              c = this.w,
              d = new Y(this.barCtx.ctx),
              g = new W(this.barCtx.ctx).getActiveConfigSeriesIndex()
            0 < this.barCtx.barOptions.colors.backgroundBarColors.length &&
              g === s &&
              (a >= this.barCtx.barOptions.colors.backgroundBarColors.length &&
                (a -= this.barCtx.barOptions.colors.backgroundBarColors.length),
              (e = this.barCtx.barOptions.colors.backgroundBarColors[a]),
              (i = d.drawRect(
                void 0 !== r ? r : 0,
                void 0 !== o ? o : 0,
                void 0 !== n ? n : c.globals.gridWidth,
                void 0 !== l ? l : c.globals.gridHeight,
                this.barCtx.barOptions.colors.backgroundBarRadius,
                e,
                this.barCtx.barOptions.colors.backgroundBarOpacity
              )),
              h.add(i),
              i.node.classList.add('apexcharts-backgroundBar'))
          }
        },
        {
          key: 'getColumnPaths',
          value: function (t) {
            var e = t.barWidth,
              i = t.barXPosition,
              a = t.yRatio,
              s = t.y1,
              r = t.y2,
              n = t.strokeWidth,
              o = t.series,
              l = t.realIndex,
              h = t.i,
              c = t.j,
              d = t.w,
              g = new Y(this.barCtx.ctx)
            ;(n = Array.isArray(n) ? n[l] : n) || (n = 0)
            var u = {
                barWidth: e,
                strokeWidth: n,
                yRatio: a,
                barXPosition: i,
                y1: s,
                y2: r
              },
              p = this.getRoundedBars(d, u, o, h, c),
              f = i,
              x = i + e,
              b = g.move(f, p.y1),
              m = g.move(f, p.y1)
            return (
              0 < d.globals.previousPaths.length &&
                (m = this.barCtx.getPreviousPath(l, c, !1)),
              {
                pathTo:
                  b +
                  g.line(f, p.y2) +
                  p.endingPath +
                  g.line(x - n, p.y2) +
                  g.line(x - n, p.y1) +
                  p.startingPath +
                  'z',
                pathFrom: (m =
                  m +
                  g.line(f, s) +
                  g.line(x - n, s) +
                  g.line(x - n, s) +
                  g.line(x - n, s) +
                  g.line(f, s))
              }
            )
          }
        },
        {
          key: 'getBarpaths',
          value: function (t) {
            var e = t.barYPosition,
              i = t.barHeight,
              a = t.x1,
              s = t.x2,
              r = t.strokeWidth,
              n = t.series,
              o = t.realIndex,
              l = t.i,
              h = t.j,
              c = t.w,
              d = new Y(this.barCtx.ctx)
            ;(r = Array.isArray(r) ? r[o] : r) || (r = 0)
            var g = {
                barHeight: i,
                strokeWidth: r,
                barYPosition: e,
                x2: s,
                x1: a
              },
              u = this.getRoundedBars(c, g, n, l, h),
              p = d.move(u.x1, e),
              f = d.move(u.x1, e)
            0 < c.globals.previousPaths.length &&
              (f = this.barCtx.getPreviousPath(o, h, !1))
            var x = e,
              b = e + i
            return {
              pathTo:
                p +
                d.line(u.x2, x) +
                u.endingPath +
                d.line(u.x2, b - r) +
                d.line(u.x1, b - r) +
                u.startingPath +
                'z',
              pathFrom: (f =
                f +
                d.line(a, x) +
                d.line(a, b - r) +
                d.line(a, b - r) +
                d.line(a, b - r) +
                d.line(a, x))
            }
          }
        },
        {
          key: 'getRoundedBars',
          value: function (t, e, i, a, s) {
            var r = new Y(this.barCtx.ctx),
              n =
                (n = Array.isArray(e.strokeWidth)
                  ? e.strokeWidth[a]
                  : e.strokeWidth) || 0
            if (this.barCtx.isHorizontal) {
              var o = null,
                l = '',
                h = e.x2,
                c = e.x1
              if (void 0 !== i[a][s] || null !== i[a][s]) {
                var d = i[a][s] < 0,
                  g = e.barHeight / 2 - n
                switch (
                  (d && (g = -e.barHeight / 2 - n),
                  g > Math.abs(h - c) && (g = Math.abs(h - c)),
                  'rounded' === this.barCtx.barOptions.endingShape &&
                    (h = e.x2 - g / 2),
                  'rounded' === this.barCtx.barOptions.startingShape &&
                    (c = e.x1 + g / 2),
                  this.barCtx.barOptions.endingShape)
                ) {
                  case 'flat':
                    o = r.line(h, e.barYPosition + e.barHeight - n)
                    break
                  case 'rounded':
                    o = r.quadraticCurve(
                      h + g,
                      e.barYPosition + (e.barHeight - n) / 2,
                      h,
                      e.barYPosition + e.barHeight - n
                    )
                }
                switch (this.barCtx.barOptions.startingShape) {
                  case 'flat':
                    l = r.line(c, e.barYPosition + e.barHeight - n)
                    break
                  case 'rounded':
                    l = r.quadraticCurve(
                      c - g,
                      e.barYPosition + e.barHeight / 2,
                      c,
                      e.barYPosition
                    )
                }
              }
              return { endingPath: o, startingPath: l, x2: h, x1: c }
            }
            var u = null,
              p = '',
              f = e.y2,
              x = e.y1
            if (void 0 !== i[a][s] || null !== i[a][s]) {
              var b = i[a][s] < 0,
                m = e.barWidth / 2 - n
              switch (
                (b && (m = -e.barWidth / 2 - n),
                m > Math.abs(f - x) && (m = Math.abs(f - x)),
                'rounded' === this.barCtx.barOptions.endingShape &&
                  (f += m / 2),
                'rounded' === this.barCtx.barOptions.startingShape &&
                  (x -= m / 2),
                this.barCtx.barOptions.endingShape)
              ) {
                case 'flat':
                  u = r.line(e.barXPosition + e.barWidth - n, f)
                  break
                case 'rounded':
                  u = r.quadraticCurve(
                    e.barXPosition + (e.barWidth - n) / 2,
                    f - m,
                    e.barXPosition + e.barWidth - n,
                    f
                  )
              }
              switch (this.barCtx.barOptions.startingShape) {
                case 'flat':
                  p = r.line(e.barXPosition + e.barWidth - n, x)
                  break
                case 'rounded':
                  p = r.quadraticCurve(
                    e.barXPosition + (e.barWidth - n) / 2,
                    x + m,
                    e.barXPosition,
                    x
                  )
              }
            }
            return { endingPath: u, startingPath: p, y2: f, y1: x }
          }
        }
      ]),
      Ee),
    V =
      (n(Me, [
        {
          key: 'draw',
          value: function (t, e) {
            var i = this.w,
              a = new Y(this.ctx),
              s = new P(this.ctx, i)
            ;(t = s.getLogSeries(t)),
              (this.series = t),
              (this.yRatio = s.getLogYRatios(this.yRatio)),
              this.barHelpers.initVariables(t)
            var r = a.group({
              class: 'apexcharts-bar-series apexcharts-plot-series'
            })
            i.config.dataLabels.enabled &&
              this.totalItems > this.barOptions.dataLabels.maxItems &&
              console.warn(
                'WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.'
              )
            for (var n = 0, o = 0; n < t.length; n++, o++) {
              var l = void 0,
                h = void 0,
                c = [],
                d = [],
                g = i.globals.comboCharts ? e[n] : n,
                u = a.group({
                  class: 'apexcharts-series',
                  rel: n + 1,
                  seriesName: I.escapeString(i.globals.seriesNames[g]),
                  'data:realIndex': g
                })
              this.ctx.series.addCollapsedClassToSeries(u, g),
                0 < t[n].length && (this.visibleI = this.visibleI + 1)
              var p = 0,
                f = 0
              1 < this.yRatio.length && (this.yaxisIndex = g),
                (this.isReversed =
                  i.config.yaxis[this.yaxisIndex] &&
                  i.config.yaxis[this.yaxisIndex].reversed)
              var x = this.barHelpers.initialPositions(),
                h = x.y,
                p = x.barHeight,
                b = x.yDivision,
                m = x.zeroW,
                l = x.x,
                f = x.barWidth,
                v = x.xDivision,
                y = x.zeroH
              this.horizontal || d.push(l + f / 2)
              for (
                var w = a.group({
                    class: 'apexcharts-datalabels',
                    'data:realIndex': g
                  }),
                  k = 0;
                k < i.globals.dataPoints;
                k++
              ) {
                var A = this.barHelpers.getStrokeWidth(n, k, g),
                  S = null,
                  C = {
                    indexes: { i: n, j: k, realIndex: g, bc: o },
                    x: l,
                    y: h,
                    strokeWidth: A,
                    elSeries: u
                  }
                this.isHorizontal
                  ? ((S = this.drawBarPaths(
                      M(M({}, C), {}, { barHeight: p, zeroW: m, yDivision: b })
                    )),
                    (f = this.series[n][k] / this.invertedYRatio))
                  : ((S = this.drawColumnPaths(
                      M(M({}, C), {}, { xDivision: v, barWidth: f, zeroH: y })
                    )),
                    (p = this.series[n][k] / this.yRatio[this.yaxisIndex])),
                  (h = S.y),
                  (l = S.x),
                  0 < k && d.push(l + f / 2),
                  c.push(h)
                var L = this.barHelpers.getPathFillColor(t, n, k, g)
                this.renderSeries({
                  realIndex: g,
                  pathFill: L,
                  j: k,
                  i: n,
                  pathFrom: S.pathFrom,
                  pathTo: S.pathTo,
                  strokeWidth: A,
                  elSeries: u,
                  x: l,
                  y: h,
                  series: t,
                  barHeight: p,
                  barWidth: f,
                  elDataLabelsWrap: w,
                  visibleSeries: this.visibleI,
                  type: 'bar'
                })
              }
              ;(i.globals.seriesXvalues[g] = d),
                (i.globals.seriesYvalues[g] = c),
                r.add(u)
            }
            return r
          }
        },
        {
          key: 'renderSeries',
          value: function (t) {
            var e = t.realIndex,
              i = t.pathFill,
              a = t.lineFill,
              s = t.j,
              r = t.i,
              n = t.pathFrom,
              o = t.pathTo,
              l = t.strokeWidth,
              h = t.elSeries,
              c = t.x,
              d = t.y,
              g = t.y1,
              u = t.y2,
              p = t.series,
              f = t.barHeight,
              x = t.barWidth,
              b = t.barYPosition,
              m = t.elDataLabelsWrap,
              v = t.visibleSeries,
              y = t.type,
              w = this.w,
              k = new Y(this.ctx),
              a =
                a ||
                (this.barOptions.distributed
                  ? w.globals.stroke.colors[s]
                  : w.globals.stroke.colors[e])
            w.config.series[r].data[s] &&
              w.config.series[r].data[s].strokeColor &&
              (a = w.config.series[r].data[s].strokeColor),
              this.isNullValue && (i = 'none')
            var A =
                ((s / w.config.chart.animations.animateGradually.delay) *
                  (w.config.chart.animations.speed / w.globals.dataPoints)) /
                2.4,
              S = k.renderPaths({
                i: r,
                j: s,
                realIndex: e,
                pathFrom: n,
                pathTo: o,
                stroke: a,
                strokeWidth: l,
                strokeLineCap: w.config.stroke.lineCap,
                fill: i,
                animationDelay: A,
                initialSpeed: w.config.chart.animations.speed,
                dataChangeSpeed:
                  w.config.chart.animations.dynamicAnimation.speed,
                className: 'apexcharts-'.concat(y, '-area')
              })
            S.attr(
              'clip-path',
              'url(#gridRectMask'.concat(w.globals.cuid, ')')
            ),
              void 0 !== g &&
                void 0 !== u &&
                (S.attr('data-range-y1', g), S.attr('data-range-y2', u)),
              new E(this.ctx).setSelectionFilter(S, e, s),
              h.add(S)
            var C = new O(this).handleBarDataLabels({
              x: c,
              y: d,
              y1: g,
              y2: u,
              i: r,
              j: s,
              series: p,
              realIndex: e,
              barHeight: f,
              barWidth: x,
              barYPosition: b,
              renderedPath: S,
              visibleSeries: v
            })
            return null !== C && m.add(C), h.add(m), h
          }
        },
        {
          key: 'drawBarPaths',
          value: function (t) {
            var e = t.indexes,
              i = t.barHeight,
              a = t.strokeWidth,
              s = t.zeroW,
              r = t.x,
              n = t.y,
              o = t.yDivision,
              l = t.elSeries,
              h = this.w,
              c = e.i,
              d = e.j
            h.globals.isXNumeric &&
              (n =
                (h.globals.seriesX[c][d] - h.globals.minX) /
                  this.invertedXRatio -
                i)
            var g = n + i * this.visibleI,
              r =
                void 0 === this.series[c][d] || null === this.series[c][d]
                  ? s
                  : s +
                    this.series[c][d] / this.invertedYRatio -
                    2 *
                      (this.isReversed
                        ? this.series[c][d] / this.invertedYRatio
                        : 0),
              u = this.barHelpers.getBarpaths({
                barYPosition: g,
                barHeight: i,
                x1: s,
                x2: r,
                strokeWidth: a,
                series: this.series,
                realIndex: e.realIndex,
                i: c,
                j: d,
                w: h
              })
            return (
              h.globals.isXNumeric || (n += o),
              this.barHelpers.barBackground({
                j: d,
                i: c,
                y1: g - i * this.visibleI,
                y2: i * this.seriesLen,
                elSeries: l
              }),
              {
                pathTo: u.pathTo,
                pathFrom: u.pathFrom,
                x: r,
                y: n,
                barYPosition: g
              }
            )
          }
        },
        {
          key: 'drawColumnPaths',
          value: function (t) {
            var e,
              i = t.indexes,
              a = t.x,
              s = t.y,
              r = t.xDivision,
              n = t.barWidth,
              o = t.zeroH,
              l = t.strokeWidth,
              h = t.elSeries,
              c = this.w,
              d = i.i,
              g = i.j,
              u = i.bc
            c.globals.isXNumeric &&
              ((e = d),
              c.globals.seriesX[d].length ||
                (e = c.globals.maxValsInArrayIndex),
              (a =
                (c.globals.seriesX[e][g] - c.globals.minX) / this.xRatio -
                (n * this.seriesLen) / 2))
            var p = a + n * this.visibleI,
              s =
                void 0 === this.series[d][g] || null === this.series[d][g]
                  ? o
                  : o -
                    this.series[d][g] / this.yRatio[this.yaxisIndex] +
                    2 *
                      (this.isReversed
                        ? this.series[d][g] / this.yRatio[this.yaxisIndex]
                        : 0),
              f = this.barHelpers.getColumnPaths({
                barXPosition: p,
                barWidth: n,
                y1: o,
                y2: s,
                strokeWidth: l,
                series: this.series,
                realIndex: i.realIndex,
                i: d,
                j: g,
                w: c
              })
            return (
              c.globals.isXNumeric || (a += r),
              this.barHelpers.barBackground({
                bc: u,
                j: g,
                i: d,
                x1: p - l / 2 - n * this.visibleI,
                x2: n * this.seriesLen + l / 2,
                elSeries: h
              }),
              {
                pathTo: f.pathTo,
                pathFrom: f.pathFrom,
                x: a,
                y: s,
                barXPosition: p
              }
            )
          }
        },
        {
          key: 'getPreviousPath',
          value: function (t, e) {
            for (
              var i, a = this.w, s = 0;
              s < a.globals.previousPaths.length;
              s++
            ) {
              var r = a.globals.previousPaths[s]
              r.paths &&
                0 < r.paths.length &&
                parseInt(r.realIndex, 10) === parseInt(t, 10) &&
                void 0 !== a.globals.previousPaths[s].paths[e] &&
                (i = a.globals.previousPaths[s].paths[e].d)
            }
            return i
          }
        }
      ]),
      Me),
    G =
      (n(Ie, [
        {
          key: 'isValidDate',
          value: function (t) {
            return !isNaN(this.parseDate(t))
          }
        },
        {
          key: 'getTimeStamp',
          value: function (t) {
            return Date.parse(t)
              ? this.w.config.xaxis.labels.datetimeUTC
                ? new Date(new Date(t).toISOString().substr(0, 25)).getTime()
                : new Date(t).getTime()
              : t
          }
        },
        {
          key: 'getDate',
          value: function (t) {
            return this.w.config.xaxis.labels.datetimeUTC
              ? new Date(new Date(t).toUTCString())
              : new Date(t)
          }
        },
        {
          key: 'parseDate',
          value: function (t) {
            var e = Date.parse(t)
            if (!isNaN(e)) return this.getTimeStamp(t)
            var i = Date.parse(t.replace(/-/g, '/').replace(/[a-z]+/gi, ' '))
            return this.getTimeStamp(i)
          }
        },
        {
          key: 'formatDate',
          value: function (t, e) {
            var i = this.w.globals.locale,
              a = this.w.config.xaxis.labels.datetimeUTC,
              s = ['\0'].concat(A(i.months)),
              r = [''].concat(A(i.shortMonths)),
              n = [''].concat(A(i.days)),
              o = [''].concat(A(i.shortDays))
            function l (t, e) {
              var i = t + ''
              for (e = e || 2; i.length < e; ) i = '0' + i
              return i
            }
            var h = a ? t.getUTCFullYear() : t.getFullYear()
            e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, '$1' + h)).replace(
              /(^|[^\\])yy/g,
              '$1' + h.toString().substr(2, 2)
            )).replace(/(^|[^\\])y/g, '$1' + h)
            var c = (a ? t.getUTCMonth() : t.getMonth()) + 1
            e = (e = (e = (e = e.replace(
              /(^|[^\\])MMMM+/g,
              '$1' + s[0]
            )).replace(/(^|[^\\])MMM/g, '$1' + r[0])).replace(
              /(^|[^\\])MM/g,
              '$1' + l(c)
            )).replace(/(^|[^\\])M/g, '$1' + c)
            var d = a ? t.getUTCDate() : t.getDate()
            e = (e = (e = (e = e.replace(
              /(^|[^\\])dddd+/g,
              '$1' + n[0]
            )).replace(/(^|[^\\])ddd/g, '$1' + o[0])).replace(
              /(^|[^\\])dd/g,
              '$1' + l(d)
            )).replace(/(^|[^\\])d/g, '$1' + d)
            var g = a ? t.getUTCHours() : t.getHours(),
              u = 12 < g ? g - 12 : 0 === g ? 12 : g
            e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, '$1' + l(g))).replace(
              /(^|[^\\])H/g,
              '$1' + g
            )).replace(/(^|[^\\])hh+/g, '$1' + l(u))).replace(
              /(^|[^\\])h/g,
              '$1' + u
            )
            var p = a ? t.getUTCMinutes() : t.getMinutes()
            e = (e = e.replace(/(^|[^\\])mm+/g, '$1' + l(p))).replace(
              /(^|[^\\])m/g,
              '$1' + p
            )
            var f = a ? t.getUTCSeconds() : t.getSeconds()
            e = (e = e.replace(/(^|[^\\])ss+/g, '$1' + l(f))).replace(
              /(^|[^\\])s/g,
              '$1' + f
            )
            var x = a ? t.getUTCMilliseconds() : t.getMilliseconds()
            ;(e = e.replace(/(^|[^\\])fff+/g, '$1' + l(x, 3))),
              (x = Math.round(x / 10)),
              (e = e.replace(/(^|[^\\])ff/g, '$1' + l(x))),
              (x = Math.round(x / 10))
            var b = g < 12 ? 'AM' : 'PM'
            e = (e = (e = e.replace(/(^|[^\\])f/g, '$1' + x)).replace(
              /(^|[^\\])TT+/g,
              '$1' + b
            )).replace(/(^|[^\\])T/g, '$1' + b.charAt(0))
            var m = b.toLowerCase()
            e = (e = e.replace(/(^|[^\\])tt+/g, '$1' + m)).replace(
              /(^|[^\\])t/g,
              '$1' + m.charAt(0)
            )
            var v,
              y = -t.getTimezoneOffset(),
              w = a || !y ? 'Z' : 0 < y ? '+' : '-'
            a ||
              ((v = (y = Math.abs(y)) % 60),
              (w += l(Math.floor(y / 60)) + ':' + l(v))),
              (e = e.replace(/(^|[^\\])K/g, '$1' + w))
            var k = (a ? t.getUTCDay() : t.getDay()) + 1
            return (e = (e = (e = (e = e.replace(
              new RegExp(n[0], 'g'),
              n[k]
            )).replace(new RegExp(o[0], 'g'), o[k])).replace(
              new RegExp(s[0], 'g'),
              s[c]
            )).replace(new RegExp(r[0], 'g'), r[c])).replace(/\\(.)/g, '$1')
          }
        },
        {
          key: 'getTimeUnitsfromTimestamp',
          value: function (t, e, i) {
            var a = this.w
            void 0 !== a.config.xaxis.min && (t = a.config.xaxis.min),
              void 0 !== a.config.xaxis.max && (e = a.config.xaxis.max)
            var s = this.getDate(t),
              r = this.getDate(e),
              n = this.formatDate(s, 'yyyy MM dd HH mm').split(' '),
              o = this.formatDate(r, 'yyyy MM dd HH mm').split(' ')
            return {
              minMinute: parseInt(n[4], 10),
              maxMinute: parseInt(o[4], 10),
              minHour: parseInt(n[3], 10),
              maxHour: parseInt(o[3], 10),
              minDate: parseInt(n[2], 10),
              maxDate: parseInt(o[2], 10),
              minMonth: parseInt(n[1], 10) - 1,
              maxMonth: parseInt(o[1], 10) - 1,
              minYear: parseInt(n[0], 10),
              maxYear: parseInt(o[0], 10)
            }
          }
        },
        {
          key: 'isLeapYear',
          value: function (t) {
            return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0
          }
        },
        {
          key: 'calculcateLastDaysOfMonth',
          value: function (t, e, i) {
            return this.determineDaysOfMonths(t, e) - i
          }
        },
        {
          key: 'determineDaysOfYear',
          value: function (t) {
            var e = 365
            return this.isLeapYear(t) && (e = 366), e
          }
        },
        {
          key: 'determineRemainingDaysOfYear',
          value: function (t, e, i) {
            var a = this.daysCntOfYear[e] + i
            return 1 < e && this.isLeapYear() && a++, a
          }
        },
        {
          key: 'determineDaysOfMonths',
          value: function (t, e) {
            var i = 30
            switch (((t = I.monthMod(t)), !0)) {
              case -1 < this.months30.indexOf(t):
                2 === t && (i = this.isLeapYear(e) ? 29 : 28)
                break
              case -1 < this.months31.indexOf(t):
              default:
                i = 31
            }
            return i
          }
        }
      ]),
      Ie),
    _ = (function () {
      l(e, V)
      var t = c(e)
      function e () {
        return r(this, e), t.apply(this, arguments)
      }
      return (
        n(e, [
          {
            key: 'draw',
            value: function (t, e) {
              var i = this.w,
                a = new Y(this.ctx)
              ;(this.rangeBarOptions = this.w.config.plotOptions.rangeBar),
                (this.series = t),
                (this.seriesRangeStart = i.globals.seriesRangeStart),
                (this.seriesRangeEnd = i.globals.seriesRangeEnd),
                this.barHelpers.initVariables(t)
              for (
                var s = a.group({
                    class: 'apexcharts-rangebar-series apexcharts-plot-series'
                  }),
                  r = 0;
                r < t.length;
                r++
              ) {
                var n = void 0,
                  o = void 0,
                  l = i.globals.comboCharts ? e[r] : r,
                  h = a.group({
                    class: 'apexcharts-series',
                    seriesName: I.escapeString(i.globals.seriesNames[l]),
                    rel: r + 1,
                    'data:realIndex': l
                  })
                0 < t[r].length && (this.visibleI = this.visibleI + 1)
                var c = 0,
                  d = 0
                1 < this.yRatio.length && (this.yaxisIndex = l)
                for (
                  var g = this.barHelpers.initialPositions(),
                    o = g.y,
                    u = g.zeroW,
                    n = g.x,
                    d = g.barWidth,
                    p = g.xDivision,
                    f = g.zeroH,
                    x = a.group({
                      class: 'apexcharts-datalabels',
                      'data:realIndex': l
                    }),
                    b = 0;
                  b < i.globals.dataPoints;
                  b++
                ) {
                  var m = this.barHelpers.getStrokeWidth(r, b, l),
                    v = this.seriesRangeStart[r][b],
                    y = this.seriesRangeEnd[r][b],
                    w = null,
                    k = null,
                    A = { x: n, y: o, strokeWidth: m, elSeries: h },
                    S = g.yDivision
                  if (((c = g.barHeight), this.isHorizontal)) {
                    k = o + c * this.visibleI
                    var C,
                      L = (S - c * this.seriesLen) / 2
                    if (void 0 === i.config.series[r].data[b]) break
                    this.isTimelineBar &&
                      i.config.series[r].data[b].x &&
                      ((c = (C = this.detectOverlappingBars({
                        i: r,
                        j: b,
                        barYPosition: k,
                        srty: L,
                        barHeight: c,
                        yDivision: S,
                        initPositions: g
                      })).barHeight),
                      (k = C.barYPosition)),
                      (d = (w = this.drawRangeBarPaths(
                        M(
                          {
                            indexes: { i: r, j: b, realIndex: l },
                            barHeight: c,
                            barYPosition: k,
                            zeroW: u,
                            yDivision: S,
                            y1: v,
                            y2: y
                          },
                          A
                        )
                      )).barWidth)
                  } else
                    c = (w = this.drawRangeColumnPaths(
                      M(
                        {
                          indexes: { i: r, j: b, realIndex: l },
                          zeroH: f,
                          barWidth: d,
                          xDivision: p
                        },
                        A
                      )
                    )).barHeight
                  ;(o = w.y), (n = w.x)
                  var P = this.barHelpers.getPathFillColor(t, r, b, l),
                    T = i.globals.stroke.colors[l]
                  this.renderSeries({
                    realIndex: l,
                    pathFill: P,
                    lineFill: T,
                    j: b,
                    i: r,
                    x: n,
                    y: o,
                    y1: v,
                    y2: y,
                    pathFrom: w.pathFrom,
                    pathTo: w.pathTo,
                    strokeWidth: m,
                    elSeries: h,
                    series: t,
                    barHeight: c,
                    barYPosition: k,
                    barWidth: d,
                    elDataLabelsWrap: x,
                    visibleSeries: this.visibleI,
                    type: 'rangebar'
                  })
                }
                s.add(h)
              }
              return s
            }
          },
          {
            key: 'detectOverlappingBars',
            value: function (t) {
              var e = t.i,
                i = t.j,
                a = t.barYPosition,
                s = t.srty,
                r = t.barHeight,
                n = t.yDivision,
                o = t.initPositions,
                l = this.w,
                h = [],
                c = l.config.series[e].data[i].rangeName,
                d = l.config.series[e].data[i].x,
                g = l.globals.labels.indexOf(d),
                u = l.globals.seriesRangeBarTimeline[e].findIndex(function (t) {
                  return t.x === d && 0 < t.overlaps.length
                }),
                a = s + r * this.visibleI + n * g
              return (
                -1 < u &&
                  !l.config.plotOptions.bar.rangeBarOverlap &&
                  -1 <
                    (h =
                      l.globals.seriesRangeBarTimeline[e][u].overlaps).indexOf(
                      c
                    ) &&
                  (a =
                    (r = o.barHeight / h.length) * this.visibleI +
                    (n * (100 - parseInt(this.barOptions.barHeight, 10))) /
                      100 /
                      2 +
                    r * (this.visibleI + h.indexOf(c)) +
                    n * g),
                { barYPosition: a, barHeight: r }
              )
            }
          },
          {
            key: 'drawRangeColumnPaths',
            value: function (t) {
              var e = t.indexes,
                i = t.x,
                a = (t.strokeWidth, t.xDivision),
                s = t.barWidth,
                r = t.zeroH,
                n = this.w,
                o = e.i,
                l = e.j,
                h = this.yRatio[this.yaxisIndex],
                c = e.realIndex,
                d = this.getRangeValue(c, l),
                g = Math.min(d.start, d.end),
                u = Math.max(d.start, d.end)
              n.globals.isXNumeric &&
                (i =
                  (n.globals.seriesX[o][l] - n.globals.minX) / this.xRatio -
                  s / 2)
              var p = i + s * this.visibleI
              void 0 === this.series[o][l] || null === this.series[o][l]
                ? (g = r)
                : ((g = r - g / h), (u = r - u / h))
              var f = Math.abs(u - g),
                x = this.barHelpers.getColumnPaths({
                  barXPosition: p,
                  barWidth: s,
                  y1: g,
                  y2: u,
                  strokeWidth: this.strokeWidth,
                  series: this.seriesRangeEnd,
                  i: c,
                  j: l,
                  w: n
                })
              return (
                n.globals.isXNumeric || (i += a),
                {
                  pathTo: x.pathTo,
                  pathFrom: x.pathFrom,
                  barHeight: f,
                  x: i,
                  y: u,
                  barXPosition: p
                }
              )
            }
          },
          {
            key: 'drawRangeBarPaths',
            value: function (t) {
              var e = t.indexes,
                i = t.y,
                a = t.y1,
                s = t.y2,
                r = t.yDivision,
                n = t.barHeight,
                o = t.barYPosition,
                l = t.zeroW,
                h = this.w,
                c = l + a / this.invertedYRatio,
                d = l + s / this.invertedYRatio,
                g = Math.abs(d - c),
                u = this.barHelpers.getBarpaths({
                  barYPosition: o,
                  barHeight: n,
                  x1: c,
                  x2: d,
                  strokeWidth: this.strokeWidth,
                  series: this.seriesRangeEnd,
                  i: e.realIndex,
                  j: e.j,
                  w: h
                })
              return (
                h.globals.isXNumeric || (i += r),
                {
                  pathTo: u.pathTo,
                  pathFrom: u.pathFrom,
                  barWidth: g,
                  x: d,
                  y: i
                }
              )
            }
          },
          {
            key: 'getRangeValue',
            value: function (t, e) {
              var i = this.w
              return {
                start: i.globals.seriesRangeStart[t][e],
                end: i.globals.seriesRangeEnd[t][e]
              }
            }
          },
          {
            key: 'getTooltipValues',
            value: function (t) {
              var e = t.ctx,
                i = t.seriesIndex,
                a = t.dataPointIndex,
                s = t.y1,
                r = t.y2,
                n = t.w,
                o = n.globals.seriesRangeStart[i][a],
                l = n.globals.seriesRangeEnd[i][a],
                h = n.globals.labels[a],
                c = n.config.series[i].name,
                d = n.config.tooltip.y.formatter,
                g = n.config.tooltip.y.title.formatter,
                u = { w: n, seriesIndex: i, dataPointIndex: a }
              'function' == typeof g && (c = g(c, u)),
                s &&
                  r &&
                  ((o = s),
                  (l = r),
                  n.config.series[i].data[a].x &&
                    (h = n.config.series[i].data[a].x + ':'),
                  'function' == typeof d && (h = d(h, u)))
              var p,
                f = '',
                x = '',
                b = n.globals.colors[i]
              return (
                (x =
                  void 0 === n.config.tooltip.x.formatter
                    ? 'datetime' === n.config.xaxis.type
                      ? ((f = (p = new G(e)).formatDate(
                          p.getDate(o),
                          n.config.tooltip.x.format
                        )),
                        p.formatDate(p.getDate(l), n.config.tooltip.x.format))
                      : ((f = o), l)
                    : ((f = n.config.tooltip.x.formatter(o)),
                      n.config.tooltip.x.formatter(l))),
                {
                  start: o,
                  end: l,
                  startVal: f,
                  endVal: x,
                  ylabel: h,
                  color: b,
                  seriesName: c
                }
              )
            }
          },
          {
            key: 'buildCustomTooltipHTML',
            value: function (t) {
              return (
                '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' +
                t.color +
                '">' +
                (t.seriesName || '') +
                '</span></div><div> <span class="category">' +
                t.ylabel +
                ' </span> <span class="value start-value">' +
                t.start +
                '</span> <span class="separator">-</span> <span class="value end-value">' +
                t.end +
                '</span></div></div>'
              )
            }
          }
        ]),
        e
      )
    })(),
    j =
      (n(ze, [
        {
          key: 'line',
          value: function () {
            return {
              chart: { animations: { easing: 'swing' } },
              dataLabels: { enabled: !1 },
              stroke: { width: 5, curve: 'straight' },
              markers: { size: 0, hover: { sizeOffset: 6 } },
              xaxis: { crosshairs: { width: 1 } }
            }
          }
        },
        {
          key: 'sparkline',
          value: function (t) {
            return (
              (this.opts.yaxis[0].show = !1),
              (this.opts.yaxis[0].title.text = ''),
              (this.opts.yaxis[0].axisBorder.show = !1),
              (this.opts.yaxis[0].axisTicks.show = !1),
              (this.opts.yaxis[0].floating = !0),
              I.extend(t, {
                grid: {
                  show: !1,
                  padding: { left: 0, right: 0, top: 0, bottom: 0 }
                },
                legend: { show: !1 },
                xaxis: {
                  labels: { show: !1 },
                  tooltip: { enabled: !1 },
                  axisBorder: { show: !1 },
                  axisTicks: { show: !1 }
                },
                chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } },
                dataLabels: { enabled: !1 }
              })
            )
          }
        },
        {
          key: 'bar',
          value: function () {
            return {
              chart: { stacked: !1, animations: { easing: 'swing' } },
              plotOptions: { bar: { dataLabels: { position: 'center' } } },
              dataLabels: {
                style: { colors: ['#fff'] },
                background: { enabled: !1 }
              },
              stroke: { width: 0, lineCap: 'square' },
              fill: { opacity: 0.85 },
              legend: { markers: { shape: 'square', radius: 2, size: 8 } },
              tooltip: { shared: !1 },
              xaxis: {
                tooltip: { enabled: !1 },
                tickPlacement: 'between',
                crosshairs: {
                  width: 'barWidth',
                  position: 'back',
                  fill: { type: 'gradient' },
                  dropShadow: { enabled: !1 },
                  stroke: { width: 0 }
                }
              }
            }
          }
        },
        {
          key: 'candlestick',
          value: function () {
            return {
              stroke: { width: 1, colors: ['#333'] },
              fill: { opacity: 1 },
              dataLabels: { enabled: !1 },
              tooltip: {
                shared: !0,
                custom: function (t) {
                  var e = t.seriesIndex,
                    i = t.dataPointIndex,
                    a = t.w
                  return (
                    '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' +
                    a.globals.seriesCandleO[e][i] +
                    '</span></div><div>High: <span class="value">' +
                    a.globals.seriesCandleH[e][i] +
                    '</span></div><div>Low: <span class="value">' +
                    a.globals.seriesCandleL[e][i] +
                    '</span></div><div>Close: <span class="value">' +
                    a.globals.seriesCandleC[e][i] +
                    '</span></div></div>'
                  )
                }
              },
              states: { active: { filter: { type: 'none' } } },
              xaxis: { crosshairs: { width: 1 } }
            }
          }
        },
        {
          key: 'rangeBar',
          value: function () {
            return {
              stroke: { width: 0, lineCap: 'square' },
              plotOptions: { bar: { dataLabels: { position: 'center' } } },
              dataLabels: {
                enabled: !1,
                formatter: function (t, e) {
                  e.ctx
                  var i = e.seriesIndex,
                    a = e.dataPointIndex,
                    s = e.w,
                    r = s.globals.seriesRangeStart[i][a]
                  return s.globals.seriesRangeEnd[i][a] - r
                },
                background: { enabled: !1 },
                style: { colors: ['#fff'] }
              },
              tooltip: {
                shared: !1,
                followCursor: !0,
                custom: function (t) {
                  return t.w.config.plotOptions &&
                    t.w.config.plotOptions.bar &&
                    t.w.config.plotOptions.bar.horizontal
                    ? ((c = new _((h = t).ctx, null)),
                      (d = c.getTooltipValues(h)),
                      (g = d.color),
                      (u = d.seriesName),
                      (p = d.ylabel),
                      (f = d.startVal),
                      (x = d.endVal),
                      c.buildCustomTooltipHTML({
                        color: g,
                        seriesName: u,
                        ylabel: p,
                        start: f,
                        end: x
                      }))
                    : ((i = new _((e = t).ctx, null)),
                      (a = i.getTooltipValues(e)),
                      (s = a.color),
                      (r = a.seriesName),
                      (n = a.ylabel),
                      (o = a.start),
                      (l = a.end),
                      i.buildCustomTooltipHTML({
                        color: s,
                        seriesName: r,
                        ylabel: n,
                        start: o,
                        end: l
                      }))
                  var e, i, a, s, r, n, o, l, h, c, d, g, u, p, f, x
                }
              },
              xaxis: {
                tickPlacement: 'between',
                tooltip: { enabled: !1 },
                crosshairs: { stroke: { width: 0 } }
              }
            }
          }
        },
        {
          key: 'area',
          value: function () {
            return {
              stroke: { width: 4 },
              fill: {
                type: 'gradient',
                gradient: {
                  inverseColors: !1,
                  shade: 'light',
                  type: 'vertical',
                  opacityFrom: 0.65,
                  opacityTo: 0.5,
                  stops: [0, 100, 100]
                }
              },
              markers: { size: 0, hover: { sizeOffset: 6 } },
              tooltip: { followCursor: !1 }
            }
          }
        },
        {
          key: 'brush',
          value: function (t) {
            return I.extend(t, {
              chart: {
                toolbar: { autoSelected: 'selection', show: !1 },
                zoom: { enabled: !1 }
              },
              dataLabels: { enabled: !1 },
              stroke: { width: 1 },
              tooltip: { enabled: !1 },
              xaxis: { tooltip: { enabled: !1 } }
            })
          }
        },
        {
          key: 'stacked100',
          value: function (i) {
            ;(i.dataLabels = i.dataLabels || {}),
              (i.dataLabels.formatter = i.dataLabels.formatter || void 0)
            var t = i.dataLabels.formatter
            return (
              i.yaxis.forEach(function (t, e) {
                ;(i.yaxis[e].min = 0), (i.yaxis[e].max = 100)
              }),
              'bar' === i.chart.type &&
                (i.dataLabels.formatter =
                  t ||
                  function (t) {
                    return 'number' == typeof t && t ? t.toFixed(0) + '%' : t
                  }),
              i
            )
          }
        },
        {
          key: 'convertCatToNumeric',
          value: function (t) {
            return (t.xaxis.convertedCatToNumeric = !0), t
          }
        },
        {
          key: 'convertCatToNumericXaxis',
          value: function (t, e, i) {
            ;(t.xaxis.type = 'numeric'),
              (t.xaxis.labels = t.xaxis.labels || {}),
              (t.xaxis.labels.formatter =
                t.xaxis.labels.formatter ||
                function (t) {
                  return I.isNumber(t) ? Math.floor(t) : t
                })
            var a = t.xaxis.labels.formatter,
              s =
                t.xaxis.categories && t.xaxis.categories.length
                  ? t.xaxis.categories
                  : t.labels
            return (
              i &&
                i.length &&
                (s = i.map(function (t) {
                  return t.toString()
                })),
              s &&
                s.length &&
                (t.xaxis.labels.formatter = function (t) {
                  return I.isNumber(t) ? a(s[Math.floor(t) - 1]) : a(t)
                }),
              (t.xaxis.categories = []),
              (t.labels = []),
              (t.xaxis.tickAmount = t.xaxis.tickAmount || 'dataPoints'),
              t
            )
          }
        },
        {
          key: 'bubble',
          value: function () {
            return {
              dataLabels: { style: { colors: ['#fff'] } },
              tooltip: { shared: !1, intersect: !0 },
              xaxis: { crosshairs: { width: 0 } },
              fill: {
                type: 'solid',
                gradient: {
                  shade: 'light',
                  inverse: !0,
                  shadeIntensity: 0.55,
                  opacityFrom: 0.4,
                  opacityTo: 0.8
                }
              }
            }
          }
        },
        {
          key: 'scatter',
          value: function () {
            return {
              dataLabels: { enabled: !1 },
              tooltip: { shared: !1, intersect: !0 },
              markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } }
            }
          }
        },
        {
          key: 'heatmap',
          value: function () {
            return {
              chart: { stacked: !1 },
              fill: { opacity: 1 },
              dataLabels: { style: { colors: ['#fff'] } },
              stroke: { colors: ['#fff'] },
              tooltip: {
                followCursor: !0,
                marker: { show: !1 },
                x: { show: !1 }
              },
              legend: {
                position: 'top',
                markers: { shape: 'square', size: 10, offsetY: 2 }
              },
              grid: { padding: { right: 20 } }
            }
          }
        },
        {
          key: 'pie',
          value: function () {
            return {
              chart: { toolbar: { show: !1 } },
              plotOptions: { pie: { donut: { labels: { show: !1 } } } },
              dataLabels: {
                formatter: function (t) {
                  return t.toFixed(1) + '%'
                },
                style: { colors: ['#fff'] },
                background: { enabled: !1 },
                dropShadow: { enabled: !0 }
              },
              stroke: { colors: ['#fff'] },
              fill: {
                opacity: 1,
                gradient: { shade: 'light', stops: [0, 100] }
              },
              tooltip: { theme: 'dark', fillSeriesColor: !0 },
              legend: { position: 'right' }
            }
          }
        },
        {
          key: 'donut',
          value: function () {
            return {
              chart: { toolbar: { show: !1 } },
              dataLabels: {
                formatter: function (t) {
                  return t.toFixed(1) + '%'
                },
                style: { colors: ['#fff'] },
                background: { enabled: !1 },
                dropShadow: { enabled: !0 }
              },
              stroke: { colors: ['#fff'] },
              fill: {
                opacity: 1,
                gradient: {
                  shade: 'light',
                  shadeIntensity: 0.35,
                  stops: [80, 100],
                  opacityFrom: 1,
                  opacityTo: 1
                }
              },
              tooltip: { theme: 'dark', fillSeriesColor: !0 },
              legend: { position: 'right' }
            }
          }
        },
        {
          key: 'polarArea',
          value: function () {
            return (
              (this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount
                ? this.opts.yaxis[0].tickAmount
                : 6),
              {
                chart: { toolbar: { show: !1 } },
                dataLabels: {
                  formatter: function (t) {
                    return t.toFixed(1) + '%'
                  },
                  enabled: !1
                },
                stroke: { show: !0, width: 2 },
                fill: { opacity: 0.7 },
                tooltip: { theme: 'dark', fillSeriesColor: !0 },
                legend: { position: 'right' }
              }
            )
          }
        },
        {
          key: 'radar',
          value: function () {
            return (
              (this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels
                .offsetY
                ? this.opts.yaxis[0].labels.offsetY
                : 6),
              {
                dataLabels: { enabled: !1, style: { fontSize: '11px' } },
                stroke: { width: 2 },
                markers: { size: 3, strokeWidth: 1, strokeOpacity: 1 },
                fill: { opacity: 0.2 },
                tooltip: { shared: !1, intersect: !0, followCursor: !0 },
                grid: { show: !1 },
                xaxis: {
                  labels: {
                    formatter: function (t) {
                      return t
                    },
                    style: { colors: ['#a8a8a8'], fontSize: '11px' }
                  },
                  tooltip: { enabled: !1 },
                  crosshairs: { show: !1 }
                }
              }
            )
          }
        },
        {
          key: 'radialBar',
          value: function () {
            return {
              chart: {
                animations: { dynamicAnimation: { enabled: !0, speed: 800 } },
                toolbar: { show: !1 }
              },
              fill: {
                gradient: {
                  shade: 'dark',
                  shadeIntensity: 0.4,
                  inverseColors: !1,
                  type: 'diagonal2',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [70, 98, 100]
                }
              },
              legend: { show: !1, position: 'right' },
              tooltip: { enabled: !1, fillSeriesColor: !0 }
            }
          }
        }
      ]),
      ze),
    U =
      (n(Te, [
        {
          key: 'init',
          value: function (t) {
            var e = t.responsiveOverride,
              i = this.opts,
              a = new z(),
              s = new j(i)
            ;(this.chartType = i.chart.type),
              'histogram' === this.chartType &&
                ((i.chart.type = 'bar'),
                (i = I.extend(
                  { plotOptions: { bar: { columnWidth: '99.99%' } } },
                  i
                ))),
              (i = this.extendYAxis(i)),
              (i = this.extendAnnotations(i))
            var r,
              n = a.init(),
              o = {}
            i &&
              'object' === v(i) &&
              ((r = {}),
              (r =
                -1 !==
                [
                  'line',
                  'area',
                  'bar',
                  'candlestick',
                  'rangeBar',
                  'histogram',
                  'bubble',
                  'scatter',
                  'heatmap',
                  'pie',
                  'polarArea',
                  'donut',
                  'radar',
                  'radialBar'
                ].indexOf(i.chart.type)
                  ? s[i.chart.type]()
                  : s.line()),
              i.chart.brush && i.chart.brush.enabled && (r = s.brush(r)),
              i.chart.stacked &&
                '100%' === i.chart.stackType &&
                (i = s.stacked100(i)),
              this.checkForDarkTheme(window.Apex),
              this.checkForDarkTheme(i),
              (i.xaxis = i.xaxis || window.Apex.xaxis || {}),
              e || (i.xaxis.convertedCatToNumeric = !1),
              (((i = this.checkForCatToNumericXAxis(this.chartType, r, i)).chart
                .sparkline &&
                i.chart.sparkline.enabled) ||
                (window.Apex.chart &&
                  window.Apex.chart.sparkline &&
                  window.Apex.chart.sparkline.enabled)) &&
                (r = s.sparkline(r)),
              (o = I.extend(n, r)))
            var l = I.extend(o, window.Apex),
              n = I.extend(l, i)
            return this.handleUserInputErrors(n)
          }
        },
        {
          key: 'checkForCatToNumericXAxis',
          value: function (t, e, i) {
            var a = new j(i),
              s =
                'bar' === t &&
                i.plotOptions &&
                i.plotOptions.bar &&
                i.plotOptions.bar.horizontal,
              r =
                'pie' === t ||
                'polarArea' === t ||
                'donut' === t ||
                'radar' === t ||
                'radialBar' === t ||
                'heatmap' === t,
              n = 'datetime' !== i.xaxis.type && 'numeric' !== i.xaxis.type,
              o = i.xaxis.tickPlacement
                ? i.xaxis.tickPlacement
                : e.xaxis && e.xaxis.tickPlacement
            return (
              s || r || !n || 'between' === o || (i = a.convertCatToNumeric(i)),
              i
            )
          }
        },
        {
          key: 'extendYAxis',
          value: function (a, t) {
            var s = new z()
            ;(void 0 === a.yaxis ||
              !a.yaxis ||
              (Array.isArray(a.yaxis) && 0 === a.yaxis.length)) &&
              (a.yaxis = {}),
              a.yaxis.constructor !== Array &&
                window.Apex.yaxis &&
                window.Apex.yaxis.constructor !== Array &&
                (a.yaxis = I.extend(a.yaxis, window.Apex.yaxis)),
              a.yaxis.constructor !== Array
                ? (a.yaxis = [I.extend(s.yAxis, a.yaxis)])
                : (a.yaxis = I.extendArray(a.yaxis, s.yAxis))
            var e = !1
            a.yaxis.forEach(function (t) {
              t.logarithmic && (e = !0)
            })
            var r = a.series
            return (
              t && !r && (r = t.config.series),
              e &&
                r.length !== a.yaxis.length &&
                r.length &&
                (a.yaxis = r.map(function (t, e) {
                  if (
                    (t.name || (r[e].name = 'series-'.concat(e + 1)),
                    a.yaxis[e])
                  )
                    return (a.yaxis[e].seriesName = r[e].name), a.yaxis[e]
                  var i = I.extend(s.yAxis, a.yaxis[0])
                  return (i.show = !1), i
                })),
              e &&
                1 < r.length &&
                r.length !== a.yaxis.length &&
                console.warn(
                  'A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both.'
                ),
              a
            )
          }
        },
        {
          key: 'extendAnnotations',
          value: function (t) {
            return (
              void 0 === t.annotations &&
                ((t.annotations = {}),
                (t.annotations.yaxis = []),
                (t.annotations.xaxis = []),
                (t.annotations.points = [])),
              (t = this.extendYAxisAnnotations(t)),
              (t = this.extendXAxisAnnotations(t)),
              this.extendPointAnnotations(t)
            )
          }
        },
        {
          key: 'extendYAxisAnnotations',
          value: function (t) {
            var e = new z()
            return (
              (t.annotations.yaxis = I.extendArray(
                void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [],
                e.yAxisAnnotation
              )),
              t
            )
          }
        },
        {
          key: 'extendXAxisAnnotations',
          value: function (t) {
            var e = new z()
            return (
              (t.annotations.xaxis = I.extendArray(
                void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [],
                e.xAxisAnnotation
              )),
              t
            )
          }
        },
        {
          key: 'extendPointAnnotations',
          value: function (t) {
            var e = new z()
            return (
              (t.annotations.points = I.extendArray(
                void 0 !== t.annotations.points ? t.annotations.points : [],
                e.pointAnnotation
              )),
              t
            )
          }
        },
        {
          key: 'checkForDarkTheme',
          value: function (t) {
            t.theme &&
              'dark' === t.theme.mode &&
              (t.tooltip || (t.tooltip = {}),
              'light' !== t.tooltip.theme && (t.tooltip.theme = 'dark'),
              t.chart.foreColor || (t.chart.foreColor = '#f6f7f8'),
              t.chart.background || (t.chart.background = '#424242'),
              t.theme.palette || (t.theme.palette = 'palette4'))
          }
        },
        {
          key: 'handleUserInputErrors',
          value: function (t) {
            var e = t
            if (e.tooltip.shared && e.tooltip.intersect)
              throw new Error(
                'tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.'
              )
            if (
              ('bar' === e.chart.type || 'rangeBar' === e.chart.type) &&
              e.plotOptions.bar.horizontal
            ) {
              if (1 < e.yaxis.length)
                throw new Error(
                  'Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false'
                )
              e.yaxis[0].reversed && (e.yaxis[0].opposite = !0),
                (e.xaxis.tooltip.enabled = !1),
                (e.yaxis[0].tooltip.enabled = !1),
                (e.chart.zoom.enabled = !1)
            }
            return (
              ('bar' !== e.chart.type && 'rangeBar' !== e.chart.type) ||
                (e.tooltip.shared &&
                  ('barWidth' === e.xaxis.crosshairs.width &&
                    1 < e.series.length &&
                    (console.warn(
                      'crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'
                    ),
                    (e.xaxis.crosshairs.width = 'tickWidth')),
                  e.plotOptions.bar.horizontal &&
                    ((e.states.hover.type = 'none'), (e.tooltip.shared = !1)),
                  e.tooltip.followCursor ||
                    (console.warn(
                      'followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true',
                      'color: blue;'
                    ),
                    (e.tooltip.followCursor = !0)))),
              'candlestick' === e.chart.type &&
                e.yaxis[0].reversed &&
                (console.warn(
                  'Reversed y-axis in candlestick chart is not supported.'
                ),
                (e.yaxis[0].reversed = !1)),
              e.chart.group &&
                0 === e.yaxis[0].labels.minWidth &&
                console.warn(
                  'It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour.'
                ),
              Array.isArray(e.stroke.width) &&
                'line' !== e.chart.type &&
                'area' !== e.chart.type &&
                (console.warn(
                  'stroke.width option accepts array only for line and area charts. Reverted back to Number'
                ),
                (e.stroke.width = e.stroke.width[0])),
              e
            )
          }
        }
      ]),
      Te),
    q =
      (n(Pe, [
        {
          key: 'initGlobalVars',
          value: function (t) {
            ;(t.series = []),
              (t.seriesCandleO = []),
              (t.seriesCandleH = []),
              (t.seriesCandleL = []),
              (t.seriesCandleC = []),
              (t.seriesRangeStart = []),
              (t.seriesRangeEnd = []),
              (t.seriesRangeBarTimeline = []),
              (t.seriesPercent = []),
              (t.seriesX = []),
              (t.seriesZ = []),
              (t.seriesNames = []),
              (t.seriesTotals = []),
              (t.seriesLog = []),
              (t.stackedSeriesTotals = []),
              (t.seriesXvalues = []),
              (t.seriesYvalues = []),
              (t.labels = []),
              (t.categoryLabels = []),
              (t.timescaleLabels = []),
              (t.noLabelsProvided = !1),
              (t.resizeTimer = null),
              (t.selectionResizeTimer = null),
              (t.delayedElements = []),
              (t.pointsArray = []),
              (t.dataLabelsRects = []),
              (t.isXNumeric = !1),
              (t.xaxisLabelsCount = 0),
              (t.skipLastTimelinelabel = !1),
              (t.skipFirstTimelinelabel = !1),
              (t.isDataXYZ = !1),
              (t.isMultiLineX = !1),
              (t.isMultipleYAxis = !1),
              (t.maxY = -Number.MAX_VALUE),
              (t.minY = Number.MIN_VALUE),
              (t.minYArr = []),
              (t.maxYArr = []),
              (t.maxX = -Number.MAX_VALUE),
              (t.minX = Number.MAX_VALUE),
              (t.initialMaxX = -Number.MAX_VALUE),
              (t.initialMinX = Number.MAX_VALUE),
              (t.maxDate = 0),
              (t.minDate = Number.MAX_VALUE),
              (t.minZ = Number.MAX_VALUE),
              (t.maxZ = -Number.MAX_VALUE),
              (t.minXDiff = Number.MAX_VALUE),
              (t.yAxisScale = []),
              (t.xAxisScale = null),
              (t.xAxisTicksPositions = []),
              (t.yLabelsCoords = []),
              (t.yTitleCoords = []),
              (t.barPadForNumericAxis = 0),
              (t.padHorizontal = 0),
              (t.xRange = 0),
              (t.yRange = []),
              (t.zRange = 0),
              (t.dataPoints = 0),
              (t.xTickAmount = 0)
          }
        },
        {
          key: 'globalVars',
          value: function (t) {
            return {
              chartID: null,
              cuid: null,
              events: {
                beforeMount: [],
                mounted: [],
                updated: [],
                clicked: [],
                selection: [],
                dataPointSelection: [],
                zoomed: [],
                scrolled: []
              },
              colors: [],
              clientX: null,
              clientY: null,
              fill: { colors: [] },
              stroke: { colors: [] },
              dataLabels: { style: { colors: [] } },
              radarPolygons: { fill: { colors: [] } },
              markers: { colors: [], size: t.markers.size, largestSize: 0 },
              animationEnded: !1,
              isTouchDevice:
                'ontouchstart' in window || navigator.msMaxTouchPoints,
              isDirty: !1,
              isExecCalled: !1,
              initialConfig: null,
              initialSeries: [],
              lastXAxis: [],
              lastYAxis: [],
              columnSeries: null,
              labels: [],
              timescaleLabels: [],
              noLabelsProvided: !1,
              allSeriesCollapsed: !1,
              collapsedSeries: [],
              collapsedSeriesIndices: [],
              ancillaryCollapsedSeries: [],
              ancillaryCollapsedSeriesIndices: [],
              risingSeries: [],
              dataFormatXNumeric: !1,
              capturedSeriesIndex: -1,
              capturedDataPointIndex: -1,
              selectedDataPoints: [],
              goldenPadding: 35,
              invalidLogScale: !1,
              ignoreYAxisIndexes: [],
              yAxisSameScaleIndices: [],
              maxValsInArrayIndex: 0,
              radialSize: 0,
              selection: void 0,
              zoomEnabled:
                'zoom' === t.chart.toolbar.autoSelected &&
                t.chart.toolbar.tools.zoom &&
                t.chart.zoom.enabled,
              panEnabled:
                'pan' === t.chart.toolbar.autoSelected &&
                t.chart.toolbar.tools.pan,
              selectionEnabled:
                'selection' === t.chart.toolbar.autoSelected &&
                t.chart.toolbar.tools.selection,
              yaxis: null,
              mousedown: !1,
              lastClientPosition: {},
              visibleXRange: void 0,
              yValueDecimal: 0,
              total: 0,
              SVGNS: 'http://www.w3.org/2000/svg',
              svgWidth: 0,
              svgHeight: 0,
              noData: !1,
              locale: {},
              dom: {},
              memory: { methodsToExec: [] },
              shouldAnimate: !0,
              skipLastTimelinelabel: !1,
              skipFirstTimelinelabel: !1,
              delayedElements: [],
              axisCharts: !0,
              isDataXYZ: !1,
              resized: !1,
              resizeTimer: null,
              comboCharts: !1,
              dataChanged: !1,
              previousPaths: [],
              allSeriesHasEqualX: !0,
              pointsArray: [],
              dataLabelsRects: [],
              lastDrawnDataLabelsIndexes: [],
              hasNullValues: !1,
              easing: null,
              zoomed: !1,
              gridWidth: 0,
              gridHeight: 0,
              rotateXLabels: !1,
              defaultLabels: !1,
              xLabelFormatter: void 0,
              yLabelFormatters: [],
              xaxisTooltipFormatter: void 0,
              ttKeyFormatter: void 0,
              ttVal: void 0,
              ttZFormatter: void 0,
              LINE_HEIGHT_RATIO: 1.618,
              xAxisLabelsHeight: 0,
              xAxisLabelsWidth: 0,
              yAxisLabelsWidth: 0,
              scaleX: 1,
              scaleY: 1,
              translateX: 0,
              translateY: 0,
              translateYAxisX: [],
              yAxisWidths: [],
              translateXAxisY: 0,
              translateXAxisX: 0,
              tooltip: null
            }
          }
        },
        {
          key: 'init',
          value: function (t) {
            var e = this.globalVars(t)
            return (
              this.initGlobalVars(e),
              (e.initialConfig = I.extend({}, t)),
              (e.initialSeries = I.clone(t.series)),
              (e.lastXAxis = JSON.parse(JSON.stringify(e.initialConfig.xaxis))),
              (e.lastYAxis = JSON.parse(JSON.stringify(e.initialConfig.yaxis))),
              e
            )
          }
        }
      ]),
      Pe),
    Z =
      (n(Le, [
        {
          key: 'init',
          value: function () {
            var t = new U(this.opts).init({ responsiveOverride: !1 })
            return { config: t, globals: new q().init(t) }
          }
        }
      ]),
      Le),
    $ =
      (n(Ce, [
        {
          key: 'isMultiFormat',
          value: function () {
            return this.isFormatXY() || this.isFormat2DArray()
          }
        },
        {
          key: 'isFormatXY',
          value: function () {
            var t = this.w.config.series.slice(),
              e = new W(this.ctx)
            if (
              ((this.activeSeriesIndex = e.getActiveConfigSeriesIndex()),
              void 0 !== t[this.activeSeriesIndex].data &&
                0 < t[this.activeSeriesIndex].data.length &&
                null !== t[this.activeSeriesIndex].data[0] &&
                void 0 !== t[this.activeSeriesIndex].data[0].x &&
                null !== t[this.activeSeriesIndex].data[0])
            )
              return !0
          }
        },
        {
          key: 'isFormat2DArray',
          value: function () {
            var t = this.w.config.series.slice(),
              e = new W(this.ctx)
            if (
              ((this.activeSeriesIndex = e.getActiveConfigSeriesIndex()),
              void 0 !== t[this.activeSeriesIndex].data &&
                0 < t[this.activeSeriesIndex].data.length &&
                void 0 !== t[this.activeSeriesIndex].data[0] &&
                null !== t[this.activeSeriesIndex].data[0] &&
                t[this.activeSeriesIndex].data[0].constructor === Array)
            )
              return !0
          }
        },
        {
          key: 'handleFormat2DArray',
          value: function (t, e) {
            var i = this.w.config,
              a = this.w.globals
            i.xaxis.sorted &&
              ('datetime' === i.xaxis.type
                ? t[e].data.sort(function (t, e) {
                    return new Date(t[0]).getTime() - new Date(e[0]).getTime()
                  })
                : 'numeric' === i.xaxis.type &&
                  t[e].data.sort(function (t, e) {
                    return t[0] - e[0]
                  }))
            for (var s, r = 0; r < t[e].data.length; r++)
              void 0 !== t[e].data[r][1] &&
                (Array.isArray(t[e].data[r][1]) && 4 === t[e].data[r][1].length
                  ? this.twoDSeries.push(I.parseNumber(t[e].data[r][1][3]))
                  : 5 === t[e].data[r].length
                  ? this.twoDSeries.push(I.parseNumber(t[e].data[r][4]))
                  : this.twoDSeries.push(I.parseNumber(t[e].data[r][1])),
                (a.dataFormatXNumeric = !0)),
                'datetime' === i.xaxis.type
                  ? ((s = new Date(t[e].data[r][0])),
                    (s = new Date(s).getTime()),
                    this.twoDSeriesX.push(s))
                  : this.twoDSeriesX.push(t[e].data[r][0])
            for (var n = 0; n < t[e].data.length; n++)
              void 0 !== t[e].data[n][2] &&
                (this.threeDSeries.push(t[e].data[n][2]), (a.isDataXYZ = !0))
          }
        },
        {
          key: 'handleFormatXY',
          value: function (t, e) {
            var i = this.w.config,
              a = this.w.globals,
              s = new G(this.ctx),
              r = e
            ;-1 < a.collapsedSeriesIndices.indexOf(e) &&
              (r = this.activeSeriesIndex),
              i.xaxis.sorted &&
                ('datetime' === i.xaxis.type
                  ? t[e].data.sort(function (t, e) {
                      return new Date(t.x).getTime() - new Date(e.x).getTime()
                    })
                  : 'numeric' === i.xaxis.type &&
                    t[e].data.sort(function (t, e) {
                      return t.x - e.x
                    }))
            for (var n = 0; n < t[e].data.length; n++)
              void 0 !== t[e].data[n].y &&
                (Array.isArray(t[e].data[n].y)
                  ? this.twoDSeries.push(
                      I.parseNumber(t[e].data[n].y[t[e].data[n].y.length - 1])
                    )
                  : this.twoDSeries.push(I.parseNumber(t[e].data[n].y)))
            for (var o = 0; o < t[r].data.length; o++) {
              var l,
                h = 'string' == typeof t[r].data[o].x,
                c = Array.isArray(t[r].data[o].x),
                d = !c && !!s.isValidDate(t[r].data[o].x.toString())
              h || d
                ? h || i.xaxis.convertedCatToNumeric
                  ? ((l = a.isBarHorizontal && a.isRangeData),
                    'datetime' !== i.xaxis.type || l
                      ? ((this.fallbackToCategory = !0),
                        this.twoDSeriesX.push(t[r].data[o].x))
                      : this.twoDSeriesX.push(s.parseDate(t[r].data[o].x)))
                  : 'datetime' === i.xaxis.type
                  ? this.twoDSeriesX.push(
                      s.parseDate(t[r].data[o].x.toString())
                    )
                  : ((a.dataFormatXNumeric = !0),
                    (a.isXNumeric = !0),
                    this.twoDSeriesX.push(parseFloat(t[r].data[o].x)))
                : (c
                    ? (this.fallbackToCategory = !0)
                    : ((a.isXNumeric = !0), (a.dataFormatXNumeric = !0)),
                  this.twoDSeriesX.push(t[r].data[o].x))
            }
            if (t[e].data[0] && void 0 !== t[e].data[0].z) {
              for (var g = 0; g < t[e].data.length; g++)
                this.threeDSeries.push(t[e].data[g].z)
              a.isDataXYZ = !0
            }
          }
        },
        {
          key: 'handleRangeData',
          value: function (t, e) {
            var i = this.w.config,
              a = this.w.globals,
              s = {}
            return (
              this.isFormat2DArray()
                ? (s = this.handleRangeDataFormat('array', t, e))
                : this.isFormatXY() &&
                  (s = this.handleRangeDataFormat('xy', t, e)),
              a.seriesRangeStart.push(s.start),
              a.seriesRangeEnd.push(s.end),
              'datetime' === i.xaxis.type &&
                a.seriesRangeBarTimeline.push(s.rangeUniques),
              a.seriesRangeBarTimeline.forEach(function (t, e) {
                t &&
                  t.forEach(function (n, t) {
                    n.y.forEach(function (t, e) {
                      for (var i, a, s, r = 0; r < n.y.length; r++)
                        e !== r &&
                          ((i = t.y1),
                          (a = t.y2),
                          (s = n.y[r].y1),
                          i <= n.y[r].y2 &&
                            s <= a &&
                            (n.overlaps.indexOf(t.rangeName) < 0 &&
                              n.overlaps.push(t.rangeName),
                            n.overlaps.indexOf(n.y[r].rangeName) < 0 &&
                              n.overlaps.push(n.y[r].rangeName)))
                    })
                  })
              }),
              s
            )
          }
        },
        {
          key: 'handleCandleStickData',
          value: function (t, e) {
            var i = this.w.globals,
              a = {}
            return (
              this.isFormat2DArray()
                ? (a = this.handleCandleStickDataFormat('array', t, e))
                : this.isFormatXY() &&
                  (a = this.handleCandleStickDataFormat('xy', t, e)),
              (i.seriesCandleO[e] = a.o),
              (i.seriesCandleH[e] = a.h),
              (i.seriesCandleL[e] = a.l),
              (i.seriesCandleC[e] = a.c),
              a
            )
          }
        },
        {
          key: 'handleRangeDataFormat',
          value: function (t, r, n) {
            var o = [],
              l = [],
              h = r[n].data
                .filter(function (e, t, i) {
                  return (
                    t ===
                    i.findIndex(function (t) {
                      return t.x === e.x
                    })
                  )
                })
                .map(function (t, e) {
                  return { x: t.x, overlaps: [], y: [] }
                }),
              e =
                'Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts',
              i = new W(this.ctx).getActiveConfigSeriesIndex()
            if ('array' === t) {
              if (2 !== r[i].data[0][1].length) throw new Error(e)
              for (var a = 0; a < r[n].data.length; a++)
                o.push(r[n].data[a][1][0]), l.push(r[n].data[a][1][1])
            } else if ('xy' === t) {
              if (2 !== r[i].data[0].y.length) throw new Error(e)
              for (var s = 0; s < r[n].data.length; s++)
                !(function (t) {
                  var e = I.randomId(),
                    i = r[n].data[t].x,
                    a = {
                      y1: r[n].data[t].y[0],
                      y2: r[n].data[t].y[1],
                      rangeName: e
                    }
                  r[n].data[t].rangeName = e
                  var s = h.findIndex(function (t) {
                    return t.x === i
                  })
                  h[s].y.push(a), o.push(a.y1), l.push(a.y2)
                })(s)
            }
            return { start: o, end: l, rangeUniques: h }
          }
        },
        {
          key: 'handleCandleStickDataFormat',
          value: function (t, e, i) {
            var a = [],
              s = [],
              r = [],
              n = [],
              o =
                'Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick'
            if ('array' === t) {
              if (
                (!Array.isArray(e[i].data[0][1]) &&
                  5 !== e[i].data[0].length) ||
                (Array.isArray(e[i].data[0][1]) && 4 !== e[i].data[0][1].length)
              )
                throw new Error(o)
              if (5 === e[i].data[0].length)
                for (var l = 0; l < e[i].data.length; l++)
                  a.push(e[i].data[l][1]),
                    s.push(e[i].data[l][2]),
                    r.push(e[i].data[l][3]),
                    n.push(e[i].data[l][4])
              else
                for (var h = 0; h < e[i].data.length; h++)
                  a.push(e[i].data[h][1][0]),
                    s.push(e[i].data[h][1][1]),
                    r.push(e[i].data[h][1][2]),
                    n.push(e[i].data[h][1][3])
            } else if ('xy' === t) {
              if (4 !== e[i].data[0].y.length) throw new Error(o)
              for (var c = 0; c < e[i].data.length; c++)
                a.push(e[i].data[c].y[0]),
                  s.push(e[i].data[c].y[1]),
                  r.push(e[i].data[c].y[2]),
                  n.push(e[i].data[c].y[3])
            }
            return { o: a, h: s, l: r, c: n }
          }
        },
        {
          key: 'parseDataAxisCharts',
          value: function (t) {
            for (
              var e,
                i = this,
                a =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.ctx,
                s = this.w.config,
                r = this.w.globals,
                n = new G(a),
                o =
                  0 < s.labels.length
                    ? s.labels.slice()
                    : s.xaxis.categories.slice(),
                l = 0;
              l < t.length;
              l++
            ) {
              if (
                ((this.twoDSeries = []),
                (this.twoDSeriesX = []),
                (this.threeDSeries = []),
                void 0 === t[l].data)
              )
                return void console.error(
                  "It is a possibility that you may have not included 'data' property in series."
                )
              ;('rangeBar' !== s.chart.type &&
                'rangeArea' !== s.chart.type &&
                'rangeBar' !== t[l].type &&
                'rangeArea' !== t[l].type) ||
                ((r.isRangeData = !0), this.handleRangeData(t, l)),
                this.isMultiFormat()
                  ? (this.isFormat2DArray()
                      ? this.handleFormat2DArray(t, l)
                      : this.isFormatXY() && this.handleFormatXY(t, l),
                    ('candlestick' !== s.chart.type &&
                      'candlestick' !== t[l].type) ||
                      this.handleCandleStickData(t, l),
                    r.series.push(this.twoDSeries),
                    r.labels.push(this.twoDSeriesX),
                    r.seriesX.push(this.twoDSeriesX),
                    l !== this.activeSeriesIndex ||
                      this.fallbackToCategory ||
                      (r.isXNumeric = !0))
                  : ('datetime' === s.xaxis.type
                      ? ((r.isXNumeric = !0),
                        (function () {
                          for (var t = 0; t < o.length; t++)
                            if ('string' == typeof o[t]) {
                              if (!n.isValidDate(o[t]))
                                throw new Error(
                                  'You have provided invalid Date format. Please provide a valid JavaScript Date'
                                )
                              i.twoDSeriesX.push(n.parseDate(o[t]))
                            } else i.twoDSeriesX.push(o[t])
                        })(),
                        r.seriesX.push(this.twoDSeriesX))
                      : 'numeric' === s.xaxis.type &&
                        ((r.isXNumeric = !0),
                        0 < o.length &&
                          ((this.twoDSeriesX = o),
                          r.seriesX.push(this.twoDSeriesX))),
                    r.labels.push(this.twoDSeriesX),
                    (e = t[l].data.map(function (t) {
                      return I.parseNumber(t)
                    })),
                    r.series.push(e)),
                r.seriesZ.push(this.threeDSeries),
                void 0 !== t[l].name
                  ? r.seriesNames.push(t[l].name)
                  : r.seriesNames.push('series-' + parseInt(l + 1, 10))
            }
            return this.w
          }
        },
        {
          key: 'parseDataNonAxisCharts',
          value: function (t) {
            var e = this.w.globals,
              i = this.w.config
            ;(e.series = t.slice()), (e.seriesNames = i.labels.slice())
            for (var a = 0; a < e.series.length; a++)
              void 0 === e.seriesNames[a] &&
                e.seriesNames.push('series-' + (a + 1))
            return this.w
          }
        },
        {
          key: 'handleExternalLabelsData',
          value: function (t) {
            var e = this.w.config,
              i = this.w.globals
            0 < e.xaxis.categories.length
              ? (i.labels = e.xaxis.categories)
              : 0 < e.labels.length
              ? (i.labels = e.labels.slice())
              : this.fallbackToCategory
              ? ((i.labels = i.labels[0]),
                i.seriesRangeBarTimeline.length &&
                  (i.seriesRangeBarTimeline.map(function (t) {
                    t.forEach(function (t) {
                      i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x)
                    })
                  }),
                  (i.labels = i.labels.filter(function (t, e, i) {
                    return i.indexOf(t) === e
                  }))),
                e.xaxis.convertedCatToNumeric &&
                  (new j(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]),
                  this._generateExternalLabels(t)))
              : this._generateExternalLabels(t)
          }
        },
        {
          key: '_generateExternalLabels',
          value: function (t) {
            var e = this.w.globals,
              i = this.w.config,
              a = []
            if (e.axisCharts) {
              if (0 < e.series.length)
                for (var s = 0; s < e.series[e.maxValsInArrayIndex].length; s++)
                  a.push(s + 1)
              e.seriesX = []
              for (var r = 0; r < t.length; r++) e.seriesX.push(a)
              e.isXNumeric = !0
            }
            if (0 === a.length) {
              a = e.axisCharts
                ? []
                : e.series.map(function (t, e) {
                    return e + 1
                  })
              for (var n = 0; n < t.length; n++) e.seriesX.push(a)
            }
            ;(e.labels = a),
              i.xaxis.convertedCatToNumeric &&
                (e.categoryLabels = a.map(function (t) {
                  return i.xaxis.labels.formatter(t)
                })),
              (e.noLabelsProvided = !0)
          }
        },
        {
          key: 'parseData',
          value: function (t) {
            var e,
              i = this.w,
              a = i.config,
              s = i.globals
            this.excludeCollapsedSeriesInYAxis(),
              (this.fallbackToCategory = !1),
              this.ctx.core.resetGlobals(),
              this.ctx.core.isMultipleY(),
              s.axisCharts
                ? this.parseDataAxisCharts(t)
                : this.parseDataNonAxisCharts(t),
              this.coreUtils.getLargestSeries(),
              'bar' === a.chart.type &&
                a.chart.stacked &&
                ((e = new W(this.ctx)),
                (s.series = e.setNullSeriesToZeroValues(s.series))),
              this.coreUtils.getSeriesTotals(),
              s.axisCharts && this.coreUtils.getStackedSeriesTotals(),
              this.coreUtils.getPercentSeries(),
              s.dataFormatXNumeric ||
                (s.isXNumeric &&
                  ('numeric' !== a.xaxis.type ||
                    0 !== a.labels.length ||
                    0 !== a.xaxis.categories.length)) ||
                this.handleExternalLabelsData(t)
            for (
              var r = this.coreUtils.getCategoryLabels(s.labels), n = 0;
              n < r.length;
              n++
            )
              if (Array.isArray(r[n])) {
                s.isMultiLineX = !0
                break
              }
          }
        },
        {
          key: 'excludeCollapsedSeriesInYAxis',
          value: function () {
            var i = this,
              a = this.w
            a.globals.ignoreYAxisIndexes = a.globals.collapsedSeries.map(
              function (t, e) {
                if (i.w.globals.isMultipleYAxis && !a.config.chart.stacked)
                  return t.index
              }
            )
          }
        }
      ]),
      Ce),
    J =
      (n(Se, [
        {
          key: 'xLabelFormat',
          value: function (t, e, i) {
            var a = this.w
            if (
              'datetime' !== a.config.xaxis.type ||
              void 0 !== a.config.xaxis.labels.formatter ||
              void 0 !== a.config.tooltip.x.formatter
            )
              return t(e, i)
            var s = new G(this.ctx)
            return s.formatDate(s.getDate(e), a.config.tooltip.x.format)
          }
        },
        {
          key: 'defaultGeneralFormatter',
          value: function (t) {
            return Array.isArray(t)
              ? t.map(function (t) {
                  return t
                })
              : t
          }
        },
        {
          key: 'defaultYFormatter',
          value: function (t, e, i) {
            var a = this.w
            return (
              I.isNumber(t) &&
                (t =
                  0 !== a.globals.yValueDecimal
                    ? t.toFixed(
                        void 0 !== e.decimalsInFloat
                          ? e.decimalsInFloat
                          : a.globals.yValueDecimal
                      )
                    : a.globals.maxYArr[i] - a.globals.minYArr[i] < 10
                    ? t.toFixed(1)
                    : t.toFixed(0)),
              t
            )
          }
        },
        {
          key: 'setLabelFormatters',
          value: function () {
            var a = this,
              s = this.w
            return (
              (s.globals.xLabelFormatter = function (t) {
                return a.defaultGeneralFormatter(t)
              }),
              (s.globals.xaxisTooltipFormatter = function (t) {
                return a.defaultGeneralFormatter(t)
              }),
              (s.globals.ttKeyFormatter = function (t) {
                return a.defaultGeneralFormatter(t)
              }),
              (s.globals.ttZFormatter = function (t) {
                return t
              }),
              (s.globals.legendFormatter = function (t) {
                return a.defaultGeneralFormatter(t)
              }),
              void 0 !== s.config.xaxis.labels.formatter
                ? (s.globals.xLabelFormatter = s.config.xaxis.labels.formatter)
                : (s.globals.xLabelFormatter = function (t) {
                    return I.isNumber(t)
                      ? (!s.config.xaxis.convertedCatToNumeric &&
                          'numeric' === s.config.xaxis.type &&
                          s.globals.dataPoints < 50) ||
                        (s.globals.isBarHorizontal &&
                          s.globals.maxY - s.globals.minYArr < 4)
                        ? t.toFixed(1)
                        : t.toFixed(0)
                      : t
                  }),
              'function' == typeof s.config.tooltip.x.formatter
                ? (s.globals.ttKeyFormatter = s.config.tooltip.x.formatter)
                : (s.globals.ttKeyFormatter = s.globals.xLabelFormatter),
              'function' == typeof s.config.xaxis.tooltip.formatter &&
                (s.globals.xaxisTooltipFormatter =
                  s.config.xaxis.tooltip.formatter),
              (!Array.isArray(s.config.tooltip.y) &&
                void 0 === s.config.tooltip.y.formatter) ||
                (s.globals.ttVal = s.config.tooltip.y),
              void 0 !== s.config.tooltip.z.formatter &&
                (s.globals.ttZFormatter = s.config.tooltip.z.formatter),
              void 0 !== s.config.legend.formatter &&
                (s.globals.legendFormatter = s.config.legend.formatter),
              s.config.yaxis.forEach(function (e, i) {
                void 0 !== e.labels.formatter
                  ? (s.globals.yLabelFormatters[i] = e.labels.formatter)
                  : (s.globals.yLabelFormatters[i] = function (t) {
                      return s.globals.xyCharts
                        ? Array.isArray(t)
                          ? t.map(function (t) {
                              return a.defaultYFormatter(t, e, i)
                            })
                          : a.defaultYFormatter(t, e, i)
                        : t
                    })
              }),
              s.globals
            )
          }
        },
        {
          key: 'heatmapLabelFormatters',
          value: function () {
            var t,
              e = this.w
            'heatmap' === e.config.chart.type &&
              ((e.globals.yAxisScale[0].result = e.globals.seriesNames.slice()),
              (t = e.globals.seriesNames.reduce(function (t, e) {
                return t.length > e.length ? t : e
              }, 0)),
              (e.globals.yAxisScale[0].niceMax = t),
              (e.globals.yAxisScale[0].niceMin = t))
          }
        }
      ]),
      Se),
    Q =
      (n(Ae, [
        {
          key: 'getLabel',
          value: function (t, e, i, a) {
            var s,
              r,
              n =
                4 < arguments.length && void 0 !== arguments[4]
                  ? arguments[4]
                  : [],
              o =
                5 < arguments.length && void 0 !== arguments[5]
                  ? arguments[5]
                  : '12px',
              l = this.w,
              h = void 0 === t[a] ? '' : t[a],
              c = h,
              d = l.globals.xLabelFormatter,
              g = l.config.xaxis.labels.formatter,
              u = !1,
              c = new J(this.ctx).xLabelFormat(d, h, h)
            void 0 !== g && (c = g(h, t[a], a)),
              0 < e.length
                ? ((s = e[a].unit),
                  (r = null),
                  e.forEach(function (t) {
                    'month' === t.unit
                      ? (r = 'year')
                      : 'day' === t.unit
                      ? (r = 'month')
                      : 'hour' === t.unit
                      ? (r = 'day')
                      : 'minute' === t.unit && (r = 'hour')
                  }),
                  (u = r === s),
                  (i = e[a].position),
                  (c = e[a].value))
                : 'datetime' === l.config.xaxis.type &&
                  void 0 === g &&
                  (c = ''),
              void 0 === c && (c = ''),
              (c = Array.isArray(c) ? c : c.toString())
            var p = new Y(this.ctx),
              f = l.globals.rotateXLabels
                ? p.getTextRects(
                    c,
                    parseInt(o, 10),
                    null,
                    'rotate('.concat(l.config.xaxis.labels.rotate, ' 0 0)'),
                    !1
                  )
                : p.getTextRects(c, parseInt(o, 10))
            return (
              !Array.isArray(c) &&
                (0 === c.indexOf('NaN') ||
                  0 === c.toLowerCase().indexOf('invalid') ||
                  0 <= c.toLowerCase().indexOf('infinity') ||
                  (0 <= n.indexOf(c) &&
                    !l.config.xaxis.labels.showDuplicates)) &&
                (c = ''),
              { x: i, text: c, textRect: f, isBold: u }
            )
          }
        },
        {
          key: 'checkForOverflowingLabels',
          value: function (t, e, i, a, s) {
            var r,
              n = this.w
            return (
              0 === t && n.globals.skipFirstTimelinelabel && (e.text = ''),
              t === i - 1 && n.globals.skipLastTimelinelabel && (e.text = ''),
              n.config.xaxis.labels.hideOverlappingLabels &&
                0 < a.length &&
                ((r = s[s.length - 1]),
                e.x <
                  r.textRect.width /
                    (n.globals.rotateXLabels
                      ? Math.abs(n.config.xaxis.labels.rotate) / 12
                      : 1.01) +
                    r.x && (e.text = '')),
              e
            )
          }
        },
        {
          key: 'checkForReversedLabels',
          value: function (t, e) {
            var i = this.w
            return (
              i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e
            )
          }
        },
        {
          key: 'isYAxisHidden',
          value: function (t) {
            var e = this.w,
              i = new P(this.ctx)
            return (
              !e.config.yaxis[t].show ||
              (!e.config.yaxis[t].showForNullSeries &&
                i.isSeriesNull(t) &&
                -1 === e.globals.collapsedSeriesIndices.indexOf(t))
            )
          }
        },
        {
          key: 'drawYAxisTicks',
          value: function (t, e, i, a, s, r, n) {
            var o = this.w,
              l = new Y(this.ctx),
              h = o.globals.translateY
            if (a.show && 0 < e) {
              !0 === o.config.yaxis[s].opposite && (t += a.width)
              for (var c = e; 0 <= c; c--) {
                var d = h + e / 10 + o.config.yaxis[s].labels.offsetY - 1
                o.globals.isBarHorizontal && (d = r * c),
                  'heatmap' === o.config.chart.type && (d += r / 2)
                var g = l.drawLine(
                  t + i.offsetX - a.width + a.offsetX,
                  d + a.offsetY,
                  t + i.offsetX + a.offsetX,
                  d + a.offsetY,
                  a.color
                )
                n.add(g), (h += r)
              }
            }
          }
        }
      ]),
      Ae),
    K =
      (n(ke, [
        {
          key: 'fixSvgStringForIe11',
          value: function (t) {
            if (!I.isIE11()) return t
            var e = 0,
              i = t.replace(
                /xmlns="http:\/\/www.w3.org\/2000\/svg"/g,
                function (t) {
                  return 2 == ++e
                    ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"'
                    : t
                }
              )
            return (i = i.replace(/xmlns:NS\d+=""/g, '')).replace(
              /NS\d+:(\w+:\w+=")/g,
              '$1'
            )
          }
        },
        {
          key: 'getSvgString',
          value: function () {
            var t = this.w.globals.dom.Paper.svg()
            return this.fixSvgStringForIe11(t)
          }
        },
        {
          key: 'cleanup',
          value: function () {
            var t = this.w,
              e = t.globals.dom.baseEl.getElementsByClassName(
                'apexcharts-xcrosshairs'
              ),
              i = t.globals.dom.baseEl.getElementsByClassName(
                'apexcharts-ycrosshairs'
              ),
              a = t.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-zoom-rect, .apexcharts-selection-rect'
              )
            Array.prototype.forEach.call(a, function (t) {
              t.setAttribute('width', 0)
            }),
              e &&
                e[0] &&
                (e[0].setAttribute('x', -500),
                e[0].setAttribute('x1', -500),
                e[0].setAttribute('x2', -500)),
              i &&
                i[0] &&
                (i[0].setAttribute('y', -100),
                i[0].setAttribute('y1', -100),
                i[0].setAttribute('y2', -100))
          }
        },
        {
          key: 'svgUrl',
          value: function () {
            this.cleanup()
            var t = this.getSvgString(),
              e = new Blob([t], { type: 'image/svg+xml;charset=utf-8' })
            return URL.createObjectURL(e)
          }
        },
        {
          key: 'dataURI',
          value: function () {
            var c = this
            return new Promise(function (i) {
              var t = c.w
              c.cleanup()
              var a = document.createElement('canvas')
              ;(a.width = t.globals.svgWidth),
                (a.height = parseInt(t.globals.dom.elWrap.style.height, 10))
              var e =
                  'transparent' === t.config.chart.background
                    ? '#fff'
                    : t.config.chart.background,
                s = a.getContext('2d')
              ;(s.fillStyle = e), s.fillRect(0, 0, a.width, a.height)
              var r,
                n,
                o,
                l,
                h = c.getSvgString()
              window.canvg && I.isIE11()
                ? ((r = window.canvg.Canvg.fromString(s, h, {
                    ignoreClear: !0,
                    ignoreDimensions: !0
                  })).start(),
                  (n = a.msToBlob()),
                  r.stop(),
                  i({ blob: n }))
                : ((o = 'data:image/svg+xml,' + encodeURIComponent(h)),
                  ((l = new Image()).crossOrigin = 'anonymous'),
                  (l.onload = function () {
                    var t, e
                    s.drawImage(l, 0, 0),
                      a.msToBlob
                        ? ((t = a.msToBlob()), i({ blob: t }))
                        : ((e = a.toDataURL('image/png')), i({ imgURI: e }))
                  }),
                  (l.src = o))
            })
          }
        },
        {
          key: 'exportToSVG',
          value: function () {
            this.triggerDownload(this.svgUrl(), null, '.svg')
          }
        },
        {
          key: 'exportToPng',
          value: function () {
            var a = this
            this.dataURI().then(function (t) {
              var e = t.imgURI,
                i = t.blob
              i
                ? navigator.msSaveOrOpenBlob(i, a.w.globals.chartID + '.png')
                : a.triggerDownload(e, null, '.png')
            })
          }
        },
        {
          key: 'exportToCSV',
          value: function (t) {
            var h = this,
              c = t.series,
              d = t.columnDelimiter,
              e = t.lineDelimiter,
              i = void 0 === e ? '\n' : e,
              g = this.w,
              u = [],
              p = [],
              a = 'data:text/csv;charset=utf-8,',
              f = new $(this.ctx),
              x = new Q(this.ctx)
            u.push(g.config.chart.toolbar.export.csv.headerCategory),
              c.map(function (t, e) {
                g.globals.axisCharts &&
                  u.push(t.name ? t.name : 'series-'.concat(e))
              }),
              g.globals.axisCharts ||
                (u.push(g.config.chart.toolbar.export.csv.headerValue),
                p.push(u.join(d))),
              c.map(function (t, e) {
                g.globals.axisCharts
                  ? (function (t, e) {
                      if (
                        (u.length && 0 === e && p.push(u.join(d)),
                        t.data && t.data.length)
                      )
                        for (var i = 0; i < t.data.length; i++) {
                          u = []
                          var a =
                            ((r = i),
                            (l = o = n = void 0),
                            (l = ''),
                            g.globals.axisCharts
                              ? (('category' !== g.config.xaxis.type &&
                                  !g.config.xaxis.convertedCatToNumeric) ||
                                  (l = g.globals.isBarHorizontal
                                    ? ((n = g.globals.yLabelFormatters[0]),
                                      (o = new W(
                                        h.ctx
                                      ).getActiveConfigSeriesIndex()),
                                      n(g.globals.labels[r], {
                                        seriesIndex: o,
                                        dataPointIndex: r,
                                        w: g
                                      }))
                                    : x.getLabel(
                                        g.globals.labels,
                                        g.globals.timescaleLabels,
                                        0,
                                        r
                                      ).text),
                                'datetime' === g.config.xaxis.type &&
                                  (g.config.xaxis.categories.length
                                    ? (l = g.config.xaxis.categories[r])
                                    : g.config.labels.length &&
                                      (l = g.config.labels[r])))
                              : (l = g.config.labels[r]),
                            l)
                          if (
                            (a ||
                              (f.isFormatXY()
                                ? (a = c[e].data[i].x)
                                : f.isFormat2DArray() &&
                                  (a = c[e].data[i] ? c[e].data[i][0] : '')),
                            0 === e)
                          ) {
                            u.push(
                              'datetime' === g.config.xaxis.type &&
                                10 <= String(a).length
                                ? g.config.chart.toolbar.export.csv.dateFormatter(
                                    a
                                  )
                                : a
                            )
                            for (var s = 0; s < g.globals.series.length; s++)
                              u.push(g.globals.series[s][i])
                          }
                          ;('candlestick' === g.config.chart.type ||
                            (t.type && 'candlestick' === t.type)) &&
                            (u.pop(),
                            u.push(g.globals.seriesCandleO[e][i]),
                            u.push(g.globals.seriesCandleH[e][i]),
                            u.push(g.globals.seriesCandleL[e][i]),
                            u.push(g.globals.seriesCandleC[e][i])),
                            'rangeBar' === g.config.chart.type &&
                              (u.pop(),
                              u.push(g.globals.seriesRangeStart[e][i]),
                              u.push(g.globals.seriesRangeEnd[e][i])),
                            u.length && p.push(u.join(d))
                        }
                      var r, n, o, l
                    })(t, e)
                  : ((u = []).push(g.globals.labels[e]),
                    u.push(g.globals.series[e]),
                    p.push(u.join(d)))
              }),
              (a += p.join(i)),
              this.triggerDownload(
                encodeURI(a),
                g.config.chart.toolbar.export.csv.filename,
                '.csv'
              )
          }
        },
        {
          key: 'triggerDownload',
          value: function (t, e, i) {
            var a = document.createElement('a')
            ;(a.href = t),
              (a.download = (e || this.w.globals.chartID) + i),
              document.body.appendChild(a),
              a.click(),
              document.body.removeChild(a)
          }
        }
      ]),
      ke),
    tt =
      (n(we, [
        {
          key: 'drawXaxis',
          value: function () {
            var n = this,
              o = this.w,
              l = new Y(this.ctx),
              t = l.group({
                class: 'apexcharts-xaxis',
                transform: 'translate('
                  .concat(o.config.xaxis.offsetX, ', ')
                  .concat(o.config.xaxis.offsetY, ')')
              }),
              h = l.group({
                class: 'apexcharts-xaxis-texts-g',
                transform: 'translate('
                  .concat(o.globals.translateXAxisX, ', ')
                  .concat(o.globals.translateXAxisY, ')')
              })
            t.add(h)
            for (
              var c = o.globals.padHorizontal, d = [], e = 0;
              e < this.xaxisLabels.length;
              e++
            )
              d.push(this.xaxisLabels[e])
            var i,
              g,
              a,
              s,
              r,
              u,
              p = d.length
            if (
              ((c = o.globals.isXNumeric
                ? ((i = 1 < p ? p - 1 : p),
                  (g = o.globals.gridWidth / i),
                  c + g / 2 + o.config.xaxis.labels.offsetX)
                : ((g = o.globals.gridWidth / d.length),
                  c + g + o.config.xaxis.labels.offsetX)),
              o.config.xaxis.labels.show)
            )
              for (var f = 0; f <= p - 1; f++)
                !(function (t) {
                  var e = c - g / 2 + o.config.xaxis.labels.offsetX
                  0 === t &&
                    1 === p &&
                    g / 2 === c &&
                    1 === o.globals.dataPoints &&
                    (e = o.globals.gridWidth / 2)
                  var i = n.axesUtils.getLabel(
                      d,
                      o.globals.timescaleLabels,
                      e,
                      t,
                      n.drawnLabels,
                      n.xaxisFontSize
                    ),
                    a = 28
                  o.globals.rotateXLabels && (a = 22),
                    (i = n.axesUtils.checkForOverflowingLabels(
                      t,
                      i,
                      p,
                      n.drawnLabels,
                      n.drawnLabelsRects
                    )).text && o.globals.xaxisLabelsCount++
                  var s = l.drawText({
                    x: i.x,
                    y:
                      n.offY +
                      o.config.xaxis.labels.offsetY +
                      a -
                      ('top' === o.config.xaxis.position
                        ? o.globals.xAxisHeight +
                          o.config.xaxis.axisTicks.height -
                          2
                        : 0),
                    text: i.text,
                    textAnchor: 'middle',
                    fontWeight: i.isBold
                      ? 600
                      : o.config.xaxis.labels.style.fontWeight,
                    fontSize: n.xaxisFontSize,
                    fontFamily: n.xaxisFontFamily,
                    foreColor: Array.isArray(n.xaxisForeColors)
                      ? o.config.xaxis.convertedCatToNumeric
                        ? n.xaxisForeColors[o.globals.minX + t - 1]
                        : n.xaxisForeColors[t]
                      : n.xaxisForeColors,
                    isPlainText: !1,
                    cssClass:
                      'apexcharts-xaxis-label ' +
                      o.config.xaxis.labels.style.cssClass
                  })
                  h.add(s)
                  var r = document.createElementNS(o.globals.SVGNS, 'title')
                  ;(r.textContent = i.text),
                    s.node.appendChild(r),
                    '' !== i.text &&
                      (n.drawnLabels.push(i.text), n.drawnLabelsRects.push(i)),
                    (c += g)
                })(f)
            return (
              void 0 !== o.config.xaxis.title.text &&
                ((a = l.group({ class: 'apexcharts-xaxis-title' })),
                (s = l.drawText({
                  x: o.globals.gridWidth / 2 + o.config.xaxis.title.offsetX,
                  y:
                    this.offY -
                    parseFloat(this.xaxisFontSize) +
                    o.globals.xAxisLabelsHeight +
                    o.config.xaxis.title.offsetY,
                  text: o.config.xaxis.title.text,
                  textAnchor: 'middle',
                  fontSize: o.config.xaxis.title.style.fontSize,
                  fontFamily: o.config.xaxis.title.style.fontFamily,
                  fontWeight: o.config.xaxis.title.style.fontWeight,
                  foreColor: o.config.xaxis.title.style.color,
                  cssClass:
                    'apexcharts-xaxis-title-text ' +
                    o.config.xaxis.title.style.cssClass
                })),
                a.add(s),
                t.add(a)),
              o.config.xaxis.axisBorder.show &&
                ((r = o.globals.barPadForNumericAxis),
                (u = l.drawLine(
                  o.globals.padHorizontal +
                    o.config.xaxis.axisBorder.offsetX -
                    r,
                  this.offY,
                  this.xaxisBorderWidth + r,
                  this.offY,
                  o.config.xaxis.axisBorder.color,
                  0,
                  this.xaxisBorderHeight
                )),
                t.add(u)),
              t
            )
          }
        },
        {
          key: 'drawXaxisInversed',
          value: function (t) {
            var e,
              i,
              a = this.w,
              s = new Y(this.ctx),
              r = a.config.yaxis[0].opposite ? a.globals.translateYAxisX[t] : 0,
              n = s.group({
                class: 'apexcharts-yaxis apexcharts-xaxis-inversed',
                rel: t
              }),
              o = s.group({
                class:
                  'apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g',
                transform: 'translate(' + r + ', 0)'
              })
            n.add(o)
            var l = []
            if (a.config.yaxis[t].show)
              for (var h = 0; h < this.xaxisLabels.length; h++)
                l.push(this.xaxisLabels[h])
            i = -(e = a.globals.gridHeight / l.length) / 2.2
            var c,
              d,
              g = a.globals.yLabelFormatters[0],
              u = a.config.yaxis[0].labels
            if (u.show)
              for (var p = 0; p <= l.length - 1; p++) {
                var f = g((f = void 0 === l[p] ? '' : l[p]), {
                    seriesIndex: t,
                    dataPointIndex: p,
                    w: a
                  }),
                  x = 0
                Array.isArray(f) &&
                  (x = (f.length / 2) * parseInt(u.style.fontSize, 10))
                var b = s.drawText({
                  x: u.offsetX - 15,
                  y: i + e + u.offsetY - x,
                  text: f,
                  textAnchor: this.yaxis.opposite ? 'start' : 'end',
                  foreColor: Array.isArray(u.style.colors)
                    ? u.style.colors[p]
                    : u.style.colors,
                  fontSize: u.style.fontSize,
                  fontFamily: u.style.fontFamily,
                  fontWeight: u.style.fontWeight,
                  isPlainText: !1,
                  cssClass: 'apexcharts-yaxis-label ' + u.style.cssClass
                })
                o.add(b)
                var m,
                  v = document.createElementNS(a.globals.SVGNS, 'title')
                ;(v.textContent = f.text),
                  b.node.appendChild(v),
                  0 !== a.config.yaxis[t].labels.rotate &&
                    ((m = s.rotateAroundCenter(b.node)),
                    b.node.setAttribute(
                      'transform',
                      'rotate('
                        .concat(a.config.yaxis[t].labels.rotate, ' 0 ')
                        .concat(m.y, ')')
                    )),
                  (i += e)
              }
            void 0 !== a.config.yaxis[0].title.text &&
              ((c = s.group({
                class: 'apexcharts-yaxis-title apexcharts-xaxis-title-inversed',
                transform: 'translate(' + r + ', 0)'
              })),
              (d = s.drawText({
                x: 0,
                y: a.globals.gridHeight / 2,
                text: a.config.yaxis[0].title.text,
                textAnchor: 'middle',
                foreColor: a.config.yaxis[0].title.style.color,
                fontSize: a.config.yaxis[0].title.style.fontSize,
                fontWeight: a.config.yaxis[0].title.style.fontWeight,
                fontFamily: a.config.yaxis[0].title.style.fontFamily,
                cssClass:
                  'apexcharts-yaxis-title-text ' +
                  a.config.yaxis[0].title.style.cssClass
              })),
              c.add(d),
              n.add(c))
            var y = 0
            this.isCategoryBarHorizontal &&
              a.config.yaxis[0].opposite &&
              (y = a.globals.gridWidth)
            var w,
              k = a.config.xaxis.axisBorder
            return (
              k.show &&
                ((w = s.drawLine(
                  a.globals.padHorizontal + k.offsetX + y,
                  1 + k.offsetY,
                  a.globals.padHorizontal + k.offsetX + y,
                  a.globals.gridHeight + k.offsetY,
                  k.color,
                  0
                )),
                n.add(w)),
              a.config.yaxis[0].axisTicks.show &&
                this.axesUtils.drawYAxisTicks(
                  y,
                  l.length,
                  a.config.yaxis[0].axisBorder,
                  a.config.yaxis[0].axisTicks,
                  0,
                  e,
                  n
                ),
              n
            )
          }
        },
        {
          key: 'drawXaxisTicks',
          value: function (t, e) {
            var i,
              a,
              s,
              r = this.w,
              n = t
            t < 0 ||
              t - 2 > r.globals.gridWidth ||
              ((a =
                (i = this.offY + r.config.xaxis.axisTicks.offsetY) +
                r.config.xaxis.axisTicks.height),
              'top' === r.config.xaxis.position &&
                (a = i - r.config.xaxis.axisTicks.height),
              r.config.xaxis.axisTicks.show &&
                ((s = new Y(this.ctx).drawLine(
                  t + r.config.xaxis.axisTicks.offsetX,
                  i + r.config.xaxis.offsetY,
                  n + r.config.xaxis.axisTicks.offsetX,
                  a + r.config.xaxis.offsetY,
                  r.config.xaxis.axisTicks.color
                )),
                e.add(s),
                s.node.classList.add('apexcharts-xaxis-tick')))
          }
        },
        {
          key: 'getXAxisTicksPositions',
          value: function () {
            var t = this.w,
              e = [],
              i = this.xaxisLabels.length,
              a = t.globals.padHorizontal
            if (0 < t.globals.timescaleLabels.length)
              for (var s = 0; s < i; s++)
                (a = this.xaxisLabels[s].position), e.push(a)
            else
              for (var r = i, n = 0; n < r; n++) {
                var o = r
                t.globals.isXNumeric && 'bar' !== t.config.chart.type && --o,
                  (a += t.globals.gridWidth / o),
                  e.push(a)
              }
            return e
          }
        },
        {
          key: 'xAxisLabelCorrections',
          value: function () {
            var a = this.w,
              s = new Y(this.ctx),
              t = a.globals.dom.baseEl.querySelector(
                '.apexcharts-xaxis-texts-g'
              ),
              r = a.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-xaxis-texts-g text'
              ),
              e = a.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-yaxis-inversed text'
              ),
              i = a.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-xaxis-inversed-texts-g text tspan'
              )
            if (a.globals.rotateXLabels || a.config.xaxis.labels.rotateAlways)
              for (var n = 0; n < r.length; n++) {
                var o = s.rotateAroundCenter(r[n])
                ;(o.y = o.y - 1),
                  (o.x = o.x + 1),
                  r[n].setAttribute(
                    'transform',
                    'rotate('
                      .concat(a.config.xaxis.labels.rotate, ' ')
                      .concat(o.x, ' ')
                      .concat(o.y, ')')
                  ),
                  r[n].setAttribute('text-anchor', 'end'),
                  t.setAttribute('transform', 'translate(0, '.concat(-10, ')'))
                var l = r[n].childNodes
                a.config.xaxis.labels.trim &&
                  Array.prototype.forEach.call(l, function (t) {
                    s.placeTextWithEllipsis(
                      t,
                      t.textContent,
                      a.config.xaxis.labels.maxHeight -
                        ('bottom' === a.config.legend.position ? 20 : 10)
                    )
                  })
              }
            else
              !(function () {
                for (
                  var e = a.globals.gridWidth / (a.globals.labels.length + 1),
                    t = 0;
                  t < r.length;
                  t++
                ) {
                  var i = r[t].childNodes
                  a.config.xaxis.labels.trim &&
                    'datetime' !== a.config.xaxis.type &&
                    Array.prototype.forEach.call(i, function (t) {
                      s.placeTextWithEllipsis(t, t.textContent, e)
                    })
                }
              })()
            if (0 < e.length) {
              var h = e[e.length - 1].getBBox(),
                c = e[0].getBBox()
              h.x < -20 &&
                e[e.length - 1].parentNode.removeChild(e[e.length - 1]),
                c.x + c.width > a.globals.gridWidth &&
                  !a.globals.isBarHorizontal &&
                  e[0].parentNode.removeChild(e[0])
              for (var d = 0; d < i.length; d++)
                s.placeTextWithEllipsis(
                  i[d],
                  i[d].textContent,
                  a.config.yaxis[0].labels.maxWidth -
                    2 * parseFloat(a.config.yaxis[0].title.style.fontSize) -
                    20
                )
            }
          }
        }
      ]),
      we),
    et =
      (n(ye, [
        {
          key: 'drawGridArea',
          value: function () {
            var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              e = this.w,
              i = new Y(this.ctx)
            null === t && (t = i.group({ class: 'apexcharts-grid' }))
            var a = i.drawLine(
                e.globals.padHorizontal,
                1,
                e.globals.padHorizontal,
                e.globals.gridHeight,
                'transparent'
              ),
              s = i.drawLine(
                e.globals.padHorizontal,
                e.globals.gridHeight,
                e.globals.gridWidth,
                e.globals.gridHeight,
                'transparent'
              )
            return t.add(s), t.add(a), t
          }
        },
        {
          key: 'drawGrid',
          value: function () {
            var t = null
            return (
              this.w.globals.axisCharts &&
                ((t = this.renderGrid()), this.drawGridArea(t.el)),
              t
            )
          }
        },
        {
          key: 'createGridMask',
          value: function () {
            var e,
              t = this.w,
              i = t.globals,
              a = new Y(this.ctx),
              s = Array.isArray(t.config.stroke.width)
                ? 0
                : t.config.stroke.width
            Array.isArray(t.config.stroke.width) &&
              ((e = 0),
              t.config.stroke.width.forEach(function (t) {
                e = Math.max(e, t)
              }),
              (s = e)),
              (i.dom.elGridRectMask = document.createElementNS(
                i.SVGNS,
                'clipPath'
              )),
              i.dom.elGridRectMask.setAttribute(
                'id',
                'gridRectMask'.concat(i.cuid)
              ),
              (i.dom.elGridRectMarkerMask = document.createElementNS(
                i.SVGNS,
                'clipPath'
              )),
              i.dom.elGridRectMarkerMask.setAttribute(
                'id',
                'gridRectMarkerMask'.concat(i.cuid)
              )
            var r = t.config.chart.type,
              n = 0,
              o = 0
            ;('bar' === r || 'rangeBar' === r || 0 < t.globals.comboBarCount) &&
              t.globals.isXNumeric &&
              !t.globals.isBarHorizontal &&
              ((n = t.config.grid.padding.left),
              (o = t.config.grid.padding.right),
              i.barPadForNumericAxis > n &&
                ((n = i.barPadForNumericAxis), (o = i.barPadForNumericAxis))),
              (i.dom.elGridRect = a.drawRect(
                -s / 2 - n - 2,
                -s / 2,
                i.gridWidth + s + o + n + 4,
                i.gridHeight + s,
                0,
                '#fff'
              )),
              new P(this).getLargestMarkerSize()
            var l = t.globals.markers.largestSize + 1
            ;(i.dom.elGridRectMarker = a.drawRect(
              2 * -l,
              2 * -l,
              i.gridWidth + 4 * l,
              i.gridHeight + 4 * l,
              0,
              '#fff'
            )),
              i.dom.elGridRectMask.appendChild(i.dom.elGridRect.node),
              i.dom.elGridRectMarkerMask.appendChild(
                i.dom.elGridRectMarker.node
              )
            var h = i.dom.baseEl.querySelector('defs')
            h.appendChild(i.dom.elGridRectMask),
              h.appendChild(i.dom.elGridRectMarkerMask)
          }
        },
        {
          key: '_drawGridLines',
          value: function (t) {
            var e = t.i,
              i = t.x1,
              a = t.y1,
              s = t.x2,
              r = t.y2,
              n = t.xCount,
              o = t.parent,
              l = this.w
            ;(0 === e && l.globals.skipFirstTimelinelabel) ||
              (e === n - 1 && l.globals.skipLastTimelinelabel) ||
              'radar' === l.config.chart.type ||
              (l.config.grid.xaxis.lines.show &&
                this._drawGridLine({ x1: i, y1: a, x2: s, y2: r, parent: o }),
              new tt(this.ctx).drawXaxisTicks(i, this.elg))
          }
        },
        {
          key: '_drawGridLine',
          value: function (t) {
            var e = t.x1,
              i = t.y1,
              a = t.x2,
              s = t.y2,
              r = t.parent,
              n = this.w,
              o = r.node.classList.contains('apexcharts-gridlines-horizontal'),
              l = n.config.grid.strokeDashArray,
              h = n.globals.barPadForNumericAxis,
              c = new Y(this).drawLine(
                e - (o ? h : 0),
                i,
                a + (o ? h : 0),
                s,
                n.config.grid.borderColor,
                l
              )
            c.node.classList.add('apexcharts-gridline'), r.add(c)
          }
        },
        {
          key: '_drawGridBandRect',
          value: function (t) {
            var e,
              i,
              a = t.c,
              s = t.x1,
              r = t.y1,
              n = t.x2,
              o = t.y2,
              l = t.type,
              h = this.w,
              c = new Y(this.ctx),
              d = h.globals.barPadForNumericAxis
            ;('column' === l && 'datetime' === h.config.xaxis.type) ||
              ((e = h.config.grid[l].colors[a]),
              (i = c.drawRect(
                s - ('row' === l ? d : 0),
                r,
                n + ('row' === l ? 2 * d : 0),
                o,
                0,
                e,
                h.config.grid[l].opacity
              )),
              this.elg.add(i),
              i.attr(
                'clip-path',
                'url(#gridRectMask'.concat(h.globals.cuid, ')')
              ),
              i.node.classList.add('apexcharts-grid-'.concat(l)))
          }
        },
        {
          key: '_drawXYLines',
          value: function (t) {
            var e,
              i,
              o = this,
              l = t.xCount,
              a = t.tickAmount,
              h = this.w
            if (
              ((h.config.grid.xaxis.lines.show ||
                h.config.xaxis.axisTicks.show) &&
                ((e = h.globals.padHorizontal),
                (i = h.globals.gridHeight),
                h.globals.timescaleLabels.length
                  ? (function (t) {
                      for (
                        var e, i, a = t.xC, s = t.y1, r = t.y2, n = 0;
                        n < a;
                        n++
                      )
                        (e = o.xaxisLabels[n].position),
                          (i = o.xaxisLabels[n].position),
                          o._drawGridLines({
                            i: n,
                            x1: e,
                            y1: s,
                            x2: i,
                            y2: r,
                            xCount: l,
                            parent: o.elgridLinesV
                          })
                    })({ xC: l, x1: e, y1: 0, x2: void 0, y2: i })
                  : (h.globals.isXNumeric &&
                      (l = h.globals.xAxisScale.result.length),
                    h.config.xaxis.convertedCatToNumeric &&
                      (l = h.globals.xaxisLabelsCount),
                    (function (t) {
                      for (
                        var e = t.xC,
                          i = t.x1,
                          a = t.y1,
                          s = t.x2,
                          r = t.y2,
                          n = 0;
                        n < e + (h.globals.isXNumeric ? 0 : 1);
                        n++
                      )
                        0 === n &&
                          1 === e &&
                          1 === h.globals.dataPoints &&
                          (s = i = h.globals.gridWidth / 2),
                          o._drawGridLines({
                            i: n,
                            x1: i,
                            y1: a,
                            x2: s,
                            y2: r,
                            xCount: l,
                            parent: o.elgridLinesV
                          }),
                          (s = i +=
                            h.globals.gridWidth /
                            (h.globals.isXNumeric ? e - 1 : e))
                    })({ xC: l, x1: e, y1: 0, x2: void 0, y2: i }))),
              h.config.grid.yaxis.lines.show)
            ) {
              var s = 0,
                r = 0,
                n = h.globals.gridWidth,
                c = a + 1
              this.isTimelineBar && (c = h.globals.labels.length)
              for (var d = 0; d < c + (this.isTimelineBar ? 1 : 0); d++)
                this._drawGridLine({
                  x1: 0,
                  y1: s,
                  x2: n,
                  y2: r,
                  parent: this.elgridLinesH
                }),
                  (r = s += h.globals.gridHeight / (this.isTimelineBar ? c : a))
            }
          }
        },
        {
          key: '_drawInvertedXYLines',
          value: function (t) {
            var e = t.xCount,
              i = this.w
            if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show)
              for (
                var a,
                  s = i.globals.padHorizontal,
                  r = i.globals.gridHeight,
                  n = 0;
                n < e + 1;
                n++
              )
                i.config.grid.xaxis.lines.show &&
                  this._drawGridLine({
                    x1: s,
                    y1: 0,
                    x2: a,
                    y2: r,
                    parent: this.elgridLinesV
                  }),
                  new tt(this.ctx).drawXaxisTicks(s, this.elg),
                  (a = s = s + i.globals.gridWidth / e + 0.3)
            if (i.config.grid.yaxis.lines.show)
              for (
                var o = 0, l = 0, h = i.globals.gridWidth, c = 0;
                c < i.globals.dataPoints + 1;
                c++
              )
                this._drawGridLine({
                  x1: 0,
                  y1: o,
                  x2: h,
                  y2: l,
                  parent: this.elgridLinesH
                }),
                  (l = o += i.globals.gridHeight / i.globals.dataPoints)
          }
        },
        {
          key: 'renderGrid',
          value: function () {
            var t = this.w,
              e = new Y(this.ctx)
            ;(this.elg = e.group({ class: 'apexcharts-grid' })),
              (this.elgridLinesH = e.group({
                class: 'apexcharts-gridlines-horizontal'
              })),
              (this.elgridLinesV = e.group({
                class: 'apexcharts-gridlines-vertical'
              })),
              this.elg.add(this.elgridLinesH),
              this.elg.add(this.elgridLinesV),
              t.config.grid.show ||
                (this.elgridLinesV.hide(), this.elgridLinesH.hide())
            for (
              var i,
                a = t.globals.yAxisScale.length
                  ? t.globals.yAxisScale[0].result.length - 1
                  : 5,
                s = 0;
              s < t.globals.series.length &&
              (void 0 !== t.globals.yAxisScale[s] &&
                (a = t.globals.yAxisScale[s].result.length - 1),
              !(2 < a));
              s++
            );
            return (
              !t.globals.isBarHorizontal || this.isTimelineBar
                ? ((i = this.xaxisLabels.length),
                  this.isTimelineBar && (a = t.globals.labels.length),
                  this._drawXYLines({ xCount: i, tickAmount: a }))
                : ((i = a),
                  (a = t.globals.xTickAmount),
                  this._drawInvertedXYLines({ xCount: i, tickAmount: a })),
              this.drawGridBands(i, a),
              { el: this.elg, xAxisTickWidth: t.globals.gridWidth / i }
            )
          }
        },
        {
          key: 'drawGridBands',
          value: function (t, e) {
            var i = this.w
            if (
              void 0 !== i.config.grid.row.colors &&
              0 < i.config.grid.row.colors.length
            )
              for (
                var a = 0,
                  s = i.globals.gridHeight / e,
                  r = i.globals.gridWidth,
                  n = 0,
                  o = 0;
                n < e;
                n++, o++
              )
                o >= i.config.grid.row.colors.length && (o = 0),
                  this._drawGridBandRect({
                    c: o,
                    x1: 0,
                    y1: a,
                    x2: r,
                    y2: s,
                    type: 'row'
                  }),
                  (a += i.globals.gridHeight / e)
            if (
              void 0 !== i.config.grid.column.colors &&
              0 < i.config.grid.column.colors.length
            )
              for (
                var l =
                    i.globals.isBarHorizontal ||
                    ('category' !== i.config.xaxis.type &&
                      !i.config.xaxis.convertedCatToNumeric)
                      ? t
                      : t - 1,
                  h = i.globals.padHorizontal,
                  c = i.globals.padHorizontal + i.globals.gridWidth / l,
                  d = i.globals.gridHeight,
                  g = 0,
                  u = 0;
                g < t;
                g++, u++
              )
                u >= i.config.grid.column.colors.length && (u = 0),
                  this._drawGridBandRect({
                    c: u,
                    x1: h,
                    y1: 0,
                    x2: c,
                    y2: d,
                    type: 'column'
                  }),
                  (h += i.globals.gridWidth / l)
          }
        }
      ]),
      ye),
    it =
      (n(ve, [
        {
          key: 'niceScale',
          value: function (t, e) {
            var i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : 10,
              a =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0,
              s = 4 < arguments.length ? arguments[4] : void 0,
              r = this.w
            if (
              ('dataPoints' === i && (i = r.globals.dataPoints - 1),
              (t === Number.MIN_VALUE && 0 === e) ||
                (!I.isNumber(t) && !I.isNumber(e)) ||
                (t === Number.MIN_VALUE && e === -Number.MAX_VALUE))
            )
              return (t = 0), (e = i), this.linearScale(t, e, i)
            e < t
              ? (console.warn('axis.min cannot be greater than axis.max'),
                (e = t + 0.1))
              : t === e &&
                ((t = 0 === t ? 0 : t - 0.5), (e = 0 === e ? 2 : e + 0.5))
            var n = [],
              o = Math.abs(e - t)
            o < 1 &&
              s &&
              ('candlestick' === r.config.chart.type ||
                'candlestick' === r.config.series[a].type ||
                r.globals.isRangeData) &&
              (e *= 1.01)
            var l = i + 1
            l < 2 ? (l = 2) : 2 < l && (l -= 2)
            var h = o / l,
              c = Math.floor(I.log10(h)),
              d = Math.pow(10, c),
              g = Math.round(h / d)
            g < 1 && (g = 1)
            var u = g * d,
              p = u * Math.floor(t / u),
              f = u * Math.ceil(e / u),
              x = p
            if (s && 2 < o) {
              for (; n.push(x), !((x += u) > f); );
              return { result: n, niceMin: n[0], niceMax: n[n.length - 1] }
            }
            var b = t
            ;(n = []).push(b)
            for (var m = Math.abs(e - t) / i, v = 0; v <= i; v++)
              (b += m), n.push(b)
            return (
              n[n.length - 2] >= e && n.pop(),
              { result: n, niceMin: n[0], niceMax: n[n.length - 1] }
            )
          }
        },
        {
          key: 'linearScale',
          value: function (t, e) {
            var i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : 10,
              a = Math.abs(e - t) / i
            i === Number.MAX_VALUE && ((i = 10), (a = 1))
            for (var s = [], r = t; 0 <= i; ) s.push(r), (r += a), --i
            return { result: s, niceMin: s[0], niceMax: s[s.length - 1] }
          }
        },
        {
          key: 'logarithmicScale',
          value: function (t, s, r, e) {
            ;(s <= 0 || s === Number.MIN_VALUE) && (s = 0.01)
            for (
              var n = Math.log(s) / Math.log(10),
                o = Math.log(r) / Math.log(10),
                i = Math.abs(r - s) / e,
                a = [],
                l = s;
              0 <= e;

            )
              a.push(l), (l += i), --e
            var h = a.map(function (t, e) {
              t <= 0 && (t = 0.01)
              var i = (o - n) / (r - s),
                a = Math.pow(10, n + i * (t - n))
              return Math.round(a / I.roundToBase(a, 10)) * I.roundToBase(a, 10)
            })
            return (
              0 === h[0] && (h[0] = 1),
              { result: h, niceMin: h[0], niceMax: h[h.length - 1] }
            )
          }
        },
        {
          key: 'setYScaleForIndex',
          value: function (t, e, i) {
            var a = this.w.globals,
              s = this.w.config,
              r = a.isBarHorizontal ? s.xaxis : s.yaxis[t]
            void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = [])
            var n,
              o = Math.abs(i - e)
            r.logarithmic && o <= 5 && (a.invalidLogScale = !0),
              r.logarithmic && 5 < o
                ? ((a.allSeriesCollapsed = !1),
                  (a.yAxisScale[t] = this.logarithmicScale(
                    t,
                    e,
                    i,
                    r.tickAmount ? r.tickAmount : Math.floor(Math.log10(i))
                  )))
                : i !== -Number.MAX_VALUE && I.isNumber(i)
                ? ((a.allSeriesCollapsed = !1),
                  (void 0 === r.min && void 0 === r.max) || r.forceNiceScale
                    ? ((n =
                        (void 0 === s.yaxis[t].max &&
                          void 0 === s.yaxis[t].min) ||
                        s.yaxis[t].forceNiceScale),
                      (a.yAxisScale[t] = this.niceScale(
                        e,
                        i,
                        r.tickAmount
                          ? r.tickAmount
                          : o < 5 && 1 < o
                          ? o + 1
                          : 5,
                        t,
                        n
                      )))
                    : (a.yAxisScale[t] = this.linearScale(e, i, r.tickAmount)))
                : (a.yAxisScale[t] = this.linearScale(0, 5, 5))
          }
        },
        {
          key: 'setXScale',
          value: function (t, e) {
            var i = this.w,
              a = i.globals,
              s = i.config.xaxis,
              r = Math.abs(e - t)
            return (
              e !== -Number.MAX_VALUE && I.isNumber(e)
                ? (a.xAxisScale = this.niceScale(
                    t,
                    e,
                    s.tickAmount ? s.tickAmount : r < 5 && 1 < r ? r + 1 : 5,
                    0
                  ))
                : (a.xAxisScale = this.linearScale(0, 5, 5)),
              a.xAxisScale
            )
          }
        },
        {
          key: 'setMultipleYScales',
          value: function () {
            var r = this,
              t = this.w.globals,
              n = this.w.config,
              o = t.minYArr.concat([]),
              l = t.maxYArr.concat([]),
              h = []
            n.yaxis.forEach(function (i, a) {
              var s = a
              n.series.forEach(function (t, e) {
                t.name === i.seriesName &&
                  (a !== (s = e)
                    ? h.push({ index: e, similarIndex: a, alreadyExists: !0 })
                    : h.push({ index: e }))
              })
              var t = o[s],
                e = l[s]
              r.setYScaleForIndex(a, t, e)
            }),
              this.sameScaleInMultipleAxes(o, l, h)
          }
        },
        {
          key: 'sameScaleInMultipleAxes',
          value: function (t, s, e) {
            var o = this,
              l = this.w.config,
              h = this.w.globals,
              r = []
            e.forEach(function (t) {
              t.alreadyExists &&
                (void 0 === r[t.index] && (r[t.index] = []),
                r[t.index].push(t.index),
                r[t.index].push(t.similarIndex))
            }),
              (h.yAxisSameScaleIndices = r).forEach(function (a, s) {
                r.forEach(function (t, e) {
                  var i
                  s !== e &&
                    ((i = t),
                    0 <
                      a.filter(function (t) {
                        return -1 !== i.indexOf(t)
                      }).length) &&
                    (r[s] = r[s].concat(r[e]))
                })
              })
            var i = r
                .map(function (i) {
                  return i.filter(function (t, e) {
                    return i.indexOf(t) === e
                  })
                })
                .map(function (t) {
                  return t.sort()
                }),
              r = r.filter(function (t) {
                return !!t
              }),
              a = (n = i.slice()).map(function (t) {
                return JSON.stringify(t)
              }),
              n = n.filter(function (t, e) {
                return a.indexOf(JSON.stringify(t)) === e
              }),
              c = [],
              d = []
            t.forEach(function (i, a) {
              n.forEach(function (t, e) {
                ;-1 < t.indexOf(a) &&
                  (void 0 === c[e] && ((c[e] = []), (d[e] = [])),
                  c[e].push({ key: a, value: i }),
                  d[e].push({ key: a, value: s[a] }))
              })
            })
            var g = Array.apply(null, Array(n.length)).map(
                Number.prototype.valueOf,
                Number.MIN_VALUE
              ),
              u = Array.apply(null, Array(n.length)).map(
                Number.prototype.valueOf,
                -Number.MAX_VALUE
              )
            c.forEach(function (t, i) {
              t.forEach(function (t, e) {
                g[i] = Math.min(t.value, g[i])
              })
            }),
              d.forEach(function (t, i) {
                t.forEach(function (t, e) {
                  u[i] = Math.max(t.value, u[i])
                })
              }),
              t.forEach(function (t, n) {
                d.forEach(function (i, a) {
                  var s = g[a],
                    r = u[a]
                  l.chart.stacked &&
                    ((r = 0),
                    i.forEach(function (t, e) {
                      t.value !== -Number.MAX_VALUE && (r += t.value),
                        s !== Number.MIN_VALUE && (s += c[a][e].value)
                    })),
                    i.forEach(function (t, e) {
                      i[e].key === n &&
                        (void 0 !== l.yaxis[n].min &&
                          (s =
                            'function' == typeof l.yaxis[n].min
                              ? l.yaxis[n].min(h.minY)
                              : l.yaxis[n].min),
                        void 0 !== l.yaxis[n].max &&
                          (r =
                            'function' == typeof l.yaxis[n].max
                              ? l.yaxis[n].max(h.maxY)
                              : l.yaxis[n].max),
                        o.setYScaleForIndex(n, s, r))
                    })
                })
              })
          }
        },
        {
          key: 'autoScaleY',
          value: function (t, c, d) {
            var g = (t = t || this).w
            if (g.globals.isMultipleYAxis || g.globals.collapsedSeries.length)
              return (
                console.warn(
                  'autoScaleYaxis is not supported in a multi-yaxis chart.'
                ),
                c
              )
            var u = g.globals.seriesX[0],
              p = g.config.chart.stacked
            return (
              c.forEach(function (a, t) {
                for (var s = 0, e = 0; e < u.length; e++)
                  if (u[e] >= d.xaxis.min) {
                    s = e
                    break
                  }
                var n,
                  o,
                  r = g.globals.minYArr[t],
                  l = g.globals.maxYArr[t],
                  h = g.globals.stackedSeriesTotals
                g.globals.series.forEach(function (i, t) {
                  var e = i[s]
                  p
                    ? ((e = h[s]),
                      (n = o = e),
                      h.forEach(function (t, e) {
                        u[e] <= d.xaxis.max &&
                          u[e] >= d.xaxis.min &&
                          (o < t && null !== t && (o = t),
                          i[e] < n && null !== i[e] && (n = i[e]))
                      }))
                    : ((n = o = e),
                      i.forEach(function (i, a) {
                        var s, r
                        u[a] <= d.xaxis.max &&
                          u[a] >= d.xaxis.min &&
                          ((r = s = i),
                          g.globals.series.forEach(function (t, e) {
                            null !== i &&
                              ((s = Math.min(t[a], s)), (r = Math.max(t[a], r)))
                          }),
                          o < r && null !== r && (o = r),
                          s < n && null !== s && (n = s))
                      })),
                    void 0 === n && void 0 === o && ((n = r), (o = l)),
                    (o *= o < 0 ? 0.9 : 1.1) < 0 && o < l && (o = l),
                    (n *= n < 0 ? 1.1 : 0.9) < 0 && r < n && (n = r),
                    1 < c.length
                      ? ((c[t].min = void 0 === a.min ? n : a.min),
                        (c[t].max = void 0 === a.max ? o : a.max))
                      : ((c[0].min = void 0 === a.min ? n : a.min),
                        (c[0].max = void 0 === a.max ? o : a.max))
                })
              }),
              c
            )
          }
        }
      ]),
      ve),
    at =
      (n(me, [
        {
          key: 'init',
          value: function () {
            this.setYRange(), this.setXRange(), this.setZRange()
          }
        },
        {
          key: 'getMinYMaxY',
          value: function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.MAX_VALUE,
              i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : -Number.MAX_VALUE,
              a =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null,
              s = this.w.config,
              r = this.w.globals,
              n = -Number.MAX_VALUE,
              o = Number.MIN_VALUE
            null === a && (a = t + 1)
            var l = r.series,
              h = l,
              c = l
            'candlestick' === s.chart.type
              ? ((h = r.seriesCandleL), (c = r.seriesCandleH))
              : r.isRangeData &&
                ((h = r.seriesRangeStart), (c = r.seriesRangeEnd))
            for (var d = t; d < a; d++) {
              r.dataPoints = Math.max(r.dataPoints, l[d].length)
              for (var g = 0; g < r.series[d].length; g++) {
                var u = l[d][g]
                null !== u && I.isNumber(u)
                  ? ((n = Math.max(n, c[d][g])),
                    (e = Math.min(e, h[d][g])),
                    (i = Math.max(i, h[d][g])),
                    'candlestick' === this.w.config.chart.type &&
                      ((n = Math.max(n, r.seriesCandleO[d][g])),
                      (n = Math.max(n, r.seriesCandleH[d][g])),
                      (n = Math.max(n, r.seriesCandleL[d][g])),
                      (i = n = Math.max(n, r.seriesCandleC[d][g]))),
                    I.isFloat(u) &&
                      ((u = I.noExponents(u)),
                      (r.yValueDecimal = Math.max(
                        r.yValueDecimal,
                        u.toString().split('.')[1].length
                      ))),
                    o > h[d][g] && h[d][g] < 0 && (o = h[d][g]))
                  : (r.hasNullValues = !0)
              }
            }
            return (
              'rangeBar' === s.chart.type &&
                r.seriesRangeStart.length &&
                r.isBarHorizontal &&
                'datetime' === s.xaxis.type &&
                (o = e),
              'bar' === s.chart.type &&
                (o < 0 && n < 0 && (n = 0), o === Number.MIN_VALUE && (o = 0)),
              { minY: o, maxY: n, lowestY: e, highestY: i }
            )
          }
        },
        {
          key: 'setYRange',
          value: function () {
            var i = this.w.globals,
              e = this.w.config
            ;(i.maxY = -Number.MAX_VALUE), (i.minY = Number.MIN_VALUE)
            var t = Number.MAX_VALUE
            if (i.isMultipleYAxis)
              for (var a = 0; a < i.series.length; a++) {
                var s = this.getMinYMaxY(a, t, null, a + 1)
                i.minYArr.push(s.minY), i.maxYArr.push(s.maxY), (t = s.lowestY)
              }
            var r,
              n = this.getMinYMaxY(0, t, null, i.series.length)
            return (
              (i.minY = n.minY),
              (i.maxY = n.maxY),
              (t = n.lowestY),
              e.chart.stacked && this._setStackedMinMax(),
              ('line' !== e.chart.type &&
                'area' !== e.chart.type &&
                'candlestick' !== e.chart.type &&
                ('rangeBar' !== e.chart.type || i.isBarHorizontal)) ||
                i.minY !== Number.MIN_VALUE ||
                t === -Number.MAX_VALUE ||
                t === i.maxY ||
                ((r = i.maxY - t),
                0 <= t && t <= 10 && (r = 0),
                (i.minY = t - (5 * r) / 100),
                0 < t && i.minY < 0 && (i.minY = 0),
                (i.maxY = i.maxY + (5 * r) / 100)),
              e.yaxis.forEach(function (t, e) {
                void 0 !== t.max &&
                  ('number' == typeof t.max
                    ? (i.maxYArr[e] = t.max)
                    : 'function' == typeof t.max &&
                      (i.maxYArr[e] = t.max(i.maxY)),
                  (i.maxY = i.maxYArr[e])),
                  void 0 !== t.min &&
                    ('number' == typeof t.min
                      ? (i.minYArr[e] = t.min)
                      : 'function' == typeof t.min &&
                        (i.minYArr[e] = t.min(i.minY)),
                    (i.minY = i.minYArr[e]))
              }),
              i.isBarHorizontal &&
                ['min', 'max'].forEach(function (t) {
                  void 0 !== e.xaxis[t] &&
                    'number' == typeof e.xaxis[t] &&
                    ('min' === t
                      ? (i.minY = e.xaxis[t])
                      : (i.maxY = e.xaxis[t]))
                }),
              i.isMultipleYAxis
                ? (this.scales.setMultipleYScales(),
                  (i.minY = t),
                  i.yAxisScale.forEach(function (t, e) {
                    ;(i.minYArr[e] = t.niceMin), (i.maxYArr[e] = t.niceMax)
                  }))
                : (this.scales.setYScaleForIndex(0, i.minY, i.maxY),
                  (i.minY = i.yAxisScale[0].niceMin),
                  (i.maxY = i.yAxisScale[0].niceMax),
                  (i.minYArr[0] = i.yAxisScale[0].niceMin),
                  (i.maxYArr[0] = i.yAxisScale[0].niceMax)),
              {
                minY: i.minY,
                maxY: i.maxY,
                minYArr: i.minYArr,
                maxYArr: i.maxYArr
              }
            )
          }
        },
        {
          key: 'setXRange',
          value: function () {
            var t,
              i = this.w.globals,
              e = this.w.config,
              a =
                'numeric' === e.xaxis.type ||
                'datetime' === e.xaxis.type ||
                ('category' === e.xaxis.type && !i.noLabelsProvided) ||
                i.noLabelsProvided ||
                i.isXNumeric
            if (
              (i.isXNumeric &&
                (function () {
                  for (var t = 0; t < i.series.length; t++)
                    if (i.labels[t])
                      for (var e = 0; e < i.labels[t].length; e++)
                        null !== i.labels[t][e] &&
                          I.isNumber(i.labels[t][e]) &&
                          ((i.maxX = Math.max(i.maxX, i.labels[t][e])),
                          (i.initialMaxX = Math.max(i.maxX, i.labels[t][e])),
                          (i.minX = Math.min(i.minX, i.labels[t][e])),
                          (i.initialMinX = Math.min(i.minX, i.labels[t][e])))
                })(),
              i.noLabelsProvided &&
                0 === e.xaxis.categories.length &&
                ((i.maxX = i.labels[i.labels.length - 1]),
                (i.initialMaxX = i.labels[i.labels.length - 1]),
                (i.minX = 1),
                (i.initialMinX = 1)),
              i.isXNumeric || i.noLabelsProvided || i.dataFormatXNumeric)
            ) {
              if (
                (void 0 === e.xaxis.tickAmount
                  ? ((t = Math.round(i.svgWidth / 150)),
                    'numeric' === e.xaxis.type &&
                      i.dataPoints < 30 &&
                      (t = i.dataPoints - 1),
                    t > i.dataPoints &&
                      0 !== i.dataPoints &&
                      (t = i.dataPoints - 1))
                  : 'dataPoints' === e.xaxis.tickAmount
                  ? (1 < i.series.length &&
                      (t = i.series[i.maxValsInArrayIndex].length - 1),
                    i.isXNumeric && (t = i.maxX - i.minX - 1))
                  : (t = e.xaxis.tickAmount),
                (i.xTickAmount = t),
                void 0 !== e.xaxis.max &&
                  'number' == typeof e.xaxis.max &&
                  (i.maxX = e.xaxis.max),
                void 0 !== e.xaxis.min &&
                  'number' == typeof e.xaxis.min &&
                  (i.minX = e.xaxis.min),
                void 0 !== e.xaxis.range && (i.minX = i.maxX - e.xaxis.range),
                i.minX !== Number.MAX_VALUE && i.maxX !== -Number.MAX_VALUE)
              )
                if (e.xaxis.convertedCatToNumeric && !i.dataFormatXNumeric) {
                  for (var s = [], r = i.minX - 1; r < i.maxX; r++)
                    s.push(r + 1)
                  i.xAxisScale = {
                    result: s,
                    niceMin: s[0],
                    niceMax: s[s.length - 1]
                  }
                } else i.xAxisScale = this.scales.setXScale(i.minX, i.maxX)
              else
                (i.xAxisScale = this.scales.linearScale(1, t, t)),
                  i.noLabelsProvided &&
                    0 < i.labels.length &&
                    ((i.xAxisScale = this.scales.linearScale(
                      1,
                      i.labels.length,
                      t - 1
                    )),
                    (i.seriesX = i.labels.slice()))
              a && (i.labels = i.xAxisScale.result.slice())
            }
            return (
              i.isBarHorizontal &&
                i.labels.length &&
                (i.xTickAmount = i.labels.length),
              this._handleSingleDataPoint(),
              this._getMinXDiff(),
              { minX: i.minX, maxX: i.maxX }
            )
          }
        },
        {
          key: 'setZRange',
          value: function () {
            var t = this.w.globals
            if (t.isDataXYZ)
              for (var e = 0; e < t.series.length; e++)
                if (void 0 !== t.seriesZ[e])
                  for (var i = 0; i < t.seriesZ[e].length; i++)
                    null !== t.seriesZ[e][i] &&
                      I.isNumber(t.seriesZ[e][i]) &&
                      ((t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i])),
                      (t.minZ = Math.min(t.minZ, t.seriesZ[e][i])))
          }
        },
        {
          key: '_handleSingleDataPoint',
          value: function () {
            var t,
              e,
              i,
              a = this.w.globals,
              s = this.w.config
            a.minX === a.maxX &&
              ((t = new G(this.ctx)),
              'datetime' === s.xaxis.type
                ? ((e = t.getDate(a.minX)).setUTCDate(e.getDate() - 2),
                  (a.minX = new Date(e).getTime()),
                  (i = t.getDate(a.maxX)).setUTCDate(i.getDate() + 2),
                  (a.maxX = new Date(i).getTime()))
                : ('numeric' !== s.xaxis.type &&
                    ('category' !== s.xaxis.type || a.noLabelsProvided)) ||
                  ((a.minX = a.minX - 2),
                  (a.initialMinX = a.minX),
                  (a.maxX = a.maxX + 2),
                  (a.initialMaxX = a.maxX)))
          }
        },
        {
          key: '_getMinXDiff',
          value: function () {
            var s = this.w.globals
            s.isXNumeric &&
              s.seriesX.forEach(function (t, a) {
                1 === t.length &&
                  t.push(
                    s.seriesX[s.maxValsInArrayIndex][
                      s.seriesX[s.maxValsInArrayIndex].length - 1
                    ]
                  )
                var e = t.slice()
                e.sort(function (t, e) {
                  return t - e
                }),
                  e.forEach(function (t, e) {
                    var i
                    0 < e &&
                      0 < (i = t - s.seriesX[a][e - 1]) &&
                      (s.minXDiff = Math.min(i, s.minXDiff))
                  }),
                  1 === s.dataPoints &&
                    s.minXDiff === Number.MAX_VALUE &&
                    (s.minXDiff = 0.5)
              })
          }
        },
        {
          key: '_setStackedMinMax',
          value: function () {
            var t = this.w.globals,
              e = [],
              i = []
            if (t.series.length)
              for (var a = 0; a < t.series[t.maxValsInArrayIndex].length; a++)
                for (var s = 0, r = 0, n = 0; n < t.series.length; n++)
                  null !== t.series[n][a] &&
                    I.isNumber(t.series[n][a]) &&
                    (0 < t.series[n][a]
                      ? (s = s + parseFloat(t.series[n][a]) + 1e-4)
                      : (r += parseFloat(t.series[n][a]))),
                    n === t.series.length - 1 && (e.push(s), i.push(r))
            for (var o = 0; o < e.length; o++)
              (t.maxY = Math.max(t.maxY, e[o])),
                (t.minY = Math.min(t.minY, i[o]))
          }
        }
      ]),
      me),
    st =
      (n(be, [
        {
          key: 'drawYaxis',
          value: function (n) {
            var o = this.w,
              l = new Y(this.ctx),
              h = o.config.yaxis[n].labels.style,
              c = h.fontSize,
              d = h.fontFamily,
              g = h.fontWeight,
              t = l.group({
                class: 'apexcharts-yaxis',
                rel: n,
                transform: 'translate(' + o.globals.translateYAxisX[n] + ', 0)'
              })
            if (this.axesUtils.isYAxisHidden(n)) return t
            var u = l.group({ class: 'apexcharts-yaxis-texts-g' })
            t.add(u)
            var e,
              i,
              a,
              p = o.globals.yAxisScale[n].result.length - 1,
              f = o.globals.gridHeight / p,
              x = o.globals.translateY,
              b = o.globals.yLabelFormatters[n],
              m = o.globals.yAxisScale[n].result.slice(),
              m = this.axesUtils.checkForReversedLabels(n, m),
              v = ''
            if (o.config.yaxis[n].labels.show)
              for (var s = p; 0 <= s; s--)
                !(function (t) {
                  var e = m[t],
                    e = b(e, t),
                    i = o.config.yaxis[n].labels.padding
                  o.config.yaxis[n].opposite &&
                    0 !== o.config.yaxis.length &&
                    (i *= -1)
                  var a,
                    s,
                    r = l.drawText({
                      x: i,
                      y: x + p / 10 + o.config.yaxis[n].labels.offsetY + 1,
                      text: e,
                      textAnchor: o.config.yaxis[n].opposite ? 'start' : 'end',
                      fontSize: c,
                      fontFamily: d,
                      fontWeight: g,
                      foreColor: Array.isArray(h.colors)
                        ? h.colors[t]
                        : h.colors,
                      isPlainText: !1,
                      cssClass: 'apexcharts-yaxis-label ' + h.cssClass
                    })
                  t === p && (v = r),
                    u.add(r),
                    0 !== o.config.yaxis[n].labels.rotate &&
                      ((a = l.rotateAroundCenter(v.node)),
                      (s = l.rotateAroundCenter(r.node)),
                      r.node.setAttribute(
                        'transform',
                        'rotate('
                          .concat(o.config.yaxis[n].labels.rotate, ' ')
                          .concat(a.x, ' ')
                          .concat(s.y, ')')
                      )),
                    (x += f)
                })(s)
            void 0 !== o.config.yaxis[n].title.text &&
              ((e = l.group({ class: 'apexcharts-yaxis-title' })),
              (i = 0),
              o.config.yaxis[n].opposite && (i = o.globals.translateYAxisX[n]),
              (a = l.drawText({
                x: i,
                y:
                  o.globals.gridHeight / 2 +
                  o.globals.translateY +
                  o.config.yaxis[n].title.offsetY,
                text: o.config.yaxis[n].title.text,
                textAnchor: 'end',
                foreColor: o.config.yaxis[n].title.style.color,
                fontSize: o.config.yaxis[n].title.style.fontSize,
                fontWeight: o.config.yaxis[n].title.style.fontWeight,
                fontFamily: o.config.yaxis[n].title.style.fontFamily,
                cssClass:
                  'apexcharts-yaxis-title-text ' +
                  o.config.yaxis[n].title.style.cssClass
              })),
              e.add(a),
              t.add(e))
            var r,
              y = o.config.yaxis[n].axisBorder,
              w = 31 + y.offsetX
            return (
              o.config.yaxis[n].opposite && (w = -31 - y.offsetX),
              y.show &&
                ((r = l.drawLine(
                  w,
                  o.globals.translateY + y.offsetY - 2,
                  w,
                  o.globals.gridHeight + o.globals.translateY + y.offsetY + 2,
                  y.color,
                  0,
                  y.width
                )),
                t.add(r)),
              o.config.yaxis[n].axisTicks.show &&
                this.axesUtils.drawYAxisTicks(
                  w,
                  p,
                  y,
                  o.config.yaxis[n].axisTicks,
                  n,
                  f,
                  t
                ),
              t
            )
          }
        },
        {
          key: 'drawYaxisInversed',
          value: function (t) {
            var e = this.w,
              i = new Y(this.ctx),
              a = i.group({
                class: 'apexcharts-xaxis apexcharts-yaxis-inversed'
              }),
              s = i.group({
                class: 'apexcharts-xaxis-texts-g',
                transform: 'translate('
                  .concat(e.globals.translateXAxisX, ', ')
                  .concat(e.globals.translateXAxisY, ')')
              })
            a.add(s)
            var r = e.globals.yAxisScale[t].result.length - 1,
              n = e.globals.gridWidth / r + 0.1,
              o = n + e.config.xaxis.labels.offsetX,
              l = e.globals.xLabelFormatter,
              h = e.globals.yAxisScale[t].result.slice(),
              c = e.globals.timescaleLabels
            0 < c.length &&
              ((this.xaxisLabels = c.slice()), (r = (h = c.slice()).length)),
              (h = this.axesUtils.checkForReversedLabels(t, h))
            var d = c.length
            if (e.config.xaxis.labels.show)
              for (var g = d ? 0 : r; d ? g < d : 0 <= g; d ? g++ : g--) {
                var u = h[g]
                u = l(u, g)
                var p,
                  f =
                    e.globals.gridWidth +
                    e.globals.padHorizontal -
                    (o - n + e.config.xaxis.labels.offsetX)
                c.length &&
                  ((f = (p = this.axesUtils.getLabel(
                    h,
                    c,
                    f,
                    g,
                    this.drawnLabels,
                    this.xaxisFontSize
                  )).x),
                  (u = p.text),
                  this.drawnLabels.push(p.text),
                  0 === g && e.globals.skipFirstTimelinelabel && (u = ''),
                  g === h.length - 1 &&
                    e.globals.skipLastTimelinelabel &&
                    (u = ''))
                var x = i.drawText({
                  x: f,
                  y:
                    this.xAxisoffX +
                    e.config.xaxis.labels.offsetY +
                    30 -
                    ('top' === e.config.xaxis.position
                      ? e.globals.xAxisHeight +
                        e.config.xaxis.axisTicks.height -
                        2
                      : 0),
                  text: u,
                  textAnchor: 'middle',
                  foreColor: Array.isArray(this.xaxisForeColors)
                    ? this.xaxisForeColors[t]
                    : this.xaxisForeColors,
                  fontSize: this.xaxisFontSize,
                  fontFamily: this.xaxisFontFamily,
                  fontWeight: e.config.xaxis.labels.style.fontWeight,
                  isPlainText: !1,
                  cssClass:
                    'apexcharts-xaxis-label ' +
                    e.config.xaxis.labels.style.cssClass
                })
                s.add(x), x.tspan(u)
                var b = document.createElementNS(e.globals.SVGNS, 'title')
                ;(b.textContent = u), x.node.appendChild(b), (o += n)
              }
            return (
              this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a
            )
          }
        },
        {
          key: 'inversedYAxisBorder',
          value: function (t) {
            var e,
              i,
              a = this.w,
              s = new Y(this.ctx),
              r = a.config.xaxis.axisBorder
            r.show &&
              ((e = 0),
              'bar' === a.config.chart.type &&
                a.globals.isXNumeric &&
                (e -= 15),
              (i = s.drawLine(
                a.globals.padHorizontal + e + r.offsetX,
                this.xAxisoffX,
                a.globals.gridWidth,
                this.xAxisoffX,
                r.color,
                0,
                r.height
              )),
              t.add(i))
          }
        },
        {
          key: 'inversedYAxisTitleText',
          value: function (t) {
            var e,
              i,
              a = this.w,
              s = new Y(this.ctx)
            void 0 !== a.config.xaxis.title.text &&
              ((e = s.group({
                class: 'apexcharts-xaxis-title apexcharts-yaxis-title-inversed'
              })),
              (i = s.drawText({
                x: a.globals.gridWidth / 2 + a.config.xaxis.title.offsetX,
                y:
                  this.xAxisoffX +
                  parseFloat(this.xaxisFontSize) +
                  parseFloat(a.config.xaxis.title.style.fontSize) +
                  a.config.xaxis.title.offsetY +
                  20,
                text: a.config.xaxis.title.text,
                textAnchor: 'middle',
                fontSize: a.config.xaxis.title.style.fontSize,
                fontFamily: a.config.xaxis.title.style.fontFamily,
                fontWeight: a.config.xaxis.title.style.fontWeight,
                cssClass:
                  'apexcharts-xaxis-title-text ' +
                  a.config.xaxis.title.style.cssClass
              })),
              e.add(i),
              t.add(e))
          }
        },
        {
          key: 'yAxisTitleRotate',
          value: function (t, e) {
            var i = this.w,
              a = new Y(this.ctx),
              s = { width: 0, height: 0 },
              r = { width: 0, height: 0 },
              n = i.globals.dom.baseEl.querySelector(
                " .apexcharts-yaxis[rel='".concat(
                  t,
                  "'] .apexcharts-yaxis-texts-g"
                )
              )
            null !== n && (s = n.getBoundingClientRect())
            var o,
              l,
              h = i.globals.dom.baseEl.querySelector(
                ".apexcharts-yaxis[rel='".concat(
                  t,
                  "'] .apexcharts-yaxis-title text"
                )
              )
            null !== h && (r = h.getBoundingClientRect()),
              null !== h &&
                ((o = this.xPaddingForYAxisTitle(t, s, r, e)),
                h.setAttribute('x', o.xPos - (e ? 10 : 0))),
              null !== h &&
                ((l = a.rotateAroundCenter(h)),
                h.setAttribute(
                  'transform',
                  'rotate('
                    .concat(e ? '' : '-')
                    .concat(i.config.yaxis[t].title.rotate, ' ')
                    .concat(l.x, ' ')
                    .concat(l.y, ')')
                ))
          }
        },
        {
          key: 'xPaddingForYAxisTitle',
          value: function (t, e, i, a) {
            var s = this.w,
              r = 0,
              n = 10
            return void 0 === s.config.yaxis[t].title.text || t < 0
              ? { xPos: r, padd: 0 }
              : (a
                  ? (r =
                      e.width +
                      s.config.yaxis[t].title.offsetX +
                      i.width / 2 +
                      n / 2)
                  : ((r =
                      -1 * e.width +
                      s.config.yaxis[t].title.offsetX +
                      n / 2 +
                      i.width / 2),
                    s.globals.isBarHorizontal &&
                      ((n = 25),
                      (r =
                        -1 * e.width - s.config.yaxis[t].title.offsetX - n))),
                { xPos: r, padd: n })
          }
        },
        {
          key: 'setYAxisXPosition',
          value: function (s, r) {
            var n,
              o = this.w,
              l = 0,
              h = 18,
              c = 1
            1 < o.config.yaxis.length && (this.multipleYs = !0),
              o.config.yaxis.map(function (t, e) {
                var i =
                    -1 < o.globals.ignoreYAxisIndexes.indexOf(e) ||
                    !t.show ||
                    t.floating ||
                    0 === s[e].width,
                  a = s[e].width + r[e].width
                t.opposite
                  ? o.globals.isBarHorizontal
                    ? ((l = o.globals.gridWidth + o.globals.translateX - 1),
                      (o.globals.translateYAxisX[e] = l - t.labels.offsetX))
                    : ((l = o.globals.gridWidth + o.globals.translateX + c),
                      i || (c = c + a + 20),
                      (o.globals.translateYAxisX[e] =
                        l - t.labels.offsetX + 20))
                  : ((n = o.globals.translateX - h),
                    i || (h = h + a + 20),
                    (o.globals.translateYAxisX[e] = n + t.labels.offsetX))
              })
          }
        },
        {
          key: 'setYAxisTextAlignments',
          value: function () {
            var n = this.w,
              t =
                n.globals.dom.baseEl.getElementsByClassName('apexcharts-yaxis')
            ;(t = I.listToArray(t)).forEach(function (t, e) {
              var i,
                a,
                s,
                r = n.config.yaxis[e]
              void 0 !== r.labels.align &&
                ((i = n.globals.dom.baseEl.querySelector(
                  ".apexcharts-yaxis[rel='".concat(
                    e,
                    "'] .apexcharts-yaxis-texts-g"
                  )
                )),
                (a = n.globals.dom.baseEl.querySelectorAll(
                  ".apexcharts-yaxis[rel='".concat(
                    e,
                    "'] .apexcharts-yaxis-label"
                  )
                )),
                (a = I.listToArray(a)),
                (s = i.getBoundingClientRect()),
                'left' === r.labels.align
                  ? (a.forEach(function (t, e) {
                      t.setAttribute('text-anchor', 'start')
                    }),
                    r.opposite ||
                      i.setAttribute(
                        'transform',
                        'translate(-'.concat(s.width, ', 0)')
                      ))
                  : 'center' === r.labels.align
                  ? (a.forEach(function (t, e) {
                      t.setAttribute('text-anchor', 'middle')
                    }),
                    i.setAttribute(
                      'transform',
                      'translate('.concat(
                        (s.width / 2) * (r.opposite ? 1 : -1),
                        ', 0)'
                      )
                    ))
                  : 'right' === r.labels.align &&
                    (a.forEach(function (t, e) {
                      t.setAttribute('text-anchor', 'end')
                    }),
                    r.opposite &&
                      i.setAttribute(
                        'transform',
                        'translate('.concat(s.width, ', 0)')
                      )))
            })
          }
        }
      ]),
      be),
    rt =
      (n(xe, [
        {
          key: 'addEventListener',
          value: function (t, e) {
            var i = this.w
            i.globals.events.hasOwnProperty(t)
              ? i.globals.events[t].push(e)
              : (i.globals.events[t] = [e])
          }
        },
        {
          key: 'removeEventListener',
          value: function (t, e) {
            var i,
              a = this.w
            !a.globals.events.hasOwnProperty(t) ||
              (-1 !== (i = a.globals.events[t].indexOf(e)) &&
                a.globals.events[t].splice(i, 1))
          }
        },
        {
          key: 'fireEvent',
          value: function (t, e) {
            var i = this.w
            if (i.globals.events.hasOwnProperty(t)) {
              ;(e && e.length) || (e = [])
              for (var a = i.globals.events[t], s = a.length, r = 0; r < s; r++)
                a[r].apply(null, e)
            }
          }
        },
        {
          key: 'setupEventHandlers',
          value: function () {
            var e = this,
              i = this.w,
              a = this.ctx,
              s = i.globals.dom.baseEl.querySelector(i.globals.chartClass)
            this.ctx.eventList.forEach(function (t) {
              s.addEventListener(
                t,
                function (t) {
                  var e = Object.assign({}, i, {
                    seriesIndex: i.globals.capturedSeriesIndex,
                    dataPointIndex: i.globals.capturedDataPointIndex
                  })
                  'mousemove' === t.type || 'touchmove' === t.type
                    ? 'function' == typeof i.config.chart.events.mouseMove &&
                      i.config.chart.events.mouseMove(t, a, e)
                    : (('mouseup' === t.type && 1 === t.which) ||
                        'touchend' === t.type) &&
                      ('function' == typeof i.config.chart.events.click &&
                        i.config.chart.events.click(t, a, e),
                      a.ctx.events.fireEvent('click', [t, a, e]))
                },
                { capture: !1, passive: !0 }
              )
            }),
              this.ctx.eventList.forEach(function (t) {
                document.addEventListener(t, e.documentEvent)
              }),
              this.ctx.core.setupBrushHandler()
          }
        },
        {
          key: 'documentEvent',
          value: function (e) {
            var t,
              i,
              a = this.w,
              s = e.target.className
            'click' !== e.type ||
              ((t = a.globals.dom.baseEl.querySelector('.apexcharts-menu')) &&
                t.classList.contains('apexcharts-menu-open') &&
                'apexcharts-menu-icon' !== s &&
                t.classList.remove('apexcharts-menu-open')),
              'mousedown' === e.type &&
                ((i = a.globals.dom.Paper.select(
                  '.apexcharts-resizable-element'
                ).members),
                Array.prototype.forEach.call(i, function (t) {
                  e.target.classList.contains('apexcharts-resizable-element') ||
                    e.target.classList.contains('svg_select_points') ||
                    t.selectize(!1)
                })),
              (a.globals.clientX =
                'touchmove' === e.type ? e.touches[0].clientX : e.clientX),
              (a.globals.clientY =
                'touchmove' === e.type ? e.touches[0].clientY : e.clientY)
          }
        }
      ]),
      xe),
    nt =
      (n(fe, [
        {
          key: 'setCurrentLocaleValues',
          value: function (e) {
            var t = this.w.config.chart.locales
            window.Apex.chart &&
              window.Apex.chart.locales &&
              0 < window.Apex.chart.locales.length &&
              (t = this.w.config.chart.locales.concat(
                window.Apex.chart.locales
              ))
            var i = t.filter(function (t) {
              return t.name === e
            })[0]
            if (!i)
              throw new Error(
                'Wrong locale name provided. Please make sure you set the correct locale name in options'
              )
            var a = I.extend(T, i)
            this.w.globals.locale = a.options
          }
        }
      ]),
      fe),
    ot =
      (n(pe, [
        {
          key: 'drawAxis',
          value: function (t, e) {
            var i,
              a,
              s = this.w.globals,
              r = this.w.config,
              n = new tt(this.ctx),
              o = new st(this.ctx)
            s.axisCharts &&
              'radar' !== t &&
              (s.isBarHorizontal
                ? ((a = o.drawYaxisInversed(0)),
                  (i = n.drawXaxisInversed(0)),
                  s.dom.elGraphical.add(i),
                  s.dom.elGraphical.add(a))
                : ((i = n.drawXaxis()),
                  s.dom.elGraphical.add(i),
                  r.yaxis.map(function (t, e) {
                    ;-1 === s.ignoreYAxisIndexes.indexOf(e) &&
                      ((a = o.drawYaxis(e)), s.dom.Paper.add(a))
                  }))),
              r.yaxis.map(function (t, e) {
                ;-1 === s.ignoreYAxisIndexes.indexOf(e) &&
                  o.yAxisTitleRotate(e, t.opposite)
              })
          }
        }
      ]),
      pe),
    lt =
      (n(ue, [
        {
          key: 'drawXCrosshairs',
          value: function () {
            var t,
              e = this.w,
              i = new Y(this.ctx),
              a = new E(this.ctx),
              s = e.config.xaxis.crosshairs.fill.gradient,
              r = e.config.xaxis.crosshairs.dropShadow,
              n = e.config.xaxis.crosshairs.fill.type,
              o = s.colorFrom,
              l = s.colorTo,
              h = s.opacityFrom,
              c = s.opacityTo,
              d = s.stops,
              g = r.enabled,
              u = r.left,
              p = r.top,
              f = r.blur,
              x = r.color,
              b = r.opacity,
              m = e.config.xaxis.crosshairs.fill.color
            e.config.xaxis.crosshairs.show &&
              ('gradient' === n &&
                (m = i.drawGradient('vertical', o, l, h, c, null, d, null)),
              (t = i.drawRect()),
              1 === e.config.xaxis.crosshairs.width && (t = i.drawLine()),
              t.attr({
                class: 'apexcharts-xcrosshairs',
                x: 0,
                y: 0,
                y2: e.globals.gridHeight,
                width: I.isNumber(e.config.xaxis.crosshairs.width)
                  ? e.config.xaxis.crosshairs.width
                  : 0,
                height: e.globals.gridHeight,
                fill: m,
                filter: 'none',
                'fill-opacity': e.config.xaxis.crosshairs.opacity,
                stroke: e.config.xaxis.crosshairs.stroke.color,
                'stroke-width': e.config.xaxis.crosshairs.stroke.width,
                'stroke-dasharray': e.config.xaxis.crosshairs.stroke.dashArray
              }),
              g &&
                (t = a.dropShadow(t, {
                  left: u,
                  top: p,
                  blur: f,
                  color: x,
                  opacity: b
                })),
              e.globals.dom.elGraphical.add(t))
          }
        },
        {
          key: 'drawYCrosshairs',
          value: function () {
            var t,
              e = this.w,
              i = new Y(this.ctx),
              a = e.config.yaxis[0].crosshairs,
              s = e.globals.barPadForNumericAxis
            e.config.yaxis[0].crosshairs.show &&
              ((t = i.drawLine(
                -s,
                0,
                e.globals.gridWidth + s,
                0,
                a.stroke.color,
                a.stroke.dashArray,
                a.stroke.width
              )).attr({ class: 'apexcharts-ycrosshairs' }),
              e.globals.dom.elGraphical.add(t))
            var r = i.drawLine(
              -s,
              0,
              e.globals.gridWidth + s,
              0,
              a.stroke.color,
              0,
              0
            )
            r.attr({ class: 'apexcharts-ycrosshairs-hidden' }),
              e.globals.dom.elGraphical.add(r)
          }
        }
      ]),
      ue),
    ht =
      (n(ge, [
        {
          key: 'checkResponsiveConfig',
          value: function (t) {
            var r,
              n,
              e,
              i,
              o = this,
              l = this.w,
              a = l.config
            0 !== a.responsive.length &&
              ((r = a.responsive.slice())
                .sort(function (t, e) {
                  return t.breakpoint > e.breakpoint
                    ? 1
                    : e.breakpoint > t.breakpoint
                    ? -1
                    : 0
                })
                .reverse(),
              (n = new U({})),
              (e = function () {
                var t =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = r[0].breakpoint,
                  i = 0 < window.innerWidth ? window.innerWidth : screen.width
                if (e < i) {
                  var a = P.extendArrayProps(n, l.globals.initialConfig, l),
                    t = I.extend(a, t)
                  ;(t = I.extend(l.config, t)), o.overrideResponsiveOptions(t)
                } else
                  for (var s = 0; s < r.length; s++)
                    i < r[s].breakpoint &&
                      ((t = P.extendArrayProps(n, r[s].options, l)),
                      (t = I.extend(l.config, t)),
                      o.overrideResponsiveOptions(t))
              }),
              t
                ? ((i = P.extendArrayProps(n, t, l)),
                  (i = I.extend(l.config, i)),
                  e((i = I.extend(i, t))))
                : e({}))
          }
        },
        {
          key: 'overrideResponsiveOptions',
          value: function (t) {
            var e = new U(t).init({ responsiveOverride: !0 })
            this.w.config = e
          }
        }
      ]),
      ge),
    ct =
      (n(de, [
        {
          key: 'init',
          value: function () {
            this.setDefaultColors()
          }
        },
        {
          key: 'setDefaultColors',
          value: function () {
            var a = this,
              s = this.w,
              t = new I()
            if (
              (s.globals.dom.elWrap.classList.add(
                'apexcharts-theme-'.concat(s.config.theme.mode)
              ),
              void 0 === s.config.colors
                ? (s.globals.colors = this.predefined())
                : ((s.globals.colors = s.config.colors),
                  Array.isArray(s.config.colors) &&
                    0 < s.config.colors.length &&
                    'function' == typeof s.config.colors[0] &&
                    (s.globals.colors = s.config.series.map(function (t, e) {
                      var i = s.config.colors[e]
                      return 'function' == typeof (i = i || s.config.colors[0])
                        ? ((a.isColorFn = !0),
                          i({
                            value: s.globals.axisCharts
                              ? s.globals.series[e][0]
                                ? s.globals.series[e][0]
                                : 0
                              : s.globals.series[e],
                            seriesIndex: e,
                            dataPointIndex: e,
                            w: s
                          }))
                        : i
                    }))),
              s.config.theme.monochrome.enabled)
            ) {
              var e = [],
                i = s.globals.series.length
              this.isBarDistributed &&
                (i = s.globals.series[0].length * s.globals.series.length)
              for (
                var r = s.config.theme.monochrome.color,
                  n = 1 / (i / s.config.theme.monochrome.shadeIntensity),
                  o = s.config.theme.monochrome.shadeTo,
                  l = 0,
                  h = 0;
                h < i;
                h++
              ) {
                var c = void 0,
                  c =
                    'dark' === o ? t.shadeColor(-1 * l, r) : t.shadeColor(l, r)
                ;(l += n), e.push(c)
              }
              s.globals.colors = e.slice()
            }
            var d = s.globals.colors.slice()
            this.pushExtraColors(s.globals.colors),
              ['fill', 'stroke'].forEach(function (t) {
                void 0 === s.config[t].colors
                  ? (s.globals[t].colors = a.isColorFn ? s.config.colors : d)
                  : (s.globals[t].colors = s.config[t].colors.slice()),
                  a.pushExtraColors(s.globals[t].colors)
              }),
              void 0 === s.config.dataLabels.style.colors
                ? (s.globals.dataLabels.style.colors = d)
                : (s.globals.dataLabels.style.colors =
                    s.config.dataLabels.style.colors.slice()),
              this.pushExtraColors(s.globals.dataLabels.style.colors, 50),
              void 0 === s.config.plotOptions.radar.polygons.fill.colors
                ? (s.globals.radarPolygons.fill.colors = [
                    'dark' === s.config.theme.mode ? '#424242' : '#fff'
                  ])
                : (s.globals.radarPolygons.fill.colors =
                    s.config.plotOptions.radar.polygons.fill.colors.slice()),
              this.pushExtraColors(s.globals.radarPolygons.fill.colors, 20),
              void 0 === s.config.markers.colors
                ? (s.globals.markers.colors = d)
                : (s.globals.markers.colors = s.config.markers.colors.slice()),
              this.pushExtraColors(s.globals.markers.colors)
          }
        },
        {
          key: 'pushExtraColors',
          value: function (t, e) {
            var i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              a = this.w,
              s = e || a.globals.series.length
            if (
              (null === i &&
                (i =
                  this.isBarDistributed ||
                  ('heatmap' === a.config.chart.type &&
                    a.config.plotOptions.heatmap.colorScale.inverse)),
              i && (s = a.globals.series[0].length * a.globals.series.length),
              t.length < s)
            )
              for (var r = s - t.length, n = 0; n < r; n++) t.push(t[n])
          }
        },
        {
          key: 'updateThemeOptions',
          value: function (t) {
            ;(t.chart = t.chart || {}), (t.tooltip = t.tooltip || {})
            var e = t.theme.mode || 'light',
              i = t.theme.palette
                ? t.theme.palette
                : 'dark' === e
                ? 'palette4'
                : 'palette1',
              a = t.chart.foreColor
                ? t.chart.foreColor
                : 'dark' === e
                ? '#f6f7f8'
                : '#373d3f'
            return (
              (t.tooltip.theme = e),
              (t.chart.foreColor = a),
              (t.theme.palette = i),
              t
            )
          }
        },
        {
          key: 'predefined',
          value: function () {
            switch (this.w.config.theme.palette) {
              case 'palette1':
                this.colors = [
                  '#008FFB',
                  '#00E396',
                  '#FEB019',
                  '#FF4560',
                  '#775DD0'
                ]
                break
              case 'palette2':
                this.colors = [
                  '#3f51b5',
                  '#03a9f4',
                  '#4caf50',
                  '#f9ce1d',
                  '#FF9800'
                ]
                break
              case 'palette3':
                this.colors = [
                  '#33b2df',
                  '#546E7A',
                  '#d4526e',
                  '#13d8aa',
                  '#A5978B'
                ]
                break
              case 'palette4':
                this.colors = [
                  '#4ecdc4',
                  '#c7f464',
                  '#81D4FA',
                  '#fd6a6a',
                  '#546E7A'
                ]
                break
              case 'palette5':
                this.colors = [
                  '#2b908f',
                  '#f9a3a4',
                  '#90ee7e',
                  '#fa4443',
                  '#69d2e7'
                ]
                break
              case 'palette6':
                this.colors = [
                  '#449DD1',
                  '#F86624',
                  '#EA3546',
                  '#662E9B',
                  '#C5D86D'
                ]
                break
              case 'palette7':
                this.colors = [
                  '#D7263D',
                  '#1B998B',
                  '#2E294E',
                  '#F46036',
                  '#E2C044'
                ]
                break
              case 'palette8':
                this.colors = [
                  '#662E9B',
                  '#F86624',
                  '#F9C80E',
                  '#EA3546',
                  '#43BCCD'
                ]
                break
              case 'palette9':
                this.colors = [
                  '#5C4742',
                  '#A5978B',
                  '#8D5B4C',
                  '#5A2A27',
                  '#C4BBAF'
                ]
                break
              case 'palette10':
                this.colors = [
                  '#A300D6',
                  '#7D02EB',
                  '#5653FE',
                  '#2983FF',
                  '#00B1F2'
                ]
                break
              default:
                this.colors = [
                  '#008FFB',
                  '#00E396',
                  '#FEB019',
                  '#FF4560',
                  '#775DD0'
                ]
            }
            return this.colors
          }
        }
      ]),
      de),
    dt =
      (n(ce, [
        {
          key: 'draw',
          value: function () {
            this.drawTitleSubtitle('title'), this.drawTitleSubtitle('subtitle')
          }
        },
        {
          key: 'drawTitleSubtitle',
          value: function (t) {
            var e,
              i = this.w,
              a = 'title' === t ? i.config.title : i.config.subtitle,
              s = i.globals.svgWidth / 2,
              r = a.offsetY,
              n = 'middle'
            'left' === a.align
              ? ((s = 10), (n = 'start'))
              : 'right' === a.align &&
                ((s = i.globals.svgWidth - 10), (n = 'end')),
              (s += a.offsetX),
              (r = r + parseInt(a.style.fontSize, 10) + a.margin / 2),
              void 0 !== a.text &&
                ((e = new Y(this.ctx).drawText({
                  x: s,
                  y: r,
                  text: a.text,
                  textAnchor: n,
                  fontSize: a.style.fontSize,
                  fontFamily: a.style.fontFamily,
                  fontWeight: a.style.fontWeight,
                  foreColor: a.style.color,
                  opacity: 1
                })).node.setAttribute(
                  'class',
                  'apexcharts-'.concat(t, '-text')
                ),
                i.globals.dom.Paper.add(e))
          }
        }
      ]),
      ce),
    gt =
      (n(he, [
        {
          key: 'getTitleSubtitleCoords',
          value: function (t) {
            var e,
              i = this.w,
              a = 0,
              s = 0,
              r =
                'title' === t
                  ? i.config.title.floating
                  : i.config.subtitle.floating,
              n = i.globals.dom.baseEl.querySelector(
                '.apexcharts-'.concat(t, '-text')
              )
            return (
              null === n ||
                r ||
                ((a = (e = n.getBoundingClientRect()).width),
                (s = i.globals.axisCharts ? e.height + 5 : e.height)),
              { width: a, height: s }
            )
          }
        },
        {
          key: 'getLegendsRect',
          value: function () {
            var t = this.w,
              e = t.globals.dom.baseEl.querySelector('.apexcharts-legend'),
              i = Object.assign({}, I.getBoundingClientRect(e))
            return (
              null !== e && !t.config.legend.floating && t.config.legend.show
                ? (this.dCtx.lgRect = {
                    x: i.x,
                    y: i.y,
                    height: i.height,
                    width: 0 === i.height ? 0 : i.width
                  })
                : (this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }),
              ('left' !== t.config.legend.position &&
                'right' !== t.config.legend.position) ||
                (1.5 * this.dCtx.lgRect.width > t.globals.svgWidth &&
                  (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5)),
              this.dCtx.lgRect
            )
          }
        },
        {
          key: 'getLargestStringFromMultiArr',
          value: function (t, e) {
            var i,
              a,
              s = t
            return (
              this.w.globals.isMultiLineX &&
                ((i = e.map(function (t, e) {
                  return Array.isArray(t) ? t.length : 1
                })),
                (a = Math.max.apply(Math, A(i))),
                (s = e[i.indexOf(a)])),
              s
            )
          }
        }
      ]),
      he),
    ut =
      (n(le, [
        {
          key: 'getxAxisLabelsCoords',
          value: function () {
            var t,
              e,
              i,
              a,
              s,
              r,
              n,
              o,
              l,
              h,
              c,
              d = this.w,
              g = d.globals.labels.slice()
            return (
              d.config.xaxis.convertedCatToNumeric &&
                0 === g.length &&
                (g = d.globals.categoryLabels),
              0 < d.globals.timescaleLabels.length
                ? ((e = {
                    width: (t = this.getxAxisTimeScaleLabelsCoords()).width,
                    height: t.height
                  }),
                  (d.globals.rotateXLabels = !1))
                : ((this.dCtx.lgWidthForSideLegends =
                    ('left' !== d.config.legend.position &&
                      'right' !== d.config.legend.position) ||
                    d.config.legend.floating
                      ? 0
                      : this.dCtx.lgRect.width),
                  (i = d.globals.xLabelFormatter),
                  (r = I.getLargestStringFromArr(g)),
                  (n = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, g)),
                  d.globals.isBarHorizontal &&
                    (n = r =
                      d.globals.yAxisScale[0].result.reduce(function (t, e) {
                        return t.length > e.length ? t : e
                      }, 0)),
                  (s = r),
                  (r = (a = new J(this.dCtx.ctx)).xLabelFormat(i, r, s)),
                  (n = a.xLabelFormat(i, n, s)),
                  ((d.config.xaxis.convertedCatToNumeric && void 0 === r) ||
                    '' === String(r).trim()) &&
                    (n = r = '1'),
                  (l = c =
                    (o = new Y(this.dCtx.ctx)).getTextRects(
                      r,
                      d.config.xaxis.labels.style.fontSize
                    )),
                  r !== n &&
                    (l = o.getTextRects(
                      n,
                      d.config.xaxis.labels.style.fontSize
                    )),
                  ((e = {
                    width: c.width >= l.width ? c.width : l.width,
                    height: c.height >= l.height ? c.height : l.height
                  }).width *
                    g.length >
                    d.globals.svgWidth -
                      this.dCtx.lgWidthForSideLegends -
                      this.dCtx.yAxisWidth -
                      this.dCtx.gridPad.left -
                      this.dCtx.gridPad.right &&
                    0 !== d.config.xaxis.labels.rotate) ||
                  d.config.xaxis.labels.rotateAlways
                    ? d.globals.isBarHorizontal ||
                      ((d.globals.rotateXLabels = !0),
                      (c = (h = function (t) {
                        return o.getTextRects(
                          t,
                          d.config.xaxis.labels.style.fontSize,
                          d.config.xaxis.labels.style.fontFamily,
                          'rotate('.concat(
                            d.config.xaxis.labels.rotate,
                            ' 0 0)'
                          ),
                          !1
                        )
                      })(r)),
                      r !== n && (l = h(n)),
                      (e.height =
                        (c.height > l.height ? c.height : l.height) / 1.5),
                      (e.width = c.width > l.width ? c.width : l.width))
                    : (d.globals.rotateXLabels = !1)),
              d.config.xaxis.labels.show || (e = { width: 0, height: 0 }),
              { width: e.width, height: e.height }
            )
          }
        },
        {
          key: 'getxAxisTitleCoords',
          value: function () {
            var t,
              e = this.w,
              i = 0,
              a = 0
            return (
              void 0 !== e.config.xaxis.title.text &&
                ((i = (t = new Y(this.dCtx.ctx).getTextRects(
                  e.config.xaxis.title.text,
                  e.config.xaxis.title.style.fontSize
                )).width),
                (a = t.height)),
              { width: i, height: a }
            )
          }
        },
        {
          key: 'getxAxisTimeScaleLabelsCoords',
          value: function () {
            var t,
              e = this.w
            this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice()
            var i = this.dCtx.timescaleLabels.map(function (t) {
                return t.value
              }),
              a = i.reduce(function (t, e) {
                return void 0 === t
                  ? (console.error(
                      'You have possibly supplied invalid Date format. Please supply a valid JavaScript Date'
                    ),
                    0)
                  : t.length > e.length
                  ? t
                  : e
              }, 0)
            return (
              1.05 *
                (t = new Y(this.dCtx.ctx).getTextRects(
                  a,
                  e.config.xaxis.labels.style.fontSize
                )).width *
                i.length >
                e.globals.gridWidth &&
                0 !== e.config.xaxis.labels.rotate &&
                (e.globals.overlappingXLabels = !0),
              t
            )
          }
        },
        {
          key: 'additionalPaddingXLabels',
          value: function (t) {
            var n = this,
              o = this.w,
              l = o.globals,
              h = o.config,
              c = h.xaxis.type,
              d = t.width
            ;(l.skipLastTimelinelabel = !1), (l.skipFirstTimelinelabel = !1)
            var g = o.config.yaxis[0].opposite && o.globals.isBarHorizontal
            h.yaxis.forEach(function (t, e) {
              var i, a, s, r
              g
                ? (n.dCtx.gridPad.left < d && (n.dCtx.xPadLeft = d / 2 + 1),
                  (n.dCtx.xPadRight = d / 2 + 1))
                : ((i = e),
                  -1 !== l.collapsedSeriesIndices.indexOf(i) ||
                    ('datetime' !== c &&
                      n.dCtx.gridPad.left < d / 2 - n.dCtx.yAxisWidthLeft &&
                      !l.rotateXLabels &&
                      !h.xaxis.labels.trim &&
                      (n.dCtx.xPadLeft = d / 2 + 1),
                    n.dCtx.timescaleLabels && n.dCtx.timescaleLabels.length
                      ? ((a = n.dCtx.timescaleLabels[0]),
                        (s =
                          n.dCtx.timescaleLabels[
                            n.dCtx.timescaleLabels.length - 1
                          ].position +
                          d / 1.75 -
                          n.dCtx.yAxisWidthRight),
                        (r = a.position - d / 1.75 + n.dCtx.yAxisWidthLeft),
                        s > l.gridWidth && (l.skipLastTimelinelabel = !0),
                        r < 0 && (l.skipFirstTimelinelabel = !0))
                      : 'datetime' === c
                      ? n.dCtx.gridPad.right < d &&
                        !l.rotateXLabels &&
                        (l.skipLastTimelinelabel = !0)
                      : 'datetime' !== c &&
                        n.dCtx.gridPad.right < d / 2 - n.dCtx.yAxisWidthRight &&
                        !l.rotateXLabels &&
                        ('between' !== o.config.xaxis.tickPlacement ||
                          o.globals.isBarHorizontal) &&
                        (n.dCtx.xPadRight = d / 2 + 1)))
            })
          }
        }
      ]),
      le),
    pt =
      (n(oe, [
        {
          key: 'getyAxisLabelsCoords',
          value: function () {
            var d = this,
              g = this.w,
              u = [],
              p = 10,
              f = new Q(this.dCtx.ctx)
            return (
              g.config.yaxis.map(function (t, e) {
                var i,
                  a,
                  s,
                  r,
                  n,
                  o,
                  l,
                  h,
                  c = g.globals.yAxisScale[e]
                !f.isYAxisHidden(e) && t.labels.show && c.result.length
                  ? ((void 0 !==
                      (n = r =
                        (i = g.globals.yLabelFormatters[e])(
                          (a =
                            String(c.niceMin).length > String(c.niceMax).length
                              ? c.niceMin
                              : c.niceMax),
                          { seriesIndex: e, dataPointIndex: -1, w: g }
                        )) &&
                      0 !== r.length) ||
                      (r = a),
                    g.globals.isBarHorizontal &&
                      ((p = 0),
                      (s = g.globals.labels.slice()),
                      (r = i((r = I.getLargestStringFromArr(s)), {
                        seriesIndex: e,
                        dataPointIndex: -1,
                        w: g
                      })),
                      (n = d.dCtx.dimHelpers.getLargestStringFromMultiArr(
                        r,
                        s
                      ))),
                    (h = l =
                      (o = new Y(d.dCtx.ctx)).getTextRects(
                        r,
                        t.labels.style.fontSize
                      )),
                    r !== n && (h = o.getTextRects(n, t.labels.style.fontSize)),
                    u.push({
                      width: (h.width > l.width ? h.width : l.width) + p,
                      height: h.height > l.height ? h.height : l.height
                    }))
                  : u.push({ width: 0, height: 0 })
              }),
              u
            )
          }
        },
        {
          key: 'getyAxisTitleCoords',
          value: function () {
            var a = this,
              t = this.w,
              s = []
            return (
              t.config.yaxis.map(function (t, e) {
                var i
                t.show && void 0 !== t.title.text
                  ? ((i = new Y(a.dCtx.ctx).getTextRects(
                      t.title.text,
                      t.title.style.fontSize,
                      t.title.style.fontFamily,
                      'rotate(-90 0 0)',
                      !1
                    )),
                    s.push({ width: i.width, height: i.height }))
                  : s.push({ width: 0, height: 0 })
              }),
              s
            )
          }
        },
        {
          key: 'getTotalYAxisWidth',
          value: function () {
            function i (t, e) {
              var i = s.config.yaxis[e].floating,
                a = 0
              0 < t.width && !i
                ? ((a = t.width + l),
                  -1 < s.globals.ignoreYAxisIndexes.indexOf(e) &&
                    (a = a - t.width - l))
                : (a = i || h.isYAxisHidden(e) ? 0 : 5),
                s.config.yaxis[e].opposite ? (o += a) : (n += a),
                (r += a)
            }
            var s = this.w,
              r = 0,
              n = 0,
              o = 0,
              l = 1 < s.globals.yAxisScale.length ? 10 : 0,
              h = new Q(this.dCtx.ctx)
            return (
              s.globals.yLabelsCoords.map(function (t, e) {
                i(t, e)
              }),
              s.globals.yTitleCoords.map(function (t, e) {
                i(t, e)
              }),
              s.globals.isBarHorizontal &&
                (r =
                  s.globals.yLabelsCoords[0].width +
                  s.globals.yTitleCoords[0].width +
                  15),
              (this.dCtx.yAxisWidthLeft = n),
              (this.dCtx.yAxisWidthRight = o),
              r
            )
          }
        }
      ]),
      oe),
    ft =
      (n(ne, [
        {
          key: 'gridPadForColumnsInNumericAxis',
          value: function (t) {
            var e = this.w
            if (e.globals.noData || e.globals.allSeriesCollapsed) return 0
            var i,
              a,
              s,
              r = e.config.chart.type,
              n = 0,
              o = 'bar' === r || 'rangeBar' === r ? e.config.series.length : 1
            return (
              0 < e.globals.comboBarCount && (o = e.globals.comboBarCount),
              e.globals.collapsedSeries.forEach(function (t) {
                ;('bar' !== t.type && 'rangeBar' !== t.type) || --o
              }),
              e.config.chart.stacked && (o = 1),
              ('bar' === r ||
                'rangeBar' === r ||
                0 < e.globals.comboBarCount) &&
                e.globals.isXNumeric &&
                !e.globals.isBarHorizontal &&
                0 < o &&
                ((s = Math.abs(
                  e.globals.initialMaxX - e.globals.initialMinX
                )) <= 3 && (s = e.globals.dataPoints),
                (i = s / t),
                e.globals.minXDiff &&
                  0 < e.globals.minXDiff / i &&
                  (a = e.globals.minXDiff / i),
                t / 2 < a && (a /= 2),
                (n =
                  ((a / o) *
                    parseInt(e.config.plotOptions.bar.columnWidth, 10)) /
                  100) < 1 && (n = 1),
                (n = n / (1 < o ? 1 : 1.5) + 5),
                (e.globals.barPadForNumericAxis = n)),
              n
            )
          }
        },
        {
          key: 'gridPadFortitleSubtitle',
          value: function () {
            var e = this,
              i = this.w,
              t = i.globals,
              a = this.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 10
            ;['title', 'subtitle'].forEach(function (t) {
              void 0 !== i.config[t].text
                ? (a += i.config[t].margin)
                : (a += e.dCtx.isSparkline || !i.globals.axisCharts ? 0 : 5)
            })
            var s =
              1 < i.config.series.length ||
              !i.globals.axisCharts ||
              i.config.legend.showForSingleSeries
            i.config.legend.show &&
              'bottom' === i.config.legend.position &&
              !i.config.legend.floating &&
              s &&
              (a += 10)
            var r = this.dCtx.dimHelpers.getTitleSubtitleCoords('title'),
              n = this.dCtx.dimHelpers.getTitleSubtitleCoords('subtitle')
            ;(t.gridHeight = t.gridHeight - r.height - n.height - a),
              (t.translateY = t.translateY + r.height + n.height + a)
          }
        },
        {
          key: 'setGridXPosForDualYAxis',
          value: function (i, a) {
            var s = this.w,
              r = new Q(this.dCtx.ctx)
            s.config.yaxis.map(function (t, e) {
              ;-1 !== s.globals.ignoreYAxisIndexes.indexOf(e) ||
                t.floating ||
                r.isYAxisHidden(e) ||
                (t.opposite &&
                  (s.globals.translateX =
                    s.globals.translateX -
                    (a[e].width + i[e].width) -
                    parseInt(s.config.yaxis[e].labels.style.fontSize, 10) /
                      1.2 -
                    12),
                s.globals.translateX < 2 && (s.globals.translateX = 2))
            })
          }
        }
      ]),
      ne),
    xt =
      (n(re, [
        {
          key: 'plotCoords',
          value: function () {
            var t = this.w.globals
            ;(this.lgRect = this.dimHelpers.getLegendsRect()),
              t.axisCharts
                ? this.setDimensionsForAxisCharts()
                : this.setDimensionsForNonAxisCharts(),
              this.dimGrid.gridPadFortitleSubtitle(),
              (t.gridHeight =
                t.gridHeight - this.gridPad.top - this.gridPad.bottom),
              (t.gridWidth =
                t.gridWidth -
                this.gridPad.left -
                this.gridPad.right -
                this.xPadRight -
                this.xPadLeft)
            var e = this.dimGrid.gridPadForColumnsInNumericAxis(t.gridWidth)
            ;(t.gridWidth = t.gridWidth - 2 * e),
              (t.translateX =
                t.translateX +
                this.gridPad.left +
                this.xPadLeft +
                (0 < e ? e + 4 : 0)),
              (t.translateY = t.translateY + this.gridPad.top)
          }
        },
        {
          key: 'setDimensionsForAxisCharts',
          value: function () {
            var t = this,
              i = this.w,
              e = i.globals,
              a = this.dimYAxis.getyAxisLabelsCoords(),
              s = this.dimYAxis.getyAxisTitleCoords()
            ;(i.globals.yLabelsCoords = []),
              (i.globals.yTitleCoords = []),
              i.config.yaxis.map(function (t, e) {
                i.globals.yLabelsCoords.push({ width: a[e].width, index: e }),
                  i.globals.yTitleCoords.push({ width: s[e].width, index: e })
              }),
              (this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth())
            var r = this.dimXAxis.getxAxisLabelsCoords(),
              n = this.dimXAxis.getxAxisTitleCoords()
            this.conditionalChecksForAxisCoords(r, n),
              (e.translateXAxisY = i.globals.rotateXLabels
                ? this.xAxisHeight / 8
                : -4),
              (e.translateXAxisX =
                i.globals.rotateXLabels &&
                i.globals.isXNumeric &&
                i.config.xaxis.labels.rotate <= -45
                  ? -this.xAxisWidth / 4
                  : 0),
              i.globals.isBarHorizontal &&
                ((e.rotateXLabels = !1),
                (e.translateXAxisY =
                  (parseInt(i.config.xaxis.labels.style.fontSize, 10) / 1.5) *
                  -1)),
              (e.translateXAxisY =
                e.translateXAxisY + i.config.xaxis.labels.offsetY),
              (e.translateXAxisX =
                e.translateXAxisX + i.config.xaxis.labels.offsetX)
            var o = this.yAxisWidth,
              l = this.xAxisHeight
            ;(e.xAxisLabelsHeight = this.xAxisHeight),
              (e.xAxisLabelsWidth = this.xAxisWidth),
              (e.xAxisHeight = this.xAxisHeight)
            var h = 10
            function c () {
              ;(e.translateX = o),
                (e.gridHeight =
                  e.svgHeight -
                  t.lgRect.height -
                  l -
                  (t.isSparkline ? 0 : i.globals.rotateXLabels ? 10 : 15)),
                (e.gridWidth = e.svgWidth - o)
            }
            switch (
              (('radar' !== i.config.chart.type && !this.isSparkline) ||
                ((o = 0), (l = e.goldenPadding)),
              this.isSparkline &&
                ((this.lgRect = { height: 0, width: 0 }), (h = o = l = 0)),
              this.dimXAxis.additionalPaddingXLabels(r),
              'top' === i.config.xaxis.position &&
                (h = e.xAxisHeight - i.config.xaxis.axisTicks.height - 5),
              i.config.legend.position)
            ) {
              case 'bottom':
                ;(e.translateY = h), c()
                break
              case 'top':
                ;(e.translateY = this.lgRect.height + h), c()
                break
              case 'left':
                ;(e.translateY = h),
                  (e.translateX = this.lgRect.width + o),
                  (e.gridHeight = e.svgHeight - l - 12),
                  (e.gridWidth = e.svgWidth - this.lgRect.width - o)
                break
              case 'right':
                ;(e.translateY = h),
                  (e.translateX = o),
                  (e.gridHeight = e.svgHeight - l - 12),
                  (e.gridWidth = e.svgWidth - this.lgRect.width - o - 5)
                break
              default:
                throw new Error('Legend position not supported')
            }
            this.dimGrid.setGridXPosForDualYAxis(s, a),
              new st(this.ctx).setYAxisXPosition(a, s)
          }
        },
        {
          key: 'setDimensionsForNonAxisCharts',
          value: function () {
            var t = this.w,
              e = t.globals,
              i = t.config,
              a = 0
            t.config.legend.show && !t.config.legend.floating && (a = 20)
            var s =
                'pie' === i.chart.type ||
                'polarArea' === i.chart.type ||
                'donut' === i.chart.type
                  ? 'pie'
                  : 'radialBar',
              r = i.plotOptions[s].offsetY,
              n = i.plotOptions[s].offsetX
            if (!i.legend.show || i.legend.floating)
              return (
                (e.gridHeight =
                  e.svgHeight - i.grid.padding.left + i.grid.padding.right),
                (e.gridWidth = e.gridHeight),
                (e.translateY = r),
                void (e.translateX = n + (e.svgWidth - e.gridWidth) / 2)
              )
            switch (i.legend.position) {
              case 'bottom':
                ;(e.gridHeight =
                  e.svgHeight - this.lgRect.height - e.goldenPadding),
                  (e.gridWidth = e.gridHeight),
                  (e.translateY = r - 10),
                  (e.translateX = n + (e.svgWidth - e.gridWidth) / 2)
                break
              case 'top':
                ;(e.gridHeight =
                  e.svgHeight - this.lgRect.height - e.goldenPadding),
                  (e.gridWidth = e.gridHeight),
                  (e.translateY = this.lgRect.height + r + 10),
                  (e.translateX = n + (e.svgWidth - e.gridWidth) / 2)
                break
              case 'left':
                ;(e.gridWidth = e.svgWidth - this.lgRect.width - a),
                  (e.gridHeight =
                    'auto' !== i.chart.height ? e.svgHeight : e.gridWidth),
                  (e.translateY = r),
                  (e.translateX = n + this.lgRect.width + a)
                break
              case 'right':
                ;(e.gridWidth = e.svgWidth - this.lgRect.width - a - 5),
                  (e.gridHeight =
                    'auto' !== i.chart.height ? e.svgHeight : e.gridWidth),
                  (e.translateY = r),
                  (e.translateX = n + 10)
                break
              default:
                throw new Error('Legend position not supported')
            }
          }
        },
        {
          key: 'conditionalChecksForAxisCoords',
          value: function (t, e) {
            var i = this.w
            ;(this.xAxisHeight =
              (t.height + e.height) *
                (i.globals.isMultiLineX ? 1.2 : i.globals.LINE_HEIGHT_RATIO) +
              (i.globals.rotateXLabels ? 22 : 10)),
              (this.xAxisWidth = t.width),
              this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight &&
                (this.xAxisHeight = i.config.xaxis.labels.maxHeight),
              i.config.xaxis.labels.minHeight &&
                this.xAxisHeight < i.config.xaxis.labels.minHeight &&
                (this.xAxisHeight = i.config.xaxis.labels.minHeight),
              i.config.xaxis.floating && (this.xAxisHeight = 0)
            var a = 0,
              s = 0
            i.config.yaxis.forEach(function (t) {
              ;(a += t.labels.minWidth), (s += t.labels.maxWidth)
            }),
              this.yAxisWidth < a && (this.yAxisWidth = a),
              this.yAxisWidth > s && (this.yAxisWidth = s)
          }
        }
      ]),
      re),
    bt =
      (n(se, [
        {
          key: 'getLegendStyles',
          value: function () {
            var t = document.createElement('style')
            t.setAttribute('type', 'text/css')
            var e = document.createTextNode(
              '\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-left, .apexcharts-legend.position-top.apexcharts-align-left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.position-bottom.apexcharts-align-right, .apexcharts-legend.position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }'
            )
            return t.appendChild(e), t
          }
        },
        {
          key: 'getLegendBBox',
          value: function () {
            var t = this.w.globals.dom.baseEl
                .querySelector('.apexcharts-legend')
                .getBoundingClientRect(),
              e = t.width
            return { clwh: t.height, clww: e }
          }
        },
        {
          key: 'appendToForeignObject',
          value: function () {
            var t = this.w.globals
            t.dom.elLegendForeign = document.createElementNS(
              t.SVGNS,
              'foreignObject'
            )
            var e = t.dom.elLegendForeign
            e.setAttribute('x', 0),
              e.setAttribute('y', 0),
              e.setAttribute('width', t.svgWidth),
              e.setAttribute('height', t.svgHeight),
              t.dom.elLegendWrap.setAttribute(
                'xmlns',
                'http://www.w3.org/1999/xhtml'
              ),
              e.appendChild(t.dom.elLegendWrap),
              e.appendChild(this.getLegendStyles()),
              t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node)
          }
        },
        {
          key: 'toggleDataSeries',
          value: function (t, e) {
            var i,
              a,
              s,
              r,
              n,
              o = this,
              l = this.w
            l.globals.axisCharts || 'radialBar' === l.config.chart.type
              ? ((l.globals.resized = !0),
                (a = i = null),
                (l.globals.risingSeries = []),
                (a = l.globals.axisCharts
                  ? ((i = l.globals.dom.baseEl.querySelector(
                      ".apexcharts-series[data\\:realIndex='".concat(t, "']")
                    )),
                    parseInt(i.getAttribute('data:realIndex'), 10))
                  : ((i = l.globals.dom.baseEl.querySelector(
                      ".apexcharts-series[rel='".concat(t + 1, "']")
                    )),
                    parseInt(i.getAttribute('rel'), 10) - 1)),
                e
                  ? [
                      {
                        cs: l.globals.collapsedSeries,
                        csi: l.globals.collapsedSeriesIndices
                      },
                      {
                        cs: l.globals.ancillaryCollapsedSeries,
                        csi: l.globals.ancillaryCollapsedSeriesIndices
                      }
                    ].forEach(function (t) {
                      o.riseCollapsedSeries(t.cs, t.csi, a)
                    })
                  : this.hideSeries({ seriesEl: i, realIndex: a }))
              : ((s = l.globals.dom.Paper.select(
                  " .apexcharts-series[rel='".concat(t + 1, "'] path")
                )),
                ('pie' !== (r = l.config.chart.type) &&
                  'polarArea' !== r &&
                  'donut' !== r) ||
                  ((n = l.config.plotOptions.pie.donut.labels),
                  new Y(this.lgCtx.ctx).pathMouseDown(s.members[0], null),
                  this.lgCtx.ctx.pie.printDataLabelsInner(
                    s.members[0].node,
                    n
                  )),
                s.fire('click'))
          }
        },
        {
          key: 'hideSeries',
          value: function (t) {
            var e,
              i,
              a = t.seriesEl,
              s = t.realIndex,
              r = this.w,
              n = I.clone(r.config.series)
            r.globals.axisCharts
              ? ((e = !1),
                r.config.yaxis[s] &&
                  r.config.yaxis[s].show &&
                  r.config.yaxis[s].showAlways &&
                  ((e = !0),
                  r.globals.ancillaryCollapsedSeriesIndices.indexOf(s) < 0 &&
                    (r.globals.ancillaryCollapsedSeries.push({
                      index: s,
                      data: n[s].data.slice(),
                      type: a.parentNode.className.baseVal.split('-')[1]
                    }),
                    r.globals.ancillaryCollapsedSeriesIndices.push(s))),
                e ||
                  (r.globals.collapsedSeries.push({
                    index: s,
                    data: n[s].data.slice(),
                    type: a.parentNode.className.baseVal.split('-')[1]
                  }),
                  r.globals.collapsedSeriesIndices.push(s),
                  (i = r.globals.risingSeries.indexOf(s)),
                  r.globals.risingSeries.splice(i, 1)))
              : (r.globals.collapsedSeries.push({ index: s, data: n[s] }),
                r.globals.collapsedSeriesIndices.push(s))
            for (var o = a.childNodes, l = 0; l < o.length; l++)
              o[l].classList.contains('apexcharts-series-markers-wrap') &&
                (o[l].classList.contains('apexcharts-hide')
                  ? o[l].classList.remove('apexcharts-hide')
                  : o[l].classList.add('apexcharts-hide'))
            ;(r.globals.allSeriesCollapsed =
              r.globals.collapsedSeries.length === r.config.series.length),
              (n = this._getSeriesBasedOnCollapsedState(n)),
              this.lgCtx.ctx.updateHelpers._updateSeries(
                n,
                r.config.chart.animations.dynamicAnimation.enabled
              )
          }
        },
        {
          key: 'riseCollapsedSeries',
          value: function (t, e, i) {
            var a = this.w,
              s = I.clone(a.config.series)
            if (0 < t.length) {
              for (var r = 0; r < t.length; r++)
                t[r].index === i &&
                  (a.globals.axisCharts
                    ? (s[i].data = t[r].data.slice())
                    : (s[i] = t[r].data),
                  t.splice(r, 1),
                  e.splice(r, 1),
                  a.globals.risingSeries.push(i))
              ;(s = this._getSeriesBasedOnCollapsedState(s)),
                this.lgCtx.ctx.updateHelpers._updateSeries(
                  s,
                  a.config.chart.animations.dynamicAnimation.enabled
                )
            }
          }
        },
        {
          key: '_getSeriesBasedOnCollapsedState',
          value: function (i) {
            var a = this.w
            return (
              a.globals.axisCharts
                ? i.forEach(function (t, e) {
                    ;-1 < a.globals.collapsedSeriesIndices.indexOf(e) &&
                      (i[e].data = [])
                  })
                : i.forEach(function (t, e) {
                    ;-1 < a.globals.collapsedSeriesIndices.indexOf(e) &&
                      (i[e] = 0)
                  }),
              i
            )
          }
        }
      ]),
      se),
    mt =
      (n(ae, [
        {
          key: 'init',
          value: function () {
            var t = this.w,
              e = t.globals,
              i = t.config
            if (
              ((i.legend.showForSingleSeries && 1 === e.series.length) ||
                this.isBarsDistributed ||
                1 < e.series.length ||
                !e.axisCharts) &&
              i.legend.show
            ) {
              for (; e.dom.elLegendWrap.firstChild; )
                e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild)
              this.drawLegends(),
                I.isIE11()
                  ? document
                      .getElementsByTagName('head')[0]
                      .appendChild(this.legendHelpers.getLegendStyles())
                  : this.legendHelpers.appendToForeignObject(),
                'bottom' === i.legend.position || 'top' === i.legend.position
                  ? this.legendAlignHorizontal()
                  : ('right' !== i.legend.position &&
                      'left' !== i.legend.position) ||
                    this.legendAlignVertical()
            }
          }
        },
        {
          key: 'drawLegends',
          value: function () {
            var t,
              e = this.w,
              i = e.config.legend.fontFamily,
              a = e.globals.seriesNames,
              s = e.globals.colors.slice()
            'heatmap' === e.config.chart.type
              ? ((a = (t = e.config.plotOptions.heatmap.colorScale.ranges).map(
                  function (t) {
                    return t.name ? t.name : t.from + ' - ' + t.to
                  }
                )),
                (s = t.map(function (t) {
                  return t.color
                })))
              : this.isBarsDistributed && (a = e.globals.labels.slice())
            for (
              var r = e.globals.legendFormatter,
                n = e.config.legend.inverseOrder,
                o = n ? a.length - 1 : 0;
              n ? 0 <= o : o <= a.length - 1;
              n ? o-- : o++
            ) {
              var l = r(a[o], { seriesIndex: o, w: e }),
                h = !1,
                c = !1
              if (0 < e.globals.collapsedSeries.length)
                for (var d = 0; d < e.globals.collapsedSeries.length; d++)
                  e.globals.collapsedSeries[d].index === o && (h = !0)
              if (0 < e.globals.ancillaryCollapsedSeriesIndices.length)
                for (
                  var g = 0;
                  g < e.globals.ancillaryCollapsedSeriesIndices.length;
                  g++
                )
                  e.globals.ancillaryCollapsedSeriesIndices[g] === o && (c = !0)
              var u = document.createElement('span')
              u.classList.add('apexcharts-legend-marker')
              var p = e.config.legend.markers.offsetX,
                f = e.config.legend.markers.offsetY,
                x = e.config.legend.markers.height,
                b = e.config.legend.markers.width,
                m = e.config.legend.markers.strokeWidth,
                v = e.config.legend.markers.strokeColor,
                y = e.config.legend.markers.radius,
                w = u.style
              ;(w.background = s[o]),
                (w.color = s[o]),
                e.config.legend.markers.fillColors &&
                  e.config.legend.markers.fillColors[o] &&
                  (w.background = e.config.legend.markers.fillColors[o]),
                (w.height = Array.isArray(x)
                  ? parseFloat(x[o]) + 'px'
                  : parseFloat(x) + 'px'),
                (w.width = Array.isArray(b)
                  ? parseFloat(b[o]) + 'px'
                  : parseFloat(b) + 'px'),
                (w.left = Array.isArray(p) ? p[o] : p),
                (w.top = Array.isArray(f) ? f[o] : f),
                (w.borderWidth = Array.isArray(m) ? m[o] : m),
                (w.borderColor = Array.isArray(v) ? v[o] : v),
                (w.borderRadius = Array.isArray(y)
                  ? parseFloat(y[o]) + 'px'
                  : parseFloat(y) + 'px'),
                e.config.legend.markers.customHTML &&
                  (Array.isArray(e.config.legend.markers.customHTML)
                    ? e.config.legend.markers.customHTML[o] &&
                      (u.innerHTML = e.config.legend.markers.customHTML[o]())
                    : (u.innerHTML = e.config.legend.markers.customHTML())),
                Y.setAttrs(u, { rel: o + 1, 'data:collapsed': h || c }),
                (h || c) && u.classList.add('apexcharts-inactive-legend')
              var k = document.createElement('div'),
                A = document.createElement('span')
              A.classList.add('apexcharts-legend-text'),
                (A.innerHTML = Array.isArray(l) ? l.join(' ') : l)
              var S =
                (S = e.config.legend.labels.useSeriesColors
                  ? e.globals.colors[o]
                  : e.config.legend.labels.colors) || e.config.chart.foreColor
              ;(A.style.color = S),
                (A.style.fontSize =
                  parseFloat(e.config.legend.fontSize) + 'px'),
                (A.style.fontWeight = e.config.legend.fontWeight),
                (A.style.fontFamily = i || e.config.chart.fontFamily),
                Y.setAttrs(A, {
                  rel: o + 1,
                  i: o,
                  'data:default-text': encodeURIComponent(l),
                  'data:collapsed': h || c
                }),
                k.appendChild(u),
                k.appendChild(A)
              var C = new P(this.ctx)
              e.config.legend.showForZeroSeries ||
                (0 === C.getSeriesTotalByIndex(o) &&
                  C.seriesHaveSameValues(o) &&
                  !C.isSeriesNull(o) &&
                  -1 === e.globals.collapsedSeriesIndices.indexOf(o) &&
                  -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(o) &&
                  k.classList.add('apexcharts-hidden-zero-series')),
                e.config.legend.showForNullSeries ||
                  (C.isSeriesNull(o) &&
                    -1 === e.globals.collapsedSeriesIndices.indexOf(o) &&
                    -1 ===
                      e.globals.ancillaryCollapsedSeriesIndices.indexOf(o) &&
                    k.classList.add('apexcharts-hidden-null-series')),
                e.globals.dom.elLegendWrap.appendChild(k),
                e.globals.dom.elLegendWrap.classList.add(
                  'apexcharts-align-'.concat(e.config.legend.horizontalAlign)
                ),
                e.globals.dom.elLegendWrap.classList.add(
                  'position-' + e.config.legend.position
                ),
                k.classList.add('apexcharts-legend-series'),
                (k.style.margin = ''
                  .concat(e.config.legend.itemMargin.vertical, 'px ')
                  .concat(e.config.legend.itemMargin.horizontal, 'px')),
                (e.globals.dom.elLegendWrap.style.width = e.config.legend.width
                  ? e.config.legend.width + 'px'
                  : ''),
                (e.globals.dom.elLegendWrap.style.height = e.config.legend
                  .height
                  ? e.config.legend.height + 'px'
                  : ''),
                Y.setAttrs(k, { rel: o + 1, 'data:collapsed': h || c }),
                (h || c) && k.classList.add('apexcharts-inactive-legend'),
                e.config.legend.onItemClick.toggleDataSeries ||
                  k.classList.add('apexcharts-no-click')
            }
            'heatmap' !== e.config.chart.type &&
              !this.isBarsDistributed &&
              e.config.legend.onItemClick.toggleDataSeries &&
              e.globals.dom.elWrap.addEventListener(
                'click',
                this.onLegendClick,
                !0
              ),
              e.config.legend.onItemHover.highlightDataSeries &&
                (e.globals.dom.elWrap.addEventListener(
                  'mousemove',
                  this.onLegendHovered,
                  !0
                ),
                e.globals.dom.elWrap.addEventListener(
                  'mouseout',
                  this.onLegendHovered,
                  !0
                ))
          }
        },
        {
          key: 'setLegendWrapXY',
          value: function (t, e) {
            var i,
              a,
              s,
              r,
              n = this.w,
              o = n.globals.dom.baseEl.querySelector('.apexcharts-legend'),
              l = o.getBoundingClientRect(),
              h = 0
            'bottom' === n.config.legend.position
              ? (h += n.globals.svgHeight - l.height / 2)
              : 'top' === n.config.legend.position &&
                (h =
                  h +
                  (0 <
                  (s = (a = new xt(this.ctx)).dimHelpers.getTitleSubtitleCoords(
                    'title'
                  ).height)
                    ? s - 10
                    : 0) +
                  (0 <
                  (r = a.dimHelpers.getTitleSubtitleCoords('subtitle').height)
                    ? r - 10
                    : 0)),
              (o.style.position = 'absolute'),
              (i = 0 + t + n.config.legend.offsetX),
              (h = h + e + n.config.legend.offsetY),
              (o.style.left = i + 'px'),
              (o.style.top = h + 'px'),
              'bottom' === n.config.legend.position
                ? ((o.style.top = 'auto'),
                  (o.style.bottom = 5 - n.config.legend.offsetY + 'px'))
                : 'right' === n.config.legend.position &&
                  ((o.style.left = 'auto'),
                  (o.style.right = 25 + n.config.legend.offsetX + 'px')),
              ['width', 'height'].forEach(function (t) {
                o.style[t] &&
                  (o.style[t] = parseInt(n.config.legend[t], 10) + 'px')
              })
          }
        },
        {
          key: 'legendAlignHorizontal',
          value: function () {
            var t = this.w
            t.globals.dom.baseEl.querySelector(
              '.apexcharts-legend'
            ).style.right = 0
            var e = this.legendHelpers.getLegendBBox(),
              i = new xt(this.ctx),
              a = i.dimHelpers.getTitleSubtitleCoords('title'),
              s = i.dimHelpers.getTitleSubtitleCoords('subtitle'),
              r = 0
            'bottom' === t.config.legend.position
              ? (r = -e.clwh / 1.8)
              : 'top' === t.config.legend.position &&
                (r =
                  a.height +
                  s.height +
                  t.config.title.margin +
                  t.config.subtitle.margin -
                  10),
              this.setLegendWrapXY(20, r)
          }
        },
        {
          key: 'legendAlignVertical',
          value: function () {
            var t = this.w,
              e = this.legendHelpers.getLegendBBox(),
              i = 0
            'left' === t.config.legend.position && (i = 20),
              'right' === t.config.legend.position &&
                (i = t.globals.svgWidth - e.clww - 10),
              this.setLegendWrapXY(i, 20)
          }
        },
        {
          key: 'onLegendHovered',
          value: function (t) {
            var e,
              i = this.w,
              a =
                t.target.classList.contains('apexcharts-legend-text') ||
                t.target.classList.contains('apexcharts-legend-marker')
            'heatmap' === i.config.chart.type || this.isBarsDistributed
              ? a &&
                ((e = parseInt(t.target.getAttribute('rel'), 10) - 1),
                this.ctx.events.fireEvent('legendHover', [this.ctx, e, this.w]),
                new W(this.ctx).highlightRangeInSeries(t, t.target))
              : !t.target.classList.contains('apexcharts-inactive-legend') &&
                a &&
                new W(this.ctx).toggleSeriesOnHover(t, t.target)
          }
        },
        {
          key: 'onLegendClick',
          value: function (t) {
            var e, i, a, s
            ;(t.target.classList.contains('apexcharts-legend-text') ||
              t.target.classList.contains('apexcharts-legend-marker')) &&
              ((e = parseInt(t.target.getAttribute('rel'), 10) - 1),
              (i = 'true' === t.target.getAttribute('data:collapsed')),
              'function' ==
                typeof (a = this.w.config.chart.events.legendClick) &&
                a(this.ctx, e, this.w),
              this.ctx.events.fireEvent('legendClick', [this.ctx, e, this.w]),
              'function' == typeof (s = this.w.config.legend.markers.onClick) &&
                t.target.classList.contains('apexcharts-legend-marker') &&
                (s(this.ctx, e, this.w),
                this.ctx.events.fireEvent('legendMarkerClick', [
                  this.ctx,
                  e,
                  this.w
                ])),
              this.legendHelpers.toggleDataSeries(e, i))
          }
        }
      ]),
      ae),
    vt =
      (n(ie, [
        {
          key: 'createToolbar',
          value: function () {
            function t () {
              return document.createElement('div')
            }
            var s = this,
              r = this.w,
              e = t()
            if (
              (e.setAttribute('class', 'apexcharts-toolbar'),
              (e.style.top = r.config.chart.toolbar.offsetY + 'px'),
              (e.style.right = 3 - r.config.chart.toolbar.offsetX + 'px'),
              r.globals.dom.elWrap.appendChild(e),
              (this.elZoom = t()),
              (this.elZoomIn = t()),
              (this.elZoomOut = t()),
              (this.elPan = t()),
              (this.elSelection = t()),
              (this.elZoomReset = t()),
              (this.elMenuIcon = t()),
              (this.elMenu = t()),
              (this.elCustomIcons = []),
              (this.t = r.config.chart.toolbar.tools),
              Array.isArray(this.t.customIcons))
            )
              for (var i = 0; i < this.t.customIcons.length; i++)
                this.elCustomIcons.push(t())
            function a (t, e, i) {
              var a = t.toLowerCase()
              s.t[a] &&
                r.config.chart.zoom.enabled &&
                n.push({
                  el: e,
                  icon: 'string' == typeof s.t[a] ? s.t[a] : i,
                  title: s.localeValues[t],
                  class: 'apexcharts-'.concat(a, '-icon')
                })
            }
            var n = []
            function o (t) {
              s.t[t] &&
                r.config.chart[t].enabled &&
                n.push({
                  el: 'zoom' === t ? s.elZoom : s.elSelection,
                  icon:
                    'string' == typeof s.t[t]
                      ? s.t[t]
                      : 'zoom' === t
                      ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>'
                      : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
                  title:
                    s.localeValues[
                      'zoom' === t ? 'selectionZoom' : 'selection'
                    ],
                  class: r.globals.isTouchDevice
                    ? 'apexcharts-element-hidden'
                    : 'apexcharts-'.concat(t, '-icon')
                })
            }
            a(
              'zoomIn',
              this.elZoomIn,
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'
            ),
              a(
                'zoomOut',
                this.elZoomOut,
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'
              ),
              o('zoom'),
              o('selection'),
              this.t.pan &&
                r.config.chart.zoom.enabled &&
                n.push({
                  el: this.elPan,
                  icon:
                    'string' == typeof this.t.pan
                      ? this.t.pan
                      : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
                  title: this.localeValues.pan,
                  class: r.globals.isTouchDevice
                    ? 'apexcharts-element-hidden'
                    : 'apexcharts-pan-icon'
                }),
              a(
                'reset',
                this.elZoomReset,
                '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'
              ),
              this.t.download &&
                n.push({
                  el: this.elMenuIcon,
                  icon:
                    'string' == typeof this.t.download
                      ? this.t.download
                      : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
                  title: this.localeValues.menu,
                  class: 'apexcharts-menu-icon'
                })
            for (var l = 0; l < this.elCustomIcons.length; l++)
              n.push({
                el: this.elCustomIcons[l],
                icon: this.t.customIcons[l].icon,
                title: this.t.customIcons[l].title,
                index: this.t.customIcons[l].index,
                class:
                  'apexcharts-toolbar-custom-icon ' +
                  this.t.customIcons[l].class
              })
            n.forEach(function (t, e) {
              t.index && I.moveIndexInArray(n, e, t.index)
            })
            for (var h = 0; h < n.length; h++)
              Y.setAttrs(n[h].el, { class: n[h].class, title: n[h].title }),
                (n[h].el.innerHTML = n[h].icon),
                e.appendChild(n[h].el)
            this._createHamburgerMenu(e),
              r.globals.zoomEnabled
                ? this.elZoom.classList.add(this.selectedClass)
                : r.globals.panEnabled
                ? this.elPan.classList.add(this.selectedClass)
                : r.globals.selectionEnabled &&
                  this.elSelection.classList.add(this.selectedClass),
              this.addToolbarEventListeners()
          }
        },
        {
          key: '_createHamburgerMenu',
          value: function (t) {
            ;(this.elMenuItems = []),
              t.appendChild(this.elMenu),
              Y.setAttrs(this.elMenu, { class: 'apexcharts-menu' })
            var e = [
              { name: 'exportSVG', title: this.localeValues.exportToSVG },
              { name: 'exportPNG', title: this.localeValues.exportToPNG },
              { name: 'exportCSV', title: this.localeValues.exportToCSV }
            ]
            this.w.globals.allSeriesHasEqualX || e.splice(2, 1)
            for (var i = 0; i < e.length; i++)
              this.elMenuItems.push(document.createElement('div')),
                (this.elMenuItems[i].innerHTML = e[i].title),
                Y.setAttrs(this.elMenuItems[i], {
                  class: 'apexcharts-menu-item '.concat(e[i].name),
                  title: e[i].title
                }),
                this.elMenu.appendChild(this.elMenuItems[i])
          }
        },
        {
          key: 'addToolbarEventListeners',
          value: function () {
            var e = this
            this.elZoomReset.addEventListener(
              'click',
              this.handleZoomReset.bind(this)
            ),
              this.elSelection.addEventListener(
                'click',
                this.toggleZoomSelection.bind(this, 'selection')
              ),
              this.elZoom.addEventListener(
                'click',
                this.toggleZoomSelection.bind(this, 'zoom')
              ),
              this.elZoomIn.addEventListener(
                'click',
                this.handleZoomIn.bind(this)
              ),
              this.elZoomOut.addEventListener(
                'click',
                this.handleZoomOut.bind(this)
              ),
              this.elPan.addEventListener(
                'click',
                this.togglePanning.bind(this)
              ),
              this.elMenuIcon.addEventListener(
                'click',
                this.toggleMenu.bind(this)
              ),
              this.elMenuItems.forEach(function (t) {
                t.classList.contains('exportSVG')
                  ? t.addEventListener('click', e.handleDownload.bind(e, 'svg'))
                  : t.classList.contains('exportPNG')
                  ? t.addEventListener('click', e.handleDownload.bind(e, 'png'))
                  : t.classList.contains('exportCSV') &&
                    t.addEventListener('click', e.handleDownload.bind(e, 'csv'))
              })
            for (var t = 0; t < this.t.customIcons.length; t++)
              this.elCustomIcons[t].addEventListener(
                'click',
                this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w)
              )
          }
        },
        {
          key: 'toggleZoomSelection',
          value: function (a) {
            this.ctx.getSyncedCharts().forEach(function (t) {
              t.ctx.toolbar.toggleOtherControls()
              var e =
                  'selection' === a
                    ? t.ctx.toolbar.elSelection
                    : t.ctx.toolbar.elZoom,
                i = 'selection' === a ? 'selectionEnabled' : 'zoomEnabled'
              ;(t.w.globals[i] = !t.w.globals[i]),
                e.classList.contains(t.ctx.toolbar.selectedClass)
                  ? e.classList.remove(t.ctx.toolbar.selectedClass)
                  : e.classList.add(t.ctx.toolbar.selectedClass)
            })
          }
        },
        {
          key: 'getToolbarIconsReference',
          value: function () {
            var t = this.w
            this.elZoom ||
              (this.elZoom = t.globals.dom.baseEl.querySelector(
                '.apexcharts-zoom-icon'
              )),
              this.elPan ||
                (this.elPan = t.globals.dom.baseEl.querySelector(
                  '.apexcharts-pan-icon'
                )),
              this.elSelection ||
                (this.elSelection = t.globals.dom.baseEl.querySelector(
                  '.apexcharts-selection-icon'
                ))
          }
        },
        {
          key: 'enableZoomPanFromToolbar',
          value: function (t) {
            this.toggleOtherControls(),
              'pan' === t
                ? (this.w.globals.panEnabled = !0)
                : (this.w.globals.zoomEnabled = !0)
            var e = 'pan' === t ? this.elPan : this.elZoom,
              i = 'pan' === t ? this.elZoom : this.elPan
            e && e.classList.add(this.selectedClass),
              i && i.classList.remove(this.selectedClass)
          }
        },
        {
          key: 'togglePanning',
          value: function () {
            this.ctx.getSyncedCharts().forEach(function (t) {
              t.ctx.toolbar.toggleOtherControls(),
                (t.w.globals.panEnabled = !t.w.globals.panEnabled),
                t.ctx.toolbar.elPan.classList.contains(
                  t.ctx.toolbar.selectedClass
                )
                  ? t.ctx.toolbar.elPan.classList.remove(
                      t.ctx.toolbar.selectedClass
                    )
                  : t.ctx.toolbar.elPan.classList.add(
                      t.ctx.toolbar.selectedClass
                    )
            })
          }
        },
        {
          key: 'toggleOtherControls',
          value: function () {
            var e = this,
              t = this.w
            ;(t.globals.panEnabled = !1),
              (t.globals.zoomEnabled = !1),
              (t.globals.selectionEnabled = !1),
              this.getToolbarIconsReference(),
              [this.elPan, this.elSelection, this.elZoom].forEach(function (t) {
                t && t.classList.remove(e.selectedClass)
              })
          }
        },
        {
          key: 'handleZoomIn',
          value: function () {
            var t = this.w,
              e = (t.globals.minX + t.globals.maxX) / 2,
              i = (t.globals.minX + e) / 2,
              a = (t.globals.maxX + e) / 2,
              s = this._getNewMinXMaxX(i, a)
            t.globals.disableZoomIn || this.zoomUpdateOptions(s.minX, s.maxX)
          }
        },
        {
          key: 'handleZoomOut',
          value: function () {
            var t,
              e,
              i,
              a,
              s = this.w
            ;('datetime' === s.config.xaxis.type &&
              new Date(s.globals.minX).getUTCFullYear() < 1e3) ||
              ((t = (s.globals.minX + s.globals.maxX) / 2),
              (e = s.globals.minX - (t - s.globals.minX)),
              (i = s.globals.maxX - (t - s.globals.maxX)),
              (a = this._getNewMinXMaxX(e, i)),
              s.globals.disableZoomOut ||
                this.zoomUpdateOptions(a.minX, a.maxX))
          }
        },
        {
          key: '_getNewMinXMaxX',
          value: function (t, e) {
            var i = this.w.config.xaxis.convertedCatToNumeric
            return { minX: i ? Math.floor(t) : t, maxX: i ? Math.floor(e) : e }
          }
        },
        {
          key: 'zoomUpdateOptions',
          value: function (t, e) {
            var i,
              a,
              s,
              r,
              n = this.w
            void 0 !== t || void 0 !== e
              ? (n.config.xaxis.convertedCatToNumeric &&
                  (t < 1 && ((t = 1), (e = n.globals.dataPoints)),
                  e - t < 2)) ||
                ((i = { min: t, max: e }),
                (a = this.getBeforeZoomRange(i)) && (i = a.xaxis),
                (s = { xaxis: i }),
                (r = I.clone(n.globals.initialConfig.yaxis)),
                n.config.chart.zoom.autoScaleYaxis &&
                  (r = new it(this.ctx).autoScaleY(this.ctx, r, { xaxis: i })),
                n.config.chart.group || (s.yaxis = r),
                (this.w.globals.zoomed = !0),
                this.ctx.updateHelpers._updateOptions(
                  s,
                  !1,
                  this.w.config.chart.animations.dynamicAnimation.enabled
                ),
                this.zoomCallback(i, r))
              : this.handleZoomReset()
          }
        },
        {
          key: 'zoomCallback',
          value: function (t, e) {
            'function' == typeof this.ev.zoomed &&
              this.ev.zoomed(this.ctx, { xaxis: t, yaxis: e })
          }
        },
        {
          key: 'getBeforeZoomRange',
          value: function (t, e) {
            var i = null
            return (
              'function' == typeof this.ev.beforeZoom &&
                (i = this.ev.beforeZoom(this, { xaxis: t, yaxis: e })),
              i
            )
          }
        },
        {
          key: 'toggleMenu',
          value: function () {
            var t = this
            window.setTimeout(function () {
              t.elMenu.classList.contains('apexcharts-menu-open')
                ? t.elMenu.classList.remove('apexcharts-menu-open')
                : t.elMenu.classList.add('apexcharts-menu-open')
            }, 0)
          }
        },
        {
          key: 'handleDownload',
          value: function (t) {
            var e = this.w,
              i = new K(this.ctx)
            switch (t) {
              case 'svg':
                i.exportToSVG(this.ctx)
                break
              case 'png':
                i.exportToPng(this.ctx)
                break
              case 'csv':
                i.exportToCSV({
                  series: e.config.series,
                  columnDelimiter:
                    e.config.chart.toolbar.export.csv.columnDelimiter
                })
            }
          }
        },
        {
          key: 'handleZoomReset',
          value: function (t) {
            this.ctx.getSyncedCharts().forEach(function (t) {
              var e = t.w
              ;(e.globals.lastXAxis.min = void 0),
                (e.globals.lastXAxis.max = void 0),
                t.updateHelpers.revertDefaultAxisMinMax(),
                'function' == typeof e.config.chart.events.zoomed &&
                  t.ctx.toolbar.zoomCallback({
                    min: e.config.xaxis.min,
                    max: e.config.xaxis.max
                  }),
                (e.globals.zoomed = !1)
              var i = t.ctx.series.emptyCollapsedSeries(
                I.clone(e.globals.initialSeries)
              )
              t.updateHelpers._updateSeries(
                i,
                e.config.chart.animations.dynamicAnimation.enabled
              )
            })
          }
        },
        {
          key: 'destroy',
          value: function () {
            ;(this.elZoom = null),
              (this.elZoomIn = null),
              (this.elZoomOut = null),
              (this.elPan = null),
              (this.elSelection = null),
              (this.elZoomReset = null),
              (this.elMenuIcon = null)
          }
        }
      ]),
      ie),
    yt = (function () {
      l(a, vt)
      var i = c(a)
      function a (t) {
        var e
        return (
          r(this, a),
          ((e = i.call(this, t)).ctx = t),
          (e.w = t.w),
          (e.dragged = !1),
          (e.graphics = new Y(e.ctx)),
          (e.eventList = [
            'mousedown',
            'mouseleave',
            'mousemove',
            'touchstart',
            'touchmove',
            'mouseup',
            'touchend'
          ]),
          (e.clientX = 0),
          (e.clientY = 0),
          (e.startX = 0),
          (e.endX = 0),
          (e.dragX = 0),
          (e.startY = 0),
          (e.endY = 0),
          (e.dragY = 0),
          (e.moveDirection = 'none'),
          e
        )
      }
      return (
        n(a, [
          {
            key: 'init',
            value: function (t) {
              var e = this,
                i = t.xyRatios,
                a = this.w,
                s = this
              ;(this.xyRatios = i),
                (this.zoomRect = this.graphics.drawRect(0, 0, 0, 0)),
                (this.selectionRect = this.graphics.drawRect(0, 0, 0, 0)),
                (this.gridRect =
                  a.globals.dom.baseEl.querySelector('.apexcharts-grid')),
                this.zoomRect.node.classList.add('apexcharts-zoom-rect'),
                this.selectionRect.node.classList.add(
                  'apexcharts-selection-rect'
                ),
                a.globals.dom.elGraphical.add(this.zoomRect),
                a.globals.dom.elGraphical.add(this.selectionRect),
                'x' === a.config.chart.selection.type
                  ? (this.slDraggableRect = this.selectionRect
                      .draggable({
                        minX: 0,
                        minY: 0,
                        maxX: a.globals.gridWidth,
                        maxY: a.globals.gridHeight
                      })
                      .on(
                        'dragmove',
                        this.selectionDragging.bind(this, 'dragging')
                      ))
                  : 'y' === a.config.chart.selection.type
                  ? (this.slDraggableRect = this.selectionRect
                      .draggable({ minX: 0, maxX: a.globals.gridWidth })
                      .on(
                        'dragmove',
                        this.selectionDragging.bind(this, 'dragging')
                      ))
                  : (this.slDraggableRect = this.selectionRect
                      .draggable()
                      .on(
                        'dragmove',
                        this.selectionDragging.bind(this, 'dragging')
                      )),
                this.preselectedSelection(),
                (this.hoverArea = a.globals.dom.baseEl.querySelector(
                  a.globals.chartClass
                )),
                this.hoverArea.classList.add('apexcharts-zoomable'),
                this.eventList.forEach(function (t) {
                  e.hoverArea.addEventListener(t, s.svgMouseEvents.bind(s, i), {
                    capture: !1,
                    passive: !0
                  })
                })
            }
          },
          {
            key: 'destroy',
            value: function () {
              this.slDraggableRect &&
                (this.slDraggableRect.draggable(!1),
                this.slDraggableRect.off(),
                this.selectionRect.off()),
                (this.selectionRect = null),
                (this.zoomRect = null),
                (this.gridRect = null)
            }
          },
          {
            key: 'svgMouseEvents',
            value: function (t, e) {
              var i,
                a,
                s = this.w,
                r = this,
                n = this.ctx.toolbar,
                o = s.globals.zoomEnabled
                  ? s.config.chart.zoom.type
                  : s.config.chart.selection.type,
                l = s.config.chart.toolbar.autoSelected
              e.shiftKey
                ? ((this.shiftWasPressed = !0),
                  n.enableZoomPanFromToolbar('pan' === l ? 'zoom' : 'pan'))
                : this.shiftWasPressed &&
                  (n.enableZoomPanFromToolbar(l), (this.shiftWasPressed = !1)),
                e.target.classList.contains('apexcharts-selection-rect') ||
                  e.target.parentNode.classList.contains(
                    'apexcharts-toolbar'
                  ) ||
                  ((r.clientX =
                    'touchmove' === e.type || 'touchstart' === e.type
                      ? e.touches[0].clientX
                      : 'touchend' === e.type
                      ? e.changedTouches[0].clientX
                      : e.clientX),
                  (r.clientY =
                    'touchmove' === e.type || 'touchstart' === e.type
                      ? e.touches[0].clientY
                      : 'touchend' === e.type
                      ? e.changedTouches[0].clientY
                      : e.clientY),
                  'mousedown' === e.type &&
                    1 === e.which &&
                    ((i = r.gridRect.getBoundingClientRect()),
                    (r.startX = r.clientX - i.left),
                    (r.startY = r.clientY - i.top),
                    (r.dragged = !1),
                    (r.w.globals.mousedown = !0)),
                  (('mousemove' === e.type && 1 === e.which) ||
                    'touchmove' === e.type) &&
                    ((r.dragged = !0),
                    s.globals.panEnabled
                      ? ((s.globals.selection = null),
                        r.w.globals.mousedown &&
                          r.panDragging({
                            context: r,
                            zoomtype: o,
                            xyRatios: t
                          }))
                      : ((r.w.globals.mousedown && s.globals.zoomEnabled) ||
                          (r.w.globals.mousedown &&
                            s.globals.selectionEnabled)) &&
                        (r.selection = r.selectionDrawing({
                          context: r,
                          zoomtype: o
                        }))),
                  ('mouseup' !== e.type &&
                    'touchend' !== e.type &&
                    'mouseleave' !== e.type) ||
                    ((a = r.gridRect.getBoundingClientRect()),
                    r.w.globals.mousedown &&
                      ((r.endX = r.clientX - a.left),
                      (r.endY = r.clientY - a.top),
                      (r.dragX = Math.abs(r.endX - r.startX)),
                      (r.dragY = Math.abs(r.endY - r.startY)),
                      (s.globals.zoomEnabled || s.globals.selectionEnabled) &&
                        r.selectionDrawn({ context: r, zoomtype: o }),
                      s.globals.panEnabled &&
                        s.config.xaxis.convertedCatToNumeric &&
                        r.delayedPanScrolled()),
                    s.globals.zoomEnabled &&
                      r.hideSelectionRect(this.selectionRect),
                    (r.dragged = !1),
                    (r.w.globals.mousedown = !1)),
                  this.makeSelectionRectDraggable())
            }
          },
          {
            key: 'makeSelectionRectDraggable',
            value: function () {
              var t,
                e = this.w
              !this.selectionRect ||
                (0 <
                  (t = this.selectionRect.node.getBoundingClientRect()).width &&
                  0 < t.height &&
                  this.slDraggableRect
                    .selectize({
                      points: 'l, r',
                      pointSize: 8,
                      pointType: 'rect'
                    })
                    .resize({
                      constraint: {
                        minX: 0,
                        minY: 0,
                        maxX: e.globals.gridWidth,
                        maxY: e.globals.gridHeight
                      }
                    })
                    .on(
                      'resizing',
                      this.selectionDragging.bind(this, 'resizing')
                    ))
            }
          },
          {
            key: 'preselectedSelection',
            value: function () {
              var t,
                e,
                i = this.w,
                a = this.xyRatios
              i.globals.zoomEnabled ||
                (void 0 !== i.globals.selection && null !== i.globals.selection
                  ? this.drawSelectionRect(i.globals.selection)
                  : void 0 !== i.config.chart.selection.xaxis.min &&
                    void 0 !== i.config.chart.selection.xaxis.max &&
                    ((e = {
                      x: (t =
                        (i.config.chart.selection.xaxis.min - i.globals.minX) /
                        a.xRatio),
                      y: 0,
                      width:
                        i.globals.gridWidth -
                        (i.globals.maxX - i.config.chart.selection.xaxis.max) /
                          a.xRatio -
                        t,
                      height: i.globals.gridHeight,
                      translateX: 0,
                      translateY: 0,
                      selectionEnabled: !0
                    }),
                    this.drawSelectionRect(e),
                    this.makeSelectionRectDraggable(),
                    'function' == typeof i.config.chart.events.selection &&
                      i.config.chart.events.selection(this.ctx, {
                        xaxis: {
                          min: i.config.chart.selection.xaxis.min,
                          max: i.config.chart.selection.xaxis.max
                        },
                        yaxis: {}
                      })))
            }
          },
          {
            key: 'drawSelectionRect',
            value: function (t) {
              var e,
                i = t.x,
                a = t.y,
                s = t.width,
                r = t.height,
                n = t.translateX,
                o = void 0 === n ? 0 : n,
                l = t.translateY,
                h = void 0 === l ? 0 : l,
                c = this.w,
                d = this.zoomRect,
                g = this.selectionRect
              ;(!this.dragged && null === c.globals.selection) ||
                ((e = { transform: 'translate(' + o + ', ' + h + ')' }),
                c.globals.zoomEnabled &&
                  this.dragged &&
                  (s < 0 && (s = 1),
                  d.attr({
                    x: i,
                    y: a,
                    width: s,
                    height: r,
                    fill: c.config.chart.zoom.zoomedArea.fill.color,
                    'fill-opacity': c.config.chart.zoom.zoomedArea.fill.opacity,
                    stroke: c.config.chart.zoom.zoomedArea.stroke.color,
                    'stroke-width': c.config.chart.zoom.zoomedArea.stroke.width,
                    'stroke-opacity':
                      c.config.chart.zoom.zoomedArea.stroke.opacity
                  }),
                  Y.setAttrs(d.node, e)),
                c.globals.selectionEnabled &&
                  (g.attr({
                    x: i,
                    y: a,
                    width: 0 < s ? s : 0,
                    height: 0 < r ? r : 0,
                    fill: c.config.chart.selection.fill.color,
                    'fill-opacity': c.config.chart.selection.fill.opacity,
                    stroke: c.config.chart.selection.stroke.color,
                    'stroke-width': c.config.chart.selection.stroke.width,
                    'stroke-dasharray':
                      c.config.chart.selection.stroke.dashArray,
                    'stroke-opacity': c.config.chart.selection.stroke.opacity
                  }),
                  Y.setAttrs(g.node, e)))
            }
          },
          {
            key: 'hideSelectionRect',
            value: function (t) {
              t && t.attr({ x: 0, y: 0, width: 0, height: 0 })
            }
          },
          {
            key: 'selectionDrawing',
            value: function (t) {
              var e,
                i = t.context,
                a = t.zoomtype,
                s = this.w,
                r = i,
                n = this.gridRect.getBoundingClientRect(),
                o = r.startX - 1,
                l = r.startY,
                h = !1,
                c = !1,
                d = r.clientX - n.left - o,
                g = r.clientY - n.top - l
              return (
                Math.abs(d + o) > s.globals.gridWidth
                  ? (d = s.globals.gridWidth - o)
                  : r.clientX - n.left < 0 && (d = o),
                o > r.clientX - n.left && ((h = !0), (d = Math.abs(d))),
                l > r.clientY - n.top && ((c = !0), (g = Math.abs(g))),
                (e =
                  'x' === a
                    ? {
                        x: h ? o - d : o,
                        y: 0,
                        width: d,
                        height: s.globals.gridHeight
                      }
                    : 'y' === a
                    ? {
                        x: 0,
                        y: c ? l - g : l,
                        width: s.globals.gridWidth,
                        height: g
                      }
                    : {
                        x: h ? o - d : o,
                        y: c ? l - g : l,
                        width: d,
                        height: g
                      }),
                r.drawSelectionRect(e),
                r.selectionDragging('resizing'),
                e
              )
            }
          },
          {
            key: 'selectionDragging',
            value: function (t, e) {
              var n = this,
                o = this.w,
                l = this.xyRatios,
                h = this.selectionRect,
                i = 0
              'resizing' === t && (i = 30)
              function a (t) {
                return parseFloat(h.node.getAttribute(t))
              }
              var s = {
                x: a('x'),
                y: a('y'),
                width: a('width'),
                height: a('height')
              }
              ;(o.globals.selection = s),
                'function' == typeof o.config.chart.events.selection &&
                  o.globals.selectionEnabled &&
                  (clearTimeout(this.w.globals.selectionResizeTimer),
                  (this.w.globals.selectionResizeTimer = window.setTimeout(
                    function () {
                      var t = n.gridRect.getBoundingClientRect(),
                        e = h.node.getBoundingClientRect(),
                        i =
                          o.globals.xAxisScale.niceMin +
                          (e.left - t.left) * l.xRatio,
                        a =
                          o.globals.xAxisScale.niceMin +
                          (e.right - t.left) * l.xRatio,
                        s =
                          o.globals.yAxisScale[0].niceMin +
                          (t.bottom - e.bottom) * l.yRatio[0],
                        r =
                          o.globals.yAxisScale[0].niceMax -
                          (e.top - t.top) * l.yRatio[0]
                      o.config.chart.events.selection(n.ctx, {
                        xaxis: { min: i, max: a },
                        yaxis: { min: s, max: r }
                      })
                    },
                    i
                  )))
            }
          },
          {
            key: 'selectionDrawn',
            value: function (t) {
              var e,
                i,
                a = t.context,
                s = t.zoomtype,
                r = this.w,
                n = a,
                o = this.xyRatios,
                l = this.ctx.toolbar
              n.startX > n.endX &&
                ((e = n.startX), (n.startX = n.endX), (n.endX = e)),
                n.startY > n.endY &&
                  ((i = n.startY), (n.startY = n.endY), (n.endY = i))
              var h,
                c,
                d,
                g,
                u,
                p,
                f = r.globals.xAxisScale.niceMin + n.startX * o.xRatio,
                x = r.globals.xAxisScale.niceMin + n.endX * o.xRatio,
                b = [],
                m = []
              r.config.yaxis.forEach(function (t, e) {
                b.push(
                  r.globals.yAxisScale[e].niceMax - o.yRatio[e] * n.startY
                ),
                  m.push(r.globals.yAxisScale[e].niceMax - o.yRatio[e] * n.endY)
              }),
                n.dragged &&
                  (10 < n.dragX || 10 < n.dragY) &&
                  f !== x &&
                  (r.globals.zoomEnabled
                    ? ((c = I.clone(r.globals.initialConfig.yaxis)),
                      (h = I.clone(r.globals.initialConfig.xaxis)),
                      (r.globals.zoomed = !0),
                      r.globals.zoomed ||
                        ((r.globals.lastXAxis = I.clone(r.config.xaxis)),
                        (r.globals.lastYAxis = I.clone(r.config.yaxis))),
                      r.config.xaxis.convertedCatToNumeric &&
                        ((f = Math.floor(f)),
                        (x = Math.floor(x)),
                        f < 1 && ((f = 1), (x = r.globals.dataPoints)),
                        x - f < 2 && (x = f + 1)),
                      ('xy' !== s && 'x' !== s) || (h = { min: f, max: x }),
                      ('xy' !== s && 'y' !== s) ||
                        c.forEach(function (t, e) {
                          ;(c[e].min = m[e]), (c[e].max = b[e])
                        }),
                      r.config.chart.zoom.autoScaleYaxis &&
                        (c = new it(n.ctx).autoScaleY(n.ctx, c, { xaxis: h })),
                      !l ||
                        ((d = l.getBeforeZoomRange(h, c)) &&
                          ((h = d.xaxis ? d.xaxis : h),
                          (c = d.yaxis ? d.yaxe : c))),
                      (g = { xaxis: h }),
                      r.config.chart.group || (g.yaxis = c),
                      n.ctx.updateHelpers._updateOptions(
                        g,
                        !1,
                        n.w.config.chart.animations.dynamicAnimation.enabled
                      ),
                      'function' == typeof r.config.chart.events.zoomed &&
                        l.zoomCallback(h, c))
                    : r.globals.selectionEnabled &&
                      ((u = null),
                      (p = { min: f, max: x }),
                      ('xy' !== s && 'y' !== s) ||
                        (u = I.clone(r.config.yaxis)).forEach(function (t, e) {
                          ;(u[e].min = m[e]), (u[e].max = b[e])
                        }),
                      (r.globals.selection = n.selection),
                      'function' == typeof r.config.chart.events.selection &&
                        r.config.chart.events.selection(n.ctx, {
                          xaxis: p,
                          yaxis: u
                        })))
            }
          },
          {
            key: 'panDragging',
            value: function (t) {
              var e,
                i,
                a = t.context,
                s = this.w,
                r = a
              void 0 !== s.globals.lastClientPosition.x &&
                ((e = s.globals.lastClientPosition.x - r.clientX),
                (i = s.globals.lastClientPosition.y - r.clientY),
                Math.abs(e) > Math.abs(i) && 0 < e
                  ? (this.moveDirection = 'left')
                  : Math.abs(e) > Math.abs(i) && e < 0
                  ? (this.moveDirection = 'right')
                  : Math.abs(i) > Math.abs(e) && 0 < i
                  ? (this.moveDirection = 'up')
                  : Math.abs(i) > Math.abs(e) &&
                    i < 0 &&
                    (this.moveDirection = 'down')),
                (s.globals.lastClientPosition = { x: r.clientX, y: r.clientY })
              var n = s.globals.minX,
                o = s.globals.maxX
              s.config.xaxis.convertedCatToNumeric || r.panScrolled(n, o)
            }
          },
          {
            key: 'delayedPanScrolled',
            value: function () {
              var t = this.w,
                e = t.globals.minX,
                i = t.globals.maxX,
                a = (t.globals.maxX - t.globals.minX) / 2
              'left' === this.moveDirection
                ? ((e = t.globals.minX + a), (i = t.globals.maxX + a))
                : 'right' === this.moveDirection &&
                  ((e = t.globals.minX - a), (i = t.globals.maxX - a)),
                (e = Math.floor(e)),
                (i = Math.floor(i)),
                this.updateScrolledChart({ xaxis: { min: e, max: i } }, e, i)
            }
          },
          {
            key: 'panScrolled',
            value: function (t, e) {
              var i = this.w,
                a = this.xyRatios,
                s = I.clone(i.globals.initialConfig.yaxis)
              'left' === this.moveDirection
                ? ((t = i.globals.minX + (i.globals.gridWidth / 15) * a.xRatio),
                  (e = i.globals.maxX + (i.globals.gridWidth / 15) * a.xRatio))
                : 'right' === this.moveDirection &&
                  ((t = i.globals.minX - (i.globals.gridWidth / 15) * a.xRatio),
                  (e = i.globals.maxX - (i.globals.gridWidth / 15) * a.xRatio)),
                (t < i.globals.initialMinX || e > i.globals.initialMaxX) &&
                  ((t = i.globals.minX), (e = i.globals.maxX))
              var r = { min: t, max: e }
              i.config.chart.zoom.autoScaleYaxis &&
                (s = new it(this.ctx).autoScaleY(this.ctx, s, { xaxis: r }))
              var n = { xaxis: { min: t, max: e } }
              i.config.chart.group || (n.yaxis = s),
                this.updateScrolledChart(n, t, e)
            }
          },
          {
            key: 'updateScrolledChart',
            value: function (t, e, i) {
              var a = this.w
              this.ctx.updateHelpers._updateOptions(t, !1, !1),
                'function' == typeof a.config.chart.events.scrolled &&
                  a.config.chart.events.scrolled(this.ctx, {
                    xaxis: { min: e, max: i }
                  })
            }
          }
        ]),
        a
      )
    })(),
    wt =
      (n(ee, [
        {
          key: 'getNearestValues',
          value: function (t) {
            var e = t.hoverArea,
              i = t.elGrid,
              a = t.clientX,
              s = t.clientY,
              r = this.w,
              n = r.globals.gridWidth,
              o = n / (r.globals.dataPoints - 1),
              l = i.getBoundingClientRect(),
              h = this.hasBars()
            ;(!r.globals.comboCharts && !h) ||
              r.config.xaxis.convertedCatToNumeric ||
              (o = n / r.globals.dataPoints)
            var c = a - l.left - r.globals.barPadForNumericAxis,
              d = s - l.top
            c < 0 ||
            d < 0 ||
            c > r.globals.gridWidth ||
            d > r.globals.gridHeight
              ? (e.classList.remove('hovering-zoom'),
                e.classList.remove('hovering-pan'))
              : r.globals.zoomEnabled
              ? (e.classList.remove('hovering-pan'),
                e.classList.add('hovering-zoom'))
              : r.globals.panEnabled &&
                (e.classList.remove('hovering-zoom'),
                e.classList.add('hovering-pan'))
            var g = Math.round(c / o)
            h &&
              !r.config.xaxis.convertedCatToNumeric &&
              ((g = Math.ceil(c / o)), --g)
            for (
              var u, p, f = null, x = [], b = 0;
              b < r.globals.seriesXvalues.length;
              b++
            )
              x.push(
                [r.globals.seriesXvalues[b][0] - 1e-6].concat(
                  r.globals.seriesXvalues[b]
                )
              )
            return (
              (x = x.map(function (t) {
                return t.filter(function (t) {
                  return t
                })
              })),
              (u = r.globals.seriesYvalues.map(function (t) {
                return t.filter(function (t) {
                  return I.isNumber(t)
                })
              })),
              r.globals.isXNumeric &&
                ((f = (p = this.closestInMultiArray(c, d, x, u)).index),
                (g = p.j),
                null !== f &&
                  ((x = r.globals.seriesXvalues[f]),
                  (g = this.closestInArray(c, x).index))),
              (r.globals.capturedSeriesIndex = null === f ? -1 : f),
              (!g || g < 1) && (g = 0),
              {
                capturedSeries: f,
                j: (r.globals.capturedDataPointIndex = g),
                hoverX: c,
                hoverY: d
              }
            )
          }
        },
        {
          key: 'closestInMultiArray',
          value: function (n, o, l, h) {
            var t = this.w,
              e = 0,
              c = null,
              d = -1
            1 < t.globals.series.length
              ? (e = this.getFirstActiveXArray(l))
              : (c = 0)
            var i = h[e][0],
              a = l[e][0],
              s = Math.abs(n - a),
              r = Math.abs(o - i),
              g = r + s
            return (
              h.map(function (t, r) {
                t.map(function (t, e) {
                  var i = Math.abs(o - h[r][e]),
                    a = Math.abs(n - l[r][e]),
                    s = a + i
                  s < g && ((g = s), (c = r), (d = e))
                })
              }),
              { index: c, j: d }
            )
          }
        },
        {
          key: 'getFirstActiveXArray',
          value: function (t) {
            for (
              var e = 0,
                i = new P(this.ctx),
                a = t.map(function (t, e) {
                  return 0 < t.length ? e : -1
                }),
                s = 0;
              s < a.length;
              s++
            ) {
              var r = i.getSeriesTotalByIndex(s)
              if (-1 !== a[s] && 0 !== r) {
                e = a[s]
                break
              }
            }
            return e
          }
        },
        {
          key: 'closestInArray',
          value: function (t, e) {
            for (
              var i = e[0], a = null, s = Math.abs(t - i), r = 0;
              r < e.length;
              r++
            ) {
              var n = Math.abs(t - e[r])
              n < s && ((s = n), (a = r))
            }
            return { index: a }
          }
        },
        {
          key: 'isXoverlap',
          value: function (t) {
            var e = [],
              i = this.w.globals.seriesX.filter(function (t) {
                return void 0 !== t[0]
              })
            if (0 < i.length)
              for (var a = 0; a < i.length - 1; a++)
                void 0 !== i[a][t] &&
                  void 0 !== i[a + 1][t] &&
                  i[a][t] !== i[a + 1][t] &&
                  e.push('unEqual')
            return 0 === e.length
          }
        },
        {
          key: 'isInitialSeriesSameLen',
          value: function () {
            for (
              var t = !0, e = this.w.globals.initialSeries, i = 0;
              i < e.length - 1;
              i++
            )
              if (e[i].data.length !== e[i + 1].data.length) {
                t = !1
                break
              }
            return t
          }
        },
        {
          key: 'getBarsHeight',
          value: function (t) {
            return A(t).reduce(function (t, e) {
              return t + e.getBBox().height
            }, 0)
          }
        },
        {
          key: 'getElMarkers',
          value: function () {
            return this.w.globals.dom.baseEl.querySelectorAll(
              ' .apexcharts-series-markers'
            )
          }
        },
        {
          key: 'getAllMarkers',
          value: function () {
            var t = this.w.globals.dom.baseEl.querySelectorAll(
              '.apexcharts-series-markers-wrap'
            )
            ;(t = A(t)).sort(function (t, e) {
              return Number(e.getAttribute('data:realIndex')) <
                Number(t.getAttribute('data:realIndex'))
                ? 0
                : -1
            })
            var e = []
            return (
              t.forEach(function (t) {
                e.push(t.querySelector('.apexcharts-marker'))
              }),
              e
            )
          }
        },
        {
          key: 'hasMarkers',
          value: function () {
            return 0 < this.getElMarkers().length
          }
        },
        {
          key: 'getElBars',
          value: function () {
            return this.w.globals.dom.baseEl.querySelectorAll(
              '.apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-rangebar-series'
            )
          }
        },
        {
          key: 'hasBars',
          value: function () {
            return 0 < this.getElBars().length
          }
        },
        {
          key: 'getHoverMarkerSize',
          value: function (t) {
            var e = this.w,
              i = e.config.markers.hover.size
            return (
              void 0 === i &&
                (i =
                  e.globals.markers.size[t] +
                  e.config.markers.hover.sizeOffset),
              i
            )
          }
        },
        {
          key: 'toggleAllTooltipSeriesGroups',
          value: function (t) {
            var e = this.w,
              i = this.ttCtx
            0 === i.allTooltipSeriesGroups.length &&
              (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-tooltip-series-group'
              ))
            for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++)
              'enable' === t
                ? (a[s].classList.add('apexcharts-active'),
                  (a[s].style.display = e.config.tooltip.items.display))
                : (a[s].classList.remove('apexcharts-active'),
                  (a[s].style.display = 'none'))
          }
        }
      ]),
      ee),
    kt =
      (n(te, [
        {
          key: 'drawSeriesTexts',
          value: function (t) {
            var e = t.shared,
              i = void 0 === e || e,
              a = t.ttItems,
              s = t.i,
              r = void 0 === s ? 0 : s,
              n = t.j,
              o = void 0 === n ? null : n,
              l = t.y1,
              h = t.y2,
              c = this.w
            void 0 !== c.config.tooltip.custom
              ? this.handleCustomTooltip({ i: r, j: o, y1: l, y2: h, w: c })
              : this.toggleActiveInactiveSeries(i)
            var d = this.getValuesToPrint({ i: r, j: o })
            this.printLabels({ i: r, j: o, values: d, ttItems: a, shared: i })
            var g = this.ttCtx.getElTooltip()
            ;(this.ttCtx.tooltipRect.ttWidth = g.getBoundingClientRect().width),
              (this.ttCtx.tooltipRect.ttHeight =
                g.getBoundingClientRect().height)
          }
        },
        {
          key: 'printLabels',
          value: function (t) {
            var r,
              n = this,
              o = t.i,
              l = t.j,
              e = t.values,
              h = t.ttItems,
              c = t.shared,
              d = this.w,
              g = e.xVal,
              u = e.zVal,
              p = e.xAxisTTVal,
              f = '',
              x = d.globals.colors[o]
            null !== l &&
              d.config.plotOptions.bar.distributed &&
              (x = d.globals.colors[l])
            for (
              var i = 0, a = d.globals.series.length - 1;
              i < d.globals.series.length;
              i++, a--
            )
              !(function (t, e) {
                var i = n.getFormatters(o)
                f = n.getSeriesName({
                  fn: i.yLbTitleFormatter,
                  index: o,
                  seriesIndex: o,
                  j: l
                })
                var a,
                  s = d.config.tooltip.inverseOrder ? e : t
                d.globals.axisCharts &&
                  ((a = function (t) {
                    return i.yLbFormatter(d.globals.series[t][l], {
                      series: d.globals.series,
                      seriesIndex: t,
                      dataPointIndex: l,
                      w: d
                    })
                  }),
                  (r = c
                    ? ((i = n.getFormatters(s)),
                      (f = n.getSeriesName({
                        fn: i.yLbTitleFormatter,
                        index: s,
                        seriesIndex: o,
                        j: l
                      })),
                      (x = d.globals.colors[s]),
                      a(s))
                    : a(o))),
                  null === l && (r = i.yLbFormatter(d.globals.series[o], d)),
                  n.DOMHandling({
                    i: o,
                    t: s,
                    j: l,
                    ttItems: h,
                    values: { val: r, xVal: g, xAxisTTVal: p, zVal: u },
                    seriesName: f,
                    shared: c,
                    pColor: x
                  })
              })(i, a)
          }
        },
        {
          key: 'getFormatters',
          value: function (t) {
            var e,
              i = this.w,
              a = i.globals.yLabelFormatters[t]
            return (
              void 0 !== i.globals.ttVal
                ? Array.isArray(i.globals.ttVal)
                  ? ((a = i.globals.ttVal[t] && i.globals.ttVal[t].formatter),
                    (e =
                      i.globals.ttVal[t] &&
                      i.globals.ttVal[t].title &&
                      i.globals.ttVal[t].title.formatter))
                  : ((a = i.globals.ttVal.formatter),
                    'function' == typeof i.globals.ttVal.title.formatter &&
                      (e = i.globals.ttVal.title.formatter))
                : (e = i.config.tooltip.y.title.formatter),
              'function' != typeof a &&
                (a = i.globals.yLabelFormatters[0]
                  ? i.globals.yLabelFormatters[0]
                  : function (t) {
                      return t
                    }),
              'function' != typeof e &&
                (e = function (t) {
                  return t
                }),
              { yLbFormatter: a, yLbTitleFormatter: e }
            )
          }
        },
        {
          key: 'getSeriesName',
          value: function (t) {
            var e = t.fn,
              i = t.index,
              a = t.seriesIndex,
              s = t.j,
              r = this.w
            return e(String(r.globals.seriesNames[i]), {
              series: r.globals.series,
              seriesIndex: a,
              dataPointIndex: s,
              w: r
            })
          }
        },
        {
          key: 'DOMHandling',
          value: function (t) {
            t.i
            var e = t.t,
              i = (t.j, t.ttItems),
              a = t.values,
              s = t.seriesName,
              r = t.shared,
              n = t.pColor,
              o = this.w,
              l = this.ttCtx,
              h = a.val,
              c = a.xVal,
              d = a.xAxisTTVal,
              g = a.zVal,
              u = null,
              u = i[e].children
            o.config.tooltip.fillSeriesColor &&
              ((i[e].style.backgroundColor = n), (u[0].style.display = 'none')),
              l.showTooltipTitle &&
                (null === l.tooltipTitle &&
                  (l.tooltipTitle = o.globals.dom.baseEl.querySelector(
                    '.apexcharts-tooltip-title'
                  )),
                (l.tooltipTitle.innerHTML = c)),
              l.blxaxisTooltip &&
                (l.xaxisTooltipText.innerHTML = '' !== d ? d : c)
            var p = i[e].querySelector('.apexcharts-tooltip-text-label')
            p && (p.innerHTML = s || '')
            var f = i[e].querySelector('.apexcharts-tooltip-text-value')
            f && (f.innerHTML = void 0 !== h ? h : ''),
              u[0] &&
                u[0].classList.contains('apexcharts-tooltip-marker') &&
                (o.config.tooltip.marker.fillColors &&
                  Array.isArray(o.config.tooltip.marker.fillColors) &&
                  (n = o.config.tooltip.marker.fillColors[e]),
                (u[0].style.backgroundColor = n)),
              o.config.tooltip.marker.show || (u[0].style.display = 'none'),
              null !== g &&
                ((i[e].querySelector(
                  '.apexcharts-tooltip-text-z-label'
                ).innerHTML = o.config.tooltip.z.title),
                (i[e].querySelector(
                  '.apexcharts-tooltip-text-z-value'
                ).innerHTML = void 0 !== g ? g : '')),
              r &&
                u[0] &&
                (null == h || -1 < o.globals.collapsedSeriesIndices.indexOf(e)
                  ? (u[0].parentNode.style.display = 'none')
                  : (u[0].parentNode.style.display =
                      o.config.tooltip.items.display))
          }
        },
        {
          key: 'toggleActiveInactiveSeries',
          value: function (t) {
            var e,
              i = this.w
            t
              ? this.tooltipUtil.toggleAllTooltipSeriesGroups('enable')
              : (this.tooltipUtil.toggleAllTooltipSeriesGroups('disable'),
                (e = i.globals.dom.baseEl.querySelector(
                  '.apexcharts-tooltip-series-group'
                )) &&
                  (e.classList.add('apexcharts-active'),
                  (e.style.display = i.config.tooltip.items.display)))
          }
        },
        {
          key: 'getValuesToPrint',
          value: function (t) {
            var e = t.i,
              i = t.j,
              a = this.w,
              s = this.ctx.series.filteredSeriesX(),
              r = '',
              n = '',
              o = null,
              l = null,
              h = {
                series: a.globals.series,
                seriesIndex: e,
                dataPointIndex: i,
                w: a
              },
              c = a.globals.ttZFormatter
            null === i
              ? (l = a.globals.series[e])
              : a.globals.isXNumeric
              ? ((r = s[e][i]),
                0 === s[e].length &&
                  (r = s[this.tooltipUtil.getFirstActiveXArray(s)][i]))
              : (r = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : '')
            var d = r
            return (
              a.globals.isXNumeric && 'datetime' === a.config.xaxis.type
                ? (r = new J(this.ctx).xLabelFormat(
                    a.globals.ttKeyFormatter,
                    d,
                    d
                  ))
                : a.globals.isBarHorizontal ||
                  (r = a.globals.xLabelFormatter(d, h)),
              void 0 !== a.config.tooltip.x.formatter &&
                (r = a.globals.ttKeyFormatter(d, h)),
              0 < a.globals.seriesZ.length &&
                0 < a.globals.seriesZ[0].length &&
                (o = c(a.globals.seriesZ[e][i], a)),
              (n =
                'function' == typeof a.config.xaxis.tooltip.formatter
                  ? a.globals.xaxisTooltipFormatter(d, h)
                  : r),
              {
                val: Array.isArray(l) ? l.join(' ') : l,
                xVal: Array.isArray(r) ? r.join(' ') : r,
                xAxisTTVal: Array.isArray(n) ? n.join(' ') : n,
                zVal: o
              }
            )
          }
        },
        {
          key: 'handleCustomTooltip',
          value: function (t) {
            var e = t.i,
              i = t.j,
              a = t.y1,
              s = t.y2,
              r = t.w,
              n = this.ttCtx.getElTooltip(),
              o = r.config.tooltip.custom
            Array.isArray(o) && o[e] && (o = o[e]),
              (n.innerHTML = o({
                ctx: this.ctx,
                series: r.globals.series,
                seriesIndex: e,
                dataPointIndex: i,
                y1: a,
                y2: s,
                w: r
              }))
          }
        }
      ]),
      te),
    At =
      (n(Kt, [
        {
          key: 'moveXCrosshairs',
          value: function (t) {
            var e,
              i =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              a = this.ttCtx,
              s = this.w,
              r = a.getElXCrosshairs(),
              n = t - a.xcrosshairsWidth / 2,
              o = s.globals.labels.slice().length
            null !== i && (n = (s.globals.gridWidth / o) * i),
              null !== r &&
                (r.setAttribute('x', n),
                r.setAttribute('x1', n),
                r.setAttribute('x2', n),
                r.setAttribute('y2', s.globals.gridHeight),
                r.classList.add('apexcharts-active')),
              n < 0 && (n = 0),
              n > s.globals.gridWidth && (n = s.globals.gridWidth),
              a.blxaxisTooltip &&
                ((e = n),
                ('tickWidth' !== s.config.xaxis.crosshairs.width &&
                  'barWidth' !== s.config.xaxis.crosshairs.width) ||
                  (e = n + a.xcrosshairsWidth / 2),
                this.moveXAxisTooltip(e))
          }
        },
        {
          key: 'moveYCrosshairs',
          value: function (t) {
            var e = this.ttCtx
            null !== e.ycrosshairs &&
              Y.setAttrs(e.ycrosshairs, { y1: t, y2: t }),
              null !== e.ycrosshairsHidden &&
                Y.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t })
          }
        },
        {
          key: 'moveXAxisTooltip',
          value: function (t) {
            var e,
              i,
              a = this.w,
              s = this.ttCtx
            null !== s.xaxisTooltip &&
              (s.xaxisTooltip.classList.add('apexcharts-active'),
              (e =
                s.xaxisOffY +
                a.config.xaxis.tooltip.offsetY +
                a.globals.translateY +
                1 +
                a.config.xaxis.offsetY),
              (t -= s.xaxisTooltip.getBoundingClientRect().width / 2),
              isNaN(t) ||
                ((t += a.globals.translateX),
                (i = new Y(this.ctx).getTextRects(
                  s.xaxisTooltipText.innerHTML
                )),
                (s.xaxisTooltipText.style.minWidth = i.width + 'px'),
                (s.xaxisTooltip.style.left = t + 'px'),
                (s.xaxisTooltip.style.top = e + 'px')))
          }
        },
        {
          key: 'moveYAxisTooltip',
          value: function (t) {
            var e = this.w,
              i = this.ttCtx
            null === i.yaxisTTEls &&
              (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(
                '.apexcharts-yaxistooltip'
              ))
            var a = parseInt(i.ycrosshairsHidden.getAttribute('y1'), 10),
              s = e.globals.translateY + a,
              r = i.yaxisTTEls[t].getBoundingClientRect().height,
              n = e.globals.translateYAxisX[t] - 2
            e.config.yaxis[t].opposite && (n -= 26),
              (s -= r / 2),
              -1 === e.globals.ignoreYAxisIndexes.indexOf(t)
                ? (i.yaxisTTEls[t].classList.add('apexcharts-active'),
                  (i.yaxisTTEls[t].style.top = s + 'px'),
                  (i.yaxisTTEls[t].style.left =
                    n + e.config.yaxis[t].tooltip.offsetX + 'px'))
                : i.yaxisTTEls[t].classList.remove('apexcharts-active')
          }
        },
        {
          key: 'moveTooltip',
          value: function (t, e) {
            var i,
              a,
              s =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              r = this.w,
              n = this.ttCtx,
              o = n.getElTooltip(),
              l = n.tooltipRect,
              h = null !== s ? parseFloat(s) : 1,
              c = parseFloat(t) + h + 5,
              d = parseFloat(e) + h / 2
            c > r.globals.gridWidth / 2 && (c = c - l.ttWidth - h - 15),
              c > r.globals.gridWidth - l.ttWidth - 10 &&
                (c = r.globals.gridWidth - l.ttWidth),
              c < -20 && (c = -20),
              r.config.tooltip.followCursor &&
                ((i = n.getElGrid().getBoundingClientRect()),
                (d =
                  n.e.clientY + r.globals.translateY - i.top - l.ttHeight / 2)),
              r.config.tooltip.followCursor ||
                ((c = (a = this.positionChecks(l, c, d)).x), (d = a.y)),
              isNaN(c) ||
                ((c += r.globals.translateX),
                (o.style.left = c + 'px'),
                (o.style.top = d + 'px'))
          }
        },
        {
          key: 'positionChecks',
          value: function (t, e, i) {
            var a = this.w
            return (
              t.ttHeight / 2 + i > a.globals.gridHeight &&
                (i = a.globals.gridHeight - t.ttHeight + a.globals.translateY),
              i < 0 && (i = 0),
              { x: e, y: i }
            )
          }
        },
        {
          key: 'moveMarkers',
          value: function (t, e) {
            var i = this.w,
              a = this.ttCtx
            if (0 < i.globals.markers.size[t])
              for (
                var s = i.globals.dom.baseEl.querySelectorAll(
                    " .apexcharts-series[data\\:realIndex='".concat(
                      t,
                      "'] .apexcharts-marker"
                    )
                  ),
                  r = 0;
                r < s.length;
                r++
              )
                parseInt(s[r].getAttribute('rel'), 10) === e &&
                  (a.marker.resetPointsSize(),
                  a.marker.enlargeCurrentPoint(e, s[r]))
            else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
          }
        },
        {
          key: 'moveDynamicPointOnHover',
          value: function (t, e) {
            var i,
              a,
              s,
              r = this.w,
              n = this.ttCtx,
              o = r.globals.pointsArray,
              l = n.tooltipUtil.getHoverMarkerSize(e),
              h = r.config.series[e].type
            ;(h && ('column' === h || 'candlestick' === h)) ||
              ((i = o[e][t][0]),
              (a = o[e][t][1] ? o[e][t][1] : 0),
              (s = r.globals.dom.baseEl.querySelector(
                ".apexcharts-series[data\\:realIndex='".concat(
                  e,
                  "'] .apexcharts-series-markers circle"
                )
              )) &&
                a < r.globals.gridHeight &&
                0 < a &&
                (s.setAttribute('r', l),
                s.setAttribute('cx', i),
                s.setAttribute('cy', a)),
              this.moveXCrosshairs(i),
              n.fixedTooltip || this.moveTooltip(i, a, l))
          }
        },
        {
          key: 'moveDynamicPointsOnHover',
          value: function (t) {
            var e = this.ttCtx,
              i = e.w,
              a = 0,
              s = 0,
              r = i.globals.pointsArray,
              n = new W(this.ctx).getActiveConfigSeriesIndex(!0),
              o = e.tooltipUtil.getHoverMarkerSize(n)
            r[n] && ((a = r[n][t][0]), (s = r[n][t][1]))
            var l,
              h = e.tooltipUtil.getAllMarkers()
            if (null !== h)
              for (var c = 0; c < i.globals.series.length; c++) {
                var d,
                  g = r[c]
                i.globals.comboCharts && void 0 === g && h.splice(c, 0, null),
                  g &&
                    g.length &&
                    ((d = r[c][t][1]),
                    h[c].setAttribute('cx', a),
                    null !== d && !isNaN(d) && d < i.globals.gridHeight && 0 < d
                      ? (h[c] && h[c].setAttribute('r', o),
                        h[c] && h[c].setAttribute('cy', d))
                      : h[c] && h[c].setAttribute('r', 0))
              }
            this.moveXCrosshairs(a),
              e.fixedTooltip ||
                ((l = s || i.globals.gridHeight), this.moveTooltip(a, l, o))
          }
        },
        {
          key: 'moveStickyTooltipOverBars',
          value: function (t) {
            var e = this.w,
              i = this.ttCtx,
              a = e.globals.columnSeries
                ? e.globals.columnSeries.length
                : e.globals.series.length,
              s =
                2 <= a && a % 2 == 0
                  ? Math.floor(a / 2)
                  : Math.floor(a / 2) + 1,
              r = e.globals.dom.baseEl.querySelector(
                ".apexcharts-bar-series .apexcharts-series[rel='"
                  .concat(s, "'] path[j='")
                  .concat(
                    t,
                    "'], .apexcharts-candlestick-series .apexcharts-series[rel='"
                  )
                  .concat(s, "'] path[j='")
                  .concat(
                    t,
                    "'], .apexcharts-rangebar-series .apexcharts-series[rel='"
                  )
                  .concat(s, "'] path[j='")
                  .concat(t, "']")
              ),
              n = r ? parseFloat(r.getAttribute('cx')) : 0,
              o = r ? parseFloat(r.getAttribute('barWidth')) : 0
            e.globals.isXNumeric
              ? (n -= a % 2 != 0 ? o / 2 : 0)
              : ((n =
                  i.xAxisTicksPositions[t - 1] + i.dataPointsDividedWidth / 2),
                isNaN(n) &&
                  (n = i.xAxisTicksPositions[t] - i.dataPointsDividedWidth / 2))
            var l,
              h = i.getElGrid().getBoundingClientRect(),
              c = i.e.clientY - h.top - i.tooltipRect.ttHeight / 2
            this.moveXCrosshairs(n),
              i.fixedTooltip ||
                ((l = c || e.globals.gridHeight), this.moveTooltip(n, l))
          }
        }
      ]),
      Kt),
    St =
      (n(Qt, [
        {
          key: 'drawDynamicPoints',
          value: function () {
            var t = this.w,
              e = new Y(this.ctx),
              i = new D(this.ctx),
              a = t.globals.dom.baseEl.querySelectorAll('.apexcharts-series')
            ;(a = A(a)).sort(function (t, e) {
              return (
                parseFloat(t.getAttribute('data:realIndex')) -
                parseFloat(e.getAttribute('data:realIndex'))
              )
            })
            for (var s = 0; s < a.length; s++) {
              var r,
                n,
                o,
                l,
                h = a[s].querySelector('.apexcharts-series-markers-wrap')
              null !== h &&
                ((r = void 0),
                (n = 'apexcharts-marker w'.concat(
                  (Math.random() + 1).toString(36).substring(4)
                )),
                ('line' !== t.config.chart.type &&
                  'area' !== t.config.chart.type) ||
                  t.globals.comboCharts ||
                  t.config.tooltip.intersect ||
                  (n += ' no-pointer-events'),
                (o = i.getMarkerConfig(n, s)),
                (r = e.drawMarker(0, 0, o)).node.setAttribute(
                  'default-marker-size',
                  0
                ),
                (l = document.createElementNS(
                  t.globals.SVGNS,
                  'g'
                )).classList.add('apexcharts-series-markers'),
                l.appendChild(r.node),
                h.appendChild(l))
            }
          }
        },
        {
          key: 'enlargeCurrentPoint',
          value: function (t, e) {
            var i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              a =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null,
              s = this.w
            'bubble' !== s.config.chart.type && this.newPointSize(t, e)
            var r,
              n = e.getAttribute('cx'),
              o = e.getAttribute('cy')
            null !== i && null !== a && ((n = i), (o = a)),
              this.tooltipPosition.moveXCrosshairs(n),
              this.fixedTooltip ||
                ('radar' === s.config.chart.type &&
                  ((r = this.ttCtx.getElGrid().getBoundingClientRect()),
                  (n = this.ttCtx.e.clientX - r.left)),
                this.tooltipPosition.moveTooltip(
                  n,
                  o,
                  s.config.markers.hover.size
                ))
          }
        },
        {
          key: 'enlargePoints',
          value: function (t) {
            for (
              var e = this.w,
                i = this.ttCtx,
                a = t,
                s = e.globals.dom.baseEl.querySelectorAll(
                  '.apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker'
                ),
                r = e.config.markers.hover.size,
                n = 0;
              n < s.length;
              n++
            ) {
              var o,
                l,
                h = s[n].getAttribute('rel'),
                c = s[n].getAttribute('index')
              void 0 === r &&
                (r =
                  e.globals.markers.size[c] +
                  e.config.markers.hover.sizeOffset),
                a === parseInt(h, 10)
                  ? (this.newPointSize(a, s[n]),
                    (o = s[n].getAttribute('cx')),
                    (l = s[n].getAttribute('cy')),
                    this.tooltipPosition.moveXCrosshairs(o),
                    i.fixedTooltip || this.tooltipPosition.moveTooltip(o, l, r))
                  : this.oldPointSize(s[n])
            }
          }
        },
        {
          key: 'newPointSize',
          value: function (t, e) {
            var i,
              a = this.w,
              s = a.config.markers.hover.size,
              r = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild
            '0' !== r.getAttribute('default-marker-size') &&
              ((i = parseInt(r.getAttribute('index'), 10)),
              void 0 === s &&
                (s =
                  a.globals.markers.size[i] +
                  a.config.markers.hover.sizeOffset),
              r.setAttribute('r', s))
          }
        },
        {
          key: 'oldPointSize',
          value: function (t) {
            var e = parseFloat(t.getAttribute('default-marker-size'))
            t.setAttribute('r', e)
          }
        },
        {
          key: 'resetPointsSize',
          value: function () {
            for (
              var t = this.w.globals.dom.baseEl.querySelectorAll(
                  '.apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker'
                ),
                e = 0;
              e < t.length;
              e++
            ) {
              var i = parseFloat(t[e].getAttribute('default-marker-size'))
              I.isNumber(i)
                ? t[e].setAttribute('r', i)
                : t[e].setAttribute('r', 0)
            }
          }
        }
      ]),
      Qt),
    Ct =
      (n(Jt, [
        {
          key: 'getAttr',
          value: function (t, e) {
            return parseFloat(t.target.getAttribute(e))
          }
        },
        {
          key: 'handleHeatTooltip',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n,
              o,
              l = t.e,
              h = t.opt,
              c = t.x,
              d = t.y,
              g = this.ttCtx,
              u = this.w
            return (
              l.target.classList.contains('apexcharts-heatmap-rect') &&
                ((e = this.getAttr(l, 'i')),
                (i = this.getAttr(l, 'j')),
                (a = this.getAttr(l, 'cx')),
                (s = this.getAttr(l, 'cy')),
                (r = this.getAttr(l, 'width')),
                (n = this.getAttr(l, 'height')),
                g.tooltipLabels.drawSeriesTexts({
                  ttItems: h.ttItems,
                  i: e,
                  j: i,
                  shared: !1
                }),
                (u.globals.capturedSeriesIndex = e),
                (u.globals.capturedDataPointIndex = i),
                (c = a + g.tooltipRect.ttWidth / 2 + r),
                (d = s + g.tooltipRect.ttHeight / 2 - n / 2),
                g.tooltipPosition.moveXCrosshairs(a + r / 2),
                c > u.globals.gridWidth / 2 &&
                  (c = a - g.tooltipRect.ttWidth / 2 + r),
                g.w.config.tooltip.followCursor &&
                  ((o = g.getElGrid().getBoundingClientRect()),
                  (d = g.e.clientY - o.top + u.globals.translateY / 2 - 10))),
              { x: c, y: d }
            )
          }
        },
        {
          key: 'handleMarkerTooltip',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n,
              o,
              l = t.e,
              h = t.opt,
              c = t.x,
              d = t.y,
              g = this.w,
              u = this.ttCtx
            return (
              l.target.classList.contains('apexcharts-marker') &&
                ((e = parseInt(h.paths.getAttribute('cx'), 10)),
                (i = parseInt(h.paths.getAttribute('cy'), 10)),
                (a = parseFloat(h.paths.getAttribute('val'))),
                (r = parseInt(h.paths.getAttribute('rel'), 10)),
                (n =
                  parseInt(
                    h.paths.parentNode.parentNode.parentNode.getAttribute(
                      'rel'
                    ),
                    10
                  ) - 1),
                u.intersect &&
                  (s = I.findAncestor(h.paths, 'apexcharts-series')) &&
                  (n = parseInt(s.getAttribute('data:realIndex'), 10)),
                u.tooltipLabels.drawSeriesTexts({
                  ttItems: h.ttItems,
                  i: n,
                  j: r,
                  shared: !u.showOnIntersect && g.config.tooltip.shared
                }),
                'mouseup' === l.type && u.markerClick(l, n, r),
                (g.globals.capturedSeriesIndex = n),
                (g.globals.capturedDataPointIndex = r),
                (c = e),
                (d = i + g.globals.translateY - 1.4 * u.tooltipRect.ttHeight),
                u.w.config.tooltip.followCursor &&
                  ((o = u.getElGrid().getBoundingClientRect()),
                  (d = u.e.clientY + g.globals.translateY - o.top)),
                a < 0 && (d = i),
                u.marker.enlargeCurrentPoint(r, h.paths, c, d)),
              { x: c, y: d }
            )
          }
        },
        {
          key: 'handleBarTooltip',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r = t.e,
              n = t.opt,
              o = this.w,
              l = this.ttCtx,
              h = l.getElTooltip(),
              c = 0,
              d = 0,
              g = 0,
              u = this.getBarTooltipXY({ e: r, opt: n }),
              p = u.i,
              f = u.barHeight,
              x = u.j
            ;(o.globals.capturedSeriesIndex = p),
              (o.globals.capturedDataPointIndex = x),
              (o.globals.isBarHorizontal && l.tooltipUtil.hasBars()) ||
              !o.config.tooltip.shared
                ? ((d = u.x),
                  (g = u.y),
                  (e = Array.isArray(o.config.stroke.width)
                    ? o.config.stroke.width[p]
                    : o.config.stroke.width),
                  (c = d))
                : o.globals.comboCharts || o.config.tooltip.shared || (c /= 2),
              isNaN(g)
                ? (g = o.globals.svgHeight - l.tooltipRect.ttHeight)
                : g < 0 && (g = 0),
              d + l.tooltipRect.ttWidth > o.globals.gridWidth
                ? (d -= l.tooltipRect.ttWidth)
                : d < 0 && (d = 0),
              l.w.config.tooltip.followCursor &&
                ((i = l.getElGrid().getBoundingClientRect()),
                (g = l.e.clientY - i.top)),
              null === l.tooltip &&
                (l.tooltip = o.globals.dom.baseEl.querySelector(
                  '.apexcharts-tooltip'
                )),
              o.config.tooltip.shared ||
                (0 < o.globals.comboBarCount
                  ? l.tooltipPosition.moveXCrosshairs(c + e / 2)
                  : l.tooltipPosition.moveXCrosshairs(c)),
              !l.fixedTooltip &&
                (!o.config.tooltip.shared ||
                  (o.globals.isBarHorizontal && l.tooltipUtil.hasBars())) &&
                ((a = o.globals.isMultipleYAxis
                  ? o.config.yaxis[s] && o.config.yaxis[s].reversed
                  : o.config.yaxis[0].reversed) &&
                  (d -= l.tooltipRect.ttWidth) < 0 &&
                  (d = 0),
                (h.style.left = d + o.globals.translateX + 'px'),
                (s = parseInt(
                  n.paths.parentNode.getAttribute('data:realIndex'),
                  10
                )),
                !a ||
                  (o.globals.isBarHorizontal && l.tooltipUtil.hasBars()) ||
                  (g = g + f - 2 * (o.globals.series[p][x] < 0 ? f : 0)),
                l.tooltipRect.ttHeight + g > o.globals.gridHeight
                  ? ((g =
                      o.globals.gridHeight -
                      l.tooltipRect.ttHeight +
                      o.globals.translateY),
                    (h.style.top = g + 'px'))
                  : (h.style.top =
                      g +
                      o.globals.translateY -
                      l.tooltipRect.ttHeight / 2 +
                      'px'))
          }
        },
        {
          key: 'getBarTooltipXY',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n,
              o,
              l,
              h,
              c,
              d = t.e,
              g = t.opt,
              u = this.w,
              p = null,
              f = this.ttCtx,
              x = 0,
              b = 0,
              m = 0,
              v = 0,
              y = 0,
              w = d.target.classList
            return (
              (w.contains('apexcharts-bar-area') ||
                w.contains('apexcharts-candlestick-area') ||
                w.contains('apexcharts-rangebar-area')) &&
                ((i = (e = d.target).getBoundingClientRect()),
                (a = g.elGrid.getBoundingClientRect()),
                (s = i.height),
                (y = i.height),
                (r = i.width),
                (n = parseInt(e.getAttribute('cx'), 10)),
                (o = parseInt(e.getAttribute('cy'), 10)),
                (v = parseFloat(e.getAttribute('barWidth'))),
                (l = 'touchmove' === d.type ? d.touches[0].clientX : d.clientX),
                (p = parseInt(e.getAttribute('j'), 10)),
                (x = parseInt(e.parentNode.getAttribute('rel'), 10) - 1),
                (h = e.getAttribute('data-range-y1')),
                (c = e.getAttribute('data-range-y2')),
                u.globals.comboCharts &&
                  (x = parseInt(
                    e.parentNode.getAttribute('data:realIndex'),
                    10
                  )),
                f.tooltipLabels.drawSeriesTexts({
                  ttItems: g.ttItems,
                  i: x,
                  j: p,
                  y1: h ? parseInt(h, 10) : null,
                  y2: c ? parseInt(c, 10) : null,
                  shared: !f.showOnIntersect && u.config.tooltip.shared
                }),
                (m = u.config.tooltip.followCursor
                  ? u.globals.isBarHorizontal
                    ? ((b = l - a.left + 15),
                      o -
                        f.dataPointsDividedHeight +
                        s / 2 -
                        f.tooltipRect.ttHeight / 2)
                    : ((b = u.globals.isXNumeric
                        ? n - r / 2
                        : n - f.dataPointsDividedWidth + r / 2),
                      d.clientY - a.top - f.tooltipRect.ttHeight / 2 - 15)
                  : u.globals.isBarHorizontal
                  ? ((b = n) < f.xyRatios.baseLineInvertedY &&
                      (b = n - f.tooltipRect.ttWidth),
                    o -
                      f.dataPointsDividedHeight +
                      s / 2 -
                      f.tooltipRect.ttHeight / 2)
                  : ((b = u.globals.isXNumeric
                      ? n - r / 2
                      : n - f.dataPointsDividedWidth + r / 2),
                    o))),
              { x: b, y: m, barHeight: y, barWidth: v, i: x, j: p }
            )
          }
        }
      ]),
      Jt),
    Lt =
      (n($t, [
        {
          key: 'drawXaxisTooltip',
          value: function () {
            var t = this.w,
              e = this.ttCtx,
              i = 'bottom' === t.config.xaxis.position
            e.xaxisOffY = i
              ? t.globals.gridHeight + 1
              : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3
            var a = i
                ? 'apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom'
                : 'apexcharts-xaxistooltip apexcharts-xaxistooltip-top',
              s = t.globals.dom.elWrap
            e.blxaxisTooltip &&
              null ===
                t.globals.dom.baseEl.querySelector(
                  '.apexcharts-xaxistooltip'
                ) &&
              ((e.xaxisTooltip = document.createElement('div')),
              e.xaxisTooltip.setAttribute(
                'class',
                a + ' apexcharts-theme-' + t.config.tooltip.theme
              ),
              s.appendChild(e.xaxisTooltip),
              (e.xaxisTooltipText = document.createElement('div')),
              e.xaxisTooltipText.classList.add('apexcharts-xaxistooltip-text'),
              (e.xaxisTooltipText.style.fontFamily =
                t.config.xaxis.tooltip.style.fontFamily ||
                t.config.chart.fontFamily),
              (e.xaxisTooltipText.style.fontSize =
                t.config.xaxis.tooltip.style.fontSize),
              e.xaxisTooltip.appendChild(e.xaxisTooltipText))
          }
        },
        {
          key: 'drawYaxisTooltip',
          value: function () {
            for (
              var s = this.w, r = this.ttCtx, t = 0;
              t < s.config.yaxis.length;
              t++
            )
              !(function (i) {
                var t =
                  s.config.yaxis[i].opposite ||
                  s.config.yaxis[i].crosshairs.opposite
                r.yaxisOffX = t ? s.globals.gridWidth + 1 : 1
                var a =
                  'apexcharts-yaxistooltip apexcharts-yaxistooltip-'.concat(
                    i,
                    t
                      ? ' apexcharts-yaxistooltip-right'
                      : ' apexcharts-yaxistooltip-left'
                  )
                s.globals.yAxisSameScaleIndices.map(function (t, e) {
                  t.map(function (t, e) {
                    e === i &&
                      (a += s.config.yaxis[e].show
                        ? ' '
                        : ' apexcharts-yaxistooltip-hidden')
                  })
                })
                var e = s.globals.dom.elWrap
                null ===
                  s.globals.dom.baseEl.querySelector(
                    '.apexcharts-yaxistooltip apexcharts-yaxistooltip-'.concat(
                      i
                    )
                  ) &&
                  ((r.yaxisTooltip = document.createElement('div')),
                  r.yaxisTooltip.setAttribute(
                    'class',
                    a + ' apexcharts-theme-' + s.config.tooltip.theme
                  ),
                  e.appendChild(r.yaxisTooltip),
                  0 === i && (r.yaxisTooltipText = []),
                  (r.yaxisTooltipText[i] = document.createElement('div')),
                  r.yaxisTooltipText[i].classList.add(
                    'apexcharts-yaxistooltip-text'
                  ),
                  r.yaxisTooltip.appendChild(r.yaxisTooltipText[i]))
              })(t)
          }
        },
        {
          key: 'setXCrosshairWidth',
          value: function () {
            var t,
              e,
              i,
              a,
              s,
              r,
              n = this.w,
              o = this.ttCtx,
              l = o.getElXCrosshairs()
            ;(o.xcrosshairsWidth = parseInt(
              n.config.xaxis.crosshairs.width,
              10
            )),
              n.globals.comboCharts
                ? null !==
                    (t = n.globals.dom.baseEl.querySelector(
                      '.apexcharts-bar-area'
                    )) && 'barWidth' === n.config.xaxis.crosshairs.width
                  ? ((e = parseFloat(t.getAttribute('barWidth'))),
                    (o.xcrosshairsWidth = e))
                  : 'tickWidth' === n.config.xaxis.crosshairs.width &&
                    ((i = n.globals.labels.length),
                    (o.xcrosshairsWidth = n.globals.gridWidth / i))
                : 'tickWidth' === n.config.xaxis.crosshairs.width
                ? ((a = n.globals.labels.length),
                  (o.xcrosshairsWidth = n.globals.gridWidth / a))
                : 'barWidth' === n.config.xaxis.crosshairs.width &&
                  (null !==
                  (s = n.globals.dom.baseEl.querySelector(
                    '.apexcharts-bar-area'
                  ))
                    ? ((r = parseFloat(s.getAttribute('barWidth'))),
                      (o.xcrosshairsWidth = r))
                    : (o.xcrosshairsWidth = 1)),
              n.globals.isBarHorizontal && (o.xcrosshairsWidth = 0),
              null !== l &&
                0 < o.xcrosshairsWidth &&
                l.setAttribute('width', o.xcrosshairsWidth)
          }
        },
        {
          key: 'handleYCrosshair',
          value: function () {
            var t = this.w,
              e = this.ttCtx
            ;(e.ycrosshairs = t.globals.dom.baseEl.querySelector(
              '.apexcharts-ycrosshairs'
            )),
              (e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(
                '.apexcharts-ycrosshairs-hidden'
              ))
          }
        },
        {
          key: 'drawYaxisTooltipText',
          value: function (t, e, i) {
            var a,
              s,
              r,
              n,
              o = this.ttCtx,
              l = this.w,
              h = l.globals.yLabelFormatters[t]
            o.yaxisTooltips[t] &&
              ((s =
                (e - (a = o.getElGrid().getBoundingClientRect()).top) *
                i.yRatio[t]),
              (r = l.globals.maxYArr[t] - l.globals.minYArr[t]),
              (n = l.globals.minYArr[t] + (r - s)),
              o.tooltipPosition.moveYCrosshairs(e - a.top),
              (o.yaxisTooltipText[t].innerHTML = h(n)),
              o.tooltipPosition.moveYAxisTooltip(t))
          }
        }
      ]),
      $t),
    Pt =
      (n(Zt, [
        {
          key: 'getElTooltip',
          value: function (t) {
            return (t = t || this).w.globals.dom.baseEl.querySelector(
              '.apexcharts-tooltip'
            )
          }
        },
        {
          key: 'getElXCrosshairs',
          value: function () {
            return this.w.globals.dom.baseEl.querySelector(
              '.apexcharts-xcrosshairs'
            )
          }
        },
        {
          key: 'getElGrid',
          value: function () {
            return this.w.globals.dom.baseEl.querySelector('.apexcharts-grid')
          }
        },
        {
          key: 'drawTooltip',
          value: function (t) {
            var i = this.w
            ;(this.xyRatios = t),
              (this.blxaxisTooltip =
                i.config.xaxis.tooltip.enabled && i.globals.axisCharts),
              (this.yaxisTooltips = i.config.yaxis.map(function (t, e) {
                return !!(t.show && t.tooltip.enabled && i.globals.axisCharts)
              })),
              (this.allTooltipSeriesGroups = []),
              i.globals.axisCharts || (this.showTooltipTitle = !1)
            var e,
              a,
              s = document.createElement('div')
            s.classList.add('apexcharts-tooltip'),
              s.classList.add('apexcharts-theme-'.concat(this.tConfig.theme)),
              i.globals.dom.elWrap.appendChild(s),
              i.globals.axisCharts &&
                (this.axesTooltip.drawXaxisTooltip(),
                this.axesTooltip.drawYaxisTooltip(),
                this.axesTooltip.setXCrosshairWidth(),
                this.axesTooltip.handleYCrosshair(),
                (e = new tt(this.ctx)),
                (this.xAxisTicksPositions = e.getXAxisTicksPositions())),
              (!i.globals.comboCharts &&
                !this.tConfig.intersect &&
                'bar' !== i.config.chart.type &&
                'rangeBar' !== i.config.chart.type) ||
                this.tConfig.shared ||
                (this.showOnIntersect = !0),
              (0 !== i.config.markers.size &&
                0 !== i.globals.markers.largestSize) ||
                this.marker.drawDynamicPoints(this),
              i.globals.collapsedSeries.length !== i.globals.series.length &&
                ((this.dataPointsDividedHeight =
                  i.globals.gridHeight / i.globals.dataPoints),
                (this.dataPointsDividedWidth =
                  i.globals.gridWidth / i.globals.dataPoints),
                this.showTooltipTitle &&
                  ((this.tooltipTitle = document.createElement('div')),
                  this.tooltipTitle.classList.add('apexcharts-tooltip-title'),
                  (this.tooltipTitle.style.fontFamily =
                    this.tConfig.style.fontFamily || i.config.chart.fontFamily),
                  (this.tooltipTitle.style.fontSize =
                    this.tConfig.style.fontSize),
                  s.appendChild(this.tooltipTitle)),
                (a = i.globals.series.length),
                (i.globals.xyCharts || i.globals.comboCharts) &&
                  this.tConfig.shared &&
                  (a = this.showOnIntersect ? 1 : i.globals.series.length),
                (this.legendLabels = i.globals.dom.baseEl.querySelectorAll(
                  '.apexcharts-legend-text'
                )),
                (this.ttItems = this.createTTElements(a)),
                this.addSVGEvents())
          }
        },
        {
          key: 'createTTElements',
          value: function (t) {
            for (
              var e = this.w, i = [], a = this.getElTooltip(), s = 0;
              s < t;
              s++
            ) {
              var r = document.createElement('div')
              r.classList.add('apexcharts-tooltip-series-group'),
                this.tConfig.shared &&
                  this.tConfig.enabledOnSeries &&
                  Array.isArray(this.tConfig.enabledOnSeries) &&
                  this.tConfig.enabledOnSeries.indexOf(s) < 0 &&
                  r.classList.add('apexcharts-tooltip-series-group-hidden')
              var n = document.createElement('span')
              n.classList.add('apexcharts-tooltip-marker'),
                (n.style.backgroundColor = e.globals.colors[s]),
                r.appendChild(n)
              var o = document.createElement('div')
              o.classList.add('apexcharts-tooltip-text'),
                (o.style.fontFamily =
                  this.tConfig.style.fontFamily || e.config.chart.fontFamily),
                (o.style.fontSize = this.tConfig.style.fontSize)
              var l = document.createElement('div')
              l.classList.add('apexcharts-tooltip-y-group')
              var h = document.createElement('span')
              h.classList.add('apexcharts-tooltip-text-label'), l.appendChild(h)
              var c = document.createElement('span')
              c.classList.add('apexcharts-tooltip-text-value'), l.appendChild(c)
              var d = document.createElement('div')
              d.classList.add('apexcharts-tooltip-z-group')
              var g = document.createElement('span')
              g.classList.add('apexcharts-tooltip-text-z-label'),
                d.appendChild(g)
              var u = document.createElement('span')
              u.classList.add('apexcharts-tooltip-text-z-value'),
                d.appendChild(u),
                o.appendChild(l),
                o.appendChild(d),
                r.appendChild(o),
                a.appendChild(r),
                i.push(r)
            }
            return i
          }
        },
        {
          key: 'addSVGEvents',
          value: function () {
            var t = this.w,
              e = t.config.chart.type,
              i = this.getElTooltip(),
              a = !('bar' !== e && 'candlestick' !== e && 'rangeBar' !== e),
              s =
                'area' === e ||
                'line' === e ||
                'scatter' === e ||
                'bubble' === e ||
                'radar' === e,
              r = t.globals.dom.Paper.node,
              n = this.getElGrid()
            n && (this.seriesBound = n.getBoundingClientRect())
            var o,
              l,
              h,
              c = [],
              d = [],
              g = {
                hoverArea: r,
                elGrid: n,
                tooltipEl: i,
                tooltipY: c,
                tooltipX: d,
                ttItems: this.ttItems
              }
            if (
              t.globals.axisCharts &&
              (s
                ? (o = t.globals.dom.baseEl.querySelectorAll(
                    ".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"
                  ))
                : a
                ? (o = t.globals.dom.baseEl.querySelectorAll(
                    '.apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-rangebar-area'
                  ))
                : 'heatmap' === e &&
                  (o = t.globals.dom.baseEl.querySelectorAll(
                    '.apexcharts-series .apexcharts-heatmap'
                  )),
              o && o.length)
            )
              for (var u = 0; u < o.length; u++)
                c.push(o[u].getAttribute('cy')), d.push(o[u].getAttribute('cx'))
            ;(t.globals.xyCharts && !this.showOnIntersect) ||
            (t.globals.comboCharts && !this.showOnIntersect) ||
            (a && this.tooltipUtil.hasBars() && this.tConfig.shared)
              ? this.addPathsEventListeners([r], g)
              : (a && !t.globals.comboCharts) || (s && this.showOnIntersect)
              ? this.addDatapointEventsListeners(g)
              : (t.globals.axisCharts && 'heatmap' !== e) ||
                ((l =
                  t.globals.dom.baseEl.querySelectorAll('.apexcharts-series')),
                this.addPathsEventListeners(l, g)),
              this.showOnIntersect &&
                (0 <
                  (h = t.globals.dom.baseEl.querySelectorAll(
                    '.apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker'
                  )).length && this.addPathsEventListeners(h, g),
                this.tooltipUtil.hasBars() &&
                  !this.tConfig.shared &&
                  this.addDatapointEventsListeners(g))
          }
        },
        {
          key: 'drawFixedTooltipRect',
          value: function () {
            var t = this.w,
              e = this.getElTooltip(),
              i = e.getBoundingClientRect(),
              a = i.width + 10,
              s = i.height + 10,
              r = this.tConfig.fixed.offsetX,
              n = this.tConfig.fixed.offsetY,
              o = this.tConfig.fixed.position.toLowerCase()
            return (
              -1 < o.indexOf('right') && (r = r + t.globals.svgWidth - a + 10),
              -1 < o.indexOf('bottom') &&
                (n = n + t.globals.svgHeight - s - 10),
              (e.style.left = r + 'px'),
              (e.style.top = n + 'px'),
              { x: r, y: n, ttWidth: a, ttHeight: s }
            )
          }
        },
        {
          key: 'addDatapointEventsListeners',
          value: function (t) {
            var e = this.w.globals.dom.baseEl.querySelectorAll(
              '.apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-rangebar-area'
            )
            this.addPathsEventListeners(e, t)
          }
        },
        {
          key: 'addPathsEventListeners',
          value: function (a, t) {
            for (var s = this, e = 0; e < a.length; e++)
              !(function (e) {
                var i = {
                  paths: a[e],
                  tooltipEl: t.tooltipEl,
                  tooltipY: t.tooltipY,
                  tooltipX: t.tooltipX,
                  elGrid: t.elGrid,
                  hoverArea: t.hoverArea,
                  ttItems: t.ttItems
                }
                ;[
                  'mousemove',
                  'mouseup',
                  'touchmove',
                  'mouseout',
                  'touchend'
                ].map(function (t) {
                  return a[e].addEventListener(t, s.seriesHover.bind(s, i), {
                    capture: !1,
                    passive: !0
                  })
                })
              })(e)
          }
        },
        {
          key: 'seriesHover',
          value: function (a, s) {
            var r = this,
              t = [],
              e = this.w
            e.config.chart.group && (t = this.ctx.getGroupedCharts()),
              (e.globals.axisCharts &&
                ((e.globals.minX === -1 / 0 && e.globals.maxX === 1 / 0) ||
                  0 === e.globals.dataPoints)) ||
                (t.length
                  ? t.forEach(function (t) {
                      var e = r.getElTooltip(t),
                        i = {
                          paths: a.paths,
                          tooltipEl: e,
                          tooltipY: a.tooltipY,
                          tooltipX: a.tooltipX,
                          elGrid: a.elGrid,
                          hoverArea: a.hoverArea,
                          ttItems: t.w.globals.tooltip.ttItems
                        }
                      t.w.globals.minX === r.w.globals.minX &&
                        t.w.globals.maxX === r.w.globals.maxX &&
                        t.w.globals.tooltip.seriesHoverByContext({
                          chartCtx: t,
                          ttCtx: t.w.globals.tooltip,
                          opt: i,
                          e: s
                        })
                    })
                  : this.seriesHoverByContext({
                      chartCtx: this.ctx,
                      ttCtx: this.w.globals.tooltip,
                      opt: a,
                      e: s
                    }))
          }
        },
        {
          key: 'seriesHoverByContext',
          value: function (t) {
            var e = t.chartCtx,
              i = t.ttCtx,
              a = t.opt,
              s = t.e,
              r = e.w,
              n = this.getElTooltip()
            ;(i.tooltipRect = {
              x: 0,
              y: 0,
              ttWidth: n.getBoundingClientRect().width,
              ttHeight: n.getBoundingClientRect().height
            }),
              (i.e = s),
              !i.tooltipUtil.hasBars() ||
                r.globals.comboCharts ||
                i.isBarShared ||
                (this.tConfig.onDatasetHover.highlightDataSeries &&
                  new W(e).toggleSeriesOnHover(s, s.target.parentNode)),
              i.fixedTooltip && i.drawFixedTooltipRect(),
              r.globals.axisCharts
                ? i.axisChartsTooltips({
                    e: s,
                    opt: a,
                    tooltipRect: i.tooltipRect
                  })
                : i.nonAxisChartsTooltips({
                    e: s,
                    opt: a,
                    tooltipRect: i.tooltipRect
                  })
          }
        },
        {
          key: 'axisChartsTooltips',
          value: function (t) {
            var e = t.e,
              i = t.opt,
              a = this.w,
              s = i.elGrid.getBoundingClientRect(),
              r = 'touchmove' === e.type ? e.touches[0].clientX : e.clientX,
              n = 'touchmove' === e.type ? e.touches[0].clientY : e.clientY
            if (
              ((this.clientY = n),
              (this.clientX = r),
              (a.globals.capturedSeriesIndex = -1),
              (a.globals.capturedDataPointIndex = -1),
              n < s.top || n > s.top + s.height)
            )
              this.handleMouseOut(i)
            else {
              if (
                Array.isArray(this.tConfig.enabledOnSeries) &&
                !a.config.tooltip.shared
              ) {
                var o = parseInt(i.paths.getAttribute('index'), 10)
                if (this.tConfig.enabledOnSeries.indexOf(o) < 0)
                  return void this.handleMouseOut(i)
              }
              var l = this.getElTooltip(),
                h = this.getElXCrosshairs(),
                c =
                  a.globals.xyCharts ||
                  ('bar' === a.config.chart.type &&
                    !a.globals.isBarHorizontal &&
                    this.tooltipUtil.hasBars() &&
                    this.tConfig.shared) ||
                  (a.globals.comboCharts && this.tooltipUtil.hasBars())
              if (
                (a.globals.isBarHorizontal &&
                  this.tooltipUtil.hasBars() &&
                  (c = !1),
                'mousemove' === e.type ||
                  'touchmove' === e.type ||
                  'mouseup' === e.type)
              ) {
                null !== h && h.classList.add('apexcharts-active')
                var d,
                  g,
                  u,
                  p = this.yaxisTooltips.filter(function (t) {
                    return !0 === t
                  })
                if (
                  (null !== this.ycrosshairs &&
                    p.length &&
                    this.ycrosshairs.classList.add('apexcharts-active'),
                  c && !this.showOnIntersect
                    ? this.handleStickyTooltip(e, r, n, i)
                    : 'heatmap' === a.config.chart.type
                    ? ((g = (d = this.intersect.handleHeatTooltip({
                        e: e,
                        opt: i,
                        x: g,
                        y: u
                      })).x),
                      (u = d.y),
                      (l.style.left = g + 'px'),
                      (l.style.top = u + 'px'))
                    : (this.tooltipUtil.hasBars() &&
                        this.intersect.handleBarTooltip({ e: e, opt: i }),
                      this.tooltipUtil.hasMarkers() &&
                        this.intersect.handleMarkerTooltip({
                          e: e,
                          opt: i,
                          x: g,
                          y: u
                        })),
                  this.yaxisTooltips.length)
                )
                  for (var f = 0; f < a.config.yaxis.length; f++)
                    this.axesTooltip.drawYaxisTooltipText(f, n, this.xyRatios)
                i.tooltipEl.classList.add('apexcharts-active')
              } else
                ('mouseout' !== e.type && 'touchend' !== e.type) ||
                  this.handleMouseOut(i)
            }
          }
        },
        {
          key: 'nonAxisChartsTooltips',
          value: function (t) {
            var e,
              i,
              a = t.e,
              s = t.opt,
              r = t.tooltipRect,
              n = this.w,
              o = s.paths.getAttribute('rel'),
              l = this.getElTooltip(),
              h = n.globals.dom.elWrap.getBoundingClientRect()
            'mousemove' === a.type || 'touchmove' === a.type
              ? (l.classList.add('apexcharts-active'),
                this.tooltipLabels.drawSeriesTexts({
                  ttItems: s.ttItems,
                  i: parseInt(o, 10) - 1,
                  shared: !1
                }),
                (e = n.globals.clientX - h.left - r.ttWidth / 2),
                (i = n.globals.clientY - h.top - r.ttHeight - 10),
                (l.style.left = e + 'px'),
                (l.style.top = i + 'px'))
              : ('mouseout' !== a.type && 'touchend' !== a.type) ||
                l.classList.remove('apexcharts-active')
          }
        },
        {
          key: 'handleStickyTooltip',
          value: function (t, e, i, a) {
            var s = this.w,
              r = this.tooltipUtil.getNearestValues({
                context: this,
                hoverArea: a.hoverArea,
                elGrid: a.elGrid,
                clientX: e,
                clientY: i
              }),
              n = r.j,
              o = r.capturedSeries
            r.hoverX < 0 || r.hoverX > s.globals.gridWidth
              ? this.handleMouseOut(a)
              : null !== o
              ? this.handleStickyCapturedSeries(t, o, a, n)
              : this.tooltipUtil.isXoverlap(n) &&
                this.create(t, this, 0, n, a.ttItems)
          }
        },
        {
          key: 'handleStickyCapturedSeries',
          value: function (t, e, i, a) {
            var s = this.w
            null === s.globals.series[e][a]
              ? this.handleMouseOut(i)
              : void 0 !== s.globals.series[e][a]
              ? this.tConfig.shared &&
                this.tooltipUtil.isXoverlap(a) &&
                this.tooltipUtil.isInitialSeriesSameLen()
                ? this.create(t, this, e, a, i.ttItems)
                : this.create(t, this, e, a, i.ttItems, !1)
              : this.tooltipUtil.isXoverlap(a) &&
                this.create(t, this, 0, a, i.ttItems)
          }
        },
        {
          key: 'deactivateHoverFilter',
          value: function () {
            for (
              var t = this.w,
                e = new Y(this.ctx),
                i = t.globals.dom.Paper.select('.apexcharts-bar-area'),
                a = 0;
              a < i.length;
              a++
            )
              e.pathMouseLeave(i[a])
          }
        },
        {
          key: 'handleMouseOut',
          value: function (t) {
            var e = this.w,
              i = this.getElXCrosshairs()
            if (
              (t.tooltipEl.classList.remove('apexcharts-active'),
              this.deactivateHoverFilter(),
              'bubble' !== e.config.chart.type && this.marker.resetPointsSize(),
              null !== i && i.classList.remove('apexcharts-active'),
              null !== this.ycrosshairs &&
                this.ycrosshairs.classList.remove('apexcharts-active'),
              this.blxaxisTooltip &&
                this.xaxisTooltip.classList.remove('apexcharts-active'),
              this.yaxisTooltips.length)
            ) {
              null === this.yaxisTTEls &&
                (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(
                  '.apexcharts-yaxistooltip'
                ))
              for (var a = 0; a < this.yaxisTTEls.length; a++)
                this.yaxisTTEls[a].classList.remove('apexcharts-active')
            }
            e.config.legend.tooltipHoverFormatter &&
              this.legendLabels.forEach(function (t) {
                var e = t.getAttribute('data:default-text')
                t.innerHTML = decodeURIComponent(e)
              })
          }
        },
        {
          key: 'markerClick',
          value: function (t, e, i) {
            var a = this.w
            'function' == typeof a.config.chart.events.markerClick &&
              a.config.chart.events.markerClick(t, this.ctx, {
                seriesIndex: e,
                dataPointIndex: i,
                w: a
              }),
              this.ctx.events.fireEvent('markerClick', [
                t,
                this.ctx,
                { seriesIndex: e, dataPointIndex: i, w: a }
              ])
          }
        },
        {
          key: 'create',
          value: function (t, e, i, a, s) {
            var r =
                5 < arguments.length && void 0 !== arguments[5]
                  ? arguments[5]
                  : null,
              n = this.w,
              o = e
            'mouseup' === t.type && this.markerClick(t, i, a),
              null === r && (r = this.tConfig.shared)
            var l = this.tooltipUtil.hasMarkers(),
              h = this.tooltipUtil.getElBars()
            if (n.config.legend.tooltipHoverFormatter) {
              var c = n.config.legend.tooltipHoverFormatter,
                d = Array.from(this.legendLabels)
              d.forEach(function (t) {
                var e = t.getAttribute('data:default-text')
                t.innerHTML = decodeURIComponent(e)
              })
              for (var g = 0; g < d.length; g++) {
                var u = d[g],
                  p = parseInt(u.getAttribute('i'), 10),
                  f = decodeURIComponent(u.getAttribute('data:default-text')),
                  x = c(f, { seriesIndex: r ? p : i, dataPointIndex: a, w: n })
                if (r)
                  u.innerHTML =
                    n.globals.collapsedSeriesIndices.indexOf(p) < 0 ? x : f
                else if (((u.innerHTML = p === i ? x : f), i === p)) break
              }
            }
            if (r) {
              if (
                (o.tooltipLabels.drawSeriesTexts({
                  ttItems: s,
                  i: i,
                  j: a,
                  shared: !this.showOnIntersect && this.tConfig.shared
                }),
                l &&
                  (0 < n.globals.markers.largestSize
                    ? o.marker.enlargePoints(a)
                    : o.tooltipPosition.moveDynamicPointsOnHover(a)),
                this.tooltipUtil.hasBars() &&
                  ((this.barSeriesHeight = this.tooltipUtil.getBarsHeight(h)),
                  0 < this.barSeriesHeight))
              ) {
                var b = new Y(this.ctx),
                  m = n.globals.dom.Paper.select(
                    ".apexcharts-bar-area[j='".concat(a, "']")
                  )
                this.deactivateHoverFilter(),
                  this.tooltipPosition.moveStickyTooltipOverBars(a)
                for (var v = 0; v < m.length; v++) b.pathMouseEnter(m[v])
              }
            } else
              o.tooltipLabels.drawSeriesTexts({
                shared: !1,
                ttItems: s,
                i: i,
                j: a
              }),
                this.tooltipUtil.hasBars() &&
                  o.tooltipPosition.moveStickyTooltipOverBars(a),
                l && o.tooltipPosition.moveMarkers(i, a)
          }
        }
      ]),
      Zt),
    Tt = (function () {
      l(e, V)
      var t = c(e)
      function e () {
        return r(this, e), t.apply(this, arguments)
      }
      return (
        n(e, [
          {
            key: 'draw',
            value: function (v, y) {
              var w = this,
                k = this.w
              ;(this.graphics = new Y(this.ctx)),
                (this.bar = new V(this.ctx, this.xyRatios))
              var t = new P(this.ctx, k)
              ;(v = t.getLogSeries(v)),
                (this.yRatio = t.getLogYRatios(this.yRatio)),
                this.barHelpers.initVariables(v),
                '100%' === k.config.chart.stackType &&
                  (v = k.globals.seriesPercent.slice()),
                (this.series = v),
                (this.totalItems = 0),
                (this.prevY = []),
                (this.prevX = []),
                (this.prevYF = []),
                (this.prevXF = []),
                (this.prevYVal = []),
                (this.prevXVal = []),
                (this.xArrj = []),
                (this.xArrjF = []),
                (this.xArrjVal = []),
                (this.yArrj = []),
                (this.yArrjF = []),
                (this.yArrjVal = [])
              for (var e = 0; e < v.length; e++)
                0 < v[e].length && (this.totalItems += v[e].length)
              for (
                var A = this.graphics.group({
                    class: 'apexcharts-bar-series apexcharts-plot-series'
                  }),
                  S = 0,
                  C = 0,
                  i = 0,
                  a = 0;
                i < v.length;
                i++, a++
              )
                !(function (t, e) {
                  var i,
                    a,
                    s,
                    r,
                    n = [],
                    o = [],
                    l = k.globals.comboCharts ? y[t] : t
                  1 < w.yRatio.length && (w.yaxisIndex = l),
                    (w.isReversed =
                      k.config.yaxis[w.yaxisIndex] &&
                      k.config.yaxis[w.yaxisIndex].reversed)
                  var h = w.graphics.group({
                    class: 'apexcharts-series',
                    seriesName: I.escapeString(k.globals.seriesNames[l]),
                    rel: t + 1,
                    'data:realIndex': l
                  })
                  w.ctx.series.addCollapsedClassToSeries(h, l)
                  var c = w.graphics.group({
                      class: 'apexcharts-datalabels',
                      'data:realIndex': l
                    }),
                    d = 0,
                    g = 0,
                    u = w.initialPositions(S, C, void 0, void 0, void 0, void 0)
                  ;(C = u.y),
                    (d = u.barHeight),
                    (a = u.yDivision),
                    (r = u.zeroW),
                    (S = u.x),
                    (g = u.barWidth),
                    (i = u.xDivision),
                    (s = u.zeroH),
                    (w.yArrj = []),
                    (w.yArrjF = []),
                    (w.yArrjVal = []),
                    (w.xArrj = []),
                    (w.xArrjF = []),
                    (w.xArrjVal = []),
                    1 === w.prevY.length &&
                      w.prevY[0].every(function (t) {
                        return isNaN(t)
                      }) &&
                      ((w.prevY[0] = w.prevY[0].map(function (t) {
                        return s
                      })),
                      (w.prevYF[0] = w.prevYF[0].map(function (t) {
                        return 0
                      })))
                  for (var p = 0; p < k.globals.dataPoints; p++) {
                    var f = w.barHelpers.getStrokeWidth(t, p, l),
                      x = {
                        indexes: { i: t, j: p, realIndex: l, bc: e },
                        strokeWidth: f,
                        x: S,
                        y: C,
                        elSeries: h
                      },
                      b = null
                    w.isHorizontal
                      ? ((b = w.drawStackedBarPaths(
                          M(
                            M({}, x),
                            {},
                            { zeroW: r, barHeight: d, yDivision: a }
                          )
                        )),
                        (g = w.series[t][p] / w.invertedYRatio))
                      : ((b = w.drawStackedColumnPaths(
                          M(
                            M({}, x),
                            {},
                            { xDivision: i, barWidth: g, zeroH: s }
                          )
                        )),
                        (d = w.series[t][p] / w.yRatio[w.yaxisIndex])),
                      (C = b.y),
                      (S = b.x),
                      n.push(S),
                      o.push(C)
                    var m = w.barHelpers.getPathFillColor(v, t, p, l),
                      h = w.renderSeries({
                        realIndex: l,
                        pathFill: m,
                        j: p,
                        i: t,
                        pathFrom: b.pathFrom,
                        pathTo: b.pathTo,
                        strokeWidth: f,
                        elSeries: h,
                        x: S,
                        y: C,
                        series: v,
                        barHeight: d,
                        barWidth: g,
                        elDataLabelsWrap: c,
                        type: 'bar',
                        visibleSeries: 0
                      })
                  }
                  ;(k.globals.seriesXvalues[l] = n),
                    (k.globals.seriesYvalues[l] = o),
                    w.prevY.push(w.yArrj),
                    w.prevYF.push(w.yArrjF),
                    w.prevYVal.push(w.yArrjVal),
                    w.prevX.push(w.xArrj),
                    w.prevXF.push(w.xArrjF),
                    w.prevXVal.push(w.xArrjVal),
                    A.add(h)
                })(i, a)
              return A
            }
          },
          {
            key: 'initialPositions',
            value: function (t, e, i, a, s, r) {
              var n,
                o,
                l = this.w
              return (
                this.isHorizontal
                  ? ((n =
                      ((n = a = l.globals.gridHeight / l.globals.dataPoints) *
                        parseInt(l.config.plotOptions.bar.barHeight, 10)) /
                      100),
                    (r =
                      this.baseLineInvertedY +
                      l.globals.padHorizontal +
                      (this.isReversed ? l.globals.gridWidth : 0) -
                      (this.isReversed ? 2 * this.baseLineInvertedY : 0)),
                    (e = (a - n) / 2))
                  : ((o = i = l.globals.gridWidth / l.globals.dataPoints),
                    (o =
                      l.globals.isXNumeric && 1 < l.globals.dataPoints
                        ? ((i = l.globals.minXDiff / this.xRatio) *
                            parseInt(this.barOptions.columnWidth, 10)) /
                          100
                        : (o *
                            parseInt(
                              l.config.plotOptions.bar.columnWidth,
                              10
                            )) /
                          100),
                    (s =
                      this.baseLineY[this.yaxisIndex] +
                      (this.isReversed ? l.globals.gridHeight : 0) -
                      (this.isReversed
                        ? 2 * this.baseLineY[this.yaxisIndex]
                        : 0)),
                    (t = l.globals.padHorizontal + (i - o) / 2)),
                {
                  x: t,
                  y: e,
                  yDivision: a,
                  xDivision: i,
                  barHeight: n,
                  barWidth: o,
                  zeroH: s,
                  zeroW: r
                }
              )
            }
          },
          {
            key: 'drawStackedBarPaths',
            value: function (t) {
              for (
                var e,
                  i,
                  a = t.indexes,
                  s = t.barHeight,
                  r = t.strokeWidth,
                  n = t.zeroW,
                  o = t.x,
                  l = t.y,
                  h = t.yDivision,
                  c = t.elSeries,
                  d = this.w,
                  g = l,
                  u = a.i,
                  p = a.j,
                  f = 0,
                  x = 0;
                x < this.prevXF.length;
                x++
              )
                f += this.prevXF[x][p]
              ;(e =
                0 < u
                  ? ((i = n),
                    this.prevXVal[u - 1][p] < 0
                      ? (i =
                          0 <= this.series[u][p]
                            ? this.prevX[u - 1][p] +
                              f -
                              2 * (this.isReversed ? f : 0)
                            : this.prevX[u - 1][p])
                      : 0 <= this.prevXVal[u - 1][p] &&
                        (i =
                          0 <= this.series[u][p]
                            ? this.prevX[u - 1][p]
                            : this.prevX[u - 1][p] -
                              f +
                              2 * (this.isReversed ? f : 0)),
                    i)
                  : n),
                (o =
                  null === this.series[u][p]
                    ? e
                    : e +
                      this.series[u][p] / this.invertedYRatio -
                      2 *
                        (this.isReversed
                          ? this.series[u][p] / this.invertedYRatio
                          : 0)),
                this.xArrj.push(o),
                this.xArrjF.push(Math.abs(e - o)),
                this.xArrjVal.push(this.series[u][p])
              var b = this.barHelpers.getBarpaths({
                barYPosition: g,
                barHeight: s,
                x1: e,
                x2: o,
                strokeWidth: r,
                series: this.series,
                realIndex: a.realIndex,
                i: u,
                j: p,
                w: d
              })
              return (
                this.barHelpers.barBackground({
                  j: p,
                  i: u,
                  y1: g,
                  y2: s,
                  elSeries: c
                }),
                (l += h),
                { pathTo: b.pathTo, pathFrom: b.pathFrom, x: o, y: l }
              )
            }
          },
          {
            key: 'drawStackedColumnPaths',
            value: function (t) {
              var e = t.indexes,
                i = t.x,
                a = t.y,
                s = t.xDivision,
                r = t.barWidth,
                n = t.zeroH,
                o = (t.strokeWidth, t.elSeries),
                l = this.w,
                h = e.i,
                c = e.j,
                d = e.bc
              l.globals.isXNumeric &&
                (i =
                  ((l.globals.seriesX[h][c] || 0) - l.globals.minX) /
                    this.xRatio -
                  r / 2)
              for (var g, u = i, p = 0, f = 0; f < this.prevYF.length; f++)
                p += isNaN(this.prevYF[f][c]) ? 0 : this.prevYF[f][c]
              if (
                (0 < h && !l.globals.isXNumeric) ||
                (0 < h &&
                  l.globals.isXNumeric &&
                  l.globals.seriesX[h - 1][c] === l.globals.seriesX[h][c])
              ) {
                var x,
                  b,
                  m = Math.min(this.yRatio.length + 1, h + 1)
                if (void 0 !== this.prevY[h - 1])
                  for (var v = 1; v < m; v++)
                    if (!isNaN(this.prevY[h - v][c])) {
                      b = this.prevY[h - v][c]
                      break
                    }
                for (var y = 1; y < m; y++) {
                  if (this.prevYVal[h - y][c] < 0) {
                    x =
                      0 <= this.series[h][c]
                        ? b - p + 2 * (this.isReversed ? p : 0)
                        : b
                    break
                  }
                  if (0 <= this.prevYVal[h - y][c]) {
                    x =
                      0 <= this.series[h][c]
                        ? b
                        : b + p - 2 * (this.isReversed ? p : 0)
                    break
                  }
                }
                void 0 === x && (x = l.globals.gridHeight),
                  (g =
                    this.prevYF[0].every(function (t) {
                      return 0 === t
                    }) &&
                    this.prevYF.slice(1, h).every(function (t) {
                      return t.every(function (t) {
                        return isNaN(t)
                      })
                    })
                      ? l.globals.gridHeight - n
                      : x)
              } else g = l.globals.gridHeight - n
              ;(a =
                g -
                this.series[h][c] / this.yRatio[this.yaxisIndex] +
                2 *
                  (this.isReversed
                    ? this.series[h][c] / this.yRatio[this.yaxisIndex]
                    : 0)),
                this.yArrj.push(a),
                this.yArrjF.push(Math.abs(g - a)),
                this.yArrjVal.push(this.series[h][c])
              var w = this.barHelpers.getColumnPaths({
                barXPosition: u,
                barWidth: r,
                y1: g,
                y2: a,
                yRatio: this.yRatio[this.yaxisIndex],
                strokeWidth: this.strokeWidth,
                series: this.series,
                realIndex: e.realIndex,
                i: h,
                j: c,
                w: l
              })
              return (
                this.barHelpers.barBackground({
                  bc: d,
                  j: c,
                  i: h,
                  x1: u,
                  x2: r,
                  elSeries: o
                }),
                (i += s),
                {
                  pathTo: w.pathTo,
                  pathFrom: w.pathFrom,
                  x: l.globals.isXNumeric ? i - s : i,
                  y: a
                }
              )
            }
          }
        ]),
        e
      )
    })(),
    zt = (function () {
      l(e, V)
      var t = c(e)
      function e () {
        return r(this, e), t.apply(this, arguments)
      }
      return (
        n(e, [
          {
            key: 'draw',
            value: function (t, e) {
              var i = this.w,
                a = new Y(this.ctx),
                s = new R(this.ctx)
              this.candlestickOptions = this.w.config.plotOptions.candlestick
              var r = new P(this.ctx, i)
              ;(t = r.getLogSeries(t)),
                (this.series = t),
                (this.yRatio = r.getLogYRatios(this.yRatio)),
                this.barHelpers.initVariables(t)
              for (
                var n = a.group({
                    class:
                      'apexcharts-candlestick-series apexcharts-plot-series'
                  }),
                  o = 0;
                o < t.length;
                o++
              ) {
                var l,
                  h,
                  c,
                  d,
                  g = void 0,
                  u = void 0,
                  p = [],
                  f = [],
                  x = i.globals.comboCharts ? e[o] : o,
                  b = a.group({
                    class: 'apexcharts-series',
                    seriesName: I.escapeString(i.globals.seriesNames[x]),
                    rel: o + 1,
                    'data:realIndex': x
                  })
                0 < t[o].length && (this.visibleI = this.visibleI + 1),
                  1 < this.yRatio.length && (this.yaxisIndex = x)
                var m = this.barHelpers.initialPositions()
                ;(u = m.y),
                  (c = m.barHeight),
                  (g = m.x),
                  (d = m.barWidth),
                  (l = m.xDivision),
                  (h = m.zeroH),
                  f.push(g + d / 2)
                for (
                  var v = a.group({
                      class: 'apexcharts-datalabels',
                      'data:realIndex': x
                    }),
                    y = 0;
                  y < i.globals.dataPoints;
                  y++
                ) {
                  var w = this.barHelpers.getStrokeWidth(o, y, x),
                    k = this.drawCandleStickPaths({
                      indexes: { i: o, j: y, realIndex: x },
                      x: g,
                      y: u,
                      xDivision: l,
                      barWidth: d,
                      zeroH: h,
                      strokeWidth: w,
                      elSeries: b
                    }),
                    u = k.y,
                    g = k.x,
                    A = k.color
                  0 < y && f.push(g + d / 2), p.push(u)
                  var S = s.fillPath({
                      seriesNumber: x,
                      dataPointIndex: y,
                      color: A,
                      value: t[o][y]
                    }),
                    C = this.candlestickOptions.wick.useFillColor ? A : void 0
                  this.renderSeries({
                    realIndex: x,
                    pathFill: S,
                    lineFill: C,
                    j: y,
                    i: o,
                    pathFrom: k.pathFrom,
                    pathTo: k.pathTo,
                    strokeWidth: w,
                    elSeries: b,
                    x: g,
                    y: u,
                    series: t,
                    barHeight: c,
                    barWidth: d,
                    elDataLabelsWrap: v,
                    visibleSeries: this.visibleI,
                    type: 'candlestick'
                  })
                }
                ;(i.globals.seriesXvalues[x] = f),
                  (i.globals.seriesYvalues[x] = p),
                  n.add(b)
              }
              return n
            }
          },
          {
            key: 'drawCandleStickPaths',
            value: function (t) {
              var e = t.indexes,
                i = t.x,
                a = (t.y, t.xDivision),
                s = t.barWidth,
                r = t.zeroH,
                n = t.strokeWidth,
                o = this.w,
                l = new Y(this.ctx),
                h = e.i,
                c = e.j,
                d = !0,
                g = o.config.plotOptions.candlestick.colors.upward,
                u = o.config.plotOptions.candlestick.colors.downward,
                p = this.yRatio[this.yaxisIndex],
                f = e.realIndex,
                x = this.getOHLCValue(f, c),
                b = r,
                m = r
              x.o > x.c && (d = !1)
              var v = Math.min(x.o, x.c),
                y = Math.max(x.o, x.c)
              o.globals.isXNumeric &&
                (i =
                  (o.globals.seriesX[f][c] - o.globals.minX) / this.xRatio -
                  s / 2)
              var w = i + s * this.visibleI
              void 0 === this.series[h][c] || null === this.series[h][c]
                ? (v = r)
                : ((v = r - v / p),
                  (y = r - y / p),
                  (b = r - x.h / p),
                  (m = r - x.l / p))
              var k = l.move(w, r),
                A = l.move(w, v)
              return (
                0 < o.globals.previousPaths.length &&
                  (A = this.getPreviousPath(f, c, !0)),
                (k =
                  l.move(w, y) +
                  l.line(w + s / 2, y) +
                  l.line(w + s / 2, b) +
                  l.line(w + s / 2, y) +
                  l.line(w + s, y) +
                  l.line(w + s, v) +
                  l.line(w + s / 2, v) +
                  l.line(w + s / 2, m) +
                  l.line(w + s / 2, v) +
                  l.line(w, v) +
                  l.line(w, y - n / 2)),
                (A += l.move(w, v)),
                o.globals.isXNumeric || (i += a),
                {
                  pathTo: k,
                  pathFrom: A,
                  x: i,
                  y: y,
                  barXPosition: w,
                  color: d ? g : u
                }
              )
            }
          },
          {
            key: 'getOHLCValue',
            value: function (t, e) {
              var i = this.w
              return {
                o: i.globals.seriesCandleO[t][e],
                h: i.globals.seriesCandleH[t][e],
                l: i.globals.seriesCandleL[t][e],
                c: i.globals.seriesCandleC[t][e]
              }
            }
          }
        ]),
        e
      )
    })(),
    It =
      (n(qt, [
        {
          key: 'draw',
          value: function (t) {
            var e = this.w,
              i = new Y(this.ctx),
              a = i.group({ class: 'apexcharts-heatmap' })
            a.attr('clip-path', 'url(#gridRectMask'.concat(e.globals.cuid, ')'))
            var s = e.globals.gridWidth / e.globals.dataPoints,
              r = e.globals.gridHeight / e.globals.series.length,
              n = 0,
              o = !1
            this.checkColorRange()
            var l = t.slice()
            e.config.yaxis[0].reversed && ((o = !0), l.reverse())
            for (
              var h = o ? 0 : l.length - 1;
              o ? h < l.length : 0 <= h;
              o ? h++ : h--
            ) {
              var c,
                d = i.group({
                  class: 'apexcharts-series apexcharts-heatmap-series',
                  seriesName: I.escapeString(e.globals.seriesNames[h]),
                  rel: h + 1,
                  'data:realIndex': h
                })
              this.ctx.series.addCollapsedClassToSeries(d, h),
                e.config.chart.dropShadow.enabled &&
                  ((c = e.config.chart.dropShadow),
                  new E(this.ctx).dropShadow(d, c, h))
              for (var g = 0, u = 0; u < l[h].length; u++) {
                var p = 1,
                  f = e.config.plotOptions.heatmap.shadeIntensity,
                  x = this.determineHeatColor(h, u),
                  p =
                    e.globals.hasNegs || this.negRange
                      ? e.config.plotOptions.heatmap.reverseNegativeShade
                        ? x.percent < 0
                          ? (x.percent / 100) * (1.25 * f)
                          : (1 - x.percent / 100) * (1.25 * f)
                        : x.percent <= 0
                        ? 1 - (1 + x.percent / 100) * f
                        : (1 - x.percent / 100) * f
                      : 1 - x.percent / 100,
                  b = x.color,
                  m = new I()
                e.config.plotOptions.heatmap.enableShades &&
                  (p < 0 && (p = 0),
                  (b =
                    'dark' === this.w.config.theme.mode
                      ? I.hexToRgba(
                          m.shadeColor(-1 * p, x.color),
                          e.config.fill.opacity
                        )
                      : I.hexToRgba(
                          m.shadeColor(p, x.color),
                          e.config.fill.opacity
                        ))),
                  'image' === e.config.fill.type &&
                    (b = new R(this.ctx).fillPath({
                      seriesNumber: h,
                      dataPointIndex: u,
                      opacity: e.globals.hasNegs
                        ? x.percent < 0
                          ? 1 - (1 + x.percent / 100)
                          : f + x.percent / 100
                        : x.percent / 100,
                      patternID: I.randomId(),
                      width: e.config.fill.image.width
                        ? e.config.fill.image.width
                        : s,
                      height: e.config.fill.image.height
                        ? e.config.fill.image.height
                        : r
                    }))
                var v,
                  y,
                  w,
                  k = this.rectRadius,
                  A = i.drawRect(g, n, s, r, k)
                A.attr({ cx: g, cy: n }),
                  A.node.classList.add('apexcharts-heatmap-rect'),
                  d.add(A),
                  A.attr({
                    fill: b,
                    i: h,
                    index: h,
                    j: u,
                    val: l[h][u],
                    'stroke-width': this.strokeWidth,
                    stroke: e.config.plotOptions.heatmap.useFillColorAsStroke
                      ? b
                      : e.globals.stroke.colors[0],
                    color: b
                  }),
                  A.node.addEventListener(
                    'mouseenter',
                    i.pathMouseEnter.bind(this, A)
                  ),
                  A.node.addEventListener(
                    'mouseleave',
                    i.pathMouseLeave.bind(this, A)
                  ),
                  A.node.addEventListener(
                    'mousedown',
                    i.pathMouseDown.bind(this, A)
                  ),
                  e.config.chart.animations.enabled &&
                    !e.globals.dataChanged &&
                    ((v = 1),
                    e.globals.resized || (v = e.config.chart.animations.speed),
                    this.animateHeatMap(A, g, n, s, r, v)),
                  e.globals.dataChanged &&
                    ((y = 1),
                    this.dynamicAnim.enabled &&
                      e.globals.shouldAnimate &&
                      ((y = this.dynamicAnim.speed),
                      (w =
                        (w =
                          e.globals.previousPaths[h] &&
                          e.globals.previousPaths[h][u] &&
                          e.globals.previousPaths[h][u].color) ||
                        'rgba(255, 255, 255, 0)'),
                      this.animateHeatColor(
                        A,
                        I.isColorHex(w) ? w : I.rgb2hex(w),
                        I.isColorHex(b) ? b : I.rgb2hex(b),
                        y
                      )))
                var S = this.calculateHeatmapDataLabels({
                  x: g,
                  y: n,
                  i: h,
                  j: u,
                  heatColorProps: x,
                  series: l,
                  rectHeight: r,
                  rectWidth: s
                })
                null !== S && d.add(S), (g += s)
              }
              ;(n += r), a.add(d)
            }
            var C = e.globals.yAxisScale[0].result.slice()
            e.config.yaxis[0].reversed ? C.unshift('') : C.push(''),
              (e.globals.yAxisScale[0].result = C)
            var L = e.globals.gridHeight / e.globals.series.length
            return (e.config.yaxis[0].labels.offsetY = -L / 2), a
          }
        },
        {
          key: 'checkColorRange',
          value: function () {
            var i = this,
              t = this.w.config.plotOptions.heatmap
            0 < t.colorScale.ranges.length &&
              t.colorScale.ranges.map(function (t, e) {
                t.from <= 0 && (i.negRange = !0)
              })
          }
        },
        {
          key: 'determineHeatColor',
          value: function (t, e) {
            var i = this.w,
              a = i.globals.series[t][e],
              s = i.config.plotOptions.heatmap,
              r = s.colorScale.inverse ? e : t,
              n = i.globals.colors[r],
              o = null,
              l = Math.min.apply(Math, A(i.globals.series[t])),
              h = Math.max.apply(Math, A(i.globals.series[t]))
            s.distributed || ((l = i.globals.minY), (h = i.globals.maxY)),
              void 0 !== s.colorScale.min &&
                ((l =
                  s.colorScale.min < i.globals.minY
                    ? s.colorScale.min
                    : i.globals.minY),
                (h =
                  s.colorScale.max > i.globals.maxY
                    ? s.colorScale.max
                    : i.globals.maxY))
            var c = Math.abs(h) + Math.abs(l),
              d = (100 * a) / (0 === c ? c - 1e-6 : c)
            return (
              0 < s.colorScale.ranges.length &&
                s.colorScale.ranges.map(function (t, e) {
                  var i
                  a >= t.from &&
                    a <= t.to &&
                    ((n = t.color),
                    (o = t.foreColor ? t.foreColor : null),
                    (l = t.from),
                    (h = t.to),
                    (i = Math.abs(h) + Math.abs(l)),
                    (d = (100 * a) / (0 === i ? i - 1e-6 : i)))
                }),
              { color: n, foreColor: o, percent: d }
            )
          }
        },
        {
          key: 'calculateHeatmapDataLabels',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n = t.x,
              o = t.y,
              l = t.i,
              h = t.j,
              c = t.heatColorProps,
              d = (t.series, t.rectHeight),
              g = t.rectWidth,
              u = this.w,
              p = u.config.dataLabels,
              f = new Y(this.ctx),
              x = new N(this.ctx),
              b = p.formatter,
              m = null
            return (
              p.enabled &&
                ((m = f.group({ class: 'apexcharts-data-labels' })),
                (e = p.offsetX),
                (i = p.offsetY),
                (a = n + g / 2 + e),
                (s = o + d / 2 + parseFloat(p.style.fontSize) / 3 + i),
                (r = b(u.globals.series[l][h], {
                  seriesIndex: l,
                  dataPointIndex: h,
                  w: u
                })),
                x.plotDataLabelsText({
                  x: a,
                  y: s,
                  text: r,
                  i: l,
                  j: h,
                  color: c.foreColor,
                  parent: m,
                  dataLabelsConfig: p
                })),
              m
            )
          }
        },
        {
          key: 'animateHeatMap',
          value: function (t, e, i, a, s, r) {
            var n = new X(this.ctx)
            n.animateRect(
              t,
              { x: e + a / 2, y: i + s / 2, width: 0, height: 0 },
              { x: e, y: i, width: a, height: s },
              r,
              function () {
                n.animationCompleted(t)
              }
            )
          }
        },
        {
          key: 'animateHeatColor',
          value: function (t, e, i, a) {
            t.attr({ fill: e }).animate(a).attr({ fill: i })
          }
        }
      ]),
      qt),
    Mt =
      (n(Ut, [
        {
          key: 'drawYAxisTexts',
          value: function (t, e, i, a) {
            var s = this.w,
              r = s.config.yaxis[0],
              n = s.globals.yLabelFormatters[0]
            return new Y(this.ctx).drawText({
              x: t + r.labels.offsetX,
              y: e + r.labels.offsetY,
              text: n(a, i),
              textAnchor: 'middle',
              fontSize: r.labels.style.fontSize,
              fontFamily: r.labels.style.fontFamily,
              foreColor: Array.isArray(r.labels.style.colors)
                ? r.labels.style.colors[i]
                : r.labels.style.colors
            })
          }
        }
      ]),
      Ut),
    Et =
      (n(jt, [
        {
          key: 'draw',
          value: function (t) {
            var e = this,
              i = this.w,
              a = new Y(this.ctx)
            if (
              ((this.ret = a.group({ class: 'apexcharts-pie' })),
              i.globals.noData)
            )
              return this.ret
            for (var s = 0, r = 0; r < t.length; r++) s += I.negToZero(t[r])
            var n = [],
              o = a.group()
            0 === s && (s = 1e-5),
              t.forEach(function (t) {
                e.maxY = Math.max(e.maxY, t)
              }),
              'polarArea' === this.chartType && this.drawPolarElements()
            for (var l = 0; l < t.length; l++) {
              var h = (this.fullAngle * I.negToZero(t[l])) / s
              n.push(h),
                'polarArea' === this.chartType
                  ? ((n[l] = this.fullAngle / t.length),
                    this.sliceSizes.push(
                      (i.globals.radialSize * t[l]) / this.maxY
                    ))
                  : this.sliceSizes.push(i.globals.radialSize)
            }
            if (i.globals.dataChanged) {
              for (var c, d = 0, g = 0; g < i.globals.previousPaths.length; g++)
                d += I.negToZero(i.globals.previousPaths[g])
              for (var u = 0; u < i.globals.previousPaths.length; u++)
                (c =
                  (this.fullAngle * I.negToZero(i.globals.previousPaths[u])) /
                  d),
                  this.prevSectorAngleArr.push(c)
            }
            this.donutSize < 0 && (this.donutSize = 0)
            var p,
              f = i.config.plotOptions.pie.customScale,
              x = i.globals.gridWidth / 2,
              b = i.globals.gridHeight / 2,
              m = x - (i.globals.gridWidth / 2) * f,
              v = b - (i.globals.gridHeight / 2) * f
            'donut' === this.chartType &&
              ((p = a.drawCircle(this.donutSize)).attr({
                cx: this.centerX,
                cy: this.centerY,
                fill: i.config.plotOptions.pie.donut.background
                  ? i.config.plotOptions.pie.donut.background
                  : 'transparent'
              }),
              o.add(p))
            var y,
              w = this.drawArcs(n, t)
            return (
              this.sliceLabels.forEach(function (t) {
                w.add(t)
              }),
              o.attr({
                transform: 'translate('
                  .concat(m, ', ')
                  .concat(v, ') scale(')
                  .concat(f, ')')
              }),
              o.add(w),
              this.ret.add(o),
              this.donutDataLabels.show &&
                ((y = this.renderInnerDataLabels(this.donutDataLabels, {
                  hollowSize: this.donutSize,
                  centerX: this.centerX,
                  centerY: this.centerY,
                  opacity: this.donutDataLabels.show,
                  translateX: m,
                  translateY: v
                })),
                this.ret.add(y)),
              this.ret
            )
          }
        },
        {
          key: 'drawArcs',
          value: function (t, e) {
            var i,
              a,
              s = this.w,
              r = new E(this.ctx),
              n = new Y(this.ctx),
              o = new R(this.ctx),
              l = n.group({ class: 'apexcharts-slices' }),
              h = s.config.plotOptions.pie.startAngle % this.fullAngle,
              c = h,
              d = h
            this.strokeWidth = s.config.stroke.show ? s.config.stroke.width : 0
            for (var g = 0; g < t.length; g++) {
              var u = n.group({
                class: 'apexcharts-series apexcharts-pie-series',
                seriesName: I.escapeString(s.globals.seriesNames[g]),
                rel: g + 1,
                'data:realIndex': g
              })
              l.add(u),
                (a = d),
                (c = (i = c) + t[g]),
                (d = a + this.prevSectorAngleArr[g])
              var p,
                f = c < i ? this.fullAngle + c - i : c - i,
                x = o.fillPath({
                  seriesNumber: g,
                  size: this.sliceSizes[g],
                  value: e[g]
                }),
                b = this.getChangedPath(a, d),
                m = n.drawPath({
                  d: b,
                  stroke:
                    this.lineColorArr instanceof Array
                      ? this.lineColorArr[g]
                      : this.lineColorArr,
                  strokeWidth: 0,
                  fill: x,
                  fillOpacity: s.config.fill.opacity,
                  classes: 'apexcharts-pie-area apexcharts-'
                    .concat(this.chartType.toLowerCase(), '-slice-')
                    .concat(g)
                })
              m.attr({ index: 0, j: g }),
                s.config.chart.dropShadow.enabled &&
                  ((p = s.config.chart.dropShadow), r.dropShadow(m, p, g)),
                this.addListeners(m, this.donutDataLabels),
                Y.setAttrs(m.node, {
                  'data:angle': f,
                  'data:startAngle': i,
                  'data:strokeWidth': this.strokeWidth,
                  'data:value': e[g]
                })
              var v = { x: 0, y: 0 }
              'pie' === this.chartType || 'polarArea' === this.chartType
                ? (v = I.polarToCartesian(
                    this.centerX,
                    this.centerY,
                    s.globals.radialSize / 1.25 +
                      s.config.plotOptions.pie.dataLabels.offset,
                    (i + f / 2) % this.fullAngle
                  ))
                : 'donut' === this.chartType &&
                  (v = I.polarToCartesian(
                    this.centerX,
                    this.centerY,
                    (s.globals.radialSize + this.donutSize) / 2 +
                      s.config.plotOptions.pie.dataLabels.offset,
                    (i + f / 2) % this.fullAngle
                  )),
                u.add(m)
              var y,
                w,
                k,
                A,
                S,
                C,
                L,
                P,
                T = 0
              !this.initialAnim || s.globals.resized || s.globals.dataChanged
                ? this.animBeginArr.push(0)
                : (0 ==
                    (T =
                      (f / this.fullAngle) * s.config.chart.animations.speed) &&
                    (T = 1),
                  (this.animDur = T + this.animDur),
                  this.animBeginArr.push(this.animDur)),
                this.dynamicAnim && s.globals.dataChanged
                  ? this.animatePaths(m, {
                      size: this.sliceSizes[g],
                      endAngle: c,
                      startAngle: i,
                      prevStartAngle: a,
                      prevEndAngle: d,
                      animateStartingPos: !0,
                      i: g,
                      animBeginArr: this.animBeginArr,
                      shouldSetPrevPaths: !0,
                      dur: s.config.chart.animations.dynamicAnimation.speed
                    })
                  : this.animatePaths(m, {
                      size: this.sliceSizes[g],
                      endAngle: c,
                      startAngle: i,
                      i: g,
                      totalItems: t.length - 1,
                      animBeginArr: this.animBeginArr,
                      dur: T
                    }),
                s.config.plotOptions.pie.expandOnClick &&
                  'polarArea' !== this.chartType &&
                  m.click(this.pieClicked.bind(this, g)),
                s.config.dataLabels.enabled &&
                  ((y = v.x),
                  (w = v.y),
                  (k = (100 * f) / this.fullAngle + '%'),
                  0 != f &&
                    s.config.plotOptions.pie.dataLabels.minAngleToShowLabel <
                      t[g] &&
                    (void 0 !== (A = s.config.dataLabels.formatter) &&
                      (k = A(s.globals.seriesPercent[g][0], {
                        seriesIndex: g,
                        w: s
                      })),
                    (S = s.globals.dataLabels.style.colors[g]),
                    (C = n.group({ class: 'apexcharts-datalabels' })),
                    (L = n.drawText({
                      x: y,
                      y: w,
                      text: k,
                      textAnchor: 'middle',
                      fontSize: s.config.dataLabels.style.fontSize,
                      fontFamily: s.config.dataLabels.style.fontFamily,
                      fontWeight: s.config.dataLabels.style.fontWeight,
                      foreColor: S
                    })),
                    C.add(L),
                    s.config.dataLabels.dropShadow.enabled &&
                      ((P = s.config.dataLabels.dropShadow),
                      r.dropShadow(L, P)),
                    L.node.classList.add('apexcharts-pie-label'),
                    s.config.chart.animations.animate &&
                      !1 === s.globals.resized &&
                      (L.node.classList.add('apexcharts-pie-label-delay'),
                      (L.node.style.animationDelay =
                        s.config.chart.animations.speed / 940 + 's')),
                    this.sliceLabels.push(C)))
            }
            return l
          }
        },
        {
          key: 'addListeners',
          value: function (t, e) {
            var i = new Y(this.ctx)
            t.node.addEventListener(
              'mouseenter',
              i.pathMouseEnter.bind(this, t)
            ),
              t.node.addEventListener(
                'mouseleave',
                i.pathMouseLeave.bind(this, t)
              ),
              t.node.addEventListener(
                'mouseleave',
                this.revertDataLabelsInner.bind(this, t.node, e)
              ),
              t.node.addEventListener(
                'mousedown',
                i.pathMouseDown.bind(this, t)
              ),
              this.donutDataLabels.total.showAlways ||
                (t.node.addEventListener(
                  'mouseenter',
                  this.printDataLabelsInner.bind(this, t.node, e)
                ),
                t.node.addEventListener(
                  'mousedown',
                  this.printDataLabelsInner.bind(this, t.node, e)
                ))
          }
        },
        {
          key: 'animatePaths',
          value: function (t, e) {
            var i = this.w,
              a =
                e.endAngle < e.startAngle
                  ? this.fullAngle + e.endAngle - e.startAngle
                  : e.endAngle - e.startAngle,
              s = a,
              r = e.startAngle,
              n = e.startAngle
            void 0 !== e.prevStartAngle &&
              void 0 !== e.prevEndAngle &&
              ((r = e.prevEndAngle),
              (s =
                e.prevEndAngle < e.prevStartAngle
                  ? this.fullAngle + e.prevEndAngle - e.prevStartAngle
                  : e.prevEndAngle - e.prevStartAngle)),
              e.i === i.config.series.length - 1 &&
                (a + n > this.fullAngle
                  ? (e.endAngle = e.endAngle - (a + n))
                  : a + n < this.fullAngle &&
                    (e.endAngle = e.endAngle + (this.fullAngle - (a + n)))),
              a === this.fullAngle && (a = this.fullAngle - 0.01),
              this.animateArc(t, r, n, a, s, e)
          }
        },
        {
          key: 'animateArc',
          value: function (e, i, a, s, r, n) {
            var o,
              l = this,
              t = this.w,
              h = new X(this.ctx),
              c = n.size
            ;(isNaN(i) || isNaN(r)) && ((i = a), (r = s), (n.dur = 0))
            var d = s,
              g = a,
              u = i < a ? this.fullAngle + i - a : i - a
            t.globals.dataChanged &&
              n.shouldSetPrevPaths &&
              n.prevEndAngle &&
              ((o = l.getPiePath({
                me: l,
                startAngle: n.prevStartAngle,
                angle:
                  n.prevEndAngle < n.prevStartAngle
                    ? this.fullAngle + n.prevEndAngle - n.prevStartAngle
                    : n.prevEndAngle - n.prevStartAngle,
                size: c
              })),
              e.attr({ d: o })),
              0 !== n.dur
                ? e
                    .animate(n.dur, t.globals.easing, n.animBeginArr[n.i])
                    .afterAll(function () {
                      ;('pie' !== l.chartType &&
                        'donut' !== l.chartType &&
                        'polarArea' !== l.chartType) ||
                        this.animate(
                          t.config.chart.animations.dynamicAnimation.speed
                        ).attr({ 'stroke-width': l.strokeWidth }),
                        n.i === t.config.series.length - 1 &&
                          h.animationCompleted(e)
                    })
                    .during(function (t) {
                      ;(d = u + (s - u) * t),
                        n.animateStartingPos &&
                          ((d = r + (s - r) * t),
                          (g = i - r + (a - (i - r)) * t)),
                        (o = l.getPiePath({
                          me: l,
                          startAngle: g,
                          angle: d,
                          size: c
                        })),
                        e.node.setAttribute('data:pathOrig', o),
                        e.attr({ d: o })
                    })
                : ((o = l.getPiePath({
                    me: l,
                    startAngle: g,
                    angle: s,
                    size: c
                  })),
                  n.isTrack || (t.globals.animationEnded = !0),
                  e.node.setAttribute('data:pathOrig', o),
                  e.attr({ d: o, 'stroke-width': l.strokeWidth }))
          }
        },
        {
          key: 'pieClicked',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n = this.w,
              o =
                this.sliceSizes[t] +
                (n.config.plotOptions.pie.expandOnClick ? 4 : 0),
              l = n.globals.dom.Paper.select(
                '.apexcharts-'
                  .concat(this.chartType.toLowerCase(), '-slice-')
                  .concat(t)
              ).members[0]
            'true' !== l.attr('data:pieClicked')
              ? ((e = n.globals.dom.baseEl.getElementsByClassName(
                  'apexcharts-pie-area'
                )),
                Array.prototype.forEach.call(e, function (t) {
                  t.setAttribute('data:pieClicked', 'false')
                  var e = t.getAttribute('data:pathOrig')
                  t.setAttribute('d', e)
                }),
                l.attr('data:pieClicked', 'true'),
                (i = parseInt(l.attr('data:startAngle'), 10)),
                (a = parseInt(l.attr('data:angle'), 10)),
                (s = this.getPiePath({
                  me: this,
                  startAngle: i,
                  angle: a,
                  size: o
                })),
                360 !== a && l.plot(s))
              : (l.attr({ 'data:pieClicked': 'false' }),
                this.revertDataLabelsInner(l.node, this.donutDataLabels),
                (r = l.attr('data:pathOrig')),
                l.attr({ d: r }))
          }
        },
        {
          key: 'getChangedPath',
          value: function (t, e) {
            var i = ''
            return (
              this.dynamicAnim &&
                this.w.globals.dataChanged &&
                (i = this.getPiePath({
                  me: this,
                  startAngle: t,
                  angle: e - t,
                  size: this.size
                })),
              i
            )
          }
        },
        {
          key: 'getPiePath',
          value: function (t) {
            var e = t.me,
              i = t.startAngle,
              a = t.angle,
              s = t.size,
              r = i,
              n = (Math.PI * (r - 90)) / 180,
              o = a + i
            Math.ceil(o) >=
              this.fullAngle +
                (this.w.config.plotOptions.pie.startAngle % this.fullAngle) &&
              (o =
                this.fullAngle +
                (this.w.config.plotOptions.pie.startAngle % this.fullAngle) -
                0.01),
              Math.ceil(o) > this.fullAngle && (o -= this.fullAngle)
            var l = (Math.PI * (o - 90)) / 180,
              h = e.centerX + s * Math.cos(n),
              c = e.centerY + s * Math.sin(n),
              d = e.centerX + s * Math.cos(l),
              g = e.centerY + s * Math.sin(l),
              u = I.polarToCartesian(e.centerX, e.centerY, e.donutSize, o),
              p = I.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
              f = 180 < a ? 1 : 0,
              x = ['M', h, c, 'A', s, s, 0, f, 1, d, g]
            return 'donut' === e.chartType
              ? []
                  .concat(x, [
                    'L',
                    u.x,
                    u.y,
                    'A',
                    e.donutSize,
                    e.donutSize,
                    0,
                    f,
                    0,
                    p.x,
                    p.y,
                    'L',
                    h,
                    c,
                    'z'
                  ])
                  .join(' ')
              : 'pie' === e.chartType || 'polarArea' === e.chartType
              ? [].concat(x, ['L', e.centerX, e.centerY, 'L', h, c]).join(' ')
              : [].concat(x).join(' ')
          }
        },
        {
          key: 'drawPolarElements',
          value: function () {
            var t = this.w,
              e = new it(this.ctx),
              i = new Y(this.ctx),
              a = new Mt(this.ctx),
              s = i.group(),
              r = i.group(),
              n =
                void 0 === t.config.yaxis[0].max &&
                void 0 === t.config.yaxis[0].min,
              o = e.niceScale(
                0,
                Math.ceil(this.maxY),
                t.config.yaxis[0].tickAmount,
                0,
                n
              ),
              l = o.result.reverse(),
              h = o.result.length
            this.maxY = o.niceMax
            for (
              var c = t.globals.radialSize, d = c / (h - 1), g = 0;
              g < h - 1;
              g++
            ) {
              var u,
                p = i.drawCircle(c)
              p.attr({
                cx: this.centerX,
                cy: this.centerY,
                fill: 'none',
                'stroke-width':
                  t.config.plotOptions.polarArea.rings.strokeWidth,
                stroke: t.config.plotOptions.polarArea.rings.strokeColor
              }),
                t.config.yaxis[0].show &&
                  ((u = a.drawYAxisTexts(
                    this.centerX,
                    this.centerY -
                      c +
                      parseInt(t.config.yaxis[0].labels.style.fontSize, 10) / 2,
                    g,
                    l[g]
                  )),
                  r.add(u)),
                s.add(p),
                (c -= d)
            }
            this.ret.add(s), this.ret.add(r)
          }
        },
        {
          key: 'renderInnerDataLabels',
          value: function (t, e) {
            var i = this.w,
              a = new Y(this.ctx),
              s = a.group({
                class: 'apexcharts-datalabels-group',
                transform: 'translate('
                  .concat(e.translateX ? e.translateX : 0, ', ')
                  .concat(e.translateY ? e.translateY : 0, ') scale(')
                  .concat(i.config.plotOptions.pie.customScale, ')')
              }),
              r = t.total.show
            s.node.style.opacity = e.opacity
            var n,
              o,
              l,
              h = e.centerX,
              c = e.centerY,
              d = void 0 === t.name.color ? i.globals.colors[0] : t.name.color,
              g = t.name.fontSize,
              u = t.name.fontFamily,
              p = t.value.fontWeight,
              f =
                void 0 === t.value.color
                  ? i.config.chart.foreColor
                  : t.value.color,
              x = t.value.formatter,
              b = '',
              m = ''
            return (
              r
                ? ((d = t.total.color),
                  (g = t.total.fontSize),
                  (u = t.total.fontFamily),
                  (p = t.total.fontWeight),
                  (m = t.total.label),
                  (b = t.total.formatter(i)))
                : 1 === i.globals.series.length &&
                  ((b = x(i.globals.series[0], i)),
                  (m = i.globals.seriesNames[0])),
              (m = m && t.name.formatter(m, t.total.show, i)),
              t.name.show &&
                ((n = a.drawText({
                  x: h,
                  y: c + parseFloat(t.name.offsetY),
                  text: m,
                  textAnchor: 'middle',
                  foreColor: d,
                  fontSize: g,
                  fontWeight: p,
                  fontFamily: u
                })).node.classList.add('apexcharts-datalabel-label'),
                s.add(n)),
              t.value.show &&
                ((o = t.name.show
                  ? parseFloat(t.value.offsetY) + 16
                  : t.value.offsetY),
                (l = a.drawText({
                  x: h,
                  y: c + o,
                  text: b,
                  textAnchor: 'middle',
                  foreColor: f,
                  fontWeight: t.value.fontWeight,
                  fontSize: t.value.fontSize,
                  fontFamily: t.value.fontFamily
                })).node.classList.add('apexcharts-datalabel-value'),
                s.add(l)),
              s
            )
          }
        },
        {
          key: 'printInnerLabels',
          value: function (t, e, i, a) {
            var s,
              r = this.w
            a
              ? (s =
                  void 0 === t.name.color
                    ? r.globals.colors[
                        parseInt(a.parentNode.getAttribute('rel'), 10) - 1
                      ]
                    : t.name.color)
              : 1 < r.globals.series.length &&
                t.total.show &&
                (s = t.total.color)
            var n = r.globals.dom.baseEl.querySelector(
                '.apexcharts-datalabel-label'
              ),
              o = r.globals.dom.baseEl.querySelector(
                '.apexcharts-datalabel-value'
              )
            ;(i = (0, t.value.formatter)(i, r)),
              a ||
                'function' != typeof t.total.formatter ||
                (i = t.total.formatter(r))
            var l = e === t.total.label
            ;(e = t.name.formatter(e, l, r)),
              null !== n && (n.textContent = e),
              null !== o && (o.textContent = i),
              null !== n && (n.style.fill = s)
          }
        },
        {
          key: 'printDataLabelsInner',
          value: function (t, e) {
            var i = this.w,
              a = t.getAttribute('data:value'),
              s =
                i.globals.seriesNames[
                  parseInt(t.parentNode.getAttribute('rel'), 10) - 1
                ]
            1 < i.globals.series.length && this.printInnerLabels(e, s, a, t)
            var r = i.globals.dom.baseEl.querySelector(
              '.apexcharts-datalabels-group'
            )
            null !== r && (r.style.opacity = 1)
          }
        },
        {
          key: 'revertDataLabelsInner',
          value: function (t, a, e) {
            function i (t) {
              var e = t.makeSliceOut,
                i = t.printLabel
              Array.prototype.forEach.call(c, function (t) {
                'true' === t.getAttribute('data:pieClicked') &&
                  (e && (h = !0), i && n.printDataLabelsInner(t, a))
              })
            }
            var s,
              r,
              n = this,
              o = this.w,
              l = o.globals.dom.baseEl.querySelector(
                '.apexcharts-datalabels-group'
              ),
              h = !1,
              c = o.globals.dom.baseEl.getElementsByClassName(
                'apexcharts-pie-area'
              )
            i({ makeSliceOut: !0, printLabel: !1 }),
              a.total.show && 1 < o.globals.series.length
                ? h && !a.total.showAlways
                  ? i({ makeSliceOut: !1, printLabel: !0 })
                  : this.printInnerLabels(
                      a,
                      a.total.label,
                      a.total.formatter(o)
                    )
                : (i({ makeSliceOut: !1, printLabel: !0 }),
                  h ||
                    (o.globals.selectedDataPoints.length &&
                    1 < o.globals.series.length
                      ? 0 < o.globals.selectedDataPoints[0].length
                        ? ((s = o.globals.selectedDataPoints[0]),
                          (r = o.globals.dom.baseEl.querySelector(
                            '.apexcharts-'
                              .concat(this.chartType.toLowerCase(), '-slice-')
                              .concat(s)
                          )),
                          this.printDataLabelsInner(r, a))
                        : l &&
                          o.globals.selectedDataPoints.length &&
                          0 === o.globals.selectedDataPoints[0].length &&
                          (l.style.opacity = 0)
                      : l &&
                        1 < o.globals.series.length &&
                        (l.style.opacity = 0)))
          }
        }
      ]),
      jt),
    Xt =
      (n(_t, [
        {
          key: 'draw',
          value: function (t) {
            var u = this,
              p = this.w,
              f = new R(this.ctx),
              x = [],
              b = new N(this.ctx)
            t.length &&
              (this.dataPointsLen = t[p.globals.maxValsInArrayIndex].length),
              (this.disAngle = (2 * Math.PI) / this.dataPointsLen)
            var m,
              v,
              e,
              i = p.globals.gridWidth / 2,
              a = p.globals.gridHeight / 2,
              s = i + p.config.plotOptions.radar.offsetX,
              r = a + p.config.plotOptions.radar.offsetY,
              n = this.graphics.group({
                class: 'apexcharts-radar-series apexcharts-plot-series',
                transform: 'translate('.concat(s || 0, ', ').concat(r || 0, ')')
              }),
              y = null
            return (
              (this.yaxisLabels = this.graphics.group({
                class: 'apexcharts-yaxis'
              })),
              t.forEach(function (t, o) {
                var e = t.length === p.globals.dataPoints,
                  l = u.graphics
                    .group()
                    .attr({
                      class: 'apexcharts-series',
                      'data:longestSeries': e,
                      seriesName: I.escapeString(p.globals.seriesNames[o]),
                      rel: o + 1,
                      'data:realIndex': o
                    })
                ;(u.dataRadiusOfPercent[o] = []),
                  (u.dataRadius[o] = []),
                  (u.angleArr[o] = []),
                  t.forEach(function (t, e) {
                    var i = Math.abs(u.maxValue - u.minValue)
                    ;(t += Math.abs(u.minValue)),
                      (u.dataRadiusOfPercent[o][e] = t / i),
                      (u.dataRadius[o][e] =
                        u.dataRadiusOfPercent[o][e] * u.size),
                      (u.angleArr[o][e] = e * u.disAngle)
                  }),
                  (m = u.getDataPointsPos(u.dataRadius[o], u.angleArr[o]))
                var i = u.createPaths(m, { x: 0, y: 0 })
                ;(y = u.graphics.group({
                  class:
                    'apexcharts-series-markers-wrap apexcharts-element-hidden'
                })),
                  (v = u.graphics.group({
                    class: 'apexcharts-datalabels',
                    'data:realIndex': o
                  })),
                  p.globals.delayedElements.push({ el: y.node, index: o })
                var a = {
                    i: o,
                    realIndex: o,
                    animationDelay: o,
                    initialSpeed: p.config.chart.animations.speed,
                    dataChangeSpeed:
                      p.config.chart.animations.dynamicAnimation.speed,
                    className: 'apexcharts-radar',
                    shouldClipToGrid: !1,
                    bindEventsOnPaths: !1,
                    stroke: p.globals.stroke.colors[o],
                    strokeLineCap: p.config.stroke.lineCap
                  },
                  s = null
                0 < p.globals.previousPaths.length && (s = u.getPreviousPath(o))
                for (var r = 0; r < i.linePathsTo.length; r++) {
                  var n = u.graphics.renderPaths(
                    M(
                      M({}, a),
                      {},
                      {
                        pathFrom: null === s ? i.linePathsFrom[r] : s,
                        pathTo: i.linePathsTo[r],
                        strokeWidth: Array.isArray(u.strokeWidth)
                          ? u.strokeWidth[o]
                          : u.strokeWidth,
                        fill: 'none',
                        drawShadow: !1
                      }
                    )
                  )
                  l.add(n)
                  var h,
                    c,
                    d = f.fillPath({ seriesNumber: o }),
                    g = u.graphics.renderPaths(
                      M(
                        M({}, a),
                        {},
                        {
                          pathFrom: null === s ? i.areaPathsFrom[r] : s,
                          pathTo: i.areaPathsTo[r],
                          strokeWidth: 0,
                          fill: d,
                          drawShadow: !1
                        }
                      )
                    )
                  p.config.chart.dropShadow.enabled &&
                    ((h = new E(u.ctx)),
                    (c = p.config.chart.dropShadow),
                    h.dropShadow(
                      g,
                      Object.assign({}, c, { noUserSpaceOnUse: !0 }),
                      o
                    )),
                    l.add(g)
                }
                t.forEach(function (t, e) {
                  var i = new D(u.ctx).getMarkerConfig(
                      'apexcharts-marker',
                      o,
                      e
                    ),
                    a = u.graphics.drawMarker(m[e].x, m[e].y, i)
                  a.attr('rel', e),
                    a.attr('j', e),
                    a.attr('index', o),
                    a.node.setAttribute('default-marker-size', i.pSize)
                  var s = u.graphics.group({
                    class: 'apexcharts-series-markers'
                  })
                  s && s.add(a), y.add(s), l.add(y)
                  var r,
                    n = p.config.dataLabels
                  n.enabled &&
                    ((r = n.formatter(p.globals.series[o][e], {
                      seriesIndex: o,
                      dataPointIndex: e,
                      w: p
                    })),
                    b.plotDataLabelsText({
                      x: m[e].x,
                      y: m[e].y,
                      text: r,
                      textAnchor: 'middle',
                      i: o,
                      j: o,
                      parent: v,
                      offsetCorrection: !1,
                      dataLabelsConfig: M({}, n)
                    })),
                    l.add(v)
                }),
                  x.push(l)
              }),
              this.drawPolygons({ parent: n }),
              p.config.xaxis.labels.show &&
                ((e = this.drawXAxisTexts()), n.add(e)),
              n.add(this.yaxisLabels),
              x.forEach(function (t) {
                n.add(t)
              }),
              n
            )
          }
        },
        {
          key: 'drawPolygons',
          value: function (t) {
            for (
              var r = this,
                n = this.w,
                o = t.parent,
                a = new Mt(this.ctx),
                s = n.globals.yAxisScale[0].result.reverse(),
                e = s.length,
                i = [],
                l = this.size / (e - 1),
                h = 0;
              h < e;
              h++
            )
              i[h] = l * h
            i.reverse()
            var c = [],
              d = []
            i.forEach(function (t, a) {
              var e = r.getPolygonPos(t),
                s = ''
              e.forEach(function (t, e) {
                var i
                0 === a &&
                  ((i = r.graphics.drawLine(
                    t.x,
                    t.y,
                    0,
                    0,
                    Array.isArray(r.polygons.connectorColors)
                      ? r.polygons.connectorColors[e]
                      : r.polygons.connectorColors
                  )),
                  d.push(i)),
                  0 === e && r.yaxisLabelsTextsPos.push({ x: t.x, y: t.y }),
                  (s += t.x + ',' + t.y + ' ')
              }),
                c.push(s)
            }),
              c.forEach(function (t, e) {
                var i = r.polygons.strokeColors,
                  a = r.polygons.strokeWidth,
                  s = r.graphics.drawPolygon(
                    t,
                    Array.isArray(i) ? i[e] : i,
                    Array.isArray(a) ? a[e] : a,
                    n.globals.radarPolygons.fill.colors[e]
                  )
                o.add(s)
              }),
              d.forEach(function (t) {
                o.add(t)
              }),
              n.config.yaxis[0].show &&
                this.yaxisLabelsTextsPos.forEach(function (t, e) {
                  var i = a.drawYAxisTexts(t.x, t.y, e, s[e])
                  r.yaxisLabels.add(i)
                })
          }
        },
        {
          key: 'drawXAxisTexts',
          value: function () {
            var n = this,
              o = this.w,
              l = o.config.xaxis.labels,
              h = this.graphics.group({ class: 'apexcharts-xaxis' }),
              c = this.getPolygonPos(this.size)
            return (
              o.globals.labels.forEach(function (t, e) {
                var i,
                  a,
                  s = o.config.xaxis.labels.formatter,
                  r = new N(n.ctx)
                c[e] &&
                  ((i = n.getTextPos(c[e], n.size)),
                  (a = s(t, { seriesIndex: -1, dataPointIndex: e, w: o })),
                  r.plotDataLabelsText({
                    x: i.newX,
                    y: i.newY,
                    text: a,
                    textAnchor: i.textAnchor,
                    i: e,
                    j: e,
                    parent: h,
                    color: l.style.colors[e] ? l.style.colors[e] : '#a8a8a8',
                    dataLabelsConfig: M(
                      { textAnchor: i.textAnchor, dropShadow: { enabled: !1 } },
                      l
                    ),
                    offsetCorrection: !1
                  }))
              }),
              h
            )
          }
        },
        {
          key: 'createPaths',
          value: function (i, t) {
            var a,
              s,
              r = this,
              e = [],
              n = [],
              o = [],
              l = []
            return (
              i.length &&
                ((n = [this.graphics.move(t.x, t.y)]),
                (l = [this.graphics.move(t.x, t.y)]),
                (a = this.graphics.move(i[0].x, i[0].y)),
                (s = this.graphics.move(i[0].x, i[0].y)),
                i.forEach(function (t, e) {
                  ;(a += r.graphics.line(t.x, t.y)),
                    (s += r.graphics.line(t.x, t.y)),
                    e === i.length - 1 && ((a += 'Z'), (s += 'Z'))
                }),
                e.push(a),
                o.push(s)),
              {
                linePathsFrom: n,
                linePathsTo: e,
                areaPathsFrom: l,
                areaPathsTo: o
              }
            )
          }
        },
        {
          key: 'getTextPos',
          value: function (t, e) {
            var i = 'middle',
              a = t.x,
              s = t.y
            return (
              10 <= Math.abs(t.x)
                ? 0 < t.x
                  ? ((i = 'start'), (a += 10))
                  : t.x < 0 && ((i = 'end'), (a -= 10))
                : (i = 'middle'),
              Math.abs(t.y) >= e - 10 &&
                (t.y < 0 ? (s -= 10) : 0 < t.y && (s += 10)),
              { textAnchor: i, newX: a, newY: s }
            )
          }
        },
        {
          key: 'getPreviousPath',
          value: function (t) {
            for (
              var e = this.w, i = null, a = 0;
              a < e.globals.previousPaths.length;
              a++
            ) {
              var s = e.globals.previousPaths[a]
              0 < s.paths.length &&
                parseInt(s.realIndex, 10) === parseInt(t, 10) &&
                void 0 !== e.globals.previousPaths[a].paths[0] &&
                (i = e.globals.previousPaths[a].paths[0].d)
            }
            return i
          }
        },
        {
          key: 'getDataPointsPos',
          value: function (t, e) {
            var i =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : this.dataPointsLen
            ;(t = t || []), (e = e || [])
            for (var a = [], s = 0; s < i; s++) {
              var r = {}
              ;(r.x = t[s] * Math.sin(e[s])),
                (r.y = -t[s] * Math.cos(e[s])),
                a.push(r)
            }
            return a
          }
        },
        {
          key: 'getPolygonPos',
          value: function (t) {
            for (
              var e = [], i = (2 * Math.PI) / this.dataPointsLen, a = 0;
              a < this.dataPointsLen;
              a++
            ) {
              var s = {}
              ;(s.x = t * Math.sin(a * i)),
                (s.y = -t * Math.cos(a * i)),
                e.push(s)
            }
            return e
          }
        }
      ]),
      _t),
    Yt = (function () {
      l(s, Et)
      var a = c(s)
      function s (t) {
        var e
        r(this, s),
          ((e = a.call(this, t)).ctx = t),
          (e.w = t.w),
          (e.animBeginArr = [0]),
          (e.animDur = 0)
        var i = e.w
        return (
          (e.startAngle = i.config.plotOptions.radialBar.startAngle),
          (e.endAngle = i.config.plotOptions.radialBar.endAngle),
          (e.totalAngle = Math.abs(
            i.config.plotOptions.radialBar.endAngle -
              i.config.plotOptions.radialBar.startAngle
          )),
          (e.trackStartAngle = i.config.plotOptions.radialBar.track.startAngle),
          (e.trackEndAngle = i.config.plotOptions.radialBar.track.endAngle),
          (e.radialDataLabels = i.config.plotOptions.radialBar.dataLabels),
          e.trackStartAngle || (e.trackStartAngle = e.startAngle),
          e.trackEndAngle || (e.trackEndAngle = e.endAngle),
          360 === e.endAngle && (e.endAngle = 359.99),
          (e.margin = parseInt(
            i.config.plotOptions.radialBar.track.margin,
            10
          )),
          e
        )
      }
      return (
        n(s, [
          {
            key: 'draw',
            value: function (t) {
              var e = this.w,
                i = new Y(this.ctx),
                a = i.group({ class: 'apexcharts-radialbar' })
              if (e.globals.noData) return a
              var s = i.group(),
                r = this.defaultSize / 2,
                n = e.globals.gridWidth / 2,
                o = this.defaultSize / 2.05
              e.config.chart.sparkline.enabled ||
                (o = o - e.config.stroke.width - e.config.chart.dropShadow.blur)
              var l,
                h = e.globals.fill.colors
              e.config.plotOptions.radialBar.track.show &&
                ((l = this.drawTracks({
                  size: o,
                  centerX: n,
                  centerY: r,
                  colorArr: h,
                  series: t
                })),
                s.add(l))
              var c = this.drawArcs({
                  size: o,
                  centerX: n,
                  centerY: r,
                  colorArr: h,
                  series: t
                }),
                d = 360
              e.config.plotOptions.radialBar.startAngle < 0 &&
                (d = this.totalAngle)
              var g,
                u = (360 - d) / 360
              return (
                (e.globals.radialSize = o - o * u),
                this.radialDataLabels.value.show &&
                  ((g = Math.max(
                    this.radialDataLabels.value.offsetY,
                    this.radialDataLabels.name.offsetY
                  )),
                  (e.globals.radialSize += g * u)),
                s.add(c.g),
                'front' === e.config.plotOptions.radialBar.hollow.position &&
                  (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)),
                a.add(s),
                a
              )
            }
          },
          {
            key: 'drawTracks',
            value: function (t) {
              var e = this.w,
                i = new Y(this.ctx),
                a = i.group({ class: 'apexcharts-tracks' }),
                s = new E(this.ctx),
                r = new R(this.ctx),
                n = this.getStrokeWidth(t)
              t.size = t.size - n / 2
              for (var o = 0; o < t.series.length; o++) {
                var l = i.group({
                  class: 'apexcharts-radialbar-track apexcharts-track'
                })
                a.add(l),
                  l.attr({ rel: o + 1 }),
                  (t.size = t.size - n - this.margin)
                var h = e.config.plotOptions.radialBar.track,
                  c = r.fillPath({
                    seriesNumber: 0,
                    size: t.size,
                    fillColors: Array.isArray(h.background)
                      ? h.background[o]
                      : h.background,
                    solid: !0
                  }),
                  d = this.trackStartAngle,
                  g = this.trackEndAngle
                360 <= Math.abs(g) + Math.abs(d) &&
                  (g = 360 - Math.abs(this.startAngle) - 0.1)
                var u,
                  p = i.drawPath({
                    d: '',
                    stroke: c,
                    strokeWidth: (n * parseInt(h.strokeWidth, 10)) / 100,
                    fill: 'none',
                    strokeOpacity: h.opacity,
                    classes: 'apexcharts-radialbar-area'
                  })
                h.dropShadow.enabled &&
                  ((u = h.dropShadow), s.dropShadow(p, u)),
                  l.add(p),
                  p.attr('id', 'apexcharts-radialbarTrack-' + o),
                  this.animatePaths(p, {
                    centerX: t.centerX,
                    centerY: t.centerY,
                    endAngle: g,
                    startAngle: d,
                    size: t.size,
                    i: o,
                    totalItems: 2,
                    animBeginArr: 0,
                    dur: 0,
                    isTrack: !0,
                    easing: e.globals.easing
                  })
              }
              return a
            }
          },
          {
            key: 'drawArcs',
            value: function (t) {
              var e = this.w,
                i = new Y(this.ctx),
                a = new R(this.ctx),
                s = new E(this.ctx),
                r = i.group(),
                n = this.getStrokeWidth(t)
              t.size = t.size - n / 2
              var o = e.config.plotOptions.radialBar.hollow.background,
                l =
                  t.size -
                  n * t.series.length -
                  this.margin * t.series.length -
                  (n *
                    parseInt(
                      e.config.plotOptions.radialBar.track.strokeWidth,
                      10
                    )) /
                    100 /
                    2,
                h = l - e.config.plotOptions.radialBar.hollow.margin
              void 0 !== e.config.plotOptions.radialBar.hollow.image &&
                (o = this.drawHollowImage(t, r, l, o))
              var c,
                d = this.drawHollow({
                  size: h,
                  centerX: t.centerX,
                  centerY: t.centerY,
                  fill: o || 'transparent'
                })
              e.config.plotOptions.radialBar.hollow.dropShadow.enabled &&
                ((c = e.config.plotOptions.radialBar.hollow.dropShadow),
                s.dropShadow(d, c))
              var g = 1
              !this.radialDataLabels.total.show &&
                1 < e.globals.series.length &&
                (g = 0)
              var u = null
              this.radialDataLabels.show &&
                (u = this.renderInnerDataLabels(this.radialDataLabels, {
                  hollowSize: l,
                  centerX: t.centerX,
                  centerY: t.centerY,
                  opacity: g
                })),
                'back' === e.config.plotOptions.radialBar.hollow.position &&
                  (r.add(d), u && r.add(u))
              var p = !1
              e.config.plotOptions.radialBar.inverseOrder && (p = !0)
              for (
                var f = p ? t.series.length - 1 : 0;
                p ? 0 <= f : f < t.series.length;
                p ? f-- : f++
              ) {
                var x = i.group({
                  class: 'apexcharts-series apexcharts-radial-series',
                  seriesName: I.escapeString(e.globals.seriesNames[f])
                })
                r.add(x),
                  x.attr({ rel: f + 1, 'data:realIndex': f }),
                  this.ctx.series.addCollapsedClassToSeries(x, f),
                  (t.size = t.size - n - this.margin)
                var b = a.fillPath({
                    seriesNumber: f,
                    size: t.size,
                    value: t.series[f]
                  }),
                  m = this.startAngle,
                  v = void 0,
                  y = I.negToZero(100 < t.series[f] ? 100 : t.series[f]) / 100,
                  w = Math.round(this.totalAngle * y) + this.startAngle,
                  k = void 0
                e.globals.dataChanged &&
                  ((v = this.startAngle),
                  (k =
                    Math.round(
                      (this.totalAngle *
                        I.negToZero(e.globals.previousPaths[f])) /
                        100
                    ) + v)),
                  360 <= Math.abs(w) + Math.abs(m) && (w -= 0.01),
                  360 <= Math.abs(k) + Math.abs(v) && (k -= 0.01)
                var A,
                  S = w - m,
                  C = Array.isArray(e.config.stroke.dashArray)
                    ? e.config.stroke.dashArray[f]
                    : e.config.stroke.dashArray,
                  L = i.drawPath({
                    d: '',
                    stroke: b,
                    strokeWidth: n,
                    fill: 'none',
                    fillOpacity: e.config.fill.opacity,
                    classes:
                      'apexcharts-radialbar-area apexcharts-radialbar-slice-' +
                      f,
                    strokeDashArray: C
                  })
                Y.setAttrs(L.node, {
                  'data:angle': S,
                  'data:value': t.series[f]
                }),
                  e.config.chart.dropShadow.enabled &&
                    ((A = e.config.chart.dropShadow), s.dropShadow(L, A, f)),
                  this.addListeners(L, this.radialDataLabels),
                  x.add(L),
                  L.attr({ index: 0, j: f })
                var P = 0
                !this.initialAnim ||
                  e.globals.resized ||
                  e.globals.dataChanged ||
                  ((P = ((w - m) / 360) * e.config.chart.animations.speed),
                  (this.animDur = P / (1.2 * t.series.length) + this.animDur),
                  this.animBeginArr.push(this.animDur)),
                  e.globals.dataChanged &&
                    ((P =
                      ((w - m) / 360) *
                      e.config.chart.animations.dynamicAnimation.speed),
                    (this.animDur = P / (1.2 * t.series.length) + this.animDur),
                    this.animBeginArr.push(this.animDur)),
                  this.animatePaths(L, {
                    centerX: t.centerX,
                    centerY: t.centerY,
                    endAngle: w,
                    startAngle: m,
                    prevEndAngle: k,
                    prevStartAngle: v,
                    size: t.size,
                    i: f,
                    totalItems: 2,
                    animBeginArr: this.animBeginArr,
                    dur: P,
                    shouldSetPrevPaths: !0,
                    easing: e.globals.easing
                  })
              }
              return { g: r, elHollow: d, dataLabels: u }
            }
          },
          {
            key: 'drawHollow',
            value: function (t) {
              var e = new Y(this.ctx).drawCircle(2 * t.size)
              return (
                e.attr({
                  class: 'apexcharts-radialbar-hollow',
                  cx: t.centerX,
                  cy: t.centerY,
                  r: t.size,
                  fill: t.fill
                }),
                e
              )
            }
          },
          {
            key: 'drawHollowImage',
            value: function (e, t, i, a) {
              var s,
                r,
                n,
                o,
                l = this.w,
                h = new R(this.ctx),
                c = I.randomId(),
                d = l.config.plotOptions.radialBar.hollow.image
              return (
                l.config.plotOptions.radialBar.hollow.imageClipped
                  ? (h.clippedImgArea({
                      width: i,
                      height: i,
                      image: d,
                      patternID: 'pattern'.concat(l.globals.cuid).concat(c)
                    }),
                    (a = 'url(#pattern'.concat(l.globals.cuid).concat(c, ')')))
                  : ((s = l.config.plotOptions.radialBar.hollow.imageWidth),
                    (r = l.config.plotOptions.radialBar.hollow.imageHeight),
                    void 0 === s && void 0 === r
                      ? ((n = l.globals.dom.Paper.image(d).loaded(function (t) {
                          this.move(
                            e.centerX -
                              t.width / 2 +
                              l.config.plotOptions.radialBar.hollow
                                .imageOffsetX,
                            e.centerY -
                              t.height / 2 +
                              l.config.plotOptions.radialBar.hollow.imageOffsetY
                          )
                        })),
                        t.add(n))
                      : ((o = l.globals.dom.Paper.image(d).loaded(function (t) {
                          this.move(
                            e.centerX -
                              s / 2 +
                              l.config.plotOptions.radialBar.hollow
                                .imageOffsetX,
                            e.centerY -
                              r / 2 +
                              l.config.plotOptions.radialBar.hollow.imageOffsetY
                          ),
                            this.size(s, r)
                        })),
                        t.add(o))),
                a
              )
            }
          },
          {
            key: 'getStrokeWidth',
            value: function (t) {
              var e = this.w
              return (
                (t.size *
                  (100 -
                    parseInt(e.config.plotOptions.radialBar.hollow.size, 10))) /
                  100 /
                  (t.series.length + 1) -
                this.margin
              )
            }
          }
        ]),
        s
      )
    })(),
    Ft =
      (n(Gt, [
        {
          key: 'sameValueSeriesFix',
          value: function (t, e) {
            var i,
              a = this.w
            return (
              'line' !== a.config.chart.type ||
                ('gradient' !== a.config.fill.type &&
                  'gradient' !== a.config.fill.type[t]) ||
                !new P(this.lineCtx.ctx, a).seriesHaveSameValues(t) ||
                (((i = e[t].slice())[i.length - 1] = i[i.length - 1] + 1e-6),
                (e[t] = i)),
              e
            )
          }
        },
        {
          key: 'calculatePoints',
          value: function (t) {
            var e,
              i = t.series,
              a = t.realIndex,
              s = t.x,
              r = t.y,
              n = t.i,
              o = t.j,
              l = t.prevY,
              h = this.w,
              c = [],
              d = []
            return (
              0 === o &&
                ((e =
                  this.lineCtx.categoryAxisCorrection +
                  h.config.markers.offsetX),
                h.globals.isXNumeric &&
                  (e =
                    (h.globals.seriesX[a][0] - h.globals.minX) /
                      this.lineCtx.xRatio +
                    h.config.markers.offsetX),
                c.push(e),
                d.push(
                  I.isNumber(i[n][0]) ? l + h.config.markers.offsetY : null
                )),
              c.push(s + h.config.markers.offsetX),
              d.push(
                I.isNumber(i[n][o + 1]) ? r + h.config.markers.offsetY : null
              ),
              { x: c, y: d }
            )
          }
        },
        {
          key: 'checkPreviousPaths',
          value: function (t) {
            for (
              var e = t.pathFromLine,
                i = t.pathFromArea,
                a = t.realIndex,
                s = this.w,
                r = 0;
              r < s.globals.previousPaths.length;
              r++
            ) {
              var n = s.globals.previousPaths[r]
              ;('line' === n.type || 'area' === n.type) &&
                0 < n.paths.length &&
                parseInt(n.realIndex, 10) === parseInt(a, 10) &&
                ('line' === n.type
                  ? ((this.lineCtx.appendPathFrom = !1),
                    (e = s.globals.previousPaths[r].paths[0].d))
                  : 'area' === n.type &&
                    ((this.lineCtx.appendPathFrom = !1),
                    (i = s.globals.previousPaths[r].paths[0].d),
                    s.config.stroke.show &&
                      s.globals.previousPaths[r].paths[1] &&
                      (e = s.globals.previousPaths[r].paths[1].d)))
            }
            return { pathFromLine: e, pathFromArea: i }
          }
        },
        {
          key: 'determineFirstPrevY',
          value: function (t) {
            var e = t.i,
              i = t.series,
              a = t.prevY,
              s = t.lineYPosition,
              r = this.w
            if (void 0 !== i[e][0])
              a =
                (s =
                  r.config.chart.stacked && 0 < e
                    ? this.lineCtx.prevSeriesY[e - 1][0]
                    : this.lineCtx.zeroY) -
                i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] +
                2 *
                  (this.lineCtx.isReversed
                    ? i[e][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex]
                    : 0)
            else if (r.config.chart.stacked && 0 < e && void 0 === i[e][0])
              for (var n = e - 1; 0 <= n; n--)
                if (null !== i[n][0] && void 0 !== i[n][0]) {
                  a = s = this.lineCtx.prevSeriesY[n][0]
                  break
                }
            return { prevY: a, lineYPosition: s }
          }
        }
      ]),
      Gt),
    Rt =
      (n(Vt, [
        {
          key: 'draw',
          value: function (t, e, i) {
            var a = this.w,
              s = new Y(this.ctx),
              r = a.globals.comboCharts ? e : a.config.chart.type,
              n = s.group({
                class: 'apexcharts-'.concat(r, '-series apexcharts-plot-series')
              }),
              o = new P(this.ctx, a)
            ;(this.yRatio = this.xyRatios.yRatio),
              (this.zRatio = this.xyRatios.zRatio),
              (this.xRatio = this.xyRatios.xRatio),
              (this.baseLineY = this.xyRatios.baseLineY),
              (t = o.getLogSeries(t)),
              (this.yRatio = o.getLogYRatios(this.yRatio))
            for (var l = [], h = 0; h < t.length; h++) {
              t = this.lineHelpers.sameValueSeriesFix(h, t)
              var c = a.globals.comboCharts ? i[h] : h
              this._initSerieVariables(t, h, c)
              var d = [],
                g = [],
                u = a.globals.padHorizontal + this.categoryAxisCorrection
              this.ctx.series.addCollapsedClassToSeries(this.elSeries, c),
                a.globals.isXNumeric &&
                  0 < a.globals.seriesX.length &&
                  (u =
                    (a.globals.seriesX[c][0] - a.globals.minX) / this.xRatio),
                g.push(u)
              var p,
                f = u,
                x = f,
                b = this.zeroY,
                b = this.lineHelpers.determineFirstPrevY({
                  i: h,
                  series: t,
                  prevY: b,
                  lineYPosition: 0
                }).prevY
              d.push(b), (p = b)
              var m = this._calculatePathsFrom({
                  series: t,
                  i: h,
                  realIndex: c,
                  prevX: x,
                  prevY: b
                }),
                v = this._iterateOverDataPoints({
                  series: t,
                  realIndex: c,
                  i: h,
                  x: u,
                  y: 1,
                  pX: f,
                  pY: p,
                  pathsFrom: m,
                  linePaths: [],
                  areaPaths: [],
                  seriesIndex: i,
                  lineYPosition: 0,
                  xArrj: g,
                  yArrj: d
                })
              this._handlePaths({ type: r, realIndex: c, i: h, paths: v }),
                this.elSeries.add(this.elPointsMain),
                this.elSeries.add(this.elDataLabelsWrap),
                l.push(this.elSeries)
            }
            for (var y = l.length; 0 < y; y--) n.add(l[y - 1])
            return n
          }
        },
        {
          key: '_initSerieVariables',
          value: function (t, e, i) {
            var a = this.w,
              s = new Y(this.ctx)
            ;(this.xDivision =
              a.globals.gridWidth /
              (a.globals.dataPoints -
                ('on' === a.config.xaxis.tickPlacement ? 1 : 0))),
              (this.strokeWidth = Array.isArray(a.config.stroke.width)
                ? a.config.stroke.width[i]
                : a.config.stroke.width),
              1 < this.yRatio.length && (this.yaxisIndex = i),
              (this.isReversed =
                a.config.yaxis[this.yaxisIndex] &&
                a.config.yaxis[this.yaxisIndex].reversed),
              (this.zeroY =
                a.globals.gridHeight -
                this.baseLineY[this.yaxisIndex] -
                (this.isReversed ? a.globals.gridHeight : 0) +
                (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0)),
              (this.areaBottomY = this.zeroY),
              (this.zeroY > a.globals.gridHeight ||
                'end' === a.config.plotOptions.area.fillTo) &&
                (this.areaBottomY = a.globals.gridHeight),
              (this.categoryAxisCorrection = this.xDivision / 2),
              (this.elSeries = s.group({
                class: 'apexcharts-series',
                seriesName: I.escapeString(a.globals.seriesNames[i])
              })),
              (this.elPointsMain = s.group({
                class: 'apexcharts-series-markers-wrap',
                'data:realIndex': i
              })),
              (this.elDataLabelsWrap = s.group({
                class: 'apexcharts-datalabels',
                'data:realIndex': i
              }))
            var r = t[e].length === a.globals.dataPoints
            this.elSeries.attr({
              'data:longestSeries': r,
              rel: e + 1,
              'data:realIndex': i
            }),
              (this.appendPathFrom = !0)
          }
        },
        {
          key: '_calculatePathsFrom',
          value: function (t) {
            var e,
              i,
              a,
              s,
              r,
              n = t.series,
              o = t.i,
              l = t.realIndex,
              h = t.prevX,
              c = t.prevY,
              d = this.w,
              g = new Y(this.ctx)
            if (null === n[o][0]) {
              for (var u = 0; u < n[o].length; u++)
                if (null !== n[o][u]) {
                  ;(h = this.xDivision * u),
                    (c = this.zeroY - n[o][u] / this.yRatio[this.yaxisIndex]),
                    (e = g.move(h, c)),
                    (i = g.move(h, this.areaBottomY))
                  break
                }
            } else
              (e = g.move(h, c)),
                (i = g.move(h, this.areaBottomY) + g.line(h, c))
            return (
              (s = g.move(-1, this.zeroY) + g.line(-1, this.zeroY)),
              (r = g.move(-1, this.zeroY) + g.line(-1, this.zeroY)),
              0 < d.globals.previousPaths.length &&
                ((s = (a = this.lineHelpers.checkPreviousPaths({
                  pathFromLine: s,
                  pathFromArea: r,
                  realIndex: l
                })).pathFromLine),
                (r = a.pathFromArea)),
              {
                prevX: h,
                prevY: c,
                linePath: e,
                areaPath: i,
                pathFromLine: s,
                pathFromArea: r
              }
            )
          }
        },
        {
          key: '_handlePaths',
          value: function (t) {
            var e = t.type,
              i = t.realIndex,
              a = t.i,
              s = t.paths,
              r = this.w,
              n = new Y(this.ctx),
              o = new R(this.ctx)
            this.prevSeriesY.push(s.yArrj),
              (r.globals.seriesXvalues[i] = s.xArrj),
              (r.globals.seriesYvalues[i] = s.yArrj),
              this.pointsChart ||
                r.globals.delayedElements.push({
                  el: this.elPointsMain.node,
                  index: i
                })
            var l = {
              i: a,
              realIndex: i,
              animationDelay: a,
              initialSpeed: r.config.chart.animations.speed,
              dataChangeSpeed: r.config.chart.animations.dynamicAnimation.speed,
              className: 'apexcharts-'.concat(e)
            }
            if ('area' === e)
              for (
                var h = o.fillPath({ seriesNumber: i }), c = 0;
                c < s.areaPaths.length;
                c++
              ) {
                var d = n.renderPaths(
                  M(
                    M({}, l),
                    {},
                    {
                      pathFrom: s.pathFromArea,
                      pathTo: s.areaPaths[c],
                      stroke: 'none',
                      strokeWidth: 0,
                      strokeLineCap: null,
                      fill: h
                    }
                  )
                )
                this.elSeries.add(d)
              }
            if (r.config.stroke.show && !this.pointsChart)
              for (
                var g =
                    'line' === e
                      ? o.fillPath({ seriesNumber: i, i: a })
                      : r.globals.stroke.colors[i],
                  u = 0;
                u < s.linePaths.length;
                u++
              ) {
                var p = n.renderPaths(
                  M(
                    M({}, l),
                    {},
                    {
                      pathFrom: s.pathFromLine,
                      pathTo: s.linePaths[u],
                      stroke: g,
                      strokeWidth: this.strokeWidth,
                      strokeLineCap: r.config.stroke.lineCap,
                      fill: 'none'
                    }
                  )
                )
                this.elSeries.add(p)
              }
          }
        },
        {
          key: '_iterateOverDataPoints',
          value: function (t) {
            for (
              var e = t.series,
                i = t.realIndex,
                a = t.i,
                s = t.x,
                r = t.y,
                n = t.pX,
                o = t.pY,
                l = t.pathsFrom,
                h = t.linePaths,
                c = t.areaPaths,
                d = t.seriesIndex,
                g = t.lineYPosition,
                u = t.xArrj,
                p = t.yArrj,
                f = this.w,
                x = new Y(this.ctx),
                b = this.yRatio,
                m = l.prevY,
                v = l.linePath,
                y = l.areaPath,
                w = l.pathFromLine,
                k = l.pathFromArea,
                A = I.isNumber(f.globals.minYArr[i])
                  ? f.globals.minYArr[i]
                  : f.globals.minY,
                S =
                  1 < f.globals.dataPoints
                    ? f.globals.dataPoints - 1
                    : f.globals.dataPoints,
                C = 0;
              C < S;
              C++
            ) {
              var L,
                P = void 0 === e[a][C + 1] || null === e[a][C + 1]
              f.globals.isXNumeric
                ? ((L = f.globals.seriesX[i][C + 1]),
                  void 0 === f.globals.seriesX[i][C + 1] &&
                    (L = f.globals.seriesX[i][S - 1]),
                  (s = (L - f.globals.minX) / this.xRatio))
                : (s += this.xDivision),
                (g =
                  f.config.chart.stacked &&
                  0 < a &&
                  f.globals.collapsedSeries.length < f.config.series.length - 1
                    ? this.prevSeriesY[
                        (function (t) {
                          for (
                            var e = t, i = 0;
                            i < f.globals.series.length;
                            i++
                          )
                            if (
                              -1 < f.globals.collapsedSeriesIndices.indexOf(t)
                            ) {
                              e--
                              break
                            }
                          return 0 <= e ? e : 0
                        })(a - 1)
                      ][C + 1]
                    : this.zeroY),
                (r = P
                  ? g -
                    A / b[this.yaxisIndex] +
                    2 * (this.isReversed ? A / b[this.yaxisIndex] : 0)
                  : g -
                    e[a][C + 1] / b[this.yaxisIndex] +
                    2 *
                      (this.isReversed ? e[a][C + 1] / b[this.yaxisIndex] : 0)),
                u.push(s),
                p.push(r)
              var T = this.lineHelpers.calculatePoints({
                  series: e,
                  x: s,
                  y: r,
                  realIndex: i,
                  i: a,
                  j: C,
                  prevY: m
                }),
                z = this._createPaths({
                  series: e,
                  i: a,
                  realIndex: i,
                  j: C,
                  x: s,
                  y: r,
                  pX: n,
                  pY: o,
                  linePath: v,
                  areaPath: y,
                  linePaths: h,
                  areaPaths: c,
                  seriesIndex: d
                }),
                c = z.areaPaths,
                h = z.linePaths,
                n = z.pX,
                o = z.pY,
                y = z.areaPath,
                v = z.linePath
              this.appendPathFrom &&
                ((w += x.line(s, this.zeroY)), (k += x.line(s, this.zeroY))),
                this.handleNullDataPoints(e, T, a, C, i),
                this._handleMarkersAndLabels({
                  pointsPos: T,
                  series: e,
                  x: s,
                  y: r,
                  prevY: m,
                  i: a,
                  j: C,
                  realIndex: i
                })
            }
            return {
              yArrj: p,
              xArrj: u,
              pathFromArea: k,
              areaPaths: c,
              pathFromLine: w,
              linePaths: h
            }
          }
        },
        {
          key: '_handleMarkersAndLabels',
          value: function (t) {
            var e,
              i = t.pointsPos,
              a = (t.series, t.x, t.y, t.prevY, t.i),
              s = t.j,
              r = t.realIndex,
              n = this.w,
              o = new N(this.ctx)
            this.pointsChart
              ? this.scatter.draw(this.elSeries, s, {
                  realIndex: r,
                  pointsPos: i,
                  zRatio: this.zRatio,
                  elParent: this.elPointsMain
                })
              : (1 < n.globals.series[a].length &&
                  this.elPointsMain.node.classList.add(
                    'apexcharts-element-hidden'
                  ),
                null !== (e = this.markers.plotChartMarkers(i, r, s + 1)) &&
                  this.elPointsMain.add(e))
            var l = o.drawDataLabel(i, r, s + 1, null)
            null !== l && this.elDataLabelsWrap.add(l)
          }
        },
        {
          key: '_createPaths',
          value: function (t) {
            var e,
              i,
              a = t.series,
              s = t.i,
              r = t.realIndex,
              n = t.j,
              o = t.x,
              l = t.y,
              h = t.pX,
              c = t.pY,
              d = t.linePath,
              g = t.areaPath,
              u = t.linePaths,
              p = t.areaPaths,
              f = t.seriesIndex,
              x = this.w,
              b = new Y(this.ctx),
              m = x.config.stroke.curve,
              v = this.areaBottomY
            return (
              Array.isArray(x.config.stroke.curve) &&
                (m = Array.isArray(f)
                  ? x.config.stroke.curve[f[s]]
                  : x.config.stroke.curve[s]),
              'smooth' === m
                ? ((e = 0.35 * (o - h)),
                  x.globals.hasNullValues
                    ? (null !== a[s][n] &&
                        (g =
                          null !== a[s][n + 1]
                            ? ((d =
                                b.move(h, c) +
                                b.curve(h + e, c, o - e, l, o + 1, l)),
                              b.move(h + 1, c) +
                                b.curve(h + e, c, o - e, l, o + 1, l) +
                                b.line(o, v) +
                                b.line(h, v) +
                                'z')
                            : ((d = b.move(h, c)), b.move(h, c) + 'z')),
                      u.push(d),
                      p.push(g))
                    : ((d += b.curve(h + e, c, o - e, l, o, l)),
                      (g += b.curve(h + e, c, o - e, l, o, l))),
                  (h = o),
                  (c = l),
                  n === a[s].length - 2 &&
                    ((g = g + b.curve(h, c, o, l, o, v) + b.move(o, l) + 'z'),
                    x.globals.hasNullValues || (u.push(d), p.push(g))))
                : (null === a[s][n + 1] &&
                    ((d += b.move(o, l)),
                    (i = x.globals.isXNumeric
                      ? (x.globals.seriesX[r][n] - x.globals.minX) / this.xRatio
                      : o - this.xDivision),
                    (g = g + b.line(i, v) + b.move(o, l) + 'z')),
                  null === a[s][n] &&
                    ((d += b.move(o, l)), (g += b.move(o, v))),
                  'stepline' === m
                    ? ((d = d + b.line(o, null, 'H') + b.line(null, l, 'V')),
                      (g = g + b.line(o, null, 'H') + b.line(null, l, 'V')))
                    : 'straight' === m &&
                      ((d += b.line(o, l)), (g += b.line(o, l))),
                  n === a[s].length - 2 &&
                    ((g = g + b.line(o, v) + b.move(o, l) + 'z'),
                    u.push(d),
                    p.push(g))),
              {
                linePaths: u,
                areaPaths: p,
                pX: h,
                pY: c,
                linePath: d,
                areaPath: g
              }
            )
          }
        },
        {
          key: 'handleNullDataPoints',
          value: function (t, e, i, a, s) {
            var r,
              n = this.w
            !(
              (null === t[i][a] && n.config.markers.showNullDataPoints) ||
              1 === t[i].length
            ) ||
              (null !==
                (r = this.markers.plotChartMarkers(
                  e,
                  s,
                  a + 1,
                  this.strokeWidth - n.config.markers.strokeWidth / 2,
                  !0
                )) &&
                this.elPointsMain.add(r))
          }
        }
      ]),
      Vt),
    Dt =
      (n(Bt, [
        {
          key: 'calculateTimeScaleTicks',
          value: function (t, e) {
            var n = this,
              o = this.w
            if (o.globals.allSeriesCollapsed)
              return (
                (o.globals.labels = []), (o.globals.timescaleLabels = []), []
              )
            var i = new G(this.ctx),
              a = (e - t) / 864e5
            this.determineInterval(a),
              (o.globals.disableZoomIn = !1),
              (o.globals.disableZoomOut = !1),
              a < 0.005
                ? (o.globals.disableZoomIn = !0)
                : 5e4 < a && (o.globals.disableZoomOut = !0)
            var s = i.getTimeUnitsfromTimestamp(t, e, this.utc),
              r = o.globals.gridWidth / a,
              l = r / 24,
              h = l / 60,
              c = Math.floor(24 * a),
              d = Math.floor(24 * a * 60),
              g = Math.floor(a),
              u = Math.floor(a / 30),
              p = Math.floor(a / 365),
              f = {
                minMinute: s.minMinute,
                minHour: s.minHour,
                minDate: s.minDate,
                minMonth: s.minMonth,
                minYear: s.minYear
              },
              x = {
                firstVal: f,
                currentMinute: f.minMinute,
                currentHour: f.minHour,
                currentMonthDate: f.minDate,
                currentDate: f.minDate,
                currentMonth: f.minMonth,
                currentYear: f.minYear,
                daysWidthOnXAxis: r,
                hoursWidthOnXAxis: l,
                minutesWidthOnXAxis: h,
                numberOfMinutes: d,
                numberOfHours: c,
                numberOfDays: g,
                numberOfMonths: u,
                numberOfYears: p
              }
            switch (this.tickInterval) {
              case 'years':
                this.generateYearScale(x)
                break
              case 'months':
              case 'half_year':
                this.generateMonthScale(x)
                break
              case 'months_days':
              case 'months_fortnight':
              case 'days':
              case 'week_days':
                this.generateDayScale(x)
                break
              case 'hours':
                this.generateHourScale(x)
                break
              case 'minutes':
                this.generateMinuteScale(x)
            }
            var b = this.timeScaleArray.map(function (t) {
              var e = {
                position: t.position,
                unit: t.unit,
                year: t.year,
                day: t.day ? t.day : 1,
                hour: t.hour ? t.hour : 0,
                month: t.month + 1
              }
              return 'month' === t.unit
                ? M(M({}, e), {}, { day: 1, value: t.value + 1 })
                : 'day' === t.unit || 'hour' === t.unit
                ? M(M({}, e), {}, { value: t.value })
                : 'minute' === t.unit
                ? M(M({}, e), {}, { value: t.value, minute: t.value })
                : t
            })
            return b.filter(function (t) {
              var e = 1,
                i = Math.ceil(o.globals.gridWidth / 120),
                a = t.value
              void 0 !== o.config.xaxis.tickAmount &&
                (i = o.config.xaxis.tickAmount),
                b.length > i && (e = Math.floor(b.length / i))
              var s = !1,
                r = !1
              switch (n.tickInterval) {
                case 'years':
                  'year' === t.unit && (s = !0)
                  break
                case 'half_year':
                  ;(e = 7), 'year' === t.unit && (s = !0)
                  break
                case 'months':
                  ;(e = 1), 'year' === t.unit && (s = !0)
                  break
                case 'months_fortnight':
                  ;(e = 15),
                    ('year' !== t.unit && 'month' !== t.unit) || (s = !0),
                    30 === a && (r = !0)
                  break
                case 'months_days':
                  ;(e = 10),
                    'month' === t.unit && (s = !0),
                    30 === a && (r = !0)
                  break
                case 'week_days':
                  ;(e = 8), 'month' === t.unit && (s = !0)
                  break
                case 'days':
                  ;(e = 1), 'month' === t.unit && (s = !0)
                  break
                case 'hours':
                  'day' === t.unit && (s = !0)
                  break
                case 'minutes':
                  a % 5 != 0 && (r = !0)
              }
              if ('minutes' === n.tickInterval || 'hours' === n.tickInterval) {
                if (!r) return !0
              } else if ((a % e == 0 || s) && !r) return !0
            })
          }
        },
        {
          key: 'recalcDimensionsBasedOnFormat',
          value: function (t, e) {
            var i = this.w,
              a = this.formatDates(t),
              s = this.removeOverlappingTS(a)
            ;(i.globals.timescaleLabels = s.slice()),
              new xt(this.ctx).plotCoords()
          }
        },
        {
          key: 'determineInterval',
          value: function (t) {
            switch (!0) {
              case 1825 < t:
                this.tickInterval = 'years'
                break
              case 800 < t && t <= 1825:
                this.tickInterval = 'half_year'
                break
              case 180 < t && t <= 800:
                this.tickInterval = 'months'
                break
              case 90 < t && t <= 180:
                this.tickInterval = 'months_fortnight'
                break
              case 60 < t && t <= 90:
                this.tickInterval = 'months_days'
                break
              case 30 < t && t <= 60:
                this.tickInterval = 'week_days'
                break
              case 2 < t && t <= 30:
                this.tickInterval = 'days'
                break
              case 0.1 < t && t <= 2:
                this.tickInterval = 'hours'
                break
              case t < 0.1:
                this.tickInterval = 'minutes'
                break
              default:
                this.tickInterval = 'days'
            }
          }
        },
        {
          key: 'generateYearScale',
          value: function (t) {
            var e,
              i = t.firstVal,
              a = t.currentMonth,
              s = t.currentYear,
              r = t.daysWidthOnXAxis,
              n = t.numberOfYears,
              o = i.minYear,
              l = 0,
              h = new G(this.ctx)
            1 < i.minDate || 0 < i.minMonth
              ? ((e = h.determineRemainingDaysOfYear(
                  i.minYear,
                  i.minMonth,
                  i.minDate
                )),
                (l = (h.determineDaysOfYear(i.minYear) - e + 1) * r),
                (o = i.minYear + 1),
                this.timeScaleArray.push({
                  position: l,
                  value: o,
                  unit: 'year',
                  year: o,
                  month: I.monthMod(a + 1)
                }))
              : 1 === i.minDate &&
                0 === i.minMonth &&
                this.timeScaleArray.push({
                  position: l,
                  value: o,
                  unit: 'year',
                  year: s,
                  month: I.monthMod(a + 1)
                })
            for (var c = o, d = l, g = 0; g < n; g++)
              c++,
                (d = h.determineDaysOfYear(c - 1) * r + d),
                this.timeScaleArray.push({
                  position: d,
                  value: c,
                  unit: 'year',
                  year: c,
                  month: 1
                })
          }
        },
        {
          key: 'generateMonthScale',
          value: function (t) {
            var e,
              i,
              a,
              s = t.firstVal,
              r = t.currentMonthDate,
              n = t.currentMonth,
              o = t.currentYear,
              l = t.daysWidthOnXAxis,
              h = t.numberOfMonths,
              c = n,
              d = 0,
              g = new G(this.ctx),
              u = 'month',
              p = 0
            1 < s.minDate
              ? ((d = (g.determineDaysOfMonths(n + 1, s.minYear) - r + 1) * l),
                (c = I.monthMod(n + 1)),
                (e = o + p),
                (i = I.monthMod(c)),
                0 === (a = c) && ((u = 'year'), (a = e), (e += p += i = 1)),
                this.timeScaleArray.push({
                  position: d,
                  value: a,
                  unit: u,
                  year: e,
                  month: i
                }))
              : this.timeScaleArray.push({
                  position: d,
                  value: c,
                  unit: u,
                  year: o,
                  month: I.monthMod(n)
                })
            for (var f = c + 1, x = d, b = 0; b < h; b++) {
              0 === (f = I.monthMod(f))
                ? ((u = 'year'), (p += 1))
                : (u = 'month')
              var m = this._getYear(o, f, p),
                x = g.determineDaysOfMonths(f, m) * l + x,
                v = 0 === f ? m : f
              this.timeScaleArray.push({
                position: x,
                value: v,
                unit: u,
                year: m,
                month: 0 === f ? 1 : f
              }),
                f++
            }
          }
        },
        {
          key: 'generateDayScale',
          value: function (t) {
            function e (t, e, i) {
              return (
                t > o.determineDaysOfMonths(e + 1, i) &&
                  ((l = 'month'), (g = e += c = 1)),
                e
              )
            }
            var i = t.firstVal,
              a = t.currentMonth,
              s = t.currentYear,
              r = t.hoursWidthOnXAxis,
              n = t.numberOfDays,
              o = new G(this.ctx),
              l = 'day',
              h = i.minDate + 1,
              c = h,
              d = (24 - i.minHour) * r,
              g = h,
              u = e(c, a, s)
            0 === i.minHour &&
              1 === i.minDate &&
              ((d = 0),
              (g = I.monthMod(i.minMonth)),
              (l = 'month'),
              (c = i.minDate),
              n++),
              this.timeScaleArray.push({
                position: d,
                value: g,
                unit: l,
                year: this._getYear(s, u, 0),
                month: I.monthMod(u),
                day: c
              })
            for (var p = d, f = 0; f < n; f++) {
              ;(l = 'day'), (u = e((c += 1), u, this._getYear(s, u, 0)))
              var x = this._getYear(s, u, 0),
                p = 24 * r + p,
                b = 1 === c ? I.monthMod(u) : c
              this.timeScaleArray.push({
                position: p,
                value: b,
                unit: l,
                year: x,
                month: I.monthMod(u),
                day: b
              })
            }
          }
        },
        {
          key: 'generateHourScale',
          value: function (t) {
            function e (t, e) {
              return t > l.determineDaysOfMonths(e + 1, r) ? (e += 1) : e
            }
            var i = t.firstVal,
              a = t.currentDate,
              s = t.currentMonth,
              r = t.currentYear,
              n = t.minutesWidthOnXAxis,
              o = t.numberOfHours,
              l = new G(this.ctx),
              h = 'hour',
              c = 60 - i.minMinute,
              d = c * n,
              g = i.minHour + 1,
              u = g + 1
            60 == c && ((d = 0), (u = (g = i.minHour) + 1))
            var p = a,
              f = e(p, s)
            this.timeScaleArray.push({
              position: d,
              value: g,
              unit: h,
              day: p,
              hour: u,
              year: r,
              month: I.monthMod(f)
            })
            for (var x, b, m = d, v = 0; v < o; v++) {
              ;(h = 'hour'),
                24 <= u &&
                  ((u = 0),
                  (h = 'day'),
                  (x = p += 1),
                  (b = f),
                  x > l.determineDaysOfMonths(b + 1, r) && (b += p = 1),
                  (f = e(p, (f = { month: b, date: p }.month))))
              var y = this._getYear(r, f, 0),
                m = 0 === u && 0 === v ? c * n : 60 * n + m,
                w = 0 === u ? p : u
              this.timeScaleArray.push({
                position: m,
                value: w,
                unit: h,
                hour: u,
                day: p,
                year: y,
                month: I.monthMod(f)
              }),
                u++
            }
          }
        },
        {
          key: 'generateMinuteScale',
          value: function (t) {
            var e = t.firstVal,
              i = t.currentMinute,
              a = t.currentHour,
              s = t.currentDate,
              r = t.currentMonth,
              n = t.currentYear,
              o = t.minutesWidthOnXAxis,
              l = t.numberOfMinutes,
              h = o - (i - e.minMinute),
              c = e.minMinute + 1,
              d = c + 1,
              g = s,
              u = r,
              p = a
            this.timeScaleArray.push({
              position: h,
              value: c,
              unit: 'minute',
              day: g,
              hour: p,
              minute: d,
              year: n,
              month: I.monthMod(u)
            })
            for (var f = h, x = 0; x < l; x++)
              60 <= d && ((d = 0), 24 === (p += 1) && (p = 0)),
                (f = o + f),
                this.timeScaleArray.push({
                  position: f,
                  value: d,
                  unit: 'minute',
                  hour: p,
                  minute: d,
                  day: g,
                  year: this._getYear(n, u, 0),
                  month: I.monthMod(u)
                }),
                d++
          }
        },
        {
          key: 'createRawDateString',
          value: function (t, e) {
            var i = t.year
            return (
              (i += '-' + ('0' + t.month.toString()).slice(-2)),
              'day' === t.unit
                ? (i += 'day' === t.unit ? '-' + ('0' + e).slice(-2) : '-01')
                : (i += '-' + ('0' + (t.day ? t.day : '1')).slice(-2)),
              'hour' === t.unit
                ? (i += 'hour' === t.unit ? 'T' + ('0' + e).slice(-2) : 'T00')
                : (i += 'T' + ('0' + (t.hour ? t.hour : '0')).slice(-2)),
              (i +=
                'minute' === t.unit
                  ? ':' + ('0' + e).slice(-2) + ':00'
                  : ':00:00'),
              this.utc && (i += '.000Z'),
              i
            )
          }
        },
        {
          key: 'formatDates',
          value: function (t) {
            var o = this,
              l = this.w
            return t.map(function (t) {
              var e,
                i,
                a = t.value.toString(),
                s = new G(o.ctx),
                r = o.createRawDateString(t, a),
                n = s.getDate(r),
                a =
                  void 0 === l.config.xaxis.labels.format
                    ? ((e = 'dd MMM'),
                      (i = l.config.xaxis.labels.datetimeFormatter),
                      'year' === t.unit && (e = i.year),
                      'month' === t.unit && (e = i.month),
                      'day' === t.unit && (e = i.day),
                      'hour' === t.unit && (e = i.hour),
                      'minute' === t.unit && (e = i.minute),
                      s.formatDate(n, e))
                    : s.formatDate(n, l.config.xaxis.labels.format)
              return {
                dateString: r,
                position: t.position,
                value: a,
                unit: t.unit,
                year: t.year,
                month: t.month
              }
            })
          }
        },
        {
          key: 'removeOverlappingTS',
          value: function (s) {
            var r,
              n = this,
              o = new Y(this.ctx),
              l = !1
            0 < s.length &&
              s[0].value &&
              s.every(function (t) {
                return t.value.length === s[0].value.length
              }) &&
              ((l = !0), (r = o.getTextRects(s[0].value).width))
            var h = 0,
              t = s.map(function (t, e) {
                if (0 < e && n.w.config.xaxis.labels.hideOverlappingLabels) {
                  var i = l ? r : o.getTextRects(s[h].value).width,
                    a = s[h].position
                  return t.position > a + i + 10 ? ((h = e), t) : null
                }
                return t
              })
            return t.filter(function (t) {
              return null !== t
            })
          }
        },
        {
          key: '_getYear',
          value: function (t, e, i) {
            return t + Math.floor(e / 12) + i
          }
        }
      ]),
      Bt),
    Ht =
      (n(Wt, [
        {
          key: 'setupElements',
          value: function () {
            var t = this.w.globals,
              e = this.w.config,
              i = e.chart.type
            ;(t.axisCharts =
              -1 <
              [
                'line',
                'area',
                'bar',
                'rangeBar',
                'candlestick',
                'scatter',
                'bubble',
                'radar',
                'heatmap'
              ].indexOf(i)),
              (t.xyCharts =
                -1 <
                [
                  'line',
                  'area',
                  'bar',
                  'rangeBar',
                  'candlestick',
                  'scatter',
                  'bubble'
                ].indexOf(i)),
              (t.isBarHorizontal =
                ('bar' === e.chart.type || 'rangeBar' === e.chart.type) &&
                e.plotOptions.bar.horizontal),
              (t.chartClass = '.apexcharts' + t.cuid),
              (t.dom.baseEl = this.el),
              (t.dom.elWrap = document.createElement('div')),
              Y.setAttrs(t.dom.elWrap, {
                id: t.chartClass.substring(1),
                class: 'apexcharts-canvas ' + t.chartClass.substring(1)
              }),
              this.el.appendChild(t.dom.elWrap),
              (t.dom.Paper = new window.SVG.Doc(t.dom.elWrap)),
              t.dom.Paper.attr({
                class: 'apexcharts-svg',
                'xmlns:data': 'ApexChartsNS',
                transform: 'translate('
                  .concat(e.chart.offsetX, ', ')
                  .concat(e.chart.offsetY, ')')
              }),
              (t.dom.Paper.node.style.background = e.chart.background),
              this.setSVGDimensions(),
              (t.dom.elGraphical = t.dom.Paper.group().attr({
                class: 'apexcharts-inner apexcharts-graphical'
              })),
              (t.dom.elAnnotations = t.dom.Paper.group().attr({
                class: 'apexcharts-annotations'
              })),
              (t.dom.elDefs = t.dom.Paper.defs()),
              (t.dom.elLegendWrap = document.createElement('div')),
              t.dom.elLegendWrap.classList.add('apexcharts-legend'),
              t.dom.elWrap.appendChild(t.dom.elLegendWrap),
              t.dom.Paper.add(t.dom.elGraphical),
              t.dom.elGraphical.add(t.dom.elDefs)
          }
        },
        {
          key: 'plotChartType',
          value: function (i, t) {
            var a = this.w,
              s = a.config,
              r = a.globals,
              n = { series: [], i: [] },
              o = { series: [], i: [] },
              l = { series: [], i: [] },
              h = { series: [], i: [] },
              c = { series: [], i: [] },
              d = { series: [], i: [] }
            r.series.map(function (t, e) {
              void 0 !== i[e].type
                ? ('column' === i[e].type || 'bar' === i[e].type
                    ? (1 < r.series.length &&
                        s.plotOptions.bar.horizontal &&
                        console.warn(
                          'Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`'
                        ),
                      c.series.push(t),
                      c.i.push(e),
                      (a.globals.columnSeries = c.series))
                    : 'area' === i[e].type
                    ? (o.series.push(t), o.i.push(e))
                    : 'line' === i[e].type
                    ? (n.series.push(t), n.i.push(e))
                    : 'scatter' === i[e].type
                    ? (l.series.push(t), l.i.push(e))
                    : 'bubble' === i[e].type
                    ? (h.series.push(t), h.i.push(e))
                    : 'candlestick' === i[e].type
                    ? (d.series.push(t), d.i.push(e))
                    : console.warn(
                        'You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar/scatter/bubble'
                      ),
                  (r.comboCharts = !0))
                : (n.series.push(t), n.i.push(e))
            })
            var e = new Rt(this.ctx, t),
              g = new zt(this.ctx, t)
            this.ctx.pie = new Et(this.ctx)
            var u,
              p,
              f,
              x,
              b = new Yt(this.ctx),
              m = new _(this.ctx, t),
              v = new Xt(this.ctx),
              y = []
            if (r.comboCharts)
              0 < o.series.length && y.push(e.draw(o.series, 'area', o.i)),
                0 < c.series.length &&
                  (a.config.chart.stacked
                    ? ((u = new Tt(this.ctx, t)), y.push(u.draw(c.series, c.i)))
                    : ((p = new V(this.ctx, t)),
                      y.push(p.draw(c.series, c.i)))),
                0 < n.series.length && y.push(e.draw(n.series, 'line', n.i)),
                0 < d.series.length && y.push(g.draw(d.series, d.i)),
                0 < l.series.length &&
                  ((f = new Rt(this.ctx, t, !0)),
                  y.push(f.draw(l.series, 'scatter', l.i))),
                0 < h.series.length &&
                  ((x = new Rt(this.ctx, t, !0)),
                  y.push(x.draw(h.series, 'bubble', h.i)))
            else
              switch (s.chart.type) {
                case 'line':
                  y = e.draw(r.series, 'line')
                  break
                case 'area':
                  y = e.draw(r.series, 'area')
                  break
                case 'bar':
                  y = s.chart.stacked
                    ? new Tt(this.ctx, t).draw(r.series)
                    : new V(this.ctx, t).draw(r.series)
                  break
                case 'candlestick':
                  y = new zt(this.ctx, t).draw(r.series)
                  break
                case 'rangeBar':
                  y = m.draw(r.series)
                  break
                case 'heatmap':
                  y = new It(this.ctx, t).draw(r.series)
                  break
                case 'pie':
                case 'donut':
                case 'polarArea':
                  y = this.ctx.pie.draw(r.series)
                  break
                case 'radialBar':
                  y = b.draw(r.series)
                  break
                case 'radar':
                  y = v.draw(r.series)
                  break
                default:
                  y = e.draw(r.series)
              }
            return y
          }
        },
        {
          key: 'setSVGDimensions',
          value: function () {
            var t = this.w.globals,
              e = this.w.config
            ;(t.svgWidth = e.chart.width), (t.svgHeight = e.chart.height)
            var i,
              a = I.getDimensions(this.el),
              s = e.chart.width
                .toString()
                .split(/[0-9]+/g)
                .pop()
            '%' === s
              ? I.isNumber(a[0]) &&
                (0 === a[0].width && (a = I.getDimensions(this.el.parentNode)),
                (t.svgWidth = (a[0] * parseInt(e.chart.width, 10)) / 100))
              : ('px' !== s && '' !== s) ||
                (t.svgWidth = parseInt(e.chart.width, 10)),
              'auto' !== t.svgHeight && '' !== t.svgHeight
                ? '%' ===
                  e.chart.height
                    .toString()
                    .split(/[0-9]+/g)
                    .pop()
                  ? ((i = I.getDimensions(this.el.parentNode)),
                    (t.svgHeight = (i[1] * parseInt(e.chart.height, 10)) / 100))
                  : (t.svgHeight = parseInt(e.chart.height, 10))
                : t.axisCharts
                ? (t.svgHeight = t.svgWidth / 1.61)
                : (t.svgHeight = t.svgWidth / 1.2),
              t.svgWidth < 0 && (t.svgWidth = 0),
              t.svgHeight < 0 && (t.svgHeight = 0),
              Y.setAttrs(t.dom.Paper.node, {
                width: t.svgWidth,
                height: t.svgHeight
              })
            var r =
              !e.chart.sparkline.enabled && t.axisCharts
                ? e.chart.parentHeightOffset
                : 0
            ;(t.dom.Paper.node.parentNode.parentNode.style.minHeight =
              t.svgHeight + r + 'px'),
              (t.dom.elWrap.style.width = t.svgWidth + 'px'),
              (t.dom.elWrap.style.height = t.svgHeight + 'px')
          }
        },
        {
          key: 'shiftGraphPosition',
          value: function () {
            var t = this.w.globals,
              e = t.translateY,
              i = { transform: 'translate(' + t.translateX + ', ' + e + ')' }
            Y.setAttrs(t.dom.elGraphical.node, i)
          }
        },
        {
          key: 'resizeNonAxisCharts',
          value: function () {
            var t = this.w,
              e = t.globals,
              i = 0,
              a = t.config.chart.sparkline.enabled ? 1 : 15
            ;(a += t.config.grid.padding.bottom),
              ('top' !== t.config.legend.position &&
                'bottom' !== t.config.legend.position) ||
                !t.config.legend.show ||
                t.config.legend.floating ||
                (i = new mt(this.ctx).legendHelpers.getLegendBBox().clwh + 10)
            var s,
              r,
              n = t.globals.dom.baseEl.querySelector('.apexcharts-radialbar'),
              o = 2.05 * t.globals.radialSize
            n &&
              !t.config.chart.sparkline.enabled &&
              ((o = (s = I.getBoundingClientRect(n)).bottom),
              (r = s.bottom - s.top),
              (o = Math.max(2.05 * t.globals.radialSize, r)))
            var l = o + e.translateY + i + a
            e.dom.elLegendForeign &&
              e.dom.elLegendForeign.setAttribute('height', l),
              (e.dom.elWrap.style.height = l + 'px'),
              Y.setAttrs(e.dom.Paper.node, { height: l }),
              (e.dom.Paper.node.parentNode.parentNode.style.minHeight =
                l + 'px')
          }
        },
        {
          key: 'coreCalculations',
          value: function () {
            new at(this.ctx).init()
          }
        },
        {
          key: 'resetGlobals',
          value: function () {
            function t () {
              return e.w.config.series.map(function (t) {
                return []
              })
            }
            var e = this,
              i = new q(),
              a = this.w.globals
            i.initGlobalVars(a),
              (a.seriesXvalues = t()),
              (a.seriesYvalues = t())
          }
        },
        {
          key: 'isMultipleY',
          value: function () {
            if (
              this.w.config.yaxis.constructor === Array &&
              1 < this.w.config.yaxis.length
            )
              return (this.w.globals.isMultipleYAxis = !0)
          }
        },
        {
          key: 'xySettings',
          value: function () {
            var t,
              e,
              i = null,
              a = this.w
            return (
              a.globals.axisCharts &&
                ('back' === a.config.xaxis.crosshairs.position &&
                  new lt(this.ctx).drawXCrosshairs(),
                'back' === a.config.yaxis[0].crosshairs.position &&
                  new lt(this.ctx).drawYCrosshairs(),
                'datetime' === a.config.xaxis.type &&
                  void 0 === a.config.xaxis.labels.formatter &&
                  ((t = new Dt(this.ctx)),
                  (e = []),
                  isFinite(a.globals.minX) &&
                  isFinite(a.globals.maxX) &&
                  !a.globals.isBarHorizontal
                    ? (e = t.calculateTimeScaleTicks(
                        a.globals.minX,
                        a.globals.maxX
                      ))
                    : a.globals.isBarHorizontal &&
                      (e = t.calculateTimeScaleTicks(
                        a.globals.minY,
                        a.globals.maxY
                      )),
                  t.recalcDimensionsBasedOnFormat(e)),
                (i = new P(this.ctx).getCalculatedRatios())),
              i
            )
          }
        },
        {
          key: 'updateSourceChart',
          value: function (t) {
            ;(this.ctx.w.globals.selection = void 0),
              this.ctx.updateHelpers._updateOptions(
                {
                  chart: {
                    selection: {
                      xaxis: { min: t.w.globals.minX, max: t.w.globals.maxX }
                    }
                  }
                },
                !1,
                !1
              )
          }
        },
        {
          key: 'setupBrushHandler',
          value: function () {
            var e,
              i = this,
              r = this.w
            r.config.chart.brush.enabled &&
              'function' != typeof r.config.chart.events.selection &&
              ((e = r.config.chart.brush.targets || [
                r.config.chart.brush.target
              ]).forEach(function (t) {
                var e = ApexCharts.getChartByID(t)
                ;(e.w.globals.brushSource = i.ctx),
                  'function' != typeof e.w.config.chart.events.zoomed &&
                    (e.w.config.chart.events.zoomed = function () {
                      i.updateSourceChart(e)
                    }),
                  'function' != typeof e.w.config.chart.events.scrolled &&
                    (e.w.config.chart.events.scrolled = function () {
                      i.updateSourceChart(e)
                    })
              }),
              (r.config.chart.events.selection = function (t, i) {
                e.forEach(function (t) {
                  var a = ApexCharts.getChartByID(t),
                    s = I.clone(r.config.yaxis)
                  r.config.chart.brush.autoScaleYaxis &&
                    1 === a.w.globals.series.length &&
                    (s = new it(a).autoScaleY(a, s, i))
                  var e = a.w.config.yaxis.reduce(function (t, e, i) {
                    return [].concat(A(t), [
                      M(
                        M({}, a.w.config.yaxis[i]),
                        {},
                        { min: s[0].min, max: s[0].max }
                      )
                    ])
                  }, [])
                  a.ctx.updateHelpers._updateOptions(
                    { xaxis: { min: i.xaxis.min, max: i.xaxis.max }, yaxis: e },
                    !1,
                    !1,
                    !1,
                    !1
                  )
                })
              }))
          }
        }
      ]),
      Wt),
    Nt =
      (n(Ot, [
        {
          key: '_updateOptions',
          value: function (i) {
            var a = this,
              s =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              r =
                !(2 < arguments.length && void 0 !== arguments[2]) ||
                arguments[2],
              t =
                !(3 < arguments.length && void 0 !== arguments[3]) ||
                arguments[3],
              n =
                4 < arguments.length && void 0 !== arguments[4] && arguments[4],
              e = [this.ctx]
            t && (e = this.ctx.getSyncedCharts()),
              this.ctx.w.globals.isExecCalled &&
                ((e = [this.ctx]), (this.ctx.w.globals.isExecCalled = !1)),
              e.forEach(function (t) {
                var e = t.w
                return (
                  (e.globals.shouldAnimate = r),
                  s ||
                    ((e.globals.resized = !0),
                    (e.globals.dataChanged = !0),
                    r && t.series.getPreviousPaths()),
                  i &&
                    'object' === v(i) &&
                    ((t.config = new U(i)),
                    (i = P.extendArrayProps(t.config, i, e)),
                    t.w.globals.chartID !== a.ctx.w.globals.chartID &&
                      delete i.series,
                    (e.config = I.extend(e.config, i)),
                    n &&
                      ((e.globals.lastXAxis = []),
                      (e.globals.lastYAxis = []),
                      (e.globals.initialConfig = I.extend({}, e.config)),
                      (e.globals.initialSeries = I.clone(e.config.series)))),
                  t.update(i)
                )
              })
          }
        },
        {
          key: '_updateSeries',
          value: function (t, e) {
            var i,
              a = this,
              s =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              r = this.w
            return (
              (r.globals.shouldAnimate = e),
              (r.globals.dataChanged = !0),
              e && this.ctx.series.getPreviousPaths(),
              r.globals.axisCharts
                ? (0 ===
                    (i = t.map(function (t, e) {
                      return a._extendSeries(t, e)
                    })).length && (i = [{ data: [] }]),
                  (r.config.series = i))
                : (r.config.series = t.slice()),
              s && (r.globals.initialSeries = I.clone(r.config.series)),
              this.ctx.update()
            )
          }
        },
        {
          key: '_extendSeries',
          value: function (t, e) {
            var i = this.w
            return M(
              M({}, i.config.series[e]),
              {},
              {
                name: t.name
                  ? t.name
                  : i.config.series[e] && i.config.series[e].name,
                type: t.type
                  ? t.type
                  : i.config.series[e] && i.config.series[e].type,
                data: t.data
                  ? t.data
                  : i.config.series[e] && i.config.series[e].data
              }
            )
          }
        },
        {
          key: 'toggleDataPointSelection',
          value: function (t, e) {
            var i = this.w,
              a = null,
              s = ".apexcharts-series[data\\:realIndex='".concat(t, "']")
            return (
              i.globals.axisCharts
                ? (a = i.globals.dom.Paper.select(
                    ''
                      .concat(s, " path[j='")
                      .concat(e, "'], ")
                      .concat(s, " circle[j='")
                      .concat(e, "'], ")
                      .concat(s, " rect[j='")
                      .concat(e, "']")
                  ).members[0])
                : void 0 === e &&
                  ((a = i.globals.dom.Paper.select(
                    ''.concat(s, " path[j='").concat(t, "']")
                  ).members[0]),
                  ('pie' !== i.config.chart.type &&
                    'polarArea' !== i.config.chart.type &&
                    'donut' !== i.config.chart.type) ||
                    this.ctx.pie.pieClicked(t)),
              a
                ? (new Y(this.ctx).pathMouseDown(a, null),
                  a.node ? a.node : null)
                : (console.warn('toggleDataPointSelection: Element not found'),
                  null)
            )
          }
        },
        {
          key: 'forceXAxisUpdate',
          value: function (e) {
            var t,
              i = this.w
            return (
              ['min', 'max'].forEach(function (t) {
                void 0 !== e.xaxis[t] &&
                  ((i.config.xaxis[t] = e.xaxis[t]),
                  (i.globals.lastXAxis[t] = e.xaxis[t]))
              }),
              e.xaxis.categories &&
                e.xaxis.categories.length &&
                (i.config.xaxis.categories = e.xaxis.categories),
              i.config.xaxis.convertedCatToNumeric &&
                ((t = new j(e)), (e = t.convertCatToNumericXaxis(e, this.ctx))),
              e
            )
          }
        },
        {
          key: 'forceYAxisUpdate',
          value: function (i) {
            var t = this.w
            return (
              t.config.chart.stacked &&
                '100%' === t.config.chart.stackType &&
                (Array.isArray(i.yaxis)
                  ? i.yaxis.forEach(function (t, e) {
                      ;(i.yaxis[e].min = 0), (i.yaxis[e].max = 100)
                    })
                  : ((i.yaxis.min = 0), (i.yaxis.max = 100))),
              i
            )
          }
        },
        {
          key: 'revertDefaultAxisMinMax',
          value: function () {
            var i = this,
              a = this.w
            ;(a.config.xaxis.min = a.globals.lastXAxis.min),
              (a.config.xaxis.max = a.globals.lastXAxis.max),
              a.config.yaxis.map(function (t, e) {
                a.globals.zoomed
                  ? void 0 !== a.globals.lastYAxis[e] &&
                    ((t.min = a.globals.lastYAxis[e].min),
                    (t.max = a.globals.lastYAxis[e].max))
                  : void 0 !== i.ctx.opts.yaxis[e] &&
                    ((t.min = i.ctx.opts.yaxis[e].min),
                    (t.max = i.ctx.opts.yaxis[e].max))
              })
          }
        }
      ]),
      Ot)
  function Ot (t) {
    r(this, Ot), (this.ctx = t), (this.w = t.w)
  }
  function Wt (t, e) {
    r(this, Wt), (this.ctx = e), (this.w = e.w), (this.el = t)
  }
  function Bt (t) {
    r(this, Bt),
      (this.ctx = t),
      (this.w = t.w),
      (this.timeScaleArray = []),
      (this.utc = this.w.config.xaxis.labels.datetimeUTC)
  }
  function Vt (t, e, i) {
    r(this, Vt),
      (this.ctx = t),
      (this.w = t.w),
      (this.xyRatios = e),
      (this.pointsChart =
        !(
          'bubble' !== this.w.config.chart.type &&
          'scatter' !== this.w.config.chart.type
        ) || i),
      (this.scatter = new H(this.ctx)),
      (this.noNegatives = this.w.globals.minX === Number.MAX_VALUE),
      (this.lineHelpers = new Ft(this)),
      (this.markers = new D(this.ctx)),
      (this.prevSeriesY = []),
      (this.categoryAxisCorrection = 0),
      (this.yaxisIndex = 0)
  }
  function Gt (t) {
    r(this, Gt), (this.w = t.w), (this.lineCtx = t)
  }
  function _t (t) {
    r(this, _t),
      (this.ctx = t),
      (this.w = t.w),
      (this.chartType = this.w.config.chart.type),
      (this.initialAnim = this.w.config.chart.animations.enabled),
      (this.dynamicAnim =
        this.initialAnim &&
        this.w.config.chart.animations.dynamicAnimation.enabled),
      (this.animDur = 0)
    var e = this.w
    ;(this.graphics = new Y(this.ctx)),
      (this.lineColorArr =
        void 0 !== e.globals.stroke.colors
          ? e.globals.stroke.colors
          : e.globals.colors),
      (this.defaultSize =
        e.globals.svgHeight < e.globals.svgWidth
          ? e.globals.gridHeight + 1.5 * e.globals.goldenPadding
          : e.globals.gridWidth),
      (this.maxValue = this.w.globals.maxY),
      (this.minValue = this.w.globals.minY),
      (this.polygons = e.config.plotOptions.radar.polygons),
      (this.strokeWidth = e.config.stroke.show ? e.config.stroke.width : 0),
      (this.size =
        this.defaultSize / 2.1 -
        this.strokeWidth -
        e.config.chart.dropShadow.blur),
      e.config.xaxis.labels.show &&
        (this.size = this.size - e.globals.xAxisLabelsWidth / 1.75),
      void 0 !== e.config.plotOptions.radar.size &&
        (this.size = e.config.plotOptions.radar.size),
      (this.dataRadiusOfPercent = []),
      (this.dataRadius = []),
      (this.angleArr = []),
      (this.yaxisLabelsTextsPos = [])
  }
  function jt (t) {
    r(this, jt), (this.ctx = t), (this.w = t.w)
    var e = this.w
    ;(this.chartType = this.w.config.chart.type),
      (this.initialAnim = this.w.config.chart.animations.enabled),
      (this.dynamicAnim =
        this.initialAnim &&
        this.w.config.chart.animations.dynamicAnimation.enabled),
      (this.animBeginArr = [0]),
      (this.animDur = 0),
      (this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels),
      (this.lineColorArr =
        void 0 !== e.globals.stroke.colors
          ? e.globals.stroke.colors
          : e.globals.colors),
      (this.defaultSize =
        e.globals.svgHeight < e.globals.svgWidth
          ? e.globals.gridHeight
          : e.globals.gridWidth),
      (this.centerY = this.defaultSize / 2),
      (this.centerX = e.globals.gridWidth / 2),
      (this.fullAngle = 360),
      (e.globals.radialSize =
        this.defaultSize / 2.05 -
        e.config.stroke.width -
        (e.config.chart.sparkline.enabled
          ? 0
          : e.config.chart.dropShadow.blur)),
      (this.donutSize =
        (e.globals.radialSize *
          parseInt(e.config.plotOptions.pie.donut.size, 10)) /
        100),
      (this.maxY = 0),
      (this.sliceLabels = []),
      (this.sliceSizes = []),
      (this.prevSectorAngleArr = [])
  }
  function Ut (t) {
    r(this, Ut), (this.ctx = t), (this.w = t.w)
  }
  function qt (t, e) {
    r(this, qt),
      (this.ctx = t),
      (this.w = t.w),
      (this.xRatio = e.xRatio),
      (this.yRatio = e.yRatio),
      (this.negRange = !1),
      (this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation),
      (this.rectRadius = this.w.config.plotOptions.heatmap.radius),
      (this.strokeWidth = this.w.config.stroke.show
        ? this.w.config.stroke.width
        : 0)
  }
  function Zt (t) {
    r(this, Zt), (this.ctx = t), (this.w = t.w)
    var e = this.w
    ;(this.tConfig = e.config.tooltip),
      (this.tooltipUtil = new wt(this)),
      (this.tooltipLabels = new kt(this)),
      (this.tooltipPosition = new At(this)),
      (this.marker = new St(this)),
      (this.intersect = new Ct(this)),
      (this.axesTooltip = new Lt(this)),
      (this.showOnIntersect = this.tConfig.intersect),
      (this.showTooltipTitle = this.tConfig.x.show),
      (this.fixedTooltip = this.tConfig.fixed.enabled),
      (this.xaxisTooltip = null),
      (this.yaxisTTEls = null),
      (this.isBarShared = !e.globals.isBarHorizontal && this.tConfig.shared)
  }
  function $t (t) {
    r(this, $t), (this.w = t.w), (this.ttCtx = t)
  }
  function Jt (t) {
    r(this, Jt), (this.w = t.w), (this.ttCtx = t)
  }
  function Qt (t) {
    r(this, Qt),
      (this.w = t.w),
      (this.ttCtx = t),
      (this.ctx = t.ctx),
      (this.tooltipPosition = new At(t))
  }
  function Kt (t) {
    r(this, Kt), (this.ttCtx = t), (this.ctx = t.ctx), (this.w = t.w)
  }
  function te (t) {
    r(this, te),
      (this.w = t.w),
      (this.ctx = t.ctx),
      (this.ttCtx = t),
      (this.tooltipUtil = new wt(t))
  }
  function ee (t) {
    r(this, ee), (this.w = t.w), (this.ttCtx = t), (this.ctx = t.ctx)
  }
  function ie (t) {
    r(this, ie),
      (this.ctx = t),
      (this.w = t.w),
      (this.ev = this.w.config.chart.events),
      (this.selectedClass = 'apexcharts-selected'),
      (this.localeValues = this.w.globals.locale.toolbar)
  }
  function ae (t, e) {
    r(this, ae),
      (this.ctx = t),
      (this.w = t.w),
      (this.onLegendClick = this.onLegendClick.bind(this)),
      (this.onLegendHovered = this.onLegendHovered.bind(this)),
      (this.isBarsDistributed =
        'bar' === this.w.config.chart.type &&
        this.w.config.plotOptions.bar.distributed &&
        1 === this.w.config.series.length),
      (this.legendHelpers = new bt(this))
  }
  function se (t) {
    r(this, se), (this.w = t.w), (this.lgCtx = t)
  }
  function re (t) {
    r(this, re),
      (this.ctx = t),
      (this.w = t.w),
      (this.lgRect = {}),
      (this.yAxisWidth = 0),
      (this.yAxisWidthLeft = 0),
      (this.yAxisWidthRight = 0),
      (this.xAxisHeight = 0),
      (this.isSparkline = this.w.config.chart.sparkline.enabled),
      (this.dimHelpers = new gt(this)),
      (this.dimYAxis = new pt(this)),
      (this.dimXAxis = new ut(this)),
      (this.dimGrid = new ft(this)),
      (this.lgWidthForSideLegends = 0),
      (this.gridPad = this.w.config.grid.padding),
      (this.xPadRight = 0),
      (this.xPadLeft = 0)
  }
  function ne (t) {
    r(this, ne), (this.w = t.w), (this.dCtx = t)
  }
  function oe (t) {
    r(this, oe), (this.w = t.w), (this.dCtx = t)
  }
  function le (t) {
    r(this, le), (this.w = t.w), (this.dCtx = t)
  }
  function he (t) {
    r(this, he), (this.w = t.w), (this.dCtx = t)
  }
  function ce (t) {
    r(this, ce), (this.ctx = t), (this.w = t.w)
  }
  function de (t) {
    r(this, de), (this.ctx = t), (this.colors = []), (this.w = t.w)
    var e = this.w
    ;(this.isColorFn = !1),
      (this.isBarDistributed =
        e.config.plotOptions.bar.distributed &&
        ('bar' === e.config.chart.type || 'rangeBar' === e.config.chart.type))
  }
  function ge (t) {
    r(this, ge), (this.ctx = t), (this.w = t.w)
  }
  function ue (t) {
    r(this, ue), (this.ctx = t), (this.w = t.w)
  }
  function pe (t) {
    r(this, pe), (this.ctx = t), (this.w = t.w)
  }
  function fe (t) {
    r(this, fe), (this.ctx = t), (this.w = t.w)
  }
  function xe (t) {
    r(this, xe),
      (this.ctx = t),
      (this.w = t.w),
      (this.documentEvent = I.bind(this.documentEvent, this))
  }
  function be (t) {
    r(this, be), (this.ctx = t), (this.w = t.w)
    var e = this.w
    ;(this.xaxisFontSize = e.config.xaxis.labels.style.fontSize),
      (this.axisFontFamily = e.config.xaxis.labels.style.fontFamily),
      (this.xaxisForeColors = e.config.xaxis.labels.style.colors),
      (this.isCategoryBarHorizontal =
        'bar' === e.config.chart.type && e.config.plotOptions.bar.horizontal),
      (this.xAxisoffX = 0),
      'bottom' === e.config.xaxis.position &&
        (this.xAxisoffX = e.globals.gridHeight),
      (this.drawnLabels = []),
      (this.axesUtils = new Q(t))
  }
  function me (t) {
    r(this, me), (this.ctx = t), (this.w = t.w), (this.scales = new it(t))
  }
  function ve (t) {
    r(this, ve), (this.ctx = t), (this.w = t.w)
  }
  function ye (t) {
    r(this, ye), (this.ctx = t), (this.w = t.w)
    var e = this.w
    ;(this.xaxisLabels = e.globals.labels.slice()),
      (this.axesUtils = new Q(t)),
      (this.isTimelineBar =
        'datetime' === e.config.xaxis.type &&
        e.globals.seriesRangeBarTimeline.length),
      0 < e.globals.timescaleLabels.length &&
        (this.xaxisLabels = e.globals.timescaleLabels.slice())
  }
  function we (t) {
    r(this, we), (this.ctx = t), (this.w = t.w)
    var e = this.w
    ;(this.axesUtils = new Q(t)),
      (this.xaxisLabels = e.globals.labels.slice()),
      0 < e.globals.timescaleLabels.length &&
        !e.globals.isBarHorizontal &&
        (this.xaxisLabels = e.globals.timescaleLabels.slice()),
      (this.drawnLabels = []),
      (this.drawnLabelsRects = []),
      'top' === e.config.xaxis.position
        ? (this.offY = 0)
        : (this.offY = e.globals.gridHeight + 1),
      (this.offY = this.offY + e.config.xaxis.axisBorder.offsetY),
      (this.isCategoryBarHorizontal =
        'bar' === e.config.chart.type && e.config.plotOptions.bar.horizontal),
      (this.xaxisFontSize = e.config.xaxis.labels.style.fontSize),
      (this.xaxisFontFamily = e.config.xaxis.labels.style.fontFamily),
      (this.xaxisForeColors = e.config.xaxis.labels.style.colors),
      (this.xaxisBorderWidth = e.config.xaxis.axisBorder.width),
      this.isCategoryBarHorizontal &&
        (this.xaxisBorderWidth = e.config.yaxis[0].axisBorder.width.toString()),
      -1 < this.xaxisBorderWidth.indexOf('%')
        ? (this.xaxisBorderWidth =
            (e.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10)) / 100)
        : (this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10)),
      (this.xaxisBorderHeight = e.config.xaxis.axisBorder.height),
      (this.yaxis = e.config.yaxis[0])
  }
  function ke (t) {
    r(this, ke), (this.ctx = t), (this.w = t.w)
  }
  function Ae (t) {
    r(this, Ae), (this.ctx = t), (this.w = t.w)
  }
  function Se (t) {
    r(this, Se),
      (this.ctx = t),
      (this.w = t.w),
      (this.tooltipKeyFormat = 'dd MMM')
  }
  function Ce (t) {
    r(this, Ce),
      (this.ctx = t),
      (this.w = t.w),
      (this.twoDSeries = []),
      (this.threeDSeries = []),
      (this.twoDSeriesX = []),
      (this.coreUtils = new P(this.ctx))
  }
  function Le (t) {
    r(this, Le), (this.opts = t)
  }
  function Pe () {
    r(this, Pe)
  }
  function Te (t) {
    r(this, Te), (this.opts = t)
  }
  function ze (t) {
    r(this, ze), (this.opts = t)
  }
  function Ie (t) {
    r(this, Ie),
      (this.ctx = t),
      (this.w = t.w),
      (this.months31 = [1, 3, 5, 7, 8, 10, 12]),
      (this.months30 = [2, 4, 6, 9, 11]),
      (this.daysCntOfYear = [
        0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334
      ])
  }
  function Me (t, e) {
    r(this, Me), (this.ctx = t), (this.w = t.w)
    var i = this.w
    ;(this.barOptions = i.config.plotOptions.bar),
      (this.isHorizontal = this.barOptions.horizontal),
      (this.strokeWidth = i.config.stroke.width),
      (this.isNullValue = !1),
      (this.isTimelineBar =
        'datetime' === i.config.xaxis.type &&
        i.globals.seriesRangeBarTimeline.length),
      (this.xyRatios = e),
      null !== this.xyRatios &&
        ((this.xRatio = e.xRatio),
        (this.initialXRatio = e.initialXRatio),
        (this.yRatio = e.yRatio),
        (this.invertedXRatio = e.invertedXRatio),
        (this.invertedYRatio = e.invertedYRatio),
        (this.baseLineY = e.baseLineY),
        (this.baseLineInvertedY = e.baseLineInvertedY)),
      (this.yaxisIndex = 0),
      (this.seriesLen = 0),
      (this.barHelpers = new B(this))
  }
  function Ee (t) {
    r(this, Ee), (this.w = t.w), (this.barCtx = t)
  }
  function Xe (t) {
    r(this, Xe),
      (this.ctx = t),
      (this.w = t.w),
      (this.legendInactiveClass = 'legend-mouseover-inactive')
  }
  function Ye (t) {
    r(this, Ye), (this.w = t.w), (this.barCtx = t)
  }
  function Fe (t) {
    r(this, Fe), (this.ctx = t), (this.w = t.w)
  }
  function Re (t) {
    r(this, Re),
      (this.ctx = t),
      (this.w = t.w),
      (this.initialAnim = this.w.config.chart.animations.enabled),
      (this.dynamicAnim =
        this.initialAnim &&
        this.w.config.chart.animations.dynamicAnimation.enabled)
  }
  function De (t, e) {
    r(this, De), (this.ctx = t), (this.w = t.w)
  }
  function He (t) {
    r(this, He),
      (this.ctx = t),
      (this.w = t.w),
      (this.opts = null),
      (this.seriesIndex = 0)
  }
  function Ne (t) {
    r(this, Ne),
      (this.ctx = t),
      (this.w = t.w),
      (this.graphics = new Y(this.ctx)),
      this.w.globals.isBarHorizontal && (this.invertAxis = !0),
      (this.helpers = new e(this)),
      (this.xAxisAnnotations = new g(this)),
      (this.yAxisAnnotations = new u(this)),
      (this.pointsAnnotations = new p(this)),
      this.w.globals.isBarHorizontal &&
        this.w.config.yaxis[0].reversed &&
        (this.inversedReversedAxis = !0),
      (this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints)
  }
  function Oe () {
    r(this, Oe),
      (this.yAxis = {
        show: !0,
        showAlways: !1,
        showForNullSeries: !0,
        seriesName: void 0,
        opposite: !1,
        reversed: !1,
        logarithmic: !1,
        tickAmount: void 0,
        forceNiceScale: !1,
        max: void 0,
        min: void 0,
        floating: !1,
        decimalsInFloat: void 0,
        labels: {
          show: !0,
          minWidth: 0,
          maxWidth: 160,
          offsetX: 0,
          offsetY: 0,
          align: void 0,
          rotate: 0,
          padding: 20,
          style: {
            colors: [],
            fontSize: '11px',
            fontWeight: 400,
            fontFamily: void 0,
            cssClass: ''
          },
          formatter: void 0
        },
        axisBorder: {
          show: !1,
          color: '#e0e0e0',
          width: 1,
          offsetX: 0,
          offsetY: 0
        },
        axisTicks: {
          show: !1,
          color: '#e0e0e0',
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        title: {
          text: void 0,
          rotate: 90,
          offsetY: 0,
          offsetX: 0,
          style: {
            color: void 0,
            fontSize: '11px',
            fontWeight: 900,
            fontFamily: void 0,
            cssClass: ''
          }
        },
        tooltip: { enabled: !1, offsetX: 0 },
        crosshairs: {
          show: !0,
          position: 'front',
          stroke: { color: '#b6b6b6', width: 1, dashArray: 0 }
        }
      }),
      (this.pointAnnotation = {
        x: 0,
        y: null,
        yAxisIndex: 0,
        seriesIndex: 0,
        marker: {
          size: 4,
          fillColor: '#fff',
          strokeWidth: 2,
          strokeColor: '#333',
          shape: 'circle',
          offsetX: 0,
          offsetY: 0,
          radius: 2,
          cssClass: ''
        },
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          borderRadius: 2,
          text: void 0,
          textAnchor: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            background: '#fff',
            color: void 0,
            fontSize: '11px',
            fontFamily: void 0,
            fontWeight: 400,
            cssClass: '',
            padding: { left: 5, right: 5, top: 2, bottom: 2 }
          }
        },
        customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 },
        image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 }
      }),
      (this.yAxisAnnotation = {
        y: 0,
        y2: null,
        strokeDashArray: 1,
        fillColor: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
        yAxisIndex: 0,
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          borderRadius: 2,
          text: void 0,
          textAnchor: 'end',
          position: 'right',
          offsetX: 0,
          offsetY: -3,
          style: {
            background: '#fff',
            color: void 0,
            fontSize: '11px',
            fontFamily: void 0,
            fontWeight: 400,
            cssClass: '',
            padding: { left: 5, right: 5, top: 2, bottom: 2 }
          }
        }
      }),
      (this.xAxisAnnotation = {
        x: 0,
        x2: null,
        strokeDashArray: 1,
        fillColor: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          borderRadius: 2,
          text: void 0,
          textAnchor: 'middle',
          orientation: 'vertical',
          position: 'top',
          offsetX: 0,
          offsetY: 0,
          style: {
            background: '#fff',
            color: void 0,
            fontSize: '11px',
            fontFamily: void 0,
            fontWeight: 400,
            cssClass: '',
            padding: { left: 5, right: 5, top: 2, bottom: 2 }
          }
        }
      }),
      (this.text = {
        x: 0,
        y: 0,
        text: '',
        textAnchor: 'start',
        foreColor: void 0,
        fontSize: '13px',
        fontFamily: void 0,
        fontWeight: 400,
        appendTo: '.apexcharts-annotations',
        backgroundColor: 'transparent',
        borderColor: '#c2c2c2',
        borderRadius: 0,
        borderWidth: 0,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2
      }),
      (this.shape = {
        x: 0,
        y: 0,
        type: 'rect',
        width: '100%',
        height: 50,
        appendTo: '.apexcharts-annotations',
        backgroundColor: '#fff',
        opacity: 1,
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#c2c2c2'
      })
  }
  function We (t) {
    ;(this.el = t).remember('_selectHandler', this),
      (this.pointSelection = { isSelected: !1 }),
      (this.rectSelection = { isSelected: !1 }),
      (this.pointsList = {
        lt: [0, 0],
        rt: ['width', 0],
        rb: ['width', 'height'],
        lb: [0, 'height'],
        t: ['width', 0],
        r: ['width', 'height'],
        b: ['width', 'height'],
        l: [0, 'height']
      }),
      (this.pointCoord = function (t, e, i) {
        var a = 'string' != typeof t ? t : e[t]
        return i ? a / 2 : a
      }),
      (this.pointCoords = function (t, e) {
        var i = this.pointsList[t]
        return {
          x: this.pointCoord(i[0], e, 't' === t || 'b' === t),
          y: this.pointCoord(i[1], e, 'r' === t || 'l' === t)
        }
      })
  }
  function Be (t) {
    switch (t[0]) {
      case 'z':
      case 'Z':
        ;(t[0] = 'L'), (t[1] = this.start[0]), (t[2] = this.start[1])
        break
      case 'H':
        ;(t[0] = 'L'), (t[2] = this.pos[1])
        break
      case 'V':
        ;(t[0] = 'L'), (t[2] = t[1]), (t[1] = this.pos[0])
        break
      case 'T':
        ;(t[0] = 'Q'),
          (t[3] = t[1]),
          (t[4] = t[2]),
          (t[1] = this.reflection[1]),
          (t[2] = this.reflection[0])
        break
      case 'S':
        ;(t[0] = 'C'),
          (t[6] = t[4]),
          (t[5] = t[3]),
          (t[4] = t[2]),
          (t[3] = t[1]),
          (t[2] = this.reflection[1]),
          (t[1] = this.reflection[0])
    }
    return t
  }
  function Ve (t) {
    var e = t.length
    return (
      (this.pos = [t[e - 2], t[e - 1]]),
      -1 != 'SCQT'.indexOf(t[0]) &&
        (this.reflection = [
          2 * this.pos[0] - t[e - 4],
          2 * this.pos[1] - t[e - 3]
        ]),
      t
    )
  }
  function Ge (t) {
    var e = [t]
    switch (t[0]) {
      case 'M':
        return (this.pos = this.start = [t[1], t[2]]), e
      case 'L':
        ;(t[5] = t[3] = t[1]),
          (t[6] = t[4] = t[2]),
          (t[1] = this.pos[0]),
          (t[2] = this.pos[1])
        break
      case 'Q':
        ;(t[6] = t[4]),
          (t[5] = t[3]),
          (t[4] = t[4] / 3 + (2 * t[2]) / 3),
          (t[3] = t[3] / 3 + (2 * t[1]) / 3),
          (t[2] = this.pos[1] / 3 + (2 * t[2]) / 3),
          (t[1] = this.pos[0] / 3 + (2 * t[1]) / 3)
        break
      case 'A':
        t = (e = (function (t, e) {
          var i,
            a,
            s,
            r,
            n,
            o,
            l,
            h,
            c,
            d,
            g,
            u,
            p,
            f,
            x,
            b,
            m,
            v,
            y,
            w,
            k,
            A,
            S,
            C,
            L,
            P,
            T = Math.abs(e[1]),
            z = Math.abs(e[2]),
            I = e[3] % 360,
            M = e[4],
            E = e[5],
            X = e[6],
            Y = e[7],
            F = new SVG.Point(t),
            R = new SVG.Point(X, Y),
            D = []
          if (0 === T || 0 === z || (F.x === R.x && F.y === R.y))
            return [['C', F.x, F.y, R.x, R.y, R.x, R.y]]
          for (
            1 <
              (a =
                ((i = new SVG.Point((F.x - R.x) / 2, (F.y - R.y) / 2).transform(
                  new SVG.Matrix().rotate(I)
                )).x *
                  i.x) /
                  (T * T) +
                (i.y * i.y) / (z * z)) && ((T *= a = Math.sqrt(a)), (z *= a)),
              s = new SVG.Matrix()
                .rotate(I)
                .scale(1 / T, 1 / z)
                .rotate(-I),
              F = F.transform(s),
              o =
                (r = [(R = R.transform(s)).x - F.x, R.y - F.y])[0] * r[0] +
                r[1] * r[1],
              n = Math.sqrt(o),
              r[0] /= n,
              r[1] /= n,
              l = o < 4 ? Math.sqrt(1 - o / 4) : 0,
              M === E && (l *= -1),
              h = new SVG.Point(
                (R.x + F.x) / 2 + l * -r[1],
                (R.y + F.y) / 2 + l * r[0]
              ),
              c = new SVG.Point(F.x - h.x, F.y - h.y),
              d = new SVG.Point(R.x - h.x, R.y - h.y),
              g = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)),
              c.y < 0 && (g *= -1),
              u = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)),
              d.y < 0 && (u *= -1),
              E && u < g && (u += 2 * Math.PI),
              !E && g < u && (u -= 2 * Math.PI),
              b = [],
              p =
                (u - (m = g)) /
                (f = Math.ceil((2 * Math.abs(g - u)) / Math.PI)),
              x = (4 * Math.tan(p / 4)) / 3,
              k = 0;
            k <= f;
            k++
          )
            (y = Math.cos(m)),
              (v = Math.sin(m)),
              (w = new SVG.Point(h.x + y, h.y + v)),
              (b[k] = [
                new SVG.Point(w.x + x * v, w.y - x * y),
                w,
                new SVG.Point(w.x - x * v, w.y + x * y)
              ]),
              (m += p)
          for (
            b[0][0] = b[0][1].clone(),
              b[b.length - 1][2] = b[b.length - 1][1].clone(),
              s = new SVG.Matrix().rotate(I).scale(T, z).rotate(-I),
              k = 0,
              A = b.length;
            k < A;
            k++
          )
            (b[k][0] = b[k][0].transform(s)),
              (b[k][1] = b[k][1].transform(s)),
              (b[k][2] = b[k][2].transform(s))
          for (k = 1, A = b.length; k < A; k++)
            (S = (w = b[k - 1][2]).x),
              (C = w.y),
              (L = (w = b[k][0]).x),
              (P = w.y),
              (X = (w = b[k][1]).x),
              (Y = w.y),
              D.push(['C', S, C, L, P, X, Y])
          return D
        })(this.pos, t))[0]
    }
    return (
      (t[0] = 'C'),
      (this.pos = [t[5], t[6]]),
      (this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]]),
      e
    )
  }
  function _e (t, e) {
    if (!1 === e) return !1
    for (var i = e, a = t.length; i < a; ++i) if ('M' == t[i][0]) return i
    return !1
  }
  ;(t = 'undefined' != typeof window ? window : void 0),
    (L = function (s, r) {
      var h = ((void 0 !== this ? this : s).SVG = function (t) {
        if (h.supported)
          return (t = new h.Doc(t)), h.parser.draw || h.prepare(), t
      })
      if (
        ((h.ns = 'http://www.w3.org/2000/svg'),
        (h.xmlns = 'http://www.w3.org/2000/xmlns/'),
        (h.xlink = 'http://www.w3.org/1999/xlink'),
        (h.svgjs = 'http://svgjs.com/svgjs'),
        (h.supported = !0),
        !h.supported)
      )
        return !1
      ;(h.did = 1e3),
        (h.eid = function (t) {
          return 'Svgjs' + o(t) + h.did++
        }),
        (h.create = function (t) {
          var e = r.createElementNS(this.ns, t)
          return e.setAttribute('id', this.eid(t)), e
        }),
        (h.extend = function () {
          for (
            var t, e = (t = [].slice.call(arguments)).pop(), i = t.length - 1;
            0 <= i;
            i--
          )
            if (t[i]) for (var a in e) t[i].prototype[a] = e[a]
          h.Set && h.Set.inherit && h.Set.inherit()
        }),
        (h.invent = function (t) {
          var e =
            'function' == typeof t.create
              ? t.create
              : function () {
                  this.constructor.call(this, h.create(t.create))
                }
          return (
            t.inherit && (e.prototype = new t.inherit()),
            t.extend && h.extend(e, t.extend),
            t.construct && h.extend(t.parent || h.Container, t.construct),
            e
          )
        }),
        (h.adopt = function (t) {
          return t
            ? t.instance
              ? t.instance
              : (((e =
                  'svg' == t.nodeName
                    ? t.parentNode instanceof s.SVGElement
                      ? new h.Nested()
                      : new h.Doc()
                    : 'linearGradient' == t.nodeName
                    ? new h.Gradient('linear')
                    : 'radialGradient' == t.nodeName
                    ? new h.Gradient('radial')
                    : h[o(t.nodeName)]
                    ? new h[o(t.nodeName)]()
                    : new h.Element(t)).type = t.nodeName),
                ((e.node = t).instance = e) instanceof h.Doc &&
                  e.namespace().defs(),
                e.setData(JSON.parse(t.getAttribute('svgjs:data')) || {}),
                e)
            : null
          var e
        }),
        (h.prepare = function () {
          var t = r.getElementsByTagName('body')[0],
            e = (t ? new h.Doc(t) : h.adopt(r.documentElement).nested()).size(
              2,
              0
            )
          h.parser = {
            body: t || r.documentElement,
            draw: e.style(
              'opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden'
            ).node,
            poly: e.polyline().node,
            path: e.path().node,
            native: h.create('svg')
          }
        }),
        (h.parser = { native: h.create('svg') }),
        r.addEventListener(
          'DOMContentLoaded',
          function () {
            h.parser.draw || h.prepare()
          },
          !1
        ),
        (h.regex = {
          numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
          hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
          rgb: /rgb\((\d+),(\d+),(\d+)\)/,
          reference: /#([a-z0-9\-_]+)/i,
          transforms: /\)\s*,?\s*/,
          whitespace: /\s/g,
          isHex: /^#[a-f0-9]{3,6}$/i,
          isRgb: /^rgb\(/,
          isCss: /[^:]+:[^;]+;?/,
          isBlank: /^(\s+)?$/,
          isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          isPercent: /^-?[\d\.]+%$/,
          isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
          delimiter: /[\s,]+/,
          hyphen: /([^e])\-/gi,
          pathLetters: /[MLHVCSQTAZ]/gi,
          isPathLetter: /[MLHVCSQTAZ]/i,
          numbersWithDots:
            /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
          dots: /\./g
        }),
        (h.utils = {
          map: function (t, e) {
            for (var i = t.length, a = [], s = 0; s < i; s++) a.push(e(t[s]))
            return a
          },
          filter: function (t, e) {
            for (var i = t.length, a = [], s = 0; s < i; s++)
              e(t[s]) && a.push(t[s])
            return a
          },
          filterSVGElements: function (t) {
            return this.filter(t, function (t) {
              return t instanceof s.SVGElement
            })
          }
        }),
        (h.defaults = {
          attrs: {
            'fill-opacity': 1,
            'stroke-opacity': 1,
            'stroke-width': 0,
            'stroke-linejoin': 'miter',
            'stroke-linecap': 'butt',
            fill: '#000000',
            stroke: '#000000',
            opacity: 1,
            x: 0,
            y: 0,
            cx: 0,
            cy: 0,
            width: 0,
            height: 0,
            r: 0,
            rx: 0,
            ry: 0,
            offset: 0,
            'stop-opacity': 1,
            'stop-color': '#000000',
            'font-size': 16,
            'font-family': 'Helvetica, Arial, sans-serif',
            'text-anchor': 'start'
          }
        }),
        (h.Color = function (t) {
          var e, i
          ;(this.r = 0),
            (this.g = 0),
            (this.b = 0),
            t &&
              ('string' == typeof t
                ? h.regex.isRgb.test(t)
                  ? ((e = h.regex.rgb.exec(t.replace(h.regex.whitespace, ''))),
                    (this.r = parseInt(e[1])),
                    (this.g = parseInt(e[2])),
                    (this.b = parseInt(e[3])))
                  : h.regex.isHex.test(t) &&
                    ((e = h.regex.hex.exec(
                      4 == (i = t).length
                        ? [
                            '#',
                            i.substring(1, 2),
                            i.substring(1, 2),
                            i.substring(2, 3),
                            i.substring(2, 3),
                            i.substring(3, 4),
                            i.substring(3, 4)
                          ].join('')
                        : i
                    )),
                    (this.r = parseInt(e[1], 16)),
                    (this.g = parseInt(e[2], 16)),
                    (this.b = parseInt(e[3], 16)))
                : 'object' === v(t) &&
                  ((this.r = t.r), (this.g = t.g), (this.b = t.b)))
        }),
        h.extend(h.Color, {
          toString: function () {
            return this.toHex()
          },
          toHex: function () {
            return '#' + d(this.r) + d(this.g) + d(this.b)
          },
          toRgb: function () {
            return 'rgb(' + [this.r, this.g, this.b].join() + ')'
          },
          brightness: function () {
            return (
              (this.r / 255) * 0.3 +
              (this.g / 255) * 0.59 +
              (this.b / 255) * 0.11
            )
          },
          morph: function (t) {
            return (this.destination = new h.Color(t)), this
          },
          at: function (t) {
            return this.destination
              ? ((t = t < 0 ? 0 : 1 < t ? 1 : t),
                new h.Color({
                  r: ~~(this.r + (this.destination.r - this.r) * t),
                  g: ~~(this.g + (this.destination.g - this.g) * t),
                  b: ~~(this.b + (this.destination.b - this.b) * t)
                }))
              : this
          }
        }),
        (h.Color.test = function (t) {
          return (t += ''), h.regex.isHex.test(t) || h.regex.isRgb.test(t)
        }),
        (h.Color.isRgb = function (t) {
          return (
            t &&
            'number' == typeof t.r &&
            'number' == typeof t.g &&
            'number' == typeof t.b
          )
        }),
        (h.Color.isColor = function (t) {
          return h.Color.isRgb(t) || h.Color.test(t)
        }),
        (h.Array = function (t, e) {
          0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()),
            (this.value = this.parse(t))
        }),
        h.extend(h.Array, {
          toString: function () {
            return this.value.join(' ')
          },
          valueOf: function () {
            return this.value
          },
          parse: function (t) {
            return (t = t.valueOf()), Array.isArray(t) ? t : this.split(t)
          }
        }),
        (h.PointArray = function (t, e) {
          h.Array.call(this, t, e || [[0, 0]])
        }),
        (h.PointArray.prototype = new h.Array()),
        (h.PointArray.prototype.constructor = h.PointArray)
      for (
        var l = {
            M: function (t, e, i) {
              return (e.x = i.x = t[0]), (e.y = i.y = t[1]), ['M', e.x, e.y]
            },
            L: function (t, e) {
              return (e.x = t[0]), (e.y = t[1]), ['L', t[0], t[1]]
            },
            H: function (t, e) {
              return (e.x = t[0]), ['H', t[0]]
            },
            V: function (t, e) {
              return (e.y = t[0]), ['V', t[0]]
            },
            C: function (t, e) {
              return (
                (e.x = t[4]),
                (e.y = t[5]),
                ['C', t[0], t[1], t[2], t[3], t[4], t[5]]
              )
            },
            Q: function (t, e) {
              return (e.x = t[2]), (e.y = t[3]), ['Q', t[0], t[1], t[2], t[3]]
            },
            Z: function (t, e, i) {
              return (e.x = i.x), (e.y = i.y), ['Z']
            }
          },
          t = 'mlhvqtcsaz'.split(''),
          e = 0,
          i = t.length;
        e < i;
        ++e
      )
        l[t[e]] = (function (r) {
          return function (t, e, i) {
            if ('H' == r) t[0] = t[0] + e.x
            else if ('V' == r) t[0] = t[0] + e.y
            else if ('A' == r) (t[5] = t[5] + e.x), (t[6] = t[6] + e.y)
            else
              for (var a = 0, s = t.length; a < s; ++a)
                t[a] = t[a] + (a % 2 ? e.y : e.x)
            return l[r](t, e, i)
          }
        })(t[e].toUpperCase())
      ;(h.PathArray = function (t, e) {
        h.Array.call(this, t, e || [['M', 0, 0]])
      }),
        (h.PathArray.prototype = new h.Array()),
        (h.PathArray.prototype.constructor = h.PathArray),
        h.extend(h.PathArray, {
          toString: function () {
            return (function (t) {
              for (var e = 0, i = t.length, a = ''; e < i; e++)
                (a += t[e][0]),
                  null != t[e][1] &&
                    ((a += t[e][1]),
                    null != t[e][2] &&
                      ((a += ' '),
                      (a += t[e][2]),
                      null != t[e][3] &&
                        ((a += ' '),
                        (a += t[e][3]),
                        (a += ' '),
                        (a += t[e][4]),
                        null != t[e][5] &&
                          ((a += ' '),
                          (a += t[e][5]),
                          (a += ' '),
                          (a += t[e][6]),
                          null != t[e][7] && ((a += ' '), (a += t[e][7]))))))
              return a + ' '
            })(this.value)
          },
          move: function (t, e) {
            var i = this.bbox()
            return i.x, i.y, this
          },
          at: function (t) {
            if (!this.destination) return this
            for (
              var e = this.value,
                i = this.destination.value,
                a = [],
                s = new h.PathArray(),
                r = 0,
                n = e.length;
              r < n;
              r++
            ) {
              a[r] = [e[r][0]]
              for (var o = 1, l = e[r].length; o < l; o++)
                a[r][o] = e[r][o] + (i[r][o] - e[r][o]) * t
              'A' === a[r][0] &&
                ((a[r][4] = +(0 != a[r][4])), (a[r][5] = +(0 != a[r][5])))
            }
            return (s.value = a), s
          },
          parse: function (t) {
            if (t instanceof h.PathArray) return t.valueOf()
            var e,
              i = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }
            t =
              'string' == typeof t
                ? t
                    .replace(h.regex.numbersWithDots, c)
                    .replace(h.regex.pathLetters, ' $& ')
                    .replace(h.regex.hyphen, '$1 -')
                    .trim()
                    .split(h.regex.delimiter)
                : t.reduce(function (t, e) {
                    return [].concat.call(t, e)
                  }, [])
            for (
              var a = [],
                s = new h.Point(),
                r = new h.Point(),
                n = 0,
                o = t.length;
              h.regex.isPathLetter.test(t[n])
                ? ((e = t[n]), ++n)
                : 'M' == e
                ? (e = 'L')
                : 'm' == e && (e = 'l'),
                a.push(
                  l[e].call(
                    null,
                    t.slice(n, (n += i[e.toUpperCase()])).map(parseFloat),
                    s,
                    r
                  )
                ),
                n < o;

            );
            return a
          },
          bbox: function () {
            return (
              h.parser.draw || h.prepare(),
              h.parser.path.setAttribute('d', this.toString()),
              h.parser.path.getBBox()
            )
          }
        }),
        (h.Number = h.invent({
          create: function (t, e) {
            ;(this.value = 0),
              (this.unit = e || ''),
              'number' == typeof t
                ? (this.value = isNaN(t)
                    ? 0
                    : isFinite(t)
                    ? t
                    : t < 0
                    ? -34e37
                    : 34e37)
                : 'string' == typeof t
                ? (e = t.match(h.regex.numberAndUnit)) &&
                  ((this.value = parseFloat(e[1])),
                  '%' == e[5]
                    ? (this.value /= 100)
                    : 's' == e[5] && (this.value *= 1e3),
                  (this.unit = e[5]))
                : t instanceof h.Number &&
                  ((this.value = t.valueOf()), (this.unit = t.unit))
          },
          extend: {
            toString: function () {
              return (
                ('%' == this.unit
                  ? ~~(1e8 * this.value) / 1e6
                  : 's' == this.unit
                  ? this.value / 1e3
                  : this.value) + this.unit
              )
            },
            toJSON: function () {
              return this.toString()
            },
            valueOf: function () {
              return this.value
            },
            plus: function (t) {
              return (
                (t = new h.Number(t)),
                new h.Number(this + t, this.unit || t.unit)
              )
            },
            minus: function (t) {
              return (
                (t = new h.Number(t)),
                new h.Number(this - t, this.unit || t.unit)
              )
            },
            times: function (t) {
              return (
                (t = new h.Number(t)),
                new h.Number(this * t, this.unit || t.unit)
              )
            },
            divide: function (t) {
              return (
                (t = new h.Number(t)),
                new h.Number(this / t, this.unit || t.unit)
              )
            },
            to: function (t) {
              var e = new h.Number(this)
              return 'string' == typeof t && (e.unit = t), e
            },
            morph: function (t) {
              return (
                (this.destination = new h.Number(t)),
                t.relative && (this.destination.value += this.value),
                this
              )
            },
            at: function (t) {
              return this.destination
                ? new h.Number(this.destination).minus(this).times(t).plus(this)
                : this
            }
          }
        })),
        (h.Element = h.invent({
          create: function (t) {
            ;(this._stroke = h.defaults.attrs.stroke),
              (this._event = null),
              (this.dom = {}),
              (this.node = t) &&
                ((this.type = t.nodeName),
                ((this.node.instance = this)._stroke =
                  t.getAttribute('stroke') || this._stroke))
          },
          extend: {
            x: function (t) {
              return this.attr('x', t)
            },
            y: function (t) {
              return this.attr('y', t)
            },
            cx: function (t) {
              return null == t
                ? this.x() + this.width() / 2
                : this.x(t - this.width() / 2)
            },
            cy: function (t) {
              return null == t
                ? this.y() + this.height() / 2
                : this.y(t - this.height() / 2)
            },
            move: function (t, e) {
              return this.x(t).y(e)
            },
            center: function (t, e) {
              return this.cx(t).cy(e)
            },
            width: function (t) {
              return this.attr('width', t)
            },
            height: function (t) {
              return this.attr('height', t)
            },
            size: function (t, e) {
              var i = g(this, t, e)
              return this.width(new h.Number(i.width)).height(
                new h.Number(i.height)
              )
            },
            clone: function (t) {
              this.writeDataToDom()
              var e = f(this.node.cloneNode(!0))
              return t ? t.add(e) : this.after(e), e
            },
            remove: function () {
              return this.parent() && this.parent().removeElement(this), this
            },
            replace: function (t) {
              return this.after(t).remove(), t
            },
            addTo: function (t) {
              return t.put(this)
            },
            putIn: function (t) {
              return t.add(this)
            },
            id: function (t) {
              return this.attr('id', t)
            },
            show: function () {
              return this.style('display', '')
            },
            hide: function () {
              return this.style('display', 'none')
            },
            visible: function () {
              return 'none' != this.style('display')
            },
            toString: function () {
              return this.attr('id')
            },
            classes: function () {
              var t = this.attr('class')
              return null == t ? [] : t.trim().split(h.regex.delimiter)
            },
            hasClass: function (t) {
              return -1 != this.classes().indexOf(t)
            },
            addClass: function (t) {
              var e
              return (
                this.hasClass(t) ||
                  ((e = this.classes()).push(t),
                  this.attr('class', e.join(' '))),
                this
              )
            },
            removeClass: function (e) {
              return (
                this.hasClass(e) &&
                  this.attr(
                    'class',
                    this.classes()
                      .filter(function (t) {
                        return t != e
                      })
                      .join(' ')
                  ),
                this
              )
            },
            toggleClass: function (t) {
              return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
            },
            reference: function (t) {
              return h.get(this.attr(t))
            },
            parent: function (t) {
              var e = this
              if (!e.node.parentNode) return null
              if (((e = h.adopt(e.node.parentNode)), !t)) return e
              for (; e && e.node instanceof s.SVGElement; ) {
                if ('string' == typeof t ? e.matches(t) : e instanceof t)
                  return e
                if (
                  !e.node.parentNode ||
                  '#document' == e.node.parentNode.nodeName
                )
                  return null
                e = h.adopt(e.node.parentNode)
              }
            },
            doc: function () {
              return this instanceof h.Doc ? this : this.parent(h.Doc)
            },
            parents: function (t) {
              var e = [],
                i = this
              do {
                if (!(i = i.parent(t)) || !i.node) break
                e.push(i)
              } while (i.parent)
              return e
            },
            matches: function (t) {
              return (
                (e = this.node).matches ||
                e.matchesSelector ||
                e.msMatchesSelector ||
                e.mozMatchesSelector ||
                e.webkitMatchesSelector ||
                e.oMatchesSelector
              ).call(e, t)
              var e
            },
            native: function () {
              return this.node
            },
            svg: function (t) {
              var e = r.createElement('svg')
              if (!(t && this instanceof h.Parent))
                return (
                  e.appendChild((t = r.createElement('svg'))),
                  this.writeDataToDom(),
                  t.appendChild(this.node.cloneNode(!0)),
                  e.innerHTML.replace(/^<svg>/, '').replace(/<\/svg>$/, '')
                )
              e.innerHTML =
                '<svg>' +
                t
                  .replace(/\n/, '')
                  .replace(/<([\w:-]+)([^<]+?)\/>/g, '<$1$2></$1>') +
                '</svg>'
              for (var i = 0, a = e.firstChild.childNodes.length; i < a; i++)
                this.node.appendChild(e.firstChild.firstChild)
              return this
            },
            writeDataToDom: function () {
              return (
                (this.each || this.lines) &&
                  (this.each ? this : this.lines()).each(function () {
                    this.writeDataToDom()
                  }),
                this.node.removeAttribute('svgjs:data'),
                Object.keys(this.dom).length &&
                  this.node.setAttribute(
                    'svgjs:data',
                    JSON.stringify(this.dom)
                  ),
                this
              )
            },
            setData: function (t) {
              return (this.dom = t), this
            },
            is: function (t) {
              return this instanceof t
            }
          }
        })),
        (h.easing = {
          '-': function (t) {
            return t
          },
          '<>': function (t) {
            return -Math.cos(t * Math.PI) / 2 + 0.5
          },
          '>': function (t) {
            return Math.sin((t * Math.PI) / 2)
          },
          '<': function (t) {
            return 1 - Math.cos((t * Math.PI) / 2)
          }
        }),
        (h.morph = function (i) {
          return function (t, e) {
            return new h.MorphObj(t, e).at(i)
          }
        }),
        (h.Situation = h.invent({
          create: function (t) {
            ;(this.init = !1),
              (this.reversed = !1),
              (this.reversing = !1),
              (this.duration = new h.Number(t.duration).valueOf()),
              (this.delay = new h.Number(t.delay).valueOf()),
              (this.start = +new Date() + this.delay),
              (this.finish = this.start + this.duration),
              (this.ease = t.ease),
              (this.loop = 0),
              (this.loops = !1),
              (this.animations = {}),
              (this.attrs = {}),
              (this.styles = {}),
              (this.transforms = []),
              (this.once = {})
          }
        })),
        (h.FX = h.invent({
          create: function (t) {
            ;(this._target = t),
              (this.situations = []),
              (this.active = !1),
              (this.situation = null),
              (this.paused = !1),
              (this.lastPos = 0),
              (this.pos = 0),
              (this.absPos = 0),
              (this._speed = 1)
          },
          extend: {
            animate: function (t, e, i) {
              'object' === v(t) &&
                ((e = t.ease), (i = t.delay), (t = t.duration))
              var a = new h.Situation({
                duration: t || 1e3,
                delay: i || 0,
                ease: h.easing[e || '-'] || e
              })
              return this.queue(a), this
            },
            target: function (t) {
              return t && t instanceof h.Element
                ? ((this._target = t), this)
                : this._target
            },
            timeToAbsPos: function (t) {
              return (
                (t - this.situation.start) /
                (this.situation.duration / this._speed)
              )
            },
            absPosToTime: function (t) {
              return (
                (this.situation.duration / this._speed) * t +
                this.situation.start
              )
            },
            startAnimFrame: function () {
              this.stopAnimFrame(),
                (this.animationFrame = s.requestAnimationFrame(
                  function () {
                    this.step()
                  }.bind(this)
                ))
            },
            stopAnimFrame: function () {
              s.cancelAnimationFrame(this.animationFrame)
            },
            start: function () {
              return (
                !this.active &&
                  this.situation &&
                  ((this.active = !0), this.startCurrent()),
                this
              )
            },
            startCurrent: function () {
              return (
                (this.situation.start =
                  +new Date() + this.situation.delay / this._speed),
                (this.situation.finish =
                  this.situation.start + this.situation.duration / this._speed),
                this.initAnimations().step()
              )
            },
            queue: function (t) {
              return (
                ('function' == typeof t || t instanceof h.Situation) &&
                  this.situations.push(t),
                this.situation || (this.situation = this.situations.shift()),
                this
              )
            },
            dequeue: function () {
              return (
                this.stop(),
                (this.situation = this.situations.shift()),
                this.situation &&
                  (this.situation instanceof h.Situation
                    ? this.start()
                    : this.situation.call(this)),
                this
              )
            },
            initAnimations: function () {
              var t,
                e = this.situation
              if (e.init) return this
              for (var i in e.animations) {
                ;(t = this.target()[i]()),
                  Array.isArray(t) || (t = [t]),
                  Array.isArray(e.animations[i]) ||
                    (e.animations[i] = [e.animations[i]])
                for (var a = t.length; a--; )
                  e.animations[i][a] instanceof h.Number &&
                    (t[a] = new h.Number(t[a])),
                    (e.animations[i][a] = t[a].morph(e.animations[i][a]))
              }
              for (var i in e.attrs)
                e.attrs[i] = new h.MorphObj(this.target().attr(i), e.attrs[i])
              for (var i in e.styles)
                e.styles[i] = new h.MorphObj(
                  this.target().style(i),
                  e.styles[i]
                )
              return (
                (e.initialTransformation = this.target().matrixify()),
                (e.init = !0),
                this
              )
            },
            clearQueue: function () {
              return (this.situations = []), this
            },
            clearCurrent: function () {
              return (this.situation = null), this
            },
            stop: function (t, e) {
              var i = this.active
              return (
                (this.active = !1),
                e && this.clearQueue(),
                t && this.situation && (i || this.startCurrent(), this.atEnd()),
                this.stopAnimFrame(),
                this.clearCurrent()
              )
            },
            after: function (i) {
              var a = this.last()
              return (
                this.target().on('finished.fx', function t (e) {
                  e.detail.situation == a &&
                    (i.call(this, a), this.off('finished.fx', t))
                }),
                this._callStart()
              )
            },
            during: function (e) {
              function t (t) {
                t.detail.situation == i &&
                  e.call(
                    this,
                    t.detail.pos,
                    h.morph(t.detail.pos),
                    t.detail.eased,
                    i
                  )
              }
              var i = this.last()
              return (
                this.target().off('during.fx', t).on('during.fx', t),
                this.after(function () {
                  this.off('during.fx', t)
                }),
                this._callStart()
              )
            },
            afterAll: function (e) {
              function i (t) {
                e.call(this), this.off('allfinished.fx', i)
              }
              return (
                this.target().off('allfinished.fx', i).on('allfinished.fx', i),
                this._callStart()
              )
            },
            last: function () {
              return this.situations.length
                ? this.situations[this.situations.length - 1]
                : this.situation
            },
            add: function (t, e, i) {
              return (this.last()[i || 'animations'][t] = e), this._callStart()
            },
            step: function (t) {
              var e, i, a
              t || (this.absPos = this.timeToAbsPos(+new Date())),
                !1 !== this.situation.loops
                  ? ((e = Math.max(this.absPos, 0)),
                    (i = Math.floor(e)),
                    !0 === this.situation.loops || i < this.situation.loops
                      ? ((this.pos = e - i),
                        (a = this.situation.loop),
                        (this.situation.loop = i))
                      : ((this.absPos = this.situation.loops),
                        (this.pos = 1),
                        (a = this.situation.loop - 1),
                        (this.situation.loop = this.situation.loops)),
                    this.situation.reversing &&
                      (this.situation.reversed =
                        this.situation.reversed !=
                        Boolean((this.situation.loop - a) % 2)))
                  : ((this.absPos = Math.min(this.absPos, 1)),
                    (this.pos = this.absPos)),
                this.pos < 0 && (this.pos = 0),
                this.situation.reversed && (this.pos = 1 - this.pos)
              var s = this.situation.ease(this.pos)
              for (var r in this.situation.once)
                r > this.lastPos &&
                  r <= s &&
                  (this.situation.once[r].call(this.target(), this.pos, s),
                  delete this.situation.once[r])
              return (
                this.active &&
                  this.target().fire('during', {
                    pos: this.pos,
                    eased: s,
                    fx: this,
                    situation: this.situation
                  }),
                this.situation &&
                  (this.eachAt(),
                  (1 == this.pos && !this.situation.reversed) ||
                  (this.situation.reversed && 0 == this.pos)
                    ? (this.stopAnimFrame(),
                      this.target().fire('finished', {
                        fx: this,
                        situation: this.situation
                      }),
                      this.situations.length ||
                        (this.target().fire('allfinished'),
                        this.situations.length ||
                          (this.target().off('.fx'), (this.active = !1))),
                      this.active ? this.dequeue() : this.clearCurrent())
                    : !this.paused && this.active && this.startAnimFrame(),
                  (this.lastPos = s)),
                this
              )
            },
            eachAt: function () {
              var e = this,
                t = this.target(),
                i = this.situation
              for (var a in i.animations)
                (n = [].concat(i.animations[a]).map(function (t) {
                  return 'string' != typeof t && t.at
                    ? t.at(i.ease(e.pos), e.pos)
                    : t
                })),
                  t[a].apply(t, n)
              for (var a in i.attrs)
                (n = [a].concat(i.attrs[a]).map(function (t) {
                  return 'string' != typeof t && t.at
                    ? t.at(i.ease(e.pos), e.pos)
                    : t
                })),
                  t.attr.apply(t, n)
              for (var a in i.styles)
                (n = [a].concat(i.styles[a]).map(function (t) {
                  return 'string' != typeof t && t.at
                    ? t.at(i.ease(e.pos), e.pos)
                    : t
                })),
                  t.style.apply(t, n)
              if (i.transforms.length) {
                ;(n = i.initialTransformation), (a = 0)
                for (var s = i.transforms.length; a < s; a++)
                  var r = i.transforms[a],
                    n =
                      r instanceof h.Matrix
                        ? r.relative
                          ? n.multiply(
                              new h.Matrix().morph(r).at(i.ease(this.pos))
                            )
                          : n.morph(r).at(i.ease(this.pos))
                        : (r.relative || r.undo(n.extract()),
                          n.multiply(r.at(i.ease(this.pos))))
                t.matrix(n)
              }
              return this
            },
            once: function (t, e, i) {
              var a = this.last()
              return i || (t = a.ease(t)), (a.once[t] = e), this
            },
            _callStart: function () {
              return (
                setTimeout(
                  function () {
                    this.start()
                  }.bind(this),
                  0
                ),
                this
              )
            }
          },
          parent: h.Element,
          construct: {
            animate: function (t, e, i) {
              return (this.fx || (this.fx = new h.FX(this))).animate(t, e, i)
            },
            delay: function (t) {
              return (this.fx || (this.fx = new h.FX(this))).delay(t)
            },
            stop: function (t, e) {
              return this.fx && this.fx.stop(t, e), this
            },
            finish: function () {
              return this.fx && this.fx.finish(), this
            }
          }
        })),
        (h.MorphObj = h.invent({
          create: function (t, e) {
            return h.Color.isColor(e)
              ? new h.Color(t).morph(e)
              : h.regex.delimiter.test(t)
              ? h.regex.pathLetters.test(t)
                ? new h.PathArray(t).morph(e)
                : new h.Array(t).morph(e)
              : h.regex.numberAndUnit.test(e)
              ? new h.Number(t).morph(e)
              : ((this.value = t), void (this.destination = e))
          },
          extend: {
            at: function (t, e) {
              return e < 1 ? this.value : this.destination
            },
            valueOf: function () {
              return this.value
            }
          }
        })),
        h.extend(h.FX, {
          attr: function (t, e, i) {
            if ('object' === v(t)) for (var a in t) this.attr(a, t[a])
            else this.add(t, e, 'attrs')
            return this
          },
          plot: function (t, e, i, a) {
            return 4 == arguments.length
              ? this.plot([t, e, i, a])
              : this.add('plot', new (this.target().morphArray)(t))
          }
        }),
        (h.Box = h.invent({
          create: function (t, e, i, a) {
            if (!('object' !== v(t) || t instanceof h.Element))
              return h.Box.call(
                this,
                null != t.left ? t.left : t.x,
                null != t.top ? t.top : t.y,
                t.width,
                t.height
              )
            var s
            4 == arguments.length &&
              ((this.x = t), (this.y = e), (this.width = i), (this.height = a)),
              null == (s = this).x &&
                ((s.x = 0), (s.y = 0), (s.width = 0), (s.height = 0)),
              (s.w = s.width),
              (s.h = s.height),
              (s.x2 = s.x + s.width),
              (s.y2 = s.y + s.height),
              (s.cx = s.x + s.width / 2),
              (s.cy = s.y + s.height / 2)
          }
        })),
        (h.BBox = h.invent({
          create: function (e) {
            if (
              (h.Box.apply(this, [].slice.call(arguments)),
              e instanceof h.Element)
            ) {
              var i, a
              try {
                if (!r.documentElement.contains) {
                  for (var t = e.node; t.parentNode; ) t = t.parentNode
                  if (t != r) throw new Error('Element not in the dom')
                }
                i = e.node.getBBox()
              } catch (t) {
                e instanceof h.Shape
                  ? (h.parser.draw || h.prepare(),
                    (i = (a = e
                      .clone(h.parser.draw.instance)
                      .show()).node.getBBox()),
                    a.remove())
                  : (i = {
                      x: e.node.clientLeft,
                      y: e.node.clientTop,
                      width: e.node.clientWidth,
                      height: e.node.clientHeight
                    })
              }
              h.Box.call(this, i)
            }
          },
          inherit: h.Box,
          parent: h.Element,
          construct: {
            bbox: function () {
              return new h.BBox(this)
            }
          }
        })),
        (h.BBox.prototype.constructor = h.BBox),
        (h.Matrix = h.invent({
          create: function (t) {
            var e = p([1, 0, 0, 1, 0, 0])
            t =
              t instanceof h.Element
                ? t.matrixify()
                : 'string' == typeof t
                ? p(t.split(h.regex.delimiter).map(parseFloat))
                : 6 == arguments.length
                ? p([].slice.call(arguments))
                : Array.isArray(t)
                ? p(t)
                : 'object' === v(t)
                ? t
                : e
            for (var i = m.length - 1; 0 <= i; --i)
              this[m[i]] = null != t[m[i]] ? t[m[i]] : e[m[i]]
          },
          extend: {
            extract: function () {
              var t = u(this, 0, 1),
                e = (u(this, 1, 0), (180 / Math.PI) * Math.atan2(t.y, t.x) - 90)
              return {
                x: this.e,
                y: this.f,
                transformedX:
                  (this.e * Math.cos((e * Math.PI) / 180) +
                    this.f * Math.sin((e * Math.PI) / 180)) /
                  Math.sqrt(this.a * this.a + this.b * this.b),
                transformedY:
                  (this.f * Math.cos((e * Math.PI) / 180) +
                    this.e * Math.sin((-e * Math.PI) / 180)) /
                  Math.sqrt(this.c * this.c + this.d * this.d),
                rotation: e,
                a: this.a,
                b: this.b,
                c: this.c,
                d: this.d,
                e: this.e,
                f: this.f,
                matrix: new h.Matrix(this)
              }
            },
            clone: function () {
              return new h.Matrix(this)
            },
            morph: function (t) {
              return (this.destination = new h.Matrix(t)), this
            },
            multiply: function (t) {
              return new h.Matrix(
                this.native().multiply(
                  ((e = t) instanceof h.Matrix || (e = new h.Matrix(e)),
                  e.native())
                )
              )
              var e
            },
            inverse: function () {
              return new h.Matrix(this.native().inverse())
            },
            translate: function (t, e) {
              return new h.Matrix(this.native().translate(t || 0, e || 0))
            },
            native: function () {
              for (
                var t = h.parser.native.createSVGMatrix(), e = m.length - 1;
                0 <= e;
                e--
              )
                t[m[e]] = this[m[e]]
              return t
            },
            toString: function () {
              return (
                'matrix(' +
                x(this.a) +
                ',' +
                x(this.b) +
                ',' +
                x(this.c) +
                ',' +
                x(this.d) +
                ',' +
                x(this.e) +
                ',' +
                x(this.f) +
                ')'
              )
            }
          },
          parent: h.Element,
          construct: {
            ctm: function () {
              return new h.Matrix(this.node.getCTM())
            },
            screenCTM: function () {
              if (this instanceof h.Nested) {
                var t = this.rect(1, 1),
                  e = t.node.getScreenCTM()
                return t.remove(), new h.Matrix(e)
              }
              return new h.Matrix(this.node.getScreenCTM())
            }
          }
        })),
        (h.Point = h.invent({
          create: function (t, e) {
            var i = Array.isArray(t)
              ? { x: t[0], y: t[1] }
              : 'object' === v(t)
              ? { x: t.x, y: t.y }
              : null != t
              ? { x: t, y: null != e ? e : t }
              : { x: 0, y: 0 }
            ;(this.x = i.x), (this.y = i.y)
          },
          extend: {
            clone: function () {
              return new h.Point(this)
            },
            morph: function (t, e) {
              return (this.destination = new h.Point(t, e)), this
            }
          }
        })),
        h.extend(h.Element, {
          point: function (t, e) {
            return new h.Point(t, e).transform(this.screenCTM().inverse())
          }
        }),
        h.extend(h.Element, {
          attr: function (t, e, i) {
            if (null == t) {
              for (
                t = {}, i = (e = this.node.attributes).length - 1;
                0 <= i;
                i--
              )
                t[e[i].nodeName] = h.regex.isNumber.test(e[i].nodeValue)
                  ? parseFloat(e[i].nodeValue)
                  : e[i].nodeValue
              return t
            }
            if ('object' === v(t)) for (var a in t) this.attr(a, t[a])
            else if (null === e) this.node.removeAttribute(t)
            else {
              if (null == e)
                return null == (e = this.node.getAttribute(t))
                  ? h.defaults.attrs[t]
                  : h.regex.isNumber.test(e)
                  ? parseFloat(e)
                  : e
              'stroke-width' == t
                ? this.attr('stroke', 0 < parseFloat(e) ? this._stroke : null)
                : 'stroke' == t && (this._stroke = e),
                ('fill' != t && 'stroke' != t) ||
                  (h.regex.isImage.test(e) &&
                    (e = this.doc().defs().image(e, 0, 0)),
                  e instanceof h.Image &&
                    (e = this.doc()
                      .defs()
                      .pattern(0, 0, function () {
                        this.add(e)
                      }))),
                'number' == typeof e
                  ? (e = new h.Number(e))
                  : h.Color.isColor(e)
                  ? (e = new h.Color(e))
                  : Array.isArray(e) && (e = new h.Array(e)),
                'leading' == t
                  ? this.leading && this.leading(e)
                  : 'string' == typeof i
                  ? this.node.setAttributeNS(i, t, e.toString())
                  : this.node.setAttribute(t, e.toString()),
                !this.rebuild ||
                  ('font-size' != t && 'x' != t) ||
                  this.rebuild(t, e)
            }
            return this
          }
        }),
        h.extend(h.Element, {
          transform: function (t, e) {
            var i
            return 'object' !== v(t)
              ? ((i = new h.Matrix(this).extract()),
                'string' == typeof t ? i[t] : i)
              : ((i = new h.Matrix(this)),
                (e = !!e || !!t.relative),
                null != t.a &&
                  (i = e ? i.multiply(new h.Matrix(t)) : new h.Matrix(t)),
                this.attr('transform', i))
          }
        }),
        h.extend(h.Element, {
          untransform: function () {
            return this.attr('transform', null)
          },
          matrixify: function () {
            return (this.attr('transform') || '')
              .split(h.regex.transforms)
              .slice(0, -1)
              .map(function (t) {
                var e = t.trim().split('(')
                return [
                  e[0],
                  e[1].split(h.regex.delimiter).map(function (t) {
                    return parseFloat(t)
                  })
                ]
              })
              .reduce(function (t, e) {
                return 'matrix' == e[0]
                  ? t.multiply(p(e[1]))
                  : t[e[0]].apply(t, e[1])
              }, new h.Matrix())
          },
          toParent: function (t) {
            if (this == t) return this
            var e = this.screenCTM(),
              i = t.screenCTM().inverse()
            return this.addTo(t).untransform().transform(i.multiply(e)), this
          },
          toDoc: function () {
            return this.toParent(this.doc())
          }
        }),
        (h.Transformation = h.invent({
          create: function (t, e) {
            if (1 < arguments.length && 'boolean' != typeof e)
              return this.constructor.call(this, [].slice.call(arguments))
            if (Array.isArray(t))
              for (var i = 0, a = this.arguments.length; i < a; ++i)
                this[this.arguments[i]] = t[i]
            else if ('object' === v(t))
              for (i = 0, a = this.arguments.length; i < a; ++i)
                this[this.arguments[i]] = t[this.arguments[i]]
            !(this.inversed = !1) === e && (this.inversed = !0)
          }
        })),
        (h.Translate = h.invent({
          parent: h.Matrix,
          inherit: h.Transformation,
          create: function (t, e) {
            this.constructor.apply(this, [].slice.call(arguments))
          },
          extend: {
            arguments: ['transformedX', 'transformedY'],
            method: 'translate'
          }
        })),
        h.extend(h.Element, {
          style: function (t, e) {
            if (0 == arguments.length) return this.node.style.cssText || ''
            if (arguments.length < 2)
              if ('object' === v(t)) for (var i in t) this.style(i, t[i])
              else {
                if (!h.regex.isCss.test(t)) return this.node.style[n(t)]
                for (
                  t = t
                    .split(/\s*;\s*/)
                    .filter(function (t) {
                      return !!t
                    })
                    .map(function (t) {
                      return t.split(/\s*:\s*/)
                    });
                  (e = t.pop());

                )
                  this.style(e[0], e[1])
              }
            else
              this.node.style[n(t)] =
                null === e || h.regex.isBlank.test(e) ? '' : e
            return this
          }
        }),
        (h.Parent = h.invent({
          create: function (t) {
            this.constructor.call(this, t)
          },
          inherit: h.Element,
          extend: {
            children: function () {
              return h.utils.map(
                h.utils.filterSVGElements(this.node.childNodes),
                function (t) {
                  return h.adopt(t)
                }
              )
            },
            add: function (t, e) {
              return (
                null == e
                  ? this.node.appendChild(t.node)
                  : t.node != this.node.childNodes[e] &&
                    this.node.insertBefore(t.node, this.node.childNodes[e]),
                this
              )
            },
            put: function (t, e) {
              return this.add(t, e), t
            },
            has: function (t) {
              return 0 <= this.index(t)
            },
            index: function (t) {
              return [].slice.call(this.node.childNodes).indexOf(t.node)
            },
            get: function (t) {
              return h.adopt(this.node.childNodes[t])
            },
            first: function () {
              return this.get(0)
            },
            last: function () {
              return this.get(this.node.childNodes.length - 1)
            },
            each: function (t, e) {
              for (var i = this.children(), a = 0, s = i.length; a < s; a++)
                i[a] instanceof h.Element && t.apply(i[a], [a, i]),
                  e && i[a] instanceof h.Container && i[a].each(t, e)
              return this
            },
            removeElement: function (t) {
              return this.node.removeChild(t.node), this
            },
            clear: function () {
              for (; this.node.hasChildNodes(); )
                this.node.removeChild(this.node.lastChild)
              return delete this._defs, this
            },
            defs: function () {
              return this.doc().defs()
            }
          }
        })),
        h.extend(h.Parent, {
          ungroup: function (t, e) {
            return (
              0 === e ||
                this instanceof h.Defs ||
                this.node == h.parser.draw ||
                ((t =
                  t || (this instanceof h.Doc ? this : this.parent(h.Parent))),
                (e = e || 1 / 0),
                this.each(function () {
                  return this instanceof h.Defs
                    ? this
                    : this instanceof h.Parent
                    ? this.ungroup(t, e - 1)
                    : this.toParent(t)
                }),
                this.node.firstChild || this.remove()),
              this
            )
          },
          flatten: function (t, e) {
            return this.ungroup(t, e)
          }
        }),
        (h.Container = h.invent({
          create: function (t) {
            this.constructor.call(this, t)
          },
          inherit: h.Parent
        })),
        (h.ViewBox = h.invent({ parent: h.Container, construct: {} })),
        [
          'click',
          'dblclick',
          'mousedown',
          'mouseup',
          'mouseover',
          'mouseout',
          'mousemove',
          'touchstart',
          'touchmove',
          'touchleave',
          'touchend',
          'touchcancel'
        ].forEach(function (e) {
          h.Element.prototype[e] = function (t) {
            return h.on(this.node, e, t), this
          }
        }),
        (h.listeners = []),
        (h.handlerMap = []),
        (h.listenerId = 0),
        (h.on = function (t, e, i, a, s) {
          var r = i.bind(a || t.instance || t),
            n = (h.handlerMap.indexOf(t) + 1 || h.handlerMap.push(t)) - 1,
            o = e.split('.')[0],
            l = e.split('.')[1] || '*'
          ;(h.listeners[n] = h.listeners[n] || {}),
            (h.listeners[n][o] = h.listeners[n][o] || {}),
            (h.listeners[n][o][l] = h.listeners[n][o][l] || {}),
            i._svgjsListenerId || (i._svgjsListenerId = ++h.listenerId),
            (h.listeners[n][o][l][i._svgjsListenerId] = r),
            t.addEventListener(o, r, s || !1)
        }),
        (h.off = function (t, e, i) {
          var a = h.handlerMap.indexOf(t),
            s = e && e.split('.')[0],
            r = e && e.split('.')[1],
            n = ''
          if (-1 != a)
            if (i) {
              if (('function' == typeof i && (i = i._svgjsListenerId), !i))
                return
              h.listeners[a][s] &&
                h.listeners[a][s][r || '*'] &&
                (t.removeEventListener(s, h.listeners[a][s][r || '*'][i], !1),
                delete h.listeners[a][s][r || '*'][i])
            } else if (r && s) {
              if (h.listeners[a][s] && h.listeners[a][s][r]) {
                for (var o in h.listeners[a][s][r])
                  h.off(t, [s, r].join('.'), o)
                delete h.listeners[a][s][r]
              }
            } else if (r)
              for (var l in h.listeners[a])
                for (var n in h.listeners[a][l])
                  r === n && h.off(t, [l, r].join('.'))
            else if (s) {
              if (h.listeners[a][s]) {
                for (var n in h.listeners[a][s]) h.off(t, [s, n].join('.'))
                delete h.listeners[a][s]
              }
            } else {
              for (var l in h.listeners[a]) h.off(t, l)
              delete h.listeners[a], delete h.handlerMap[a]
            }
        }),
        h.extend(h.Element, {
          on: function (t, e, i, a) {
            return h.on(this.node, t, e, i, a), this
          },
          off: function (t, e) {
            return h.off(this.node, t, e), this
          },
          fire: function (t, e) {
            return (
              t instanceof s.Event
                ? this.node.dispatchEvent(t)
                : this.node.dispatchEvent(
                    (t = new h.CustomEvent(t, { detail: e, cancelable: !0 }))
                  ),
              (this._event = t),
              this
            )
          },
          event: function () {
            return this._event
          }
        }),
        (h.Defs = h.invent({ create: 'defs', inherit: h.Container })),
        (h.G = h.invent({
          create: 'g',
          inherit: h.Container,
          extend: {
            x: function (t) {
              return null == t
                ? this.transform('x')
                : this.transform({ x: t - this.x() }, !0)
            }
          },
          construct: {
            group: function () {
              return this.put(new h.G())
            }
          }
        })),
        (h.Doc = h.invent({
          create: function (t) {
            t &&
              ('svg' ==
              (t = 'string' == typeof t ? r.getElementById(t) : t).nodeName
                ? this.constructor.call(this, t)
                : (this.constructor.call(this, h.create('svg')),
                  t.appendChild(this.node),
                  this.size('100%', '100%')),
              this.namespace().defs())
          },
          inherit: h.Container,
          extend: {
            namespace: function () {
              return this.attr({ xmlns: h.ns, version: '1.1' })
                .attr('xmlns:xlink', h.xlink, h.xmlns)
                .attr('xmlns:svgjs', h.svgjs, h.xmlns)
            },
            defs: function () {
              var t
              return (
                this._defs ||
                  ((t = this.node.getElementsByTagName('defs')[0])
                    ? (this._defs = h.adopt(t))
                    : (this._defs = new h.Defs()),
                  this.node.appendChild(this._defs.node)),
                this._defs
              )
            },
            parent: function () {
              return this.node.parentNode &&
                '#document' != this.node.parentNode.nodeName
                ? this.node.parentNode
                : null
            },
            remove: function () {
              return this.parent() && this.parent().removeChild(this.node), this
            },
            clear: function () {
              for (; this.node.hasChildNodes(); )
                this.node.removeChild(this.node.lastChild)
              return (
                delete this._defs,
                h.parser.draw &&
                  !h.parser.draw.parentNode &&
                  this.node.appendChild(h.parser.draw),
                this
              )
            },
            clone: function (t) {
              this.writeDataToDom()
              var e = this.node,
                i = f(e.cloneNode(!0))
              return (
                t
                  ? (t.node || t).appendChild(i.node)
                  : e.parentNode.insertBefore(i.node, e.nextSibling),
                i
              )
            }
          }
        })),
        h.extend(h.Element, {}),
        (h.Gradient = h.invent({
          create: function (t) {
            this.constructor.call(this, h.create(t + 'Gradient')),
              (this.type = t)
          },
          inherit: h.Container,
          extend: {
            at: function (t, e, i) {
              return this.put(new h.Stop()).update(t, e, i)
            },
            update: function (t) {
              return (
                this.clear(), 'function' == typeof t && t.call(this, this), this
              )
            },
            fill: function () {
              return 'url(#' + this.id() + ')'
            },
            toString: function () {
              return this.fill()
            },
            attr: function (t, e, i) {
              return (
                'transform' == t && (t = 'gradientTransform'),
                h.Container.prototype.attr.call(this, t, e, i)
              )
            }
          },
          construct: {
            gradient: function (t, e) {
              return this.defs().gradient(t, e)
            }
          }
        })),
        h.extend(h.Gradient, h.FX, {
          from: function (t, e) {
            return 'radial' == (this._target || this).type
              ? this.attr({ fx: new h.Number(t), fy: new h.Number(e) })
              : this.attr({ x1: new h.Number(t), y1: new h.Number(e) })
          },
          to: function (t, e) {
            return 'radial' == (this._target || this).type
              ? this.attr({ cx: new h.Number(t), cy: new h.Number(e) })
              : this.attr({ x2: new h.Number(t), y2: new h.Number(e) })
          }
        }),
        h.extend(h.Defs, {
          gradient: function (t, e) {
            return this.put(new h.Gradient(t)).update(e)
          }
        }),
        (h.Stop = h.invent({
          create: 'stop',
          inherit: h.Element,
          extend: {
            update: function (t) {
              return (
                ('number' == typeof t || t instanceof h.Number) &&
                  (t = {
                    offset: arguments[0],
                    color: arguments[1],
                    opacity: arguments[2]
                  }),
                null != t.opacity && this.attr('stop-opacity', t.opacity),
                null != t.color && this.attr('stop-color', t.color),
                null != t.offset && this.attr('offset', new h.Number(t.offset)),
                this
              )
            }
          }
        })),
        (h.Pattern = h.invent({
          create: 'pattern',
          inherit: h.Container,
          extend: {
            fill: function () {
              return 'url(#' + this.id() + ')'
            },
            update: function (t) {
              return (
                this.clear(), 'function' == typeof t && t.call(this, this), this
              )
            },
            toString: function () {
              return this.fill()
            },
            attr: function (t, e, i) {
              return (
                'transform' == t && (t = 'patternTransform'),
                h.Container.prototype.attr.call(this, t, e, i)
              )
            }
          },
          construct: {
            pattern: function (t, e, i) {
              return this.defs().pattern(t, e, i)
            }
          }
        })),
        h.extend(h.Defs, {
          pattern: function (t, e, i) {
            return this.put(new h.Pattern())
              .update(i)
              .attr({
                x: 0,
                y: 0,
                width: t,
                height: e,
                patternUnits: 'userSpaceOnUse'
              })
          }
        }),
        (h.Shape = h.invent({
          create: function (t) {
            this.constructor.call(this, t)
          },
          inherit: h.Element
        })),
        (h.Symbol = h.invent({
          create: 'symbol',
          inherit: h.Container,
          construct: {
            symbol: function () {
              return this.put(new h.Symbol())
            }
          }
        })),
        (h.Use = h.invent({
          create: 'use',
          inherit: h.Shape,
          extend: {
            element: function (t, e) {
              return this.attr('href', (e || '') + '#' + t, h.xlink)
            }
          },
          construct: {
            use: function (t, e) {
              return this.put(new h.Use()).element(t, e)
            }
          }
        })),
        (h.Rect = h.invent({
          create: 'rect',
          inherit: h.Shape,
          construct: {
            rect: function (t, e) {
              return this.put(new h.Rect()).size(t, e)
            }
          }
        })),
        (h.Circle = h.invent({
          create: 'circle',
          inherit: h.Shape,
          construct: {
            circle: function (t) {
              return this.put(new h.Circle())
                .rx(new h.Number(t).divide(2))
                .move(0, 0)
            }
          }
        })),
        h.extend(h.Circle, h.FX, {
          rx: function (t) {
            return this.attr('r', t)
          },
          ry: function (t) {
            return this.rx(t)
          }
        }),
        (h.Ellipse = h.invent({
          create: 'ellipse',
          inherit: h.Shape,
          construct: {
            ellipse: function (t, e) {
              return this.put(new h.Ellipse()).size(t, e).move(0, 0)
            }
          }
        })),
        h.extend(h.Ellipse, h.Rect, h.FX, {
          rx: function (t) {
            return this.attr('rx', t)
          },
          ry: function (t) {
            return this.attr('ry', t)
          }
        }),
        h.extend(h.Circle, h.Ellipse, {
          x: function (t) {
            return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
          },
          y: function (t) {
            return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
          },
          cx: function (t) {
            return null == t ? this.attr('cx') : this.attr('cx', t)
          },
          cy: function (t) {
            return null == t ? this.attr('cy') : this.attr('cy', t)
          },
          width: function (t) {
            return null == t
              ? 2 * this.rx()
              : this.rx(new h.Number(t).divide(2))
          },
          height: function (t) {
            return null == t
              ? 2 * this.ry()
              : this.ry(new h.Number(t).divide(2))
          },
          size: function (t, e) {
            var i = g(this, t, e)
            return this.rx(new h.Number(i.width).divide(2)).ry(
              new h.Number(i.height).divide(2)
            )
          }
        }),
        (h.Line = h.invent({
          create: 'line',
          inherit: h.Shape,
          extend: {
            array: function () {
              return new h.PointArray([
                [this.attr('x1'), this.attr('y1')],
                [this.attr('x2'), this.attr('y2')]
              ])
            },
            plot: function (t, e, i, a) {
              return null == t
                ? this.array()
                : ((t =
                    void 0 !== e
                      ? { x1: t, y1: e, x2: i, y2: a }
                      : new h.PointArray(t).toLine()),
                  this.attr(t))
            },
            move: function (t, e) {
              return this.attr(this.array().move(t, e).toLine())
            },
            size: function (t, e) {
              var i = g(this, t, e)
              return this.attr(this.array().size(i.width, i.height).toLine())
            }
          },
          construct: {
            line: function (t, e, i, a) {
              return h.Line.prototype.plot.apply(
                this.put(new h.Line()),
                null != t ? [t, e, i, a] : [0, 0, 0, 0]
              )
            }
          }
        })),
        (h.Polyline = h.invent({
          create: 'polyline',
          inherit: h.Shape,
          construct: {
            polyline: function (t) {
              return this.put(new h.Polyline()).plot(t || new h.PointArray())
            }
          }
        })),
        (h.Polygon = h.invent({
          create: 'polygon',
          inherit: h.Shape,
          construct: {
            polygon: function (t) {
              return this.put(new h.Polygon()).plot(t || new h.PointArray())
            }
          }
        })),
        h.extend(h.Polyline, h.Polygon, {
          array: function () {
            return (
              this._array ||
              (this._array = new h.PointArray(this.attr('points')))
            )
          },
          plot: function (t) {
            return null == t
              ? this.array()
              : this.clear().attr(
                  'points',
                  'string' == typeof t ? t : (this._array = new h.PointArray(t))
                )
          },
          clear: function () {
            return delete this._array, this
          },
          move: function (t, e) {
            return this.attr('points', this.array().move(t, e))
          },
          size: function (t, e) {
            var i = g(this, t, e)
            return this.attr('points', this.array().size(i.width, i.height))
          }
        }),
        h.extend(h.Line, h.Polyline, h.Polygon, {
          morphArray: h.PointArray,
          x: function (t) {
            return null == t ? this.bbox().x : this.move(t, this.bbox().y)
          },
          y: function (t) {
            return null == t ? this.bbox().y : this.move(this.bbox().x, t)
          },
          width: function (t) {
            var e = this.bbox()
            return null == t ? e.width : this.size(t, e.height)
          },
          height: function (t) {
            var e = this.bbox()
            return null == t ? e.height : this.size(e.width, t)
          }
        }),
        (h.Path = h.invent({
          create: 'path',
          inherit: h.Shape,
          extend: {
            morphArray: h.PathArray,
            array: function () {
              return (
                this._array || (this._array = new h.PathArray(this.attr('d')))
              )
            },
            plot: function (t) {
              return null == t
                ? this.array()
                : this.clear().attr(
                    'd',
                    'string' == typeof t
                      ? t
                      : (this._array = new h.PathArray(t))
                  )
            },
            clear: function () {
              return delete this._array, this
            }
          },
          construct: {
            path: function (t) {
              return this.put(new h.Path()).plot(t || new h.PathArray())
            }
          }
        })),
        (h.Image = h.invent({
          create: 'image',
          inherit: h.Shape,
          extend: {
            load: function (e) {
              if (!e) return this
              var i = this,
                a = new s.Image()
              return (
                h.on(a, 'load', function () {
                  h.off(a)
                  var t = i.parent(h.Pattern)
                  null !== t &&
                    (0 == i.width() &&
                      0 == i.height() &&
                      i.size(a.width, a.height),
                    t &&
                      0 == t.width() &&
                      0 == t.height() &&
                      t.size(i.width(), i.height()),
                    'function' == typeof i._loaded &&
                      i._loaded.call(i, {
                        width: a.width,
                        height: a.height,
                        ratio: a.width / a.height,
                        url: e
                      }))
                }),
                h.on(a, 'error', function (t) {
                  h.off(a), 'function' == typeof i._error && i._error.call(i, t)
                }),
                this.attr('href', (a.src = this.src = e), h.xlink)
              )
            },
            loaded: function (t) {
              return (this._loaded = t), this
            },
            error: function (t) {
              return (this._error = t), this
            }
          },
          construct: {
            image: function (t, e, i) {
              return this.put(new h.Image())
                .load(t)
                .size(e || 0, i || e || 0)
            }
          }
        })),
        (h.Text = h.invent({
          create: function () {
            this.constructor.call(this, h.create('text')),
              (this.dom.leading = new h.Number(1.3)),
              (this._rebuild = !0),
              (this._build = !1),
              this.attr('font-family', h.defaults.attrs['font-family'])
          },
          inherit: h.Shape,
          extend: {
            x: function (t) {
              return null == t ? this.attr('x') : this.attr('x', t)
            },
            text: function (t) {
              if (void 0 === t) {
                t = ''
                for (
                  var e = this.node.childNodes, i = 0, a = e.length;
                  i < a;
                  ++i
                )
                  0 != i &&
                    3 != e[i].nodeType &&
                    1 == h.adopt(e[i]).dom.newLined &&
                    (t += '\n'),
                    (t += e[i].textContent)
                return t
              }
              if ((this.clear().build(!0), 'function' == typeof t))
                t.call(this, this)
              else {
                i = 0
                for (var s = (t = t.split('\n')).length; i < s; i++)
                  this.tspan(t[i]).newLine()
              }
              return this.build(!1).rebuild()
            },
            size: function (t) {
              return this.attr('font-size', t).rebuild()
            },
            leading: function (t) {
              return null == t
                ? this.dom.leading
                : ((this.dom.leading = new h.Number(t)), this.rebuild())
            },
            lines: function () {
              var t = ((this.textPath && this.textPath()) || this).node,
                e = h.utils.map(
                  h.utils.filterSVGElements(t.childNodes),
                  function (t) {
                    return h.adopt(t)
                  }
                )
              return new h.Set(e)
            },
            rebuild: function (t) {
              var e, i, a
              return (
                'boolean' == typeof t && (this._rebuild = t),
                this._rebuild &&
                  ((i = 0),
                  (a =
                    (e = this).dom.leading *
                    new h.Number(this.attr('font-size'))),
                  this.lines().each(function () {
                    this.dom.newLined &&
                      (e.textPath() || this.attr('x', e.attr('x')),
                      '\n' == this.text()
                        ? (i += a)
                        : (this.attr('dy', a + i), (i = 0)))
                  }),
                  this.fire('rebuild')),
                this
              )
            },
            build: function (t) {
              return (this._build = !!t), this
            },
            setData: function (t) {
              return (
                (this.dom = t),
                (this.dom.leading = new h.Number(t.leading || 1.3)),
                this
              )
            }
          },
          construct: {
            text: function (t) {
              return this.put(new h.Text()).text(t)
            },
            plain: function (t) {
              return this.put(new h.Text()).plain(t)
            }
          }
        })),
        (h.Tspan = h.invent({
          create: 'tspan',
          inherit: h.Shape,
          extend: {
            text: function (t) {
              return null == t
                ? this.node.textContent + (this.dom.newLined ? '\n' : '')
                : ('function' == typeof t ? t.call(this, this) : this.plain(t),
                  this)
            },
            dx: function (t) {
              return this.attr('dx', t)
            },
            dy: function (t) {
              return this.attr('dy', t)
            },
            newLine: function () {
              var t = this.parent(h.Text)
              return (
                (this.dom.newLined = !0),
                this.dy(t.dom.leading * t.attr('font-size')).attr('x', t.x())
              )
            }
          }
        })),
        h.extend(h.Text, h.Tspan, {
          plain: function (t) {
            return (
              !1 === this._build && this.clear(),
              this.node.appendChild(r.createTextNode(t)),
              this
            )
          },
          tspan: function (t) {
            var e = ((this.textPath && this.textPath()) || this).node,
              i = new h.Tspan()
            return (
              !1 === this._build && this.clear(),
              e.appendChild(i.node),
              i.text(t)
            )
          },
          clear: function () {
            for (
              var t = ((this.textPath && this.textPath()) || this).node;
              t.hasChildNodes();

            )
              t.removeChild(t.lastChild)
            return this
          },
          length: function () {
            return this.node.getComputedTextLength()
          }
        }),
        (h.TextPath = h.invent({
          create: 'textPath',
          inherit: h.Parent,
          parent: h.Text,
          construct: {
            morphArray: h.PathArray,
            array: function () {
              var t = this.track()
              return t ? t.array() : null
            },
            plot: function (t) {
              var e = this.track(),
                i = null
              return e && (i = e.plot(t)), null == t ? i : this
            },
            track: function () {
              var t = this.textPath()
              if (t) return t.reference('href')
            },
            textPath: function () {
              if (
                this.node.firstChild &&
                'textPath' == this.node.firstChild.nodeName
              )
                return h.adopt(this.node.firstChild)
            }
          }
        })),
        (h.Nested = h.invent({
          create: function () {
            this.constructor.call(this, h.create('svg')),
              this.style('overflow', 'visible')
          },
          inherit: h.Container,
          construct: {
            nested: function () {
              return this.put(new h.Nested())
            }
          }
        }))
      var a = {
        stroke: [
          'color',
          'width',
          'opacity',
          'linecap',
          'linejoin',
          'miterlimit',
          'dasharray',
          'dashoffset'
        ],
        fill: ['color', 'opacity', 'rule'],
        prefix: function (t, e) {
          return 'color' == e ? t : t + '-' + e
        }
      }
      function c (t, e, i, a) {
        return i + a.replace(h.regex.dots, ' .')
      }
      function n (t) {
        return t.toLowerCase().replace(/-(.)/g, function (t, e) {
          return e.toUpperCase()
        })
      }
      function o (t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      }
      function d (t) {
        var e = t.toString(16)
        return 1 == e.length ? '0' + e : e
      }
      function g (t, e, i) {
        var a
        return (
          (null != e && null != i) ||
            ((a = t.bbox()),
            null == e
              ? (e = (a.width / a.height) * i)
              : null == i && (i = (a.height / a.width) * e)),
          { width: e, height: i }
        )
      }
      function u (t, e, i) {
        return { x: e * t.a + i * t.c, y: e * t.b + i * t.d }
      }
      function p (t) {
        return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] }
      }
      function f (t) {
        for (var e = t.childNodes.length - 1; 0 <= e; e--)
          t.childNodes[e] instanceof s.SVGElement && f(t.childNodes[e])
        return h.adopt(t).id(h.eid(t.nodeName))
      }
      function x (t) {
        return 1e-37 < Math.abs(t) ? t : 0
      }
      ;['fill', 'stroke'].forEach(function (i) {
        var t = {}
        ;(t[i] = function (t) {
          if (void 0 === t) return this
          if (
            'string' == typeof t ||
            h.Color.isRgb(t) ||
            (t && 'function' == typeof t.fill)
          )
            this.attr(i, t)
          else
            for (var e = a[i].length - 1; 0 <= e; e--)
              null != t[a[i][e]] && this.attr(a.prefix(i, a[i][e]), t[a[i][e]])
          return this
        }),
          h.extend(h.Element, h.FX, t)
      }),
        h.extend(h.Element, h.FX, {
          translate: function (t, e) {
            return this.transform({ x: t, y: e })
          },
          matrix: function (t) {
            return this.attr(
              'transform',
              new h.Matrix(6 == arguments.length ? [].slice.call(arguments) : t)
            )
          },
          opacity: function (t) {
            return this.attr('opacity', t)
          },
          dx: function (t) {
            return this.x(
              new h.Number(t).plus(this instanceof h.FX ? 0 : this.x()),
              !0
            )
          },
          dy: function (t) {
            return this.y(
              new h.Number(t).plus(this instanceof h.FX ? 0 : this.y()),
              !0
            )
          }
        }),
        h.extend(h.Path, {
          length: function () {
            return this.node.getTotalLength()
          },
          pointAt: function (t) {
            return this.node.getPointAtLength(t)
          }
        }),
        (h.Set = h.invent({
          create: function (t) {
            Array.isArray(t) ? (this.members = t) : this.clear()
          },
          extend: {
            add: function () {
              for (
                var t = [].slice.call(arguments), e = 0, i = t.length;
                e < i;
                e++
              )
                this.members.push(t[e])
              return this
            },
            remove: function (t) {
              var e = this.index(t)
              return -1 < e && this.members.splice(e, 1), this
            },
            each: function (t) {
              for (var e = 0, i = this.members.length; e < i; e++)
                t.apply(this.members[e], [e, this.members])
              return this
            },
            clear: function () {
              return (this.members = []), this
            },
            length: function () {
              return this.members.length
            },
            has: function (t) {
              return 0 <= this.index(t)
            },
            index: function (t) {
              return this.members.indexOf(t)
            },
            get: function (t) {
              return this.members[t]
            },
            first: function () {
              return this.get(0)
            },
            last: function () {
              return this.get(this.members.length - 1)
            },
            valueOf: function () {
              return this.members
            }
          },
          construct: {
            set: function (t) {
              return new h.Set(t)
            }
          }
        })),
        (h.FX.Set = h.invent({
          create: function (t) {
            this.set = t
          }
        })),
        (h.Set.inherit = function () {
          var t = []
          for (var e in h.Shape.prototype)
            'function' == typeof h.Shape.prototype[e] &&
              'function' != typeof h.Set.prototype[e] &&
              t.push(e)
          for (var e in (t.forEach(function (i) {
            h.Set.prototype[i] = function () {
              for (var t = 0, e = this.members.length; t < e; t++)
                this.members[t] &&
                  'function' == typeof this.members[t][i] &&
                  this.members[t][i].apply(this.members[t], arguments)
              return 'animate' == i
                ? this.fx || (this.fx = new h.FX.Set(this))
                : this
            }
          }),
          (t = []),
          h.FX.prototype))
            'function' == typeof h.FX.prototype[e] &&
              'function' != typeof h.FX.Set.prototype[e] &&
              t.push(e)
          t.forEach(function (i) {
            h.FX.Set.prototype[i] = function () {
              for (var t = 0, e = this.set.members.length; t < e; t++)
                this.set.members[t].fx[i].apply(
                  this.set.members[t].fx,
                  arguments
                )
              return this
            }
          })
        }),
        h.extend(h.Element, {}),
        h.extend(h.Element, {
          remember: function (t, e) {
            if ('object' === v(t)) for (var i in t) this.remember(i, t[i])
            else {
              if (1 == arguments.length) return this.memory()[t]
              this.memory()[t] = e
            }
            return this
          },
          forget: function () {
            if (0 == arguments.length) this._memory = {}
            else
              for (var t = arguments.length - 1; 0 <= t; t--)
                delete this.memory()[arguments[t]]
            return this
          },
          memory: function () {
            return this._memory || (this._memory = {})
          }
        }),
        (h.get = function (e) {
          var t = r.getElementById(
            (function () {
              var t = (e || '').toString().match(h.regex.reference)
              if (t) return t[1]
            })() || e
          )
          return h.adopt(t)
        }),
        (h.select = function (t, e) {
          return new h.Set(
            h.utils.map((e || r).querySelectorAll(t), function (t) {
              return h.adopt(t)
            })
          )
        }),
        h.extend(h.Parent, {
          select: function (t) {
            return h.select(t, this.node)
          }
        })
      var b,
        m = 'abcdef'.split('')
      return (
        'function' != typeof s.CustomEvent
          ? (((b = function (t, e) {
              e = e || { bubbles: !1, cancelable: !1, detail: void 0 }
              var i = r.createEvent('CustomEvent')
              return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
            }).prototype = s.Event.prototype),
            (h.CustomEvent = b))
          : (h.CustomEvent = s.CustomEvent),
        h
      )
    }),
    'function' == typeof define && define.amd
      ? define(function () {
          return L(t, t.document)
        })
      : 'object' ===
          ('undefined' == typeof exports ? 'undefined' : v(exports)) &&
        'undefined' != typeof module
      ? (module.exports = t.document
          ? L(t, t.document)
          : function (t) {
              return L(t, t.document)
            })
      : (t.SVG = L(t, t.document)),
    function () {
      ;(SVG.Filter = SVG.invent({
        create: 'filter',
        inherit: SVG.Parent,
        extend: {
          source: 'SourceGraphic',
          sourceAlpha: 'SourceAlpha',
          background: 'BackgroundImage',
          backgroundAlpha: 'BackgroundAlpha',
          fill: 'FillPaint',
          stroke: 'StrokePaint',
          autoSetIn: !0,
          put: function (t, e) {
            return (
              this.add(t, e),
              !t.attr('in') && this.autoSetIn && t.attr('in', this.source),
              t.attr('result') || t.attr('result', t),
              t
            )
          },
          blend: function (t, e, i) {
            return this.put(new SVG.BlendEffect(t, e, i))
          },
          colorMatrix: function (t, e) {
            return this.put(new SVG.ColorMatrixEffect(t, e))
          },
          convolveMatrix: function (t) {
            return this.put(new SVG.ConvolveMatrixEffect(t))
          },
          componentTransfer: function (t) {
            return this.put(new SVG.ComponentTransferEffect(t))
          },
          composite: function (t, e, i) {
            return this.put(new SVG.CompositeEffect(t, e, i))
          },
          flood: function (t, e) {
            return this.put(new SVG.FloodEffect(t, e))
          },
          offset: function (t, e) {
            return this.put(new SVG.OffsetEffect(t, e))
          },
          image: function (t) {
            return this.put(new SVG.ImageEffect(t))
          },
          merge: function () {
            var t = [void 0]
            for (var e in arguments) t.push(arguments[e])
            return this.put(
              new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t))()
            )
          },
          gaussianBlur: function (t, e) {
            return this.put(new SVG.GaussianBlurEffect(t, e))
          },
          morphology: function (t, e) {
            return this.put(new SVG.MorphologyEffect(t, e))
          },
          diffuseLighting: function (t, e, i) {
            return this.put(new SVG.DiffuseLightingEffect(t, e, i))
          },
          displacementMap: function (t, e, i, a, s) {
            return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s))
          },
          specularLighting: function (t, e, i, a) {
            return this.put(new SVG.SpecularLightingEffect(t, e, i, a))
          },
          tile: function () {
            return this.put(new SVG.TileEffect())
          },
          turbulence: function (t, e, i, a, s) {
            return this.put(new SVG.TurbulenceEffect(t, e, i, a, s))
          },
          toString: function () {
            return 'url(#' + this.attr('id') + ')'
          }
        }
      })),
        SVG.extend(SVG.Defs, {
          filter: function (t) {
            var e = this.put(new SVG.Filter())
            return 'function' == typeof t && t.call(e, e), e
          }
        }),
        SVG.extend(SVG.Container, {
          filter: function (t) {
            return this.defs().filter(t)
          }
        }),
        SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
          filter: function (t) {
            return (
              (this.filterer =
                t instanceof SVG.Element ? t : this.doc().filter(t)),
              this.doc() &&
                this.filterer.doc() !== this.doc() &&
                this.doc().defs().add(this.filterer),
              this.attr('filter', this.filterer),
              this.filterer
            )
          },
          unfilter: function (t) {
            return (
              this.filterer && !0 === t && this.filterer.remove(),
              delete this.filterer,
              this.attr('filter', null)
            )
          }
        }),
        (SVG.Effect = SVG.invent({
          create: function () {
            this.constructor.call(this)
          },
          inherit: SVG.Element,
          extend: {
            in: function (t) {
              return null == t
                ? (this.parent() &&
                    this.parent()
                      .select('[result="' + this.attr('in') + '"]')
                      .get(0)) ||
                    this.attr('in')
                : this.attr('in', t)
            },
            result: function (t) {
              return null == t ? this.attr('result') : this.attr('result', t)
            },
            toString: function () {
              return this.result()
            }
          }
        })),
        (SVG.ParentEffect = SVG.invent({
          create: function () {
            this.constructor.call(this)
          },
          inherit: SVG.Parent,
          extend: {
            in: function (t) {
              return null == t
                ? (this.parent() &&
                    this.parent()
                      .select('[result="' + this.attr('in') + '"]')
                      .get(0)) ||
                    this.attr('in')
                : this.attr('in', t)
            },
            result: function (t) {
              return null == t ? this.attr('result') : this.attr('result', t)
            },
            toString: function () {
              return this.result()
            }
          }
        }))
      var t = {
        blend: function (t, e) {
          return this.parent() && this.parent().blend(this, t, e)
        },
        colorMatrix: function (t, e) {
          return this.parent() && this.parent().colorMatrix(t, e).in(this)
        },
        convolveMatrix: function (t) {
          return this.parent() && this.parent().convolveMatrix(t).in(this)
        },
        componentTransfer: function (t) {
          return this.parent() && this.parent().componentTransfer(t).in(this)
        },
        composite: function (t, e) {
          return this.parent() && this.parent().composite(this, t, e)
        },
        flood: function (t, e) {
          return this.parent() && this.parent().flood(t, e)
        },
        offset: function (t, e) {
          return this.parent() && this.parent().offset(t, e).in(this)
        },
        image: function (t) {
          return this.parent() && this.parent().image(t)
        },
        merge: function () {
          return (
            this.parent() &&
            this.parent().merge.apply(this.parent(), [this].concat(arguments))
          )
        },
        gaussianBlur: function (t, e) {
          return this.parent() && this.parent().gaussianBlur(t, e).in(this)
        },
        morphology: function (t, e) {
          return this.parent() && this.parent().morphology(t, e).in(this)
        },
        diffuseLighting: function (t, e, i) {
          return (
            this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
          )
        },
        displacementMap: function (t, e, i, a) {
          return (
            this.parent() && this.parent().displacementMap(this, t, e, i, a)
          )
        },
        specularLighting: function (t, e, i, a) {
          return (
            this.parent() && this.parent().specularLighting(t, e, i, a).in(this)
          )
        },
        tile: function () {
          return this.parent() && this.parent().tile().in(this)
        },
        turbulence: function (t, e, i, a, s) {
          return (
            this.parent() && this.parent().turbulence(t, e, i, a, s).in(this)
          )
        }
      }
      SVG.extend(SVG.Effect, t),
        SVG.extend(SVG.ParentEffect, t),
        (SVG.ChildEffect = SVG.invent({
          create: function () {
            this.constructor.call(this)
          },
          inherit: SVG.Element,
          extend: {
            in: function (t) {
              this.attr('in', t)
            }
          }
        }))
      var e = {
          blend: function (t, e, i) {
            this.attr({ in: t, in2: e, mode: i || 'normal' })
          },
          colorMatrix: function (t, e) {
            'matrix' == t && (e = s(e)),
              this.attr({ type: t, values: void 0 === e ? null : e })
          },
          convolveMatrix: function (t) {
            ;(t = s(t)),
              this.attr({
                order: Math.sqrt(t.split(' ').length),
                kernelMatrix: t
              })
          },
          composite: function (t, e, i) {
            this.attr({ in: t, in2: e, operator: i })
          },
          flood: function (t, e) {
            this.attr('flood-color', t),
              null != e && this.attr('flood-opacity', e)
          },
          offset: function (t, e) {
            this.attr({ dx: t, dy: e })
          },
          image: function (t) {
            this.attr('href', t, SVG.xlink)
          },
          displacementMap: function (t, e, i, a, s) {
            this.attr({
              in: t,
              in2: e,
              scale: i,
              xChannelSelector: a,
              yChannelSelector: s
            })
          },
          gaussianBlur: function (t, e) {
            null != t || null != e
              ? this.attr(
                  'stdDeviation',
                  (function (t) {
                    if (!Array.isArray(t)) return t
                    for (var e = 0, i = t.length, a = []; e < i; e++)
                      a.push(t[e])
                    return a.join(' ')
                  })(Array.prototype.slice.call(arguments))
                )
              : this.attr('stdDeviation', '0 0')
          },
          morphology: function (t, e) {
            this.attr({ operator: t, radius: e })
          },
          tile: function () {},
          turbulence: function (t, e, i, a, s) {
            this.attr({
              numOctaves: e,
              seed: i,
              stitchTiles: a,
              baseFrequency: t,
              type: s
            })
          }
        },
        i = {
          merge: function () {
            var t
            if (arguments[0] instanceof SVG.Set) {
              var e = this
              arguments[0].each(function (t) {
                this instanceof SVG.MergeNode
                  ? e.put(this)
                  : (this instanceof SVG.Effect ||
                      this instanceof SVG.ParentEffect) &&
                    e.put(new SVG.MergeNode(this))
              })
            } else {
              t = Array.isArray(arguments[0]) ? arguments[0] : arguments
              for (var i = 0; i < t.length; i++)
                t[i] instanceof SVG.MergeNode
                  ? this.put(t[i])
                  : this.put(new SVG.MergeNode(t[i]))
            }
          },
          componentTransfer: function (e) {
            if (
              ((this.rgb = new SVG.Set()),
              ['r', 'g', 'b', 'a'].forEach(
                function (t) {
                  ;(this[t] = new SVG['Func' + t.toUpperCase()]('identity')),
                    this.rgb.add(this[t]),
                    this.node.appendChild(this[t].node)
                }.bind(this)
              ),
              e)
            )
              for (var t in (e.rgb &&
                (['r', 'g', 'b'].forEach(
                  function (t) {
                    this[t].attr(e.rgb)
                  }.bind(this)
                ),
                delete e.rgb),
              e))
                this[t].attr(e[t])
          },
          diffuseLighting: function (t, e, i) {
            this.attr({
              surfaceScale: t,
              diffuseConstant: e,
              kernelUnitLength: i
            })
          },
          specularLighting: function (t, e, i, a) {
            this.attr({
              surfaceScale: t,
              diffuseConstant: e,
              specularExponent: i,
              kernelUnitLength: a
            })
          }
        },
        a = {
          distantLight: function (t, e) {
            this.attr({ azimuth: t, elevation: e })
          },
          pointLight: function (t, e, i) {
            this.attr({ x: t, y: e, z: i })
          },
          spotLight: function (t, e, i, a, s, r) {
            this.attr({
              x: t,
              y: e,
              z: i,
              pointsAtX: a,
              pointsAtY: s,
              pointsAtZ: r
            })
          },
          mergeNode: function (t) {
            this.attr('in', t)
          }
        }
      function s (t) {
        return (
          Array.isArray(t) && (t = new SVG.Array(t)),
          t
            .toString()
            .replace(/^\s+/, '')
            .replace(/\s+$/, '')
            .replace(/\s+/g, ' ')
        )
      }
      function r () {
        var t = function () {}
        for (var e in ('function' == typeof arguments[arguments.length - 1] &&
          ((t = arguments[arguments.length - 1]),
          Array.prototype.splice.call(arguments, arguments.length - 1, 1)),
        arguments))
          for (var i in arguments[e]) t(arguments[e][i], i, arguments[e])
      }
      ;['r', 'g', 'b', 'a'].forEach(function (t) {
        a['Func' + t.toUpperCase()] = function (t) {
          switch ((this.attr('type', t), t)) {
            case 'table':
              this.attr('tableValues', arguments[1])
              break
            case 'linear':
              this.attr('slope', arguments[1]),
                this.attr('intercept', arguments[2])
              break
            case 'gamma':
              this.attr('amplitude', arguments[1]),
                this.attr('exponent', arguments[2]),
                this.attr('offset', arguments[2])
          }
        }
      }),
        r(e, function (t, e) {
          var i = e.charAt(0).toUpperCase() + e.slice(1)
          SVG[i + 'Effect'] = SVG.invent({
            create: function () {
              this.constructor.call(this, SVG.create('fe' + i)),
                t.apply(this, arguments),
                this.result(this.attr('id') + 'Out')
            },
            inherit: SVG.Effect,
            extend: {}
          })
        }),
        r(i, function (t, e) {
          var i = e.charAt(0).toUpperCase() + e.slice(1)
          SVG[i + 'Effect'] = SVG.invent({
            create: function () {
              this.constructor.call(this, SVG.create('fe' + i)),
                t.apply(this, arguments),
                this.result(this.attr('id') + 'Out')
            },
            inherit: SVG.ParentEffect,
            extend: {}
          })
        }),
        r(a, function (t, e) {
          var i = e.charAt(0).toUpperCase() + e.slice(1)
          SVG[i] = SVG.invent({
            create: function () {
              this.constructor.call(this, SVG.create('fe' + i)),
                t.apply(this, arguments)
            },
            inherit: SVG.ChildEffect,
            extend: {}
          })
        }),
        SVG.extend(SVG.MergeEffect, {
          in: function (t) {
            return (
              t instanceof SVG.MergeNode
                ? this.add(t, 0)
                : this.add(new SVG.MergeNode(t), 0),
              this
            )
          }
        }),
        SVG.extend(
          SVG.CompositeEffect,
          SVG.BlendEffect,
          SVG.DisplacementMapEffect,
          {
            in2: function (t) {
              return null == t
                ? (this.parent() &&
                    this.parent()
                      .select('[result="' + this.attr('in2') + '"]')
                      .get(0)) ||
                    this.attr('in2')
                : this.attr('in2', t)
            }
          }
        ),
        (SVG.filter = {
          sepiatone: [
            0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334,
            0.111, 0, 0, 0, 0, 0, 1, 0
          ]
        })
    }.call(void 0),
    SVG.extend(SVG.PathArray, {
      morph: function (t) {
        for (
          var e = this.value, i = this.parse(t), a = 0, s = 0;
          !1 !== a || !1 !== s;

        ) {
          var r,
            n = _e(e, !1 !== a && a + 1),
            o = _e(i, !1 !== s && s + 1)
          !1 === a &&
            (a =
              0 == (r = new SVG.PathArray(l.start).bbox()).height ||
              0 == r.width
                ? e.push(e[0]) - 1
                : e.push(['M', r.x + r.width / 2, r.y + r.height / 2]) - 1),
            !1 === s &&
              (s =
                0 == (r = new SVG.PathArray(l.dest).bbox()).height ||
                0 == r.width
                  ? i.push(i[0]) - 1
                  : i.push(['M', r.x + r.width / 2, r.y + r.height / 2]) - 1)
          var l = (function (t, e, i, a, s, r, n) {
              for (
                var o = t.slice(e, i || n),
                  l = a.slice(s, r || n),
                  h = 0,
                  c = { pos: [0, 0], start: [0, 0] },
                  d = { pos: [0, 0], start: [0, 0] };
                (o[h] = Be.call(c, o[h])),
                  (l[h] = Be.call(d, l[h])),
                  o[h][0] != l[h][0] ||
                  'M' == o[h][0] ||
                  ('A' == o[h][0] && (o[h][4] != l[h][4] || o[h][5] != l[h][5]))
                    ? (Array.prototype.splice.apply(
                        o,
                        [h, 1].concat(Ge.call(c, o[h]))
                      ),
                      Array.prototype.splice.apply(
                        l,
                        [h, 1].concat(Ge.call(d, l[h]))
                      ))
                    : ((o[h] = Ve.call(c, o[h])), (l[h] = Ve.call(d, l[h]))),
                  ++h != o.length || h != l.length;

              )
                h == o.length &&
                  o.push([
                    'C',
                    c.pos[0],
                    c.pos[1],
                    c.pos[0],
                    c.pos[1],
                    c.pos[0],
                    c.pos[1]
                  ]),
                  h == l.length &&
                    l.push([
                      'C',
                      d.pos[0],
                      d.pos[1],
                      d.pos[0],
                      d.pos[1],
                      d.pos[0],
                      d.pos[1]
                    ])
              return { start: o, dest: l }
            })(e, a, n, i, s, o),
            e = e.slice(0, a).concat(l.start, !1 === n ? [] : e.slice(n)),
            i = i.slice(0, s).concat(l.dest, !1 === o ? [] : i.slice(o)),
            a = !1 !== n && a + l.start.length,
            s = !1 !== o && s + l.dest.length
        }
        return (
          (this.value = e),
          (this.destination = new SVG.PathArray()),
          (this.destination.value = i),
          this
        )
      }
    }),
    function () {
      function a (t) {
        t.remember('_draggable', this), (this.el = t)
      }
      ;(a.prototype.init = function (t, e) {
        var i = this
        ;(this.constraint = t),
          (this.value = e),
          this.el.on('mousedown.drag', function (t) {
            i.start(t)
          }),
          this.el.on('touchstart.drag', function (t) {
            i.start(t)
          })
      }),
        (a.prototype.transformPoint = function (t, e) {
          var i =
            ((t = t || window.event).changedTouches && t.changedTouches[0]) || t
          return (
            (this.p.x = i.clientX - (e || 0)),
            (this.p.y = i.clientY),
            this.p.matrixTransform(this.m)
          )
        }),
        (a.prototype.getBBox = function () {
          var t = this.el.bbox()
          return (
            this.el instanceof SVG.Nested && (t = this.el.rbox()),
            (this.el instanceof SVG.G ||
              this.el instanceof SVG.Use ||
              this.el instanceof SVG.Nested) &&
              ((t.x = this.el.x()), (t.y = this.el.y())),
            t
          )
        }),
        (a.prototype.start = function (t) {
          if (
            ('click' != t.type &&
              'mousedown' != t.type &&
              'mousemove' != t.type) ||
            1 == (t.which || t.buttons)
          ) {
            var e = this
            if (
              (this.el.fire('beforedrag', { event: t, handler: this }),
              !this.el.event().defaultPrevented)
            ) {
              t.preventDefault(),
                t.stopPropagation(),
                (this.parent =
                  this.parent ||
                  this.el.parent(SVG.Nested) ||
                  this.el.parent(SVG.Doc)),
                (this.p = this.parent.node.createSVGPoint()),
                (this.m = this.el.node.getScreenCTM().inverse())
              var i,
                a = this.getBBox()
              if (this.el instanceof SVG.Text)
                switch (
                  ((i = this.el.node.getComputedTextLength()),
                  this.el.attr('text-anchor'))
                ) {
                  case 'middle':
                    i /= 2
                    break
                  case 'start':
                    i = 0
                }
              ;(this.startPoints = {
                point: this.transformPoint(t, i),
                box: a,
                transform: this.el.transform()
              }),
                SVG.on(window, 'mousemove.drag', function (t) {
                  e.drag(t)
                }),
                SVG.on(window, 'touchmove.drag', function (t) {
                  e.drag(t)
                }),
                SVG.on(window, 'mouseup.drag', function (t) {
                  e.end(t)
                }),
                SVG.on(window, 'touchend.drag', function (t) {
                  e.end(t)
                }),
                this.el.fire('dragstart', {
                  event: t,
                  p: this.startPoints.point,
                  m: this.m,
                  handler: this
                })
            }
          }
        }),
        (a.prototype.drag = function (t) {
          var e,
            i = this.getBBox(),
            a = this.transformPoint(t),
            s = this.startPoints.box.x + a.x - this.startPoints.point.x,
            r = this.startPoints.box.y + a.y - this.startPoints.point.y,
            n = this.constraint,
            o = a.x - this.startPoints.point.x,
            l = a.y - this.startPoints.point.y
          return (
            this.el.fire('dragmove', {
              event: t,
              p: a,
              m: this.m,
              handler: this
            }),
            this.el.event().defaultPrevented ||
              ('function' == typeof n
                ? ('boolean' == typeof (e = n.call(this.el, s, r, this.m)) &&
                    (e = { x: e, y: e }),
                  !0 === e.x ? this.el.x(s) : !1 !== e.x && this.el.x(e.x),
                  !0 === e.y ? this.el.y(r) : !1 !== e.y && this.el.y(e.y))
                : 'object' == typeof n &&
                  (null != n.minX && s < n.minX
                    ? (o = (s = n.minX) - this.startPoints.box.x)
                    : null != n.maxX &&
                      s > n.maxX - i.width &&
                      (o = (s = n.maxX - i.width) - this.startPoints.box.x),
                  null != n.minY && r < n.minY
                    ? (l = (r = n.minY) - this.startPoints.box.y)
                    : null != n.maxY &&
                      r > n.maxY - i.height &&
                      (l = (r = n.maxY - i.height) - this.startPoints.box.y),
                  null != n.snapToGrid &&
                    ((s -= s % n.snapToGrid),
                    (r -= r % n.snapToGrid),
                    (o -= o % n.snapToGrid),
                    (l -= l % n.snapToGrid)),
                  this.el instanceof SVG.G
                    ? this.el
                        .matrix(this.startPoints.transform)
                        .transform({ x: o, y: l }, !0)
                    : this.el.move(s, r))),
            a
          )
        }),
        (a.prototype.end = function (t) {
          var e = this.drag(t)
          this.el.fire('dragend', { event: t, p: e, m: this.m, handler: this }),
            SVG.off(window, 'mousemove.drag'),
            SVG.off(window, 'touchmove.drag'),
            SVG.off(window, 'mouseup.drag'),
            SVG.off(window, 'touchend.drag')
        }),
        SVG.extend(SVG.Element, {
          draggable: function (t, e) {
            ;('function' != typeof t && 'object' != typeof t) ||
              ((e = t), (t = !0))
            var i = this.remember('_draggable') || new a(this)
            return (
              (t = void 0 === t || t)
                ? i.init(e || {}, t)
                : (this.off('mousedown.drag'), this.off('touchstart.drag')),
              this
            )
          }
        })
    }.call(void 0),
    (We.prototype.init = function (t, e) {
      var i = this.el.bbox()
      this.options = {}
      var a = this.el.selectize.defaults.points
      for (var s in this.el.selectize.defaults)
        (this.options[s] = this.el.selectize.defaults[s]),
          void 0 !== e[s] && (this.options[s] = e[s])
      var r = ['points', 'pointsExclude']
      for (var s in r) {
        var n = this.options[r[s]]
        'string' == typeof n
          ? (n = 0 < n.length ? n.split(/\s*,\s*/i) : [])
          : 'boolean' == typeof n && 'points' === r[s] && (n = n ? a : []),
          (this.options[r[s]] = n)
      }
      ;(this.options.points = [a, this.options.points].reduce(function (t, e) {
        return t.filter(function (t) {
          return -1 < e.indexOf(t)
        })
      })),
        (this.options.points = [
          this.options.points,
          this.options.pointsExclude
        ].reduce(function (t, e) {
          return t.filter(function (t) {
            return e.indexOf(t) < 0
          })
        })),
        (this.parent = this.el.parent()),
        (this.nested = this.nested || this.parent.group()),
        this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)),
        this.options.deepSelect &&
        -1 !== ['line', 'polyline', 'polygon'].indexOf(this.el.type)
          ? this.selectPoints(t)
          : this.selectRect(t),
        this.observe(),
        this.cleanup()
    }),
    (We.prototype.selectPoints = function (t) {
      return (
        (this.pointSelection.isSelected = t),
        this.pointSelection.set ||
          ((this.pointSelection.set = this.parent.set()), this.drawPoints()),
        this
      )
    }),
    (We.prototype.getPointArray = function () {
      var e = this.el.bbox()
      return this.el
        .array()
        .valueOf()
        .map(function (t) {
          return [t[0] - e.x, t[1] - e.y]
        })
    }),
    (We.prototype.drawPoints = function () {
      for (
        var s = this, t = this.getPointArray(), e = 0, i = t.length;
        e < i;
        ++e
      ) {
        var a = (function (a) {
            return function (t) {
              ;(t = t || window.event).preventDefault
                ? t.preventDefault()
                : (t.returnValue = !1),
                t.stopPropagation()
              var e = t.pageX || t.touches[0].pageX,
                i = t.pageY || t.touches[0].pageY
              s.el.fire('point', { x: e, y: i, i: a, event: t })
            }
          })(e),
          r = this.drawPoint(t[e][0], t[e][1])
            .addClass(this.options.classPoints)
            .addClass(this.options.classPoints + '_point')
            .on('touchstart', a)
            .on('mousedown', a)
        this.pointSelection.set.add(r)
      }
    }),
    (We.prototype.drawPoint = function (t, e) {
      var i = this.options.pointType
      switch (i) {
        case 'circle':
          return this.drawCircle(t, e)
        case 'rect':
          return this.drawRect(t, e)
        default:
          if ('function' == typeof i) return i.call(this, t, e)
          throw new Error('Unknown ' + i + ' point type!')
      }
    }),
    (We.prototype.drawCircle = function (t, e) {
      return this.nested.circle(this.options.pointSize).center(t, e)
    }),
    (We.prototype.drawRect = function (t, e) {
      return this.nested
        .rect(this.options.pointSize, this.options.pointSize)
        .center(t, e)
    }),
    (We.prototype.updatePointSelection = function () {
      var e = this.getPointArray()
      this.pointSelection.set.each(function (t) {
        ;(this.cx() === e[t][0] && this.cy() === e[t][1]) ||
          this.center(e[t][0], e[t][1])
      })
    }),
    (We.prototype.updateRectSelection = function () {
      var t,
        a = this,
        s = this.el.bbox()
      this.rectSelection.set.get(0).attr({ width: s.width, height: s.height }),
        this.options.points.length &&
          this.options.points.map(function (t, e) {
            var i = a.pointCoords(t, s)
            a.rectSelection.set.get(e + 1).center(i.x, i.y)
          }),
        this.options.rotationPoint &&
          ((t = this.rectSelection.set.length()),
          this.rectSelection.set.get(t - 1).center(s.width / 2, 20))
    }),
    (We.prototype.selectRect = function (t) {
      var e,
        i,
        s = this,
        r = this.el.bbox()
      function n (a) {
        return function (t) {
          ;(t = t || window.event).preventDefault
            ? t.preventDefault()
            : (t.returnValue = !1),
            t.stopPropagation()
          var e = t.pageX || t.touches[0].pageX,
            i = t.pageY || t.touches[0].pageY
          s.el.fire(a, { x: e, y: i, event: t })
        }
      }
      ;(this.rectSelection.isSelected = t),
        (this.rectSelection.set = this.rectSelection.set || this.parent.set()),
        this.rectSelection.set.get(0) ||
          this.rectSelection.set.add(
            this.nested.rect(r.width, r.height).addClass(this.options.classRect)
          ),
        this.options.points.length &&
          this.rectSelection.set.length() < 2 &&
          (this.options.points.map(function (t, e) {
            var i = s.pointCoords(t, r),
              a = s
                .drawPoint(i.x, i.y)
                .attr('class', s.options.classPoints + '_' + t)
                .on('mousedown', n(t))
                .on('touchstart', n(t))
            s.rectSelection.set.add(a)
          }),
          this.rectSelection.set.each(function () {
            this.addClass(s.options.classPoints)
          })),
        this.options.rotationPoint &&
          ((this.options.points && !this.rectSelection.set.get(9)) ||
            (!this.options.points && !this.rectSelection.set.get(1))) &&
          ((e = function (t) {
            ;(t = t || window.event).preventDefault
              ? t.preventDefault()
              : (t.returnValue = !1),
              t.stopPropagation()
            var e = t.pageX || t.touches[0].pageX,
              i = t.pageY || t.touches[0].pageY
            s.el.fire('rot', { x: e, y: i, event: t })
          }),
          (i = this.drawPoint(r.width / 2, 20)
            .attr('class', this.options.classPoints + '_rot')
            .on('touchstart', e)
            .on('mousedown', e)),
          this.rectSelection.set.add(i))
    }),
    (We.prototype.handler = function () {
      var t = this.el.bbox()
      this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)),
        this.rectSelection.isSelected && this.updateRectSelection(),
        this.pointSelection.isSelected && this.updatePointSelection()
    }),
    (We.prototype.observe = function () {
      var t = this
      if (MutationObserver)
        if (this.rectSelection.isSelected || this.pointSelection.isSelected)
          (this.observerInst =
            this.observerInst ||
            new MutationObserver(function () {
              t.handler()
            })),
            this.observerInst.observe(this.el.node, { attributes: !0 })
        else
          try {
            this.observerInst.disconnect(), delete this.observerInst
          } catch (t) {}
      else
        this.el.off('DOMAttrModified.select'),
          (this.rectSelection.isSelected || this.pointSelection.isSelected) &&
            this.el.on('DOMAttrModified.select', function () {
              t.handler()
            })
    }),
    (We.prototype.cleanup = function () {
      !this.rectSelection.isSelected &&
        this.rectSelection.set &&
        (this.rectSelection.set.each(function () {
          this.remove()
        }),
        this.rectSelection.set.clear(),
        delete this.rectSelection.set),
        !this.pointSelection.isSelected &&
          this.pointSelection.set &&
          (this.pointSelection.set.each(function () {
            this.remove()
          }),
          this.pointSelection.set.clear(),
          delete this.pointSelection.set),
        this.pointSelection.isSelected ||
          this.rectSelection.isSelected ||
          (this.nested.remove(), delete this.nested)
    }),
    SVG.extend(SVG.Element, {
      selectize: function (t, e) {
        return (
          'object' == typeof t && ((e = t), (t = !0)),
          (this.remember('_selectHandler') || new We(this)).init(
            void 0 === t || t,
            e || {}
          ),
          this
        )
      }
    }),
    (SVG.Element.prototype.selectize.defaults = {
      points: ['lt', 'rt', 'rb', 'lb', 't', 'r', 'b', 'l'],
      pointsExclude: [],
      classRect: 'svg_select_boundingRect',
      classPoints: 'svg_select_points',
      pointSize: 7,
      rotationPoint: !0,
      deepSelect: !1,
      pointType: 'circle'
    }),
    (function () {
      ;(function () {
        function e (t) {
          t.remember('_resizeHandler', this),
            (this.el = t),
            (this.parameters = {}),
            (this.lastUpdateCall = null),
            (this.p = t.doc().node.createSVGPoint())
        }
        ;(e.prototype.transformPoint = function (t, e, i) {
          return (
            (this.p.x = t - (this.offset.x - window.pageXOffset)),
            (this.p.y = e - (this.offset.y - window.pageYOffset)),
            this.p.matrixTransform(i || this.m)
          )
        }),
          (e.prototype._extractPosition = function (t) {
            return {
              x: null != t.clientX ? t.clientX : t.touches[0].clientX,
              y: null != t.clientY ? t.clientY : t.touches[0].clientY
            }
          }),
          (e.prototype.init = function (t) {
            var e = this
            if ((this.stop(), 'stop' !== t)) {
              for (var i in ((this.options = {}), this.el.resize.defaults))
                (this.options[i] = this.el.resize.defaults[i]),
                  void 0 !== t[i] && (this.options[i] = t[i])
              this.el.on('lt.resize', function (t) {
                e.resize(t || window.event)
              }),
                this.el.on('rt.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('rb.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('lb.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('t.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('r.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('b.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('l.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('rot.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.el.on('point.resize', function (t) {
                  e.resize(t || window.event)
                }),
                this.update()
            }
          }),
          (e.prototype.stop = function () {
            return (
              this.el.off('lt.resize'),
              this.el.off('rt.resize'),
              this.el.off('rb.resize'),
              this.el.off('lb.resize'),
              this.el.off('t.resize'),
              this.el.off('r.resize'),
              this.el.off('b.resize'),
              this.el.off('l.resize'),
              this.el.off('rot.resize'),
              this.el.off('point.resize'),
              this
            )
          }),
          (e.prototype.resize = function (t) {
            var e = this
            ;(this.m = this.el.node.getScreenCTM().inverse()),
              (this.offset = { x: window.pageXOffset, y: window.pageYOffset })
            var i,
              a = this._extractPosition(t.detail.event)
            switch (
              ((this.parameters = {
                type: this.el.type,
                p: this.transformPoint(a.x, a.y),
                x: t.detail.x,
                y: t.detail.y,
                box: this.el.bbox(),
                rotation: this.el.transform().rotation
              }),
              'text' === this.el.type &&
                (this.parameters.fontSize = this.el.attr()['font-size']),
              void 0 !== t.detail.i &&
                ((i = this.el.array().valueOf()),
                (this.parameters.i = t.detail.i),
                (this.parameters.pointCoords = [
                  i[t.detail.i][0],
                  i[t.detail.i][1]
                ])),
              t.type)
            ) {
              case 'lt':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e)
                  if (
                    0 < this.parameters.box.width - i[0] &&
                    0 < this.parameters.box.height - i[1]
                  ) {
                    if ('text' === this.parameters.type)
                      return (
                        this.el.move(
                          this.parameters.box.x + i[0],
                          this.parameters.box.y
                        ),
                        void this.el.attr(
                          'font-size',
                          this.parameters.fontSize - i[0]
                        )
                      )
                    ;(i = this.checkAspectRatio(i)),
                      this.el
                        .move(
                          this.parameters.box.x + i[0],
                          this.parameters.box.y + i[1]
                        )
                        .size(
                          this.parameters.box.width - i[0],
                          this.parameters.box.height - i[1]
                        )
                  }
                }
                break
              case 'rt':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e, 2)
                  if (
                    0 < this.parameters.box.width + i[0] &&
                    0 < this.parameters.box.height - i[1]
                  ) {
                    if ('text' === this.parameters.type)
                      return (
                        this.el.move(
                          this.parameters.box.x - i[0],
                          this.parameters.box.y
                        ),
                        void this.el.attr(
                          'font-size',
                          this.parameters.fontSize + i[0]
                        )
                      )
                    ;(i = this.checkAspectRatio(i, !0)),
                      this.el
                        .move(
                          this.parameters.box.x,
                          this.parameters.box.y + i[1]
                        )
                        .size(
                          this.parameters.box.width + i[0],
                          this.parameters.box.height - i[1]
                        )
                  }
                }
                break
              case 'rb':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e, 0)
                  if (
                    0 < this.parameters.box.width + i[0] &&
                    0 < this.parameters.box.height + i[1]
                  ) {
                    if ('text' === this.parameters.type)
                      return (
                        this.el.move(
                          this.parameters.box.x - i[0],
                          this.parameters.box.y
                        ),
                        void this.el.attr(
                          'font-size',
                          this.parameters.fontSize + i[0]
                        )
                      )
                    ;(i = this.checkAspectRatio(i)),
                      this.el
                        .move(this.parameters.box.x, this.parameters.box.y)
                        .size(
                          this.parameters.box.width + i[0],
                          this.parameters.box.height + i[1]
                        )
                  }
                }
                break
              case 'lb':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e, 1)
                  if (
                    0 < this.parameters.box.width - i[0] &&
                    0 < this.parameters.box.height + i[1]
                  ) {
                    if ('text' === this.parameters.type)
                      return (
                        this.el.move(
                          this.parameters.box.x + i[0],
                          this.parameters.box.y
                        ),
                        void this.el.attr(
                          'font-size',
                          this.parameters.fontSize - i[0]
                        )
                      )
                    ;(i = this.checkAspectRatio(i, !0)),
                      this.el
                        .move(
                          this.parameters.box.x + i[0],
                          this.parameters.box.y
                        )
                        .size(
                          this.parameters.box.width - i[0],
                          this.parameters.box.height + i[1]
                        )
                  }
                }
                break
              case 't':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e, 2)
                  if (0 < this.parameters.box.height - i[1]) {
                    if ('text' === this.parameters.type) return
                    this.el
                      .move(this.parameters.box.x, this.parameters.box.y + i[1])
                      .height(this.parameters.box.height - i[1])
                  }
                }
                break
              case 'r':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e, 0)
                  if (0 < this.parameters.box.width + i[0]) {
                    if ('text' === this.parameters.type) return
                    this.el
                      .move(this.parameters.box.x, this.parameters.box.y)
                      .width(this.parameters.box.width + i[0])
                  }
                }
                break
              case 'b':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e, 0)
                  if (0 < this.parameters.box.height + i[1]) {
                    if ('text' === this.parameters.type) return
                    this.el
                      .move(this.parameters.box.x, this.parameters.box.y)
                      .height(this.parameters.box.height + i[1])
                  }
                }
                break
              case 'l':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(t, e, 1)
                  if (0 < this.parameters.box.width - i[0]) {
                    if ('text' === this.parameters.type) return
                    this.el
                      .move(this.parameters.box.x + i[0], this.parameters.box.y)
                      .width(this.parameters.box.width - i[0])
                  }
                }
                break
              case 'rot':
                this.calc = function (t, e) {
                  var i = t + this.parameters.p.x,
                    a = e + this.parameters.p.y,
                    s = Math.atan2(
                      this.parameters.p.y -
                        this.parameters.box.y -
                        this.parameters.box.height / 2,
                      this.parameters.p.x -
                        this.parameters.box.x -
                        this.parameters.box.width / 2
                    ),
                    r = Math.atan2(
                      a -
                        this.parameters.box.y -
                        this.parameters.box.height / 2,
                      i - this.parameters.box.x - this.parameters.box.width / 2
                    ),
                    n =
                      this.parameters.rotation +
                      (180 * (r - s)) / Math.PI +
                      this.options.snapToAngle / 2
                  this.el
                    .center(this.parameters.box.cx, this.parameters.box.cy)
                    .rotate(
                      n - (n % this.options.snapToAngle),
                      this.parameters.box.cx,
                      this.parameters.box.cy
                    )
                }
                break
              case 'point':
                this.calc = function (t, e) {
                  var i = this.snapToGrid(
                      t,
                      e,
                      this.parameters.pointCoords[0],
                      this.parameters.pointCoords[1]
                    ),
                    a = this.el.array().valueOf()
                  ;(a[this.parameters.i][0] =
                    this.parameters.pointCoords[0] + i[0]),
                    (a[this.parameters.i][1] =
                      this.parameters.pointCoords[1] + i[1]),
                    this.el.plot(a)
                }
            }
            this.el.fire('resizestart', {
              dx: this.parameters.x,
              dy: this.parameters.y,
              event: t
            }),
              SVG.on(window, 'touchmove.resize', function (t) {
                e.update(t || window.event)
              }),
              SVG.on(window, 'touchend.resize', function () {
                e.done()
              }),
              SVG.on(window, 'mousemove.resize', function (t) {
                e.update(t || window.event)
              }),
              SVG.on(window, 'mouseup.resize', function () {
                e.done()
              })
          }),
          (e.prototype.update = function (t) {
            var e, i, a, s
            t
              ? ((e = this._extractPosition(t)),
                (a =
                  (i = this.transformPoint(e.x, e.y)).x - this.parameters.p.x),
                (s = i.y - this.parameters.p.y),
                (this.lastUpdateCall = [a, s]),
                this.calc(a, s),
                this.el.fire('resizing', { dx: a, dy: s, event: t }))
              : this.lastUpdateCall &&
                this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
          }),
          (e.prototype.done = function () {
            ;(this.lastUpdateCall = null),
              SVG.off(window, 'mousemove.resize'),
              SVG.off(window, 'mouseup.resize'),
              SVG.off(window, 'touchmove.resize'),
              SVG.off(window, 'touchend.resize'),
              this.el.fire('resizedone')
          }),
          (e.prototype.snapToGrid = function (t, e, i, a) {
            var s =
              void 0 !== a
                ? [
                    (i + t) % this.options.snapToGrid,
                    (a + e) % this.options.snapToGrid
                  ]
                : ((i = null == i ? 3 : i),
                  [
                    (this.parameters.box.x +
                      t +
                      (1 & i ? 0 : this.parameters.box.width)) %
                      this.options.snapToGrid,
                    (this.parameters.box.y +
                      e +
                      (2 & i ? 0 : this.parameters.box.height)) %
                      this.options.snapToGrid
                  ])
            return (
              t < 0 && (s[0] -= this.options.snapToGrid),
              e < 0 && (s[1] -= this.options.snapToGrid),
              (t -=
                Math.abs(s[0]) < this.options.snapToGrid / 2
                  ? s[0]
                  : s[0] -
                    (t < 0
                      ? -this.options.snapToGrid
                      : this.options.snapToGrid)),
              (e -=
                Math.abs(s[1]) < this.options.snapToGrid / 2
                  ? s[1]
                  : s[1] -
                    (e < 0
                      ? -this.options.snapToGrid
                      : this.options.snapToGrid)),
              this.constraintToBox(t, e, i, a)
            )
          }),
          (e.prototype.constraintToBox = function (t, e, i, a) {
            var s,
              r = this.options.constraint || {},
              n =
                void 0 !== a
                  ? ((s = i), a)
                  : ((s =
                      this.parameters.box.x +
                      (1 & i ? 0 : this.parameters.box.width)),
                    this.parameters.box.y +
                      (2 & i ? 0 : this.parameters.box.height))
            return (
              void 0 !== r.minX && s + t < r.minX && (t = r.minX - s),
              void 0 !== r.maxX && r.maxX < s + t && (t = r.maxX - s),
              void 0 !== r.minY && n + e < r.minY && (e = r.minY - n),
              void 0 !== r.maxY && r.maxY < n + e && (e = r.maxY - n),
              [t, e]
            )
          }),
          (e.prototype.checkAspectRatio = function (t, e) {
            if (!this.options.saveAspectRatio) return t
            var i = t.slice(),
              a = this.parameters.box.width / this.parameters.box.height,
              s = this.parameters.box.width + t[0],
              r = this.parameters.box.height - t[1],
              n = s / r
            return (
              n < a
                ? ((i[1] = s / a - this.parameters.box.height),
                  e && (i[1] = -i[1]))
                : a < n &&
                  ((i[0] = this.parameters.box.width - r * a),
                  e && (i[0] = -i[0])),
              i
            )
          }),
          SVG.extend(SVG.Element, {
            resize: function (t) {
              return (
                (this.remember('_resizeHandler') || new e(this)).init(t || {}),
                this
              )
            }
          }),
          (SVG.Element.prototype.resize.defaults = {
            snapToAngle: 0.1,
            snapToGrid: 1,
            constraint: {},
            saveAspectRatio: !1
          })
      }.call(this))
    })(),
    (function (t, e) {
      void 0 === e && (e = {})
      var i,
        a,
        s = e.insertAt
      'undefined' != typeof document &&
        ((i = document.head || document.getElementsByTagName('head')[0]),
        ((a = document.createElement('style')).type = 'text/css'),
        'top' === s && i.firstChild
          ? i.insertBefore(a, i.firstChild)
          : i.appendChild(a),
        a.styleSheet
          ? (a.styleSheet.cssText = t)
          : a.appendChild(document.createTextNode(t)))
    })(
      '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-candlestick>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-canvas.apexcharts-zoomable .hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-canvas.apexcharts-zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}'
    ),
    (function () {
      function i (t) {
        var e = t.__resizeTriggers__,
          i = e.firstElementChild,
          a = e.lastElementChild,
          s = i ? i.firstElementChild : null
        a && ((a.scrollLeft = a.scrollWidth), (a.scrollTop = a.scrollHeight)),
          s &&
            ((s.style.width = i.offsetWidth + 1 + 'px'),
            (s.style.height = i.offsetHeight + 1 + 'px')),
          i && ((i.scrollLeft = i.scrollWidth), (i.scrollTop = i.scrollHeight))
      }
      function a (e) {
        var t = this
        i(this),
          this.__resizeRAF__ && n(this.__resizeRAF__),
          (this.__resizeRAF__ = r(function () {
            ;(t.offsetWidth == t.__resizeLast__.width &&
              t.offsetHeight == t.__resizeLast__.height) ||
              ((t.__resizeLast__.width = t.offsetWidth),
              (t.__resizeLast__.height = t.offsetHeight),
              t.__resizeListeners__.forEach(function (t) {
                t.call(e)
              }))
          }))
      }
      var e,
        s,
        r =
          ((e =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (t) {
              return window.setTimeout(t, 20)
            }),
          function (t) {
            return e(t)
          }),
        n =
          ((s =
            window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.clearTimeout),
          function (t) {
            return s(t)
          }),
        t = !1,
        o = 'animationstart',
        l = 'Webkit Moz O ms'.split(' '),
        h =
          'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(
            ' '
          ),
        c = document.createElement('fakeelement')
      if ((void 0 !== c.style.animationName && (t = !0), !1 === t))
        for (var d = 0; d < l.length; d++)
          if (void 0 !== c.style[l[d] + 'AnimationName']) {
            o = h[d]
            break
          }
      ;(window.addResizeListener = function (e, t) {
        e.__resizeTriggers__ ||
          ('static' == getComputedStyle(e).position &&
            (e.style.position = 'relative'),
          (e.__resizeLast__ = {}),
          (e.__resizeListeners__ = []),
          ((e.__resizeTriggers__ = document.createElement('div')).className =
            'resize-triggers'),
          (e.__resizeTriggers__.innerHTML =
            '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>'),
          e.appendChild(e.__resizeTriggers__),
          i(e),
          e.addEventListener('scroll', a, !0),
          o &&
            e.__resizeTriggers__.addEventListener(o, function (t) {
              'resizeanim' == t.animationName && i(e)
            })),
          e.__resizeListeners__.push(t)
      }),
        (window.removeResizeListener = function (t, e) {
          t &&
            (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1),
            t.__resizeListeners__.length ||
              (t.removeEventListener('scroll', a),
              t.__resizeTriggers__.parentNode &&
                (t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__))))
        })
    })(),
    (window.Apex = {})
  var je =
      (n(Ze, [
        {
          key: 'initModules',
          value: function () {
            ;(this.ctx.publicMethods = [
              'updateOptions',
              'updateSeries',
              'appendData',
              'appendSeries',
              'toggleSeries',
              'showSeries',
              'hideSeries',
              'setLocale',
              'resetSeries',
              'zoomX',
              'toggleDataPointSelection',
              'dataURI',
              'addXaxisAnnotation',
              'addYaxisAnnotation',
              'addPointAnnotation',
              'clearAnnotations',
              'removeAnnotation',
              'paper',
              'destroy'
            ]),
              (this.ctx.eventList = [
                'click',
                'mousedown',
                'mousemove',
                'touchstart',
                'touchmove',
                'mouseup',
                'touchend'
              ]),
              (this.ctx.animations = new X(this.ctx)),
              (this.ctx.axes = new ot(this.ctx)),
              (this.ctx.core = new Ht(this.ctx.el, this.ctx)),
              (this.ctx.config = new U({})),
              (this.ctx.data = new $(this.ctx)),
              (this.ctx.grid = new et(this.ctx)),
              (this.ctx.graphics = new Y(this.ctx)),
              (this.ctx.coreUtils = new P(this.ctx)),
              (this.ctx.crosshairs = new lt(this.ctx)),
              (this.ctx.events = new rt(this.ctx)),
              (this.ctx.exports = new K(this.ctx)),
              (this.ctx.localization = new nt(this.ctx)),
              (this.ctx.options = new z()),
              (this.ctx.responsive = new ht(this.ctx)),
              (this.ctx.series = new W(this.ctx)),
              (this.ctx.theme = new ct(this.ctx)),
              (this.ctx.formatters = new J(this.ctx)),
              (this.ctx.titleSubtitle = new dt(this.ctx)),
              (this.ctx.legend = new mt(this.ctx)),
              (this.ctx.toolbar = new vt(this.ctx)),
              (this.ctx.dimensions = new xt(this.ctx)),
              (this.ctx.updateHelpers = new Nt(this.ctx)),
              (this.ctx.zoomPanSelection = new yt(this.ctx)),
              (this.ctx.w.globals.tooltip = new Pt(this.ctx))
          }
        }
      ]),
      Ze),
    Ue =
      (n(qe, [
        {
          key: 'clear',
          value: function () {
            this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(),
              this.ctx.toolbar && this.ctx.toolbar.destroy(),
              (this.ctx.animations = null),
              (this.ctx.axes = null),
              (this.ctx.annotations = null),
              (this.ctx.core = null),
              (this.ctx.data = null),
              (this.ctx.grid = null),
              (this.ctx.series = null),
              (this.ctx.responsive = null),
              (this.ctx.theme = null),
              (this.ctx.formatters = null),
              (this.ctx.titleSubtitle = null),
              (this.ctx.legend = null),
              (this.ctx.dimensions = null),
              (this.ctx.options = null),
              (this.ctx.crosshairs = null),
              (this.ctx.zoomPanSelection = null),
              (this.ctx.updateHelpers = null),
              (this.ctx.toolbar = null),
              (this.ctx.localization = null),
              (this.ctx.w.globals.tooltip = null),
              this.clearDomElements()
          }
        },
        {
          key: 'killSVG',
          value: function (t) {
            t.each(function (t, e) {
              this.removeClass('*'), this.off(), this.stop()
            }, !0),
              t.ungroup(),
              t.clear()
          }
        },
        {
          key: 'clearDomElements',
          value: function () {
            var e = this
            ;(this.w.globals.dom.Paper.node.parentNode.parentNode.style.minHeight =
              'unset'),
              this.ctx.eventList.forEach(function (t) {
                document.removeEventListener(t, e.ctx.events.documentEvent)
              })
            var t = this.w.globals.dom
            if (null !== this.ctx.el)
              for (; this.ctx.el.firstChild; )
                this.ctx.el.removeChild(this.ctx.el.firstChild)
            this.killSVG(t.Paper),
              t.Paper.remove(),
              (t.elWrap = null),
              (t.elGraphical = null),
              (t.elAnnotations = null),
              (t.elLegendWrap = null),
              (t.baseEl = null),
              (t.elGridRect = null),
              (t.elGridRectMask = null),
              (t.elGridRectMarkerMask = null),
              (t.elDefs = null)
          }
        }
      ]),
      qe)
  function qe (t) {
    r(this, qe), (this.ctx = t), (this.w = t.w)
  }
  function Ze (t) {
    r(this, Ze), (this.ctx = t), (this.w = t.w)
  }
  return (
    n(
      $e,
      [
        {
          key: 'render',
          value: function () {
            var s = this
            return new Promise(function (t, e) {
              if (null !== s.el) {
                void 0 === Apex._chartInstances && (Apex._chartInstances = []),
                  s.w.config.chart.id &&
                    Apex._chartInstances.push({
                      id: s.w.globals.chartID,
                      group: s.w.config.chart.group,
                      chart: s
                    }),
                  s.setLocale(s.w.config.chart.defaultLocale)
                var i = s.w.config.chart.events.beforeMount
                'function' == typeof i && i(s, s.w),
                  s.events.fireEvent('beforeMount', [s, s.w]),
                  window.addEventListener('resize', s.windowResizeHandler),
                  window.addResizeListener(
                    s.el.parentNode,
                    s._parentResizeCallback.bind(s)
                  )
                var a = s.create(s.w.config.series, {})
                if (!a) return t(s)
                s.mount(a)
                  .then(function () {
                    'function' == typeof s.w.config.chart.events.mounted &&
                      s.w.config.chart.events.mounted(s, s.w),
                      s.events.fireEvent('mounted', [s, s.w]),
                      t(a)
                  })
                  .catch(function (t) {
                    e(t)
                  })
              } else e(new Error('Element not found'))
            })
          }
        },
        {
          key: 'create',
          value: function (t, e) {
            var i = this.w
            new je(this).initModules()
            var a = this.w.globals
            if (
              ((a.noData = !1),
              (a.animationEnded = !1),
              this.responsive.checkResponsiveConfig(e),
              i.config.xaxis.convertedCatToNumeric &&
                new j(i.config).convertCatToNumericXaxis(i.config, this.ctx),
              null === this.el)
            )
              return (a.animationEnded = !0), null
            if ((this.core.setupElements(), 0 === a.svgWidth))
              return (a.animationEnded = !0), null
            var s = P.checkComboSeries(t)
            ;(a.comboCharts = s.comboCharts),
              (a.comboBarCount = s.comboBarCount)
            var r = t.every(function (t) {
              return t.data && 0 === t.data.length
            })
            ;(0 !== t.length && !r) || this.series.handleNoData(),
              this.events.setupEventHandlers(),
              this.data.parseData(t),
              this.theme.init(),
              new D(this).setGlobalMarkerSize(),
              this.formatters.setLabelFormatters(),
              this.titleSubtitle.draw(),
              (a.noData &&
                a.collapsedSeries.length !== a.series.length &&
                !i.config.legend.showForSingleSeries) ||
                this.legend.init(),
              this.series.hasAllSeriesEqualX(),
              a.axisCharts &&
                (this.core.coreCalculations(),
                'category' !== i.config.xaxis.type &&
                  this.formatters.setLabelFormatters()),
              this.formatters.heatmapLabelFormatters(),
              this.dimensions.plotCoords()
            var n = this.core.xySettings()
            this.grid.createGridMask()
            var o = this.core.plotChartType(t, n),
              l = new N(this)
            l.bringForward(),
              i.config.dataLabels.background.enabled &&
                l.dataLabelsBackground(),
              this.core.shiftGraphPosition()
            var h = {
              plot: {
                left: i.globals.translateX,
                top: i.globals.translateY,
                width: i.globals.gridWidth,
                height: i.globals.gridHeight
              }
            }
            return {
              elGraph: o,
              xyRatios: n,
              elInner: i.globals.dom.elGraphical,
              dimensions: h
            }
          }
        },
        {
          key: 'mount',
          value: function () {
            var o = this,
              l =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              h = this,
              c = h.w
            return new Promise(function (t, e) {
              if (null === h.el)
                return e(
                  new Error(
                    'Not enough data to display or target element not found'
                  )
                )
              ;(null !== l && !c.globals.allSeriesCollapsed) ||
                h.series.handleNoData(),
                h.axes.drawAxis(c.config.chart.type, l.xyRatios),
                (h.grid = new et(h))
              var i = h.grid.drawGrid()
              ;(h.annotations = new F(h)),
                h.annotations.drawShapeAnnos(),
                h.annotations.drawImageAnnos(),
                h.annotations.drawTextAnnos(),
                'back' === c.config.grid.position &&
                  i &&
                  c.globals.dom.elGraphical.add(i.el)
              var a,
                s = new tt(o.ctx),
                r = new st(o.ctx)
              if (
                (null !== i &&
                  (s.xAxisLabelCorrections(i.xAxisTickWidth),
                  r.setYAxisTextAlignments()),
                'back' === c.config.annotations.position &&
                  (c.globals.dom.Paper.add(c.globals.dom.elAnnotations),
                  h.annotations.drawAxesAnnotations()),
                l.elGraph instanceof Array)
              )
                for (var n = 0; n < l.elGraph.length; n++)
                  c.globals.dom.elGraphical.add(l.elGraph[n])
              else c.globals.dom.elGraphical.add(l.elGraph)
              'front' === c.config.grid.position &&
                i &&
                c.globals.dom.elGraphical.add(i.el),
                'front' === c.config.xaxis.crosshairs.position &&
                  h.crosshairs.drawXCrosshairs(),
                'front' === c.config.yaxis[0].crosshairs.position &&
                  h.crosshairs.drawYCrosshairs(),
                'front' === c.config.annotations.position &&
                  (c.globals.dom.Paper.add(c.globals.dom.elAnnotations),
                  h.annotations.drawAxesAnnotations()),
                c.globals.noData ||
                  (c.config.tooltip.enabled &&
                    !c.globals.noData &&
                    h.w.globals.tooltip.drawTooltip(l.xyRatios),
                  c.globals.axisCharts &&
                  (c.globals.isXNumeric || c.config.xaxis.convertedCatToNumeric)
                    ? (c.config.chart.zoom.enabled ||
                        (c.config.chart.selection &&
                          c.config.chart.selection.enabled) ||
                        (c.config.chart.pan && c.config.chart.pan.enabled)) &&
                      h.zoomPanSelection.init({ xyRatios: l.xyRatios })
                    : ((a = c.config.chart.toolbar.tools),
                      [
                        'zoom',
                        'zoomin',
                        'zoomout',
                        'selection',
                        'pan',
                        'reset'
                      ].forEach(function (t) {
                        a[t] = !1
                      })),
                  c.config.chart.toolbar.show &&
                    !c.globals.allSeriesCollapsed &&
                    h.toolbar.createToolbar()),
                0 < c.globals.memory.methodsToExec.length &&
                  c.globals.memory.methodsToExec.forEach(function (t) {
                    t.method(t.params, !1, t.context)
                  }),
                c.globals.axisCharts ||
                  c.globals.noData ||
                  h.core.resizeNonAxisCharts(),
                t(h)
            })
          }
        },
        {
          key: 'destroy',
          value: function () {
            window.removeEventListener('resize', this.windowResizeHandler),
              window.removeResizeListener(
                this.el.parentNode,
                this._parentResizeCallback.bind(this)
              )
            var i = this.w.config.chart.id
            i &&
              Apex._chartInstances.forEach(function (t, e) {
                t.id === i && Apex._chartInstances.splice(e, 1)
              }),
              new Ue(this.ctx).clear()
          }
        },
        {
          key: 'updateOptions',
          value: function (t) {
            var i = this,
              e =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              a =
                !(2 < arguments.length && void 0 !== arguments[2]) ||
                arguments[2],
              s =
                !(3 < arguments.length && void 0 !== arguments[3]) ||
                arguments[3],
              r =
                !(4 < arguments.length && void 0 !== arguments[4]) ||
                arguments[4],
              n = this.w
            return (
              (n.globals.selection = void 0),
              t.series &&
                (this.series.resetSeries(!1, !0, !1),
                t.series.length &&
                  t.series[0].data &&
                  (t.series = t.series.map(function (t, e) {
                    return i.updateHelpers._extendSeries(t, e)
                  })),
                this.updateHelpers.revertDefaultAxisMinMax()),
              t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)),
              t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)),
              0 < n.globals.collapsedSeriesIndices.length &&
                this.series.clearPreviousPaths(),
              t.theme && (t = this.theme.updateThemeOptions(t)),
              this.updateHelpers._updateOptions(t, e, a, s, r)
            )
          }
        },
        {
          key: 'updateSeries',
          value: function () {
            var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                !(2 < arguments.length && void 0 !== arguments[2]) ||
                arguments[2]
            return (
              this.series.resetSeries(!1),
              this.updateHelpers.revertDefaultAxisMinMax(),
              this.updateHelpers._updateSeries(t, e, i)
            )
          }
        },
        {
          key: 'appendSeries',
          value: function (t) {
            var e =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                !(2 < arguments.length && void 0 !== arguments[2]) ||
                arguments[2],
              a = this.w.config.series.slice()
            return (
              a.push(t),
              this.series.resetSeries(!1),
              this.updateHelpers.revertDefaultAxisMinMax(),
              this.updateHelpers._updateSeries(a, e, i)
            )
          }
        },
        {
          key: 'appendData',
          value: function (t) {
            var e =
              !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
            ;(this.w.globals.dataChanged = !0), this.series.getPreviousPaths()
            for (var i = this.w.config.series.slice(), a = 0; a < i.length; a++)
              if (null !== t[a] && void 0 !== t[a])
                for (var s = 0; s < t[a].data.length; s++)
                  i[a].data.push(t[a].data[s])
            return (
              (this.w.config.series = i),
              e &&
                (this.w.globals.initialSeries = I.clone(this.w.config.series)),
              this.update()
            )
          }
        },
        {
          key: 'update',
          value: function (a) {
            var s = this
            return new Promise(function (t, e) {
              new Ue(s.ctx).clear()
              var i = s.create(s.w.config.series, a)
              if (!i) return t(s)
              s.mount(i)
                .then(function () {
                  'function' == typeof s.w.config.chart.events.updated &&
                    s.w.config.chart.events.updated(s, s.w),
                    s.events.fireEvent('updated', [s, s.w]),
                    (s.w.globals.isDirty = !0),
                    t(s)
                })
                .catch(function (t) {
                  e(t)
                })
            })
          }
        },
        {
          key: 'getSyncedCharts',
          value: function () {
            var t = this.getGroupedCharts(),
              e = [this]
            return (
              t.length &&
                ((e = []),
                t.forEach(function (t) {
                  e.push(t)
                })),
              e
            )
          }
        },
        {
          key: 'getGroupedCharts',
          value: function () {
            var e = this
            return Apex._chartInstances
              .filter(function (t) {
                if (t.group) return !0
              })
              .map(function (t) {
                return e.w.config.chart.group === t.group ? t.chart : e
              })
          }
        },
        {
          key: 'toggleSeries',
          value: function (t) {
            return this.series.toggleSeries(t)
          }
        },
        {
          key: 'showSeries',
          value: function (t) {
            this.series.showSeries(t)
          }
        },
        {
          key: 'hideSeries',
          value: function (t) {
            this.series.hideSeries(t)
          }
        },
        {
          key: 'resetSeries',
          value: function () {
            var t =
                !(0 < arguments.length && void 0 !== arguments[0]) ||
                arguments[0],
              e =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1]
            this.series.resetSeries(t, e)
          }
        },
        {
          key: 'addEventListener',
          value: function (t, e) {
            this.events.addEventListener(t, e)
          }
        },
        {
          key: 'removeEventListener',
          value: function (t, e) {
            this.events.removeEventListener(t, e)
          }
        },
        {
          key: 'addXaxisAnnotation',
          value: function (t) {
            var e =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0,
              a = i || this
            a.annotations.addXaxisAnnotationExternal(t, e, a)
          }
        },
        {
          key: 'addYaxisAnnotation',
          value: function (t) {
            var e =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0,
              a = i || this
            a.annotations.addYaxisAnnotationExternal(t, e, a)
          }
        },
        {
          key: 'addPointAnnotation',
          value: function (t) {
            var e =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0,
              a = i || this
            a.annotations.addPointAnnotationExternal(t, e, a)
          }
        },
        {
          key: 'clearAnnotations',
          value: function () {
            var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : void 0,
              e = t || this
            e.annotations.clearAnnotations(e)
          }
        },
        {
          key: 'removeAnnotation',
          value: function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0,
              i = e || this
            i.annotations.removeAnnotation(i, t)
          }
        },
        {
          key: 'getChartArea',
          value: function () {
            return this.w.globals.dom.baseEl.querySelector('.apexcharts-inner')
          }
        },
        {
          key: 'getSeriesTotalXRange',
          value: function (t, e) {
            return this.coreUtils.getSeriesTotalsXRange(t, e)
          }
        },
        {
          key: 'getHighestValueInSeries',
          value: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
            return new at(this.ctx).getMinYMaxY(t).highestY
          }
        },
        {
          key: 'getLowestValueInSeries',
          value: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
            return new at(this.ctx).getMinYMaxY(t).lowestY
          }
        },
        {
          key: 'getSeriesTotal',
          value: function () {
            return this.w.globals.seriesTotals
          }
        },
        {
          key: 'toggleDataPointSelection',
          value: function (t, e) {
            return this.updateHelpers.toggleDataPointSelection(t, e)
          }
        },
        {
          key: 'zoomX',
          value: function (t, e) {
            this.ctx.toolbar.zoomUpdateOptions(t, e)
          }
        },
        {
          key: 'setLocale',
          value: function (t) {
            this.localization.setCurrentLocaleValues(t)
          }
        },
        {
          key: 'dataURI',
          value: function () {
            return new K(this.ctx).dataURI()
          }
        },
        {
          key: 'paper',
          value: function () {
            return this.w.globals.dom.Paper
          }
        },
        {
          key: '_parentResizeCallback',
          value: function () {
            !this.w.globals.noData &&
              this.w.globals.animationEnded &&
              this.w.config.chart.redrawOnParentResize &&
              this._windowResize()
          }
        },
        {
          key: '_windowResize',
          value: function () {
            var t = this
            clearTimeout(this.w.globals.resizeTimer),
              (this.w.globals.resizeTimer = window.setTimeout(function () {
                ;(t.w.globals.resized = !0),
                  (t.w.globals.dataChanged = !1),
                  t.ctx.update()
              }, 150))
          }
        }
      ],
      [
        {
          key: 'getChartByID',
          value: function (e) {
            var t = Apex._chartInstances.filter(function (t) {
              return t.id === e
            })[0]
            return t && t.chart
          }
        },
        {
          key: 'initOnLoad',
          value: function () {
            for (
              var t = document.querySelectorAll('[data-apexcharts]'), e = 0;
              e < t.length;
              e++
            )
              new $e(
                t[e],
                JSON.parse(t[e].getAttribute('data-options'))
              ).render()
          }
        },
        {
          key: 'exec',
          value: function (t, e) {
            var i = this.getChartByID(t)
            if (i) {
              i.w.globals.isExecCalled = !0
              var a = null
              if (-1 !== i.publicMethods.indexOf(e)) {
                for (
                  var s = arguments.length,
                    r = new Array(2 < s ? s - 2 : 0),
                    n = 2;
                  n < s;
                  n++
                )
                  r[n - 2] = arguments[n]
                a = i[e].apply(i, r)
              }
              return a
            }
          }
        },
        {
          key: 'merge',
          value: function (t, e) {
            return I.extend(t, e)
          }
        }
      ]
    ),
    $e
  )
  function $e (t, e) {
    r(this, $e),
      (this.opts = e),
      ((this.ctx = this).w = new Z(e).init()),
      (this.el = t),
      (this.w.globals.cuid = I.randomId()),
      (this.w.globals.chartID = this.w.config.chart.id
        ? this.w.config.chart.id
        : this.w.globals.cuid),
      new je(this).initModules(),
      (this.create = I.bind(this.create, this)),
      (this.windowResizeHandler = this._windowResize.bind(this))
  }
})
