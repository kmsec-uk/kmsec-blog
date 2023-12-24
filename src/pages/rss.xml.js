import rss from '@astrojs/rss';
import { SITE } from '../config'

const allPosts = import.meta.glob('./blog/*{.md,.mdx}', { eager: true })
const sortedPosts = Object.values(allPosts).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

export async function GET(context){
    // `<title>` field in output xml
    return rss({
    title: SITE.name,
    // `<description>` field in output xml
    description: SITE.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: context.site,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: sortedPosts.map(item => ({
        title: item.frontmatter.title,
        description: item.frontmatter.description,
        link: item.url,
        pubDate: item.frontmatter.date,
    })),
    // (optional) inject custom xml
    customData: `<language>en</language>`,})
};