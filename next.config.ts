import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Existing video file handling
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv|flv)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    // Resolve fallback for potential hydration issues
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false 
    };

    return config;
  },
  // Ensure proper handling of client components
  reactStrictMode: true,
};

export default nextConfig;