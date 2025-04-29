/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },

      //   {
      //     protocol: "https",
      //     hostname: "https://izlwnrcwutxxrclxaqwi.supabase.co/rest/v1/foofest",
      //   },
    ],
  },
};

export default nextConfig;
