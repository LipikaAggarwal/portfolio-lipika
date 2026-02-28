/** @type {import('next').NextConfig} */
const nextConfig = {
      async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/18nudYlHKhyCwWYryPDuwzWyfEFSyY-nT/view?usp=sharing',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
