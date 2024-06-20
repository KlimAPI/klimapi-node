# Methods

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWebhook**](KlimApi.md#addWebhook) | **POST** /webhooks/add | Add Webhook
[**calculate**](KlimApi.md#calculate) | **POST** /calculate | Calculate
[**calculateCart**](KlimApi.md#calculateCart) | **POST** /stores/{store_ident}/cart | Calculate
[**getCategories**](KlimApi.md#getCategories) | **GET** /categories | Get all Categories
[**getCertificationAuthorities**](KlimApi.md#getCertificationAuthorities) | **GET** /certification_authorities | Get all Certification Authorities
[**getMetrics**](KlimApi.md#getMetrics) | **POST** /metrics | Order Metrics
[**getOrder**](KlimApi.md#getOrder) | **GET** /orders/{order_id} | Get Order
[**getOrders**](KlimApi.md#getOrders) | **POST** /orders | Get Orders
[**getPaymentLink**](KlimApi.md#getPaymentLink) | **GET** /orders/link/{payment_link_id} | Get Checkout Link
[**getProject**](KlimApi.md#getProject) | **GET** /projects/{project_id} | Get Project
[**getProjects**](KlimApi.md#getProjects) | **GET** /projects | Get all supported Projects
[**linkByCalculation**](KlimApi.md#linkByCalculation) | **POST** /orders/link/calculate | By calculation
[**linkByCarbon**](KlimApi.md#linkByCarbon) | **POST** /orders/link/carbon | By carbon
[**linkByPrice**](KlimApi.md#linkByPrice) | **POST** /orders/link/price | By price
[**me**](KlimApi.md#me) | **GET** /me | Get Authenticated User
[**orderByCalculation**](KlimApi.md#orderByCalculation) | **POST** /orders/process/calculate | By calculation
[**orderByCarbon**](KlimApi.md#orderByCarbon) | **POST** /orders/process/carbon | By carbon
[**orderByPrice**](KlimApi.md#orderByPrice) | **POST** /orders/process/price | By price
[**pendingByCalculation**](KlimApi.md#pendingByCalculation) | **POST** /orders/pending/calculate | By calculation
[**pendingByCarbon**](KlimApi.md#pendingByCarbon) | **POST** /orders/pending/carbon | By carbon
[**pendingByPrice**](KlimApi.md#pendingByPrice) | **POST** /orders/pending/price | By price
[**process**](KlimApi.md#process) | **POST** /orders/{order_id}/process | Process pending Order
[**processCart**](KlimApi.md#processCart) | **POST** /stores/{store_ident}/cart/{order_id}/process | Process cart
[**refund**](KlimApi.md#refund) | **DELETE** /orders/{order_id}/refund | Refund Order
[**removeWebhook**](KlimApi.md#removeWebhook) | **DELETE** /webhooks/remove | Remove Webhook
[**syncBulkStore**](KlimApi.md#syncBulkStore) | **POST** /stores/{store_ident}/sync/bulk | Sync multiple Products
[**syncStore**](KlimApi.md#syncStore) | **POST** /stores/{store_ident}/sync | Sync a single Product


# **addWebhook**
> void addWebhook(addWebhookRequest)

Add a new Webhook to an integration. The webhook will be triggered by the given trigger.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.addWebhook({
    // AddWebhookRequest
    addWebhookRequest: {
    hookUrl: "hookUrl_example",
    trigger: "order.created",
  },
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully added the Webhook |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**500** | System unavailable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **calculate**
> CalculationResults calculate(calculateRequest)

**IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.calculate({
    // CalculateRequest | Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
    calculateRequest: {
    calculationOptions: [
      null,
    ],
    fractionalDigits: 2,
  },
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully calculated |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**422** | Unknown calculation parameter |  -  |
**500** | System unavailable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **calculateCart**
> CartResult calculateCart(cartItem, )

**IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.calculateCart({
    // Array<CartItem>
    cartItem: [
    {
      amount: 1,
      total: 3.14,
      product: {
        productId: "productId_example",
        name: "name_example",
        description: "description_example",
        price: 3.14,
        categories: [
          "categories_example",
        ],
        tags: [
          "tags_example",
        ],
        weight: 3.14,
        weightUnit: "kg",
        madeIn: "madeIn_example",
        emissionFactor: "emissionFactor_example",
        emissionMultiplicator: "price",
      },
    },
  ],
    // string | Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
    storeIdent: "store_ident_example",
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully calculated the cart |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategories**
> Array<Category> getCategories()

Use the method to get all activated categories for the given API key.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getCategories({
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got all categories |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCertificationAuthorities**
> Array<CertificationAuthority> getCertificationAuthorities()

Use this endpoint to get all external certification authorities we are using for our compensation projects. Learn more about our [Portfolio](/portfolio).

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getCertificationAuthorities().then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got all Certification Authorities |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMetrics**
> OrderMetrics getMetrics(getMetricsRequest)

Get metrics to all orders

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getMetrics({
    // GetMetricsRequest | 
    getMetricsRequest: {
    operator: "AND",
    filters: {
      metadata: [
        {
          "key": {},
        },
      ],
      status: "processed",
      recipientName: "recipientName_example",
      recipientEmail: "recipientEmail_example",
      price: 3.14,
      currency: "EUR",
      kgCO2e: 1,
    },
  },
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got metrics for the orders |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrder**
> Order getOrder()

Here you can request information about a specific Order.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getOrder({
    // string | You can get the order_id from several endpoints, for example when creating an Order.
    orderId: "order_id_example",
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the requested order |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**404** | Order not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrders**
> MetadataOrders getOrders(getOrdersRequest)

Query all orders

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getOrders({
    // GetOrdersRequest | 
    getOrdersRequest: {
    operator: "AND",
    filters: {
      metadata: [
        {
          "key": {},
        },
      ],
      status: "processed",
      recipientName: "recipientName_example",
      recipientEmail: "recipientEmail_example",
      price: 3.14,
      currency: "EUR",
      kgCO2e: 1,
    },
    limit: 10,
    skip: 0,
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the requested orders |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPaymentLink**
> CheckoutLink getPaymentLink()

Here you can request information about a specific Checkout Link.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getPaymentLink({
    // string
    paymentLinkId: "payment_link_id_example",
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the requested Checkout Link |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**404** | Checkout Link not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProject**
> Project getProject()

Here you can request information to every project in our database.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getProject({
    // string | You can get the project_id from several endpoints, for example when creating an Order.
    projectId: "project_id_example",
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the requested project |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjects**
> Array<Project> getProjects()

Get all projects you supported with the given API key.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.getProjects({
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the requested projects |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**404** | No Projects found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkByCalculation**
> CheckoutLinksCalculated linkByCalculation(linkByCalculationRequest)

**IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.linkByCalculation({
    // LinkByCalculationRequest | Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
    linkByCalculationRequest: {
    calculationOptions: [
      null,
    ],
    changeAllowed: false,
    successUrl: "successUrl_example",
    cancelUrl: "cancelUrl_example",
    orderCount: 1,
    metadata: [
      {
        "key": {},
      },
    ],
    fractionalDigits: 2,
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got a Checkout Link |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**422** | Unknown calculation parameter |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkByCarbon**
> CheckoutLinks linkByCarbon()

Get the compensation instantly by kilogram CO2e.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.linkByCarbon({
    // LinkByCarbonRequest (optional)
    linkByCarbonRequest: {
    kgCO2e: 1,
    changeAllowed: false,
    successUrl: "successUrl_example",
    cancelUrl: "cancelUrl_example",
    orderCount: 1,
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got a Checkout Link |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **linkByPrice**
> CheckoutLinks linkByPrice()

Get the compensation instantly by price.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.linkByPrice({
    // LinkByPriceRequest (optional)
    linkByPriceRequest: {
    priceAmount: 0.5,
    changeAllowed: false,
    successUrl: "successUrl_example",
    cancelUrl: "cancelUrl_example",
    orderCount: 1,
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got a Checkout Link |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **me**
> any me()

Get Information about the Authenticated User, the Integration and the given API Key.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.me().then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the user |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderByCalculation**
> OrderCalculated orderByCalculation(orderByCalculationRequest)

**IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.orderByCalculation({
    // OrderByCalculationRequest | Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
    orderByCalculationRequest: {
    calculationOptions: [
      null,
    ],
    recipientName: "recipientName_example",
    recipientEmail: "recipientEmail_example",
    sendAt: new Date('1970-01-01T00:00:00.00Z'),
    priceLimit: 0.5,
    metadata: [
      {
        "key": {},
      },
    ],
    fractionalDigits: 2,
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got an Order |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**406** | The Request exceeds the given &lt;code&gt;price_limit&lt;/code&gt; |  -  |
**422** | Unknown calculation parameter |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderByCarbon**
> Order orderByCarbon()

Get the compensation instantly by kilogram CO2e. For this route the API key has no limits.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.orderByCarbon({
    // BuyAmount (optional)
    buyAmount: {
    kgCO2e: 1,
    recipientName: "recipientName_example",
    recipientEmail: "recipientEmail_example",
    sendAt: new Date('1970-01-01T00:00:00.00Z'),
    priceLimit: 0.5,
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got an Order |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**406** | The Request exceeds the given &lt;code&gt;price_limit&lt;/code&gt; |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderByPrice**
> Order orderByPrice()

Get the compensation instantly by price. For this route the API key has no limits.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.orderByPrice({
    // BuyPrice (optional)
    buyPrice: {
    priceAmount: 0.5,
    recipientName: "recipientName_example",
    recipientEmail: "recipientEmail_example",
    sendAt: new Date('1970-01-01T00:00:00.00Z'),
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got an Order |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pendingByCalculation**
> PendingOrdersCalculated pendingByCalculation(pendingByCalculationRequest)

**IMPORTANT:** Calling this route using API keys created in the **sandbox mode** is returning **random numbers** instead of **real calculations**.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.pendingByCalculation({
    // PendingByCalculationRequest | Choose up to 100 Elements from the **[Calculation Options](/resources/factors)**. In this example it is just **Travel by Car**.
    pendingByCalculationRequest: {
    calculationOptions: [
      null,
    ],
    orderCount: 1,
    metadata: [
      {
        "key": {},
      },
    ],
    fractionalDigits: 2,
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got an Order |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**422** | Unknown calculation parameter |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pendingByCarbon**
> PendingOrders pendingByCarbon(pendingByCarbonRequest)

Here you can create an Order by kilogram CO2e. Please note the request limits of your API key, normally it is 15000kg per request. We are happy to increase the limits on request, please write us a message.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.pendingByCarbon({
    // PendingByCarbonRequest
    pendingByCarbonRequest: {
    kgCO2e: 1,
    orderCount: 1,
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got an Order |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**426** | You reached a limit of your API key, contact us to upgrade the default limits |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pendingByPrice**
> PendingOrders pendingByPrice(pendingByPriceRequest)

Here you can create an Order by price. Please note the request limits of your API key, normally it is 250€ per request. We are happy to increase the limits on request, please write us a message.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.pendingByPrice({
    // PendingByPriceRequest
    pendingByPriceRequest: {
    priceAmount: 0.5,
    orderCount: 1,
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
    // 'EUR' | 'USD' | 'GBP' | 'CHF' | 'CAD' | 'NOK' | 'SEK' | 'DKK' | 'INR' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DOP' | 'DZD' | 'EGP' | 'ETB' | 'FJD' | 'FKP' | 'GEL' | 'GIP' | 'GMD' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'ISK' | 'JMD' | 'KES' | 'KGS' | 'KHR' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'MAD' | 'MDL' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NPR' | 'NZD' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RSD' | 'SBD' | 'SCR' | 'SGD' | 'SHP' | 'SLE' | 'SOS' | 'SRD' | 'STD' | 'SZL' | 'THB' | 'TJS' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UYU' | 'UZS' | 'WST' | 'XCD' | 'YER' | 'ZAR' | 'ZMW' (optional)
    X_CURRENCY: "EUR",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got an Order |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**426** | You reached a limit of your API key, contact us to upgrade the default limits |  -  |
**503** | Order exceeds default stock limit. Contact us for larger orders and to increase the inventory limit for your API requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **process**
> Order process(processOrder, )

You accepted the given order. You may now show a confirmation or provide the link to the certificate.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.process({
    // ProcessOrder
    processOrder: {
    recipientName: "recipientName_example",
    recipientEmail: "recipientEmail_example",
    sendAt: new Date('1970-01-01T00:00:00.00Z'),
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // string | The order id specified in the Order
    orderId: "order_id_example",
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The processed Order |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**410** | The order is no longer available |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **processCart**
> Order processCart(processOrder, )



### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.processCart({
    // ProcessOrder
    processOrder: {
    recipientName: "recipientName_example",
    recipientEmail: "recipientEmail_example",
    sendAt: new Date('1970-01-01T00:00:00.00Z'),
    metadata: [
      {
        "key": {},
      },
    ],
  },
    // string | Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
    storeIdent: "store_ident_example",
    // string | The order id specified in the Order
    orderId: "order_id_example",
    // 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'NL' | 'PL' | 'PT' | 'SV' | 'SL' | 'FI' | 'BG' | 'CS' | 'DA' | 'EL' | 'ET' | 'HU' | 'LT' | 'LV' | 'RO' | 'SK' (optional)
    X_LOCALE: "DE",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The processed Order |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**410** | The order is no longer available |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refund**
> void refund()

**Refunding an Order is only available for 30 days after the initial create/process call. Refunding is not available for Checkout Link Orders**

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.refund({
    // string | The order id specified in the Order
    orderId: "order_id_example",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Order successfully refunded |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**410** | Order not found or the period of 30 days was exceeded and a refund is no longer available |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeWebhook**
> void removeWebhook(addWebhookRequest)

Remove a Webhook from an integration.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.removeWebhook({
    // AddWebhookRequest
    addWebhookRequest: {
    hookUrl: "hookUrl_example",
    trigger: "order.created",
  },
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully removed the Webhook |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**500** | System unavailable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **syncBulkStore**
> void syncBulkStore(product, )

Use the method to sync multiple products from the given store to our database.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.syncBulkStore({
    // Array<Product>
    product: [
    {
      productId: "productId_example",
      name: "name_example",
      description: "description_example",
      price: 3.14,
      categories: [
        "categories_example",
      ],
      tags: [
        "tags_example",
      ],
      weight: 3.14,
      weightUnit: "kg",
      madeIn: "madeIn_example",
      emissionFactor: "emissionFactor_example",
      emissionMultiplicator: "price",
    },
  ],
    // string | Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
    storeIdent: "store_ident_example",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Products successfully synced |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**413** | You exceeded the maximum number of products (100) per request |  -  |
**422** | Unknown or missing product parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **syncStore**
> void syncStore(product, )

Use the method to sync a single product from the given store to our database.

### Example


```typescript
const KlimAPI = require('@klimapi/klimapi-node');

const config = KlimAPI.createConfiguration({
    authMethods: {
        apiKey: 'test-key',
    }
});

const klimapi = new KlimAPI.KlimApi(config);

klimapi.syncStore({
    // Product
    product: {
    productId: "productId_example",
    name: "name_example",
    description: "description_example",
    price: 3.14,
    categories: [
      "categories_example",
    ],
    tags: [
      "tags_example",
    ],
    weight: 3.14,
    weightUnit: "kg",
    madeIn: "madeIn_example",
    emissionFactor: "emissionFactor_example",
    emissionMultiplicator: "price",
  },
    // string | Setup a new store **[here](/dashboard/ecommerce)** to get a store ident
    storeIdent: "store_ident_example",
}).then((data) => {
    console.log('API called successfully. Returned data: ');
    console.log(data);
}).catch((error) => console.error(error));
```

### Authorization

[apiKey](README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Product successfully synced |  -  |
**400** | Your request is invalid, please check the given parameters |  -  |
**401** | Your API Key is invalid, deactivated or your account has been suspended |  -  |
**422** | Unknown or missing product parameter |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


