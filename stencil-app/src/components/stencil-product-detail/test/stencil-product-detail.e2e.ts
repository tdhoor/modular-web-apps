import { newE2EPage } from '@stencil/core/testing';

describe('stencil-product-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-product-detail></stencil-product-detail>');

    const element = await page.find('stencil-product-detail');
    expect(element).toHaveClass('hydrated');
  });
});
