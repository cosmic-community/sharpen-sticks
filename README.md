# Sharpen Sticks

![App Preview](https://imgix.cosmicjs.com/2ed7a8d0-1b13-11f1-9f8d-1beb8341a7a3-autopilot-photo-1544717305-2782549b5136-1772990462926.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, nature-inspired online store for **Sharpen Sticks** — a company of 3rd-5th graders selling handcrafted pens made from real sticks. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com/docs) CMS.

## Features

- 🏠 **Beautiful Homepage** — Hero section, mission statement, featured products, and customer testimonials
- 🖊️ **Product Catalog** — Browse all products with category filtering and inventory badges
- 🏷️ **Category Pages** — Organized product browsing by category
- ⭐ **Customer Reviews** — Star ratings and testimonials linked to products
- 📱 **Fully Responsive** — Mobile-first design that looks great on any device
- 🌿 **Sustainability Themed** — Earthy colors and nature-inspired design reflecting the mission
- ⚡ **Server-Side Rendering** — Fast, SEO-friendly pages with Next.js App Router
- 🎨 **Tailwind CSS** — Modern utility-first styling with custom theme

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=69adafb17905585e02a6bdc7&clone_repository=69adb0ec79ed993ad5a777c3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
>
> User instructions: Sharpen Sticks is a company of 3rd-5th graders selling pens made out of sticks. The mission is sustainable office supplies."

### Code Generation Prompt

> "Build a Next.js application for an online business called "Sharpen Sticks". The content is managed in Cosmic CMS with the following object types: categories, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: Sharpen Sticks is a company of 3rd-5th graders selling pens made out of sticks. The mission is sustainable office supplies."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the Sharpen Sticks bucket

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sharpen-sticks
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with your Cosmic credentials:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Product by Slug
```typescript
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug: 'my-product' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types:

| Object Type | Fields |
|-------------|--------|
| **Products** | name, description, price, inventory_status, featured_image, gallery, category |
| **Categories** | name, description, image |
| **Reviews** | reviewer_name, rating, comment, product |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!
<!-- README_END -->