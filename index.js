addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const { pathname, search } = url

  if (!(pathname.includes("479"))) {
    return new Response(`Method ${request.method} not allowed.`, { status: 200 })
  }
  
  const newURL = `https://apple.dns.nextdns.io/dns-query${search}`
  const newRequest = new Request(newURL, {
    body: request.body,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect
  })

  return await fetch(newRequest)
}
