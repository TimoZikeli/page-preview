# PagePreview
A simple webserver based on [puppeteer](https://github.com/GoogleChrome/puppeteer), delivering page preview images of a given URL.

## Installation
Clone the repository and install it with `npm install`.

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