import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import SEO from "components/SEO";

const pageTitles = {
  writing: "Writing",
  fun: "Fun/Experiments",
  work: "Work",
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ["/writing", "/fun", "/work"],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const posts = allPosts
    .filter((post) => post.published && post.category === params.category)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return {
    props: {
      posts,
      title: pageTitles[params.category as string],
      slug: params.category,
    },
  };
};

interface Props {
  posts: Post[];
  title: string;
  slug: string;
}

const Category = ({ posts, title, slug }: Props) => {
  return (
    <>
      <SEO title={title} slug={slug} />
      <h1 className="text-4xl font-bold my-9">{title}</h1>
      <ul className="p-0 list-none">
        {posts.map((post) => (
          <li className="pb-2" key={post.slug}>
            <article className="flex flex-col lg:flex-row lg:justify-between lg:align-center">
              <Link href={post.url}>
                <a>
                  <h3 className="text-md">{post.title}</h3>
                </a>
              </Link>
              <time className="text-sm text-gray-600" dateTime={post.date}>
                {post.formattedDatePublished}
              </time>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
