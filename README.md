# Spidr Air Fryer Interest Form

A React-based interest form for Spidr Design's fictional air fryer product. This form is designed to be embedded at the bottom of a landing page and matches Spidr Design's clean, professional aesthetic.

## Features

- **Clean, Professional Design**: Matches Spidr Design's monochromatic style guide
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Form Validation**: Built-in HTML5 validation for all required fields
- **Special PIN Formatting**: Automatically formats the 16-digit Spidr PIN with dashes
- **Console Output**: Form data is logged to the browser console on submission

## Form Fields

1. **First Name** (required)
2. **Last Name** (required)
3. **Phone Number** (required)
4. **Email Address** (required)
5. **Cost Guess** (required) - Dollar amount input with currency symbol
6. **Secret 16-Digit Spidr PIN** (required) - Auto-formatted as ####-####-####-####

## Design System

This form follows Spidr Design's style guide:

- **Colors**: Clean white background (#FFFFFF) with charcoal text (#222222)
- **Typography**: Sans-serif fonts with uppercase labels and proper hierarchy
- **Spacing**: Generous whitespace with 40-60px vertical spacing
- **Components**: Simple rectangular inputs and buttons with subtle hover effects
- **Layout**: Responsive grid system with left-aligned content

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spidr-air-fryer-form
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment

The built application can be deployed to any static hosting service:

- **GitHub Pages**: Use `gh-pages` package
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder to a public bucket

## Project Structure

```
src/
├── components/
│   ├── AirFryerForm.js    # Main form component
│   └── AirFryerForm.css   # Form styling
├── App.js                 # Root component
├── App.css               # Global styles
└── index.js              # Application entry point
```

## Technologies Used

- **React 19.1.0** - Frontend framework
- **CSS3** - Styling with custom properties and animations
- **HTML5** - Semantic markup and form validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for the Spidr Design coding challenge.
