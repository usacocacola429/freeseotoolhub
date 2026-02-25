#!/bin/bash

# Blog posts to create
declare -a posts=(
    "voice-search-optimizer"
    "inp-monitor-guide"
    "multilingual-seo-india"
    "geo-optimizer-guide"
    "bhashini-seo-tool"
    "core-web-vitals-2024"
    "regional-keywords-india"
    "schema-markup-guide"
    "local-seo-checklist"
    "google-algorithm-updates"
)

# Create each post
for post in "${posts[@]}"
do
    mkdir -p "blog/$post"
    touch "blog/$post/index.html"
    echo "Created blog/$post/index.html"
done

echo "✅ All blog post folders created!"
