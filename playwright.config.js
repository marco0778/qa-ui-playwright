// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = ({
  testDir:'./tests',
  timeout:90 * 1000,
  expect:{
    timeout: 60000,
  },
  reporter: 'html',

  use: {
    browserName:'chromium',
    headless: true,
    //channel: 'msedge',
    //executablePath: 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    

  },

});
module.exports = config