# proxy_kingdom.js
Web-API for [proxykingdom.com](https://proxykingdom.com) rotating Proxy API that produces a random working proxy on every request

## Example
```JavaScript
async function main() {
	const { ProxyKingdom } = require("./proxy_kingdom.js")
	const proxyKingdom = new ProxyKingdom("token")
	const randomProxy = await proxyKingdom.getRandomProxy()
	console.log(randomProxy)
}

main()
```

