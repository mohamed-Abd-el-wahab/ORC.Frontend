# Hero Image Troubleshooting Guide

## Common Issues
When hero images work locally but not in production, the issue typically relates to one of these areas:
1. File paths
2. Build configuration
3. Asset handling
4. Image optimization
5. Deployment configuration

## Standard React Applications (Vite)

### 1. Check File Paths

#### Incorrect Path Structure
```jsx
// ❌ Wrong
<img src="/src/assets/hero.png" />

// ✅ Correct
<img src="/assets/hero.png" />
```

#### Solution
1. Move images to the `public` folder
2. Update image paths to be relative to the public directory
3. Use the following structure:

```jsx
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet="/assets/hero.png"
        />
        <img
          src="/assets/hero.png"
          alt="Hero image"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </picture>
    </div>
  );
};

export default HeroBackground;
```

### 2. Verify Build Configuration

1. Check `vite.config.ts`:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    copyPublicDir: true
  }
});
```

2. Ensure proper base URL configuration:
```ts
export default defineConfig({
  base: '/', // Update if deploying to a subdirectory
});
```

### 3. Asset Import Strategy

#### Option 1: Direct Import
```jsx
import heroImage from '/assets/hero.png';

// Use in component
<img src={heroImage} alt="Hero" />
```

#### Option 2: URL Import
```jsx
import heroImageUrl from '/assets/hero.png?url';

// Use in component
<img src={heroImageUrl} alt="Hero" />
```

## Next.js Applications

### 1. Use Next.js Image Component

```jsx
import Image from 'next/image';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <Image
        src="/hero.png"
        alt="Hero image"
        fill
        priority
        quality={90}
        className="object-cover"
      />
    </div>
  );
};
```

### 2. Configure next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'], // If using external images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
```

### 3. Verify Image Location
- Place images in `public` folder for static assets
- Use `src/assets` for imported images

## Deployment Checklist

1. **File Structure**
   - Confirm images are in the correct directory
   - Verify case sensitivity of file names

2. **Build Output**
   - Check the `dist` or `.next` folder
   - Verify images are being copied correctly

3. **Environment Variables**
   - Check if any image-related env vars are needed
   - Verify CDN configurations if applicable

4. **Deployment Platform**
   - Netlify: Check build settings and asset optimization
   - Vercel: Verify image optimization is enabled
   - Other platforms: Check asset handling configurations

## Testing Steps

1. Build locally:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

3. Check network tab in DevTools:
   - Verify image request URLs
   - Check for 404 errors
   - Inspect response headers

4. Validate paths in build output:
```bash
ls -la dist/assets  # For Vite
ls -la .next/static/media  # For Next.js
```

## Common Solutions

1. **404 Errors**
   - Move images to `public` folder
   - Update import paths
   - Check case sensitivity

2. **Optimization Issues**
   - Use appropriate image formats (WebP, AVIF)
   - Implement responsive images
   - Enable/disable platform-specific optimizations

3. **Performance**
   - Implement lazy loading where appropriate
   - Use proper image dimensions
   - Enable compression

4. **Base URL Issues**
   - Update base URL in config
   - Use absolute paths
   - Check deployment platform settings

## Platform-Specific Notes

### Netlify
```toml
# netlify.toml
[[plugins]]
  package = "@netlify/plugin-nextjs"

[build]
  command = "npm run build"
  publish = "dist"  # For Vite
  # publish = ".next"  # For Next.js
```

### Vercel
- No additional configuration needed for Next.js
- For Vite, ensure build output directory is correct

## Additional Resources

- [Vite Static Asset Handling](https://vitejs.dev/guide/assets.html)
- [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)