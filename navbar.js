// navbar.js - SEO Optimized Mega Menu 2026
// Google Bot Friendly - No document.write()

(function() {
    // Tool Database - Only tools that actually exist on your site
    const TOOLS = [
        // ===== POPULAR GLOBAL TOOLS =====
        {name: "Meta Tag Generator", link: "meta-tag-generator.html", icon: "fa-code", cat: "Popular", desc: "Generate SEO meta tags"},
        {name: "Plagiarism Checker", link: "plagiarism-checker.html", icon: "fa-copy", cat: "Popular", desc: "Check content originality"},
        {name: "QR Code Generator", link: "qr-code-generator.html", icon: "fa-qrcode", cat: "Popular", desc: "Create custom QR codes"},
        {name: "Domain Authority Checker", link: "domain-authority-checker.html", icon: "fa-crown", cat: "Popular", desc: "Check DA/PA scores"},
        {name: "Backlink Checker", link: "backlink-checker.html", icon: "fa-link", cat: "Popular", desc: "Analyze backlinks"},
        {name: "SSL Checker", link: "ssl-checker.html", icon: "fa-lock", cat: "Popular", desc: "Check SSL certificate"},
        
        // ===== INDIA TOOLS =====
        {name: "GST Calculator", link: "gst-calculator.html", icon: "fa-calculator", cat: "India", desc: "CGST, SGST, IGST calculation"},
        {name: "UPI QR Generator", link: "upi-qr-generator.html", icon: "fa-qrcode", cat: "India", desc: "GPay, PhonePe, Paytm QR"},
        {name: "PAN Validator", link: "pan-validator.html", icon: "fa-id-card", cat: "India", desc: "Validate PAN card format"},
        {name: "Aadhaar Mask Tool", link: "aadhaar-mask.html", icon: "fa-id-card", cat: "India", desc: "Mask Aadhaar number"},
        {name: "Udyam Checker", link: "udyam-checker.html", icon: "fa-building", cat: "India", desc: "Verify MSME registration"},
        {name: "Hinglish Converter", link: "hinglish-converter.html", icon: "fa-language", cat: "India", desc: "Hinglish to English SEO"},
        
        // ===== SEO TOOLS =====
        {name: "Keyword Density", link: "keyword-density.html", icon: "fa-chart-pie", cat: "SEO", desc: "Analyze keyword density"},
        {name: "Sitemap Generator", link: "sitemap-generator.html", icon: "fa-sitemap", cat: "SEO", desc: "Generate XML sitemap"},
        {name: "Schema Markup", link: "schema-markup-generator.html", icon: "fa-code", cat: "SEO", desc: "JSON-LD structured data"},
        {name: "Broken Link Checker", link: "broken-link-checker.html", icon: "fa-unlink", cat: "SEO", desc: "Find 404 errors"},
        {name: "Canonical URL Checker", link: "canonical-url-checker.html", icon: "fa-link", cat: "SEO", desc: "Check canonical tags"},
        {name: "Robots.txt", link: "robots.txt", icon: "fa-robot", cat: "SEO", desc: "View robots.txt file"},
        
        // ===== AMAZON & E-COMMERCE =====
        {name: "Amazon SEO Tool", link: "amazon-seo-tool-free.html", icon: "fa-amazon", cat: "Amazon", desc: "Amazon optimization suite"},
        {name: "Amazon FBA Calculator", link: "amazon-fba-calculator.html", icon: "fa-calculator", cat: "Amazon", desc: "FBA fees & profit"},
        {name: "E-Commerce SEO", link: "ecommerce-seo-tool.html", icon: "fa-store", cat: "Amazon", desc: "Shopify, WooCommerce SEO"},
        {name: "Price Comparison", link: "price-comparison-tool.html", icon: "fa-tag", cat: "Amazon", desc: "Compare e-com prices"},
        
        // ===== CONTENT TOOLS =====
        {name: "Grammar & Spell", link: "grammar-spell-checker.html", icon: "fa-spell-check", cat: "Content", desc: "Check grammar errors"},
        {name: "Paraphrasing Tool", link: "paraphrasing-tool.html", icon: "fa-pen-fancy", cat: "Content", desc: "AI rewrite content"},
        {name: "Heading Analyzer", link: "heading-headline-analyzer.html", icon: "fa-heading", cat: "Content", desc: "Score headlines"},
        {name: "Readability Score", link: "readability-score-checker.html", icon: "fa-book-reader", cat: "Content", desc: "Flesch-Kincaid score"},
        
        // ===== PRO TOOLS =====
        {name: "Core Web Vitals", link: "core-web-vitals-monitor.html", icon: "fa-gauge-high", cat: "Pro", desc: "LCP, INP, CLS tracking"},
        {name: "SERP Feature Checker", link: "serp-feature-checker.html", icon: "fa-star", cat: "Pro", desc: "Featured snippets, PAA"},
        {name: "Content Gap Analyzer", link: "content-gap-analyzer.html", icon: "fa-chart-pie", cat: "Pro", desc: "Find content gaps"},
        {name: "Competitor SERP", link: "competitor-serp-analyzer.html", icon: "fa-search", cat: "Pro", desc: "Analyze top 10 pages"},
        
        // ===== SPEED & IMAGES =====
        {name: "Website Speed Test", link: "website-speed-test.html", icon: "fa-tachometer-alt", cat: "Speed", desc: "Page load time"},
        {name: "Image Compressor", link: "image-compressor.html", icon: "fa-compress-alt", cat: "Speed", desc: "Compress JPG, PNG, WebP"},
        {name: "Responsive Tester", link: "responsive-tester.html", icon: "fa-mobile-alt", cat: "Speed", desc: "Test mobile view"},
        
        // ===== MORE TOOLS =====
        {name: "URL Encoder", link: "url-encoder.html", icon: "fa-link", cat: "More", desc: "Encode/decode URLs"},
        {name: "CSV Sorter", link: "csv-sorter.html", icon: "fa-file-csv", cat: "More", desc: "Sort CSV files"},
        {name: "Hashtag Generator", link: "hashtag-generator.html", icon: "fa-hashtag", cat: "More", desc: "Trending hashtags"},
        {name: "Social Media Optimizer", link: "social-media-optimizer.html", icon: "fa-share-alt", cat: "More", desc: "FB, Instagram, Twitter"},
        {name: "YouTube SEO Tools", link: "youtube-seo-tools.html", icon: "fa-youtube", cat: "More", desc: "YouTube optimization"},
        {name: "Bhashini SEO", link: "bhashini-seo.html", icon: "fa-language", cat: "More", desc: "12+ Indian languages SEO"}
    ];

    // Category display order
    const CAT_ORDER = ["Popular", "India", "SEO", "Amazon", "Content", "Pro", "Speed", "More"];
    
    // Category icons mapping
    const CAT_ICONS = {
        "Popular": "fa-fire",
        "India": "fa-rupee-sign",
        "SEO": "fa-magnifying-glass",
        "Amazon": "fa-amazon",
        "Content": "fa-pen-to-square",
        "Pro": "fa-rocket",
        "Speed": "fa-bolt",
        "More": "fa-ellipsis"
    };
    
    // Category colors for accent
    const CAT_COLORS = {
        "Popular": "#4361ee",
        "India": "#ff9933",
        "SEO": "#3b82f6",
        "Amazon": "#f59e0b",
        "Content": "#10b981",
        "Pro": "#8b5cf6",
        "Speed": "#ef4444",
        "More": "#64748b"
    };

    // Build Navbar HTML
    const navbarHTML = `
    <nav class="navbar" itemscope itemtype="https://schema.org/SiteNavigationElement" aria-label="Main navigation">
        <div class="nav-container">
            <a href="index.html" class="logo" itemprop="url" aria-label="Free SEO Tool Hub Home">
                <i class="fas fa-tools" aria-hidden="true"></i> 
                <span itemprop="name">FreeSEOToolHub</span><span class="logo-dot">.com</span>
            </a>
            
            <button class="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mainNav">
                <span></span><span></span><span></span>
            </button>
            
            <div class="nav-links" id="mainNav" role="menubar">
                <a href="index.html" class="nav-link active" itemprop="url" role="menuitem">
                    <i class="fas fa-home" aria-hidden="true"></i> <span itemprop="name">Home</span>
                </a>
                
                <div class="mega-menu-container" role="menuitem">
                    <a href="all-tools.html" class="nav-link mega-menu-btn" itemprop="url" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-th" aria-hidden="true"></i> <span itemprop="name">Tools</span> 
                        <i class="fas fa-chevron-down arrow-icon" aria-hidden="true"></i>
                    </a>
                    <div class="mega-menu" id="megaMenu" role="menu" aria-label="Tools mega menu"></div>
                </div>
                
                <a href="blog/" class="nav-link" itemprop="url" role="menuitem">
                    <i class="fas fa-blog" aria-hidden="true"></i> <span itemprop="name">Blog</span>
                </a>
                <a href="about.html" class="nav-link" itemprop="url" role="menuitem">
                    <i class="fas fa-info-circle" aria-hidden="true"></i> <span itemprop="name">About</span>
                </a>
                <a href="contact.html" class="nav-link" itemprop="url" role="menuitem">
                    <i class="fas fa-envelope" aria-hidden="true"></i> <span itemprop="name">Contact</span>
                </a>
            </div>
        </div>
    </nav>`;

    // Build CSS
    const navbarCSS = `
    <style>
    /* === NAVBAR CORE === */
    .navbar {
        background: linear-gradient(135deg, #0f1a2f 0%, #1e2b4f 100%);
        padding: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        font-family: 'Poppins', 'Segoe UI', sans-serif;
    }
    .nav-container {
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        height: 65px;
    }
    .logo {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 700;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
        flex-shrink: 0;
    }
    .logo i { color: #ff9933; font-size: 1.5rem; }
    .logo-dot { color: #ff9933; font-weight: 400; }
    .nav-links { display: flex; align-items: center; gap: 5px; }
    
    .nav-link {
        color: rgba(255,255,255,0.9);
        text-decoration: none;
        padding: 10px 16px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.25s;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
    }
    .nav-link:hover, .nav-link.active {
        background: rgba(255,255,255,0.12);
        color: #fff;
    }
    .nav-link i { font-size: 0.9rem; }
    .arrow-icon { font-size: 0.65rem !important; margin-left: 2px; transition: transform 0.3s; }
    
    /* === HAMBURGER === */
    .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        z-index: 10000;
    }
    .hamburger span {
        width: 26px;
        height: 2.5px;
        background: #fff;
        border-radius: 2px;
        transition: all 0.3s;
    }
    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
    
    /* === MEGA MENU === */
    .mega-menu-container { position: relative; }
    .mega-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 750px;
        max-width: 95vw;
        background: #fff;
        box-shadow: 0 25px 60px rgba(0,0,0,0.2);
        border-radius: 16px;
        padding: 25px;
        z-index: 9998;
        border: 1px solid #e5e7eb;
        margin-top: 8px;
    }
    .mega-menu-container:hover .mega-menu,
    .mega-menu-btn:focus + .mega-menu,
    .mega-menu:hover { display: block; }
    .mega-menu-content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    .mega-menu-section h4 {
        color: #0f1a2f;
        margin: 0 0 12px 0;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding-bottom: 8px;
        border-bottom: 2px solid;
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 700;
    }
    .mega-menu-section a {
        display: block;
        padding: 7px 10px;
        color: #374151;
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.85rem;
        transition: all 0.2s;
        line-height: 1.4;
    }
    .mega-menu-section a:hover {
        background: #f3f4f6;
        color: #1e2b4f;
        padding-left: 14px;
    }
    .mega-menu-section a i { 
        margin-right: 7px; 
        width: 16px; 
        text-align: center; 
        font-size: 0.8rem;
    }
    .mega-menu-footer {
        grid-column: 1 / -1;
        margin-top: 20px;
        padding-top: 18px;
        border-top: 1px solid #e5e7eb;
        text-align: center;
    }
    .all-tools-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg, #4361ee, #3a0ca3);
        color: #fff !important;
        padding: 12px 35px;
        border-radius: 50px;
        font-weight: 600;
        text-decoration: none;
        font-size: 0.95rem;
        transition: all 0.3s;
    }
    .all-tools-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(67,97,238,0.35);
    }
    
    /* === MOBILE === */
    @media (max-width: 992px) {
        .hamburger { display: flex; }
        .nav-links {
            display: none;
            position: fixed;
            top: 65px;
            left: 0;
            width: 100%;
            background: #0f1a2f;
            flex-direction: column;
            padding: 15px;
            gap: 5px;
            max-height: calc(100vh - 65px);
            overflow-y: auto;
        }
        .nav-links.active { display: flex; }
        .nav-link { width: 100%; padding: 14px 16px; font-size: 1rem; }
        .mega-menu {
            position: static;
            width: 100%;
            transform: none;
            box-shadow: none;
            border-radius: 0;
            margin-top: 5px;
        }
        .mega-menu-content { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .mega-menu-container:hover .mega-menu { display: none; }
        .mega-menu-container.active .mega-menu { display: block; }
    }
    @media (max-width: 480px) {
        .mega-menu-content { grid-template-columns: 1fr; }
        .logo { font-size: 1.1rem; }
    }
    </style>`;

    // Insert navbar into page
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.head.insertAdjacentHTML('beforeend', navbarCSS);

    // Generate mega menu
    function buildMegaMenu() {
        const menu = document.getElementById('megaMenu');
        if (!menu) return;
        
        // Group tools by category
        const cats = {};
        TOOLS.forEach(t => {
            if (!cats[t.cat]) cats[t.cat] = [];
            cats[t.cat].push(t);
        });
        
        // Sort by CAT_ORDER
        const sorted = Object.keys(cats).sort((a,b) => CAT_ORDER.indexOf(a) - CAT_ORDER.indexOf(b));
        
        let html = '<div class="mega-menu-content">';
        
        sorted.forEach(cat => {
            const tools = cats[cat];
            const color = CAT_COLORS[cat] || '#64748b';
            const icon = CAT_ICONS[cat] || 'fa-folder';
            
            html += `<div class="mega-menu-section">
                <h4 style="border-bottom-color:${color}; color:${color};">
                    <i class="fas ${icon}"></i> ${cat}
                </h4>`;
            
            tools.forEach(t => {
                html += `<a href="${t.link}" title="${t.desc}" role="menuitem">
                    <i class="fas ${t.icon}" style="color:${color};"></i> ${t.name}
                </a>`;
            });
            
            html += '</div>';
        });
        
        html += `<div class="mega-menu-footer">
            <a href="all-tools.html" class="all-tools-btn">
                <i class="fas fa-th-large"></i> View All ${TOOLS.length}+ Tools
            </a>
        </div></div>`;
        
        menu.innerHTML = html;
    }

    // Mobile menu toggle
    function initMobile() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const megaContainers = document.querySelectorAll('.mega-menu-container');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
                const expanded = hamburger.getAttribute('aria-expanded') === 'true';
                hamburger.setAttribute('aria-expanded', !expanded);
            });
        }
        
        // Mega menu toggle on mobile
        megaContainers.forEach(container => {
            const btn = container.querySelector('.mega-menu-btn');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    if (window.innerWidth <= 992) {
                        e.preventDefault();
                        container.classList.toggle('active');
                    }
                });
            }
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && window.innerWidth <= 992) {
                hamburger?.classList.remove('active');
                navLinks?.classList.remove('active');
                megaContainers.forEach(c => c.classList.remove('active'));
            }
        });
    }

    // Set active nav link based on current page
    function setActiveLink() {
        const path = window.location.pathname;
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && path.includes(href.replace('/','')) && href !== 'index.html' && href !== '#') {
                link.classList.add('active');
            }
        });
        // Default home active
        if (path === '/' || path.endsWith('index.html')) {
            const homeLink = document.querySelector('.nav-link[href="index.html"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    // Initialize everything
    buildMegaMenu();
    initMobile();
    setActiveLink();
    
    console.log('✅ FreeSEOToolHub Navbar Loaded | ' + TOOLS.length + ' Tools | SEO Optimized 2026');
})();
