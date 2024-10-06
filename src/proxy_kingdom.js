class ProxyKingdom {
	constructor(token) {
		this.api = "https://api.proxykingdom.com"
		this.token = token
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}
	}

	async getRandomProxy(address = null, port = null, protocol = null, accessType = null, responseTime = null, isSsl = null, upTime = null, country = null, continent = null, timeZone = null, lastTested = null) {
		let url = `${this.api}/proxy?token=${self.token}`
		if (address) {
			url += `&address=${address}`
		}
		if (port) {
			url += `&port=${port}`
		}
		if (protocol) {
			url += `&protocol=${protocol}`
		}
		if (accessType) {
			url += `&accessType=${accessType}`
		}
		if (responseTime) {
			url += `&responseTime=${responseTime}`
		}
		if (isSsl) {
			url += `&isSsl=${isSsl}`
		}
		if (upTime) {
			url += `&uptime=${upTime}`
		}
		if (country) {
			url += `&country=${country}`
		}
		if (continent) {
			url += `&continent=${continent}`
		}
		if (timeZone) {
			url += `&timezone=${timeZone}`
		}
		if (lastTested) {
			url += `&lastTested=${lastTested}`
		}
		const response = await fetch(
			url, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {ProxyKingdom}
