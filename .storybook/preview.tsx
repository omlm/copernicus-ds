import type { Preview } from '@storybook/react-vite'
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'
import '../src/styles/global.css'

// Egne breakpoint-presets for Copernicus DS. Velg i Viewport-verktøyet i toolbaren.
const cdsViewports = {
  mobil: {
    name: 'Mobil',
    styles: { width: '375px', height: '667px' },
    type: 'mobile',
  },
  mobilStor: {
    name: 'Mobil (stor)',
    styles: { width: '414px', height: '896px' },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: { width: '768px', height: '1024px' },
    type: 'tablet',
  },
  laptop: {
    name: 'Laptop',
    styles: { width: '1024px', height: '768px' },
    type: 'desktop',
  },
  desktop: {
    name: 'Desktop',
    styles: { width: '1440px', height: '900px' },
    type: 'desktop',
  },
} as const

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    viewport: {
      // Egne DS-presets først, deretter de innebygde mobil/tablet-enhetene.
      options: { ...cdsViewports, ...MINIMAL_VIEWPORTS },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;