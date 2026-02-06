# AI Caricature 网站策划案

## 项目概述

| 项目 | 内容 |
|------|------|
| **域名** | aicaricature.tech |
| **网站名** | AI Caricature |
| **核心关键词** | ai caricature |
| **目标** | 打造 AI 漫画生成工具站，抢占 caricature 热点流量 |
| **技术栈** | Astro + React + TailwindCSS + i18n |
| **部署** | Cloudflare Pages |

---

## 一、SEO 策略

### 1.1 关键词矩阵

| 页面 | 目标关键词 | URL | 搜索意图 |
|------|-----------|-----|----------|
| 首页 | ai caricature | / | 工具使用 |
| Prompt 页 | caricature prompt | /caricature-prompt | 找 prompt |
| Generator 页 | caricature generator | /caricature-generator | 找生成器 |
| Trend 页 | caricature trend | /caricature-trend | 了解趋势 |
| Maker 页 | caricature maker | /caricature-maker | 制作工具 |
| From Photo 页 | caricature from photo | /caricature-from-photo | 照片转漫画 |

### 1.2 SEO 元数据规范

**首页 Meta:**
```
Title: AI Caricature - Free AI Caricature Generator Online | Create Caricature from Photo
Description: Create stunning AI caricature from your photo in seconds. Free online AI caricature generator with viral caricature prompts. Turn selfies into fun cartoon caricatures instantly.
H1: AI Caricature Generator - Create Your Caricature Online Free
```
- Title: 60 字符以内
- Description: 150-160 字符
- 核心关键词密度: 3%-5%

### 1.3 技术 SEO

- [x] 语义化 HTML5 结构
- [x] Schema.org 结构化数据 (WebApplication, FAQPage)
- [x] sitemap.xml 自动生成
- [x] robots.txt 配置
- [x] Canonical URL
- [x] Open Graph & Twitter Cards
- [x] 图片 alt 标签含关键词
- [x] 内链策略：页面间相互链接

---

## 二、网站架构

### 2.1 页面结构

```
/                           # 首页 - AI Caricature (核心工具)
├── /caricature-prompt      # Prompt 收集页
├── /caricature-generator   # 生成器介绍页
├── /caricature-trend       # 趋势解读页
├── /caricature-maker       # Maker 工具页
├── /caricature-from-photo  # 照片转漫画页
├── /privacy                # 隐私政策
├── /terms                  # 服务条款
├── /contact                # 联系我们
├── /about                  # 关于我们
└── /sitemap.xml            # 网站地图
```

### 2.2 多语言支持

| 语言 | 代码 | URL 前缀 |
|------|------|----------|
| English (默认) | en | / |
| 中文 | zh | /zh/ |
| 日本語 | ja | /ja/ |
| 한국어 | ko | /ko/ |

**实现方式:** 
- 默认显示英文
- 顶部语言切换器
- URL 路径区分语言版本
- hreflang 标签

---

## 三、首页设计规范

### 3.1 第一屏 - 核心工具区 (Above the Fold)

```
┌─────────────────────────────────────────────────────────┐
│  [Logo: AI Caricature]              [Lang] [About]      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│     AI Caricature Generator                             │
│     Create Your Caricature Online Free                  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  │     [拖拽上传照片区域]                           │   │
│  │     Drop your photo here or click to upload     │   │
│  │                                                 │   │
│  │     ┌─────────────────────────────────────┐    │   │
│  │     │ Prompt: Create a caricature of...  │    │   │
│  │     └─────────────────────────────────────┘    │   │
│  │                                                 │   │
│  │            [ Generate Caricature ]              │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ✓ Free to use  ✓ No signup required  ✓ Instant result │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**要点:**
- 工具立即可见可用
- 清晰的 CTA 按钮
- 信任标识 (免费、无需注册)

### 3.2 第二屏 - 简介 + 相关工具

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  What is AI Caricature?                                 │
│  ─────────────────────                                  │
│  AI Caricature is a free online tool that transforms    │
│  your photos into fun, exaggerated cartoon caricatures  │
│  using artificial intelligence. Join the viral          │
│  caricature trend sweeping social media!                │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Related AI Caricature Tools                            │
│  ───────────────────────────                            │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Prompt   │  │Generator │  │ Maker    │              │
│  │ Library  │  │ Pro      │  │ Studio   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ From     │  │ Trend    │  │ Style    │              │
│  │ Photo    │  │ Guide    │  │ Gallery  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 3.3 第三屏 - 图文内容区 (600-800 字)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  How to Create AI Caricature from Your Photo            │
│  ───────────────────────────────────────────            │
│                                                         │
│  ┌─────────┐                                            │
│  │  图片1  │  Step 1: Upload Your Photo                 │
│  │         │  Simply drag and drop your photo or        │
│  └─────────┘  click to upload. Our AI caricature        │
│               generator accepts JPG, PNG formats...     │
│                                                         │
│               ┌─────────┐                               │
│  Step 2:      │  图片2  │                               │
│  Choose Your  │         │                               │
│  Caricature   └─────────┘                               │
│  Style...                                               │
│                                                         │
│  ┌─────────┐                                            │
│  │  图片3  │  Step 3: Generate & Download               │
│  │         │  Click generate and watch as AI creates    │
│  └─────────┘  your unique caricature in seconds...      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Why Choose Our AI Caricature Generator?                │
│  ───────────────────────────────────────                │
│                                                         │
│  🎨 Professional Quality                                │
│  Our AI caricature tool uses advanced algorithms...     │
│                                                         │
│  ⚡ Instant Results                                     │
│  Generate your caricature in seconds, not minutes...    │
│                                                         │
│  🆓 Completely Free                                     │
│  No hidden fees, no subscription required...            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FAQ - AI Caricature Questions                          │
│  ─────────────────────────────                          │
│                                                         │
│  ▼ What is the AI caricature trend?                     │
│  ▼ How does AI caricature generator work?               │
│  ▼ Is AI caricature free to use?                        │
│  ▼ Can I use AI caricature for commercial purposes?     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 四、各页面 SEO 规范

### 4.1 首页 (/)

```yaml
title: "AI Caricature - Free AI Caricature Generator Online | Create Caricature from Photo"
description: "Create stunning AI caricature from your photo in seconds. Free online AI caricature generator with viral caricature prompts. Turn selfies into fun cartoon caricatures instantly."
h1: "AI Caricature Generator - Create Your Caricature Online Free"
keywords_density: 3-5%
word_count: 600-800
```

### 4.2 Caricature Prompt (/caricature-prompt)

```yaml
title: "Caricature Prompt - Best AI Caricature Prompts for ChatGPT & Midjourney"
description: "Discover the best caricature prompts for AI image generation. Copy viral caricature prompt templates for ChatGPT, Midjourney, and other AI tools. Updated daily."
h1: "Best Caricature Prompts for AI Image Generation"
```

### 4.3 Caricature Generator (/caricature-generator)

```yaml
title: "Caricature Generator - Free Online AI Caricature Generator Tool"
description: "Use our free caricature generator to create funny cartoon portraits. Best AI caricature generator online - no signup, instant results, unlimited generations."
h1: "Free Caricature Generator - Create Cartoon Portraits Online"
```

### 4.4 Caricature Trend (/caricature-trend)

```yaml
title: "Caricature Trend 2026 - The Viral AI Caricature Challenge Explained"
description: "Learn about the viral caricature trend taking over social media. How to join the AI caricature trend on TikTok, Instagram. Step-by-step guide with examples."
h1: "The Viral Caricature Trend - Everything You Need to Know"
```

### 4.5 Caricature Maker (/caricature-maker)

```yaml
title: "Caricature Maker - AI Caricature Maker Online Free | No Signup"
description: "Free caricature maker powered by AI. Create professional caricatures from photos in seconds. Best online caricature maker - easy to use, instant download."
h1: "AI Caricature Maker - Create Caricatures Online Free"
```

### 4.6 Caricature from Photo (/caricature-from-photo)

```yaml
title: "Caricature from Photo - Turn Photo into Caricature with AI Free"
description: "Transform any photo into a caricature with AI. Free caricature from photo generator - upload selfie, get instant cartoon portrait. No skills required."
h1: "Create Caricature from Photo - AI Photo to Caricature Converter"
```

---

## 五、技术实现

### 5.1 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 框架 | Astro 4.x | SSG/SSR，SEO 友好 |
| UI | React 18 | 交互组件 |
| 样式 | TailwindCSS 3.x | 原子化 CSS |
| 国际化 | astro-i18n | 多语言支持 |
| 图标 | Lucide React | 轻量图标库 |
| 部署 | Cloudflare Pages | 全球 CDN |
| 数据库 | Supabase (PostgreSQL) | 用户数据/统计 |
| 分析 | Google Analytics 4 | 流量统计 |

### 5.2 项目结构

```
aicaricature-tech/
├── src/
│   ├── components/
│   │   ├── Header.astro          # 导航栏
│   │   ├── Footer.astro          # 页脚
│   │   ├── LanguageSwitcher.tsx  # 语言切换
│   │   ├── UploadZone.tsx        # 上传组件
│   │   ├── CaricatureGenerator.tsx # 生成器组件
│   │   ├── ToolCard.tsx          # 工具卡片
│   │   ├── FAQ.tsx               # FAQ 折叠组件
│   │   └── SEOHead.astro         # SEO 头部
│   ├── layouts/
│   │   └── BaseLayout.astro      # 基础布局
│   ├── pages/
│   │   ├── index.astro           # 首页
│   │   ├── caricature-prompt.astro
│   │   ├── caricature-generator.astro
│   │   ├── caricature-trend.astro
│   │   ├── caricature-maker.astro
│   │   ├── caricature-from-photo.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── contact.astro
│   │   ├── about.astro
│   │   ├── sitemap.xml.ts        # 动态 sitemap
│   │   ├── robots.txt.ts         # robots.txt
│   │   ├── zh/                   # 中文页面
│   │   ├── ja/                   # 日文页面
│   │   └── ko/                   # 韩文页面
│   ├── i18n/
│   │   ├── en.json
│   │   ├── zh.json
│   │   ├── ja.json
│   │   └── ko.json
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       ├── supabase.ts           # Supabase 客户端
│       └── seo.ts                # SEO 工具函数
├── public/
│   ├── favicon.ico
│   ├── og-image.png              # Open Graph 图片
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

### 5.3 robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://aicaricature.tech/sitemap.xml

# Disallow admin/api routes
Disallow: /api/
```

### 5.4 sitemap.xml 结构

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://aicaricature.tech/</loc>
    <lastmod>2026-02-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://aicaricature.tech/"/>
    <xhtml:link rel="alternate" hreflang="zh" href="https://aicaricature.tech/zh/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://aicaricature.tech/ja/"/>
    <xhtml:link rel="alternate" hreflang="ko" href="https://aicaricature.tech/ko/"/>
  </url>
  <!-- 其他页面... -->
</urlset>
```

---

## 六、首页内容大纲 (600-800 字)

### H1: AI Caricature Generator - Create Your Caricature Online Free

### Section 1: What is AI Caricature? (100 字)
介绍 AI caricature 概念，解释这是什么工具，为什么流行。

### Section 2: How to Create AI Caricature (200 字)
三步教程：
1. Upload your photo
2. Choose caricature style
3. Generate and download

### Section 3: Why Choose Our AI Caricature Generator (150 字)
- Professional quality AI caricature
- Instant caricature generation
- Free to use, no signup
- Multiple caricature styles

### Section 4: AI Caricature Trend Explained (150 字)
解释 2026 年 caricature trend 的背景，为什么在社交媒体爆火。

### Section 5: FAQ (200 字)
4-5 个常见问题，使用 Schema.org FAQPage 标记。

**关键词分布:**
- "ai caricature" 出现 15-20 次
- "caricature" 出现 25-30 次
- 密度控制在 3-5%

---

## 七、UI/UX 规范

### 7.1 配色方案

```css
:root {
  --primary: #6366F1;      /* Indigo - 主色 */
  --primary-dark: #4F46E5;
  --secondary: #F59E0B;    /* Amber - 强调色 */
  --background: #FFFFFF;
  --surface: #F9FAFB;
  --text: #111827;
  --text-muted: #6B7280;
  --border: #E5E7EB;
}
```

### 7.2 响应式断点 (Mobile First)

```css
/* Mobile: 默认 */
/* Tablet: 768px */
/* Desktop: 1024px */
/* Large: 1280px */
```

### 7.3 组件规范

| 组件 | 规范 |
|------|------|
| 按钮 | 圆角 8px，高度 48px (移动端友好) |
| 卡片 | 圆角 12px，阴影 shadow-md |
| 输入框 | 圆角 8px，高度 48px |
| 间距 | 基于 4px 网格系统 |

---

## 八、Google Analytics 集成

```html
<!-- GA4 代码 - 放在 <head> 中 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**追踪事件:**
- `generate_caricature` - 生成漫画
- `download_caricature` - 下载漫画
- `copy_prompt` - 复制 prompt
- `language_switch` - 切换语言

---

## 九、Supabase 数据库设计

### 9.1 表结构

```sql
-- 生成记录表
CREATE TABLE generations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  prompt TEXT,
  style TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  ip_country TEXT,
  user_agent TEXT
);

-- 页面访问统计
CREATE TABLE page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 联系表单
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 十、部署清单

### 10.1 上线前检查

- [ ] 所有页面 Title/Description 已设置
- [ ] H1 标签包含目标关键词
- [ ] 图片 alt 标签已添加
- [ ] sitemap.xml 可访问
- [ ] robots.txt 配置正确
- [ ] GA 代码已集成
- [ ] 移动端响应式测试通过
- [ ] 页面加载速度 < 3s
- [ ] HTTPS 已启用
- [ ] 404 页面已配置

### 10.2 上线后任务

- [ ] 提交 sitemap 到 Google Search Console
- [ ] 提交 sitemap 到 Bing Webmaster
- [ ] 监控 Core Web Vitals
- [ ] 设置 GA 转化目标

---

## 十一、后续迭代计划

### Phase 1 (当前)
- 静态页面上线
- 基础 SEO 优化
- 多语言支持

### Phase 2
- 接入 AI API (OpenAI/Replicate)
- 实现真实图片生成功能
- 用户生成内容展示

### Phase 3
- 用户账户系统
- 生成历史记录
- 社交分享功能

---

## 附录：首页完整 SEO 内容

见 `content/homepage-en.md`
