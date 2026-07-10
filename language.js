// =============================================
// Free SEO Tools Hub - Multi-Language System
// Updated: Only 15 Global Tools (2026)
// API Key Ready
// =============================================

// 🔑 Global API Key
const GLOBAL_API_KEY = "rsk_01KX30NR2A1988J2N3GWG1KF5F";
window.GLOBAL_API_KEY = GLOBAL_API_KEY;
console.log("🔑 API Key loaded successfully:", GLOBAL_API_KEY);

const translations = {
hi: {
// Navbar
brand: "फ्री SEO टूल्स हब",
home: "होम",
allTools: "सभी टूल्स",
about: "हमारे बारे में",
contact: "संपर्क",
blog: "ब्लॉग",
language: "भाषा",
chooseLang: "🌐 अपनी भाषा चुनें",

// Hero Section
heroHighlight: "फ्री SEO",
heroTools: "टूल्स",
heroSubtitle: "🌍 ग्लोबल यूज़र्स के लिए",
heroDesc: "15 ज़रूरी फ्री SEO टूल्स: मेटा टैग जनरेटर, प्लेजरिज़्म चेकर, QR कोड जनरेटर, बैकलिंक चेकर, कीवर्ड डेंसिटी चेकर, वेबसाइट स्पीड टेस्ट, SSL चेकर, AI कंटेंट डिटेक्टर, PageSpeed Insights, स्कीमा मार्कअप जनरेटर, GSC विज़ुअलाइज़र, इंटरनल लिंक सजेस्टर, ट्रेंडिंग कीवर्ड्स फाइंडर, वॉइस सर्च ऑप्टिमाइज़र, वेबसाइट क्रॉलर। सब 100% फ्री, कोई साइनअप नहीं, 2026 अपडेटेड।",
exploreAll: "सभी 15 टूल्स एक्सप्लोर करें",
browseCat: "कैटेगरी ब्राउज़ करें",

// Quick Links
quickGlobal: "🌍 ग्लोबल SEO टूल्स",

// Why Choose
whyTitle: "हमारे टूल्स क्यों चुनें?",
whyDesc: "हम 15 ज़रूरी SEO टूल्स देते हैं जो दुनिया भर में सबसे ज्यादा इस्तेमाल होते हैं। हर टूल 100% फ्री और बिना किसी रजिस्ट्रेशन के तुरंत इस्तेमाल करें।",

// Categories
catGlobal: "🌍 ग्लोबल यूनिवर्सल",
catGlobalDesc: "15+ टूल्स। मेटा टैग्स, प्लेजरिज़्म, QR कोड, बैकलिंक, SSL, स्पीड टेस्ट, AI डिटेक्टर, स्कीमा, GSC, इंटरनल लिंक, ट्रेंडिंग कीवर्ड्स, वॉइस सर्च, क्रॉलर।",

// Search
searchPlaceholder: "15 टूल्स खोजें... (Meta, Plagiarism, QR, Backlink, SSL, Speed, AI, Schema, GSC, Internal Link, Trending, Voice, Crawler)...",
noToolsFound: "कोई टूल नहीं मिला",
tryDifferent: "दूसरे कीवर्ड से खोजें या नीचे कैटेगरी देखें",

// Global SEO
globalBadge: "🌍 ग्लोबल SEO",
globalTitle: "ज़रूरी ग्लोबल SEO टूल्स",
globalDesc: "दुनियाभर के वेबमास्टर्स और SEO प्रोफेशनल्स के लिए। मेटा टैग्स, प्लेजरिज़्म, बैकलिंक एनालिसिस, SSL, स्पीड टेस्ट, AI डिटेक्शन, स्कीमा, GSC, इंटरनल लिंक, ट्रेंडिंग कीवर्ड्स, वॉइस सर्च, वेबसाइट क्रॉलर।",
viewAllGlobal: "सभी 15 ग्लोबल SEO टूल्स देखें →",

// Tool Cards - Global
metaTitle: "मेटा टैग जनरेटर",
metaDesc: "SEO मेटा टैग्स, Open Graph और Twitter Cards जनरेट करें।",
plagiarismTitle: "प्लेजरिज़्म चेकर",
plagiarismDesc: "कंटेंट ओरिजिनलिटी चेक करें। 80K+ मंथली सर्चेज़।",
qrTitle: "QR कोड जनरेटर",
qrDesc: "URLs, टेक्स्ट, WiFi, vCards के लिए QR कोड बनाएं।",
backlinkTitle: "बैकलिंक चेकर",
backlinkDesc: "बैकलिंक प्रोफाइल एनालाइज़ करें। कौन आपकी साइट को लिंक कर रहा है।",
keywordDensityTitle: "कीवर्ड डेंसिटी चेकर",
keywordDensityDesc: "किसी भी पेज पर कीवर्ड डेंसिटी और फ्रीक्वेंसी एनालाइज़ करें।",
speedTestTitle: "वेबसाइट स्पीड टेस्ट",
speedTestDesc: "पेज लोड टाइम और परफॉरमेंस मेट्रिक्स टेस्ट करें।",
sslTitle: "SSL चेकर",
sslDesc: "SSL सर्टिफिकेट वैधता और एक्सपायरी डेट चेक करें।",
aiDetectorTitle: "AI कंटेंट डिटेक्टर",
aiDetectorDesc: "AI-जनरेटेड कंटेंट डिटेक्ट करें। ChatGPT, Gemini डिटेक्शन।",
pagespeedTitle: "PageSpeed Insights",
pagespeedDesc: "Google PageSpeed Insights एनालिसिस टूल।",
schemaTitle: "स्कीमा मार्कअप जनरेटर",
schemaDesc: "रिच स्निपेट्स के लिए JSON-LD स्ट्रक्चर्ड डेटा बनाएं।",
gscVisualizerTitle: "GSC डेटा विज़ुअलाइज़र",
gscVisualizerDesc: "Google Search Console डेटा को इंटरैक्टिव चार्ट्स में देखें।",
internalLinkTitle: "इंटरनल लिंक सजेस्टर",
internalLinkDesc: "SEO के लिए स्मार्ट इंटरनल लिंकिंग सुझाव।",
trendingKeywordsTitle: "ट्रेंडिंग कीवर्ड्स फाइंडर",
trendingKeywordsDesc: "ग्लोबल मार्केट के लिए ट्रेंडिंग कीवर्ड खोजें।",
voiceSearchTitle: "वॉइस सर्च ऑप्टिमाइज़र",
voiceSearchDesc: "Google Voice, Alexa और Siri के लिए कंटेंट ऑप्टिमाइज़ करें।",
crawlerTitle: "वेबसाइट क्रॉलर",
crawlerDesc: "किसी भी वेबसाइट को क्रॉल करें। सभी पेज और SEO इश्यू खोजें।",

// CTA
ctaTitle: "सभी 15 फ्री SEO टूल्स एक्सप्लोर करने के लिए तैयार?",
ctaDesc: "15 टूल्स। 100% फ्री। कोई साइनअप नहीं। 2026 अपडेटेड।",
browseAll: "सभी कैटेगरी ब्राउज़ करें",

// Footer
footerDesc: "ग्लोबल SEO प्रोफेशनल्स के लिए 15 ज़रूरी फ्री SEO टूल्स। 100% फ्री। 2026 अपडेटेड।",
alsoAvailable: "यह भी उपलब्ध:",
quickLinks: "क्विक लिंक्स",
globalToolsFooter: "ग्लोबल SEO",
popularTools: "लोकप्रिय टूल्स",
copyright: "© 2026 FreeSEOToolHub.com | सर्वाधिकार सुरक्षित",
privacy: "प्राइवेसी पॉलिसी",
madeIn: "🌍 ग्लोबल SEO समुदाय के लिए बनाया गया | 2026 अपडेटेड",

// All Tools Page
allToolsPageTitle: "15 फ्री SEO टूल्स 2026 | सभी कैटेगरी | FreeSEOToolHub",
allToolsHeader: "🚀 सभी 15 फ्री SEO टूल्स (2026)",
allToolsHeaderDesc: "15 ज़रूरी फ्री SEO टूल्स। ग्लोबल यूज़र्स के लिए।",
allToolsSearchPlaceholder: "15 टूल्स खोजें... (Meta, Plagiarism, QR, Backlink, SSL, Speed, AI, Schema, GSC, Internal Link, Trending, Voice, Crawler)...",

filterAll: "📋 सभी टूल्स (15)",
filterGlobal: "🌍 ग्लोबल SEO (15)",
filterHot: "🔥 ट्रेंडिंग 2026",

globalCatTitle: "ग्लोबल टूल्स - कोई क्षेत्रीय सीमा नहीं",
globalCatDesc: "दुनियाभर के यूज़र्स के लिए: ये ग्लोबल SEO टूल्स बिना किसी क्षेत्रीय प्रतिबंध के काम करते हैं।",

metaTagTitle: "मेटा टैग जनरेटर",
metaTagDesc: "SEO मेटा टैग्स, Open Graph और Twitter Cards जनरेट करें। 2026 अपडेटेड।",
generateTags: "टैग्स जनरेट करें",
checkNow: "अभी चेक करें",
generateQR: "QR जनरेट करें",
checkBacklinks: "बैकलिंक चेक करें",
checkDensity: "डेंसिटी चेक करें",
testSpeed: "स्पीड टेस्ट करें",
checkSSL: "SSL चेक करें",
detectAI: "AI डिटेक्ट करें",
runTest: "टेस्ट चलाएं",
generateSchema: "स्कीमा जनरेट करें",
visualizeGSC: "GSC विज़ुअलाइज़ करें",
getSuggestions: "सुझाव लें",
findTrends: "ट्रेंड खोजें",
optimizeVoice: "वॉइस ऑप्टिमाइज़ करें",
startCrawl: "क्रॉल शुरू करें",

totalCountBadge: "15 फ्री SEO टूल्स | 100% फ्री | कोई साइनअप नहीं | 2026 अपडेटेड",
madeFor: "🌍 ग्लोबल SEO समुदाय के लिए बनाया गया | 2026 अपडेटेड"
},

ur: {
brand: "مفت SEO ٹولز ہب",
home: "ہوم",
allTools: "تمام ٹولز",
about: "ہمارے بارے میں",
contact: "رابطہ",
blog: "بلاگ",
language: "زبان",
chooseLang: "🌐 اپنی زبان منتخب کریں",

heroHighlight: "مفت SEO",
heroTools: "ٹولز",
heroSubtitle: "🌍 عالمی صارفین کے لیے",
heroDesc: "15 ضروری مفت SEO ٹولز: میٹا ٹیگ جنریٹر، پلیجرزم چیکر، QR کوڈ جنریٹر، بیک لنک چیکر، کیورڈ ڈینسٹی چیکر، ویب سائٹ سپیڈ ٹیسٹ، SSL چیکر، AI کنٹینٹ ڈیٹیکٹر، PageSpeed Insights، اسکیما مارک اپ جنریٹر، GSC ویژولائزر، انٹرنل لنک سجیسٹر، ٹرینڈنگ کیورڈز فائنڈر، وائس سرچ آپٹیمائزر، ویب سائٹ کرالر۔ 100% مفت، کوئی سائن اپ نہیں، 2026 اپڈیٹڈ۔",
exploreAll: "تمام 15 ٹولز دریافت کریں",
browseCat: "کیٹگریز براؤز کریں",

quickGlobal: "🌍 عالمی SEO ٹولز",

whyTitle: "ہمارے ٹولز کیوں منتخب کریں؟",
whyDesc: "ہم 15 ضروری SEO ٹولز فراہم کرتے ہیں جو دنیا بھر میں سب سے زیادہ استعمال ہوتے ہیں۔",

catGlobal: "🌍 عالمی یونیورسل",
catGlobalDesc: "15+ ٹولز۔ میٹا ٹیگز، پلیجرزم، QR کوڈ، بیک لنک، SSL، سپیڈ ٹیسٹ، AI ڈیٹیکٹر، اسکیما، GSC، انٹرنل لنک، ٹرینڈنگ کیورڈز، وائس سرچ، کرالر۔",

searchPlaceholder: "15 ٹولز تلاش کریں...",
noToolsFound: "کوئی ٹول نہیں ملا",
tryDifferent: "دوسرے الفاظ سے تلاش کریں",

globalBadge: "🌍 عالمی SEO",
globalTitle: "ضروری عالمی SEO ٹولز",
globalDesc: "دنیا بھر کے ویب ماسٹرز کے لیے۔ میٹا ٹیگز، پلیجرزم، بیک لنک تجزیہ، SSL، سپیڈ ٹیسٹ، AI ڈیٹیکشن، اسکیما، GSC، انٹرنل لنک، ٹرینڈنگ کیورڈز، وائس سرچ، ویب سائٹ کرالر۔",
viewAllGlobal: "تمام 15 عالمی SEO ٹولز دیکھیں →",

metaTitle: "میٹا ٹیگ جنریٹر",
metaDesc: "SEO میٹا ٹیگز، Open Graph اور Twitter Cards بنائیں۔",
plagiarismTitle: "پلیجرزم چیکر",
plagiarismDesc: "مواد کی اصلیت چیک کریں۔ 80K+ ماہانہ تلاش۔",
qrTitle: "QR کوڈ جنریٹر",
qrDesc: "URLs، ٹیکسٹ، WiFi کے لیے QR کوڈ بنائیں۔",
backlinkTitle: "بیک لنک چیکر",
backlinkDesc: "بیک لنک پروفائل کا تجزیہ کریں۔",
keywordDensityTitle: "کیورڈ ڈینسٹی چیکر",
keywordDensityDesc: "کیورڈ ڈینسٹی کا تجزیہ کریں۔",
speedTestTitle: "ویب سائٹ سپیڈ ٹیسٹ",
speedTestDesc: "پیج لوڈ ٹائم ٹیسٹ کریں۔",
sslTitle: "SSL چیکر",
sslDesc: "SSL سرٹیفکیٹ کی میعاد چیک کریں۔",
aiDetectorTitle: "AI کنٹینٹ ڈیٹیکٹر",
aiDetectorDesc: "AI-جنریٹڈ کنٹینٹ ڈیٹیکٹ کریں۔ ChatGPT، Gemini ڈیٹیکشن۔",
pagespeedTitle: "PageSpeed Insights",
pagespeedDesc: "Google PageSpeed Insights تجزیہ۔",
schemaTitle: "اسکیما مارک اپ جنریٹر",
schemaDesc: "رچ سنیپٹس کے لیے JSON-LD ڈیٹا بنائیں۔",
gscVisualizerTitle: "GSC ڈیٹا ویژولائزر",
gscVisualizerDesc: "Google Search Console ڈیٹا دیکھیں۔",
internalLinkTitle: "انٹرنل لنک سجیسٹر",
internalLinkDesc: "SEO کے لیے سمارٹ انٹرنل لنکنگ۔",
trendingKeywordsTitle: "ٹرینڈنگ کیورڈز فائنڈر",
trendingKeywordsDesc: "گلوبل مارکیٹ کے لیے ٹرینڈنگ کیورڈز ڈھونڈیں۔",
voiceSearchTitle: "وائس سرچ آپٹیمائزر",
voiceSearchDesc: "Google Voice، Alexa اور Siri کے لیے مواد آپٹیمائز کریں۔",
crawlerTitle: "ویب سائٹ کرالر",
crawlerDesc: "کسی بھی ویب سائٹ کو کرال کریں۔",

ctaTitle: "تمام 15 مفت SEO ٹولز دریافت کریں",
ctaDesc: "15 ٹولز۔ 100% مفت۔ 2026 اپڈیٹڈ۔",
browseAll: "تمام کیٹگریز براؤز کریں",

footerDesc: "عالمی SEO کمیونٹی کے لیے 15 ضروری مفت SEO ٹولز۔",
alsoAvailable: "یہ بھی دستیاب:",
quickLinks: "فوری لنکس",
globalToolsFooter: "عالمی SEO",
popularTools: "مقبول ٹولز",
copyright: "© 2026 FreeSEOToolHub.com | جملہ حقوق محفوظ",
privacy: "پرائیویسی پالیسی",
madeIn: "🌍 عالمی SEO کمیونٹی کے لیے | 2026 اپڈیٹڈ",

allToolsPageTitle: "15 مفت SEO ٹولز 2026",
allToolsHeader: "🚀 تمام 15 مفت SEO ٹولز (2026)",
allToolsHeaderDesc: "15 ضروری SEO ٹولز۔",
allToolsSearchPlaceholder: "15 ٹولز تلاش کریں...",

filterAll: "📋 تمام ٹولز (15)",
filterGlobal: "🌍 عالمی SEO (15)",
filterHot: "🔥 ٹرینڈنگ 2026",

globalCatTitle: "عالمی ٹولز",
globalCatDesc: "دنیا بھر کے صارفین کے لیے۔",

metaTagTitle: "میٹا ٹیگ جنریٹر",
metaTagDesc: "SEO میٹا ٹیگز جنریٹ کریں۔ 2026 اپڈیٹڈ۔",
generateTags: "ٹیگز بنائیں",
checkNow: "ابھی چیک کریں",
generateQR: "QR بنائیں",
checkBacklinks: "بیک لنک چیک کریں",
checkDensity: "کثافت چیک کریں",
testSpeed: "سپیڈ ٹیسٹ کریں",
checkSSL: "SSL چیک کریں",
detectAI: "AI ڈیٹیکٹ کریں",
runTest: "ٹیسٹ چلائیں",
generateSchema: "اسکیما بنائیں",
visualizeGSC: "GSC دیکھیں",
getSuggestions: "تجاویز لیں",
findTrends: "ٹرینڈ ڈھونڈیں",
optimizeVoice: "وائس آپٹیمائز کریں",
startCrawl: "کرال شروع کریں",

totalCountBadge: "15 مفت SEO ٹولز | 100% مفت | 2026 اپڈیٹڈ",
madeFor: "🌍 عالمی SEO کمیونٹی کے لیے | 2026 اپڈیٹڈ"
},

de: {
brand: "Kostenlose SEO-Tools Hub",
home: "Startseite",
allTools: "Alle Tools",
about: "Über uns",
contact: "Kontakt",
blog: "Blog",
language: "Sprache",
chooseLang: "🌐 Wählen Sie Ihre Sprache",

heroHighlight: "Kostenlose SEO",
heroTools: "Tools",
heroSubtitle: "🌍 Für globale Nutzer",
heroDesc: "15 essentielle kostenlose SEO-Tools: Meta-Tag-Generator, Plagiatsprüfung, QR-Code-Generator, Backlink-Checker, Keyword-Dichte-Checker, Website-Geschwindigkeitstest, SSL-Checker, KI-Content-Detektor, PageSpeed Insights, Schema-Markup-Generator, GSC-Visualizer, Internal-Link-Vorschlag, Trend-Keyword-Finder, Voice-Search-Optimierer, Website-Crawler. 100% kostenlos, keine Anmeldung, 2026 aktualisiert.",
exploreAll: "Alle 15 Tools erkunden",
browseCat: "Kategorien durchsuchen",

quickGlobal: "🌍 Globale SEO Tools",

whyTitle: "Warum unsere Tools?",
whyDesc: "Wir bieten 15 essentielle SEO-Tools, die weltweit am häufigsten genutzt werden.",

catGlobal: "🌍 Global Universal",
catGlobalDesc: "15+ Tools. Meta-Tags, Plagiat, QR-Codes, Backlinks, SSL, Geschwindigkeitstest, KI-Erkennung, Schema, GSC, Internal Links, Trend-Keywords, Voice Search, Crawler.",

searchPlaceholder: "15 Tools durchsuchen...",
noToolsFound: "Keine Tools gefunden",
tryDifferent: "Andere Keywords versuchen",

globalBadge: "🌍 Globale SEO",
globalTitle: "Essentielle SEO-Tools",
globalDesc: "Für Webmaster weltweit. Meta-Tags, Plagiat, Backlink-Analyse, SSL, Geschwindigkeitstest, KI-Erkennung, Schema, GSC, Internal Links, Trend-Keywords, Voice Search, Website-Crawler.",
viewAllGlobal: "Alle 15 Globalen Tools →",

metaTitle: "Meta-Tag Generator",
metaDesc: "SEO Meta-Tags & Open Graph generieren.",
plagiarismTitle: "Plagiatsprüfung",
plagiarismDesc: "Inhaltsoriginalität prüfen.",
qrTitle: "QR-Code Generator",
qrDesc: "QR-Codes für URLs, Text, WiFi erstellen.",
backlinkTitle: "Backlink Checker",
backlinkDesc: "Backlink-Profil analysieren.",
keywordDensityTitle: "Keyword-Dichte-Checker",
keywordDensityDesc: "Keyword-Dichte analysieren.",
speedTestTitle: "Website-Geschwindigkeitstest",
speedTestDesc: "Ladezeit testen.",
sslTitle: "SSL-Checker",
sslDesc: "SSL-Zertifikat prüfen.",
aiDetectorTitle: "KI-Content-Detektor",
aiDetectorDesc: "KI-generierten Content erkennen. ChatGPT, Gemini.",
pagespeedTitle: "PageSpeed Insights",
pagespeedDesc: "Google PageSpeed Insights.",
schemaTitle: "Schema-Markup-Generator",
schemaDesc: "JSON-LD für Rich Snippets.",
gscVisualizerTitle: "GSC-Data-Visualizer",
gscVisualizerDesc: "Google Search Console Daten visualisieren.",
internalLinkTitle: "Internal-Link-Vorschlag",
internalLinkDesc: "Intelligente interne Verlinkung.",
trendingKeywordsTitle: "Trend-Keyword-Finder",
trendingKeywordsDesc: "Trending Keywords für den globalen Markt.",
voiceSearchTitle: "Voice-Search-Optimierer",
voiceSearchDesc: "Für Google Voice, Alexa & Siri optimieren.",
crawlerTitle: "Website-Crawler",
crawlerDesc: "Jede Website crawlen.",

ctaTitle: "Alle 15 Tools erkunden",
ctaDesc: "15 Tools. 100% Kostenlos. 2026.",
browseAll: "Alle Kategorien →",

footerDesc: "15 essentielle SEO-Tools.",
alsoAvailable: "Auch verfügbar in:",
quickLinks: "Quick Links",
globalToolsFooter: "Globale SEO",
popularTools: "Beliebte Tools",
copyright: "© 2026 FreeSEOToolHub.com | Alle Rechte vorbehalten",
privacy: "Datenschutz",
madeIn: "🌍 Für die globale SEO-Community | 2026",

allToolsPageTitle: "15 Kostenlose SEO-Tools 2026",
allToolsHeader: "🚀 Alle 15 SEO-Tools (2026)",
allToolsHeaderDesc: "15 essentielle SEO-Tools.",
allToolsSearchPlaceholder: "15 Tools durchsuchen...",

filterAll: "📋 Alle Tools (15)",
filterGlobal: "🌍 Globale SEO (15)",
filterHot: "🔥 Trending 2026",

globalCatTitle: "Globale Tools",
globalCatDesc: "Für Nutzer weltweit.",

metaTagTitle: "Meta-Tag Generator",
metaTagDesc: "SEO Meta-Tags generieren. 2026.",
generateTags: "Tags generieren",
checkNow: "Jetzt prüfen",
generateQR: "QR generieren",
checkBacklinks: "Backlinks prüfen",
checkDensity: "Dichte prüfen",
testSpeed: "Geschwindigkeit testen",
checkSSL: "SSL prüfen",
detectAI: "KI erkennen",
runTest: "Test starten",
generateSchema: "Schema generieren",
visualizeGSC: "GSC visualisieren",
getSuggestions: "Vorschläge erhalten",
findTrends: "Trends finden",
optimizeVoice: "Voice optimieren",
startCrawl: "Crawlen starten",

totalCountBadge: "15 Tools | 100% Kostenlos | 2026",
madeFor: "🌍 Für die globale SEO-Community | 2026"
},

es: {
brand: "Herramientas SEO Gratis Hub",
home: "Inicio",
allTools: "Todas",
about: "Acerca de",
contact: "Contacto",
blog: "Blog",
language: "Idioma",
chooseLang: "🌐 Elige tu idioma",

heroHighlight: "SEO Gratis",
heroTools: "Herramientas",
heroSubtitle: "🌍 Para usuarios globales",
heroDesc: "15 herramientas SEO gratuitas esenciales: Generador de Meta Tags, Detector de Plagio, Generador de QR, Verificador de Backlinks, Verificador de Densidad de Keywords, Test de Velocidad, Verificador SSL, Detector de IA, PageSpeed Insights, Generador de Schema, Visualizador GSC, Sugeridor de Enlaces Internos, Buscador de Keywords Tendencias, Optimizador de Búsqueda por Voz, Rastreador Web. 100% gratis, sin registro, actualizado 2026.",
exploreAll: "Explorar 15 Herramientas",
browseCat: "Ver Categorías",

quickGlobal: "🌍 SEO Global",

whyTitle: "¿Por qué elegirnos?",
whyDesc: "Ofrecemos 15 herramientas SEO esenciales utilizadas en todo el mundo.",

catGlobal: "🌍 Global Universal",
catGlobalDesc: "15+ herramientas. Meta tags, plagio, QR, backlinks, SSL, velocidad, IA, schema, GSC, enlaces internos, tendencias, voz, rastreador.",

searchPlaceholder: "Buscar 15 herramientas...",
noToolsFound: "Sin resultados",
tryDifferent: "Prueba otras palabras",

globalBadge: "🌍 SEO Global",
globalTitle: "Herramientas SEO Esenciales",
globalDesc: "Para webmasters mundiales. Meta tags, plagio, backlinks, SSL, velocidad, IA, schema, GSC, enlaces internos, tendencias, voz, rastreador.",
viewAllGlobal: "Ver 15 Herramientas Globales →",

metaTitle: "Generador Meta Tags",
metaDesc: "Generar meta tags SEO y Open Graph.",
plagiarismTitle: "Detector de Plagio",
plagiarismDesc: "Verificar originalidad del contenido.",
qrTitle: "Generador QR",
qrDesc: "Crear códigos QR para URLs, texto, WiFi.",
backlinkTitle: "Verificador Backlinks",
backlinkDesc: "Analizar perfil de backlinks.",
keywordDensityTitle: "Verificador Densidad",
keywordDensityDesc: "Analizar densidad de keywords.",
speedTestTitle: "Test de Velocidad",
speedTestDesc: "Probar tiempo de carga.",
sslTitle: "Verificador SSL",
sslDesc: "Verificar certificado SSL.",
aiDetectorTitle: "Detector de IA",
aiDetectorDesc: "Detectar contenido generado por IA. ChatGPT, Gemini.",
pagespeedTitle: "PageSpeed Insights",
pagespeedDesc: "Análisis de PageSpeed Insights.",
schemaTitle: "Generador Schema",
schemaDesc: "JSON-LD para rich snippets.",
gscVisualizerTitle: "Visualizador GSC",
gscVisualizerDesc: "Visualizar datos de Search Console.",
internalLinkTitle: "Sugeridor Links Internos",
internalLinkDesc: "Sugerencias de enlaces internos.",
trendingKeywordsTitle: "Buscador Tendencias",
trendingKeywordsDesc: "Keywords tendencia para mercado global.",
voiceSearchTitle: "Optimizador de Voz",
voiceSearchDesc: "Optimizar para Google Voice, Alexa y Siri.",
crawlerTitle: "Rastreador Web",
crawlerDesc: "Rastrear cualquier sitio web.",

ctaTitle: "Explorar 15 Herramientas SEO",
ctaDesc: "15 Herramientas. 100% Gratis. 2026.",
browseAll: "Ver Categorías →",

footerDesc: "15 herramientas SEO esenciales.",
alsoAvailable: "También disponible en:",
quickLinks: "Enlaces",
globalToolsFooter: "SEO Global",
popularTools: "Populares",
copyright: "© 2026 FreeSEOToolHub.com | Todos los derechos reservados",
privacy: "Privacidad",
madeIn: "🌍 Para la comunidad SEO global | 2026",

allToolsPageTitle: "15 Herramientas SEO Gratis 2026",
allToolsHeader: "🚀 Todas las 15 Herramientas (2026)",
allToolsHeaderDesc: "15 herramientas SEO esenciales.",
allToolsSearchPlaceholder: "Buscar 15 herramientas...",

filterAll: "📋 Todas (15)",
filterGlobal: "🌍 SEO Global (15)",
filterHot: "🔥 Tendencia 2026",

globalCatTitle: "Herramientas Globales",
globalCatDesc: "Para usuarios de todo el mundo.",

metaTagTitle: "Generador Meta Tags",
metaTagDesc: "Generar meta tags SEO. 2026.",
generateTags: "Generar Tags",
checkNow: "Verificar",
generateQR: "Generar QR",
checkBacklinks: "Verificar Backlinks",
checkDensity: "Verificar Densidad",
testSpeed: "Probar Velocidad",
checkSSL: "Verificar SSL",
detectAI: "Detectar IA",
runTest: "Ejecutar Prueba",
generateSchema: "Generar Schema",
visualizeGSC: "Visualizar GSC",
getSuggestions: "Obtener Sugerencias",
findTrends: "Encontrar Tendencias",
optimizeVoice: "Optimizar Voz",
startCrawl: "Iniciar Rastreo",

totalCountBadge: "15 Herramientas | 100% Gratis | 2026",
madeFor: "🌍 Para la comunidad SEO global | 2026"
},

en: {
// Navbar
brand: "Free SEO Tools Hub",
home: "Home",
allTools: "All Tools",
about: "About",
contact: "Contact",
blog: "Blog",
language: "Language",
chooseLang: "🌐 Choose Your Language",

// Hero Section
heroHighlight: "Free SEO",
heroTools: "Tools",
heroSubtitle: "🌍 For Global Users",
heroDesc: "15 essential free SEO tools: Meta Tag Generator, Plagiarism Checker, QR Code Generator, Backlink Checker, Keyword Density Checker, Website Speed Test, SSL Checker, AI Content Detector, PageSpeed Insights, Schema Markup Generator, GSC Visualizer, Internal Link Suggester, Trending Keywords Finder, Voice Search Optimizer, Website Crawler. All tools 100% free, no signup required, updated for 2026.",
exploreAll: "Explore All 15 Tools",
browseCat: "Browse Categories",

// Quick Links
quickGlobal: "🌍 Global SEO Tools",

// Why Choose
whyTitle: "Why Choose Our Tools?",
whyDesc: "We provide 15 essential free SEO tools that are used by professionals worldwide. Every tool is 100% free and can be used instantly without any registration.",

// Categories
catGlobal: "🌍 Global Universal",
catGlobalDesc: "15+ essential tools for worldwide users. Meta tags, plagiarism, QR codes, backlinks, SSL, speed test, AI detection, schema, GSC, internal links, trending keywords, voice search, crawler.",

// Search
searchPlaceholder: "🔍 Search 15 tools... (Meta, Plagiarism, QR, Backlink, SSL, Speed, AI, Schema, GSC, Internal Link, Trending, Voice, Crawler)...",
noToolsFound: "No Tools Found",
tryDifferent: "Try different keywords or browse by category below",

// Global SEO
globalBadge: "🌍 Global SEO",
globalTitle: "Essential Global SEO Tools",
globalDesc: "For Webmasters & SEOs Worldwide: Professional SEO tools that work universally. Meta tags, plagiarism checking, backlink analysis, SSL, speed test, AI detection, schema, GSC, internal links, trending keywords, voice search, website crawler.",
viewAllGlobal: "View All 15 Global SEO Tools →",

// Tool Cards - Global
metaTitle: "Meta Tag Generator",
metaDesc: "Generate SEO meta tags, Open Graph & Twitter Cards. 50K+ monthly searches.",
plagiarismTitle: "Plagiarism Checker",
plagiarismDesc: "Check content originality. 80K+ monthly searches. Essential for writers & students worldwide.",
qrTitle: "QR Code Generator",
qrDesc: "Create custom QR codes for URLs, text, WiFi, vCards & more.",
backlinkTitle: "Backlink Checker",
backlinkDesc: "Analyze backlink profile. Find who's linking to any website. Competitor research tool.",
keywordDensityTitle: "Keyword Density Checker",
keywordDensityDesc: "Analyze keyword density & frequency on any page.",
speedTestTitle: "Website Speed Test",
speedTestDesc: "Test page load time & performance metrics.",
sslTitle: "SSL Checker",
sslDesc: "Check SSL certificate validity & expiration date.",
aiDetectorTitle: "AI Content Detector",
aiDetectorDesc: "Detect AI-generated content. ChatGPT, Gemini detection.",
pagespeedTitle: "PageSpeed Insights",
pagespeedDesc: "Google PageSpeed Insights analysis tool.",
schemaTitle: "Schema Markup Generator",
schemaDesc: "Create JSON-LD structured data for rich snippets.",
gscVisualizerTitle: "GSC Data Visualizer",
gscVisualizerDesc: "Visualize Google Search Console data with interactive charts.",
internalLinkTitle: "Internal Link Suggester",
internalLinkDesc: "Smart internal linking suggestions for SEO.",
trendingKeywordsTitle: "Trending Keywords Finder",
trendingKeywordsDesc: "Find trending keywords for global markets.",
voiceSearchTitle: "Voice Search Optimizer",
voiceSearchDesc: "Optimize content for Google Voice, Alexa & Siri.",
crawlerTitle: "Website Crawler",
crawlerDesc: "Crawl any website. Find all pages and SEO issues.",

// CTA
ctaTitle: "🚀 Ready to Explore All 15 Free SEO Tools?",
ctaDesc: "15 Essential Tools. 100% Free. No Signup Required. Updated 2026.",
browseAll: "Browse All Categories",

// Footer
footerDesc: "15 essential free SEO tools for global SEO professionals. 100% free. Updated for 2026.",
alsoAvailable: "Also available in:",
quickLinks: "Quick Links",
globalToolsFooter: "Global SEO",
popularTools: "Popular Tools",
copyright: "© 2026 FreeSEOToolHub.com | All Rights Reserved",
privacy: "Privacy Policy",
madeIn: "🌍 Made for Global SEO Community | Updated 2026",

// All Tools Page
allToolsPageTitle: "15 Free SEO Tools 2026 | All Categories | FreeSEOToolHub",
allToolsHeader: "🚀 All 15 Free SEO Tools (2026)",
allToolsHeaderDesc: "Complete collection of 15 essential free SEO tools. All tools 100% free, no signup required.",
allToolsSearchPlaceholder: "🔍 Search all 15 tools... (Meta, Plagiarism, QR, Backlink, SSL, Speed, AI, Schema, GSC, Internal Link, Trending, Voice, Crawler)...",

filterAll: "📋 All Tools (15)",
filterGlobal: "🌍 Global SEO (15)",
filterHot: "🔥 Trending 2026",

globalCatTitle: "Global Tools - No Regional Limits",
globalCatDesc: "For Worldwide Users: These global SEO tools work universally — no regional restrictions. Perfect for bloggers, webmasters, developers, and SEO professionals worldwide.",

metaTagTitle: "Meta Tag Generator",
metaTagDesc: "Generate SEO meta tags, Open Graph & Twitter Cards. Updated 2026.",
generateTags: "Generate Tags",
checkNow: "Check Now",
generateQR: "Generate QR",
checkBacklinks: "Check Backlinks",
checkDensity: "Check Density",
testSpeed: "Test Speed",
checkSSL: "Check SSL",
detectAI: "Detect AI",
runTest: "Run Test",
generateSchema: "Generate Schema",
visualizeGSC: "Visualize GSC",
getSuggestions: "Get Suggestions",
findTrends: "Find Trends",
optimizeVoice: "Optimize Voice",
startCrawl: "Start Crawl",

totalCountBadge: "15 Free SEO Tools | 100% Free | No Signup Required | Updated 2026",
madeFor: "🌍 Made for Global SEO Community | Updated 2026"
}
};

// =============================================
// Language Functions
// =============================================

function getLang() {
const params = new URLSearchParams(window.location.search);
return params.get('lang') || 'en';
}

function applyLanguage(lang) {
const t = translations[lang];
if (!t) return;

// Apply all data-translate elements
document.querySelectorAll('[data-translate]').forEach(el => {
const key = el.getAttribute('data-translate');
if (t[key]) {
if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
el.placeholder = t[key];
} else {
el.textContent = t[key];
}
}
});

// Update HTML lang
document.documentElement.lang = lang;
if (t.brand) document.title = t.brand;

// Save preference
localStorage.setItem('preferredLang', lang);
}

// Language switch function
function switchLanguage(lang) {
const url = new URL(window.location);
url.searchParams.set('lang', lang);
window.location = url.toString();
}

// Page Load
document.addEventListener('DOMContentLoaded', () => {
const savedLang = localStorage.getItem('preferredLang');
const urlLang = new URLSearchParams(window.location.search).get('lang');
const lang = urlLang || savedLang || 'en';
applyLanguage(lang);
});

// Add lang parameter to all internal links
document.addEventListener('DOMContentLoaded', function() {
const lang = getLang();
if (lang !== 'en') {
document.querySelectorAll('a').forEach(link => {
try {
const url = new URL(link.href, window.location.origin);
if (url.hostname === window.location.hostname) {
url.searchParams.set('lang', lang);
link.href = url.pathname + url.search;
}
} catch(e) {}
});
}
});
