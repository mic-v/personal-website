import * as prismic from '@prismicio/client'

const apiEndpoint = "https://michaelvictorino.cdn.prismic.io/api/v2";

const Client = prismic.createClient(apiEndpoint);

export function getAllCategories(tag: string) {
  return Client.getByTag(tag)
 }
 export function getAllBlogPosts() {
  return Client.getAllByType("blog")
 }