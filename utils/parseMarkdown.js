import { unified } from "unified";
import markdown from "remark-parse";
import prism from "remark-prism";
import frontmatter from "remark-frontmatter";
import parseYaml from "remark-parse-yaml";

export const parseMarkdown = (content) => {
  const engine = unified()
    .use(markdown)
    .use(frontmatter, ["yaml"])
    .use(parseYaml)
    .use(prism);

  const ast = engine.parse(content);

  // Unified‘s *process* contains 3 distinct phases: parsing, running and
  // stringifying. We do not want to go through the stringifying phase, since we
  // want to preserve an AST, so we cannot call `.process(..)`. Calling
  // `.parse(..)` is not enough though as plugins (so Prism) are executed during
  // the running phase. So we need to manually call the run phase (synchronously
  // for simplicity).
  // See: https://github.com/unifiedjs/unified#description
  return engine.runSync(ast);
};
