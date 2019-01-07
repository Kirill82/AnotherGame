import Navigation from './navigation';

describe ('Navigation', () => {
  it('draw template into the body', () => {
    Navigation.render();
    const navTag = document.querySelector('body>nav');
    expect(navTag.length).toBe(1);
  })
})