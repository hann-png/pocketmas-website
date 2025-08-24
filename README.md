# Pocket Mas - Merdeka Day Specials

A beautiful showcase website for Pocket Mas products featuring acrylic keychains, postcards, and DIY art for Malaysia's Merdeka Day celebration.

## Features

- **Product Showcase**: Three main categories with detailed product information
- **DIY Art Scanner**: QR code scanning functionality for art display
- **Event Information**: Countdown timer and event details
- **Contact Form**: Excel/Google Sheets integration for lead collection
- **Responsive Design**: Mobile-first approach with glassmorphism aesthetics
- **Gallery**: Visual showcase of products and event highlights

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with glassmorphism design
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Data Collection**: Google Sheets API integration

## Excel Integration Setup

The contact form is integrated with Google Sheets for automatic data collection:

### 1. Google Sheets Setup
1. Create a new Google Sheet
2. Set up the following columns:
   - Column A: Timestamp
   - Column B: Name
   - Column C: Email
   - Column D: Message
   - Column E: Status

### 2. Google Cloud Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Create credentials (API Key)
5. Copy the API key

### 3. Environment Variables
Update the `.env` file with your credentials:

```env
VITE_GOOGLE_SHEETS_ID=your_google_sheets_id_here
VITE_GOOGLE_SHEETS_API_KEY=your_google_api_key_here
VITE_PROXY_SERVER_ACCESS_TOKEN=undefined
```

### 4. Sheet Permissions
Make sure your Google Sheet is either:
- Publicly accessible (anyone with link can edit), OR
- Use a service account for authentication

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Fill in your Google Sheets credentials

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components
├── utils/              # Utility functions (Google Sheets integration)
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## Key Features

### Contact Form Integration
- Automatic submission to Google Sheets
- Real-time validation and feedback
- Fallback service for reliability
- Malaysian timezone timestamps

### Product Categories
- **Acrylic Keychains**: Custom designs with Merdeka themes
- **Postcards**: Traditional and modern Malaysian designs
- **DIY Art**: Interactive art display system

### Event Information
- Live countdown to Merdeka Day (27 August 2024)
- Event location and timing details
- In-person sales only (no online payments)

## Design System

- **Theme**: Glassmorphism with Merdeka Day colors
- **Colors**: Red, white, blue, yellow (Malaysian flag inspired)
- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: 8pt grid system for consistency
- **Responsive**: Mobile-first design approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project for Pocket Mas Merdeka Day event.
