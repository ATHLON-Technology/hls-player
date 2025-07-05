'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "4fc5a71770bf10389ea2de39fe5ba530",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0efb81a7d9e6207f2d7328c9f0af33a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1b833d576a152cb024cfbc4f944d098",
".git/logs/refs/heads/main": "594ed94d8a6dcfedb405443991448d8b",
".git/logs/refs/remotes/origin/main": "c6dfbad23777e666cf5d8052229a6266",
".git/objects/0a/af57791cfe9d3b87442bb7ad7a810a8f437dc9": "e6a0688decf715d4afb40f26aa04ca01",
".git/objects/21/0b34db8a9ffd2f27b2fa059bc245e05713cddf": "11cac780979ab46a946026c5f5794bfa",
".git/objects/30/f77fb1d02d3191d9128eb337e508a5ecd4bfda": "c079164604d8848c52c19dff731d502d",
".git/objects/31/bc05e7b3fda5fbb33bb342399853f159de8728": "b92008813b4ccbc52cb6b7938fca17b9",
".git/objects/3e/bd3247c17f3ce18c1c8e5cf241e4f3ed111a91": "729355ecffd620adcd3c414934542446",
".git/objects/49/fcca286c227c101d4065717d96c344c11bd54b": "4f154385dc9d927c686fd4b7260e6d29",
".git/objects/4d/1b549d932530199ec45756e240692690b877d4": "82a1d90c0008788852e997197fed585d",
".git/objects/54/82aee2279d553f26e67e15a4179ebf3932a6af": "8987aece8fdccbee1f8ae8284b7eef96",
".git/objects/57/9a488b75e36c181f7de43bdcf896517178c86d": "816ddaf61c73cd8a1490113b3acafb09",
".git/objects/58/28009b8a74e6fca0080b5170150eab1012597c": "6a4bd49564aeb14cc9743b02d2c03051",
".git/objects/5a/0746335c35b00f5d32be7d8a0e7eaa73f8fadc": "7514f2385ce36033777d9a837aa475d9",
".git/objects/5b/0e0a54a248e5eb013b39a2f5991cdce10ae9e7": "53d1fa6bb7f575fe7522eec6f35384d6",
".git/objects/6c/52101358836f3640f288ae5859a624bb6e2e5b": "df36c1cd1c540954369872cddad2a9ad",
".git/objects/6e/d86399c74ffec83ab6e828fcb07f632fb65e18": "8fba8d738463b646c5beabb5da18fa23",
".git/objects/74/dedf5173f6ae7668939e5932414f4aa2b813fc": "cccff5dddc31a3e6e0600206d242a000",
".git/objects/78/8c01b0acabf31d4a56cc8c5c0dbb46bcb44a16": "2b37f07a8760287f3740c2b20ce40d70",
".git/objects/79/82e1ac331858175ad2813a2c1374639a9a9342": "94b62992305734dc0ae18002a9b8cbd7",
".git/objects/82/e03f0272188dd997182c728b5ff2de7030a867": "3bffcfc3b6dbf0d0120dd814b506e8ce",
".git/objects/82/f2fbd85bc1b9ada9a0d9db6d9d79d1b0f478cb": "ed1580b2822758909077b58672087890",
".git/objects/85/117b435817390bd65f678c235da42e250319fa": "9b04d627beaf3178ce441a023a1fb3db",
".git/objects/89/94683e97a8f21d94b5a8c27c1f000174bd73ff": "8191017a63461fd1a3c7736e23181ef3",
".git/objects/92/fba8d882adaeac0f7271d7c87bfb8ab68dda05": "3ce4a3891f02e8ce47c469d096366d94",
".git/objects/98/9950b8d7ba62e454325ce8b129b16513c78394": "c18f0c115ef60cbe140aef25bcb0b1dc",
".git/objects/9a/8c3147ca7ceac0285f4a1294c2d05b7d29964d": "a7e30bf482d647de34a6860f30e37973",
".git/objects/a9/5e544c87643f74fe8e80ac23a25a2d75c2a02c": "39f24710ca35fae5af78fcaaa0e01348",
".git/objects/ae/12d94be4fab511e304e76f0629a8bb937f6f99": "d5d07daeafdd2b6106cfe8a5d1cdb531",
".git/objects/b9/b38e474a51de314e120c9297464506df660f79": "581b4af1b2311677a25eda3740d4b0f5",
".git/objects/c2/e18fcf583144e9bb8a2f0e23f2ff0e110476e9": "2dbf44ad7b6549ca832e792ca8b24743",
".git/objects/c5/9a4c9e5bf030593a61424df313d02bc3e26b96": "eb7643f6213c3388fdc8ddd445ca9de9",
".git/objects/c7/8f8e0473ae6036bbca6a9c11737341a6662e80": "ef5dbf6bf6178dff77a67bb07a84e2a7",
".git/objects/d1/1128b07d6002640d5b6c571ddb5c9eb8b9542f": "ff0a8c1fa162b283b8ba1c1398fd258b",
".git/objects/e2/3be4dbdb9f71988a6481acc626e578cea7b8a4": "5f570bcf7501341ed395bfc8e9b50dd4",
".git/objects/e3/8f8cc74d5b773b9ce9d59f775b8fd571f28ec5": "32b67d8ef394f0882ce197bd7e517956",
".git/objects/f2/64ae3081075f4b4dae2f32a2d5a7e35eea06b6": "4bc34560d92b699e1f18a1157455fe93",
".git/objects/pack/pack-764b5c84c71df9ec1a936726f2619d278630fa83.idx": "92e013539734998cec273cff663387c8",
".git/objects/pack/pack-764b5c84c71df9ec1a936726f2619d278630fa83.pack": "334b941ebc38ae41e3f89b05f2e2624a",
".git/objects/pack/pack-764b5c84c71df9ec1a936726f2619d278630fa83.rev": "ebefc16f189755da74445b24a9b8d3d6",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "002add5fc1e04fd00decc208ab81a26d",
".git/refs/remotes/origin/main": "002add5fc1e04fd00decc208ab81a26d",
"assets/AssetManifest.bin": "ac944f27cf6b0ca7887000eebbae84ce",
"assets/AssetManifest.bin.json": "18592109260104727ed03b7b85af851e",
"assets/AssetManifest.json": "96c68675dbef326bf096e72eb23a79fb",
"assets/assets/fonts/Cherry.ttf": "dc3d2b39288b6158674dfb3a146ceb65",
"assets/assets/fonts/MontserratAlt1-Bold.ttf": "4571c7793d017d574972bcdf28fbe154",
"assets/FontManifest.json": "8b7aab0b70bca43c296d75e83937e2c0",
"assets/fonts/MaterialIcons-Regular.otf": "2224facadeb70b268f39b07eee49bd14",
"assets/NOTICES": "c049792cc0d060c6191f45cef0d05856",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "511a2cef291603c248766be21dbfe88f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "52bef8faa41cb3fe82960281f65f5870",
"icons/Icon-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"icons/Icon-maskable-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-maskable-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"index.html": "1038c7ae5ff84c451b2635f88ead879d",
"/": "1038c7ae5ff84c451b2635f88ead879d",
"main.dart.js": "5629d4469c108e34ce57e14a1277fc50",
"manifest.json": "22ad62a3bc7b3093ab22bd9bfe2f2122",
"version.json": "0827e43d0473a8dba82604f9d07ef80e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
