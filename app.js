const puppeteer = require('puppeteer');

var fs = require('fs');
var http = require('http');
var urlModule = require('url');

http.createServer(function (req, res) {
    var request = urlModule.parse(req.url, true);
    var action = request.pathname;
    const width = +request.query.width || 800;
    const height = +request.query.height || 600;
    const url = request.query.url || 'about:blank';
    let browser;
    (async () => {
        try {
            browser = await puppeteer.launch({
                args: [
                    `--window-size=${width},${height}`
                ]
            });
            const page = await browser.newPage();
            page.setViewport({
                width: width,
                height: height
            });
            await page.goto(url);
            const image = await page.screenshot();
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(image, 'binary');
        } catch (err) {
            console.error(`Error (URL: '${req.url}')`)
            console.error(err);
            res.end();
        } finally {
            await browser.close();
        }
    })();
}).listen(process.env.PORT || 4444, process.env.host || '0.0.0.0');

