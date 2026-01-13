// GitHub Pages SPA Router Fix
// This handles the redirect from 404.html for GitHub Pages

export const setupGitHubPagesRouter = () => {
  // Check if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    // Handle GitHub Pages redirect
    const l = window.location;
    
    // Check if this is a redirect from 404.html
    if (l.search.includes('?/')) {
      // Extract the original path
      const originalPath = l.search
        .slice(2) // Remove "?/"
        .split('&')
        .map((segment) => segment.replace(/~and~/g, '&'))
        .join('&');
      
      // Replace the URL without reloading the page
      const newUrl = l.pathname + originalPath + l.hash;
      window.history.replaceState(null, '', newUrl);
    }
  }
};