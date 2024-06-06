# test_ddd_sdk

TestDddSdk - JavaScript client for test_ddd_sdk
# Overview

The ContentGroove Developer API enables you to add the power of ContentGroove's video AI to your own applications and workflows.

Webhooks are a way for ContentGroove to send video information
to your application, to update your system and/or trigger other business processes.

You can use Webhooks and the Developer API separately or together.

# Getting Started with Webhooks

- Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
- Read \"Using Webhooks\" on the [API Reference page](https://developers.contentgroove.com/api_reference)
- Visit the [Webhooks page](https://app.contentgroove.com/webhook_subscriptions) and create a new webhook

# Using Webhooks

Webhooks, also known as callbacks, are a way for ContentGroove to notify your application as soon as possible after an event has occurred in ContentGroove.
For example after a media completes processing, ContentGroove can use a webhook to notify your application with information about the video: Suggested clips, transcription, and so on.
You can use the information sent to update your system and/or use the
webhook to trigger other business processes.

The webhook request is sent as an HTTP POST containing a payload of JSON-formatted data.
For the details of the payload format see the \"CALLBACKS\" sections below.

When your application receives the webhook request, it must respond with
a 200 HTTP status code (success).
If a 200 HTTP status code is not returned,
ContentGroove will assume that the webhook was not delivered and
will retry a limited number of times, using an exponential backoff algorithm.

ContentGroove makes a best effort to attempt to send the webhook at
least once.
Applications receiving webhooks must tolerate the
possibility of a single webhook payload being sent more than once
(idempotent behavior).
Applications receiving webhooks should tolerate the possibility that
a webhook could not be delivered
(for example your application was down when delivery was attempted).

# Getting Started with the Developer API

- Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
- Visit the [API Keys page](https://app.contentgroove.com/api_keys)
  - Create a new API Key then copy and save the value.
    > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️
- View all available endpoints, and try the API, on our [API Reference page](https://developers.contentgroove.com/api_reference)

# Using the Developer API

- Create a new media (video or audio) in ContentGroove
  - If the video or audio is available from a URL, you can create a media by providing the `source_url` parameter. ContentGroove will fetch the video or audio from the URL if possible.
  - Or, you can create a media from a video or audio file which you upload directly to ContentGroove (see File Uploading section below).
- After the new media is created, at first it will be in a \"processing\" state.
  Depending on the size and duration of the video or audio file, it will take some time for processing to complete.
  - You can use ContentGroove Webhooks to be notified immediately when processing has completed. (Details coming soon.)
  - You can also use the API to read the state of the media, to determine if the media has completed processing yet.
- After the media has completed processing, you can access all of these details about the media:
  - The media name and description
  - The transcription of spoken words
  - Topics and keywords which were discussed in the transcription
  - Suggested video clips are automatically created
- In addition to the automatically created video clips, you can create more video clips from the media

# Response Codes

The following is a comprehensive list of the status codes you may receive while using the ContentGroove API:

- 200 \"Ok\"
  - The request was valid
- 400 \"Bad Request
  - This is returned when there was a problem parsing the JSON body of your request if you supplied the 'Content-Type': 'application/json' header, or if your request is missing the 'Content-Type' header altogether
- 401 \"Unauthorized\"
  - This is returned when you are attempting to perform an action on a resource that you are not authorized to do
- 402 \"Payment Required\"
  - This is returned when you are attempting to perform an action that would push your account above a usage limit. You can view your usage at: https://app.contentgroove.com/quota_usage
- 404 \"Not Found\"
  - This is returned when the resource you are trying to view does not exist
- 429 \"Too Many Requests\"
  - This is returned when you have performed too many requests within a given period of time
- 500 \"Internal Server Error\"
  - This is returned when your request was valid but there was a problem on our end

# File Uploading

- Step 1: Make a GET request to the direct uploads URL endpoint (/api/v1/direct_uploads) to receive an upload URL to upload the file to and an upload id.
- Step 2: Make a PUT request with the file as the body to the upload URL received in step 1. The response will have a 200 status with no body if the upload is successful.
  ```
  curl -T /path/to/file upload_url
  ```
- Step 3: After uploading the file to the upload URL, make a POST request to the create medias endpoint (/api/v1/medias), with the upload id and optionally a name and description for the new media.
  > At this time, file uploads are limited to 5gb per file.

# Allowed media types

Video:

- Supported: Most common video formats and codecs are supported.
- Recommended: mp4

Audio:

- Supported: aac, mp3, flac, ogg, wav, and wma
- Recommended: aac

# Authentication

You can use the API Key to authenticate your API requests using any of these methods. (Replace abc123 with your actual API Key.)

- Request header `Authorization: Bearer abc123`
- Request header `X-API-KEY: abc123`
- Query parameter `api_key=abc123`
  > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️

# Link to openapi.json spec

- https://api.contentgroove.com/api-docs/v1/openapi.json

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.4.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install test_ddd_sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your test_ddd_sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TestDddSdk = require('test_ddd_sdk');

var defaultClient = TestDddSdk.ApiClient.instance;
// Configure API key authorization: BearerHeader
var BearerHeader = defaultClient.authentications['BearerHeader'];
BearerHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerHeader.apiKeyPrefix['Authorization'] = "Token"

var api = new TestDddSdk.DefaultApi()
var opts = {
  'filter': {
  "filter[name_eq]": "john h. glenn, kindly air force base hospital",
  "filter[text_start]": "He landed in the sea"
}, // {Object} Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
  'page': {
  "page[number]": 1,
  "page[size]": 5
}, // {Object} Specify page number and page size for the query
  'sort': "sort_example" // {String} Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
};
api.apiV1ClipsGet(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.contentgroove.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TestDddSdk.DefaultApi* | [**apiV1ClipsGet**](docs/DefaultApi.md#apiV1ClipsGet) | **GET** /api/v1/clips | list clips
*TestDddSdk.DefaultApi* | [**apiV1ClipsIdDelete**](docs/DefaultApi.md#apiV1ClipsIdDelete) | **DELETE** /api/v1/clips/{id} | delete clip
*TestDddSdk.DefaultApi* | [**apiV1ClipsIdGet**](docs/DefaultApi.md#apiV1ClipsIdGet) | **GET** /api/v1/clips/{id} | show clip
*TestDddSdk.DefaultApi* | [**apiV1ClipsIdPut**](docs/DefaultApi.md#apiV1ClipsIdPut) | **PUT** /api/v1/clips/{id} | update clip
*TestDddSdk.DefaultApi* | [**apiV1ClipsPost**](docs/DefaultApi.md#apiV1ClipsPost) | **POST** /api/v1/clips | create clip
*TestDddSdk.DefaultApi* | [**apiV1DirectUploadsGet**](docs/DefaultApi.md#apiV1DirectUploadsGet) | **GET** /api/v1/direct_uploads | prepare presigned upload url
*TestDddSdk.DefaultApi* | [**apiV1MediasGet**](docs/DefaultApi.md#apiV1MediasGet) | **GET** /api/v1/medias | list medias
*TestDddSdk.DefaultApi* | [**apiV1MediasIdDelete**](docs/DefaultApi.md#apiV1MediasIdDelete) | **DELETE** /api/v1/medias/{id} | delete media
*TestDddSdk.DefaultApi* | [**apiV1MediasIdGet**](docs/DefaultApi.md#apiV1MediasIdGet) | **GET** /api/v1/medias/{id} | show media
*TestDddSdk.DefaultApi* | [**apiV1MediasIdPut**](docs/DefaultApi.md#apiV1MediasIdPut) | **PUT** /api/v1/medias/{id} | update media
*TestDddSdk.DefaultApi* | [**apiV1MediasPost**](docs/DefaultApi.md#apiV1MediasPost) | **POST** /api/v1/medias | create media
*TestDddSdk.DefaultApi* | [**apiV1WebhookSubscriptionsGet**](docs/DefaultApi.md#apiV1WebhookSubscriptionsGet) | **GET** /api/v1/webhook_subscriptions | list webhook subscriptions
*TestDddSdk.DefaultApi* | [**apiV1WebhookSubscriptionsIdDelete**](docs/DefaultApi.md#apiV1WebhookSubscriptionsIdDelete) | **DELETE** /api/v1/webhook_subscriptions/{id} | delete webhook subscription
*TestDddSdk.DefaultApi* | [**apiV1WebhookSubscriptionsIdGet**](docs/DefaultApi.md#apiV1WebhookSubscriptionsIdGet) | **GET** /api/v1/webhook_subscriptions/{id} | show webhook subscription
*TestDddSdk.DefaultApi* | [**apiV1WebhookSubscriptionsPost**](docs/DefaultApi.md#apiV1WebhookSubscriptionsPost) | **POST** /api/v1/webhook_subscriptions | create webhook subscription


## Documentation for Models

 - [TestDddSdk.ApiV1ClipsIdPutRequest](docs/ApiV1ClipsIdPutRequest.md)
 - [TestDddSdk.ApiV1ClipsIdPutRequestData](docs/ApiV1ClipsIdPutRequestData.md)
 - [TestDddSdk.ApiV1ClipsIdPutRequestDataAttributes](docs/ApiV1ClipsIdPutRequestDataAttributes.md)
 - [TestDddSdk.ApiV1ClipsPostRequest](docs/ApiV1ClipsPostRequest.md)
 - [TestDddSdk.ApiV1ClipsPostRequestData](docs/ApiV1ClipsPostRequestData.md)
 - [TestDddSdk.ApiV1ClipsPostRequestDataAttributes](docs/ApiV1ClipsPostRequestDataAttributes.md)
 - [TestDddSdk.ApiV1MediasIdPutRequest](docs/ApiV1MediasIdPutRequest.md)
 - [TestDddSdk.ApiV1MediasIdPutRequestData](docs/ApiV1MediasIdPutRequestData.md)
 - [TestDddSdk.ApiV1MediasIdPutRequestDataAttributes](docs/ApiV1MediasIdPutRequestDataAttributes.md)
 - [TestDddSdk.ApiV1MediasPostRequest](docs/ApiV1MediasPostRequest.md)
 - [TestDddSdk.ApiV1MediasPostRequest1](docs/ApiV1MediasPostRequest1.md)
 - [TestDddSdk.ApiV1MediasPostRequest1Payload](docs/ApiV1MediasPostRequest1Payload.md)
 - [TestDddSdk.ApiV1MediasPostRequest1PayloadData](docs/ApiV1MediasPostRequest1PayloadData.md)
 - [TestDddSdk.ApiV1MediasPostRequest1PayloadDataAttributes](docs/ApiV1MediasPostRequest1PayloadDataAttributes.md)
 - [TestDddSdk.ApiV1MediasPostRequest1PayloadDataRelationships](docs/ApiV1MediasPostRequest1PayloadDataRelationships.md)
 - [TestDddSdk.ApiV1MediasPostRequest1PayloadDataRelationshipsClips](docs/ApiV1MediasPostRequest1PayloadDataRelationshipsClips.md)
 - [TestDddSdk.ApiV1MediasPostRequest1PayloadDataRelationshipsClipsDataInner](docs/ApiV1MediasPostRequest1PayloadDataRelationshipsClipsDataInner.md)
 - [TestDddSdk.ApiV1MediasPostRequest1PayloadDataTranscription](docs/ApiV1MediasPostRequest1PayloadDataTranscription.md)
 - [TestDddSdk.ApiV1MediasPostRequest1PayloadDataTranscriptionData](docs/ApiV1MediasPostRequest1PayloadDataTranscriptionData.md)
 - [TestDddSdk.ApiV1MediasPostRequestData](docs/ApiV1MediasPostRequestData.md)
 - [TestDddSdk.ApiV1MediasPostRequestDataAttributes](docs/ApiV1MediasPostRequestDataAttributes.md)
 - [TestDddSdk.ApiV1WebhookSubscriptionsPostRequest](docs/ApiV1WebhookSubscriptionsPostRequest.md)
 - [TestDddSdk.ApiV1WebhookSubscriptionsPostRequestData](docs/ApiV1WebhookSubscriptionsPostRequestData.md)
 - [TestDddSdk.ApiV1WebhookSubscriptionsPostRequestDataAttributes](docs/ApiV1WebhookSubscriptionsPostRequestDataAttributes.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### BearerHeader


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

