/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://inventog.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
}
