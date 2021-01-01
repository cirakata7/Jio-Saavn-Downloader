# Jio-Saavn-Downloader

* Uses [JioSaavn Un-Official API](https://github.com/cyberboysumanjay/JioSaavnAPI) and generates a download link.
* This Website is nothing without API.
* Search Songs, Download and Play Online.
* Added Album URL Detection. :)
* Fallback to Download MP4 incase of MP3 320kbps not available.
* Automatic File Rename for Downloads on all Latest Browsers.
* Fork, Deploy API Site and then change API URL in [_redirects](https://github.com/ParveenBhadooOfficial/Jio-Saavn-Downloader/blob/master/_redirects)
* [Demo Site](https://jiosaavn.ga)
* Configured to work with Netlify Only.
* [Code of Conduct](https://github.com/ParveenBhadooOfficial/Jio-Saavn-Downloader/blob/master/CODE_OF_CONDUCT.md)

## Coming Soon

* Easy Caching of Pages using Cloudfront.
* Multiple Quality.
* Album Playing.
* Playlists.
* Easy Top Songs Category.
* Make this site more customizable.

## API Deployment

* `sudo su`
* `git clone https://github.com/cyberboysumanjay/JioSaavnAPI` [Source](https://github.com/cyberboysumanjay/JioSaavnAPI#installation)
* `pip3 install -r requirements.txt`
* `cd JioSaavnAPI`
* `nano app.py` Change port to 80, Secret and Redirect Link (optional)
* `npm install forever -g`
* `forever start -c python3 app.py` [Source](https://github.com/cyberboysumanjay/JioSaavnAPI/issues/17#issuecomment-696794077)

## Credits

* Internet and to all Developers.
* [cyberboysumanjay](https://github.com/cyberboysumanjay) for [JioSaavnAPI](https://github.com/cyberboysumanjay/JioSaavnAPI)
* GitHub for Hosting Code.
* Netlify for their Generous Open-Source Plan.
* JioSaavn for their extensive Music Library.
* [Bootstrap](https://getbootstrap.com) for being Awesome.
* [Cloudflare](https://cloudflare.com) for their free Plan.
* [Canva](https://canva.com) for their Student Plan.
* [Stackpath](https://stackpath.com) for their Free Bootstrap CDN.
* [JSDelivr](https://jsdelivr.com) for their CDN.

## Similar or Enhanced Functioning JioSaavn Downloaders

* [Musify](https://github.com/Harsh-23/Musify/releases) - Android App
* [@SongDl_Bot](https://telegram.dog/songdl_bot) - Telegram Bot
* [Musicder.net](https://musicder.net) or [Musicder.tk](https://musicder.tk) - Website with enhanced features
* [JioSaavn.com](https://jiosaavn.com) - Official JioSaavn Website

## Configured by

* [TheFirstSpeedster](https://l.telegram.ind.in/TheFirstSpeedster)

## Hosted By GitHub and Deployed by Netlify

[![https://www.netlify.com/img/global/badges/netlify-color-bg.svg](https://www.netlify.com/img/global/badges/netlify-color-bg.svg)](https://www.netlify.com)
