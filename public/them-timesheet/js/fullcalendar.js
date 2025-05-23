!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(exports)
        : 'function' == typeof define && define.amd
        ? define(['exports'], t)
        : t(((e = e || self).FullCalendar = {}))
})(this, function (e) {
    'use strict'
    var o = { className: !0, colSpan: !0, rowSpan: !0 },
        t = { '<tr': 'tbody', '<td': 'tr' }
    function s (e, t, n) {
        var r = document.createElement(e)
        if (t)
            for (var i in t)
                'style' === i
                    ? f(r, t[i])
                    : o[i]
                    ? (r[i] = t[i])
                    : r.setAttribute(i, t[i])
        return (
            'string' == typeof n ? (r.innerHTML = n) : null != n && b(r, n), r
        )
    }
    function E (e) {
        e = e.trim()
        var t = document.createElement(n(e))
        return (t.innerHTML = e), t.firstChild
    }
    function a (e) {
        return Array.prototype.slice.call(
            (function (e) {
                e = e.trim()
                var t = document.createElement(n(e))
                return (t.innerHTML = e), t.childNodes
            })(e)
        )
    }
    function n (e) {
        return t[e.substr(0, 3)] || 'div'
    }
    function b (e, t) {
        for (var n = l(t), r = 0; r < n.length; r++) e.appendChild(n[r])
    }
    function m (e, t) {
        for (var n = l(t), r = e.firstChild || null, i = 0; i < n.length; i++)
            e.insertBefore(n[i], r)
    }
    function l (e) {
        var t =
            'string' == typeof e
                ? a(e)
                : e instanceof Node
                ? [e]
                : Array.prototype.slice.call(e)
        return t
    }
    function r (e) {
        e.parentNode && e.parentNode.removeChild(e)
    }
    var i =
            Element.prototype.matches ||
            Element.prototype.matchesSelector ||
            Element.prototype.msMatchesSelector,
        d =
            Element.prototype.closest ||
            function (e) {
                var t = this
                if (!document.documentElement.contains(t)) return null
                do {
                    if (u(t, e)) return t
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType)
                return null
            }
    function c (e, t) {
        return d.call(e, t)
    }
    function u (e, t) {
        return i.call(e, t)
    }
    function p (e, t) {
        for (
            var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0;
            i < n.length;
            i++
        )
            for (var o = n[i].querySelectorAll(t), s = 0; s < o.length; s++)
                r.push(o[s])
        return r
    }
    var h = /(top|left|right|bottom|width|height)$/i
    function f (e, t) {
        for (var n in t) v(e, n, t[n])
    }
    function v (e, t, n) {
        null == n
            ? (e.style[t] = '')
            : 'number' == typeof n && h.test(t)
            ? (e.style[t] = n + 'px')
            : (e.style[t] = n)
    }
    function g (e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        }
        return n.left < n.right && n.top < n.bottom && n
    }
    var y = null
    function S () {
        return (
            null === y &&
                (y = (function () {
                    var e = s(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                top: -1e3,
                                left: 0,
                                border: 0,
                                padding: 0,
                                overflow: 'scroll',
                                direction: 'rtl'
                            }
                        },
                        '<div></div>'
                    )
                    document.body.appendChild(e)
                    var t =
                        e.firstChild.getBoundingClientRect().left >
                        e.getBoundingClientRect().left
                    return r(e), t
                })()),
            y
        )
    }
    function w (e) {
        return (e = Math.max(0, e)), (e = Math.round(e))
    }
    function D (e, t) {
        void 0 === t && (t = !1)
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            i = parseInt(n.borderRightWidth, 10) || 0,
            o = parseInt(n.borderTopWidth, 10) || 0,
            s = parseInt(n.borderBottomWidth, 10) || 0,
            a = w(e.offsetWidth - e.clientWidth - r - i),
            l = {
                borderLeft: r,
                borderRight: i,
                borderTop: o,
                borderBottom: s,
                scrollbarBottom: w(e.offsetHeight - e.clientHeight - o - s),
                scrollbarLeft: 0,
                scrollbarRight: 0
            }
        return (
            S() && 'rtl' === n.direction
                ? (l.scrollbarLeft = a)
                : (l.scrollbarRight = a),
            t &&
                ((l.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
                (l.paddingRight = parseInt(n.paddingRight, 10) || 0),
                (l.paddingTop = parseInt(n.paddingTop, 10) || 0),
                (l.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
            l
        )
    }
    function T (e, t) {
        void 0 === t && (t = !1)
        var n = C(e),
            r = D(e, t),
            i = {
                left: n.left + r.borderLeft + r.scrollbarLeft,
                right: n.right - r.borderRight - r.scrollbarRight,
                top: n.top + r.borderTop,
                bottom: n.bottom - r.borderBottom - r.scrollbarBottom
            }
        return (
            t &&
                ((i.left += r.paddingLeft),
                (i.right -= r.paddingRight),
                (i.top += r.paddingTop),
                (i.bottom -= r.paddingBottom)),
            i
        )
    }
    function C (e) {
        var t = e.getBoundingClientRect()
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset
        }
    }
    function R (e) {
        return e.getBoundingClientRect().height + I(e)
    }
    function I (e) {
        var t = window.getComputedStyle(e)
        return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
    }
    function k (e) {
        for (var t = []; e instanceof HTMLElement; ) {
            var n = window.getComputedStyle(e)
            if ('fixed' === n.position) break
            ;/(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) &&
                t.push(e),
                (e = e.parentNode)
        }
        return t
    }
    function x (e) {
        e.preventDefault()
    }
    function M (e, t, n, r) {
        function i (e) {
            var t = c(e.target, n)
            t && r.call(t, e, t)
        }
        return (
            e.addEventListener(t, i),
            function () {
                e.removeEventListener(t, i)
            }
        )
    }
    var P = [
        'webkitTransitionEnd',
        'otransitionend',
        'oTransitionEnd',
        'msTransitionEnd',
        'transitionend'
    ]
    var H = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    function _ (e, t) {
        var n = A(e)
        return (n[2] += t), W(n)
    }
    function O (e, t) {
        var n = A(e)
        return (n[6] += t), W(n)
    }
    function z (e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }
    function N (e, t) {
        var n = V(e),
            r = V(t)
        return {
            years: 0,
            months: 0,
            days: Math.round(z(n, r)),
            milliseconds:
                t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
        }
    }
    function L (e, t) {
        var n = B(e, t)
        return null !== n && n % 7 == 0 ? n / 7 : null
    }
    function B (e, t) {
        return Z(e) === Z(t) ? Math.round(z(e, t)) : null
    }
    function V (e) {
        return W([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }
    function F (e, t, n, r) {
        var i,
            o,
            s = W([
                t,
                0,
                1 +
                    ((-(7 + W([t, 0, (o = 7 + (i = n) - r)]).getUTCDay() - i) %
                        7) +
                        o -
                        1)
            ]),
            a = V(e),
            l = Math.round(z(s, a))
        return Math.floor(l / 7) + 1
    }
    function G (e) {
        return [
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
        ]
    }
    function U (e) {
        return new Date(
            e[0],
            e[1] || 0,
            null == e[2] ? 1 : e[2],
            e[3] || 0,
            e[4] || 0,
            e[5] || 0
        )
    }
    function A (e) {
        return [
            e.getUTCFullYear(),
            e.getUTCMonth(),
            e.getUTCDate(),
            e.getUTCHours(),
            e.getUTCMinutes(),
            e.getUTCSeconds(),
            e.getUTCMilliseconds()
        ]
    }
    function W (e) {
        return (
            1 === e.length && (e = e.concat([0])),
            new Date(Date.UTC.apply(Date, e))
        )
    }
    function j (e) {
        return !isNaN(e.valueOf())
    }
    function Z (e) {
        return (
            1e3 * e.getUTCHours() * 60 * 60 +
            1e3 * e.getUTCMinutes() * 60 +
            1e3 * e.getUTCSeconds() +
            e.getUTCMilliseconds()
        )
    }
    var q = ['years', 'months', 'days', 'milliseconds'],
        Y = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/
    function X (e, t) {
        var n
        return 'string' == typeof e
            ? (function (e) {
                  var t = Y.exec(e)
                  if (t) {
                      var n = t[1] ? -1 : 1
                      return {
                          years: 0,
                          months: 0,
                          days: n * (t[2] ? parseInt(t[2], 10) : 0),
                          milliseconds:
                              n *
                              (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                                  60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                                  1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                                  (t[6] ? parseInt(t[6], 10) : 0))
                      }
                  }
                  return null
              })(e)
            : 'object' == typeof e && e
            ? K(e)
            : 'number' == typeof e
            ? K((((n = {})[t || 'milliseconds'] = e), n))
            : null
    }
    function K (e) {
        return {
            years: e.years || e.year || 0,
            months: e.months || e.month || 0,
            days: (e.days || e.day || 0) + 7 * J(e),
            milliseconds:
                60 * (e.hours || e.hour || 0) * 60 * 1e3 +
                60 * (e.minutes || e.minute || 0) * 1e3 +
                1e3 * (e.seconds || e.second || 0) +
                (e.milliseconds || e.millisecond || e.ms || 0)
        }
    }
    function J (e) {
        return e.weeks || e.week || 0
    }
    function Q (e, t) {
        return (
            e.years === t.years &&
            e.months === t.months &&
            e.days === t.days &&
            e.milliseconds === t.milliseconds
        )
    }
    function $ (e) {
        return ee(e) / 864e5
    }
    function ee (e) {
        return (
            31536e6 * e.years +
            2592e6 * e.months +
            864e5 * e.days +
            e.milliseconds
        )
    }
    function te (e, t) {
        var n = e.milliseconds
        if (n) {
            if (n % 1e3 != 0) return { unit: 'millisecond', value: n }
            if (n % 6e4 != 0) return { unit: 'second', value: n / 1e3 }
            if (n % 36e5 != 0) return { unit: 'minute', value: n / 6e4 }
            if (n) return { unit: 'hour', value: n / 36e5 }
        }
        return e.days
            ? t || e.days % 7 != 0
                ? { unit: 'day', value: e.days }
                : { unit: 'week', value: e.days / 7 }
            : e.months
            ? { unit: 'month', value: e.months }
            : e.years
            ? { unit: 'year', value: e.years }
            : { unit: 'millisecond', value: 0 }
    }
    function ne (e) {
        e.forEach(function (e) {
            e.style.height = ''
        })
    }
    function re (e) {
        var t,
            n,
            r = [],
            i = []
        for (
            'string' == typeof e
                ? (i = e.split(/\s*,\s*/))
                : 'function' == typeof e
                ? (i = [e])
                : Array.isArray(e) && (i = e),
                t = 0;
            t < i.length;
            t++
        )
            'string' == typeof (n = i[t])
                ? r.push(
                      '-' === n.charAt(0)
                          ? { field: n.substring(1), order: -1 }
                          : { field: n, order: 1 }
                  )
                : 'function' == typeof n && r.push({ func: n })
        return r
    }
    function ie (e, t, n) {
        for (var r, i = 0; i < n.length; i++) if ((r = oe(e, t, n[i]))) return r
        return 0
    }
    function oe (e, t, n) {
        return n.func
            ? n.func(e, t)
            : se(e[n.field], t[n.field]) * (n.order || 1)
    }
    function se (e, t) {
        return e || t
            ? null == t
                ? -1
                : null == e
                ? 1
                : 'string' == typeof e || 'string' == typeof t
                ? String(e).localeCompare(String(t))
                : e - t
            : 0
    }
    function ae (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function le (e, t) {
        var n = String(e)
        return '000'.substr(0, t - n.length) + n
    }
    function de (e) {
        return e % 1 == 0
    }
    function ce (e, t, n) {
        if (('function' == typeof e && (e = [e]), e)) {
            for (var r = void 0, i = void 0, r = 0; r < e.length; r++)
                i = e[r].apply(t, n) || i
            return i
        }
    }
    function ue () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        for (var n = 0; n < e.length; n++) if (void 0 !== e[n]) return e[n]
    }
    function pe (t, n) {
        var r,
            i,
            o,
            s,
            a,
            l = function () {
                var e = new Date().valueOf() - s
                e < n
                    ? (r = setTimeout(l, n - e))
                    : ((r = null), (a = t.apply(o, i)), (o = i = null))
            }
        return function () {
            return (
                (o = this),
                (i = arguments),
                (s = new Date().valueOf()),
                (r = r || setTimeout(l, n)),
                a
            )
        }
    }
    function he (e, t, n, r) {
        void 0 === n && (n = {})
        var i = {}
        for (var o in t) {
            var s = t[o]
            void 0 !== e[o]
                ? s === Function
                    ? (i[o] = 'function' == typeof e[o] ? e[o] : null)
                    : (i[o] = s ? s(e[o]) : e[o])
                : void 0 !== n[o]
                ? (i[o] = n[o])
                : s === String
                ? (i[o] = '')
                : s && s !== Number && s !== Boolean && s !== Function
                ? (i[o] = s(null))
                : (i[o] = null)
        }
        if (r) for (var o in e) void 0 === t[o] && (r[o] = e[o])
        return i
    }
    function fe (e) {
        var t = Math.floor(z(e.start, e.end)) || 1,
            n = V(e.start)
        return { start: n, end: _(n, t) }
    }
    function ve (e, t) {
        void 0 === t && (t = X(0))
        var n,
            r = null,
            i = null
        return (
            e.end &&
                ((i = V(e.end)),
                (n = e.end.valueOf() - i.valueOf()) &&
                    n >= ee(t) &&
                    (i = _(i, 1))),
            e.start && ((r = V(e.start)), i && i <= r && (i = _(r, 1))),
            { start: r, end: i }
        )
    }
    function ge (e, t, n, r) {
        return 'year' === r
            ? X(n.diffWholeYears(e, t), 'year')
            : 'month' === r
            ? X(n.diffWholeMonths(e, t), 'month')
            : N(e, t)
    }
    var me = function (e, t) {
        return (me =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t
                }) ||
            function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }
    function ye (e, t) {
        function n () {
            this.constructor = e
        }
        me(e, t),
            (e.prototype =
                null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()))
    }
    var Se = function () {
        return (Se =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, i) &&
                            (e[i] = t[i])
                return e
            }).apply(this, arguments)
    }
    var Ee = Object.prototype.hasOwnProperty
    function be (e, t) {
        var n,
            r,
            i,
            o,
            s,
            a,
            l = {}
        if (t)
            for (n = 0; n < t.length; n++) {
                for (r = t[n], i = [], o = e.length - 1; 0 <= o; o--)
                    if ('object' == typeof (s = e[o][r]) && s) i.unshift(s)
                    else if (void 0 !== s) {
                        l[r] = s
                        break
                    }
                i.length && (l[r] = be(i))
            }
        for (n = e.length - 1; 0 <= n; n--)
            for (r in (a = e[n])) r in l || (l[r] = a[r])
        return l
    }
    function we (e, t) {
        var n = {}
        for (var r in e) t(e[r], r) && (n[r] = e[r])
        return n
    }
    function De (e, t) {
        var n = {}
        for (var r in e) n[r] = t(e[r], r)
        return n
    }
    function Te (e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0
        }
        return t
    }
    function Ce (e) {
        var t = []
        for (var n in e) t.push(e[n])
        return t
    }
    function Re (e, t) {
        for (var n in e) if (Ee.call(e, n) && !(n in t)) return !1
        for (var n in t) if (Ee.call(t, n) && e[n] !== t[n]) return !1
        return !0
    }
    function Ie (e, t, n, r) {
        for (var i = He(), o = 0, s = e; o < s.length; o++) {
            var a = Gt(s[o], t, n, r)
            a && ke(a, i)
        }
        return i
    }
    function ke (e, t) {
        return (
            void 0 === t && (t = He()),
            (t.defs[e.def.defId] = e.def),
            e.instance && (t.instances[e.instance.instanceId] = e.instance),
            t
        )
    }
    function xe (e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            d = n.dateEnv,
            c = e.defs,
            u = we((u = e.instances), function (e) {
                return !c[e.defId].recurringDef
            })
        for (var p in c) {
            var h = c[p]
            if (h.recurringDef)
                for (
                    var f =
                            (f = h.recurringDef.duration) ||
                            (h.allDay
                                ? n.defaultAllDayEventDuration
                                : n.defaultTimedEventDuration),
                        v = 0,
                        g =
                            ((r = h),
                            (i = f),
                            (o = t),
                            (s = n.dateEnv),
                            (a = n.pluginSystem.hooks.recurringTypes),
                            (l = void 0),
                            (l = a[r.recurringDef.typeId].expand(
                                r.recurringDef.typeData,
                                { start: s.subtract(o.start, i), end: o.end },
                                s
                            )),
                            r.allDay && (l = l.map(V)),
                            l);
                    v < g.length;
                    v++
                ) {
                    var m = g[v],
                        y = At(p, { start: m, end: d.add(m, f) })
                    u[y.instanceId] = y
                }
        }
        return { defs: c, instances: u }
    }
    function Me (e, t) {
        var n = e.instances[t]
        if (n) {
            var r = e.defs[n.defId],
                i = Oe(e, function (e) {
                    return (
                        (t = r),
                        (n = e),
                        Boolean(t.groupId && t.groupId === n.groupId)
                    )
                    var t, n
                })
            return (i.defs[r.defId] = r), (i.instances[n.instanceId] = n), i
        }
        return He()
    }
    function Pe (e, t) {
        var n
        if (t) {
            n = []
            for (var r = 0, i = e; r < i.length; r++) {
                var o = i[r],
                    s = t(o)
                s ? n.push(s) : null == s && n.push(o)
            }
        } else n = e
        return n
    }
    function He () {
        return { defs: {}, instances: {} }
    }
    function _e (e, t) {
        return {
            defs: Se({}, e.defs, t.defs),
            instances: Se({}, e.instances, t.instances)
        }
    }
    function Oe (e, t) {
        var n = we(e.defs, t),
            r = we(e.instances, function (e) {
                return n[e.defId]
            })
        return { defs: n, instances: r }
    }
    function ze (e, t) {
        var n,
            r,
            i = [],
            o = t.start
        for (e.sort(Ne), n = 0; n < e.length; n++)
            (r = e[n]).start > o && i.push({ start: o, end: r.start }),
                r.end > o && (o = r.end)
        return o < t.end && i.push({ start: o, end: t.end }), i
    }
    function Ne (e, t) {
        return e.start.valueOf() - t.start.valueOf()
    }
    function Le (e, t) {
        var n = e.start,
            r = e.end,
            i = null
        return (
            null !== t.start &&
                (n =
                    null === n
                        ? t.start
                        : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
            null != t.end &&
                (r =
                    null === r
                        ? t.end
                        : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
            (null === n || null === r || n < r) && (i = { start: n, end: r }),
            i
        )
    }
    function Be (e, t) {
        return (
            (null === e.start ? null : e.start.valueOf()) ===
                (null === t.start ? null : t.start.valueOf()) &&
            (null === e.end ? null : e.end.valueOf()) ===
                (null === t.end ? null : t.end.valueOf())
        )
    }
    function Ve (e, t) {
        return (
            (null === e.end || null === t.start || e.end > t.start) &&
            (null === e.start || null === t.end || e.start < t.end)
        )
    }
    function Fe (e, t) {
        return (
            (null === e.start || (null !== t.start && t.start >= e.start)) &&
            (null === e.end || (null !== t.end && t.end <= e.end))
        )
    }
    function Ge (e, t) {
        return (
            (null === e.start || t >= e.start) && (null === e.end || t < e.end)
        )
    }
    function Ue (e, t) {
        var n,
            r = e.length
        if (r !== t.length) return !1
        for (n = 0; n < r; n++) if (e[n] !== t[n]) return !1
        return !0
    }
    function Ae (e) {
        var t, n
        return function () {
            return (
                (t && Ue(t, arguments)) ||
                    ((t = arguments), (n = e.apply(this, arguments))),
                n
            )
        }
    }
    function We (t, n) {
        var r = null
        return function () {
            var e = t.apply(this, arguments)
            return (null !== r && (r === e || n(r, e))) || (r = e), r
        }
    }
    var je = {
            week: 3,
            separator: 0,
            omitZeroMinute: 0,
            meridiem: 0,
            omitCommas: 0
        },
        Ze = {
            timeZoneName: 7,
            era: 6,
            year: 5,
            month: 4,
            day: 2,
            weekday: 2,
            hour: 1,
            minute: 1,
            second: 1
        },
        qe = /\s*([ap])\.?m\.?/i,
        Ye = /,/g,
        Xe = /\s+/g,
        Ke = /\u200e/g,
        Je = /UTC|GMT/,
        Qe =
            (($e.prototype.format = function (e, t) {
                return this.buildFormattingFunc(
                    this.standardDateProps,
                    this.extendedSettings,
                    t
                )(e)
            }),
            ($e.prototype.formatRange = function (e, t, n) {
                var r,
                    i,
                    o,
                    s = this.standardDateProps,
                    a = this.extendedSettings,
                    l =
                        ((r = e.marker),
                        (i = t.marker),
                        (o = n.calendarSystem).getMarkerYear(r) ===
                        o.getMarkerYear(i)
                            ? o.getMarkerMonth(r) === o.getMarkerMonth(i)
                                ? o.getMarkerDay(r) === o.getMarkerDay(i)
                                    ? Z(r) === Z(i)
                                        ? 0
                                        : 1
                                    : 2
                                : 4
                            : 5)
                if (!l) return this.format(e, n)
                var d = l
                !(1 < d) ||
                    ('numeric' !== s.year && '2-digit' !== s.year) ||
                    ('numeric' !== s.month && '2-digit' !== s.month) ||
                    ('numeric' !== s.day && '2-digit' !== s.day) ||
                    (d = 1)
                var c = this.format(e, n),
                    u = this.format(t, n)
                if (c === u) return c
                var p = et(
                        (function (e, t) {
                            var n = {}
                            for (var r in e)
                                (r in Ze && !(Ze[r] <= t)) || (n[r] = e[r])
                            return n
                        })(s, d),
                        a,
                        n
                    ),
                    h = p(e),
                    f = p(t),
                    v = (function (e, t, n, r) {
                        for (var i = 0; i < e.length; ) {
                            var o = e.indexOf(t, i)
                            if (-1 === o) break
                            var s = e.substr(0, o)
                            i = o + t.length
                            for (var a = e.substr(i), l = 0; l < n.length; ) {
                                var d = n.indexOf(r, l)
                                if (-1 === d) break
                                var c = n.substr(0, d)
                                l = d + r.length
                                var u = n.substr(l)
                                if (s === c && a === u)
                                    return { before: s, after: a }
                            }
                        }
                        return null
                    })(c, h, u, f),
                    g = a.separator || ''
                return v ? v.before + h + g + f + v.after : c + g + u
            }),
            ($e.prototype.getLargestUnit = function () {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return 'year'
                    case 4:
                        return 'month'
                    case 3:
                        return 'week'
                    default:
                        return 'day'
                }
            }),
            $e)
    function $e (e) {
        var t = {},
            n = {},
            r = 0
        for (var i in e)
            i in je
                ? ((n[i] = e[i]), (r = Math.max(je[i], r)))
                : ((t[i] = e[i]), i in Ze && (r = Math.max(Ze[i], r)))
        ;(this.standardDateProps = t),
            (this.extendedSettings = n),
            (this.severity = r),
            (this.buildFormattingFunc = Ae(et))
    }
    function et (e, t, n) {
        var r = Object.keys(e).length
        return 1 === r && 'short' === e.timeZoneName
            ? function (e) {
                  return st(e.timeZoneOffset)
              }
            : 0 === r && t.week
            ? function (e) {
                  return (function (e, t, n, r) {
                      var i = []
                      'narrow' === r
                          ? i.push(t)
                          : 'short' === r && i.push(t, ' ')
                      i.push(n.simpleNumberFormat.format(e)),
                          n.options.isRtl && i.reverse()
                      return i.join('')
                  })(
                      n.computeWeekNumber(e.marker),
                      n.weekLabel,
                      n.locale,
                      t.week
                  )
              }
            : (function (r, i, o) {
                  ;(r = Se({}, r)),
                      (i = Se({}, i)),
                      (function (e, t) {
                          e.timeZoneName &&
                              (e.hour || (e.hour = '2-digit'),
                              e.minute || (e.minute = '2-digit'))
                          'long' === e.timeZoneName &&
                              (e.timeZoneName = 'short')
                          t.omitZeroMinute &&
                              (e.second || e.millisecond) &&
                              delete t.omitZeroMinute
                      })(r, i),
                      (r.timeZone = 'UTC')
                  var s,
                      a = new Intl.DateTimeFormat(o.locale.codes, r)
                  {
                      var e
                      i.omitZeroMinute &&
                          (delete (e = Se({}, r)).minute,
                          (s = new Intl.DateTimeFormat(o.locale.codes, e)))
                  }
                  return function (e) {
                      var t = e.marker,
                          n = s && !t.getUTCMinutes() ? s : a
                      return (function (e, t, n, r, i) {
                          ;(e = e.replace(Ke, '')),
                              'short' === n.timeZoneName &&
                                  (e = (function (e, t) {
                                      var n = !1
                                      ;(e = e.replace(Je, function () {
                                          return (n = !0), t
                                      })),
                                          n || (e += ' ' + t)
                                      return e
                                  })(
                                      e,
                                      'UTC' === i.timeZone ||
                                          null == t.timeZoneOffset
                                          ? 'UTC'
                                          : st(t.timeZoneOffset)
                                  ))
                          r.omitCommas && (e = e.replace(Ye, '').trim())
                          r.omitZeroMinute && (e = e.replace(':00', ''))
                          !1 === r.meridiem
                              ? (e = e.replace(qe, '').trim())
                              : 'narrow' === r.meridiem
                              ? (e = e.replace(qe, function (e, t) {
                                    return t.toLocaleLowerCase()
                                }))
                              : 'short' === r.meridiem
                              ? (e = e.replace(qe, function (e, t) {
                                    return t.toLocaleLowerCase() + 'm'
                                }))
                              : 'lowercase' === r.meridiem &&
                                (e = e.replace(qe, function (e) {
                                    return e.toLocaleLowerCase()
                                }))
                          return (e = (e = e.replace(Xe, ' ')).trim())
                      })(n.format(t), e, r, i, o)
                  }
              })(e, t, n)
    }
    var tt =
        ((nt.prototype.format = function (e, t) {
            return t.cmdFormatter(this.cmdStr, at(e, null, t, this.separator))
        }),
        (nt.prototype.formatRange = function (e, t, n) {
            return n.cmdFormatter(this.cmdStr, at(e, t, n, this.separator))
        }),
        nt)
    function nt (e, t) {
        ;(this.cmdStr = e), (this.separator = t)
    }
    var rt =
        ((it.prototype.format = function (e, t) {
            return this.func(at(e, null, t))
        }),
        (it.prototype.formatRange = function (e, t, n) {
            return this.func(at(e, t, n))
        }),
        it)
    function it (e) {
        this.func = e
    }
    function ot (e, t) {
        return 'object' == typeof e && e
            ? ('string' == typeof t && (e = Se({ separator: t }, e)), new Qe(e))
            : 'string' == typeof e
            ? new tt(e, t)
            : 'function' == typeof e
            ? new rt(e)
            : void 0
    }
    function st (e, t) {
        void 0 === t && (t = !1)
        var n = e < 0 ? '-' : '+',
            r = Math.abs(e),
            i = Math.floor(r / 60),
            o = Math.round(r % 60)
        return t
            ? n + le(i, 2) + ':' + le(o, 2)
            : 'GMT' + n + i + (o ? ':' + le(o, 2) : '')
    }
    function at (e, t, n, r) {
        var i = lt(e, n.calendarSystem)
        return {
            date: i,
            start: i,
            end: t ? lt(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            separator: r
        }
    }
    function lt (e, t) {
        var n = t.markerToArray(e.marker)
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6]
        }
    }
    var dt =
        ((ct.prototype.remove = function () {
            this.calendar.dispatch({
                type: 'REMOVE_EVENT_SOURCE',
                sourceId: this.internalEventSource.sourceId
            })
        }),
        (ct.prototype.refetch = function () {
            this.calendar.dispatch({
                type: 'FETCH_EVENT_SOURCES',
                sourceIds: [this.internalEventSource.sourceId]
            })
        }),
        Object.defineProperty(ct.prototype, 'id', {
            get: function () {
                return this.internalEventSource.publicId
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(ct.prototype, 'url', {
            get: function () {
                return this.internalEventSource.meta.url
            },
            enumerable: !0,
            configurable: !0
        }),
        ct)
    function ct (e, t) {
        ;(this.calendar = e), (this.internalEventSource = t)
    }
    var ut =
        ((pt.prototype.setProp = function (e, t) {
            var n, r, i
            e in Vt ||
                (e in Bt
                    ? ('function' == typeof Bt[e] && (t = Bt[e](t)),
                      this.mutate({ standardProps: (((n = {})[e] = t), n) }))
                    : e in Ht &&
                      ((i = void 0),
                      'function' == typeof Ht[e] && (t = Ht[e](t)),
                      (i =
                          'color' === e
                              ? { backgroundColor: t, borderColor: t }
                              : 'editable' === e
                              ? { startEditable: t, durationEditable: t }
                              : (((r = {})[e] = t), r)),
                      this.mutate({ standardProps: { ui: i } })))
        }),
        (pt.prototype.setExtendedProp = function (e, t) {
            var n
            this.mutate({ extendedProps: (((n = {})[e] = t), n) })
        }),
        (pt.prototype.setStart = function (e, t) {
            void 0 === t && (t = {})
            var n,
                r = this._calendar.dateEnv,
                i = r.createMarker(e)
            i &&
                this._instance &&
                ((n = ge(this._instance.range.start, i, r, t.granularity)),
                t.maintainDuration
                    ? this.mutate({ datesDelta: n })
                    : this.mutate({ startDelta: n }))
        }),
        (pt.prototype.setEnd = function (e, t) {
            void 0 === t && (t = {})
            var n,
                r,
                i = this._calendar.dateEnv
            ;(null == e || (n = i.createMarker(e))) &&
                this._instance &&
                (n
                    ? ((r = ge(this._instance.range.end, n, i, t.granularity)),
                      this.mutate({ endDelta: r }))
                    : this.mutate({ standardProps: { hasEnd: !1 } }))
        }),
        (pt.prototype.setDates = function (e, t, n) {
            void 0 === n && (n = {})
            var r,
                i,
                o,
                s,
                a = this._calendar.dateEnv,
                l = { allDay: n.allDay },
                d = a.createMarker(e)
            d &&
                (null == t || (r = a.createMarker(t))) &&
                this._instance &&
                ((i = this._instance.range),
                !0 === n.allDay && (i = fe(i)),
                (o = ge(i.start, d, a, n.granularity)),
                r
                    ? Q(o, (s = ge(i.end, r, a, n.granularity)))
                        ? this.mutate({ datesDelta: o, standardProps: l })
                        : this.mutate({
                              startDelta: o,
                              endDelta: s,
                              standardProps: l
                          })
                    : ((l.hasEnd = !1),
                      this.mutate({ datesDelta: o, standardProps: l })))
        }),
        (pt.prototype.moveStart = function (e) {
            var t = X(e)
            t && this.mutate({ startDelta: t })
        }),
        (pt.prototype.moveEnd = function (e) {
            var t = X(e)
            t && this.mutate({ endDelta: t })
        }),
        (pt.prototype.moveDates = function (e) {
            var t = X(e)
            t && this.mutate({ datesDelta: t })
        }),
        (pt.prototype.setAllDay = function (e, t) {
            void 0 === t && (t = {})
            var n = { allDay: e },
                r = t.maintainDuration
            null == r && (r = this._calendar.opt('allDayMaintainDuration')),
                this._def.allDay !== e && (n.hasEnd = r),
                this.mutate({ standardProps: n })
        }),
        (pt.prototype.formatRange = function (e) {
            var t = this._calendar.dateEnv,
                n = this._instance,
                r = ot(e, this._calendar.opt('defaultRangeSeparator'))
            return this._def.hasEnd
                ? t.formatRange(n.range.start, n.range.end, r, {
                      forcedStartTzo: n.forcedStartTzo,
                      forcedEndTzo: n.forcedEndTzo
                  })
                : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo })
        }),
        (pt.prototype.mutate = function (e) {
            var t,
                n = this._def,
                r = this._instance
            r &&
                (this._calendar.dispatch({
                    type: 'MUTATE_EVENTS',
                    instanceId: r.instanceId,
                    mutation: e,
                    fromApi: !0
                }),
                (t = this._calendar.state.eventStore),
                (this._def = t.defs[n.defId]),
                (this._instance = t.instances[r.instanceId]))
        }),
        (pt.prototype.remove = function () {
            this._calendar.dispatch({
                type: 'REMOVE_EVENT_DEF',
                defId: this._def.defId
            })
        }),
        Object.defineProperty(pt.prototype, 'source', {
            get: function () {
                var e = this._def.sourceId
                return e
                    ? new dt(
                          this._calendar,
                          this._calendar.state.eventSources[e]
                      )
                    : null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'start', {
            get: function () {
                return this._instance
                    ? this._calendar.dateEnv.toDate(this._instance.range.start)
                    : null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'end', {
            get: function () {
                return this._instance && this._def.hasEnd
                    ? this._calendar.dateEnv.toDate(this._instance.range.end)
                    : null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'id', {
            get: function () {
                return this._def.publicId
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'groupId', {
            get: function () {
                return this._def.groupId
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'allDay', {
            get: function () {
                return this._def.allDay
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'title', {
            get: function () {
                return this._def.title
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'url', {
            get: function () {
                return this._def.url
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'rendering', {
            get: function () {
                return this._def.rendering
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'startEditable', {
            get: function () {
                return this._def.ui.startEditable
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'durationEditable', {
            get: function () {
                return this._def.ui.durationEditable
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'constraint', {
            get: function () {
                return this._def.ui.constraints[0] || null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'overlap', {
            get: function () {
                return this._def.ui.overlap
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'allow', {
            get: function () {
                return this._def.ui.allows[0] || null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'backgroundColor', {
            get: function () {
                return this._def.ui.backgroundColor
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'borderColor', {
            get: function () {
                return this._def.ui.borderColor
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'textColor', {
            get: function () {
                return this._def.ui.textColor
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'classNames', {
            get: function () {
                return this._def.ui.classNames
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(pt.prototype, 'extendedProps', {
            get: function () {
                return this._def.extendedProps
            },
            enumerable: !0,
            configurable: !0
        }),
        pt)
    function pt (e, t, n) {
        ;(this._calendar = e), (this._def = t), (this._instance = n || null)
    }
    function ht (e, t, n, r) {
        var i = {},
            o = {},
            s = {},
            a = [],
            l = [],
            d = gt(e.defs, t)
        for (var c in e.defs) {
            'inverse-background' === (E = e.defs[c]).rendering &&
                (E.groupId
                    ? ((i[E.groupId] = []), s[E.groupId] || (s[E.groupId] = E))
                    : (o[c] = []))
        }
        for (var u in e.instances) {
            var p = e.instances[u],
                h = d[(E = e.defs[p.defId]).defId],
                f = p.range,
                v = !E.allDay && r ? ve(f, r) : f,
                g = Le(v, n)
            g &&
                ('inverse-background' === E.rendering
                    ? E.groupId
                        ? i[E.groupId].push(g)
                        : o[p.defId].push(g)
                    : ('background' === E.rendering ? a : l).push({
                          def: E,
                          ui: h,
                          instance: p,
                          range: g,
                          isStart:
                              v.start &&
                              v.start.valueOf() === g.start.valueOf(),
                          isEnd: v.end && v.end.valueOf() === g.end.valueOf()
                      }))
        }
        for (var m in i)
            for (var y = 0, S = ze(i[m], n); y < S.length; y++) {
                var E,
                    b = S[y],
                    h = d[(E = s[m]).defId]
                a.push({
                    def: E,
                    ui: h,
                    instance: null,
                    range: b,
                    isStart: !1,
                    isEnd: !1
                })
            }
        for (var c in o)
            for (var w = 0, D = ze(o[c], n); w < D.length; w++) {
                b = D[w]
                a.push({
                    def: e.defs[c],
                    ui: d[c],
                    instance: null,
                    range: b,
                    isStart: !1,
                    isEnd: !1
                })
            }
        return { bg: a, fg: l }
    }
    function ft (e, t, n) {
        var r = e.calendar,
            i = e.view
        r.hasPublicHandlers('eventRender') &&
            (t = t.filter(function (e) {
                var t = r.publiclyTrigger('eventRender', [
                    {
                        event: new ut(
                            r,
                            e.eventRange.def,
                            e.eventRange.instance
                        ),
                        isMirror: n,
                        isStart: e.isStart,
                        isEnd: e.isEnd,
                        el: e.el,
                        view: i
                    }
                ])
                return !1 !== t && (t && !0 !== t && (e.el = t), !0)
            }))
        for (var o, s, a = 0, l = t; a < l.length; a++) {
            var d = l[a]
            ;(o = d.el), (s = d), (o.fcSeg = s)
        }
        return t
    }
    function vt (e) {
        return e.fcSeg || null
    }
    function gt (e, t) {
        return De(e, function (e) {
            return mt(e, t)
        })
    }
    function mt (e, t) {
        var n = []
        return (
            t[''] && n.push(t['']),
            t[e.defId] && n.push(t[e.defId]),
            n.push(e.ui),
            Nt(n)
        )
    }
    function yt (e, t, n) {
        var r = e.calendar,
            i = e.view
        if (r.hasPublicHandlers('eventPositioned'))
            for (var o = 0, s = t; o < s.length; o++) {
                var a = s[o]
                r.publiclyTriggerAfterSizing('eventPositioned', [
                    {
                        event: new ut(
                            r,
                            a.eventRange.def,
                            a.eventRange.instance
                        ),
                        isMirror: n,
                        isStart: a.isStart,
                        isEnd: a.isEnd,
                        el: a.el,
                        view: i
                    }
                ])
            }
        r.state.eventSourceLoadingLevel ||
            (r.afterSizingTriggers._eventsPositioned = [null])
    }
    function St (e, t, n) {
        for (var r = e.calendar, i = e.view, o = 0, s = t; o < s.length; o++) {
            var a = s[o]
            r.trigger('eventElRemove', a.el)
        }
        if (r.hasPublicHandlers('eventDestroy'))
            for (var l = 0, d = t; l < d.length; l++) {
                a = d[l]
                r.publiclyTrigger('eventDestroy', [
                    {
                        event: new ut(
                            r,
                            a.eventRange.def,
                            a.eventRange.instance
                        ),
                        isMirror: n,
                        el: a.el,
                        view: i
                    }
                ])
            }
    }
    function Et (e, t, n, r) {
        var i = gt(e.defs, t),
            o = He()
        for (var s in e.defs) {
            var a = e.defs[s]
            o.defs[s] = (function (e, t, n, r, i) {
                var o = n.standardProps || {}
                null == o.hasEnd &&
                    t.durationEditable &&
                    (n.startDelta || n.endDelta) &&
                    (o.hasEnd = !0)
                var s = Se({}, e, o, { ui: Se({}, e.ui, o.ui) })
                n.extendedProps &&
                    (s.extendedProps = Se({}, s.extendedProps, n.extendedProps))
                for (var a = 0, l = r; a < l.length; a++) {
                    ;(0, l[a])(s, n, i)
                }
                !s.hasEnd && i.opt('forceEventDuration') && (s.hasEnd = !0)
                return s
            })(a, i[s], n, r.pluginSystem.hooks.eventDefMutationAppliers, r)
        }
        for (var l in e.instances) {
            var d = e.instances[l],
                a = o.defs[d.defId]
            o.instances[l] = (function (e, t, n, r, i) {
                var o = i.dateEnv,
                    s = r.standardProps && !0 === r.standardProps.allDay,
                    a = r.standardProps && !1 === r.standardProps.hasEnd,
                    l = Se({}, e)
                s && (l.range = fe(l.range))
                r.datesDelta &&
                    n.startEditable &&
                    (l.range = {
                        start: o.add(l.range.start, r.datesDelta),
                        end: o.add(l.range.end, r.datesDelta)
                    })
                r.startDelta &&
                    n.durationEditable &&
                    (l.range = {
                        start: o.add(l.range.start, r.startDelta),
                        end: l.range.end
                    })
                r.endDelta &&
                    n.durationEditable &&
                    (l.range = {
                        start: l.range.start,
                        end: o.add(l.range.end, r.endDelta)
                    })
                a &&
                    (l.range = {
                        start: l.range.start,
                        end: i.getDefaultEventEnd(t.allDay, l.range.start)
                    })
                t.allDay &&
                    (l.range = { start: V(l.range.start), end: V(l.range.end) })
                l.range.end < l.range.start &&
                    (l.range.end = i.getDefaultEventEnd(
                        t.allDay,
                        l.range.start
                    ))
                return l
            })(d, a, i[d.defId], n, r)
        }
        return o
    }
    function bt (e, t, n, r, i) {
        switch (t.type) {
            case 'RECEIVE_EVENTS':
                return (function (e, t, n, r, i, o) {
                    if (t && n === t.latestFetchId) {
                        var s = Ie(
                            (function (e, t, n) {
                                var r = n.opt('eventDataTransform'),
                                    i = t ? t.eventDataTransform : null
                                return (
                                    i && (e = Pe(e, i)), r && (e = Pe(e, r)), e
                                )
                            })(i, t, o),
                            t.sourceId,
                            o
                        )
                        return r && (s = xe(s, r, o)), _e(wt(e, t.sourceId), s)
                    }
                    return e
                })(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i)
            case 'ADD_EVENTS':
                return (function (e, t, n, r) {
                    n && (t = xe(t, n, r))
                    return _e(e, t)
                })(e, t.eventStore, r ? r.activeRange : null, i)
            case 'MERGE_EVENTS':
                return _e(e, t.eventStore)
            case 'PREV':
            case 'NEXT':
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                return r ? xe(e, r.activeRange, i) : e
            case 'CHANGE_TIMEZONE':
                return (
                    (p = e),
                    (h = t.oldDateEnv),
                    (f = i.dateEnv),
                    (v = p.defs),
                    (g = De(p.instances, function (e) {
                        var t = v[e.defId]
                        return t.allDay || t.recurringDef
                            ? e
                            : Se({}, e, {
                                  range: {
                                      start: f.createMarker(
                                          h.toDate(
                                              e.range.start,
                                              e.forcedStartTzo
                                          )
                                      ),
                                      end: f.createMarker(
                                          h.toDate(e.range.end, e.forcedEndTzo)
                                      )
                                  },
                                  forcedStartTzo: f.canComputeOffset
                                      ? null
                                      : e.forcedStartTzo,
                                  forcedEndTzo: f.canComputeOffset
                                      ? null
                                      : e.forcedEndTzo
                              })
                    })),
                    { defs: v, instances: g }
                )
            case 'MUTATE_EVENTS':
                return (
                    (o = e),
                    (s = t.instanceId),
                    (a = t.mutation),
                    (l = t.fromApi),
                    (d = i),
                    (c = Me(o, s)),
                    (u = l
                        ? {
                              '': {
                                  startEditable: !0,
                                  durationEditable: !0,
                                  constraints: [],
                                  overlap: null,
                                  allows: [],
                                  backgroundColor: '',
                                  borderColor: '',
                                  textColor: '',
                                  classNames: []
                              }
                          }
                        : d.eventUiBases),
                    (c = Et(c, u, a, d)),
                    _e(o, c)
                )
            case 'REMOVE_EVENT_INSTANCES':
                return Dt(e, t.instances)
            case 'REMOVE_EVENT_DEF':
                return Oe(e, function (e) {
                    return e.defId !== t.defId
                })
            case 'REMOVE_EVENT_SOURCE':
                return wt(e, t.sourceId)
            case 'REMOVE_ALL_EVENT_SOURCES':
                return Oe(e, function (e) {
                    return !e.sourceId
                })
            case 'REMOVE_ALL_EVENTS':
                return He()
            case 'RESET_EVENTS':
                return { defs: e.defs, instances: e.instances }
            default:
                return e
        }
        var o, s, a, l, d, c, u, p, h, f, v, g
    }
    function wt (e, t) {
        return Oe(e, function (e) {
            return e.sourceId !== t
        })
    }
    function Dt (e, t) {
        return {
            defs: e.defs,
            instances: we(e.instances, function (e) {
                return !t[e.instanceId]
            })
        }
    }
    function Tt (e, t) {
        return Ct({ eventDrag: e }, t)
    }
    function Ct (e, t) {
        var n = t.view,
            r = Se(
                {
                    businessHours: n ? n.props.businessHours : He(),
                    dateSelection: '',
                    eventStore: t.state.eventStore,
                    eventUiBases: t.eventUiBases,
                    eventSelection: '',
                    eventDrag: null,
                    eventResize: null
                },
                e
            )
        return (t.pluginSystem.hooks.isPropsValid || Rt)(r, t)
    }
    function Rt (e, t, n, r) {
        return (
            void 0 === n && (n = {}),
            !(
                e.eventDrag &&
                !(function (e, t, n, r) {
                    var i = e.eventDrag,
                        o = i.mutatedEvents,
                        s = o.defs,
                        a = o.instances,
                        l = gt(
                            s,
                            i.isEvent
                                ? e.eventUiBases
                                : { '': t.selectionConfig }
                        )
                    r && (l = De(l, r))
                    var d = Dt(e.eventStore, i.affectedEvents.instances),
                        c = d.defs,
                        u = d.instances,
                        p = gt(c, e.eventUiBases)
                    for (var h in a) {
                        var f = a[h],
                            v = f.range,
                            g = l[f.defId],
                            m = s[f.defId]
                        if (!It(g.constraints, v, d, e.businessHours, t))
                            return !1
                        var y = t.opt('eventOverlap')
                        for (var S in ('function' != typeof y && (y = null),
                        u)) {
                            var E = u[S]
                            if (Ve(v, E.range)) {
                                if (!1 === p[E.defId].overlap && i.isEvent)
                                    return !1
                                if (!1 === g.overlap) return !1
                                if (
                                    y &&
                                    !y(
                                        new ut(t, c[E.defId], E),
                                        new ut(t, m, f)
                                    )
                                )
                                    return !1
                            }
                        }
                        for (
                            var b = t.state.eventStore, w = 0, D = g.allows;
                            w < D.length;
                            w++
                        ) {
                            var T = D[w],
                                C = Se({}, n, {
                                    range: f.range,
                                    allDay: m.allDay
                                }),
                                R = b.defs[m.defId],
                                I = b.instances[h],
                                k = void 0
                            if (
                                ((k = R ? new ut(t, R, I) : new ut(t, m)),
                                !T(t.buildDateSpanApi(C), k))
                            )
                                return !1
                        }
                    }
                    return !0
                })(e, t, n, r)
            ) &&
                !(
                    e.dateSelection &&
                    !(function (e, t, n, r) {
                        var i = e.eventStore,
                            o = i.defs,
                            s = i.instances,
                            a = e.dateSelection,
                            l = a.range,
                            d = t.selectionConfig
                        r && (d = r(d))
                        if (!It(d.constraints, l, i, e.businessHours, t))
                            return !1
                        var c = t.opt('selectOverlap')
                        'function' != typeof c && (c = null)
                        for (var u in s) {
                            var p = s[u]
                            if (Ve(l, p.range)) {
                                if (!1 === d.overlap) return !1
                                if (c && !c(new ut(t, o[p.defId], p))) return !1
                            }
                        }
                        for (var h = 0, f = d.allows; h < f.length; h++) {
                            var v = f[h],
                                g = Se({}, n, a)
                            if (!v(t.buildDateSpanApi(g), null)) return !1
                        }
                        return !0
                    })(e, t, n, r)
                )
        )
    }
    function It (e, t, n, r, i) {
        for (var o = 0, s = e; o < s.length; o++) {
            if (
                !(function (e, t) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        if (Fe(r[n], t)) return !0
                    }
                    return !1
                })(
                    (function (t, e, n, r, i) {
                        {
                            if ('businessHours' === t) return kt(xe(r, e, i))
                            if ('string' == typeof t)
                                return kt(
                                    Oe(n, function (e) {
                                        return e.groupId === t
                                    })
                                )
                            if ('object' == typeof t && t)
                                return kt(xe(t, e, i))
                        }
                        return []
                    })(s[o], t, n, r, i),
                    t
                )
            )
                return
        }
        return 1
    }
    function kt (e) {
        var t = e.instances,
            n = []
        for (var r in t) n.push(t[r].range)
        return n
    }
    function xt (e) {
        return (e + '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#039;')
            .replace(/"/g, '&quot;')
            .replace(/\n/g, '<br />')
    }
    function Mt (e) {
        var t = []
        for (var n in e) {
            var r = e[n]
            null != r && '' !== r && t.push(n + ':' + r)
        }
        return t.join(';')
    }
    function Pt (e) {
        return Array.isArray(e) ? e : 'string' == typeof e ? e.split(/\s+/) : []
    }
    var Ht = {
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: null,
        overlap: null,
        allow: null,
        className: Pt,
        classNames: Pt,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String
    }
    function _t (e, t, n) {
        var r,
            i,
            o = he(e, Ht, {}, n),
            s =
                ((r = o.constraint),
                (i = t),
                Array.isArray(r)
                    ? Ie(r, '', i, !0)
                    : 'object' == typeof r && r
                    ? Ie([r], '', i, !0)
                    : null != r
                    ? String(r)
                    : null)
        return {
            startEditable:
                null != o.startEditable ? o.startEditable : o.editable,
            durationEditable:
                null != o.durationEditable ? o.durationEditable : o.editable,
            constraints: null != s ? [s] : [],
            overlap: o.overlap,
            allows: null != o.allow ? [o.allow] : [],
            backgroundColor: o.backgroundColor || o.color,
            borderColor: o.borderColor || o.color,
            textColor: o.textColor,
            classNames: o.classNames.concat(o.className)
        }
    }
    function Ot (e, t, n, r) {
        var i = {},
            o = {}
        for (var s in Ht) {
            var a = e + ae(s)
            ;(i[s] = t[a]), (o[a] = !0)
        }
        if (('event' === e && (i.editable = t.editable), r))
            for (var s in t) o[s] || (r[s] = t[s])
        return _t(i, n)
    }
    var zt = {
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: '',
        borderColor: '',
        textColor: '',
        classNames: []
    }
    function Nt (e) {
        return e.reduce(Lt, zt)
    }
    function Lt (e, t) {
        return {
            startEditable:
                null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable:
                null != t.durationEditable
                    ? t.durationEditable
                    : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: 'boolean' == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames)
        }
    }
    var Bt = {
            id: String,
            groupId: String,
            title: String,
            url: String,
            rendering: String,
            extendedProps: null
        },
        Vt = { start: null, date: null, end: null, allDay: null },
        Ft = 0
    function Gt (e, t, n, r) {
        var i = (function (e, t) {
                var n = null
                {
                    var r
                    e && ((r = t.state.eventSources[e]), (n = r.allDayDefault))
                }
                null == n && (n = t.opt('allDayDefault'))
                return n
            })(t, n),
            o = {},
            s = (function (e, t, n, r, i) {
                for (var o = 0; o < r.length; o++) {
                    var s = {},
                        a = r[o].parse(e, s, n)
                    if (a) {
                        var l = s.allDay
                        return (
                            delete s.allDay,
                            null == l &&
                                null == (l = t) &&
                                null == (l = a.allDayGuess) &&
                                (l = !1),
                            Se(i, s),
                            {
                                allDay: l,
                                duration: a.duration,
                                typeData: a.typeData,
                                typeId: o
                            }
                        )
                    }
                }
                return null
            })(e, i, n.dateEnv, n.pluginSystem.hooks.recurringTypes, o)
        if (s)
            return (
                ((a = Ut(o, t, s.allDay, Boolean(s.duration), n)).recurringDef =
                    {
                        typeId: s.typeId,
                        typeData: s.typeData,
                        duration: s.duration
                    }),
                { def: a, instance: null }
            )
        var a,
            l = {},
            d = (function (e, t, n, r, i) {
                var o,
                    s,
                    a = (function (e, t) {
                        var n = he(e, Vt, {}, t)
                        return (
                            (n.start = null !== n.start ? n.start : n.date),
                            delete n.date,
                            n
                        )
                    })(e, r),
                    l = a.allDay,
                    d = null,
                    c = !1,
                    u = null
                if ((o = n.dateEnv.createMarkerMeta(a.start))) d = o.marker
                else if (!i) return null
                null != a.end && (s = n.dateEnv.createMarkerMeta(a.end))
                null == l &&
                    (l =
                        null != t
                            ? t
                            : (!o || o.isTimeUnspecified) &&
                              (!s || s.isTimeUnspecified))
                l && d && (d = V(d))
                s &&
                    ((u = s.marker), l && (u = V(u)), d && u <= d && (u = null))
                u
                    ? (c = !0)
                    : i ||
                      ((c = n.opt('forceEventDuration') || !1),
                      (u = n.dateEnv.add(
                          d,
                          l
                              ? n.defaultAllDayEventDuration
                              : n.defaultTimedEventDuration
                      )))
                return {
                    allDay: l,
                    hasEnd: c,
                    range: { start: d, end: u },
                    forcedStartTzo: o ? o.forcedTzo : null,
                    forcedEndTzo: s ? s.forcedTzo : null
                }
            })(e, i, n, l, r)
        return d
            ? {
                  def: (a = Ut(l, t, d.allDay, d.hasEnd, n)),
                  instance: At(
                      a.defId,
                      d.range,
                      d.forcedStartTzo,
                      d.forcedEndTzo
                  )
              }
            : null
    }
    function Ut (e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            d,
            c = {},
            u =
                ((o = i),
                (s = c),
                (l = he(e, Bt, {}, (a = {}))),
                (d = _t(a, o, s)),
                (l.publicId = l.id),
                delete l.id,
                (l.ui = d),
                l)
        ;(u.defId = String(Ft++)),
            (u.sourceId = t),
            (u.allDay = n),
            (u.hasEnd = r)
        for (
            var p = 0, h = i.pluginSystem.hooks.eventDefParsers;
            p < h.length;
            p++
        ) {
            var f = {}
            ;(0, h[p])(u, c, f), (c = f)
        }
        return (
            (u.extendedProps = Se(c, u.extendedProps || {})),
            Object.freeze(u.ui.classNames),
            Object.freeze(u.extendedProps),
            u
        )
    }
    function At (e, t, n, r) {
        return {
            instanceId: String(Ft++),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r
        }
    }
    var Wt = {
        startTime: '09:00',
        endTime: '17:00',
        daysOfWeek: [1, 2, 3, 4, 5],
        rendering: 'inverse-background',
        classNames: 'fc-nonbusiness',
        groupId: '_businessHours'
    }
    function jt (e, t) {
        return Ie(
            (function (e) {
                var t
                t =
                    !0 === e
                        ? [{}]
                        : Array.isArray(e)
                        ? e.filter(function (e) {
                              return e.daysOfWeek
                          })
                        : 'object' == typeof e && e
                        ? [e]
                        : []
                return (t = t.map(function (e) {
                    return Se({}, Wt, e)
                }))
            })(e),
            '',
            t
        )
    }
    function Zt (e, n, t) {
        void 0 === t && (t = [])
        var r,
            i,
            o = []
        function s () {
            if (i) {
                for (var e = 0, t = o; e < t.length; e++) {
                    t[e].unrender()
                }
                n && n.apply(r, i), (i = null)
            }
        }
        function a () {
            ;(i && Ue(i, arguments)) ||
                (s(), (r = this), (i = arguments), e.apply(this, arguments))
        }
        ;(a.dependents = o), (a.unrender = s)
        for (var l = 0, d = t; l < d.length; l++) {
            d[l].dependents.push(a)
        }
        return a
    }
    var qt = He(),
        Yt =
            ((Xt.prototype.splitProps = function (e) {
                var n = this,
                    t = this.getKeyInfo(e),
                    r = this.getKeysForEventDefs(e.eventStore),
                    i = this.splitDateSelection(e.dateSelection),
                    o = this.splitIndividualUi(e.eventUiBases, r),
                    s = this.splitEventStore(e.eventStore, r),
                    a = this.splitEventDrag(e.eventDrag),
                    l = this.splitEventResize(e.eventResize),
                    d = {}
                for (var c in ((this.eventUiBuilders = De(t, function (e, t) {
                    return n.eventUiBuilders[t] || Ae(Kt)
                })),
                t)) {
                    var u = t[c],
                        p = s[c] || qt,
                        h = this.eventUiBuilders[c]
                    d[c] = {
                        businessHours: u.businessHours || e.businessHours,
                        dateSelection: i[c] || null,
                        eventStore: p,
                        eventUiBases: h(e.eventUiBases[''], u.ui, o[c]),
                        eventSelection: p.instances[e.eventSelection]
                            ? e.eventSelection
                            : '',
                        eventDrag: a[c] || null,
                        eventResize: l[c] || null
                    }
                }
                return d
            }),
            (Xt.prototype._splitDateSpan = function (e) {
                var t = {}
                if (e)
                    for (
                        var n = 0, r = this.getKeysForDateSpan(e);
                        n < r.length;
                        n++
                    )
                        t[r[n]] = e
                return t
            }),
            (Xt.prototype._getKeysForEventDefs = function (e) {
                var t = this
                return De(e.defs, function (e) {
                    return t.getKeysForEventDef(e)
                })
            }),
            (Xt.prototype._splitEventStore = function (e, t) {
                var n = e.defs,
                    r = e.instances,
                    i = {}
                for (var o in n)
                    for (var s = 0, a = t[o]; s < a.length; s++)
                        i[(d = a[s])] || (i[d] = He()), (i[d].defs[o] = n[o])
                for (var l in r)
                    for (
                        var d, c = r[l], u = 0, p = t[c.defId];
                        u < p.length;
                        u++
                    )
                        i[(d = p[u])] && (i[d].instances[l] = c)
                return i
            }),
            (Xt.prototype._splitIndividualUi = function (e, t) {
                var n = {}
                for (var r in e)
                    if (r)
                        for (var i = 0, o = t[r]; i < o.length; i++) {
                            var s = o[i]
                            n[s] || (n[s] = {}), (n[s][r] = e[r])
                        }
                return n
            }),
            (Xt.prototype._splitInteraction = function (t) {
                var n = {}
                if (t) {
                    var r = this._splitEventStore(
                            t.affectedEvents,
                            this._getKeysForEventDefs(t.affectedEvents)
                        ),
                        e = this._getKeysForEventDefs(t.mutatedEvents),
                        i = this._splitEventStore(t.mutatedEvents, e),
                        o = function (e) {
                            n[e] ||
                                (n[e] = {
                                    affectedEvents: r[e] || qt,
                                    mutatedEvents: i[e] || qt,
                                    isEvent: t.isEvent,
                                    origSeg: t.origSeg
                                })
                        }
                    for (var s in r) o(s)
                    for (var s in i) o(s)
                }
                return n
            }),
            Xt)
    function Xt () {
        ;(this.getKeysForEventDefs = Ae(this._getKeysForEventDefs)),
            (this.splitDateSelection = Ae(this._splitDateSpan)),
            (this.splitEventStore = Ae(this._splitEventStore)),
            (this.splitIndividualUi = Ae(this._splitIndividualUi)),
            (this.splitEventDrag = Ae(this._splitInteraction)),
            (this.splitEventResize = Ae(this._splitInteraction)),
            (this.eventUiBuilders = {})
    }
    function Kt (e, t, n) {
        var r = []
        e && r.push(e), t && r.push(t)
        var i = { '': Nt(r) }
        return n && Se(i, n), i
    }
    function Jt (e, t, n, r, i) {
        var o, s, a, l
        return (
            n instanceof Date
                ? (o = n)
                : ((o = n.date), (s = n.type), (a = n.forceOff)),
            (l = { date: t.formatIso(o, { omitTime: !0 }), type: s || 'day' }),
            'string' == typeof r && ((i = r), (r = null)),
            (r = r
                ? ' ' +
                  (function (e) {
                      var t = []
                      for (var n in e) {
                          var r = e[n]
                          null != r && t.push(n + '="' + xt(r) + '"')
                      }
                      return t.join(' ')
                  })(r)
                : ''),
            (i = i || ''),
            !a && e.navLinks
                ? '<a' +
                  r +
                  ' data-goto="' +
                  xt(JSON.stringify(l)) +
                  '">' +
                  i +
                  '</a>'
                : '<span' + r + '>' + i + '</span>'
        )
    }
    function Qt (e, t, n, r) {
        var i,
            o,
            s = n.calendar,
            a = n.options,
            l = n.theme,
            d = n.dateEnv,
            c = []
        return (
            Ge(t.activeRange, e)
                ? (c.push('fc-' + H[e.getUTCDay()]),
                  a.monthMode &&
                      d.getMonth(e) !== d.getMonth(t.currentRange.start) &&
                      c.push('fc-other-month'),
                  (o = _((i = V(s.getNow())), 1)),
                  e < i
                      ? c.push('fc-past')
                      : o <= e
                      ? c.push('fc-future')
                      : (c.push('fc-today'),
                        !0 !== r && c.push(l.getClass('today'))))
                : c.push('fc-disabled-day'),
            c
        )
    }
    function $t (e, t, n) {
        function r () {
            o || ((o = !0), t.apply(this, arguments))
        }
        function i () {
            o || ((o = !0), n && n.apply(this, arguments))
        }
        var o = !1,
            s = e(r, i)
        s && 'function' == typeof s.then && s.then(r, i)
    }
    var en =
        ((tn.mixInto = function (e) {
            this.mixIntoObj(e.prototype)
        }),
        (tn.mixIntoObj = function (t) {
            var n = this
            Object.getOwnPropertyNames(this.prototype).forEach(function (e) {
                t[e] || (t[e] = n.prototype[e])
            })
        }),
        (tn.mixOver = function (t) {
            var n = this
            Object.getOwnPropertyNames(this.prototype).forEach(function (e) {
                t.prototype[e] = n.prototype[e]
            })
        }),
        tn)
    function tn () {}
    var nn,
        rn =
            (ye(on, (nn = en)),
            (on.prototype.on = function (e, t) {
                return sn(this._handlers || (this._handlers = {}), e, t), this
            }),
            (on.prototype.one = function (e, t) {
                return (
                    sn(this._oneHandlers || (this._oneHandlers = {}), e, t),
                    this
                )
            }),
            (on.prototype.off = function (e, t) {
                return (
                    this._handlers && an(this._handlers, e, t),
                    this._oneHandlers && an(this._oneHandlers, e, t),
                    this
                )
            }),
            (on.prototype.trigger = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n]
                return this.triggerWith(e, this, t), this
            }),
            (on.prototype.triggerWith = function (e, t, n) {
                return (
                    this._handlers && ce(this._handlers[e], t, n),
                    this._oneHandlers &&
                        (ce(this._oneHandlers[e], t, n),
                        delete this._oneHandlers[e]),
                    this
                )
            }),
            (on.prototype.hasHandlers = function (e) {
                return (
                    (this._handlers &&
                        this._handlers[e] &&
                        this._handlers[e].length) ||
                    (this._oneHandlers &&
                        this._oneHandlers[e] &&
                        this._oneHandlers[e].length)
                )
            }),
            on)
    function on () {
        return (null !== nn && nn.apply(this, arguments)) || this
    }
    function sn (e, t, n) {
        ;(e[t] || (e[t] = [])).push(n)
    }
    function an (e, t, n) {
        n
            ? e[t] &&
              (e[t] = e[t].filter(function (e) {
                  return e !== n
              }))
            : delete e[t]
    }
    var ln =
        ((dn.prototype.build = function () {
            var e = this.originEl,
                t = (this.originClientRect = e.getBoundingClientRect())
            this.isHorizontal && this.buildElHorizontals(t.left),
                this.isVertical && this.buildElVerticals(t.top)
        }),
        (dn.prototype.buildElHorizontals = function (e) {
            for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
                var o = i[r].getBoundingClientRect()
                t.push(o.left - e), n.push(o.right - e)
            }
            ;(this.lefts = t), (this.rights = n)
        }),
        (dn.prototype.buildElVerticals = function (e) {
            for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
                var o = i[r].getBoundingClientRect()
                t.push(o.top - e), n.push(o.bottom - e)
            }
            ;(this.tops = t), (this.bottoms = n)
        }),
        (dn.prototype.leftToIndex = function (e) {
            for (
                var t = this.lefts, n = this.rights, r = t.length, i = 0;
                i < r;
                i++
            )
                if (e >= t[i] && e < n[i]) return i
        }),
        (dn.prototype.topToIndex = function (e) {
            for (
                var t = this.tops, n = this.bottoms, r = t.length, i = 0;
                i < r;
                i++
            )
                if (e >= t[i] && e < n[i]) return i
        }),
        (dn.prototype.getWidth = function (e) {
            return this.rights[e] - this.lefts[e]
        }),
        (dn.prototype.getHeight = function (e) {
            return this.bottoms[e] - this.tops[e]
        }),
        dn)
    function dn (e, t, n, r) {
        ;(this.originEl = e),
            (this.els = t),
            (this.isHorizontal = n),
            (this.isVertical = r)
    }
    var cn =
        ((un.prototype.getMaxScrollTop = function () {
            return this.getScrollHeight() - this.getClientHeight()
        }),
        (un.prototype.getMaxScrollLeft = function () {
            return this.getScrollWidth() - this.getClientWidth()
        }),
        (un.prototype.canScrollVertically = function () {
            return 0 < this.getMaxScrollTop()
        }),
        (un.prototype.canScrollHorizontally = function () {
            return 0 < this.getMaxScrollLeft()
        }),
        (un.prototype.canScrollUp = function () {
            return 0 < this.getScrollTop()
        }),
        (un.prototype.canScrollDown = function () {
            return this.getScrollTop() < this.getMaxScrollTop()
        }),
        (un.prototype.canScrollLeft = function () {
            return 0 < this.getScrollLeft()
        }),
        (un.prototype.canScrollRight = function () {
            return this.getScrollLeft() < this.getMaxScrollLeft()
        }),
        un)
    function un () {}
    var pn,
        hn =
            (ye(fn, (pn = cn)),
            (fn.prototype.getScrollTop = function () {
                return this.el.scrollTop
            }),
            (fn.prototype.getScrollLeft = function () {
                return this.el.scrollLeft
            }),
            (fn.prototype.setScrollTop = function (e) {
                this.el.scrollTop = e
            }),
            (fn.prototype.setScrollLeft = function (e) {
                this.el.scrollLeft = e
            }),
            (fn.prototype.getScrollWidth = function () {
                return this.el.scrollWidth
            }),
            (fn.prototype.getScrollHeight = function () {
                return this.el.scrollHeight
            }),
            (fn.prototype.getClientHeight = function () {
                return this.el.clientHeight
            }),
            (fn.prototype.getClientWidth = function () {
                return this.el.clientWidth
            }),
            fn)
    function fn (e) {
        var t = pn.call(this) || this
        return (t.el = e), t
    }
    var vn,
        gn =
            (ye(mn, (vn = cn)),
            (mn.prototype.getScrollTop = function () {
                return window.pageYOffset
            }),
            (mn.prototype.getScrollLeft = function () {
                return window.pageXOffset
            }),
            (mn.prototype.setScrollTop = function (e) {
                window.scroll(window.pageXOffset, e)
            }),
            (mn.prototype.setScrollLeft = function (e) {
                window.scroll(e, window.pageYOffset)
            }),
            (mn.prototype.getScrollWidth = function () {
                return document.documentElement.scrollWidth
            }),
            (mn.prototype.getScrollHeight = function () {
                return document.documentElement.scrollHeight
            }),
            (mn.prototype.getClientHeight = function () {
                return document.documentElement.clientHeight
            }),
            (mn.prototype.getClientWidth = function () {
                return document.documentElement.clientWidth
            }),
            mn)
    function mn () {
        return (null !== vn && vn.apply(this, arguments)) || this
    }
    var yn,
        Sn =
            (ye(En, (yn = hn)),
            (En.prototype.clear = function () {
                this.setHeight('auto'), this.applyOverflow()
            }),
            (En.prototype.destroy = function () {
                r(this.el)
            }),
            (En.prototype.applyOverflow = function () {
                f(this.el, {
                    overflowX: this.overflowX,
                    overflowY: this.overflowY
                })
            }),
            (En.prototype.lockOverflow = function (e) {
                var t = this.overflowX,
                    n = this.overflowY
                ;(e = e || this.getScrollbarWidths()),
                    'auto' === t &&
                        (t =
                            e.bottom || this.canScrollHorizontally()
                                ? 'scroll'
                                : 'hidden'),
                    'auto' === n &&
                        (n =
                            e.left || e.right || this.canScrollVertically()
                                ? 'scroll'
                                : 'hidden'),
                    f(this.el, { overflowX: t, overflowY: n })
            }),
            (En.prototype.setHeight = function (e) {
                v(this.el, 'height', e)
            }),
            (En.prototype.getScrollbarWidths = function () {
                var e = D(this.el)
                return {
                    left: e.scrollbarLeft,
                    right: e.scrollbarRight,
                    bottom: e.scrollbarBottom
                }
            }),
            En)
    function En (e, t) {
        var n = yn.call(this, s('div', { className: 'fc-scroller' })) || this
        return (n.overflowX = e), (n.overflowY = t), n.applyOverflow(), n
    }
    var bn =
        ((wn.prototype.processIconOverride = function () {
            this.iconOverrideOption &&
                this.setIconOverride(
                    this.calendarOptions[this.iconOverrideOption]
                )
        }),
        (wn.prototype.setIconOverride = function (e) {
            var t, n
            if ('object' == typeof e && e) {
                for (n in ((t = Se({}, this.iconClasses)), e))
                    t[n] = this.applyIconOverridePrefix(e[n])
                this.iconClasses = t
            } else !1 === e && (this.iconClasses = {})
        }),
        (wn.prototype.applyIconOverridePrefix = function (e) {
            var t = this.iconOverridePrefix
            return t && 0 !== e.indexOf(t) && (e = t + e), e
        }),
        (wn.prototype.getClass = function (e) {
            return this.classes[e] || ''
        }),
        (wn.prototype.getIconClass = function (e) {
            var t = this.iconClasses[e]
            return t ? this.baseIconClass + ' ' + t : ''
        }),
        (wn.prototype.getCustomButtonIconClass = function (e) {
            var t
            return this.iconOverrideCustomButtonOption &&
                (t = e[this.iconOverrideCustomButtonOption])
                ? this.baseIconClass + ' ' + this.applyIconOverridePrefix(t)
                : ''
        }),
        wn)
    function wn (e) {
        ;(this.calendarOptions = e), this.processIconOverride()
    }
    ;(bn.prototype.classes = {}),
        (bn.prototype.iconClasses = {}),
        (bn.prototype.baseIconClass = ''),
        (bn.prototype.iconOverridePrefix = '')
    var Dn = 0,
        Tn =
            ((Cn.prototype.extend = function (e, t) {
                return new Cn(
                    this.calendar,
                    this.theme,
                    this.dateEnv,
                    e || this.options,
                    t || this.view
                )
            }),
            Cn)
    function Cn (e, t, n, r, i) {
        ;(this.calendar = e),
            (this.theme = t),
            (this.dateEnv = n),
            (this.options = r),
            (this.view = i),
            (this.isRtl = 'rtl' === r.dir),
            (this.eventOrderSpecs = re(r.eventOrder)),
            (this.nextDayThreshold = X(r.nextDayThreshold))
    }
    var Rn =
        ((In.addEqualityFuncs = function (e) {
            this.prototype.equalityFuncs = Se(
                {},
                this.prototype.equalityFuncs,
                e
            )
        }),
        (In.prototype.receiveProps = function (e, t) {
            this.receiveContext(t)
            var n = (function (e, t, n) {
                    var r = {},
                        i = !1
                    for (var o in t)
                        o in e && (e[o] === t[o] || (n[o] && n[o](e[o], t[o])))
                            ? (r[o] = e[o])
                            : ((r[o] = t[o]), (i = !0))
                    for (var o in e)
                        if (!(o in t)) {
                            i = !0
                            break
                        }
                    return { anyChanges: i, comboProps: r }
                })(this.props || {}, e, this.equalityFuncs),
                r = n.anyChanges,
                i = n.comboProps
            ;(this.props = i),
                r &&
                    (this.everRendered && this.beforeUpdate(),
                    this.render(i, t),
                    this.everRendered && this.afterUpdate()),
                (this.everRendered = !0)
        }),
        (In.prototype.receiveContext = function (e) {
            var t = this.context
            ;(this.context = e), t || this.firstContext(e)
        }),
        (In.prototype.render = function (e, t) {}),
        (In.prototype.firstContext = function (e) {}),
        (In.prototype.beforeUpdate = function () {}),
        (In.prototype.afterUpdate = function () {}),
        (In.prototype.destroy = function () {}),
        In)
    function In () {
        ;(this.everRendered = !1), (this.uid = String(Dn++))
    }
    Rn.prototype.equalityFuncs = {}
    var kn,
        xn =
            (ye(Mn, (kn = Rn)),
            (Mn.prototype.destroy = function () {
                kn.prototype.destroy.call(this), r(this.el)
            }),
            (Mn.prototype.buildPositionCaches = function () {}),
            (Mn.prototype.queryHit = function (e, t, n, r) {
                return null
            }),
            (Mn.prototype.isInteractionValid = function (e) {
                var t = this.context.calendar,
                    n = this.props.dateProfile,
                    r = e.mutatedEvents.instances
                if (n)
                    for (var i in r)
                        if (!Fe(n.validRange, r[i].range)) return !1
                return Tt(e, t)
            }),
            (Mn.prototype.isDateSelectionValid = function (e) {
                var t = this.context.calendar,
                    n = this.props.dateProfile
                return (
                    !(n && !Fe(n.validRange, e.range)) &&
                    Ct({ dateSelection: e }, t)
                )
            }),
            (Mn.prototype.isValidSegDownEl = function (e) {
                return (
                    !this.props.eventDrag &&
                    !this.props.eventResize &&
                    !c(e, '.fc-mirror') &&
                    (this.isPopover() || !this.isInPopover(e))
                )
            }),
            (Mn.prototype.isValidDateDownEl = function (e) {
                var t = c(e, this.fgSegSelector)
                return (
                    (!t || t.classList.contains('fc-mirror')) &&
                    !c(e, '.fc-more') &&
                    !c(e, 'a[data-goto]') &&
                    !this.isInPopover(e)
                )
            }),
            (Mn.prototype.isPopover = function () {
                return this.el.classList.contains('fc-popover')
            }),
            (Mn.prototype.isInPopover = function (e) {
                return Boolean(c(e, '.fc-popover'))
            }),
            Mn)
    function Mn (e) {
        var t = kn.call(this) || this
        return (t.el = e), t
    }
    ;(xn.prototype.fgSegSelector = '.fc-event-container > *'),
        (xn.prototype.bgSegSelector = '.fc-bgevent:not(.fc-nonbusiness)')
    var Pn = 0
    function Hn (e) {
        return {
            id: String(Pn++),
            deps: e.deps || [],
            reducers: e.reducers || [],
            eventDefParsers: e.eventDefParsers || [],
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
            viewContainerModifiers: e.viewContainerModifiers || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            defaultView: e.defaultView || '',
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {}
        }
    }
    var _n =
        ((On.prototype.add = function (e) {
            if (!this.addedHash[e.id]) {
                this.addedHash[e.id] = !0
                for (var t = 0, n = e.deps; t < n.length; t++) {
                    var r = n[t]
                    this.add(r)
                }
                this.hooks =
                    ((i = this.hooks),
                    (o = e),
                    {
                        reducers: i.reducers.concat(o.reducers),
                        eventDefParsers: i.eventDefParsers.concat(
                            o.eventDefParsers
                        ),
                        isDraggableTransformers:
                            i.isDraggableTransformers.concat(
                                o.isDraggableTransformers
                            ),
                        eventDragMutationMassagers:
                            i.eventDragMutationMassagers.concat(
                                o.eventDragMutationMassagers
                            ),
                        eventDefMutationAppliers:
                            i.eventDefMutationAppliers.concat(
                                o.eventDefMutationAppliers
                            ),
                        dateSelectionTransformers:
                            i.dateSelectionTransformers.concat(
                                o.dateSelectionTransformers
                            ),
                        datePointTransforms: i.datePointTransforms.concat(
                            o.datePointTransforms
                        ),
                        dateSpanTransforms: i.dateSpanTransforms.concat(
                            o.dateSpanTransforms
                        ),
                        views: Se({}, i.views, o.views),
                        viewPropsTransformers: i.viewPropsTransformers.concat(
                            o.viewPropsTransformers
                        ),
                        isPropsValid: o.isPropsValid || i.isPropsValid,
                        externalDefTransforms: i.externalDefTransforms.concat(
                            o.externalDefTransforms
                        ),
                        eventResizeJoinTransforms:
                            i.eventResizeJoinTransforms.concat(
                                o.eventResizeJoinTransforms
                            ),
                        viewContainerModifiers: i.viewContainerModifiers.concat(
                            o.viewContainerModifiers
                        ),
                        eventDropTransformers: i.eventDropTransformers.concat(
                            o.eventDropTransformers
                        ),
                        calendarInteractions: i.calendarInteractions.concat(
                            o.calendarInteractions
                        ),
                        componentInteractions: i.componentInteractions.concat(
                            o.componentInteractions
                        ),
                        themeClasses: Se({}, i.themeClasses, o.themeClasses),
                        eventSourceDefs: i.eventSourceDefs.concat(
                            o.eventSourceDefs
                        ),
                        cmdFormatter: o.cmdFormatter || i.cmdFormatter,
                        recurringTypes: i.recurringTypes.concat(
                            o.recurringTypes
                        ),
                        namedTimeZonedImpl:
                            o.namedTimeZonedImpl || i.namedTimeZonedImpl,
                        defaultView: i.defaultView || o.defaultView,
                        elementDraggingImpl:
                            i.elementDraggingImpl || o.elementDraggingImpl,
                        optionChangeHandlers: Se(
                            {},
                            i.optionChangeHandlers,
                            o.optionChangeHandlers
                        )
                    })
            }
            var i, o
        }),
        On)
    function On () {
        ;(this.hooks = {
            reducers: [],
            eventDefParsers: [],
            isDraggableTransformers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            views: {},
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            eventResizeJoinTransforms: [],
            viewContainerModifiers: [],
            eventDropTransformers: [],
            componentInteractions: [],
            calendarInteractions: [],
            themeClasses: {},
            eventSourceDefs: [],
            cmdFormatter: null,
            recurringTypes: [],
            namedTimeZonedImpl: null,
            defaultView: '',
            elementDraggingImpl: null,
            optionChangeHandlers: {}
        }),
            (this.addedHash = {})
    }
    var zn = Hn({
            eventSourceDefs: [
                {
                    ignoreRange: !0,
                    parseMeta: function (e) {
                        return Array.isArray(e)
                            ? e
                            : Array.isArray(e.events)
                            ? e.events
                            : null
                    },
                    fetch: function (e, t) {
                        t({ rawEvents: e.eventSource.meta })
                    }
                }
            ]
        }),
        Nn = Hn({
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return 'function' == typeof e
                            ? e
                            : 'function' == typeof e.events
                            ? e.events
                            : null
                    },
                    fetch: function (e, t, n) {
                        var r = e.calendar.dateEnv
                        $t(
                            e.eventSource.meta.bind(null, {
                                start: r.toDate(e.range.start),
                                end: r.toDate(e.range.end),
                                startStr: r.formatIso(e.range.start),
                                endStr: r.formatIso(e.range.end),
                                timeZone: r.timeZone
                            }),
                            function (e) {
                                t({ rawEvents: e })
                            },
                            n
                        )
                    }
                }
            ]
        })
    function Ln (e, t, n, r, i) {
        var o,
            s,
            a = null
        'GET' === (e = e.toUpperCase())
            ? ((s = n),
              (t = (o = t) + (-1 === o.indexOf('?') ? '?' : '&') + Bn(s)))
            : (a = Bn(n))
        var l = new XMLHttpRequest()
        l.open(e, t, !0),
            'GET' !== e &&
                l.setRequestHeader(
                    'Content-Type',
                    'application/x-www-form-urlencoded'
                ),
            (l.onload = function () {
                if (200 <= l.status && l.status < 400)
                    try {
                        var e = JSON.parse(l.responseText)
                        r(e, l)
                    } catch (e) {
                        i('Failure parsing JSON', l)
                    }
                else i('Request failed', l)
            }),
            (l.onerror = function () {
                i('Request failed', l)
            }),
            l.send(a)
    }
    function Bn (e) {
        var t = []
        for (var n in e)
            t.push(encodeURIComponent(n) + '=' + encodeURIComponent(e[n]))
        return t.join('&')
    }
    var Vn = Hn({
        eventSourceDefs: [
            {
                parseMeta: function (e) {
                    if ('string' == typeof e) e = { url: e }
                    else if (!e || 'object' != typeof e || !e.url) return null
                    return {
                        url: e.url,
                        method: (e.method || 'GET').toUpperCase(),
                        extraParams: e.extraParams,
                        startParam: e.startParam,
                        endParam: e.endParam,
                        timeZoneParam: e.timeZoneParam
                    }
                },
                fetch: function (e, n, r) {
                    var t = e.eventSource.meta,
                        i = (function (e, t, n) {
                            var r,
                                i,
                                o,
                                s,
                                a = n.dateEnv,
                                l = {}
                            null == (r = e.startParam) &&
                                (r = n.opt('startParam'))
                            null == (i = e.endParam) && (i = n.opt('endParam'))
                            null == (o = e.timeZoneParam) &&
                                (o = n.opt('timeZoneParam'))
                            s =
                                'function' == typeof e.extraParams
                                    ? e.extraParams()
                                    : e.extraParams || {}
                            Se(l, s),
                                (l[r] = a.formatIso(t.start)),
                                (l[i] = a.formatIso(t.end)),
                                'local' !== a.timeZone && (l[o] = a.timeZone)
                            return l
                        })(t, e.range, e.calendar)
                    Ln(
                        t.method,
                        t.url,
                        i,
                        function (e, t) {
                            n({ rawEvents: e, xhr: t })
                        },
                        function (e, t) {
                            r({ message: e, xhr: t })
                        }
                    )
                }
            }
        ]
    })
    var Fn = Hn({
        recurringTypes: [
            {
                parse: function (e, t, n) {
                    var r,
                        i,
                        o = n.createMarker.bind(n),
                        s = he(
                            e,
                            {
                                daysOfWeek: null,
                                startTime: X,
                                endTime: X,
                                startRecur: o,
                                endRecur: o
                            },
                            {},
                            t
                        ),
                        a = !1
                    for (var l in s)
                        if (null != s[l]) {
                            a = !0
                            break
                        }
                    if (a) {
                        var d = null
                        return (
                            'duration' in t &&
                                ((d = X(t.duration)), delete t.duration),
                            !d &&
                                s.startTime &&
                                s.endTime &&
                                ((r = s.endTime),
                                (i = s.startTime),
                                (d = {
                                    years: r.years - i.years,
                                    months: r.months - i.months,
                                    days: r.days - i.days,
                                    milliseconds:
                                        r.milliseconds - i.milliseconds
                                })),
                            {
                                allDayGuess: Boolean(
                                    !s.startTime && !s.endTime
                                ),
                                duration: d,
                                typeData: s
                            }
                        )
                    }
                    return null
                },
                expand: function (e, t, n) {
                    var r = Le(t, { start: e.startRecur, end: e.endRecur })
                    return r
                        ? (function (e, t, n, r) {
                              var i = e ? Te(e) : null,
                                  o = V(n.start),
                                  s = n.end,
                                  a = []
                              for (; o < s; ) {
                                  var l = void 0
                                  ;(i && !i[o.getUTCDay()]) ||
                                      ((l = t ? r.add(o, t) : o), a.push(l)),
                                      (o = _(o, 1))
                              }
                              return a
                          })(e.daysOfWeek, e.startTime, r, n)
                        : []
                }
            }
        ]
    })
    var Gn = Hn({
        optionChangeHandlers: {
            events: function (e, t, n) {
                Un([e], t, n)
            },
            eventSources: Un,
            plugins: function (e, t) {
                t.addPluginInputs(e)
            }
        }
    })
    function Un (e, t, n) {
        for (
            var r = Ce(t.state.eventSources), i = [], o = 0, s = e;
            o < s.length;
            o++
        ) {
            for (var a = s[o], l = !1, d = 0; d < r.length; d++)
                if (n(r[d]._raw, a)) {
                    r.splice(d, 1), (l = !0)
                    break
                }
            l || i.push(a)
        }
        for (var c = 0, u = r; c < u.length; c++) {
            var p = u[c]
            t.dispatch({ type: 'REMOVE_EVENT_SOURCE', sourceId: p.sourceId })
        }
        for (var h = 0, f = i; h < f.length; h++) {
            var v = f[h]
            t.addEventSource(v)
        }
    }
    var An = {
            defaultRangeSeparator: ' - ',
            titleRangeSeparator: ' – ',
            defaultTimedEventDuration: '01:00:00',
            defaultAllDayEventDuration: { day: 1 },
            forceEventDuration: !1,
            nextDayThreshold: '00:00:00',
            columnHeader: !0,
            defaultView: '',
            aspectRatio: 1.35,
            header: { left: 'title', center: '', right: 'today prev,next' },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: 'local',
            editable: !1,
            scrollTime: '06:00:00',
            minTime: '00:00:00',
            maxTime: '24:00:00',
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: 'start',
            endParam: 'end',
            timeZoneParam: 'timeZone',
            timeZone: 'local',
            locales: [],
            locale: '',
            timeGridEventMinHeight: 0,
            themeSystem: 'standard',
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: '*',
            eventOrder: 'start,-duration,allDay,title',
            eventLimit: !1,
            eventLimitClick: 'popover',
            dayPopoverFormat: {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5
        },
        Wn = {
            header: { left: 'next,prev today', center: '', right: 'title' },
            buttonIcons: {
                prev: 'fc-icon-chevron-right',
                next: 'fc-icon-chevron-left',
                prevYear: 'fc-icon-chevrons-right',
                nextYear: 'fc-icon-chevrons-left'
            }
        },
        jn = ['header', 'footer', 'buttonText', 'buttonIcons']
    var Zn = [zn, Nn, Vn, Fn, Gn]
    var qn = {
        code: 'en',
        week: { dow: 0, doy: 4 },
        dir: 'ltr',
        buttonText: {
            prev: 'prev',
            next: 'next',
            prevYear: 'prev year',
            nextYear: 'next year',
            year: 'year',
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day',
            list: 'list'
        },
        weekLabel: 'W',
        allDayText: 'all-day',
        eventLimitText: 'more',
        noEventsMessage: 'No events to display'
    }
    function Yn (e) {
        for (
            var t = 0 < e.length ? e[0].code : 'en',
                n = window.FullCalendarLocalesAll || [],
                r = window.FullCalendarLocales || {},
                i = n.concat(Ce(r), e),
                o = { en: qn },
                s = 0,
                a = i;
            s < a.length;
            s++
        ) {
            var l = a[s]
            o[l.code] = l
        }
        return { map: o, defaultCode: t }
    }
    function Xn (e, t) {
        return 'object' != typeof e || Array.isArray(e)
            ? ((r = t),
              (i = [].concat((n = e) || [])),
              (o =
                  (function (e, t) {
                      for (var n = 0; n < e.length; n++)
                          for (
                              var r = e[n].toLocaleLowerCase().split('-'),
                                  i = r.length;
                              0 < i;
                              i--
                          ) {
                              var o = r.slice(0, i).join('-')
                              if (t[o]) return t[o]
                          }
                      return null
                  })(i, r) || qn),
              Kn(n, i, o))
            : Kn(e.code, [e.code], e)
        var n, r, i, o
    }
    function Kn (e, t, n) {
        var r = be([qn, n], ['buttonText'])
        delete r.code
        var i = r.week
        return (
            delete r.week,
            {
                codeArg: e,
                codes: t,
                week: i,
                simpleNumberFormat: new Intl.NumberFormat(e),
                options: r
            }
        )
    }
    var Jn =
        ((Qn.prototype.mutate = function (e, t, n) {
            if (Object.keys(e).length || t.length) {
                var r = n ? this.dynamicOverrides : this.overrides
                Se(r, e)
                for (var i = 0, o = t; i < o.length; i++) delete r[o[i]]
                this.compute()
            }
        }),
        (Qn.prototype.compute = function () {
            var e = ue(
                    this.dynamicOverrides.locales,
                    this.overrides.locales,
                    An.locales
                ),
                t = ue(
                    this.dynamicOverrides.locale,
                    this.overrides.locale,
                    An.locale
                ),
                n = Yn(e),
                r = Xn(t || n.defaultCode, n.map).options,
                i =
                    'rtl' ===
                    ue(this.dynamicOverrides.dir, this.overrides.dir, r.dir)
                        ? Wn
                        : {}
            ;(this.dirDefaults = i),
                (this.localeDefaults = r),
                (this.computed = be(
                    [An, i, r, this.overrides, this.dynamicOverrides],
                    jn
                ))
        }),
        Qn)
    function Qn (e) {
        ;(this.overrides = Se({}, e)),
            (this.dynamicOverrides = {}),
            this.compute()
    }
    var $n = {}
    var er,
        tr =
            ((nr.prototype.getMarkerYear = function (e) {
                return e.getUTCFullYear()
            }),
            (nr.prototype.getMarkerMonth = function (e) {
                return e.getUTCMonth()
            }),
            (nr.prototype.getMarkerDay = function (e) {
                return e.getUTCDate()
            }),
            (nr.prototype.arrayToMarker = W),
            (nr.prototype.markerToArray = A),
            nr)
    function nr () {}
    ;(er = tr), ($n['gregory'] = er)
    var rr =
        /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/
    function ir (e) {
        var t = rr.exec(e)
        if (t) {
            var n = new Date(
                Date.UTC(
                    Number(t[1]),
                    t[3] ? Number(t[3]) - 1 : 0,
                    Number(t[5] || 1),
                    Number(t[7] || 0),
                    Number(t[8] || 0),
                    Number(t[10] || 0),
                    t[12] ? 1e3 * Number('0.' + t[12]) : 0
                )
            )
            if (j(n)) {
                var r = null
                return (
                    t[13] &&
                        (r =
                            ('-' === t[15] ? -1 : 1) *
                            (60 * Number(t[16] || 0) + Number(t[18] || 0))),
                    { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r }
                )
            }
        }
        return null
    }
    var or =
        ((sr.prototype.createMarker = function (e) {
            var t = this.createMarkerMeta(e)
            return null === t ? null : t.marker
        }),
        (sr.prototype.createNowMarker = function () {
            return this.canComputeOffset
                ? this.timestampToMarker(new Date().valueOf())
                : W(G(new Date()))
        }),
        (sr.prototype.createMarkerMeta = function (e) {
            if ('string' == typeof e) return this.parse(e)
            var t = null
            return (
                'number' == typeof e
                    ? (t = this.timestampToMarker(e))
                    : e instanceof Date
                    ? ((e = e.valueOf()),
                      isNaN(e) || (t = this.timestampToMarker(e)))
                    : Array.isArray(e) && (t = W(e)),
                null !== t && j(t)
                    ? { marker: t, isTimeUnspecified: !1, forcedTzo: null }
                    : null
            )
        }),
        (sr.prototype.parse = function (e) {
            var t = ir(e)
            if (null === t) return null
            var n = t.marker,
                r = null
            return (
                null !== t.timeZoneOffset &&
                    (this.canComputeOffset
                        ? (n = this.timestampToMarker(
                              n.valueOf() - 60 * t.timeZoneOffset * 1e3
                          ))
                        : (r = t.timeZoneOffset)),
                {
                    marker: n,
                    isTimeUnspecified: t.isTimeUnspecified,
                    forcedTzo: r
                }
            )
        }),
        (sr.prototype.getYear = function (e) {
            return this.calendarSystem.getMarkerYear(e)
        }),
        (sr.prototype.getMonth = function (e) {
            return this.calendarSystem.getMarkerMonth(e)
        }),
        (sr.prototype.add = function (e, t) {
            var n = this.calendarSystem.markerToArray(e)
            return (
                (n[0] += t.years),
                (n[1] += t.months),
                (n[2] += t.days),
                (n[6] += t.milliseconds),
                this.calendarSystem.arrayToMarker(n)
            )
        }),
        (sr.prototype.subtract = function (e, t) {
            var n = this.calendarSystem.markerToArray(e)
            return (
                (n[0] -= t.years),
                (n[1] -= t.months),
                (n[2] -= t.days),
                (n[6] -= t.milliseconds),
                this.calendarSystem.arrayToMarker(n)
            )
        }),
        (sr.prototype.addYears = function (e, t) {
            var n = this.calendarSystem.markerToArray(e)
            return (n[0] += t), this.calendarSystem.arrayToMarker(n)
        }),
        (sr.prototype.addMonths = function (e, t) {
            var n = this.calendarSystem.markerToArray(e)
            return (n[1] += t), this.calendarSystem.arrayToMarker(n)
        }),
        (sr.prototype.diffWholeYears = function (e, t) {
            var n = this.calendarSystem
            return Z(e) === Z(t) &&
                n.getMarkerDay(e) === n.getMarkerDay(t) &&
                n.getMarkerMonth(e) === n.getMarkerMonth(t)
                ? n.getMarkerYear(t) - n.getMarkerYear(e)
                : null
        }),
        (sr.prototype.diffWholeMonths = function (e, t) {
            var n = this.calendarSystem
            return Z(e) === Z(t) && n.getMarkerDay(e) === n.getMarkerDay(t)
                ? n.getMarkerMonth(t) -
                      n.getMarkerMonth(e) +
                      12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
                : null
        }),
        (sr.prototype.greatestWholeUnit = function (e, t) {
            var n,
                r,
                i,
                o = this.diffWholeYears(e, t)
            return null !== o
                ? { unit: 'year', value: o }
                : null !== (o = this.diffWholeMonths(e, t))
                ? { unit: 'month', value: o }
                : null !== (o = L(e, t))
                ? { unit: 'week', value: o }
                : null !== (o = B(e, t))
                ? { unit: 'day', value: o }
                : ((n = e),
                  de((o = (t.valueOf() - n.valueOf()) / 36e5))
                      ? { unit: 'hour', value: o }
                      : ((r = e),
                        de((o = (t.valueOf() - r.valueOf()) / 6e4))
                            ? { unit: 'minute', value: o }
                            : ((i = e),
                              de((o = (t.valueOf() - i.valueOf()) / 1e3))
                                  ? { unit: 'second', value: o }
                                  : {
                                        unit: 'millisecond',
                                        value: t.valueOf() - e.valueOf()
                                    })))
        }),
        (sr.prototype.countDurationsBetween = function (e, t, n) {
            var r
            return n.years && null !== (r = this.diffWholeYears(e, t))
                ? r / ($(n) / 365)
                : n.months && null !== (r = this.diffWholeMonths(e, t))
                ? r / ($(n) / 30)
                : n.days && null !== (r = B(e, t))
                ? r / $(n)
                : (t.valueOf() - e.valueOf()) / ee(n)
        }),
        (sr.prototype.startOf = function (e, t) {
            return 'year' === t
                ? this.startOfYear(e)
                : 'month' === t
                ? this.startOfMonth(e)
                : 'week' === t
                ? this.startOfWeek(e)
                : 'day' === t
                ? V(e)
                : 'hour' === t
                ? W([
                      (i = e).getUTCFullYear(),
                      i.getUTCMonth(),
                      i.getUTCDate(),
                      i.getUTCHours()
                  ])
                : 'minute' === t
                ? W([
                      (r = e).getUTCFullYear(),
                      r.getUTCMonth(),
                      r.getUTCDate(),
                      r.getUTCHours(),
                      r.getUTCMinutes()
                  ])
                : 'second' === t
                ? W([
                      (n = e).getUTCFullYear(),
                      n.getUTCMonth(),
                      n.getUTCDate(),
                      n.getUTCHours(),
                      n.getUTCMinutes(),
                      n.getUTCSeconds()
                  ])
                : void 0
            var n, r, i
        }),
        (sr.prototype.startOfYear = function (e) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(e)
            ])
        }),
        (sr.prototype.startOfMonth = function (e) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(e),
                this.calendarSystem.getMarkerMonth(e)
            ])
        }),
        (sr.prototype.startOfWeek = function (e) {
            return this.calendarSystem.arrayToMarker([
                this.calendarSystem.getMarkerYear(e),
                this.calendarSystem.getMarkerMonth(e),
                e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7)
            ])
        }),
        (sr.prototype.computeWeekNumber = function (e) {
            return this.weekNumberFunc
                ? this.weekNumberFunc(this.toDate(e))
                : (function (e, t, n) {
                      var r = e.getUTCFullYear(),
                          i = F(e, r, t, n)
                      if (i < 1) return F(e, r - 1, t, n)
                      var o = F(e, r + 1, t, n)
                      return 1 <= o ? Math.min(i, o) : i
                  })(e, this.weekDow, this.weekDoy)
        }),
        (sr.prototype.format = function (e, t, n) {
            return (
                void 0 === n && (n = {}),
                t.format(
                    {
                        marker: e,
                        timeZoneOffset:
                            null != n.forcedTzo
                                ? n.forcedTzo
                                : this.offsetForMarker(e)
                    },
                    this
                )
            )
        }),
        (sr.prototype.formatRange = function (e, t, n, r) {
            return (
                void 0 === r && (r = {}),
                r.isEndExclusive && (t = O(t, -1)),
                n.formatRange(
                    {
                        marker: e,
                        timeZoneOffset:
                            null != r.forcedStartTzo
                                ? r.forcedStartTzo
                                : this.offsetForMarker(e)
                    },
                    {
                        marker: t,
                        timeZoneOffset:
                            null != r.forcedEndTzo
                                ? r.forcedEndTzo
                                : this.offsetForMarker(t)
                    },
                    this
                )
            )
        }),
        (sr.prototype.formatIso = function (e, t) {
            void 0 === t && (t = {})
            var n = null
            return (
                t.omitTimeZoneOffset ||
                    (n =
                        null != t.forcedTzo
                            ? t.forcedTzo
                            : this.offsetForMarker(e)),
                (function (e, t, n) {
                    void 0 === n && (n = !1)
                    var r = (r = e.toISOString()).replace('.000', '')
                    return (
                        n && (r = r.replace('T00:00:00Z', '')),
                        10 < r.length &&
                            (null == t
                                ? (r = r.replace('Z', ''))
                                : 0 !== t && (r = r.replace('Z', st(t, !0)))),
                        r
                    )
                })(e, n, t.omitTime)
            )
        }),
        (sr.prototype.timestampToMarker = function (e) {
            return 'local' === this.timeZone
                ? W(G(new Date(e)))
                : 'UTC' !== this.timeZone && this.namedTimeZoneImpl
                ? W(this.namedTimeZoneImpl.timestampToArray(e))
                : new Date(e)
        }),
        (sr.prototype.offsetForMarker = function (e) {
            return 'local' === this.timeZone
                ? -U(A(e)).getTimezoneOffset()
                : 'UTC' === this.timeZone
                ? 0
                : this.namedTimeZoneImpl
                ? this.namedTimeZoneImpl.offsetForArray(A(e))
                : null
        }),
        (sr.prototype.toDate = function (e, t) {
            return 'local' === this.timeZone
                ? U(A(e))
                : 'UTC' === this.timeZone
                ? new Date(e.valueOf())
                : this.namedTimeZoneImpl
                ? new Date(
                      e.valueOf() -
                          1e3 * this.namedTimeZoneImpl.offsetForArray(A(e)) * 60
                  )
                : new Date(e.valueOf() - (t || 0))
        }),
        sr)
    function sr (e) {
        var t,
            n = (this.timeZone = e.timeZone),
            r = 'local' !== n && 'UTC' !== n
        e.namedTimeZoneImpl &&
            r &&
            (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)),
            (this.canComputeOffset = Boolean(!r || this.namedTimeZoneImpl)),
            (this.calendarSystem = ((t = e.calendarSystem), new $n[t]())),
            (this.locale = e.locale),
            (this.weekDow = e.locale.week.dow),
            (this.weekDoy = e.locale.week.doy),
            'ISO' === e.weekNumberCalculation &&
                ((this.weekDow = 1), (this.weekDoy = 4)),
            'number' == typeof e.firstDay && (this.weekDow = e.firstDay),
            'function' == typeof e.weekNumberCalculation &&
                (this.weekNumberFunc = e.weekNumberCalculation),
            (this.weekLabel =
                null != e.weekLabel ? e.weekLabel : e.locale.options.weekLabel),
            (this.cmdFormatter = e.cmdFormatter)
    }
    var ar = {
            id: String,
            allDayDefault: Boolean,
            eventDataTransform: Function,
            success: Function,
            failure: Function
        },
        lr = 0
    function dr (e, t) {
        return !t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange
    }
    function cr (e, t) {
        for (
            var n,
                r,
                i,
                o,
                s,
                a,
                l,
                d,
                c = t.pluginSystem.hooks.eventSourceDefs,
                u = c.length - 1;
            0 <= u;
            u--
        ) {
            var p = c[u].parseMeta(e)
            if (p) {
                var h =
                    ((r = p),
                    (i = u),
                    (o = t),
                    (d = l = a = s = void 0),
                    (a = he(
                        (n = 'object' == typeof e ? e : {}),
                        ar,
                        {},
                        (s = {})
                    )),
                    (d = _t(s, o, (l = {}))),
                    (a.isFetching = !1),
                    (a.latestFetchId = ''),
                    (a.fetchRange = null),
                    (a.publicId = String(n.id || '')),
                    (a.sourceId = String(lr++)),
                    (a.sourceDefId = i),
                    (a.meta = r),
                    (a.ui = d),
                    (a.extendedProps = l),
                    a)
                return (h._raw = e), h
            }
        }
        return null
    }
    function ur (e, t, n, r) {
        switch (t.type) {
            case 'ADD_EVENT_SOURCES':
                return (function (e, t, n, r) {
                    for (var i = {}, o = 0, s = t; o < s.length; o++) {
                        var a = s[o]
                        i[a.sourceId] = a
                    }
                    n && (i = hr(i, n, r))
                    return Se({}, e, i)
                })(e, t.sources, n ? n.activeRange : null, r)
            case 'REMOVE_EVENT_SOURCE':
                return (
                    (o = e),
                    (s = t.sourceId),
                    we(o, function (e) {
                        return e.sourceId !== s
                    })
                )
            case 'PREV':
            case 'NEXT':
            case 'SET_DATE':
            case 'SET_VIEW_TYPE':
                return n ? hr(e, n.activeRange, r) : e
            case 'FETCH_EVENT_SOURCES':
            case 'CHANGE_TIMEZONE':
                return fr(
                    e,
                    t.sourceIds
                        ? Te(t.sourceIds)
                        : ((i = r),
                          we(e, function (e) {
                              return dr(e, i)
                          })),
                    n ? n.activeRange : null,
                    r
                )
            case 'RECEIVE_EVENTS':
            case 'RECEIVE_EVENT_ERROR':
                return (function (e, t, n, r) {
                    var i,
                        o = e[t]
                    if (o && n === o.latestFetchId)
                        return Se(
                            {},
                            e,
                            (((i = {})[t] = Se({}, o, {
                                isFetching: !1,
                                fetchRange: r
                            })),
                            i)
                        )
                    return e
                })(e, t.sourceId, t.fetchId, t.fetchRange)
            case 'REMOVE_ALL_EVENT_SOURCES':
                return {}
            default:
                return e
        }
        var i, o, s
    }
    var pr = 0
    function hr (e, i, o) {
        return fr(
            e,
            we(e, function (e) {
                return (
                    (n = i),
                    dr((t = e), (r = o))
                        ? !r.opt('lazyFetching') ||
                          !t.fetchRange ||
                          t.isFetching ||
                          n.start < t.fetchRange.start ||
                          n.end > t.fetchRange.end
                        : !t.latestFetchId
                )
                var t, n, r
            }),
            i,
            o
        )
    }
    function fr (e, t, n, r) {
        var i = {}
        for (var o in e) {
            var s = e[o]
            t[o]
                ? (i[o] = (function (o, s, a) {
                      var e =
                              a.pluginSystem.hooks.eventSourceDefs[
                                  o.sourceDefId
                              ],
                          l = String(pr++)
                      return (
                          e.fetch(
                              { eventSource: o, calendar: a, range: s },
                              function (e) {
                                  var t,
                                      n,
                                      r = e.rawEvents,
                                      i = a.opt('eventSourceSuccess')
                                  o.success && (n = o.success(r, e.xhr)),
                                      i && (t = i(r, e.xhr)),
                                      (r = n || t || r),
                                      a.dispatch({
                                          type: 'RECEIVE_EVENTS',
                                          sourceId: o.sourceId,
                                          fetchId: l,
                                          fetchRange: s,
                                          rawEvents: r
                                      })
                              },
                              function (e) {
                                  var t = a.opt('eventSourceFailure')
                                  console.warn(e.message, e),
                                      o.failure && o.failure(e),
                                      t && t(e),
                                      a.dispatch({
                                          type: 'RECEIVE_EVENT_ERROR',
                                          sourceId: o.sourceId,
                                          fetchId: l,
                                          fetchRange: s,
                                          error: e
                                      })
                              }
                          ),
                          Se({}, o, { isFetching: !0, latestFetchId: l })
                      )
                  })(s, n, r))
                : (i[o] = s)
        }
        return i
    }
    var vr =
        ((gr.prototype.buildPrev = function (e, t) {
            var n = this.dateEnv,
                r = n.subtract(
                    n.startOf(t, e.currentRangeUnit),
                    e.dateIncrement
                )
            return this.build(r, -1)
        }),
        (gr.prototype.buildNext = function (e, t) {
            var n = this.dateEnv,
                r = n.add(n.startOf(t, e.currentRangeUnit), e.dateIncrement)
            return this.build(r, 1)
        }),
        (gr.prototype.build = function (e, t, n) {
            void 0 === n && (n = !1)
            var r,
                i,
                o,
                s,
                a,
                l,
                d,
                c,
                u,
                p = this.buildValidRange()
            return (
                (p = this.trimHiddenDays(p)),
                n &&
                    ((c = e),
                    (e =
                        null != (u = p).start && c < u.start
                            ? u.start
                            : null != u.end && c >= u.end
                            ? new Date(u.end.valueOf() - 1)
                            : c)),
                (o = this.buildCurrentRangeInfo(e, t)),
                (s = /^(year|month|week|day)$/.test(o.unit)),
                (a = this.buildRenderRange(
                    this.trimHiddenDays(o.range),
                    o.unit,
                    s
                )),
                (l = a = this.trimHiddenDays(a)),
                this.options.showNonCurrentDates || (l = Le(l, o.range)),
                (r = X(this.options.minTime)),
                (i = X(this.options.maxTime)),
                (l = Le((l = this.adjustActiveRange(l, r, i)), p)),
                (d = Ve(o.range, p)),
                {
                    validRange: p,
                    currentRange: o.range,
                    currentRangeUnit: o.unit,
                    isRangeAllDay: s,
                    activeRange: l,
                    renderRange: a,
                    minTime: r,
                    maxTime: i,
                    isValid: d,
                    dateIncrement: this.buildDateIncrement(o.duration)
                }
            )
        }),
        (gr.prototype.buildValidRange = function () {
            return (
                this.getRangeOption('validRange', this.calendar.getNow()) || {
                    start: null,
                    end: null
                }
            )
        }),
        (gr.prototype.buildCurrentRangeInfo = function (e, t) {
            var n,
                r = this.viewSpec,
                i = this.dateEnv,
                o = null,
                s = null,
                a = null
            return (
                r.duration
                    ? ((o = r.duration),
                      (s = r.durationUnit),
                      (a = this.buildRangeFromDuration(e, t, o, s)))
                    : (n = this.options.dayCount)
                    ? ((s = 'day'), (a = this.buildRangeFromDayCount(e, t, n)))
                    : (a = this.buildCustomVisibleRange(e))
                    ? (s = i.greatestWholeUnit(a.start, a.end).unit)
                    : ((s = te((o = this.getFallbackDuration())).unit),
                      (a = this.buildRangeFromDuration(e, t, o, s))),
                { duration: o, unit: s, range: a }
            )
        }),
        (gr.prototype.getFallbackDuration = function () {
            return X({ day: 1 })
        }),
        (gr.prototype.adjustActiveRange = function (e, t, n) {
            var r = this.dateEnv,
                i = e.start,
                o = e.end
            return (
                this.viewSpec.class.prototype.usesMinMaxTime &&
                    ($(t) < 0 && ((i = V(i)), (i = r.add(i, t))),
                    1 < $(n) && ((o = _((o = V(o)), -1)), (o = r.add(o, n)))),
                { start: i, end: o }
            )
        }),
        (gr.prototype.buildRangeFromDuration = function (e, t, n, r) {
            var i,
                o,
                s,
                a,
                l,
                d = this.dateEnv,
                c = this.options.dateAlignment
            function u () {
                ;(s = d.startOf(e, c)),
                    (a = d.add(s, n)),
                    (l = { start: s, end: a })
            }
            return (
                c ||
                    ((i = this.options.dateIncrement),
                    (c = i && ee((o = X(i))) < ee(n) ? te(o, !J(i)).unit : r)),
                $(n) <= 1 &&
                    this.isHiddenDay(s) &&
                    (s = V((s = this.skipHiddenDays(s, t)))),
                u(),
                this.trimHiddenDays(l) ||
                    ((e = this.skipHiddenDays(e, t)), u()),
                l
            )
        }),
        (gr.prototype.buildRangeFromDayCount = function (e, t, n) {
            var r,
                i = this.dateEnv,
                o = this.options.dateAlignment,
                s = 0,
                a = e
            for (
                o && (a = i.startOf(a, o)),
                    a = V(a),
                    r = a = this.skipHiddenDays(a, t);
                (r = _(r, 1)), this.isHiddenDay(r) || s++, s < n;

            );
            return { start: a, end: r }
        }),
        (gr.prototype.buildCustomVisibleRange = function (e) {
            var t = this.dateEnv,
                n = this.getRangeOption('visibleRange', t.toDate(e))
            return !n || (null != n.start && null != n.end) ? n : null
        }),
        (gr.prototype.buildRenderRange = function (e, t, n) {
            return e
        }),
        (gr.prototype.buildDateIncrement = function (e) {
            var t,
                n = this.options.dateIncrement
            return n
                ? X(n)
                : (t = this.options.dateAlignment)
                ? X(1, t)
                : e || X({ days: 1 })
        }),
        (gr.prototype.getRangeOption = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n]
            var r,
                i,
                o,
                s,
                a = this.options[e]
            return (
                'function' == typeof a && (a = a.apply(null, t)),
                a &&
                    ((r = a),
                    (i = this.dateEnv),
                    (s = o = null),
                    r.start && (o = i.createMarker(r.start)),
                    r.end && (s = i.createMarker(r.end)),
                    (a =
                        (!o && !s) || (o && s && s < o)
                            ? null
                            : { start: o, end: s })),
                (a = a && ve(a))
            )
        }),
        (gr.prototype.initHiddenDays = function () {
            var e,
                t = this.options.hiddenDays || [],
                n = [],
                r = 0
            for (
                !1 === this.options.weekends && t.push(0, 6), e = 0;
                e < 7;
                e++
            )
                (n[e] = -1 !== t.indexOf(e)) || r++
            if (!r) throw new Error('invalid hiddenDays')
            this.isHiddenDayHash = n
        }),
        (gr.prototype.trimHiddenDays = function (e) {
            var t = e.start,
                n = e.end,
                t = t && this.skipHiddenDays(t),
                n = n && this.skipHiddenDays(n, -1, !0)
            return null == t || null == n || t < n ? { start: t, end: n } : null
        }),
        (gr.prototype.isHiddenDay = function (e) {
            return (
                e instanceof Date && (e = e.getUTCDay()),
                this.isHiddenDayHash[e]
            )
        }),
        (gr.prototype.skipHiddenDays = function (e, t, n) {
            for (
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];

            )
                e = _(e, t)
            return e
        }),
        gr)
    function gr (e, t) {
        ;(this.viewSpec = e),
            (this.options = e.options),
            (this.dateEnv = t.dateEnv),
            (this.calendar = t),
            this.initHiddenDays()
    }
    function mr (e, t, n) {
        for (
            var r = (function (e, t) {
                    switch (t.type) {
                        case 'SET_VIEW_TYPE':
                            return t.viewType
                        default:
                            return e
                    }
                })(e.viewType, t),
                i = (function (e, t, n, r, i) {
                    var o
                    switch (t.type) {
                        case 'PREV':
                            o = i.dateProfileGenerators[r].buildPrev(e, n)
                            break
                        case 'NEXT':
                            o = i.dateProfileGenerators[r].buildNext(e, n)
                            break
                        case 'SET_DATE':
                            ;(e.activeRange &&
                                Ge(e.currentRange, t.dateMarker)) ||
                                (o = i.dateProfileGenerators[r].build(
                                    t.dateMarker,
                                    void 0,
                                    !0
                                ))
                            break
                        case 'SET_VIEW_TYPE':
                            var s = i.dateProfileGenerators[r]
                            if (!s)
                                throw new Error(
                                    r
                                        ? 'The FullCalendar view "' +
                                          r +
                                          '" does not exist. Make sure your plugins are loaded correctly.'
                                        : 'No available FullCalendar view plugins.'
                                )
                            o = s.build(t.dateMarker || n, void 0, !0)
                    }
                    return !o ||
                        !o.isValid ||
                        (e &&
                            (function (e, t) {
                                return (
                                    Be(e.validRange, t.validRange) &&
                                    Be(e.activeRange, t.activeRange) &&
                                    Be(e.renderRange, t.renderRange) &&
                                    Q(e.minTime, t.minTime) &&
                                    Q(e.maxTime, t.maxTime)
                                )
                            })(e, o))
                        ? e
                        : o
                })(e.dateProfile, t, e.currentDate, r, n),
                o = ur(e.eventSources, t, i, n),
                s = Se({}, e, {
                    viewType: r,
                    dateProfile: i,
                    currentDate: (function (e, t, n) {
                        switch (t.type) {
                            case 'PREV':
                            case 'NEXT':
                                return Ge(n.currentRange, e)
                                    ? e
                                    : n.currentRange.start
                            case 'SET_DATE':
                            case 'SET_VIEW_TYPE':
                                var r = t.dateMarker || e
                                return n.activeRange && !Ge(n.activeRange, r)
                                    ? n.currentRange.start
                                    : r
                            default:
                                return e
                        }
                    })(e.currentDate, t, i),
                    eventSources: o,
                    eventStore: bt(e.eventStore, t, o, i, n),
                    dateSelection: (function (e, t) {
                        switch (t.type) {
                            case 'SELECT_DATES':
                                return t.selection
                            case 'UNSELECT_DATES':
                                return null
                            default:
                                return e
                        }
                    })(e.dateSelection, t),
                    eventSelection: (function (e, t) {
                        switch (t.type) {
                            case 'SELECT_EVENT':
                                return t.eventInstanceId
                            case 'UNSELECT_EVENT':
                                return ''
                            default:
                                return e
                        }
                    })(e.eventSelection, t),
                    eventDrag: (function (e, t) {
                        switch (t.type) {
                            case 'SET_EVENT_DRAG':
                                var n = t.state
                                return {
                                    affectedEvents: n.affectedEvents,
                                    mutatedEvents: n.mutatedEvents,
                                    isEvent: n.isEvent,
                                    origSeg: n.origSeg
                                }
                            case 'UNSET_EVENT_DRAG':
                                return null
                            default:
                                return e
                        }
                    })(e.eventDrag, t),
                    eventResize: (function (e, t) {
                        switch (t.type) {
                            case 'SET_EVENT_RESIZE':
                                var n = t.state
                                return {
                                    affectedEvents: n.affectedEvents,
                                    mutatedEvents: n.mutatedEvents,
                                    isEvent: n.isEvent,
                                    origSeg: n.origSeg
                                }
                            case 'UNSET_EVENT_RESIZE':
                                return null
                            default:
                                return e
                        }
                    })(e.eventResize, t),
                    eventSourceLoadingLevel: yr(o),
                    loadingLevel: yr(o)
                }),
                a = 0,
                l = n.pluginSystem.hooks.reducers;
            a < l.length;
            a++
        )
            s = (0, l[a])(s, t, n)
        return s
    }
    function yr (e) {
        var t = 0
        for (var n in e) e[n].isFetching && t++
        return t
    }
    var Sr = { start: null, end: null, allDay: Boolean }
    function Er (e, t, n) {
        var r = (function (e, t) {
                var n = {},
                    r = he(e, Sr, {}, n),
                    i = r.start ? t.createMarkerMeta(r.start) : null,
                    o = r.end ? t.createMarkerMeta(r.end) : null,
                    s = r.allDay
                null == s &&
                    (s =
                        i && i.isTimeUnspecified && (!o || o.isTimeUnspecified))
                return (
                    (n.range = {
                        start: i ? i.marker : null,
                        end: o ? o.marker : null
                    }),
                    (n.allDay = s),
                    n
                )
            })(e, t),
            i = r.range
        if (!i.start) return null
        if (!i.end) {
            if (null == n) return null
            i.end = t.add(i.start, n)
        }
        return r
    }
    function br (e, t, n, r) {
        if (t[e]) return t[e]
        var i = (function (e, t, n, r) {
            function i (e) {
                return o && null !== o[e]
                    ? o[e]
                    : s && null !== s[e]
                    ? s[e]
                    : null
            }
            var o = n[e],
                s = r[e],
                a = i('class'),
                l = i('superType')
            !l && a && (l = wr(a, r) || wr(a, n))
            var d = null
            if (l) {
                if (l === e)
                    throw new Error(
                        "Can't have a custom view type that references itself"
                    )
                d = br(l, t, n, r)
            }
            !a && d && (a = d.class)
            return a
                ? {
                      type: e,
                      class: a,
                      defaults: Se({}, d ? d.defaults : {}, o ? o.options : {}),
                      overrides: Se(
                          {},
                          d ? d.overrides : {},
                          s ? s.options : {}
                      )
                  }
                : null
        })(e, t, n, r)
        return i && (t[e] = i), i
    }
    function wr (e, t) {
        var n = Object.getPrototypeOf(e.prototype)
        for (var r in t) {
            var i = t[r]
            if (i.class && i.class.prototype === n) return r
        }
        return ''
    }
    function Dr (e) {
        return De(e, Cr)
    }
    var Tr = { type: String, class: null }
    function Cr (e) {
        'function' == typeof e && (e = { class: e })
        var t = {},
            n = he(e, Tr, {}, t)
        return { superType: n.type, class: n.class, options: t }
    }
    function Rr (e, t) {
        var n = Dr(e),
            r = Dr(t.overrides.views)
        return De(
            (function (e, t) {
                var n,
                    r = {}
                for (n in e) br(n, r, e, t)
                for (n in t) br(n, r, e, t)
                return r
            })(n, r),
            function (e) {
                return (function (r, e, t) {
                    var n =
                            r.overrides.duration ||
                            r.defaults.duration ||
                            t.dynamicOverrides.duration ||
                            t.overrides.duration,
                        i = null,
                        o = '',
                        s = '',
                        a = {}
                    {
                        var l
                        n &&
                            (i = X(n)) &&
                            ((l = te(i, !J(n))),
                            (o = l.unit),
                            1 === l.value &&
                                (a = e[(s = o)] ? e[o].options : {}))
                    }
                    function d (e) {
                        var t = e.buttonText || {},
                            n = r.defaults.buttonTextKey
                        return null != n && null != t[n]
                            ? t[n]
                            : null != t[r.type]
                            ? t[r.type]
                            : null != t[s]
                            ? t[s]
                            : void 0
                    }
                    return {
                        type: r.type,
                        class: r.class,
                        duration: i,
                        durationUnit: o,
                        singleUnit: s,
                        options: Se(
                            {},
                            An,
                            r.defaults,
                            t.dirDefaults,
                            t.localeDefaults,
                            t.overrides,
                            a,
                            r.overrides,
                            t.dynamicOverrides
                        ),
                        buttonTextOverride:
                            d(t.dynamicOverrides) ||
                            d(t.overrides) ||
                            r.overrides.buttonText,
                        buttonTextDefault:
                            d(t.localeDefaults) ||
                            d(t.dirDefaults) ||
                            r.defaults.buttonText ||
                            d(An) ||
                            r.type
                    }
                })(e, r, t)
            }
        )
    }
    var Ir,
        kr =
            (ye(xr, (Ir = Rn)),
            (xr.prototype.destroy = function () {
                Ir.prototype.destroy.call(this),
                    this._renderLayout.unrender(),
                    r(this.el)
            }),
            (xr.prototype.render = function (e) {
                this._renderLayout(e.layout),
                    this._updateTitle(e.title),
                    this._updateActiveButton(e.activeButton),
                    this._updateToday(e.isTodayEnabled),
                    this._updatePrev(e.isPrevEnabled),
                    this._updateNext(e.isNextEnabled)
            }),
            (xr.prototype.renderLayout = function (e) {
                var t = this.el
                ;(this.viewsWithButtons = []),
                    b(t, this.renderSection('left', e.left)),
                    b(t, this.renderSection('center', e.center)),
                    b(t, this.renderSection('right', e.right))
            }),
            (xr.prototype.unrenderLayout = function () {
                this.el.innerHTML = ''
            }),
            (xr.prototype.renderSection = function (e, t) {
                var h = this,
                    n = this.context,
                    f = n.theme,
                    v = n.calendar,
                    r = v.optionsManager,
                    g = v.viewSpecs,
                    i = s('div', { className: 'fc-' + e }),
                    m = r.computed.customButtons || {},
                    y = r.overrides.buttonText || {},
                    S = r.computed.buttonText || {}
                return (
                    t &&
                        t.split(' ').forEach(function (e, t) {
                            var n,
                                r,
                                u = [],
                                p = !0
                            e.split(',').forEach(function (e, t) {
                                var n, r, i, o, s, a, l, d, c
                                'title' === e
                                    ? (u.push(E('<h2>&nbsp;</h2>')), (p = !1))
                                    : ((n = m[e])
                                          ? ((i = function (e) {
                                                n.click && n.click.call(d, e)
                                            }),
                                            (o =
                                                f.getCustomButtonIconClass(
                                                    n
                                                )) ||
                                                (o = f.getIconClass(e)) ||
                                                (s = n.text))
                                          : (r = g[e])
                                          ? (h.viewsWithButtons.push(e),
                                            (i = function () {
                                                v.changeView(e)
                                            }),
                                            (s = r.buttonTextOverride) ||
                                                (o = f.getIconClass(e)) ||
                                                (s = r.buttonTextDefault))
                                          : v[e] &&
                                            ((i = function () {
                                                v[e]()
                                            }),
                                            (s = y[e]) ||
                                                (o = f.getIconClass(e)) ||
                                                (s = S[e])),
                                      i &&
                                          ((l = [
                                              'fc-' + e + '-button',
                                              f.getClass('button')
                                          ]),
                                          s
                                              ? ((a = xt(s)), (c = ''))
                                              : o &&
                                                ((a =
                                                    "<span class='" +
                                                    o +
                                                    "'></span>"),
                                                (c =
                                                    ' aria-label="' + e + '"')),
                                          (d = E(
                                              '<button type="button" class="' +
                                                  l.join(' ') +
                                                  '"' +
                                                  c +
                                                  '>' +
                                                  a +
                                                  '</button>'
                                          )).addEventListener('click', i),
                                          u.push(d)))
                            }),
                                1 < u.length
                                    ? ((n = document.createElement('div')),
                                      (r = f.getClass('buttonGroup')),
                                      p && r && n.classList.add(r),
                                      b(n, u),
                                      i.appendChild(n))
                                    : b(i, u)
                        }),
                    i
                )
            }),
            (xr.prototype.updateToday = function (e) {
                this.toggleButtonEnabled('today', e)
            }),
            (xr.prototype.updatePrev = function (e) {
                this.toggleButtonEnabled('prev', e)
            }),
            (xr.prototype.updateNext = function (e) {
                this.toggleButtonEnabled('next', e)
            }),
            (xr.prototype.updateTitle = function (t) {
                p(this.el, 'h2').forEach(function (e) {
                    e.innerText = t
                })
            }),
            (xr.prototype.updateActiveButton = function (t) {
                var n = this.context.theme.getClass('buttonActive')
                p(this.el, 'button').forEach(function (e) {
                    t && e.classList.contains('fc-' + t + '-button')
                        ? e.classList.add(n)
                        : e.classList.remove(n)
                })
            }),
            (xr.prototype.toggleButtonEnabled = function (e, t) {
                p(this.el, '.fc-' + e + '-button').forEach(function (e) {
                    e.disabled = !t
                })
            }),
            xr)
    function xr (e) {
        var t = Ir.call(this) || this
        return (
            (t._renderLayout = Zt(t.renderLayout, t.unrenderLayout)),
            (t._updateTitle = Zt(t.updateTitle, null, [t._renderLayout])),
            (t._updateActiveButton = Zt(t.updateActiveButton, null, [
                t._renderLayout
            ])),
            (t._updateToday = Zt(t.updateToday, null, [t._renderLayout])),
            (t._updatePrev = Zt(t.updatePrev, null, [t._renderLayout])),
            (t._updateNext = Zt(t.updateNext, null, [t._renderLayout])),
            (t.el = s('div', { className: 'fc-toolbar ' + e })),
            t
        )
    }
    var Mr,
        Pr =
            (ye(Hr, (Mr = Rn)),
            (Hr.prototype.render = function (e, t) {
                this.freezeHeight()
                var n = this.computeTitle(e.dateProfile, e.viewSpec.options)
                this.renderSkeleton(t),
                    this.renderToolbars(
                        e.viewSpec,
                        e.dateProfile,
                        e.currentDate,
                        n
                    ),
                    this.renderView(e, n),
                    this.updateSize(),
                    this.thawHeight()
            }),
            (Hr.prototype.destroy = function () {
                this.header && this.header.destroy(),
                    this.footer && this.footer.destroy(),
                    this.renderSkeleton.unrender(),
                    Mr.prototype.destroy.call(this)
            }),
            (Hr.prototype._renderSkeleton = function (e) {
                this.updateElClassNames(e),
                    m(
                        this.el,
                        (this.contentEl = s('div', {
                            className: 'fc-view-container'
                        }))
                    )
                for (
                    var t = e.calendar,
                        n = 0,
                        r = t.pluginSystem.hooks.viewContainerModifiers;
                    n < r.length;
                    n++
                )
                    (0, r[n])(this.contentEl, t)
            }),
            (Hr.prototype._unrenderSkeleton = function () {
                this.view &&
                    ((this.savedScroll = this.view.queryScroll()),
                    this.view.destroy(),
                    (this.view = null)),
                    r(this.contentEl),
                    this.removeElClassNames()
            }),
            (Hr.prototype.removeElClassNames = function () {
                for (
                    var e = this.el.classList, t = 0, n = this.elClassNames;
                    t < n.length;
                    t++
                ) {
                    var r = n[t]
                    e.remove(r)
                }
                this.elClassNames = []
            }),
            (Hr.prototype.updateElClassNames = function (e) {
                this.removeElClassNames()
                var t = e.theme,
                    n = e.options
                this.elClassNames = ['fc', 'fc-' + n.dir, t.getClass('widget')]
                for (
                    var r = this.el.classList, i = 0, o = this.elClassNames;
                    i < o.length;
                    i++
                ) {
                    var s = o[i]
                    r.add(s)
                }
            }),
            (Hr.prototype._renderToolbars = function (e, t, n, r) {
                var i = this.context,
                    o = this.header,
                    s = this.footer,
                    a = i.options,
                    l = i.calendar,
                    d = a.header,
                    c = a.footer,
                    u = this.props.dateProfileGenerator,
                    p = l.getNow(),
                    h = u.build(p),
                    f = u.buildPrev(t, n),
                    v = u.buildNext(t, n),
                    g = {
                        title: r,
                        activeButton: e.type,
                        isTodayEnabled: h.isValid && !Ge(t.currentRange, p),
                        isPrevEnabled: f.isValid,
                        isNextEnabled: v.isValid
                    }
                d
                    ? (o ||
                          ((o = this.header = new kr('fc-header-toolbar')),
                          m(this.el, o.el)),
                      o.receiveProps(Se({ layout: d }, g), i))
                    : o && (o.destroy(), (o = this.header = null)),
                    c
                        ? (s ||
                              ((s = this.footer = new kr('fc-footer-toolbar')),
                              b(this.el, s.el)),
                          s.receiveProps(Se({ layout: c }, g), i))
                        : s && (s.destroy(), (s = this.footer = null))
            }),
            (Hr.prototype._unrenderToolbars = function () {
                this.header && (this.header.destroy(), (this.header = null)),
                    this.footer && (this.footer.destroy(), (this.footer = null))
            }),
            (Hr.prototype.renderView = function (e, t) {
                var n = this.view,
                    r = this.context,
                    i = r.calendar,
                    o = r.options,
                    s = e.viewSpec,
                    a = e.dateProfileGenerator
                ;(n && n.viewSpec === s) ||
                    (n && n.destroy(),
                    (n = this.view = new s.class(s, this.contentEl)),
                    this.savedScroll &&
                        (n.addScroll(this.savedScroll, !0),
                        (this.savedScroll = null))),
                    (n.title = t)
                for (
                    var l = {
                            dateProfileGenerator: a,
                            dateProfile: e.dateProfile,
                            businessHours: this.parseBusinessHours(
                                s.options.businessHours
                            ),
                            eventStore: e.eventStore,
                            eventUiBases: e.eventUiBases,
                            dateSelection: e.dateSelection,
                            eventSelection: e.eventSelection,
                            eventDrag: e.eventDrag,
                            eventResize: e.eventResize
                        },
                        d = 0,
                        c = this.buildViewPropTransformers(
                            i.pluginSystem.hooks.viewPropsTransformers
                        );
                    d < c.length;
                    d++
                ) {
                    var u = c[d]
                    Se(l, u.transform(l, s, e, o))
                }
                n.receiveProps(
                    l,
                    this.buildComponentContext(this.context, s, n)
                )
            }),
            (Hr.prototype.updateSize = function (e) {
                void 0 === e && (e = !1)
                var t = this.view
                t &&
                    ((!e && null != this.isHeightAuto) ||
                        this.computeHeightVars(),
                    t.updateSize(e, this.viewHeight, this.isHeightAuto),
                    t.updateNowIndicator(),
                    t.popScroll(e))
            }),
            (Hr.prototype.computeHeightVars = function () {
                var e,
                    t = this.context.calendar,
                    n = t.opt('height'),
                    r = t.opt('contentHeight')
                ;(this.isHeightAuto = 'auto' === n || 'auto' === r),
                    'number' == typeof r
                        ? (this.viewHeight = r)
                        : 'function' == typeof r
                        ? (this.viewHeight = r())
                        : 'number' == typeof n
                        ? (this.viewHeight = n - this.queryToolbarsHeight())
                        : 'function' == typeof n
                        ? (this.viewHeight = n() - this.queryToolbarsHeight())
                        : 'parent' === n
                        ? ((e = this.el.parentNode),
                          (this.viewHeight =
                              e.getBoundingClientRect().height -
                              this.queryToolbarsHeight()))
                        : (this.viewHeight = Math.round(
                              this.contentEl.getBoundingClientRect().width /
                                  Math.max(t.opt('aspectRatio'), 0.5)
                          ))
            }),
            (Hr.prototype.queryToolbarsHeight = function () {
                var e = 0
                return (
                    this.header && (e += R(this.header.el)),
                    this.footer && (e += R(this.footer.el)),
                    e
                )
            }),
            (Hr.prototype.freezeHeight = function () {
                f(this.el, {
                    height: this.el.getBoundingClientRect().height,
                    overflow: 'hidden'
                })
            }),
            (Hr.prototype.thawHeight = function () {
                f(this.el, { height: '', overflow: '' })
            }),
            Hr)
    function Hr (e) {
        var t = Mr.call(this) || this
        return (
            (t.elClassNames = []),
            (t.renderSkeleton = Zt(t._renderSkeleton, t._unrenderSkeleton)),
            (t.renderToolbars = Zt(t._renderToolbars, t._unrenderToolbars, [
                t.renderSkeleton
            ])),
            (t.buildComponentContext = Ae(Or)),
            (t.buildViewPropTransformers = Ae(zr)),
            (t.el = e),
            (t.computeTitle = Ae(_r)),
            (t.parseBusinessHours = Ae(function (e) {
                return jt(e, t.context.calendar)
            })),
            t
        )
    }
    function _r (e, t) {
        var n = /^(year|month)$/.test(e.currentRangeUnit)
            ? e.currentRange
            : e.activeRange
        return this.context.dateEnv.formatRange(
            n.start,
            n.end,
            ot(
                t.titleFormat ||
                    (function (e) {
                        var t = e.currentRangeUnit
                        {
                            if ('year' === t) return { year: 'numeric' }
                            if ('month' === t)
                                return { year: 'numeric', month: 'long' }
                            var n = B(e.currentRange.start, e.currentRange.end)
                            return null !== n && 1 < n
                                ? {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric'
                                  }
                                : {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric'
                                  }
                        }
                    })(e),
                t.titleRangeSeparator
            ),
            { isEndExclusive: e.isRangeAllDay }
        )
    }
    function Or (e, t, n) {
        return e.extend(t.options, n)
    }
    function zr (e) {
        return e.map(function (e) {
            return new e()
        })
    }
    var Nr = ((Lr.prototype.destroy = function () {}), Lr)
    function Lr (e) {
        this.component = e.component
    }
    var Br,
        Vr = {},
        Fr = (ye(Gr, (Br = Nr)), Gr)
    function Gr (e) {
        var d = Br.call(this, e) || this
        d.handleSegClick = function (e, t) {
            var n,
                r,
                i = d.component,
                o = i.context,
                s = o.calendar,
                a = o.view,
                l = vt(t)
            l &&
                i.isValidSegDownEl(e.target) &&
                ((r = (n = c(e.target, '.fc-has-url'))
                    ? n.querySelector('a[href]').href
                    : ''),
                s.publiclyTrigger('eventClick', [
                    {
                        el: t,
                        event: new ut(
                            i.context.calendar,
                            l.eventRange.def,
                            l.eventRange.instance
                        ),
                        jsEvent: e,
                        view: a
                    }
                ]),
                r && !e.defaultPrevented && (window.location.href = r))
        }
        var t = e.component
        return (
            (d.destroy = M(
                t.el,
                'click',
                t.fgSegSelector + ',' + t.bgSegSelector,
                d.handleSegClick
            )),
            d
        )
    }
    var Ur,
        Ar =
            (ye(Wr, (Ur = Nr)),
            (Wr.prototype.destroy = function () {
                this.removeHoverListeners(),
                    this.component.context.calendar.off(
                        'eventElRemove',
                        this.handleEventElRemove
                    )
            }),
            (Wr.prototype.triggerEvent = function (e, t, n) {
                var r = this.component,
                    i = r.context,
                    o = i.calendar,
                    s = i.view,
                    a = vt(n)
                ;(t && !r.isValidSegDownEl(t.target)) ||
                    o.publiclyTrigger(e, [
                        {
                            el: n,
                            event: new ut(
                                o,
                                a.eventRange.def,
                                a.eventRange.instance
                            ),
                            jsEvent: t,
                            view: s
                        }
                    ])
            }),
            Wr)
    function Wr (e) {
        var n = Ur.call(this, e) || this
        ;(n.handleEventElRemove = function (e) {
            e === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl)
        }),
            (n.handleSegEnter = function (e, t) {
                vt(t) &&
                    (t.classList.add('fc-allow-mouse-resize'),
                    (n.currentSegEl = t),
                    n.triggerEvent('eventMouseEnter', e, t))
            }),
            (n.handleSegLeave = function (e, t) {
                n.currentSegEl &&
                    (t.classList.remove('fc-allow-mouse-resize'),
                    (n.currentSegEl = null),
                    n.triggerEvent('eventMouseLeave', e, t))
            })
        var t,
            r,
            i,
            o,
            s,
            a = e.component
        return (
            (n.removeHoverListeners =
                ((t = a.el),
                (r = a.fgSegSelector + ',' + a.bgSegSelector),
                (i = n.handleSegEnter),
                (o = n.handleSegLeave),
                M(t, 'mouseover', r, function (e, t) {
                    var n
                    t !== s &&
                        (i(e, (s = t)),
                        (n = function (e) {
                            ;(s = null),
                                o(e, t),
                                t.removeEventListener('mouseleave', n)
                        }),
                        t.addEventListener('mouseleave', n))
                }))),
            a.context.calendar.on('eventElRemove', n.handleEventElRemove),
            n
        )
    }
    var jr,
        Zr = (ye(qr, (jr = bn)), qr)
    function qr () {
        return (null !== jr && jr.apply(this, arguments)) || this
    }
    ;(Zr.prototype.classes = {
        widget: 'fc-unthemed',
        widgetHeader: 'fc-widget-header',
        widgetContent: 'fc-widget-content',
        buttonGroup: 'fc-button-group',
        button: 'fc-button fc-button-primary',
        buttonActive: 'fc-button-active',
        popoverHeader: 'fc-widget-header',
        popoverContent: 'fc-widget-content',
        headerRow: 'fc-widget-header',
        dayRow: 'fc-widget-content',
        listView: 'fc-widget-content'
    }),
        (Zr.prototype.baseIconClass = 'fc-icon'),
        (Zr.prototype.iconClasses = {
            close: 'fc-icon-x',
            prev: 'fc-icon-chevron-left',
            next: 'fc-icon-chevron-right',
            prevYear: 'fc-icon-chevrons-left',
            nextYear: 'fc-icon-chevrons-right'
        }),
        (Zr.prototype.iconOverrideOption = 'buttonIcons'),
        (Zr.prototype.iconOverrideCustomButtonOption = 'icon'),
        (Zr.prototype.iconOverridePrefix = 'fc-icon-')
    var Yr =
        ((Xr.prototype.addPluginInputs = function (e) {
            for (
                var t = 0,
                    n = (function (e) {
                        for (var t = [], n = 0, r = e; n < r.length; n++) {
                            var i,
                                o = r[n]
                            'string' == typeof o
                                ? ((i = 'FullCalendar' + ae(o)),
                                  window[i]
                                      ? t.push(window[i].default)
                                      : console.warn(
                                            'Plugin file not loaded for ' + o
                                        ))
                                : t.push(o)
                        }
                        return Zn.concat(t)
                    })(e);
                t < n.length;
                t++
            ) {
                var r = n[t]
                this.pluginSystem.add(r)
            }
        }),
        Object.defineProperty(Xr.prototype, 'view', {
            get: function () {
                return this.component ? this.component.view : null
            },
            enumerable: !0,
            configurable: !0
        }),
        (Xr.prototype.render = function () {
            this.component
                ? this.requestRerender()
                : ((this.component = new Pr(this.el)),
                  (this.renderableEventStore = He()),
                  this.bindHandlers(),
                  this.executeRender())
        }),
        (Xr.prototype.destroy = function () {
            if (this.component) {
                this.unbindHandlers(),
                    this.component.destroy(),
                    (this.component = null)
                for (
                    var e = 0, t = this.calendarInteractions;
                    e < t.length;
                    e++
                )
                    t[e].destroy()
                this.publiclyTrigger('_destroyed')
            }
        }),
        (Xr.prototype.bindHandlers = function () {
            var a = this
            ;(this.removeNavLinkListener = M(
                this.el,
                'click',
                'a[data-goto]',
                function (e, t) {
                    var n = (n = t.getAttribute('data-goto'))
                            ? JSON.parse(n)
                            : {},
                        r = a.dateEnv,
                        i = r.createMarker(n.date),
                        o = n.type,
                        s = a.viewOpt('navLink' + ae(o) + 'Click')
                    'function' == typeof s
                        ? s(r.toDate(i), e)
                        : ('string' == typeof s && (o = s), a.zoomTo(i, o))
                }
            )),
                this.opt('handleWindowResize') &&
                    window.addEventListener(
                        'resize',
                        (this.windowResizeProxy = pe(
                            this.windowResize.bind(this),
                            this.opt('windowResizeDelay')
                        ))
                    )
        }),
        (Xr.prototype.unbindHandlers = function () {
            this.removeNavLinkListener(),
                this.windowResizeProxy &&
                    (window.removeEventListener(
                        'resize',
                        this.windowResizeProxy
                    ),
                    (this.windowResizeProxy = null))
        }),
        (Xr.prototype.hydrate = function () {
            var e = this
            this.state = this.buildInitialState()
            var t = this.opt('eventSources') || [],
                n = this.opt('events'),
                r = []
            n && t.unshift(n)
            for (var i = 0, o = t; i < o.length; i++) {
                var s = cr(o[i], this)
                s && r.push(s)
            }
            this.batchRendering(function () {
                e.dispatch({ type: 'INIT' }),
                    e.dispatch({ type: 'ADD_EVENT_SOURCES', sources: r }),
                    e.dispatch({
                        type: 'SET_VIEW_TYPE',
                        viewType:
                            e.opt('defaultView') ||
                            e.pluginSystem.hooks.defaultView
                    })
            })
        }),
        (Xr.prototype.buildInitialState = function () {
            return {
                viewType: null,
                loadingLevel: 0,
                eventSourceLoadingLevel: 0,
                currentDate: this.getInitialDate(),
                dateProfile: null,
                eventSources: {},
                eventStore: He(),
                dateSelection: null,
                eventSelection: '',
                eventDrag: null,
                eventResize: null
            }
        }),
        (Xr.prototype.dispatch = function (e) {
            if ((this.actionQueue.push(e), !this.isReducing)) {
                this.isReducing = !0
                for (var t = this.state; this.actionQueue.length; )
                    this.state = this.reduce(
                        this.state,
                        this.actionQueue.shift(),
                        this
                    )
                var n = this.state
                ;(this.isReducing = !1),
                    !t.loadingLevel && n.loadingLevel
                        ? this.publiclyTrigger('loading', [!0])
                        : t.loadingLevel &&
                          !n.loadingLevel &&
                          this.publiclyTrigger('loading', [!1])
                var r = this.component && this.component.view
                t.eventStore !== n.eventStore &&
                    t.eventStore &&
                    (this.isEventsUpdated = !0),
                    t.dateProfile !== n.dateProfile &&
                        (t.dateProfile &&
                            r &&
                            this.publiclyTrigger('datesDestroy', [
                                { view: r, el: r.el }
                            ]),
                        (this.isDatesUpdated = !0)),
                    t.viewType !== n.viewType &&
                        (t.viewType &&
                            r &&
                            this.publiclyTrigger('viewSkeletonDestroy', [
                                { view: r, el: r.el }
                            ]),
                        (this.isViewUpdated = !0)),
                    this.requestRerender()
            }
        }),
        (Xr.prototype.reduce = mr),
        (Xr.prototype.requestRerender = function () {
            ;(this.needsRerender = !0), this.delayedRerender()
        }),
        (Xr.prototype.tryRerender = function () {
            this.component &&
                this.needsRerender &&
                !this.renderingPauseDepth &&
                !this.isRendering &&
                this.executeRender()
        }),
        (Xr.prototype.batchRendering = function (e) {
            this.renderingPauseDepth++,
                e(),
                this.renderingPauseDepth--,
                this.needsRerender && this.requestRerender()
        }),
        (Xr.prototype.executeRender = function () {
            ;(this.needsRerender = !1),
                (this.isRendering = !0),
                this.renderComponent(),
                (this.isRendering = !1),
                this.needsRerender && this.delayedRerender()
        }),
        (Xr.prototype.renderComponent = function () {
            var e = this.state,
                t = this.component,
                n = e.viewType,
                r = this.viewSpecs[n]
            if (!r) throw new Error('View type "' + n + '" is not valid')
            var i = (this.renderableEventStore =
                    e.eventSourceLoadingLevel &&
                    !this.opt('progressiveEventRendering')
                        ? this.renderableEventStore
                        : e.eventStore),
                o = this.buildEventUiSingleBase(r.options),
                s = this.buildEventUiBySource(e.eventSources),
                a = (this.eventUiBases = this.buildEventUiBases(i.defs, o, s))
            t.receiveProps(
                Se({}, e, {
                    viewSpec: r,
                    dateProfileGenerator: this.dateProfileGenerators[n],
                    dateProfile: e.dateProfile,
                    eventStore: i,
                    eventUiBases: a,
                    dateSelection: e.dateSelection,
                    eventSelection: e.eventSelection,
                    eventDrag: e.eventDrag,
                    eventResize: e.eventResize
                }),
                this.buildComponentContext(
                    this.theme,
                    this.dateEnv,
                    this.optionsManager.computed
                )
            ),
                this.isViewUpdated &&
                    ((this.isViewUpdated = !1),
                    this.publiclyTrigger('viewSkeletonRender', [
                        { view: t.view, el: t.view.el }
                    ])),
                this.isDatesUpdated &&
                    ((this.isDatesUpdated = !1),
                    this.publiclyTrigger('datesRender', [
                        { view: t.view, el: t.view.el }
                    ])),
                this.isEventsUpdated && (this.isEventsUpdated = !1),
                this.releaseAfterSizingTriggers()
        }),
        (Xr.prototype.setOption = function (e, t) {
            var n
            this.mutateOptions((((n = {})[e] = t), n), [], !0)
        }),
        (Xr.prototype.getOption = function (e) {
            return this.optionsManager.computed[e]
        }),
        (Xr.prototype.opt = function (e) {
            return this.optionsManager.computed[e]
        }),
        (Xr.prototype.viewOpt = function (e) {
            return this.viewOpts()[e]
        }),
        (Xr.prototype.viewOpts = function () {
            return this.viewSpecs[this.state.viewType].options
        }),
        (Xr.prototype.mutateOptions = function (e, t, n, r) {
            var i = this,
                o = this.pluginSystem.hooks.optionChangeHandlers,
                s = {},
                a = {},
                l = this.dateEnv,
                d = !1,
                c = !1,
                u = Boolean(t.length)
            for (var p in e) o[p] ? (a[p] = e[p]) : (s[p] = e[p])
            for (var h in s)
                /^(height|contentHeight|aspectRatio)$/.test(h)
                    ? (c = !0)
                    : /^(defaultDate|defaultView)$/.test(h) ||
                      ((u = !0), 'timeZone' === h && (d = !0))
            this.optionsManager.mutate(s, t, n),
                u && this.handleOptions(this.optionsManager.computed),
                this.batchRendering(function () {
                    if (
                        (u
                            ? (d &&
                                  i.dispatch({
                                      type: 'CHANGE_TIMEZONE',
                                      oldDateEnv: l
                                  }),
                              i.dispatch({
                                  type: 'SET_VIEW_TYPE',
                                  viewType: i.state.viewType
                              }))
                            : c && i.updateSize(),
                        r)
                    )
                        for (var e in a) o[e](a[e], i, r)
                })
        }),
        (Xr.prototype.handleOptions = function (e) {
            var t = this,
                n = this.pluginSystem.hooks
            ;(this.defaultAllDayEventDuration = X(
                e.defaultAllDayEventDuration
            )),
                (this.defaultTimedEventDuration = X(
                    e.defaultTimedEventDuration
                )),
                (this.delayedRerender = this.buildDelayedRerender(
                    e.rerenderDelay
                )),
                (this.theme = this.buildTheme(e))
            var r = this.parseRawLocales(e.locales)
            this.availableRawLocales = r.map
            var i = this.buildLocale(e.locale || r.defaultCode, r.map)
            ;(this.dateEnv = this.buildDateEnv(
                i,
                e.timeZone,
                n.namedTimeZonedImpl,
                e.firstDay,
                e.weekNumberCalculation,
                e.weekLabel,
                n.cmdFormatter
            )),
                (this.selectionConfig = this.buildSelectionConfig(e)),
                (this.viewSpecs = Rr(n.views, this.optionsManager)),
                (this.dateProfileGenerators = De(this.viewSpecs, function (e) {
                    return new e.class.prototype.dateProfileGeneratorClass(e, t)
                }))
        }),
        (Xr.prototype.getAvailableLocaleCodes = function () {
            return Object.keys(this.availableRawLocales)
        }),
        (Xr.prototype._buildSelectionConfig = function (e) {
            return Ot('select', e, this)
        }),
        (Xr.prototype._buildEventUiSingleBase = function (e) {
            return (
                e.editable && (e = Se({}, e, { eventEditable: !0 })),
                Ot('event', e, this)
            )
        }),
        (Xr.prototype.hasPublicHandlers = function (e) {
            return this.hasHandlers(e) || this.opt(e)
        }),
        (Xr.prototype.publiclyTrigger = function (e, t) {
            var n = this.opt(e)
            if ((this.triggerWith(e, this, t), n)) return n.apply(this, t)
        }),
        (Xr.prototype.publiclyTriggerAfterSizing = function (e, t) {
            var n = this.afterSizingTriggers
            ;(n[e] || (n[e] = [])).push(t)
        }),
        (Xr.prototype.releaseAfterSizingTriggers = function () {
            var e = this.afterSizingTriggers
            for (var t in e)
                for (var n = 0, r = e[t]; n < r.length; n++) {
                    var i = r[n]
                    this.publiclyTrigger(t, i)
                }
            this.afterSizingTriggers = {}
        }),
        (Xr.prototype.isValidViewType = function (e) {
            return Boolean(this.viewSpecs[e])
        }),
        (Xr.prototype.changeView = function (e, t) {
            var n = null
            t &&
                (t.start && t.end
                    ? (this.optionsManager.mutate({ visibleRange: t }, []),
                      this.handleOptions(this.optionsManager.computed))
                    : (n = this.dateEnv.createMarker(t))),
                this.unselect(),
                this.dispatch({
                    type: 'SET_VIEW_TYPE',
                    viewType: e,
                    dateMarker: n
                })
        }),
        (Xr.prototype.zoomTo = function (e, t) {
            var n
            ;(t = t || 'day'),
                (n = this.viewSpecs[t] || this.getUnitViewSpec(t)),
                this.unselect(),
                n
                    ? this.dispatch({
                          type: 'SET_VIEW_TYPE',
                          viewType: n.type,
                          dateMarker: e
                      })
                    : this.dispatch({ type: 'SET_DATE', dateMarker: e })
        }),
        (Xr.prototype.getUnitViewSpec = function (e) {
            var t,
                n,
                r = this.component,
                i = []
            for (var o in (r.header &&
                i.push.apply(i, r.header.viewsWithButtons),
            r.footer && i.push.apply(i, r.footer.viewsWithButtons),
            this.viewSpecs))
                i.push(o)
            for (t = 0; t < i.length; t++)
                if ((n = this.viewSpecs[i[t]]) && n.singleUnit === e) return n
        }),
        (Xr.prototype.getInitialDate = function () {
            var e = this.opt('defaultDate')
            return null != e ? this.dateEnv.createMarker(e) : this.getNow()
        }),
        (Xr.prototype.prev = function () {
            this.unselect(), this.dispatch({ type: 'PREV' })
        }),
        (Xr.prototype.next = function () {
            this.unselect(), this.dispatch({ type: 'NEXT' })
        }),
        (Xr.prototype.prevYear = function () {
            this.unselect(),
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: this.dateEnv.addYears(
                        this.state.currentDate,
                        -1
                    )
                })
        }),
        (Xr.prototype.nextYear = function () {
            this.unselect(),
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: this.dateEnv.addYears(this.state.currentDate, 1)
                })
        }),
        (Xr.prototype.today = function () {
            this.unselect(),
                this.dispatch({ type: 'SET_DATE', dateMarker: this.getNow() })
        }),
        (Xr.prototype.gotoDate = function (e) {
            this.unselect(),
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: this.dateEnv.createMarker(e)
                })
        }),
        (Xr.prototype.incrementDate = function (e) {
            var t = X(e)
            t &&
                (this.unselect(),
                this.dispatch({
                    type: 'SET_DATE',
                    dateMarker: this.dateEnv.add(this.state.currentDate, t)
                }))
        }),
        (Xr.prototype.getDate = function () {
            return this.dateEnv.toDate(this.state.currentDate)
        }),
        (Xr.prototype.formatDate = function (e, t) {
            var n = this.dateEnv
            return n.format(n.createMarker(e), ot(t))
        }),
        (Xr.prototype.formatRange = function (e, t, n) {
            var r = this.dateEnv
            return r.formatRange(
                r.createMarker(e),
                r.createMarker(t),
                ot(n, this.opt('defaultRangeSeparator')),
                n
            )
        }),
        (Xr.prototype.formatIso = function (e, t) {
            var n = this.dateEnv
            return n.formatIso(n.createMarker(e), { omitTime: t })
        }),
        (Xr.prototype.windowResize = function (e) {
            !this.isHandlingWindowResize &&
                this.component &&
                e.target === window &&
                ((this.isHandlingWindowResize = !0),
                this.updateSize(),
                this.publiclyTrigger('windowResize', [this.view]),
                (this.isHandlingWindowResize = !1))
        }),
        (Xr.prototype.updateSize = function () {
            this.component && this.component.updateSize(!0)
        }),
        (Xr.prototype.registerInteractiveComponent = function (e, t) {
            var n,
                r = {
                    component: e,
                    el: (n = t).el,
                    useEventCenter: null == n.useEventCenter || n.useEventCenter
                },
                i = [Fr, Ar]
                    .concat(this.pluginSystem.hooks.componentInteractions)
                    .map(function (e) {
                        return new e(r)
                    })
            ;(this.interactionsStore[e.uid] = i), (Vr[e.uid] = r)
        }),
        (Xr.prototype.unregisterInteractiveComponent = function (e) {
            for (
                var t = 0, n = this.interactionsStore[e.uid];
                t < n.length;
                t++
            )
                n[t].destroy()
            delete this.interactionsStore[e.uid], delete Vr[e.uid]
        }),
        (Xr.prototype.select = function (e, t) {
            var n =
                    null == t
                        ? null != e.start
                            ? e
                            : { start: e, end: null }
                        : { start: e, end: t },
                r = Er(n, this.dateEnv, X({ days: 1 }))
            r &&
                (this.dispatch({ type: 'SELECT_DATES', selection: r }),
                this.triggerDateSelect(r))
        }),
        (Xr.prototype.unselect = function (e) {
            this.state.dateSelection &&
                (this.dispatch({ type: 'UNSELECT_DATES' }),
                this.triggerDateUnselect(e))
        }),
        (Xr.prototype.triggerDateSelect = function (e, t) {
            var n = Se({}, this.buildDateSpanApi(e), {
                jsEvent: t ? t.origEvent : null,
                view: this.view
            })
            this.publiclyTrigger('select', [n])
        }),
        (Xr.prototype.triggerDateUnselect = function (e) {
            this.publiclyTrigger('unselect', [
                { jsEvent: e ? e.origEvent : null, view: this.view }
            ])
        }),
        (Xr.prototype.triggerDateClick = function (e, t, n, r) {
            var i = Se({}, this.buildDatePointApi(e), {
                dayEl: t,
                jsEvent: r,
                view: n
            })
            this.publiclyTrigger('dateClick', [i])
        }),
        (Xr.prototype.buildDatePointApi = function (e) {
            for (
                var t,
                    n,
                    r = {},
                    i = 0,
                    o = this.pluginSystem.hooks.datePointTransforms;
                i < o.length;
                i++
            ) {
                var s = o[i]
                Se(r, s(e, this))
            }
            return (
                Se(
                    r,
                    ((t = e),
                    {
                        date: (n = this.dateEnv).toDate(t.range.start),
                        dateStr: n.formatIso(t.range.start, {
                            omitTime: t.allDay
                        }),
                        allDay: t.allDay
                    })
                ),
                r
            )
        }),
        (Xr.prototype.buildDateSpanApi = function (e) {
            for (
                var t,
                    n,
                    r = {},
                    i = 0,
                    o = this.pluginSystem.hooks.dateSpanTransforms;
                i < o.length;
                i++
            ) {
                var s = o[i]
                Se(r, s(e, this))
            }
            return (
                Se(
                    r,
                    ((t = e),
                    {
                        start: (n = this.dateEnv).toDate(t.range.start),
                        end: n.toDate(t.range.end),
                        startStr: n.formatIso(t.range.start, {
                            omitTime: t.allDay
                        }),
                        endStr: n.formatIso(t.range.end, {
                            omitTime: t.allDay
                        }),
                        allDay: t.allDay
                    })
                ),
                r
            )
        }),
        (Xr.prototype.getNow = function () {
            var e = this.opt('now')
            return (
                'function' == typeof e && (e = e()),
                null == e
                    ? this.dateEnv.createNowMarker()
                    : this.dateEnv.createMarker(e)
            )
        }),
        (Xr.prototype.getDefaultEventEnd = function (e, t) {
            var n = t
            return (n = e
                ? ((n = V(n)),
                  this.dateEnv.add(n, this.defaultAllDayEventDuration))
                : this.dateEnv.add(n, this.defaultTimedEventDuration))
        }),
        (Xr.prototype.addEvent = function (e, t) {
            if (e instanceof ut) {
                var n = e._def,
                    r = e._instance
                return (
                    this.state.eventStore.defs[n.defId] ||
                        this.dispatch({
                            type: 'ADD_EVENTS',
                            eventStore: ke({ def: n, instance: r })
                        }),
                    e
                )
            }
            var i
            if (t instanceof dt) i = t.internalEventSource.sourceId
            else if (null != t) {
                var o = this.getEventSourceById(t)
                if (!o)
                    return (
                        console.warn(
                            'Could not find an event source with ID "' + t + '"'
                        ),
                        null
                    )
                i = o.internalEventSource.sourceId
            }
            var s = Gt(e, i, this)
            return s
                ? (this.dispatch({ type: 'ADD_EVENTS', eventStore: ke(s) }),
                  new ut(this, s.def, s.def.recurringDef ? null : s.instance))
                : null
        }),
        (Xr.prototype.getEventById = function (e) {
            var t = this.state.eventStore,
                n = t.defs,
                r = t.instances
            for (var i in ((e = String(e)), n)) {
                var o = n[i]
                if (o.publicId === e) {
                    if (o.recurringDef) return new ut(this, o, null)
                    for (var s in r) {
                        var a = r[s]
                        if (a.defId === o.defId) return new ut(this, o, a)
                    }
                }
            }
            return null
        }),
        (Xr.prototype.getEvents = function () {
            var e = this.state.eventStore,
                t = e.defs,
                n = e.instances,
                r = []
            for (var i in n) {
                var o = n[i],
                    s = t[o.defId]
                r.push(new ut(this, s, o))
            }
            return r
        }),
        (Xr.prototype.removeAllEvents = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENTS' })
        }),
        (Xr.prototype.rerenderEvents = function () {
            this.dispatch({ type: 'RESET_EVENTS' })
        }),
        (Xr.prototype.getEventSources = function () {
            var e = this.state.eventSources,
                t = []
            for (var n in e) t.push(new dt(this, e[n]))
            return t
        }),
        (Xr.prototype.getEventSourceById = function (e) {
            var t = this.state.eventSources
            for (var n in ((e = String(e)), t))
                if (t[n].publicId === e) return new dt(this, t[n])
            return null
        }),
        (Xr.prototype.addEventSource = function (e) {
            if (e instanceof dt)
                return (
                    this.state.eventSources[e.internalEventSource.sourceId] ||
                        this.dispatch({
                            type: 'ADD_EVENT_SOURCES',
                            sources: [e.internalEventSource]
                        }),
                    e
                )
            var t = cr(e, this)
            return t
                ? (this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [t] }),
                  new dt(this, t))
                : null
        }),
        (Xr.prototype.removeAllEventSources = function () {
            this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' })
        }),
        (Xr.prototype.refetchEvents = function () {
            this.dispatch({ type: 'FETCH_EVENT_SOURCES' })
        }),
        (Xr.prototype.scrollToTime = function (e) {
            var t = X(e)
            t && this.component.view.scrollToDuration(t)
        }),
        Xr)
    function Xr (e, t) {
        var n = this
        ;(this.buildComponentContext = Ae(Kr)),
            (this.parseRawLocales = Ae(Yn)),
            (this.buildLocale = Ae(Xn)),
            (this.buildDateEnv = Ae(Jr)),
            (this.buildTheme = Ae(Qr)),
            (this.buildEventUiSingleBase = Ae(this._buildEventUiSingleBase)),
            (this.buildSelectionConfig = Ae(this._buildSelectionConfig)),
            (this.buildEventUiBySource = We(ei, Re)),
            (this.buildEventUiBases = Ae(ti)),
            (this.interactionsStore = {}),
            (this.actionQueue = []),
            (this.isReducing = !1),
            (this.needsRerender = !1),
            (this.isRendering = !1),
            (this.renderingPauseDepth = 0),
            (this.buildDelayedRerender = Ae($r)),
            (this.afterSizingTriggers = {}),
            (this.isViewUpdated = !1),
            (this.isDatesUpdated = !1),
            (this.isEventsUpdated = !1),
            (this.el = e),
            (this.optionsManager = new Jn(t || {})),
            (this.pluginSystem = new _n()),
            this.addPluginInputs(this.optionsManager.computed.plugins || []),
            this.handleOptions(this.optionsManager.computed),
            this.publiclyTrigger('_init'),
            this.hydrate(),
            (this.calendarInteractions =
                this.pluginSystem.hooks.calendarInteractions.map(function (e) {
                    return new e(n)
                }))
    }
    function Kr (e, t, n) {
        return new Tn(this, e, t, n, null)
    }
    function Jr (e, t, n, r, i, o, s) {
        return new or({
            calendarSystem: 'gregory',
            timeZone: t,
            namedTimeZoneImpl: n,
            locale: e,
            weekNumberCalculation: i,
            firstDay: r,
            weekLabel: o,
            cmdFormatter: s
        })
    }
    function Qr (e) {
        return new (this.pluginSystem.hooks.themeClasses[e.themeSystem] ||
            Zr)(e)
    }
    function $r (e) {
        var t = this.tryRerender.bind(this)
        return null != e && (t = pe(t, e)), t
    }
    function ei (e) {
        return De(e, function (e) {
            return e.ui
        })
    }
    function ti (e, t, n) {
        var r = { '': t }
        for (var i in e) {
            var o = e[i]
            o.sourceId && n[o.sourceId] && (r[i] = n[o.sourceId])
        }
        return r
    }
    rn.mixInto(Yr)
    var ni,
        ri =
            (ye(ii, (ni = xn)),
            (ii.prototype.initialize = function () {}),
            Object.defineProperty(ii.prototype, 'activeStart', {
                get: function () {
                    return this.context.dateEnv.toDate(
                        this.props.dateProfile.activeRange.start
                    )
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(ii.prototype, 'activeEnd', {
                get: function () {
                    return this.context.dateEnv.toDate(
                        this.props.dateProfile.activeRange.end
                    )
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(ii.prototype, 'currentStart', {
                get: function () {
                    return this.context.dateEnv.toDate(
                        this.props.dateProfile.currentRange.start
                    )
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(ii.prototype, 'currentEnd', {
                get: function () {
                    return this.context.dateEnv.toDate(
                        this.props.dateProfile.currentRange.end
                    )
                },
                enumerable: !0,
                configurable: !0
            }),
            (ii.prototype.render = function (e, t) {
                this.renderDatesMem(e.dateProfile),
                    this.renderBusinessHoursMem(e.businessHours),
                    this.renderDateSelectionMem(e.dateSelection),
                    this.renderEventsMem(e.eventStore),
                    this.renderEventSelectionMem(e.eventSelection),
                    this.renderEventDragMem(e.eventDrag),
                    this.renderEventResizeMem(e.eventResize)
            }),
            (ii.prototype.beforeUpdate = function () {
                this.addScroll(this.queryScroll())
            }),
            (ii.prototype.destroy = function () {
                ni.prototype.destroy.call(this), this.renderDatesMem.unrender()
            }),
            (ii.prototype.updateSize = function (e, t, n) {
                var r = this.context.calendar
                e && this.addScroll(this.queryScroll()),
                    (e ||
                        r.isViewUpdated ||
                        r.isDatesUpdated ||
                        r.isEventsUpdated) &&
                        this.updateBaseSize(e, t, n)
            }),
            (ii.prototype.updateBaseSize = function (e, t, n) {}),
            (ii.prototype.renderDatesWrap = function (e) {
                this.renderDates(e),
                    this.addScroll({
                        duration: X(this.context.options.scrollTime)
                    })
            }),
            (ii.prototype.unrenderDatesWrap = function () {
                this.stopNowIndicator(), this.unrenderDates()
            }),
            (ii.prototype.renderDates = function (e) {}),
            (ii.prototype.unrenderDates = function () {}),
            (ii.prototype.renderBusinessHours = function (e) {}),
            (ii.prototype.unrenderBusinessHours = function () {}),
            (ii.prototype.renderDateSelectionWrap = function (e) {
                e && this.renderDateSelection(e)
            }),
            (ii.prototype.unrenderDateSelectionWrap = function (e) {
                e && this.unrenderDateSelection(e)
            }),
            (ii.prototype.renderDateSelection = function (e) {}),
            (ii.prototype.unrenderDateSelection = function (e) {}),
            (ii.prototype.renderEvents = function (e) {}),
            (ii.prototype.unrenderEvents = function () {}),
            (ii.prototype.sliceEvents = function (e, t) {
                var n = this.props
                return ht(
                    e,
                    n.eventUiBases,
                    n.dateProfile.activeRange,
                    t ? this.context.nextDayThreshold : null
                ).fg
            }),
            (ii.prototype.renderEventSelectionWrap = function (e) {
                e && this.renderEventSelection(e)
            }),
            (ii.prototype.unrenderEventSelectionWrap = function (e) {
                e && this.unrenderEventSelection(e)
            }),
            (ii.prototype.renderEventSelection = function (e) {}),
            (ii.prototype.unrenderEventSelection = function (e) {}),
            (ii.prototype.renderEventDragWrap = function (e) {
                e && this.renderEventDrag(e)
            }),
            (ii.prototype.unrenderEventDragWrap = function (e) {
                e && this.unrenderEventDrag(e)
            }),
            (ii.prototype.renderEventDrag = function (e) {}),
            (ii.prototype.unrenderEventDrag = function (e) {}),
            (ii.prototype.renderEventResizeWrap = function (e) {
                e && this.renderEventResize(e)
            }),
            (ii.prototype.unrenderEventResizeWrap = function (e) {
                e && this.unrenderEventResize(e)
            }),
            (ii.prototype.renderEventResize = function (e) {}),
            (ii.prototype.unrenderEventResize = function (e) {}),
            (ii.prototype.startNowIndicator = function (e, t) {
                var n,
                    r,
                    i,
                    o = this,
                    s = this.context,
                    a = s.calendar,
                    l = s.dateEnv
                s.options.nowIndicator &&
                    !this.initialNowDate &&
                    (n = this.getNowIndicatorUnit(e, t)) &&
                    ((r = this.updateNowIndicator.bind(this)),
                    (this.initialNowDate = a.getNow()),
                    (this.initialNowQueriedMs = new Date().valueOf()),
                    (i =
                        l
                            .add(l.startOf(this.initialNowDate, n), X(1, n))
                            .valueOf() - this.initialNowDate.valueOf()),
                    (this.nowIndicatorTimeoutID = setTimeout(function () {
                        ;(o.nowIndicatorTimeoutID = null),
                            r(),
                            (i = 'second' === n ? 1e3 : 6e4),
                            (o.nowIndicatorIntervalID = setInterval(r, i))
                    }, i)))
            }),
            (ii.prototype.updateNowIndicator = function () {
                this.props.dateProfile &&
                    this.initialNowDate &&
                    (this.unrenderNowIndicator(),
                    this.renderNowIndicator(
                        O(
                            this.initialNowDate,
                            new Date().valueOf() - this.initialNowQueriedMs
                        )
                    ),
                    (this.isNowIndicatorRendered = !0))
            }),
            (ii.prototype.stopNowIndicator = function () {
                this.nowIndicatorTimeoutID &&
                    (clearTimeout(this.nowIndicatorTimeoutID),
                    (this.nowIndicatorTimeoutID = null)),
                    this.nowIndicatorIntervalID &&
                        (clearInterval(this.nowIndicatorIntervalID),
                        (this.nowIndicatorIntervalID = null)),
                    this.isNowIndicatorRendered &&
                        (this.unrenderNowIndicator(),
                        (this.isNowIndicatorRendered = !1))
            }),
            (ii.prototype.getNowIndicatorUnit = function (e, t) {}),
            (ii.prototype.renderNowIndicator = function (e) {}),
            (ii.prototype.unrenderNowIndicator = function () {}),
            (ii.prototype.addScroll = function (e, t) {
                t && (e.isForced = t),
                    Se(this.queuedScroll || (this.queuedScroll = {}), e)
            }),
            (ii.prototype.popScroll = function (e) {
                this.applyQueuedScroll(e), (this.queuedScroll = null)
            }),
            (ii.prototype.applyQueuedScroll = function (e) {
                this.queuedScroll && this.applyScroll(this.queuedScroll, e)
            }),
            (ii.prototype.queryScroll = function () {
                var e = {}
                return (
                    this.props.dateProfile && Se(e, this.queryDateScroll()), e
                )
            }),
            (ii.prototype.applyScroll = function (e, t) {
                var n = e.duration,
                    r = e.isForced
                null == n ||
                    r ||
                    (delete e.duration,
                    this.props.dateProfile && Se(e, this.computeDateScroll(n))),
                    this.props.dateProfile && this.applyDateScroll(e)
            }),
            (ii.prototype.computeDateScroll = function (e) {
                return {}
            }),
            (ii.prototype.queryDateScroll = function () {
                return {}
            }),
            (ii.prototype.applyDateScroll = function (e) {}),
            (ii.prototype.scrollToDuration = function (e) {
                this.applyScroll({ duration: e }, !1)
            }),
            ii)
    function ii (e, t) {
        var n =
            ni.call(
                this,
                s('div', { className: 'fc-view fc-' + e.type + '-view' })
            ) || this
        return (
            (n.renderDatesMem = Zt(n.renderDatesWrap, n.unrenderDatesWrap)),
            (n.renderBusinessHoursMem = Zt(
                n.renderBusinessHours,
                n.unrenderBusinessHours,
                [n.renderDatesMem]
            )),
            (n.renderDateSelectionMem = Zt(
                n.renderDateSelectionWrap,
                n.unrenderDateSelectionWrap,
                [n.renderDatesMem]
            )),
            (n.renderEventsMem = Zt(n.renderEvents, n.unrenderEvents, [
                n.renderDatesMem
            ])),
            (n.renderEventSelectionMem = Zt(
                n.renderEventSelectionWrap,
                n.unrenderEventSelectionWrap,
                [n.renderEventsMem]
            )),
            (n.renderEventDragMem = Zt(
                n.renderEventDragWrap,
                n.unrenderEventDragWrap,
                [n.renderDatesMem]
            )),
            (n.renderEventResizeMem = Zt(
                n.renderEventResizeWrap,
                n.unrenderEventResizeWrap,
                [n.renderDatesMem]
            )),
            (n.viewSpec = e),
            (n.type = e.type),
            t.appendChild(n.el),
            n.initialize(),
            n
        )
    }
    rn.mixInto(ri),
        (ri.prototype.usesMinMaxTime = !1),
        (ri.prototype.dateProfileGeneratorClass = vr)
    var oi =
        ((si.prototype.renderSegs = function (e, t, n) {
            ;(this.context = e),
                this.rangeUpdated(),
                (t = this.renderSegEls(t, n)),
                (this.segs = t),
                this.attachSegs(t, n),
                (this.isSizeDirty = !0),
                yt(this.context, this.segs, Boolean(n))
        }),
        (si.prototype.unrender = function (e, t, n) {
            St(this.context, this.segs, Boolean(n)),
                this.detachSegs(this.segs),
                (this.segs = [])
        }),
        (si.prototype.rangeUpdated = function () {
            var e,
                t,
                n = this.context.options
            ;(this.eventTimeFormat = ot(
                n.eventTimeFormat || this.computeEventTimeFormat(),
                n.defaultRangeSeparator
            )),
                null == (e = n.displayEventTime) &&
                    (e = this.computeDisplayEventTime()),
                null == (t = n.displayEventEnd) &&
                    (t = this.computeDisplayEventEnd()),
                (this.displayEventTime = e),
                (this.displayEventEnd = t)
        }),
        (si.prototype.renderSegEls = function (r, e) {
            var t,
                n = ''
            if (r.length) {
                for (t = 0; t < r.length; t++) n += this.renderSegHtml(r[t], e)
                a(n).forEach(function (e, t) {
                    var n = r[t]
                    e && (n.el = e)
                }),
                    (r = ft(this.context, r, Boolean(e)))
            }
            return r
        }),
        (si.prototype.getSegClasses = function (e, t, n, r) {
            var i = [
                'fc-event',
                e.isStart ? 'fc-start' : 'fc-not-start',
                e.isEnd ? 'fc-end' : 'fc-not-end'
            ].concat(e.eventRange.ui.classNames)
            return (
                t && i.push('fc-draggable'),
                n && i.push('fc-resizable'),
                r &&
                    (i.push('fc-mirror'),
                    r.isDragging && i.push('fc-dragging'),
                    r.isResizing && i.push('fc-resizing')),
                i
            )
        }),
        (si.prototype.getTimeText = function (e, t, n) {
            var r = e.def,
                i = e.instance
            return this._getTimeText(
                i.range.start,
                r.hasEnd ? i.range.end : null,
                r.allDay,
                t,
                n,
                i.forcedStartTzo,
                i.forcedEndTzo
            )
        }),
        (si.prototype._getTimeText = function (e, t, n, r, i, o, s) {
            var a = this.context.dateEnv
            return (
                null == r && (r = this.eventTimeFormat),
                null == i && (i = this.displayEventEnd),
                this.displayEventTime && !n
                    ? i && t
                        ? a.formatRange(e, t, r, {
                              forcedStartTzo: o,
                              forcedEndTzo: s
                          })
                        : a.format(e, r, { forcedTzo: o })
                    : ''
            )
        }),
        (si.prototype.computeEventTimeFormat = function () {
            return { hour: 'numeric', minute: '2-digit', omitZeroMinute: !0 }
        }),
        (si.prototype.computeDisplayEventTime = function () {
            return !0
        }),
        (si.prototype.computeDisplayEventEnd = function () {
            return !0
        }),
        (si.prototype.getSkinCss = function (e) {
            return {
                'background-color': e.backgroundColor,
                'border-color': e.borderColor,
                color: e.textColor
            }
        }),
        (si.prototype.sortEventSegs = function (e) {
            var n = this.context.eventOrderSpecs,
                t = e.map(ai)
            return (
                t.sort(function (e, t) {
                    return ie(e, t, n)
                }),
                t.map(function (e) {
                    return e._seg
                })
            )
        }),
        (si.prototype.computeSizes = function (e) {
            ;(e || this.isSizeDirty) && this.computeSegSizes(this.segs)
        }),
        (si.prototype.assignSizes = function (e) {
            ;(e || this.isSizeDirty) &&
                (this.assignSegSizes(this.segs), (this.isSizeDirty = !1))
        }),
        (si.prototype.computeSegSizes = function (e) {}),
        (si.prototype.assignSegSizes = function (e) {}),
        (si.prototype.hideByHash = function (e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t]
                    e[r.eventRange.instance.instanceId] &&
                        (r.el.style.visibility = 'hidden')
                }
        }),
        (si.prototype.showByHash = function (e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t]
                    e[r.eventRange.instance.instanceId] &&
                        (r.el.style.visibility = '')
                }
        }),
        (si.prototype.selectByInstanceId = function (e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t],
                        i = r.eventRange.instance
                    i &&
                        i.instanceId === e &&
                        r.el &&
                        r.el.classList.add('fc-selected')
                }
        }),
        (si.prototype.unselectByInstanceId = function (e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t]
                    r.el && r.el.classList.remove('fc-selected')
                }
        }),
        si)
    function si () {
        ;(this.segs = []), (this.isSizeDirty = !1)
    }
    function ai (e) {
        var t = e.eventRange.def,
            n = e.eventRange.instance.range,
            r = n.start ? n.start.valueOf() : 0,
            i = n.end ? n.end.valueOf() : 0
        return Se({}, t.extendedProps, t, {
            id: t.publicId,
            start: r,
            end: i,
            duration: i - r,
            allDay: Number(t.allDay),
            _seg: e
        })
    }
    var li =
        ((di.prototype.getSegsByType = function (e) {
            return this.segsByType[e] || []
        }),
        (di.prototype.renderSegs = function (e, t, n) {
            var r
            this.context = t
            var i = this.renderSegEls(e, n),
                o = this.attachSegs(e, i)
            o &&
                (r =
                    this.containerElsByType[e] ||
                    (this.containerElsByType[e] = [])).push.apply(r, o),
                (this.segsByType[e] = i),
                'bgEvent' === e && yt(t, i, !1),
                (this.dirtySizeFlags[e] = !0)
        }),
        (di.prototype.unrender = function (e, t) {
            var n = this.segsByType[e]
            n && ('bgEvent' === e && St(t, n, !1), this.detachSegs(e, n))
        }),
        (di.prototype.renderSegEls = function (e, r) {
            var t,
                n = this,
                i = ''
            if (r.length) {
                for (t = 0; t < r.length; t++) i += this.renderSegHtml(e, r[t])
                a(i).forEach(function (e, t) {
                    var n = r[t]
                    e && (n.el = e)
                }),
                    'bgEvent' === e && (r = ft(this.context, r, !1)),
                    (r = r.filter(function (e) {
                        return u(e.el, n.fillSegTag)
                    }))
            }
            return r
        }),
        (di.prototype.renderSegHtml = function (e, t) {
            var n = null,
                r = []
            return (
                'highlight' !== e &&
                    'businessHours' !== e &&
                    (n = {
                        'background-color': t.eventRange.ui.backgroundColor
                    }),
                'highlight' !== e && (r = r.concat(t.eventRange.ui.classNames)),
                'businessHours' === e
                    ? r.push('fc-bgevent')
                    : r.push('fc-' + e.toLowerCase()),
                '<' +
                    this.fillSegTag +
                    (r.length ? ' class="' + r.join(' ') + '"' : '') +
                    (n ? ' style="' + Mt(n) + '"' : '') +
                    '></' +
                    this.fillSegTag +
                    '>'
            )
        }),
        (di.prototype.detachSegs = function (e, t) {
            var n = this.containerElsByType[e]
            n && (n.forEach(r), delete this.containerElsByType[e])
        }),
        (di.prototype.computeSizes = function (e) {
            for (var t in this.segsByType)
                (e || this.dirtySizeFlags[t]) &&
                    this.computeSegSizes(this.segsByType[t])
        }),
        (di.prototype.assignSizes = function (e) {
            for (var t in this.segsByType)
                (e || this.dirtySizeFlags[t]) &&
                    this.assignSegSizes(this.segsByType[t])
            this.dirtySizeFlags = {}
        }),
        (di.prototype.computeSegSizes = function (e) {}),
        (di.prototype.assignSegSizes = function (e) {}),
        di)
    function di () {
        ;(this.fillSegTag = 'div'),
            (this.dirtySizeFlags = {}),
            (this.containerElsByType = {}),
            (this.segsByType = {})
    }
    function ci (e) {
        this.timeZoneName = e
    }
    var ui =
        ((pi.prototype.destroy = function () {}),
        (pi.prototype.setMirrorIsVisible = function (e) {}),
        (pi.prototype.setMirrorNeedsRevert = function (e) {}),
        (pi.prototype.setAutoScrollEnabled = function (e) {}),
        pi)
    function pi (e) {
        this.emitter = new rn()
    }
    function hi (e) {
        var t = Xn(e.locale || 'en', Yn([]).map)
        return (
            (e = Se({ timeZone: An.timeZone, calendarSystem: 'gregory' }, e, {
                locale: t
            })),
            new or(e)
        )
    }
    var fi = { startTime: X, duration: X, create: Boolean, sourceId: String },
        vi = { create: !0 }
    function gi (e, t) {
        return !e || 10 < t
            ? { weekday: 'short' }
            : 1 < t
            ? {
                  weekday: 'short',
                  month: 'numeric',
                  day: 'numeric',
                  omitCommas: !0
              }
            : { weekday: 'long' }
    }
    function mi (e, t, n, r, i, o, s, a) {
        var l = o.dateEnv,
            d = o.theme,
            c = o.options,
            u = Ge(t.activeRange, e),
            p = ['fc-day-header', d.getClass('widgetHeader')],
            h =
                'function' == typeof c.columnHeaderHtml
                    ? c.columnHeaderHtml(l.toDate(e))
                    : 'function' == typeof c.columnHeaderText
                    ? xt(c.columnHeaderText(l.toDate(e)))
                    : xt(l.format(e, i))
        return (
            n
                ? (p = p.concat(Qt(e, t, o, !0)))
                : p.push('fc-' + H[e.getUTCDay()]),
            '<th class="' +
                p.join(' ') +
                '"' +
                (u && n
                    ? ' data-date="' + l.formatIso(e, { omitTime: !0 }) + '"'
                    : '') +
                (1 < s ? ' colspan="' + s + '"' : '') +
                (a ? ' ' + a : '') +
                '>' +
                (u ? Jt(c, l, { date: e, forceOff: !n || 1 === r }, h) : h) +
                '</th>'
        )
    }
    var yi,
        Si =
            (ye(Ei, (yi = Rn)),
            (Ei.prototype.render = function (e, t) {
                var n = e.dates,
                    r = e.datesRepDistinctDays,
                    i = []
                this.renderSkeleton(t),
                    e.renderIntroHtml && i.push(e.renderIntroHtml())
                for (
                    var o = ot(t.options.columnHeaderFormat || gi(r, n.length)),
                        s = 0,
                        a = n;
                    s < a.length;
                    s++
                ) {
                    var l = a[s]
                    i.push(mi(l, e.dateProfile, r, n.length, o, t))
                }
                t.isRtl && i.reverse(),
                    (this.thead.innerHTML = '<tr>' + i.join('') + '</tr>')
            }),
            (Ei.prototype.destroy = function () {
                yi.prototype.destroy.call(this), this.renderSkeleton.unrender()
            }),
            (Ei.prototype._renderSkeleton = function (e) {
                var t = e.theme,
                    n = this.parentEl
                ;(n.innerHTML = ''),
                    n.appendChild(
                        (this.el = E(
                            '<div class="fc-row ' +
                                t.getClass('headerRow') +
                                '"><table class="' +
                                t.getClass('tableGrid') +
                                '"><thead></thead></table></div>'
                        ))
                    ),
                    (this.thead = this.el.querySelector('thead'))
            }),
            (Ei.prototype._unrenderSkeleton = function () {
                r(this.el)
            }),
            Ei)
    function Ei (e) {
        var t = yi.call(this) || this
        return (
            (t.renderSkeleton = Zt(t._renderSkeleton, t._unrenderSkeleton)),
            (t.parentEl = e),
            t
        )
    }
    var bi =
        ((wi.prototype.sliceRange = function (e) {
            var t = this.getDateDayIndex(e.start),
                n = this.getDateDayIndex(_(e.end, -1)),
                r = Math.max(0, t),
                i = Math.min(this.cnt - 1, n)
            return (r = Math.ceil(r)) <= (i = Math.floor(i))
                ? {
                      firstIndex: r,
                      lastIndex: i,
                      isStart: t === r,
                      isEnd: n === i
                  }
                : null
        }),
        (wi.prototype.getDateDayIndex = function (e) {
            var t = this.indices,
                n = Math.floor(z(this.dates[0], e))
            return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
        }),
        wi)
    function wi (e, t) {
        for (var n = e.start, r = e.end, i = [], o = [], s = -1; n < r; )
            t.isHiddenDay(n) ? i.push(s + 0.5) : (s++, i.push(s), o.push(n)),
                (n = _(n, 1))
        ;(this.dates = o), (this.indices = i), (this.cnt = o.length)
    }
    var Di =
        ((Ti.prototype.buildCells = function () {
            for (var e = [], t = 0; t < this.rowCnt; t++) {
                for (var n = [], r = 0; r < this.colCnt; r++)
                    n.push(this.buildCell(t, r))
                e.push(n)
            }
            return e
        }),
        (Ti.prototype.buildCell = function (e, t) {
            return { date: this.daySeries.dates[e * this.colCnt + t] }
        }),
        (Ti.prototype.buildHeaderDates = function () {
            for (var e = [], t = 0; t < this.colCnt; t++)
                e.push(this.cells[0][t].date)
            return e
        }),
        (Ti.prototype.sliceRange = function (e) {
            var t = this.colCnt,
                n = this.daySeries.sliceRange(e),
                r = []
            if (n)
                for (var i = n.firstIndex, o = n.lastIndex, s = i; s <= o; ) {
                    var a = Math.floor(s / t),
                        l = Math.min((a + 1) * t, o + 1)
                    r.push({
                        row: a,
                        firstCol: s % t,
                        lastCol: (l - 1) % t,
                        isStart: n.isStart && s === i,
                        isEnd: n.isEnd && l - 1 === o
                    }),
                        (s = l)
                }
            return r
        }),
        Ti)
    function Ti (e, t) {
        var n,
            r,
            i,
            o = e.dates
        if (t) {
            for (
                r = o[0].getUTCDay(), n = 1;
                n < o.length && o[n].getUTCDay() !== r;
                n++
            );
            i = Math.ceil(o.length / n)
        } else (i = 1), (n = o.length)
        ;(this.rowCnt = i),
            (this.colCnt = n),
            (this.daySeries = e),
            (this.cells = this.buildCells()),
            (this.headerDates = this.buildHeaderDates())
    }
    var Ci =
        ((Ri.prototype.sliceProps = function (e, t, n, r, i) {
            for (var o = [], s = 5; s < arguments.length; s++)
                o[s - 5] = arguments[s]
            var a = e.eventUiBases,
                l = this.sliceEventStore.apply(
                    this,
                    [e.eventStore, a, t, n, i].concat(o)
                )
            return {
                dateSelectionSegs: this.sliceDateSelection.apply(
                    this,
                    [e.dateSelection, a, i].concat(o)
                ),
                businessHourSegs: this.sliceBusinessHours.apply(
                    this,
                    [e.businessHours, t, n, r, i].concat(o)
                ),
                fgEventSegs: l.fg,
                bgEventSegs: l.bg,
                eventDrag: this.sliceEventDrag.apply(
                    this,
                    [e.eventDrag, a, t, n, i].concat(o)
                ),
                eventResize: this.sliceEventResize.apply(
                    this,
                    [e.eventResize, a, t, n, i].concat(o)
                ),
                eventSelection: e.eventSelection
            }
        }),
        (Ri.prototype.sliceNowDate = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r]
            return this._sliceDateSpan.apply(
                this,
                [
                    { range: { start: e, end: O(e, 1) }, allDay: !1 },
                    {},
                    t
                ].concat(n)
            )
        }),
        (Ri.prototype._sliceBusinessHours = function (e, t, n, r, i) {
            for (var o = [], s = 5; s < arguments.length; s++)
                o[s - 5] = arguments[s]
            return e
                ? this._sliceEventStore.apply(
                      this,
                      [xe(e, Ii(t, Boolean(n)), r), {}, t, n, i].concat(o)
                  ).bg
                : []
        }),
        (Ri.prototype._sliceEventStore = function (e, t, n, r, i) {
            for (var o = [], s = 5; s < arguments.length; s++)
                o[s - 5] = arguments[s]
            if (e) {
                var a = ht(e, t, Ii(n, Boolean(r)), r)
                return {
                    bg: this.sliceEventRanges(a.bg, i, o),
                    fg: this.sliceEventRanges(a.fg, i, o)
                }
            }
            return { bg: [], fg: [] }
        }),
        (Ri.prototype._sliceInteraction = function (e, t, n, r, i) {
            for (var o = [], s = 5; s < arguments.length; s++)
                o[s - 5] = arguments[s]
            if (!e) return null
            var a = ht(e.mutatedEvents, t, Ii(n, Boolean(r)), r)
            return {
                segs: this.sliceEventRanges(a.fg, i, o),
                affectedInstances: e.affectedEvents.instances,
                isEvent: e.isEvent,
                sourceSeg: e.origSeg
            }
        }),
        (Ri.prototype._sliceDateSpan = function (e, t, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
                r[i - 3] = arguments[i]
            if (!e) return []
            for (
                var o,
                    s,
                    a,
                    l,
                    d =
                        ((o = e),
                        (s = t),
                        (a = n.context.calendar),
                        {
                            def: (l = Ut(
                                { editable: !1 },
                                '',
                                o.allDay,
                                !0,
                                a
                            )),
                            ui: mt(l, s),
                            instance: At(l.defId, o.range),
                            range: o.range,
                            isStart: !0,
                            isEnd: !0
                        }),
                    c = this.sliceRange.apply(this, [e.range].concat(r)),
                    u = 0,
                    p = c;
                u < p.length;
                u++
            ) {
                var h = p[u]
                ;(h.component = n), (h.eventRange = d)
            }
            return c
        }),
        (Ri.prototype.sliceEventRanges = function (e, t, n) {
            for (var r = [], i = 0, o = e; i < o.length; i++) {
                var s = o[i]
                r.push.apply(r, this.sliceEventRange(s, t, n))
            }
            return r
        }),
        (Ri.prototype.sliceEventRange = function (e, t, n) {
            for (
                var r = this.sliceRange.apply(this, [e.range].concat(n)),
                    i = 0,
                    o = r;
                i < o.length;
                i++
            ) {
                var s = o[i]
                ;(s.component = t),
                    (s.eventRange = e),
                    (s.isStart = e.isStart && s.isStart),
                    (s.isEnd = e.isEnd && s.isEnd)
            }
            return r
        }),
        Ri)
    function Ri () {
        ;(this.sliceBusinessHours = Ae(this._sliceBusinessHours)),
            (this.sliceDateSelection = Ae(this._sliceDateSpan)),
            (this.sliceEventStore = Ae(this._sliceEventStore)),
            (this.sliceEventDrag = Ae(this._sliceInteraction)),
            (this.sliceEventResize = Ae(this._sliceInteraction))
    }
    function Ii (e, t) {
        var n = e.activeRange
        return t
            ? n
            : {
                  start: O(n.start, e.minTime.milliseconds),
                  end: O(n.end, e.maxTime.milliseconds - 864e5)
              }
    }
    ;(e.Calendar = Yr),
        (e.Component = Rn),
        (e.ComponentContext = Tn),
        (e.DateComponent = xn),
        (e.DateEnv = or),
        (e.DateProfileGenerator = vr),
        (e.DayHeader = Si),
        (e.DaySeries = bi),
        (e.DayTable = Di),
        (e.ElementDragging = ui),
        (e.ElementScrollController = hn),
        (e.EmitterMixin = rn),
        (e.EventApi = ut),
        (e.FgEventRenderer = oi),
        (e.FillRenderer = li),
        (e.Interaction = Nr),
        (e.Mixin = en),
        (e.NamedTimeZoneImpl = ci),
        (e.PositionCache = ln),
        (e.ScrollComponent = Sn),
        (e.ScrollController = cn),
        (e.Slicer = Ci),
        (e.Splitter = Yt),
        (e.Theme = bn),
        (e.View = ri),
        (e.WindowScrollController = gn),
        (e.addDays = _),
        (e.addDurations = function (e, t) {
            return {
                years: e.years + t.years,
                months: e.months + t.months,
                days: e.days + t.days,
                milliseconds: e.milliseconds + t.milliseconds
            }
        }),
        (e.addMs = O),
        (e.addWeeks = function (e, t) {
            var n = A(e)
            return (n[2] += 7 * t), W(n)
        }),
        (e.allowContextMenu = function (e) {
            e.removeEventListener('contextmenu', x)
        }),
        (e.allowSelection = function (e) {
            e.classList.remove('fc-unselectable'),
                e.removeEventListener('selectstart', x)
        }),
        (e.appendToElement = b),
        (e.applyAll = ce),
        (e.applyMutationToEventStore = Et),
        (e.applyStyle = f),
        (e.applyStyleProp = v),
        (e.asRoughMinutes = function (e) {
            return ee(e) / 6e4
        }),
        (e.asRoughMs = ee),
        (e.asRoughSeconds = function (e) {
            return ee(e) / 1e3
        }),
        (e.buildGotoAnchorHtml = Jt),
        (e.buildSegCompareObj = ai),
        (e.capitaliseFirstLetter = ae),
        (e.combineEventUis = Nt),
        (e.compareByFieldSpec = oe),
        (e.compareByFieldSpecs = ie),
        (e.compareNumbers = function (e, t) {
            return e - t
        }),
        (e.compensateScroll = function (e, t) {
            t.left && f(e, { borderLeftWidth: 1, marginLeft: t.left - 1 }),
                t.right &&
                    f(e, { borderRightWidth: 1, marginRight: t.right - 1 })
        }),
        (e.computeClippingRect = function (e) {
            return k(e)
                .map(function (e) {
                    return T(e)
                })
                .concat({
                    left: window.pageXOffset,
                    right:
                        window.pageXOffset +
                        document.documentElement.clientWidth,
                    top: window.pageYOffset,
                    bottom:
                        window.pageYOffset +
                        document.documentElement.clientHeight
                })
                .reduce(function (e, t) {
                    return g(e, t) || t
                })
        }),
        (e.computeEdges = D),
        (e.computeEventDraggable = function (e, t, n) {
            for (
                var r = e.calendar,
                    i = e.view,
                    o = r.pluginSystem.hooks.isDraggableTransformers,
                    s = n.startEditable,
                    a = 0,
                    l = o;
                a < l.length;
                a++
            )
                s = (0, l[a])(s, t, n, i)
            return s
        }),
        (e.computeEventEndResizable = function (e, t, n) {
            return n.durationEditable
        }),
        (e.computeEventStartResizable = function (e, t, n) {
            return n.durationEditable && e.options.eventResizableFromStart
        }),
        (e.computeFallbackHeaderFormat = gi),
        (e.computeHeightAndMargins = R),
        (e.computeInnerRect = T),
        (e.computeRect = C),
        (e.computeVisibleDayRange = ve),
        (e.config = {}),
        (e.constrainPoint = function (e, t) {
            return {
                left: Math.min(Math.max(e.left, t.left), t.right),
                top: Math.min(Math.max(e.top, t.top), t.bottom)
            }
        }),
        (e.createDuration = X),
        (e.createElement = s),
        (e.createEmptyEventStore = He),
        (e.createEventInstance = At),
        (e.createFormatter = ot),
        (e.createPlugin = Hn),
        (e.cssToStr = Mt),
        (e.debounce = pe),
        (e.diffDates = ge),
        (e.diffDayAndTime = N),
        (e.diffDays = z),
        (e.diffPoints = function (e, t) {
            return { left: e.left - t.left, top: e.top - t.top }
        }),
        (e.diffWeeks = function (e, t) {
            return z(e, t) / 7
        }),
        (e.diffWholeDays = B),
        (e.diffWholeWeeks = L),
        (e.disableCursor = function () {
            document.body.classList.add('fc-not-allowed')
        }),
        (e.distributeHeight = function (o, e, t) {
            var s = Math.floor(e / o.length),
                a = Math.floor(e - s * (o.length - 1)),
                l = [],
                d = [],
                c = [],
                u = 0
            ne(o),
                o.forEach(function (e, t) {
                    var n = t === o.length - 1 ? a : s,
                        r = e.getBoundingClientRect().height,
                        i = r + I(e)
                    i < n ? (l.push(e), d.push(i), c.push(r)) : (u += i)
                }),
                t &&
                    ((e -= u),
                    (s = Math.floor(e / l.length)),
                    (a = Math.floor(e - s * (l.length - 1)))),
                l.forEach(function (e, t) {
                    var n = t === l.length - 1 ? a : s,
                        r = d[t],
                        i = n - (r - c[t])
                    r < n && (e.style.height = i + 'px')
                })
        }),
        (e.elementClosest = c),
        (e.elementMatches = u),
        (e.enableCursor = function () {
            document.body.classList.remove('fc-not-allowed')
        }),
        (e.eventTupleToStore = ke),
        (e.filterEventStoreDefs = Oe),
        (e.filterHash = we),
        (e.findChildren = function (e, t) {
            for (
                var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0;
                i < n.length;
                i++
            )
                for (var o = n[i].children, s = 0; s < o.length; s++) {
                    var a = o[s]
                    ;(t && !u(a, t)) || r.push(a)
                }
            return r
        }),
        (e.findElements = p),
        (e.flexibleCompare = se),
        (e.forceClassName = function (e, t, n) {
            n ? e.classList.add(t) : e.classList.remove(t)
        }),
        (e.formatDate = function (e, t) {
            void 0 === t && (t = {})
            var n = hi(t),
                r = ot(t),
                i = n.createMarkerMeta(e)
            return i ? n.format(i.marker, r, { forcedTzo: i.forcedTzo }) : ''
        }),
        (e.formatIsoTimeString = function (e) {
            return (
                le(e.getUTCHours(), 2) +
                ':' +
                le(e.getUTCMinutes(), 2) +
                ':' +
                le(e.getUTCSeconds(), 2)
            )
        }),
        (e.formatRange = function (e, t, n) {
            var r = hi('object' == typeof n && n ? n : {}),
                i = ot(n, An.defaultRangeSeparator),
                o = r.createMarkerMeta(e),
                s = r.createMarkerMeta(t)
            return o && s
                ? r.formatRange(o.marker, s.marker, i, {
                      forcedStartTzo: o.forcedTzo,
                      forcedEndTzo: s.forcedTzo,
                      isEndExclusive: n.isEndExclusive
                  })
                : ''
        }),
        (e.getAllDayHtml = function (e) {
            return e.allDayHtml || xt(e.allDayText)
        }),
        (e.getClippingParents = k),
        (e.getDayClasses = Qt),
        (e.getElSeg = vt),
        (e.getRectCenter = function (e) {
            return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 }
        }),
        (e.getRelevantEvents = Me),
        (e.globalDefaults = An),
        (e.greatestDurationDenominator = te),
        (e.hasBgRendering = function (e) {
            return (
                'background' === e.rendering ||
                'inverse-background' === e.rendering
            )
        }),
        (e.htmlEscape = xt),
        (e.htmlToElement = E),
        (e.insertAfterElement = function (e, t) {
            for (
                var n = l(t), r = e.nextSibling || null, i = 0;
                i < n.length;
                i++
            )
                e.parentNode.insertBefore(n[i], r)
        }),
        (e.interactionSettingsStore = Vr),
        (e.interactionSettingsToStore = function (e) {
            var t = {}
            return (t[e.component.uid] = e), t
        }),
        (e.intersectRanges = Le),
        (e.intersectRects = g),
        (e.isArraysEqual = Ue),
        (e.isDateSpansEqual = function (e, t) {
            return (
                Be(e.range, t.range) &&
                e.allDay === t.allDay &&
                (function (e, t) {
                    for (var n in t)
                        if ('range' !== n && 'allDay' !== n && e[n] !== t[n])
                            return !1
                    for (var n in e) if (!(n in t)) return !1
                    return !0
                })(e, t)
            )
        }),
        (e.isInt = de),
        (e.isInteractionValid = Tt),
        (e.isMultiDayRange = function (e) {
            var t = ve(e)
            return 1 < z(t.start, t.end)
        }),
        (e.isPropsEqual = Re),
        (e.isPropsValid = Rt),
        (e.isSingleDay = function (e) {
            return (
                0 === e.years &&
                0 === e.months &&
                1 === e.days &&
                0 === e.milliseconds
            )
        }),
        (e.isValidDate = j),
        (e.listenBySelector = M),
        (e.mapHash = De),
        (e.matchCellWidths = function (e) {
            var r = 0
            return (
                e.forEach(function (e) {
                    var t,
                        n = e.firstChild
                    n instanceof HTMLElement &&
                        ((t = n.getBoundingClientRect().width),
                        r < t && (r = t))
                }),
                r++,
                e.forEach(function (e) {
                    e.style.width = r + 'px'
                }),
                r
            )
        }),
        (e.memoize = Ae),
        (e.memoizeOutput = We),
        (e.memoizeRendering = Zt),
        (e.mergeEventStores = _e),
        (e.multiplyDuration = function (e, t) {
            return {
                years: e.years * t,
                months: e.months * t,
                days: e.days * t,
                milliseconds: e.milliseconds * t
            }
        }),
        (e.padStart = le),
        (e.parseBusinessHours = jt),
        (e.parseDragMeta = function (e) {
            var t = {},
                n = he(e, fi, vi, t)
            return (n.leftoverProps = t), n
        }),
        (e.parseEventDef = Ut),
        (e.parseFieldSpecs = re),
        (e.parseMarker = ir),
        (e.pointInsideRect = function (e, t) {
            return (
                e.left >= t.left &&
                e.left < t.right &&
                e.top >= t.top &&
                e.top < t.bottom
            )
        }),
        (e.prependToElement = m),
        (e.preventContextMenu = function (e) {
            e.addEventListener('contextmenu', x)
        }),
        (e.preventDefault = x),
        (e.preventSelection = function (e) {
            e.classList.add('fc-unselectable'),
                e.addEventListener('selectstart', x)
        }),
        (e.processScopedUiProps = Ot),
        (e.rangeContainsMarker = Ge),
        (e.rangeContainsRange = Fe),
        (e.rangesEqual = Be),
        (e.rangesIntersect = Ve),
        (e.refineProps = he),
        (e.removeElement = r),
        (e.removeExact = function (e, t) {
            for (var n = 0, r = 0; r < e.length; )
                e[r] === t ? (e.splice(r, 1), n++) : r++
            return n
        }),
        (e.renderDateCell = mi),
        (e.requestJson = Ln),
        (e.sliceEventStore = ht),
        (e.startOfDay = V),
        (e.subtractInnerElHeight = function (e, t) {
            var n = { position: 'relative', left: -1 }
            f(e, n), f(t, n)
            var r =
                    e.getBoundingClientRect().height -
                    t.getBoundingClientRect().height,
                i = { position: '', left: '' }
            return f(e, i), f(t, i), r
        }),
        (e.translateRect = function (e, t, n) {
            return {
                left: e.left + t,
                right: e.right + t,
                top: e.top + n,
                bottom: e.bottom + n
            }
        }),
        (e.uncompensateScroll = function (e) {
            f(e, {
                marginLeft: '',
                marginRight: '',
                borderLeftWidth: '',
                borderRightWidth: ''
            })
        }),
        (e.undistributeHeight = ne),
        (e.unpromisify = $t),
        (e.version = '4.4.2'),
        (e.whenTransitionDone = function (t, n) {
            var r = function (e) {
                n(e),
                    P.forEach(function (e) {
                        t.removeEventListener(e, r)
                    })
            }
            P.forEach(function (e) {
                t.addEventListener(e, r)
            })
        }),
        (e.wholeDivideDurations = function (e, t) {
            for (var n = null, r = 0; r < q.length; r++) {
                var i = q[r]
                if (t[i]) {
                    var o = e[i] / t[i]
                    if (!de(o) || (null !== n && n !== o)) return null
                    n = o
                } else if (e[i]) return null
            }
            return n
        }),
        Object.defineProperty(e, '__esModule', { value: !0 })
}),
    (function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
            ? t(exports, require('@fullcalendar/core'))
            : 'function' == typeof define && define.amd
            ? define(['exports', '@fullcalendar/core'], t)
            : t(((e = e || self).FullCalendarDayGrid = {}), e.FullCalendar)
    })(this, function (e, R) {
        'use strict'
        var r = function (e, t) {
            return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t
                    }) ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }
        function t (e, t) {
            function n () {
                this.constructor = e
            }
            r(e, t),
                (e.prototype =
                    null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()))
        }
        var d,
            c = function () {
                return (c =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, i) &&
                                    (e[i] = t[i])
                        return e
                    }).apply(this, arguments)
            },
            n =
                (t(i, (d = R.DateProfileGenerator)),
                (i.prototype.buildRenderRange = function (e, t, n) {
                    var r,
                        i,
                        o = this.dateEnv,
                        s = d.prototype.buildRenderRange.call(this, e, t, n),
                        a = s.start,
                        l = s.end
                    return (
                        /^(year|month)$/.test(t) &&
                            ((a = o.startOfWeek(a)),
                            (r = o.startOfWeek(l)).valueOf() !== l.valueOf() &&
                                (l = R.addWeeks(r, 1))),
                        this.options.monthMode &&
                            this.options.fixedWeekCount &&
                            ((i = Math.ceil(R.diffWeeks(a, l))),
                            (l = R.addWeeks(l, 6 - i))),
                        { start: a, end: l }
                    )
                }),
                i)
        function i () {
            return (null !== d && d.apply(this, arguments)) || this
        }
        var f =
            ((o.prototype.show = function () {
                this.isHidden &&
                    (this.el || this.render(),
                    (this.el.style.display = ''),
                    this.position(),
                    (this.isHidden = !1),
                    this.trigger('show'))
            }),
            (o.prototype.hide = function () {
                this.isHidden ||
                    ((this.el.style.display = 'none'),
                    (this.isHidden = !0),
                    this.trigger('hide'))
            }),
            (o.prototype.render = function () {
                var t = this,
                    e = this.options,
                    n = (this.el = R.createElement('div', {
                        className: 'fc-popover ' + (e.className || ''),
                        style: { top: '0', left: '0' }
                    }))
                'function' == typeof e.content && e.content(n),
                    e.parentEl.appendChild(n),
                    R.listenBySelector(n, 'click', '.fc-close', function (e) {
                        t.hide()
                    }),
                    e.autoHide &&
                        document.addEventListener(
                            'mousedown',
                            this.documentMousedown
                        )
            }),
            (o.prototype.destroy = function () {
                this.hide(),
                    this.el && (R.removeElement(this.el), (this.el = null)),
                    document.removeEventListener(
                        'mousedown',
                        this.documentMousedown
                    )
            }),
            (o.prototype.position = function () {
                var e = this.options,
                    t = this.el,
                    n = t.getBoundingClientRect(),
                    r = R.computeRect(t.offsetParent),
                    i = R.computeClippingRect(e.parentEl),
                    o = e.top || 0,
                    s =
                        void 0 !== e.left
                            ? e.left
                            : void 0 !== e.right
                            ? e.right - n.width
                            : 0
                ;(o = Math.min(o, i.bottom - n.height - this.margin)),
                    (o = Math.max(o, i.top + this.margin)),
                    (s = Math.min(s, i.right - n.width - this.margin)),
                    (s = Math.max(s, i.left + this.margin)),
                    R.applyStyle(t, { top: o - r.top, left: s - r.left })
            }),
            (o.prototype.trigger = function (e) {
                this.options[e] &&
                    this.options[e].apply(
                        this,
                        Array.prototype.slice.call(arguments, 1)
                    )
            }),
            o)
        function o (e) {
            var t = this
            ;(this.isHidden = !0),
                (this.margin = 10),
                (this.documentMousedown = function (e) {
                    t.el && !t.el.contains(e.target) && t.hide()
                }),
                (this.options = e)
        }
        var s,
            a =
                (t(l, (s = R.FgEventRenderer)),
                (l.prototype.renderSegHtml = function (e, t) {
                    var n,
                        r,
                        i = this.context,
                        o = e.eventRange,
                        s = o.def,
                        a = o.ui,
                        l = s.allDay,
                        d = R.computeEventDraggable(i, s, a),
                        c =
                            l &&
                            e.isStart &&
                            R.computeEventStartResizable(i, s, a),
                        u = l && e.isEnd && R.computeEventEndResizable(i, s, a),
                        p = this.getSegClasses(e, d, c || u, t),
                        h = R.cssToStr(this.getSkinCss(a)),
                        f = ''
                    return (
                        p.unshift('fc-day-grid-event', 'fc-h-event'),
                        e.isStart &&
                            (n = this.getTimeText(o)) &&
                            (f =
                                '<span class="fc-time">' +
                                R.htmlEscape(n) +
                                '</span>'),
                        (r =
                            '<span class="fc-title">' +
                            (R.htmlEscape(s.title || '') || '&nbsp;') +
                            '</span>'),
                        '<a class="' +
                            p.join(' ') +
                            '"' +
                            (s.url
                                ? ' href="' + R.htmlEscape(s.url) + '"'
                                : '') +
                            (h ? ' style="' + h + '"' : '') +
                            '><div class="fc-content">' +
                            ('rtl' === i.options.dir
                                ? r + ' ' + f
                                : f + ' ' + r) +
                            '</div>' +
                            (c
                                ? '<div class="fc-resizer fc-start-resizer"></div>'
                                : '') +
                            (u
                                ? '<div class="fc-resizer fc-end-resizer"></div>'
                                : '') +
                            '</a>'
                    )
                }),
                (l.prototype.computeEventTimeFormat = function () {
                    return {
                        hour: 'numeric',
                        minute: '2-digit',
                        omitZeroMinute: !0,
                        meridiem: 'narrow'
                    }
                }),
                (l.prototype.computeDisplayEventEnd = function () {
                    return !1
                }),
                l)
        function l () {
            return (null !== s && s.apply(this, arguments)) || this
        }
        var u,
            p =
                (t(h, (u = a)),
                (h.prototype.attachSegs = function (e, t) {
                    var n = (this.rowStructs = this.renderSegRows(e))
                    this.dayGrid.rowEls.forEach(function (e, t) {
                        e.querySelector(
                            '.fc-content-skeleton > table'
                        ).appendChild(n[t].tbodyEl)
                    }),
                        t || this.dayGrid.removeSegPopover()
                }),
                (h.prototype.detachSegs = function () {
                    for (var e, t = this.rowStructs || []; (e = t.pop()); )
                        R.removeElement(e.tbodyEl)
                    this.rowStructs = null
                }),
                (h.prototype.renderSegRows = function (e) {
                    for (
                        var t = [], n = this.groupSegRows(e), r = 0;
                        r < n.length;
                        r++
                    )
                        t.push(this.renderSegRow(r, n[r]))
                    return t
                }),
                (h.prototype.renderSegRow = function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s,
                        a,
                        l,
                        d = this.context.isRtl,
                        c = this.dayGrid,
                        u = c.colCnt,
                        p = this.buildSegLevels(t),
                        h = Math.max(1, p.length),
                        f = document.createElement('tbody'),
                        v = [],
                        g = [],
                        m = []
                    function y (e) {
                        for (; i < e; )
                            (l = (m[n - 1] || [])[i])
                                ? (l.rowSpan = (l.rowSpan || 1) + 1)
                                : ((l = document.createElement('td')),
                                  o.appendChild(l)),
                                (g[n][i] = l),
                                (m[n][i] = l),
                                i++
                    }
                    for (n = 0; n < h; n++) {
                        if (
                            ((r = p[n]),
                            (i = 0),
                            (o = document.createElement('tr')),
                            v.push([]),
                            g.push([]),
                            m.push([]),
                            r)
                        )
                            for (s = 0; s < r.length; s++) {
                                a = r[s]
                                var S = d ? u - 1 - a.lastCol : a.firstCol,
                                    E = d ? u - 1 - a.firstCol : a.lastCol
                                for (
                                    y(S),
                                        l = R.createElement(
                                            'td',
                                            { className: 'fc-event-container' },
                                            a.el
                                        ),
                                        S !== E
                                            ? (l.colSpan = E - S + 1)
                                            : (m[n][i] = l);
                                    i <= E;

                                )
                                    (g[n][i] = l), (v[n][i] = a), i++
                                o.appendChild(l)
                            }
                        y(u)
                        var b = c.renderProps.renderIntroHtml()
                        b &&
                            (d
                                ? R.appendToElement(o, b)
                                : R.prependToElement(o, b)),
                            f.appendChild(o)
                    }
                    return {
                        row: e,
                        tbodyEl: f,
                        cellMatrix: g,
                        segMatrix: v,
                        segLevels: p,
                        segs: t
                    }
                }),
                (h.prototype.buildSegLevels = function (e) {
                    var t,
                        n,
                        r,
                        i = this.context.isRtl,
                        o = this.dayGrid.colCnt,
                        s = []
                    for (e = this.sortEventSegs(e), t = 0; t < e.length; t++) {
                        for (
                            n = e[t], r = 0;
                            r < s.length &&
                            (function (e, t) {
                                var n, r
                                for (n = 0; n < t.length; n++)
                                    if (
                                        (r = t[n]).firstCol <= e.lastCol &&
                                        r.lastCol >= e.firstCol
                                    )
                                        return 1
                            })(n, s[r]);
                            r++
                        );
                        ;(n.level = r),
                            (n.leftCol = i ? o - 1 - n.lastCol : n.firstCol),
                            (n.rightCol = i ? o - 1 - n.firstCol : n.lastCol),
                            (s[r] || (s[r] = [])).push(n)
                    }
                    for (r = 0; r < s.length; r++) s[r].sort(v)
                    return s
                }),
                (h.prototype.groupSegRows = function (e) {
                    for (var t = [], n = 0; n < this.dayGrid.rowCnt; n++)
                        t.push([])
                    for (n = 0; n < e.length; n++) t[e[n].row].push(e[n])
                    return t
                }),
                (h.prototype.computeDisplayEventEnd = function () {
                    return 1 === this.dayGrid.colCnt
                }),
                h)
        function h (e) {
            var t = u.call(this) || this
            return (t.dayGrid = e), t
        }
        function v (e, t) {
            return e.leftCol - t.leftCol
        }
        var g,
            m =
                (t(y, (g = p)),
                (y.prototype.attachSegs = function (e, t) {
                    var o = t.sourceSeg,
                        s = (this.rowStructs = this.renderSegRows(e))
                    this.dayGrid.rowEls.forEach(function (e, t) {
                        var n = R.htmlToElement(
                                '<div class="fc-mirror-skeleton"><table></table></div>'
                            ),
                            r =
                                o && o.row === t
                                    ? o.el
                                    : (r = e.querySelector(
                                          '.fc-content-skeleton tbody'
                                      )) ||
                                      e.querySelector(
                                          '.fc-content-skeleton table'
                                      ),
                            i =
                                r.getBoundingClientRect().top -
                                e.getBoundingClientRect().top
                        ;(n.style.top = i + 'px'),
                            n.querySelector('table').appendChild(s[t].tbodyEl),
                            e.appendChild(n)
                    })
                }),
                y)
        function y () {
            return (null !== g && g.apply(this, arguments)) || this
        }
        var S,
            E = '<td style="pointer-events:none"></td>',
            b =
                (t(w, (S = R.FillRenderer)),
                (w.prototype.renderSegs = function (e, t, n) {
                    'bgEvent' === e &&
                        (n = n.filter(function (e) {
                            return e.eventRange.def.allDay
                        })),
                        S.prototype.renderSegs.call(this, e, t, n)
                }),
                (w.prototype.attachSegs = function (e, t) {
                    for (var n, r, i = [], o = 0; o < t.length; o++)
                        (n = t[o]),
                            (r = this.renderFillRow(e, n)),
                            this.dayGrid.rowEls[n.row].appendChild(r),
                            i.push(r)
                    return i
                }),
                (w.prototype.renderFillRow = function (e, t) {
                    var n = this.dayGrid,
                        r = this.context.isRtl,
                        i = n.colCnt,
                        o = r ? i - 1 - t.lastCol : t.firstCol,
                        s = (r ? i - 1 - t.firstCol : t.lastCol) + 1,
                        a = 'businessHours' === e ? 'bgevent' : e.toLowerCase(),
                        l = R.htmlToElement(
                            '<div class="fc-' +
                                a +
                                '-skeleton"><table><tr></tr></table></div>'
                        ),
                        d = l.getElementsByTagName('tr')[0]
                    0 < o && R.appendToElement(d, new Array(o + 1).join(E)),
                        (t.el.colSpan = s - o),
                        d.appendChild(t.el),
                        s < i &&
                            R.appendToElement(d, new Array(i - s + 1).join(E))
                    var c = n.renderProps.renderIntroHtml()
                    return (
                        c &&
                            (r
                                ? R.appendToElement(d, c)
                                : R.prependToElement(d, c)),
                        l
                    )
                }),
                w)
        function w (e) {
            var t = S.call(this) || this
            return (t.fillSegTag = 'td'), (t.dayGrid = e), t
        }
        var D,
            T =
                (t(C, (D = R.DateComponent)),
                (C.prototype.firstContext = function (e) {
                    e.calendar.registerInteractiveComponent(this, {
                        el: this.el,
                        useEventCenter: !1
                    })
                }),
                (C.prototype.render = function (e, t) {
                    this.renderFrame(e.date),
                        this.renderFgEvents(t, e.fgSegs),
                        this.renderEventSelection(e.eventSelection),
                        this.renderEventDrag(e.eventDragInstances),
                        this.renderEventResize(e.eventResizeInstances)
                }),
                (C.prototype.destroy = function () {
                    D.prototype.destroy.call(this),
                        this.renderFrame.unrender(),
                        this.context.calendar.unregisterInteractiveComponent(
                            this
                        )
                }),
                (C.prototype._renderFrame = function (e) {
                    var t = this.context,
                        n = t.theme,
                        r = t.dateEnv,
                        i = t.options,
                        o = r.format(e, R.createFormatter(i.dayPopoverFormat))
                    ;(this.el.innerHTML =
                        '<div class="fc-header ' +
                        n.getClass('popoverHeader') +
                        '"><span class="fc-title">' +
                        R.htmlEscape(o) +
                        '</span><span class="fc-close ' +
                        n.getIconClass('close') +
                        '"></span></div><div class="fc-body ' +
                        n.getClass('popoverContent') +
                        '"><div class="fc-event-container"></div></div>'),
                        (this.segContainerEl = this.el.querySelector(
                            '.fc-event-container'
                        ))
                }),
                (C.prototype.queryHit = function (e, t, n, r) {
                    var i = this.props.date
                    if (e < n && t < r)
                        return {
                            component: this,
                            dateSpan: {
                                allDay: !0,
                                range: { start: i, end: R.addDays(i, 1) }
                            },
                            dayEl: this.el,
                            rect: { left: 0, top: 0, right: n, bottom: r },
                            layer: 1
                        }
                }),
                C)
        function C (e) {
            var t = D.call(this, e) || this,
                n = (t.eventRenderer = new k(t)),
                r = (t.renderFrame = R.memoizeRendering(t._renderFrame))
            return (
                (t.renderFgEvents = R.memoizeRendering(
                    n.renderSegs.bind(n),
                    n.unrender.bind(n),
                    [r]
                )),
                (t.renderEventSelection = R.memoizeRendering(
                    n.selectByInstanceId.bind(n),
                    n.unselectByInstanceId.bind(n),
                    [t.renderFgEvents]
                )),
                (t.renderEventDrag = R.memoizeRendering(
                    n.hideByHash.bind(n),
                    n.showByHash.bind(n),
                    [r]
                )),
                (t.renderEventResize = R.memoizeRendering(
                    n.hideByHash.bind(n),
                    n.showByHash.bind(n),
                    [r]
                )),
                t
            )
        }
        var I,
            k =
                (t(x, (I = a)),
                (x.prototype.attachSegs = function (e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var r = n[t]
                        this.dayTile.segContainerEl.appendChild(r.el)
                    }
                }),
                (x.prototype.detachSegs = function (e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var r = n[t]
                        R.removeElement(r.el)
                    }
                }),
                x)
        function x (e) {
            var t = I.call(this) || this
            return (t.dayTile = e), t
        }
        var M =
            ((P.prototype.renderHtml = function (e) {
                var t = []
                e.renderIntroHtml && t.push(e.renderIntroHtml())
                for (
                    var n, r, i, o, s, a, l, d, c = 0, u = e.cells;
                    c < u.length;
                    c++
                ) {
                    var p = u[c]
                    t.push(
                        ((n = p.date),
                        (r = e.dateProfile),
                        (i = this.context),
                        (o = p.htmlAttrs),
                        (d = l = a = s = void 0),
                        (s = i.dateEnv),
                        (a = i.theme),
                        (l = R.rangeContainsMarker(r.activeRange, n)),
                        (d = R.getDayClasses(n, r, i)).unshift(
                            'fc-day',
                            a.getClass('widgetContent')
                        ),
                        '<td class="' +
                            d.join(' ') +
                            '"' +
                            (l
                                ? ' data-date="' +
                                  s.formatIso(n, { omitTime: !0 }) +
                                  '"'
                                : '') +
                            (o ? ' ' + o : '') +
                            '></td>')
                    )
                }
                return (
                    e.cells.length ||
                        t.push(
                            '<td class="fc-day ' +
                                this.context.theme.getClass('widgetContent') +
                                '"></td>'
                        ),
                    'rtl' === this.context.options.dir && t.reverse(),
                    '<tr>' + t.join('') + '</tr>'
                )
            }),
            P)
        function P (e) {
            this.context = e
        }
        var H,
            _ = R.createFormatter({ day: 'numeric' }),
            O = R.createFormatter({ week: 'numeric' }),
            z =
                (t(N, (H = R.DateComponent)),
                (N.prototype.render = function (e, t) {
                    var n = e.cells
                    ;(this.rowCnt = n.length),
                        (this.colCnt = n[0].length),
                        this.renderCells(n, e.isRigid),
                        this.renderBusinessHours(t, e.businessHourSegs),
                        this.renderDateSelection(t, e.dateSelectionSegs),
                        this.renderBgEvents(t, e.bgEventSegs),
                        this.renderFgEvents(t, e.fgEventSegs),
                        this.renderEventSelection(e.eventSelection),
                        this.renderEventDrag(e.eventDrag),
                        this.renderEventResize(e.eventResize),
                        this.segPopoverTile && this.updateSegPopoverTile()
                }),
                (N.prototype.destroy = function () {
                    H.prototype.destroy.call(this), this.renderCells.unrender()
                }),
                (N.prototype.getCellRange = function (e, t) {
                    var n = this.props.cells[e][t].date
                    return { start: n, end: R.addDays(n, 1) }
                }),
                (N.prototype.updateSegPopoverTile = function (e, t) {
                    var n = this.props
                    this.segPopoverTile.receiveProps(
                        {
                            date: e || this.segPopoverTile.props.date,
                            fgSegs: t || this.segPopoverTile.props.fgSegs,
                            eventSelection: n.eventSelection,
                            eventDragInstances: n.eventDrag
                                ? n.eventDrag.affectedInstances
                                : null,
                            eventResizeInstances: n.eventResize
                                ? n.eventResize.affectedInstances
                                : null
                        },
                        this.context
                    )
                }),
                (N.prototype._renderCells = function (e, t) {
                    for (
                        var n,
                            r = this.context,
                            i = r.calendar,
                            o = r.view,
                            s = r.isRtl,
                            a = r.dateEnv,
                            l = this.rowCnt,
                            d = this.colCnt,
                            c = '',
                            u = 0;
                        u < l;
                        u++
                    )
                        c += this.renderDayRowHtml(u, t)
                    for (
                        this.el.innerHTML = c,
                            this.rowEls = R.findElements(this.el, '.fc-row'),
                            this.cellEls = R.findElements(
                                this.el,
                                '.fc-day, .fc-disabled-day'
                            ),
                            s && this.cellEls.reverse(),
                            this.rowPositions = new R.PositionCache(
                                this.el,
                                this.rowEls,
                                !1,
                                !0
                            ),
                            this.colPositions = new R.PositionCache(
                                this.el,
                                this.cellEls.slice(0, d),
                                !0,
                                !1
                            ),
                            u = 0;
                        u < l;
                        u++
                    )
                        for (n = 0; n < d; n++)
                            i.publiclyTrigger('dayRender', [
                                {
                                    date: a.toDate(e[u][n].date),
                                    el: this.getCellEl(u, n),
                                    view: o
                                }
                            ])
                    this.isCellSizesDirty = !0
                }),
                (N.prototype._unrenderCells = function () {
                    this.removeSegPopover()
                }),
                (N.prototype.renderDayRowHtml = function (e, t) {
                    var n = this.context.theme,
                        r = ['fc-row', 'fc-week', n.getClass('dayRow')]
                    t && r.push('fc-rigid')
                    var i = new M(this.context)
                    return (
                        '<div class="' +
                        r.join(' ') +
                        '"><div class="fc-bg"><table class="' +
                        n.getClass('tableGrid') +
                        '">' +
                        i.renderHtml({
                            cells: this.props.cells[e],
                            dateProfile: this.props.dateProfile,
                            renderIntroHtml: this.renderProps.renderBgIntroHtml
                        }) +
                        '</table></div><div class="fc-content-skeleton"><table>' +
                        (this.getIsNumbersVisible()
                            ? '<thead>' +
                              this.renderNumberTrHtml(e) +
                              '</thead>'
                            : '') +
                        '</table></div></div>'
                    )
                }),
                (N.prototype.getIsNumbersVisible = function () {
                    return (
                        this.getIsDayNumbersVisible() ||
                        this.renderProps.cellWeekNumbersVisible ||
                        this.renderProps.colWeekNumbersVisible
                    )
                }),
                (N.prototype.getIsDayNumbersVisible = function () {
                    return 1 < this.rowCnt
                }),
                (N.prototype.renderNumberTrHtml = function (e) {
                    var t = this.context.isRtl,
                        n = this.renderProps.renderNumberIntroHtml(e, this)
                    return (
                        '<tr>' +
                        (t ? '' : n) +
                        this.renderNumberCellsHtml(e) +
                        (t ? n : '') +
                        '</tr>'
                    )
                }),
                (N.prototype.renderNumberCellsHtml = function (e) {
                    for (var t, n = [], r = 0; r < this.colCnt; r++)
                        (t = this.props.cells[e][r].date),
                            n.push(this.renderNumberCellHtml(t))
                    return this.context.isRtl && n.reverse(), n.join('')
                }),
                (N.prototype.renderNumberCellHtml = function (e) {
                    var t,
                        n,
                        r = this.context,
                        i = r.dateEnv,
                        o = r.options,
                        s = '',
                        a = R.rangeContainsMarker(
                            this.props.dateProfile.activeRange,
                            e
                        ),
                        l = this.getIsDayNumbersVisible() && a
                    return l || this.renderProps.cellWeekNumbersVisible
                        ? ((t = R.getDayClasses(
                              e,
                              this.props.dateProfile,
                              this.context
                          )).unshift('fc-day-top'),
                          this.renderProps.cellWeekNumbersVisible &&
                              (n = i.weekDow),
                          (s +=
                              '<td class="' +
                              t.join(' ') +
                              '"' +
                              (a
                                  ? ' data-date="' +
                                    i.formatIso(e, { omitTime: !0 }) +
                                    '"'
                                  : '') +
                              '>'),
                          this.renderProps.cellWeekNumbersVisible &&
                              e.getUTCDay() === n &&
                              (s += R.buildGotoAnchorHtml(
                                  o,
                                  i,
                                  { date: e, type: 'week' },
                                  { class: 'fc-week-number' },
                                  i.format(e, O)
                              )),
                          l &&
                              (s += R.buildGotoAnchorHtml(
                                  o,
                                  i,
                                  e,
                                  { class: 'fc-day-number' },
                                  i.format(e, _)
                              )),
                          (s += '</td>'))
                        : '<td></td>'
                }),
                (N.prototype.updateSize = function (e) {
                    var t = this.context.calendar,
                        n = this.fillRenderer,
                        r = this.eventRenderer,
                        i = this.mirrorRenderer
                    ;(e || this.isCellSizesDirty || t.isEventsUpdated) &&
                        (this.buildPositionCaches(),
                        (this.isCellSizesDirty = !1)),
                        n.computeSizes(e),
                        r.computeSizes(e),
                        i.computeSizes(e),
                        n.assignSizes(e),
                        r.assignSizes(e),
                        i.assignSizes(e)
                }),
                (N.prototype.buildPositionCaches = function () {
                    this.buildColPositions(), this.buildRowPositions()
                }),
                (N.prototype.buildColPositions = function () {
                    this.colPositions.build()
                }),
                (N.prototype.buildRowPositions = function () {
                    this.rowPositions.build(),
                        (this.rowPositions.bottoms[this.rowCnt - 1] +=
                            this.bottomCoordPadding)
                }),
                (N.prototype.positionToHit = function (e, t) {
                    var n = this.colPositions,
                        r = this.rowPositions,
                        i = n.leftToIndex(e),
                        o = r.topToIndex(t)
                    if (null != o && null != i)
                        return {
                            row: o,
                            col: i,
                            dateSpan: {
                                range: this.getCellRange(o, i),
                                allDay: !0
                            },
                            dayEl: this.getCellEl(o, i),
                            relativeRect: {
                                left: n.lefts[i],
                                right: n.rights[i],
                                top: r.tops[o],
                                bottom: r.bottoms[o]
                            }
                        }
                }),
                (N.prototype.getCellEl = function (e, t) {
                    return this.cellEls[e * this.colCnt + t]
                }),
                (N.prototype._renderEventDrag = function (e) {
                    e &&
                        (this.eventRenderer.hideByHash(e.affectedInstances),
                        this.fillRenderer.renderSegs(
                            'highlight',
                            this.context,
                            e.segs
                        ))
                }),
                (N.prototype._unrenderEventDrag = function (e) {
                    e &&
                        (this.eventRenderer.showByHash(e.affectedInstances),
                        this.fillRenderer.unrender('highlight', this.context))
                }),
                (N.prototype._renderEventResize = function (e) {
                    e &&
                        (this.eventRenderer.hideByHash(e.affectedInstances),
                        this.fillRenderer.renderSegs(
                            'highlight',
                            this.context,
                            e.segs
                        ),
                        this.mirrorRenderer.renderSegs(this.context, e.segs, {
                            isResizing: !0,
                            sourceSeg: e.sourceSeg
                        }))
                }),
                (N.prototype._unrenderEventResize = function (e) {
                    e &&
                        (this.eventRenderer.showByHash(e.affectedInstances),
                        this.fillRenderer.unrender('highlight', this.context),
                        this.mirrorRenderer.unrender(this.context, e.segs, {
                            isResizing: !0,
                            sourceSeg: e.sourceSeg
                        }))
                }),
                (N.prototype.removeSegPopover = function () {
                    this.segPopover && this.segPopover.hide()
                }),
                (N.prototype.limitRows = function (e) {
                    for (
                        var t, n = this.eventRenderer.rowStructs || [], r = 0;
                        r < n.length;
                        r++
                    )
                        this.unlimitRow(r),
                            !1 !==
                                (t =
                                    !!e &&
                                    ('number' == typeof e
                                        ? e
                                        : this.computeRowLevelLimit(r))) &&
                                this.limitRow(r, t)
                }),
                (N.prototype.computeRowLevelLimit = function (e) {
                    for (
                        var t,
                            n = this.rowEls[e].getBoundingClientRect().bottom,
                            r = R.findChildren(
                                this.eventRenderer.rowStructs[e].tbodyEl
                            ),
                            i = 0;
                        i < r.length;
                        i++
                    )
                        if (
                            ((t = r[i]).classList.remove('fc-limited'),
                            t.getBoundingClientRect().bottom > n)
                        )
                            return i
                    return !1
                }),
                (N.prototype.limitRow = function (t, n) {
                    function e (e) {
                        for (; D < e; )
                            (l = y.getCellSegs(t, D, n)).length &&
                                ((u = i[n - 1][D]),
                                (m = y.renderMoreLink(t, D, l)),
                                (g = R.createElement('div', null, m)),
                                u.appendChild(g),
                                w.push(g)),
                                D++
                    }
                    var r,
                        i,
                        o,
                        s,
                        a,
                        l,
                        d,
                        c,
                        u,
                        p,
                        h,
                        f,
                        v,
                        g,
                        m,
                        y = this,
                        S = this.colCnt,
                        E = this.context.isRtl,
                        b = this.eventRenderer.rowStructs[t],
                        w = [],
                        D = 0
                    if (n && n < b.segLevels.length) {
                        for (
                            r = b.segLevels[n - 1],
                                i = b.cellMatrix,
                                (o = R.findChildren(b.tbodyEl).slice(
                                    n
                                )).forEach(function (e) {
                                    e.classList.add('fc-limited')
                                }),
                                s = 0;
                            s < r.length;
                            s++
                        ) {
                            a = r[s]
                            var T = E ? S - 1 - a.lastCol : a.firstCol,
                                C = E ? S - 1 - a.firstCol : a.lastCol
                            for (e(T), c = [], d = 0; D <= C; )
                                (l = this.getCellSegs(t, D, n)),
                                    c.push(l),
                                    (d += l.length),
                                    D++
                            if (d) {
                                for (
                                    p = (u = i[n - 1][T]).rowSpan || 1,
                                        h = [],
                                        f = 0;
                                    f < c.length;
                                    f++
                                )
                                    (v = R.createElement('td', {
                                        className: 'fc-more-cell',
                                        rowSpan: p
                                    })),
                                        (l = c[f]),
                                        (m = this.renderMoreLink(
                                            t,
                                            T + f,
                                            [a].concat(l)
                                        )),
                                        (g = R.createElement('div', null, m)),
                                        v.appendChild(g),
                                        h.push(v),
                                        w.push(v)
                                u.classList.add('fc-limited'),
                                    R.insertAfterElement(u, h),
                                    o.push(u)
                            }
                        }
                        e(this.colCnt), (b.moreEls = w), (b.limitedEls = o)
                    }
                }),
                (N.prototype.unlimitRow = function (e) {
                    var t = this.eventRenderer.rowStructs[e]
                    t.moreEls &&
                        (t.moreEls.forEach(R.removeElement),
                        (t.moreEls = null)),
                        t.limitedEls &&
                            (t.limitedEls.forEach(function (e) {
                                e.classList.remove('fc-limited')
                            }),
                            (t.limitedEls = null))
                }),
                (N.prototype.renderMoreLink = function (d, c, u) {
                    var p = this,
                        e = this.context,
                        h = e.calendar,
                        f = e.view,
                        v = e.dateEnv,
                        g = e.options,
                        m = e.isRtl,
                        t = R.createElement('a', { className: 'fc-more' })
                    return (
                        (t.innerText = this.getMoreLinkText(u.length)),
                        t.addEventListener('click', function (e) {
                            var t = g.eventLimitClick,
                                n = m ? p.colCnt - c - 1 : c,
                                r = p.props.cells[d][n].date,
                                i = e.currentTarget,
                                o = p.getCellEl(d, c),
                                s = p.getCellSegs(d, c),
                                a = p.resliceDaySegs(s, r),
                                l = p.resliceDaySegs(u, r)
                            'function' == typeof t &&
                                (t = h.publiclyTrigger('eventLimitClick', [
                                    {
                                        date: v.toDate(r),
                                        allDay: !0,
                                        dayEl: o,
                                        moreEl: i,
                                        segs: a,
                                        hiddenSegs: l,
                                        jsEvent: e,
                                        view: f
                                    }
                                ])),
                                'popover' === t
                                    ? p.showSegPopover(d, c, i, a)
                                    : 'string' == typeof t && h.zoomTo(r, t)
                        }),
                        t
                    )
                }),
                (N.prototype.showSegPopover = function (t, e, n, r) {
                    var i = this,
                        o = this.context,
                        s = o.calendar,
                        a = o.view,
                        l = o.theme,
                        d = o.isRtl,
                        c = d ? this.colCnt - e - 1 : e,
                        u = n.parentNode,
                        p = 1 === this.rowCnt ? a.el : this.rowEls[t],
                        h = {
                            className:
                                'fc-more-popover ' + l.getClass('popover'),
                            parentEl: a.el,
                            top: R.computeRect(p).top,
                            autoHide: !0,
                            content: function (e) {
                                ;(i.segPopoverTile = new T(e)),
                                    i.updateSegPopoverTile(
                                        i.props.cells[t][c].date,
                                        r
                                    )
                            },
                            hide: function () {
                                i.segPopoverTile.destroy(),
                                    (i.segPopoverTile = null),
                                    i.segPopover.destroy(),
                                    (i.segPopover = null)
                            }
                        }
                    d
                        ? (h.right = R.computeRect(u).right + 1)
                        : (h.left = R.computeRect(u).left - 1),
                        (this.segPopover = new f(h)),
                        this.segPopover.show(),
                        s.releaseAfterSizingTriggers()
                }),
                (N.prototype.resliceDaySegs = function (e, t) {
                    for (
                        var n = { start: t, end: R.addDays(t, 1) },
                            r = [],
                            i = 0,
                            o = e;
                        i < o.length;
                        i++
                    ) {
                        var s = o[i],
                            a = s.eventRange,
                            l = a.range,
                            d = R.intersectRanges(l, n)
                        d &&
                            r.push(
                                c({}, s, {
                                    eventRange: {
                                        def: a.def,
                                        ui: c({}, a.ui, {
                                            durationEditable: !1
                                        }),
                                        instance: a.instance,
                                        range: d
                                    },
                                    isStart:
                                        s.isStart &&
                                        d.start.valueOf() === l.start.valueOf(),
                                    isEnd:
                                        s.isEnd &&
                                        d.end.valueOf() === l.end.valueOf()
                                })
                            )
                    }
                    return r
                }),
                (N.prototype.getMoreLinkText = function (e) {
                    var t = this.context.options.eventLimitText
                    return 'function' == typeof t ? t(e) : '+' + e + ' ' + t
                }),
                (N.prototype.getCellSegs = function (e, t, n) {
                    for (
                        var r,
                            i = this.eventRenderer.rowStructs[e].segMatrix,
                            o = n || 0,
                            s = [];
                        o < i.length;

                    )
                        (r = i[o][t]) && s.push(r), o++
                    return s
                }),
                N)
        function N (e, t) {
            var n = H.call(this, e) || this
            ;(n.bottomCoordPadding = 0),
                (n.isCellSizesDirty = !1),
                (n.renderProps = t)
            var r = (n.eventRenderer = new p(n)),
                i = (n.fillRenderer = new b(n))
            n.mirrorRenderer = new m(n)
            var o = (n.renderCells = R.memoizeRendering(
                n._renderCells,
                n._unrenderCells
            ))
            return (
                (n.renderBusinessHours = R.memoizeRendering(
                    i.renderSegs.bind(i, 'businessHours'),
                    i.unrender.bind(i, 'businessHours'),
                    [o]
                )),
                (n.renderDateSelection = R.memoizeRendering(
                    i.renderSegs.bind(i, 'highlight'),
                    i.unrender.bind(i, 'highlight'),
                    [o]
                )),
                (n.renderBgEvents = R.memoizeRendering(
                    i.renderSegs.bind(i, 'bgEvent'),
                    i.unrender.bind(i, 'bgEvent'),
                    [o]
                )),
                (n.renderFgEvents = R.memoizeRendering(
                    r.renderSegs.bind(r),
                    r.unrender.bind(r),
                    [o]
                )),
                (n.renderEventSelection = R.memoizeRendering(
                    r.selectByInstanceId.bind(r),
                    r.unselectByInstanceId.bind(r),
                    [n.renderFgEvents]
                )),
                (n.renderEventDrag = R.memoizeRendering(
                    n._renderEventDrag,
                    n._unrenderEventDrag,
                    [o]
                )),
                (n.renderEventResize = R.memoizeRendering(
                    n._renderEventResize,
                    n._unrenderEventResize,
                    [o]
                )),
                n
            )
        }
        var L,
            B = R.createFormatter({ week: 'numeric' }),
            V =
                (t(F, (L = R.View)),
                (F.prototype._processOptions = function (e) {
                    e.weekNumbers
                        ? e.weekNumbersWithinDays
                            ? ((this.cellWeekNumbersVisible = !0),
                              (this.colWeekNumbersVisible = !1))
                            : ((this.cellWeekNumbersVisible = !1),
                              (this.colWeekNumbersVisible = !0))
                        : ((this.colWeekNumbersVisible = !1),
                          (this.cellWeekNumbersVisible = !1))
                }),
                (F.prototype.render = function (e, t) {
                    L.prototype.render.call(this, e, t),
                        this.processOptions(t.options),
                        this.renderSkeleton(t)
                }),
                (F.prototype.destroy = function () {
                    L.prototype.destroy.call(this),
                        this.renderSkeleton.unrender()
                }),
                (F.prototype._renderSkeleton = function (e) {
                    this.el.classList.add('fc-dayGrid-view'),
                        (this.el.innerHTML = this.renderSkeletonHtml()),
                        (this.scroller = new R.ScrollComponent(
                            'hidden',
                            'auto'
                        ))
                    var t = this.scroller.el
                    this.el.querySelector('.fc-body > tr > td').appendChild(t),
                        t.classList.add('fc-day-grid-container')
                    var n = R.createElement('div', { className: 'fc-day-grid' })
                    t.appendChild(n),
                        (this.dayGrid = new z(n, {
                            renderNumberIntroHtml:
                                this.renderDayGridNumberIntroHtml,
                            renderBgIntroHtml: this.renderDayGridBgIntroHtml,
                            renderIntroHtml: this.renderDayGridIntroHtml,
                            colWeekNumbersVisible: this.colWeekNumbersVisible,
                            cellWeekNumbersVisible: this.cellWeekNumbersVisible
                        }))
                }),
                (F.prototype._unrenderSkeleton = function () {
                    this.el.classList.remove('fc-dayGrid-view'),
                        this.dayGrid.destroy(),
                        this.scroller.destroy()
                }),
                (F.prototype.renderSkeletonHtml = function () {
                    var e = this.context,
                        t = e.theme,
                        n = e.options
                    return (
                        '<table class="' +
                        t.getClass('tableGrid') +
                        '">' +
                        (n.columnHeader
                            ? '<thead class="fc-head"><tr><td class="fc-head-container ' +
                              t.getClass('widgetHeader') +
                              '">&nbsp;</td></tr></thead>'
                            : '') +
                        '<tbody class="fc-body"><tr><td class="' +
                        t.getClass('widgetContent') +
                        '"></td></tr></tbody></table>'
                    )
                }),
                (F.prototype.weekNumberStyleAttr = function () {
                    return null != this.weekNumberWidth
                        ? 'style="width:' + this.weekNumberWidth + 'px"'
                        : ''
                }),
                (F.prototype.hasRigidRows = function () {
                    var e = this.context.options.eventLimit
                    return e && 'number' != typeof e
                }),
                (F.prototype.updateSize = function (e, t, n) {
                    L.prototype.updateSize.call(this, e, t, n),
                        this.dayGrid.updateSize(e)
                }),
                (F.prototype.updateBaseSize = function (e, t, n) {
                    var r,
                        i,
                        o = this.dayGrid,
                        s = this.context.options.eventLimit,
                        a = this.header ? this.header.el : null
                    o.rowEls
                        ? (this.colWeekNumbersVisible &&
                              (this.weekNumberWidth = R.matchCellWidths(
                                  R.findElements(this.el, '.fc-week-number')
                              )),
                          this.scroller.clear(),
                          a && R.uncompensateScroll(a),
                          o.removeSegPopover(),
                          s && 'number' == typeof s && o.limitRows(s),
                          (r = this.computeScrollerHeight(t)),
                          this.setGridHeight(r, n),
                          s && 'number' != typeof s && o.limitRows(s),
                          n ||
                              (this.scroller.setHeight(r),
                              ((i = this.scroller.getScrollbarWidths()).left ||
                                  i.right) &&
                                  (a && R.compensateScroll(a, i),
                                  (r = this.computeScrollerHeight(t)),
                                  this.scroller.setHeight(r)),
                              this.scroller.lockOverflow(i)))
                        : n ||
                          ((r = this.computeScrollerHeight(t)),
                          this.scroller.setHeight(r))
                }),
                (F.prototype.computeScrollerHeight = function (e) {
                    return (
                        e - R.subtractInnerElHeight(this.el, this.scroller.el)
                    )
                }),
                (F.prototype.setGridHeight = function (e, t) {
                    this.context.options.monthMode
                        ? (t && (e *= this.dayGrid.rowCnt / 6),
                          R.distributeHeight(this.dayGrid.rowEls, e, !t))
                        : t
                        ? R.undistributeHeight(this.dayGrid.rowEls)
                        : R.distributeHeight(this.dayGrid.rowEls, e, !0)
                }),
                (F.prototype.computeDateScroll = function (e) {
                    return { top: 0 }
                }),
                (F.prototype.queryDateScroll = function () {
                    return { top: this.scroller.getScrollTop() }
                }),
                (F.prototype.applyDateScroll = function (e) {
                    void 0 !== e.top && this.scroller.setScrollTop(e.top)
                }),
                F)
        function F () {
            var s = (null !== L && L.apply(this, arguments)) || this
            return (
                (s.processOptions = R.memoize(s._processOptions)),
                (s.renderSkeleton = R.memoizeRendering(
                    s._renderSkeleton,
                    s._unrenderSkeleton
                )),
                (s.renderHeadIntroHtml = function () {
                    var e = s.context,
                        t = e.theme,
                        n = e.options
                    return s.colWeekNumbersVisible
                        ? '<th class="fc-week-number ' +
                              t.getClass('widgetHeader') +
                              '" ' +
                              s.weekNumberStyleAttr() +
                              '><span>' +
                              R.htmlEscape(n.weekLabel) +
                              '</span></th>'
                        : ''
                }),
                (s.renderDayGridNumberIntroHtml = function (e, t) {
                    var n = s.context,
                        r = n.options,
                        i = n.dateEnv,
                        o = t.props.cells[e][0].date
                    return s.colWeekNumbersVisible
                        ? '<td class="fc-week-number" ' +
                              s.weekNumberStyleAttr() +
                              '>' +
                              R.buildGotoAnchorHtml(
                                  r,
                                  i,
                                  {
                                      date: o,
                                      type: 'week',
                                      forceOff: 1 === t.colCnt
                                  },
                                  i.format(o, B)
                              ) +
                              '</td>'
                        : ''
                }),
                (s.renderDayGridBgIntroHtml = function () {
                    var e = s.context.theme
                    return s.colWeekNumbersVisible
                        ? '<td class="fc-week-number ' +
                              e.getClass('widgetContent') +
                              '" ' +
                              s.weekNumberStyleAttr() +
                              '></td>'
                        : ''
                }),
                (s.renderDayGridIntroHtml = function () {
                    return s.colWeekNumbersVisible
                        ? '<td class="fc-week-number" ' +
                              s.weekNumberStyleAttr() +
                              '></td>'
                        : ''
                }),
                s
            )
        }
        V.prototype.dateProfileGeneratorClass = n
        var G,
            U =
                (t(A, (G = R.DateComponent)),
                (A.prototype.firstContext = function (e) {
                    e.calendar.registerInteractiveComponent(this, {
                        el: this.dayGrid.el
                    })
                }),
                (A.prototype.destroy = function () {
                    G.prototype.destroy.call(this),
                        this.context.calendar.unregisterInteractiveComponent(
                            this
                        )
                }),
                (A.prototype.render = function (e, t) {
                    var n = this.dayGrid,
                        r = e.dateProfile,
                        i = e.dayTable
                    n.receiveContext(t),
                        n.receiveProps(
                            c(
                                {},
                                this.slicer.sliceProps(
                                    e,
                                    r,
                                    e.nextDayThreshold,
                                    t.calendar,
                                    n,
                                    i
                                ),
                                {
                                    dateProfile: r,
                                    cells: i.cells,
                                    isRigid: e.isRigid
                                }
                            ),
                            t
                        )
                }),
                (A.prototype.buildPositionCaches = function () {
                    this.dayGrid.buildPositionCaches()
                }),
                (A.prototype.queryHit = function (e, t) {
                    var n = this.dayGrid.positionToHit(e, t)
                    if (n)
                        return {
                            component: this.dayGrid,
                            dateSpan: n.dateSpan,
                            dayEl: n.dayEl,
                            rect: {
                                left: n.relativeRect.left,
                                right: n.relativeRect.right,
                                top: n.relativeRect.top,
                                bottom: n.relativeRect.bottom
                            },
                            layer: 0
                        }
                }),
                A)
        function A (e) {
            var t = G.call(this, e.el) || this
            return (t.slicer = new j()), (t.dayGrid = e), t
        }
        var W,
            j =
                (t(Z, (W = R.Slicer)),
                (Z.prototype.sliceRange = function (e, t) {
                    return t.sliceRange(e)
                }),
                Z)
        function Z () {
            return (null !== W && W.apply(this, arguments)) || this
        }
        var q,
            Y =
                (t(X, (q = V)),
                (X.prototype.render = function (e, t) {
                    q.prototype.render.call(this, e, t)
                    var n = this.props.dateProfile,
                        r = (this.dayTable = this.buildDayTable(
                            n,
                            e.dateProfileGenerator
                        ))
                    this.header &&
                        this.header.receiveProps(
                            {
                                dateProfile: n,
                                dates: r.headerDates,
                                datesRepDistinctDays: 1 === r.rowCnt,
                                renderIntroHtml: this.renderHeadIntroHtml
                            },
                            t
                        ),
                        this.simpleDayGrid.receiveProps(
                            {
                                dateProfile: n,
                                dayTable: r,
                                businessHours: e.businessHours,
                                dateSelection: e.dateSelection,
                                eventStore: e.eventStore,
                                eventUiBases: e.eventUiBases,
                                eventSelection: e.eventSelection,
                                eventDrag: e.eventDrag,
                                eventResize: e.eventResize,
                                isRigid: this.hasRigidRows(),
                                nextDayThreshold: this.context.nextDayThreshold
                            },
                            t
                        )
                }),
                (X.prototype._renderSkeleton = function (e) {
                    q.prototype._renderSkeleton.call(this, e),
                        e.options.columnHeader &&
                            (this.header = new R.DayHeader(
                                this.el.querySelector('.fc-head-container')
                            )),
                        (this.simpleDayGrid = new U(this.dayGrid))
                }),
                (X.prototype._unrenderSkeleton = function () {
                    q.prototype._unrenderSkeleton.call(this),
                        this.header && this.header.destroy(),
                        this.simpleDayGrid.destroy()
                }),
                X)
        function X () {
            var e = (null !== q && q.apply(this, arguments)) || this
            return (e.buildDayTable = R.memoize(K)), e
        }
        function K (e, t) {
            var n = new R.DaySeries(e.renderRange, t)
            return new R.DayTable(n, /year|month|week/.test(e.currentRangeUnit))
        }
        var J = R.createPlugin({
            defaultView: 'dayGridMonth',
            views: {
                dayGrid: Y,
                dayGridDay: { type: 'dayGrid', duration: { days: 1 } },
                dayGridWeek: { type: 'dayGrid', duration: { weeks: 1 } },
                dayGridMonth: {
                    type: 'dayGrid',
                    duration: { months: 1 },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        })
        ;(e.AbstractDayGridView = V),
            (e.DayBgRow = M),
            (e.DayGrid = z),
            (e.DayGridSlicer = j),
            (e.DayGridView = Y),
            (e.SimpleDayGrid = U),
            (e.buildBasicDayTable = K),
            (e.default = J),
            Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
            ? t(exports, require('@fullcalendar/core'))
            : 'function' == typeof define && define.amd
            ? define(['exports', '@fullcalendar/core'], t)
            : t(((e = e || self).FullCalendarList = {}), e.FullCalendar)
    })(this, function (e, p) {
        'use strict'
        var r = function (e, t) {
            return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t
                    }) ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }
        function t (e, t) {
            function n () {
                this.constructor = e
            }
            r(e, t),
                (e.prototype =
                    null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()))
        }
        var n,
            i =
                (t(o, (n = p.FgEventRenderer)),
                (o.prototype.attachSegs = function (e) {
                    e.length
                        ? this.listView.renderSegList(e)
                        : this.listView.renderEmptyMessage()
                }),
                (o.prototype.detachSegs = function () {}),
                (o.prototype.renderSegHtml = function (e) {
                    var t = this.context,
                        n = t.theme,
                        r = t.options,
                        i = e.eventRange,
                        o = i.def,
                        s = i.instance,
                        a = i.ui,
                        l = o.url,
                        d = ['fc-list-item'].concat(a.classNames),
                        c = a.backgroundColor,
                        u = o.allDay
                            ? p.getAllDayHtml(r)
                            : p.isMultiDayRange(i.range)
                            ? e.isStart
                                ? p.htmlEscape(
                                      this._getTimeText(
                                          s.range.start,
                                          e.end,
                                          !1
                                      )
                                  )
                                : e.isEnd
                                ? p.htmlEscape(
                                      this._getTimeText(
                                          e.start,
                                          s.range.end,
                                          !1
                                      )
                                  )
                                : p.getAllDayHtml(r)
                            : p.htmlEscape(this.getTimeText(i))
                    return (
                        l && d.push('fc-has-url'),
                        '<tr class="' +
                            d.join(' ') +
                            '">' +
                            (this.displayEventTime
                                ? '<td class="fc-list-item-time ' +
                                  n.getClass('widgetContent') +
                                  '">' +
                                  (u || '') +
                                  '</td>'
                                : '') +
                            '<td class="fc-list-item-marker ' +
                            n.getClass('widgetContent') +
                            '"><span class="fc-event-dot"' +
                            (c ? ' style="background-color:' + c + '"' : '') +
                            '></span></td><td class="fc-list-item-title ' +
                            n.getClass('widgetContent') +
                            '"><a' +
                            (l ? ' href="' + p.htmlEscape(l) + '"' : '') +
                            '>' +
                            p.htmlEscape(o.title || '') +
                            '</a></td></tr>'
                    )
                }),
                (o.prototype.computeEventTimeFormat = function () {
                    return {
                        hour: 'numeric',
                        minute: '2-digit',
                        meridiem: 'short'
                    }
                }),
                o)
        function o (e) {
            var t = n.call(this) || this
            return (t.listView = e), t
        }
        var s,
            a =
                (t(l, (s = p.View)),
                (l.prototype.firstContext = function (e) {
                    e.calendar.registerInteractiveComponent(this, {
                        el: this.el
                    })
                }),
                (l.prototype.render = function (e, t) {
                    s.prototype.render.call(this, e, t)
                    var n = this.computeDateVars(e.dateProfile),
                        r = n.dayDates,
                        i = n.dayRanges
                    ;(this.dayDates = r),
                        this.renderSkeleton(t),
                        this.renderContent(
                            t,
                            this.eventStoreToSegs(
                                e.eventStore,
                                e.eventUiBases,
                                i
                            )
                        )
                }),
                (l.prototype.destroy = function () {
                    s.prototype.destroy.call(this),
                        this.renderSkeleton.unrender(),
                        this.renderContent.unrender(),
                        this.context.calendar.unregisterInteractiveComponent(
                            this
                        )
                }),
                (l.prototype._renderSkeleton = function (e) {
                    var t = e.theme
                    this.el.classList.add('fc-list-view')
                    for (
                        var n = 0,
                            r = (t.getClass('listView') || '').split(' ');
                        n < r.length;
                        n++
                    ) {
                        var i = r[n]
                        i && this.el.classList.add(i)
                    }
                    ;(this.scroller = new p.ScrollComponent('hidden', 'auto')),
                        this.el.appendChild(this.scroller.el),
                        (this.contentEl = this.scroller.el)
                }),
                (l.prototype._unrenderSkeleton = function () {
                    this.scroller.destroy()
                }),
                (l.prototype.updateSize = function (e, t, n) {
                    s.prototype.updateSize.call(this, e, t, n),
                        this.eventRenderer.computeSizes(e),
                        this.eventRenderer.assignSizes(e),
                        this.scroller.clear(),
                        n ||
                            this.scroller.setHeight(
                                this.computeScrollerHeight(t)
                            )
                }),
                (l.prototype.computeScrollerHeight = function (e) {
                    return (
                        e - p.subtractInnerElHeight(this.el, this.scroller.el)
                    )
                }),
                (l.prototype._eventStoreToSegs = function (e, t, n) {
                    return this.eventRangesToSegs(
                        p.sliceEventStore(
                            e,
                            t,
                            this.props.dateProfile.activeRange,
                            this.context.nextDayThreshold
                        ).fg,
                        n
                    )
                }),
                (l.prototype.eventRangesToSegs = function (e, t) {
                    for (var n = [], r = 0, i = e; r < i.length; r++) {
                        var o = i[r]
                        n.push.apply(n, this.eventRangeToSegs(o, t))
                    }
                    return n
                }),
                (l.prototype.eventRangeToSegs = function (e, t) {
                    for (
                        var n,
                            r,
                            i = this.context,
                            o = i.dateEnv,
                            s = i.nextDayThreshold,
                            a = e.range,
                            l = e.def.allDay,
                            d = [],
                            c = 0;
                        c < t.length;
                        c++
                    )
                        if (
                            (n = p.intersectRanges(a, t[c])) &&
                            ((r = {
                                component: this,
                                eventRange: e,
                                start: n.start,
                                end: n.end,
                                isStart:
                                    e.isStart &&
                                    n.start.valueOf() === a.start.valueOf(),
                                isEnd:
                                    e.isEnd &&
                                    n.end.valueOf() === a.end.valueOf(),
                                dayIndex: c
                            }),
                            d.push(r),
                            !r.isEnd &&
                                !l &&
                                c + 1 < t.length &&
                                a.end < o.add(t[c + 1].start, s))
                        ) {
                            ;(r.end = a.end), (r.isEnd = !0)
                            break
                        }
                    return d
                }),
                (l.prototype.renderEmptyMessage = function () {
                    this.contentEl.innerHTML =
                        '<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' +
                        p.htmlEscape(this.context.options.noEventsMessage) +
                        '</div></div></div>'
                }),
                (l.prototype.renderSegList = function (e) {
                    for (
                        var t,
                            n,
                            r = this.context.theme,
                            i = this.groupSegsByDay(e),
                            o = p.htmlToElement(
                                '<table class="fc-list-table ' +
                                    r.getClass('tableList') +
                                    '"><tbody></tbody></table>'
                            ),
                            s = o.querySelector('tbody'),
                            a = 0;
                        a < i.length;
                        a++
                    )
                        if ((t = i[a]))
                            for (
                                s.appendChild(
                                    this.buildDayHeaderRow(this.dayDates[a])
                                ),
                                    t = this.eventRenderer.sortEventSegs(t),
                                    n = 0;
                                n < t.length;
                                n++
                            )
                                s.appendChild(t[n].el)
                    ;(this.contentEl.innerHTML = ''),
                        this.contentEl.appendChild(o)
                }),
                (l.prototype.groupSegsByDay = function (e) {
                    for (var t, n = [], r = 0; r < e.length; r++)
                        (n[(t = e[r]).dayIndex] || (n[t.dayIndex] = [])).push(t)
                    return n
                }),
                (l.prototype.buildDayHeaderRow = function (e) {
                    var t = this.context,
                        n = t.theme,
                        r = t.dateEnv,
                        i = t.options,
                        o = p.createFormatter(i.listDayFormat),
                        s = p.createFormatter(i.listDayAltFormat)
                    return p.createElement(
                        'tr',
                        {
                            className: 'fc-list-heading',
                            'data-date': r.formatIso(e, { omitTime: !0 })
                        },
                        '<td class="' +
                            (n.getClass('tableListHeading') ||
                                n.getClass('widgetHeader')) +
                            '" colspan="3">' +
                            (o
                                ? p.buildGotoAnchorHtml(
                                      i,
                                      r,
                                      e,
                                      { class: 'fc-list-heading-main' },
                                      p.htmlEscape(r.format(e, o))
                                  )
                                : '') +
                            (s
                                ? p.buildGotoAnchorHtml(
                                      i,
                                      r,
                                      e,
                                      { class: 'fc-list-heading-alt' },
                                      p.htmlEscape(r.format(e, s))
                                  )
                                : '') +
                            '</td>'
                    )
                }),
                l)
        function l (e, t) {
            var n = s.call(this, e, t) || this
            ;(n.computeDateVars = p.memoize(d)),
                (n.eventStoreToSegs = p.memoize(n._eventStoreToSegs)),
                (n.renderSkeleton = p.memoizeRendering(
                    n._renderSkeleton,
                    n._unrenderSkeleton
                ))
            var r = (n.eventRenderer = new i(n))
            return (
                (n.renderContent = p.memoizeRendering(
                    r.renderSegs.bind(r),
                    r.unrender.bind(r),
                    [n.renderSkeleton]
                )),
                n
            )
        }
        function d (e) {
            for (
                var t = p.startOfDay(e.renderRange.start),
                    n = e.renderRange.end,
                    r = [],
                    i = [];
                t < n;

            )
                r.push(t),
                    i.push({ start: t, end: p.addDays(t, 1) }),
                    (t = p.addDays(t, 1))
            return { dayDates: r, dayRanges: i }
        }
        a.prototype.fgSegSelector = '.fc-list-item'
        var c = p.createPlugin({
            views: {
                list: {
                    class: a,
                    buttonTextKey: 'list',
                    listDayFormat: {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    }
                },
                listDay: {
                    type: 'list',
                    duration: { days: 1 },
                    listDayFormat: { weekday: 'long' }
                },
                listWeek: {
                    type: 'list',
                    duration: { weeks: 1 },
                    listDayFormat: { weekday: 'long' },
                    listDayAltFormat: {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    }
                },
                listMonth: {
                    type: 'list',
                    duration: { month: 1 },
                    listDayAltFormat: { weekday: 'long' }
                },
                listYear: {
                    type: 'list',
                    duration: { year: 1 },
                    listDayAltFormat: { weekday: 'long' }
                }
            }
        })
        ;(e.ListView = a),
            (e.default = c),
            Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
            ? t(
                  exports,
                  require('@fullcalendar/core'),
                  require('@fullcalendar/daygrid')
              )
            : 'function' == typeof define && define.amd
            ? define(
                  ['exports', '@fullcalendar/core', '@fullcalendar/daygrid'],
                  t
              )
            : t(
                  ((e = e || self).FullCalendarTimeGrid = {}),
                  e.FullCalendar,
                  e.FullCalendarDayGrid
              )
    })(this, function (e, g, c) {
        'use strict'
        var r = function (e, t) {
            return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t
                    }) ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }
        function t (e, t) {
            function n () {
                this.constructor = e
            }
            r(e, t),
                (e.prototype =
                    null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()))
        }
        var i,
            l = function () {
                return (l =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, i) &&
                                    (e[i] = t[i])
                        return e
                    }).apply(this, arguments)
            },
            s =
                (t(n, (i = g.FgEventRenderer)),
                (n.prototype.renderSegs = function (e, t, n) {
                    i.prototype.renderSegs.call(this, e, t, n),
                        (this.fullTimeFormat = g.createFormatter({
                            hour: 'numeric',
                            minute: '2-digit',
                            separator:
                                this.context.options.defaultRangeSeparator
                        }))
                }),
                (n.prototype.attachSegs = function (e, t) {
                    for (
                        var n = this.timeGrid.groupSegsByCol(e), r = 0;
                        r < n.length;
                        r++
                    )
                        n[r] = this.sortEventSegs(n[r])
                    ;(this.segsByCol = n),
                        this.timeGrid.attachSegsByCol(
                            n,
                            this.timeGrid.fgContainerEls
                        )
                }),
                (n.prototype.detachSegs = function (e) {
                    e.forEach(function (e) {
                        g.removeElement(e.el)
                    }),
                        (this.segsByCol = null)
                }),
                (n.prototype.computeSegSizes = function (e) {
                    var t = this.timeGrid,
                        n = this.segsByCol,
                        r = t.colCnt
                    if ((t.computeSegVerticals(e), n))
                        for (var i = 0; i < r; i++)
                            this.computeSegHorizontals(n[i])
                }),
                (n.prototype.assignSegSizes = function (e) {
                    var t = this.timeGrid,
                        n = this.segsByCol,
                        r = t.colCnt
                    if ((t.assignSegVerticals(e), n))
                        for (var i = 0; i < r; i++) this.assignSegCss(n[i])
                }),
                (n.prototype.computeEventTimeFormat = function () {
                    return { hour: 'numeric', minute: '2-digit', meridiem: !1 }
                }),
                (n.prototype.computeDisplayEventEnd = function () {
                    return !0
                }),
                (n.prototype.renderSegHtml = function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s,
                        a = e.eventRange,
                        l = a.def,
                        d = a.ui,
                        c = l.allDay,
                        u = g.computeEventDraggable(this.context, l, d),
                        p =
                            e.isStart &&
                            g.computeEventStartResizable(this.context, l, d),
                        h =
                            e.isEnd &&
                            g.computeEventEndResizable(this.context, l, d),
                        f = this.getSegClasses(e, u, p || h, t),
                        v = g.cssToStr(this.getSkinCss(d))
                    return (
                        f.unshift('fc-time-grid-event'),
                        g.isMultiDayRange(a.range)
                            ? (e.isStart || e.isEnd) &&
                              ((n = e.start),
                              (r = e.end),
                              (i = this._getTimeText(n, r, c)),
                              (o = this._getTimeText(
                                  n,
                                  r,
                                  c,
                                  this.fullTimeFormat
                              )),
                              (s = this._getTimeText(n, r, c, null, !1)))
                            : ((i = this.getTimeText(a)),
                              (o = this.getTimeText(a, this.fullTimeFormat)),
                              (s = this.getTimeText(a, null, !1))),
                        '<a class="' +
                            f.join(' ') +
                            '"' +
                            (l.url
                                ? ' href="' + g.htmlEscape(l.url) + '"'
                                : '') +
                            (v ? ' style="' + v + '"' : '') +
                            '><div class="fc-content">' +
                            (i
                                ? '<div class="fc-time" data-start="' +
                                  g.htmlEscape(s) +
                                  '" data-full="' +
                                  g.htmlEscape(o) +
                                  '"><span>' +
                                  g.htmlEscape(i) +
                                  '</span></div>'
                                : '') +
                            (l.title
                                ? '<div class="fc-title">' +
                                  g.htmlEscape(l.title) +
                                  '</div>'
                                : '') +
                            '</div>' +
                            (h
                                ? '<div class="fc-resizer fc-end-resizer"></div>'
                                : '') +
                            '</a>'
                    )
                }),
                (n.prototype.computeSegHorizontals = function (e) {
                    var t,
                        n,
                        r = (function (e) {
                            var t,
                                n,
                                r,
                                i = []
                            for (t = 0; t < e.length; t++) {
                                for (
                                    n = e[t], r = 0;
                                    r < i.length && a(n, i[r]).length;
                                    r++
                                );
                                ;(n.level = r), (i[r] || (i[r] = [])).push(n)
                            }
                            return i
                        })(e)
                    if (
                        ((function (e) {
                            var t, n, r, i, o
                            for (t = 0; t < e.length; t++)
                                for (n = e[t], r = 0; r < n.length; r++)
                                    for (
                                        (i = n[r]).forwardSegs = [], o = t + 1;
                                        o < e.length;
                                        o++
                                    )
                                        a(i, e[o], i.forwardSegs)
                        })(r),
                        (t = r[0]))
                    ) {
                        for (n = 0; n < t.length; n++)
                            !(function e (t) {
                                var n,
                                    r,
                                    i = t.forwardSegs,
                                    o = 0
                                if (void 0 === t.forwardPressure) {
                                    for (n = 0; n < i.length; n++)
                                        (r = i[n]),
                                            e(r),
                                            (o = Math.max(
                                                o,
                                                1 + r.forwardPressure
                                            ))
                                    t.forwardPressure = o
                                }
                            })(t[n])
                        for (n = 0; n < t.length; n++)
                            this.computeSegForwardBack(t[n], 0, 0)
                    }
                }),
                (n.prototype.computeSegForwardBack = function (e, t, n) {
                    var r,
                        i = e.forwardSegs
                    if (void 0 === e.forwardCoord)
                        for (
                            i.length
                                ? (this.sortForwardSegs(i),
                                  this.computeSegForwardBack(i[0], t + 1, n),
                                  (e.forwardCoord = i[0].backwardCoord))
                                : (e.forwardCoord = 1),
                                e.backwardCoord =
                                    e.forwardCoord -
                                    (e.forwardCoord - n) / (t + 1),
                                r = 0;
                            r < i.length;
                            r++
                        )
                            this.computeSegForwardBack(i[r], 0, e.forwardCoord)
                }),
                (n.prototype.sortForwardSegs = function (e) {
                    var t = e.map(o),
                        n = [
                            { field: 'forwardPressure', order: -1 },
                            { field: 'backwardCoord', order: 1 }
                        ].concat(this.context.eventOrderSpecs)
                    return (
                        t.sort(function (e, t) {
                            return g.compareByFieldSpecs(e, t, n)
                        }),
                        t.map(function (e) {
                            return e._seg
                        })
                    )
                }),
                (n.prototype.assignSegCss = function (e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var r = n[t]
                        g.applyStyle(r.el, this.generateSegCss(r)),
                            0 < r.level &&
                                r.el.classList.add('fc-time-grid-event-inset'),
                            r.eventRange.def.title &&
                                r.bottom - r.top < 30 &&
                                r.el.classList.add('fc-short')
                    }
                }),
                (n.prototype.generateSegCss = function (e) {
                    var t,
                        n,
                        r = this.context.options.slotEventOverlap,
                        i = e.backwardCoord,
                        o = e.forwardCoord,
                        s = this.timeGrid.generateSegVerticalCss(e),
                        a = this.context.isRtl
                    return (
                        r && (o = Math.min(1, i + 2 * (o - i))),
                        (n = a ? ((t = 1 - o), i) : ((t = i), 1 - o)),
                        (s.zIndex = e.level + 1),
                        (s.left = 100 * t + '%'),
                        (s.right = 100 * n + '%'),
                        r &&
                            e.forwardPressure &&
                            (s[a ? 'marginLeft' : 'marginRight'] = 20),
                        s
                    )
                }),
                n)
        function n (e) {
            var t = i.call(this) || this
            return (t.timeGrid = e), t
        }
        function a (e, t, n) {
            void 0 === n && (n = [])
            for (var r, i, o = 0; o < t.length; o++)
                (r = e),
                    (i = t[o]),
                    r.bottom > i.top && r.top < i.bottom && n.push(t[o])
            return n
        }
        function o (e) {
            var t = g.buildSegCompareObj(e)
            return (
                (t.forwardPressure = e.forwardPressure),
                (t.backwardCoord = e.backwardCoord),
                t
            )
        }
        var d,
            u =
                (t(p, (d = s)),
                (p.prototype.attachSegs = function (e, t) {
                    ;(this.segsByCol = this.timeGrid.groupSegsByCol(e)),
                        this.timeGrid.attachSegsByCol(
                            this.segsByCol,
                            this.timeGrid.mirrorContainerEls
                        ),
                        (this.sourceSeg = t.sourceSeg)
                }),
                (p.prototype.generateSegCss = function (e) {
                    var t,
                        n = d.prototype.generateSegCss.call(this, e),
                        r = this.sourceSeg
                    return (
                        r &&
                            r.col === e.col &&
                            ((t = d.prototype.generateSegCss.call(this, r)),
                            (n.left = t.left),
                            (n.right = t.right),
                            (n.marginLeft = t.marginLeft),
                            (n.marginRight = t.marginRight)),
                        n
                    )
                }),
                p)
        function p () {
            return (null !== d && d.apply(this, arguments)) || this
        }
        var h,
            f =
                (t(v, (h = g.FillRenderer)),
                (v.prototype.attachSegs = function (e, t) {
                    var n,
                        r = this.timeGrid
                    return (
                        'bgEvent' === e
                            ? (n = r.bgContainerEls)
                            : 'businessHours' === e
                            ? (n = r.businessContainerEls)
                            : 'highlight' === e &&
                              (n = r.highlightContainerEls),
                        r.attachSegsByCol(r.groupSegsByCol(t), n),
                        t.map(function (e) {
                            return e.el
                        })
                    )
                }),
                (v.prototype.computeSegSizes = function (e) {
                    this.timeGrid.computeSegVerticals(e)
                }),
                (v.prototype.assignSegSizes = function (e) {
                    this.timeGrid.assignSegVerticals(e)
                }),
                v)
        function v (e) {
            var t = h.call(this) || this
            return (t.timeGrid = e), t
        }
        var m,
            y = [
                { hours: 1 },
                { minutes: 30 },
                { minutes: 15 },
                { seconds: 30 },
                { seconds: 15 }
            ],
            S =
                (t(E, (m = g.DateComponent)),
                (E.prototype._processOptions = function (e) {
                    var t,
                        n = e.slotDuration,
                        r = e.snapDuration,
                        n = g.createDuration(n),
                        r = r ? g.createDuration(r) : n,
                        i = g.wholeDivideDurations(n, r)
                    null === i && ((r = n), (i = 1)),
                        (this.slotDuration = n),
                        (this.snapDuration = r),
                        (this.snapsPerSlot = i),
                        (t = e.slotLabelFormat),
                        Array.isArray(t) && (t = t[t.length - 1]),
                        (this.labelFormat = g.createFormatter(
                            t || {
                                hour: 'numeric',
                                minute: '2-digit',
                                omitZeroMinute: !0,
                                meridiem: 'short'
                            }
                        )),
                        (t = e.slotLabelInterval),
                        (this.labelInterval = t
                            ? g.createDuration(t)
                            : this.computeLabelInterval(n))
                }),
                (E.prototype.computeLabelInterval = function (e) {
                    for (var t, n, r = y.length - 1; 0 <= r; r--)
                        if (
                            ((t = g.createDuration(y[r])),
                            null !== (n = g.wholeDivideDurations(t, e)) &&
                                1 < n)
                        )
                            return t
                    return e
                }),
                (E.prototype.render = function (e, t) {
                    this.processOptions(t.options)
                    var n = e.cells
                    ;(this.colCnt = n.length),
                        this.renderSkeleton(t.theme),
                        this.renderSlats(e.dateProfile),
                        this.renderColumns(e.cells, e.dateProfile),
                        this.renderBusinessHours(t, e.businessHourSegs),
                        this.renderDateSelection(e.dateSelectionSegs),
                        this.renderFgEvents(t, e.fgEventSegs),
                        this.renderBgEvents(t, e.bgEventSegs),
                        this.renderEventSelection(e.eventSelection),
                        this.renderEventDrag(e.eventDrag),
                        this.renderEventResize(e.eventResize)
                }),
                (E.prototype.destroy = function () {
                    m.prototype.destroy.call(this),
                        this.renderSlats.unrender(),
                        this.renderColumns.unrender(),
                        this.renderSkeleton.unrender()
                }),
                (E.prototype.updateSize = function (e) {
                    var t = this.fillRenderer,
                        n = this.eventRenderer,
                        r = this.mirrorRenderer
                    ;(e || this.isSlatSizesDirty) &&
                        (this.buildSlatPositions(),
                        (this.isSlatSizesDirty = !1)),
                        (e || this.isColSizesDirty) &&
                            (this.buildColPositions(),
                            (this.isColSizesDirty = !1)),
                        t.computeSizes(e),
                        n.computeSizes(e),
                        r.computeSizes(e),
                        t.assignSizes(e),
                        n.assignSizes(e),
                        r.assignSizes(e)
                }),
                (E.prototype._renderSkeleton = function (e) {
                    var t = this.el
                    ;(t.innerHTML =
                        '<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' +
                        e.getClass('widgetHeader') +
                        '" style="display:none" />'),
                        (this.rootBgContainerEl = t.querySelector('.fc-bg')),
                        (this.slatContainerEl = t.querySelector('.fc-slats')),
                        (this.bottomRuleEl = t.querySelector('.fc-divider'))
                }),
                (E.prototype._renderSlats = function (e) {
                    var t = this.context.theme
                    ;(this.slatContainerEl.innerHTML =
                        '<table class="' +
                        t.getClass('tableGrid') +
                        '">' +
                        this.renderSlatRowHtml(e) +
                        '</table>'),
                        (this.slatEls = g.findElements(
                            this.slatContainerEl,
                            'tr'
                        )),
                        (this.slatPositions = new g.PositionCache(
                            this.el,
                            this.slatEls,
                            !1,
                            !0
                        )),
                        (this.isSlatSizesDirty = !0)
                }),
                (E.prototype.renderSlatRowHtml = function (e) {
                    for (
                        var t,
                            n,
                            r,
                            i = this.context,
                            o = i.dateEnv,
                            s = i.theme,
                            a = i.isRtl,
                            l = '',
                            d = g.startOfDay(e.renderRange.start),
                            c = e.minTime,
                            u = g.createDuration(0);
                        g.asRoughMs(c) < g.asRoughMs(e.maxTime);

                    )
                        (t = o.add(d, c)),
                            (n =
                                null !==
                                g.wholeDivideDurations(u, this.labelInterval)),
                            (r =
                                '<td class="fc-axis fc-time ' +
                                s.getClass('widgetContent') +
                                '">' +
                                (n
                                    ? '<span>' +
                                      g.htmlEscape(
                                          o.format(t, this.labelFormat)
                                      ) +
                                      '</span>'
                                    : '') +
                                '</td>'),
                            (l +=
                                '<tr data-time="' +
                                g.formatIsoTimeString(t) +
                                '"' +
                                (n ? '' : ' class="fc-minor"') +
                                '>' +
                                (a ? '' : r) +
                                '<td class="' +
                                s.getClass('widgetContent') +
                                '"></td>' +
                                (a ? r : '') +
                                '</tr>'),
                            (c = g.addDurations(c, this.slotDuration)),
                            (u = g.addDurations(u, this.slotDuration))
                    return l
                }),
                (E.prototype._renderColumns = function (e, t) {
                    var n = this.context,
                        r = n.calendar,
                        i = n.view,
                        o = n.isRtl,
                        s = n.theme,
                        a = n.dateEnv,
                        l = new c.DayBgRow(this.context)
                    ;(this.rootBgContainerEl.innerHTML =
                        '<table class="' +
                        s.getClass('tableGrid') +
                        '">' +
                        l.renderHtml({
                            cells: e,
                            dateProfile: t,
                            renderIntroHtml: this.renderProps.renderBgIntroHtml
                        }) +
                        '</table>'),
                        (this.colEls = g.findElements(
                            this.el,
                            '.fc-day, .fc-disabled-day'
                        ))
                    for (var d = 0; d < this.colCnt; d++)
                        r.publiclyTrigger('dayRender', [
                            {
                                date: a.toDate(e[d].date),
                                el: this.colEls[d],
                                view: i
                            }
                        ])
                    o && this.colEls.reverse(),
                        (this.colPositions = new g.PositionCache(
                            this.el,
                            this.colEls,
                            !0,
                            !1
                        )),
                        this.renderContentSkeleton(),
                        (this.isColSizesDirty = !0)
                }),
                (E.prototype._unrenderColumns = function () {
                    this.unrenderContentSkeleton()
                }),
                (E.prototype.renderContentSkeleton = function () {
                    var e,
                        t = this.context.isRtl,
                        n = []
                    n.push(this.renderProps.renderIntroHtml())
                    for (var r = 0; r < this.colCnt; r++)
                        n.push(
                            '<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>'
                        )
                    t && n.reverse(),
                        (e = this.contentSkeletonEl =
                            g.htmlToElement(
                                '<div class="fc-content-skeleton"><table><tr>' +
                                    n.join('') +
                                    '</tr></table></div>'
                            )),
                        (this.colContainerEls = g.findElements(
                            e,
                            '.fc-content-col'
                        )),
                        (this.mirrorContainerEls = g.findElements(
                            e,
                            '.fc-mirror-container'
                        )),
                        (this.fgContainerEls = g.findElements(
                            e,
                            '.fc-event-container:not(.fc-mirror-container)'
                        )),
                        (this.bgContainerEls = g.findElements(
                            e,
                            '.fc-bgevent-container'
                        )),
                        (this.highlightContainerEls = g.findElements(
                            e,
                            '.fc-highlight-container'
                        )),
                        (this.businessContainerEls = g.findElements(
                            e,
                            '.fc-business-container'
                        )),
                        t &&
                            (this.colContainerEls.reverse(),
                            this.mirrorContainerEls.reverse(),
                            this.fgContainerEls.reverse(),
                            this.bgContainerEls.reverse(),
                            this.highlightContainerEls.reverse(),
                            this.businessContainerEls.reverse()),
                        this.el.appendChild(e)
                }),
                (E.prototype.unrenderContentSkeleton = function () {
                    g.removeElement(this.contentSkeletonEl)
                }),
                (E.prototype.groupSegsByCol = function (e) {
                    for (var t = [], n = 0; n < this.colCnt; n++) t.push([])
                    for (n = 0; n < e.length; n++) t[e[n].col].push(e[n])
                    return t
                }),
                (E.prototype.attachSegsByCol = function (e, t) {
                    for (var n, r, i = 0; i < this.colCnt; i++)
                        for (n = e[i], r = 0; r < n.length; r++)
                            t[i].appendChild(n[r].el)
                }),
                (E.prototype.getNowIndicatorUnit = function () {
                    return 'minute'
                }),
                (E.prototype.renderNowIndicator = function (e, t) {
                    if (this.colContainerEls) {
                        for (
                            var n, r = this.computeDateTop(t), i = [], o = 0;
                            o < e.length;
                            o++
                        ) {
                            var s = g.createElement('div', {
                                className:
                                    'fc-now-indicator fc-now-indicator-line'
                            })
                            ;(s.style.top = r + 'px'),
                                this.colContainerEls[e[o].col].appendChild(s),
                                i.push(s)
                        }
                        0 < e.length &&
                            (((n = g.createElement('div', {
                                className:
                                    'fc-now-indicator fc-now-indicator-arrow'
                            })).style.top = r + 'px'),
                            this.contentSkeletonEl.appendChild(n),
                            i.push(n)),
                            (this.nowIndicatorEls = i)
                    }
                }),
                (E.prototype.unrenderNowIndicator = function () {
                    this.nowIndicatorEls &&
                        (this.nowIndicatorEls.forEach(g.removeElement),
                        (this.nowIndicatorEls = null))
                }),
                (E.prototype.getTotalSlatHeight = function () {
                    return this.slatContainerEl.getBoundingClientRect().height
                }),
                (E.prototype.computeDateTop = function (e, t) {
                    return (
                        (t = t || g.startOfDay(e)),
                        this.computeTimeTop(
                            g.createDuration(e.valueOf() - t.valueOf())
                        )
                    )
                }),
                (E.prototype.computeTimeTop = function (e) {
                    var t,
                        n,
                        r = this.slatEls.length,
                        i = this.props.dateProfile,
                        o =
                            (e.milliseconds - g.asRoughMs(i.minTime)) /
                            g.asRoughMs(this.slotDuration),
                        o = Math.max(0, o)
                    return (
                        (o = Math.min(r, o)),
                        (t = Math.floor(o)),
                        (n = o - (t = Math.min(t, r - 1))),
                        this.slatPositions.tops[t] +
                            this.slatPositions.getHeight(t) * n
                    )
                }),
                (E.prototype.computeSegVerticals = function (e) {
                    for (
                        var t,
                            n,
                            r = this.context.options.timeGridEventMinHeight,
                            i = 0;
                        i < e.length;
                        i++
                    )
                        (t = e[i]),
                            (n = this.props.cells[t.col].date),
                            (t.top = this.computeDateTop(t.start, n)),
                            (t.bottom = Math.max(
                                t.top + r,
                                this.computeDateTop(t.end, n)
                            ))
                }),
                (E.prototype.assignSegVerticals = function (e) {
                    for (var t, n = 0; n < e.length; n++)
                        (t = e[n]),
                            g.applyStyle(t.el, this.generateSegVerticalCss(t))
                }),
                (E.prototype.generateSegVerticalCss = function (e) {
                    return { top: e.top, bottom: -e.bottom }
                }),
                (E.prototype.buildPositionCaches = function () {
                    this.buildColPositions(), this.buildSlatPositions()
                }),
                (E.prototype.buildColPositions = function () {
                    this.colPositions.build()
                }),
                (E.prototype.buildSlatPositions = function () {
                    this.slatPositions.build()
                }),
                (E.prototype.positionToHit = function (e, t) {
                    var n = this.context.dateEnv,
                        r = this.snapsPerSlot,
                        i = this.slatPositions,
                        o = this.colPositions,
                        s = o.leftToIndex(e),
                        a = i.topToIndex(t)
                    if (null != s && null != a) {
                        var l = i.tops[a],
                            d = i.getHeight(a),
                            c = (t - l) / d,
                            u = a * r + Math.floor(c * r),
                            p = this.props.cells[s].date,
                            h = g.addDurations(
                                this.props.dateProfile.minTime,
                                g.multiplyDuration(this.snapDuration, u)
                            ),
                            f = n.add(p, h)
                        return {
                            col: s,
                            dateSpan: {
                                range: {
                                    start: f,
                                    end: n.add(f, this.snapDuration)
                                },
                                allDay: !1
                            },
                            dayEl: this.colEls[s],
                            relativeRect: {
                                left: o.lefts[s],
                                right: o.rights[s],
                                top: l,
                                bottom: l + d
                            }
                        }
                    }
                }),
                (E.prototype._renderEventDrag = function (e) {
                    e &&
                        (this.eventRenderer.hideByHash(e.affectedInstances),
                        e.isEvent
                            ? this.mirrorRenderer.renderSegs(
                                  this.context,
                                  e.segs,
                                  { isDragging: !0, sourceSeg: e.sourceSeg }
                              )
                            : this.fillRenderer.renderSegs(
                                  'highlight',
                                  this.context,
                                  e.segs
                              ))
                }),
                (E.prototype._unrenderEventDrag = function (e) {
                    e &&
                        (this.eventRenderer.showByHash(e.affectedInstances),
                        e.isEvent
                            ? this.mirrorRenderer.unrender(
                                  this.context,
                                  e.segs,
                                  { isDragging: !0, sourceSeg: e.sourceSeg }
                              )
                            : this.fillRenderer.unrender(
                                  'highlight',
                                  this.context
                              ))
                }),
                (E.prototype._renderEventResize = function (e) {
                    e &&
                        (this.eventRenderer.hideByHash(e.affectedInstances),
                        this.mirrorRenderer.renderSegs(this.context, e.segs, {
                            isResizing: !0,
                            sourceSeg: e.sourceSeg
                        }))
                }),
                (E.prototype._unrenderEventResize = function (e) {
                    e &&
                        (this.eventRenderer.showByHash(e.affectedInstances),
                        this.mirrorRenderer.unrender(this.context, e.segs, {
                            isResizing: !0,
                            sourceSeg: e.sourceSeg
                        }))
                }),
                (E.prototype._renderDateSelection = function (e) {
                    e &&
                        (this.context.options.selectMirror
                            ? this.mirrorRenderer.renderSegs(this.context, e, {
                                  isSelecting: !0
                              })
                            : this.fillRenderer.renderSegs(
                                  'highlight',
                                  this.context,
                                  e
                              ))
                }),
                (E.prototype._unrenderDateSelection = function (e) {
                    e &&
                        (this.context.options.selectMirror
                            ? this.mirrorRenderer.unrender(this.context, e, {
                                  isSelecting: !0
                              })
                            : this.fillRenderer.unrender(
                                  'highlight',
                                  this.context
                              ))
                }),
                E)
        function E (e, t) {
            var n = m.call(this, e) || this
            ;(n.isSlatSizesDirty = !1),
                (n.isColSizesDirty = !1),
                (n.processOptions = g.memoize(n._processOptions)),
                (n.renderSkeleton = g.memoizeRendering(n._renderSkeleton)),
                (n.renderSlats = g.memoizeRendering(n._renderSlats, null, [
                    n.renderSkeleton
                ])),
                (n.renderColumns = g.memoizeRendering(
                    n._renderColumns,
                    n._unrenderColumns,
                    [n.renderSkeleton]
                )),
                (n.renderProps = t)
            var r = n.renderColumns,
                i = (n.eventRenderer = new s(n)),
                o = (n.fillRenderer = new f(n))
            return (
                (n.mirrorRenderer = new u(n)),
                (n.renderBusinessHours = g.memoizeRendering(
                    o.renderSegs.bind(o, 'businessHours'),
                    o.unrender.bind(o, 'businessHours'),
                    [r]
                )),
                (n.renderDateSelection = g.memoizeRendering(
                    n._renderDateSelection,
                    n._unrenderDateSelection,
                    [r]
                )),
                (n.renderFgEvents = g.memoizeRendering(
                    i.renderSegs.bind(i),
                    i.unrender.bind(i),
                    [r]
                )),
                (n.renderBgEvents = g.memoizeRendering(
                    o.renderSegs.bind(o, 'bgEvent'),
                    o.unrender.bind(o, 'bgEvent'),
                    [r]
                )),
                (n.renderEventSelection = g.memoizeRendering(
                    i.selectByInstanceId.bind(i),
                    i.unselectByInstanceId.bind(i),
                    [n.renderFgEvents]
                )),
                (n.renderEventDrag = g.memoizeRendering(
                    n._renderEventDrag,
                    n._unrenderEventDrag,
                    [r]
                )),
                (n.renderEventResize = g.memoizeRendering(
                    n._renderEventResize,
                    n._unrenderEventResize,
                    [r]
                )),
                n
            )
        }
        var b,
            w =
                (t(D, (b = g.Splitter)),
                (D.prototype.getKeyInfo = function () {
                    return { allDay: {}, timed: {} }
                }),
                (D.prototype.getKeysForDateSpan = function (e) {
                    return e.allDay ? ['allDay'] : ['timed']
                }),
                (D.prototype.getKeysForEventDef = function (e) {
                    return e.allDay
                        ? g.hasBgRendering(e)
                            ? ['timed', 'allDay']
                            : ['allDay']
                        : ['timed']
                }),
                D)
        function D () {
            return (null !== b && b.apply(this, arguments)) || this
        }
        var T,
            C = g.createFormatter({ week: 'short' }),
            R =
                (t(I, (T = g.View)),
                (I.prototype.render = function (e, t) {
                    T.prototype.render.call(this, e, t), this.renderSkeleton(t)
                }),
                (I.prototype.destroy = function () {
                    T.prototype.destroy.call(this),
                        this.renderSkeleton.unrender()
                }),
                (I.prototype._renderSkeleton = function (e) {
                    this.el.classList.add('fc-timeGrid-view'),
                        (this.el.innerHTML = this.renderSkeletonHtml()),
                        (this.scroller = new g.ScrollComponent(
                            'hidden',
                            'auto'
                        ))
                    var t = this.scroller.el
                    this.el.querySelector('.fc-body > tr > td').appendChild(t),
                        t.classList.add('fc-time-grid-container')
                    var n,
                        r = g.createElement('div', {
                            className: 'fc-time-grid'
                        })
                    t.appendChild(r),
                        (this.timeGrid = new S(r, {
                            renderBgIntroHtml: this.renderTimeGridBgIntroHtml,
                            renderIntroHtml: this.renderTimeGridIntroHtml
                        })),
                        e.options.allDaySlot &&
                            ((this.dayGrid = new c.DayGrid(
                                this.el.querySelector('.fc-day-grid'),
                                {
                                    renderNumberIntroHtml:
                                        this.renderDayGridIntroHtml,
                                    renderBgIntroHtml:
                                        this.renderDayGridBgIntroHtml,
                                    renderIntroHtml:
                                        this.renderDayGridIntroHtml,
                                    colWeekNumbersVisible: !1,
                                    cellWeekNumbersVisible: !1
                                }
                            )),
                            (n = this.el.querySelector('.fc-divider')),
                            (this.dayGrid.bottomCoordPadding =
                                n.getBoundingClientRect().height))
                }),
                (I.prototype._unrenderSkeleton = function () {
                    this.el.classList.remove('fc-timeGrid-view'),
                        this.timeGrid.destroy(),
                        this.dayGrid && this.dayGrid.destroy(),
                        this.scroller.destroy()
                }),
                (I.prototype.renderSkeletonHtml = function () {
                    var e = this.context,
                        t = e.theme,
                        n = e.options
                    return (
                        '<table class="' +
                        t.getClass('tableGrid') +
                        '">' +
                        (n.columnHeader
                            ? '<thead class="fc-head"><tr><td class="fc-head-container ' +
                              t.getClass('widgetHeader') +
                              '">&nbsp;</td></tr></thead>'
                            : '') +
                        '<tbody class="fc-body"><tr><td class="' +
                        t.getClass('widgetContent') +
                        '">' +
                        (n.allDaySlot
                            ? '<div class="fc-day-grid"></div><hr class="fc-divider ' +
                              t.getClass('widgetHeader') +
                              '" />'
                            : '') +
                        '</td></tr></tbody></table>'
                    )
                }),
                (I.prototype.getNowIndicatorUnit = function () {
                    return this.timeGrid.getNowIndicatorUnit()
                }),
                (I.prototype.unrenderNowIndicator = function () {
                    this.timeGrid.unrenderNowIndicator()
                }),
                (I.prototype.updateSize = function (e, t, n) {
                    T.prototype.updateSize.call(this, e, t, n),
                        this.timeGrid.updateSize(e),
                        this.dayGrid && this.dayGrid.updateSize(e)
                }),
                (I.prototype.updateBaseSize = function (e, t, n) {
                    var r,
                        i,
                        o,
                        s,
                        a = this
                    ;(this.axisWidth = g.matchCellWidths(
                        g.findElements(this.el, '.fc-axis')
                    )),
                        this.timeGrid.colEls
                            ? ((s = g
                                  .findElements(this.el, '.fc-row')
                                  .filter(function (e) {
                                      return !a.scroller.el.contains(e)
                                  })),
                              (this.timeGrid.bottomRuleEl.style.display =
                                  'none'),
                              this.scroller.clear(),
                              s.forEach(g.uncompensateScroll),
                              this.dayGrid &&
                                  (this.dayGrid.removeSegPopover(),
                                  (r = this.context.options.eventLimit) &&
                                      'number' != typeof r &&
                                      (r = 5),
                                  r && this.dayGrid.limitRows(r)),
                              n ||
                                  ((i = this.computeScrollerHeight(t)),
                                  this.scroller.setHeight(i),
                                  ((o = this.scroller.getScrollbarWidths())
                                      .left ||
                                      o.right) &&
                                      (s.forEach(function (e) {
                                          g.compensateScroll(e, o)
                                      }),
                                      (i = this.computeScrollerHeight(t)),
                                      this.scroller.setHeight(i)),
                                  this.scroller.lockOverflow(o),
                                  this.timeGrid.getTotalSlatHeight() < i &&
                                      (this.timeGrid.bottomRuleEl.style.display =
                                          '')))
                            : n ||
                              ((i = this.computeScrollerHeight(t)),
                              this.scroller.setHeight(i))
                }),
                (I.prototype.computeScrollerHeight = function (e) {
                    return (
                        e - g.subtractInnerElHeight(this.el, this.scroller.el)
                    )
                }),
                (I.prototype.computeDateScroll = function (e) {
                    var t = this.timeGrid.computeTimeTop(e)
                    return (t = Math.ceil(t)) && t++, { top: t }
                }),
                (I.prototype.queryDateScroll = function () {
                    return { top: this.scroller.getScrollTop() }
                }),
                (I.prototype.applyDateScroll = function (e) {
                    void 0 !== e.top && this.scroller.setScrollTop(e.top)
                }),
                (I.prototype.axisStyleAttr = function () {
                    return null != this.axisWidth
                        ? 'style="width:' + this.axisWidth + 'px"'
                        : ''
                }),
                I)
        function I () {
            var a = (null !== T && T.apply(this, arguments)) || this
            return (
                (a.splitter = new w()),
                (a.renderSkeleton = g.memoizeRendering(
                    a._renderSkeleton,
                    a._unrenderSkeleton
                )),
                (a.renderHeadIntroHtml = function () {
                    var e,
                        t = a.context,
                        n = t.theme,
                        r = t.dateEnv,
                        i = t.options,
                        o = a.props.dateProfile.renderRange,
                        s = g.diffDays(o.start, o.end)
                    return i.weekNumbers
                        ? ((e = r.format(o.start, C)),
                          '<th class="fc-axis fc-week-number ' +
                              n.getClass('widgetHeader') +
                              '" ' +
                              a.axisStyleAttr() +
                              '>' +
                              g.buildGotoAnchorHtml(
                                  i,
                                  r,
                                  {
                                      date: o.start,
                                      type: 'week',
                                      forceOff: 1 < s
                                  },
                                  g.htmlEscape(e)
                              ) +
                              '</th>')
                        : '<th class="fc-axis ' +
                              n.getClass('widgetHeader') +
                              '" ' +
                              a.axisStyleAttr() +
                              '></th>'
                }),
                (a.renderTimeGridBgIntroHtml = function () {
                    return (
                        '<td class="fc-axis ' +
                        a.context.theme.getClass('widgetContent') +
                        '" ' +
                        a.axisStyleAttr() +
                        '></td>'
                    )
                }),
                (a.renderTimeGridIntroHtml = function () {
                    return '<td class="fc-axis" ' + a.axisStyleAttr() + '></td>'
                }),
                (a.renderDayGridBgIntroHtml = function () {
                    var e = a.context,
                        t = e.theme,
                        n = e.options
                    return (
                        '<td class="fc-axis ' +
                        t.getClass('widgetContent') +
                        '" ' +
                        a.axisStyleAttr() +
                        '><span>' +
                        g.getAllDayHtml(n) +
                        '</span></td>'
                    )
                }),
                (a.renderDayGridIntroHtml = function () {
                    return '<td class="fc-axis" ' + a.axisStyleAttr() + '></td>'
                }),
                a
            )
        }
        R.prototype.usesMinMaxTime = !0
        var k,
            x =
                (t(M, (k = g.DateComponent)),
                (M.prototype.firstContext = function (e) {
                    e.calendar.registerInteractiveComponent(this, {
                        el: this.timeGrid.el
                    })
                }),
                (M.prototype.destroy = function () {
                    k.prototype.destroy.call(this),
                        this.context.calendar.unregisterInteractiveComponent(
                            this
                        )
                }),
                (M.prototype.render = function (e, t) {
                    var n = this.context.dateEnv,
                        r = e.dateProfile,
                        i = e.dayTable,
                        o = (this.dayRanges = this.buildDayRanges(i, r, n)),
                        s = this.timeGrid
                    s.receiveContext(t),
                        s.receiveProps(
                            l(
                                {},
                                this.slicer.sliceProps(
                                    e,
                                    r,
                                    null,
                                    t.calendar,
                                    s,
                                    o
                                ),
                                { dateProfile: r, cells: i.cells[0] }
                            ),
                            t
                        )
                }),
                (M.prototype.renderNowIndicator = function (e) {
                    this.timeGrid.renderNowIndicator(
                        this.slicer.sliceNowDate(
                            e,
                            this.timeGrid,
                            this.dayRanges
                        ),
                        e
                    )
                }),
                (M.prototype.buildPositionCaches = function () {
                    this.timeGrid.buildPositionCaches()
                }),
                (M.prototype.queryHit = function (e, t) {
                    var n = this.timeGrid.positionToHit(e, t)
                    if (n)
                        return {
                            component: this.timeGrid,
                            dateSpan: n.dateSpan,
                            dayEl: n.dayEl,
                            rect: {
                                left: n.relativeRect.left,
                                right: n.relativeRect.right,
                                top: n.relativeRect.top,
                                bottom: n.relativeRect.bottom
                            },
                            layer: 0
                        }
                }),
                M)
        function M (e) {
            var t = k.call(this, e.el) || this
            return (
                (t.buildDayRanges = g.memoize(P)),
                (t.slicer = new _()),
                (t.timeGrid = e),
                t
            )
        }
        function P (e, t, n) {
            for (var r = [], i = 0, o = e.headerDates; i < o.length; i++) {
                var s = o[i]
                r.push({ start: n.add(s, t.minTime), end: n.add(s, t.maxTime) })
            }
            return r
        }
        var H,
            _ =
                (t(O, (H = g.Slicer)),
                (O.prototype.sliceRange = function (e, t) {
                    for (var n = [], r = 0; r < t.length; r++) {
                        var i = g.intersectRanges(e, t[r])
                        i &&
                            n.push({
                                start: i.start,
                                end: i.end,
                                isStart:
                                    i.start.valueOf() === e.start.valueOf(),
                                isEnd: i.end.valueOf() === e.end.valueOf(),
                                col: r
                            })
                    }
                    return n
                }),
                O)
        function O () {
            return (null !== H && H.apply(this, arguments)) || this
        }
        var z,
            N =
                (t(L, (z = R)),
                (L.prototype.render = function (e, t) {
                    z.prototype.render.call(this, e, t)
                    var n = this.props,
                        r = n.dateProfile,
                        i = n.dateProfileGenerator,
                        o = t.nextDayThreshold,
                        s = this.buildDayTable(r, i),
                        a = this.splitter.splitProps(e)
                    this.header &&
                        this.header.receiveProps(
                            {
                                dateProfile: r,
                                dates: s.headerDates,
                                datesRepDistinctDays: !0,
                                renderIntroHtml: this.renderHeadIntroHtml
                            },
                            t
                        ),
                        this.simpleTimeGrid.receiveProps(
                            l({}, a.timed, { dateProfile: r, dayTable: s }),
                            t
                        ),
                        this.simpleDayGrid &&
                            this.simpleDayGrid.receiveProps(
                                l({}, a.allDay, {
                                    dateProfile: r,
                                    dayTable: s,
                                    nextDayThreshold: o,
                                    isRigid: !1
                                }),
                                t
                            ),
                        this.startNowIndicator(r, i)
                }),
                (L.prototype._renderSkeleton = function (e) {
                    z.prototype._renderSkeleton.call(this, e),
                        e.options.columnHeader &&
                            (this.header = new g.DayHeader(
                                this.el.querySelector('.fc-head-container')
                            )),
                        (this.simpleTimeGrid = new x(this.timeGrid)),
                        this.dayGrid &&
                            (this.simpleDayGrid = new c.SimpleDayGrid(
                                this.dayGrid
                            ))
                }),
                (L.prototype._unrenderSkeleton = function () {
                    z.prototype._unrenderSkeleton.call(this),
                        this.header && this.header.destroy(),
                        this.simpleTimeGrid.destroy(),
                        this.simpleDayGrid && this.simpleDayGrid.destroy()
                }),
                (L.prototype.renderNowIndicator = function (e) {
                    this.simpleTimeGrid.renderNowIndicator(e)
                }),
                L)
        function L () {
            var e = (null !== z && z.apply(this, arguments)) || this
            return (e.buildDayTable = g.memoize(B)), e
        }
        function B (e, t) {
            var n = new g.DaySeries(e.renderRange, t)
            return new g.DayTable(n, !1)
        }
        var V = g.createPlugin({
            defaultView: 'timeGridWeek',
            views: {
                timeGrid: {
                    class: N,
                    allDaySlot: !0,
                    slotDuration: '00:30:00',
                    slotEventOverlap: !0
                },
                timeGridDay: { type: 'timeGrid', duration: { days: 1 } },
                timeGridWeek: { type: 'timeGrid', duration: { weeks: 1 } }
            }
        })
        ;(e.AbstractTimeGridView = R),
            (e.TimeGrid = S),
            (e.TimeGridSlicer = _),
            (e.TimeGridView = N),
            (e.buildDayRanges = P),
            (e.buildDayTable = B),
            (e.default = V),
            Object.defineProperty(e, '__esModule', { value: !0 })
    })
