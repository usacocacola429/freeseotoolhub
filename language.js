// =============================================
// FreeSEOToolHub — Multi-Language System v3.0
// Updated: 2026 | Production Ready
// Supports: EN, HI, UR (RTL), DE, ES
// =============================================

(function() {
'use strict';

// ============================================================
// 📋 CONFIGURATION
// ============================================================
const CONFIG = {
  defaultLang: 'en',
  supportedLangs: ['en', 'hi', 'ur', 'de', 'es'],
  rtlLangs: ['ur'],
  storageKey: 'fstLang',
  sessionKey: 'fstLangSession',
  queryParam: 'lang',
  autoDetect: true
};

// ⚠️ SECURITY: Never expose API keys in client-side JS.
// If you need API keys, use a backend proxy.
// This is a placeholder — REMOVE before production.
const _API_KEY_PLACEHOLDER = 'USE_BACKEND_PROXY_INSTEAD';

// ============================================================
// 🌐 TRANSLATIONS
// ============================================================
const translations = {
  en: {
    // Navbar
    brand: 'Free SEO Tools Hub',
    home: 'Home',
    allTools: 'All Tools',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',
    language: 'Language',
    chooseLang: '🌐 Choose Your Language',

    // Hero
    heroHighlight: 'Free SEO',
    heroTools: 'Tools',
    heroSubtitle: '🌍 For Global Users',
    heroDesc: '15 essential free SEO tools: Meta Tag Generator, Plagiarism Checker, QR Code Generator, Backlink Checker, Keyword Density Checker, Website Speed Test, SSL Checker, AI Content Detector, PageSpeed Insights, Schema Markup Generator, GSC Visualizer, Internal Link Suggester, Trending Keywords Finder, Voice Search Optimizer, Website Crawler. All tools 100% free, no signup required, updated for 2026.',
    exploreAll: 'Explore All 15 Tools',
    browseCat: 'Browse Categories',
    quickGlobal: '🌍 Global SEO Tools',
    whyTitle: 'Why Choose Our Tools?',
    whyDesc: 'We provide 15 essential free SEO tools that are used by professionals worldwide. Every tool is 100% free and can be used instantly without any registration.',
    catGlobal: '🌍 Global Universal',
    catGlobalDesc: '15+ essential tools for worldwide users. Meta tags, plagiarism, QR codes, backlinks, SSL, speed test, AI detection, schema, GSC, internal links, trending keywords, voice search, crawler.',

    // Search
    searchPlaceholder: '🔍 Search 15 tools... (Meta, Plagiarism, QR, Backlink, SSL, Speed, AI, Schema, GSC, Internal Link, Trending, Voice, Crawler)...',
    noToolsFound: 'No Tools Found',
    tryDifferent: 'Try different keywords or browse by category below',

    // Global SEO
    globalBadge: '🌍 Global SEO',
    globalTitle: 'Essential Global SEO Tools',
    globalDesc: 'For Webmasters & SEOs Worldwide: Professional SEO tools that work universally. Meta tags, plagiarism checking, backlink analysis, SSL, speed test, AI detection, schema, GSC, internal links, trending keywords, voice search, website crawler.',
    viewAllGlobal: 'View All 15 Global SEO Tools →',

    // Tool Cards
    metaTitle: 'Meta Tag Generator',
    metaDesc: 'Generate SEO meta tags, Open Graph & Twitter Cards. 50K+ monthly searches.',
    plagiarismTitle: 'Plagiarism Checker',
    plagiarismDesc: 'Check content originality. 80K+ monthly searches. Essential for writers & students worldwide.',
    qrTitle: 'QR Code Generator',
    qrDesc: 'Create custom QR codes for URLs, text, WiFi, vCards & more.',
    backlinkTitle: 'Backlink Checker',
    backlinkDesc: "Analyze backlink profile. Find who's linking to any website. Competitor research tool.",
    keywordDensityTitle: 'Keyword Density Checker',
    keywordDensityDesc: 'Analyze keyword density & frequency on any page.',
    speedTestTitle: 'Website Speed Test',
    speedTestDesc: 'Test page load time & performance metrics.',
    sslTitle: 'SSL Checker',
    sslDesc: 'Check SSL certificate validity & expiration date.',
    aiDetectorTitle: 'AI Content Detector',
    aiDetectorDesc: 'Detect AI-generated content. ChatGPT, Gemini detection.',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'Google PageSpeed Insights analysis tool.',
    schemaTitle: 'Schema Markup Generator',
    schemaDesc: 'Create JSON-LD structured data for rich snippets.',
    gscVisualizerTitle: 'GSC Data Visualizer',
    gscVisualizerDesc: 'Visualize Google Search Console data with interactive charts.',
    internalLinkTitle: 'Internal Link Suggester',
    internalLinkDesc: 'Smart internal linking suggestions for SEO.',
    trendingKeywordsTitle: 'Trending Keywords Finder',
    trendingKeywordsDesc: 'Find trending keywords for global markets.',
    voiceSearchTitle: 'Voice Search Optimizer',
    voiceSearchDesc: 'Optimize content for Google Voice, Alexa & Siri.',
    crawlerTitle: 'Website Crawler',
    crawlerDesc: 'Crawl any website. Find all pages and SEO issues.',

    // CTA
    ctaTitle: '🚀 Ready to Explore All 15 Free SEO Tools?',
    ctaDesc: '15 Essential Tools. 100% Free. No Signup Required. Updated 2026.',
    browseAll: 'Browse All Categories',

    // Footer
    footerDesc: '15 essential free SEO tools for global SEO professionals. 100% free. Updated for 2026.',
    alsoAvailable: 'Also available in:',
    quickLinks: 'Quick Links',
    globalToolsFooter: 'Global SEO',
    popularTools: 'Popular Tools',
    copyright: '© 2026 FreeSEOToolHub.com | All Rights Reserved',
    privacy: 'Privacy Policy',
    madeIn: '🌍 Made for Global SEO Community | Updated 2026',

    // All Tools Page
    allToolsPageTitle: '15 Free SEO Tools 2026 | All Categories | FreeSEOToolHub',
    allToolsHeader: '🚀 All 15 Free SEO Tools (2026)',
    allToolsHeaderDesc: 'Complete collection of 15 essential free SEO tools. All tools 100% free, no signup required.',
    allToolsSearchPlaceholder: '🔍 Search all 15 tools...',
    filterAll: '📋 All Tools (15)',
    filterGlobal: '🌍 Global SEO (15)',
    filterHot: '🔥 Trending 2026',
    globalCatTitle: 'Global Tools - No Regional Limits',
    globalCatDesc: 'For Worldwide Users: These global SEO tools work universally — no regional restrictions.',
    metaTagTitle: 'Meta Tag Generator',
    metaTagDesc: 'Generate SEO meta tags, Open Graph & Twitter Cards. Updated 2026.',
    generateTags: 'Generate Tags',
    checkNow: 'Check Now',
    generateQR: 'Generate QR',
    checkBacklinks: 'Check Backlinks',
    checkDensity: 'Check Density',
    testSpeed: 'Test Speed',
    checkSSL: 'Check SSL',
    detectAI: 'Detect AI',
    runTest: 'Run Test',
    generateSchema: 'Generate Schema',
    visualizeGSC: 'Visualize GSC',
    getSuggestions: 'Get Suggestions',
    findTrends: 'Find Trends',
    optimizeVoice: 'Optimize Voice',
    startCrawl: 'Start Crawl',
    totalCountBadge: '15 Free SEO Tools | 100% Free | No Signup Required | Updated 2026',
    madeFor: '🌍 Made for Global SEO Community | Updated 2026'
  },

  hi: {
    brand: 'फ्री SEO टूल्स हब',
    home: 'होम',
    allTools: 'सभी टूल्स',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    blog: 'ब्लॉग',
    language: 'भाषा',
    chooseLang: '🌐 अपनी भाषा चुनें',
    heroHighlight: 'फ्री SEO',
    heroTools: 'टूल्स',
    heroSubtitle: '🌍 ग्लोबल यूज़र्स के लिए',
    heroDesc: '15 ज़रूरी फ्री SEO टूल्स: मेटा टैग जनरेटर, प्लेजरिज़्म चेकर, QR कोड जनरेटर, बैकलिंक चेकर, कीवर्ड डेंसिटी चेकर, वेबसाइट स्पीड टेस्ट, SSL चेकर, AI कंटेंट डिटेक्टर, PageSpeed Insights, स्कीमा मार्कअप जनरेटर, GSC विज़ुअलाइज़र, इंटरनल लिंक सजेस्टर, ट्रेंडिंग कीवर्ड्स फाइंडर, वॉइस सर्च ऑप्टिमाइज़र, वेबसाइट क्रॉलर। सब 100% फ्री, कोई साइनअप नहीं, 2026 अपडेटेड।',
    exploreAll: 'सभी 15 टूल्स एक्सप्लोर करें',
    browseCat: 'कैटेगरी ब्राउज़ करें',
    quickGlobal: '🌍 ग्लोबल SEO टूल्स',
    whyTitle: 'हमारे टूल्स क्यों चुनें?',
    whyDesc: 'हम 15 ज़रूरी SEO टूल्स देते हैं जो दुनिया भर में सबसे ज्यादा इस्तेमाल होते हैं।',
    catGlobal: '🌍 ग्लोबल यूनिवर्सल',
    catGlobalDesc: '15+ टूल्स। मेटा टैग्स, प्लेजरिज़्म, QR कोड, बैकलिंक, SSL, स्पीड टेस्ट, AI डिटेक्टर, स्कीमा, GSC, इंटरनल लिंक, ट्रेंडिंग कीवर्ड्स, वॉइस सर्च, क्रॉलर।',
    searchPlaceholder: '🔍 15 टूल्स खोजें...',
    noToolsFound: 'कोई टूल नहीं मिला',
    tryDifferent: 'दूसरे कीवर्ड से खोजें',
    globalBadge: '🌍 ग्लोबल SEO',
    globalTitle: 'ज़रूरी ग्लोबल SEO टूल्स',
    globalDesc: 'दुनियाभर के वेबमास्टर्स के लिए।',
    viewAllGlobal: 'सभी 15 ग्लोबल SEO टूल्स देखें →',
    metaTitle: 'मेटा टैग जनरेटर',
    metaDesc: 'SEO मेटा टैग्स, Open Graph और Twitter Cards जनरेट करें।',
    plagiarismTitle: 'प्लेजरिज़्म चेकर',
    plagiarismDesc: 'कंटेंट ओरिजिनलिटी चेक करें।',
    qrTitle: 'QR कोड जनरेटर',
    qrDesc: 'URLs, टेक्स्ट, WiFi के लिए QR कोड बनाएं।',
    backlinkTitle: 'बैकलिंक चेकर',
    backlinkDesc: 'बैकलिंक प्रोफाइल एनालाइज़ करें।',
    keywordDensityTitle: 'कीवर्ड डेंसिटी चेकर',
    keywordDensityDesc: 'कीवर्ड डेंसिटी एनालाइज़ करें।',
    speedTestTitle: 'वेबसाइट स्पीड टेस्ट',
    speedTestDesc: 'पेज लोड टाइम टेस्ट करें।',
    sslTitle: 'SSL चेकर',
    sslDesc: 'SSL सर्टिफिकेट चेक करें।',
    aiDetectorTitle: 'AI कंटेंट डिटेक्टर',
    aiDetectorDesc: 'AI-जनरेटेड कंटेंट डिटेक्ट करें।',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'Google PageSpeed Insights एनालिसिस।',
    schemaTitle: 'स्कीमा मार्कअप जनरेटर',
    schemaDesc: 'रिच स्निपेट्स के लिए JSON-LD बनाएं।',
    gscVisualizerTitle: 'GSC डेटा विज़ुअलाइज़र',
    gscVisualizerDesc: 'GSC डेटा चार्ट्स में देखें।',
    internalLinkTitle: 'इंटरनल लिंक सजेस्टर',
    internalLinkDesc: 'स्मार्ट इंटरनल लिंकिंग सुझाव।',
    trendingKeywordsTitle: 'ट्रेंडिंग कीवर्ड्स फाइंडर',
    trendingKeywordsDesc: 'ट्रेंडिंग कीवर्ड खोजें।',
    voiceSearchTitle: 'वॉइस सर्च ऑप्टिमाइज़र',
    voiceSearchDesc: 'Google Voice, Alexa, Siri के लिए ऑप्टिमाइज़ करें।',
    crawlerTitle: 'वेबसाइट क्रॉलर',
    crawlerDesc: 'किसी भी वेबसाइट को क्रॉल करें।',
    ctaTitle: 'सभी 15 फ्री SEO टूल्स एक्सप्लोर करें',
    ctaDesc: '15 टूल्स। 100% फ्री। 2026 अपडेटेड।',
    browseAll: 'सभी कैटेगरी ब्राउज़ करें',
    footerDesc: 'ग्लोबल SEO प्रोफेशनल्स के लिए 15 फ्री SEO टूल्स।',
    alsoAvailable: 'यह भी उपलब्ध:',
    quickLinks: 'क्विक लिंक्स',
    globalToolsFooter: 'ग्लोबल SEO',
    popularTools: 'लोकप्रिय टूल्स',
    copyright: '© 2026 FreeSEOToolHub.com | सर्वाधिकार सुरक्षित',
    privacy: 'प्राइवेसी पॉलिसी',
    madeIn: '🌍 ग्लोबल SEO समुदाय के लिए | 2026',
    allToolsPageTitle: '15 फ्री SEO टूल्स 2026',
    allToolsHeader: '🚀 सभी 15 फ्री SEO टूल्स (2026)',
    allToolsHeaderDesc: '15 ज़रूरी फ्री SEO टूल्स।',
    allToolsSearchPlaceholder: '🔍 15 टूल्स खोजें...',
    filterAll: '📋 सभी (15)',
    filterGlobal: '🌍 ग्लोबल (15)',
    filterHot: '🔥 ट्रेंडिंग 2026',
    globalCatTitle: 'ग्लोबल टूल्स',
    globalCatDesc: 'दुनियाभर के यूज़र्स के लिए।',
    metaTagTitle: 'मेटा टैग जनरेटर',
    metaTagDesc: 'SEO मेटा टैग्स जनरेट करें।',
    generateTags: 'टैग्स जनरेट करें',
    checkNow: 'अभी चेक करें',
    generateQR: 'QR जनरेट करें',
    checkBacklinks: 'बैकलिंक चेक करें',
    checkDensity: 'डेंसिटी चेक करें',
    testSpeed: 'स्पीड टेस्ट करें',
    checkSSL: 'SSL चेक करें',
    detectAI: 'AI डिटेक्ट करें',
    runTest: 'टेस्ट चलाएं',
    generateSchema: 'स्कीमा जनरेट करें',
    visualizeGSC: 'GSC विज़ुअलाइज़ करें',
    getSuggestions: 'सुझाव लें',
    findTrends: 'ट्रेंड खोजें',
    optimizeVoice: 'वॉइस ऑप्टिमाइज़ करें',
    startCrawl: 'क्रॉल शुरू करें',
    totalCountBadge: '15 फ्री SEO टूल्स | 100% फ्री | 2026',
    madeFor: '🌍 ग्लोबल SEO समुदाय के लिए | 2026'
  },

  ur: {
    brand: 'مفت SEO ٹولز ہب',
    home: 'ہوم',
    allTools: 'تمام ٹولز',
    about: 'ہمارے بارے میں',
    contact: 'رابطہ',
    blog: 'بلاگ',
    language: 'زبان',
    chooseLang: '🌐 اپنی زبان منتخب کریں',
    heroHighlight: 'مفت SEO',
    heroTools: 'ٹولز',
    heroSubtitle: '🌍 عالمی صارفین کے لیے',
    heroDesc: '15 ضروری مفت SEO ٹولز: میٹا ٹیگ جنریٹر، پلیجرزم چیکر، QR کوڈ جنریٹر، بیک لنک چیکر، کیورڈ ڈینسٹی چیکر، ویب سائٹ سپیڈ ٹیسٹ، SSL چیکر، AI کنٹینٹ ڈیٹیکٹر، PageSpeed Insights، اسکیما مارک اپ جنریٹر، GSC ویژولائزر، انٹرنل لنک سجیسٹر، ٹرینڈنگ کیورڈز فائنڈر، وائس سرچ آپٹیمائزر، ویب سائٹ کرالر۔',
    exploreAll: 'تمام 15 ٹولز دریافت کریں',
    browseCat: 'کیٹگریز براؤز کریں',
    quickGlobal: '🌍 عالمی SEO ٹولز',
    whyTitle: 'ہمارے ٹولز کیوں منتخب کریں؟',
    whyDesc: 'ہم 15 ضروری SEO ٹولز فراہم کرتے ہیں۔',
    catGlobal: '🌍 عالمی یونیورسل',
    catGlobalDesc: '15+ ٹولز۔',
    searchPlaceholder: '🔍 ٹولز تلاش کریں...',
    noToolsFound: 'کوئی ٹول نہیں ملا',
    tryDifferent: 'دوسرے الفاظ سے تلاش کریں',
    globalBadge: '🌍 عالمی SEO',
    globalTitle: 'ضروری عالمی SEO ٹولز',
    globalDesc: 'دنیا بھر کے ویب ماسٹرز کے لیے۔',
    viewAllGlobal: 'تمام 15 ٹولز دیکھیں →',
    metaTitle: 'میٹا ٹیگ جنریٹر',
    metaDesc: 'SEO میٹا ٹیگز بنائیں۔',
    plagiarismTitle: 'پلیجرزم چیکر',
    plagiarismDesc: 'مواد کی اصلیت چیک کریں۔',
    qrTitle: 'QR کوڈ جنریٹر',
    qrDesc: 'QR کوڈ بنائیں۔',
    backlinkTitle: 'بیک لنک چیکر',
    backlinkDesc: 'بیک لنک پروفائل تجزیہ کریں۔',
    keywordDensityTitle: 'کیورڈ ڈینسٹی چیکر',
    keywordDensityDesc: 'کیورڈ ڈینسٹی کا تجزیہ کریں۔',
    speedTestTitle: 'ویب سائٹ سپیڈ ٹیسٹ',
    speedTestDesc: 'پیج لوڈ ٹائم ٹیسٹ کریں۔',
    sslTitle: 'SSL چیکر',
    sslDesc: 'SSL سرٹیفکیٹ چیک کریں۔',
    aiDetectorTitle: 'AI کنٹینٹ ڈیٹیکٹر',
    aiDetectorDesc: 'AI کنٹینٹ ڈیٹیکٹ کریں۔',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'PageSpeed تجزیہ۔',
    schemaTitle: 'اسکیما جنریٹر',
    schemaDesc: 'JSON-LD ڈیٹا بنائیں۔',
    gscVisualizerTitle: 'GSC ویژولائزر',
    gscVisualizerDesc: 'GSC ڈیٹا دیکھیں۔',
    internalLinkTitle: 'انٹرنل لنک سجیسٹر',
    internalLinkDesc: 'سمارٹ انٹرنل لنکنگ۔',
    trendingKeywordsTitle: 'ٹرینڈنگ کیورڈز',
    trendingKeywordsDesc: 'ٹرینڈنگ کیورڈز ڈھونڈیں۔',
    voiceSearchTitle: 'وائس سرچ آپٹیمائزر',
    voiceSearchDesc: 'وائس سرچ کے لیے آپٹیمائز کریں۔',
    crawlerTitle: 'ویب سائٹ کرالر',
    crawlerDesc: 'ویب سائٹ کرال کریں۔',
    ctaTitle: 'تمام 15 ٹولز دریافت کریں',
    ctaDesc: '15 ٹولز۔ 100% مفت۔',
    browseAll: 'کیٹگریز براؤز کریں',
    footerDesc: 'عالمی SEO کے لیے 15 مفت ٹولز۔',
    alsoAvailable: 'یہ بھی دستیاب:',
    quickLinks: 'فوری لنکس',
    globalToolsFooter: 'عالمی SEO',
    popularTools: 'مقبول ٹولز',
    copyright: '© 2026 FreeSEOToolHub.com',
    privacy: 'پرائیویسی',
    madeIn: '🌍 عالمی SEO کمیونٹی کے لیے | 2026',
    allToolsPageTitle: '15 مفت SEO ٹولز 2026',
    allToolsHeader: '🚀 تمام 15 ٹولز (2026)',
    allToolsHeaderDesc: '15 ضروری ٹولز۔',
    allToolsSearchPlaceholder: '🔍 ٹولز تلاش کریں...',
    filterAll: '📋 تمام (15)',
    filterGlobal: '🌍 عالمی (15)',
    filterHot: '🔥 ٹرینڈنگ 2026',
    globalCatTitle: 'عالمی ٹولز',
    globalCatDesc: 'دنیا بھر کے صارفین کے لیے۔',
    metaTagTitle: 'میٹا ٹیگ جنریٹر',
    metaTagDesc: 'SEO میٹا ٹیگز بنائیں۔',
    generateTags: 'ٹیگز بنائیں',
    checkNow: 'ابھی چیک کریں',
    generateQR: 'QR بنائیں',
    checkBacklinks: 'بیک لنک چیک کریں',
    checkDensity: 'کثافت چیک کریں',
    testSpeed: 'سپیڈ ٹیسٹ کریں',
    checkSSL: 'SSL چیک کریں',
    detectAI: 'AI ڈیٹیکٹ کریں',
    runTest: 'ٹیسٹ چلائیں',
    generateSchema: 'اسکیما بنائیں',
    visualizeGSC: 'GSC دیکھیں',
    getSuggestions: 'تجاویز لیں',
    findTrends: 'ٹرینڈ ڈھونڈیں',
    optimizeVoice: 'وائس آپٹیمائز کریں',
    startCrawl: 'کرال شروع کریں',
    totalCountBadge: '15 مفت SEO ٹولز | 2026',
    madeFor: '🌍 عالمی SEO کمیونٹی | 2026'
  },

  de: {
    brand: 'Kostenlose SEO-Tools Hub',
    home: 'Startseite',
    allTools: 'Alle Tools',
    about: 'Über uns',
    contact: 'Kontakt',
    blog: 'Blog',
    language: 'Sprache',
    chooseLang: '🌐 Wählen Sie Ihre Sprache',
    heroHighlight: 'Kostenlose SEO',
    heroTools: 'Tools',
    heroSubtitle: '🌍 Für globale Nutzer',
    heroDesc: '15 essentielle kostenlose SEO-Tools: Meta-Tag-Generator, Plagiatsprüfung, QR-Code-Generator, Backlink-Checker, Keyword-Dichte-Checker, Website-Geschwindigkeitstest, SSL-Checker, KI-Content-Detektor, PageSpeed Insights, Schema-Markup-Generator, GSC-Visualizer, Internal-Link-Vorschlag, Trend-Keyword-Finder, Voice-Search-Optimierer, Website-Crawler.',
    exploreAll: 'Alle 15 Tools erkunden',
    browseCat: 'Kategorien durchsuchen',
    quickGlobal: '🌍 Globale SEO Tools',
    whyTitle: 'Warum unsere Tools?',
    whyDesc: 'Wir bieten 15 essentielle SEO-Tools.',
    catGlobal: '🌍 Global Universal',
    catGlobalDesc: '15+ Tools. Meta-Tags, Plagiat, QR, Backlinks, SSL, Geschwindigkeit, KI, Schema, GSC, Internal Links, Trends, Voice, Crawler.',
    searchPlaceholder: '🔍 15 Tools durchsuchen...',
    noToolsFound: 'Keine Tools gefunden',
    tryDifferent: 'Andere Keywords versuchen',
    globalBadge: '🌍 Globale SEO',
    globalTitle: 'Essentielle SEO-Tools',
    globalDesc: 'Für Webmaster weltweit.',
    viewAllGlobal: 'Alle 15 Tools →',
    metaTitle: 'Meta-Tag Generator',
    metaDesc: 'SEO Meta-Tags generieren.',
    plagiarismTitle: 'Plagiatsprüfung',
    plagiarismDesc: 'Inhaltsoriginalität prüfen.',
    qrTitle: 'QR-Code Generator',
    qrDesc: 'QR-Codes erstellen.',
    backlinkTitle: 'Backlink Checker',
    backlinkDesc: 'Backlink-Profil analysieren.',
    keywordDensityTitle: 'Keyword-Dichte',
    keywordDensityDesc: 'Keyword-Dichte analysieren.',
    speedTestTitle: 'Geschwindigkeitstest',
    speedTestDesc: 'Ladezeit testen.',
    sslTitle: 'SSL-Checker',
    sslDesc: 'SSL-Zertifikat prüfen.',
    aiDetectorTitle: 'KI-Content-Detektor',
    aiDetectorDesc: 'KI-Content erkennen.',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'PageSpeed-Analyse.',
    schemaTitle: 'Schema-Generator',
    schemaDesc: 'JSON-LD für Rich Snippets.',
    gscVisualizerTitle: 'GSC-Visualizer',
    gscVisualizerDesc: 'GSC-Daten visualisieren.',
    internalLinkTitle: 'Internal-Link-Vorschlag',
    internalLinkDesc: 'Intelligente interne Verlinkung.',
    trendingKeywordsTitle: 'Trend-Keyword-Finder',
    trendingKeywordsDesc: 'Trending Keywords.',
    voiceSearchTitle: 'Voice-Optimierer',
    voiceSearchDesc: 'Für Voice Search optimieren.',
    crawlerTitle: 'Website-Crawler',
    crawlerDesc: 'Website crawlen.',
    ctaTitle: 'Alle 15 Tools erkunden',
    ctaDesc: '15 Tools. 100% Kostenlos.',
    browseAll: 'Alle Kategorien →',
    footerDesc: '15 essentielle SEO-Tools.',
    alsoAvailable: 'Auch verfügbar in:',
    quickLinks: 'Quick Links',
    globalToolsFooter: 'Globale SEO',
    popularTools: 'Beliebte Tools',
    copyright: '© 2026 FreeSEOToolHub.com',
    privacy: 'Datenschutz',
    madeIn: '🌍 Für die globale SEO-Community | 2026',
    allToolsPageTitle: '15 Kostenlose SEO-Tools 2026',
    allToolsHeader: '🚀 Alle 15 Tools (2026)',
    allToolsHeaderDesc: '15 essentielle SEO-Tools.',
    allToolsSearchPlaceholder: '🔍 15 Tools durchsuchen...',
    filterAll: '📋 Alle (15)',
    filterGlobal: '🌍 Globale SEO (15)',
    filterHot: '🔥 Trending 2026',
    globalCatTitle: 'Globale Tools',
    globalCatDesc: 'Für Nutzer weltweit.',
    metaTagTitle: 'Meta-Tag Generator',
    metaTagDesc: 'SEO Meta-Tags generieren.',
    generateTags: 'Tags generieren',
    checkNow: 'Jetzt prüfen',
    generateQR: 'QR generieren',
    checkBacklinks: 'Backlinks prüfen',
    checkDensity: 'Dichte prüfen',
    testSpeed: 'Geschwindigkeit testen',
    checkSSL: 'SSL prüfen',
    detectAI: 'KI erkennen',
    runTest: 'Test starten',
    generateSchema: 'Schema generieren',
    visualizeGSC: 'GSC visualisieren',
    getSuggestions: 'Vorschläge',
    findTrends: 'Trends finden',
    optimizeVoice: 'Voice optimieren',
    startCrawl: 'Crawlen starten',
    totalCountBadge: '15 Tools | 100% Kostenlos | 2026',
    madeFor: '🌍 Für die globale SEO-Community | 2026'
  },

  es: {
    brand: 'Herramientas SEO Gratis Hub',
    home: 'Inicio',
    allTools: 'Todas',
    about: 'Acerca de',
    contact: 'Contacto',
    blog: 'Blog',
    language: 'Idioma',
    chooseLang: '🌐 Elige tu idioma',
    heroHighlight: 'SEO Gratis',
    heroTools: 'Herramientas',
    heroSubtitle: '🌍 Para usuarios globales',
    heroDesc: '15 herramientas SEO gratuitas esenciales: Generador de Meta Tags, Detector de Plagio, Generador de QR, Verificador de Backlinks, Verificador de Densidad de Keywords, Test de Velocidad, Verificador SSL, Detector de IA, PageSpeed Insights, Generador de Schema, Visualizador GSC, Sugeridor de Enlaces Internos, Buscador de Keywords Tendencias, Optimizador de Búsqueda por Voz, Rastreador Web.',
    exploreAll: 'Explorar 15 Herramientas',
    browseCat: 'Ver Categorías',
    quickGlobal: '🌍 SEO Global',
    whyTitle: '¿Por qué elegirnos?',
    whyDesc: 'Ofrecemos 15 herramientas SEO esenciales.',
    catGlobal: '🌍 Global Universal',
    catGlobalDesc: '15+ herramientas. Meta tags, plagio, QR, backlinks, SSL, velocidad, IA, schema, GSC, enlaces internos, tendencias, voz, rastreador.',
    searchPlaceholder: '🔍 Buscar 15 herramientas...',
    noToolsFound: 'Sin resultados',
    tryDifferent: 'Prueba otras palabras',
    globalBadge: '🌍 SEO Global',
    globalTitle: 'Herramientas SEO Esenciales',
    globalDesc: 'Para webmasters mundiales.',
    viewAllGlobal: 'Ver 15 Herramientas →',
    metaTitle: 'Generador Meta Tags',
    metaDesc: 'Generar meta tags SEO.',
    plagiarismTitle: 'Detector de Plagio',
    plagiarismDesc: 'Verificar originalidad.',
    qrTitle: 'Generador QR',
    qrDesc: 'Crear códigos QR.',
    backlinkTitle: 'Verificador Backlinks',
    backlinkDesc: 'Analizar backlinks.',
    keywordDensityTitle: 'Verificador Densidad',
    keywordDensityDesc: 'Analizar densidad.',
    speedTestTitle: 'Test de Velocidad',
    speedTestDesc: 'Probar velocidad.',
    sslTitle: 'Verificador SSL',
    sslDesc: 'Verificar SSL.',
    aiDetectorTitle: 'Detector de IA',
    aiDetectorDesc: 'Detectar contenido IA.',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'Análisis PageSpeed.',
    schemaTitle: 'Generador Schema',
    schemaDesc: 'JSON-LD para rich snippets.',
    gscVisualizerTitle: 'Visualizador GSC',
    gscVisualizerDesc: 'Visualizar datos GSC.',
    internalLinkTitle: 'Sugeridor Links',
    internalLinkDesc: 'Enlaces internos inteligentes.',
    trendingKeywordsTitle: 'Buscador Tendencias',
    trendingKeywordsDesc: 'Keywords tendencia.',
    voiceSearchTitle: 'Optimizador de Voz',
    voiceSearchDesc: 'Optimizar para voz.',
    crawlerTitle: 'Rastreador Web',
    crawlerDesc: 'Rastrear sitios web.',
    ctaTitle: 'Explorar 15 Herramientas SEO',
    ctaDesc: '15 Herramientas. 100% Gratis.',
    browseAll: 'Ver Categorías →',
    footerDesc: '15 herramientas SEO esenciales.',
    alsoAvailable: 'También disponible en:',
    quickLinks: 'Enlaces',
    globalToolsFooter: 'SEO Global',
    popularTools: 'Populares',
    copyright: '© 2026 FreeSEOToolHub.com',
    privacy: 'Privacidad',
    madeIn: '🌍 Para la comunidad SEO global | 2026',
    allToolsPageTitle: '15 Herramientas SEO Gratis 2026',
    allToolsHeader: '🚀 Todas las 15 Herramientas (2026)',
    allToolsHeaderDesc: '15 herramientas SEO esenciales.',
    allToolsSearchPlaceholder: '🔍 Buscar 15 herramientas...',
    filterAll: '📋 Todas (15)',
    filterGlobal: '🌍 SEO Global (15)',
    filterHot: '🔥 Tendencia 2026',
    globalCatTitle: 'Herramientas Globales',
    globalCatDesc: 'Para usuarios de todo el mundo.',
    metaTagTitle: 'Generador Meta Tags',
    metaTagDesc: 'Generar meta tags SEO.',
    generateTags: 'Generar Tags',
    checkNow: 'Verificar',
    generateQR: 'Generar QR',
    checkBacklinks: 'Verificar Backlinks',
    checkDensity: 'Verificar Densidad',
    testSpeed: 'Probar Velocidad',
    checkSSL: 'Verificar SSL',
    detectAI: 'Detectar IA',
    runTest: 'Ejecutar Prueba',
    generateSchema: 'Generar Schema',
    visualizeGSC: 'Visualizar GSC',
    getSuggestions: 'Obtener Sugerencias',
    findTrends: 'Encontrar Tendencias',
    optimizeVoice: 'Optimizar Voz',
    startCrawl: 'Iniciar Rastreo',
    totalCountBadge: '15 Herramientas | 100% Gratis | 2026',
    madeFor: '🌍 Para la comunidad SEO global | 2026'
  }
};

// ============================================================
// 🔧 UTILITY FUNCTIONS
// ============================================================
function detectBrowserLang() {
  const nav = navigator.language || navigator.userLanguage || 'en';
  const short = nav.split('-')[0].toLowerCase();
  return CONFIG.supportedLangs.includes(short) ? short : CONFIG.defaultLang;
}

function getUrlLang() {
  try {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get(CONFIG.queryParam);
    return CONFIG.supportedLangs.includes(lang) ? lang : null;
  } catch(e) {
    return null;
  }
}

function getStoredLang() {
  try {
    return localStorage.getItem(CONFIG.storageKey);
  } catch(e) { return null; }
}

function getCurrentLang() {
  return getUrlLang() || getStoredLang() || (CONFIG.autoDetect ? detectBrowserLang() : null) || CONFIG.defaultLang;
}

function isRTL(lang) {
  return CONFIG.rtlLangs.includes(lang);
}

// ============================================================
// 🌐 APPLY LANGUAGE
// ============================================================
function applyLanguage(lang) {
  if (!CONFIG.supportedLangs.includes(lang)) lang = CONFIG.defaultLang;
  const t = translations[lang];
  if (!t) {
    console.warn('Translation missing for language:', lang);
    return;
  }

  // 1. Set <html lang> and <html dir>
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';

  // 2. Apply data-translate text
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    // Fallback to English if missing
    const value = t[key] || translations.en[key];
    if (value === undefined) {
      console.warn('Missing translation:', lang, key);
      return;
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) el.placeholder = value;
      else if (el.hasAttribute('value')) el.value = value;
    } else if (el.hasAttribute('title')) {
      el.title = value;
    } else if (el.hasAttribute('aria-label')) {
      el.setAttribute('aria-label', value);
    } else {
      el.textContent = value;
    }
  });

  // 3. Apply data-translate-html for innerHTML
  document.querySelectorAll('[data-translate-html]').forEach(el => {
    const key = el.getAttribute('data-translate-html');
    const value = t[key] || translations.en[key];
    if (value !== undefined) el.innerHTML = value;
  });

  // 4. Update page title (only if page-specific key exists)
  const pageTitleKey = document.body.getAttribute('data-page-title-key');
  if (pageTitleKey && (t[pageTitleKey] || translations.en[pageTitleKey])) {
    document.title = t[pageTitleKey] || translations.en[pageTitleKey];
  }

  // 5. Update meta description (only if key exists)
  const metaDescKey = document.body.getAttribute('data-meta-desc-key');
  if (metaDescKey && (t[metaDescKey] || translations.en[metaDescKey])) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t[metaDescKey] || translations.en[metaDescKey]);
  }

  // 6. Update hreflang links (SEO)
  updateHreflangLinks(lang);

  // 7. Save preference
  try {
    localStorage.setItem(CONFIG.storageKey, lang);
  } catch(e) {}

  // 8. Emit event for other scripts to listen
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// ============================================================
// 🔗 UPDATE HREFLANG (SEO)
// ============================================================
function updateHreflangLinks(currentLang) {
  // Remove existing dynamic hreflang links
  document.querySelectorAll('link[rel="alternate"][data-dynamic-hreflang]').forEach(el => el.remove());

  const baseUrl = window.location.origin + window.location.pathname;
  const head = document.head;

  CONFIG.supportedLangs.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = lang === CONFIG.defaultLang ? baseUrl : `${baseUrl}?lang=${lang}`;
    link.setAttribute('data-dynamic-hreflang', 'true');
    head.appendChild(link);
  });

  // x-default
  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.hreflang = 'x-default';
  xDefault.href = baseUrl;
  xDefault.setAttribute('data-dynamic-hreflang', 'true');
  head.appendChild(xDefault);
}

// ============================================================
// 🔄 SWITCH LANGUAGE (Preserves current path + query)
// ============================================================
function switchLanguage(lang) {
  if (!CONFIG.supportedLangs.includes(lang)) lang = CONFIG.defaultLang;
  const url = new URL(window.location.href);
  if (lang === CONFIG.defaultLang) {
    url.searchParams.delete(CONFIG.queryParam);
  } else {
    url.searchParams.set(CONFIG.queryParam, lang);
  }
  window.location.href = url.toString();
}

// ============================================================
// 🔗 ADD LANG PARAM TO INTERNAL LINKS
// ============================================================
function addLangToInternalLinks(lang) {
  if (lang === CONFIG.defaultLang) return;
  document.querySelectorAll('a[href]').forEach(link => {
    try {
      const url = new URL(link.getAttribute('href'), window.location.origin);
      if (url.hostname !== window.location.hostname) return;
      if (link.hasAttribute('data-no-lang')) return;
      if (link.getAttribute('href').startsWith('#')) return;
      if (link.getAttribute('href').startsWith('mailto:')) return;
      if (link.getAttribute('href').startsWith('tel:')) return;

      url.searchParams.set(CONFIG.queryParam, lang);
      link.setAttribute('href', url.pathname + url.search + url.hash);
    } catch(e) {}
  });
}

// ============================================================
// 🎬 INIT
// ============================================================
function init() {
  const lang = getCurrentLang();

  // Update URL if browser language detected and no URL param
  if (!getUrlLang() && lang !== CONFIG.defaultLang) {
    const url = new URL(window.location.href);
    url.searchParams.set(CONFIG.queryParam, lang);
    history.replaceState({}, '', url.toString());
  }

  applyLanguage(lang);
  addLangToInternalLinks(lang);

  // Also handle dynamic content via MutationObserver (for lazy-loaded content)
  const observer = new MutationObserver(mutations => {
    let hasNewLinks = false;
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.tagName === 'A' || node.querySelector?.('a[href]')) hasNewLinks = true;
        }
      });
    });
    if (hasNewLinks && lang !== CONFIG.defaultLang) {
      addLangToInternalLinks(lang);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Start when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================================
// 🌍 PUBLIC API
// ============================================================
window.FSTLang = {
  getCurrent: getCurrentLang,
  switch: switchLanguage,
  apply: applyLanguage,
  getTranslation: (key, lang) => {
    const l = lang || getCurrentLang();
    return translations[l]?.[key] || translations.en[key] || key;
  },
  supported: CONFIG.supportedLangs,
  isRTL: isRTL,
  translations: translations
};

})();// =============================================
// FreeSEOToolHub — Multi-Language System v3.0
// Updated: 2026 | Production Ready
// Supports: EN, HI, UR (RTL), DE, ES
// =============================================

(function() {
'use strict';

// ============================================================
// 📋 CONFIGURATION
// ============================================================
const CONFIG = {
  defaultLang: 'en',
  supportedLangs: ['en', 'hi', 'ur', 'de', 'es'],
  rtlLangs: ['ur'],
  storageKey: 'fstLang',
  sessionKey: 'fstLangSession',
  queryParam: 'lang',
  autoDetect: true
};

// ⚠️ SECURITY: Never expose API keys in client-side JS.
// If you need API keys, use a backend proxy.
// This is a placeholder — REMOVE before production.
const _API_KEY_PLACEHOLDER = 'USE_BACKEND_PROXY_INSTEAD';

// ============================================================
// 🌐 TRANSLATIONS
// ============================================================
const translations = {
  en: {
    // Navbar
    brand: 'Free SEO Tools Hub',
    home: 'Home',
    allTools: 'All Tools',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',
    language: 'Language',
    chooseLang: '🌐 Choose Your Language',

    // Hero
    heroHighlight: 'Free SEO',
    heroTools: 'Tools',
    heroSubtitle: '🌍 For Global Users',
    heroDesc: '15 essential free SEO tools: Meta Tag Generator, Plagiarism Checker, QR Code Generator, Backlink Checker, Keyword Density Checker, Website Speed Test, SSL Checker, AI Content Detector, PageSpeed Insights, Schema Markup Generator, GSC Visualizer, Internal Link Suggester, Trending Keywords Finder, Voice Search Optimizer, Website Crawler. All tools 100% free, no signup required, updated for 2026.',
    exploreAll: 'Explore All 15 Tools',
    browseCat: 'Browse Categories',
    quickGlobal: '🌍 Global SEO Tools',
    whyTitle: 'Why Choose Our Tools?',
    whyDesc: 'We provide 15 essential free SEO tools that are used by professionals worldwide. Every tool is 100% free and can be used instantly without any registration.',
    catGlobal: '🌍 Global Universal',
    catGlobalDesc: '15+ essential tools for worldwide users. Meta tags, plagiarism, QR codes, backlinks, SSL, speed test, AI detection, schema, GSC, internal links, trending keywords, voice search, crawler.',

    // Search
    searchPlaceholder: '🔍 Search 15 tools... (Meta, Plagiarism, QR, Backlink, SSL, Speed, AI, Schema, GSC, Internal Link, Trending, Voice, Crawler)...',
    noToolsFound: 'No Tools Found',
    tryDifferent: 'Try different keywords or browse by category below',

    // Global SEO
    globalBadge: '🌍 Global SEO',
    globalTitle: 'Essential Global SEO Tools',
    globalDesc: 'For Webmasters & SEOs Worldwide: Professional SEO tools that work universally. Meta tags, plagiarism checking, backlink analysis, SSL, speed test, AI detection, schema, GSC, internal links, trending keywords, voice search, website crawler.',
    viewAllGlobal: 'View All 15 Global SEO Tools →',

    // Tool Cards
    metaTitle: 'Meta Tag Generator',
    metaDesc: 'Generate SEO meta tags, Open Graph & Twitter Cards. 50K+ monthly searches.',
    plagiarismTitle: 'Plagiarism Checker',
    plagiarismDesc: 'Check content originality. 80K+ monthly searches. Essential for writers & students worldwide.',
    qrTitle: 'QR Code Generator',
    qrDesc: 'Create custom QR codes for URLs, text, WiFi, vCards & more.',
    backlinkTitle: 'Backlink Checker',
    backlinkDesc: "Analyze backlink profile. Find who's linking to any website. Competitor research tool.",
    keywordDensityTitle: 'Keyword Density Checker',
    keywordDensityDesc: 'Analyze keyword density & frequency on any page.',
    speedTestTitle: 'Website Speed Test',
    speedTestDesc: 'Test page load time & performance metrics.',
    sslTitle: 'SSL Checker',
    sslDesc: 'Check SSL certificate validity & expiration date.',
    aiDetectorTitle: 'AI Content Detector',
    aiDetectorDesc: 'Detect AI-generated content. ChatGPT, Gemini detection.',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'Google PageSpeed Insights analysis tool.',
    schemaTitle: 'Schema Markup Generator',
    schemaDesc: 'Create JSON-LD structured data for rich snippets.',
    gscVisualizerTitle: 'GSC Data Visualizer',
    gscVisualizerDesc: 'Visualize Google Search Console data with interactive charts.',
    internalLinkTitle: 'Internal Link Suggester',
    internalLinkDesc: 'Smart internal linking suggestions for SEO.',
    trendingKeywordsTitle: 'Trending Keywords Finder',
    trendingKeywordsDesc: 'Find trending keywords for global markets.',
    voiceSearchTitle: 'Voice Search Optimizer',
    voiceSearchDesc: 'Optimize content for Google Voice, Alexa & Siri.',
    crawlerTitle: 'Website Crawler',
    crawlerDesc: 'Crawl any website. Find all pages and SEO issues.',

    // CTA
    ctaTitle: '🚀 Ready to Explore All 15 Free SEO Tools?',
    ctaDesc: '15 Essential Tools. 100% Free. No Signup Required. Updated 2026.',
    browseAll: 'Browse All Categories',

    // Footer
    footerDesc: '15 essential free SEO tools for global SEO professionals. 100% free. Updated for 2026.',
    alsoAvailable: 'Also available in:',
    quickLinks: 'Quick Links',
    globalToolsFooter: 'Global SEO',
    popularTools: 'Popular Tools',
    copyright: '© 2026 FreeSEOToolHub.com | All Rights Reserved',
    privacy: 'Privacy Policy',
    madeIn: '🌍 Made for Global SEO Community | Updated 2026',

    // All Tools Page
    allToolsPageTitle: '15 Free SEO Tools 2026 | All Categories | FreeSEOToolHub',
    allToolsHeader: '🚀 All 15 Free SEO Tools (2026)',
    allToolsHeaderDesc: 'Complete collection of 15 essential free SEO tools. All tools 100% free, no signup required.',
    allToolsSearchPlaceholder: '🔍 Search all 15 tools...',
    filterAll: '📋 All Tools (15)',
    filterGlobal: '🌍 Global SEO (15)',
    filterHot: '🔥 Trending 2026',
    globalCatTitle: 'Global Tools - No Regional Limits',
    globalCatDesc: 'For Worldwide Users: These global SEO tools work universally — no regional restrictions.',
    metaTagTitle: 'Meta Tag Generator',
    metaTagDesc: 'Generate SEO meta tags, Open Graph & Twitter Cards. Updated 2026.',
    generateTags: 'Generate Tags',
    checkNow: 'Check Now',
    generateQR: 'Generate QR',
    checkBacklinks: 'Check Backlinks',
    checkDensity: 'Check Density',
    testSpeed: 'Test Speed',
    checkSSL: 'Check SSL',
    detectAI: 'Detect AI',
    runTest: 'Run Test',
    generateSchema: 'Generate Schema',
    visualizeGSC: 'Visualize GSC',
    getSuggestions: 'Get Suggestions',
    findTrends: 'Find Trends',
    optimizeVoice: 'Optimize Voice',
    startCrawl: 'Start Crawl',
    totalCountBadge: '15 Free SEO Tools | 100% Free | No Signup Required | Updated 2026',
    madeFor: '🌍 Made for Global SEO Community | Updated 2026'
  },

  hi: {
    brand: 'फ्री SEO टूल्स हब',
    home: 'होम',
    allTools: 'सभी टूल्स',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    blog: 'ब्लॉग',
    language: 'भाषा',
    chooseLang: '🌐 अपनी भाषा चुनें',
    heroHighlight: 'फ्री SEO',
    heroTools: 'टूल्स',
    heroSubtitle: '🌍 ग्लोबल यूज़र्स के लिए',
    heroDesc: '15 ज़रूरी फ्री SEO टूल्स: मेटा टैग जनरेटर, प्लेजरिज़्म चेकर, QR कोड जनरेटर, बैकलिंक चेकर, कीवर्ड डेंसिटी चेकर, वेबसाइट स्पीड टेस्ट, SSL चेकर, AI कंटेंट डिटेक्टर, PageSpeed Insights, स्कीमा मार्कअप जनरेटर, GSC विज़ुअलाइज़र, इंटरनल लिंक सजेस्टर, ट्रेंडिंग कीवर्ड्स फाइंडर, वॉइस सर्च ऑप्टिमाइज़र, वेबसाइट क्रॉलर। सब 100% फ्री, कोई साइनअप नहीं, 2026 अपडेटेड।',
    exploreAll: 'सभी 15 टूल्स एक्सप्लोर करें',
    browseCat: 'कैटेगरी ब्राउज़ करें',
    quickGlobal: '🌍 ग्लोबल SEO टूल्स',
    whyTitle: 'हमारे टूल्स क्यों चुनें?',
    whyDesc: 'हम 15 ज़रूरी SEO टूल्स देते हैं जो दुनिया भर में सबसे ज्यादा इस्तेमाल होते हैं।',
    catGlobal: '🌍 ग्लोबल यूनिवर्सल',
    catGlobalDesc: '15+ टूल्स। मेटा टैग्स, प्लेजरिज़्म, QR कोड, बैकलिंक, SSL, स्पीड टेस्ट, AI डिटेक्टर, स्कीमा, GSC, इंटरनल लिंक, ट्रेंडिंग कीवर्ड्स, वॉइस सर्च, क्रॉलर।',
    searchPlaceholder: '🔍 15 टूल्स खोजें...',
    noToolsFound: 'कोई टूल नहीं मिला',
    tryDifferent: 'दूसरे कीवर्ड से खोजें',
    globalBadge: '🌍 ग्लोबल SEO',
    globalTitle: 'ज़रूरी ग्लोबल SEO टूल्स',
    globalDesc: 'दुनियाभर के वेबमास्टर्स के लिए।',
    viewAllGlobal: 'सभी 15 ग्लोबल SEO टूल्स देखें →',
    metaTitle: 'मेटा टैग जनरेटर',
    metaDesc: 'SEO मेटा टैग्स, Open Graph और Twitter Cards जनरेट करें।',
    plagiarismTitle: 'प्लेजरिज़्म चेकर',
    plagiarismDesc: 'कंटेंट ओरिजिनलिटी चेक करें।',
    qrTitle: 'QR कोड जनरेटर',
    qrDesc: 'URLs, टेक्स्ट, WiFi के लिए QR कोड बनाएं।',
    backlinkTitle: 'बैकलिंक चेकर',
    backlinkDesc: 'बैकलिंक प्रोफाइल एनालाइज़ करें।',
    keywordDensityTitle: 'कीवर्ड डेंसिटी चेकर',
    keywordDensityDesc: 'कीवर्ड डेंसिटी एनालाइज़ करें।',
    speedTestTitle: 'वेबसाइट स्पीड टेस्ट',
    speedTestDesc: 'पेज लोड टाइम टेस्ट करें।',
    sslTitle: 'SSL चेकर',
    sslDesc: 'SSL सर्टिफिकेट चेक करें।',
    aiDetectorTitle: 'AI कंटेंट डिटेक्टर',
    aiDetectorDesc: 'AI-जनरेटेड कंटेंट डिटेक्ट करें।',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'Google PageSpeed Insights एनालिसिस।',
    schemaTitle: 'स्कीमा मार्कअप जनरेटर',
    schemaDesc: 'रिच स्निपेट्स के लिए JSON-LD बनाएं।',
    gscVisualizerTitle: 'GSC डेटा विज़ुअलाइज़र',
    gscVisualizerDesc: 'GSC डेटा चार्ट्स में देखें।',
    internalLinkTitle: 'इंटरनल लिंक सजेस्टर',
    internalLinkDesc: 'स्मार्ट इंटरनल लिंकिंग सुझाव।',
    trendingKeywordsTitle: 'ट्रेंडिंग कीवर्ड्स फाइंडर',
    trendingKeywordsDesc: 'ट्रेंडिंग कीवर्ड खोजें।',
    voiceSearchTitle: 'वॉइस सर्च ऑप्टिमाइज़र',
    voiceSearchDesc: 'Google Voice, Alexa, Siri के लिए ऑप्टिमाइज़ करें।',
    crawlerTitle: 'वेबसाइट क्रॉलर',
    crawlerDesc: 'किसी भी वेबसाइट को क्रॉल करें।',
    ctaTitle: 'सभी 15 फ्री SEO टूल्स एक्सप्लोर करें',
    ctaDesc: '15 टूल्स। 100% फ्री। 2026 अपडेटेड।',
    browseAll: 'सभी कैटेगरी ब्राउज़ करें',
    footerDesc: 'ग्लोबल SEO प्रोफेशनल्स के लिए 15 फ्री SEO टूल्स।',
    alsoAvailable: 'यह भी उपलब्ध:',
    quickLinks: 'क्विक लिंक्स',
    globalToolsFooter: 'ग्लोबल SEO',
    popularTools: 'लोकप्रिय टूल्स',
    copyright: '© 2026 FreeSEOToolHub.com | सर्वाधिकार सुरक्षित',
    privacy: 'प्राइवेसी पॉलिसी',
    madeIn: '🌍 ग्लोबल SEO समुदाय के लिए | 2026',
    allToolsPageTitle: '15 फ्री SEO टूल्स 2026',
    allToolsHeader: '🚀 सभी 15 फ्री SEO टूल्स (2026)',
    allToolsHeaderDesc: '15 ज़रूरी फ्री SEO टूल्स।',
    allToolsSearchPlaceholder: '🔍 15 टूल्स खोजें...',
    filterAll: '📋 सभी (15)',
    filterGlobal: '🌍 ग्लोबल (15)',
    filterHot: '🔥 ट्रेंडिंग 2026',
    globalCatTitle: 'ग्लोबल टूल्स',
    globalCatDesc: 'दुनियाभर के यूज़र्स के लिए।',
    metaTagTitle: 'मेटा टैग जनरेटर',
    metaTagDesc: 'SEO मेटा टैग्स जनरेट करें।',
    generateTags: 'टैग्स जनरेट करें',
    checkNow: 'अभी चेक करें',
    generateQR: 'QR जनरेट करें',
    checkBacklinks: 'बैकलिंक चेक करें',
    checkDensity: 'डेंसिटी चेक करें',
    testSpeed: 'स्पीड टेस्ट करें',
    checkSSL: 'SSL चेक करें',
    detectAI: 'AI डिटेक्ट करें',
    runTest: 'टेस्ट चलाएं',
    generateSchema: 'स्कीमा जनरेट करें',
    visualizeGSC: 'GSC विज़ुअलाइज़ करें',
    getSuggestions: 'सुझाव लें',
    findTrends: 'ट्रेंड खोजें',
    optimizeVoice: 'वॉइस ऑप्टिमाइज़ करें',
    startCrawl: 'क्रॉल शुरू करें',
    totalCountBadge: '15 फ्री SEO टूल्स | 100% फ्री | 2026',
    madeFor: '🌍 ग्लोबल SEO समुदाय के लिए | 2026'
  },

  ur: {
    brand: 'مفت SEO ٹولز ہب',
    home: 'ہوم',
    allTools: 'تمام ٹولز',
    about: 'ہمارے بارے میں',
    contact: 'رابطہ',
    blog: 'بلاگ',
    language: 'زبان',
    chooseLang: '🌐 اپنی زبان منتخب کریں',
    heroHighlight: 'مفت SEO',
    heroTools: 'ٹولز',
    heroSubtitle: '🌍 عالمی صارفین کے لیے',
    heroDesc: '15 ضروری مفت SEO ٹولز: میٹا ٹیگ جنریٹر، پلیجرزم چیکر، QR کوڈ جنریٹر، بیک لنک چیکر، کیورڈ ڈینسٹی چیکر، ویب سائٹ سپیڈ ٹیسٹ، SSL چیکر، AI کنٹینٹ ڈیٹیکٹر، PageSpeed Insights، اسکیما مارک اپ جنریٹر، GSC ویژولائزر، انٹرنل لنک سجیسٹر، ٹرینڈنگ کیورڈز فائنڈر، وائس سرچ آپٹیمائزر، ویب سائٹ کرالر۔',
    exploreAll: 'تمام 15 ٹولز دریافت کریں',
    browseCat: 'کیٹگریز براؤز کریں',
    quickGlobal: '🌍 عالمی SEO ٹولز',
    whyTitle: 'ہمارے ٹولز کیوں منتخب کریں؟',
    whyDesc: 'ہم 15 ضروری SEO ٹولز فراہم کرتے ہیں۔',
    catGlobal: '🌍 عالمی یونیورسل',
    catGlobalDesc: '15+ ٹولز۔',
    searchPlaceholder: '🔍 ٹولز تلاش کریں...',
    noToolsFound: 'کوئی ٹول نہیں ملا',
    tryDifferent: 'دوسرے الفاظ سے تلاش کریں',
    globalBadge: '🌍 عالمی SEO',
    globalTitle: 'ضروری عالمی SEO ٹولز',
    globalDesc: 'دنیا بھر کے ویب ماسٹرز کے لیے۔',
    viewAllGlobal: 'تمام 15 ٹولز دیکھیں →',
    metaTitle: 'میٹا ٹیگ جنریٹر',
    metaDesc: 'SEO میٹا ٹیگز بنائیں۔',
    plagiarismTitle: 'پلیجرزم چیکر',
    plagiarismDesc: 'مواد کی اصلیت چیک کریں۔',
    qrTitle: 'QR کوڈ جنریٹر',
    qrDesc: 'QR کوڈ بنائیں۔',
    backlinkTitle: 'بیک لنک چیکر',
    backlinkDesc: 'بیک لنک پروفائل تجزیہ کریں۔',
    keywordDensityTitle: 'کیورڈ ڈینسٹی چیکر',
    keywordDensityDesc: 'کیورڈ ڈینسٹی کا تجزیہ کریں۔',
    speedTestTitle: 'ویب سائٹ سپیڈ ٹیسٹ',
    speedTestDesc: 'پیج لوڈ ٹائم ٹیسٹ کریں۔',
    sslTitle: 'SSL چیکر',
    sslDesc: 'SSL سرٹیفکیٹ چیک کریں۔',
    aiDetectorTitle: 'AI کنٹینٹ ڈیٹیکٹر',
    aiDetectorDesc: 'AI کنٹینٹ ڈیٹیکٹ کریں۔',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'PageSpeed تجزیہ۔',
    schemaTitle: 'اسکیما جنریٹر',
    schemaDesc: 'JSON-LD ڈیٹا بنائیں۔',
    gscVisualizerTitle: 'GSC ویژولائزر',
    gscVisualizerDesc: 'GSC ڈیٹا دیکھیں۔',
    internalLinkTitle: 'انٹرنل لنک سجیسٹر',
    internalLinkDesc: 'سمارٹ انٹرنل لنکنگ۔',
    trendingKeywordsTitle: 'ٹرینڈنگ کیورڈز',
    trendingKeywordsDesc: 'ٹرینڈنگ کیورڈز ڈھونڈیں۔',
    voiceSearchTitle: 'وائس سرچ آپٹیمائزر',
    voiceSearchDesc: 'وائس سرچ کے لیے آپٹیمائز کریں۔',
    crawlerTitle: 'ویب سائٹ کرالر',
    crawlerDesc: 'ویب سائٹ کرال کریں۔',
    ctaTitle: 'تمام 15 ٹولز دریافت کریں',
    ctaDesc: '15 ٹولز۔ 100% مفت۔',
    browseAll: 'کیٹگریز براؤز کریں',
    footerDesc: 'عالمی SEO کے لیے 15 مفت ٹولز۔',
    alsoAvailable: 'یہ بھی دستیاب:',
    quickLinks: 'فوری لنکس',
    globalToolsFooter: 'عالمی SEO',
    popularTools: 'مقبول ٹولز',
    copyright: '© 2026 FreeSEOToolHub.com',
    privacy: 'پرائیویسی',
    madeIn: '🌍 عالمی SEO کمیونٹی کے لیے | 2026',
    allToolsPageTitle: '15 مفت SEO ٹولز 2026',
    allToolsHeader: '🚀 تمام 15 ٹولز (2026)',
    allToolsHeaderDesc: '15 ضروری ٹولز۔',
    allToolsSearchPlaceholder: '🔍 ٹولز تلاش کریں...',
    filterAll: '📋 تمام (15)',
    filterGlobal: '🌍 عالمی (15)',
    filterHot: '🔥 ٹرینڈنگ 2026',
    globalCatTitle: 'عالمی ٹولز',
    globalCatDesc: 'دنیا بھر کے صارفین کے لیے۔',
    metaTagTitle: 'میٹا ٹیگ جنریٹر',
    metaTagDesc: 'SEO میٹا ٹیگز بنائیں۔',
    generateTags: 'ٹیگز بنائیں',
    checkNow: 'ابھی چیک کریں',
    generateQR: 'QR بنائیں',
    checkBacklinks: 'بیک لنک چیک کریں',
    checkDensity: 'کثافت چیک کریں',
    testSpeed: 'سپیڈ ٹیسٹ کریں',
    checkSSL: 'SSL چیک کریں',
    detectAI: 'AI ڈیٹیکٹ کریں',
    runTest: 'ٹیسٹ چلائیں',
    generateSchema: 'اسکیما بنائیں',
    visualizeGSC: 'GSC دیکھیں',
    getSuggestions: 'تجاویز لیں',
    findTrends: 'ٹرینڈ ڈھونڈیں',
    optimizeVoice: 'وائس آپٹیمائز کریں',
    startCrawl: 'کرال شروع کریں',
    totalCountBadge: '15 مفت SEO ٹولز | 2026',
    madeFor: '🌍 عالمی SEO کمیونٹی | 2026'
  },

  de: {
    brand: 'Kostenlose SEO-Tools Hub',
    home: 'Startseite',
    allTools: 'Alle Tools',
    about: 'Über uns',
    contact: 'Kontakt',
    blog: 'Blog',
    language: 'Sprache',
    chooseLang: '🌐 Wählen Sie Ihre Sprache',
    heroHighlight: 'Kostenlose SEO',
    heroTools: 'Tools',
    heroSubtitle: '🌍 Für globale Nutzer',
    heroDesc: '15 essentielle kostenlose SEO-Tools: Meta-Tag-Generator, Plagiatsprüfung, QR-Code-Generator, Backlink-Checker, Keyword-Dichte-Checker, Website-Geschwindigkeitstest, SSL-Checker, KI-Content-Detektor, PageSpeed Insights, Schema-Markup-Generator, GSC-Visualizer, Internal-Link-Vorschlag, Trend-Keyword-Finder, Voice-Search-Optimierer, Website-Crawler.',
    exploreAll: 'Alle 15 Tools erkunden',
    browseCat: 'Kategorien durchsuchen',
    quickGlobal: '🌍 Globale SEO Tools',
    whyTitle: 'Warum unsere Tools?',
    whyDesc: 'Wir bieten 15 essentielle SEO-Tools.',
    catGlobal: '🌍 Global Universal',
    catGlobalDesc: '15+ Tools. Meta-Tags, Plagiat, QR, Backlinks, SSL, Geschwindigkeit, KI, Schema, GSC, Internal Links, Trends, Voice, Crawler.',
    searchPlaceholder: '🔍 15 Tools durchsuchen...',
    noToolsFound: 'Keine Tools gefunden',
    tryDifferent: 'Andere Keywords versuchen',
    globalBadge: '🌍 Globale SEO',
    globalTitle: 'Essentielle SEO-Tools',
    globalDesc: 'Für Webmaster weltweit.',
    viewAllGlobal: 'Alle 15 Tools →',
    metaTitle: 'Meta-Tag Generator',
    metaDesc: 'SEO Meta-Tags generieren.',
    plagiarismTitle: 'Plagiatsprüfung',
    plagiarismDesc: 'Inhaltsoriginalität prüfen.',
    qrTitle: 'QR-Code Generator',
    qrDesc: 'QR-Codes erstellen.',
    backlinkTitle: 'Backlink Checker',
    backlinkDesc: 'Backlink-Profil analysieren.',
    keywordDensityTitle: 'Keyword-Dichte',
    keywordDensityDesc: 'Keyword-Dichte analysieren.',
    speedTestTitle: 'Geschwindigkeitstest',
    speedTestDesc: 'Ladezeit testen.',
    sslTitle: 'SSL-Checker',
    sslDesc: 'SSL-Zertifikat prüfen.',
    aiDetectorTitle: 'KI-Content-Detektor',
    aiDetectorDesc: 'KI-Content erkennen.',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'PageSpeed-Analyse.',
    schemaTitle: 'Schema-Generator',
    schemaDesc: 'JSON-LD für Rich Snippets.',
    gscVisualizerTitle: 'GSC-Visualizer',
    gscVisualizerDesc: 'GSC-Daten visualisieren.',
    internalLinkTitle: 'Internal-Link-Vorschlag',
    internalLinkDesc: 'Intelligente interne Verlinkung.',
    trendingKeywordsTitle: 'Trend-Keyword-Finder',
    trendingKeywordsDesc: 'Trending Keywords.',
    voiceSearchTitle: 'Voice-Optimierer',
    voiceSearchDesc: 'Für Voice Search optimieren.',
    crawlerTitle: 'Website-Crawler',
    crawlerDesc: 'Website crawlen.',
    ctaTitle: 'Alle 15 Tools erkunden',
    ctaDesc: '15 Tools. 100% Kostenlos.',
    browseAll: 'Alle Kategorien →',
    footerDesc: '15 essentielle SEO-Tools.',
    alsoAvailable: 'Auch verfügbar in:',
    quickLinks: 'Quick Links',
    globalToolsFooter: 'Globale SEO',
    popularTools: 'Beliebte Tools',
    copyright: '© 2026 FreeSEOToolHub.com',
    privacy: 'Datenschutz',
    madeIn: '🌍 Für die globale SEO-Community | 2026',
    allToolsPageTitle: '15 Kostenlose SEO-Tools 2026',
    allToolsHeader: '🚀 Alle 15 Tools (2026)',
    allToolsHeaderDesc: '15 essentielle SEO-Tools.',
    allToolsSearchPlaceholder: '🔍 15 Tools durchsuchen...',
    filterAll: '📋 Alle (15)',
    filterGlobal: '🌍 Globale SEO (15)',
    filterHot: '🔥 Trending 2026',
    globalCatTitle: 'Globale Tools',
    globalCatDesc: 'Für Nutzer weltweit.',
    metaTagTitle: 'Meta-Tag Generator',
    metaTagDesc: 'SEO Meta-Tags generieren.',
    generateTags: 'Tags generieren',
    checkNow: 'Jetzt prüfen',
    generateQR: 'QR generieren',
    checkBacklinks: 'Backlinks prüfen',
    checkDensity: 'Dichte prüfen',
    testSpeed: 'Geschwindigkeit testen',
    checkSSL: 'SSL prüfen',
    detectAI: 'KI erkennen',
    runTest: 'Test starten',
    generateSchema: 'Schema generieren',
    visualizeGSC: 'GSC visualisieren',
    getSuggestions: 'Vorschläge',
    findTrends: 'Trends finden',
    optimizeVoice: 'Voice optimieren',
    startCrawl: 'Crawlen starten',
    totalCountBadge: '15 Tools | 100% Kostenlos | 2026',
    madeFor: '🌍 Für die globale SEO-Community | 2026'
  },

  es: {
    brand: 'Herramientas SEO Gratis Hub',
    home: 'Inicio',
    allTools: 'Todas',
    about: 'Acerca de',
    contact: 'Contacto',
    blog: 'Blog',
    language: 'Idioma',
    chooseLang: '🌐 Elige tu idioma',
    heroHighlight: 'SEO Gratis',
    heroTools: 'Herramientas',
    heroSubtitle: '🌍 Para usuarios globales',
    heroDesc: '15 herramientas SEO gratuitas esenciales: Generador de Meta Tags, Detector de Plagio, Generador de QR, Verificador de Backlinks, Verificador de Densidad de Keywords, Test de Velocidad, Verificador SSL, Detector de IA, PageSpeed Insights, Generador de Schema, Visualizador GSC, Sugeridor de Enlaces Internos, Buscador de Keywords Tendencias, Optimizador de Búsqueda por Voz, Rastreador Web.',
    exploreAll: 'Explorar 15 Herramientas',
    browseCat: 'Ver Categorías',
    quickGlobal: '🌍 SEO Global',
    whyTitle: '¿Por qué elegirnos?',
    whyDesc: 'Ofrecemos 15 herramientas SEO esenciales.',
    catGlobal: '🌍 Global Universal',
    catGlobalDesc: '15+ herramientas. Meta tags, plagio, QR, backlinks, SSL, velocidad, IA, schema, GSC, enlaces internos, tendencias, voz, rastreador.',
    searchPlaceholder: '🔍 Buscar 15 herramientas...',
    noToolsFound: 'Sin resultados',
    tryDifferent: 'Prueba otras palabras',
    globalBadge: '🌍 SEO Global',
    globalTitle: 'Herramientas SEO Esenciales',
    globalDesc: 'Para webmasters mundiales.',
    viewAllGlobal: 'Ver 15 Herramientas →',
    metaTitle: 'Generador Meta Tags',
    metaDesc: 'Generar meta tags SEO.',
    plagiarismTitle: 'Detector de Plagio',
    plagiarismDesc: 'Verificar originalidad.',
    qrTitle: 'Generador QR',
    qrDesc: 'Crear códigos QR.',
    backlinkTitle: 'Verificador Backlinks',
    backlinkDesc: 'Analizar backlinks.',
    keywordDensityTitle: 'Verificador Densidad',
    keywordDensityDesc: 'Analizar densidad.',
    speedTestTitle: 'Test de Velocidad',
    speedTestDesc: 'Probar velocidad.',
    sslTitle: 'Verificador SSL',
    sslDesc: 'Verificar SSL.',
    aiDetectorTitle: 'Detector de IA',
    aiDetectorDesc: 'Detectar contenido IA.',
    pagespeedTitle: 'PageSpeed Insights',
    pagespeedDesc: 'Análisis PageSpeed.',
    schemaTitle: 'Generador Schema',
    schemaDesc: 'JSON-LD para rich snippets.',
    gscVisualizerTitle: 'Visualizador GSC',
    gscVisualizerDesc: 'Visualizar datos GSC.',
    internalLinkTitle: 'Sugeridor Links',
    internalLinkDesc: 'Enlaces internos inteligentes.',
    trendingKeywordsTitle: 'Buscador Tendencias',
    trendingKeywordsDesc: 'Keywords tendencia.',
    voiceSearchTitle: 'Optimizador de Voz',
    voiceSearchDesc: 'Optimizar para voz.',
    crawlerTitle: 'Rastreador Web',
    crawlerDesc: 'Rastrear sitios web.',
    ctaTitle: 'Explorar 15 Herramientas SEO',
    ctaDesc: '15 Herramientas. 100% Gratis.',
    browseAll: 'Ver Categorías →',
    footerDesc: '15 herramientas SEO esenciales.',
    alsoAvailable: 'También disponible en:',
    quickLinks: 'Enlaces',
    globalToolsFooter: 'SEO Global',
    popularTools: 'Populares',
    copyright: '© 2026 FreeSEOToolHub.com',
    privacy: 'Privacidad',
    madeIn: '🌍 Para la comunidad SEO global | 2026',
    allToolsPageTitle: '15 Herramientas SEO Gratis 2026',
    allToolsHeader: '🚀 Todas las 15 Herramientas (2026)',
    allToolsHeaderDesc: '15 herramientas SEO esenciales.',
    allToolsSearchPlaceholder: '🔍 Buscar 15 herramientas...',
    filterAll: '📋 Todas (15)',
    filterGlobal: '🌍 SEO Global (15)',
    filterHot: '🔥 Tendencia 2026',
    globalCatTitle: 'Herramientas Globales',
    globalCatDesc: 'Para usuarios de todo el mundo.',
    metaTagTitle: 'Generador Meta Tags',
    metaTagDesc: 'Generar meta tags SEO.',
    generateTags: 'Generar Tags',
    checkNow: 'Verificar',
    generateQR: 'Generar QR',
    checkBacklinks: 'Verificar Backlinks',
    checkDensity: 'Verificar Densidad',
    testSpeed: 'Probar Velocidad',
    checkSSL: 'Verificar SSL',
    detectAI: 'Detectar IA',
    runTest: 'Ejecutar Prueba',
    generateSchema: 'Generar Schema',
    visualizeGSC: 'Visualizar GSC',
    getSuggestions: 'Obtener Sugerencias',
    findTrends: 'Encontrar Tendencias',
    optimizeVoice: 'Optimizar Voz',
    startCrawl: 'Iniciar Rastreo',
    totalCountBadge: '15 Herramientas | 100% Gratis | 2026',
    madeFor: '🌍 Para la comunidad SEO global | 2026'
  }
};

// ============================================================
// 🔧 UTILITY FUNCTIONS
// ============================================================
function detectBrowserLang() {
  const nav = navigator.language || navigator.userLanguage || 'en';
  const short = nav.split('-')[0].toLowerCase();
  return CONFIG.supportedLangs.includes(short) ? short : CONFIG.defaultLang;
}

function getUrlLang() {
  try {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get(CONFIG.queryParam);
    return CONFIG.supportedLangs.includes(lang) ? lang : null;
  } catch(e) {
    return null;
  }
}

function getStoredLang() {
  try {
    return localStorage.getItem(CONFIG.storageKey);
  } catch(e) { return null; }
}

function getCurrentLang() {
  return getUrlLang() || getStoredLang() || (CONFIG.autoDetect ? detectBrowserLang() : null) || CONFIG.defaultLang;
}

function isRTL(lang) {
  return CONFIG.rtlLangs.includes(lang);
}

// ============================================================
// 🌐 APPLY LANGUAGE
// ============================================================
function applyLanguage(lang) {
  if (!CONFIG.supportedLangs.includes(lang)) lang = CONFIG.defaultLang;
  const t = translations[lang];
  if (!t) {
    console.warn('Translation missing for language:', lang);
    return;
  }

  // 1. Set <html lang> and <html dir>
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';

  // 2. Apply data-translate text
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    // Fallback to English if missing
    const value = t[key] || translations.en[key];
    if (value === undefined) {
      console.warn('Missing translation:', lang, key);
      return;
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) el.placeholder = value;
      else if (el.hasAttribute('value')) el.value = value;
    } else if (el.hasAttribute('title')) {
      el.title = value;
    } else if (el.hasAttribute('aria-label')) {
      el.setAttribute('aria-label', value);
    } else {
      el.textContent = value;
    }
  });

  // 3. Apply data-translate-html for innerHTML
  document.querySelectorAll('[data-translate-html]').forEach(el => {
    const key = el.getAttribute('data-translate-html');
    const value = t[key] || translations.en[key];
    if (value !== undefined) el.innerHTML = value;
  });

  // 4. Update page title (only if page-specific key exists)
  const pageTitleKey = document.body.getAttribute('data-page-title-key');
  if (pageTitleKey && (t[pageTitleKey] || translations.en[pageTitleKey])) {
    document.title = t[pageTitleKey] || translations.en[pageTitleKey];
  }

  // 5. Update meta description (only if key exists)
  const metaDescKey = document.body.getAttribute('data-meta-desc-key');
  if (metaDescKey && (t[metaDescKey] || translations.en[metaDescKey])) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t[metaDescKey] || translations.en[metaDescKey]);
  }

  // 6. Update hreflang links (SEO)
  updateHreflangLinks(lang);

  // 7. Save preference
  try {
    localStorage.setItem(CONFIG.storageKey, lang);
  } catch(e) {}

  // 8. Emit event for other scripts to listen
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// ============================================================
// 🔗 UPDATE HREFLANG (SEO)
// ============================================================
function updateHreflangLinks(currentLang) {
  // Remove existing dynamic hreflang links
  document.querySelectorAll('link[rel="alternate"][data-dynamic-hreflang]').forEach(el => el.remove());

  const baseUrl = window.location.origin + window.location.pathname;
  const head = document.head;

  CONFIG.supportedLangs.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = lang === CONFIG.defaultLang ? baseUrl : `${baseUrl}?lang=${lang}`;
    link.setAttribute('data-dynamic-hreflang', 'true');
    head.appendChild(link);
  });

  // x-default
  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.hreflang = 'x-default';
  xDefault.href = baseUrl;
  xDefault.setAttribute('data-dynamic-hreflang', 'true');
  head.appendChild(xDefault);
}

// ============================================================
// 🔄 SWITCH LANGUAGE (Preserves current path + query)
// ============================================================
function switchLanguage(lang) {
  if (!CONFIG.supportedLangs.includes(lang)) lang = CONFIG.defaultLang;
  const url = new URL(window.location.href);
  if (lang === CONFIG.defaultLang) {
    url.searchParams.delete(CONFIG.queryParam);
  } else {
    url.searchParams.set(CONFIG.queryParam, lang);
  }
  window.location.href = url.toString();
}

// ============================================================
// 🔗 ADD LANG PARAM TO INTERNAL LINKS
// ============================================================
function addLangToInternalLinks(lang) {
  if (lang === CONFIG.defaultLang) return;
  document.querySelectorAll('a[href]').forEach(link => {
    try {
      const url = new URL(link.getAttribute('href'), window.location.origin);
      if (url.hostname !== window.location.hostname) return;
      if (link.hasAttribute('data-no-lang')) return;
      if (link.getAttribute('href').startsWith('#')) return;
      if (link.getAttribute('href').startsWith('mailto:')) return;
      if (link.getAttribute('href').startsWith('tel:')) return;

      url.searchParams.set(CONFIG.queryParam, lang);
      link.setAttribute('href', url.pathname + url.search + url.hash);
    } catch(e) {}
  });
}

// ============================================================
// 🎬 INIT
// ============================================================
function init() {
  const lang = getCurrentLang();

  // Update URL if browser language detected and no URL param
  if (!getUrlLang() && lang !== CONFIG.defaultLang) {
    const url = new URL(window.location.href);
    url.searchParams.set(CONFIG.queryParam, lang);
    history.replaceState({}, '', url.toString());
  }

  applyLanguage(lang);
  addLangToInternalLinks(lang);

  // Also handle dynamic content via MutationObserver (for lazy-loaded content)
  const observer = new MutationObserver(mutations => {
    let hasNewLinks = false;
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.tagName === 'A' || node.querySelector?.('a[href]')) hasNewLinks = true;
        }
      });
    });
    if (hasNewLinks && lang !== CONFIG.defaultLang) {
      addLangToInternalLinks(lang);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Start when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================================
// 🌍 PUBLIC API
// ============================================================
window.FSTLang = {
  getCurrent: getCurrentLang,
  switch: switchLanguage,
  apply: applyLanguage,
  getTranslation: (key, lang) => {
    const l = lang || getCurrentLang();
    return translations[l]?.[key] || translations.en[key] || key;
  },
  supported: CONFIG.supportedLangs,
  isRTL: isRTL,
  translations: translations
};

})();
