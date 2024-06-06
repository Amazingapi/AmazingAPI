# TestDddSdk.DefaultApi

All URIs are relative to *https://api.contentgroove.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ClipsGet**](DefaultApi.md#apiV1ClipsGet) | **GET** /api/v1/clips | list clips
[**apiV1ClipsIdDelete**](DefaultApi.md#apiV1ClipsIdDelete) | **DELETE** /api/v1/clips/{id} | delete clip
[**apiV1ClipsIdGet**](DefaultApi.md#apiV1ClipsIdGet) | **GET** /api/v1/clips/{id} | show clip
[**apiV1ClipsIdPut**](DefaultApi.md#apiV1ClipsIdPut) | **PUT** /api/v1/clips/{id} | update clip
[**apiV1ClipsPost**](DefaultApi.md#apiV1ClipsPost) | **POST** /api/v1/clips | create clip
[**apiV1DirectUploadsGet**](DefaultApi.md#apiV1DirectUploadsGet) | **GET** /api/v1/direct_uploads | prepare presigned upload url
[**apiV1MediasGet**](DefaultApi.md#apiV1MediasGet) | **GET** /api/v1/medias | list medias
[**apiV1MediasIdDelete**](DefaultApi.md#apiV1MediasIdDelete) | **DELETE** /api/v1/medias/{id} | delete media
[**apiV1MediasIdGet**](DefaultApi.md#apiV1MediasIdGet) | **GET** /api/v1/medias/{id} | show media
[**apiV1MediasIdPut**](DefaultApi.md#apiV1MediasIdPut) | **PUT** /api/v1/medias/{id} | update media
[**apiV1MediasPost**](DefaultApi.md#apiV1MediasPost) | **POST** /api/v1/medias | create media
[**apiV1WebhookSubscriptionsGet**](DefaultApi.md#apiV1WebhookSubscriptionsGet) | **GET** /api/v1/webhook_subscriptions | list webhook subscriptions
[**apiV1WebhookSubscriptionsIdDelete**](DefaultApi.md#apiV1WebhookSubscriptionsIdDelete) | **DELETE** /api/v1/webhook_subscriptions/{id} | delete webhook subscription
[**apiV1WebhookSubscriptionsIdGet**](DefaultApi.md#apiV1WebhookSubscriptionsIdGet) | **GET** /api/v1/webhook_subscriptions/{id} | show webhook subscription
[**apiV1WebhookSubscriptionsPost**](DefaultApi.md#apiV1WebhookSubscriptionsPost) | **POST** /api/v1/webhook_subscriptions | create webhook subscription



## apiV1ClipsGet

> apiV1ClipsGet(opts)

list clips

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let opts = {
  'filter': {
  "filter[name_eq]": "john h. glenn, kindly air force base hospital",
  "filter[text_start]": "He landed in the sea"
}, // Object | Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
  'page': {
  "page[number]": 1,
  "page[size]": 5
}, // Object | Specify page number and page size for the query
  'sort': "sort_example" // String | Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
};
apiInstance.apiV1ClipsGet(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Object**](.md)| Filters to be applied to the query.  Query params in the url must look like this: \&quot;filter[attributeName_*matcher*]\&quot;  (i.e. filter[name_eq]&#x3D;chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/   | [optional] 
 **page** | [**Object**](.md)| Specify page number and page size for the query | [optional] 
 **sort** | **String**| Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1ClipsIdDelete

> apiV1ClipsIdDelete(id)

delete clip

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | The id of the clip to be retrieved
apiInstance.apiV1ClipsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the clip to be retrieved | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1ClipsIdGet

> apiV1ClipsIdGet(id)

show clip

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | The id of the clip to be retrieved
apiInstance.apiV1ClipsIdGet(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the clip to be retrieved | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1ClipsIdPut

> apiV1ClipsIdPut(id, apiV1ClipsIdPutRequest)

update clip

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | The id of the clip to be retrieved
let apiV1ClipsIdPutRequest = new TestDddSdk.ApiV1ClipsIdPutRequest(); // ApiV1ClipsIdPutRequest | 
apiInstance.apiV1ClipsIdPut(id, apiV1ClipsIdPutRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the clip to be retrieved | 
 **apiV1ClipsIdPutRequest** | [**ApiV1ClipsIdPutRequest**](ApiV1ClipsIdPutRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1ClipsPost

> apiV1ClipsPost(apiV1ClipsPostRequest)

create clip

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let apiV1ClipsPostRequest = new TestDddSdk.ApiV1ClipsPostRequest(); // ApiV1ClipsPostRequest | 
apiInstance.apiV1ClipsPost(apiV1ClipsPostRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiV1ClipsPostRequest** | [**ApiV1ClipsPostRequest**](ApiV1ClipsPostRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1DirectUploadsGet

> apiV1DirectUploadsGet()

prepare presigned upload url

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
apiInstance.apiV1DirectUploadsGet().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1MediasGet

> apiV1MediasGet(opts)

list medias

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let opts = {
  'filter': {
  "filter[name_eq]": "chimp into space",
  "filter[sourceUrl_start]": "https://archive.org"
}, // Object | Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
  'page': {
  "page[number]": 1,
  "page[size]": 5
}, // Object | Specify page number and page size for the query
  'sort': "sort_example" // String | Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
};
apiInstance.apiV1MediasGet(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Object**](.md)| Filters to be applied to the query.  Query params in the url must look like this: \&quot;filter[attributeName_*matcher*]\&quot;  (i.e. filter[name_eq]&#x3D;chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/   | [optional] 
 **page** | [**Object**](.md)| Specify page number and page size for the query | [optional] 
 **sort** | **String**| Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1MediasIdDelete

> apiV1MediasIdDelete(id)

delete media

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | id
apiInstance.apiV1MediasIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1MediasIdGet

> apiV1MediasIdGet(id)

show media

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | id
apiInstance.apiV1MediasIdGet(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1MediasIdPut

> apiV1MediasIdPut(id, apiV1MediasIdPutRequest)

update media

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | id
let apiV1MediasIdPutRequest = new TestDddSdk.ApiV1MediasIdPutRequest(); // ApiV1MediasIdPutRequest | 
apiInstance.apiV1MediasIdPut(id, apiV1MediasIdPutRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **apiV1MediasIdPutRequest** | [**ApiV1MediasIdPutRequest**](ApiV1MediasIdPutRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1MediasPost

> apiV1MediasPost(apiV1MediasPostRequest)

create media

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let apiV1MediasPostRequest = new TestDddSdk.ApiV1MediasPostRequest(); // ApiV1MediasPostRequest | 
apiInstance.apiV1MediasPost(apiV1MediasPostRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiV1MediasPostRequest** | [**ApiV1MediasPostRequest**](ApiV1MediasPostRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1WebhookSubscriptionsGet

> apiV1WebhookSubscriptionsGet(opts)

list webhook subscriptions

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let opts = {
  'filter': {
  "filter[name_eq]": "chimp into space"
}, // Object | Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
  'sort': "sort_example" // String | Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
};
apiInstance.apiV1WebhookSubscriptionsGet(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**Object**](.md)| Filters to be applied to the query.  Query params in the url must look like this: \&quot;filter[attributeName_*matcher*]\&quot;  (i.e. filter[name_eq]&#x3D;chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/   | [optional] 
 **sort** | **String**| Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1WebhookSubscriptionsIdDelete

> apiV1WebhookSubscriptionsIdDelete(id)

delete webhook subscription

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | The id of the webhook subscription to be retrieved
apiInstance.apiV1WebhookSubscriptionsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the webhook subscription to be retrieved | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1WebhookSubscriptionsIdGet

> apiV1WebhookSubscriptionsIdGet(id)

show webhook subscription

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let id = "id_example"; // String | The id of the webhook subscription to be retrieved
apiInstance.apiV1WebhookSubscriptionsIdGet(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the webhook subscription to be retrieved | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1WebhookSubscriptionsPost

> apiV1WebhookSubscriptionsPost(apiV1WebhookSubscriptionsPostRequest)

create webhook subscription

### Example

```javascript
import TestDddSdk from 'test_ddd_sdk';
let defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
let BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix = 'Token';

let apiInstance = new TestDddSdk.DefaultApi();
let apiV1WebhookSubscriptionsPostRequest = new TestDddSdk.ApiV1WebhookSubscriptionsPostRequest(); // ApiV1WebhookSubscriptionsPostRequest | 
apiInstance.apiV1WebhookSubscriptionsPost(apiV1WebhookSubscriptionsPostRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiV1WebhookSubscriptionsPostRequest** | [**ApiV1WebhookSubscriptionsPostRequest**](ApiV1WebhookSubscriptionsPostRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerHeader](../README.md#BearerHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

