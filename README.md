<!-- @format -->

# NoxVenenum

## Description

NoxVenenum is an experimental project for learning purposes. It's a REST API built using JavaScript, documented with Swagger OpenAPI V3.0, and designed to run on port 3002.

## path

**Ai:**

- GET /ai/blackbox
- GET /ai/Pixart-A

**Anime:**

- GET /anime/doujin-latest
- GET /anime/doujin-search
- GET /anime/doujin-ch
- GET /anime/doujin-img
- GET /anime/hentai
- GET /anime/whatanime
- GET /anime/nhentai-search

**Downloader:**

- GET /downloader/tiktok
- GET /downloader/facebook
- GET /downloader/xnxx
- GET /downloader/mediafire
- GET /downloader/instagram
- GET /downloader/igstory
- GET /downloader/igstory2
- GET /downloader/igtv
- GET /downloader/gdrive
- GET /downloader/twitter
- GET /downloader/sfile
- GET /downloader/capcut
- GET /downloader/spotify
- GET /downloader/apkmirror
- GET /downloader/dvadownloader
- GET /downloader/terabox
- GET /downloader/ttslide

**Random:**

- GET /bokep/{genre}
- GET /nsfw/{tag}
- GET /random/{country}
- GET /sfw/{name}

**Maker:**

- GET /sfw/toanime

**Misc:**

- GET /misc/runtime
- GET /misc/clock
- **MyAnimeList:**

- GET /myanimelist/search
- GET /myanimelist/season
- GET /myanimelist/watchlist
- GET /myanimelist/news
- GET /myanimelist/anime-info
- GET /myanimelist/episodes
- GET /myanimelist/reviews
- GET /myanimelist/recommendations
- GET /myanimelist/stats
- GET /myanimelist/pictures
- GET /myanimelist/user

**Search:**

- GET /search/youtube
- GET /search/xnxx
- GET /search/wikipedia
- GET /search/dvasearch
- GET /search/komikcast
- GET /search/bukalapak
- GET /search/tiktoks

**Tools:**

- GET /shortUrl/{service}
- GET /tools/translate
- GET /tools/cuaca
- GET /tools/saucenao
- GET /tools/removebg
- GET /tools/apkmsearch
- GET /tools/sinonim
- GET /tools/githubstalk
- GET /tools/langList
- GET /tools/userAgents
- GET /tools/nekopoi-letest
- GET /tools/anti-porn
- GET /tools/ssweb
- GET /tools/styletext

**Uploader:**

- POST /upload/cdn

**User:**

- GET /auth/register
- GET /auth/profile
- GET /cekey

## Installation

1. Make sure you have Node.js installed on your computer.
2. Clone this repository to your computer.
3. Open a terminal and navigate to the directory where you have saved the repository.
4. Run the command `npm install` to install dependencies.

## Usage

- For production:
  - Run the command `npm start` to start the server. The API will be accessible at `http://localhost:3002/`.
  - Access the Swagger documentation at `http://localhost:3002/docs`.
- For development:
  - Run the command `npm run dev` to start the server with nodemon for auto-reloading. The API will be accessible at `http://localhost:3002/`.
  - Access the Swagger documentation at `http://localhost:3002/docs`.
  - Format your code using `npm run format` to ensure consistent coding style.

## Contribution

Feel free to submit a pull request if you'd like to contribute to this project. Please make sure to provide a clear description of the changes you propose.

## License

NoxVenenum is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## This was created using 100% chatGPT without any programmer intervention
