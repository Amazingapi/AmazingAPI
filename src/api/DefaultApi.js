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


import ApiClient from "../ApiClient";
import ApiV1ClipsIdPutRequest from '../model/ApiV1ClipsIdPutRequest';
import ApiV1ClipsPostRequest from '../model/ApiV1ClipsPostRequest';
import ApiV1MediasIdPutRequest from '../model/ApiV1MediasIdPutRequest';
import ApiV1MediasPostRequest from '../model/ApiV1MediasPostRequest';
import ApiV1WebhookSubscriptionsPostRequest from '../model/ApiV1WebhookSubscriptionsPostRequest';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * list clips
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [filter] Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
     * @param {Object.<String, Object>} [page] Specify page number and page size for the query
     * @param {module:model/String} [sort] Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1ClipsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/clips', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list clips
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.filter Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
     * @param {Object.<String, Object>} opts.page Specify page number and page size for the query
     * @param {module:model/String} opts.sort Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1ClipsGet(opts) {
      return this.apiV1ClipsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete clip
     * @param {String} id The id of the clip to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1ClipsIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1ClipsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/clips/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete clip
     * @param {String} id The id of the clip to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1ClipsIdDelete(id) {
      return this.apiV1ClipsIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show clip
     * @param {String} id The id of the clip to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1ClipsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1ClipsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/clips/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show clip
     * @param {String} id The id of the clip to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1ClipsIdGet(id) {
      return this.apiV1ClipsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update clip
     * @param {String} id The id of the clip to be retrieved
     * @param {module:model/ApiV1ClipsIdPutRequest} apiV1ClipsIdPutRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1ClipsIdPutWithHttpInfo(id, apiV1ClipsIdPutRequest) {
      let postBody = apiV1ClipsIdPutRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1ClipsIdPut");
      }
      // verify the required parameter 'apiV1ClipsIdPutRequest' is set
      if (apiV1ClipsIdPutRequest === undefined || apiV1ClipsIdPutRequest === null) {
        throw new Error("Missing the required parameter 'apiV1ClipsIdPutRequest' when calling apiV1ClipsIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/clips/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update clip
     * @param {String} id The id of the clip to be retrieved
     * @param {module:model/ApiV1ClipsIdPutRequest} apiV1ClipsIdPutRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1ClipsIdPut(id, apiV1ClipsIdPutRequest) {
      return this.apiV1ClipsIdPutWithHttpInfo(id, apiV1ClipsIdPutRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create clip
     * @param {module:model/ApiV1ClipsPostRequest} apiV1ClipsPostRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1ClipsPostWithHttpInfo(apiV1ClipsPostRequest) {
      let postBody = apiV1ClipsPostRequest;
      // verify the required parameter 'apiV1ClipsPostRequest' is set
      if (apiV1ClipsPostRequest === undefined || apiV1ClipsPostRequest === null) {
        throw new Error("Missing the required parameter 'apiV1ClipsPostRequest' when calling apiV1ClipsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/clips', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create clip
     * @param {module:model/ApiV1ClipsPostRequest} apiV1ClipsPostRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1ClipsPost(apiV1ClipsPostRequest) {
      return this.apiV1ClipsPostWithHttpInfo(apiV1ClipsPostRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * prepare presigned upload url
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1DirectUploadsGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/direct_uploads', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * prepare presigned upload url
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1DirectUploadsGet() {
      return this.apiV1DirectUploadsGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list medias
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [filter] Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
     * @param {Object.<String, Object>} [page] Specify page number and page size for the query
     * @param {module:model/String} [sort] Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1MediasGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/medias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list medias
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.filter Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
     * @param {Object.<String, Object>} opts.page Specify page number and page size for the query
     * @param {module:model/String} opts.sort Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1MediasGet(opts) {
      return this.apiV1MediasGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete media
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1MediasIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1MediasIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/medias/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete media
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1MediasIdDelete(id) {
      return this.apiV1MediasIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show media
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1MediasIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1MediasIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/medias/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show media
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1MediasIdGet(id) {
      return this.apiV1MediasIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update media
     * @param {String} id id
     * @param {module:model/ApiV1MediasIdPutRequest} apiV1MediasIdPutRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1MediasIdPutWithHttpInfo(id, apiV1MediasIdPutRequest) {
      let postBody = apiV1MediasIdPutRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1MediasIdPut");
      }
      // verify the required parameter 'apiV1MediasIdPutRequest' is set
      if (apiV1MediasIdPutRequest === undefined || apiV1MediasIdPutRequest === null) {
        throw new Error("Missing the required parameter 'apiV1MediasIdPutRequest' when calling apiV1MediasIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/medias/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update media
     * @param {String} id id
     * @param {module:model/ApiV1MediasIdPutRequest} apiV1MediasIdPutRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1MediasIdPut(id, apiV1MediasIdPutRequest) {
      return this.apiV1MediasIdPutWithHttpInfo(id, apiV1MediasIdPutRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create media
     * @param {module:model/ApiV1MediasPostRequest} apiV1MediasPostRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1MediasPostWithHttpInfo(apiV1MediasPostRequest) {
      let postBody = apiV1MediasPostRequest;
      // verify the required parameter 'apiV1MediasPostRequest' is set
      if (apiV1MediasPostRequest === undefined || apiV1MediasPostRequest === null) {
        throw new Error("Missing the required parameter 'apiV1MediasPostRequest' when calling apiV1MediasPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/medias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create media
     * @param {module:model/ApiV1MediasPostRequest} apiV1MediasPostRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1MediasPost(apiV1MediasPostRequest) {
      return this.apiV1MediasPostWithHttpInfo(apiV1MediasPostRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list webhook subscriptions
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} [filter] Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
     * @param {module:model/String} [sort] Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1WebhookSubscriptionsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/webhook_subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list webhook subscriptions
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.filter Filters to be applied to the query.  Query params in the url must look like this: \"filter[attributeName_*matcher*]\"  (i.e. filter[name_eq]=chimp%20into%20space)  Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/  
     * @param {module:model/String} opts.sort Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1WebhookSubscriptionsGet(opts) {
      return this.apiV1WebhookSubscriptionsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete webhook subscription
     * @param {String} id The id of the webhook subscription to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1WebhookSubscriptionsIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1WebhookSubscriptionsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/webhook_subscriptions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete webhook subscription
     * @param {String} id The id of the webhook subscription to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1WebhookSubscriptionsIdDelete(id) {
      return this.apiV1WebhookSubscriptionsIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show webhook subscription
     * @param {String} id The id of the webhook subscription to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1WebhookSubscriptionsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV1WebhookSubscriptionsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/webhook_subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show webhook subscription
     * @param {String} id The id of the webhook subscription to be retrieved
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1WebhookSubscriptionsIdGet(id) {
      return this.apiV1WebhookSubscriptionsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create webhook subscription
     * @param {module:model/ApiV1WebhookSubscriptionsPostRequest} apiV1WebhookSubscriptionsPostRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV1WebhookSubscriptionsPostWithHttpInfo(apiV1WebhookSubscriptionsPostRequest) {
      let postBody = apiV1WebhookSubscriptionsPostRequest;
      // verify the required parameter 'apiV1WebhookSubscriptionsPostRequest' is set
      if (apiV1WebhookSubscriptionsPostRequest === undefined || apiV1WebhookSubscriptionsPostRequest === null) {
        throw new Error("Missing the required parameter 'apiV1WebhookSubscriptionsPostRequest' when calling apiV1WebhookSubscriptionsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/webhook_subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create webhook subscription
     * @param {module:model/ApiV1WebhookSubscriptionsPostRequest} apiV1WebhookSubscriptionsPostRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV1WebhookSubscriptionsPost(apiV1WebhookSubscriptionsPostRequest) {
      return this.apiV1WebhookSubscriptionsPostWithHttpInfo(apiV1WebhookSubscriptionsPostRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
