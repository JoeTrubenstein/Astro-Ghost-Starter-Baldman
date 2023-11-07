import rss from '@astrojs/rss';
import { getAllPosts } from "../utils/api";
import config from '../config/config.json';

export async function GET(context) {
  const posts = await getAllPosts();
  return rss({
    title: config.site.title,
    description: config.site.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.slug}/`,
    })),
  });
}
