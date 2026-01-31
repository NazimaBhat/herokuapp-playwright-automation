import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 300000,

  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['html', { open: 'never' }]
  ],

  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' }},
    { name: 'Firefox', use: { browserName: 'firefox' }},
    { name: 'WebKit', use: { browserName: 'webkit' }}
  ]
});
