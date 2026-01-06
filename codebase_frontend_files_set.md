# atelier-arome-web/eslint.config.mjs
```mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

```

# atelier-arome-web/public/vercel.svg
```svg
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
```

# atelier-arome-web/public/globe.svg
```svg
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
```

# atelier-arome-web/public/next.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
```

# atelier-arome-web/public/window.svg
```svg
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
```

# atelier-arome-web/public/file.svg
```svg
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
```

# atelier-arome-web/next.config.ts
```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/atelier-arome/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/compendium',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

```

# atelier-arome-web/components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}

```

# atelier-arome-web/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ],
      "@/components/*": [
        "./src/components/*"
      ],
      "@/lib/*": [
        "./src/lib/*"
      ],
      "@/hooks/*": [
        "./src/hooks/*"
      ],
      "@/stores/*": [
        "./src/stores/*"
      ],
      "@/types/*": [
        "./src/types/*"
      ],
      "@/styles/*": [
        "./src/styles/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

# atelier-arome-web/next-env.d.ts
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

# atelier-arome-web/postcss.config.mjs
```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

# atelier-arome-web/package.json
```json
{
  "name": "atelier-arome-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/typography": "^0.5.19",
    "@tanstack/react-query": "^5.90.16",
    "axios": "^1.13.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.562.0",
    "next": "^15.5.9",
    "next-auth": "^4.24.13",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-hook-form": "^7.70.0",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^4.3.5",
    "zustand": "^5.0.9"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "@types/node": "^22.19.3",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "eslint": "^9.39.2",
    "eslint-config-next": "^16.1.1",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3"
  }
}

```

# atelier-arome-web/README.md
```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

# atelier-arome-web/tailwind.config.ts
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2A2D26',
          light: '#4A4D46',
          muted: '#545752',
        },
        gold: {
          DEFAULT: '#C9A769',
          light: '#E8D8B6',
          dark: '#A98750',
          muted: 'rgba(201, 167, 105, 0.3)',
          text: '#8B7355',
        },
        parchment: {
          DEFAULT: '#FAF8F5',
          dark: '#F5F1EB',
          darker: '#E8E4D9',
        },
        bronze: '#9A8C6D',
        rose: '#B87D7D',
        sage: '#7C6354',
        slate: '#7A8C9D',
        lavender: '#B8A9C9',
        eucalyptus: '#7CB9A0',
        bergamot: '#F5D489',
        rosehip: '#E8B4B8',
      },
      
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Crimson Pro', 'Georgia', 'serif'],
        accent: ['var(--font-accent)', 'Great Vibes', 'cursive'],
        ornament: ['Playfair Display', 'serif'],
      },
      
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.8rem + 0.35vw, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.6' }],
        lg: ['clamp(1.125rem, 1.1rem + 0.5vw, 1.25rem)', { lineHeight: '1.4' }],
        xl: ['clamp(1.25rem, 1.2rem + 0.75vw, 1.5rem)', { lineHeight: '1.3' }],
        '2xl': ['clamp(1.5rem, 1.4rem + 2.5vw, 2rem)', { lineHeight: '1.1' }],
        '3xl': ['clamp(2rem, 1.8rem + 2.5vw, 3rem)', { lineHeight: '0.9' }],
        '4xl': ['clamp(2.5rem, 2.25rem + 2.5vw, 4rem)', { lineHeight: '0.95' }],
        '5xl': ['clamp(3rem, 2.75rem + 2.5vw, 5rem)', { lineHeight: '1' }],
      },
      
      spacing: {
        '3xs': '0.125rem',
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
        '6xl': '12rem',
      },
      
      borderRadius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '2rem',
        '3xl': '4rem',
      },
      
      boxShadow: {
        sm: '0 1px 2px rgba(42, 45, 38, 0.05)',
        md: '0 4px 12px rgba(42, 45, 38, 0.08)',
        lg: '0 8px 24px rgba(42, 45, 38, 0.1)',
        xl: '0 16px 48px rgba(42, 45, 38, 0.12)',
        gold: '0 40px rgba(201, 167, 105, 0.2)',
      },
      
      transitionDuration: {
        micro: '150ms',
        fast: '300ms',
        base: '500ms',
        slow: '800ms',
      },
      
      zIndex: {
        base: '1',
        elevated: '10',
        sticky: '100',
        overlay: '1000',
        modal: '2000',
        toast: '3000',
      },
      
      keyframes: {
        'liquid-wave': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-10px) scaleY(1.05)' },
        },
        'float-botanical': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'rotate-seal': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'write-scroll': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'liquid-sway': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
        'bubble-rise': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-40px)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'seal-rotate': 'seal-rotate 30s linear infinite',
        'rotate-seal': 'rotate-seal 3s ease-in-out infinite',
        'liquid-sway': 'liquid-sway 3s ease-in-out infinite',
        'bubble-rise': 'bubble-rise 2s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};

export default config;

```

# atelier-arome-web/src/app/(checkout)/layout.tsx
```tsx
'use client';

import Link from 'next/link';

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full">
      <div className="max-w-container mx-auto px-4 py-16">
        <header>
          <Link href="/">
            <h1 className="font-display text-3xl text-ink">Atelier Arôme</h1>
          </Link>
        </header>
        
        <main className="max-w-container mx-auto px-4">
          {children}
          </main>
        
        <footer className="mt-20 border-t border-gold/30 pt-10 pb-10">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Atelier Arôme. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}

```

# atelier-arome-web/src/app/layout.tsx
```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    template: '%s — Atelier Arôme',
  },
  description:
    'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'http://localhost:3000',
    siteName: 'Atelier Arôme',
    title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    description:
      'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Atelier Arôme',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    description:
      'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-body text-ink antialiased">
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          }}
        />

        {children}
      </body>
    </html>
  );
}

```

# atelier-arome-web/src/app/error.tsx
```tsx
'use client';

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment">
      <main className="max-w-2xl mx-auto px-4 py-16 sm:px-6">
        <div className="text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-gold dark:text-zinc-800 dark:text-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M12 17.5a2 2.002 2.002 2.002s"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 9 5a2 2.002 6a.002 2.002s"
                strokeLinejoin="round"
              />
              <text
                x="15"
                y="15"
                text-anchor="middle"
                fontFamily="sans-serif"
                fill="none"
              >
                !
              </text>
            </svg>
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink dark:text-zinc-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-base text-muted-foreground text-center max-w-md text-zinc-600 mb-4">
            An unexpected error has occurred. We apologize for the inconvenience.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              className="px-6 py-2 border-2 border-solid border-ink rounded-md bg-parchment hover:bg-gold/50 transition-colors hover:text-ink dark:hover:text-zinc-800 dark:text-zinc-900"
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </button>
            <button
              className="px-6 py-2 border-2 border-solid border-ink rounded-md bg-parchment hover:bg-gold/50 transition-colors hover:text-ink dark:hover:text-zinc-800 dark:text-zinc-900"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-md text-zinc-600 mt-8">
            If the problem persists, please contact our support team or check the server logs.
          </p>
        </div>
      </main>
    </div>
  );
}

```

# atelier-arome-web/src/app/loading.tsx
```tsx
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-parchment">
      <div className="animate-pulse flex-col items-center gap-4">
        <div className="w-16 h-16 border-2 border-gold/20 rounded bg-white/30 p-8">
          <svg
            className="animate-spin h-12 w-12 text-ink dark:text-zinc-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <circle
              className="opacity-75"
              cx="12"
              cy="12"
              r="10"
              fill="none"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

```

# atelier-arome-web/src/app/page.tsx
```tsx
import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/hero/hero-section';
import { CompendiumSection } from '@/components/sections/compendium-section';
import { AlchemySection } from '@/components/sections/alchemy-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { Footer } from '@/components/layout/footer';

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-parchment text-ink-900 font-serif selection:bg-gold/20">
      <Header />
      <HeroSection />
      <CompendiumSection />
      <AlchemySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}

```

# atelier-arome-web/src/app/(shop)/layout.tsx
```tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [, setIsCartOpen] = React.useState(false);

  return (
    <main className="min-h-screen bg-parchment">
      <header className="sticky top-0 z-50 border-b border-gold/30 pt-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="font-display text-3xl text-ink font-semibold">
                Atelier Arôme
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <Link
                  href="/"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Compendium
                </Link>
                <Link
                  href="/collections"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Collections
                </Link>
                <Link
                  href="/search"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Search
                </Link>
              </nav>

              <button
                onClick={() => setIsCartOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l-4 4H2c-1.1 0-2-.9-2-2v4c0 1.1.9 2 2 2h4l4 4V6c0-1.1-.9-2-2-2zm14 0v-2a2 2 0 002 2v4c0 1.1.9 2 2 2h4l4 4V6c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>
    </main>
  );
}

```

# atelier-arome-web/src/app/(account)/layout.tsx
```tsx
import Link from 'next/link';

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full bg-parchment">
      <header>
        <Link href="/">
          <h1 className="font-display text-3xl text-ink font-semibold mb-4">Account</h1>
        </Link>
      </header>

      <nav className="flex items-center gap-6">
        <Link href="/account/dashboard">
          Dashboard
        </Link>

        <Link href="/account/orders">
          Orders
        </Link>

        <Link href="/account/addresses">
          Addresses
        </Link>

        <Link href="/account/wishlist">
          Wishlist
        </Link>

        <Link href="/account/settings">
          Settings
        </Link>
      </nav>

      <div className="border-t border-gold/30 p-6 rounded-lg bg-white dark:text-zinc-200">
        <main className="max-w-7xl mx-auto px-4 py-16">
          {children}
        </main>
      </div>
    </main>
  );
}

```

# atelier-arome-web/src/app/(marketing)/layout.tsx
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing — Atelier Arôme',
  description: 'Explore our atelier and alchemical preparations.',
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="min-h-screen w-full">
        <header>
          <Link href="/">
            <h1 className="font-display text-3xl text-ink">Atelier Arôme</h1>
          </Link>
        </header>

        <main className="max-w-container mx-auto px-4 py-16">
          {children}
        </main>

        <footer className="mt-20 border-t border-gold/30 pt-10 pb-10">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Atelier Arôme. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}

```

# atelier-arome-web/src/app/(marketing)/about/page.tsx
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Atelier Arôme',
};

export default function AboutPage() {
  return (
    <div>
      <h1>Our Atelier</h1>
      <p>Test content</p>
    </div>
  );
}

```

# atelier-arome-web/src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: var(--font-cormorant);
  --font-body: var(--font-crimson);
  --font-accent: var(--font-great-vibes);
  --color-ink: #2A2D26;
  --color-gold: #C9A769;
  --color-parchment: #FAF8F5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  color: var(--color-ink);
  background-color: var(--color-parchment);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-ink);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

a {
  color: var(--color-gold);
  text-decoration: none;
  transition: text-decoration 0.3s ease;
}

a:hover {
  text-decoration: underline;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

*:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 4px;
}

html {
  scroll-behavior: smooth;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-family: var(--font-display);
  font-weight: 500;
  border-radius: 0.125rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.btn--primary {
  background-color: var(--color-ink);
  color: var(--color-parchment);
}

.btn--primary:hover {
  background-color: var(--color-gold);
}

.btn--secondary {
  border: 2px solid var(--color-ink);
  color: var(--color-ink);
  background-color: transparent;
}

.btn--secondary:hover {
  background-color: var(--color-ink);
  color: var(--color-parchment);
}

.btn--outline {
  border: 2px solid var(--color-ink);
  color: var(--color-ink);
  background-color: transparent;
}

.btn--outline:hover {
  background-color: var(--color-ink);
  color: var(--color-parchment);
}

```

# atelier-arome-web/src/components/layout/header.tsx
```tsx
'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCartStore } from '@/stores/cart-store'

export function Header() {
  const cartItems = useCartStore((state) => state.items)

  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b-2 border-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 animate-seal-rotate">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A769" strokeWidth="4" />
                <text x="50" y="55" textAnchor="middle" className="text-2xl font-display fill-ink">
                  A
                </text>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-display font-semibold text-ink">
                Atelier Arôme
              </h1>
              <p className="text-sm text-ink-muted font-accent">
                Artisanal Aromatherapy
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#compendium" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— I —</span> Compendium
            </a>
            <a href="#alchemy" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— II —</span> Alchemy
            </a>
            <a href="#atelier" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— III —</span> The Atelier
            </a>
            <a href="#manuscript" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— IV —</span> Manuscript
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-ink hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button className="relative p-2 text-ink hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 14 0 00-8 0v4M5 9l14 14m0 0H5l14-14"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-ink text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            <Sheet>
              <SheetTrigger className="md:hidden p-2 text-ink hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="bg-parchment border-l-2 border-gold shadow-xl w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#compendium" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— I —</span> Folio I: Compendium
                  </a>
                  <a href="#alchemy" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— II —</span> Folio II: Alchemy
                  </a>
                  <a href="#atelier" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— III —</span> Folio III: The Atelier
                  </a>
                  <a href="#manuscript" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— IV —</span> Folio IV: Manuscript
                  </a>
                </nav>

                <div className="colophon mt-8 border-t border-gold/20 pt-8">
                  <p className="text-gold font-display text-sm mb-2">
                    Atelier Arôme
                  </p>
                  <address className="text-ink-muted font-body text-sm leading-relaxed">
                    <p>42 Orchard Road, Singapore 238823</p>
                    <p>Provence-Alpes-Côte d&apos;Azur, France</p>
                    <p className="font-accent text-gold mt-2">Anno MMXXIV</p>
                  </address>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

```

# atelier-arome-web/src/components/layout/footer.tsx
```tsx
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-parchment py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-semibold text-gold mb-4">
              Atelier Arôme
            </h3>
            <p className="text-parchment/80 font-body leading-relaxed mb-4">
              Where botany becomes poetry through the sacred art of alchemical distillation.
              Each essence is a testament to patience, precision, and botanical devotion.
            </p>
            <div className="space-y-2 text-sm text-parchment/60 font-body">
              <p>📍 42 Orchard Road, Singapore 238823</p>
              <p>🕒 Tue–Sun: 10:00–18:00</p>
              <p>📞 +65 6789 0123</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-gold mb-4">
              The Manuscript
            </h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  href="#compendium"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  The Compendium
                </Link>
              </li>
              <li>
                <Link
                  href="#alchemy"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  Our Alchemy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  About the Atelier
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  Patron Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-gold mb-4">
              Society
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 border-2 border-gold/50 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16,11.37 A4,4,0,1,1,12.63,8 A4,4,0,0,1,16,11.37 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-gold/50 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12,6 L12,10 M10,8 L14,8" stroke="currentColor" strokeWidth="2" />
                  <path d="M12,18 L12,14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-parchment/60 font-body">
              Follow our alchemical journey
            </p>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-parchment/60 font-body">
              © {currentYear} Atelier Arôme. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Shipping
              </Link>
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Returns
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block border-2 border-gold/30 rounded-lg p-4 bg-parchment/5">
            <p className="text-xs font-accent text-gold mb-2">
              — Colophon —
            </p>
            <p className="text-sm text-parchment/60 font-body">
              Crafted with devotion in Singapore
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

```

# atelier-arome-web/src/components/hero/botanical-layer.tsx
```tsx
export function BotanicalLayer() {
  return (
    <>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-60 animate-float" style={{ animationDelay: '0s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-lavender">
          <path d="M50,95 Q50,50 75,35 Q60,45 50,30 Q40,45 25,35 Q50,50 50,95" fill="currentColor" />
          <ellipse cx="50" cy="30" rx="8" ry="4" fill="currentColor" />
          <path d="M42,30 L38,20" stroke="currentColor" strokeWidth="2" />
          <path d="M50,25 L50,15" stroke="currentColor" strokeWidth="2" />
          <path d="M58,30 L62,20" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="38" cy="18" rx="3" ry="4" fill="currentColor" />
          <ellipse cx="50" cy="14" rx="3" ry="4" fill="currentColor" />
          <ellipse cx="62" cy="18" rx="3" ry="4" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 w-20 h-20 opacity-60 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-rosehip">
          <path d="M50,95 Q50,60 70,50 Q60,55 50,45 Q40,55 30,50 Q50,60 50,95" fill="currentColor" />
          <path d="M50,45 Q65,40 70,30 Q65,38 50,35 Q35,38 30,30 Q35,40 50,45" fill="currentColor" />
          <path d="M50,45 Q50,30 50,20 Q50,30 50,45" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="18" r="6" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-40 left-10 w-16 h-32 opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 50 100" className="w-full h-full text-eucalyptus">
          <path d="M25,95 Q25,60 15,50 Q20,55 25,50 Q30,55 35,50 Q25,60 25,95" fill="currentColor" />
          <ellipse cx="15" cy="50" rx="10" ry="4" fill="currentColor" transform="rotate(-30 15 50)" />
          <ellipse cx="35" cy="50" rx="10" ry="4" fill="currentColor" transform="rotate(30 35 50)" />
          <ellipse cx="25" cy="40" rx="10" ry="4" fill="currentColor" />
          <ellipse cx="18" cy="30" rx="8" ry="3" fill="currentColor" transform="rotate(-20 18 30)" />
          <ellipse cx="32" cy="30" rx="8" ry="3" fill="currentColor" transform="rotate(20 32 30)" />
        </svg>
      </div>
    </>
  );
}

```

# atelier-arome-web/src/components/hero/hero-frame.tsx
```tsx
export function HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full min-h-screen bg-parchment overflow-hidden">
      <svg className="absolute top-0 left-0 w-32 h-32 text-gold opacity-80" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <svg className="absolute top-0 right-0 w-32 h-32 text-gold opacity-80 rotate-90" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-32 h-32 text-gold opacity-80 -rotate-90" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-32 h-32 text-gold opacity-80 rotate-180" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-ink opacity-5" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <pattern id="watermark" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20,0 L40,20 L20,40 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#watermark)" />
      </svg>
      <div className="relative z-10 container mx-auto px-4 py-8">
        {children}
      </div>
    </section>
  );
}

```

# atelier-arome-web/src/components/hero/alchemical-vessel.tsx
```tsx
export function AlchemicalVessel() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <path
          d="M70,20 L70,60 Q40,100 40,150 Q40,180 100,180 Q160,180 160,150 Q160,100 130,60 L130,20 Z"
          fill="none"
          stroke="#C9A769"
          strokeWidth="3"
          opacity="0.6"
        />
        <path
          d="M45,150 Q45,175 100,175 Q155,175 155,150"
          fill="none"
          stroke="#B8A9C9"
          strokeWidth="4"
          className="animate-liquid-sway"
        />
        <circle cx="80" cy="160" r="4" fill="#E8B4B8" className="animate-bubble-rise" />
        <circle cx="120" cy="155" r="3" fill="#F5D489" className="animate-bubble-rise" style={{ animationDelay: '0.5s' }} />
        <circle cx="100" cy="165" r="2" fill="#F5D489" className="animate-bubble-rise" style={{ animationDelay: '1s' }} />
      </svg>
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 text-gold font-display text-sm">
        <span className="text-xs">N°</span> 724
      </div>
      <div className="absolute inset-0 bg-gold opacity-10 blur-3xl rounded-full animate-pulse" />
    </div>
  );
}

```

# atelier-arome-web/src/components/hero/hero-section.tsx
```tsx
import { HeroFrame } from './hero-frame';
import { AlchemicalVessel } from './alchemical-vessel';
import { BotanicalLayer } from './botanical-layer';

export function HeroSection() {
  return (
    <HeroFrame>
      <BotanicalLayer />
      <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="space-y-8">
          <div className="relative">
            <svg className="absolute -top-8 -left-8 w-32 h-32 text-gold opacity-30" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50,5 L50,15 M50,85 L50,95 M5,50 L15,50 M85,50 L95,50" stroke="currentColor" strokeWidth="1" />
              <path d="M20,20 L27,27 M73,73 L80,80 M20,80 L27,73 M73,27 L80,20" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="text-8xl md:text-9xl font-display font-bold text-gold drop-shadow-lg relative z-10">
              A
            </span>
            <span className="absolute -top-4 -left-4 text-6xl md:text-7xl font-display text-gold opacity-40">
              A
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-ink">
            The Art of Scent
          </h1>
          <p className="text-2xl md:text-3xl font-accent text-gold">
            Where Botany Becomes Poetry
          </p>
          <div className="border-2 border-gold/30 rounded-lg p-6 bg-parchment/50">
            <p className="text-lg text-ink leading-relaxed font-body">
              In the quietude of our atelier, where patience is measured not in hours but in weeks,
              we coax forth the very soul of botanical essences. Each drop is a testament to
              the alchemist&apos;s devotion...
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gold text-ink font-display rounded-lg hover:bg-gold-dark transition-colors">
              Enter Atelier
            </button>
            <button className="px-8 py-3 border-2 border-gold text-ink font-display rounded-lg hover:bg-gold/10 transition-colors">
              Our Alchemy
            </button>
          </div>
          <div className="flex gap-8 pt-8 border-t border-gold/20">
            <div className="text-center">
              <p className="text-3xl font-display text-gold">72h</p>
              <p className="text-sm text-ink-muted font-body">Distillation</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-gold">∞</p>
              <p className="text-sm text-ink-muted font-body">Patience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-gold">100%</p>
              <p className="text-sm text-ink-muted font-body">Artisanal</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <AlchemicalVessel />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2 L12,18 M12,18 L6,12 M12,18 L18,12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-sm text-ink-muted font-accent">Continue Reading</span>
        </div>
      </div>
    </HeroFrame>
  );
}

```

# atelier-arome-web/src/components/ui/sheet.tsx
```tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "left" | "right" | "top" | "bottom";
  }
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-parchment border-l-2 border-gold shadow-xl p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-500",
        side === "left" &&
          "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        side === "right" &&
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        side === "top" &&
          "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        side === "bottom" &&
          "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        className
      )}
      {...props}
    >
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4 text-ink" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetTrigger, SheetContent, SheetClose, SheetOverlay };

```

# atelier-arome-web/src/components/sections/testimonials-section.tsx
```tsx
'use client'

import { useState } from 'react'

interface Testimonial {
  id: string
  patron: string
  verified: boolean
  essence: string
  content: string
  date: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    patron: 'Lady Eleanor',
    verified: true,
    essence: 'Damask Rose',
    content: 'The rose essence transports me to an English garden at dawn. Sublime beyond measure.',
    date: 'December 2025'
  },
  {
    id: '2',
    patron: 'Sir William',
    verified: true,
    essence: 'English Lavender',
    content: 'A masterwork of botanical alchemy. The lavender essence calms my spirit like nothing else.',
    date: 'November 2025'
  },
  {
    id: '3',
    patron: 'Duchess Arabella',
    verified: true,
    essence: 'Blue Gum Eucalyptus',
    content: 'Exceptional clarity and purity. The eucalyptus essence clears both body and mind.',
    date: 'October 2025'
  }
]

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage)

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  return (
    <section className="py-20 px-4 bg-parchment">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            Words From Our Patrons
          </h2>
          <p className="text-xl font-accent text-gold">
            Verified Accounts of Alchemical Delight
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentTestimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="border-2 border-gold/30 rounded-lg p-6 bg-parchment/50 relative"
            >
              {testimonial.verified && (
                <div className="absolute top-4 right-4 text-gold text-xs font-display uppercase tracking-wide">
                  ✓ Verified Patron
                </div>
              )}

              <div className="mb-4">
                <svg className="w-8 h-8 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2 C9,2 7,4 7,7 L7,10 L4,10 L4,22 L20,22 L20,10 L17,10 L17,7 C17,4 15,2 12,2 Z M12,4 C13.66,4 15,5.34 15,7 L15,10 L9,10 L9,7 C9,5.34 10.34,4 12,4 Z" />
                </svg>
              </div>

              <p className="text-ink font-body leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="pt-4 border-t border-gold/20">
                <p className="text-gold font-display font-semibold mb-1">
                  {testimonial.patron}
                </p>
                <p className="text-sm text-ink-muted font-body mb-2">
                  On {testimonial.essence}
                </p>
                <p className="text-xs text-ink-muted font-accent">
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="px-4 py-2 border-2 border-gold text-ink font-display rounded-lg hover:bg-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ←
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-8 h-8 font-display rounded-lg transition-colors ${
                  currentPage === i
                    ? 'bg-gold text-ink'
                    : 'border-2 border-gold text-ink hover:bg-gold/10'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 border-2 border-gold text-ink font-display rounded-lg hover:bg-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-gold/30 rounded-lg p-6 bg-parchment/50">
            <p className="text-sm font-body text-ink mb-2">
              Verified Patronage Badge
            </p>
            <svg className="w-12 h-12 mx-auto text-gold" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path
                d="M14,24 L22,32 L34,18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

```

# atelier-arome-web/src/components/sections/compendium-section.tsx
```tsx
'use client'

import { useState } from 'react'

interface Essence {
  id: string
  folioNumber: number
  latinName: string
  commonName: string
  humour: 'fire' | 'earth' | 'air' | 'water'
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary'
  season: 'spring' | 'summer' | 'autumn' | 'winter'
  price: number
  notes: string
}

const MOCK_ESSENCES: Essence[] = [
  {
    id: '1',
    folioNumber: 1,
    latinName: 'Lavandula angustifolia',
    commonName: 'English Lavender',
    humour: 'air',
    rarity: 'common',
    season: 'summer',
    price: 45,
    notes: 'Floral, herbaceous, slightly sweet'
  },
  {
    id: '2',
    folioNumber: 2,
    latinName: 'Rosa damascena',
    commonName: 'Damask Rose',
    humour: 'fire',
    rarity: 'rare',
    season: 'spring',
    price: 125,
    notes: 'Rich, deep, velvety floral'
  },
  {
    id: '3',
    folioNumber: 3,
    latinName: 'Eucalyptus globulus',
    commonName: 'Blue Gum',
    humour: 'air',
    rarity: 'common',
    season: 'winter',
    price: 35,
    notes: 'Fresh, camphoraceous, clearing'
  }
]

const HUMOURS = {
  fire: { icon: '🔥', label: 'Fire' },
  earth: { icon: '🌍', label: 'Earth' },
  air: { icon: '💨', label: 'Air' },
  water: { icon: '💧', label: 'Water' }
}

const RARITY_COLORS = {
  common: 'text-gold',
  uncommon: 'text-eucalyptus',
  rare: 'text-rosehip',
  legendary: 'text-gold'
}

export function CompendiumSection() {
  const [filter, setFilter] = useState<string>('all')
  const [sort, setSort] = useState<string>('folio')

  const filteredEssences = MOCK_ESSENCES.filter(essence => {
    if (filter === 'all') return true
    if (filter === 'calming') return ['air', 'water'].includes(essence.humour)
    if (filter === 'uplifting') return essence.humour === 'fire'
    if (filter === 'grounding') return essence.humour === 'earth'
    if (filter === 'clarifying') return essence.humour === 'air'
    return true
  })

  const sortedEssences = [...filteredEssences].sort((a, b) => {
    switch (sort) {
      case 'folio':
        return a.folioNumber - b.folioNumber
      case 'price':
        return a.price - b.price
      case 'rarity':
        const rarityOrder = ['common', 'uncommon', 'rare', 'legendary']
        return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
      default:
        return 0
    }
  })

  return (
    <section className="py-20 px-4 bg-parchment">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            The Compendium
          </h2>
          <p className="text-xl font-accent text-gold">
            Our Collection of Botanical Essences
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {['all', 'calming', 'uplifting', 'grounding', 'clarifying'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 font-display rounded-lg transition-colors ${
                filter === f
                  ? 'bg-gold text-ink'
                  : 'border-2 border-gold text-ink hover:bg-gold/10'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border-2 border-gold font-display rounded-lg bg-parchment text-ink"
          >
            <option value="folio">Folio Order</option>
            <option value="price">Price (Low to High)</option>
            <option value="rarity">Rarity</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEssences.map(essence => (
            <div
              key={essence.id}
              className="border-2 border-gold/30 rounded-lg p-6 bg-parchment/50 hover:border-gold transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-display text-gold">
                  Folio {essence.folioNumber}
                </span>
                <span
                  className={`${RARITY_COLORS[essence.rarity]} text-sm font-display uppercase`}
                >
                  {essence.rarity}
                </span>
              </div>

              <h3 className="text-2xl font-display text-ink mb-2">
                {essence.latinName}
              </h3>

              <p className="text-lg font-accent text-gold mb-4">
                {essence.commonName}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span>{HUMOURS[essence.humour].icon}</span>
                  <span className="text-sm text-ink-muted font-body">
                    {HUMOURS[essence.humour].label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌸</span>
                  <span className="text-sm text-ink-muted font-body capitalize">
                    {essence.season}
                  </span>
                </div>
              </div>

              <p className="text-sm text-ink mb-4 font-body">
                {essence.notes}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gold/20">
                <span className="text-2xl font-display text-gold">
                  ${essence.price}
                </span>
                <button className="px-6 py-2 bg-gold text-ink font-display rounded-lg hover:bg-gold-dark transition-colors">
                  Add to Vial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

```

# atelier-arome-web/src/components/sections/alchemy-section.tsx
```tsx
export function AlchemySection() {
  const steps = [
    {
      number: 1,
      name: 'Nigredo',
      subtitle: 'The Blackening',
      description: 'Preparation of botanical materials through gentle maceration, allowing the essence to emerge from darkness.',
      color: 'bg-ink'
    },
    {
      number: 2,
      name: 'Albedo',
      subtitle: 'The Whitening',
      description: 'Purification through slow distillation, separating the pure essence from earthly impurities.',
      color: 'bg-gold'
    },
    {
      number: 3,
      name: 'Citrinitas',
      subtitle: 'The Yellowing',
      description: 'Transformation through careful aging and blending, developing depth and complexity.',
      color: 'bg-amber-600'
    },
    {
      number: 4,
      name: 'Rubedo',
      subtitle: 'The Reddening',
      description: 'Final perfection where essence reaches its ultimate form, ready for the discerning patron.',
      color: 'bg-rosehip'
    }
  ]

  return (
    <section className="py-20 px-4 bg-ink text-parchment">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-gold mb-4">
            Our Alchemical Process
          </h2>
          <p className="text-xl font-accent text-gold">
            Where Botany Becomes Poetry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative pl-12 border-l-2 border-gold/30 pb-8"
            >
              <div
                className={`absolute left-0 top-0 w-10 h-10 -translate-x-1/2 ${step.color} rounded-full flex items-center justify-center text-parchment font-display font-bold`}
              >
                {step.number}
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-display font-semibold text-gold mb-1">
                  {step.name}
                </h3>
                <p className="text-lg font-accent text-gold/80">
                  {step.subtitle}
                </p>
              </div>

              <p className="text-parchment/80 font-body leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gold/30">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4 L12,20 M12,20 L6,14 M12,20 L18,14" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="border-2 border-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg font-body leading-relaxed mb-4">
              Each essence undergoes this sacred alchemical journey, taking
              between 72 hours and several months to complete. We do not rush
              what nature cannot be hurried.
            </p>
            <p className="text-sm font-accent text-gold">
              — The Alchemist&apos;s Manifesto
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

```

# atelier-arome-web/src/components/sections/newsletter-section.tsx
```tsx
'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscribed(true)
    setEmail('')
  }

  if (subscribed) {
    return (
      <section className="py-20 px-4 bg-gold text-ink">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <svg
                className="w-20 h-20 mx-auto text-ink"
                viewBox="0 0 80 80"
                style={{ animation: 'rotate-seal 3s ease-in-out infinite' }}
              >
                <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M40,15 L40,65 M15,40 L65,40 M25,25 L55,55 M55,25 L25,55"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-display font-semibold mb-4">
              Subscription Confirmed
            </h2>
            <p className="text-lg font-body">
              You shall receive tidings of new essences, alchemical revelations,
              and exclusive offers for the discerning patron.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-parchment">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-display font-semibold text-ink mb-4">
              Join Our Circle of Patrons
            </h2>
            <p className="text-lg font-body text-ink mb-2">
              Receive alchemical revelations and exclusive offers
            </p>
            <p className="text-sm font-accent text-gold">
              New essences, process insights, patron privileges
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 text-gold opacity-20">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" />
              </svg>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-display text-ink mb-2">
                  Your Electronic Correspondence
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@example.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg bg-parchment text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none font-body"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold text-ink font-display rounded-lg hover:bg-gold-dark transition-colors text-lg"
              >
                Subscribe to the Circle
              </button>
            </form>

            <div className="absolute -right-4 -bottom-4 w-16 h-16 text-gold opacity-20">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" />
              </svg>
            </div>
          </div>

          <p className="text-xs text-ink-muted text-center mt-4 font-body">
            Your privacy is sacred. We shall not share your correspondence with others.
          </p>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-12 h-12 text-gold"
              viewBox="0 0 48 48"
              style={{ animation: 'rotate-seal 4s ease-in-out infinite' }}
            >
              <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              <path
                d="M24,8 L24,40 M8,24 L40,24 M14,14 L34,34 M34,14 L14,34"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

```

# atelier-arome-web/src/stores/cart-store.ts
```ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  latinName: string;
  price: number;
  quantity: number;
  variant?: string;
  addedAt?: string;
}

export interface CartState {
  items: CartItem[];
  cartDrawerOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCartDrawer: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartDrawerOpen: false,

      addToCart: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);
        
        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: item.quantity, addedAt: new Date().toISOString() }],
          }));
        }
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }

        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCartDrawer: () => {
        set((state) => ({ cartDrawerOpen: !state.cartDrawerOpen }));
      },

      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'atelier-arome-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

```

# atelier-arome-web/src/lib/utils.ts
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

