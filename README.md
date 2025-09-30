# NuVision News

A modern, responsive news application that delivers the latest stories across multiple categories including Technology, Business, Sports, and Entertainment.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Category Filtering**: Browse news by specific categories or view all articles
- **Featured News**: Highlighted top story with prominent display
- **Modern UI**: Clean, professional interface with smooth animations and transitions
- **Easy Navigation**: Intuitive navigation system for quick category switching
- **Image Fallbacks**: Graceful handling of missing images with placeholder support

## Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript**: Vanilla JavaScript for dynamic content rendering and interactivity
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## Project Structure

```
NuVision-News/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── app.js             # JavaScript functionality and data
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or package managers required

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dcthedeveloper/NuVision-News.git
   ```

2. Navigate to the project directory:
   ```bash
   cd NuVision-News
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local development server (optional):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

4. Visit `http://localhost:8000` (if using a local server)

## Usage

### Browsing News

- **All News**: Click "All" in the navigation to see all available articles
- **Category Filter**: Click any category (Technology, Business, Sports, Entertainment) to filter articles
- **Featured Story**: The top featured article is displayed prominently at the top of the page
- **Article Preview**: Click on any article card to view more details (placeholder functionality)

### Customizing Content

To add or modify news articles, edit the `newsData` array in `app.js`:

```javascript
const newsData = [
    {
        id: 1,
        title: "Your Article Title",
        description: "Article description",
        category: "technology", // technology, business, sports, or entertainment
        author: "Author Name",
        date: "2025-01-15", // YYYY-MM-DD format
        image: "image-url.jpg",
        featured: true // Set to true for featured article
    },
    // Add more articles...
];
```

## Features in Detail

### Responsive Design
- Desktop: Multi-column grid layout with optimal spacing
- Tablet: Adjusted layouts for medium screens
- Mobile: Single-column layout with touch-friendly navigation

### Category System
- Five categories: All, Technology, Business, Sports, Entertainment
- Visual indicator for active category
- Smooth filtering transitions

### Image Handling
- External image support via URLs
- Automatic fallback to placeholder images if source fails
- Optimized image sizing for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Future Enhancements

Potential features for future versions:
- Integration with real news APIs (NewsAPI, Guardian API, etc.)
- Search functionality
- Article bookmarking
- Dark mode toggle
- Social media sharing
- Comments section
- Pagination or infinite scroll
- Article detail pages
- User authentication
- Newsletter subscription

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback:
- Email: contact@nuvision-news.com
- GitHub: [@dcthedeveloper](https://github.com/dcthedeveloper)

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Design inspiration from modern news websites
- Built with ❤️ for the community