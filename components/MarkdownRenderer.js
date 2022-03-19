import React from "react";

const getComponent = (node) => {
  switch (node.type) {
    case "root":
      return ({ children }) => <>{children}</>;

    case "paragraph":
      return ({ children }) => (
        <p className="text-articleBody py-[.5em] font-mono mt-[.5em]">
          {children}
        </p>
      );

    case "emphasis":
      return ({ children }) => <em>{children}</em>;

    case "heading":
      return ({ children, depth = 2 }) => {
        const Heading = `h${depth}`;

        if (depth === 2) {
          return (
            <h2 className="font-serif text-articleHeader mt-[1em]">
              {children}
            </h2>
          );
        }

        if (depth === 3) {
          return (
            <h3 className="font-mono font-bold uppercase text-small tracking-widest mt-[6em]">
              {children}
            </h3>
          );
        }

        return <Heading>{children}</Heading>;
      };

    case "text":
      return ({ value }) => <>{value}</>;

    /* Handle all types here … */

    default:
      console.log("Unhandled node type", node);
      return ({ children }) => <>{children}</>;
  }
};

const Node = (node) => {
  const Component = getComponent(node);
  const { children } = node;

  return children ? (
    <Component {...node}>
      {children.map((child, index) => (
        <Node key={index} {...child} />
      ))}
    </Component>
  ) : (
    <Component {...node} />
  );
};

const MarkdownRenderer = (props) => <Node {...props.ast} />;

export default React.memo(MarkdownRenderer);
