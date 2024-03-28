/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["jsx", "js"],
  compiler: {
    styledComponents: true,
  },
  output: "export",
  // images: {
  //   loader: "custom",
  // },
  images: {
    unoptimized : true,
  }
};
export default nextConfig;
