import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { NextFunction, Request, Response } from 'express';

import { createRequire } from 'module';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const cors = require('cors');

const browserDistFolder = join(import.meta.dirname, '../browser');
const serverDistFolder = join(import.meta.dirname, '..');

const app = express();
app.use(cors());
app.set('view engine', 'html');
const angularApp = new AngularNodeAppEngine();

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

app.use(
  express.static(serverDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await angularApp.handle(req);
    if (!response) return next();
    writeResponseToNodeResponse(response, res);
  } catch (err) {
    next(err);
  }
});

const port = process.env['PORT'] || 4000;
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Node Express server listening on http://localhost:${port}`);
});

export const reqHandler = createNodeRequestHandler(app);
