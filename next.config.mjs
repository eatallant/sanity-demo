/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              // Default fallback - only allow resources from same origin
              "default-src 'self'",

              // Scripts - allow same origin and inline scripts needed for Next.js
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",

              // Styles - allow same origin and inline styles (needed for Tailwind/shadcn)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

              // Images - allow same origin and data URLs
              "img-src 'self' data: https: blob:",

              // Fonts - allow same origin and specified font providers
              "font-src 'self' data: https://fonts.gstatic.com",

              // Connect - define allowed endpoints for fetch/XHR/WebSocket
              "connect-src 'self'",

              // Media - allow same origin media
              "media-src 'self'",

              // Object sources (PDFs, etc)
              "object-src 'none'",

              // Form submissions
              "form-action 'self'",

              // Frame sources
              "frame-src 'self'",

              // Manifest files
              "manifest-src 'self'",

              // Worker scripts
              "worker-src 'self' blob:",

              // Base URI restriction
              "base-uri 'self'",
            ].join("; "),
          },
          // Additional security headers
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
