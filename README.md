# SwitchHTTPProtocol

## Overview
A small JavaScript library to switch the protocol of a given site address from HTTP to HTTPS or vice versa.

**Protocol Switching**: Seamlessly switch the protocol of a given site address from HTTP to HTTPS or vice versa.  
**Browser Compatibility**: Particularly useful for sites that require HTTP to function correctly, especially as modern browsers increasingly enforce HTTPS.  
**Callback Execution**: Execute a specified callback function once the desired protocol has been successfully loaded.  
**Protocol Enforcement**: Ensure your site consistently uses either HTTP or HTTPS as needed

## Code

### Constructor(options)

#### options (Object): Configuration options.
- `siteAddress` **(string)**: The site address to switch the protocol for. Defaults to the current window site address if left blank.
- `httpToHttps` **(boolean)**: Whether to switch from HTTP to HTTPS. Default is true.
- `callback` **(Function)**: The callback function to execute after switching the protocol. Default is an empty function.

### Methods

`changeProtocol()`

> Changes the protocol of the site address.

`checkProtocol()`

> Checks the current protocol and switches if necessary.

### Use

#### Change protocol of current site
```Javascript
const sp = new SwitchHTTPProtocol({
  httpToHttps: true, // Use HTTPS Protocol
  callback: () => {
    console.log("Protocol switched successfully.");
  },
});

/* Or */

const constructorObject = {
  httpToHttps: true, // Use HTTPS Protocol
  callback: () => callback: () => {
    console.log("Protocol switched successfully");
  }, 
};

const sp = new SwitchHTTPProtocol(constructorObject);
```

#### Navigate to defined site
```Javascript
const sp = new SwitchHTTPProtocol({
  siteAddress: "example.com",
  httpToHttps: false, // use HTTP protocol
  callback: () => {
    console.log("Protocol switched successfully.");
  },
});

/* Or */

const constructorObject = {
  siteAddress: "example.com",
  httpToHttps: false, // use HTTP protocol
  callback: () => {
    console.log("Protocol switched successfully");
  }, 
};

const sp = new SwitchHTTPProtocol(constructorObject);
```