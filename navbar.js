// navbar.js - SEO Optimized Mega Menu 2026
// Google Bot Friendly - No document.write()
// Multi-Language Ready - 5 Languages
// API Key Ready

(function() {
    // 🔑 Global API Key
    const GLOBAL_API_KEY = "rsk_01KX30NR2A1988J2N3GWG1KF5F";
    window.GLOBAL_API_KEY = GLOBAL_API_KEY;
    console.log("🔑 API Key loaded successfully:", GLOBAL_API_KEY);

    // Tool Database - Only tools that actually exist on your site (15 Global Tools)
    const TOOLS = [
        // ===== GLOBAL TOOLS =====
        {name: "Meta Tag Generator", link: "meta-tag-generator.html", icon: "fa-code", cat: "Global SEO", desc: "Generate SEO meta tags"},
        {name: "Plagiarism Checker", link: "plagiarism-checker.html", icon: "fa-copy", cat: "Global SEO", desc: "Check content originality"},
        {name: "QR Code Generator", link: "qr-code-generator.html", icon: "fa-qrcode", cat: "Global SEO", desc: "Create custom QR codes"},
        {name: "Backlink Checker", link: "backlink-checker.html", icon: "fa-link", cat: "Global SEO", desc: "Analyze backlinks"},
        {name: "Keyword Density", link: "keyword-density.html", icon: "fa-chart-pie", cat: "Global SEO", desc: "Analyze keyword density"},
        {name: "Website Speed Test", link: "website-speed-test.html", icon: "fa-tachometer-alt", cat: "Global SEO", desc: "Test page load time"},
        {name: "SSL Checker", link: "ssl-checker.html", icon: "fa-lock", cat: "Global SEO", desc: "Check SSL certificate"},
        {name: "AI Content Detector", link: "ai-content-detector.html", icon: "fa-robot", cat: "Global SEO", desc: "Detect AI-generated content"},
        {name: "PageSpeed Insights", link: "pagespeed-insights.html", icon: "fa-tachometer-alt", cat: "Global SEO", desc: "Google PageSpeed Insights"},
        {name: "Schema Markup", link: "schema-markup-generator.html", icon: "fa-code", cat: "Global SEO", desc: "JSON-LD structured data"},
        {name: "GSC Visualizer", link: "gsc-visualizer.html", icon: "fa-chart-line", cat: "Global SEO", desc: "Visualize GSC data"},
        {name: "Internal Link Suggester", link: "internal-link-suggester.html", icon: "fa-link", cat: "Global SEO", desc: "Smart internal linking"},
        {name: "Trending Keywords", link: "trending-keywords-finder.html", icon: "fa-fire", cat: "Global SEO", desc: "Find trending keywords"},
        {name: "Voice Search Optimizer", link: "voice-search-optimizer.html", icon: "fa-microphone", cat: "Global SEO", desc: "Optimize for voice search"},
        {name: "Website Crawler", link: "website-crawler.html", icon: "fa-spider", cat: "Global SEO", desc: "Crawl any website"}
    ];

    // Category display order
    const CAT_ORDER = ["Global SEO"];
    
    // Category icons mapping
    const CAT_ICONS = {
        "Global SEO": "fa-globe"
    };
    
    // Category colors for accent
    const CAT_COLORS = {
        "Global SEO": "#ff9933"
    };

    // 🌐 Get current language from URL
    function getCurrentLang() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang') || 'en';
    }

    // 🌐 Add language parameter to URL
    function addLangToUrl(url) {
        const lang = getCurrentLang();
        if (lang && lang !== 'en') {
            const separator = url.includes('?') ? '&' : '?';
            return url + separator + 'lang=' + lang;
        }
        return url;
    }

    // Build Navbar HTML
    const navbarHTML = `
    <nav class="navbar" itemscope itemtype="https://schema.org/SiteNavigationElement" aria-label="Main navigation">
        <div class="nav-container">
            <a href="${addLangToUrl('index.html')}" class="logo" itemprop="url" aria-label="Free SEO Tool Hub Home">
                <i class="fas fa-rocket" aria-hidden="true"></i> 
                <span itemprop="name" data-translate="brand">FreeSEOToolHub</span>
            </a>
            
            <button class="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mainNav">
                <span></span><span></span><span></span>
            </button>
            
            <div class="nav-links" id="mainNav" role="menubar">
                <a href="${addLangToUrl('index.html')}" class="nav-link active" itemprop="url" role="menuitem">
                    <i class="fas fa-home" aria-hidden="true"></i> <span itemprop="name" data-translate="home">Home</span>
                </a>
                
                <div class="mega-menu-container" role="menuitem">
                    <a href="${addLangToUrl('all-tools.html')}" class="nav-link mega-menu-btn" itemprop="url" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-th" aria-hidden="true"></i> <span itemprop="name" data-translate="allTools">All Tools</span> 
                        <i class="fas fa-chevron-down arrow-icon" aria-hidden="true"></i>
                    </a>
                    <div class="mega-menu" id="megaMenu" role="menu" aria-label="Tools mega menu"></div>
                </div>
                
                <a href="${addLangToUrl('blog/')}" class="nav-link" itemprop="url" role="menuitem">
                    <i class="fas fa-blog" aria-hidden="true"></i> <span itemprop="name" data-translate="blog">Blog</span>
                </a>
                <a href="${addLangToUrl('about.html')}" class="nav-link" itemprop="url" role="menuitem">
                    <i class="fas fa-info-circle" aria-hidden="true"></i> <span itemprop="name" data-translate="about">About</span>
                </a>
                <a href="${addLangToUrl('contact.html')}" class="nav-link" itemprop="url" role="menuitem">
                    <i class="fas fa-envelope" aria-hidden="true"></i> <span itemprop="name" data-translate="contact">Contact</span>
                </a>
                
                <!-- 🌐 Language Switcher in Navbar -->
                <div class="nav-lang-switcher" style="display:flex; align-items:center; gap:4px; margin-left:8px;">
                    <button onclick="switchLanguage('en')" class="nav-lang-btn" title="English" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem; transition:all 0.2s;">🇬🇧</button>
                    <button onclick="switchLanguage('hi')" class="nav-lang-btn" title="हिन्दी" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem; transition:all 0.2s;">🇮🇳</button>
                    <button onclick="switchLanguage('ur')" class="nav-lang-btn" title="اردو" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem; transition:all 0.2s;">🇵🇰</button>
                    <button onclick="switchLanguage('es')" class="nav-lang-btn" title="Español" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem; transition:all 0.2s;">🇪🇸</button>
                    <button onclick="switchLanguage('de')" class="nav-lang-btn" title="Deutsch" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem; transition:all 0.2s;">🇩🇪</button>
                </div>
            </div>
        </div>
    </nav>`;

    // Build CSS
    const navbarCSS = `
    <style>
    /* === NAVBAR CORE === */
    .navbar {
        background: linear-gradient(135deg, #0b1a33 0%, #1e2b4f 100%);
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
    
    /* Language buttons hover */
    .nav-lang-btn:hover {
        background: rgba(255,255,255,0.25) !important;
        transform: translateY(-1px);
    }
    
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
        width: 300px;
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
        grid-template-columns: 1fr;
        gap: 10px;
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
        background: linear-gradient(135deg, #ff9933, #e68a2e);
        color: #0b1a33 !important;
        padding: 12px 35px;
        border-radius: 50px;
        font-weight: 700;
        text-decoration: none;
        font-size: 0.95rem;
        transition: all 0.3s;
    }
    .all-tools-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(255,153,51,0.35);
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
            background: #0b1a33;
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
        .mega-menu-content { grid-template-columns: 1fr; gap: 8px; }
        .mega-menu-container:hover .mega-menu { display: none; }
        .mega-menu-container.active .mega-menu { display: block; }
        .nav-lang-switcher { 
            flex-wrap: wrap; 
            justify-content: center; 
            margin: 10px 0 !important;
            gap: 6px !important;
        }
        .nav-lang-btn { padding: 8px 12px !important; font-size: 0.9rem !important; }
    }
    @media (max-width: 480px) {
        .mega-menu-content { grid-template-columns: 1fr; }
        .logo { font-size: 1.1rem; }
    }
    </style>`;

    // Insert navbar into page
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.head.insertAdjacentHTML('beforeend', navbarCSS);

    // Generate mega menu with language-aware links
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
            const color = CAT_COLORS[cat] || '#ff9933';
            const icon = CAT_ICONS[cat] || 'fa-globe';
            
            html += `<div class="mega-menu-section">
                <h4 style="border-bottom-color:${color}; color:${color};">
                    <i class="fas ${icon}"></i> ${cat}
                </h4>`;
            
            tools.forEach(t => {
                // Add language parameter to each tool link
                const langUrl = addLangToUrl(t.link);
                html += `<a href="${langUrl}" title="${t.desc}" role="menuitem">
                    <i class="fas ${t.icon}" style="color:${color};"></i> ${t.name}
                </a>`;
            });
            
            html += '</div>';
        });
        
        // All tools button with language parameter
        const allToolsUrl = addLangToUrl('all-tools.html');
        html += `<div class="mega-menu-footer">
            <a href="${allToolsUrl}" class="all-tools-btn">
                <i class="fas fa-th-large"></i> View All ${TOOLS.length} Tools
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
            if (href && path.includes(href.replace('/','').split('?')[0]) && href !== 'index.html' && href !== '#') {
                link.classList.add('active');
            }
        });
        // Default home active
        if (path === '/' || path.endsWith('index.html')) {
            const homeLink = document.querySelector('.nav-link[href*="index.html"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    // Initialize everything
    buildMegaMenu();
    initMobile();
    setActiveLink();
    
    console.log('✅ FreeSEOToolHub Navbar Loaded | ' + TOOLS.length + ' Tools | 5 Languages | SEO Optimized 2026');
})();
