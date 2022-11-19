from requests import get

class ProxyKingdom:
	def __init__(self, token: str) -> None:
		self.api = "https://api.proxykingdom.com"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
		}
		self.token = token

	def get_random_proxy(
			self,
			address: str = None,
			port: int = None,
			protocol: str = None,
			access_type: str = None,
			response_time: str = None,
			is_ssl: bool = False,
			up_time: str = None,
			country: str = None,
			continent: str = None,
			time_zone: str = None,
			last_tested: str = None) -> str:
		url = f"{self.api}/proxy?token={self.token}"
		if address:
			url += f"&address={address}"
		if port:
			url += f"&port={port}"
		if protocol:
			url += f"&protocol={protocol}"
		if access_type:
			url += f"&accessType={access_type}"
		if response_time:
			url += f"&responseTime={response_time}"
		if is_ssl:
			url += f"&isSsl={is_ssl}"
		if up_time:
			url += f"&uptime={up_time}"
		if country:
			url += f"&country={country}"
		if continent:
			url += f"&continent={continent}"
		if time_zone:
			url += f"&timezone={time_zone}"
		if last_tested:
			url += f"&lastTested={last_tested}"
		return get(
			url, headers=self.headers).json()
