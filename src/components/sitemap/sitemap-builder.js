require('babel-register');
 
const router = require('../../App').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://made4living.co.uk/')
        .save('./sitemap.xml')
);