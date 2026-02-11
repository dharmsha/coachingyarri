// app/layout.jsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/src/components/Layout/Header"
import Footer from "@/src/components/Layout/Footer"

// Single font - minimal
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// Basic metadata
export const metadata: Metadata = {
  title: 'Coaching Yaari - India\'s Largest Coaching Network',
  description: 'Connect with verified coaching centers and teachers across India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}