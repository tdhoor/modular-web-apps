import { newE2EPage } from '@stencil/core/testing';

describe('view-shop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<view-shop></view-shop>');

    const element = await page.find('view-shop');
    expect(element).toHaveClass('hydrated');
  });
});
