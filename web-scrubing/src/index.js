import { JSDOM } from 'jsdom'
import fs from 'fs'
import https from 'https'



let html_code = ''

https.get('https://ip-api.com', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        html_code += d
    });
    res.on('end', () => {
        console.log(html_code)
        const { document } = (new JSDOM( html_code.toString() , {
            url: "https://ip-api.com"
        })).window;
        console.log(document.title)
    });

}).on('error', (e) => {
    console.error(e);
});





