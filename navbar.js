// navbar.js - ऑटोमेटिक मेगा मेनू with SEO friendly structure
document.write(`
<nav class="navbar" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <div class="nav-container">
        <a href="index.html" class="logo" itemprop="url">
            <i class="fas fa-tools"></i> <span itemprop="name">FreeSEOToolHub</span>.com
        </a>
        
        <div class="nav-links">
            <a href="index.html" class="nav-link" itemprop="url"><i class="fas fa-home"></i> <span itemprop="name">होम</span></a>
            
            <!-- मेगा मेनू बटन -->
            <div class="mega-menu-container">
                <a href="tools.html" class="nav-link mega-menu-btn" itemprop="url">
                    <i class="fas fa-th"></i> <span itemprop="name">टूल्स</span> <i class="fas fa-chevron-down"></i>
                </a>
                
                <!-- मेगा मेनू कंटेंट -->
                <div class="mega-menu" id="megaMenu">
                    <!-- यहाँ टूल्स ऑटोमेटिक लोड होंगे -->
                </div>
            </div>
            
            <a href="about.html" class="nav-link" itemprop="url"><i class="fas fa-info-circle"></i> <span itemprop="name">जानकारी</span></a>
            <a href="contact.html" class="nav-link" itemprop="url"><i class="fas fa-envelope"></i> <span itemprop="name">संपर्क</span></a>
        </div>
    </div>
</nav>

<style>
/* मेगा मेनू CSS - SEO Optimized */
.mega-menu-container { 
    position: relative; 
    display: inline-block; 
}

.mega-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 600px;
    background: white;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border-radius: 12px;
    padding: 25px;
    z-index: 1000;
    border: 1px solid #eee;
}

.mega-menu-container:hover .mega-menu { 
    display: block; 
}

.mega-menu-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.mega-menu-section {
    padding: 10px;
}

.mega-menu-section h4 {
    color: #4361ee;
    margin-bottom: 15px;
    font-size: 1rem;
    padding-bottom: 8px;
    border-bottom: 2px solid #f0f0f0;
}

.mega-menu-section a {
    display: block;
    padding: 8px 12px;
    color: #333;
    text-decoration: none;
    border-radius: 6px;
    margin-bottom: 3px;
    transition: all 0.2s;
    font-size: 0.9rem;
}

.mega-menu-section a:hover {
    background: #f5f7ff;
    color: #4361ee;
    padding-left: 15px;
}

.mega-menu-section a i {
    margin-right: 8px;
    width: 18px;
    text-align: center;
    color: #4361ee;
}

.mega-menu-footer {
    grid-column: 1 / -1;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    text-align: center;
}

.all-tools-btn {
    display: inline-block;
    background: #4361ee;
    color: white !important;
    padding: 12px 30px !important;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
}

.all-tools-btn:hover {
    background: #3a56d4 !important;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
}

/* मोबाइल रिस्पॉन्सिव */
@media (max-width: 768px) {
    .mega-menu { 
        width: 300px; 
        left: -100px; 
    }
    .mega-menu-content { 
        grid-template-columns: 1fr; 
    }
    .nav-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>

<script>
// सभी टूल्स की लिस्ट - SEO Friendly Categories के साथ
const allTools = [
    // ============ POPULAR TOOLS ============
    {name: "Domain Authority Checker", link: "domain-authority-checker.html", icon: "fa-crown", category: "Popular", description: "Check DA/PA score"},
    {name: "Domain Checker", link: "domain-checker.html", icon: "fa-globe", category: "Popular", description: "Check domain availability"},
    {name: "QR Code Generator", link: "qr-code-generator.html", icon: "fa-qrcode", category: "Popular", description: "Generate QR codes with logo"},
    {name: "Paraphrasing Tool", link: "paraphrasing-tool.html", icon: "fa-pen-fancy", category: "Popular", description: "Rewrite text in Hindi/English"},
    
    // ============ SEO TOOLS ============
    {name: "GSC Visualizer", link: "gsc-visualizer.html", icon: "fa-chart-line", category: "SEO Tools", description: "Search analytics visualization"},
    {name: "Backlink Checker", link: "backlink-checker.html", icon: "fa-link", category: "SEO Tools", description: "Check website backlinks"},
    {name: "Keyword Density", link: "keyword-density.html", icon: "fa-chart-pie", category: "SEO Tools", description: "Analyze keyword density"},
    {name: "Meta Tag Generator", link: "meta-tag-generator.html", icon: "fa-search", category: "SEO Tools", description: "Generate meta tags"},
    {name: "Robots.txt Generator", link: "robots-txt-generator.html", icon: "fa-robot", category: "SEO Tools", description: "Generate robots.txt"},
    {name: "Sitemap Generator", link: "sitemap-generator.html", icon: "fa-sitemap", category: "SEO Tools", description: "Generate XML sitemap"},
    {name: "Schema Markup", link: "schema-markup-generator.html", icon: "fa-code", category: "SEO Tools", description: "Generate schema markup"},
    {name: "SERP Checker", link: "serp-position-checker.html", icon: "fa-ranking-star", category: "SEO Tools", description: "Check SERP positions"},
    
    // ============ TECHNICAL SEO ============
    {name: "Website Crawler", link: "website-crawler.html", icon: "fa-spider", category: "Technical", description: "Crawl and analyze website"},
    {name: "PageSpeed Insights", link: "pagespeed-insights.html", icon: "fa-gauge-high", category: "Technical", description: "Check Core Web Vitals"},
    {name: "SSL Checker", link: "ssl-checker.html", icon: "fa-lock", category: "Technical", description: "Check SSL certificate"},
    {name: "Broken Link Checker", link: "broken-link-checker.html", icon: "fa-unlink", category: "Technical", description: "Find broken links"},
    {name: "Canonical Checker", link: "canonical-url-checker.html", icon: "fa-link", category: "Technical", description: "Check canonical tags"},
    {name: "Heading & Headline Analyzer", link: "heading-headline-analyzer.html", icon: "fa-heading", category: "SEO Tools", description: "Check headings and analyze headlines"}
    {name: "Responsive Tester", link: "responsive-tester.html", icon: "fa-mobile-screen", category: "Technical", description: "Test mobile responsiveness"},
    
    // ============ CONTENT TOOLS ============
    {name: "Plagiarism Checker", link: "plagiarism-checker.html", icon: "fa-copy", category: "Content", description: "Check duplicate content"},
    {name: "Grammar Checker", link: "grammar-spell-checker.html", icon: "fa-spell-check", category: "Content", description: "Check grammar & spelling"},
    {name: "Hashtag Generator", link: "hashtag-generator.html", icon: "fa-hashtag", category: "Content", description: "Generate trending hashtags"},
    {name: "AI Ideas Generator", link: "ai-ideas.html", icon: "fa-brain", category: "Content", description: "Generate content ideas"},
    
    // ============ BUSINESS TOOLS ============
    {name: "GST Calculator", link: "gst-calculator.html", icon: "fa-calculator", category: "Business", description: "Calculate GST for India"},
    {name: "Profit Margin", link: "profit-margin-calculator.html", icon: "fa-chart-simple", category: "Business", description: "Calculate profit margins"},
    {name: "Price Comparison", link: "price-comparison-tool.html", icon: "fa-scale-balanced", category: "Business", description: "Compare product prices"},
    {name: "CSV Sorter", link: "csv-sorter.html", icon: "fa-table", category: "Business", description: "Sort CSV files"},
    {name: "URL Encoder", link: "url-encoder.html", icon: "fa-link", category: "Business", description: "Encode/decode URLs"},
    
    // ============ ANALYTICS TOOLS ============
    {name: "Trend Discovery", link: "trend-discovery.html", icon: "fa-chart-line", category: "Analytics", description: "Find trending topics"},
    {name: "Keyword Position", link: "keyword-position.html", icon: "fa-ranking-star", category: "Analytics", description: "Track keyword rankings"},
    {name: "Traffic Checker", link: "traffic-checker.html", icon: "fa-chart-bar", category: "Analytics", description: "Estimate website traffic"},
    {name: "Domain Age Checker", link: "domain-age-checker.html", icon: "fa-clock", category: "Analytics", description: "Check domain age"},
    
    // ============ YOUTUBE TOOLS ============
    {name: "YouTube Tags", link: "youtube-tags-generator.html", icon: "fa-tags", category: "YouTube", description: "Generate YouTube tags"},
    {name: "YouTube Title", link: "youtube-title-generator.html", icon: "fa-heading", category: "YouTube", description: "Generate video titles"},
    {name: "YouTube Description", link: "youtube-description-generator.html", icon: "fa-align-left", category: "YouTube", description: "Generate descriptions"},
    {name: "YouTube SEO", link: "youtube-seo-tools.html", icon: "fa-youtube", category: "YouTube", description: "Complete YouTube SEO pack"},
    
    // ============ SOCIAL MEDIA ============
    {name: "Instagram Captions", link: "instagram-caption-generator.html", icon: "fa-instagram", category: "Social", description: "Generate Instagram captions"},
    {name: "Hashtag Generator", link: "hashtag-generator.html", icon: "fa-hashtag", category: "Social", description: "Generate social hashtags"},
    {name: "Social Optimizer", link: "social-media-optimizer.html", icon: "fa-share-alt", category: "Social", description: "Optimize social profiles"},
    
    // ============ LOCAL SEO ============
    {name: "Local SEO Checklist", link: "local-seo-checklist.html", icon: "fa-list-check", category: "Local", description: "Local SEO guide"},
    {name: "Google Maps Checker", link: "google-maps-checker.html", icon: "fa-map-location-dot", category: "Local", description: "Check Google Maps ranking"},
    
    // ============ ECOMMERCE ============
    {name: "Ecommerce SEO", link: "ecommerce-seo-tool.html", icon: "fa-cart-shopping", category: "Ecommerce", description: "Ecommerce SEO tools"},
    {name: "Product Optimizer", link: "product-optimizer.html", icon: "fa-tag", category: "Ecommerce", description: "Optimize product pages"},
    
    // ============ IMAGE TOOLS ============
    {name: "Image Compressor", link: "image-compressor.html", icon: "fa-image", category: "Images", description: "Compress images to WebP"},
    {name: "ALT Text Generator", link: "alt-text-generator.html", icon: "fa-image", category: "Images", description: "Generate ALT text for images"},
    
    // ============ INTERNATIONAL ============
    {name: "Currency Converter", link: "currency-converter.html", icon: "fa-money-bill", category: "International", description: "Convert currencies"},
    {name: "WHOIS Lookup", link: "whois-lookup.html", icon: "fa-search", category: "International", description: "WHOIS domain lookup"},
    
    // 🔽 भविष्य में नया टूल जोड़ने के लिए यहाँ एक लाइन ऐड करें
    // {name: "नया टूल", link: "new-tool.html", icon: "fa-icon", category: "category", description: "description"},
];

// कैटेगरी ऑर्डर (Popular पहले दिखेगा)
const categoryOrder = [
    "Popular",
    "SEO Tools", 
    "Technical", 
    "Content", 
    "Business", 
    "Analytics", 
    "YouTube", 
    "Social", 
    "Images", 
    "Local", 
    "Ecommerce", 
    "International"
];

// मेगा मेनू ऑटो जेनरेट करें
function generateMegaMenu() {
    const megaMenu = document.getElementById('megaMenu');
    if (!megaMenu) return;
    
    // कैटेगरी में ग्रुप करें
    const categories = {};
    allTools.forEach(tool => {
        if (!categories[tool.category]) {
            categories[tool.category] = [];
        }
        categories[tool.category].push(tool);
    });
    
    // कैटेगरी को ऑर्डर करें
    const sortedCategories = Object.keys(categories).sort((a, b) => {
        return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
    });
    
    // HTML जेनरेट करें
    let html = '<div class="mega-menu-content">';
    
    // हर कैटेगरी के लिए सेक्शन बनाएं
    sortedCategories.forEach(category => {
        html += `
            <div class="mega-menu-section">
                <h4><i class="fas fa-folder"></i> ${category} (${categories[category].length})</h4>
        `;
        
        categories[category].forEach(tool => {
            html += `
                <a href="${tool.link}" title="${tool.description || tool.name}">
                    <i class="fas ${tool.icon}"></i> ${tool.name}
                </a>
            `;
        });
        
        html += '</div>';
    });
    
    // फुटर ऐड करें
    html += `
        <div class="mega-menu-footer">
            <a href="tools.html" class="all-tools-btn">
                <i class="fas fa-list"></i> सभी ${allTools.length} टूल्स देखें
            </a>
        </div>
    </div>`;
    
    megaMenu.innerHTML = html;
}

// पेज लोड होने पर मेगा मेनू जेनरेट करें
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateMegaMenu);
} else {
    generateMegaMenu();
}

// टूल काउंट कंसोल में दिखाएं (डिबगिंग के लिए)
console.log('Total tools loaded: ' + allTools.length);
</script>
`);

