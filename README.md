# <code>oddsjam-js-wrapper</code>: A lightweight OddsJam API wrapper for Javascript/Typescript

## What is <code>oddsjam-js-wrapper</code>?

<code>oddsjam-js-wrapper</code> is a fast, lightweight wrapper for the [OddsJam API](https://developer.oddsjam.com/getting-started). It strives to be as intuitive to use as possible, providing strongly typed requests and responses to ensure predictability and consistency.

## How do I use it?

Start by installing the <code>oddsjam-js-wrapper</code> package

```
    npm -i oddsjam-js-wrapper
```

Create an instance of the <code>OddsJamClient</code> - depending on your environment (CommonJS example):

```
    const OddsJamClient = require('oddsjam-js-wrapper');
    const clientInstance = OddsJamClient(YOUR_API_KEY);
```

Then simply call whichever async function you'd like to, for example:

```
const futures = async () => {
  try {
    const data = await clientInstance.getFutures();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

futures();
```

This will yield you a strongly typed return value of the "futures" type based on the OddsJam API spec.

NOTE: I am purposely, as least as the package stands now, not handling errors within the package and the capture of these need to be handled by the user of the package. In doing so, we get really nice type hinting on the return values of the API as opposed to returning either the Promise result or the error itself and losing this ability.

Parameters are not required for any function call, but can be provided as desired:

The parameters that can receive multiple instances of themself, i.e. sport in this example, can be passed in as either a singular value or an array of values and they will be parsed into the GET request.

```
    const data = await oddsJamAPI.getGames({page: 2, sport: ['baseball', 'basketball']});

    OR

    const data = await oddsJamAPI.getGames({page: 2, sport: 'baseball'});
```

Note: Sport and SportsBook parameters are _case insensitive_
