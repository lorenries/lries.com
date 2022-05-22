import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import prism from "rehype-prism-plus";
import { format, parseISO } from "date-fns";

const Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    src: {
      type: "string",
    },
    width: {
      type: "number",
    },
    height: {
      type: "number",
    },
    alt: {
      type: "string",
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      required: true,
    },
    roles: {
      type: "list",
      of: {
        type: "string",
      },
      required: false,
    },
    redirect: {
      type: "boolean",
      required: false,
    },
    link: {
      type: "string",
      required: false,
    },
    category: {
      type: "enum",
      options: ["writing", "work", "fun"],
      required: true,
    },
    image: {
      type: "nested",
      of: Image,
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
    formattedDatePublished: {
      type: "string",
      resolve: (post) => format(parseISO(post.date), "LLLL d, yyyy"),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: { rehypePlugins: [prism] },
});
