// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/src/components/Layout/Header";
import Footer from "@/src/components/Layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coachingyaari.com"),

  title: {
    default: "Coaching Yaari - India's Largest Coaching Network",
    template: "%s | Coaching Yaari",
  },

  description:
    "Coaching Yaari connects students with verified coaching centers, tuition classes, and expert teachers across India. Compare ratings, reviews, courses, and fees easily.",

 keywords: [
  // Brand
  "Coaching Yaari",
  "CoachingYaari.com",
  "India Coaching Network",
  "Top Coaching Directory India",

  // General Search
  "Best Coaching in India",
  "Top Coaching Institute",
  "Coaching Near Me",
  "Tuition Classes Near Me",
  "Private Tuition Near Me",
  "Coaching Center Directory",
  "Find Coaching Center",
  "Compare Coaching Institutes",
  "Verified Coaching Centers",

  // Exams
  "NEET Coaching",
  "JEE Coaching",
  "IIT JEE Coaching",
  "JEE Advanced Coaching",
  "Medical Entrance Coaching",
  "UPSC Coaching",
  "IAS Coaching",
  "SSC Coaching",
  "Bank Exam Coaching",
  "Railway Exam Coaching",
  "CUET Coaching",
  "CLAT Coaching",
  "CAT Coaching",
  "NDA Coaching",
  "Defence Coaching",

  // Classes
  "Class 6 Tuition",
  "Class 7 Tuition",
  "Class 8 Tuition",
  "Class 9 Coaching",
  "Class 10 Coaching",
  "Class 11 Coaching",
  "Class 12 Coaching",
  "CBSE Tuition",
  "ICSE Tuition",
  "State Board Tuition",

  // Online
  "Online Coaching India",
  "Online Tuition Classes",
  "Live Online Coaching",
  "Digital Coaching Platform",
  "Best Online Teachers",

  // Features
  "Coaching Reviews",
  "Student Reviews",
  "Institute Ratings",
  "Coaching Feedback",
  "Teacher Reviews",
  "Top Rated Coaching",
  "Affordable Coaching Classes",
  "Best Tuition Fees Comparison",

  // City Based (Major Cities)
  "Coaching in Delhi",
  "Coaching in Purnea",
  "Coaching in Darbhanga",
  "Coaching in Jankinagar",
"Coaching in Madhepura",
"Coaching in B.Kothi",
  "Coaching in Mumbai",
  "Coaching in Bangalore",
  "Coaching in Hyderabad",
  "Coaching in Kolkata",
  "Coaching in Chennai",
  "Coaching in Patna",
  "Coaching in Ranchi",
  "Coaching in Lucknow",
  "Coaching in Jaipur",

  // Intent Based
  "Best NEET Coaching Near Me",
  "Top JEE Coaching Near Me",
  "Affordable UPSC Coaching",
  "Best Coaching for Competitive Exams",
  "India's Largest Coaching Network",
  "Trusted Coaching Platform India"
],


  authors: [{ name: "Coaching Yaari Team" }],
  creator: "Coaching Yaari",
  publisher: "Coaching Yaari",

  openGraph: {
    title: "Coaching Yaari - Find Top Coaching Centers in India",
    description:
      "Explore verified coaching institutes, compare ratings & reviews, and connect with top teachers across India.",
    url: "https://coachingyaari.com",
    siteName: "Coaching Yaari",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coaching Yaari - India's Largest Coaching Network",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Coaching Yaari - India's Largest Coaching Network",
    description:
      "Compare coaching institutes, check ratings, read reviews & find best tuition centers near you.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://coachingyaari.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Structured Data - Organization + Rating */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Coaching Yaari",
              url: "https://coachingyaari.com",
              description:
                "India's largest coaching network helping students find the best coaching centers.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1250",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
