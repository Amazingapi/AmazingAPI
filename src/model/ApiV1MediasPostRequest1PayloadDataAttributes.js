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

import ApiClient from '../ApiClient';

/**
 * The ApiV1MediasPostRequest1PayloadDataAttributes model module.
 * @module model/ApiV1MediasPostRequest1PayloadDataAttributes
 * @version 1.0.1
 */
class ApiV1MediasPostRequest1PayloadDataAttributes {
    /**
     * Constructs a new <code>ApiV1MediasPostRequest1PayloadDataAttributes</code>.
     * @alias module:model/ApiV1MediasPostRequest1PayloadDataAttributes
     */
    constructor() { 
        
        ApiV1MediasPostRequest1PayloadDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiV1MediasPostRequest1PayloadDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiV1MediasPostRequest1PayloadDataAttributes} obj Optional instance to populate.
     * @return {module:model/ApiV1MediasPostRequest1PayloadDataAttributes} The populated <code>ApiV1MediasPostRequest1PayloadDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiV1MediasPostRequest1PayloadDataAttributes();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('external_id')) {
                obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
            }
            if (data.hasOwnProperty('has_fetch_error')) {
                obj['has_fetch_error'] = ApiClient.convertToType(data['has_fetch_error'], 'Boolean');
            }
            if (data.hasOwnProperty('is_processing')) {
                obj['is_processing'] = ApiClient.convertToType(data['is_processing'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('original_created_at')) {
                obj['original_created_at'] = ApiClient.convertToType(data['original_created_at'], 'String');
            }
            if (data.hasOwnProperty('processing_started_at')) {
                obj['processing_started_at'] = ApiClient.convertToType(data['processing_started_at'], 'String');
            }
            if (data.hasOwnProperty('source_created_at')) {
                obj['source_created_at'] = ApiClient.convertToType(data['source_created_at'], 'String');
            }
            if (data.hasOwnProperty('source_file_content_type')) {
                obj['source_file_content_type'] = ApiClient.convertToType(data['source_file_content_type'], 'String');
            }
            if (data.hasOwnProperty('source_file_duration')) {
                obj['source_file_duration'] = ApiClient.convertToType(data['source_file_duration'], 'Number');
            }
            if (data.hasOwnProperty('source_file_height')) {
                obj['source_file_height'] = ApiClient.convertToType(data['source_file_height'], 'Number');
            }
            if (data.hasOwnProperty('source_file_preview_image_url')) {
                obj['source_file_preview_image_url'] = ApiClient.convertToType(data['source_file_preview_image_url'], 'String');
            }
            if (data.hasOwnProperty('source_file_width')) {
                obj['source_file_width'] = ApiClient.convertToType(data['source_file_width'], 'Number');
            }
            if (data.hasOwnProperty('source_url')) {
                obj['source_url'] = ApiClient.convertToType(data['source_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiV1MediasPostRequest1PayloadDataAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiV1MediasPostRequest1PayloadDataAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['external_id'] && !(typeof data['external_id'] === 'string' || data['external_id'] instanceof String)) {
            throw new Error("Expected the field `external_id` to be a primitive type in the JSON string but got " + data['external_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['original_created_at'] && !(typeof data['original_created_at'] === 'string' || data['original_created_at'] instanceof String)) {
            throw new Error("Expected the field `original_created_at` to be a primitive type in the JSON string but got " + data['original_created_at']);
        }
        // ensure the json data is a string
        if (data['processing_started_at'] && !(typeof data['processing_started_at'] === 'string' || data['processing_started_at'] instanceof String)) {
            throw new Error("Expected the field `processing_started_at` to be a primitive type in the JSON string but got " + data['processing_started_at']);
        }
        // ensure the json data is a string
        if (data['source_created_at'] && !(typeof data['source_created_at'] === 'string' || data['source_created_at'] instanceof String)) {
            throw new Error("Expected the field `source_created_at` to be a primitive type in the JSON string but got " + data['source_created_at']);
        }
        // ensure the json data is a string
        if (data['source_file_content_type'] && !(typeof data['source_file_content_type'] === 'string' || data['source_file_content_type'] instanceof String)) {
            throw new Error("Expected the field `source_file_content_type` to be a primitive type in the JSON string but got " + data['source_file_content_type']);
        }
        // ensure the json data is a string
        if (data['source_file_preview_image_url'] && !(typeof data['source_file_preview_image_url'] === 'string' || data['source_file_preview_image_url'] instanceof String)) {
            throw new Error("Expected the field `source_file_preview_image_url` to be a primitive type in the JSON string but got " + data['source_file_preview_image_url']);
        }
        // ensure the json data is a string
        if (data['source_url'] && !(typeof data['source_url'] === 'string' || data['source_url'] instanceof String)) {
            throw new Error("Expected the field `source_url` to be a primitive type in the JSON string but got " + data['source_url']);
        }

        return true;
    }


}



/**
 * @member {String} created_at
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['description'] = undefined;

/**
 * @member {String} external_id
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['external_id'] = undefined;

/**
 * @member {Boolean} has_fetch_error
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['has_fetch_error'] = undefined;

/**
 * @member {Boolean} is_processing
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['is_processing'] = undefined;

/**
 * @member {String} name
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['name'] = undefined;

/**
 * @member {String} original_created_at
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['original_created_at'] = undefined;

/**
 * @member {String} processing_started_at
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['processing_started_at'] = undefined;

/**
 * @member {String} source_created_at
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['source_created_at'] = undefined;

/**
 * @member {String} source_file_content_type
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['source_file_content_type'] = undefined;

/**
 * @member {Number} source_file_duration
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['source_file_duration'] = undefined;

/**
 * @member {Number} source_file_height
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['source_file_height'] = undefined;

/**
 * @member {String} source_file_preview_image_url
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['source_file_preview_image_url'] = undefined;

/**
 * @member {Number} source_file_width
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['source_file_width'] = undefined;

/**
 * @member {String} source_url
 */
ApiV1MediasPostRequest1PayloadDataAttributes.prototype['source_url'] = undefined;






export default ApiV1MediasPostRequest1PayloadDataAttributes;

