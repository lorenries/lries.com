import type { GetStaticProps } from "next";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import Footer from "components/Footer";

export const getStaticProps: GetStaticProps = () => {
  const publishedPosts: Post[] = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const writing = publishedPosts
    .filter((post) => post.category === "writing")
    .slice(0, 2);
  const fun = publishedPosts
    .filter((post) => post.category === "fun" && post.image)
    .slice(0, 6);
  const work = publishedPosts
    .filter((post) => post.category === "work" && post.image)
    .slice(0, 6);
  return { props: { writing, fun, work } };
};

interface SectionHeaderProps {
  children: React.ReactNode;
  href: string;
}

const SectionHeader = ({ children, href }: SectionHeaderProps) => {
  return (
    <header className="flex items-center justify-start my-8">
      <h2 className="m-0 text-xl font-bold">{children}</h2>
      <Link href={href}>
        <a className="text-sm no-underline font-light px-2">All&rarr;</a>
      </Link>
    </header>
  );
};

interface HomeProps {
  writing: Post[];
  fun: Post[];
  work: Post[];
}

const Home = ({ writing, fun, work }: HomeProps) => {
  return (
    <>
      <section className="prose prose-zinc prose-lg prose-a:text-royal">
        <h1 className="text-4xl my-9">Hi, I&apos;m Loren</h1>
        <p>
          I&apos;m a lead software engineer at{" "}
          <a href="https://www.theatlantic.com/" rel="noreferrer noopener">
            The Atlantic
          </a>
          , where I work on publishing platforms, frontend architecture, and
          developer experience. Before The Atlantic, I was a full stack
          developer at{" "}
          <a href="https://www.newamerica.org/" rel="noreferrer noopener">
            New America
          </a>
          , where I led data visualization projects and maintained a custom
          Django-based CMS.
        </p>
        <p>
          I don&apos;t keep this portfolio up-to-date anymore, but you can find
          some older writing, projects, and fun things I&apos;ve made below.
        </p>
      </section>

      <section>
        <SectionHeader href="/writing">Writing</SectionHeader>
        <ul className="p-0 list-none">
          {writing.map((post) => (
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
      </section>

      <section>
        <SectionHeader href="/fun">Fun/Experiments</SectionHeader>
        <ul className="p-0 list-none grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fun.map((post) => (
            <li key={post.slug}>
              <article>
                {post.image && (
                  <Link href={post.redirect ? post.link : post.url}>
                    <a className="block relative w-full h-auto max-w-[640px] max-h-[480px]">
                      <Image
                        src={post.image.src}
                        width={640}
                        height={480}
                        alt={post.image.alt}
                      />
                    </a>
                  </Link>
                )}
                <Link href={post.redirect ? post.link : post.url}>
                  <a>
                    <h3 className="m-0 mr-1 inline font-bold">{post.title}</h3>
                  </a>
                </Link>
                {post.description && (
                  <p className="inline">{post.description}</p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeader href="/work">Work</SectionHeader>
        <ul className="p-0 list-none grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {work.map((post) => (
            <li key={post.slug}>
              <article>
                {post.image && (
                  <Link href={post.redirect ? post.link : post.url}>
                    <a className="block relative w-full h-auto max-w-[640px] max-h-[480px]">
                      <Image
                        src={post.image.src}
                        width={640}
                        height={480}
                        alt={post.image.alt}
                      />
                    </a>
                  </Link>
                )}
                <Link href={post.redirect ? post.link : post.url}>
                  <a>
                    <h3 className="m-0 mr-1 inline font-bold">{post.title}</h3>
                  </a>
                </Link>
                {post.description && (
                  <p className="inline">{post.description}</p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default Home;
