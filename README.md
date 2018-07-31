# PagePreview
A simple webserver based on [puppeteer](https://github.com/GoogleChrome/puppeteer), delivering page preview images of a given URL.

## Installation
Clone the repository and install it with `npm install`.

### Additional requirements
Puppeteer is based on Google Chrome. In order to run it, you need a couple of requirements. On Debian/Ubuntu, you can install all of them with
```sudo apt install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget```

## Starting
Start the application with `npm start`. It will run on port 4444 by default.
To start the application on a custom host/port, just set the corresponding environment variables:
```PORT=8080 HOST=127.0.0.1 npm start```

## Usage
Just call the url with the wanted parameters, and you will get a **PNG** image of the requested url as response.
### Parameters
- **url**: The page of which a screenshot shall be taken
- **width**: The browser's/image's width (default: 800)
- **height**: The browser's/image's height (default: 600)

### Example
```http://localhost:4444/?url=https://github.com&width=1920&height=1080```