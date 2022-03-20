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
    <div className="mx-4 sm:mx-8 mt-[1.5em] 2xl:max-w-[96rem] 2xl:mx-auto text-big">
      <main className="grid grid-cols-[1fr_8fr] md:grid-cols-[1fr_2fr]">
        <div className="col-start-1 text-articleHeader">
          <BackButton href="/" />
        </div>
        <div className="font-serif text-articleHeader mb-[1em] col-start-2">
          {title}
        </div>
        {/* <div className="font-serif  mb-16 md:ml-[20%]">{description}</div> */}
        <img
          className="col-start-1 col-end-4 w-full max-h-[50vh] object-cover"
          src={img}
        />
        <section className="col-start-1 md:col-start-2 col-end-3 mb-[1em]">
          <MarkdownRenderer ast={props.ast} />
        </section>
      </main>
      <footer
        style={{
          height: "305px",
        }}
        className="mt-[.25em] mb-[2em]"
      >
        <div className="flex flex-col items-center md:items-start md:pl-[34%] w-full">
          <div data-scroll-speed=".5" className="font-serif text-medium mb-5">
            Got a job for us?
          </div>
          <div className="flex flex-col items-center md:items-start mb-8">
            <a
              className="font-mono text-medium mb-2"
              href="mailto:wayne@liangholdings.com"
            >
              wayne@liangholdings.com
            </a>
            <span
              className="font-mono text-medium"
              // href="mailto:testing@005.com"
            >
              +1 (780) 6677189
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
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
