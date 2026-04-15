import { navScrollTo } from './navigation.utils';

describe('NavigationUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should scroll to the specified element', () => {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = '1000px';
    document.body.appendChild(element);
    jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    let rafCallCount = 0;
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      if (rafCallCount++ < 1) cb(performance.now() + 700); // end animation
      return 0;
    });

    navScrollTo(element);
    expect(window.scrollTo).toHaveBeenCalled();
    document.body.removeChild(element);
  });

  it('should do nothing if the element is null', () => {
    const scrollSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    navScrollTo(null);
    expect(scrollSpy).not.toHaveBeenCalled();
  });

  it('should handle elements that are already in view', () => {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = '0px';
    document.body.appendChild(element);
    jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    let rafCallCount = 0;
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      if (rafCallCount++ < 1) cb(performance.now() + 700); // end animation
      return 0;
    });
    navScrollTo(element);
    expect(window.scrollTo).toHaveBeenCalled();
    document.body.removeChild(element);
  });
});
