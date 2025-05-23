/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

function redirectTo(location) {
	window.open = cordova.InAppBrowser.open;
	//showPleasewait('Redirecting','Please wait');
	var d = setInterval(function () {
		window.open(location, '_self',
			'location=no,zoom=no,toolbar=no');
		clearInterval(d);
	}, 1500);
}

var app = {
		// Application Constructor
		initialize: function () {
			document.addEventListener('deviceready',
				this.onDeviceReady.bind(this), false);
		},
		// deviceready Event Handler
		//
		// Bind any cordova events here. Common events are:
		// 'pause', 'resume', etc.
		onDeviceReady: function () {
			this.receivedEvent('deviceready');
		},
		// Update DOM on a Received Event
		receivedEvent: function (id) {
			if (navigator.connection.type == Connection.NONE) {
				navigator.notification.alert('An internet connection is required to continue ');
				}
				else {
					redirectTo("https://p2a.academy");
					//Replce URL with your website URL
				}
			}
		};
		app.initialize();