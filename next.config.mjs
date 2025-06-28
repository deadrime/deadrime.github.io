import createMDX from '@next/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkGfm from "remark-gfm";
import codeTitle from "remark-code-title";
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeUnwrapImages from 'rehype-unwrap-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@svgr/webpack',
          options: { babel: false, dimensions: false, },
        },
      ],
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [{
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
          },
        }],
        as: '*.js',
      },
    },
  },
  reactStrictMode: false,
  experimental: {
    mdxRs: false,
    browsersListForSwc: true,
    legacyBrowsers: false
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm, codeTitle],
    rehypePlugins: [
      [rehypeExternalLinks, {
        rel: ['nofollow'],
        target: '_blank'
      }],
      [rehypeMdxCodeProps, {
        tagName: 'code'
      }],
      rehypeUnwrapImages
    ],
  },
});

export default withMDX(nextConfig);
