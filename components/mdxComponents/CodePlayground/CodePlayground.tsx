import React from "react";

const CodePlayground: React.FC<{ children: React.ReactElement | React.ReactElement[] }> = ({ children }) => {
  const childrenInfo = React.Children.map(children, i => {
    return {
      filename: i.props.children.props.filename,
      caption: i.props.children.props.caption,
    };
  });
  return <div className="flex flex-col gap-2">
    {JSON.stringify(childrenInfo)}
    {children}
  </div>;
};

export default CodePlayground;
