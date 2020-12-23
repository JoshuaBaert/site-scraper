const scrape = require('website-scraper');

const options = {
    urls: ['https://www.ourfishcollective.com//'],
    directory: './site/',
};

async function main() {
    let result = await scrape(options)
}

main()
