import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Header from  "@/src/components/Layout/Header"
import Footer from "@/src/components/Layout/Footer"
import Script from 'next/script'

// Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

// Viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
}

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://coachingyaari.com'),
  title: {
    default: 'Coaching Yaari - India\'s Largest Coaching Network',
    template: '%s | Coaching Yaari'
  },
  description: 'Coaching Yaari connects students with verified coaching centers and teachers across every district of India. Find JEE, NEET, UPSC, and school coaching centers near you.',
  keywords: [
    'coaching centers', 
    'online coaching', 
    'JEE coaching', 
    'NEET coaching', 
    'UPSC coaching', 
    'home tuition', 
    'verified teachers', 
    'India education', 
    'study material',
    'coaching institute',
    'best coaching',
    'education platform',
    'student success',
    'quality education'
  ],
  authors: [{ name: 'Coaching Yaari' }],
  creator: 'Coaching Yaari',
  publisher: 'Coaching Yaari',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://coachingyaari.com',
    title: 'Coaching Yaari - India\'s Largest Coaching Network',
    description: 'Quality Education in Every District | Connect with verified coaching centers and teachers',
    siteName: 'Coaching Yaari',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Coaching Yaari - India\'s Education Network',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching Yaari - India\'s Largest Coaching Network',
    description: 'Quality Education in Every District | Connect with verified coaching centers and teachers',
    images: ['/twitter-image.png'],
    creator: '@coachingyaari',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb',
      },
    ],
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Verification
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification',
    yahoo: 'yahoo-verification',
  },
  
  // Alternates
  alternates: {
    canonical: 'https://coachingyaari.com',
    languages: {
      'en-IN': 'https://coachingyaari.com',
      'hi-IN': 'https://coachingyaari.com/hi',
    },
  },
  
  // Other
  category: 'education',
}

// Structured Data (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Coaching Yaari',
  description: 'India\'s largest network connecting students with verified coaching centers and teachers across every district.',
  url: 'https://coachingyaari.com',
  logo: 'https://coachingyaari.com/logo.png',
  foundingDate: '2023',
  founder: {
    '@type': 'Organization',
    name: 'Coaching Yaari Team',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'India',
    addressLocality: 'New Delhi',
    postalCode: '110001',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9876543210',
    contactType: 'customer service',
    email: 'support@coachingyaari.com',
    availableLanguage: ['Hindi', 'English'],
    areaServed: 'IN',
  },
  sameAs: [
    'https://facebook.com/coachingyaari',
    'https://twitter.com/coachingyaari',
    'https://instagram.com/coachingyaari',
    'https://linkedin.com/company/coachingyaari',
    'https://youtube.com/@coachingyaari',
  ],
  knowsAbout: [
    'JEE Coaching',
    'NEET Coaching',
    'UPSC Coaching',
    'School Education',
    'Competitive Exams',
    'Online Tutoring',
    'Study Material',
    'Test Series',
  ],
  offers: {
    '@type': 'Service',
    name: 'Coaching Center Finder',
    description: 'Find and connect with verified coaching centers across India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Coaching Yaari" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Coaching Yaari" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png" />
        
        {/* Splash Screens */}
        <link rel="apple-touch-startup-image" href="/splash/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash/apple-splash-2732-2048.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        
        {/* Microsoft */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Facebook */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-gray-50 to-white text-gray-900 antialiased`}>
        {/* Loading Spinner (shown during client-side navigation) */}
        <div id="loading-spinner" className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Toaster */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #334155',
              fontSize: '14px',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        {/* Hotjar */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:0000000,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        
        {/* Crisp Chat */}
        <Script id="crisp" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="your-crisp-id";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
        
        {/* Loading Spinner Script */}
        <Script id="loading-spinner-script" strategy="afterInteractive">
          {`
            // Show spinner during navigation
            const spinner = document.getElementById('loading-spinner');
            
            // Show spinner when link is clicked
            document.addEventListener('click', (e) => {
              const link = e.target.closest('a');
              if (link && link.href && !link.target && !link.href.includes('#')) {
                spinner.style.opacity = '1';
                spinner.style.pointerEvents = 'auto';
              }
            });
            
            // Hide spinner when page loads
            window.addEventListener('load', () => {
              spinner.style.opacity = '0';
              spinner.style.pointerEvents = 'none';
            });
            
            // Handle back/forward navigation
            window.addEventListener('pageshow', (e) => {
              if (e.persisted) {
                spinner.style.opacity = '0';
                spinner.style.pointerEvents = 'none';
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}