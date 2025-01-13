import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" id="#top">
      <Head>
        {/* Meta Tags for SEO and Local Optimization */}
        <meta name="author" content="Samsonite Painting & More" />
        <meta name="keywords" content="
          pressure washing, roof cleaning, gutter cleaning, painting services, algae removal, moss cleaning,
          roof maintenance, concrete cleaning, graffiti cleaning, window cleaning, Little Rock, Benton, Bryant,
          Searcy, Conway, Arkansas, Pressure Washing Little Rock, Roof Cleaning Little Rock, Gutter Cleaning Little Rock, 
          Commercial Pressure Washing Little Rock, Power Washing Little Rock, Roof Cleaning near me, Pressure Washing near me,
          Roof Cleaning near me, Concrete Pressure Washing Little Rock, Graffiti Removal Little Rock, Window Cleaning Little Rock" />
        
        <meta 
          name="description" 
          content="Samsonite Painting & More offers expert pressure washing, roof cleaning, gutter cleaning, and more in Little Rock, AR, and surrounding areas. Get professional service for residential and commercial properties." 
        />

        {/* Social Media Meta Tags */}
        <meta property="og:site_name" content="Samsonite Painting & More" />
        <meta property="og:url" content="https://spmpsolutions.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pressure Washing & Painting Services in Little Rock, AR | Samsonite Painting & More" />
        <meta property="og:description" content="We provide top-notch pressure washing, roof cleaning, and painting services in Little Rock, Benton, Bryant, Conway, and surrounding areas. Call today for a free estimate!" />
        <meta property="og:image" content="https://spmpsolutions.com/assets/img/logo.png" />

        {/* Structured Data (Schema Markup for Local Business) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Samsonite Painting & More",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Little Rock",
                "addressRegion": "AR",
                "postalCode": "72201"
                // Removed streetAddress to protect privacy
              },
              "telephone": "+1-501-533-9213",
              "url": "https://spmpsolutions.com",
              "image": "https://spmpsolutions.com/assets/img/logo.png",
              "priceRange": "$$$",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-14:00"
              ],
              "description": "Samsonite Painting & More provides professional pressure washing, roof cleaning, gutter cleaning, and painting services to Little Rock and surrounding areas."
            }),
          }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://spmpsolutions.com/" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/img/faviconSam.png" />

        {/* Preconnect to Fonts */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link 
          href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i" 
          rel="stylesheet" 
        />

        {/* Robots Meta Tag (Ensure pages are crawled) */}
        <meta name="robots" content="index, follow" />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

    )
}
