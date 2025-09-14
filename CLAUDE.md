# Jacob Morgan Website Recreation

## Overview
This project recreates the Jacob Morgan website homepage from a WordPress static export into Next.js.

## Process

### Homepage Assets Used
The following assets were imported from the WordPress static export for the homepage:

**Images:**
- `/assets/images/jacob-logo.png` - Main Jacob Morgan logo (3000x677px)
- `/assets/images/video-placeholder.png` - Video poster image
- `/assets/images/JacobHome.png` - Jacob's home image (436x408px)

**Testimonial Images (200x206px each):**
- `/assets/images/Jose_Antonio.png`
- `/assets/images/HZ.png`
- `/assets/images/Hubert-Joly.png`
- `/assets/images/Michael-Miebach.png`
- `/assets/images/Mark-Hoplamazian.png`
- `/assets/images/Wes-Kremer.png`
- `/assets/images/politica-social.png`

**Videos:**
- `/assets/videos/Website-video-V3-2025-final.webm` - Homepage hero video

**Other:**
- `favicon.ico` - Site favicon (32x32px)

### Key Homepage Sections Created

1. **Header** - Contains the Jacob Morgan logo
2. **Hero Section** - Features the video background and main heading "Hi I'm Jacob Morgan"
3. **Description** - Professional summary text
4. **Testimonials** - Grid of leader/CEO headshots
5. **About Section** - Three-column feature cards for Employee Experience, Future of Work, and Leadership
6. **Footer** - Simple copyright footer

### Design Features
- Uses Poppins font to match the original WordPress theme
- Color scheme matches the original: #F0F5FA background, #334155 text, white cards
- Responsive grid layouts using Tailwind CSS
- Video autoplay with poster fallback
- Rounded images in testimonials section

### Next Steps for Other Pages
When recreating other pages, follow this same process:
1. Examine the static export HTML for the specific page
2. Identify and copy only the assets used on that page to the public/assets/ directory
3. Extract the content and structure
4. Create the Next.js page component
5. Update this CLAUDE.md file with the new page details

### Technical Notes
- Using Next.js 15 with Tailwind CSS 4
- Images optimized with Next.js Image component
- Video uses modern web formats (WebM)
- All assets stored in public/assets/ for easy organization