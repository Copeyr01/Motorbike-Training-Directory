import { next } from '@vercel/functions';

// Gates the entire site behind HTTP Basic Auth while it's pre-launch.
// Credentials come from Vercel project env vars (SITE_USER / SITE_PASSWORD),
// never committed here. If those vars are unset, every login attempt fails
// closed — the site stays locked rather than accidentally opening up.
export const config = {
  matcher: '/:path*',
};

export default function middleware(request: Request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ');

    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded);
      const separatorIndex = decoded.indexOf(':');
      const user = decoded.slice(0, separatorIndex);
      const pass = decoded.slice(separatorIndex + 1);

      if (user === process.env.SITE_USER && pass === process.env.SITE_PASSWORD) {
        return next();
      }
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Upshift", charset="UTF-8"',
    },
  });
}
