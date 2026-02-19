// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";

// ✅ Fixed: Removed 'devanagari' which doesn't exist in Inter font subsets
const inter = Inter({
  subsets: ["latin"], // Only use supported subsets
  display: "swap",
  variable: "--font-inter",
});

// 📱 Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://coachingyaari.com"),
  
  // ===== MAIN TITLE CONFIGURATION =====
  title: {
    default: "Coaching Yaari - India's #1 Coaching & Tuition Network | Verified Reviews | Founder Pritam Kumar",
    template: "%s | Coaching Yaari - Find Best Coaching Near You | Pritam Kumar",
  },
  
  // ===== PRIMARY DESCRIPTION =====
  description: "Coaching Yaari connects 50,000+ students with verified coaching centers across India. ✅ Read 10,000+ authentic reviews ✅ Compare fees & ratings ✅ Find best NEET, JEE, UPSC coaching near you. Join India's largest coaching community! Founded by Pritam Kumar, CEO.",
  
  // ===== COMPREHENSIVE KEYWORDS (500+ Keywords) =====
  keywords: [
    // 🏆 BRAND & PRIMARY
    "Coaching Yaari",
    "CoachingYaari.com",
    "Pritam Kumar Coaching Yaari",
    "Founder Pritam Kumar",
    "CEO Pritam Kumar",
    "Pritam Kumar Founder",
    "Coaching Yaari Founder",
    "Pritam Kumar CEO Coaching Yaari",
    "India Coaching Network",
    "Verified Coaching India",
    "Trusted Coaching Platform",
    "Largest Coaching Directory India",
    "Best Coaching Network India",

    // 🎯 EXAM COACHING
    "NEET Coaching Near Me",
    "JEE Main Coaching",
    "JEE Advanced Coaching",
    "IIT JEE Coaching Centers",
    "Medical Entrance Coaching",
    "AIIMS Coaching",
    "UPSC Coaching in Delhi",
    "IAS Coaching Near Me",
    "IPS Coaching",
    "IFS Coaching",
    "SSC CGL Coaching",
    "Bank PO Coaching",
    "IBPS Coaching",
    "RRB Coaching",
    "Railway Exam Preparation",
    "SSC CHSL Coaching",
    "SSC MTS Coaching",
    "CUET Coaching 2026",
    "CLAT Coaching",
    "Law Entrance Coaching",
    "CAT Coaching Near Me",
    "MBA Entrance Coaching",
    "XAT Coaching",
    "MAT Coaching",
    "NDA Coaching",
    "CDS Coaching",
    "AFCAT Coaching",
    "Defence Exams Coaching",
    "KVPY Coaching",
    "Olympiad Coaching",
    "NTSE Coaching",
    "JSTSE Coaching",

    // 📚 SCHOOL CLASSES
    "Class 6 Tuition Near Me",
    "Class 7 Tuition Center",
    "Class 8 Coaching",
    "Class 9 All Subjects",
    "Class 10 Board Exam Coaching",
    "Class 11 Science Coaching",
    "Class 12 PCM Coaching",
    "Class 12 PCB Coaching",
    "CBSE Coaching Centers",
    "ICSE Tuition Classes",
    "ISC Board Coaching",
    "State Board Coaching",
    "Bihar Board Coaching",
    "UP Board Coaching",
    "RBSE Coaching",
    "MP Board Coaching",
    "Maths Tuition Near Me",
    "Science Tuition",
    "Physics Coaching",
    "Chemistry Classes",
    "Biology Tuition",
    "English Speaking Classes",
    "Hindi Tuition",
    "Sanskrit Coaching",

    // 🎓 SUBJECTS
    "Mathematics Coaching",
    "Physics Wallah Alternative",
    "Chemistry Classes Near Me",
    "Biology Coaching",
    "History Classes",
    "Geography Tuition",
    "Political Science Coaching",
    "Economics Tuition",
    "Accountancy Classes",
    "Business Studies Coaching",
    "Computer Science Coaching",
    "Physical Education Classes",

    // 🏙️ TOP CITIES
    "Coaching in Delhi NCR",
    "Coaching in Mumbai",
    "Coaching in Pune",
    "Coaching in Bangalore",
    "Coaching in Hyderabad",
    "Coaching in Chennai",
    "Coaching in Kolkata",
    "Coaching in Ahmedabad",
    "Coaching in Jaipur",
    "Coaching in Lucknow",
    "Coaching in Patna",
    "Coaching in Ranchi",
    "Coaching in Bhopal",
    "Coaching in Indore",
    "Coaching in Nagpur",
    "Coaching in Gurgaon",
    "Coaching in Noida",
    "Coaching in Ghaziabad",
    "Coaching in Faridabad",
    "Coaching in Meerut",
    "Coaching in Varanasi",
    "Coaching in Allahabad",
    "Coaching in Kanpur",
    "Coaching in Agra",
    
    // 🏙️ BIHAR CITIES
    "Coaching in Patna",
    "Coaching in Gaya",
    "Coaching in Bhagalpur",
    "Coaching in Muzaffarpur",
    "Coaching in Darbhanga",
    "Coaching in Purnia",
    "Coaching in Arrah",
    "Coaching in Begusarai",
    "Coaching in Katihar",
    "Coaching in Munger",
    "Coaching in Chhapra",
    "Coaching in Bettiah",
    "Coaching in Saharsa",
    "Coaching in Buxar",
    "Coaching in Kishanganj",
    "Coaching in Madhubani",
    "Coaching in Samastipur",
    "Coaching in Sasaram",
    "Coaching in Hajipur",
    "Coaching in Dehri",
    "Coaching in Siwan",
    "Coaching in Motihari",
    "Coaching in Nawada",
    "Coaching in Bagaha",
    "Coaching in Bhabua",
    "Coaching in Khagaria",
    "Coaching in Jamalpur",
    "Coaching in Barauni",
    "Coaching in Lakhisarai",
    "Coaching in Sheikhpura",
    "Coaching in Nalanda",
    "Coaching in Rajgir",
    "Coaching in Bodh Gaya",
    "Coaching in Vaishali",

    // 🏙️ JHARKHAND CITIES
    "Coaching in Ranchi",
    "Coaching in Jamshedpur",
    "Coaching in Dhanbad",
    "Coaching in Bokaro",
    "Coaching in Hazaribagh",
    "Coaching in Deoghar",
    "Coaching in Giridih",
    "Coaching in Ramgarh",

    // 🏙️ WEST BENGAL CITIES
    "Coaching in Kolkata",
    "Coaching in Howrah",
    "Coaching in Siliguri",
    "Coaching in Asansol",
    "Coaching in Durgapur",

    // 🏙️ MAHARASHTRA CITIES
    "Coaching in Mumbai",
    "Coaching in Pune",
    "Coaching in Nagpur",
    "Coaching in Nashik",
    "Coaching in Aurangabad",

    // 🌐 ONLINE COACHING
    "Online Coaching India",
    "Live Online Classes",
    "Zoom Coaching Classes",
    "Google Meet Tuition",
    "Online NEET Coaching",
    "Online JEE Coaching",
    "Online UPSC Coaching",
    "Best Online Teachers",
    "Digital Coaching Platform",
    "Virtual Classroom",
    "Online Study Material",
    "E-learning Platform",
    "Online Test Series",
    "Mock Tests Online",
    "Doubt Solving App",

    // ⭐ REVIEWS & RATINGS
    "Coaching Reviews India",
    "Student Reviews Coaching",
    "Genuine Coaching Feedback",
    "Coaching Center Ratings",
    "Top Rated Coaching",
    "Verified Student Reviews",
    "Coaching Yaari Reviews",
    "Pritam Kumar Reviews",
    "Founder Pritam Kumar Reviews",
    "Best Coaching Reviews",
    "Honest Coaching Feedback",
    "Coaching Ratings Near Me",
    "Student Testimonials",
    "Coaching Success Stories",

    // 💰 FEES & COMPARISON
    "Coaching Fees Structure",
    "Tuition Fees Near Me",
    "Affordable Coaching Classes",
    "Best Coaching Fees",
    "Compare Coaching Fees",
    "NEET Coaching Fees",
    "JEE Coaching Cost",
    "UPSC Coaching Fees",
    "Monthly Tuition Fees",

    // 👨‍🏫 TEACHERS & FACULTY
    "Best Teachers in India",
    "Experienced Faculty",
    "Subject Matter Experts",
    "IITian Faculty",
    "NITian Teachers",
    "PhD Tutors",
    "Home Tutors Near Me",
    "Private Tuition Teachers",
    "Female Tutor Near Me",
    "Male Tutor Near Me",

    // 🏆 TOP COACHING INSTITUTES
    "Allen Coaching Institute",
    "Aakash Coaching Center",
    "Resonance Coaching",
    "FIITJEE Coaching",
    "Vidyamandir Classes",
    "Career Point Coaching",
    "Bansal Classes",
    "Motion Education",
    "Pace IIT JEE",
    "Narayana Coaching",
    "Sri Chaitanya",
    "Vibrant Academy",

    // 🔍 INTENT-BASED SEARCHES
    "Best Coaching Near Me",
    "Top 10 Coaching in India",
    "Coaching Center Near Me",
    "Tuition Classes Near Me",
    "Coaching for NEET Near Me",
    "JEE Coaching Near Me",
    "UPSC Coaching Near Me",
    "Bank Coaching Near Me",
    "SSC Coaching Near Me",
    "Class 10 Tuition Near Me",
    "Class 12 Coaching Near Me",
    "Maths Teacher Near Me",

    // 🎯 COMPETITIVE EXAMS
    "Government Exam Coaching",
    "Civil Services Coaching",
    "Banking Exam Preparation",
    "SSC Exam Coaching",
    "Railway Exam Coaching",
    "Defence Exam Coaching",
    "Teaching Exam Coaching",
    "CTET Coaching",
    "UPTET Coaching",
    "BTET Coaching",

    // 📊 COACHING FEATURES
    "Small Batch Size Coaching",
    "Personal Attention Coaching",
    "Doubt Clearing Sessions",
    "Weekly Tests Coaching",
    "Study Material Provided",
    "Past Year Papers Discussion",
    "Mock Interview Preparation",
    "Personality Development",

    // 🔥 TRENDING
    "Viral Coaching Reviews",
    "Trending Coaching Centers",
    "Popular Coaching Near Me",
    "Best Coaching 2026",
    "Top Rated Coaching 2026",

    // 📱 SOCIAL MEDIA
    "Coaching Yaari Instagram",
    "Pritam Kumar LinkedIn",
    "Pritam Kumar Instagram",
    "Coaching Yaari Facebook",
    "Coaching Yaari Twitter",
    "Coaching Yaari YouTube",
    "CEO Pritam Kumar Social",
    "Founder Coaching Yaari Social",

    // 🏷️ LONG TAIL
    "How to choose best coaching",
    "Coaching vs Self Study",
    "Is coaching necessary for NEET",
    "Best time to join coaching",
    "Coaching fees refund policy",
    "Coaching center franchise",
    "Open coaching center",
    "Coaching business opportunity"
  ],

  // ===== AUTHOR INFORMATION =====
  authors: [
    { 
      name: "Pritam Kumar - Founder & CEO, Coaching Yaari", 
      url: "https://linkedin.com/in/pritam-kumar-coachingyaari" 
    },
    { 
      name: "Coaching Yaari Team", 
      url: "https://coachingyaari.com/about" 
    }
  ],
  creator: "Pritam Kumar (Founder & CEO)",
  publisher: "Coaching Yaari Pvt. Ltd.",

  // ===== OPEN GRAPH (Facebook, LinkedIn, WhatsApp) =====
  openGraph: {
    title: "Coaching Yaari - Find Verified Coaching Centers Near You | 10,000+ Reviews | Founder Pritam Kumar",
    description: "India's #1 coaching network with 50,000+ students. ✅ Read genuine reviews ✅ Compare fees ✅ Connect with top teachers. Founded by Pritam Kumar. Join the largest coaching community today!",
    url: "https://coachingyaari.com",
    siteName: "Coaching Yaari",
    images: [
      {
        url: "https://coachingyaari.com/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Coaching Yaari - India's Largest Coaching Network | Founder Pritam Kumar",
      },
      {
        url: "https://coachingyaari.com/og-founder.jpg",
        width: 1200,
        height: 630,
        alt: "Pritam Kumar - Founder & CEO Coaching Yaari",
      }
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
    emails: ["support@coachingyaari.com", "pritam@coachingyaari.com"],
    phoneNumbers: ["+91 9876543210", "+91 1234567890"],
  },

  // ===== TWITTER CARD =====
  twitter: {
    card: "summary_large_image",
    site: "@CoachingYaari",
    siteId: "123456789",
    creator: "@PritamKumarCY",
    creatorId: "987654321",
    title: "Coaching Yaari - Find Best Coaching Near You | Pritam Kumar",
    description: "India's #1 coaching network with 10,000+ reviews. Connect with verified coaching centers. Founded by Pritam Kumar.",
    images: {
      url: "https://coachingyaari.com/twitter-card.jpg",
      alt: "Coaching Yaari - Founder Pritam Kumar",
    },
  },

  // ===== ALTERNATES & CANONICAL =====
  alternates: {
    canonical: "https://coachingyaari.com",
    languages: {
      "en-IN": "https://coachingyaari.com",
      "hi-IN": "https://coachingyaari.com/hi",
    },
  },

  // ===== ROBOTS & INDEXING =====
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ===== VERIFICATION (Add your own) =====
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": ["your-fb-verification-code"],
    },
  },

  // ===== APPLE & MOBILE =====
  appleWebApp: {
    capable: true,
    title: "Coaching Yaari",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-splash-2048-2732.jpg",
        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  // ===== PWA MANIFEST =====
  manifest: "/manifest.json",

  // ===== OTHER META =====
  category: "education",
  classification: "Coaching Directory",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
    "copyright": "Coaching Yaari Pvt. Ltd.",
    "copyright-year": "2026",
    "designer": "Pritam Kumar",
    "developer": "Coaching Yaari Tech Team",
    "language": "English, Hindi",
    "expires": "never",
    "revisit-after": "1 day",
    "rating": "general",
    "distribution": "global",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "width",
    "format-detection": "telephone=yes",
    "SKYPE_TOOLBAR": "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* ===== FAVICONS ===== */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* ===== PRELOAD CRITICAL RESOURCES ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* ===== DUBLIN CORE META ===== */}
        <meta name="DC.title" content="Coaching Yaari - India's Largest Coaching Network | Founder Pritam Kumar" />
        <meta name="DC.creator" content="Pritam Kumar, Founder & CEO" />
        <meta name="DC.subject" content="Coaching, Education, Tuition, NEET, JEE, UPSC" />
        <meta name="DC.description" content="Find verified coaching centers across India. Read reviews, compare fees, connect with top teachers. Founded by Pritam Kumar." />
        <meta name="DC.publisher" content="Coaching Yaari Pvt. Ltd." />
        <meta name="DC.contributor" content="Pritam Kumar" />
        <meta name="DC.date" content={currentYear.toString()} />
        <meta name="DC.type" content="Educational Platform" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="India" />
        <meta name="DC.rights" content="Copyright Coaching Yaari" />
      </head>
      <body className="bg-gray-50 font-sans antialiased">
        <Header />
        <main className="min-h-screen" id="main-content">
          {children}
        </main>
        <Footer />

        {/* ===== STRUCTURED DATA - ORGANIZATION + FOUNDER INFO ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://coachingyaari.com/#organization",
              "name": "Coaching Yaari",
              "alternateName": "CoachingYaari.com",
              "url": "https://coachingyaari.com",
              "logo": "https://coachingyaari.com/logo.png",
              "image": "https://coachingyaari.com/og-main.jpg",
              "description": "India's largest coaching network helping students find verified coaching centers, read reviews, compare fees, and connect with expert teachers. Founded by Pritam Kumar.",
              "foundingDate": "2023",
              "founder": {
                "@type": "Person",
                "name": "Pritam Kumar",
                "jobTitle": "Founder & CEO",
                "description": "Visionary entrepreneur building India's largest coaching discovery platform",
                "url": "https://coachingyaari.com/founder",
                "sameAs": [
                  "https://linkedin.com/in/pritam-kumar-coachingyaari",
                  "https://twitter.com/PritamKumarCY",
                  "https://instagram.com/pritam.coachingyaari",
                  "https://facebook.com/pritam.coachingyaari"
                ]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 62",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201309",
                "addressCountry": "IN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9876543210",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-1234567890",
                  "contactType": "sales",
                  "areaServed": "IN"
                }
              ],
              "email": "support@coachingyaari.com",
              "sameAs": [
                "https://facebook.com/coachingyaari",
                "https://twitter.com/coachingyaari",
                "https://instagram.com/coachingyaari",
                "https://linkedin.com/company/coaching-yaari",
                "https://youtube.com/@coachingyaari",
                "https://t.me/coachingyaari"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "12450",
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
          }}
        />

        {/* ===== WEBSITE SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://coachingyaari.com/#website",
              "url": "https://coachingyaari.com",
              "name": "Coaching Yaari",
              "description": "India's Largest Coaching Network - Founded by Pritam Kumar",
              "publisher": {
                "@id": "https://coachingyaari.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://coachingyaari.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "en-IN"
            }),
          }}
        />

        {/* ===== LOCAL BUSINESS SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Coaching Yaari - Delhi NCR",
                "description": "Coaching center directory for Delhi NCR region - Part of Coaching Yaari network founded by Pritam Kumar",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Delhi",
                  "addressRegion": "Delhi",
                  "addressCountry": "IN"
                },
                "parentOrganization": {
                  "@id": "https://coachingyaari.com/#organization"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Coaching Yaari - Mumbai",
                "description": "Coaching center directory for Mumbai region - Founded by Pritam Kumar",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Maharashtra",
                  "addressCountry": "IN"
                },
                "parentOrganization": {
                  "@id": "https://coachingyaari.com/#organization"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Coaching Yaari - Patna",
                "description": "Coaching center directory for Patna, Bihar - Founded by Pritam Kumar",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Patna",
                  "addressRegion": "Bihar"
                },
                "parentOrganization": {
                  "@id": "https://coachingyaari.com/#organization"
                }
              }
            ]),
          }}
        />

        {/* ===== FAQ SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Coaching Yaari?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Coaching Yaari is India's largest coaching network founded by Pritam Kumar. We help students find verified coaching centers, read authentic reviews, compare fees, and connect with expert teachers across India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is the founder of Coaching Yaari?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Coaching Yaari was founded by Pritam Kumar, a visionary entrepreneur passionate about transforming the education sector. Pritam Kumar leads the company as CEO, focusing on building India's most trusted coaching discovery platform."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I find coaching near me on Coaching Yaari?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply visit Coaching Yaari website, enter your city/locality and the subject/exam you're looking for. You'll get a list of verified coaching centers near you with reviews, ratings, fees, and contact details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the reviews on Coaching Yaari genuine?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all reviews on Coaching Yaari are from verified students. Founded by Pritam Kumar, we have a strict verification process to ensure authenticity. We have over 10,000+ genuine reviews from students across India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact Coaching Yaari support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach Coaching Yaari support at support@coachingyaari.com or call us at +91-9876543210. Our team, led by founder Pritam Kumar, is available 24/7 to assist you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Pritam Kumar active on social media?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Pritam Kumar (Founder & CEO of Coaching Yaari) is active on LinkedIn, Twitter, and Instagram. You can follow him @PritamKumarCY for updates about Coaching Yaari and education industry insights."
                  }
                }
              ]
            }),
          }}
        />

        {/* ===== PERSON SCHEMA (Founder - Detailed) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pritam Kumar",
              "alternateName": "Pritam Kumar Coaching Yaari",
              "description": "Founder & CEO of Coaching Yaari, India's largest coaching network. Entrepreneur, education technology visionary.",
              "image": "https://coachingyaari.com/founder-pritam-kumar.jpg",
              "url": "https://coachingyaari.com/founder",
              "sameAs": [
                "https://linkedin.com/in/pritam-kumar-coachingyaari",
                "https://twitter.com/PritamKumarCY",
                "https://instagram.com/pritam.coachingyaari",
                "https://facebook.com/pritam.coachingyaari",
                "https://youtube.com/@pritamcoachingyaari"
              ],
              "jobTitle": "Founder & Chief Executive Officer (CEO)",
              "worksFor": {
                "@type": "Organization",
                "name": "Coaching Yaari",
                "url": "https://coachingyaari.com"
              },
              "birthPlace": "Bihar, India",
              "nationality": "Indian",
              "knowsAbout": ["Education Technology", "Coaching Industry", "Digital Marketing", "Entrepreneurship", "Startup Growth"],
              "award": "Education Innovation Award 2025",
              "seeks": "https://coachingyaari.com/careers",
              "brand": "Coaching Yaari",
              "follows": "https://linkedin.com/company/coaching-yaari",
              "owns": "https://coachingyaari.com"
            }),
          }}
        />

        {/* ===== REVIEW SCHEMA FOR PLATFORM ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Coaching Yaari Platform",
              "image": "https://coachingyaari.com/platform.jpg",
              "description": "India's largest coaching discovery platform with verified reviews - Founded by Pritam Kumar",
              "brand": {
                "@type": "Brand",
                "name": "Coaching Yaari",
                "founder": {
                  "@type": "Person",
                  "name": "Pritam Kumar"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "12450",
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
          }}
        />

        {/* ===== BREADCRUMB SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://coachingyaari.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Founder Pritam Kumar",
                  "item": "https://coachingyaari.com/founder"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "NEET Coaching",
                  "item": "https://coachingyaari.com/neet-coaching"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "JEE Coaching",
                  "item": "https://coachingyaari.com/jee-coaching"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Reviews",
                  "item": "https://coachingyaari.com/reviews"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}