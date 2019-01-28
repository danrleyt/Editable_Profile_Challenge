import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import faker from 'faker';
import puppeteer from 'puppeteer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Signup Page', () => {
  test('Signup button shows up', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();
    page.emulate({
      viewport: {
        width: 500,
        heigh: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000');

  })
})