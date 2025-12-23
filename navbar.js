// navbar.js - ऑटोमेटिक मेगा मेनू
document.write(`
<nav class="navbar">
    <div class="nav-container">
        <a href="index.html" class="logo">
            <i class="fas fa-tools"></i> <span>FreeSEOToolHub</span>.com
        </a>
        
        <div class="nav-links">
            <a href="index.html" class="nav-link"><i class="fas fa-home"></i> होम</a>
            
            <!-- मेगा मेनू बटन -->
            <div class="mega-menu-container">
                <a href="tools.html" class="nav-link mega-menu-btn">
                    <i class="fas fa-th"></i> टूल्स <i class="fas fa-chevron-down"></i>
                </a>
                
                <!-- मेगा मेनू कंटेंट -->
                <div class="mega-menu" id="megaMenu">
                    <!-- यहाँ टूल्स ऑटोमेटिक लोड होंगे -->
                </div>
            </div>
            
            <a href="about.html" class="nav-link"><i class="fas fa-info-circle"></i> जानकारी</a>
            <a href="contact.html" class="nav-link"><i class="fas fa-envelope"></i> संपर्क</a>
        </div>
    </div>
</nav>

<style>
/* मेगा मेनू CSS */
.mega-menu-container { position: relative; display: inline-block; }

.mega-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 500px;
    background: white;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border-radius: 12px;
    padding: 25px;
    z-index: 1000;
    border: 1px solid #eee;
}

.mega-menu-container:hover .mega-menu { display: block; }

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
    padding: 10px 12px;
    color: #333;
    text-decoration: none;
    border-radius: 6px;
    margin-bottom: 5px;
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
    padding: 10px 25px !important;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
}

.all-tools-btn:hover {
    background: #3a56d4 !important;
    transform: translateY(-2px);
}

/* मोबाइल */
@media (max-width: 768px) {
    .mega-menu { width: 300px; left: -100px; }
    .mega-menu-content { grid-template-columns: 1fr; }
}
</style>

<script>
// सभी टूल्स की लिस्ट - यहाँ सिर्फ नया टूल ऐड करें!
const allTools = [
    // {name: "टूल का नाम", link: "फाइल.html", icon: "fa-icon", category: "category"}
    {name: "कीवर्ड चेकर", link: "keyword-density.html", icon: "fa-chart-pie", category: "एनालिसिस"},
    {name: "मेटा टैग जनरेटर", link: "meta-tag-generator.html", icon: "fa-search", category: "ऑप्टिमाइज़ेशन"},
    {name: "बैकलिंक चेकर", link: "backlink-checker.html", icon: "fa-link", category: "एनालिसिस"},
    {name: "स्पीड टेस्ट", link: "website-speed-test.html", icon: "fa-tachometer-alt", category: "एनालिसिस"},
    {name: "SSL चेकर", link: "ssl-checker.html", icon: "fa-lock", category: "ऑप्टिमाइज़ेशन"},
    {name: "प्लेजियरिज्म चेकर", link: "plagiarism-checker.html", icon: "fa-search", category: "कंटेंट"}
    // 🔽 भविष्य में नया टूल जोड़ने के लिए यहाँ एक लाइन ऐड करें
    // {name: "नया टूल", link: "new-tool.html", icon: "fa-icon", category: "category"},
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
    
    // HTML जेनरेट करें
    let html = '<div class="mega-menu-content">';
    
    // हर कैटेगरी के लिए सेक्शन बनाएं
    Object.keys(categories).forEach(category => {
        html += `
            <div class="mega-menu-section">
                <h4><i class="fas fa-folder"></i> ${category}</h4>
        `;
        
        categories[category].forEach(tool => {
            html += `
                <a href="${tool.link}">
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
                <i class="fas fa-list"></i> सभी टूल्स देखें
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
</script>
`);
