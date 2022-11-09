import axios from 'axios';
import cheerio from 'cheerio';
import express from 'express';

const PORT = 8000

const app = express();
const url ='https://www.news24.com/'

axios(url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const news = []
    $('.article-item__title', html).each(function(){
        const title = $(this).text()
        news.push({
            title,
        })

        console.log(news)
    })
}).catch(err => console.log(err))

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));