/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve images directly from Blob storage instead of the Next.js Image
    // Optimization API. The optimizer was returning HTTP 402
    // (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) once the project's image
    // optimization quota was exhausted, which caused some images to load
    // intermittently (only cached transformations succeeded). The source
    // blob files are already web-sized JPEGs, so serving them unoptimized
    // guarantees they always render.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
