import React from "react";

const getComponent = (node) => {
  switch (node.type) {
    case "root":
      return ({ children }) => (
        <div className="font-serif text-articleBody">{children}</div>
      );

    case "paragraph":
      return ({ children }) => (
        <p className="py-[.5em] mt-[.5em]">{children}</p>
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

    case "image":
      return ({ children }) => <img src={node.url} alt={node.alt} />;

    case "list":
      console.log(node);
      if (node.ordered) {
        return ({ children }) => (
          <ol className="list-decimal mt-[2em] font-mono text-small">
            {children}
          </ol>
        );
      }
      return ({ children }) => (
        <ul className="list-disc mt-[.5em] font-mono text-small">{children}</ul>
      );
    case "listItem":
      return ({ children }) => (
        <li className="border-t border-[rgba(255,255,255,.1)] mb-[.5em] ml-[1.5em] md:ml-0">
          {children}
        </li>
      );

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
