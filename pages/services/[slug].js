import React from "react";
import fs from "fs";
import { join } from "path";
import { parseMarkdown } from "../../utils/parseMarkdown";
import MarkdownRenderer from "../../components/MarkdownRenderer";

const Page = (props) => {
  const { slug, title, description, img } = props.frontMatter;

  // This would usually have your layout and whatnot as well, but omitted here
  // for sake of simplicity of course.
  return (
    <main className="mx-4 sm:mx-8 2xl:max-w-[96rem] 2xl:mx-auto text-big">
      <section className="mt-16 mb-16">
        <div className="font-serif text-big">{title}</div>
        <div className="font-serif text-medium mb-16">{description}</div>
        <img src={img} />
      </section>
      <MarkdownRenderer ast={props.ast} />
    </main>
  );
  // return <div></div>;
};

const POSTS_PATH = join(process.cwd(), "data/services/");

export const getStaticProps = async ({ params }) => {
  // Get the Markdown content from somewhere, like a CMS or whatnot. It doesn’t
  // matter for the sake of this article, really. It could also be read from a
  // file.

  const markdown = fs.readFileSync(
    join(POSTS_PATH, params.slug + ".md"),
    "utf8"
  );
  const ast = parseMarkdown(markdown);

  const frontMatter = ast.children[0].data.parsedValue;

  return { props: { ast, frontMatter } };
};

export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Page;
