import { handler } from './index';

describe('index', () => {
  test('test', async () => {
    const data: any = {};
    await expect(handler(data)).resolves.toEqual({
      statusCode: 200,
      body: 'Hello World'
    });
  });
});
