# Demo Corner Ribbon Implementation Guide

This guide provides the necessary code and instructions to implement the unified "Demo" corner ribbon on any React/Next.js project.

## 1. Prerequisites

Ensure you have the following dependencies installed in your project:

```bash
npm install lucide-react
```

## 2. Component Code

Create a file named `components/DemoCornerRibbon.tsx` and paste the following code:

```tsx
'use client';

import { useState } from 'react';
import { ExternalLink, AlertCircle } from 'lucide-react';

interface DemoCornerRibbonProps {
  mainSiteUrl?: string;
  position?: "top-right" | "top-left";
}

export default function DemoCornerRibbon({ 
  mainSiteUrl = "https://www.lumenapps.in",
  position = "top-right"
}: DemoCornerRibbonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Corner Ribbon Container - pointer-events-none prevents blocking clicks below */}
      <div className={`fixed top-0 ${position === 'top-right' ? 'right-0' : 'left-0'} z-[9999] w-32 h-32 overflow-hidden pointer-events-none`}>
        {/* Ribbon Strip - pointer-events-auto re-enables interaction for the ribbon only */}
        <div 
          className={`
            absolute top-0 
            ${position === 'top-right' ? 'right-0' : 'left-0'}
            bg-[#BC4749] 
            text-white shadow-lg 
            transform-gpu backface-hidden subpixel-antialiased
            ${position === 'top-right' ? 'translate-x-[28%] translate-y-[45%] rotate-45' : '-translate-x-[28%] translate-y-[45%] -rotate-45'}
            w-[150%] py-1.5 
            text-center cursor-help pointer-events-auto
            border-b-2 border-white/20
          `}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest uppercase drop-shadow-md">
             <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
            Demo
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div 
            className={`fixed ${position === "top-right" ? "top-14 right-4" : "top-14 left-4"} z-[9999] animate-fadeIn`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm text-white rounded-lg shadow-2xl p-4 max-w-xs border border-white/10">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="text-pink-500 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-sm mb-1">Demo Showcase</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  You are viewing a portfolio project. Functionality like payments and orders are simulated.
                </p>
              </div>
            </div>
            <a 
              href={mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors bg-white/5 p-2 rounded-md hover:bg-white/10"
            >
              Build with LumenApps 
              <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
```

## 3. Styles and Animations

You must add the `fadeIn` animation to your project. Use **one** of the following methods depending on your Tailwind version:

### Option A: Tailwind CSS v4 (globals.css)
Add this to your `@theme` block:

```css
@theme inline {
  --animate-fadeIn: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }
}
```

### Option B: Tailwind CSS v3 (tailwind.config.js)
Add this to your configuration object:

```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out'
      }
    }
  }
}
```

## 4. Global Implementation

To ensure the ribbon appears on every page, import it into your root layout (usually `app/layout.tsx` or `pages/_app.tsx`).

```tsx
import DemoCornerRibbon from "@/components/DemoCornerRibbon";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DemoCornerRibbon />
        {children}
      </body>
    </html>
  );
}
```
