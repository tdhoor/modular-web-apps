import { newE2EPage } from '@stencil/core/testing';

describe('stencil-shop-index', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-shop-index></stencil-shop-index>');

    const element = await page.find('stencil-shop-index');
    expect(element).toHaveClass('hydrated');
  });
});
