"use strict";

const CACHE_NAME = 'phenomx.co-1577771778803';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/individual-health","/clinical-trials","/how-it-works","/news-%26-media","/services","/population-health","/about-us","/contact"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/4ce1a7c86682e5e8/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/52ada092868ffdd7/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/a3e783f066ce5661/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/e6542b8b296c8fdc/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CIntersectionObserver%2CIntl.~locale.en-US","//img1.wsimg.com/blobby/go/gpub/e645c3e6fe995b50/script.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.55.37.js","//img1.wsimg.com/blobby/go/gpub/c7d05c19e2450830/script.js","//img1.wsimg.com/blobby/go/gpub/d3b942ff966279d4/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/e10c6e5d8214c35b/script.js","//img1.wsimg.com/blobby/go/gpub/70fa198bc69fb4f8/script.js","//img1.wsimg.com/blobby/go/gpub/281ed85d900f27d3/script.js","//img1.wsimg.com/blobby/go/gpub/da0c836e0b7923e2/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/3ea134b066eeea57/script.js","//img1.wsimg.com/blobby/go/gpub/9c9d931e42143ba0/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/5b51b140c3f06f80/script.js","//img1.wsimg.com/blobby/go/gpub/b258a796f8969ea5/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/f5d8eb8250300fb2/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/302b057407b1b85c/script.js","//fonts.googleapis.com/css?family=Muli:400","//fonts.googleapis.com/css?family=Quicksand:400,700","//fonts.googleapis.com/css?family=Cabin:700","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/2274926bfdc1ca49/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/c25b87e8a45050c4/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/69917cc1ce5ed9ac/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/7c42bee2ba155ba8/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/9b86d9e2fda068e9/script.js","//img1.wsimg.com/blobby/go/gpub/d386cb18f62ed0d4/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/75029a26607f09a3/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/2ba383707c9688f8/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/2aa878274e59a63e/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/837a941bf4f968c7/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/4456d6d058bfe5ba/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/daf2e19b1e68bfe8/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/3227c2bc65a06a7c/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/e4015abc3a1bedee/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/d0e7147d33687471/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/d73264b728fc56bd/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/1605678578f177db/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/73cd2db5a6d2d4dc/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/c4898da9cd569ade/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/4ff817a83be1d293/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/20de39d1c733c0f8/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/53d0caa060c843f7/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/208a56685f0790e6/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/6f30e044024eab99/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/4439cf16a10b0631/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/6fe0aa52edda4c8b/script.js","//img1.wsimg.com/blobby/go/gpub/370cd3ecadc41a10/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/17f8770739e06440/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/805844967c75cf09/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/29f6bd3a5e3f3336/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/3996b0bee74d5e53/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/ee096d8343faf3f/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/b2eb11c85a39a502/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/458ab12f3d8e52bf/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/e3d579292d2eb5c2/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/a693b2e894c36263/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/b04abc43d8434ef6/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/12b9f709492e26f6/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/c50fd20b7e510f4/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/5c52df1aa34eb5f5/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/d4d58ddd743fc400/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/a9fdeb0107cd882b/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/1e96c83caa42c165/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/8e40ec0bd894b021/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/428b8046c56df818/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/a0f59ff173086fb1/styles.css","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/53b93a38441c3625/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/de4b85dc04ab522b/script.js","//img1.wsimg.com/blobby/go/gpub/25c2de4bb68714e6/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/5b80b93ff9f2ece1/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/c0a2c0cece1dbb72/script.js","//img1.wsimg.com/blobby/go/gpub/fb811c56533c2477/script.js","//img1.wsimg.com/blobby/go/13aae8dc-726f-472c-b368-0229f2b9796f/gpub/139dc32186c81291/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://13aae8dc-726f-472c-b368-0229f2b9796f.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect"]');
const networkOnlyUrlsRegex = JSON.parse('["phenomx.co/m/api/.*"]').map(regexString => new RegExp(regexString));

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources().catch(function (installErr) {
    console.log('sw: precaching failed with: ', installErr);
  }));
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);