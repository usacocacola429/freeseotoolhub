// ai-assistant.js - Universal AI Chat Widget for FreeSEOToolHub
// Version: 2.0 | Updated: May 2, 2026
// Gemini AI Powered | Save this file in your repo root directory

(function() {
    'use strict';

    // ============================================
    // 🔑 CONFIGURATION - API Key Already Set
    // ============================================
    const GEMINI_API_KEY = 'AIzaSyBoacr-e_c0c8LpkEFFZ0hc2weey-TY8og';
    const USE_REAL_AI = GEMINI_API_KEY.length > 30; // Valid API key detected → Real AI mode
    
    // Log initialization
    console.log('%c🤖 AI Assistant %cInitialized %c| %c' + (USE_REAL_AI ? 'Gemini AI Mode ✨' : 'Local Mode 📦'), 
        'font-size:14px;', '', 'color:#10b981;', 'color:#667eea;font-weight:bold;');

    // ============================================
    // TOOL-SPECIFIC KNOWLEDGE (Auto-detected from page)
    // ============================================
    const toolConfigs = {
        'meta-tag-generator': {
            name: 'Meta Tag Generator',
            description: 'Generate perfect SEO meta tags, Open Graph tags, and Twitter Cards for your website.',
            features: ['SEO Title & Description Generator', 'Open Graph Tags Creator', 'Twitter Cards Generator', 'JSON-LD Structured Data', 'Live Preview', 'Character Counter'],
            tips: ['Keep titles under 60 characters for best display', 'Write meta descriptions between 150-160 characters', 'Always include your primary keyword in the title', 'Use Open Graph tags for better social media sharing', 'Test your meta tags with Google Rich Results Test'],
            keywords: ['meta tags', 'seo title', 'meta description', 'open graph', 'twitter cards', 'json-ld', 'structured data']
        },
        'plagiarism-checker': {
            name: 'Plagiarism Checker',
            description: 'Check content originality with 95%+ accuracy and get AI-powered rewriting suggestions.',
            features: ['Plagiarism Detection', 'Originality Score', 'AI Rewriting Suggestions', 'Deep Web Search', 'Multiple Content Types', 'Multi-Language Support'],
            tips: ['Use 200+ words for best accuracy', 'Enable Deep Check for thorough analysis', 'Review AI suggestions to improve originality', 'Credit sources when using quotes', 'Aim for 85%+ originality for academic work'],
            keywords: ['plagiarism', 'originality', 'rewriting', 'content check', 'duplicate content', 'academic integrity']
        },
        'qr-code-generator': {
            name: 'QR Code Generator',
            description: 'Create custom QR codes with logos for URLs, WiFi, vCard, and more. High-res PNG download.',
            features: ['8 QR Types (URL, WiFi, vCard, etc.)', 'Custom Logo Upload', 'Color Customization', 'High-Res PNG Download', 'Business Templates', 'Real-Time Preview'],
            tips: ['Use high contrast colors for better scanning', 'Test QR code before printing', 'Add your logo for brand recognition', 'Keep URLs short for simpler QR codes', 'Use vCard QR for digital business cards'],
            keywords: ['qr code', 'wifi qr', 'vcard', 'business card qr', 'custom qr', 'logo qr']
        },
        'backlink-checker': {
            name: 'Backlink Checker',
            description: 'Analyze backlinks for any website. Check DA, spam score, referring domains, and country-wise distribution.',
            features: ['Backlink Analysis', 'DA/PA Metrics', 'Spam Score Detection', 'Country-wise Filter', 'Dofollow/Nofollow Ratio', 'Top Backlinks Report'],
            tips: ['Focus on quality backlinks (DA 50+)', 'Maintain diverse link profile across countries', 'Keep spam score below 10%', 'Monitor competitor backlinks regularly', 'Disavow toxic links with high spam scores'],
            keywords: ['backlinks', 'domain authority', 'spam score', 'referring domains', 'link building', 'dofollow']
        },
        'ssl-checker': {
            name: 'SSL Certificate Checker',
            description: 'Verify SSL/TLS certificates for any website. Check HTTPS security, expiry date, and protocol version.',
            features: ['SSL Validity Check', 'Expiry Date Monitoring', 'Certificate Issuer Details', 'TLS Protocol Detection', 'Cipher Suite Information', 'Security Recommendations'],
            tips: ['Renew SSL certificates 30 days before expiry', 'Upgrade to TLS 1.3 for better security', 'Use Let\'s Encrypt for free SSL certificates', 'Enable auto-renewal through your hosting provider', 'Check SSL monthly to avoid unexpected expiry'],
            keywords: ['ssl certificate', 'https', 'tls', 'website security', 'ssl expiry', 'encryption']
        },
        'domain-authority-checker': {
            name: 'Domain Authority Checker',
            description: 'Check Domain Authority (DA), Page Authority (PA), and SEO metrics for any website.',
            features: ['DA/PA Score Check', 'Bulk DA Checker (10 domains)', 'Spam Score Detection', 'Trust Flow & Citation Flow', 'MozRank Estimation', 'Competitor Comparison'],
            tips: ['DA 50+ is considered good for most niches', 'Compare your DA with direct competitors', 'Focus on DA growth over time, not absolute numbers', 'DA is relative - a local site with DA 30 can outrank DA 60', 'Build quality backlinks to improve DA'],
            keywords: ['domain authority', 'da pa checker', 'moz', 'website ranking', 'seo metrics', 'trust flow']
        },
        'image-compressor': {
            name: 'Image Compressor',
            description: 'Compress JPG, PNG, and WebP images without losing quality. 100% private - processed locally in your browser.',
            features: ['JPG/PNG/WebP Compression', 'Bulk Mode', 'Quality Slider', 'WebP Conversion', 'Privacy-First (Local Processing)', 'Before/After Preview'],
            tips: ['Use 80% quality for best size/quality balance', 'Convert to WebP for 30% smaller files', 'Compress images before uploading to your website', 'Keep original backups before compression', 'Compressed images improve Core Web Vitals'],
            keywords: ['image compression', 'compress jpg', 'webp converter', 'reduce image size', 'image optimizer', 'bulk compress']
        },
        'url-encoder': {
            name: 'URL Encoder/Decoder',
            description: 'Encode and decode URLs instantly. Bulk processing with SEO-friendly URL creation.',
            features: ['URL Encoding/Decoding', 'Bulk Processing', 'SEO-Friendly URL Mode', 'Special Character Support', 'Hindi/Unicode Support', 'Copy All Functionality'],
            tips: ['Use hyphens (-) instead of spaces in URLs', 'Keep URLs lowercase and under 75 characters', 'Avoid special characters in URLs', 'Encode URLs before using in HTML links', 'Use SEO mode to auto-generate clean URLs'],
            keywords: ['url encoding', 'percent encoding', 'url decode', 'seo friendly url', 'bulk url', 'special characters']
        },
        'website-speed-test': {
            name: 'Website Speed Test',
            description: 'Test page load speed and Core Web Vitals for any website. Get optimization recommendations.',
            features: ['Page Speed Score', 'Core Web Vitals (LCP, FCP)', 'Mobile & Desktop Testing', 'Page Size Analysis', 'Request Count', 'Optimization Tips'],
            tips: ['Aim for 90+ speed score', 'Keep LCP under 2.5 seconds', 'Compress images to reduce page size', 'Use a CDN for faster global delivery', 'Enable browser caching and Gzip compression'],
            keywords: ['page speed', 'core web vitals', 'lcp', 'website performance', 'load time', 'speed optimization']
        },
        'serp-feature-checker': {
            name: 'SERP Feature Checker',
            description: 'Analyze Google SERP features for any keyword. Check Featured Snippets, PAA, Knowledge Panels, and more.',
            features: ['Featured Snippet Detection', 'People Also Ask Analysis', 'Knowledge Panel Check', 'Video & Image Results', 'Local Pack Detection', 'Interactive Charts'],
            tips: ['Target question keywords (how, what, why) for snippets', 'Structure content with clear headings for PAA', 'Use FAQ schema for better PAA visibility', 'Keep snippet answers concise (40-60 words)', 'Monitor SERP features regularly for your keywords'],
            keywords: ['serp features', 'featured snippets', 'people also ask', 'knowledge panel', 'rich results', 'zero click']
        },
        'content-gap-analyzer': {
            name: 'Content Gap Analyzer',
            description: 'Discover what topics competitors cover that you\'re missing. Find content opportunities and topic clusters.',
            features: ['Competitor Gap Detection', 'Topic Cluster Analysis', 'Missing Keywords Finder', 'Content Coverage Score', 'Radar Chart Visualization', 'CSV Export'],
            tips: ['Prioritize high-volume missed topics first', 'Create comprehensive content for each gap', 'Build topic clusters with internal linking', 'Track your gap score over time', 'Update existing content to cover partial gaps'],
            keywords: ['content gap', 'topic research', 'competitor analysis', 'content strategy', 'topic clusters', 'editorial calendar']
        },
        'default': {
            name: 'Free SEO Tool',
            description: 'A free SEO tool by FreeSEOToolHub to help improve your website rankings.',
            features: ['SEO Optimization', 'Free to Use', 'No Registration Required', 'Instant Results'],
            tips: ['Explore all 90+ free tools on our site', 'Use multiple tools for comprehensive SEO', 'Check back regularly for new features'],
            keywords: ['seo', 'free tools', 'website optimization', 'search engine']
        }
    };

    // Auto-detect current tool from page URL
    function detectCurrentTool() {
        const path = window.location.pathname;
        for (const [key, config] of Object.entries(toolConfigs)) {
            if (path.includes(key)) return config;
        }
        return toolConfigs['default'];
    }

    const currentTool = detectCurrentTool();

    // ============================================
    // CSS Styles
    // ============================================
    const styles = `
        .ai-chat-widget * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .ai-chat-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
            font-family: 'Inter', 'Segoe UI', sans-serif;
        }
        
        .ai-chat-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .ai-chat-button:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
        }
        
        .ai-chat-button .pulse {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: rgba(102, 126, 234, 0.4);
            animation: aiPulse 2s infinite;
        }
        
        @keyframes aiPulse {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.6); opacity: 0; }
        }
        
        .ai-chat-notification {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #ef4444;
            color: white;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            animation: aiBounce 0.5s ease;
        }
        
        @keyframes aiBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
        
        .ai-chat-panel {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 380px;
            max-height: 520px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            display: none;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid #e2e8f0;
        }
        
        .ai-chat-panel.open { display: flex; }
        
        .ai-chat-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 16px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            font-size: 0.95rem;
        }
        
        .ai-chat-header button {
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.2s;
        }
        
        .ai-chat-header button:hover { background: rgba(255,255,255,0.3); }
        
        .ai-chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            max-height: 320px;
            background: #f8fafc;
        }
        
        .ai-message {
            margin-bottom: 14px;
            display: flex;
            gap: 8px;
            animation: aiMessageIn 0.3s ease;
        }
        
        @keyframes aiMessageIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .ai-message.user { justify-content: flex-end; }
        
        .ai-message .msg-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            flex-shrink: 0;
        }
        
        .ai-message.assistant .msg-avatar {
            background: #667eea;
            color: white;
        }
        
        .ai-message.user .msg-avatar {
            background: #e2e8f0;
            color: #64748b;
        }
        
        .ai-message .msg-bubble {
            padding: 10px 16px;
            border-radius: 18px;
            font-size: 0.88rem;
            line-height: 1.5;
            max-width: 80%;
            word-wrap: break-word;
        }
        
        .ai-message.assistant .msg-bubble {
            background: white;
            border: 1px solid #e2e8f0;
            color: #1e293b;
            border-bottom-left-radius: 4px;
        }
        
        .ai-message.user .msg-bubble {
            background: #667eea;
            color: white;
            border-bottom-right-radius: 4px;
        }
        
        .ai-chat-quick-actions {
            display: flex;
            gap: 8px;
            padding: 8px 16px;
            flex-wrap: wrap;
            border-top: 1px solid #f1f5f9;
        }
        
        .ai-quick-btn {
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 0.75rem;
            cursor: pointer;
            color: #475569;
            transition: all 0.2s;
            white-space: nowrap;
        }
        
        .ai-quick-btn:hover {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }
        
        .ai-chat-input-area {
            padding: 12px 16px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            gap: 8px;
            background: white;
        }
        
        .ai-chat-input-area input {
            flex: 1;
            padding: 10px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 25px;
            font-size: 0.9rem;
            font-family: inherit;
            outline: none;
            transition: border-color 0.2s;
        }
        
        .ai-chat-input-area input:focus { border-color: #667eea; }
        
        .ai-chat-input-area button {
            background: #667eea;
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s;
            flex-shrink: 0;
        }
        
        .ai-chat-input-area button:hover { background: #5a67d8; transform: scale(1.05); }
        
        .typing-indicator {
            display: flex;
            gap: 4px;
            padding: 4px 0;
        }
        
        .typing-indicator span {
            width: 7px;
            height: 7px;
            background: #94a3b8;
            border-radius: 50%;
            animation: aiTyping 1.4s infinite;
        }
        
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes aiTyping {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        
        @media (max-width: 500px) {
            .ai-chat-widget { bottom: 20px; right: 20px; }
            .ai-chat-panel { width: calc(100vw - 40px); right: 0; max-height: 450px; }
            .ai-chat-panel { border-radius: 16px; }
        }
    `;

    // ============================================
    // HTML Structure
    // ============================================
    const html = `
        <style>${styles}</style>
        <div class="ai-chat-widget" id="aiChatWidget">
            <button class="ai-chat-button" id="aiChatToggle" title="AI Assistant - Ask me anything about ${currentTool.name}!">
                <span class="pulse"></span>
                <i class="fas fa-robot"></i>
                <span class="ai-chat-notification" id="aiNotification" style="display:none;">1</span>
            </button>
            <div class="ai-chat-panel" id="aiChatPanel">
                <div class="ai-chat-header">
                    <span><i class="fas fa-robot"></i> AI SEO Assistant</span>
                    <div>
                        <button onclick="window.aiChat.clearChat()" title="Clear chat" style="margin-right:5px;"><i class="fas fa-trash-alt"></i></button>
                        <button onclick="window.aiChat.toggle()">✕</button>
                    </div>
                </div>
                <div class="ai-chat-messages" id="aiChatMessages">
                    <div class="ai-message assistant">
                        <div class="msg-avatar"><i class="fas fa-robot"></i></div>
                        <div class="msg-bubble">
                            👋 <strong>Hi! I'm your AI SEO assistant.</strong><br><br>
                            I can help with:<br>
                            • How to use <strong>${currentTool.name}</strong><br>
                            • SEO best practices & tips<br>
                            • Understanding your results<br>
                            • Content optimization advice<br><br>
                            <em>What would you like to know?</em>
                        </div>
                    </div>
                </div>
                <div class="ai-chat-quick-actions" id="aiQuickActions">
                    <button class="ai-quick-btn">🔧 How to use this tool?</button>
                    <button class="ai-quick-btn">💡 SEO tips</button>
                    <button class="ai-quick-btn">📊 Explain results</button>
                    <button class="ai-quick-btn">🆘 Help me!</button>
                </div>
                <div class="ai-chat-input-area">
                    <input type="text" id="aiChatInput" placeholder="Ask me anything about ${currentTool.name}..." onkeypress="if(event.key==='Enter')window.aiChat.send()">
                    <button onclick="window.aiChat.send()"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;

    // ============================================
    // AI Response Logic
    // ============================================
    function getLocalAIResponse(message) {
        const msg = message.toLowerCase().trim();
        
        if (/^(hi|hello|hey|yo|greetings|good morning|good evening)/.test(msg)) {
            return `Hello! 👋 How can I help you with ${currentTool.name} today? Feel free to ask about features, SEO tips, or how to use this tool.`;
        }
        
        if (/^(thank|thanks|thx|appreciate)/.test(msg)) {
            return "You're welcome! 😊 Happy to help. Is there anything else you'd like to know about SEO or this tool?";
        }
        
        if (/^(bye|goodbye|see you|later|cya)/.test(msg)) {
            return "Goodbye! 👋 Feel free to reach out anytime you need SEO help. Good luck with your optimization!";
        }
        
        if (/help|assist|support|guide|how (do|to|can) (i|you)/.test(msg)) {
            return `📖 <strong>How to use ${currentTool.name}:</strong><br><br>${currentTool.description}<br><br><strong>Key Tips:</strong><br>${currentTool.tips.map((t, i) => `${i+1}. ${t}`).join('<br>')}<br><br>Need more specific guidance? Just ask!`;
        }
        
        if (/feature|what (can|could) (you|this|it|i) do|capabilities|functions/.test(msg)) {
            return `⚡ <strong>${currentTool.name} Features:</strong><br><br>${currentTool.features.map(f => `• ${f}`).join('<br>')}<br><br>Want to learn about any specific feature?`;
        }
        
        if (/use|work|operate|run|start|begin/.test(msg)) {
            return `🔧 <strong>Getting Started with ${currentTool.name}:</strong><br><br>1. Review the input fields or options<br>2. Enter your data or URL<br>3. Click the action button<br>4. Review your results<br>5. Use export/share to save results<br><br><strong>Pro Tip:</strong> ${currentTool.tips[0]}<br><br>Need step-by-step help? Let me know!`;
        }
        
        if (/seo|search engine|ranking|google|traffic/.test(msg)) {
            return `🎯 <strong>SEO Tips for 2026:</strong><br><br>• Focus on Core Web Vitals (LCP, INP, CLS)<br>• Create comprehensive, helpful content<br>• Build quality backlinks (DA 50+)<br>• Optimize for mobile-first indexing<br>• Use structured data for rich snippets<br>• Target question-based keywords<br><br>Want specific ${currentTool.name} SEO tips? Ask away!`;
        }
        
        for (const keyword of currentTool.keywords) {
            if (msg.includes(keyword)) {
                return `🔍 <strong>About ${keyword}:</strong><br><br>This is exactly what ${currentTool.name} helps with! ${currentTool.description}<br><br><strong>Quick Tip:</strong> ${currentTool.tips[Math.floor(Math.random() * currentTool.tips.length)]}<br><br>Would you like more detailed information?`;
            }
        }
        
        if (/result|score|output|report|analysis|show|display/.test(msg)) {
            return `📊 <strong>Understanding Your Results:</strong><br><br>After using ${currentTool.name}, you'll see detailed results that help you make better SEO decisions. Look for:<br>• Key metrics and scores<br>• Recommendations for improvement<br>• Export options (CSV, copy, share)<br><br>If you see a specific result you don't understand, describe it and I'll explain!`;
        }
        
        if (/free|cost|price|pay|premium|signup|register/.test(msg)) {
            return `✅ <strong>Yes, completely FREE!</strong><br><br>${currentTool.name} and all 90+ tools on FreeSEOToolHub are:<br>• 100% Free - No credit card needed<br>• No registration required<br>• No hidden costs<br>• Unlimited usage<br><br>Enjoy! 🎉`;
        }
        
        const defaults = [
            `Great question! 🤔 Let me help with that. ${currentTool.description} Would you like specific tips on using ${currentTool.name}?`,
            `I'd love to help! 💡 ${currentTool.name} is designed to make SEO easier. What specific aspect would you like to learn about?`,
            `Interesting query! 🎯 From an SEO perspective, ${currentTool.tips[Math.floor(Math.random() * currentTool.tips.length)]} Feel free to ask more specific questions!`,
        ];
        
        return defaults[Math.floor(Math.random() * defaults.length)];
    }

    async function getAIResponse(message) {
        if (!USE_REAL_AI) {
            return getLocalAIResponse(message);
        }
        
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are a helpful AI SEO assistant for ${currentTool.name} on FreeSEOToolHub.com. 
                            Tool description: ${currentTool.description}
                            Features: ${currentTool.features.join(', ')}
                            Tips: ${currentTool.tips.join(', ')}
                            
                            Keep responses friendly, concise (2-3 sentences max), and helpful. Use emojis occasionally.
                            
                            User question: ${message}`
                        }]
                    }],
                    generationConfig: { temperature: 0.7, maxOutputTokens: 150 }
                })
            });
            
            const data = await response.json();
            if (data.candidates && data.candidates[0]) {
                return data.candidates[0].content.parts[0].text;
            }
            throw new Error('No response from AI');
        } catch (error) {
            console.warn('AI API error, using local responses:', error.message);
            return getLocalAIResponse(message);
        }
    }

    // ============================================
    // Chat UI Logic
    // ============================================
    function initAIChat() {
        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container.firstElementChild);
        
        let isOpen = false;
        let messageCount = 0;
        
        const panel = document.getElementById('aiChatPanel');
        const messagesContainer = document.getElementById('aiChatMessages');
        const input = document.getElementById('aiChatInput');
        const notification = document.getElementById('aiNotification');
        
        function toggle() {
            isOpen = !isOpen;
            panel.classList.toggle('open', isOpen);
            if (isOpen) {
                input.focus();
                notification.style.display = 'none';
            }
        }
        
        function addMessage(role, text) {
            const isUser = role === 'user';
            const avatarIcon = isUser ? 'fa-user' : 'fa-robot';
            const div = document.createElement('div');
            div.className = `ai-message ${role}`;
            div.innerHTML = `
                <div class="msg-avatar"><i class="fas ${avatarIcon}"></i></div>
                <div class="msg-bubble">${text}</div>
            `;
            messagesContainer.appendChild(div);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            return div;
        }
        
        function addTypingIndicator() {
            const div = document.createElement('div');
            div.className = 'ai-message assistant';
            div.id = 'typingIndicator';
            div.innerHTML = `
                <div class="msg-avatar"><i class="fas fa-robot"></i></div>
                <div class="msg-bubble">
                    <div class="typing-indicator">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            `;
            messagesContainer.appendChild(div);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        function removeTypingIndicator() {
            const indicator = document.getElementById('typingIndicator');
            if (indicator) indicator.remove();
        }
        
        async function send() {
            const message = input.value.trim();
            if (!message) return;
            
            input.value = '';
            messageCount++;
            
            addMessage('user', escapeHTML(message));
            addTypingIndicator();
            
            const response = await getAIResponse(message);
            removeTypingIndicator();
            addMessage('assistant', response.replace(/\n/g, '<br>'));
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'ai_chat', {
                    event_category: 'AI Assistant',
                    event_label: currentTool.name + ': ' + message.substring(0, 50)
                });
            }
            
            if (!isOpen) {
                notification.textContent = messageCount > 9 ? '9+' : messageCount;
                notification.style.display = 'flex';
            }
        }
        
        function clearChat() {
            messagesContainer.innerHTML = `
                <div class="ai-message assistant">
                    <div class="msg-avatar"><i class="fas fa-robot"></i></div>
                    <div class="msg-bubble">Chat cleared! ✨ How can I help you?</div>
                </div>
            `;
            messageCount = 0;
            notification.style.display = 'none';
        }
        
        function escapeHTML(str) {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
        
        document.getElementById('aiQuickActions').addEventListener('click', (e) => {
            if (e.target.classList.contains('ai-quick-btn')) {
                input.value = e.target.textContent.trim();
                send();
            }
        });
        
        document.getElementById('aiChatToggle').addEventListener('click', toggle);
        
        window.aiChat = { toggle, send, clearChat };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAIChat);
    } else {
        initAIChat();
    }
})();
