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

* Easy Caching of Paging using Cloudfront.
* Multiple Quality.
* Album Playing.
* Playlists.
* Easy Top Songs Category.

## API Deployment

* `sudo su`
* `git clone https://github.com/cyberboysumanjay/JioSaavnAPI` [Source](https://github.com/cyberboysumanjay/JioSaavnAPI#installation)
* `pip3 install -r requirements.txt`
* `cd JioSaavnAPI`
* `nano app.py` Change port to 80, Secret and Redirect Link (optional)
* `npm install forever -g`
* `forever start -c python3 app.py` [Source](https://github.com/cyberboysumanjay/JioSaavnAPI/issues/17#issuecomment-696794077)

## Configured by

* [TheFirstSpeedster](https://l.telegram.ind.in/TheFirstSpeedster)

## Hosted By GitHub and Deployed by Netlify

[![https://www.netlify.com/img/global/badges/netlify-color-bg.svg](https://www.netlify.com/img/global/badges/netlify-color-bg.svg)](https://www.netlify.com)
