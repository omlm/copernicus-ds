import { useEffect } from 'react'
import type { Preview } from '@storybook/react-vite'
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'
import '../src/styles/global.css'
import './storybook.css'

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
  globalTypes: {
    theme: {
      description: 'Light/dark-tema (Copernicus DS)',
      defaultValue: 'light',
      toolbar: {
        title: 'Tema',
        icon: 'sun',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      // Eksplisitt data-theme på <html> overstyrer OS-ens prefers-color-scheme
      // (jf. :root:not([data-theme="light"]) i tokens.css), så begge moder kan
      // forhåndsvises uavhengig av systeminnstillingen.
      const theme = context.globals.theme === 'dark' ? 'dark' : 'light'

      useEffect(() => {
        // Settes (ikke fjernes ved unmount) slik at Docs-flaten beholder temaet
        // mens flere stories rendres etter hverandre.
        document.documentElement.setAttribute('data-theme', theme)
      }, [theme])

      return (
        <div
          style={{
            background: 'var(--color-background-canvas)',
            color: 'var(--color-foreground-primary)',
            minHeight: 'auto',
          }}
        >
          <Story />
        </div>
      )
    },
  ],

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
