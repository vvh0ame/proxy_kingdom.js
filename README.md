# proxy_kingdom.py
Web-API for [proxykingdom.com](https://proxykingdom.com) rotating Proxy API that produces a random working proxy on every request

## Example
```python
import proxy_kingdom
proxy_kingdom = proxy_kingdom.ProxyKingdom(token="")
random_proxy = proxy_kingdom.get_random_proxy()
print(random_proxy)
```
