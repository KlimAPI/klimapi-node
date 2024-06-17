# @klimapi/klimapi-node

This API offers you the possibility to calculate and offset emissions, create checkout links, get statistics and much more.

For more information, please visit [https://klimapi.com/resources/docs](https://klimapi.com/resources/docs).

## Installation

`npm install @klimapi/klimapi-node --save`

## Setup new API Instance

```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);
```

## Methods

See Docs [here](KlimApi.md).
