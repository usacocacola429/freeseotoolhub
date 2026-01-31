 * Free SEO Tool Hub - Main JavaScript
 * Version: 2.0
 */

// Configuration
const CONFIG = {
    SITE_NAME: 'Free SEO Tool Hub',
    SITE_URL: window.location.origin,
    TOOLS_PER_PAGE: 12,
    API_BASE_URL: '', // Add if you have backend API
    VERSION: '2.0.0'
};

// Tool Database
const TOOLS_DATABASE = {
    'keyword-research': [
        {
            id: 'keyword-density',
            name: 'Keyword Density Checker',
            description: 'Analyze keyword usage and density in your content',
            url: 'tools/keyword-research/keyword-density.html',
            icon: 'fas fa-chart-pie',
            category: 'Keyword Research',
            featured: true,
            tags: ['keyword', 'analysis', 'content', 'seo']
        },
        {
            id: 'trending-keywords',
            name: 'Trending Keywords Finder',
            description: 'Discover popular and rising search terms',
            url: 'tools/keyword-research/trending-keywords.html',
            icon: 'fas fa-chart-line',
            category: 'Keyword Research',
            featured: true,
            tags: ['trending', 'keywords', 'research', 'popular']
        },
        {
            id: 'serp-position',
            name: 'SERP Position Checker',
            description: 'Check your website position in search results',
            url: 'tools/keyword-research/serp-position-checker.html',
            icon: 'fas fa-search',
            category: 'Keyword Research',
            featured: false,
            tags: ['serp', 'ranking', 'position', 'google']
        }
    ],
    'technical-seo': [
        {
            id: 'ssl-checker',
            name: 'SSL Checker',
            description: 'Verify SSL certificate status and validity',
            url: 'tools/technical-seo/ssl-checker.html',
            icon: 'fas fa-lock',
            category: 'Technical SEO',
            featured: true,
            tags: ['ssl', 'security', 'certificate', 'https']
        },
        {
            id: 'canonical-checker',
            name: 'Canonical URL Checker',
            description: 'Check canonical tags and URL canonicalization',
            url: 'tools/technical-seo/canonical-url-checker.html',
            icon: 'fas fa-link',
            category: 'Technical SEO',
            featured: false,
            tags: ['canonical', 'url', 'tags', 'duplicate']
        },
        {
            id: 'sitemap-generator',
            name: 'Sitemap Generator',
            description: 'Create XML sitemaps for your website',
            url: 'tools/technical-seo/sitemap-generator.html',
            icon: 'fas fa-sitemap',
            category: 'Technical SEO',
            featured: true,
            tags: ['sitemap', 'xml', 'generator', 'seo']
        }
    ],
    'backlink-tools': [
        {
            id: 'backlink-checker',
            name: 'Backlink Checker',
            description: 'Check backlinks for any website',
            url: 'tools/backlink-tools/backlink-checker.html',
            icon: 'fas fa-external-link-alt',
            category: 'Backlink Tools',
            featured: true,
            tags: ['backlinks', 'analysis', 'links', 'seo']
        },
        {
            id: 'broken-link-checker',
            name: 'Broken Link Checker',
            description: 'Find and fix broken links on your website',
            url: 'tools/backlink-tools/broken-link-checker.html',
            icon: 'fas fa-unlink',
            category: 'Backlink Tools',
            featured: false,
            tags: ['broken', 'links', '404', 'errors']
        },
        {
            id: 'domain-authority',
            name: 'Domain Authority Checker',
            description: 'Check domain authority and ranking metrics',
            url: 'tools/backlink-tools/domain-authority-checker.html',
            icon: 'fas fa-globe',
            category: 'Backlink Tools',
            featured: false,
            tags: ['domain', 'authority', 'metrics', 'rank']
        }
    ],
    'content-tools': [
        {
            id: 'plagiarism-checker',
            name: 'Plagiarism Checker',
            description: 'Check content for plagiarism and originality',
            url: 'tools/content-tools/plagiarism-checker.html',
            icon: 'fas fa-search',
            category: 'Content Tools',
            featured: true,
            tags: ['plagiarism', 'content', 'originality', 'check']
        },
        {
            id: 'grammar-checker',
            name: 'Grammar & Spell Checker',
            description: 'Check grammar and spelling errors in content',
            url: 'tools/content-tools/grammar-spell-checker.html',
            icon: 'fas fa-spell-check',
            category: 'Content Tools',
            featured: false,
            tags: ['grammar', 'spell', 'check', 'writing']
        },
        {
            id: 'headline-analyzer',
            name: 'Headline Analyzer',
            description: 'Analyze and optimize your headlines for SEO',
            url: 'tools/content-tools/headline-analyzer.html',
            icon: 'fas fa-heading',
            category: 'Content Tools',
            featured: false,
            tags: ['headline', 'analyzer', 'title', 'seo']
        },
        {
            id: 'meta-tag-generator',
            name: 'Meta Tag Generator',
            description: 'Generate SEO-friendly meta tags',
            url: 'tools/content-tools/meta-tag-generator.html',
            icon: 'fas fa-code',
            category: 'Content Tools',
            featured: true,
            tags: ['meta', 'tags', 'generator', 'seo']
        }
    ]
};

// All tools flat array
const ALL_TOOLS = Object.values(TOOLS_DATABASE).flat();

// Utility Functions
const Utils = {
    // Format numbers with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    // Debounce function for search
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Copy text to clipboard
    copyToClipboard: (text) => {
        return navigator.clipboard.writeText(text).then(() => {
            return true;
        }).catch(err => {
            console.error('Failed to copy: ', err);
            return false;
        });
    },
    
    // Show notification
    showNotification: (message, type = 'info') => {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    },
    
    // Get URL parameters
    getUrlParams: () => {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split('&');
        
        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            if (key) {
                params[decodeURIComponent(key)] = decodeURIComponent(value || '');
            }
        });
        
        return params;
    },
    
    // Set page title
    setPageTitle: (title) => {
        document.title = `${title} - ${CONFIG.SITE_NAME}`;
    }
};

// Tool Management
const ToolManager = {
    // Search tools
    searchTools: (query) => {
        if (!query) return ALL_TOOLS;
        
        const searchTerms = query.toLowerCase().split(' ');
        return ALL_TOOLS.filter(tool => {
            const searchString = `
                ${tool.name.toLowerCase()}
                ${tool.description.toLowerCase()}
                ${tool.category.toLowerCase()}
                ${tool.tags.join(' ')}
            `;
            
            return searchTerms.every(term => searchString.includes(term));
        });
    },
    
    // Get tools by category
    getToolsByCategory: (category) => {
        return TOOLS_DATABASE[category] || [];
    },
    
    // Get featured tools
    getFeaturedTools: (count = 6) => {
        return ALL_TOOLS
            .filter(tool => tool.featured)
            .slice(0, count);
    },
    
    // Render tool card
    renderToolCard: (tool) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="tool-card h-100" data-tool-id="${tool.id}">
                    <div class="tool-icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <h4>${tool.name}</h4>
                    <p class="text-muted">${tool.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="badge bg-light text-dark">${tool.category}</span>
                        <a href="${tool.url}" class="btn btn-sm btn-outline-primary">
                            Use Tool <i class="fas fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Render category card
    renderCategoryCard: (category) => {
        const categories = {
            'keyword-research': {
                name: 'Keyword Research',
                icon: 'fas fa-search',
                color: 'primary',
                count: 8,
                description: 'Find profitable keywords and analyze competition'
            },
            'technical-seo': {
                name: 'Technical SEO',
                icon: 'fas fa-code',
                color: 'success',
                count: 6,
                description: 'Website audit, SSL check, and technical analysis'
            },
            'backlink-tools': {
                name: 'Backlink Analysis',
                icon: 'fas fa-link',
                color: 'warning',
                count: 5,
                description: 'Check backlinks and analyze link profiles'
            },
            'content-tools': {
                name: 'Content Tools',
                icon: 'fas fa-edit',
                color: 'danger',
                count: 7,
                description: 'Plagiarism check, grammar, and content optimization'
            }
        };
        
        const cat = categories[category];
        if (!cat) return '';
        
        return `
            <div class="col-md-3 mb-4">
                <a href="tools/${category}/" class="category-link">
                    <div class="category-card h-100">
                        <div class="category-icon bg-${cat.color}">
                            <i class="${cat.icon}"></i>
                        </div>
                        <h5>${cat.name}</h5>
                        <p class="small text-muted">${cat.description}</p>
                        <div class="tool-count">${cat.count} Tools</div>
                    </div>
                </a>
            </div>
        `;
    }
};

// Analytics
const Analytics = {
    trackToolUsage: (toolId) => {
        try {
            const usage = JSON.parse(localStorage.getItem('tool_usage') || '{}');
            usage[toolId] = (usage[toolId] || 0) + 1;
            localStorage.setItem('tool_usage', JSON.stringify(usage));
            
            // Send to analytics if configured
            if (typeof gtag !== 'undefined') {
                gtag('event', 'tool_usage', {
                    'tool_id': toolId,
                    'usage_count': usage[toolId]
                });
            }
        } catch (e) {
            console.error('Analytics error:', e);
        }
    },
    
    getPopularTools: (limit = 5) => {
        try {
            const usage = JSON.parse(localStorage.getItem('tool_usage') || '{}');
            return Object.entries(usage)
                .sort(([,a], [,b]) => b - a)
                .slice(0, limit)
                .map(([id]) => ALL_TOOLS.find(tool => tool.id === id))
                .filter(tool => tool);
        } catch (e) {
            return [];
        }
    }
};

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log(`${CONFIG.SITE_NAME} v${CONFIG.VERSION} initialized`);
    
    // Initialize components based on page
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/') {
        initHomePage();
    } else if (path.includes('all-tools.html')) {
        initAllToolsPage();
    } else if (path.includes('tools.html')) {
        initCategoriesPage();
    }
    
    // Common initialization
    initCommonFeatures();
});

function initHomePage() {
    // Load featured tools
    const featuredContainer = document.getElementById('featuredTools');
    if (featuredContainer) {
        const featuredTools = ToolManager.getFeaturedTools();
        featuredTools.forEach(tool => {
            const toolHTML = ToolManager.renderToolCard(tool);
            featuredContainer.insertAdjacentHTML('beforeend', toolHTML);
        });
    }
    
    // Load popular tools from analytics
    const popularTools = Analytics.getPopularTools(3);
    if (popularTools.length > 0) {
        const popularContainer = document.getElementById('popularTools');
        if (popularContainer) {
            popularTools.forEach(tool => {
                const toolHTML = ToolManager.renderToolCard(tool);
                popularContainer.insertAdjacentHTML('beforeend', toolHTML);
            });
        }
    }
}

function initAllToolsPage() {
    const searchInput = document.getElementById('toolSearch');
    const toolsContainer = document.getElementById('toolsContainer');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (!toolsContainer) return;
    
    // Load all tools initially
    renderTools(ALL_TOOLS, toolsContainer);
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', Utils.debounce(function() {
            const query = this.value.trim();
            const filteredTools = ToolManager.searchTools(query);
            renderTools(filteredTools, toolsContainer);
        }, 300));
    }
    
    // Category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const category = this.value;
            let filteredTools = ALL_TOOLS;
            
            if (category !== 'all') {
                filteredTools = ToolManager.getToolsByCategory(category);
            }
            
            renderTools(filteredTools, toolsContainer);
        });
    }
    
    // Check for URL search parameter
    const params = Utils.getUrlParams();
    if (params.search && searchInput) {
        searchInput.value = params.search;
        const filteredTools = ToolManager.searchTools(params.search);
        renderTools(filteredTools, toolsContainer);
    }
}

function initCategoriesPage() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    if (!categoriesContainer) return;
    
    const categories = ['keyword-research', 'technical-seo', 'backlink-tools', 'content-tools'];
    
    categories.forEach(category => {
        const categoryHTML = ToolManager.renderCategoryCard(category);
        categoriesContainer.insertAdjacentHTML('beforeend', categoryHTML);
    });
}

function initCommonFeatures() {
    // Initialize search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="text"]');
            if (searchInput && searchInput.value.trim()) {
                window.location.href = `pages/all-tools.html?search=${encodeURIComponent(searchInput.value.trim())}`;
            }
        });
    }
    
    // Track tool usage on tool pages
    const toolId = getCurrentToolId();
    if (toolId) {
        Analytics.trackToolUsage(toolId);
    }
    
    // Initialize copy buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('copy-btn') || e.target.closest('.copy-btn')) {
            const button = e.target.classList.contains('copy-btn') ? e.target : e.target.closest('.copy-btn');
            const text = button.dataset.copy || button.closest('[data-copy]')?.dataset.copy;
            
            if (text) {
                Utils.copyToClipboard(text).then(success => {
                    if (success) {
                        const originalHTML = button.innerHTML;
                        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        button.classList.add('btn-success');
                        
                        setTimeout(() => {
                            button.innerHTML = originalHTML;
                            button.classList.remove('btn-success');
                        }, 2000);
                        
                        Utils.showNotification('Copied to clipboard!', 'success');
                    }
                });
            }
        }
    });
    
    // Initialize share buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('share-btn') || e.target.closest('.share-btn')) {
            e.preventDefault();
            shareCurrentPage();
        }
    });
}

function renderTools(tools, container) {
    if (!container) return;
    
    if (tools.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No tools found</h4>
                <p class="text-muted">Try a different search term</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    tools.forEach(tool => {
        const toolHTML = ToolManager.renderToolCard(tool);
        container.insertAdjacentHTML('beforeend', toolHTML);
    });
}

function getCurrentToolId() {
    // Extract tool ID from current page
    const path = window.location.pathname;
    const match = path.match(/\/([^\/]+)\.html$/);
    if (match) {
        return match[1].replace('-checker', '').replace('-generator', '').replace('-analyzer', '');
    }
    return null;
}

function shareCurrentPage() {
    const title = document.title;
    const url = window.location.href;
    const text = `Check out this free SEO tool: ${title}`;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        });
    } else {
        // Fallback: Copy URL
        Utils.copyToClipboard(url).then(success => {
            if (success) {
                Utils.showNotification('Link copied to clipboard! Share it with others.', 'success');
            }
        });
    }
}

// Export for global access
window.SEOTools = {
    config: CONFIG,
    utils: Utils,
    tools: ToolManager,
    analytics: Analytics,
    shareTool: shareCurrentPage
};
EOF

echo "Main JavaScript file created!"
