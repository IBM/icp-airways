/**
 * A HTTP plugin for Cordova / Phonegap
 */
package com.synconset.cordovahttp;

import java.net.SocketTimeoutException;
import java.net.UnknownHostException;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import javax.net.ssl.SSLHandshakeException;

import com.github.kevinsawicki.http.HttpRequest;
import com.github.kevinsawicki.http.HttpRequest.HttpRequestException;

class CordovaHttpPut extends CordovaHttp implements Runnable {
    public CordovaHttpPut(String urlString, Object data, String serializerName, JSONObject headers, int timeout, CallbackContext callbackContext) {
        super(urlString, data, serializerName, headers, timeout, callbackContext);
    }

    @Override
    public void run() {
        try {
            HttpRequest request = HttpRequest.put(this.getUrlString());

            this.setupDataSerializer(request);
            this.prepareRequest(request);
            this.prepareRequestBody(request);
            this.returnResponseObject(request);
        } catch (HttpRequestException e) {
            this.handleHttpRequestException(e);
        } catch (Exception e) {
            this.respondWithError(e.getMessage());
        }
    }
}
