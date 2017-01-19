# Stripe/React bug on Chrome iOS?

***NOTE: This is now fixed by Stripe as of Jan 18th, 2017.***

This is a "hello world" React application with Stripe Connect demonstrating a bug where Stripe + React in combination doesn't seem to work on Chrome on iOS. To reproduce:

1. `npm install`
2. `npm start`
3. Reproduce the bug in Chrome on iOS (`src\App.js#38` is the entry point of the problem). Example using ngrok:
	1. `ngrok http 3000`
	2. Go to ngrok url from Chrome on physical iOS device