import createMDX from '@next/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkGfm from "remark-gfm";
import codeTitle from "remark-code-title";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        },
      }],
    });
    return config;
  },
  experimental: {
    turbo: {
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
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, codeTitle],
    rehypePlugins: [
      [rehypeExternalLinks, {
        rel: ['nofollow'],
        target: '_blank'
      }],
      [rehypeMdxCodeProps, {
        tagName: 'code'
      }]
    ],
    // providerImportSource: "@mdx-js/react",
  }
});

export default withMDX(nextConfig);
