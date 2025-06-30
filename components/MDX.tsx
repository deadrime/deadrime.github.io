import { MDXContent } from "@content-collections/mdx/react"
import Accordion from "@/components/Accordion/Accordion";
import ImageComponent from "@/components/mdxComponents/ImageComponent/ImageComponent";
import CodeDemo from "@/components/mdxComponents/CodeDemo/CodeDemo";
import CodePlayground from "@/components/mdxComponents/CodePlayground/CodePlayground";
import Blockquote from "@/components/mdxComponents/Blockquote/Blockquote";
import CodeElement from "./mdxComponents/CodeElement/CodeElement";

export const MDX: React.FC<{ mdx: string }> = ({ mdx }) => {
  return (
    <MDXContent code={mdx} components={{
      Accordion: Accordion,
      Image: ImageComponent,
      img: ImageComponent,
      code: CodeElement,
      CodeDemo: CodeDemo,
      CodePlayground: CodePlayground,
      blockquote: Blockquote,
    }} />
  )
}