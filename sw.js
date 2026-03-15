const CACHE_NAME="rotas-lite";

const FILES=[
"./",
"./index.html"
];

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME).then(cache=>{

return cache.addAll(FILES);

})

);

});



self.addEventListener("fetch",event=>{

event.respondWith(

fetch(event.request).catch(()=>{

return caches.match(event.request);

})

);

});
