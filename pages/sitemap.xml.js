

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://spmpsolutions.com';
  const pages = ["/", "/about", "/services", "/contact", "/commercial", "/homeWash", "/roof", "/gutter", "/window", "/concrete", "/paint", "/faq"]; // Replace with dynamic data

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(url => `<url><loc>${baseUrl}${url}</loc></url>`).join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {}
