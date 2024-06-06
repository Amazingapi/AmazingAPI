/**
 * ContentGroove API
 * # Overview  The ContentGroove Developer API enables you to add the power of ContentGroove's video AI to your own applications and workflows.  Webhooks are a way for ContentGroove to send video information to your application, to update your system and/or trigger other business processes.  You can use Webhooks and the Developer API separately or together.  # Getting Started with Webhooks  - Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com) - Read \"Using Webhooks\" on the [API Reference page](https://developers.contentgroove.com/api_reference) - Visit the [Webhooks page](https://app.contentgroove.com/webhook_subscriptions) and create a new webhook  # Using Webhooks  Webhooks, also known as callbacks, are a way for ContentGroove to notify your application as soon as possible after an event has occurred in ContentGroove. For example after a media completes processing, ContentGroove can use a webhook to notify your application with information about the video: Suggested clips, transcription, and so on. You can use the information sent to update your system and/or use the webhook to trigger other business processes.  The webhook request is sent as an HTTP POST containing a payload of JSON-formatted data. For the details of the payload format see the \"CALLBACKS\" sections below.  When your application receives the webhook request, it must respond with a 200 HTTP status code (success). If a 200 HTTP status code is not returned, ContentGroove will assume that the webhook was not delivered and will retry a limited number of times, using an exponential backoff algorithm.  ContentGroove makes a best effort to attempt to send the webhook at least once. Applications receiving webhooks must tolerate the possibility of a single webhook payload being sent more than once (idempotent behavior). Applications receiving webhooks should tolerate the possibility that a webhook could not be delivered (for example your application was down when delivery was attempted).  # Getting Started with the Developer API  - Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com) - Visit the [API Keys page](https://app.contentgroove.com/api_keys)   - Create a new API Key then copy and save the value.     > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️ - View all available endpoints, and try the API, on our [API Reference page](https://developers.contentgroove.com/api_reference)  # Using the Developer API  - Create a new media (video or audio) in ContentGroove   - If the video or audio is available from a URL, you can create a media by providing the `source_url` parameter. ContentGroove will fetch the video or audio from the URL if possible.   - Or, you can create a media from a video or audio file which you upload directly to ContentGroove (see File Uploading section below). - After the new media is created, at first it will be in a \"processing\" state.   Depending on the size and duration of the video or audio file, it will take some time for processing to complete.   - You can use ContentGroove Webhooks to be notified immediately when processing has completed. (Details coming soon.)   - You can also use the API to read the state of the media, to determine if the media has completed processing yet. - After the media has completed processing, you can access all of these details about the media:   - The media name and description   - The transcription of spoken words   - Topics and keywords which were discussed in the transcription   - Suggested video clips are automatically created - In addition to the automatically created video clips, you can create more video clips from the media  # Response Codes  The following is a comprehensive list of the status codes you may receive while using the ContentGroove API:  - 200 \"Ok\"   - The request was valid - 400 \"Bad Request   - This is returned when there was a problem parsing the JSON body of your request if you supplied the 'Content-Type': 'application/json' header, or if your request is missing the 'Content-Type' header altogether - 401 \"Unauthorized\"   - This is returned when you are attempting to perform an action on a resource that you are not authorized to do - 402 \"Payment Required\"   - This is returned when you are attempting to perform an action that would push your account above a usage limit. You can view your usage at: https://app.contentgroove.com/quota_usage - 404 \"Not Found\"   - This is returned when the resource you are trying to view does not exist - 429 \"Too Many Requests\"   - This is returned when you have performed too many requests within a given period of time - 500 \"Internal Server Error\"   - This is returned when your request was valid but there was a problem on our end  # File Uploading  - Step 1: Make a GET request to the direct uploads URL endpoint (/api/v1/direct_uploads) to receive an upload URL to upload the file to and an upload id. - Step 2: Make a PUT request with the file as the body to the upload URL received in step 1. The response will have a 200 status with no body if the upload is successful.   ```   curl -T /path/to/file upload_url   ``` - Step 3: After uploading the file to the upload URL, make a POST request to the create medias endpoint (/api/v1/medias), with the upload id and optionally a name and description for the new media.   > At this time, file uploads are limited to 5gb per file.  # Allowed media types  Video:  - Supported: Most common video formats and codecs are supported. - Recommended: mp4  Audio:  - Supported: aac, mp3, flac, ogg, wav, and wma - Recommended: aac  # Authentication  You can use the API Key to authenticate your API requests using any of these methods. (Replace abc123 with your actual API Key.)  - Request header `Authorization: Bearer abc123` - Request header `X-API-KEY: abc123` - Query parameter `api_key=abc123`   > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️  # Link to openapi.json spec  - https://api.contentgroove.com/api-docs/v1/openapi.json 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ApiV1ClipsIdPutRequest from './model/ApiV1ClipsIdPutRequest';
import ApiV1ClipsIdPutRequestData from './model/ApiV1ClipsIdPutRequestData';
import ApiV1ClipsIdPutRequestDataAttributes from './model/ApiV1ClipsIdPutRequestDataAttributes';
import ApiV1ClipsPostRequest from './model/ApiV1ClipsPostRequest';
import ApiV1ClipsPostRequestData from './model/ApiV1ClipsPostRequestData';
import ApiV1ClipsPostRequestDataAttributes from './model/ApiV1ClipsPostRequestDataAttributes';
import ApiV1MediasIdPutRequest from './model/ApiV1MediasIdPutRequest';
import ApiV1MediasIdPutRequestData from './model/ApiV1MediasIdPutRequestData';
import ApiV1MediasIdPutRequestDataAttributes from './model/ApiV1MediasIdPutRequestDataAttributes';
import ApiV1MediasPostRequest from './model/ApiV1MediasPostRequest';
import ApiV1MediasPostRequest1 from './model/ApiV1MediasPostRequest1';
import ApiV1MediasPostRequest1Payload from './model/ApiV1MediasPostRequest1Payload';
import ApiV1MediasPostRequest1PayloadData from './model/ApiV1MediasPostRequest1PayloadData';
import ApiV1MediasPostRequest1PayloadDataAttributes from './model/ApiV1MediasPostRequest1PayloadDataAttributes';
import ApiV1MediasPostRequest1PayloadDataRelationships from './model/ApiV1MediasPostRequest1PayloadDataRelationships';
import ApiV1MediasPostRequest1PayloadDataRelationshipsClips from './model/ApiV1MediasPostRequest1PayloadDataRelationshipsClips';
import ApiV1MediasPostRequest1PayloadDataRelationshipsClipsDataInner from './model/ApiV1MediasPostRequest1PayloadDataRelationshipsClipsDataInner';
import ApiV1MediasPostRequest1PayloadDataTranscription from './model/ApiV1MediasPostRequest1PayloadDataTranscription';
import ApiV1MediasPostRequest1PayloadDataTranscriptionData from './model/ApiV1MediasPostRequest1PayloadDataTranscriptionData';
import ApiV1MediasPostRequestData from './model/ApiV1MediasPostRequestData';
import ApiV1MediasPostRequestDataAttributes from './model/ApiV1MediasPostRequestDataAttributes';
import ApiV1WebhookSubscriptionsPostRequest from './model/ApiV1WebhookSubscriptionsPostRequest';
import ApiV1WebhookSubscriptionsPostRequestData from './model/ApiV1WebhookSubscriptionsPostRequestData';
import ApiV1WebhookSubscriptionsPostRequestDataAttributes from './model/ApiV1WebhookSubscriptionsPostRequestDataAttributes';
import DefaultApi from './api/DefaultApi';


/**
* .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var AmazingApiRestApiSdk = require('index'); // See note below*.
* var xxxSvc = new AmazingApiRestApiSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new AmazingApiRestApiSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new AmazingApiRestApiSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new AmazingApiRestApiSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApiV1ClipsIdPutRequest model constructor.
     * @property {module:model/ApiV1ClipsIdPutRequest}
     */
    ApiV1ClipsIdPutRequest,

    /**
     * The ApiV1ClipsIdPutRequestData model constructor.
     * @property {module:model/ApiV1ClipsIdPutRequestData}
     */
    ApiV1ClipsIdPutRequestData,

    /**
     * The ApiV1ClipsIdPutRequestDataAttributes model constructor.
     * @property {module:model/ApiV1ClipsIdPutRequestDataAttributes}
     */
    ApiV1ClipsIdPutRequestDataAttributes,

    /**
     * The ApiV1ClipsPostRequest model constructor.
     * @property {module:model/ApiV1ClipsPostRequest}
     */
    ApiV1ClipsPostRequest,

    /**
     * The ApiV1ClipsPostRequestData model constructor.
     * @property {module:model/ApiV1ClipsPostRequestData}
     */
    ApiV1ClipsPostRequestData,

    /**
     * The ApiV1ClipsPostRequestDataAttributes model constructor.
     * @property {module:model/ApiV1ClipsPostRequestDataAttributes}
     */
    ApiV1ClipsPostRequestDataAttributes,

    /**
     * The ApiV1MediasIdPutRequest model constructor.
     * @property {module:model/ApiV1MediasIdPutRequest}
     */
    ApiV1MediasIdPutRequest,

    /**
     * The ApiV1MediasIdPutRequestData model constructor.
     * @property {module:model/ApiV1MediasIdPutRequestData}
     */
    ApiV1MediasIdPutRequestData,

    /**
     * The ApiV1MediasIdPutRequestDataAttributes model constructor.
     * @property {module:model/ApiV1MediasIdPutRequestDataAttributes}
     */
    ApiV1MediasIdPutRequestDataAttributes,

    /**
     * The ApiV1MediasPostRequest model constructor.
     * @property {module:model/ApiV1MediasPostRequest}
     */
    ApiV1MediasPostRequest,

    /**
     * The ApiV1MediasPostRequest1 model constructor.
     * @property {module:model/ApiV1MediasPostRequest1}
     */
    ApiV1MediasPostRequest1,

    /**
     * The ApiV1MediasPostRequest1Payload model constructor.
     * @property {module:model/ApiV1MediasPostRequest1Payload}
     */
    ApiV1MediasPostRequest1Payload,

    /**
     * The ApiV1MediasPostRequest1PayloadData model constructor.
     * @property {module:model/ApiV1MediasPostRequest1PayloadData}
     */
    ApiV1MediasPostRequest1PayloadData,

    /**
     * The ApiV1MediasPostRequest1PayloadDataAttributes model constructor.
     * @property {module:model/ApiV1MediasPostRequest1PayloadDataAttributes}
     */
    ApiV1MediasPostRequest1PayloadDataAttributes,

    /**
     * The ApiV1MediasPostRequest1PayloadDataRelationships model constructor.
     * @property {module:model/ApiV1MediasPostRequest1PayloadDataRelationships}
     */
    ApiV1MediasPostRequest1PayloadDataRelationships,

    /**
     * The ApiV1MediasPostRequest1PayloadDataRelationshipsClips model constructor.
     * @property {module:model/ApiV1MediasPostRequest1PayloadDataRelationshipsClips}
     */
    ApiV1MediasPostRequest1PayloadDataRelationshipsClips,

    /**
     * The ApiV1MediasPostRequest1PayloadDataRelationshipsClipsDataInner model constructor.
     * @property {module:model/ApiV1MediasPostRequest1PayloadDataRelationshipsClipsDataInner}
     */
    ApiV1MediasPostRequest1PayloadDataRelationshipsClipsDataInner,

    /**
     * The ApiV1MediasPostRequest1PayloadDataTranscription model constructor.
     * @property {module:model/ApiV1MediasPostRequest1PayloadDataTranscription}
     */
    ApiV1MediasPostRequest1PayloadDataTranscription,

    /**
     * The ApiV1MediasPostRequest1PayloadDataTranscriptionData model constructor.
     * @property {module:model/ApiV1MediasPostRequest1PayloadDataTranscriptionData}
     */
    ApiV1MediasPostRequest1PayloadDataTranscriptionData,

    /**
     * The ApiV1MediasPostRequestData model constructor.
     * @property {module:model/ApiV1MediasPostRequestData}
     */
    ApiV1MediasPostRequestData,

    /**
     * The ApiV1MediasPostRequestDataAttributes model constructor.
     * @property {module:model/ApiV1MediasPostRequestDataAttributes}
     */
    ApiV1MediasPostRequestDataAttributes,

    /**
     * The ApiV1WebhookSubscriptionsPostRequest model constructor.
     * @property {module:model/ApiV1WebhookSubscriptionsPostRequest}
     */
    ApiV1WebhookSubscriptionsPostRequest,

    /**
     * The ApiV1WebhookSubscriptionsPostRequestData model constructor.
     * @property {module:model/ApiV1WebhookSubscriptionsPostRequestData}
     */
    ApiV1WebhookSubscriptionsPostRequestData,

    /**
     * The ApiV1WebhookSubscriptionsPostRequestDataAttributes model constructor.
     * @property {module:model/ApiV1WebhookSubscriptionsPostRequestDataAttributes}
     */
    ApiV1WebhookSubscriptionsPostRequestDataAttributes,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
