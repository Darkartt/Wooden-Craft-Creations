import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');

  // Helper to filter out framer-motion specific props
  const filterProps = (props: any) => {
    const {
      initial,
      animate,
      whileInView,
      viewport,
      transition,
      layout,
      delay,
      whileHover,
      whileTap,
      whileFocus,
      whileDrag,
      exit,
      variants,
      ...rest
    } = props;
    return rest;
  };

  return {
    motion: {
      div: ({ children, ...props }: any) => React.createElement('div', filterProps(props), children),
      section: ({ children, ...props }: any) => React.createElement('section', filterProps(props), children),
      h1: ({ children, ...props }: any) => React.createElement('h1', filterProps(props), children),
      p: ({ children, ...props }: any) => React.createElement('p', filterProps(props), children),
    },
  };
});
