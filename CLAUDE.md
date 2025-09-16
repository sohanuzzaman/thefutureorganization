# WordPress to Next.js Migration Guide

## Project Overview
This project migrates Jacob Morgan's WordPress website to Next.js, combining static assets from the WordPress export with dynamic content from the WordPress API.

## Migration Strategy

### Hybrid Architecture
- **Static Assets**: Images, videos, PDFs, and other media files copied from `static_export/` to Next.js `public/` directory **only when specifically requested** during migration
- **Static Content**: Pages, layouts, and styling recreated in Next.js components
- **Dynamic Content**: Blog posts, testimonials, and other dynamic data fetched from WordPress REST API
- **SEO**: Maintain URL structure and meta data for search engine optimization

### WordPress API Integration
- Use WordPress REST API for dynamic content:
- Custom fields and metadata
- Implement caching strategies for API responses
- Handle pagination for large content sets


### Performance Optimizations
- Use Next.js Image component for automatic optimization
- Implement proper caching headers
- Use ISR (Incremental Static Regeneration) for dynamic content
- Optimize bundle size with code splitting


## Development Workflow

### Asset Migration Process
1. **Wait for specific instructions** - Only copy assets when explicitly requested for a particular page/component
2. Identify the exact assets needed based on the instruction
3. **Follow Next.js best practices** - Use `/public/assets/images/` structure instead of WordPress wp-content structure
4. Copy only the requested assets from `static_export/` to appropriate `public/assets/` subdirectory
5. Update asset paths in components to reference the new Next.js public directory structure (e.g., `/assets/images/filename.ext`)
6. Optimize assets for web (compress images, convert formats) if needed
7. Test asset loading and performance

### Design Principles & Best Practices

 - Use Tailwind CSS for all styling to ensure utility-first, consistent, and maintainable design
 - Write all components and pages in TypeScript for type safety and reliability
 - Maintain design consistency across all pages and components, following a unified style guide
 - **Lighthouse Icon Pattern**: When text contains "Sign[a]ture" or similar patterns where "A" should be replaced with the lighthouse icon, use the `/fr-blue.png` image instead of the letter "A". This creates a consistent brand element across the site (e.g., "About Me", "Signature Keynote Topics")

### Content Migration Process
1. Analyze WordPress page structure in `static_export/`
2. Extract content and identify dynamic vs static elements
3. Create Next.js page/component structure
4. Implement data fetching for dynamic content
5. Style components to match original design
6. Test responsive behavior and accessibility

### Quality Assurance
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Performance auditing (Lighthouse)
- [ ] SEO validation
- [ ] Accessibility compliance (WCAG)
- [ ] Content accuracy verification

## API Integration Notes

### WordPress REST API Endpoints
- Base URL: `https://api.thefutureorganization.com/wp-json/wp/v2/`

### Build Process
- Optimize images during build
- Generate sitemaps
- Pre-build critical pages
- Validate all links and assets

This migration guide will be updated as we progress through each phase of the project.