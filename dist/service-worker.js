/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-cad2c37a'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/0.app.bundle.js",
    "revision": "4f63b4a19728086dc15368c374d9c0c9"
  }, {
    "url": "/1.app.bundle.js",
    "revision": "4ca3b4a24b6e37c7b880551ce6f9ed4a"
  }, {
    "url": "/icon_128x128.693cec8506125947a5daf05f04756ac9.png",
    "revision": "693cec8506125947a5daf05f04756ac9"
  }, {
    "url": "/icon_192x192.a7a7bd971ad84d44ae457d0ac58d0eb3.png",
    "revision": "a7a7bd971ad84d44ae457d0ac58d0eb3"
  }, {
    "url": "/icon_256x256.a5074653c83b3144e1197503add3da51.png",
    "revision": "a5074653c83b3144e1197503add3da51"
  }, {
    "url": "/icon_384x384.5d939fa1f089a032cfaca0a771c33ca8.png",
    "revision": "5d939fa1f089a032cfaca0a771c33ca8"
  }, {
    "url": "/icon_512x512.90470ae895569b1462198a043dde54d1.png",
    "revision": "90470ae895569b1462198a043dde54d1"
  }, {
    "url": "/icon_96x96.b5cd337c81044cd224fff89757c010e8.png",
    "revision": "b5cd337c81044cd224fff89757c010e8"
  }, {
    "url": "/index.html",
    "revision": "528b3ae8851e1c6f39ff019216f8d543"
  }, {
    "url": "/manifest.a90dacd21416289e456c4c646e3c234e.json",
    "revision": "a90dacd21416289e456c4c646e3c234e"
  }], {});
  workbox.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com)/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: []
  }), 'GET');
  workbox.registerRoute(/https:\/\/petgram-api.guissmejia.vercel.app/, new workbox.NetworkFirst({
    "cacheName": "api",
    plugins: []
  }), 'GET');

});
//# sourceMappingURL=service-worker.js.map
