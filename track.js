/* البيكسلات: كيتشارجاو غير إلا كان ID معمّر فـ config.js */
(function () {
  var C = window.CELIA || {};

  if (C.META_PIXEL_ID) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', C.META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  if (C.TIKTOK_PIXEL_ID) {
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
      ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]); return e; };
      ttq.load = function (e, n) {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = r; ttq._t = ttq._t || {}; ttq._t[e] = +new Date; ttq._o = ttq._o || {}; ttq._o[e] = n || {};
        var s = d.createElement("script"); s.type = "text/javascript"; s.async = !0; s.src = r + "?sdkid=" + e + "&lib=" + t;
        var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(s, a);
      };
      ttq.load(C.TIKTOK_PIXEL_ID); ttq.page();
    }(window, document, 'ttq');
  }

  // track('ViewContent' | 'InitiateCheckout' | 'Purchase', {value, content_name})
  window.celiaTrack = function (event, data) {
    data = data || {};
    try {
      if (window.fbq) {
        var p = { currency: C.CURRENCY || 'MAD' };
        if (data.value != null) p.value = data.value;
        if (data.content_name) p.content_name = data.content_name;
        window.fbq('track', event, p);
      }
      if (window.ttq) {
        var map = { ViewContent: 'ViewContent', InitiateCheckout: 'InitiateCheckout', Purchase: 'PlaceAnOrder' };
        var tp = { currency: C.CURRENCY || 'MAD' };
        if (data.value != null) tp.value = data.value;
        if (data.content_name) tp.content_name = data.content_name;
        window.ttq.track(map[event] || event, tp);
      }
    } catch (e) { /* البيكسل ما خاصوش يوقف الصفحة */ }
  };
})();
