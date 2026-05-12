import { fn } from 'jest-mock';

export const createMockAiService = () => ({
  chatCv: fn(),
  coverLetter: fn(),
  contactAssistant: fn(),
  askMe: fn(),
});

export const createMockPlatformService = (isBrowser = true) => ({
  isBrowser,
});

export const createMockGsapService = () => {
  const to = fn<(target: unknown, options?: { onComplete?: () => void }) => void>().mockImplementation(
    (_, options = {}) => {
      options.onComplete?.();
    }
  );

  return {
    gsap: {
      set: fn(),
      to,
      from: fn().mockReturnValue({ scrollTrigger: {} }),
      killTweensOf: fn(),
    },
  };
};
