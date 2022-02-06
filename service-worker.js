/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2d376132ea928093806d17f3c144c5c5"
  },
  {
    "url": "assets/css/0.styles.f7dded19.css",
    "revision": "dd9c8e3f85e60fe36bd7d5fd71a331a2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad781c78.js",
    "revision": "899ef58f3f92b85d021edba26afd2097"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.b0817397.js",
    "revision": "e0f335a5c1d6257f94500f97928c7e9c"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.8b135f9d.js",
    "revision": "cfad91160380ddeb732dbb290dde426b"
  },
  {
    "url": "assets/js/16.f868886d.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.5b53db67.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.f1775122.js",
    "revision": "efce58aaf72028620a6c956a1e228fb5"
  },
  {
    "url": "assets/js/19.fd6b4550.js",
    "revision": "245e60444d74c2f47bbe71d32fa154bb"
  },
  {
    "url": "assets/js/2.284d328f.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.e201afd2.js",
    "revision": "9534e179270cc22fc512bd0142ef1ab1"
  },
  {
    "url": "assets/js/21.ecff8c56.js",
    "revision": "3beec11244852af9c015f2bcd080ef3a"
  },
  {
    "url": "assets/js/22.f8aa1d7d.js",
    "revision": "b8ac58c4d5bd4a6b440b6c1f039a6afe"
  },
  {
    "url": "assets/js/23.d4537753.js",
    "revision": "b0dba7b917f3acf2add1dff09d0635f8"
  },
  {
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
  },
  {
    "url": "assets/js/4.0e37753e.js",
    "revision": "45a157965eeae5910cf0a3aedd1fb02a"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.a9619fbc.js",
    "revision": "3dfcd32a50923b7576e77ceaf31fc8d4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5805f290b2dfa0ce85c269e37a78a112"
  },
  {
    "url": "design/index.html",
    "revision": "fa461a207ab67ef5d111fad2aded85dc"
  },
  {
    "url": "index.html",
    "revision": "c6aff0840e084fda26222cc051adb73d"
  },
  {
    "url": "intro/index.html",
    "revision": "a43985699712e5fc361ff9460a44bfbf"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6bd7284482d08b13390934cbce48bae7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9d2a7a2fbd479e93845d50e13fd44c86"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "920244ab78cd7b40ffbf9bfce92d9053"
  },
  {
    "url": "software/index.html",
    "revision": "a1321fa26133e5cadc4f577598e2abd8"
  },
  {
    "url": "test/index.html",
    "revision": "49e67bd2c6f74ce685e0a7af5b2defc1"
  },
  {
    "url": "use cases/index.html",
    "revision": "f8805a975f1d69aba0edf9dad5188010"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
