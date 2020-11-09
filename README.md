# Karma-MSW Test

## Summary

The goal of this project is to determine a development pattern for using [MSW](https://mswjs.io/) with [Karma](https://karma-runner.github.io/latest/index.html).

Currently it cannot find the service worker and logs a warning.

```js
09 11 2020 11:39:48.032:WARN [web-server]: 404: /mockServiceWorker.js
ERROR: '[MSW] Failed to register a Service Worker for scope ('http://localhost:9876/') with script ('http://localhost:9876/mockServiceWorker.js'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init'
```

## Setup
`npm install`

## Usage
`npm test`

## Current Output
```js
09 11 2020 11:39:47.484:INFO [karma-server]: Karma v5.2.3 server started at http://localhost:9876/
09 11 2020 11:39:47.485:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
09 11 2020 11:39:47.495:INFO [launcher]: Starting browser ChromeHeadless
09 11 2020 11:39:47.821:INFO [Chrome Headless 86.0.4240.183 (Mac OS 10.15.7)]: Connected on socket SxSLpm9dQA541r5eAAAA with id 79521988
09 11 2020 11:39:48.032:WARN [web-server]: 404: /mockServiceWorker.js
ERROR: '[MSW] Failed to register a Service Worker for scope ('http://localhost:9876/') with script ('http://localhost:9876/mockServiceWorker.js'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init'
09 11 2020 11:39:48.038:WARN [web-server]: 404: /foo
  Fetching foo
    ✖ should handle foo

Finished in 0.065 secs / 0.004 secs @ 11:39:48 GMT-0500 (Eastern Standard Time)

SUMMARY:
✔ 0 tests completed
✖ 1 test failed

FAILED TESTS:
  Fetching foo
    ✖ should handle foo
      Chrome Headless 86.0.4240.183 (Mac OS 10.15.7)
    AssertionError: expected 'NOT FOUND' to equal 'foo'
        at eval (webpack:///./foo.spec.js?:13:31)

npm ERR! Test failed.  See above for more details.
```