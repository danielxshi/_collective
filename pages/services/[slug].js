import React from "react";
import fs from "fs";
import { join } from "path";
import { parseMarkdown } from "../../utils/parseMarkdown";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import BackButton from "../../components/Button/BackButton";

const Page = (props) => {
  const { slug, title, description, img } = props.frontMatter;

  // This would usually have your layout and whatnot as well, but omitted here
  // for sake of simplicity of course.
  return (
    <main className="mx-4 sm:mx-8 my-[1.5em] 2xl:max-w-[96rem] 2xl:mx-auto text-big grid grid-cols-[1fr_8fr] md:grid-cols-[1fr_3fr]">
      <div className="col-start-1 text-articleHeader">
        <BackButton href="/" />
      </div>
      <div className="font-serif text-articleHeader mb-[1em] col-start-2">
        {title}
      </div>
      {/* <div className="font-serif  mb-16 md:ml-[20%]">{description}</div> */}
      <img className="col-start-1 col-end-3 w-full" src={img} />
      <section className="col-start-1 md:col-start-2 col-end-3 mt-[.5em] mb-[1em]">
        <MarkdownRenderer ast={props.ast} />
      </section>
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
