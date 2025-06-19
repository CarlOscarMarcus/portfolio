# Startups Feature Documentation

This document explains how to customize the startups section of your portfolio.

## Overview

The startups feature adds:
1. A new "Startups I've Helped Develop" section on the home page
2. Individual detailed pages for each startup at `/startups/<company-id>`
3. Full internationalization support (English and Swedish)

## File Structure

```
src/
├── i18n/
│   └── locales/
│       ├── en/
│       │   └── startups/
│       │       └── startups.json
│       └── sv/
│           └── startups/
│               └── startups.json
├── pages/
│   └── Startups.js
└── styles/
    └── pages/
        └── _startups.scss
```

## Customizing Startup Data

### Adding New Startups

Edit both language files:
- `src/i18n/locales/en/startups/startups.json`
- `src/i18n/locales/sv/startups/startups.json`

### Startup Object Structure

```json
{
  "id": "unique-startup-id",
  "name": "Startup Name",
  "title": "Your Role/Title",
  "duration": "Start Date - End Date",
  "shortDescription": "Brief description for home page",
  "fullDescription": [
    "First paragraph of detailed description",
    "Second paragraph",
    "Third paragraph",
    "Additional paragraphs as needed"
  ]
}
```

### Important Notes

1. **ID Field**: The `id` must be unique and URL-friendly (no spaces, special characters)
2. **Full Description**: Each array item becomes a separate paragraph
3. **Translation**: Keep the same `id` in both language files
4. **Duration**: Use consistent date formatting

## URL Structure

Each startup gets its own page at:
- `/startups/unique-startup-id`

For example:
- `/startups/example-startup-1`
- `/startups/my-fintech-startup`

## Styling

The startups feature uses:
- Main timeline styles from the existing home page
- Additional styles in `src/styles/pages/_startups.scss`
- Responsive design for mobile devices
- Hover effects and smooth transitions

## Adding More Startups

1. Add the new startup object to both JSON files
2. Ensure the `id` is unique and URL-friendly
3. Fill in all required fields
4. Test the new route by visiting `/startups/your-new-id`

## Example Usage

To add a new startup called "TechFlow":

1. Choose ID: `techflow`
2. Add to English JSON:
   ```json
   {
     "id": "techflow",
     "name": "TechFlow",
     "title": "Co-Founder & CTO",
     "duration": "March 2024 - Present",
     "shortDescription": "AI-powered workflow automation for small businesses",
     "fullDescription": [
       "TechFlow started as a solution to help small businesses automate their repetitive tasks using AI.",
       "As Co-Founder and CTO, I led the technical architecture and development of our core platform.",
       "We successfully onboarded 50+ businesses in our first six months.",
       "The platform now processes over 10,000 automated workflows monthly."
     ]
   }
   ```
3. Add corresponding Swedish translation
4. The startup will be accessible at `/startups/techflow`

## Troubleshooting

- **Startup not showing**: Check JSON syntax and ensure both language files have the entry
- **404 on startup page**: Verify the ID matches exactly between the home page link and the JSON
- **Styling issues**: Check that `_startups.scss` is imported in `main.scss`

