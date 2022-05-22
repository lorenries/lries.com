import type { GetStaticPaths, GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import SEO from "components/SEO";
import components from "components/MDXComponents";
import { allPosts, Post } from "contentlayer/generated";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts
    .filter((post) => post.published)
    .map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        image={post.image?.src}
        slug={post.url}
      />
      <article className="prose prose-zinc prose-headings:bold prose-a:text-royal mx-auto py-16">
        <header className="not-prose text-center mb-6">
          <h1 className="text-3xl font-bold mb-1">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-gray-600">
            {post.formattedDatePublished}
          </time>
          {post.link && (
            <div className="mt-3">
              <a
                href={post.link}
                rel="noreferrer noopener"
                className="text-sm text-white bg-royal px-3 py-2 rounded-full"
              >
                Check it out &rarr;
              </a>
            </div>
          )}
        </header>
        <MDXContent components={components} />
      </article>
    </>
  );
};

export default Post;
