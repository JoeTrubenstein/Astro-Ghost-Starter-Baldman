import rss from '@astrojs/rss';
import { ghostClient } from '../lib/ghost';

const posts = await ghostClient.posts
    .browse({
        limit: 'all',
        include:'tags',
    })
    .catch((err) => {
        console.error(err);
    });

    export async function GET(context) {
      return rss({
        title: 'Buzz’s Blog',
        description: 'A humble Astronaut’s guide to the stars',
        site: context.site,
        items: posts.map((post) => ({
          title: post.title,
          pubDate: post.published_at,
          description: post.excerpt,
          // Compute RSS link from post `slug`
          // This example assumes all posts are rendered as `/blog/[slug]` routes
          link: `/${post.slug}/`,
        })),
      });
    }
