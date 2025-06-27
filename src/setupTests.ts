import { server } from './mocks/server';
import { rest } from 'msw';
import 'whatwg-fetch'

// require('node-fetch')

// Set up a catch-all handler for unhandled requests.
server.use(
    rest.get('*', (req, res, ctx) => {
      console.error(`Please add request handler for ${req.url.toString()}`);
      return res(
        ctx.status(500),
        ctx.json({ error: 'Please add request handler' })
      );
    })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
