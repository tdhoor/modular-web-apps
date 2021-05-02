import { newE2EPage } from '@stencil/core/testing';

describe('stencil-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-header></stencil-header>');

    const element = await page.find('stencil-header');
    expect(element).toHaveClass('hydrated');
  });
});
