import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  Images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"cdn.pixabay.com",
        port:"",
        pathname:"/**",
        search:"",
      },
    ]
  }
};

export default nextConfig;
