!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(exports, require('@fullcalendar/core'))
        : 'function' == typeof define && define.amd
        ? define(['exports', '@fullcalendar/core'], t)
        : t(((e = e || self).FullCalendarBootstrap = {}), e.FullCalendar)
})(this, function (e, t) {
    'use strict'
    var o = function (e, t) {
        return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t
                }) ||
            function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    }
    var r,
        n,
        a,
        p =
            ((r = t.Theme),
            o((n = c), (a = r)),
            (n.prototype =
                null === a
                    ? Object.create(a)
                    : ((i.prototype = a.prototype), new i())),
            c)
    function i () {
        this.constructor = n
    }
    function c () {
        return (null !== r && r.apply(this, arguments)) || this
    }
    ;(p.prototype.classes = {
        widget: 'fc-bootstrap',
        tableGrid: 'table-bordered',
        tableList: 'table',
        tableListHeading: 'table-active',
        buttonGroup: 'btn-group',
        button: 'btn',
        buttonActive: 'active',
        today: 'alert alert-info',
        popover: 'card card-primary',
        popoverHeader: 'card-header',
        popoverContent: 'card-body',
        headerRow: 'table-bordered',
        dayRow: 'table-bordered',
        listView: 'card'
    }),
        (p.prototype.baseIconClass = 'fe'),
        (p.prototype.iconClasses = {
            close: 'fe-x',
            prev: 'fe-chevron-left',
            next: 'fe-chevron-right',
            prevYear: 'fe-chevrons-left',
            nextYear: 'fe-chevron-right'
        }),
        (p.prototype.iconOverrideOption = 'bootstrapFontAwesome'),
        (p.prototype.iconOverrideCustomButtonOption = 'bootstrapFontAwesome'),
        (p.prototype.iconOverridePrefix = 'fe-')
    var l = t.createPlugin({ themeClasses: { bootstrap: p } })
    ;(e.BootstrapTheme = p),
        (e.default = l),
        Object.defineProperty(e, '__esModule', { value: !0 })
})
