import { newE2EPage } from '@stencil/core/testing';

describe('stencil-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-footer></stencil-footer>');

    const element = await page.find('stencil-footer');
    expect(element).toHaveClass('hydrated');
  });
});
