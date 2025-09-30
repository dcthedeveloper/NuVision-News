// News data - will be loaded from JSON file
let newsData = [];

// Category mapping from JSON to app categories
const categoryMap = {
    'TECH': 'technology',
    'SCIENCE': 'technology',
    'BUSINESS': 'business',
    'MONEY': 'business',
    'SPORTS': 'sports',
    'ENTERTAINMENT': 'entertainment',
    'ARTS': 'entertainment',
    'ARTS & CULTURE': 'entertainment',
    'CULTURE & ARTS': 'entertainment',
    'COMEDY': 'entertainment',
    'STYLE': 'entertainment',
    'STYLE & BEAUTY': 'entertainment',
    'FOOD & DRINK': 'entertainment',
    'TASTE': 'entertainment',
    'MEDIA': 'entertainment',
    'POLITICS': 'business',
    'WORLD NEWS': 'business',
    'WORLDPOST': 'business',
    'THE WORLDPOST': 'business',
    'U.S. NEWS': 'business',
    'CRIME': 'business',
    'EDUCATION': 'business',
    'COLLEGE': 'business',
    'ENVIRONMENT': 'technology',
    'GREEN': 'technology',
    'HEALTHY LIVING': 'entertainment',
    'WELLNESS': 'entertainment',
    'HOME & LIVING': 'entertainment',
    'PARENTING': 'entertainment',
    'PARENTS': 'entertainment',
    'WEDDINGS': 'entertainment',
    'DIVORCE': 'entertainment',
    'WOMEN': 'entertainment',
    'BLACK VOICES': 'entertainment',
    'LATINO VOICES': 'entertainment',
    'QUEER VOICES': 'entertainment',
    'RELIGION': 'entertainment',
    'TRAVEL': 'entertainment',
    'GOOD NEWS': 'entertainment',
    'IMPACT': 'business',
    'WEIRD NEWS': 'entertainment',
    'FIFTY': 'entertainment'
};

// Sample authors for generating content
const sampleAuthors = [
    'Sarah Johnson', 'Michael Chen', 'David Martinez', 'Emily Watson',
    'Jessica Lee', 'Robert Taylor', 'Amanda White', 'Chris Anderson',
    'Nicole Brown', 'Kevin Wright', 'Lisa Garcia', 'Brian Miller'
];

// Transform JSON data to match app format
function transformNewsData(rawData) {
    return rawData.map((item, index) => {
        // Get category or default to 'technology'
        let category = 'technology';
        if (item.category) {
            category = categoryMap[item.category.toUpperCase()] || 'technology';
        }

        // Extract title (first 100 chars of content)
        const title = item.content ? item.content.substring(0, 100).trim() + (item.content.length > 100 ? '...' : '') : 'News Article';
        
        // Extract description (next 200 chars)
        const description = item.content && item.content.length > 100 
            ? item.content.substring(100, 300).trim() + (item.content.length > 300 ? '...' : '')
            : item.content || 'Read more to find out details about this news article.';

        // Random author
        const author = sampleAuthors[Math.floor(Math.random() * sampleAuthors.length)];

        // Generate a date in the past 30 days
        const daysAgo = Math.floor(Math.random() * 30);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        const dateString = date.toISOString().split('T')[0];

        // Placeholder image based on category
        const imageMap = {
            'technology': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
            'business': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
            'sports': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
            'entertainment': 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop'
        };

        return {
            id: item.id !== undefined ? item.id : index,
            title: title,
            description: description,
            category: category,
            author: author,
            date: dateString,
            image: imageMap[category],
            featured: index === 0 // First item is featured
        };
    });
}

// Load news data from JSON file
async function loadNewsData() {
    try {
        showLoading(true);
        const response = await fetch('nuvision_2k.json');
        const rawData = await response.json();
        newsData = transformNewsData(rawData);
        console.log(`Loaded ${newsData.length} news articles`);
        showLoading(false);
        return true;
    } catch (error) {
        console.error('Error loading news data:', error);
        showLoading(false);
        return false;
    }
}

// Sample news data (fallback if JSON load fails)
const sampleNewsData = [
    {
        id: 1,
        title: "Revolutionary AI Technology Transforms Healthcare Industry",
        description: "New artificial intelligence systems are helping doctors diagnose diseases with unprecedented accuracy, potentially saving thousands of lives annually.",
        category: "technology",
        author: "Sarah Johnson",
        date: "2025-01-15",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "Global Markets Reach Record Highs",
        description: "Stock markets worldwide celebrate their strongest performance in five years as economic recovery continues.",
        category: "business",
        author: "Michael Chen",
        date: "2025-01-15",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "Championship Finals Draw Record Viewership",
        description: "The dramatic finale attracted over 100 million viewers globally, making it the most-watched sporting event of the year.",
        category: "sports",
        author: "David Martinez",
        date: "2025-01-14",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
    },
    {
        id: 4,
        title: "Breakthrough in Renewable Energy Storage",
        description: "Scientists develop new battery technology that could revolutionize solar and wind power storage capabilities.",
        category: "technology",
        author: "Emily Watson",
        date: "2025-01-14",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
    },
    {
        id: 5,
        title: "Major Film Studio Announces Blockbuster Lineup",
        description: "Entertainment giant reveals plans for ambitious slate of films spanning multiple genres and franchises.",
        category: "entertainment",
        author: "Jessica Lee",
        date: "2025-01-13",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop"
    },
    {
        id: 6,
        title: "Tech Giant Launches Innovative Smartphone",
        description: "Latest device features groundbreaking camera technology and extended battery life in sleek new design.",
        category: "technology",
        author: "Robert Taylor",
        date: "2025-01-13",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop"
    },
    {
        id: 7,
        title: "Small Business Initiative Shows Promising Results",
        description: "Government program supporting local entrepreneurs sees success rate exceed expectations in first year.",
        category: "business",
        author: "Amanda White",
        date: "2025-01-12",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
    },
    {
        id: 8,
        title: "Olympic Athletes Prepare for Summer Games",
        description: "World-class competitors intensify training as countdown begins to next year's international sporting event.",
        category: "sports",
        author: "Chris Anderson",
        date: "2025-01-12",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop"
    },
    {
        id: 9,
        title: "Streaming Platform Unveils Original Series",
        description: "New shows feature star-studded casts and promise to deliver compelling stories across multiple genres.",
        category: "entertainment",
        author: "Nicole Brown",
        date: "2025-01-11",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop"
    },
    {
        id: 10,
        title: "Cybersecurity Experts Warn of New Threats",
        description: "Industry leaders call for increased vigilance as sophisticated cyber attacks target major corporations.",
        category: "technology",
        author: "Kevin Wright",
        date: "2025-01-11",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    },
    {
        id: 11,
        title: "Startup Disrupts Traditional Retail Model",
        description: "Innovative company's direct-to-consumer approach challenges established industry giants and wins market share.",
        category: "business",
        author: "Lisa Garcia",
        date: "2025-01-10",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
        id: 12,
        title: "Championship Team Clinches Playoff Berth",
        description: "Defending champions secure their position in post-season after impressive winning streak.",
        category: "sports",
        author: "Brian Miller",
        date: "2025-01-10",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop"
    }
];

// Application state
let currentCategory = 'all';

// Initialize the application
async function init() {
    // Load news data from JSON
    const loaded = await loadNewsData();
    
    // If loading failed, use sample data
    if (!loaded || newsData.length === 0) {
        newsData = sampleNewsData;
    }
    
    setupEventListeners();
    displayFeaturedNews();
    displayNews(currentCategory);
}

// Setup event listeners
function setupEventListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Get category and filter news
            currentCategory = link.dataset.category;
            displayNews(currentCategory);
        });
    });
}

// Display featured news
function displayFeaturedNews() {
    const featuredContainer = document.getElementById('featured-news');
    const featuredArticle = newsData.find(news => news.featured);
    
    if (featuredArticle) {
        featuredContainer.innerHTML = `
            <article class="featured-article" onclick="openArticle(${featuredArticle.id})">
                <img src="${featuredArticle.image}" alt="${featuredArticle.title}" class="featured-image" 
                     onerror="this.src='https://via.placeholder.com/800x600?text=News+Image'">
                <div class="featured-content">
                    <span class="featured-category">${formatCategory(featuredArticle.category)}</span>
                    <h2 class="featured-title">${featuredArticle.title}</h2>
                    <p class="featured-description">${featuredArticle.description}</p>
                    <div class="featured-meta">
                        <span>By ${featuredArticle.author}</span>
                        <span>${formatDate(featuredArticle.date)}</span>
                    </div>
                </div>
            </article>
        `;
    }
}

// Display news based on category
function displayNews(category) {
    const newsGrid = document.getElementById('news-grid');
    const filterText = document.getElementById('filter-text');
    
    // Filter news
    let filteredNews = category === 'all' 
        ? newsData.filter(news => !news.featured)
        : newsData.filter(news => news.category === category && !news.featured);
    
    // Update filter text
    filterText.textContent = category === 'all' 
        ? 'Showing: All News' 
        : `Showing: ${formatCategory(category)} News`;
    
    // Display news cards
    if (filteredNews.length === 0) {
        newsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No news articles found in this category.</p>';
        return;
    }
    
    newsGrid.innerHTML = filteredNews.map(news => `
        <article class="news-card" onclick="openArticle(${news.id})">
            <img src="${news.image}" alt="${news.title}" class="news-image"
                 onerror="this.src='https://via.placeholder.com/400x300?text=News+Image'">
            <div class="news-content">
                <span class="news-category">${formatCategory(news.category)}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-description">${news.description}</p>
                <div class="news-meta">
                    <span>${news.author}</span>
                    <span>${formatDate(news.date)}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Format category name
function formatCategory(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Open article (placeholder function)
function openArticle(id) {
    const article = newsData.find(news => news.id === id);
    if (article) {
        alert(`Opening article: "${article.title}"\n\nIn a full implementation, this would navigate to a detailed article page.`);
    }
}

// Show/hide loading indicator
function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
