import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { NextFunction, Request, Response } from 'express';

import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Lee los woff2 de Inter una vez al arrancar — protegido para la fase de build
let fontPreloadTags = '';
try {
  const interFonts = readdirSync(join(browserDistFolder, 'media')).filter(
    (f) => f.startsWith('inter-latin-') && f.endsWith('.woff2'),
  );

  const criticalWeights = ['400', '500', '700'];
  const criticalFonts = interFonts.filter((f) =>
    criticalWeights.some((w) => f.includes(`-${w}-normal-`)),
  );

  fontPreloadTags = criticalFonts
    .map(
      (f) =>
        `<link rel="preload" as="font" type="font/woff2" crossorigin="anonymous" href="/media/${f}">`,
    )
    .join('\n  ');
} catch {
  // Durante el build el directorio media aún no existe — se omite
}

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await angularApp.handle(req);
    if (!response) return next();

    if (fontPreloadTags) {
      const html = await response.text();

      // LOG TEMPORAL
      console.log('=== DEBUG ===');
      console.log('fontPreloadTags:', fontPreloadTags);
      console.log('html starts with:', html.substring(0, 200));
      console.log('head match:', html.match(/(<head[^>]*>)/i)?.[0]);

      const injected = html.replace(/(<head[^>]*>)/i, `$1\n  ${fontPreloadTags}`);
      console.log('injection worked:', injected !== html);
      // FIN LOG

      res.status(response.status);
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() !== 'content-length') {
          res.setHeader(key, value);
        }
      });
      res.send(injected);
    } else {
      console.log('=== fontPreloadTags está vacío ===');
      writeResponseToNodeResponse(response, res);
    }
  } catch (err) {
    next(err);
  }
});

if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
