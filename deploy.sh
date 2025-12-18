#!/bin/bash

# 🚀 Chada Agency - Quick Deploy Script
# This script helps you deploy your website to GitHub

echo "🎯 Chada Agency Website Deployment Script"
echo "=========================================="

# Check if git remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No GitHub remote found!"
    echo ""
    echo "📝 Please follow these steps:"
    echo "1. Go to https://github.com and create a new repository"
    echo "2. Copy your repository URL (https://github.com/YOUR_USERNAME/chada-agency.git)"
    echo "3. Run: git remote add origin YOUR_REPOSITORY_URL"
    echo "4. Run this script again"
    echo ""
    exit 1
fi

echo "✅ Git remote found: $(git remote get-url origin)"
echo ""

# Check current branch
current_branch=$(git branch --show-current)
echo "📍 Current branch: $current_branch"

if [ "$current_branch" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout -b main 2>/dev/null || git checkout main
fi

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "🎉 Success! Your code is now on GitHub!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to your GitHub repository"
echo "2. Click Settings tab"
echo "3. Scroll down to Pages section"
echo "4. Enable GitHub Pages (main branch, root folder)"
echo "5. Your site will be live at: https://YOUR_USERNAME.github.io/chada-agency/"
echo ""
echo "🚀 For better performance, use Vercel: https://vercel.com"
echo ""