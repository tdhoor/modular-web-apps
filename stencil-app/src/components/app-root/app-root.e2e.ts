import { newE2EPage } from '@stencil/core/testing';

describe('stencil-shop', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('stencil-shop');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('stencil-shop >>> h1');
    expect(element.textContent).toEqual('Stencil App Starter');
  });
});
