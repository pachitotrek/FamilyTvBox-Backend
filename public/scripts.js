"undefined"!=typeof window&&function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hls=t():e.Hls=t()}(this,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=31)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(6);function a(){}var n={trace:a,debug:a,log:a,warn:a,info:a,error:a},o=n;var s=i.getSelfScope();function l(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];t.forEach(function(t){o[t]=e[t]?e[t].bind(e):function(e){var t=s.console[e];return t?function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];r[0]&&(r[0]=function(e,t){return t="["+e+"] > "+t}(e,r[0])),t.apply(s.console,r)}:a}(t)})}t.enableLogs=function(e){if(!0===e||"object"==typeof e){l(e,"debug","log","info","warn","error");try{o.log()}catch(e){o=n}}else o=n},t.logger=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(6).getSelfScope().Number;t.Number=i,i.isFinite=i.isFinite||function(e){return"number"==typeof e&&isFinite(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorTypes={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",KEY_SYSTEM_ERROR:"keySystemError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},t.ErrorDetails={KEY_SYSTEM_NO_KEYS:"keySystemNoKeys",KEY_SYSTEM_NO_ACCESS:"keySystemNoAccess",KEY_SYSTEM_NO_SESSION:"keySystemNoSession",KEY_SYSTEM_LICENSE_REQUEST_FAILED:"keySystemLicenseRequestFailed",MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(3),n=r(1),o={hlsEventGeneric:!0,hlsHandlerDestroying:!0,hlsHandlerDestroyed:!0},s=function(){function e(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.hls=e,this.onEvent=this.onEvent.bind(this),this.handledEvents=t,this.useGenericHandler=!0,this.registerListeners()}return e.prototype.destroy=function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()},e.prototype.onHandlerDestroying=function(){},e.prototype.onHandlerDestroyed=function(){},e.prototype.isEventHandler=function(){return"object"==typeof this.handledEvents&&this.handledEvents.length&&"function"==typeof this.onEvent},e.prototype.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){if(o[e])throw new Error("Forbidden event-name: "+e);this.hls.on(e,this.onEvent)},this)},e.prototype.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){this.hls.off(e,this.onEvent)},this)},e.prototype.onEvent=function(e,t){this.onEventGeneric(e,t)},e.prototype.onEventGeneric=function(e,t){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,e,t).call()}catch(t){i.logger.error("An internal error happened while handling event "+e+'. Error message: "'+t.message+'". Here is a stacktrace:',t),this.hls.trigger(n.default.ERROR,{type:a.ErrorTypes.OTHER_ERROR,details:a.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}},e}();t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.isBuffered=function(e,t){try{if(e)for(var r=e.buffered,i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}catch(e){}return!1},e.bufferInfo=function(e,t,r){try{if(e){var i=e.buffered,a=[],n=void 0;for(n=0;n<i.length;n++)a.push({start:i.start(n),end:i.end(n)});return this.bufferedInfo(a,t,r)}}catch(e){}return{len:0,start:t,end:t,nextStart:void 0}},e.bufferedInfo=function(e,t,r){var i,a,n,o,s,l=[];for(e.sort(function(e,t){var r=e.start-t.start;return r||t.end-e.end}),s=0;s<e.length;s++){var u=l.length;if(u){var d=l[u-1].end;e[s].start-d<r?e[s].end>d&&(l[u-1].end=e[s].end):l.push(e[s])}else l.push(e[s])}for(s=0,i=0,a=n=t;s<l.length;s++){var f=l[s].start,c=l[s].end;if(t+r>=f&&t<c)a=f,i=(n=c)-t;else if(t+r<f){o=f;break}}return{len:i,start:a,end:n,nextStart:o}},e}();t.BufferHelper=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelfScope=function(){return"undefined"==typeof window?self:window}},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),n=r(1);t.FragmentState={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};var o=function(r){function o(e){var t=r.call(this,e,n.default.BUFFER_APPENDED,n.default.FRAG_BUFFERED,n.default.FRAG_LOADED)||this;return t.bufferPadding=.2,t.fragments=Object.create(null),t.timeRanges=Object.create(null),t.config=e.config,t}return i(o,r),o.prototype.destroy=function(){this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.config=null,a.default.prototype.destroy.call(this),r.prototype.destroy.call(this)},o.prototype.getBufferedFrag=function(e,t){var r=this.fragments,i=Object.keys(r).filter(function(i){var a=r[i];if(a.body.type!==t)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=e&&e<=n.endPTS});if(0===i.length)return null;var a=i.pop();return r[a].body},o.prototype.detectEvictedFragments=function(e,t){var r,i,a=this;Object.keys(this.fragments).forEach(function(n){var o=a.fragments[n];if(!0===o.buffered){var s=o.range[e];if(s){r=s.time;for(var l=0;l<r.length;l++)if(i=r[l],!1===a.isTimeBuffered(i.startPTS,i.endPTS,t)){a.removeFragment(o.body);break}}}})},o.prototype.detectPartialFragments=function(e){var t=this,r=this.getFragmentKey(e),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach(function(r){if(e.hasElementaryStream(r)){var a=t.timeRanges[r];i.range[r]=t.getBufferedTimes(e.startPTS,e.endPTS,a)}}))},o.prototype.getBufferedTimes=function(e,t,r){for(var i,a,n=[],o=!1,s=0;s<r.length;s++){if(i=r.start(s)-this.bufferPadding,a=r.end(s)+this.bufferPadding,e>=i&&t<=a){n.push({startPTS:Math.max(e,r.start(s)),endPTS:Math.min(t,r.end(s))});break}if(e<a&&t>i)n.push({startPTS:Math.max(e,r.start(s)),endPTS:Math.min(t,r.end(s))}),o=!0;else if(t<=i)break}return{time:n,partial:o}},o.prototype.getFragmentKey=function(e){return e.type+"_"+e.level+"_"+e.urlId+"_"+e.sn},o.prototype.getPartialFragment=function(e){var t,r,i,a=this,n=null,o=0;return Object.keys(this.fragments).forEach(function(s){var l=a.fragments[s];a.isPartial(l)&&(r=l.body.startPTS-a.bufferPadding,i=l.body.endPTS+a.bufferPadding,e>=r&&e<=i&&(t=Math.min(e-r,i-e),o<=t&&(n=l.body,o=t)))}),n},o.prototype.getState=function(e){var r=this.getFragmentKey(e),i=this.fragments[r],a=t.FragmentState.NOT_LOADED;return void 0!==i&&(a=i.buffered?!0===this.isPartial(i)?t.FragmentState.PARTIAL:t.FragmentState.OK:t.FragmentState.APPENDING),a},o.prototype.isPartial=function(e){return!0===e.buffered&&(void 0!==e.range.video&&!0===e.range.video.partial||void 0!==e.range.audio&&!0===e.range.audio.partial)},o.prototype.isTimeBuffered=function(e,t,r){for(var i,a,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,e>=i&&t<=a)return!0;if(t<=i)return!1}return!1},o.prototype.onFragLoaded=function(t){var r=t.frag;e.isFinite(r.sn)&&!r.bitrateTest&&(this.fragments[this.getFragmentKey(r)]={body:r,range:Object.create(null),buffered:!1})},o.prototype.onBufferAppended=function(e){var t=this;this.timeRanges=e.timeRanges,Object.keys(this.timeRanges).forEach(function(e){var r=t.timeRanges[e];t.detectEvictedFragments(e,r)})},o.prototype.onFragBuffered=function(e){this.detectPartialFragments(e.frag)},o.prototype.hasFragment=function(e){var t=this.getFragmentKey(e);return void 0!==this.fragments[t]},o.prototype.removeFragment=function(e){var t=this.getFragmentKey(e);delete this.fragments[t]},o.prototype.removeAllFragments=function(){this.fragments=Object.create(null)},o}(a.default);t.FragmentTracker=o}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(0);function a(t,r,a){var n=t[r],o=t[a],s=o.startPTS;e.isFinite(s)?a>r?(n.duration=s-n.start,n.duration<0&&i.logger.warn("negative duration computed for frag "+n.sn+",level "+n.level+", there should be some duration drift between playlist and fragment!")):(o.duration=n.start-s,o.duration<0&&i.logger.warn("negative duration computed for frag "+o.sn+",level "+o.level+", there should be some duration drift between playlist and fragment!")):o.start=a>r?n.start+n.duration:Math.max(n.start-o.duration,0)}function n(t,r,i,n,o,s){var l=i;if(e.isFinite(r.startPTS)){var u=Math.abs(r.startPTS-i);e.isFinite(r.deltaPTS)?r.deltaPTS=Math.max(u,r.deltaPTS):r.deltaPTS=u,l=Math.max(i,r.startPTS),i=Math.min(i,r.startPTS),n=Math.max(n,r.endPTS),o=Math.min(o,r.startDTS),s=Math.max(s,r.endDTS)}var d=i-r.start;r.start=r.startPTS=i,r.maxStartPTS=l,r.endPTS=n,r.startDTS=o,r.endDTS=s,r.duration=n-i;var f,c,h,p=r.sn;if(!t||p<t.startSN||p>t.endSN)return 0;for(f=p-t.startSN,(c=t.fragments)[f]=r,h=f;h>0;h--)a(c,h,h-1);for(h=f;h<c.length-1;h++)a(c,h,h+1);return t.PTSKnown=!0,d}function o(e,t,r){if(e&&t)for(var i=Math.max(e.startSN,t.startSN)-t.startSN,a=Math.min(e.endSN,t.endSN)-t.startSN,n=t.startSN-e.startSN,o=i;o<=a;o++){var s=e.fragments[n+o],l=t.fragments[o];if(!s||!l)break;r(s,l,o)}}function s(e,t){var r=t.startSN-e.startSN,i=e.fragments,a=t.fragments;if(!(r<0||r>i.length))for(var n=0;n<a.length;n++)a[n].start+=i[r].start}t.addGroupId=function(e,t,r){switch(t){case"audio":e.audioGroupIds||(e.audioGroupIds=[]),e.audioGroupIds.push(r);break;case"text":e.textGroupIds||(e.textGroupIds=[]),e.textGroupIds.push(r)}},t.updatePTS=a,t.updateFragPTSDTS=n,t.mergeDetails=function(t,r){r.initSegment&&t.initSegment&&(r.initSegment=t.initSegment);var a,l=0;if(o(t,r,function(t,i){l=t.cc-i.cc,e.isFinite(t.startPTS)&&(i.start=i.startPTS=t.startPTS,i.endPTS=t.endPTS,i.duration=t.duration,i.backtracked=t.backtracked,i.dropped=t.dropped,a=i),r.PTSKnown=!0}),r.PTSKnown){if(l){i.logger.log("discontinuity sliding from playlist, take drift into account");for(var u=r.fragments,d=0;d<u.length;d++)u[d].cc+=l}a?n(r,a,a.startPTS,a.endPTS,a.startDTS,a.endDTS):s(t,r),r.PTSKnown=t.PTSKnown}},t.mergeSubtitlePlaylists=function(e,t,r){void 0===r&&(r=0);var i=-1;o(e,t,function(e,t,r){t.start=e.start,i=r});var a=t.fragments;if(i<0)a.forEach(function(e){e.start+=r});else for(var n=i+1;n<a.length;n++)a[n].start=a[n-1].start+a[n-1].duration},t.mapFragmentIntersection=o,t.adjustSliding=s,t.computeReloadInterval=function(e,t,r){var i=1e3*(t.averagetargetduration?t.averagetargetduration:t.targetduration),a=i/2;return e&&t.endSN===e.endSN&&(i=a),r&&(i=Math.max(a,i-(window.performance.now()-r))),Math.round(i)}}).call(this,r(2).Number)},function(e,t,r){!function(t){var r=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,i=/^([^\/?#]*)(.*)$/,a=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,o={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var a=o.parseURL(e);if(!a)throw new Error("Error trying to parse base URL.");return a.path=o.normalizePath(a.path),o.buildURLFromParts(a)}var n=o.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):t;var s=o.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=i.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,f=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(f)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(e){var t=r.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(a,"");e.length!==(e=e.replace(n,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}};e.exports=o}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={search:function(e,t){for(var r=0,i=e.length-1,a=null,n=null;r<=i;){var o=t(n=e[a=(r+i)/2|0]);if(o>0)r=a+1;else{if(!(o<0))return n;i=a-1}}return null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.isHeader=function(e,t){return t+10<=e.length&&73===e[t]&&68===e[t+1]&&51===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.isFooter=function(e,t){return t+10<=e.length&&51===e[t]&&68===e[t+1]&&73===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.getID3Data=function(t,r){for(var i=r,a=0;e.isHeader(t,r);){a+=10,a+=e._readSize(t,r+6),e.isFooter(t,r+10)&&(a+=10),r+=a}if(a>0)return t.subarray(i,i+a)},e._readSize=function(e,t){var r=0;return r=(127&e[t])<<21,r|=(127&e[t+1])<<14,r|=(127&e[t+2])<<7,r|=127&e[t+3]},e.getTimeStamp=function(t){for(var r=e.getID3Frames(t),i=0;i<r.length;i++){var a=r[i];if(e.isTimeStampFrame(a))return e._readTimeStamp(a)}},e.isTimeStampFrame=function(e){return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info},e._getFrameData=function(t){var r=String.fromCharCode(t[0],t[1],t[2],t[3]),i=e._readSize(t,4);return{type:r,size:i,data:t.subarray(10,10+i)}},e.getID3Frames=function(t){for(var r=0,i=[];e.isHeader(t,r);){for(var a=e._readSize(t,r+6),n=(r+=10)+a;r+8<n;){var o=e._getFrameData(t.subarray(r)),s=e._decodeFrame(o);s&&i.push(s),r+=o.size+10}e.isFooter(t,r)&&(r+=10)}return i},e._decodeFrame=function(t){return"PRIV"===t.type?e._decodePrivFrame(t):"T"===t.type[0]?e._decodeTextFrame(t):"W"===t.type[0]?e._decodeURLFrame(t):void 0},e._readTimeStamp=function(e){if(8===e.data.byteLength){var t=new Uint8Array(e.data),r=1&t[3],i=(t[4]<<23)+(t[5]<<15)+(t[6]<<7)+t[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},e._decodePrivFrame=function(t){if(!(t.size<2)){var r=e._utf8ArrayToStr(t.data,!0),i=new Uint8Array(t.data.subarray(r.length+1));return{key:t.type,info:r,data:i.buffer}}},e._decodeTextFrame=function(t){if(!(t.size<2)){if("TXXX"===t.type){var r=1,i=e._utf8ArrayToStr(t.data.subarray(r));r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data.subarray(1));return{key:t.type,data:n}}},e._decodeURLFrame=function(t){if("WXXX"===t.type){if(t.size<2)return;var r=1,i=e._utf8ArrayToStr(t.data.subarray(r));r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data);return{key:t.type,data:n}},e._utf8ArrayToStr=function(e,t){void 0===t&&(t=!1);for(var r,i,a,n=e.length,o="",s=0;s<n;){if(0===(r=e[s++])&&t)return o;if(0!==r&&3!==r)switch(r>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(r);break;case 12:case 13:i=e[s++],o+=String.fromCharCode((31&r)<<6|63&i);break;case 14:i=e[s++],a=e[s++],o+=String.fromCharCode((15&r)<<12|(63&i)<<6|(63&a)<<0)}}return o},e}(),a=i._utf8ArrayToStr;t.utf8ArrayToStr=a,t.default=i},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(9),a=r(18),n=function(){function t(){var e;this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[],this.programDateTime=null,this.rawProgramDateTime=null,this._elementaryStreams=((e={})[t.ElementaryStreamTypes.AUDIO]=!1,e[t.ElementaryStreamTypes.VIDEO]=!1,e)}return Object.defineProperty(t,"ElementaryStreamTypes",{get:function(){return{AUDIO:"audio",VIDEO:"video"}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return!this._url&&this.relurl&&(this._url=i.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byteRange",{get:function(){if(!this._byteRange&&!this.rawByteRange)return[];if(this._byteRange)return this._byteRange;var e=[];if(this.rawByteRange){var t=this.rawByteRange.split("@",2);if(1===t.length){var r=this.lastByteRangeEndOffset;e[0]=r||0}else e[0]=parseInt(t[1]);e[1]=parseInt(t[0])+e[0],this._byteRange=e}return e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byteRangeStartOffset",{get:function(){return this.byteRange[0]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"byteRangeEndOffset",{get:function(){return this.byteRange[1]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"decryptdata",{get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"endProgramDateTime",{get:function(){if(!e.isFinite(this.programDateTime))return null;var t=e.isFinite(this.duration)?this.duration:0;return this.programDateTime+1e3*t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"encrypted",{get:function(){return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)},enumerable:!0,configurable:!0}),t.prototype.addElementaryStream=function(e){this._elementaryStreams[e]=!0},t.prototype.hasElementaryStream=function(e){return!0===this._elementaryStreams[e]},t.prototype.createInitializationVector=function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t},t.prototype.fragmentDecryptdataFromLevelkey=function(e,t){var r=e;return e&&e.method&&e.uri&&!e.iv&&((r=new a.default).method=e.method,r.baseuri=e.baseuri,r.reluri=e.reluri,r.iv=this.createInitializationVector(t)),r},t}();t.default=n}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(39),a=r(40),n=r(41),o=r(3),s=r(0),l=r(1),u=r(6).getSelfScope(),d=function(){function e(e,t,r){var i=(void 0===r?{}:r).removePKCS7Padding,a=void 0===i||i;if(this.logEnabled=!0,this.observer=e,this.config=t,this.removePKCS7Padding=a,a)try{var n=u.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(e){}this.disableWebCrypto=!this.subtle}return e.prototype.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},e.prototype.decrypt=function(e,t,r,o){var l=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(s.logger.log("JS AES decrypt"),this.logEnabled=!1);var u=this.decryptor;u||(this.decryptor=u=new n.default),u.expandKey(t),o(u.decrypt(e,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(s.logger.log("WebCrypto AES decrypt"),this.logEnabled=!1);var d=this.subtle;this.key!==t&&(this.key=t,this.fastAesKey=new a.default(d,t)),this.fastAesKey.expandKey().then(function(a){new i.default(d,r).decrypt(e,a).catch(function(i){l.onWebCryptoError(i,e,t,r,o)}).then(function(e){o(e)})}).catch(function(i){l.onWebCryptoError(i,e,t,r,o)})}},e.prototype.onWebCryptoError=function(e,t,r,i,a){this.config.enableSoftwareAES?(s.logger.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,i,a)):(s.logger.error("decrypting error : "+e.message),this.observer.trigger(l.default.ERROR,{type:o.ErrorTypes.MEDIA_ERROR,details:o.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))},e.prototype.destroy=function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)},e}();t.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMediaSource=function(){if("undefined"!=typeof window)return window.MediaSource||window.WebKitMediaSource}},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(28),n=r(7),o=r(5),s=r(0);t.State={STOPPED:"STOPPED",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};var l=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return i(a,r),a.prototype.doTick=function(){},a.prototype.startLoad=function(){},a.prototype.stopLoad=function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragmentTracker.removeFragment(e)),this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=t.State.STOPPED},a.prototype._streamEnded=function(e,t){var r=this.fragCurrent,i=this.fragmentTracker;if(!t.live&&r&&!r.backtracked&&r.sn===t.endSN&&!e.nextStart){var a=i.getState(r);return a===n.FragmentState.PARTIAL||a===n.FragmentState.OK}return!1},a.prototype.onMediaSeeking=function(){var r=this.config,i=this.media,a=this.mediaBuffer,n=this.state,l=i?i.currentTime:null,u=o.BufferHelper.bufferInfo(a||i,l,this.config.maxBufferHole);if(e.isFinite(l)&&s.logger.log("media seeking to "+l.toFixed(3)),n===t.State.FRAG_LOADING){var d=this.fragCurrent;if(0===u.len&&d){var f=r.maxFragLookUpTolerance,c=d.start-f,h=d.start+d.duration+f;l<c||l>h?(d.loader&&(s.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),d.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=t.State.IDLE):s.logger.log("seeking outside of buffer but within currently loaded fragment range")}}else n===t.State.ENDED&&(0===u.len&&(this.fragPrevious=null,this.fragCurrent=null),this.state=t.State.IDLE);i&&(this.lastCurrentTime=l),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=l),this.tick()},a.prototype.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},a.prototype.onHandlerDestroying=function(){this.stopLoad(),r.prototype.onHandlerDestroying.call(this)},a.prototype.onHandlerDestroyed=function(){this.state=t.State.STOPPED,this.fragmentTracker=null},a}(a.default);t.default=l}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(3),s=r(0),l=r(17),u=r(32),d=window.performance,f={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},c={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"},h=function(t){function r(e){var r=t.call(this,e,a.default.MANIFEST_LOADING,a.default.LEVEL_LOADING,a.default.AUDIO_TRACK_LOADING,a.default.SUBTITLE_TRACK_LOADING)||this;return r.loaders={},r}return i(r,t),Object.defineProperty(r,"ContextType",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(r,"LevelType",{get:function(){return c},enumerable:!0,configurable:!0}),r.canHaveQualityLevels=function(e){return e!==f.AUDIO_TRACK&&e!==f.SUBTITLE_TRACK},r.mapContextToLevelType=function(e){switch(e.type){case f.AUDIO_TRACK:return c.AUDIO;case f.SUBTITLE_TRACK:return c.SUBTITLE;default:return c.MAIN}},r.getResponseUrl=function(e,t){var r=e.url;return void 0!==r&&0!==r.indexOf("data:")||(r=t.url),r},r.prototype.createInternalLoader=function(e){var t=this.hls.config,r=t.pLoader,i=t.loader,a=new(r||i)(t);return e.loader=a,this.loaders[e.type]=a,a},r.prototype.getInternalLoader=function(e){return this.loaders[e.type]},r.prototype.resetInternalLoader=function(e){this.loaders[e]&&delete this.loaders[e]},r.prototype.destroyInternalLoaders=function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}},r.prototype.destroy=function(){this.destroyInternalLoaders(),t.prototype.destroy.call(this)},r.prototype.onManifestLoading=function(e){this.load(e.url,{type:f.MANIFEST,level:0,id:null})},r.prototype.onLevelLoading=function(e){this.load(e.url,{type:f.LEVEL,level:e.level,id:e.id})},r.prototype.onAudioTrackLoading=function(e){this.load(e.url,{type:f.AUDIO_TRACK,level:null,id:e.id})},r.prototype.onSubtitleTrackLoading=function(e){this.load(e.url,{type:f.SUBTITLE_TRACK,level:null,id:e.id})},r.prototype.load=function(e,t){var r=this.hls.config;s.logger.debug("Loading playlist of type "+t.type+", level: "+t.level+", id: "+t.id);var i,a,n,o,l=this.getInternalLoader(t);if(l){var u=l.context;if(u&&u.url===e)return s.logger.trace("playlist request ongoing"),!1;s.logger.warn("aborting previous loader for type: "+t.type),l.abort()}switch(t.type){case f.MANIFEST:i=r.manifestLoadingMaxRetry,a=r.manifestLoadingTimeOut,n=r.manifestLoadingRetryDelay,o=r.manifestLoadingMaxRetryTimeout;break;case f.LEVEL:i=0,a=r.levelLoadingTimeOut;break;default:i=r.levelLoadingMaxRetry,a=r.levelLoadingTimeOut,n=r.levelLoadingRetryDelay,o=r.levelLoadingMaxRetryTimeout}l=this.createInternalLoader(t),t.url=e,t.responseType=t.responseType||"";var d={timeout:a,maxRetry:i,retryDelay:n,maxRetryDelay:o},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};return s.logger.debug("Calling internal loader delegate for URL: "+e),l.load(t,d,c),!0},r.prototype.loadsuccess=function(e,t,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this._handleSidxRequest(e,r),void this._handlePlaylistLoaded(e,t,r,i);this.resetInternalLoader(r.type);var a=e.data;t.tload=d.now(),0===a.indexOf("#EXTM3U")?a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(e,t,r,i):this._handleMasterPlaylist(e,t,r,i):this._handleManifestParsingError(e,r,"no EXTM3U delimiter",i)},r.prototype.loaderror=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!1,e)},r.prototype.loadtimeout=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!0)},r.prototype._handleMasterPlaylist=function(e,t,i,n){var o=this.hls,l=e.data,d=r.getResponseUrl(e,i),f=u.default.parseMasterPlaylist(l,d);if(f.length){var c=f.map(function(e){return{id:e.attrs.AUDIO,codec:e.audioCodec}}),h=u.default.parseMasterPlaylistMedia(l,d,"AUDIO",c),p=u.default.parseMasterPlaylistMedia(l,d,"SUBTITLES");if(h.length){var g=!1;h.forEach(function(e){e.url||(g=!0)}),!1===g&&f[0].audioCodec&&!f[0].attrs.AUDIO&&(s.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),h.unshift({type:"main",name:"main"}))}o.trigger(a.default.MANIFEST_LOADED,{levels:f,audioTracks:h,subtitles:p,url:d,stats:t,networkDetails:n})}else this._handleManifestParsingError(e,i,"no level found in manifest",n)},r.prototype._handleTrackOrLevelPlaylist=function(t,i,n,o){var s=this.hls,l=n.id,c=n.level,h=n.type,p=r.getResponseUrl(t,n),g=e.isFinite(l)?l:0,v=e.isFinite(c)?c:g,y=r.mapContextToLevelType(n),m=u.default.parseLevelPlaylist(t.data,p,v,y,g);if(m.tload=i.tload,h===f.MANIFEST){var E={url:p,details:m};s.trigger(a.default.MANIFEST_LOADED,{levels:[E],audioTracks:[],url:p,stats:i,networkDetails:o})}if(i.tparsed=d.now(),m.needSidxRanges){var _=m.initSegment.url;this.load(_,{isSidxRequest:!0,type:h,level:c,levelDetails:m,id:l,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}else n.levelDetails=m,this._handlePlaylistLoaded(t,i,n,o)},r.prototype._handleSidxRequest=function(e,t){var r=l.default.parseSegmentIndex(new Uint8Array(e.data));if(r){var i=r.references,a=t.levelDetails;i.forEach(function(e,t){var r=e.info,i=a.fragments[t];0===i.byteRange.length&&(i.rawByteRange=String(1+r.end-r.start)+"@"+String(r.start))}),a.initSegment.rawByteRange=String(r.moovEndOffset)+"@0"}},r.prototype._handleManifestParsingError=function(e,t,r,i){this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:e.url,reason:r,networkDetails:i})},r.prototype._handleNetworkError=function(e,t,r,i){var n,l;void 0===r&&(r=!1),void 0===i&&(i=null),s.logger.info("A network error occured while loading a "+e.type+"-type playlist");var u=this.getInternalLoader(e);switch(e.type){case f.MANIFEST:n=r?o.ErrorDetails.MANIFEST_LOAD_TIMEOUT:o.ErrorDetails.MANIFEST_LOAD_ERROR,l=!0;break;case f.LEVEL:n=r?o.ErrorDetails.LEVEL_LOAD_TIMEOUT:o.ErrorDetails.LEVEL_LOAD_ERROR,l=!1;break;case f.AUDIO_TRACK:n=r?o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,l=!1;break;default:l=!1}u&&(u.abort(),this.resetInternalLoader(e.type));var d={type:o.ErrorTypes.NETWORK_ERROR,details:n,fatal:l,url:u.url,loader:u,context:e,networkDetails:t};i&&(d.response=i),this.hls.trigger(a.default.ERROR,d)},r.prototype._handlePlaylistLoaded=function(e,t,i,n){var o=i.type,s=i.level,l=i.id,u=i.levelDetails;if(u.targetduration)if(r.canHaveQualityLevels(i.type))this.hls.trigger(a.default.LEVEL_LOADED,{details:u,level:s||0,id:l||0,stats:t,networkDetails:n});else switch(o){case f.AUDIO_TRACK:this.hls.trigger(a.default.AUDIO_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n});break;case f.SUBTITLE_TRACK:this.hls.trigger(a.default.SUBTITLE_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n})}else this._handleManifestParsingError(e,i,"invalid target duration",n)},r}(n.default);t.default=h}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(1),n=Math.pow(2,32)-1,o=function(){function e(e,t){this.observer=e,this.remuxer=t}return e.prototype.resetTimeStamp=function(e){this.initPTS=e},e.prototype.resetInitSegment=function(t,r,i,n){if(t&&t.byteLength){var o=this.initData=e.parseInitSegment(t);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var s={};o.audio&&o.video?s.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:n?t:null}:(o.audio&&(s.audio={container:"audio/mp4",codec:r,initSegment:n?t:null}),o.video&&(s.video={container:"video/mp4",codec:i,initSegment:n?t:null})),this.observer.trigger(a.default.FRAG_PARSING_INIT_SEGMENT,{tracks:s})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},e.probe=function(t){return e.findBox({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.bin2str=function(e){return String.fromCharCode.apply(null,e)},e.readUint16=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<8|e[t+1];return r<0?65536+r:r},e.readUint32=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];return r<0?4294967296+r:r},e.writeUint32=function(e,t,r){e.data&&(t+=e.start,e=e.data),e[t]=r>>24,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r},e.findBox=function(t,r){var i,a,n,o,s,l,u,d=[];if(t.data?(l=t.start,o=t.end,t=t.data):(l=0,o=t.byteLength),!r.length)return null;for(i=l;i<o;)a=e.readUint32(t,i),n=e.bin2str(t.subarray(i+4,i+8)),u=a>1?i+a:o,n===r[0]&&(1===r.length?d.push({data:t,start:i+8,end:u}):(s=e.findBox({data:t,start:i+8,end:u},r.slice(1))).length&&(d=d.concat(s))),i=u;return d},e.parseSegmentIndex=function(t){var r,i=e.findBox(t,["moov"])[0],a=i?i.end:null,n=0,o=e.findBox(t,["sidx"]);if(!o||!o[0])return null;r=[];var s=(o=o[0]).data[0];n=0===s?8:16;var l=e.readUint32(o,n);n+=4;n+=0===s?8:16,n+=2;var u=o.end+0,d=e.readUint16(o,n);n+=2;for(var f=0;f<d;f++){var c=n,h=e.readUint32(o,c);c+=4;var p=2147483647&h;if(1===(2147483648&h)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var g=e.readUint32(o,c);c+=4,r.push({referenceSize:p,subsegmentDuration:g,info:{duration:g/l,start:u,end:u+p-1}}),u+=p,n=c+=4}return{earliestPresentationTime:0,timescale:l,version:s,referencesCount:d,references:r,moovEndOffset:a}},e.parseInitSegment=function(t){var r=[];return e.findBox(t,["moov","trak"]).forEach(function(t){var a=e.findBox(t,["tkhd"])[0];if(a){var n=a.data[a.start],o=0===n?12:20,s=e.readUint32(a,o),l=e.findBox(t,["mdia","mdhd"])[0];if(l){o=0===(n=l.data[l.start])?12:20;var u=e.readUint32(l,o),d=e.findBox(t,["mdia","hdlr"])[0];if(d){var f={soun:"audio",vide:"video"}[e.bin2str(d.data.subarray(d.start+8,d.start+12))];if(f){var c=e.findBox(t,["mdia","minf","stbl","stsd"]);if(c.length){c=c[0];var h=e.bin2str(c.data.subarray(c.start+12,c.start+16));i.logger.log("MP4Demuxer:"+f+":"+h+" found")}r[s]={timescale:u,type:f},r[f]={timescale:u,id:s}}}}}}),r},e.getStartDTS=function(t,r){var i,a,n;return i=e.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map(function(r){return e.findBox(r,["tfhd"]).map(function(i){var a,n;return a=e.readUint32(i,4),n=t[a].timescale||9e4,e.findBox(r,["tfdt"]).map(function(t){var r,i;return r=t.data[t.start],i=e.readUint32(t,4),1===r&&(i*=Math.pow(2,32),i+=e.readUint32(t,8)),i})[0]/n})})),n=Math.min.apply(null,a),isFinite(n)?n:0},e.offsetStartDTS=function(t,r,i){e.findBox(r,["moof","traf"]).map(function(r){return e.findBox(r,["tfhd"]).map(function(a){var o=e.readUint32(a,4),s=t[o].timescale||9e4;e.findBox(r,["tfdt"]).map(function(t){var r=t.data[t.start],a=e.readUint32(t,4);if(0===r)e.writeUint32(t,4,a-i*s);else{a*=Math.pow(2,32),a+=e.readUint32(t,8),a-=i*s,a=Math.max(a,0);var o=Math.floor(a/(n+1)),l=Math.floor(a%(n+1));e.writeUint32(t,4,o),e.writeUint32(t,8,l)}})})})},e.prototype.append=function(t,r,i,n){var o=this.initData;o||(this.resetInitSegment(t,this.audioCodec,this.videoCodec,!1),o=this.initData);var s,l=this.initPTS;if(void 0===l){var u=e.getStartDTS(o,t);this.initPTS=l=u-r,this.observer.trigger(a.default.INIT_PTS_FOUND,{initPTS:l})}e.offsetStartDTS(o,t,l),s=e.getStartDTS(o,t),this.remuxer.remux(o.audio,o.video,null,null,s,i,n,t)},e.prototype.destroy=function(){},e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(9),a=function(){function e(){this.method=null,this.key=null,this.iv=null,this._uri=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return!this._uri&&this.reluri&&(this._uri=i.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri},enumerable:!0,configurable:!0}),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}};t.isCodecType=function(e,t){var r=i[t];return!!r&&!0===r[e.slice(0,4)]},t.isCodecSupportedInMp4=function(e,t){return window.MediaSource.isTypeSupported((t||"video")+'/mp4;codecs="'+e+'"')}},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(38),a=r(1),n=r(21),o=r(0),s=r(3),l=r(14),u=r(6),d=r(24),f=u.getSelfScope(),c=l.getMediaSource(),h=function(){function t(e,t){var r=this;this.hls=e,this.id=t;var l=this.observer=new d.Observer,u=e.config,h=function(t,i){(i=i||{}).frag=r.frag,i.id=r.id,e.trigger(t,i)};l.on(a.default.FRAG_DECRYPTED,h),l.on(a.default.FRAG_PARSING_INIT_SEGMENT,h),l.on(a.default.FRAG_PARSING_DATA,h),l.on(a.default.FRAG_PARSED,h),l.on(a.default.ERROR,h),l.on(a.default.FRAG_PARSING_METADATA,h),l.on(a.default.FRAG_PARSING_USERDATA,h),l.on(a.default.INIT_PTS_FOUND,h);var p={mp4:c.isTypeSupported("video/mp4"),mpeg:c.isTypeSupported("audio/mpeg"),mp3:c.isTypeSupported('audio/mp4; codecs="mp3"')},g=navigator.vendor;if(u.enableWorker&&"undefined"!=typeof Worker){o.logger.log("demuxing in webworker");var v=void 0;try{v=this.w=i(52),this.onwmsg=this.onWorkerMessage.bind(this),v.addEventListener("message",this.onwmsg),v.onerror=function(t){e.trigger(a.default.ERROR,{type:s.ErrorTypes.OTHER_ERROR,details:s.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},v.postMessage({cmd:"init",typeSupported:p,vendor:g,id:t,config:JSON.stringify(u)})}catch(e){o.logger.warn("Error in worker:",e),o.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),v&&f.URL.revokeObjectURL(v.objectURL),this.demuxer=new n.default(l,p,u,g),this.w=void 0}}else this.demuxer=new n.default(l,p,u,g)}return t.prototype.destroy=function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.prototype.push=function(t,r,i,a,n,s,l,u){var d=this.w,f=e.isFinite(n.startPTS)?n.startPTS:n.start,c=n.decryptdata,h=this.frag,p=!(h&&n.cc===h.cc),g=!(h&&n.level===h.level),v=h&&n.sn===h.sn+1,y=!g&&v;if(p&&o.logger.log(this.id+":discontinuity detected"),g&&o.logger.log(this.id+":switch detected"),this.frag=n,d)d.postMessage({cmd:"demux",data:t,decryptdata:c,initSegment:r,audioCodec:i,videoCodec:a,timeOffset:f,discontinuity:p,trackSwitch:g,contiguous:y,duration:s,accurateTimeOffset:l,defaultInitPTS:u},t instanceof ArrayBuffer?[t]:[]);else{var m=this.demuxer;m&&m.push(t,c,r,i,a,f,p,g,y,s,l,u)}},t.prototype.onWorkerMessage=function(e){var t=e.data,r=this.hls;switch(t.event){case"init":f.URL.revokeObjectURL(this.w.objectURL);break;case a.default.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}},t}();t.default=h}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=r(1),n=r(3),o=r(13),s=r(42),l=r(17),u=r(43),d=r(46),f=r(47),c=r(50),h=r(6),p=r(0),g=h.getSelfScope();try{i=g.performance.now.bind(g.performance)}catch(e){p.logger.debug("Unable to use Performance API on this environment"),i=g.Date.now}var v=function(){function e(e,t,r,i){this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i}return e.prototype.destroy=function(){var e=this.demuxer;e&&e.destroy()},e.prototype.push=function(e,t,r,n,s,l,u,d,f,c,h,p){var g=this;if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){var v=this.decrypter;null==v&&(v=this.decrypter=new o.default(this.observer,this.config));var y=i();v.decrypt(e,t.key.buffer,t.iv.buffer,function(e){var o=i();g.observer.trigger(a.default.FRAG_DECRYPTED,{stats:{tstart:y,tdecrypt:o}}),g.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),n,s,l,u,d,f,c,h,p)})}else this.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),n,s,l,u,d,f,c,h,p)},e.prototype.pushDecrypted=function(e,t,r,i,o,h,p,g,v,y,m,E){var _=this.demuxer;if(!_||(p||g)&&!this.probe(e)){for(var T=this.observer,S=this.typeSupported,b=this.config,A=[{demux:u.default,remux:f.default},{demux:l.default,remux:c.default},{demux:s.default,remux:f.default},{demux:d.default,remux:f.default}],R=0,D=A.length;R<D;R++){var L=A[R],w=L.demux.probe;if(w(e)){var O=this.remuxer=new L.remux(T,b,S,this.vendor);_=new L.demux(T,O,b,S),this.probe=w;break}}if(!_)return void T.trigger(a.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=_}var I=this.remuxer;(p||g)&&(_.resetInitSegment(r,i,o,y),I.resetInitSegment()),p&&(_.resetTimeStamp(E),I.resetTimeStamp(E)),"function"==typeof _.setDecryptData&&_.setDecryptData(t),_.append(e,h,v,m)},e}();t.default=v},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(3),n=r(1);function o(e,t,r,o){var s,l,u,d,f,c=navigator.userAgent.toLowerCase(),h=o,p=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(s=1+((192&t[r+2])>>>6),!((l=(60&t[r+2])>>>2)>p.length-1))return d=(1&t[r+2])<<2,d|=(192&t[r+3])>>>6,i.logger.log("manifest codec:"+o+",ADTS data:type:"+s+",sampleingIndex:"+l+"["+p[l]+"Hz],channelConfig:"+d),/firefox/i.test(c)?l>=6?(s=5,f=new Array(4),u=l-3):(s=2,f=new Array(2),u=l):-1!==c.indexOf("android")?(s=2,f=new Array(2),u=l):(s=5,f=new Array(4),o&&(-1!==o.indexOf("mp4a.40.29")||-1!==o.indexOf("mp4a.40.5"))||!o&&l>=6?u=l-3:((o&&-1!==o.indexOf("mp4a.40.2")&&(l>=6&&1===d||/vivaldi/i.test(c))||!o&&1===d)&&(s=2,f=new Array(2)),u=l)),f[0]=s<<3,f[0]|=(14&l)>>1,f[1]|=(1&l)<<7,f[1]|=d<<3,5===s&&(f[1]|=(14&u)>>1,f[2]=(1&u)<<7,f[2]|=8,f[3]=0),{config:f,samplerate:p[l],channelCount:d,codec:"mp4a.40."+s,manifestCodec:h};e.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+l})}function s(e,t){return 255===e[t]&&240==(246&e[t+1])}function l(e,t){return 1&e[t+1]?7:9}function u(e,t){return(3&e[t+3])<<11|e[t+4]<<3|(224&e[t+5])>>>5}function d(e){return 9216e4/e}function f(e,t,r,i,a){var n,o,s=e.length;if(n=l(e,t),o=u(e,t),(o-=n)>0&&t+n+o<=s)return{headerLength:n,frameLength:o,stamp:r+i*a}}t.getAudioConfig=o,t.isHeaderPattern=s,t.getHeaderLength=l,t.getFullFrameLength=u,t.isHeader=function(e,t){return!!(t+1<e.length&&s(e,t))},t.probe=function(e,t){if(t+1<e.length&&s(e,t)){var r=l(e,t);t+5<e.length&&(r=u(e,t));var i=t+r;if(i===e.length||i+1<e.length&&s(e,i))return!0}return!1},t.initTrackConfig=function(e,t,r,a,n){if(!e.samplerate){var s=o(t,r,a,n);e.config=s.config,e.samplerate=s.samplerate,e.channelCount=s.channelCount,e.codec=s.codec,e.manifestCodec=s.manifestCodec,i.logger.log("parsed codec:"+e.codec+",rate:"+s.samplerate+",nb channel:"+s.channelCount)}},t.getFrameDuration=d,t.parseFrameHeader=f,t.appendFrame=function(e,t,r,i,a){var n=f(t,r,i,a,d(e.samplerate));if(n){var o=n.stamp,s=n.headerLength,l=n.frameLength,u={unit:t.subarray(r+s,r+s+l),pts:o,dts:o};return e.samples.push(u),e.len+=l,{sample:u,length:l+s}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(e,t,r,i,a){if(!(r+24>t.length)){var n=this.parseHeader(t,r);if(n&&r+n.frameLength<=t.length){var o=i+a*(9e4*n.samplesPerFrame/n.sampleRate),s={unit:t.subarray(r,r+n.frameLength),pts:o,dts:o};return e.config=[],e.channelCount=n.channelCount,e.samplerate=n.sampleRate,e.samples.push(s),e.len+=n.frameLength,{sample:s,length:n.frameLength}}}},parseHeader:function(e,t){var r=e[t+1]>>3&3,a=e[t+1]>>1&3,n=e[t+2]>>4&15,o=e[t+2]>>2&3,s=e[t+2]>>1&1;if(1!==r&&0!==n&&15!==n&&3!==o){var l=3===r?3-a:3===a?3:4,u=1e3*i.BitratesMap[14*l+n-1],d=3===r?0:2===r?1:2,f=i.SamplingRateMap[3*d+o],c=e[t+3]>>6==3?1:2,h=i.SamplesCoefficients[r][a],p=i.BytesInSlot[a],g=8*h*p;return{sampleRate:f,channelCount:c,frameLength:parseInt(h*u/f+s,10)*p,samplesPerFrame:g}}},isHeaderPattern:function(e,t){return 255===e[t]&&224==(224&e[t+1])&&0!=(6&e[t+1])},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.parseHeader(e,t),i=4;r&&r.frameLength&&(i=r.frameLength);var a=t+i;if(a===e.length||a+1<e.length&&this.isHeaderPattern(e,a))return!0}return!1}};t.default=i},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.trigger=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.emit.apply(this,[e,e].concat(t))},t}(r(51).EventEmitter);t.Observer=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={toString:function(e){for(var t="",r=e.length,i=0;i<r;i++)t+="["+e.start(i).toFixed(3)+","+e.end(i).toFixed(3)+"]";return t}}},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(10),a=r(0);function n(e,t){for(var r=null,i=0;i<e.length;i+=1){var a=e[i];if(a&&a.cc===t){r=a;break}}return r}function o(e,t,r){var i=!1;return t&&t.details&&r&&(r.endCC>r.startCC||e&&e.cc<r.startCC)&&(i=!0),i}function s(e,t){var r=e.fragments,i=t.fragments;if(i.length&&r.length){var o=n(r,i[0].cc);if(o&&(!o||o.startPTS))return o;a.logger.log("No frag in previous level to align on")}else a.logger.log("No fragments to align")}function l(e,t){t.fragments.forEach(function(t){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}}),t.PTSKnown=!0}function u(e,t,r){if(o(e,r,t)){var i=s(r.details,t);i&&(a.logger.log("Adjusting PTS using last level due to CC increase within current level"),l(i.start,t))}}function d(t,r){if(r&&r.fragments.length){if(!t.hasProgramDateTime||!r.hasProgramDateTime)return;var i=r.fragments[0].programDateTime,n=(t.fragments[0].programDateTime-i)/1e3+r.fragments[0].start;e.isFinite(n)&&(a.logger.log("adjusting PTS using programDateTime delta, sliding:"+n.toFixed(3)),l(n,t))}}t.findFirstFragWithCC=n,t.findFragWithCC=function(e,t){return i.default.search(e,function(e){return e.cc<t?1:e.cc>t?-1:0})},t.shouldAlignOnDiscontinuities=o,t.findDiscontinuousReferenceFrag=s,t.adjustPts=l,t.alignStream=function(e,t,r){u(e,r,t),!r.PTSKnown&&t&&d(r,t.details)},t.alignDiscontinuities=u,t.alignPDT=d}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(10);function a(e,t,r){void 0===e&&(e=0),void 0===t&&(t=0);var i=Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=e?1:r.start-i>e&&r.start?-1:0}function n(e,t,r){var i=1e3*Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.endProgramDateTime-i>e}t.findFragmentByPDT=function(t,r,i){if(!Array.isArray(t)||!t.length||!e.isFinite(r))return null;if(r<t[0].programDateTime)return null;if(r>=t[t.length-1].endProgramDateTime)return null;i=i||0;for(var a=0;a<t.length;++a){var o=t[a];if(n(r,i,o))return o}return null},t.findFragmentByPTS=function(e,t,r,n){void 0===r&&(r=0),void 0===n&&(n=0);var o=e?t[e.sn-t[0].sn+1]:null;return o&&!a(r,n,o)?o:i.default.search(t,a.bind(null,r,n))},t.fragmentWithinToleranceTest=a,t.pdtWithinToleranceTest=n}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var a=e.apply(this,[t].concat(r))||this;return a._tickInterval=null,a._tickTimer=null,a._tickCallCount=0,a._boundTick=a.tick.bind(a),a}return i(t,e),t.prototype.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},t.prototype.hasInterval=function(){return!!this._tickInterval},t.prototype.hasNextTick=function(){return!!this._tickTimer},t.prototype.setInterval=function(e){return!this._tickInterval&&(this._tickInterval=setInterval(this._boundTick,e),!0)},t.prototype.clearInterval=function(){return!!this._tickInterval&&(clearInterval(this._tickInterval),this._tickInterval=null,!0)},t.prototype.clearNextTick=function(){return!!this._tickTimer&&(clearTimeout(this._tickTimer),this._tickTimer=null,!0)},t.prototype.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=setTimeout(this._boundTick,0)),this._tickCallCount=0)},t.prototype.doTick=function(){},t}(r(4).default);t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendAddTrackEvent=function(e,t){var r=null;try{r=new window.Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)},t.clearCurrentCues=function(e){if(e&&e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(69),a=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}};function n(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new a,this.regionList=[]}function o(){this.values=Object.create(null)}function s(e,t,r,i){var a=i?e.split(i):[e];for(var n in a)if("string"==typeof a[n]){var o=a[n].split(r);if(2===o.length)t(o[0],o[1])}}o.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e,t),!0)}};var l=new i.default(0,0,0),u="middle"===l.align?"middle":"center";function d(e,t,r){var i=e;function a(){var t=function(e){function t(e,t,r,i){return 3600*(0|e)+60*(0|t)+(0|r)+(0|i)/1e3}var r=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}(e);if(null===t)throw new Error("Malformed timestamp: "+i);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function n(){e=e.replace(/^\s+/,"")}if(n(),t.startTime=a(),n(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);e=e.substr(3),n(),t.endTime=a(),n(),function(e,t){var i=new o;s(e,function(e,t){switch(e){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===t){i.set(e,r[a].region);break}break;case"vertical":i.alt(e,t,["rl","lr"]);break;case"line":var n=t.split(","),o=n[0];i.integer(e,o),i.percent(e,o)&&i.set("snapToLines",!1),i.alt(e,o,["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",u,"end"]);break;case"position":n=t.split(","),i.percent(e,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",u,"end","line-left","line-right","auto"]);break;case"size":i.percent(e,t);break;case"align":i.alt(e,t,["start",u,"end","left","right"])}},/:/,/\s/),t.region=i.get("region",null),t.vertical=i.get("vertical","");var a=i.get("line","auto");"auto"===a&&-1===l.line&&(a=-1),t.line=a,t.lineAlign=i.get("lineAlign","start"),t.snapToLines=i.get("snapToLines",!0),t.size=i.get("size",100),t.align=i.get("align",u);var n=i.get("position","auto");"auto"===n&&50===l.position&&(n="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=n}(e,t)}function f(e){return e.replace(/<br(?: \/)?>/gi,"\n")}t.fixLineBreaks=f,n.prototype={parse:function(e){var t=this;function r(){var e=t.buffer,r=0;for(e=f(e);r<e.length&&"\r"!==e[r]&&"\n"!==e[r];)++r;var i=e.substr(0,r);return"\r"===e[r]&&++r,"\n"===e[r]&&++r,t.buffer=e.substr(r),i}function a(e){s(e,function(e,t){e},/:/)}e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));try{var n=void 0;if("INITIAL"===t.state){if(!/\r\n|\n/.test(t.buffer))return this;var o=(n=r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!o||!o[0])throw new Error("Malformed WebVTT signature.");t.state="HEADER"}for(var l=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(l?l=!1:n=r(),t.state){case"HEADER":/:/.test(n)?a(n):n||(t.state="ID");continue;case"NOTE":n||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(n)){t.state="NOTE";break}if(!n)continue;if(t.cue=new i.default(0,0,""),t.state="CUE",-1===n.indexOf("--\x3e")){t.cue.id=n;continue}case"CUE":try{d(n,t.cue,t.regionList)}catch(e){t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var u=-1!==n.indexOf("--\x3e");if(!n||u&&(l=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+="\n"),t.cue.text+=n;continue;case"BADCUE":n||(t.state="ID");continue}}}catch(e){"CUETEXT"===t.state&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state="INITIAL"===t.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{if(this.buffer+=this.decoder.decode(),(this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return this.onflush&&this.onflush(),this}},t.default=n},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(9),n=r(3),o=r(16),s=r(35),l=r(36),u=r(7),d=r(37),f=r(55),c=r(56),h=r(57),p=r(0),g=r(58),v=r(1),y=function(e){function t(r){void 0===r&&(r={});var i=e.call(this)||this,a=t.DefaultConfig;if((r.liveSyncDurationCount||r.liveMaxLatencyDurationCount)&&(r.liveSyncDuration||r.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var n in a)n in r||(r[n]=a[n]);if(void 0!==r.liveMaxLatencyDurationCount&&r.liveMaxLatencyDurationCount<=r.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==r.liveMaxLatencyDuration&&(r.liveMaxLatencyDuration<=r.liveSyncDuration||void 0===r.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');p.enableLogs(r.debug),i.config=r,i._autoLevelCapping=-1;var h=i.abrController=new r.abrController(i),g=new r.bufferController(i),v=new r.capLevelController(i),y=new r.fpsController(i),m=new o.default(i),E=new s.default(i),_=new l.default(i),T=new c.default(i),S=i.levelController=new f.default(i),b=new u.FragmentTracker(i),A=[S,i.streamController=new d.default(i,b)],R=r.audioStreamController;R&&A.push(new R(i,b)),i.networkControllers=A;var D=[m,E,_,h,g,v,y,T,b];if(R=r.audioTrackController){var L=new R(i);i.audioTrackController=L,D.push(L)}if(R=r.subtitleTrackController){var w=new R(i);i.subtitleTrackController=w,A.push(w)}if(R=r.emeController){var O=new R(i);i.emeController=O,D.push(O)}return(R=r.subtitleStreamController)&&A.push(new R(i,b)),(R=r.timelineController)&&D.push(new R(i)),i.coreComponents=D,i}return i(t,e),Object.defineProperty(t,"version",{get:function(){return"0.12.4"},enumerable:!0,configurable:!0}),t.isSupported=function(){return h.isSupported()},Object.defineProperty(t,"Events",{get:function(){return v.default},enumerable:!0,configurable:!0}),Object.defineProperty(t,"ErrorTypes",{get:function(){return n.ErrorTypes},enumerable:!0,configurable:!0}),Object.defineProperty(t,"ErrorDetails",{get:function(){return n.ErrorDetails},enumerable:!0,configurable:!0}),Object.defineProperty(t,"DefaultConfig",{get:function(){return t.defaultConfig?t.defaultConfig:g.hlsDefaultConfig},set:function(e){t.defaultConfig=e},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){p.logger.log("destroy"),this.trigger(v.default.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(e){e.destroy()}),this.url=null,this.removeAllListeners(),this._autoLevelCapping=-1},t.prototype.attachMedia=function(e){p.logger.log("attachMedia"),this.media=e,this.trigger(v.default.MEDIA_ATTACHING,{media:e})},t.prototype.detachMedia=function(){p.logger.log("detachMedia"),this.trigger(v.default.MEDIA_DETACHING),this.media=null},t.prototype.loadSource=function(e){e=a.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),p.logger.log("loadSource:"+e),this.url=e,this.trigger(v.default.MANIFEST_LOADING,{url:e})},t.prototype.startLoad=function(e){void 0===e&&(e=-1),p.logger.log("startLoad("+e+")"),this.networkControllers.forEach(function(t){t.startLoad(e)})},t.prototype.stopLoad=function(){p.logger.log("stopLoad"),this.networkControllers.forEach(function(e){e.stopLoad()})},t.prototype.swapAudioCodec=function(){p.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()},t.prototype.recoverMediaError=function(){p.logger.log("recoverMediaError");var e=this.media;this.detachMedia(),this.attachMedia(e)},Object.defineProperty(t.prototype,"levels",{get:function(){return this.levelController.levels},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentLevel",{get:function(){return this.streamController.currentLevel},set:function(e){p.logger.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nextLevel",{get:function(){return this.streamController.nextLevel},set:function(e){p.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"loadLevel",{get:function(){return this.levelController.level},set:function(e){p.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nextLoadLevel",{get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstLevel",{get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){p.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startLevel",{get:function(){return this.levelController.startLevel},set:function(e){p.logger.log("set startLevel:"+e);-1!==e&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoLevelCapping",{get:function(){return this._autoLevelCapping},set:function(e){p.logger.log("set autoLevelCapping:"+e),this._autoLevelCapping=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoLevelEnabled",{get:function(){return-1===this.levelController.manualLevel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"manualLevel",{get:function(){return this.levelController.manualLevel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minAutoLevel",{get:function(){for(var e=this.levels,t=this.config.minAutoBitrate,r=e?e.length:0,i=0;i<r;i++){if((e[i].realBitrate?Math.max(e[i].realBitrate,e[i].bitrate):e[i].bitrate)>t)return i}return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxAutoLevel",{get:function(){var e=this.levels,t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1:t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nextAutoLevel",{get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"audioTracks",{get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"audioTrack",{get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"liveSyncPosition",{get:function(){return this.streamController.liveSyncPosition},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"subtitleTracks",{get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"subtitleTrack",{get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"subtitleDisplay",{get:function(){var e=this.subtitleTrackController;return!!e&&e.subtitleDisplay},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)},enumerable:!0,configurable:!0}),t}(r(24).Observer);t.default=y},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(9),a=r(12),n=r(33),o=r(18),s=r(34),l=r(0),u=r(19),d=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,f=/#EXT-X-MEDIA:(.*)/g,c=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)([\S+ ?]+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),h=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,p=/\.(mp4|m4s|m4v|m4a)$/i,g=function(){function t(){}return t.findGroup=function(e,t){if(!e)return null;for(var r=null,i=0;i<e.length;i++){var a=e[i];a.id===t&&(r=a)}return r},t.convertAVC1ToAVCOTI=function(e){var t,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t},t.resolve=function(e,t){return i.buildAbsoluteURL(t,e,{alwaysNormalize:!0})},t.parseMasterPlaylist=function(e,r){var i,a=[];function n(e,t){["video","audio"].forEach(function(r){var i=e.filter(function(e){return u.isCodecType(e,r)});if(i.length){var a=i.filter(function(e){return 0===e.lastIndexOf("avc1",0)||0===e.lastIndexOf("mp4a",0)});t[r+"Codec"]=a.length>0?a[0]:i[0],e=e.filter(function(e){return-1===i.indexOf(e)})}}),t.unknownCodecs=e}for(d.lastIndex=0;null!=(i=d.exec(e));){var o={},l=o.attrs=new s.default(i[1]);o.url=t.resolve(i[2],r);var f=l.decimalResolution("RESOLUTION");f&&(o.width=f.width,o.height=f.height),o.bitrate=l.decimalInteger("AVERAGE-BANDWIDTH")||l.decimalInteger("BANDWIDTH"),o.name=l.NAME,n([].concat((l.CODECS||"").split(/[ ,]+/)),o),o.videoCodec&&-1!==o.videoCodec.indexOf("avc1")&&(o.videoCodec=t.convertAVC1ToAVCOTI(o.videoCodec)),a.push(o)}return a},t.parseMasterPlaylistMedia=function(e,r,i,a){var n;void 0===a&&(a=[]);var o=[],l=0;for(f.lastIndex=0;null!==(n=f.exec(e));){var u={},d=new s.default(n[1]);if(d.TYPE===i){if(u.groupId=d["GROUP-ID"],u.name=d.NAME,u.type=i,u.default="YES"===d.DEFAULT,u.autoselect="YES"===d.AUTOSELECT,u.forced="YES"===d.FORCED,d.URI&&(u.url=t.resolve(d.URI,r)),u.lang=d.LANGUAGE,u.name||(u.name=u.lang),a.length){var c=t.findGroup(a,u.groupId);u.audioCodec=c?c.codec:a[0].codec}u.id=l++,o.push(u)}}return o},t.parseLevelPlaylist=function(t,r,i,u,d){var f,g,y=0,m=0,E=new n.default(r),_=new o.default,T=0,S=null,b=new a.default,A=null;for(c.lastIndex=0;null!==(f=c.exec(t));){var R=f[1];if(R){b.duration=parseFloat(R);var D=(" "+f[2]).slice(1);b.title=D||null,b.tagList.push(D?["INF",R,D]:["INF",R])}else if(f[3]){if(e.isFinite(b.duration)){var L=y++;b.type=u,b.start=m,b.levelkey=_,b.sn=L,b.level=i,b.cc=T,b.urlId=d,b.baseurl=r,b.relurl=(" "+f[3]).slice(1),v(b,S),E.fragments.push(b),S=b,m+=b.duration,b=new a.default}}else if(f[4]){if(b.rawByteRange=(" "+f[4]).slice(1),S){var w=S.byteRangeEndOffset;w&&(b.lastByteRangeEndOffset=w)}}else if(f[5])b.rawProgramDateTime=(" "+f[5]).slice(1),b.tagList.push(["PROGRAM-DATE-TIME",b.rawProgramDateTime]),null===A&&(A=E.fragments.length);else{for(f=f[0].match(h),g=1;g<f.length&&void 0===f[g];g++);var O=(" "+f[g+1]).slice(1),I=(" "+f[g+2]).slice(1);switch(f[g]){case"#":b.tagList.push(I?[O,I]:[O]);break;case"PLAYLIST-TYPE":E.type=O.toUpperCase();break;case"MEDIA-SEQUENCE":y=E.startSN=parseInt(O);break;case"TARGETDURATION":E.targetduration=parseFloat(O);break;case"VERSION":E.version=parseInt(O);break;case"EXTM3U":break;case"ENDLIST":E.live=!1;break;case"DIS":T++,b.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":T=parseInt(O);break;case"KEY":var P=O,k=new s.default(P),C=k.enumeratedString("METHOD"),F=k.URI,x=k.hexadecimalInteger("IV");C&&(_=new o.default,F&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(C)>=0&&(_.method=C,_.baseuri=r,_.reluri=F,_.key=null,_.iv=x));break;case"START":var M=O,N=new s.default(M).decimalFloatingPoint("TIME-OFFSET");e.isFinite(N)&&(E.startTimeOffset=N);break;case"MAP":var U=new s.default(O);b.relurl=U.URI,b.rawByteRange=U.BYTERANGE,b.baseurl=r,b.level=i,b.type=u,b.sn="initSegment",E.initSegment=b,(b=new a.default).rawProgramDateTime=E.initSegment.rawProgramDateTime;break;default:l.logger.warn("line parsed but not handled: "+f)}}}return(b=S)&&!b.relurl&&(E.fragments.pop(),m-=b.duration),E.totalduration=m,E.averagetargetduration=m/E.fragments.length,E.endSN=y-1,E.startCC=E.fragments[0]?E.fragments[0].cc:0,E.endCC=T,!E.initSegment&&E.fragments.length&&E.fragments.every(function(e){return p.test(e.relurl)})&&(l.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(b=new a.default).relurl=E.fragments[0].relurl,b.baseurl=r,b.level=i,b.type=u,b.sn="initSegment",E.initSegment=b,E.needSidxRanges=!0),A&&function(e,t){for(var r=e[t],i=t-1;i>=0;i--){var a=e[i];a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(E.fragments,A),E},t}();function v(t,r){t.rawProgramDateTime?t.programDateTime=Date.parse(t.rawProgramDateTime):r&&r.programDateTime&&(t.programDateTime=r.endProgramDateTime),e.isFinite(t.programDateTime)||(t.programDateTime=null,t.rawProgramDateTime=null)}t.default=g}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function t(e){this.endCC=0,this.endSN=0,this.fragments=[],this.initSegment=null,this.live=!0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=e,this.version=null}return Object.defineProperty(t.prototype,"hasProgramDateTime",{get:function(){return!(!this.fragments[0]||!e.isFinite(this.fragments[0].programDateTime))},enumerable:!0,configurable:!0}),t}();t.default=r}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=/^(\d+)x(\d+)$/,i=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,a=function(){function t(e){for(var r in"string"==typeof e&&(e=t.parseAttrList(e)),e)e.hasOwnProperty(r)&&(this[r]=e[r])}return t.prototype.decimalInteger=function(t){var r=parseInt(this[t],10);return r>e.MAX_SAFE_INTEGER?1/0:r},t.prototype.hexadecimalInteger=function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(2*i,2*i+2),16);return r}return null},t.prototype.hexadecimalIntegerAsNumber=function(t){var r=parseInt(this[t],16);return r>e.MAX_SAFE_INTEGER?1/0:r},t.prototype.decimalFloatingPoint=function(e){return parseFloat(this[e])},t.prototype.enumeratedString=function(e){return this[e]},t.prototype.decimalResolution=function(e){var t=r.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}},t.parseAttrList=function(e){var t,r={};for(i.lastIndex=0;null!==(t=i.exec(e));){var a=t[2];0===a.indexOf('"')&&a.lastIndexOf('"')===a.length-1&&(a=a.slice(1,-1)),r[t[1]]=a}return r},t}();t.default=a}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(3),s=r(0),l=function(t){function r(e){var r=t.call(this,e,a.default.FRAG_LOADING)||this;return r.loaders={},r}return i(r,t),r.prototype.destroy=function(){var e=this.loaders;for(var r in e){var i=e[r];i&&i.destroy()}this.loaders={},t.prototype.destroy.call(this)},r.prototype.onFragLoading=function(t){var r=t.frag,i=r.type,a=this.loaders,n=this.hls.config,o=n.fLoader,l=n.loader;r.loaded=0;var u,d,f,c=a[i];c&&(s.logger.warn("abort previous fragment loader for type: "+i),c.abort()),c=a[i]=r.loader=n.fLoader?new o(n):new l(n),u={url:r.url,frag:r,responseType:"arraybuffer",progressData:!1};var h=r.byteRangeStartOffset,p=r.byteRangeEndOffset;e.isFinite(h)&&e.isFinite(p)&&(u.rangeStart=h,u.rangeEnd=p),d={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:n.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},c.load(u,d,f)},r.prototype.loadsuccess=function(e,t,r,i){void 0===i&&(i=null);var n=e.data,o=r.frag;o.loader=void 0,this.loaders[o.type]=void 0,this.hls.trigger(a.default.FRAG_LOADED,{payload:n,frag:o,stats:t,networkDetails:i})},r.prototype.loaderror=function(e,t,r){void 0===r&&(r=null);var i=t.frag,n=i.loader;n&&n.abort(),this.loaders[i.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e,networkDetails:r})},r.prototype.loadtimeout=function(e,t,r){void 0===r&&(r=null);var i=t.frag,n=i.loader;n&&n.abort(),this.loaders[i.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag,networkDetails:r})},r.prototype.loadprogress=function(e,t,r,i){void 0===i&&(i=null);var n=t.frag;n.loaded=e.loaded,this.hls.trigger(a.default.FRAG_LOAD_PROGRESS,{frag:n,stats:e,networkDetails:i})},r}(n.default);t.default=l}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(3),s=r(0),l=function(e){function t(t){var r=e.call(this,t,a.default.KEY_LOADING)||this;return r.loaders={},r.decryptkey=null,r.decrypturl=null,r}return i(t,e),t.prototype.destroy=function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},n.default.prototype.destroy.call(this)},t.prototype.onKeyLoading=function(e){var t=e.frag,r=t.type,i=this.loaders[r],n=t.decryptdata,o=n.uri;if(o!==this.decrypturl||null===this.decryptkey){var l=this.hls.config;i&&(s.logger.warn("abort previous key loader for type:"+r),i.abort()),t.loader=this.loaders[r]=new l.loader(l),this.decrypturl=o,this.decryptkey=null;var u,d,f;u={url:o,frag:t,responseType:"arraybuffer"},d={timeout:l.fragLoadingTimeOut,maxRetry:0,retryDelay:l.fragLoadingRetryDelay,maxRetryDelay:l.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},t.loader.load(u,d,f)}else this.decryptkey&&(n.key=this.decryptkey,this.hls.trigger(a.default.KEY_LOADED,{frag:t}))},t.prototype.loadsuccess=function(e,t,r){var i=r.frag;this.decryptkey=i.decryptdata.key=new Uint8Array(e.data),i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(a.default.KEY_LOADED,{frag:i})},t.prototype.loaderror=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})},t.prototype.loadtimeout=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},t}(n.default);t.default=l},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(10),n=r(5),o=r(20),s=r(1),l=r(7),u=r(12),d=r(16),f=r(8),c=r(25),h=r(3),p=r(0),g=r(26),v=r(27),y=r(54),m=r(15),E=function(t){function r(e,r){var i=t.call(this,e,s.default.MEDIA_ATTACHED,s.default.MEDIA_DETACHING,s.default.MANIFEST_LOADING,s.default.MANIFEST_PARSED,s.default.LEVEL_LOADED,s.default.KEY_LOADED,s.default.FRAG_LOADED,s.default.FRAG_LOAD_EMERGENCY_ABORTED,s.default.FRAG_PARSING_INIT_SEGMENT,s.default.FRAG_PARSING_DATA,s.default.FRAG_PARSED,s.default.ERROR,s.default.AUDIO_TRACK_SWITCHING,s.default.AUDIO_TRACK_SWITCHED,s.default.BUFFER_CREATED,s.default.BUFFER_APPENDED,s.default.BUFFER_FLUSHED)||this;return i.fragmentTracker=r,i.config=e.config,i.audioCodecSwap=!1,i._state=m.State.STOPPED,i.stallReported=!1,i.gapController=null,i}return i(r,t),r.prototype.startLoad=function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(i=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}t>0&&-1===e&&(p.logger.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=m.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=m.State.STOPPED},r.prototype.stopLoad=function(){this.forceStartLoad=!1,t.prototype.stopLoad.call(this)},r.prototype.doTick=function(){switch(this.state){case m.State.BUFFER_FLUSHING:this.fragLoadError=0;break;case m.State.IDLE:this._doTickIdle();break;case m.State.WAITING_LEVEL:var e=this.levels[this.level];e&&e.details&&(this.state=m.State.IDLE);break;case m.State.FRAG_LOADING_WAITING_RETRY:var t=window.performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(p.logger.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=m.State.IDLE);break;case m.State.ERROR:case m.State.STOPPED:case m.State.FRAG_LOADING:case m.State.PARSING:case m.State.PARSED:case m.State.ENDED:}this._checkBuffer(),this._checkFragmentChanged()},r.prototype._doTickIdle=function(){var e=this.hls,t=e.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&t.startFragPrefetch)){var i;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=e.nextLoadLevel,o=this.levels[a];if(o){var l,u=o.bitrate;l=u?Math.max(8*t.maxBufferSize/u,t.maxBufferLength):t.maxBufferLength,l=Math.min(l,t.maxMaxBufferLength);var d=n.BufferHelper.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,t.maxBufferHole),f=d.len;if(!(f>=l)){p.logger.trace("buffer length of "+f.toFixed(3)+" is below max of "+l.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=a;var c=o.details;if(!c||c.live&&this.levelLastLoaded!==a)this.state=m.State.WAITING_LEVEL;else{if(this._streamEnded(d,c)){var h={};return this.altAudio&&(h.type="video"),this.hls.trigger(s.default.BUFFER_EOS,h),void(this.state=m.State.ENDED)}this._fetchPayloadOrEos(i,d,c)}}}}},r.prototype._fetchPayloadOrEos=function(e,t,r){var i=this.fragPrevious,a=this.level,n=r.fragments,o=n.length;if(0!==o){var s,l=n[0].start,u=n[o-1].start+n[o-1].duration,d=t.end;if(r.initSegment&&!r.initSegment.data)s=r.initSegment;else if(r.live){var f=this.config.initialLiveManifestSize;if(o<f)return void p.logger.warn("Can not start playback of a level, reason: not enough fragments "+o+" < "+f);if(null===(s=this._ensureFragmentAtLivePoint(r,d,l,u,i,n,o)))return}else d<l&&(s=n[0]);s||(s=this._findFragment(l,i,o,n,d,u,r)),s&&(s.encrypted?(p.logger.log("Loading key for "+s.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a),this._loadKey(s)):(p.logger.log("Loading "+s.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a+", currentTime:"+e.toFixed(3)+",bufferEnd:"+d.toFixed(3)),this._loadFragment(s)))}},r.prototype._ensureFragmentAtLivePoint=function(e,t,r,i,n,o,s){var l,u=this.hls.config,d=this.media,f=void 0!==u.liveMaxLatencyDuration?u.liveMaxLatencyDuration:u.liveMaxLatencyDurationCount*e.targetduration;if(t<Math.max(r-u.maxFragLookUpTolerance,i-f)){var c=this.liveSyncPosition=this.computeLivePosition(r,e);p.logger.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+c.toFixed(3)),t=c,d&&d.readyState&&d.duration>c&&(d.currentTime=c),this.nextLoadPosition=c}if(e.PTSKnown&&t>i&&d&&d.readyState)return null;if(this.startFragRequested&&!e.PTSKnown){if(n)if(e.hasProgramDateTime)p.logger.log("live playlist, switching playlist, load frag with same PDT: "+n.programDateTime),l=v.findFragmentByPDT(o,n.endProgramDateTime,u.maxFragLookUpTolerance);else{var h=n.sn+1;if(h>=e.startSN&&h<=e.endSN){var g=o[h-e.startSN];n.cc===g.cc&&(l=g,p.logger.log("live playlist, switching playlist, load frag with next SN: "+l.sn))}l||(l=a.default.search(o,function(e){return n.cc-e.cc}))&&p.logger.log("live playlist, switching playlist, load frag with same CC: "+l.sn)}l||(l=o[Math.min(s-1,Math.round(s/2))],p.logger.log("live playlist, switching playlist, unknown, load middle frag : "+l.sn))}return l},r.prototype._findFragment=function(e,t,r,i,a,n,o){var s,l=this.hls.config;if(a<n){var u=a>n-l.maxFragLookUpTolerance?0:l.maxFragLookUpTolerance;s=v.findFragmentByPTS(t,i,a,u)}else s=i[r-1];if(s){var d=s.sn-o.startSN,f=t&&s.level===t.level,c=i[d-1],h=i[d+1];if(t&&s.sn===t.sn)if(f&&!s.backtracked)if(s.sn<o.endSN){var g=t.deltaPTS;g&&g>l.maxBufferHole&&t.dropped&&d?(s=c,p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")):(s=h,p.logger.log("SN just loaded, load next one: "+s.sn,s))}else s=null;else s.backtracked&&(h&&h.backtracked?(p.logger.warn("Already backtracked from fragment "+h.sn+", will not backtrack to fragment "+s.sn+". Loading fragment "+h.sn),s=h):(p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),s.dropped=0,c?(s=c).backtracked=!0:d&&(s=null)))}return s},r.prototype._loadKey=function(e){this.state=m.State.KEY_LOADING,this.hls.trigger(s.default.KEY_LOADING,{frag:e})},r.prototype._loadFragment=function(t){var r=this.fragmentTracker.getState(t);this.fragCurrent=t,this.startFragRequested=!0,e.isFinite(t.sn)&&!t.bitrateTest&&(this.nextLoadPosition=t.start+t.duration),t.backtracked||r===l.FragmentState.NOT_LOADED||r===l.FragmentState.PARTIAL?(t.autoLevel=this.hls.autoLevelEnabled,t.bitrateTest=this.bitrateTest,this.hls.trigger(s.default.FRAG_LOADING,{frag:t}),this.demuxer||(this.demuxer=new o.default(this.hls,"main")),this.state=m.State.FRAG_LOADING):r===l.FragmentState.APPENDING&&this._reduceMaxBufferLength(t.duration)&&this.fragmentTracker.removeFragment(t)},Object.defineProperty(r.prototype,"state",{get:function(){return this._state},set:function(e){if(this.state!==e){var t=this.state;this._state=e,p.logger.log("main stream:"+t+"->"+e),this.hls.trigger(s.default.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},enumerable:!0,configurable:!0}),r.prototype.getBufferedFrag=function(e){return this.fragmentTracker.getBufferedFrag(e,d.default.LevelType.MAIN)},Object.defineProperty(r.prototype,"currentLevel",{get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"nextBufferedFrag",{get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null},enumerable:!0,configurable:!0}),r.prototype.followingBufferedFrag=function(e){return e?this.getBufferedFrag(e.endPTS+.5):null},Object.defineProperty(r.prototype,"nextLevel",{get:function(){var e=this.nextBufferedFrag;return e?e.level:-1},enumerable:!0,configurable:!0}),r.prototype._checkFragmentChanged=function(){var e,t,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>this.lastCurrentTime&&(this.lastCurrentTime=t),n.BufferHelper.isBuffered(r,t)?e=this.getBufferedFrag(t):n.BufferHelper.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var i=e;if(i!==this.fragPlaying){this.hls.trigger(s.default.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(s.default.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},r.prototype.immediateLevelSwitch=function(){if(p.logger.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var t=this.media,r=void 0;t?(r=t.paused,t.pause()):r=!0,this.previouslyPaused=r}var i=this.fragCurrent;i&&i.loader&&i.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,e.POSITIVE_INFINITY)},r.prototype.immediateLevelSwitchEnd=function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,n.BufferHelper.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())},r.prototype.nextLevelSwitch=function(){var t=this.media;if(t&&t.readyState){var r,i=void 0,a=void 0;if((r=this.getBufferedFrag(t.currentTime))&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),t.paused)i=0;else{var n=this.hls.nextLoadLevel,o=this.levels[n],s=this.fragLastKbps;i=s&&this.fragCurrent?this.fragCurrent.duration*o.bitrate/(1e3*s)+1:0}if((a=this.getBufferedFrag(t.currentTime+i))&&(a=this.followingBufferedFrag(a))){var l=this.fragCurrent;l&&l.loader&&l.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(a.maxStartPTS,e.POSITIVE_INFINITY)}}},r.prototype.flushMainBuffer=function(e,t){this.state=m.State.BUFFER_FLUSHING;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(s.default.BUFFER_FLUSHING,r)},r.prototype.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition),this.gapController=new y.default(r,t,this.fragmentTracker,this.hls)},r.prototype.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(p.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.backtracked=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},r.prototype.onMediaSeeked=function(){var t=this.media,r=t?t.currentTime:void 0;e.isFinite(r)&&p.logger.log("media seeked to "+r.toFixed(3)),this.tick()},r.prototype.onManifestLoading=function(){p.logger.log("trigger BUFFER_RESET"),this.hls.trigger(s.default.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0},r.prototype.onManifestParsed=function(e){var t,r=!1,i=!1;e.levels.forEach(function(e){(t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(r=!0),-1!==t.indexOf("mp4a.40.5")&&(i=!0))}),this.audioCodecSwitch=r&&i,this.audioCodecSwitch&&p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},r.prototype.onLevelLoaded=function(t){var r=t.details,i=t.level,a=this.levels[this.levelLastLoaded],n=this.levels[i],o=r.totalduration,l=0;if(p.logger.log("level "+i+" loaded ["+r.startSN+","+r.endSN+"],duration:"+o),r.live){var u=n.details;u&&r.fragments.length>0?(f.mergeDetails(u,r),l=r.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(l,u),r.PTSKnown&&e.isFinite(l)?p.logger.log("live playlist sliding:"+l.toFixed(3)):(p.logger.log("live playlist - outdated PTS, unknown sliding"),g.alignStream(this.fragPrevious,a,r))):(p.logger.log("live playlist - first load, unknown sliding"),r.PTSKnown=!1,g.alignStream(this.fragPrevious,a,r))}else r.PTSKnown=!1;if(n.details=r,this.levelLastLoaded=i,this.hls.trigger(s.default.LEVEL_UPDATED,{details:r,level:i}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var d=r.startTimeOffset;e.isFinite(d)?(d<0&&(p.logger.log("negative start time offset "+d+", count from end of last fragment"),d=l+o+d),p.logger.log("start time offset found in playlist, adjust startPosition to "+d),this.startPosition=d):r.live?(this.startPosition=this.computeLivePosition(l,r),p.logger.log("configure startPosition to "+this.startPosition)):this.startPosition=0,this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===m.State.WAITING_LEVEL&&(this.state=m.State.IDLE),this.tick()},r.prototype.onKeyLoaded=function(){this.state===m.State.KEY_LOADING&&(this.state=m.State.IDLE,this.tick())},r.prototype.onFragLoaded=function(e){var t=this.fragCurrent,r=this.hls,i=this.levels,a=this.media,n=e.frag;if(this.state===m.State.FRAG_LOADING&&t&&"main"===n.type&&n.level===t.level&&n.sn===t.sn){var l=e.stats,u=i[t.level],d=u.details;if(this.bitrateTest=!1,this.stats=l,p.logger.log("Loaded "+t.sn+" of ["+d.startSN+" ,"+d.endSN+"],level "+t.level),n.bitrateTest&&r.nextLoadLevel)this.state=m.State.IDLE,this.startFragRequested=!1,l.tparsed=l.tbuffered=window.performance.now(),r.trigger(s.default.FRAG_BUFFERED,{stats:l,frag:t,id:"main"}),this.tick();else if("initSegment"===n.sn)this.state=m.State.IDLE,l.tparsed=l.tbuffered=window.performance.now(),d.initSegment.data=e.payload,r.trigger(s.default.FRAG_BUFFERED,{stats:l,frag:t,id:"main"}),this.tick();else{p.logger.log("Parsing "+t.sn+" of ["+d.startSN+" ,"+d.endSN+"],level "+t.level+", cc "+t.cc),this.state=m.State.PARSING,this.pendingBuffering=!0,this.appended=!1,n.bitrateTest&&(n.bitrateTest=!1,this.fragmentTracker.onFragLoaded({frag:n}));var f=!(a&&a.seeking)&&(d.PTSKnown||!d.live),c=d.initSegment?d.initSegment.data:[],h=this._getAudioCodec(u);(this.demuxer=this.demuxer||new o.default(this.hls,"main")).push(e.payload,c,h,u.videoCodec,t,d.totalduration,f)}}this.fragLoadError=0},r.prototype.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===m.State.PARSING){var i=e.tracks,a=void 0,n=void 0;if(i.audio&&this.altAudio&&delete i.audio,n=i.audio){var o=this.levels[this.level].audioCodec,l=navigator.userAgent.toLowerCase();o&&this.audioCodecSwap&&(p.logger.log("swapping playlist audio codec"),o=-1!==o.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==n.metadata.channelCount&&-1===l.indexOf("firefox")&&(o="mp4a.40.5"),-1!==l.indexOf("android")&&"audio/mpeg"!==n.container&&(o="mp4a.40.2",p.logger.log("Android: force audio codec to "+o)),n.levelCodec=o,n.id=e.id}for(a in(n=i.video)&&(n.levelCodec=this.levels[this.level].videoCodec,n.id=e.id),this.hls.trigger(s.default.BUFFER_CODECS,i),i){n=i[a],p.logger.log("main track:"+a+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var u=n.initSegment;u&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(s.default.BUFFER_APPENDING,{type:a,data:u,parent:"main",content:"initSegment"}))}this.tick()}},r.prototype.onFragParsingData=function(t){var r=this,i=this.fragCurrent,a=t.frag;if(i&&"main"===t.id&&a.sn===i.sn&&a.level===i.level&&("audio"!==t.type||!this.altAudio)&&this.state===m.State.PARSING){var n=this.levels[this.level],o=i;if(e.isFinite(t.endPTS)||(t.endPTS=t.startPTS+i.duration,t.endDTS=t.startDTS+i.duration),!0===t.hasAudio&&o.addElementaryStream(u.default.ElementaryStreamTypes.AUDIO),!0===t.hasVideo&&o.addElementaryStream(u.default.ElementaryStreamTypes.VIDEO),p.logger.log("Parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb+",dropped:"+(t.dropped||0)),"video"===t.type)if(o.dropped=t.dropped,o.dropped)if(o.backtracked)p.logger.warn("Already backtracked on this fragment, appending with the gap",o.sn);else{var l=n.details;if(!l||o.sn!==l.startSN)return p.logger.warn("missing video frame(s), backtracking fragment",o.sn),this.fragmentTracker.removeFragment(o),o.backtracked=!0,this.nextLoadPosition=t.startPTS,this.state=m.State.IDLE,this.fragPrevious=o,void this.tick();p.logger.warn("missing video frame(s) on first frag, appending with gap",o.sn)}else o.backtracked=!1;var d=f.updateFragPTSDTS(n.details,o,t.startPTS,t.endPTS,t.startDTS,t.endDTS),c=this.hls;c.trigger(s.default.LEVEL_PTS_UPDATED,{details:n.details,level:this.level,drift:d,type:t.type,start:t.startPTS,end:t.endPTS}),[t.data1,t.data2].forEach(function(e){e&&e.length&&r.state===m.State.PARSING&&(r.appended=!0,r.pendingBuffering=!0,c.trigger(s.default.BUFFER_APPENDING,{type:t.type,data:e,parent:"main",content:"data"}))}),this.tick()}},r.prototype.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===m.State.PARSING&&(this.stats.tparsed=window.performance.now(),this.state=m.State.PARSED,this._checkAppendedParsed())},r.prototype.onAudioTrackSwitching=function(t){var r=!!t.url,i=t.id;if(!r){if(this.mediaBuffer!==this.media){p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var a=this.fragCurrent;a.loader&&(p.logger.log("switching to main audio track, cancel main fragment load"),a.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=m.State.IDLE}var n=this.hls;n.trigger(s.default.BUFFER_FLUSHING,{startOffset:0,endOffset:e.POSITIVE_INFINITY,type:"audio"}),n.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:i}),this.altAudio=!1}},r.prototype.onAudioTrackSwitched=function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},r.prototype.onBufferCreated=function(e){var t,r,i=e.tracks,a=!1;for(var n in i){var o=i[n];"main"===o.id?(r=n,t=o,"video"===n&&(this.videoBuffer=i[n].buffer)):a=!0}a&&t?(p.logger.log("alternate track found, use "+r+".buffered to schedule main fragment loading"),this.mediaBuffer=t.buffer):this.mediaBuffer=this.media},r.prototype.onBufferAppended=function(e){if("main"===e.parent){var t=this.state;t!==m.State.PARSING&&t!==m.State.PARSED||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},r.prototype._checkAppendedParsed=function(){if(!(this.state!==m.State.PARSED||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;p.logger.log("main buffered : "+c.default.toString(t.buffered)),this.fragPrevious=e;var r=this.stats;r.tbuffered=window.performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(s.default.FRAG_BUFFERED,{stats:r,frag:e,id:"main"}),this.state=m.State.IDLE}this.tick()}},r.prototype.onError=function(t){var r=t.frag||this.fragCurrent;if(!r||"main"===r.type){var i=!!this.media&&n.BufferHelper.isBuffered(this.media,this.media.currentTime)&&n.BufferHelper.isBuffered(this.media,this.media.currentTime+.5);switch(t.details){case h.ErrorDetails.FRAG_LOAD_ERROR:case h.ErrorDetails.FRAG_LOAD_TIMEOUT:case h.ErrorDetails.KEY_LOAD_ERROR:case h.ErrorDetails.KEY_LOAD_TIMEOUT:if(!t.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var a=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);p.logger.warn("mediaController: frag loading failed, retry in "+a+" ms"),this.retryDate=window.performance.now()+a,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=m.State.FRAG_LOADING_WAITING_RETRY}else p.logger.error("mediaController: "+t.details+" reaches max retry, redispatch as fatal ..."),t.fatal=!0,this.state=m.State.ERROR;break;case h.ErrorDetails.LEVEL_LOAD_ERROR:case h.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==m.State.ERROR&&(t.fatal?(this.state=m.State.ERROR,p.logger.warn("streamController: "+t.details+",switch to "+this.state+" state ...")):t.levelRetry||this.state!==m.State.WAITING_LEVEL||(this.state=m.State.IDLE));break;case h.ErrorDetails.BUFFER_FULL_ERROR:"main"!==t.parent||this.state!==m.State.PARSING&&this.state!==m.State.PARSED||(i?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=m.State.IDLE):(p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,e.POSITIVE_INFINITY)))}}},r.prototype._reduceMaxBufferLength=function(e){var t=this.config;return t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,p.logger.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),!0)},r.prototype._checkBuffer=function(){var e=this.media;if(e&&0!==e.readyState){var t=(this.mediaBuffer?this.mediaBuffer:e).buffered;!this.loadedmetadata&&t.length?(this.loadedmetadata=!0,this._seekToStartPos()):this.immediateSwitch?this.immediateLevelSwitchEnd():this.gapController.poll(this.lastCurrentTime,t)}},r.prototype.onFragLoadEmergencyAborted=function(){this.state=m.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},r.prototype.onBufferFlushed=function(){var e=this.mediaBuffer?this.mediaBuffer:this.media;e&&this.fragmentTracker.detectEvictedFragments(u.default.ElementaryStreamTypes.VIDEO,e.buffered),this.state=m.State.IDLE,this.fragPrevious=null},r.prototype.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},r.prototype.computeLivePosition=function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)},r.prototype._seekToStartPos=function(){var e=this.media,t=e.currentTime,r=e.seeking?t:this.startPosition;t!==r&&(p.logger.log("target start position not buffered, seek to buffered.start(0) "+r+" from current time "+t+" "),e.currentTime=r)},r.prototype._getAudioCodec=function(e){var t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&(p.logger.log("swapping playlist audio codec"),t&&(t=-1!==t.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),t},Object.defineProperty(r.prototype,"liveSyncPosition",{get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e},enumerable:!0,configurable:!0}),r}(m.default);t.default=E}).call(this,r(2).Number)},function(e,t,r){function i(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=r(r.s=ENTRY_MODULE);return i.default||i}var a="[\\.|\\-|\\+|\\w|/|@]+",n="\\((/\\*.*?\\*/)?s?.*?("+a+").*?\\)";function o(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function s(e){return!isNaN(1*e)}function l(e,t,i){var l={};l[i]=[];var u=t.toString(),d=u.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);if(!d)return l;for(var f,c=d[1],h=new RegExp("(\\\\n|\\W)"+o(c)+n,"g");f=h.exec(u);)"dll-reference"!==f[3]&&l[i].push(f[3]);for(h=new RegExp("\\("+o(c)+'\\("(dll-reference\\s('+a+'))"\\)\\)'+n,"g");f=h.exec(u);)e[f[2]]||(l[i].push(f[1]),e[f[2]]=r(f[1]).m),l[f[2]]=l[f[2]]||[],l[f[2]].push(f[4]);for(var p=Object.keys(l),g=0;g<p.length;g++)for(var v=0;v<l[p[g]].length;v++)s(l[p[g]][v])&&(l[p[g]][v]=1*l[p[g]][v]);return l}function u(e){return Object.keys(e).reduce(function(t,r){return t||e[r].length>0},!1)}e.exports=function(e,t){t=t||{};var a={main:r.m},n=t.all?{main:Object.keys(a.main)}:function(e,t){for(var r={main:[t]},i={main:[]},a={main:{}};u(r);)for(var n=Object.keys(r),o=0;o<n.length;o++){var s=n[o],d=r[s].pop();if(a[s]=a[s]||{},!a[s][d]&&e[s][d]){a[s][d]=!0,i[s]=i[s]||[],i[s].push(d);for(var f=l(e,e[s][d],s),c=Object.keys(f),h=0;h<c.length;h++)r[c[h]]=r[c[h]]||[],r[c[h]]=r[c[h]].concat(f[c[h]])}}return i}(a,e),o="";Object.keys(n).filter(function(e){return"main"!==e}).forEach(function(e){for(var t=0;n[e][t];)t++;n[e].push(t),a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",o=o+"var "+e+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+n[e].map(function(t){return JSON.stringify(t)+": "+a[e][t].toString()}).join(",")+"});\n"}),o=o+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+n.main.map(function(e){return JSON.stringify(e)+": "+a.main[e].toString()}).join(",")+"}))(self);";var s=new window.Blob([o],{type:"text/javascript"});if(t.bare)return s;var d=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(s),f=new window.Worker(d);return f.objectURL=d,f}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.subtle=e,this.aesIV=t}return e.prototype.decrypt=function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)},e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.subtle=e,this.key=t}return e.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},e}();t.default=i},function(e,t,r){"use strict";function i(e){var t=e.byteLength,r=t&&new DataView(e).getUint8(t-1);return r?e.slice(0,t-r):e}Object.defineProperty(t,"__esModule",{value:!0}),t.removePadding=i;var a=function(){function e(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return e.prototype.uint8ArrayToUint32Array_=function(e){for(var t=new DataView(e),r=new Uint32Array(4),i=0;i<4;i++)r[i]=t.getUint32(4*i);return r},e.prototype.initTable=function(){var e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],o=r[3],s=this.invSubMix,l=s[0],u=s[1],d=s[2],f=s[3],c=new Uint32Array(256),h=0,p=0,g=0;for(g=0;g<256;g++)c[g]=g<128?g<<1:g<<1^283;for(g=0;g<256;g++){var v=p^p<<1^p<<2^p<<3^p<<4;v=v>>>8^255&v^99,e[h]=v,t[v]=h;var y=c[h],m=c[y],E=c[m],_=257*c[v]^16843008*v;i[h]=_<<24|_>>>8,a[h]=_<<16|_>>>16,n[h]=_<<8|_>>>24,o[h]=_,_=16843009*E^65537*m^257*y^16843008*h,l[v]=_<<24|_>>>8,u[v]=_<<16|_>>>16,d[v]=_<<8|_>>>24,f[v]=_,h?(h=y^c[c[c[E^y]]],p^=c[c[p]]):h=p=1}},e.prototype.expandKey=function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,i=0;i<t.length&&r;)r=t[i]===this.key[i],i++;if(!r){this.key=t;var a=this.keySize=t.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n,o,s,l,u=this.ksRows=4*(a+6+1),d=this.keySchedule=new Uint32Array(u),f=this.invKeySchedule=new Uint32Array(u),c=this.sBox,h=this.rcon,p=this.invSubMix,g=p[0],v=p[1],y=p[2],m=p[3];for(n=0;n<u;n++)n<a?s=d[n]=t[n]:(l=s,n%a==0?(l=c[(l=l<<8|l>>>24)>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l],l^=h[n/a|0]<<24):a>6&&n%a==4&&(l=c[l>>>24]<<24|c[l>>>16&255]<<16|c[l>>>8&255]<<8|c[255&l]),d[n]=s=(d[n-a]^l)>>>0);for(o=0;o<u;o++)n=u-o,l=3&o?d[n]:d[n-4],f[o]=o<4||n<=4?l:g[c[l>>>24]]^v[c[l>>>16&255]]^y[c[l>>>8&255]]^m[c[255&l]],f[o]=f[o]>>>0}},e.prototype.networkToHostOrderSwap=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},e.prototype.decrypt=function(e,t,r,a){for(var n,o,s,l,u,d,f,c,h,p,g,v,y,m,E=this.keySize+6,_=this.invKeySchedule,T=this.invSBox,S=this.invSubMix,b=S[0],A=S[1],R=S[2],D=S[3],L=this.uint8ArrayToUint32Array_(r),w=L[0],O=L[1],I=L[2],P=L[3],k=new Int32Array(e),C=new Int32Array(k.length),F=this.networkToHostOrderSwap;t<k.length;){for(h=F(k[t]),p=F(k[t+1]),g=F(k[t+2]),v=F(k[t+3]),u=h^_[0],d=v^_[1],f=g^_[2],c=p^_[3],y=4,m=1;m<E;m++)n=b[u>>>24]^A[d>>16&255]^R[f>>8&255]^D[255&c]^_[y],o=b[d>>>24]^A[f>>16&255]^R[c>>8&255]^D[255&u]^_[y+1],s=b[f>>>24]^A[c>>16&255]^R[u>>8&255]^D[255&d]^_[y+2],l=b[c>>>24]^A[u>>16&255]^R[d>>8&255]^D[255&f]^_[y+3],u=n,d=o,f=s,c=l,y+=4;n=T[u>>>24]<<24^T[d>>16&255]<<16^T[f>>8&255]<<8^T[255&c]^_[y],o=T[d>>>24]<<24^T[f>>16&255]<<16^T[c>>8&255]<<8^T[255&u]^_[y+1],s=T[f>>>24]<<24^T[c>>16&255]<<16^T[u>>8&255]<<8^T[255&d]^_[y+2],l=T[c>>>24]<<24^T[u>>16&255]<<16^T[d>>8&255]<<8^T[255&f]^_[y+3],y+=3,C[t]=F(n^w),C[t+1]=F(l^O),C[t+2]=F(s^I),C[t+3]=F(o^P),w=h,O=p,I=g,P=v,t+=4}return a?i(C.buffer):C.buffer},e.prototype.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},e}();t.default=a},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(22),a=r(0),n=r(11),o=function(){function t(e,t,r){this.observer=e,this.config=r,this.remuxer=t}return t.prototype.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(e){if(!e)return!1;for(var t=(n.default.getID3Data(e,0)||[]).length,r=e.length;t<r;t++)if(i.probe(e,t))return a.logger.log("ADTS sync word found !"),!0;return!1},t.prototype.append=function(t,r,o,s){for(var l=this._audioTrack,u=n.default.getID3Data(t,0)||[],d=n.default.getTimeStamp(u),f=e.isFinite(d)?90*d:9e4*r,c=0,h=f,p=t.length,g=u.length,v=[{pts:h,dts:h,data:u}];g<p-1;)if(i.isHeader(t,g)&&g+5<p){i.initTrackConfig(l,this.observer,t,g,l.manifestCodec);var y=i.appendFrame(l,t,g,f,c);if(!y){a.logger.log("Unable to parse AAC frame");break}g+=y.length,h=y.sample.pts,c++}else n.default.isHeader(t,g)?(u=n.default.getID3Data(t,g),v.push({pts:h,dts:h,data:u}),g+=u.length):g++;this.remuxer.remux(l,{samples:[]},{samples:v,inputTimeScale:9e4},{samples:[]},r,o,s)},t.prototype.destroy=function(){},t}();t.default=o}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(22),a=r(23),n=r(1),o=r(44),s=r(45),l=r(0),u=r(3),d={video:1,audio:2,id3:3,text:4},f=function(){function e(e,t,r,i){this.observer=e,this.config=r,this.typeSupported=i,this.remuxer=t,this.sampleAes=null}return e.prototype.setDecryptData=function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new s.default(this.observer,this.config,e,this.discardEPB):this.sampleAes=null},e.probe=function(t){var r=e._syncOffset(t);return!(r<0)&&(r&&l.logger.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},e._syncOffset=function(e){for(var t=Math.min(1e3,e.length-564),r=0;r<t;){if(71===e[r]&&71===e[r+188]&&71===e[r+376])return r;r++}return-1},e.createTrack=function(e,t){return{container:"video"===e||"audio"===e?"video/mp2t":void 0,type:e,id:d[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:"video"===e?0:void 0,isAAC:"audio"===e||void 0,duration:"audio"===e?t:void 0}},e.prototype.resetInitSegment=function(t,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=e.createTrack("video",a),this._audioTrack=e.createTrack("audio",a),this._id3Track=e.createTrack("id3",a),this._txtTrack=e.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a},e.prototype.resetTimeStamp=function(){},e.prototype.append=function(t,r,i,a){var o,s,d,f,c,h=t.length,p=!1;this.contiguous=i;var g=this.pmtParsed,v=this._avcTrack,y=this._audioTrack,m=this._id3Track,E=v.pid,_=y.pid,T=m.pid,S=this._pmtId,b=v.pesData,A=y.pesData,R=m.pesData,D=this._parsePAT,L=this._parsePMT,w=this._parsePES,O=this._parseAVCPES.bind(this),I=this._parseAACPES.bind(this),P=this._parseMPEGPES.bind(this),k=this._parseID3PES.bind(this),C=e._syncOffset(t);for(h-=(h+C)%188,o=C;o<h;o+=188)if(71===t[o]){if(s=!!(64&t[o+1]),d=((31&t[o+1])<<8)+t[o+2],(48&t[o+3])>>4>1){if((f=o+5+t[o+4])===o+188)continue}else f=o+4;switch(d){case E:s&&(b&&(c=w(b))&&void 0!==c.pts&&O(c,!1),b={data:[],size:0}),b&&(b.data.push(t.subarray(f,o+188)),b.size+=o+188-f);break;case _:s&&(A&&(c=w(A))&&void 0!==c.pts&&(y.isAAC?I(c):P(c)),A={data:[],size:0}),A&&(A.data.push(t.subarray(f,o+188)),A.size+=o+188-f);break;case T:s&&(R&&(c=w(R))&&void 0!==c.pts&&k(c),R={data:[],size:0}),R&&(R.data.push(t.subarray(f,o+188)),R.size+=o+188-f);break;case 0:s&&(f+=t[f]+1),S=this._pmtId=D(t,f);break;case S:s&&(f+=t[f]+1);var F=L(t,f,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);(E=F.avc)>0&&(v.pid=E),(_=F.audio)>0&&(y.pid=_,y.isAAC=F.isAAC),(T=F.id3)>0&&(m.pid=T),p&&!g&&(l.logger.log("reparse from beginning"),p=!1,o=C-188),g=this.pmtParsed=!0;break;case 17:case 8191:break;default:p=!0}}else this.observer.trigger(n.default.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});b&&(c=w(b))&&void 0!==c.pts?(O(c,!0),v.pesData=null):v.pesData=b,A&&(c=w(A))&&void 0!==c.pts?(y.isAAC?I(c):P(c),y.pesData=null):(A&&A.size&&l.logger.log("last AAC PES packet truncated,might overlap between fragments"),y.pesData=A),R&&(c=w(R))&&void 0!==c.pts?(k(c),m.pesData=null):m.pesData=R,null==this.sampleAes?this.remuxer.remux(y,v,m,this._txtTrack,r,i,a):this.decryptAndRemux(y,v,m,this._txtTrack,r,i,a)},e.prototype.decryptAndRemux=function(e,t,r,i,a,n,o){if(e.samples&&e.isAAC){var s=this;this.sampleAes.decryptAacSamples(e.samples,0,function(){s.decryptAndRemuxAvc(e,t,r,i,a,n,o)})}else this.decryptAndRemuxAvc(e,t,r,i,a,n,o)},e.prototype.decryptAndRemuxAvc=function(e,t,r,i,a,n,o){if(t.samples){var s=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,function(){s.remuxer.remux(e,t,r,i,a,n,o)})}else this.remuxer.remux(e,t,r,i,a,n,o)},e.prototype.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},e.prototype._parsePAT=function(e,t){return(31&e[t+10])<<8|e[t+11]},e.prototype._parsePMT=function(e,t,r,i){var a,n,o={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<a;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!i){l.logger.log("unkown stream type:"+e[t]);break}case 15:-1===o.audio&&(o.audio=n);break;case 21:-1===o.id3&&(o.id3=n);break;case 219:if(!i){l.logger.log("unkown stream type:"+e[t]);break}case 27:-1===o.avc&&(o.avc=n);break;case 3:case 4:r?-1===o.audio&&(o.audio=n,o.isAAC=!1):l.logger.log("MPEG audio found, not supported in this browser for now");break;case 36:l.logger.warn("HEVC stream type found, not supported for now");break;default:l.logger.log("unkown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return o},e.prototype._parsePES=function(e){var t,r,i,a,n,o,s,u,d=0,f=e.data;if(!e||0===e.size)return null;for(;f[0].length<19&&f.length>1;){var c=new Uint8Array(f[0].length+f[1].length);c.set(f[0]),c.set(f[1],f[0].length),f[0]=c,f.splice(1,1)}if(1===((t=f[0])[0]<<16)+(t[1]<<8)+t[2]){if((i=(t[4]<<8)+t[5])&&i>e.size-6)return null;192&(r=t[7])&&((o=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2)>4294967295&&(o-=8589934592),64&r?((s=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2)>4294967295&&(s-=8589934592),o-s>54e5&&(l.logger.warn(Math.round((o-s)/9e4)+"s delta between PTS and DTS, align them"),o=s)):s=o),u=(a=t[8])+9,e.size-=u,n=new Uint8Array(e.size);for(var h=0,p=f.length;h<p;h++){var g=(t=f[h]).byteLength;if(u){if(u>g){u-=g;continue}t=t.subarray(u),g-=u,u=0}n.set(t,d),d+=g}return i&&(i-=a+3),{data:n,pts:o,dts:s,len:i}}return null},e.prototype.pushAccesUnit=function(e,t){if(e.units.length&&e.frame){var r=t.samples,i=r.length;!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(i||this.contiguous)?(e.id=i,r.push(e)):t.dropped++}e.debug.length&&l.logger.log(e.pts+"/"+e.dts+":"+e.debug)},e.prototype._parseAVCPES=function(e,t){var r,i,a,n=this,s=this._avcTrack,l=this._parseAVCNALu(e.data),u=this.avcSample,d=!1,f=this.pushAccesUnit.bind(this),c=function(e,t,r,i){return{key:e,pts:t,dts:r,units:[],debug:i}};e.data=null,u&&l.length&&!s.audFound&&(f(u,s),u=this.avcSample=c(!1,e.pts,e.dts,"")),l.forEach(function(t){switch(t.type){case 1:i=!0,u||(u=n.avcSample=c(!0,e.pts,e.dts,"")),u.frame=!0;var l=t.data;if(d&&l.length>4){var h=new o.default(l).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(u.key=!0)}break;case 5:i=!0,u||(u=n.avcSample=c(!0,e.pts,e.dts,"")),u.key=!0,u.frame=!0;break;case 6:i=!0,(r=new o.default(n.discardEPB(t.data))).readUByte();for(var p=0,g=0,v=!1,y=0;!v&&r.bytesAvailable>1;){p=0;do{p+=y=r.readUByte()}while(255===y);g=0;do{g+=y=r.readUByte()}while(255===y);if(4===p&&0!==r.bytesAvailable){if(v=!0,181===r.readUByte())if(49===r.readUShort())if(1195456820===r.readUInt())if(3===r.readUByte()){var m=r.readUByte(),E=31&m,_=[m,r.readUByte()];for(a=0;a<E;a++)_.push(r.readUByte()),_.push(r.readUByte()),_.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:e.pts,bytes:_})}}else if(g<r.bytesAvailable)for(a=0;a<g;a++)r.readUByte()}break;case 7:if(i=!0,d=!0,!s.sps){var T=(r=new o.default(t.data)).readSPS();s.width=T.width,s.height=T.height,s.pixelRatio=T.pixelRatio,s.sps=[t.data],s.duration=n._duration;var S=t.data.subarray(1,4),b="avc1.";for(a=0;a<3;a++){var A=S[a].toString(16);A.length<2&&(A="0"+A),b+=A}s.codec=b}break;case 8:i=!0,s.pps||(s.pps=[t.data]);break;case 9:i=!1,s.audFound=!0,u&&f(u,s),u=n.avcSample=c(!1,e.pts,e.dts,"");break;case 12:i=!1;break;default:i=!1,u&&(u.debug+="unknown NAL "+t.type+" ")}u&&i&&u.units.push(t)}),t&&u&&(f(u,s),this.avcSample=null)},e.prototype._insertSampleInOrder=function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var i=r-1;i>=0;i--)if(t.pts<e[i].pts){e.splice(i,0,t);break}}else e.push(t)},e.prototype._getLastNalUnit=function(){var e,t=this.avcSample;if(!t||0===t.units.length){var r=this._avcTrack.samples;t=r[r.length-1]}if(t){var i=t.units;e=i[i.length-1]}return e},e.prototype._parseAVCNALu=function(e){var t,r,i,a,n=0,o=e.byteLength,s=this._avcTrack,l=s.naluState||0,u=l,d=[],f=-1;for(-1===l&&(f=0,a=31&e[0],l=0,n=1);n<o;)if(t=e[n++],l)if(1!==l)if(t)if(1===t){var c,h;if(f>=0)i={data:e.subarray(f,n-l-1),type:a},d.push(i);else if(c=this._getLastNalUnit())if(u&&n<=4-u&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-u)),(r=n-l-1)>0)(h=new Uint8Array(c.data.byteLength+r)).set(c.data,0),h.set(e.subarray(0,r),c.data.byteLength),c.data=h;n<o?(f=n,a=31&e[n],l=0):l=-1}else l=0;else l=3;else l=t?0:2;else l=t?0:1;(f>=0&&l>=0&&(i={data:e.subarray(f,o),type:a,state:l},d.push(i)),0===d.length)&&((c=this._getLastNalUnit())&&((h=new Uint8Array(c.data.byteLength+e.byteLength)).set(c.data,0),h.set(e,c.data.byteLength),c.data=h));return s.naluState=l,d},e.prototype.discardEPB=function(e){for(var t,r,i=e.byteLength,a=[],n=1;n<i-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(a.push(n+2),n+=2):n++;if(0===a.length)return e;t=i-a.length,r=new Uint8Array(t);var o=0;for(n=0;n<t;o++,n++)o===a[0]&&(o++,a.shift()),r[n]=e[o];return r},e.prototype._parseAACPES=function(e){var t,r,a,o,s,d=this._audioTrack,f=e.data,c=e.pts,h=this.aacOverFlow,p=this.aacLastPTS;if(h){var g=new Uint8Array(h.byteLength+f.byteLength);g.set(h,0),g.set(f,h.byteLength),f=g}for(a=0,s=f.length;a<s-1&&!i.isHeader(f,a);a++);if(a){var v=void 0,y=void 0;if(a<s-1?(v="AAC PES did not start with ADTS header,offset:"+a,y=!1):(v="no ADTS header found in AAC PES",y=!0),l.logger.warn("parsing error:"+v),this.observer.trigger(n.default.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.FRAG_PARSING_ERROR,fatal:y,reason:v}),y)return}if(i.initTrackConfig(d,this.observer,f,a,this.audioCodec),r=0,t=i.getFrameDuration(d.samplerate),h&&p){var m=p+t;Math.abs(m-c)>1&&(l.logger.log("AAC: align PTS for overlapping frames by "+Math.round((m-c)/90)),c=m)}for(;a<s;)if(i.isHeader(f,a)&&a+5<s){var E=i.appendFrame(d,f,a,c,r);if(!E)break;a+=E.length,o=E.sample.pts,r++}else a++;h=a<s?f.subarray(a,s):null,this.aacOverFlow=h,this.aacLastPTS=o},e.prototype._parseMPEGPES=function(e){for(var t=e.data,r=t.length,i=0,n=0,o=e.pts;n<r;)if(a.default.isHeader(t,n)){var s=a.default.appendFrame(this._audioTrack,t,n,o,i);if(!s)break;n+=s.length,i++}else n++},e.prototype._parseID3PES=function(e){this._id3Track.samples.push(e)},e}();t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=function(){function e(e){this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}return e.prototype.loadWord=function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),a=Math.min(4,t);if(0===a)throw new Error("no bytes available");i.set(e.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},e.prototype.skipBits=function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)},e.prototype.readBits=function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&i.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),(t=e-t)>0&&this.bitsAvailable?r<<t|this.readBits(t):r},e.prototype.skipLZ=function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()},e.prototype.skipUEG=function(){this.skipBits(1+this.skipLZ())},e.prototype.skipEG=function(){this.skipBits(1+this.skipLZ())},e.prototype.readUEG=function(){var e=this.skipLZ();return this.readBits(e+1)-1},e.prototype.readEG=function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)},e.prototype.readBoolean=function(){return 1===this.readBits(1)},e.prototype.readUByte=function(){return this.readBits(8)},e.prototype.readUShort=function(){return this.readBits(16)},e.prototype.readUInt=function(){return this.readBits(32)},e.prototype.skipScalingList=function(e){var t,r=8,i=8;for(t=0;t<e;t++)0!==i&&(i=(r+this.readEG()+256)%256),r=0===i?r:i},e.prototype.readSPS=function(){var e,t,r,i,a,n,o,s=0,l=0,u=0,d=0,f=this.readUByte.bind(this),c=this.readBits.bind(this),h=this.readUEG.bind(this),p=this.readBoolean.bind(this),g=this.skipBits.bind(this),v=this.skipEG.bind(this),y=this.skipUEG.bind(this),m=this.skipScalingList.bind(this);if(f(),e=f(),c(5),g(3),f(),y(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var E=h();if(3===E&&g(1),y(),y(),g(1),p())for(n=3!==E?8:12,o=0;o<n;o++)p()&&m(o<6?16:64)}y();var _=h();if(0===_)h();else if(1===_)for(g(1),v(),v(),t=h(),o=0;o<t;o++)v();y(),g(1),r=h(),i=h(),0===(a=c(1))&&g(1),g(1),p()&&(s=h(),l=h(),u=h(),d=h());var T=[1,1];if(p()&&p())switch(f()){case 1:T=[1,1];break;case 2:T=[12,11];break;case 3:T=[10,11];break;case 4:T=[16,11];break;case 5:T=[40,33];break;case 6:T=[24,11];break;case 7:T=[20,11];break;case 8:T=[32,11];break;case 9:T=[80,33];break;case 10:T=[18,11];break;case 11:T=[15,11];break;case 12:T=[64,33];break;case 13:T=[160,99];break;case 14:T=[4,3];break;case 15:T=[3,2];break;case 16:T=[2,1];break;case 255:T=[f()<<8|f(),f()<<8|f()]}return{width:Math.ceil(16*(r+1)-2*s-2*l),height:(2-a)*(i+1)*16-(a?2:4)*(u+d),pixelRatio:T}},e.prototype.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(13),a=function(){function e(e,t,r,a){this.decryptdata=r,this.discardEPB=a,this.decrypter=new i.default(e,t,{removePKCS7Padding:!1})}return e.prototype.decryptBuffer=function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)},e.prototype.decryptAacSample=function(e,t,r,i){var a=e[t].unit,n=a.subarray(16,a.length-a.length%16),o=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),s=this;this.decryptBuffer(o,function(n){n=new Uint8Array(n),a.set(n,16),i||s.decryptAacSamples(e,t+1,r)})},e.prototype.decryptAacSamples=function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,i),!i)return}}},e.prototype.getAvcEncryptedData=function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),i=0,a=32;a<=e.length-16;a+=160,i+=16)r.set(e.subarray(a,a+16),i);return r},e.prototype.getAvcDecryptedUnit=function(e,t){t=new Uint8Array(t);for(var r=0,i=32;i<=e.length-16;i+=160,r+=16)e.set(t.subarray(r,r+16),i);return e},e.prototype.decryptAvcSample=function(e,t,r,i,a,n){var o=this.discardEPB(a.data),s=this.getAvcEncryptedData(o),l=this;this.decryptBuffer(s.buffer,function(s){a.data=l.getAvcDecryptedUnit(o,s),n||l.decryptAvcSamples(e,t,r+1,i)})},e.prototype.decryptAvcSamples=function(e,t,r,i){for(;;t++,r=0){if(t>=e.length)return void i();for(var a=e[t].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var o=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,i,n,o),!o)return}}}},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(11),a=r(0),n=r(23),o=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}return e.prototype.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},e.prototype.resetTimeStamp=function(){},e.probe=function(e){var t,r,o=i.default.getID3Data(e,0);if(o&&void 0!==i.default.getTimeStamp(o))for(t=o.length,r=Math.min(e.length-1,t+100);t<r;t++)if(n.default.probe(e,t))return a.logger.log("MPEG Audio sync word found !"),!0;return!1},e.prototype.append=function(e,t,r,a){for(var o=i.default.getID3Data(e,0),s=i.default.getTimeStamp(o),l=s?90*s:9e4*t,u=o.length,d=e.length,f=0,c=0,h=this._audioTrack,p=[{pts:l,dts:l,data:o}];u<d;)if(n.default.isHeader(e,u)){var g=n.default.appendFrame(h,e,u,l,f);if(!g)break;u+=g.length,c=g.sample.pts,f++}else i.default.isHeader(e,u)?(o=i.default.getID3Data(e,u),p.push({pts:c,dts:c,data:o}),u+=o.length):u++;this.remuxer.remux(h,{samples:[]},{samples:p,inputTimeScale:9e4},{samples:[]},t,r,a)},e.prototype.destroy=function(){},e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(48),a=r(49),n=r(1),o=r(3),s=r(0),l=function(){function e(e,t,r,i){this.observer=e,this.config=t,this.typeSupported=r;var a=navigator.userAgent;this.isSafari=i&&i.indexOf("Apple")>-1&&a&&!a.match("CriOS"),this.ISGenerated=!1}return e.prototype.destroy=function(){},e.prototype.resetTimeStamp=function(e){this._initPTS=this._initDTS=e},e.prototype.resetInitSegment=function(){this.ISGenerated=!1},e.prototype.remux=function(e,t,r,i,a,o,l){if(this.ISGenerated||this.generateIS(e,t,a),this.ISGenerated){var u=e.samples.length,d=t.samples.length,f=a,c=a;if(u&&d){var h=(e.samples[0].pts-t.samples[0].pts)/t.inputTimeScale;f+=Math.max(0,h),c+=Math.max(0,-h)}if(u){e.timescale||(s.logger.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,a));var p=this.remuxAudio(e,f,o,l);if(d){var g=void 0;p&&(g=p.endPTS-p.startPTS),t.timescale||(s.logger.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,a)),this.remuxVideo(t,c,o,g,l)}}else if(d){var v=this.remuxVideo(t,c,o,0,l);v&&e.codec&&this.remuxEmptyAudio(e,f,o,v)}}r.samples.length&&this.remuxID3(r,a),i.samples.length&&this.remuxText(i,a),this.observer.trigger(n.default.FRAG_PARSED)},e.prototype.generateIS=function(e,t,r){var i,l,u=this.observer,d=e.samples,f=t.samples,c=this.typeSupported,h="audio/mp4",p={},g={tracks:p},v=void 0===this._initPTS;if(v&&(i=l=1/0),e.config&&d.length&&(e.timescale=e.samplerate,s.logger.log("audio sampling rate : "+e.samplerate),e.isAAC||(c.mpeg?(h="audio/mpeg",e.codec=""):c.mp3&&(e.codec="mp3")),p.audio={container:h,codec:e.codec,initSegment:!e.isAAC&&c.mpeg?new Uint8Array:a.default.initSegment([e]),metadata:{channelCount:e.channelCount}},v&&(i=l=d[0].pts-e.inputTimeScale*r)),t.sps&&t.pps&&f.length){var y=t.inputTimeScale;t.timescale=y,p.video={container:"video/mp4",codec:t.codec,initSegment:a.default.initSegment([t]),metadata:{width:t.width,height:t.height}},v&&(i=Math.min(i,f[0].pts-y*r),l=Math.min(l,f[0].dts-y*r),this.observer.trigger(n.default.INIT_PTS_FOUND,{initPTS:i}))}Object.keys(p).length?(u.trigger(n.default.FRAG_PARSING_INIT_SEGMENT,g),this.ISGenerated=!0,v&&(this._initPTS=i,this._initDTS=l)):u.trigger(n.default.ERROR,{type:o.ErrorTypes.MEDIA_ERROR,details:o.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},e.prototype.remuxVideo=function(e,t,r,i,l){var u,d,f,c,h,p,g,v=8,y=e.timescale,m=e.samples,E=[],_=m.length,T=this._PTSNormalize,S=this._initPTS,b=this.nextAvcDts,A=this.isSafari;if(0!==_){A&&(r|=m.length&&b&&(l&&Math.abs(t-b/y)<.1||Math.abs(m[0].pts-b-S)<y/5)),r||(b=t*y),m.forEach(function(e){e.pts=T(e.pts-S,b),e.dts=T(e.dts-S,b)}),m.sort(function(e,t){var r=e.dts-t.dts,i=e.pts-t.pts;return r||i||e.id-t.id});var R=m.reduce(function(e,t){return Math.max(Math.min(e,t.pts-t.dts),-18e3)},0);if(R<0){s.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(R/90)+" ms to overcome this issue");for(var D=0;D<m.length;D++)m[D].dts+=R}var L=m[0];h=Math.max(L.dts,0),c=Math.max(L.pts,0);var w=Math.round((h-b)/90);r&&w&&(w>1?s.logger.log("AVC:"+w+" ms hole between fragments detected,filling it"):w<-1&&s.logger.log("AVC:"+-w+" ms overlapping between fragments detected"),h=b,m[0].dts=h,c=Math.max(c-w,b),m[0].pts=c,s.logger.log("Video/PTS/DTS adjusted: "+Math.round(c/90)+"/"+Math.round(h/90)+",delta:"+w+" ms")),L=m[m.length-1],g=Math.max(L.dts,0),p=Math.max(L.pts,0,g),A&&(u=Math.round((g-h)/(m.length-1)));var O=0,I=0;for(D=0;D<_;D++){for(var P=m[D],k=P.units,C=k.length,F=0,x=0;x<C;x++)F+=k[x].data.length;I+=F,O+=C,P.length=F,P.dts=A?h+D*u:Math.max(P.dts,h),P.pts=Math.max(P.pts,P.dts)}var M=I+4*O+8;try{d=new Uint8Array(M)}catch(e){return void this.observer.trigger(n.default.ERROR,{type:o.ErrorTypes.MUX_ERROR,details:o.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:M,reason:"fail allocating video mdat "+M})}var N=new DataView(d.buffer);N.setUint32(0,M),d.set(a.default.types.mdat,4);for(D=0;D<_;D++){var U=m[D],B=U.units,G=0,j=void 0;for(x=0,C=B.length;x<C;x++){var K=B[x],H=K.data,V=K.data.byteLength;N.setUint32(v,V),v+=4,d.set(H,v),v+=V,G+=4+V}if(A)j=Math.max(0,u*Math.round((U.pts-U.dts)/u));else{if(D<_-1)u=m[D+1].dts-U.dts;else{var W=this.config,Y=U.dts-m[D>0?D-1:D].dts;if(W.stretchShortVideoTrack){var q=W.maxBufferHole,X=Math.floor(q*y),z=(i?c+i*y:this.nextAudioPts)-U.pts;z>X?((u=z-Y)<0&&(u=Y),s.logger.log("It is approximately "+z/90+" ms to the next segment; using duration "+u/90+" ms for the last video frame.")):u=Y}else u=Y}j=Math.round(U.pts-U.dts)}E.push({size:G,duration:u,cts:j,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:U.key?2:1,isNonSync:U.key?0:1}})}this.nextAvcDts=g+u;var Q=e.dropped;if(e.len=0,e.nbNalu=0,e.dropped=0,E.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var $=E[0].flags;$.dependsOn=2,$.isNonSync=0}e.samples=E,f=a.default.moof(e.sequenceNumber++,h,e),e.samples=[];var J={data1:f,data2:d,startPTS:c/y,endPTS:(p+u)/y,startDTS:h/y,endDTS:this.nextAvcDts/y,type:"video",hasAudio:!1,hasVideo:!0,nb:E.length,dropped:Q};return this.observer.trigger(n.default.FRAG_PARSING_DATA,J),J}},e.prototype.remuxAudio=function(e,t,r,l){var u,d,f,c,h,p,g,v=e.inputTimeScale,y=e.timescale,m=v/y,E=(e.isAAC?1024:1152)*m,_=this._PTSNormalize,T=this._initPTS,S=!e.isAAC&&this.typeSupported.mpeg,b=e.samples,A=[],R=this.nextAudioPts;if(r|=b.length&&R&&(l&&Math.abs(t-R/v)<.1||Math.abs(b[0].pts-R-T)<20*E),b.forEach(function(e){e.pts=e.dts=_(e.pts-T,t*v)}),0!==(b=b.filter(function(e){return e.pts>=0})).length){if(r||(R=l?t*v:b[0].pts),e.isAAC)for(var D=this.config.maxAudioFramesDrift,L=0,w=R;L<b.length;){var O,I=b[L];O=(U=I.pts)-w;var P=Math.abs(1e3*O/v);if(O<=-D*E)s.logger.warn("Dropping 1 audio frame @ "+(w/v).toFixed(3)+"s due to "+Math.round(P)+" ms overlap."),b.splice(L,1),e.len-=I.unit.length;else if(O>=D*E&&P<1e4&&w){var k=Math.round(O/E);s.logger.warn("Injecting "+k+" audio frame @ "+(w/v).toFixed(3)+"s due to "+Math.round(1e3*O/v)+" ms gap.");for(var C=0;C<k;C++){var F=Math.max(w,0);(f=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(s.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),f=I.unit.subarray()),b.splice(L,0,{unit:f,pts:F,dts:F}),e.len+=f.length,w+=E,L++}I.pts=I.dts=w,w+=E,L++}else Math.abs(O),I.pts=I.dts=w,w+=E,L++}C=0;for(var x=b.length;C<x;C++){var M=b[C],N=M.unit,U=M.pts;if(void 0!==g)d.duration=Math.round((U-g)/m);else{var B=Math.round(1e3*(U-R)/v),G=0;if(r&&e.isAAC&&B){if(B>0&&B<1e4)G=Math.round((U-R)/E),s.logger.log(B+" ms hole between AAC samples detected,filling it"),G>0&&((f=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(f=N.subarray()),e.len+=G*f.length);else if(B<-12){s.logger.log("drop overlapping AAC sample, expected/parsed/delta:"+(R/v).toFixed(3)+"s/"+(U/v).toFixed(3)+"s/"+-B+"ms"),e.len-=N.byteLength;continue}U=R}if(p=U,!(e.len>0))return;var j=S?e.len:e.len+8;u=S?0:8;try{c=new Uint8Array(j)}catch(e){return void this.observer.trigger(n.default.ERROR,{type:o.ErrorTypes.MUX_ERROR,details:o.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:j,reason:"fail allocating audio mdat "+j})}S||(new DataView(c.buffer).setUint32(0,j),c.set(a.default.types.mdat,4));for(L=0;L<G;L++)(f=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(s.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),f=N.subarray()),c.set(f,u),u+=f.byteLength,d={size:f.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},A.push(d)}c.set(N,u);var K=N.byteLength;u+=K,d={size:K,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},A.push(d),g=U}var H=0,V=A.length;if(V>=2&&(H=A[V-2].duration,d.duration=H),V){this.nextAudioPts=R=g+m*H,e.len=0,e.samples=A,h=S?new Uint8Array:a.default.moof(e.sequenceNumber++,p/m,e),e.samples=[];var W=p/v,Y=R/v,q={data1:h,data2:c,startPTS:W,endPTS:Y,startDTS:W,endDTS:Y,type:"audio",hasAudio:!0,hasVideo:!1,nb:V};return this.observer.trigger(n.default.FRAG_PARSING_DATA,q),q}return null}},e.prototype.remuxEmptyAudio=function(e,t,r,a){var n=e.inputTimeScale,o=n/(e.samplerate?e.samplerate:n),l=this.nextAudioPts,u=(void 0!==l?l:a.startDTS*n)+this._initDTS,d=a.endDTS*n+this._initDTS,f=1024*o,c=Math.ceil((d-u)/f),h=i.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(s.logger.warn("remux empty Audio"),h){for(var p=[],g=0;g<c;g++){var v=u+g*f;p.push({unit:h,pts:v,dts:v}),e.len+=h.length}e.samples=p,this.remuxAudio(e,t,r)}else s.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")},e.prototype.remuxID3=function(e){var t,r=e.samples.length,i=e.inputTimeScale,a=this._initPTS,o=this._initDTS;if(r){for(var s=0;s<r;s++)(t=e.samples[s]).pts=(t.pts-a)/i,t.dts=(t.dts-o)/i;this.observer.trigger(n.default.FRAG_PARSING_METADATA,{samples:e.samples})}e.samples=[]},e.prototype.remuxText=function(e){e.samples.sort(function(e,t){return e.pts-t.pts});var t,r=e.samples.length,i=e.inputTimeScale,a=this._initPTS;if(r){for(var o=0;o<r;o++)(t=e.samples[o]).pts=(t.pts-a)/i;this.observer.trigger(n.default.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[]},e.prototype._PTSNormalize=function(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e},e}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.getSilentFrame=function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Math.pow(2,32)-1,a=function(){function e(){}return e.init=function(){var t;for(t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,o,l,o,s),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,a))},e.box=function(e){for(var t,r=Array.prototype.slice.call(arguments,1),i=8,a=r.length,n=a;a--;)i+=r[a].byteLength;for((t=new Uint8Array(i))[0]=i>>24&255,t[1]=i>>16&255,t[2]=i>>8&255,t[3]=255&i,t.set(e,4),a=0,i=8;a<n;a++)t.set(r[a],i),i+=r[a].byteLength;return t},e.hdlr=function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])},e.mdat=function(t){return e.box(e.types.mdat,t)},e.mdhd=function(t,r){r*=t;var a=Math.floor(r/(i+1)),n=Math.floor(r%(i+1));return e.box(e.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,a>>24,a>>16&255,a>>8&255,255&a,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))},e.mdia=function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))},e.mfhd=function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))},e.minf=function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))},e.moof=function(t,r,i){return e.box(e.types.moof,e.mfhd(t),e.traf(i,r))},e.moov=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(i).concat(e.mvex(t)))},e.mvex=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(i))},e.mvhd=function(t,r){r*=t;var a=Math.floor(r/(i+1)),n=Math.floor(r%(i+1)),o=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,a>>24,a>>16&255,a>>8&255,255&a,n>>24,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,o)},e.sdtp=function(t){var r,i,a=t.samples||[],n=new Uint8Array(4+a.length);for(i=0;i<a.length;i++)r=a[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,n)},e.stbl=function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))},e.avc1=function(t){var r,i,a,n=[],o=[];for(r=0;r<t.sps.length;r++)a=(i=t.sps[r]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<t.pps.length;r++)a=(i=t.pps[r]).byteLength,o.push(a>>>8&255),o.push(255&a),o=o.concat(Array.prototype.slice.call(i));var s=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(o))),l=t.width,u=t.height,d=t.pixelRatio[0],f=t.pixelRatio[1];return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),e.box(e.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,f>>24,f>>16&255,f>>8&255,255&f])))},e.esds=function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))},e.mp4a=function(t){var r=t.samplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))},e.mp3=function(t){var r=t.samplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},e.stsd=function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))},e.tkhd=function(t){var r=t.id,a=t.duration*t.timescale,n=t.width,o=t.height,s=Math.floor(a/(i+1)),l=Math.floor(a%(i+1));return e.box(e.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,l>>24,l>>16&255,l>>8&255,255&l,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,o>>8&255,255&o,0,0]))},e.traf=function(t,r){var a=e.sdtp(t),n=t.id,o=Math.floor(r/(i+1)),s=Math.floor(r%(i+1));return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),e.box(e.types.tfdt,new Uint8Array([1,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,s>>24,s>>16&255,s>>8&255,255&s])),e.trun(t,a.length+16+20+8+16+8+8),a)},e.trak=function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))},e.trex=function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},e.trun=function(t,r){var i,a,n,o,s,l,u=t.samples||[],d=u.length,f=12+16*d,c=new Uint8Array(f);for(r+=8+f,c.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<d;i++)n=(a=u[i]).duration,o=a.size,s=a.flags,l=a.cts,c.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,o>>>24&255,o>>>16&255,o>>>8&255,255&o,s.isLeading<<2|s.dependsOn,s.isDependedOn<<6|s.hasRedundancy<<4|s.paddingValue<<1|s.isNonSync,61440&s.degradPrio,15&s.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return e.box(e.types.trun,c)},e.initSegment=function(t){e.types||e.init();var r,i=e.moov(t);return(r=new Uint8Array(e.FTYP.byteLength+i.byteLength)).set(e.FTYP),r.set(i,e.FTYP.byteLength),r},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=function(){function e(e){this.observer=e}return e.prototype.destroy=function(){},e.prototype.resetTimeStamp=function(){},e.prototype.resetInitSegment=function(){},e.prototype.remux=function(e,t,r,a,n,o,s,l){var u=this.observer,d="";e&&(d+="audio"),t&&(d+="video"),u.trigger(i.default.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:d,hasAudio:!!e,hasVideo:!!t,nb:1,dropped:0}),u.trigger(i.default.FRAG_PARSED)},e}();t.default=a},function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function o(e,t,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new function(e,t,r){this.fn=e,this.context=t,this.once=r||!1}(r,i||e,n),s=a?a+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],o]:e._events[s].push(o):(e._events[s]=o,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function l(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),l.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)i.call(e,t)&&r.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},l.prototype.listeners=function(e){var t=a?a+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,o=new Array(n);i<n;i++)o[i]=r[i].fn;return o},l.prototype.listenerCount=function(e){var t=a?a+e:e,r=this._events[t];return r?r.fn?1:r.length:0},l.prototype.emit=function(e,t,r,i,n,o){var s=a?a+e:e;if(!this._events[s])return!1;var l,u,d=this._events[s],f=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),f){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,r),!0;case 4:return d.fn.call(d.context,t,r,i),!0;case 5:return d.fn.call(d.context,t,r,i,n),!0;case 6:return d.fn.call(d.context,t,r,i,n,o),!0}for(u=1,l=new Array(f-1);u<f;u++)l[u-1]=arguments[u];d.fn.apply(d.context,l)}else{var c,h=d.length;for(u=0;u<h;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),f){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,t);break;case 3:d[u].fn.call(d[u].context,t,r);break;case 4:d[u].fn.call(d[u].context,t,r,i);break;default:if(!l)for(c=1,l=new Array(f-1);c<f;c++)l[c-1]=arguments[c];d[u].fn.apply(d[u].context,l)}}return!0},l.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},l.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},l.prototype.removeListener=function(e,t,r,i){var n=a?a+e:e;if(!this._events[n])return this;if(!t)return s(this,n),this;var o=this._events[n];if(o.fn)o.fn!==t||i&&!o.once||r&&o.context!==r||s(this,n);else{for(var l=0,u=[],d=o.length;l<d;l++)(o[l].fn!==t||i&&!o[l].once||r&&o[l].context!==r)&&u.push(o[l]);u.length?this._events[n]=1===u.length?u[0]:u:s(this,n)}return this},l.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&s(this,t)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=a,l.EventEmitter=l,e.exports=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(21),a=r(1),n=r(0),o=r(53);t.default=function(e){var t=new o.EventEmitter;t.trigger=function(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.emit.apply(t,[e,e].concat(r))},t.off=function(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.removeListener.apply(t,[e].concat(r))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",function(a){var o=a.data;switch(o.cmd){case"init":var s=JSON.parse(o.config);e.demuxer=new i.default(t,o.typeSupported,s,o.vendor),n.enableLogs(s.debug),r("init",null);break;case"demux":e.demuxer.push(o.data,o.decryptdata,o.initSegment,o.audioCodec,o.videoCodec,o.timeOffset,o.discontinuity,o.trackSwitch,o.contiguous,o.duration,o.accurateTimeOffset,o.defaultInitPTS)}}),t.on(a.default.FRAG_DECRYPTED,r),t.on(a.default.FRAG_PARSING_INIT_SEGMENT,r),t.on(a.default.FRAG_PARSED,r),t.on(a.default.ERROR,r),t.on(a.default.FRAG_PARSING_METADATA,r),t.on(a.default.FRAG_PARSING_USERDATA,r),t.on(a.default.INIT_PTS_FOUND,r),t.on(a.default.FRAG_PARSING_DATA,function(t,r){var i=[],a={event:t,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),e.postMessage(a,i)})}},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function a(e){return"object"==typeof e&&null!==e}function n(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,o,s,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var d=new Error('Uncaught, unspecified "error" event. ('+t+")");throw d.context=t,d}if(n(r=this._events[e]))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),r.apply(this,s)}else if(a(r))for(s=Array.prototype.slice.call(arguments,1),o=(u=r.slice()).length,l=0;l<o;l++)u[l].apply(this,s);return!0},r.prototype.addListener=function(e,t){var o;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(o=n(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var r=!1;function a(){this.removeListener(e,a),r||(r=!0,t.apply(this,arguments))}return a.listener=t,this.on(e,a),this},r.prototype.removeListener=function(e,t){var r,n,o,s;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(r=this._events[e]).length,n=-1,r===t||i(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(r)){for(s=o;s-- >0;)if(r[s]===t||r[s].listener&&r[s].listener===t){n=s;break}if(n<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),a=r(3),n=r(1),o=r(0),s=function(){function e(e,t,r,i){this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i,this.stallReported=!1}return e.prototype.poll=function(e,t){var r=this.config,a=this.media,n=a.currentTime,s=window.performance.now();if(n!==e)return this.stallReported&&(o.logger.warn("playback not stuck anymore @"+n+", after "+Math.round(s-this.stalled)+"ms"),this.stallReported=!1),this.stalled=null,void(this.nudgeRetry=0);if(!(a.ended||!a.buffered.length||a.readyState>2||a.seeking&&i.BufferHelper.isBuffered(a,n))){var l=s-this.stalled,u=i.BufferHelper.bufferInfo(a,n,r.maxBufferHole);this.stalled?(l>=1e3&&this._reportStall(u.len),this._tryFixBufferStall(u,l)):this.stalled=s}},e.prototype._tryFixBufferStall=function(e,t){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);n&&this._trySkipBufferHole(n),e.len>.5&&t>1e3*r.highBufferWatchdogPeriod&&(this.stalled=null,this._tryNudgeBuffer())},e.prototype._reportStall=function(e){var t=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,o.logger.warn("Playback stalling at @"+r.currentTime+" due to low buffer"),t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:e}))},e.prototype._trySkipBufferHole=function(e){for(var t=this.hls,r=this.media,i=r.currentTime,s=0,l=0;l<r.buffered.length;l++){var u=r.buffered.start(l);if(i>=s&&i<u)return r.currentTime=Math.max(u,r.currentTime+.1),o.logger.warn("skipping hole, adjusting currentTime from "+i+" to "+r.currentTime),this.stalled=null,void t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+i+" to "+r.currentTime,frag:e});s=r.buffered.end(l)}},e.prototype._tryNudgeBuffer=function(){var e=this.config,t=this.hls,r=this.media,i=r.currentTime,s=(this.nudgeRetry||0)+1;if(this.nudgeRetry=s,s<e.nudgeMaxRetry){var l=i+s*e.nudgeOffset;o.logger.log("adjust currentTime from "+i+" to "+l),r.currentTime=l,t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else o.logger.error("still stuck in high buffer @"+i+" after "+e.nudgeMaxRetry+", raise fatal error"),t.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})},e}();t.default=s},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(1),o=r(4),s=r(0),l=r(3),u=r(19),d=r(8),f=(window.performance,function(e){function t(t){var r=e.call(this,t,n.default.MANIFEST_LOADED,n.default.LEVEL_LOADED,n.default.AUDIO_TRACK_SWITCHED,n.default.FRAG_LOADED,n.default.ERROR)||this;return r.canload=!1,r.currentLevelIndex=null,r.manualLevelIndex=-1,r.timer=null,a=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),r}return i(t,e),t.prototype.onHandlerDestroying=function(){this.clearTimer(),this.manualLevelIndex=-1},t.prototype.clearTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},t.prototype.startLoad=function(){var e=this._levels;this.canload=!0,this.levelRetryCount=0,e&&e.forEach(function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)}),null!==this.timer&&this.loadLevel()},t.prototype.stopLoad=function(){this.canload=!1},t.prototype.onManifestLoaded=function(e){var t,r=[],i=[],o={},f=null,c=!1,h=!1;if(e.levels.forEach(function(e){var t=e.attrs;e.loadError=0,e.fragmentError=!1,c=c||!!e.videoCodec,h=h||!!e.audioCodec,a&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(f=o[e.bitrate])?f.url.push(e.url):(e.url=[e.url],e.urlId=0,o[e.bitrate]=e,r.push(e)),t&&(t.AUDIO&&(h=!0,d.addGroupId(f||e,"audio",t.AUDIO)),t.SUBTITLES&&d.addGroupId(f||e,"text",t.SUBTITLES))}),c&&h&&(r=r.filter(function(e){return!!e.videoCodec})),r=r.filter(function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||u.isCodecSupportedInMp4(t,"audio"))&&(!r||u.isCodecSupportedInMp4(r,"video"))}),e.audioTracks&&(i=e.audioTracks.filter(function(e){return!e.audioCodec||u.isCodecSupportedInMp4(e.audioCodec,"audio")})).forEach(function(e,t){e.id=t}),r.length>0){t=r[0].bitrate,r.sort(function(e,t){return e.bitrate-t.bitrate}),this._levels=r;for(var p=0;p<r.length;p++)if(r[p].bitrate===t){this._firstLevel=p,s.logger.log("manifest loaded,"+r.length+" level(s) found, first bitrate:"+t);break}this.hls.trigger(n.default.MANIFEST_PARSED,{levels:r,audioTracks:i,firstLevel:this._firstLevel,stats:e.stats,audio:h,video:c,altAudio:i.some(function(e){return!!e.url})})}else this.hls.trigger(n.default.ERROR,{type:l.ErrorTypes.MEDIA_ERROR,details:l.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},Object.defineProperty(t.prototype,"levels",{get:function(){return this._levels},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"level",{get:function(){return this.currentLevelIndex},set:function(e){var t=this._levels;t&&(e=Math.min(e,t.length-1),this.currentLevelIndex===e&&t[e].details||this.setLevelInternal(e))},enumerable:!0,configurable:!0}),t.prototype.setLevelInternal=function(e){var t=this._levels,r=this.hls;if(e>=0&&e<t.length){if(this.clearTimer(),this.currentLevelIndex!==e){s.logger.log("switching to level "+e),this.currentLevelIndex=e;var i=t[e];i.level=e,r.trigger(n.default.LEVEL_SWITCHING,i)}var a=t[e],o=a.details;if(!o||o.live){var u=a.urlId;r.trigger(n.default.LEVEL_LOADING,{url:a.url[u],level:e,id:u})}}else r.trigger(n.default.ERROR,{type:l.ErrorTypes.OTHER_ERROR,details:l.ErrorDetails.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})},Object.defineProperty(t.prototype,"manualLevel",{get:function(){return this.manualLevelIndex},set:function(e){this.manualLevelIndex=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstLevel",{get:function(){return this._firstLevel},set:function(e){this._firstLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startLevel",{get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){this._startLevel=e},enumerable:!0,configurable:!0}),t.prototype.onError=function(e){if(e.fatal)e.type===l.ErrorTypes.NETWORK_ERROR&&this.clearTimer();else{var t,r=!1,i=!1;switch(e.details){case l.ErrorDetails.FRAG_LOAD_ERROR:case l.ErrorDetails.FRAG_LOAD_TIMEOUT:case l.ErrorDetails.KEY_LOAD_ERROR:case l.ErrorDetails.KEY_LOAD_TIMEOUT:t=e.frag.level,i=!0;break;case l.ErrorDetails.LEVEL_LOAD_ERROR:case l.ErrorDetails.LEVEL_LOAD_TIMEOUT:t=e.context.level,r=!0;break;case l.ErrorDetails.REMUX_ALLOC_ERROR:t=e.level,r=!0}void 0!==t&&this.recoverLevel(e,t,r,i)}},t.prototype.recoverLevel=function(e,t,r,i){var a,n,o,l=this,u=this.hls.config,d=e.details,f=this._levels[t];if(f.loadError++,f.fragmentError=i,r){if(!(this.levelRetryCount+1<=u.levelLoadingMaxRetry))return s.logger.error("level controller, cannot recover from "+d+" error"),this.currentLevelIndex=null,this.clearTimer(),void(e.fatal=!0);n=Math.min(Math.pow(2,this.levelRetryCount)*u.levelLoadingRetryDelay,u.levelLoadingMaxRetryTimeout),this.timer=setTimeout(function(){return l.loadLevel()},n),e.levelRetry=!0,this.levelRetryCount++,s.logger.warn("level controller, "+d+", retry in "+n+" ms, current retry count is "+this.levelRetryCount)}(r||i)&&((a=f.url.length)>1&&f.loadError<a?(f.urlId=(f.urlId+1)%a,f.details=void 0,s.logger.warn("level controller, "+d+" for level "+t+": switching to redundant URL-id "+f.urlId)):-1===this.manualLevelIndex?(o=0===t?this._levels.length-1:t-1,s.logger.warn("level controller, "+d+": switch to "+o),this.hls.nextAutoLevel=this.currentLevelIndex=o):i&&(s.logger.warn("level controller, "+d+": reload a fragment"),this.currentLevelIndex=null))},t.prototype.onFragLoaded=function(e){var t=e.frag;if(void 0!==t&&"main"===t.type){var r=this._levels[t.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}},t.prototype.onLevelLoaded=function(e){var t=this,r=e.level,i=e.details;if(r===this.currentLevelIndex){var a=this._levels[r];if(a.fragmentError||(a.loadError=0,this.levelRetryCount=0),i.live){var n=d.computeReloadInterval(a.details,i,e.stats.trequest);s.logger.log("live playlist, reload in "+Math.round(n)+" ms"),this.timer=setTimeout(function(){return t.loadLevel()},n)}else this.clearTimer()}},t.prototype.onAudioTrackSwitched=function(e){var t=this.hls.audioTracks[e.id].groupId,r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,a=0;a<r.audioGroupIds.length;a++)if(r.audioGroupIds[a]===t){i=a;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}},t.prototype.loadLevel=function(){if(s.logger.debug("call to loadLevel"),null!==this.currentLevelIndex&&this.canload){var e=this._levels[this.currentLevelIndex];if("object"==typeof e&&e.url.length>0){var t=this.currentLevelIndex,r=e.urlId,i=e.url[r];s.logger.log("Attempt loading level index "+t+" with URL-id "+r),this.hls.trigger(n.default.LEVEL_LOADING,{url:i,level:t,id:r})}}},Object.defineProperty(t.prototype,"nextLoadLevel",{get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=e)},enumerable:!0,configurable:!0}),t}(o.default));t.default=f},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(11),s=r(29),l=function(e){function t(t){var r=e.call(this,t,a.default.MEDIA_ATTACHED,a.default.MEDIA_DETACHING,a.default.FRAG_PARSING_METADATA)||this;return r.id3Track=void 0,r.media=void 0,r}return i(t,e),t.prototype.destroy=function(){n.default.prototype.destroy.call(this)},t.prototype.onMediaAttached=function(e){this.media=e.media,this.media},t.prototype.onMediaDetaching=function(){s.clearCurrentCues(this.id3Track),this.id3Track=void 0,this.media=void 0},t.prototype.getID3Track=function(e){for(var t=0;t<e.length;t++){var r=e[t];if("metadata"===r.kind&&"id3"===r.label)return s.sendAddTrackEvent(r,this.media),r}return this.media.addTextTrack("metadata","id3")},t.prototype.onFragParsingMetadata=function(e){var t=e.frag,r=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=o.default.getID3Frames(r[a].data);if(n){var s=r[a].pts,l=a<r.length-1?r[a+1].pts:t.endPTS;s===l&&(l+=1e-4);for(var u=0;u<n.length;u++){var d=n[u];if(!o.default.isTimeStampFrame(d)){var f=new i(s,l,"");f.value=d,this.id3Track.addCue(f)}}}}},t}(n.default);t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(14);t.isSupported=function(){var e=i.getMediaSource(),t=window.SourceBuffer||window.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),a=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!r&&!!a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(59),a=r(62),n=r(63),o=r(64),s=r(65),l=r(66),u=r(67),d=r(68),f=r(70),c=r(74),h=r(75),p=r(76),g=r(77);t.hlsDefaultConfig={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,liveBackBufferLength:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:s.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:i.default,bufferController:a.default,capLevelController:n.default,fpsController:o.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,requestMediaKeySystemAccessFunc:g.requestMediaKeySystemAccess},t.hlsDefaultConfig.subtitleStreamController=h.SubtitleStreamController,t.hlsDefaultConfig.subtitleTrackController=c.default,t.hlsDefaultConfig.timelineController=f.default,t.hlsDefaultConfig.cueHandler=d,t.hlsDefaultConfig.enableCEA708Captions=!0,t.hlsDefaultConfig.enableWebVTT=!0,t.hlsDefaultConfig.captionsTextTrack1Label="English",t.hlsDefaultConfig.captionsTextTrack1LanguageCode="en",t.hlsDefaultConfig.captionsTextTrack2Label="Spanish",t.hlsDefaultConfig.captionsTextTrack2LanguageCode="es",t.hlsDefaultConfig.audioStreamController=u.default,t.hlsDefaultConfig.audioTrackController=l.default,t.hlsDefaultConfig.emeController=p.default},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(5),s=r(3),l=r(0),u=r(60),d=window.performance,f=function(t){function r(e){var r=t.call(this,e,a.default.FRAG_LOADING,a.default.FRAG_LOADED,a.default.FRAG_BUFFERED,a.default.ERROR)||this;return r.lastLoadedFragLevel=0,r._nextAutoLevel=-1,r.hls=e,r.timer=null,r._bwEstimator=null,r.onCheck=r._abandonRulesCheck.bind(r),r}return i(r,t),r.prototype.destroy=function(){this.clearTimer(),n.default.prototype.destroy.call(this)},r.prototype.onFragLoading=function(e){var t=e.frag;if("main"===t.type&&(this.timer||(this.fragCurrent=t,this.timer=setInterval(this.onCheck,100)),!this._bwEstimator)){var r=this.hls,i=r.config,a=t.level,n=void 0,o=void 0;r.levels[a].details.live?(n=i.abrEwmaFastLive,o=i.abrEwmaSlowLive):(n=i.abrEwmaFastVoD,o=i.abrEwmaSlowVoD),this._bwEstimator=new u.default(r,o,n,i.abrEwmaDefaultEstimate)}},r.prototype._abandonRulesCheck=function(){var e=this.hls,t=e.media,r=this.fragCurrent;if(r){var i=r.loader,n=e.minAutoLevel;if(!i||i.stats&&i.stats.aborted)return l.logger.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var s=i.stats;if(t&&s&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var u=d.now()-s.trequest,f=Math.abs(t.playbackRate);if(u>500*r.duration/f){var c=e.levels,h=Math.max(1,s.bw?s.bw/8:1e3*s.loaded/u),p=c[r.level],g=p.realBitrate?Math.max(p.realBitrate,p.bitrate):p.bitrate,v=s.total?s.total:Math.max(s.loaded,Math.round(r.duration*g/8)),y=t.currentTime,m=(v-s.loaded)/h,E=(o.BufferHelper.bufferInfo(t,y,e.config.maxBufferHole).end-y)/f;if(E<2*r.duration/f&&m>E){var _=void 0,T=void 0;for(T=r.level-1;T>n;T--){var S=c[T].realBitrate?Math.max(c[T].realBitrate,c[T].bitrate):c[T].bitrate;if((_=r.duration*S/(6.4*h))<E)break}_<m&&(l.logger.warn("loading too slow, abort fragment loading and switch to level "+T+":fragLoadedDelay["+T+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+_.toFixed(1)+"<"+m.toFixed(1)+":"+E.toFixed(1)),e.nextLoadLevel=T,this._bwEstimator.sample(u,s.loaded),i.abort(),this.clearTimer(),e.trigger(a.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:s}))}}}}},r.prototype.onFragLoaded=function(t){var r=t.frag;if("main"===r.type&&e.isFinite(r.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=r.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var i=this.hls.levels[r.level],a=(i.loaded?i.loaded.bytes:0)+t.stats.loaded,n=(i.loaded?i.loaded.duration:0)+t.frag.duration;i.loaded={bytes:a,duration:n},i.realBitrate=Math.round(8*a/n)}if(t.frag.bitrateTest){var o=t.stats;o.tparsed=o.tbuffered=o.tload,this.onFragBuffered(t)}}},r.prototype.onFragBuffered=function(t){var r=t.stats,i=t.frag;if(!0!==r.aborted&&"main"===i.type&&e.isFinite(i.sn)&&(!i.bitrateTest||r.tload===r.tbuffered)){var a=r.tparsed-r.trequest;l.logger.log("latency/loading/parsing/append/kbps:"+Math.round(r.tfirst-r.trequest)+"/"+Math.round(r.tload-r.tfirst)+"/"+Math.round(r.tparsed-r.tload)+"/"+Math.round(r.tbuffered-r.tparsed)+"/"+Math.round(8*r.loaded/(r.tbuffered-r.trequest))),this._bwEstimator.sample(a,r.loaded),r.bwEstimate=this._bwEstimator.getEstimate(),i.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}},r.prototype.onError=function(e){switch(e.details){case s.ErrorDetails.FRAG_LOAD_ERROR:case s.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer()}},r.prototype.clearTimer=function(){clearInterval(this.timer),this.timer=null},Object.defineProperty(r.prototype,"nextAutoLevel",{get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"_nextABRAutoLevel",{get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,i=e.config,a=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,u=this.fragCurrent?this.fragCurrent.duration:0,d=n?n.currentTime:0,f=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(o.BufferHelper.bufferInfo(n,d,i.maxBufferHole).end-d)/f,p=this._findBestLevel(s,u,c,a,t,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(p>=0)return p;l.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g=u?Math.min(u,i.maxStarvationDelay):i.maxStarvationDelay,v=i.abrBandWidthFactor,y=i.abrBandWidthUpFactor;if(0===h){var m=this.bitrateTestDelay;if(m)g=(u?Math.min(u,i.maxLoadingDelay):i.maxLoadingDelay)-m,l.logger.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),v=y=1}return p=this._findBestLevel(s,u,c,a,t,h+g,v,y,r),Math.max(p,0)},enumerable:!0,configurable:!0}),r.prototype._findBestLevel=function(e,t,r,i,a,n,o,s,u){for(var d=a;d>=i;d--){var f=u[d];if(f){var c=f.details,h=c?c.totalduration/c.fragments.length:t,p=!!c&&c.live,g=void 0;g=d<=e?o*r:s*r;var v=u[d].realBitrate?Math.max(u[d].realBitrate,u[d].bitrate):u[d].bitrate,y=v*h/g;if(l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(g)+"/"+v+"/"+h+"/"+n+"/"+y),g>v&&(!y||p&&!this.bitrateTestDelay||y<n))return d}}return-1},r}(n.default);t.default=f}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(61),a=function(){function e(e,t,r,a){this.hls=e,this.defaultEstimate_=a,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new i.default(t),this.fast_=new i.default(r)}return e.prototype.sample=function(e,t){var r=8e3*t/(e=Math.max(e,this.minDelayMs_)),i=e/1e3;this.fast_.sample(i,r),this.slow_.sample(i,r)},e.prototype.canEstimate=function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_},e.prototype.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},e.prototype.destroy=function(){},e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}return e.prototype.sample=function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e},e.prototype.getTotalWeight=function(){return this.totalWeight_},e.prototype.getEstimate=function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_},e}();t.default=i},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(0),s=r(3),l=r(14).getMediaSource(),u=function(t){function r(e){var r=t.call(this,e,a.default.MEDIA_ATTACHING,a.default.MEDIA_DETACHING,a.default.MANIFEST_PARSED,a.default.BUFFER_RESET,a.default.BUFFER_APPENDING,a.default.BUFFER_CODECS,a.default.BUFFER_EOS,a.default.BUFFER_FLUSHING,a.default.LEVEL_PTS_UPDATED,a.default.LEVEL_UPDATED)||this;return r._msDuration=null,r._levelDuration=null,r._levelTargetDuration=10,r._live=null,r._objectUrl=null,r.bufferCodecEventsExpected=0,r.onsbue=r.onSBUpdateEnd.bind(r),r.onsbe=r.onSBUpdateError.bind(r),r.pendingTracks={},r.tracks={},r}return i(r,t),r.prototype.destroy=function(){n.default.prototype.destroy.call(this)},r.prototype.onLevelPtsUpdated=function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(Math.abs(i.timestampOffset-e.start)>.1){var a=i.updating;try{i.abort()}catch(e){o.logger.warn("can not abort audio buffer: "+e)}a?this.audioTimestampOffset=e.start:(o.logger.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+e.start),i.timestampOffset=e.start)}}},r.prototype.onManifestParsed=function(e){this.bufferCodecEventsExpected=e.altAudio?2:1,o.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},r.prototype.onMediaAttaching=function(e){var t=this.media=e.media;if(t){var r=this.mediaSource=new l;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),t.src=window.URL.createObjectURL(r),this._objectUrl=t.src}},r.prototype.onMediaDetaching=function(){o.logger.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){o.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this.onmso),e.removeEventListener("sourceended",this.onmse),e.removeEventListener("sourceclose",this.onmsc),this.media&&(window.URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):o.logger.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(a.default.MEDIA_DETACHED)},r.prototype.onMediaSourceOpen=function(){o.logger.log("media source opened"),this.hls.trigger(a.default.MEDIA_ATTACHED,{media:this.media});var e=this.mediaSource;e&&e.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()},r.prototype.checkPendingTracks=function(){var e=this.bufferCodecEventsExpected,t=this.pendingTracks,r=Object.keys(t).length;(r&&!e||2===r)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},r.prototype.onMediaSourceClose=function(){o.logger.log("media source closed")},r.prototype.onMediaSourceEnded=function(){o.logger.log("media source ended")},r.prototype.onSBUpdateEnd=function(){if(this.audioTimestampOffset){var e=this.sourceBuffer.audio;o.logger.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+this.audioTimestampOffset),e.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var t=this.parent,r=this.segments.reduce(function(e,r){return r.parent===t?e+1:e},0),i={},n=this.sourceBuffer;for(var s in n)i[s]=n[s].buffered;this.hls.trigger(a.default.BUFFER_APPENDED,{parent:t,pending:r,timeRanges:i}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration(),0===r&&this.flushLiveBackBuffer()},r.prototype.onSBUpdateError=function(e){o.logger.error("sourceBuffer error:",e),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})},r.prototype.onBufferReset=function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},r.prototype.onBufferCodecs=function(e){var t=this;if(!Object.keys(this.sourceBuffer).length){Object.keys(e).forEach(function(r){t.pendingTracks[r]=e[r]});var r=this.mediaSource;this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),r&&"open"===r.readyState&&this.checkPendingTracks()}},r.prototype.createSourceBuffers=function(e){var t=this.sourceBuffer,r=this.mediaSource;for(var i in e)if(!t[i]){var n=e[i],l=n.levelCodec||n.codec,u=n.container+";codecs="+l;o.logger.log("creating sourceBuffer("+u+")");try{var d=t[i]=r.addSourceBuffer(u);d.addEventListener("updateend",this.onsbue),d.addEventListener("error",this.onsbe),this.tracks[i]={codec:l,container:n.container},n.buffer=d}catch(e){o.logger.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:u})}}this.hls.trigger(a.default.BUFFER_CREATED,{tracks:e})},r.prototype.onBufferAppending=function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())},r.prototype.onBufferAppendFail=function(e){o.logger.error("sourceBuffer error:",e.event),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})},r.prototype.onBufferEos=function(e){var t=this.sourceBuffer,r=e.type;for(var i in t)r&&i!==r||t[i].ended||(t[i].ended=!0,o.logger.log(i+" sourceBuffer now EOS"));this.checkEos()},r.prototype.checkEos=function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var i=e[r];if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}o.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){o.logger.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1},r.prototype.onBufferFlushing=function(e){this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}),this.flushBufferCounter=0,this.doFlush()},r.prototype.flushLiveBackBuffer=function(){if(this._live){var e=this.hls.config.liveBackBufferLength;if(isFinite(e)&&!(e<0))for(var t=this.media.currentTime,r=this.sourceBuffer,i=Object.keys(r),a=t-Math.max(e,this._levelTargetDuration),n=i.length-1;n>=0;n--){var o=i[n],s=r[o].buffered;s.length>0&&a>s.start(0)&&this.removeBufferRange(o,r[o],0,a)}}},r.prototype.onLevelUpdated=function(e){var t=e.details;t.fragments.length>0&&(this._levelDuration=t.totalduration+t.fragments[0].start,this._levelTargetDuration=t.averagetargetduration||t.targetduration||10,this._live=t.live,this.updateMediaElementDuration())},r.prototype.updateMediaElementDuration=function(){var t,r=this.hls.config;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var i in this.sourceBuffer)if(!0===this.sourceBuffer[i].updating)return;t=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===r.liveDurationInfinity?(o.logger.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>t||!e.isFinite(t))&&(o.logger.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}},r.prototype.doFlush=function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var i in r)t+=r[i].buffered.length}catch(e){o.logger.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(a.default.BUFFER_FLUSHED)}},r.prototype.doAppending=function(){var e=this.hls,t=this.segments,r=this.sourceBuffer;if(Object.keys(r).length){if(this.media.error)return this.segments=[],void o.logger.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(t&&t.length){var i=t.shift();try{var n=r[i.type];n?n.updating?t.unshift(i):(n.ended=!1,this.parent=i.parent,n.appendBuffer(i.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(r){o.logger.error("error while trying to append buffer:"+r.message),t.unshift(i);var l={type:s.ErrorTypes.MEDIA_ERROR,parent:i.parent};22!==r.code?(this.appendError?this.appendError++:this.appendError=1,l.details=s.ErrorDetails.BUFFER_APPEND_ERROR,this.appendError>e.config.appendErrorMaxRetry?(o.logger.log("fail "+e.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),this.segments=[],l.fatal=!0,e.trigger(a.default.ERROR,l)):(l.fatal=!1,e.trigger(a.default.ERROR,l))):(this.segments=[],l.details=s.ErrorDetails.BUFFER_FULL_ERROR,l.fatal=!1,e.trigger(a.default.ERROR,l))}}}},r.prototype.flushBuffer=function(e,t,r){var i,a=this.sourceBuffer;if(Object.keys(a).length){if(o.logger.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+e+"/"+t),this.flushBufferCounter<this.appended){for(var n in a)if(!r||n===r){if((i=a[n]).ended=!1,i.updating)return o.logger.warn("cannot flush, sb updating in progress"),!1;if(this.removeBufferRange(n,i,e,t))return this.flushBufferCounter++,!1}}else o.logger.warn("abort flushing too many retries");o.logger.log("buffer flushed")}return!0},r.prototype.removeBufferRange=function(e,t,r,i){try{for(var a=0;a<t.buffered.length;a++){var n=t.buffered.start(a),s=t.buffered.end(a),l=Math.max(n,r),u=Math.min(s,i);if(Math.min(u,s)-l>.5)return o.logger.log("sb remove "+e+" ["+l+","+u+"], of ["+n+","+s+"], pos:"+this.media.currentTime),t.remove(l,u),!0}}catch(e){o.logger.warn("removeBufferRange failed",e)}return!1},r}(n.default);t.default=u}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=function(t){function r(r){var i=t.call(this,r,a.default.FPS_DROP_LEVEL_CAPPING,a.default.MEDIA_ATTACHING,a.default.MANIFEST_PARSED,a.default.BUFFER_CODECS,a.default.MEDIA_DETACHING)||this;return i.autoLevelCapping=e.POSITIVE_INFINITY,i.firstLevel=null,i.levels=[],i.media=null,i.restrictedLevels=[],i.timer=null,i}return i(r,t),r.prototype.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this._stopCapping())},r.prototype.onFpsDropLevelCapping=function(e){r.isLevelAllowed(e.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)},r.prototype.onMediaAttaching=function(e){this.media=e.media instanceof window.HTMLVideoElement?e.media:null},r.prototype.onManifestParsed=function(e){var t=this.hls;this.restrictedLevels=[],this.levels=e.levels,this.firstLevel=e.firstLevel,t.config.capLevelToPlayerSize&&e.video&&this._startCapping()},r.prototype.onBufferCodecs=function(e){this.hls.config.capLevelToPlayerSize&&e.video&&this._startCapping()},r.prototype.onLevelsUpdated=function(e){this.levels=e.levels},r.prototype.onMediaDetaching=function(){this._stopCapping()},r.prototype.detectPlayerSize=function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}},r.prototype.getMaxLevel=function(e){var t=this;if(!this.levels)return-1;var i=this.levels.filter(function(i,a){return r.isLevelAllowed(a,t.restrictedLevels)&&a<=e});return r.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)},r.prototype._startCapping=function(){this.timer||(this.autoLevelCapping=e.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},r.prototype._stopCapping=function(){this.restrictedLevels=[],this.firstLevel=null,this.autoLevelCapping=e.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer),this.timer=null)},Object.defineProperty(r.prototype,"mediaWidth",{get:function(){var e,t=this.media;return t&&(e=t.width||t.clientWidth||t.offsetWidth,e*=r.contentScaleFactor),e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"mediaHeight",{get:function(){var e,t=this.media;return t&&(e=t.height||t.clientHeight||t.offsetHeight,e*=r.contentScaleFactor),e},enumerable:!0,configurable:!0}),Object.defineProperty(r,"contentScaleFactor",{get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e},enumerable:!0,configurable:!0}),r.isLevelAllowed=function(e,t){return void 0===t&&(t=[]),-1===t.indexOf(e)},r.getMaxLevelByMediaSize=function(e,t,r){if(!e||e&&!e.length)return-1;for(var i=function(e,t){return!t||(e.width!==t.width||e.height!==t.height)},a=e.length-1,n=0;n<e.length;n+=1){var o=e[n];if((o.width>=t||o.height>=r)&&i(o,e[n+1])){a=n;break}}return a},r}(r(4).default);t.default=n}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(0),s=window.performance,l=function(e){function t(t){return e.call(this,t,a.default.MEDIA_ATTACHING)||this}return i(t,e),t.prototype.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},t.prototype.onMediaAttaching=function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof window.HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))},t.prototype.checkFPS=function(e,t,r){var i=s.now();if(t){if(this.lastTime){var n=i-this.lastTime,l=r-this.lastDroppedFrames,u=t-this.lastDecodedFrames,d=1e3*l/n,f=this.hls;if(f.trigger(a.default.FPS_DROP,{currentDropped:l,currentDecoded:u,totalDroppedFrames:r}),d>0&&l>f.config.fpsDroppedMonitoringThreshold*u){var c=f.currentLevel;o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(-1===f.autoLevelCapping||f.autoLevelCapping>=c)&&(c-=1,f.trigger(a.default.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:f.currentLevel}),f.autoLevelCapping=c,f.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}},t.prototype.checkFPSInterval=function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)},t}(n.default);t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=window.performance,n=window.XMLHttpRequest,o=function(){function e(e){e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}return e.prototype.destroy=function(){this.abort(),this.loader=null},e.prototype.abort=function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},e.prototype.load=function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:a.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()},e.prototype.loadInternal=function(){var e,t=this.context;e=this.loader=new n;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(e,t.url)}catch(r){e.open("GET",t.url,!0),i(e,t.url)}e.readyState||e.open("GET",t.url,!0)}catch(r){return void this.callbacks.onError({code:e.status,text:r.message},t,e)}t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()},e.prototype.readystatechange=function(e){var t=e.currentTarget,r=t.readyState,n=this.stats,o=this.context,s=this.config;if(!n.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===n.tfirst&&(n.tfirst=Math.max(a.now(),n.trequest)),4===r){var l=t.status;if(l>=200&&l<300){n.tload=Math.max(n.tfirst,a.now());var u=void 0,d=void 0;d="arraybuffer"===o.responseType?(u=t.response).byteLength:(u=t.responseText).length,n.loaded=n.total=d;var f={url:t.responseURL,data:u};this.callbacks.onSuccess(f,n,o,t)}else n.retry>=s.maxRetry||l>=400&&l<499?(i.logger.error(l+" while loading "+o.url),this.callbacks.onError({code:l,text:t.statusText},o,t)):(i.logger.warn(l+" while loading "+o.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,s.maxRetryDelay),n.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),s.timeout)},e.prototype.loadtimeout=function(){i.logger.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},e.prototype.loadprogress=function(e){var t=e.currentTarget,r=this.stats;r.loaded=e.loaded,e.lengthComputable&&(r.total=e.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,t)},e}();t.default=o},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(28),o=r(0),s=r(3),l=function(e){function t(t){var r=e.call(this,t,a.default.MANIFEST_LOADING,a.default.MANIFEST_PARSED,a.default.AUDIO_TRACK_LOADED,a.default.AUDIO_TRACK_SWITCHED,a.default.LEVEL_LOADED,a.default.ERROR)||this;return r._trackId=-1,r._selectDefaultTrack=!0,r.tracks=[],r.trackIdBlacklist=Object.create(null),r.audioGroupId=null,r}return i(t,e),t.prototype.onManifestLoading=function(){this.tracks=[],this._trackId=-1,this._selectDefaultTrack=!0},t.prototype.onManifestParsed=function(e){var t=this.tracks=e.audioTracks||[];this.hls.trigger(a.default.AUDIO_TRACKS_UPDATED,{audioTracks:t})},t.prototype.onAudioTrackLoaded=function(e){if(e.id>=this.tracks.length)o.logger.warn("Invalid audio track id:",e.id);else{if(o.logger.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.hasInterval()){var t=1e3*e.details.targetduration;this.setInterval(t)}!e.details.live&&this.hasInterval()&&this.clearInterval()}},t.prototype.onAudioTrackSwitched=function(e){var t=this.tracks[e.id].groupId;t&&this.audioGroupId!==t&&(this.audioGroupId=t)},t.prototype.onLevelLoaded=function(e){var t=this.hls.levels[e.level];if(t.audioGroupIds){var r=t.audioGroupIds[t.urlId];this.audioGroupId!==r&&(this.audioGroupId=r,this._selectInitialAudioTrack())}},t.prototype.onError=function(e){e.type===s.ErrorTypes.NETWORK_ERROR&&(e.fatal&&this.clearInterval(),e.details===s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR&&(o.logger.warn("Network failure on audio-track id:",e.context.id),this._handleLoadError()))},Object.defineProperty(t.prototype,"audioTracks",{get:function(){return this.tracks},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"audioTrack",{get:function(){return this._trackId},set:function(e){this._setAudioTrack(e),this._selectDefaultTrack=!1},enumerable:!0,configurable:!0}),t.prototype._setAudioTrack=function(e){if(this._trackId===e&&this.tracks[this._trackId].details)o.logger.debug("Same id as current audio-track passed, and track details available -> no-op");else if(e<0||e>=this.tracks.length)o.logger.warn("Invalid id passed to audio-track controller");else{var t=this.tracks[e];o.logger.log("Now switching to audio-track index "+e),this.clearInterval(),this._trackId=e;var r=t.url,i=t.type,n=t.id;this.hls.trigger(a.default.AUDIO_TRACK_SWITCHING,{id:n,type:i,url:r}),this._loadTrackDetailsIfNeeded(t)}},t.prototype.doTick=function(){this._updateTrack(this._trackId)},t.prototype._selectInitialAudioTrack=function(){var e=this,t=this.tracks;if(t.length){var r=this.tracks[this._trackId],i=null;if(r&&(i=r.name),this._selectDefaultTrack){var n=t.filter(function(e){return e.default});n.length?t=n:o.logger.warn("No default audio tracks defined")}var l=!1,u=function(){t.forEach(function(t){l||e.audioGroupId&&t.groupId!==e.audioGroupId||i&&i!==t.name||(e._setAudioTrack(t.id),l=!0)})};u(),l||(i=null,u()),l||(o.logger.error("No track found for running audio group-ID: "+this.audioGroupId),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))}},t.prototype._needsTrackLoading=function(e){var t=e.details,r=e.url;return!(t&&!t.live)&&!!r},t.prototype._loadTrackDetailsIfNeeded=function(e){if(this._needsTrackLoading(e)){var t=e.url,r=e.id;o.logger.log("loading audio-track playlist for id: "+r),this.hls.trigger(a.default.AUDIO_TRACK_LOADING,{url:t,id:r})}},t.prototype._updateTrack=function(e){if(!(e<0||e>=this.tracks.length)){this.clearInterval(),this._trackId=e,o.logger.log("trying to update audio-track "+e);var t=this.tracks[e];this._loadTrackDetailsIfNeeded(t)}},t.prototype._handleLoadError=function(){this.trackIdBlacklist[this._trackId]=!0;var e=this._trackId,t=this.tracks[e],r=t.name,i=t.language,a=t.groupId;o.logger.warn("Loading failed on audio track id: "+e+", group-id: "+a+', name/language: "'+r+'" / "'+i+'"');for(var n=e,s=0;s<this.tracks.length;s++){if(!this.trackIdBlacklist[s])if(this.tracks[s].name===r){n=s;break}}n!==e?(o.logger.log("Attempting audio-track fallback id:",n,"group-id:",this.tracks[n].groupId),this._setAudioTrack(n)):o.logger.warn('No fallback audio-track found for name/language: "'+r+'" / "'+i+'"')},t}(n.default);t.default=l},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(10),n=r(5),o=r(20),s=r(1),l=r(8),u=r(25),d=r(3),f=r(0),c=r(26),h=r(7),p=r(12),g=r(15),v=window.performance,y=function(t){function r(e,r){var i=t.call(this,e,s.default.MEDIA_ATTACHED,s.default.MEDIA_DETACHING,s.default.AUDIO_TRACKS_UPDATED,s.default.AUDIO_TRACK_SWITCHING,s.default.AUDIO_TRACK_LOADED,s.default.KEY_LOADED,s.default.FRAG_LOADED,s.default.FRAG_PARSING_INIT_SEGMENT,s.default.FRAG_PARSING_DATA,s.default.FRAG_PARSED,s.default.ERROR,s.default.BUFFER_RESET,s.default.BUFFER_CREATED,s.default.BUFFER_APPENDED,s.default.BUFFER_FLUSHED,s.default.INIT_PTS_FOUND)||this;return i.fragmentTracker=r,i.config=e.config,i.audioCodecSwap=!1,i._state=g.State.STOPPED,i.initPTS=[],i.waitingFragment=null,i.videoTrackCC=null,i}return i(r,t),r.prototype.onInitPtsFound=function(e){var t=e.id,r=e.frag.cc,i=e.initPTS;"main"===t&&(this.initPTS[r]=i,this.videoTrackCC=r,f.logger.log("InitPTS for cc: "+r+" found from video track: "+i),this.state===g.State.WAITING_INIT_PTS&&this.tick())},r.prototype.startLoad=function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.setInterval(100),this.fragLoadError=0,t>0&&-1===e?(f.logger.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=g.State.IDLE):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=g.State.STARTING),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=g.State.STOPPED},Object.defineProperty(r.prototype,"state",{get:function(){return this._state},set:function(e){if(this.state!==e){var t=this.state;this._state=e,f.logger.log("audio stream:"+t+"->"+e)}},enumerable:!0,configurable:!0}),r.prototype.doTick=function(){var t,r,i,o=this.hls,l=o.config;switch(this.state){case g.State.ERROR:case g.State.PAUSED:case g.State.BUFFER_FLUSHING:break;case g.State.STARTING:this.state=g.State.WAITING_TRACK,this.loadedmetadata=!1;break;case g.State.IDLE:var u=this.tracks;if(!u)break;if(!this.media&&(this.startFragRequested||!l.startFragPrefetch))break;if(this.loadedmetadata)t=this.media.currentTime;else if(void 0===(t=this.nextLoadPosition))break;var d=this.mediaBuffer?this.mediaBuffer:this.media,p=this.videoBuffer?this.videoBuffer:this.media,y=n.BufferHelper.bufferInfo(d,t,l.maxBufferHole),m=n.BufferHelper.bufferInfo(p,t,l.maxBufferHole),E=y.len,_=y.end,T=this.fragPrevious,S=Math.min(l.maxBufferLength,l.maxMaxBufferLength),b=Math.max(S,m.len),A=this.audioSwitch,R=this.trackId;if((E<b||A)&&R<u.length){if(void 0===(i=u[R].details)){this.state=g.State.WAITING_TRACK;break}if(!A&&this._streamEnded(y,i))return this.hls.trigger(s.default.BUFFER_EOS,{type:"audio"}),void(this.state=g.State.ENDED);var D=i.fragments,L=D.length,w=D[0].start,O=D[L-1].start+D[L-1].duration,I=void 0;if(A)if(i.live&&!i.PTSKnown)f.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),_=0;else if(_=t,i.PTSKnown&&t<w){if(!(y.end>w||y.nextStart))return;f.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=w+.05}if(i.initSegment&&!i.initSegment.data)I=i.initSegment;else if(_<=w){if(I=D[0],null!==this.videoTrackCC&&I.cc!==this.videoTrackCC&&(I=c.findFragWithCC(D,this.videoTrackCC)),i.live&&I.loadIdx&&I.loadIdx===this.fragLoadIdx){var P=y.nextStart?y.nextStart:w;return f.logger.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(P+.05)),void(this.media.currentTime=P+.05)}}else{var k=void 0,C=l.maxFragLookUpTolerance,F=T?D[T.sn-D[0].sn+1]:void 0,x=function(e){var t=Math.min(C,e.duration);return e.start+e.duration-t<=_?1:e.start-t>_&&e.start?-1:0};_<O?(_>O-C&&(C=0),k=F&&!x(F)?F:a.default.search(D,x)):k=D[L-1],k&&(I=k,w=k.start,T&&I.level===T.level&&I.sn===T.sn&&(I.sn<i.endSN?(I=D[I.sn+1-i.startSN],f.logger.log("SN just loaded, load next one: "+I.sn)):I=null))}I&&(I.encrypted?(f.logger.log("Loading key for "+I.sn+" of ["+i.startSN+" ,"+i.endSN+"],track "+R),this.state=g.State.KEY_LOADING,o.trigger(s.default.KEY_LOADING,{frag:I})):(f.logger.log("Loading "+I.sn+", cc: "+I.cc+" of ["+i.startSN+" ,"+i.endSN+"],track "+R+", currentTime:"+t+",bufferEnd:"+_.toFixed(3)),this.fragCurrent=I,(A||this.fragmentTracker.getState(I)===h.FragmentState.NOT_LOADED)&&(this.startFragRequested=!0,e.isFinite(I.sn)&&(this.nextLoadPosition=I.start+I.duration),o.trigger(s.default.FRAG_LOADING,{frag:I}),this.state=g.State.FRAG_LOADING)))}break;case g.State.WAITING_TRACK:(r=this.tracks[this.trackId])&&r.details&&(this.state=g.State.IDLE);break;case g.State.FRAG_LOADING_WAITING_RETRY:var M=v.now(),N=this.retryDate,U=(d=this.media)&&d.seeking;(!N||M>=N||U)&&(f.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=g.State.IDLE);break;case g.State.WAITING_INIT_PTS:var B=this.videoTrackCC;if(void 0===this.initPTS[B])break;var G=this.waitingFragment;if(G){var j=G.frag.cc;B!==j?(r=this.tracks[this.trackId]).details&&r.details.live&&(f.logger.warn("Waiting fragment CC ("+j+") does not match video track CC ("+B+")"),this.waitingFragment=null,this.state=g.State.IDLE):(this.state=g.State.FRAG_LOADING,this.onFragLoaded(this.waitingFragment),this.waitingFragment=null)}else this.state=g.State.IDLE;break;case g.State.STOPPED:case g.State.FRAG_LOADING:case g.State.PARSING:case g.State.PARSED:case g.State.ENDED:}},r.prototype.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)},r.prototype.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(f.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1,this.stopLoad()},r.prototype.onAudioTracksUpdated=function(e){f.logger.log("audio tracks updated"),this.tracks=e.audioTracks},r.prototype.onAudioTrackSwitching=function(e){var t=!!e.url;this.trackId=e.id,this.fragCurrent=null,this.state=g.State.PAUSED,this.waitingFragment=null,t?this.setInterval(100):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),t&&(this.audioSwitch=!0,this.state=g.State.IDLE),this.tick()},r.prototype.onAudioTrackLoaded=function(t){var r=t.details,i=t.id,a=this.tracks[i],n=r.totalduration,o=0;if(f.logger.log("track "+i+" loaded ["+r.startSN+","+r.endSN+"],duration:"+n),r.live){var s=a.details;s&&r.fragments.length>0?(l.mergeDetails(s,r),o=r.fragments[0].start,r.PTSKnown?f.logger.log("live audio playlist sliding:"+o.toFixed(3)):f.logger.log("live audio playlist - outdated PTS, unknown sliding")):(r.PTSKnown=!1,f.logger.log("live audio playlist - first load, unknown sliding"))}else r.PTSKnown=!1;if(a.details=r,!this.startFragRequested){if(-1===this.startPosition){var u=r.startTimeOffset;e.isFinite(u)?(f.logger.log("start time offset found in playlist, adjust startPosition to "+u),this.startPosition=u):this.startPosition=0}this.nextLoadPosition=this.startPosition}this.state===g.State.WAITING_TRACK&&(this.state=g.State.IDLE),this.tick()},r.prototype.onKeyLoaded=function(){this.state===g.State.KEY_LOADING&&(this.state=g.State.IDLE,this.tick())},r.prototype.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag;if(this.state===g.State.FRAG_LOADING&&t&&"audio"===r.type&&r.level===t.level&&r.sn===t.sn){var i=this.tracks[this.trackId],a=i.details,n=a.totalduration,l=t.level,u=t.sn,d=t.cc,c=this.config.defaultAudioCodec||i.audioCodec||"mp4a.40.2",h=this.stats=e.stats;if("initSegment"===u)this.state=g.State.IDLE,h.tparsed=h.tbuffered=v.now(),a.initSegment.data=e.payload,this.hls.trigger(s.default.FRAG_BUFFERED,{stats:h,frag:t,id:"audio"}),this.tick();else{this.state=g.State.PARSING,this.appended=!1,this.demuxer||(this.demuxer=new o.default(this.hls,"audio"));var p=this.initPTS[d],y=a.initSegment?a.initSegment.data:[];if(a.initSegment||void 0!==p){this.pendingBuffering=!0,f.logger.log("Demuxing "+u+" of ["+a.startSN+" ,"+a.endSN+"],track "+l);this.demuxer.push(e.payload,y,c,null,t,n,!1,p)}else f.logger.log("unknown video PTS for continuity counter "+d+", waiting for video PTS before demuxing audio frag "+u+" of ["+a.startSN+" ,"+a.endSN+"],track "+l),this.waitingFragment=e,this.state=g.State.WAITING_INIT_PTS}}this.fragLoadError=0},r.prototype.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===g.State.PARSING){var i=e.tracks,a=void 0;if(i.video&&delete i.video,a=i.audio){a.levelCodec=a.codec,a.id=e.id,this.hls.trigger(s.default.BUFFER_CODECS,i),f.logger.log("audio track:audio,container:"+a.container+",codecs[level/parsed]=["+a.levelCodec+"/"+a.codec+"]");var n=a.initSegment;if(n){var o={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[o]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(s.default.BUFFER_APPENDING,o))}this.tick()}}},r.prototype.onFragParsingData=function(t){var r=this,i=this.fragCurrent,a=t.frag;if(i&&"audio"===t.id&&"audio"===t.type&&a.sn===i.sn&&a.level===i.level&&this.state===g.State.PARSING){var n=this.trackId,o=this.tracks[n],u=this.hls;e.isFinite(t.endPTS)||(t.endPTS=t.startPTS+i.duration,t.endDTS=t.startDTS+i.duration),i.addElementaryStream(p.default.ElementaryStreamTypes.AUDIO),f.logger.log("parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb),l.updateFragPTSDTS(o.details,i,t.startPTS,t.endPTS);var c=this.audioSwitch,h=this.media,v=!1;if(c&&h)if(h.readyState){var y=h.currentTime;f.logger.log("switching audio track : currentTime:"+y),y>=t.startPTS&&(f.logger.log("switching audio track : flushing all audio"),this.state=g.State.BUFFER_FLUSHING,u.trigger(s.default.BUFFER_FLUSHING,{startOffset:0,endOffset:e.POSITIVE_INFINITY,type:"audio"}),v=!0,this.audioSwitch=!1,u.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:n}))}else this.audioSwitch=!1,u.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:n});var m=this.pendingData;if(!m)return f.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),void u.trigger(s.default.ERROR,{type:d.ErrorTypes.MEDIA_ERROR,details:null,fatal:!0});this.audioSwitch||([t.data1,t.data2].forEach(function(e){e&&e.length&&m.push({type:t.type,data:e,parent:"audio",content:"data"})}),!v&&m.length&&(m.forEach(function(e){r.state===g.State.PARSING&&(r.pendingBuffering=!0,r.hls.trigger(s.default.BUFFER_APPENDING,e))}),this.pendingData=[],this.appended=!0)),this.tick()}},r.prototype.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===g.State.PARSING&&(this.stats.tparsed=v.now(),this.state=g.State.PARSED,this._checkAppendedParsed())},r.prototype.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},r.prototype.onBufferCreated=function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0),e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer)},r.prototype.onBufferAppended=function(e){if("audio"===e.parent){var t=this.state;t!==g.State.PARSING&&t!==g.State.PARSED||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},r.prototype._checkAppendedParsed=function(){if(!(this.state!==g.State.PARSED||this.appended&&this.pendingBuffering)){var e=this.fragCurrent,t=this.stats,r=this.hls;if(e){this.fragPrevious=e,t.tbuffered=v.now(),r.trigger(s.default.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var i=this.mediaBuffer?this.mediaBuffer:this.media;f.logger.log("audio buffered : "+u.default.toString(i.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=g.State.IDLE}this.tick()}},r.prototype.onError=function(t){var r=t.frag;if(!r||"audio"===r.type)switch(t.details){case d.ErrorDetails.FRAG_LOAD_ERROR:case d.ErrorDetails.FRAG_LOAD_TIMEOUT:var i=t.frag;if(i&&"audio"!==i.type)break;if(!t.fatal){var a=this.fragLoadError;if(a?a++:a=1,a<=(l=this.config).fragLoadingMaxRetry){this.fragLoadError=a;var o=Math.min(Math.pow(2,a-1)*l.fragLoadingRetryDelay,l.fragLoadingMaxRetryTimeout);f.logger.warn("AudioStreamController: frag loading failed, retry in "+o+" ms"),this.retryDate=v.now()+o,this.state=g.State.FRAG_LOADING_WAITING_RETRY}else f.logger.error("AudioStreamController: "+t.details+" reaches max retry, redispatch as fatal ..."),t.fatal=!0,this.state=g.State.ERROR}break;case d.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case d.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case d.ErrorDetails.KEY_LOAD_ERROR:case d.ErrorDetails.KEY_LOAD_TIMEOUT:this.state!==g.State.ERROR&&(this.state=t.fatal?g.State.ERROR:g.State.IDLE,f.logger.warn("AudioStreamController: "+t.details+" while loading frag, now switching to "+this.state+" state ..."));break;case d.ErrorDetails.BUFFER_FULL_ERROR:if("audio"===t.parent&&(this.state===g.State.PARSING||this.state===g.State.PARSED)){var l,u=this.mediaBuffer,c=this.media.currentTime;if(u&&n.BufferHelper.isBuffered(u,c)&&n.BufferHelper.isBuffered(u,c+.5))(l=this.config).maxMaxBufferLength>=l.maxBufferLength&&(l.maxMaxBufferLength/=2,f.logger.warn("AudioStreamController: reduce max buffer length to "+l.maxMaxBufferLength+"s")),this.state=g.State.IDLE;else f.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=g.State.BUFFER_FLUSHING,this.hls.trigger(s.default.BUFFER_FLUSHING,{startOffset:0,endOffset:e.POSITIVE_INFINITY,type:"audio"})}}},r.prototype.onBufferFlushed=function(){var e=this,t=this.pendingData;t&&t.length?(f.logger.log("AudioStreamController: appending pending audio data after buffer flushed"),t.forEach(function(t){e.hls.trigger(s.default.BUFFER_APPENDING,t)}),this.appended=!0,this.pendingData=[],this.state=g.State.PARSED):(this.state=g.State.IDLE,this.fragPrevious=null,this.tick())},r}(g.default);t.default=y}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(30);t.newCue=function(e,t,r,a){for(var n,o,s,l,u,d=window.VTTCue||window.TextTrackCue,f=0;f<a.rows.length;f++)if(s=!0,l=0,u="",!(n=a.rows[f]).isEmpty()){for(var c=0;c<n.chars.length;c++)n.chars[c].uchar.match(/\s/)&&s?l++:(u+=n.chars[c].uchar,s=!1);n.cueStartTime=t,t===r&&(r+=1e-4),o=new d(t,r,i.fixLineBreaks(u.trim())),l>=16?l--:l++,navigator.userAgent.match(/Firefox\//)?o.line=f+1:o.line=f>7?f-2:f+1,o.align="left",o.position=Math.max(0,Math.min(100,l/32*100+(navigator.userAgent.match(/Firefox\//)?50:0))),e.addCue(o)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var e="auto",t={"":!0,lr:!0,rl:!0},r={start:!0,middle:!0,end:!0,left:!0,right:!0};function i(e){return"string"==typeof e&&(!!r[e.toLowerCase()]&&e.toLowerCase())}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}function n(r,n,o){var s=this,l=function(){if("undefined"!=typeof navigator)return/MSIE\s8\.0/.test(navigator.userAgent)}(),u={};l?s=document.createElement("custom"):u.enumerable=!0,s.hasBeenReset=!1;var d="",f=!1,c=r,h=n,p=o,g=null,v="",y=!0,m="auto",E="start",_=50,T="middle",S=50,b="middle";if(Object.defineProperty(s,"id",a({},u,{get:function(){return d},set:function(e){d=""+e}})),Object.defineProperty(s,"pauseOnExit",a({},u,{get:function(){return f},set:function(e){f=!!e}})),Object.defineProperty(s,"startTime",a({},u,{get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");c=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"endTime",a({},u,{get:function(){return h},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");h=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"text",a({},u,{get:function(){return p},set:function(e){p=""+e,this.hasBeenReset=!0}})),Object.defineProperty(s,"region",a({},u,{get:function(){return g},set:function(e){g=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"vertical",a({},u,{get:function(){return v},set:function(e){var r=function(e){return"string"==typeof e&&!!t[e.toLowerCase()]&&e.toLowerCase()}(e);if(!1===r)throw new SyntaxError("An invalid or illegal string was specified.");v=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"snapToLines",a({},u,{get:function(){return y},set:function(e){y=!!e,this.hasBeenReset=!0}})),Object.defineProperty(s,"line",a({},u,{get:function(){return m},set:function(t){if("number"!=typeof t&&t!==e)throw new SyntaxError("An invalid number or illegal string was specified.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"lineAlign",a({},u,{get:function(){return E},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");E=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"position",a({},u,{get:function(){return _},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");_=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"positionAlign",a({},u,{get:function(){return T},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");T=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"size",a({},u,{get:function(){return S},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");S=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"align",a({},u,{get:function(){return b},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");b=t,this.hasBeenReset=!0}})),s.displayState=void 0,l)return s}return n.prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)},n}()},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(71),s=r(72),l=r(73),u=r(0),d=r(29);function f(e,t){return e&&e.label===t.name&&!(e.textTrack1||e.textTrack2)}function c(e,t,r,i){return Math.min(t,i)-Math.max(e,r)}var h=function(t){function r(e){var r=t.call(this,e,a.default.MEDIA_ATTACHING,a.default.MEDIA_DETACHING,a.default.FRAG_PARSING_USERDATA,a.default.FRAG_DECRYPTED,a.default.MANIFEST_LOADING,a.default.MANIFEST_LOADED,a.default.FRAG_LOADED,a.default.LEVEL_SWITCHING,a.default.INIT_PTS_FOUND)||this;if(r.hls=e,r.config=e.config,r.enabled=!0,r.Cues=e.config.cueHandler,r.textTracks=[],r.tracks=[],r.unparsedVttFrags=[],r.initPTS=[],r.cueRanges=[],r.captionsTracks={},r.captionsProperties={textTrack1:{label:r.config.captionsTextTrack1Label,languageCode:r.config.captionsTextTrack1LanguageCode},textTrack2:{label:r.config.captionsTextTrack2Label,languageCode:r.config.captionsTextTrack2LanguageCode}},r.config.enableCEA708Captions){var i=new s.default(r,"textTrack1"),n=new s.default(r,"textTrack2");r.cea608Parser=new o.default(0,i,n)}return r}return i(r,t),r.prototype.addCues=function(e,t,r,i){for(var a=this.cueRanges,n=!1,o=a.length;o--;){var s=a[o],l=c(s[0],s[1],t,r);if(l>=0&&(s[0]=Math.min(s[0],t),s[1]=Math.max(s[1],r),n=!0,l/(r-t)>.5))return}n||a.push([t,r]),this.Cues.newCue(this.captionsTracks[e],t,r,i)},r.prototype.onInitPtsFound=function(e){var t=this;if("main"===e.id&&(this.initPTS[e.frag.cc]=e.initPTS),this.unparsedVttFrags.length){var r=this.unparsedVttFrags;this.unparsedVttFrags=[],r.forEach(function(e){t.onFragLoaded(e)})}},r.prototype.getExistingTrack=function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var i=t.textTracks[r];if(i[e])return i}return null},r.prototype.createCaptionsTrack=function(e){var t=this.captionsProperties[e],r=t.label,i=t.languageCode,a=this.captionsTracks;if(!a[e]){var n=this.getExistingTrack(e);if(n)a[e]=n,d.clearCurrentCues(a[e]),d.sendAddTrackEvent(a[e],this.media);else{var o=this.createTextTrack("captions",r,i);o&&(o[e]=!0,a[e]=o)}}},r.prototype.createTextTrack=function(e,t,r){var i=this.media;if(i)return i.addTextTrack(e,t,r)},r.prototype.destroy=function(){n.default.prototype.destroy.call(this)},r.prototype.onMediaAttaching=function(e){this.media=e.media,this._cleanTracks()},r.prototype.onMediaDetaching=function(){var e=this.captionsTracks;Object.keys(e).forEach(function(t){d.clearCurrentCues(e[t]),delete e[t]})},r.prototype.onManifestLoading=function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},this._cleanTracks()},r.prototype._cleanTracks=function(){var e=this.media;if(e){var t=e.textTracks;if(t)for(var r=0;r<t.length;r++)d.clearCurrentCues(t[r])}},r.prototype.onManifestLoaded=function(e){var t=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.cueRanges=[],this.config.enableWebVTT){this.tracks=e.subtitles||[];var r=this.media?this.media.textTracks:[];this.tracks.forEach(function(e,i){var a;if(i<r.length){for(var n=null,o=0;o<r.length;o++)if(f(r[o],e)){n=r[o];break}n&&(a=n)}a||(a=t.createTextTrack("subtitles",e.name,e.lang)),e.default?a.mode=t.hls.subtitleDisplay?"showing":"hidden":a.mode="disabled",t.textTracks.push(a)})}},r.prototype.onLevelSwitching=function(){this.enabled="NONE"!==this.hls.currentLevel.closedCaptions},r.prototype.onFragLoaded=function(t){var r=t.frag,i=t.payload;if("main"===r.type){var n=r.sn;if(n!==this.lastSn+1){var o=this.cea608Parser;o&&o.reset()}this.lastSn=n}else if("subtitle"===r.type)if(i.byteLength){if(!e.isFinite(this.initPTS[r.cc]))return this.unparsedVttFrags.push(t),void(this.initPTS.length&&this.hls.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r}));var s=r.decryptdata;null!=s&&null!=s.key&&"AES-128"===s.method||this._parseVTTs(r,i)}else this.hls.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:r})},r.prototype._parseVTTs=function(e,t){var r=this.vttCCs;r[e.cc]||(r[e.cc]={start:e.start,prevCC:this.prevCC,new:!0},this.prevCC=e.cc);var i=this.textTracks,n=this.hls;l.default.parse(t,this.initPTS[e.cc],r,e.cc,function(t){var r=i[e.level];"disabled"!==r.mode?(t.forEach(function(e){if(!r.cues.getCueById(e.id))try{r.addCue(e)}catch(i){var t=new window.TextTrackCue(e.startTime,e.endTime,e.text);t.id=e.id,r.addCue(t)}}),n.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})):n.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})},function(t){u.logger.log("Failed to parse VTT cue: "+t),n.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})})},r.prototype.onFragDecrypted=function(t){var r=t.payload,i=t.frag;if("subtitle"===i.type){if(!e.isFinite(this.initPTS[i.cc]))return void this.unparsedVttFrags.push(t);this._parseVTTs(i,r)}},r.prototype.onFragParsingUserdata=function(e){if(this.enabled&&this.config.enableCEA708Captions)for(var t=0;t<e.samples.length;t++){var r=this.extractCea608Data(e.samples[t].bytes);this.cea608Parser.addData(e.samples[t].pts,r)}},r.prototype.extractCea608Data=function(e){for(var t,r,i,a=31&e[0],n=2,o=[],s=0;s<a;s++)t=e[n++],r=127&e[n++],i=127&e[n++],0===r&&0===i||0!=(4&t)&&0===(3&t)&&(o.push(r),o.push(i));return o},r}(n.default);t.default=h}).call(this,r(2).Number)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},a=function(e){var t=e;return i.hasOwnProperty(e)&&(t=i[e]),String.fromCharCode(t)},n=15,o=100,s={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},l={17:2,18:4,21:6,22:8,23:10,19:13,20:15},u={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},d={25:2,26:4,29:6,30:8,31:10,27:13,28:15},f=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],c={verboseFilter:{DATA:3,DEBUG:3,INFO:2,WARNING:2,TEXT:1,ERROR:0},time:null,verboseLevel:0,setTime:function(e){this.time=e},log:function(e,t){this.verboseFilter[e];this.verboseLevel}},h=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t},p=function(){function e(e,t,r,i,a){this.foreground=e||"white",this.underline=t||!1,this.italics=r||!1,this.background=i||"black",this.flash=a||!1}return e.prototype.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},e.prototype.setStyles=function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}},e.prototype.isDefault=function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},e.prototype.equals=function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash},e.prototype.copy=function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash},e.prototype.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},e}(),g=function(){function e(e,t,r,i,a,n){this.uchar=e||" ",this.penState=new p(t,r,i,a,n)}return e.prototype.reset=function(){this.uchar=" ",this.penState.reset()},e.prototype.setChar=function(e,t){this.uchar=e,this.penState.copy(t)},e.prototype.setPenState=function(e){this.penState.copy(e)},e.prototype.equals=function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)},e.prototype.copy=function(e){this.uchar=e.uchar,this.penState.copy(e.penState)},e.prototype.isEmpty=function(){return" "===this.uchar&&this.penState.isDefault()},e}(),v=function(){function e(){this.chars=[];for(var e=0;e<o;e++)this.chars.push(new g);this.pos=0,this.currPenState=new p}return e.prototype.equals=function(e){for(var t=!0,r=0;r<o;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t},e.prototype.copy=function(e){for(var t=0;t<o;t++)this.chars[t].copy(e.chars[t])},e.prototype.isEmpty=function(){for(var e=!0,t=0;t<o;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e},e.prototype.setCursor=function(e){this.pos!==e&&(this.pos=e),this.pos<0?(c.log("ERROR","Negative cursor position "+this.pos),this.pos=0):this.pos>o&&(c.log("ERROR","Too large cursor position "+this.pos),this.pos=o)},e.prototype.moveCursor=function(e){var t=this.pos+e;if(e>1)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)},e.prototype.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},e.prototype.insertChar=function(e){e>=144&&this.backSpace();var t=a(e);this.pos>=o?c.log("ERROR","Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1))},e.prototype.clearFromPos=function(e){var t;for(t=e;t<o;t++)this.chars[t].reset()},e.prototype.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},e.prototype.clearToEndOfRow=function(){this.clearFromPos(this.pos)},e.prototype.getTextString=function(){for(var e=[],t=!0,r=0;r<o;r++){var i=this.chars[r].uchar;" "!==i&&(t=!1),e.push(i)}return t?"":e.join("")},e.prototype.setPenStyles=function(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)},e}(),y=function(){function e(){this.rows=[];for(var e=0;e<n;e++)this.rows.push(new v);this.currRow=n-1,this.nrRollUpRows=null,this.reset()}return e.prototype.reset=function(){for(var e=0;e<n;e++)this.rows[e].clear();this.currRow=n-1},e.prototype.equals=function(e){for(var t=!0,r=0;r<n;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t},e.prototype.copy=function(e){for(var t=0;t<n;t++)this.rows[t].copy(e.rows[t])},e.prototype.isEmpty=function(){for(var e=!0,t=0;t<n;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e},e.prototype.backSpace=function(){this.rows[this.currRow].backSpace()},e.prototype.clearToEndOfRow=function(){this.rows[this.currRow].clearToEndOfRow()},e.prototype.insertChar=function(e){this.rows[this.currRow].insertChar(e)},e.prototype.setPen=function(e){this.rows[this.currRow].setPenStyles(e)},e.prototype.moveCursor=function(e){this.rows[this.currRow].moveCursor(e)},e.prototype.setCursor=function(e){c.log("INFO","setCursor: "+e),this.rows[this.currRow].setCursor(e)},e.prototype.setPAC=function(e){c.log("INFO","pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(var r=0;r<n;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;if(a){var o=a.rows[i].cueStartTime;if(o&&o<c.time)for(r=0;r<this.nrRollUpRows;r++)this.rows[t-this.nrRollUpRows+r+1].copy(a.rows[i+r])}}this.currRow=t;var s=this.rows[this.currRow];if(null!==e.indent){var l=e.indent,u=Math.max(l-1,0);s.setCursor(e.indent),e.color=s.chars[u].penState.foreground}var d={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(d)},e.prototype.setBkgData=function(e){c.log("INFO","bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)},e.prototype.setRollUpRows=function(e){this.nrRollUpRows=e},e.prototype.rollUp=function(){if(null!==this.nrRollUpRows){c.log("TEXT",this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),c.log("INFO","Rolling up")}else c.log("DEBUG","roll_up but nrRollUpRows not set yet")},e.prototype.getDisplayText=function(e){e=e||!1;for(var t=[],r="",i=-1,a=0;a<n;a++){var o=this.rows[a].getTextString();o&&(i=a+1,e?t.push("Row "+i+": '"+o+"'"):t.push(o.trim()))}return t.length>0&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r},e.prototype.getTextAndFormat=function(){return this.rows},e}(),m=function(){function e(e,t){this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new y,this.nonDisplayedMemory=new y,this.lastOutputScreen=new y,this.currRollUpRow=this.displayedMemory.rows[n-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}return e.prototype.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.currRollUpRow=this.displayedMemory.rows[n-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.lastCueEndTime=null},e.prototype.getHandler=function(){return this.outputFilter},e.prototype.setHandler=function(e){this.outputFilter=e},e.prototype.setPAC=function(e){this.writeScreen.setPAC(e)},e.prototype.setBkgData=function(e){this.writeScreen.setBkgData(e)},e.prototype.setMode=function(e){e!==this.mode&&(this.mode=e,c.log("INFO","MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)},e.prototype.insertChars=function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";c.log("INFO",r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(c.log("TEXT","DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},e.prototype.ccRCL=function(){c.log("INFO","RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},e.prototype.ccBS=function(){c.log("INFO","BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},e.prototype.ccAOF=function(){},e.prototype.ccAON=function(){},e.prototype.ccDER=function(){c.log("INFO","DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},e.prototype.ccRU=function(e){c.log("INFO","RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)},e.prototype.ccFON=function(){c.log("INFO","FON - Flash On"),this.writeScreen.setPen({flash:!0})},e.prototype.ccRDC=function(){c.log("INFO","RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},e.prototype.ccTR=function(){c.log("INFO","TR"),this.setMode("MODE_TEXT")},e.prototype.ccRTD=function(){c.log("INFO","RTD"),this.setMode("MODE_TEXT")},e.prototype.ccEDM=function(){c.log("INFO","EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},e.prototype.ccCR=function(){c.log("CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},e.prototype.ccENM=function(){c.log("INFO","ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},e.prototype.ccEOC=function(){if(c.log("INFO","EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,c.log("TEXT","DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},e.prototype.ccTO=function(e){c.log("INFO","TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)},e.prototype.ccMIDROW=function(e){var t={flash:!1};if(t.underline=e%2==1,t.italics=e>=46,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16;t.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}c.log("INFO","MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)},e.prototype.outputDataUpdate=function(e){void 0===e&&(e=!1);var t=c.time;null!==t&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue&&(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),!0===e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue()),this.cueStartTime=this.displayedMemory.isEmpty()?null:t):this.cueStartTime=t,this.lastOutputScreen.copy(this.displayedMemory))},e.prototype.cueSplitAtTime=function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))},e}(),E=function(){function e(e,t,r){this.field=e||1,this.outputs=[t,r],this.channels=[new m(1,t),new m(2,r)],this.currChNr=-1,this.lastCmdA=null,this.lastCmdB=null,this.bufferedData=[],this.startTime=null,this.lastTime=null,this.dataCounters={padding:0,char:0,cmd:0,other:0}}return e.prototype.getHandler=function(e){return this.channels[e].getHandler()},e.prototype.setHandler=function(e,t){this.channels[e].setHandler(t)},e.prototype.addData=function(e,t){var r,i,a,n=!1;this.lastTime=e,c.setTime(e);for(var o=0;o<t.length;o+=2)if(i=127&t[o],a=127&t[o+1],0!==i||0!==a){if(c.log("DATA","["+h([t[o],t[o+1]])+"] -> ("+h([i,a])+")"),(r=this.parseCmd(i,a))||(r=this.parseMidrow(i,a)),r||(r=this.parsePAC(i,a)),r||(r=this.parseBackgroundAttributes(i,a)),!r)if(n=this.parseChars(i,a))if(this.currChNr&&this.currChNr>=0)this.channels[this.currChNr-1].insertChars(n);else c.log("WARNING","No channel found yet. TEXT-MODE?");r?this.dataCounters.cmd+=2:n?this.dataCounters.char+=2:(this.dataCounters.other+=2,c.log("WARNING","Couldn't parse cleaned data "+h([i,a])+" orig: "+h([t[o],t[o+1]])))}else this.dataCounters.padding+=2},e.prototype.parseCmd=function(e,t){var r=null;if(!((20===e||28===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=33&&t<=35))return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,c.log("DEBUG","Repeated command ("+h([e,t])+") is dropped"),!0;r=20===e||23===e?1:2;var i=this.channels[r-1];return 20===e||28===e?32===t?i.ccRCL():33===t?i.ccBS():34===t?i.ccAOF():35===t?i.ccAON():36===t?i.ccDER():37===t?i.ccRU(2):38===t?i.ccRU(3):39===t?i.ccRU(4):40===t?i.ccFON():41===t?i.ccRDC():42===t?i.ccTR():43===t?i.ccRTD():44===t?i.ccEDM():45===t?i.ccCR():46===t?i.ccENM():47===t&&i.ccEOC():i.ccTO(t-32),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0},e.prototype.parseMidrow=function(e,t){var r=null;return(17===e||25===e)&&t>=32&&t<=47&&((r=17===e?1:2)!==this.currChNr?(c.log("ERROR","Mismatch channel in midrow parsing"),!1):(this.channels[r-1].ccMIDROW(t),c.log("DEBUG","MIDROW ("+h([e,t])+")"),!0))},e.prototype.parsePAC=function(e,t){var r,i=null;if(!((e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127)&&!((16===e||24===e)&&t>=64&&t<=95))return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,!0;r=e<=23?1:2,i=t>=64&&t<=95?1===r?s[e]:u[e]:1===r?l[e]:d[e];var a=this.interpretPAC(i,t);return this.channels[r-1].setPAC(a),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0},e.prototype.interpretPAC=function(e,t){var r=t,i={color:null,italics:!1,indent:null,underline:!1,row:e};return r=t>95?t-96:t-64,i.underline=1==(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i},e.prototype.parseChars=function(e,t){var r=null,i=null,n=null;if(e>=25?(r=2,n=e-8):(r=1,n=e),n>=17&&n<=19){var o=t;o=17===n?t+80:18===n?t+112:t+144,c.log("INFO","Special char '"+a(o)+"' in channel "+r),i=[o]}else e>=32&&e<=127&&(i=0===t?[e]:[e,t]);if(i){var s=h(i);c.log("DEBUG","Char codes =  "+s.join(",")),this.lastCmdA=null,this.lastCmdB=null}return i},e.prototype.parseBackgroundAttributes=function(e,t){var r,i,a;return((16===e||24===e)&&t>=32&&t<=47||(23===e||31===e)&&t>=45&&t<=47)&&(r={},16===e||24===e?(i=Math.floor((t-32)/2),r.background=f[i],t%2==1&&(r.background=r.background+"_semi")):45===t?r.background="transparent":(r.foreground="black",47===t&&(r.underline=!0)),a=e<24?1:2,this.channels[a-1].setBkgData(r),this.lastCmdA=null,this.lastCmdB=null,!0)},e.prototype.reset=function(){for(var e=0;e<this.channels.length;e++)this.channels[e]&&this.channels[e].reset();this.lastCmdA=null,this.lastCmdB=null},e.prototype.cueSplitAtTime=function(e){for(var t=0;t<this.channels.length;t++)this.channels[t]&&this.channels[t].cueSplitAtTime(e)},e}();t.default=E},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.timelineController=e,this.trackName=t,this.startTime=null,this.endTime=null,this.screen=null}return e.prototype.dispatchCue=function(){null!==this.startTime&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen),this.startTime=null)},e.prototype.newCue=function(e,t,r){(null===this.startTime||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)},e}();t.default=i},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=r(30),a=r(11),n=function(e,t,r){return e.substr(r||0,t.length)===t},o=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return(t>>>0).toString()},s={parse:function(t,r,s,l,u,d){var f,c=a.utf8ArrayToStr(new Uint8Array(t)).trim().replace(/\r\n|\n\r|\n|\r/g,"\n").split("\n"),h="00:00.000",p=0,g=0,v=0,y=[],m=!0,E=new i.default;E.oncue=function(e){var t=s[l],r=s.ccOffset;t&&t.new&&(void 0!==g?r=s.ccOffset=t.start:function(e,t,r){var i=e[t],a=e[i.prevCC];if(!a||!a.new&&i.new)return e.ccOffset=e.presentationOffset=i.start,void(i.new=!1);for(;a&&a.new;)e.ccOffset+=i.start-a.start,i.new=!1,a=e[(i=a).prevCC];e.presentationOffset=r}(s,l,v)),v&&(r=v-s.presentationOffset),e.startTime+=r-g,e.endTime+=r-g,e.id=o(e.startTime.toString())+o(e.endTime.toString())+o(e.text),e.text=decodeURIComponent(encodeURIComponent(e.text)),e.endTime>0&&y.push(e)},E.onparsingerror=function(e){f=e},E.onflush=function(){f&&d?d(f):u(y)},c.forEach(function(t){if(m){if(n(t,"X-TIMESTAMP-MAP=")){m=!1,t.substr(16).split(",").forEach(function(e){n(e,"LOCAL:")?h=e.substr(6):n(e,"MPEGTS:")&&(p=parseInt(e.substr(7)))});try{r+(9e4*s[l].start||0)<0&&(r+=8589934592),p-=r,g=function(t){var r=parseInt(t.substr(-3)),i=parseInt(t.substr(-6,2)),a=parseInt(t.substr(-9,2)),n=t.length>9?parseInt(t.substr(0,t.indexOf(":"))):0;return e.isFinite(r)&&e.isFinite(i)&&e.isFinite(a)&&e.isFinite(n)?(r+=1e3*i,r+=6e4*a,r+=36e5*n):-1}(h)/1e3,v=p/9e4,-1===g&&(f=new Error("Malformed X-TIMESTAMP-MAP: "+t))}catch(e){f=new Error("Malformed X-TIMESTAMP-MAP: "+t)}return}""===t&&(m=!1)}E.parse(t+"\n")}),E.flush()}};t.default=s}).call(this,r(2).Number)},function(e,t,r){"use strict";(function(e){var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(4),o=r(0),s=r(8),l=function(t){function r(e){var r=t.call(this,e,a.default.MEDIA_ATTACHED,a.default.MEDIA_DETACHING,a.default.MANIFEST_LOADED,a.default.SUBTITLE_TRACK_LOADED)||this;return r.tracks=[],r.trackId=-1,r.media=null,r.stopped=!0,r.subtitleDisplay=!0,r}return i(r,t),r.prototype.destroy=function(){n.default.prototype.destroy.call(this)},r.prototype.onMediaAttached=function(e){var t=this;this.media=e.media,this.media&&(this.queuedDefaultTrack&&(this.subtitleTrack=this.queuedDefaultTrack,delete this.queuedDefaultTrack),this.trackChangeListener=this._onTextTracksChanged.bind(this),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.subtitlePollingInterval=setInterval(function(){t.trackChangeListener()},500):this.media.textTracks.addEventListener("change",this.trackChangeListener))},r.prototype.onMediaDetaching=function(){this.media&&(this.useTextTrackPolling?clearInterval(this.subtitlePollingInterval):this.media.textTracks.removeEventListener("change",this.trackChangeListener),this.media=null)},r.prototype.onManifestLoaded=function(e){var t=this,r=e.subtitles||[];this.tracks=r,this.hls.trigger(a.default.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach(function(e){e.default&&(t.media?t.subtitleTrack=e.id:t.queuedDefaultTrack=e.id)})},r.prototype.onSubtitleTrackLoaded=function(e){var t=this,r=e.id,i=e.details,a=this.trackId,n=this.tracks,l=n[a];if(r>=n.length||r!==a||!l||this.stopped)this._clearReloadTimer();else if(o.logger.log("subtitle track "+r+" loaded"),i.live){var u=s.computeReloadInterval(l.details,i,e.stats.trequest);o.logger.log("Reloading live subtitle playlist in "+u+"ms"),this.timer=setTimeout(function(){t._loadCurrentTrack()},u)}else this._clearReloadTimer()},r.prototype.startLoad=function(){this.stopped=!1,this._loadCurrentTrack()},r.prototype.stopLoad=function(){this.stopped=!0,this._clearReloadTimer()},Object.defineProperty(r.prototype,"subtitleTracks",{get:function(){return this.tracks},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"subtitleTrack",{get:function(){return this.trackId},set:function(e){this.trackId!==e&&(this._toggleTrackModes(e),this._setSubtitleTrackInternal(e))},enumerable:!0,configurable:!0}),r.prototype._clearReloadTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},r.prototype._loadCurrentTrack=function(){var e=this.trackId,t=this.tracks,r=this.hls,i=t[e];e<0||!i||i.details&&!i.details.live||(o.logger.log("Loading subtitle track "+e),r.trigger(a.default.SUBTITLE_TRACK_LOADING,{url:i.url,id:e}))},r.prototype._toggleTrackModes=function(e){var t=this.media,r=this.subtitleDisplay,i=this.trackId;if(t){var a=u(t.textTracks);if(-1===e)[].slice.call(a).forEach(function(e){e.mode="disabled"});else{var n=a[i];n&&(n.mode="disabled")}var o=a[e];o&&(o.mode=r?"showing":"hidden")}},r.prototype._setSubtitleTrackInternal=function(t){var r=this.hls,i=this.tracks;!e.isFinite(t)||t<-1||t>=i.length||(this.trackId=t,o.logger.log("Switching to subtitle track "+t),r.trigger(a.default.SUBTITLE_TRACK_SWITCH,{id:t}),this._loadCurrentTrack())},r.prototype._onTextTracksChanged=function(){if(this.media){for(var e=-1,t=u(this.media.textTracks),r=0;r<t.length;r++)if("hidden"===t[r].mode)e=r;else if("showing"===t[r].mode){e=r;break}this.subtitleTrack=e}},r}(n.default);function u(e){for(var t=[],r=0;r<e.length;r++){var i=e[r];"subtitles"===i.kind&&i.label&&t.push(e[r])}return t}t.default=l}).call(this,r(2).Number)},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),n=r(0),o=r(13),s=r(5),l=r(27),u=r(7),d=r(15),f=r(8),c=window.performance,h=function(e){function t(t,r){var i=e.call(this,t,a.default.MEDIA_ATTACHED,a.default.MEDIA_DETACHING,a.default.ERROR,a.default.KEY_LOADED,a.default.FRAG_LOADED,a.default.SUBTITLE_TRACKS_UPDATED,a.default.SUBTITLE_TRACK_SWITCH,a.default.SUBTITLE_TRACK_LOADED,a.default.SUBTITLE_FRAG_PROCESSED,a.default.LEVEL_UPDATED)||this;return i.fragmentTracker=r,i.config=t.config,i.state=d.State.STOPPED,i.tracks=[],i.tracksBuffered=[],i.currentTrackId=-1,i.decrypter=new o.default(t,t.config),i.lastAVStart=0,i._onMediaSeeking=i.onMediaSeeking.bind(i),i}return i(t,e),t.prototype.onSubtitleFragProcessed=function(e){var t=e.frag,r=e.success;if(this.fragPrevious=t,this.state=d.State.IDLE,r){var i=this.tracksBuffered[this.currentTrackId];if(i){for(var a,n=t.start,o=0;o<i.length;o++)if(n>=i[o].start&&n<=i[o].end){a=i[o];break}var s=t.start+t.duration;a?a.end=s:(a={start:n,end:s},i.push(a))}}},t.prototype.onMediaAttached=function(e){var t=e.media;this.media=t,t.addEventListener("seeking",this._onMediaSeeking),this.state=d.State.IDLE},t.prototype.onMediaDetaching=function(){this.media.removeEventListener("seeking",this._onMediaSeeking),this.media=null,this.state=d.State.STOPPED},t.prototype.onError=function(e){var t=e.frag;t&&"subtitle"===t.type&&(this.state=d.State.IDLE)},t.prototype.onSubtitleTracksUpdated=function(e){var t=this;n.logger.log("subtitle tracks updated"),this.tracksBuffered=[],this.tracks=e.subtitleTracks,this.tracks.forEach(function(e){t.tracksBuffered[e.id]=[]})},t.prototype.onSubtitleTrackSwitch=function(e){if(this.currentTrackId=e.id,this.tracks&&-1!==this.currentTrackId){var t=this.tracks[this.currentTrackId];t&&t.details&&this.setInterval(500)}else this.clearInterval()},t.prototype.onSubtitleTrackLoaded=function(e){var t=e.id,r=e.details,i=this.currentTrackId,a=this.tracks,n=a[i];t>=a.length||t!==i||!n||(r.live&&f.mergeSubtitlePlaylists(n.details,r,this.lastAVStart),n.details=r,this.setInterval(500))},t.prototype.onKeyLoaded=function(){this.state===d.State.KEY_LOADING&&(this.state=d.State.IDLE)},t.prototype.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag.decryptdata,i=e.frag,n=this.hls;if(this.state===d.State.FRAG_LOADING&&t&&"subtitle"===e.frag.type&&t.sn===e.frag.sn&&e.payload.byteLength>0&&r&&r.key&&"AES-128"===r.method){var o=c.now();this.decrypter.decrypt(e.payload,r.key.buffer,r.iv.buffer,function(e){var t=c.now();n.trigger(a.default.FRAG_DECRYPTED,{frag:i,payload:e,stats:{tstart:o,tdecrypt:t}})})}},t.prototype.onLevelUpdated=function(e){var t=e.details.fragments;this.lastAVStart=t.length?t[0].start:0},t.prototype.doTick=function(){if(this.media)switch(this.state){case d.State.IDLE:var e=this,t=e.config,r=e.currentTrackId,i=e.fragmentTracker,o=e.media,f=e.tracks;if(!f||!f[r]||!f[r].details)break;var c=t.maxBufferHole,h=t.maxFragLookUpTolerance,p=Math.min(t.maxBufferLength,t.maxMaxBufferLength),g=s.BufferHelper.bufferedInfo(this._getBuffered(),o.currentTime,c),v=g.end,y=g.len,m=f[r].details,E=m.fragments,_=E.length,T=E[_-1].start+E[_-1].duration;if(y>p)return;var S=void 0,b=this.fragPrevious;v<T?(b&&m.hasProgramDateTime&&(S=l.findFragmentByPDT(E,b.endProgramDateTime,h)),S||(S=l.findFragmentByPTS(b,E,v,h))):S=E[_-1],S&&S.encrypted?(n.logger.log("Loading key for "+S.sn),this.state=d.State.KEY_LOADING,this.hls.trigger(a.default.KEY_LOADING,{frag:S})):S&&i.getState(S)===u.FragmentState.NOT_LOADED&&(this.fragCurrent=S,this.state=d.State.FRAG_LOADING,this.hls.trigger(a.default.FRAG_LOADING,{frag:S}))}else this.state=d.State.IDLE},t.prototype.stopLoad=function(){this.lastAVStart=0,e.prototype.stopLoad.call(this)},t.prototype._getBuffered=function(){return this.tracksBuffered[this.currentTrackId]||[]},t.prototype.onMediaSeeking=function(){this.fragPrevious=null},t}(d.default);t.SubtitleStreamController=h},function(e,t,r){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),n=r(1),o=r(3),s=r(0),l=window.XMLHttpRequest,u="com.widevine.alpha",d="com.microsoft.playready",f=function(e){function t(t){var r=e.call(this,t,n.default.MEDIA_ATTACHED,n.default.MANIFEST_PARSED)||this;return r._widevineLicenseUrl=t.config.widevineLicenseUrl,r._licenseXhrSetup=t.config.licenseXhrSetup,r._emeEnabled=t.config.emeEnabled,r._requestMediaKeySystemAccess=t.config.requestMediaKeySystemAccessFunc,r._mediaKeysList=[],r._media=null,r._hasSetMediaKeys=!1,r._isMediaEncrypted=!1,r._requestLicenseFailureCount=0,r}return i(t,e),t.prototype.getLicenseServerUrl=function(e){var t;switch(e){case u:t=this._widevineLicenseUrl;break;default:t=null}return t||(s.logger.error('No license server URL configured for key-system "'+e+'"'),this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})),t},t.prototype._attemptKeySystemAccess=function(e,t,r){var i=this,a=function(e,t,r){switch(e){case u:return function(e,t,r){var i={videoCapabilities:[]};return t.forEach(function(e){i.videoCapabilities.push({contentType:'video/mp4; codecs="'+e+'"'})}),[i]}(0,r);default:throw Error("Unknown key-system: "+e)}}(e,0,r);a?(s.logger.log("Requesting encrypted media key-system access"),this.requestMediaKeySystemAccess(e,a).then(function(t){i._onMediaKeySystemAccessObtained(e,t)}).catch(function(t){s.logger.error('Failed to obtain key-system "'+e+'" access:',t)})):s.logger.warn("Can not create config for key-system (maybe because platform is not supported):",e)},Object.defineProperty(t.prototype,"requestMediaKeySystemAccess",{get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess},enumerable:!0,configurable:!0}),t.prototype._onMediaKeySystemAccessObtained=function(e,t){var r=this;s.logger.log('Access for key-system "'+e+'" obtained');var i={mediaKeys:null,mediaKeysSession:null,mediaKeysSessionInitialized:!1,mediaKeySystemAccess:t,mediaKeySystemDomain:e};this._mediaKeysList.push(i),t.createMediaKeys().then(function(t){i.mediaKeys=t,s.logger.log('Media-keys created for key-system "'+e+'"'),r._onMediaKeysCreated()}).catch(function(e){s.logger.error("Failed to create media-keys:",e)})},t.prototype._onMediaKeysCreated=function(){var e=this;this._mediaKeysList.forEach(function(t){t.mediaKeysSession||(t.mediaKeysSession=t.mediaKeys.createSession(),e._onNewMediaKeySession(t.mediaKeysSession))})},t.prototype._onNewMediaKeySession=function(e){var t=this;s.logger.log("New key-system session "+e.sessionId),e.addEventListener("message",function(r){t._onKeySessionMessage(e,r.message)},!1)},t.prototype._onKeySessionMessage=function(e,t){s.logger.log("Got EME message event, creating license request"),this._requestLicense(t,function(t){s.logger.log("Received license data, updating key-session"),e.update(t)})},t.prototype._onMediaEncrypted=function(e,t){s.logger.log('Media is encrypted using "'+e+'" init data type'),this._isMediaEncrypted=!0,this._mediaEncryptionInitDataType=e,this._mediaEncryptionInitData=t,this._attemptSetMediaKeys(),this._generateRequestWithPreferredKeySession()},t.prototype._attemptSetMediaKeys=function(){if(!this._hasSetMediaKeys){var e=this._mediaKeysList[0];if(!e||!e.mediaKeys)return s.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});s.logger.log("Setting keys for encrypted media"),this._media.setMediaKeys(e.mediaKeys),this._hasSetMediaKeys=!0}},t.prototype._generateRequestWithPreferredKeySession=function(){var e=this,t=this._mediaKeysList[0];if(!t)return s.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});if(t.mediaKeysSessionInitialized)s.logger.warn("Key-Session already initialized but requested again");else{var r=t.mediaKeysSession;r||(s.logger.error("Fatal: Media is encrypted but no key-session existing"),this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!0}));var i=this._mediaEncryptionInitDataType,a=this._mediaEncryptionInitData;s.logger.log('Generating key-session request for "'+i+'" init data type'),t.mediaKeysSessionInitialized=!0,r.generateRequest(i,a).then(function(){s.logger.debug("Key-session generation succeeded")}).catch(function(t){s.logger.error("Error generating key-session request:",t),e.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!1})})}},t.prototype._createLicenseXhr=function(e,t,r){var i=new l,a=this._licenseXhrSetup;try{if(a)try{a(i,e)}catch(t){i.open("POST",e,!0),a(i,e)}i.readyState||i.open("POST",e,!0)}catch(e){return s.logger.error("Error setting up key-system license XHR",e),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}return i.responseType="arraybuffer",i.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,i,e,t,r),i},t.prototype._onLicenseRequestReadyStageChange=function(e,t,r,i){switch(e.readyState){case 4:if(200===e.status)this._requestLicenseFailureCount=0,s.logger.log("License request succeeded"),i(e.response);else{if(s.logger.error("License Request XHR failed ("+t+"). Status: "+e.status+" ("+e.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount<=3){var a=3-this._requestLicenseFailureCount+1;return s.logger.warn("Retrying license request, "+a+" attempts left"),void this._requestLicense(r,i)}this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}}},t.prototype._generateLicenseRequestChallenge=function(e,t){var r;return e.mediaKeySystemDomain===d?s.logger.error("PlayReady is not supported (yet)"):e.mediaKeySystemDomain===u?r=t:s.logger.error("Unsupported key-system:",e.mediaKeySystemDomain),r},t.prototype._requestLicense=function(e,t){s.logger.log("Requesting content license for key-system");var r=this._mediaKeysList[0];if(!r)return s.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});var i=this.getLicenseServerUrl(r.mediaKeySystemDomain),a=this._createLicenseXhr(i,e,t);s.logger.log("Sending license request to URL: "+i),a.send(this._generateLicenseRequestChallenge(r,e))},t.prototype.onMediaAttached=function(e){var t=this;if(this._emeEnabled){var r=e.media;this._media=r,r.addEventListener("encrypted",function(e){t._onMediaEncrypted(e.initDataType,e.initData)})}},t.prototype.onManifestParsed=function(e){if(this._emeEnabled){var t=e.levels.map(function(e){return e.audioCodec}),r=e.levels.map(function(e){return e.videoCodec});this._attemptKeySystemAccess(u,t,r)}},t}(a.default);t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null;t.requestMediaKeySystemAccess=i}]).default});
//# sourceMappingURL=hls.min.js.map
;/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.5.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* MIT license */
var colorNames = require(6);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"6":6}],3:[function(require,module,exports){
/* MIT license */
var convert = require(5);
var string = require(2);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = convert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

module.exports = Color;

},{"2":2,"5":5}],4:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],5:[function(require,module,exports){
var conversions = require(4);

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"4":4}],6:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],7:[function(require,module,exports){
/**
 * @namespace Chart
 */
var Chart = require(28)();

require(26)(Chart);
require(42)(Chart);
require(22)(Chart);
require(31)(Chart);
require(25)(Chart);
require(21)(Chart);
require(23)(Chart);
require(24)(Chart);
require(29)(Chart);
require(33)(Chart);
require(34)(Chart);
require(32)(Chart);
require(35)(Chart);
require(30)(Chart);
require(27)(Chart);
require(36)(Chart);

require(37)(Chart);
require(38)(Chart);
require(39)(Chart);
require(40)(Chart);

require(45)(Chart);
require(43)(Chart);
require(44)(Chart);
require(46)(Chart);
require(47)(Chart);
require(48)(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);
require(16)(Chart);
require(17)(Chart);
require(18)(Chart);
require(19)(Chart);
require(20)(Chart);

require(8)(Chart);
require(9)(Chart);
require(10)(Chart);
require(11)(Chart);
require(12)(Chart);
require(13)(Chart);
require(14)(Chart);

window.Chart = module.exports = Chart;

},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"36":36,"37":37,"38":38,"39":39,"40":40,"42":42,"43":43,"44":44,"45":45,"46":46,"47":47,"48":48,"8":8,"9":9}],8:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bar = function(context, config) {
		config.type = 'bar';

		return new Chart(context, config);
	};

};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bubble = function(context, config) {
		config.type = 'bubble';
		return new Chart(context, config);
	};

};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Doughnut = function(context, config) {
		config.type = 'doughnut';

		return new Chart(context, config);
	};

};

},{}],11:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Line = function(context, config) {
		config.type = 'line';

		return new Chart(context, config);
	};

};

},{}],12:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.PolarArea = function(context, config) {
		config.type = 'polarArea';

		return new Chart(context, config);
	};

};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Radar = function(context, config) {
		config.type = 'radar';

		return new Chart(context, config);
	};

};

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var defaultConfig = {
		hover: {
			mode: 'single'
		},

		scales: {
			xAxes: [{
				type: 'linear', // scatter should not use a category axis
				position: 'bottom',
				id: 'x-axis-1' // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: 'linear',
				position: 'left',
				id: 'y-axis-1'
			}]
		},

		tooltips: {
			callbacks: {
				title: function() {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem) {
					return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
				}
			}
		}
	};

	// Register the default config for this type
	Chart.defaults.scatter = defaultConfig;

	// Scatter charts use line controllers
	Chart.controllers.scatter = Chart.controllers.line;

	Chart.Scatter = function(context, config) {
		config.type = 'scatter';
		return new Chart(context, config);
	};

};

},{}],15:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bar = {
		hover: {
			mode: 'label'
		},

		scales: {
			xAxes: [{
				type: 'category',

				// Specific to Bar Controller
				categoryPercentage: 0.8,
				barPercentage: 0.9,

				// grid line settings
				gridLines: {
					offsetGridLines: true
				}
			}],
			yAxes: [{
				type: 'linear'
			}]
		}
	};

	Chart.controllers.bar = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Rectangle,

		initialize: function(chart, datasetIndex) {
			Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);

			var me = this;
			var meta = me.getMeta();
			var dataset = me.getDataset();

			meta.stack = dataset.stack;
			// Use this to indicate that this is a bar dataset.
			meta.bar = true;
		},

		// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
		getStackCount: function() {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);

			var stacks = [];
			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var dsMeta = me.chart.getDatasetMeta(datasetIndex);
				if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
					(yScale.options.stacked === false ||
					(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}, me);

			return stacks.length;
		},

		update: function(reset) {
			var me = this;
			helpers.each(me.getMeta().data, function(rectangle, index) {
				me.updateElement(rectangle, index, reset);
			}, me);
		},

		updateElement: function(rectangle, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var scaleBase = yScale.getBasePixel();
			var rectangleElementOptions = me.chart.options.elements.rectangle;
			var custom = rectangle.custom || {};
			var dataset = me.getDataset();

			rectangle._xScale = xScale;
			rectangle._yScale = yScale;
			rectangle._datasetIndex = me.index;
			rectangle._index = index;

			var ruler = me.getRuler(index); // The index argument for compatible
			rectangle._model = {
				x: me.calculateBarX(index, me.index, ruler),
				y: reset ? scaleBase : me.calculateBarY(index, me.index),

				// Tooltip
				label: me.chart.data.labels[index],
				datasetLabel: dataset.label,

				// Appearance
				horizontal: false,
				base: reset ? scaleBase : me.calculateBarBase(me.index, index),
				width: me.calculateBarWidth(ruler),
				backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
				borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
				borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
				borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
			};

			rectangle.pivot();
		},

		calculateBarBase: function(datasetIndex, index) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var base = yScale.getBaseValue();
			var original = base;

			if ((yScale.options.stacked === true) ||
				(yScale.options.stacked === undefined && meta.stack !== undefined)) {
				var chart = me.chart;
				var datasets = chart.data.datasets;
				var value = Number(datasets[datasetIndex].data[index]);

				for (var i = 0; i < datasetIndex; i++) {
					var currentDs = datasets[i];
					var currentDsMeta = chart.getDatasetMeta(i);
					if (currentDsMeta.bar && currentDsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i) &&
						meta.stack === currentDsMeta.stack) {
						var currentVal = Number(currentDs.data[index]);
						base += value < 0 ? Math.min(currentVal, original) : Math.max(currentVal, original);
					}
				}

				return yScale.getPixelForValue(base);
			}

			return yScale.getBasePixel();
		},

		getRuler: function() {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var stackCount = me.getStackCount();

			var tickWidth = xScale.width / xScale.ticks.length;
			var categoryWidth = tickWidth * xScale.options.categoryPercentage;
			var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
			var fullBarWidth = categoryWidth / stackCount;

			var barWidth = fullBarWidth * xScale.options.barPercentage;
			var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);

			return {
				stackCount: stackCount,
				tickWidth: tickWidth,
				categoryWidth: categoryWidth,
				categorySpacing: categorySpacing,
				fullBarWidth: fullBarWidth,
				barWidth: barWidth,
				barSpacing: barSpacing
			};
		},

		calculateBarWidth: function(ruler) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			if (xScale.options.barThickness) {
				return xScale.options.barThickness;
			}
			return ruler.barWidth;
		},

		// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
		getStackIndex: function(datasetIndex) {
			var me = this;
			var meta = me.chart.getDatasetMeta(datasetIndex);
			var yScale = me.getScaleForId(meta.yAxisID);
			var dsMeta, j;
			var stacks = [meta.stack];

			for (j = 0; j < datasetIndex; ++j) {
				dsMeta = this.chart.getDatasetMeta(j);
				if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
					(yScale.options.stacked === false ||
					(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}

			return stacks.length - 1;
		},

		calculateBarX: function(index, datasetIndex, ruler) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var stackIndex = me.getStackIndex(datasetIndex);
			var leftTick = xScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
			leftTick -= me.chart.isCombo ? (ruler.tickWidth / 2) : 0;

			return leftTick +
				(ruler.barWidth / 2) +
				ruler.categorySpacing +
				(ruler.barWidth * stackIndex) +
				(ruler.barSpacing / 2) +
				(ruler.barSpacing * stackIndex);
		},

		calculateBarY: function(index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var value = Number(me.getDataset().data[index]);

			if (yScale.options.stacked ||
				(yScale.options.stacked === undefined && meta.stack !== undefined)) {
				var base = yScale.getBaseValue();
				var sumPos = base,
					sumNeg = base;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = me.chart.data.datasets[i];
					var dsMeta = me.chart.getDatasetMeta(i);
					if (dsMeta.bar && dsMeta.yAxisID === yScale.id && me.chart.isDatasetVisible(i) &&
						meta.stack === dsMeta.stack) {
						var stackedVal = Number(ds.data[index]);
						if (stackedVal < 0) {
							sumNeg += stackedVal || 0;
						} else {
							sumPos += stackedVal || 0;
						}
					}
				}

				if (value < 0) {
					return yScale.getPixelForValue(sumNeg + value);
				}
				return yScale.getPixelForValue(sumPos + value);
			}

			return yScale.getPixelForValue(value);
		},

		draw: function(ease) {
			var me = this;
			var easingDecimal = ease || 1;
			var metaData = me.getMeta().data;
			var dataset = me.getDataset();
			var i, len;

			Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
			for (i = 0, len = metaData.length; i < len; ++i) {
				var d = dataset.data[i];
				if (d !== null && d !== undefined && !isNaN(d)) {
					metaData[i].transition(easingDecimal).draw();
				}
			}
			Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);
		},

		setHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;

			var custom = rectangle.custom || {};
			var model = rectangle._model;
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;
			var custom = rectangle.custom || {};
			var model = rectangle._model;
			var rectangleElementOptions = this.chart.options.elements.rectangle;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
		}

	});


	// including horizontalBar in the bar file, instead of a file of its own
	// it extends bar (like pie extends doughnut)
	Chart.defaults.horizontalBar = {
		hover: {
			mode: 'label'
		},

		scales: {
			xAxes: [{
				type: 'linear',
				position: 'bottom'
			}],
			yAxes: [{
				position: 'left',
				type: 'category',

				// Specific to Horizontal Bar Controller
				categoryPercentage: 0.8,
				barPercentage: 0.9,

				// grid line settings
				gridLines: {
					offsetGridLines: true
				}
			}]
		},
		elements: {
			rectangle: {
				borderSkipped: 'left'
			}
		},
		tooltips: {
			callbacks: {
				title: function(tooltipItems, data) {
					// Pick first xLabel for now
					var title = '';

					if (tooltipItems.length > 0) {
						if (tooltipItems[0].yLabel) {
							title = tooltipItems[0].yLabel;
						} else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
							title = data.labels[tooltipItems[0].index];
						}
					}

					return title;
				},
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					return datasetLabel + ': ' + tooltipItem.xLabel;
				}
			}
		}
	};

	Chart.controllers.horizontalBar = Chart.controllers.bar.extend({

		// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
		getStackCount: function() {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);

			var stacks = [];
			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var dsMeta = me.chart.getDatasetMeta(datasetIndex);
				if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
					(xScale.options.stacked === false ||
					(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}, me);

			return stacks.length;
		},

		updateElement: function(rectangle, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var scaleBase = xScale.getBasePixel();
			var custom = rectangle.custom || {};
			var dataset = me.getDataset();
			var rectangleElementOptions = me.chart.options.elements.rectangle;

			rectangle._xScale = xScale;
			rectangle._yScale = yScale;
			rectangle._datasetIndex = me.index;
			rectangle._index = index;

			var ruler = me.getRuler(index); // The index argument for compatible
			rectangle._model = {
				x: reset ? scaleBase : me.calculateBarX(index, me.index),
				y: me.calculateBarY(index, me.index, ruler),

				// Tooltip
				label: me.chart.data.labels[index],
				datasetLabel: dataset.label,

				// Appearance
				horizontal: true,
				base: reset ? scaleBase : me.calculateBarBase(me.index, index),
				height: me.calculateBarHeight(ruler),
				backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
				borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
				borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
				borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
			};

			rectangle.pivot();
		},

		calculateBarBase: function(datasetIndex, index) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var base = xScale.getBaseValue();
			var originalBase = base;

			if (xScale.options.stacked ||
				(xScale.options.stacked === undefined && meta.stack !== undefined)) {
				var chart = me.chart;
				var datasets = chart.data.datasets;
				var value = Number(datasets[datasetIndex].data[index]);

				for (var i = 0; i < datasetIndex; i++) {
					var currentDs = datasets[i];
					var currentDsMeta = chart.getDatasetMeta(i);
					if (currentDsMeta.bar && currentDsMeta.xAxisID === xScale.id && chart.isDatasetVisible(i) &&
						meta.stack === currentDsMeta.stack) {
						var currentVal = Number(currentDs.data[index]);
						base += value < 0 ? Math.min(currentVal, originalBase) : Math.max(currentVal, originalBase);
					}
				}

				return xScale.getPixelForValue(base);
			}

			return xScale.getBasePixel();
		},

		getRuler: function() {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var stackCount = me.getStackCount();

			var tickHeight = yScale.height / yScale.ticks.length;
			var categoryHeight = tickHeight * yScale.options.categoryPercentage;
			var categorySpacing = (tickHeight - (tickHeight * yScale.options.categoryPercentage)) / 2;
			var fullBarHeight = categoryHeight / stackCount;

			var barHeight = fullBarHeight * yScale.options.barPercentage;
			var barSpacing = fullBarHeight - (fullBarHeight * yScale.options.barPercentage);

			return {
				stackCount: stackCount,
				tickHeight: tickHeight,
				categoryHeight: categoryHeight,
				categorySpacing: categorySpacing,
				fullBarHeight: fullBarHeight,
				barHeight: barHeight,
				barSpacing: barSpacing
			};
		},

		calculateBarHeight: function(ruler) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			if (yScale.options.barThickness) {
				return yScale.options.barThickness;
			}
			return ruler.barHeight;
		},

		// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
		getStackIndex: function(datasetIndex) {
			var me = this;
			var meta = me.chart.getDatasetMeta(datasetIndex);
			var xScale = me.getScaleForId(meta.xAxisID);
			var dsMeta, j;
			var stacks = [meta.stack];

			for (j = 0; j < datasetIndex; ++j) {
				dsMeta = this.chart.getDatasetMeta(j);
				if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
					(xScale.options.stacked === false ||
					(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}

			return stacks.length - 1;
		},

		calculateBarX: function(index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var value = Number(me.getDataset().data[index]);

			if (xScale.options.stacked ||
				(xScale.options.stacked === undefined && meta.stack !== undefined)) {
				var base = xScale.getBaseValue();
				var sumPos = base,
					sumNeg = base;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = me.chart.data.datasets[i];
					var dsMeta = me.chart.getDatasetMeta(i);
					if (dsMeta.bar && dsMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i) &&
						meta.stack === dsMeta.stack) {
						var stackedVal = Number(ds.data[index]);
						if (stackedVal < 0) {
							sumNeg += stackedVal || 0;
						} else {
							sumPos += stackedVal || 0;
						}
					}
				}

				if (value < 0) {
					return xScale.getPixelForValue(sumNeg + value);
				}
				return xScale.getPixelForValue(sumPos + value);
			}

			return xScale.getPixelForValue(value);
		},

		calculateBarY: function(index, datasetIndex, ruler) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var stackIndex = me.getStackIndex(datasetIndex);
			var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
			topTick -= me.chart.isCombo ? (ruler.tickHeight / 2) : 0;

			return topTick +
				(ruler.barHeight / 2) +
				ruler.categorySpacing +
				(ruler.barHeight * stackIndex) +
				(ruler.barSpacing / 2) +
				(ruler.barSpacing * stackIndex);
		}
	});
};

},{}],16:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bubble = {
		hover: {
			mode: 'single'
		},

		scales: {
			xAxes: [{
				type: 'linear', // bubble should probably use a linear scale by default
				position: 'bottom',
				id: 'x-axis-0' // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: 'linear',
				position: 'left',
				id: 'y-axis-0'
			}]
		},

		tooltips: {
			callbacks: {
				title: function() {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
					return datasetLabel + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ', ' + dataPoint.r + ')';
				}
			}
		}
	};

	Chart.controllers.bubble = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Point,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data;

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			});
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);

			var custom = point.custom || {};
			var dataset = me.getDataset();
			var data = dataset.data[index];
			var pointElementOptions = me.chart.options.elements.point;
			var dsIndex = me.index;

			helpers.extend(point, {
				// Utility
				_xScale: xScale,
				_yScale: yScale,
				_datasetIndex: dsIndex,
				_index: index,

				// Desired view properties
				_model: {
					x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex, me.chart.isCombo),
					y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
					// Appearance
					radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
				}
			});

			// Trick to reset the styles of the point
			Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);

			var model = point._model;
			model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));

			point.pivot();
		},

		getRadius: function(value) {
			return value.r || this.chart.options.elements.point.radius;
		},

		setHoverStyle: function(point) {
			var me = this;
			Chart.DatasetController.prototype.setHoverStyle.call(me, point);

			// Radius
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;
			model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[index]);
		},

		removeHoverStyle: function(point) {
			var me = this;
			Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);

			var dataVal = me.chart.data.datasets[point._datasetIndex].data[point._index];
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
		}
	});
};

},{}],17:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		defaults = Chart.defaults;

	defaults.doughnut = {
		animation: {
			// Boolean - Whether we animate the rotation of the Doughnut
			animateRotate: true,
			// Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale: false
		},
		aspectRatio: 1,
		hover: {
			mode: 'single'
		},
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			var data = chart.data;
			var datasets = data.datasets;
			var labels = data.labels;

			if (datasets.length) {
				for (var i = 0; i < datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
					if (labels[i]) {
						text.push(labels[i]);
					}
					text.push('</li>');
				}
			}

			text.push('</ul>');
			return text.join('');
		},
		legend: {
			labels: {
				generateLabels: function(chart) {
					var data = chart.data;
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							var meta = chart.getDatasetMeta(0);
							var ds = data.datasets[0];
							var arc = meta.data[i];
							var custom = arc && arc.custom || {};
							var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
							var arcOpts = chart.options.elements.arc;
							var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
							var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
							var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

							return {
								text: label,
								fillStyle: fill,
								strokeStyle: stroke,
								lineWidth: bw,
								hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

								// Extra data used for toggling the correct item
								index: i
							};
						});
					}
					return [];
				}
			},

			onClick: function(e, legendItem) {
				var index = legendItem.index;
				var chart = this.chart;
				var i, ilen, meta;

				for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
					meta = chart.getDatasetMeta(i);
					// toggle visibility of index if exists
					if (meta.data[index]) {
						meta.data[index].hidden = !meta.data[index].hidden;
					}
				}

				chart.update();
			}
		},

		// The percentage of the chart that we cut out of the middle.
		cutoutPercentage: 50,

		// The rotation of the chart, where the first data arc begins.
		rotation: Math.PI * -0.5,

		// The total circumference of the chart.
		circumference: Math.PI * 2.0,

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					var dataLabel = data.labels[tooltipItem.index];
					var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

					if (helpers.isArray(dataLabel)) {
						// show value on first line of multiline label
						// need to clone because we are changing the value
						dataLabel = dataLabel.slice();
						dataLabel[0] += value;
					} else {
						dataLabel += value;
					}

					return dataLabel;
				}
			}
		}
	};

	defaults.pie = helpers.clone(defaults.doughnut);
	helpers.extend(defaults.pie, {
		cutoutPercentage: 0
	});


	Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Arc,

		linkScales: helpers.noop,

		// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
		getRingIndex: function(datasetIndex) {
			var ringIndex = 0;

			for (var j = 0; j < datasetIndex; ++j) {
				if (this.chart.isDatasetVisible(j)) {
					++ringIndex;
				}
			}

			return ringIndex;
		},

		update: function(reset) {
			var me = this;
			var chart = me.chart,
				chartArea = chart.chartArea,
				opts = chart.options,
				arcOpts = opts.elements.arc,
				availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
				availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
				minSize = Math.min(availableWidth, availableHeight),
				offset = {
					x: 0,
					y: 0
				},
				meta = me.getMeta(),
				cutoutPercentage = opts.cutoutPercentage,
				circumference = opts.circumference;

			// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
			if (circumference < Math.PI * 2.0) {
				var startAngle = opts.rotation % (Math.PI * 2.0);
				startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
				var endAngle = startAngle + circumference;
				var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
				var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
				var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
				var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
				var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
				var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
				var cutout = cutoutPercentage / 100.0;
				var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
				var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
				var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
				minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
				offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
			}

			chart.borderWidth = me.getMaxBorderWidth(meta.data);
			chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
			chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
			chart.offsetX = offset.x * chart.outerRadius;
			chart.offsetY = offset.y * chart.outerRadius;

			meta.total = me.calculateTotal();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
			me.innerRadius = Math.max(me.outerRadius - chart.radiusLength, 0);

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart,
				chartArea = chart.chartArea,
				opts = chart.options,
				animationOpts = opts.animation,
				centerX = (chartArea.left + chartArea.right) / 2,
				centerY = (chartArea.top + chartArea.bottom) / 2,
				startAngle = opts.rotation, // non reset case handled later
				endAngle = opts.rotation, // non reset case handled later
				dataset = me.getDataset(),
				circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
				innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
				outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
				valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,

				// Desired view properties
				_model: {
					x: centerX + chart.offsetX,
					y: centerY + chart.offsetY,
					startAngle: startAngle,
					endAngle: endAngle,
					circumference: circumference,
					outerRadius: outerRadius,
					innerRadius: innerRadius,
					label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
				}
			});

			var model = arc._model;
			// Resets the visual styles
			this.removeHoverStyle(arc);

			// Set correct angles if not resetting
			if (!reset || !animationOpts.animateRotate) {
				if (index === 0) {
					model.startAngle = opts.rotation;
				} else {
					model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
				}

				model.endAngle = model.startAngle + model.circumference;
			}

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		calculateTotal: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var total = 0;
			var value;

			helpers.each(meta.data, function(element, index) {
				value = dataset.data[index];
				if (!isNaN(value) && !element.hidden) {
					total += Math.abs(value);
				}
			});

			/* if (total === 0) {
				total = NaN;
			}*/

			return total;
		},

		calculateCircumference: function(value) {
			var total = this.getMeta().total;
			if (total > 0 && !isNaN(value)) {
				return (Math.PI * 2.0) * (value / total);
			}
			return 0;
		},

		// gets the max border or hover width to properly scale pie charts
		getMaxBorderWidth: function(elements) {
			var max = 0,
				index = this.index,
				length = elements.length,
				borderWidth,
				hoverWidth;

			for (var i = 0; i < length; i++) {
				borderWidth = elements[i]._model ? elements[i]._model.borderWidth : 0;
				hoverWidth = elements[i]._chart ? elements[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
			return max;
		}
	});
};

},{}],18:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.line = {
		showLines: true,
		spanGaps: false,

		hover: {
			mode: 'label'
		},

		scales: {
			xAxes: [{
				type: 'category',
				id: 'x-axis-0'
			}],
			yAxes: [{
				type: 'linear',
				id: 'y-axis-0'
			}]
		}
	};

	function lineEnabled(dataset, options) {
		return helpers.getValueOrDefault(dataset.showLine, options.showLines);
	}

	Chart.controllers.line = Chart.DatasetController.extend({

		datasetElementType: Chart.elements.Line,

		dataElementType: Chart.elements.Point,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data || [];
			var options = me.chart.options;
			var lineElementOptions = options.elements.line;
			var scale = me.getScaleForId(meta.yAxisID);
			var i, ilen, custom;
			var dataset = me.getDataset();
			var showLine = lineEnabled(dataset, options);

			// Update Line
			if (showLine) {
				custom = line.custom || {};

				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
					dataset.lineTension = dataset.tension;
				}

				// Utility
				line._scale = scale;
				line._datasetIndex = me.index;
				// Data
				line._children = points;
				// Model
				line._model = {
					// Appearance
					// The default behavior of lines is to break at null values, according
					// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
					// This option gives lines the ability to span gaps
					spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					steppedLine: custom.steppedLine ? custom.steppedLine : helpers.getValueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
					cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.getValueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
					// Scale
					scaleTop: scale.top,
					scaleBottom: scale.bottom,
					scaleZero: scale.getBasePixel()
				};

				line.pivot();
			}

			// Update Points
			for (i=0, ilen=points.length; i<ilen; ++i) {
				me.updateElement(points[i], i, reset);
			}

			if (showLine && line._model.tension !== 0) {
				me.updateBezierControlPoints();
			}

			// Now pivot the point for animation
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].pivot();
			}
		},

		getPointBackgroundColor: function(point, index) {
			var backgroundColor = this.chart.options.elements.point.backgroundColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.backgroundColor) {
				backgroundColor = custom.backgroundColor;
			} else if (dataset.pointBackgroundColor) {
				backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
			} else if (dataset.backgroundColor) {
				backgroundColor = dataset.backgroundColor;
			}

			return backgroundColor;
		},

		getPointBorderColor: function(point, index) {
			var borderColor = this.chart.options.elements.point.borderColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.borderColor) {
				borderColor = custom.borderColor;
			} else if (dataset.pointBorderColor) {
				borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
			} else if (dataset.borderColor) {
				borderColor = dataset.borderColor;
			}

			return borderColor;
		},

		getPointBorderWidth: function(point, index) {
			var borderWidth = this.chart.options.elements.point.borderWidth;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (!isNaN(custom.borderWidth)) {
				borderWidth = custom.borderWidth;
			} else if (!isNaN(dataset.pointBorderWidth)) {
				borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
			} else if (!isNaN(dataset.borderWidth)) {
				borderWidth = dataset.borderWidth;
			}

			return borderWidth;
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var datasetIndex = me.index;
			var value = dataset.data[index];
			var yScale = me.getScaleForId(meta.yAxisID);
			var xScale = me.getScaleForId(meta.xAxisID);
			var pointOptions = me.chart.options.elements.point;
			var x, y;
			var labels = me.chart.data.labels || [];
			var includeOffset = (labels.length === 1 || dataset.data.length === 1) || me.chart.isCombo;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}
			if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
				dataset.pointHitRadius = dataset.hitRadius;
			}

			x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex, includeOffset);
			y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

			// Utility
			point._xScale = xScale;
			point._yScale = yScale;
			point._datasetIndex = datasetIndex;
			point._index = index;

			// Desired view properties
			point._model = {
				x: x,
				y: y,
				skip: custom.skip || isNaN(x) || isNaN(y),
				// Appearance
				radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
				pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
				backgroundColor: me.getPointBackgroundColor(point, index),
				borderColor: me.getPointBorderColor(point, index),
				borderWidth: me.getPointBorderWidth(point, index),
				tension: meta.dataset._model ? meta.dataset._model.tension : 0,
				steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
				// Tooltip
				hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
			};
		},

		calculatePointY: function(value, index, datasetIndex) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var sumPos = 0;
			var sumNeg = 0;
			var i, ds, dsMeta;

			if (yScale.options.stacked) {
				for (i = 0; i < datasetIndex; i++) {
					ds = chart.data.datasets[i];
					dsMeta = chart.getDatasetMeta(i);
					if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
						var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
						if (stackedRightValue < 0) {
							sumNeg += stackedRightValue || 0;
						} else {
							sumPos += stackedRightValue || 0;
						}
					}
				}

				var rightValue = Number(yScale.getRightValue(value));
				if (rightValue < 0) {
					return yScale.getPixelForValue(sumNeg + rightValue);
				}
				return yScale.getPixelForValue(sumPos + rightValue);
			}

			return yScale.getPixelForValue(value);
		},

		updateBezierControlPoints: function() {
			var me = this;
			var meta = me.getMeta();
			var area = me.chart.chartArea;
			var points = (meta.data || []);
			var i, ilen, point, model, controlPoints;

			// Only consider points that are drawn in case the spanGaps option is used
			if (meta.dataset._model.spanGaps) {
				points = points.filter(function(pt) {
					return !pt._model.skip;
				});
			}

			function capControlPoint(pt, min, max) {
				return Math.max(Math.min(pt, max), min);
			}

			if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
				helpers.splineCurveMonotone(points);
			} else {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					point = points[i];
					model = point._model;
					controlPoints = helpers.splineCurve(
						helpers.previousItem(points, i)._model,
						model,
						helpers.nextItem(points, i)._model,
						meta.dataset._model.tension
					);
					model.controlPointPreviousX = controlPoints.previous.x;
					model.controlPointPreviousY = controlPoints.previous.y;
					model.controlPointNextX = controlPoints.next.x;
					model.controlPointNextY = controlPoints.next.y;
				}
			}

			if (me.chart.options.elements.line.capBezierPoints) {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					model = points[i]._model;
					model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
					model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
					model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
				}
			}
		},

		draw: function(ease) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data || [];
			var easingDecimal = ease || 1;
			var i, ilen;

			// Transition Point Locations
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].transition(easingDecimal);
			}

			Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
			// Transition and Draw the line
			if (lineEnabled(me.getDataset(), me.chart.options)) {
				meta.dataset.transition(easingDecimal).draw();
			}
			Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);

			// Draw the points
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].draw(me.chart.chartArea);
			}
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var me = this;
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}

			model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
			model.backgroundColor = me.getPointBackgroundColor(point, index);
			model.borderColor = me.getPointBorderColor(point, index);
			model.borderWidth = me.getPointBorderWidth(point, index);
		}
	});
};

},{}],19:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.polarArea = {

		scale: {
			type: 'radialLinear',
			lineArc: true, // so that lines are circular
			ticks: {
				beginAtZero: true
			}
		},

		// Boolean - Whether to animate the rotation of the chart
		animation: {
			animateRotate: true,
			animateScale: true
		},

		startAngle: -0.5 * Math.PI,
		aspectRatio: 1,
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			var data = chart.data;
			var datasets = data.datasets;
			var labels = data.labels;

			if (datasets.length) {
				for (var i = 0; i < datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
					if (labels[i]) {
						text.push(labels[i]);
					}
					text.push('</li>');
				}
			}

			text.push('</ul>');
			return text.join('');
		},
		legend: {
			labels: {
				generateLabels: function(chart) {
					var data = chart.data;
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							var meta = chart.getDatasetMeta(0);
							var ds = data.datasets[0];
							var arc = meta.data[i];
							var custom = arc.custom || {};
							var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
							var arcOpts = chart.options.elements.arc;
							var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
							var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
							var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

							return {
								text: label,
								fillStyle: fill,
								strokeStyle: stroke,
								lineWidth: bw,
								hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

								// Extra data used for toggling the correct item
								index: i
							};
						});
					}
					return [];
				}
			},

			onClick: function(e, legendItem) {
				var index = legendItem.index;
				var chart = this.chart;
				var i, ilen, meta;

				for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
					meta = chart.getDatasetMeta(i);
					meta.data[index].hidden = !meta.data[index].hidden;
				}

				chart.update();
			}
		},

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
				}
			}
		}
	};

	Chart.controllers.polarArea = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Arc,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var meta = me.getMeta();
			var opts = chart.options;
			var arcOpts = opts.elements.arc;
			var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
			chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
			chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
			me.innerRadius = me.outerRadius - chart.radiusLength;

			meta.count = me.countVisibleElements();

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart;
			var dataset = me.getDataset();
			var opts = chart.options;
			var animationOpts = opts.animation;
			var scale = chart.scale;
			var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
			var labels = chart.data.labels;

			var circumference = me.calculateCircumference(dataset.data[index]);
			var centerX = scale.xCenter;
			var centerY = scale.yCenter;

			// If there is NaN data before us, we need to calculate the starting angle correctly.
			// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
			var visibleCount = 0;
			var meta = me.getMeta();
			for (var i = 0; i < index; ++i) {
				if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
					++visibleCount;
				}
			}

			// var negHalfPI = -0.5 * Math.PI;
			var datasetStartAngle = opts.startAngle;
			var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
			var startAngle = datasetStartAngle + (circumference * visibleCount);
			var endAngle = startAngle + (arc.hidden ? 0 : circumference);

			var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: centerX,
					y: centerY,
					innerRadius: 0,
					outerRadius: reset ? resetRadius : distance,
					startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
					endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
					label: getValueAtIndexOrDefault(labels, index, labels[index])
				}
			});

			// Apply border and fill style
			me.removeHoverStyle(arc);

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		countVisibleElements: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var count = 0;

			helpers.each(meta.data, function(element, index) {
				if (!isNaN(dataset.data[index]) && !element.hidden) {
					count++;
				}
			});

			return count;
		},

		calculateCircumference: function(value) {
			var count = this.getMeta().count;
			if (count > 0 && !isNaN(value)) {
				return (2 * Math.PI) / count;
			}
			return 0;
		}
	});
};

},{}],20:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.radar = {
		aspectRatio: 1,
		scale: {
			type: 'radialLinear'
		},
		elements: {
			line: {
				tension: 0 // no bezier in radar
			}
		}
	};

	Chart.controllers.radar = Chart.DatasetController.extend({

		datasetElementType: Chart.elements.Line,

		dataElementType: Chart.elements.Point,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data;
			var custom = line.custom || {};
			var dataset = me.getDataset();
			var lineElementOptions = me.chart.options.elements.line;
			var scale = me.chart.scale;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
				dataset.lineTension = dataset.tension;
			}

			helpers.extend(meta.dataset, {
				// Utility
				_datasetIndex: me.index,
				// Data
				_children: points,
				_loop: true,
				// Model
				_model: {
					// Appearance
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),

					// Scale
					scaleTop: scale.top,
					scaleBottom: scale.bottom,
					scaleZero: scale.getBasePosition()
				}
			});

			meta.dataset.pivot();

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			}, me);

			// Update bezier control points
			me.updateBezierControlPoints();
		},
		updateElement: function(point, index, reset) {
			var me = this;
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var scale = me.chart.scale;
			var pointElementOptions = me.chart.options.elements.point;
			var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

			helpers.extend(point, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
					y: reset ? scale.yCenter : pointPosition.y,

					// Appearance
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, me.chart.options.elements.line.tension),
					radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
					pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
				}
			});

			point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
		},
		updateBezierControlPoints: function() {
			var chartArea = this.chart.chartArea;
			var meta = this.getMeta();

			helpers.each(meta.data, function(point, index) {
				var model = point._model;
				var controlPoints = helpers.splineCurve(
					helpers.previousItem(meta.data, index, true)._model,
					model,
					helpers.nextItem(meta.data, index, true)._model,
					model.tension
				);

				// Prevent the bezier going outside of the bounds of the graph
				model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
				model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);

				model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
				model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

				// Now pivot the point for animation
				point.pivot();
			});
		},

		draw: function(ease) {
			var meta = this.getMeta();
			var easingDecimal = ease || 1;

			// Transition Point Locations
			helpers.each(meta.data, function(point) {
				point.transition(easingDecimal);
			});

			// Transition and Draw the line
			meta.dataset.transition(easingDecimal).draw();

			// Draw the points
			helpers.each(meta.data, function(point) {
				point.draw();
			});
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;

			model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;
			var pointElementOptions = this.chart.options.elements.point;

			model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.radius, index, pointElementOptions.radius);
			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
		}
	});
};

},{}],21:[function(require,module,exports){
/* global window: false */
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.animation = {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers.noop,
		onComplete: helpers.noop
	};

	Chart.Animation = Chart.Element.extend({
		currentStep: null, // the current animation step
		numSteps: 60, // default number of steps
		easing: '', // the easing to use for this animation
		render: null, // render function used by the animation service

		onAnimationProgress: null, // user specified callback to fire on each step of the animation
		onAnimationComplete: null // user specified callback to fire when the animation finishes
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		request: null,

		/**
		 * @function Chart.animationService.addAnimation
		 * @param chartInstance {ChartController} the chart to animate
		 * @param animationObject {IAnimation} the animation that we will animate
		 * @param duration {Number} length of animation in ms
		 * @param lazy {Boolean} if true, the chart is not marked as animating to enable more responsive interactions
		 */
		addAnimation: function(chartInstance, animationObject, duration, lazy) {
			var me = this;

			if (!lazy) {
				chartInstance.animating = true;
			}

			for (var index = 0; index < me.animations.length; ++index) {
				if (me.animations[index].chartInstance === chartInstance) {
					// replacing an in progress animation
					me.animations[index].animationObject = animationObject;
					return;
				}
			}

			me.animations.push({
				chartInstance: chartInstance,
				animationObject: animationObject
			});

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (me.animations.length === 1) {
				me.requestAnimationFrame();
			}
		},
		// Cancel the animation for a given chart instance
		cancelAnimation: function(chartInstance) {
			var index = helpers.findIndex(this.animations, function(animationWrapper) {
				return animationWrapper.chartInstance === chartInstance;
			});

			if (index !== -1) {
				this.animations.splice(index, 1);
				chartInstance.animating = false;
			}
		},
		requestAnimationFrame: function() {
			var me = this;
			if (me.request === null) {
				// Skip animation frame requests until the active one is executed.
				// This can happen when processing mouse events, e.g. 'mousemove'
				// and 'mouseout' events will trigger multiple renders.
				me.request = helpers.requestAnimFrame.call(window, function() {
					me.request = null;
					me.startDigest();
				});
			}
		},
		startDigest: function() {
			var me = this;

			var startTime = Date.now();
			var framesToDrop = 0;

			if (me.dropFrames > 1) {
				framesToDrop = Math.floor(me.dropFrames);
				me.dropFrames = me.dropFrames % 1;
			}

			var i = 0;
			while (i < me.animations.length) {
				if (me.animations[i].animationObject.currentStep === null) {
					me.animations[i].animationObject.currentStep = 0;
				}

				me.animations[i].animationObject.currentStep += 1 + framesToDrop;

				if (me.animations[i].animationObject.currentStep > me.animations[i].animationObject.numSteps) {
					me.animations[i].animationObject.currentStep = me.animations[i].animationObject.numSteps;
				}

				me.animations[i].animationObject.render(me.animations[i].chartInstance, me.animations[i].animationObject);
				if (me.animations[i].animationObject.onAnimationProgress && me.animations[i].animationObject.onAnimationProgress.call) {
					me.animations[i].animationObject.onAnimationProgress.call(me.animations[i].chartInstance, me.animations[i]);
				}

				if (me.animations[i].animationObject.currentStep === me.animations[i].animationObject.numSteps) {
					if (me.animations[i].animationObject.onAnimationComplete && me.animations[i].animationObject.onAnimationComplete.call) {
						me.animations[i].animationObject.onAnimationComplete.call(me.animations[i].chartInstance, me.animations[i]);
					}

					// executed the last frame. Remove the animation.
					me.animations[i].chartInstance.animating = false;

					me.animations.splice(i, 1);
				} else {
					++i;
				}
			}

			var endTime = Date.now();
			var dropFrames = (endTime - startTime) / me.frameDuration;

			me.dropFrames += dropFrames;

			// Do we have more stuff to animate?
			if (me.animations.length > 0) {
				me.requestAnimationFrame();
			}
		}
	};
};

},{}],22:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
	// Global Chart canvas helpers object for drawing items to canvas
	var helpers = Chart.canvasHelpers = {};

	helpers.drawPoint = function(ctx, pointStyle, radius, x, y) {
		var type, edgeLength, xOffset, yOffset, height, size;

		if (typeof pointStyle === 'object') {
			type = pointStyle.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2);
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		switch (pointStyle) {
		// Default includes circle
		default:
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
			break;
		case 'triangle':
			ctx.beginPath();
			edgeLength = 3 * radius / Math.sqrt(3);
			height = edgeLength * Math.sqrt(3) / 2;
			ctx.moveTo(x - edgeLength / 2, y + height / 3);
			ctx.lineTo(x + edgeLength / 2, y + height / 3);
			ctx.lineTo(x, y - 2 * height / 3);
			ctx.closePath();
			ctx.fill();
			break;
		case 'rect':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
			ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
			break;
		case 'rectRounded':
			var offset = radius / Math.SQRT2;
			var leftX = x - offset;
			var topY = y - offset;
			var sideSize = Math.SQRT2 * radius;
			Chart.helpers.drawRoundedRectangle(ctx, leftX, topY, sideSize, sideSize, radius / 2);
			ctx.fill();
			break;
		case 'rectRot':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.moveTo(x - size, y);
			ctx.lineTo(x, y + size);
			ctx.lineTo(x + size, y);
			ctx.lineTo(x, y - size);
			ctx.closePath();
			ctx.fill();
			break;
		case 'cross':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'crossRot':
			ctx.beginPath();
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'star':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'line':
			ctx.beginPath();
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'dash':
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		}

		ctx.stroke();
	};

	helpers.clipArea = function(ctx, clipArea) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(clipArea.left, clipArea.top, clipArea.right - clipArea.left, clipArea.bottom - clipArea.top);
		ctx.clip();
	};

	helpers.unclipArea = function(ctx) {
		ctx.restore();
	};

};

},{}],23:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var plugins = Chart.plugins;
	var platform = Chart.platform;

	// Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	// Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	// Controllers available for dataset visualization eg. bar, line, slice, etc.
	Chart.controllers = {};

	/**
	 * Initializes the given config with global and chart default values.
	 */
	function initConfig(config) {
		config = config || {};

		// Do NOT use configMerge() for the data object because this method merges arrays
		// and so would change references to labels and datasets, preventing data updates.
		var data = config.data = config.data || {};
		data.datasets = data.datasets || [];
		data.labels = data.labels || [];

		config.options = helpers.configMerge(
			Chart.defaults.global,
			Chart.defaults[config.type],
			config.options || {});

		return config;
	}

	/**
	 * Updates the config of the chart
	 * @param chart {Chart.Controller} chart to update the options for
	 */
	function updateConfig(chart) {
		var newOptions = chart.options;

		// Update Scale(s) with options
		if (newOptions.scale) {
			chart.scale.options = newOptions.scale;
		} else if (newOptions.scales) {
			newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions) {
				chart.scales[scaleOptions.id].options = scaleOptions;
			});
		}

		// Tooltip
		chart.tooltip._options = newOptions.tooltips;
	}

	/**
	 * @class Chart.Controller
	 * The main controller of a chart.
	 */
	Chart.Controller = function(item, config, instance) {
		var me = this;

		config = initConfig(config);

		var context = platform.acquireContext(item, config);
		var canvas = context && context.canvas;
		var height = canvas && canvas.height;
		var width = canvas && canvas.width;

		instance.ctx = context;
		instance.canvas = canvas;
		instance.config = config;
		instance.width = width;
		instance.height = height;
		instance.aspectRatio = height? width / height : null;

		me.id = helpers.uid();
		me.chart = instance;
		me.config = config;
		me.options = config.options;
		me._bufferedRender = false;

		// Add the chart instance to the global namespace
		Chart.instances[me.id] = me;

		Object.defineProperty(me, 'data', {
			get: function() {
				return me.config.data;
			}
		});

		if (!context || !canvas) {
			// The given item is not a compatible context2d element, let's return before finalizing
			// the chart initialization but after setting basic chart / controller properties that
			// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
			// https://github.com/chartjs/Chart.js/issues/2807
			console.error("Failed to create chart: can't acquire context from the given item");
			return me;
		}

		me.initialize();
		me.update();

		return me;
	};

	helpers.extend(Chart.Controller.prototype, /** @lends Chart.Controller.prototype */ {
		initialize: function() {
			var me = this;

			// Before init plugin notification
			plugins.notify(me, 'beforeInit');

			helpers.retinaScale(me.chart);

			me.bindEvents();

			if (me.options.responsive) {
				// Initial resize before chart draws (must be silent to preserve initial animations).
				me.resize(true);
			}

			// Make sure scales have IDs and are built before we build any controllers.
			me.ensureScalesHaveIDs();
			me.buildScales();
			me.initToolTip();

			// After init plugin notification
			plugins.notify(me, 'afterInit');

			return me;
		},

		clear: function() {
			helpers.clear(this.chart);
			return this;
		},

		stop: function() {
			// Stops any current animation loop occurring
			Chart.animationService.cancelAnimation(this);
			return this;
		},

		resize: function(silent) {
			var me = this;
			var chart = me.chart;
			var options = me.options;
			var canvas = chart.canvas;
			var aspectRatio = (options.maintainAspectRatio && chart.aspectRatio) || null;

			// the canvas render width and height will be casted to integers so make sure that
			// the canvas display style uses the same integer values to avoid blurring effect.
			var newWidth = Math.floor(helpers.getMaximumWidth(canvas));
			var newHeight = Math.floor(aspectRatio? newWidth / aspectRatio : helpers.getMaximumHeight(canvas));

			if (chart.width === newWidth && chart.height === newHeight) {
				return;
			}

			canvas.width = chart.width = newWidth;
			canvas.height = chart.height = newHeight;
			canvas.style.width = newWidth + 'px';
			canvas.style.height = newHeight + 'px';

			helpers.retinaScale(chart);

			if (!silent) {
				// Notify any plugins about the resize
				var newSize = {width: newWidth, height: newHeight};
				plugins.notify(me, 'resize', [newSize]);

				// Notify of resize
				if (me.options.onResize) {
					me.options.onResize(me, newSize);
				}

				me.stop();
				me.update(me.options.responsiveAnimationDuration);
			}
		},

		ensureScalesHaveIDs: function() {
			var options = this.options;
			var scalesOptions = options.scales || {};
			var scaleOptions = options.scale;

			helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
				xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
			});

			helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
				yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
			});

			if (scaleOptions) {
				scaleOptions.id = scaleOptions.id || 'scale';
			}
		},

		/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */
		buildScales: function() {
			var me = this;
			var options = me.options;
			var scales = me.scales = {};
			var items = [];

			if (options.scales) {
				items = items.concat(
					(options.scales.xAxes || []).map(function(xAxisOptions) {
						return {options: xAxisOptions, dtype: 'category'};
					}),
					(options.scales.yAxes || []).map(function(yAxisOptions) {
						return {options: yAxisOptions, dtype: 'linear'};
					})
				);
			}

			if (options.scale) {
				items.push({options: options.scale, dtype: 'radialLinear', isDefault: true});
			}

			helpers.each(items, function(item) {
				var scaleOptions = item.options;
				var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
				var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}

				var scale = new scaleClass({
					id: scaleOptions.id,
					options: scaleOptions,
					ctx: me.chart.ctx,
					chart: me
				});

				scales[scale.id] = scale;

				// TODO(SB): I think we should be able to remove this custom case (options.scale)
				// and consider it as a regular scale part of the "scales"" map only! This would
				// make the logic easier and remove some useless? custom code.
				if (item.isDefault) {
					me.scale = scale;
				}
			});

			Chart.scaleService.addScalesToLayout(this);
		},

		buildOrUpdateControllers: function() {
			var me = this;
			var types = [];
			var newControllers = [];

			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				var meta = me.getDatasetMeta(datasetIndex);
				if (!meta.type) {
					meta.type = dataset.type || me.config.type;
				}

				types.push(meta.type);

				if (meta.controller) {
					meta.controller.updateIndex(datasetIndex);
				} else {
					meta.controller = new Chart.controllers[meta.type](me, datasetIndex);
					newControllers.push(meta.controller);
				}
			}, me);

			if (types.length > 1) {
				for (var i = 1; i < types.length; i++) {
					if (types[i] !== types[i - 1]) {
						me.isCombo = true;
						break;
					}
				}
			}

			return newControllers;
		},

		/**
		 * Reset the elements of all datasets
		 * @private
		 */
		resetElements: function() {
			var me = this;
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.reset();
			}, me);
		},

		/**
		* Resets the chart back to it's state before the initial animation
		*/
		reset: function() {
			this.resetElements();
			this.tooltip.initialize();
		},

		update: function(animationDuration, lazy) {
			var me = this;

			updateConfig(me);

			if (plugins.notify(me, 'beforeUpdate') === false) {
				return;
			}

			// In case the entire data object changed
			me.tooltip._data = me.data;

			// Make sure dataset controllers are updated and new controllers are reset
			var newControllers = me.buildOrUpdateControllers();

			// Make sure all dataset controllers have correct meta data counts
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
			}, me);

			me.updateLayout();

			// Can only reset the new controllers after the scales have been updated
			helpers.each(newControllers, function(controller) {
				controller.reset();
			});

			me.updateDatasets();

			// Do this before render so that any plugins that need final scale updates can use it
			plugins.notify(me, 'afterUpdate');

			if (me._bufferedRender) {
				me._bufferedRequest = {
					lazy: lazy,
					duration: animationDuration
				};
			} else {
				me.render(animationDuration, lazy);
			}
		},

		/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */
		updateLayout: function() {
			var me = this;

			if (plugins.notify(me, 'beforeLayout') === false) {
				return;
			}

			Chart.layoutService.update(this, this.chart.width, this.chart.height);

			/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 */
			plugins.notify(me, 'afterScaleUpdate');
			plugins.notify(me, 'afterLayout');
		},

		/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */
		updateDatasets: function() {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsUpdate') === false) {
				return;
			}

			for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				me.getDatasetMeta(i).controller.update();
			}

			plugins.notify(me, 'afterDatasetsUpdate');
		},

		render: function(duration, lazy) {
			var me = this;

			if (plugins.notify(me, 'beforeRender') === false) {
				return;
			}

			var animationOptions = me.options.animation;
			var onComplete = function() {
				plugins.notify(me, 'afterRender');
				var callback = animationOptions && animationOptions.onComplete;
				if (callback && callback.call) {
					callback.call(me);
				}
			};

			if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
				var animation = new Chart.Animation();
				animation.numSteps = (duration || animationOptions.duration) / 16.66; // 60 fps
				animation.easing = animationOptions.easing;

				// render function
				animation.render = function(chartInstance, animationObject) {
					var easingFunction = helpers.easingEffects[animationObject.easing];
					var stepDecimal = animationObject.currentStep / animationObject.numSteps;
					var easeDecimal = easingFunction(stepDecimal);

					chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
				};

				// user events
				animation.onAnimationProgress = animationOptions.onProgress;
				animation.onAnimationComplete = onComplete;

				Chart.animationService.addAnimation(me, animation, duration, lazy);
			} else {
				me.draw();
				onComplete();
			}

			return me;
		},

		draw: function(easingValue) {
			var me = this;

			me.clear();

			if (easingValue === undefined || easingValue === null) {
				easingValue = 1;
			}

			if (plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
				return;
			}

			// Draw all the scales
			helpers.each(me.boxes, function(box) {
				box.draw(me.chartArea);
			}, me);

			if (me.scale) {
				me.scale.draw();
			}

			me.drawDatasets(easingValue);

			// Finally draw the tooltip
			me.tooltip.transition(easingValue).draw();

			plugins.notify(me, 'afterDraw', [easingValue]);
		},

		/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */
		drawDatasets: function(easingValue) {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
				return;
			}

			// Draw each dataset via its respective controller (reversed to support proper line stacking)
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				if (me.isDatasetVisible(datasetIndex)) {
					me.getDatasetMeta(datasetIndex).controller.draw(easingValue);
				}
			}, me, true);

			plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
		},

		// Get the single element that was clicked on
		// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
		getElementAtEvent: function(e) {
			return Chart.Interaction.modes.single(this, e);
		},

		getElementsAtEvent: function(e) {
			return Chart.Interaction.modes.label(this, e, {intersect: true});
		},

		getElementsAtXAxis: function(e) {
			return Chart.Interaction.modes['x-axis'](this, e, {intersect: true});
		},

		getElementsAtEventForMode: function(e, mode, options) {
			var method = Chart.Interaction.modes[mode];
			if (typeof method === 'function') {
				return method(this, e, options);
			}

			return [];
		},

		getDatasetAtEvent: function(e) {
			return Chart.Interaction.modes.dataset(this, e, {intersect: true});
		},

		getDatasetMeta: function(datasetIndex) {
			var me = this;
			var dataset = me.data.datasets[datasetIndex];
			if (!dataset._meta) {
				dataset._meta = {};
			}

			var meta = dataset._meta[me.id];
			if (!meta) {
				meta = dataset._meta[me.id] = {
					type: null,
					data: [],
					dataset: null,
					controller: null,
					hidden: null,			// See isDatasetVisible() comment
					xAxisID: null,
					yAxisID: null
				};
			}

			return meta;
		},

		getVisibleDatasetCount: function() {
			var count = 0;
			for (var i = 0, ilen = this.data.datasets.length; i<ilen; ++i) {
				if (this.isDatasetVisible(i)) {
					count++;
				}
			}
			return count;
		},

		isDatasetVisible: function(datasetIndex) {
			var meta = this.getDatasetMeta(datasetIndex);

			// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
			// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
			return typeof meta.hidden === 'boolean'? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
		},

		generateLegend: function() {
			return this.options.legendCallback(this);
		},

		destroy: function() {
			var me = this;
			var canvas = me.chart.canvas;
			var meta, i, ilen;

			me.stop();

			// dataset controllers need to cleanup associated data
			for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				meta = me.getDatasetMeta(i);
				if (meta.controller) {
					meta.controller.destroy();
					meta.controller = null;
				}
			}

			if (canvas) {
				me.unbindEvents();
				helpers.clear(me.chart);
				platform.releaseContext(me.chart.ctx);
				me.chart.canvas = null;
				me.chart.ctx = null;
			}

			plugins.notify(me, 'destroy');

			delete Chart.instances[me.id];
		},

		toBase64Image: function() {
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		},

		initToolTip: function() {
			var me = this;
			me.tooltip = new Chart.Tooltip({
				_chart: me.chart,
				_chartInstance: me,
				_data: me.data,
				_options: me.options.tooltips
			}, me);
			me.tooltip.initialize();
		},

		/**
		 * @private
		 */
		bindEvents: function() {
			var me = this;
			var listeners = me._listeners = {};
			var listener = function() {
				me.eventHandler.apply(me, arguments);
			};

			helpers.each(me.options.events, function(type) {
				platform.addEventListener(me, type, listener);
				listeners[type] = listener;
			});

			// Responsiveness is currently based on the use of an iframe, however this method causes
			// performance issues and could be troublesome when used with ad blockers. So make sure
			// that the user is still able to create a chart without iframe when responsive is false.
			// See https://github.com/chartjs/Chart.js/issues/2210
			if (me.options.responsive) {
				listener = function() {
					me.resize();
				};

				platform.addEventListener(me, 'resize', listener);
				listeners.resize = listener;
			}
		},

		/**
		 * @private
		 */
		unbindEvents: function() {
			var me = this;
			var listeners = me._listeners;
			if (!listeners) {
				return;
			}

			delete me._listeners;
			helpers.each(listeners, function(listener, type) {
				platform.removeEventListener(me, type, listener);
			});
		},

		updateHoverStyle: function(elements, mode, enabled) {
			var method = enabled? 'setHoverStyle' : 'removeHoverStyle';
			var element, i, ilen;

			for (i=0, ilen=elements.length; i<ilen; ++i) {
				element = elements[i];
				if (element) {
					this.getDatasetMeta(element._datasetIndex).controller[method](element);
				}
			}
		},

		/**
		 * @private
		 */
		eventHandler: function(e) {
			var me = this;
			var tooltip = me.tooltip;

			if (plugins.notify(me, 'beforeEvent', [e]) === false) {
				return;
			}

			// Buffer any update calls so that renders do not occur
			me._bufferedRender = true;
			me._bufferedRequest = null;

			var changed = me.handleEvent(e);
			changed |= tooltip && tooltip.handleEvent(e);

			plugins.notify(me, 'afterEvent', [e]);

			var bufferedRequest = me._bufferedRequest;
			if (bufferedRequest) {
				// If we have an update that was triggered, we need to do a normal render
				me.render(bufferedRequest.duration, bufferedRequest.lazy);
			} else if (changed && !me.animating) {
				// If entering, leaving, or changing elements, animate the change via pivot
				me.stop();

				// We only need to render at this point. Updating will cause scales to be
				// recomputed generating flicker & using more memory than necessary.
				me.render(me.options.hover.animationDuration, true);
			}

			me._bufferedRender = false;
			me._bufferedRequest = null;

			return me;
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me.options || {};
			var hoverOptions = options.hover;
			var changed = false;

			me.lastActive = me.lastActive || [];

			// Find Active Elements for hover and tooltips
			if (e.type === 'mouseout') {
				me.active = [];
			} else {
				me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
			}

			// On Hover hook
			if (hoverOptions.onHover) {
				// Need to call with native event here to not break backwards compatibility
				hoverOptions.onHover.call(me, e.native, me.active);
			}

			if (e.type === 'mouseup' || e.type === 'click') {
				if (options.onClick) {
					// Use e.native here for backwards compatibility
					options.onClick.call(me, e.native, me.active);
				}
			}

			// Remove styling for last active (even if it may still be active)
			if (me.lastActive.length) {
				me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
			}

			// Built in hover styling
			if (me.active.length && hoverOptions.mode) {
				me.updateHoverStyle(me.active, hoverOptions.mode, true);
			}

			changed = !helpers.arrayEquals(me.active, me.lastActive);

			// Remember Last Actives
			me.lastActive = me.active;

			return changed;
		}
	});
};

},{}],24:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

	/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */
	function listenArrayEvents(array, listener) {
		if (array._chartjs) {
			array._chartjs.listeners.push(listener);
			return;
		}

		Object.defineProperty(array, '_chartjs', {
			configurable: true,
			enumerable: false,
			value: {
				listeners: [listener]
			}
		});

		arrayEvents.forEach(function(key) {
			var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
			var base = array[key];

			Object.defineProperty(array, key, {
				configurable: true,
				enumerable: false,
				value: function() {
					var args = Array.prototype.slice.call(arguments);
					var res = base.apply(this, args);

					helpers.each(array._chartjs.listeners, function(object) {
						if (typeof object[method] === 'function') {
							object[method].apply(object, args);
						}
					});

					return res;
				}
			});
		});
	}

	/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */
	function unlistenArrayEvents(array, listener) {
		var stub = array._chartjs;
		if (!stub) {
			return;
		}

		var listeners = stub.listeners;
		var index = listeners.indexOf(listener);
		if (index !== -1) {
			listeners.splice(index, 1);
		}

		if (listeners.length > 0) {
			return;
		}

		arrayEvents.forEach(function(key) {
			delete array[key];
		});

		delete array._chartjs;
	}

	// Base class for all dataset controllers (line, bar, etc)
	Chart.DatasetController = function(chart, datasetIndex) {
		this.initialize(chart, datasetIndex);
	};

	helpers.extend(Chart.DatasetController.prototype, {

		/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */
		datasetElementType: null,

		/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */
		dataElementType: null,

		initialize: function(chart, datasetIndex) {
			var me = this;
			me.chart = chart;
			me.index = datasetIndex;
			me.linkScales();
			me.addElements();
		},

		updateIndex: function(datasetIndex) {
			this.index = datasetIndex;
		},

		linkScales: function() {
			var me = this;
			var meta = me.getMeta();
			var dataset = me.getDataset();

			if (meta.xAxisID === null) {
				meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
			}
			if (meta.yAxisID === null) {
				meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
			}
		},

		getDataset: function() {
			return this.chart.data.datasets[this.index];
		},

		getMeta: function() {
			return this.chart.getDatasetMeta(this.index);
		},

		getScaleForId: function(scaleID) {
			return this.chart.scales[scaleID];
		},

		reset: function() {
			this.update(true);
		},

		/**
		 * @private
		 */
		destroy: function() {
			if (this._data) {
				unlistenArrayEvents(this._data, this);
			}
		},

		createMetaDataset: function() {
			var me = this;
			var type = me.datasetElementType;
			return type && new type({
				_chart: me.chart.chart,
				_datasetIndex: me.index
			});
		},

		createMetaData: function(index) {
			var me = this;
			var type = me.dataElementType;
			return type && new type({
				_chart: me.chart.chart,
				_datasetIndex: me.index,
				_index: index
			});
		},

		addElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data || [];
			var metaData = meta.data;
			var i, ilen;

			for (i=0, ilen=data.length; i<ilen; ++i) {
				metaData[i] = metaData[i] || me.createMetaData(i);
			}

			meta.dataset = meta.dataset || me.createMetaDataset();
		},

		addElementAndReset: function(index) {
			var element = this.createMetaData(index);
			this.getMeta().data.splice(index, 0, element);
			this.updateElement(element, index, true);
		},

		buildOrUpdateElements: function() {
			var me = this;
			var dataset = me.getDataset();
			var data = dataset.data || (dataset.data = []);

			// In order to correctly handle data addition/deletion animation (an thus simulate
			// real-time charts), we need to monitor these data modifications and synchronize
			// the internal meta data accordingly.
			if (me._data !== data) {
				if (me._data) {
					// This case happens when the user replaced the data array instance.
					unlistenArrayEvents(me._data, me);
				}

				listenArrayEvents(data, me);
				me._data = data;
			}

			// Re-sync meta data in case the user replaced the data array or if we missed
			// any updates and so make sure that we handle number of datapoints changing.
			me.resyncElements();
		},

		update: helpers.noop,

		draw: function(ease) {
			var easingDecimal = ease || 1;
			var i, len;
			var metaData = this.getMeta().data;
			for (i = 0, len = metaData.length; i < len; ++i) {
				metaData[i].transition(easingDecimal).draw();
			}
		},

		removeHoverStyle: function(element, elementOpts) {
			var dataset = this.chart.data.datasets[element._datasetIndex],
				index = element._index,
				custom = element.custom || {},
				valueOrDefault = helpers.getValueAtIndexOrDefault,
				model = element._model;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
		},

		setHoverStyle: function(element) {
			var dataset = this.chart.data.datasets[element._datasetIndex],
				index = element._index,
				custom = element.custom || {},
				valueOrDefault = helpers.getValueAtIndexOrDefault,
				getHoverColor = helpers.getHoverColor,
				model = element._model;

			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		/**
		 * @private
		 */
		resyncElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data;
			var numMeta = meta.data.length;
			var numData = data.length;

			if (numData < numMeta) {
				meta.data.splice(numData, numMeta - numData);
			} else if (numData > numMeta) {
				me.insertElements(numMeta, numData - numMeta);
			}
		},

		/**
		 * @private
		 */
		insertElements: function(start, count) {
			for (var i=0; i<count; ++i) {
				this.addElementAndReset(start + i);
			}
		},

		/**
		 * @private
		 */
		onDataPush: function() {
			this.insertElements(this.getDataset().data.length-1, arguments.length);
		},

		/**
		 * @private
		 */
		onDataPop: function() {
			this.getMeta().data.pop();
		},

		/**
		 * @private
		 */
		onDataShift: function() {
			this.getMeta().data.shift();
		},

		/**
		 * @private
		 */
		onDataSplice: function(start, count) {
			this.getMeta().data.splice(start, count);
			this.insertElements(start, arguments.length - 2);
		},

		/**
		 * @private
		 */
		onDataUnshift: function() {
			this.insertElements(0, arguments.length);
		}
	});

	Chart.DatasetController.extend = helpers.inherits;
};

},{}],25:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.elements = {};

	Chart.Element = function(configuration) {
		helpers.extend(this, configuration);
		this.initialize.apply(this, arguments);
	};

	helpers.extend(Chart.Element.prototype, {

		initialize: function() {
			this.hidden = false;
		},

		pivot: function() {
			var me = this;
			if (!me._view) {
				me._view = helpers.clone(me._model);
			}
			me._start = helpers.clone(me._view);
			return me;
		},

		transition: function(ease) {
			var me = this;

			if (!me._view) {
				me._view = helpers.clone(me._model);
			}

			// No animation -> No Transition
			if (ease === 1) {
				me._view = me._model;
				me._start = null;
				return me;
			}

			if (!me._start) {
				me.pivot();
			}

			helpers.each(me._model, function(value, key) {

				if (key[0] === '_') {
					// Only non-underscored properties
				// Init if doesn't exist
				} else if (!me._view.hasOwnProperty(key)) {
					if (typeof value === 'number' && !isNaN(me._view[key])) {
						me._view[key] = value * ease;
					} else {
						me._view[key] = value;
					}
				// No unnecessary computations
				} else if (value === me._view[key]) {
					// It's the same! Woohoo!
				// Color transitions if possible
				} else if (typeof value === 'string') {
					try {
						var color = helpers.color(me._model[key]).mix(helpers.color(me._start[key]), ease);
						me._view[key] = color.rgbString();
					} catch (err) {
						me._view[key] = value;
					}
				// Number transitions
				} else if (typeof value === 'number') {
					var startVal = me._start[key] !== undefined && isNaN(me._start[key]) === false ? me._start[key] : 0;
					me._view[key] = ((me._model[key] - startVal) * ease) + startVal;
				// Everything else
				} else {
					me._view[key] = value;
				}
			}, me);

			return me;
		},

		tooltipPosition: function() {
			return {
				x: this._model.x,
				y: this._model.y
			};
		},

		hasValue: function() {
			return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
		}
	});

	Chart.Element.extend = helpers.inherits;

};

},{}],26:[function(require,module,exports){
/* global window: false */
/* global document: false */
'use strict';

var color = require(3);

module.exports = function(Chart) {
	// Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

	// -- Basic js utility methods
	helpers.each = function(loopable, callback, self, reverse) {
		// Check to see if null or undefined firstly.
		var i, len;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					callback.call(self, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					callback.call(self, loopable[i], i);
				}
			}
		} else if (typeof loopable === 'object') {
			var keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				callback.call(self, loopable[keys[i]], keys[i]);
			}
		}
	};
	helpers.clone = function(obj) {
		var objClone = {};
		helpers.each(obj, function(value, key) {
			if (helpers.isArray(value)) {
				objClone[key] = value.slice(0);
			} else if (typeof value === 'object' && value !== null) {
				objClone[key] = helpers.clone(value);
			} else {
				objClone[key] = value;
			}
		});
		return objClone;
	};
	helpers.extend = function(base) {
		var setFn = function(value, key) {
			base[key] = value;
		};
		for (var i = 1, ilen = arguments.length; i < ilen; i++) {
			helpers.each(arguments[i], setFn);
		}
		return base;
	};
	// Need a special merge function to chart configs since they are now grouped
	helpers.configMerge = function(_base) {
		var base = helpers.clone(_base);
		helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
			helpers.each(extension, function(value, key) {
				var baseHasProperty = base.hasOwnProperty(key);
				var baseVal = baseHasProperty ? base[key] : {};

				if (key === 'scales') {
					// Scale config merging is complex. Add our own function here for that
					base[key] = helpers.scaleMerge(baseVal, value);
				} else if (key === 'scale') {
					// Used in polar area & radar charts since there is only one scale
					base[key] = helpers.configMerge(baseVal, Chart.scaleService.getScaleDefaults(value.type), value);
				} else if (baseHasProperty
						&& typeof baseVal === 'object'
						&& !helpers.isArray(baseVal)
						&& baseVal !== null
						&& typeof value === 'object'
						&& !helpers.isArray(value)) {
					// If we are overwriting an object with an object, do a merge of the properties.
					base[key] = helpers.configMerge(baseVal, value);
				} else {
					// can just overwrite the value in this case
					base[key] = value;
				}
			});
		});

		return base;
	};
	helpers.scaleMerge = function(_base, extension) {
		var base = helpers.clone(_base);

		helpers.each(extension, function(value, key) {
			if (key === 'xAxes' || key === 'yAxes') {
				// These properties are arrays of items
				if (base.hasOwnProperty(key)) {
					helpers.each(value, function(valueObj, index) {
						var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
						var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
						if (index >= base[key].length || !base[key][index].type) {
							base[key].push(helpers.configMerge(axisDefaults, valueObj));
						} else if (valueObj.type && valueObj.type !== base[key][index].type) {
							// Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
							base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
						} else {
							// Type is the same
							base[key][index] = helpers.configMerge(base[key][index], valueObj);
						}
					});
				} else {
					base[key] = [];
					helpers.each(value, function(valueObj) {
						var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
						base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
					});
				}
			} else if (base.hasOwnProperty(key) && typeof base[key] === 'object' && base[key] !== null && typeof value === 'object') {
				// If we are overwriting an object with an object, do a merge of the properties.
				base[key] = helpers.configMerge(base[key], value);

			} else {
				// can just overwrite the value in this case
				base[key] = value;
			}
		});

		return base;
	};
	helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
		if (value === undefined || value === null) {
			return defaultValue;
		}

		if (helpers.isArray(value)) {
			return index < value.length ? value[index] : defaultValue;
		}

		return value;
	};
	helpers.getValueOrDefault = function(value, defaultValue) {
		return value === undefined ? defaultValue : value;
	};
	helpers.indexOf = Array.prototype.indexOf?
		function(array, item) {
			return array.indexOf(item);
		}:
		function(array, item) {
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (array[i] === item) {
					return i;
				}
			}
			return -1;
		};
	helpers.where = function(collection, filterCallback) {
		if (helpers.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers.findIndex = Array.prototype.findIndex?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.inherits = function(extensions) {
		// Basic javascript inheritance based on the model created in Backbone.js
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};
		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();

		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;

		return ChartElement;
	};
	helpers.noop = function() {};
	helpers.uid = (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}());
	// -- Math methods
	helpers.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
	};
	helpers.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers.sign = Math.sign?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers.log10 = Math.log10?
		function(x) {
			return Math.log10(x);
		} :
		function(x) {
			return Math.log(x) / Math.LN10;
		};
	helpers.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};
	// Gets the angle from vertical upright to the point about a centre.
	helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x,
			distanceFromYCenter = anglePoint.y - centrePoint.y,
			radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};
	helpers.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};
	helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint,
			current = middlePoint,
			next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers.EPSILON = Number.EPSILON || 1e-14;
	helpers.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers.niceNum = function(range, round) {
		var exponent = Math.floor(helpers.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Easing functions adapted from Robert Penner's easing equations
	// http://www.robertpenner.com/easing/
	var easingEffects = helpers.easingEffects = {
		linear: function(t) {
			return t;
		},
		easeInQuad: function(t) {
			return t * t;
		},
		easeOutQuad: function(t) {
			return -1 * t * (t - 2);
		},
		easeInOutQuad: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t;
			}
			return -1 / 2 * ((--t) * (t - 2) - 1);
		},
		easeInCubic: function(t) {
			return t * t * t;
		},
		easeOutCubic: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t + 1);
		},
		easeInOutCubic: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t + 2);
		},
		easeInQuart: function(t) {
			return t * t * t * t;
		},
		easeOutQuart: function(t) {
			return -1 * ((t = t / 1 - 1) * t * t * t - 1);
		},
		easeInOutQuart: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t;
			}
			return -1 / 2 * ((t -= 2) * t * t * t - 2);
		},
		easeInQuint: function(t) {
			return 1 * (t /= 1) * t * t * t * t;
		},
		easeOutQuint: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
		},
		easeInOutQuint: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
		},
		easeInSine: function(t) {
			return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
		},
		easeOutSine: function(t) {
			return 1 * Math.sin(t / 1 * (Math.PI / 2));
		},
		easeInOutSine: function(t) {
			return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
		},
		easeInExpo: function(t) {
			return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
		},
		easeOutExpo: function(t) {
			return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
		},
		easeInOutExpo: function(t) {
			if (t === 0) {
				return 0;
			}
			if (t === 1) {
				return 1;
			}
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * Math.pow(2, 10 * (t - 1));
			}
			return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
		},
		easeInCirc: function(t) {
			if (t >= 1) {
				return t;
			}
			return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
		},
		easeOutCirc: function(t) {
			return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
		},
		easeInOutCirc: function(t) {
			if ((t /= 1 / 2) < 1) {
				return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
			}
			return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
		},
		easeInElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
		},
		easeOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
		},
		easeInOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1 / 2) === 2) {
				return 1;
			}
			if (!p) {
				p = 1 * (0.3 * 1.5);
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			if (t < 1) {
				return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			}
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
		},
		easeInBack: function(t) {
			var s = 1.70158;
			return 1 * (t /= 1) * t * ((s + 1) * t - s);
		},
		easeOutBack: function(t) {
			var s = 1.70158;
			return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
		},
		easeInOutBack: function(t) {
			var s = 1.70158;
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
			}
			return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
		},
		easeInBounce: function(t) {
			return 1 - easingEffects.easeOutBounce(1 - t);
		},
		easeOutBounce: function(t) {
			if ((t /= 1) < (1 / 2.75)) {
				return 1 * (7.5625 * t * t);
			} else if (t < (2 / 2.75)) {
				return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
			} else if (t < (2.5 / 2.75)) {
				return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
			}
			return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
		},
		easeInOutBounce: function(t) {
			if (t < 1 / 2) {
				return easingEffects.easeInBounce(t * 2) * 0.5;
			}
			return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
		}
	};
	// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt,
			canvas = evt.currentTarget || evt.srcElement,
			boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};
	helpers.addEvent = function(node, eventType, method) {
		if (node.addEventListener) {
			node.addEventListener(eventType, method);
		} else if (node.attachEvent) {
			node.attachEvent('on' + eventType, method);
		} else {
			node['on' + eventType] = method;
		}
	};
	helpers.removeEvent = function(node, eventType, handler) {
		if (node.removeEventListener) {
			node.removeEventListener(eventType, handler, false);
		} else if (node.detachEvent) {
			node.detachEvent('on' + eventType, handler);
		} else {
			node['on' + eventType] = helpers.noop;
		}
	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof(styleValue) === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	// Private helper to get a constraint dimension
	// @param domNode : the node to check the constraint on
	// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
	// @param percentageProperty : property of parent to use when calculating width as a percentage
	// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = domNode.parentNode;
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	helpers.getMaximumWidth = function(domNode) {
		var container = domNode.parentNode;
		var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
		var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
		var w = container.clientWidth - paddingLeft - paddingRight;
		var cw = helpers.getConstraintWidth(domNode);
		return isNaN(cw)? w : Math.min(w, cw);
	};
	helpers.getMaximumHeight = function(domNode) {
		var container = domNode.parentNode;
		var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
		var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
		var h = container.clientHeight - paddingTop - paddingBottom;
		var ch = helpers.getConstraintHeight(domNode);
		return isNaN(ch)? h : Math.min(h, ch);
	};
	helpers.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers.retinaScale = function(chart) {
		var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		canvas.style.height = height + 'px';
		canvas.style.width = width + 'px';
	};
	// -- Canvas methods
	helpers.clear = function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	};
	helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		helpers.each(arrayOfThings, function(thing) {
			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
				longest = helpers.measureText(ctx, data, gc, longest, thing);
			} else if (helpers.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				helpers.each(thing, function(nestedThing) {
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
						longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
					}
				});
			}
		});

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (var i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};
	helpers.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers.each(arrayOfThings, function(thing) {
			if (helpers.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};
	helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
	};
	helpers.color = function(c) {
		if (!color) {
			console.error('Color.js not found!');
			return c;
		}

		/* global CanvasGradient */
		if (c instanceof CanvasGradient) {
			return color(Chart.defaults.global.defaultColor);
		}

		return color(c);
	};
	helpers.isArray = Array.isArray?
		function(obj) {
			return Array.isArray(obj);
		} :
		function(obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		};
	// ! @see http://stackoverflow.com/a/14853974
	helpers.arrayEquals = function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen=a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	};
	helpers.callCallback = function(fn, args, _tArg) {
		if (fn && typeof fn.call === 'function') {
			fn.apply(_tArg, args);
		}
	};
	helpers.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern) ?
			colorValue :
			helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

},{"3":3}],27:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
	var helpers = Chart.helpers;

	/**
	 * Helper function to get relative position for an event
	 * @param {Event|IEvent} event - The event to get the position for
	 * @param {Chart} chart - The chart
	 * @returns {Point} the event position
	 */
	function getRelativePosition(e, chart) {
		if (e.native) {
			return {
				x: e.x,
				y: e.y
			};
		}

		return helpers.getRelativePosition(e, chart);
	}

	/**
	 * Helper function to traverse all of the visible elements in the chart
	 * @param chart {chart} the chart
	 * @param handler {Function} the callback to execute for each visible item
	 */
	function parseVisibleItems(chart, handler) {
		var datasets = chart.data.datasets;
		var meta, i, j, ilen, jlen;

		for (i = 0, ilen = datasets.length; i < ilen; ++i) {
			if (!chart.isDatasetVisible(i)) {
				continue;
			}

			meta = chart.getDatasetMeta(i);
			for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
				var element = meta.data[j];
				if (!element._view.skip) {
					handler(element);
				}
			}
		}
	}

	/**
	 * Helper function to get the items that intersect the event position
	 * @param items {ChartElement[]} elements to filter
	 * @param position {Point} the point to be nearest to
	 * @return {ChartElement[]} the nearest items
	 */
	function getIntersectItems(chart, position) {
		var elements = [];

		parseVisibleItems(chart, function(element) {
			if (element.inRange(position.x, position.y)) {
				elements.push(element);
			}
		});

		return elements;
	}

	/**
	 * Helper function to get the items nearest to the event position considering all visible items in teh chart
	 * @param chart {Chart} the chart to look at elements from
	 * @param position {Point} the point to be nearest to
	 * @param intersect {Boolean} if true, only consider items that intersect the position
	 * @param distanceMetric {Function} Optional function to provide the distance between
	 * @return {ChartElement[]} the nearest items
	 */
	function getNearestItems(chart, position, intersect, distanceMetric) {
		var minDistance = Number.POSITIVE_INFINITY;
		var nearestItems = [];

		if (!distanceMetric) {
			distanceMetric = helpers.distanceBetweenPoints;
		}

		parseVisibleItems(chart, function(element) {
			if (intersect && !element.inRange(position.x, position.y)) {
				return;
			}

			var center = element.getCenterPoint();
			var distance = distanceMetric(position, center);

			if (distance < minDistance) {
				nearestItems = [element];
				minDistance = distance;
			} else if (distance === minDistance) {
				// Can have multiple items at the same distance in which case we sort by size
				nearestItems.push(element);
			}
		});

		return nearestItems;
	}

	function indexMode(chart, e, options) {
		var position = getRelativePosition(e, chart.chart);
		var distanceMetric = function(pt1, pt2) {
			return Math.abs(pt1.x - pt2.x);
		};
		var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
		var elements = [];

		if (!items.length) {
			return [];
		}

		chart.data.datasets.forEach(function(dataset, datasetIndex) {
			if (chart.isDatasetVisible(datasetIndex)) {
				var meta = chart.getDatasetMeta(datasetIndex),
					element = meta.data[items[0]._index];

				// don't count items that are skipped (null data)
				if (element && !element._view.skip) {
					elements.push(element);
				}
			}
		});

		return elements;
	}

	/**
	 * @interface IInteractionOptions
	 */
	/**
	 * If true, only consider items that intersect the point
	 * @name IInterfaceOptions#boolean
	 * @type Boolean
	 */

	/**
	 * Contains interaction related functions
	 * @namespace Chart.Interaction
	 */
	Chart.Interaction = {
		// Helper function for different modes
		modes: {
			single: function(chart, e) {
				var position = getRelativePosition(e, chart.chart);
				var elements = [];

				parseVisibleItems(chart, function(element) {
					if (element.inRange(position.x, position.y)) {
						elements.push(element);
						return elements;
					}
				});

				return elements.slice(0, 1);
			},

			/**
			 * @function Chart.Interaction.modes.label
			 * @deprecated since version 2.4.0
			 */
			label: indexMode,

			/**
			 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
			 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
			 * @function Chart.Interaction.modes.index
			 * @since v2.4.0
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use during interaction
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			index: indexMode,

			/**
			 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
			 * If the options.intersect is false, we find the nearest item and return the items in that dataset
			 * @function Chart.Interaction.modes.dataset
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use during interaction
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			dataset: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false);

				if (items.length > 0) {
					items = chart.getDatasetMeta(items[0]._datasetIndex).data;
				}

				return items;
			},

			/**
			 * @function Chart.Interaction.modes.x-axis
			 * @deprecated since version 2.4.0. Use index mode and intersect == true
			 */
			'x-axis': function(chart, e) {
				return indexMode(chart, e, true);
			},

			/**
			 * Point mode returns all elements that hit test based on the event position
			 * of the event
			 * @function Chart.Interaction.modes.intersect
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			point: function(chart, e) {
				var position = getRelativePosition(e, chart.chart);
				return getIntersectItems(chart, position);
			},

			/**
			 * nearest mode returns the element closest to the point
			 * @function Chart.Interaction.modes.intersect
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			nearest: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var nearestItems = getNearestItems(chart, position, options.intersect);

				// We have multiple items at the same distance from the event. Now sort by smallest
				if (nearestItems.length > 1) {
					nearestItems.sort(function(a, b) {
						var sizeA = a.getArea();
						var sizeB = b.getArea();
						var ret = sizeA - sizeB;

						if (ret === 0) {
							// if equal sort by dataset index
							ret = a._datasetIndex - b._datasetIndex;
						}

						return ret;
					});
				}

				// Return only 1 item
				return nearestItems.slice(0, 1);
			},

			/**
			 * x mode returns the elements that hit-test at the current x coordinate
			 * @function Chart.Interaction.modes.x
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			x: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var items = [];
				var intersectsItem = false;

				parseVisibleItems(chart, function(element) {
					if (element.inXRange(position.x)) {
						items.push(element);
					}

					if (element.inRange(position.x, position.y)) {
						intersectsItem = true;
					}
				});

				// If we want to trigger on an intersect and we don't have any items
				// that intersect the position, return nothing
				if (options.intersect && !intersectsItem) {
					items = [];
				}
				return items;
			},

			/**
			 * y mode returns the elements that hit-test at the current y coordinate
			 * @function Chart.Interaction.modes.y
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			y: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var items = [];
				var intersectsItem = false;

				parseVisibleItems(chart, function(element) {
					if (element.inYRange(position.y)) {
						items.push(element);
					}

					if (element.inRange(position.x, position.y)) {
						intersectsItem = true;
					}
				});

				// If we want to trigger on an intersect and we don't have any items
				// that intersect the position, return nothing
				if (options.intersect && !intersectsItem) {
					items = [];
				}
				return items;
			}
		}
	};
};

},{}],28:[function(require,module,exports){
'use strict';

module.exports = function() {

	// Occupy the global variable of Chart, and create a simple base class
	var Chart = function(item, config) {
		this.controller = new Chart.Controller(item, config, this);
		return this.controller;
	};

	// Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			responsive: true,
			responsiveAnimationDuration: 0,
			maintainAspectRatio: true,
			events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
			hover: {
				onHover: null,
				mode: 'nearest',
				intersect: true,
				animationDuration: 400
			},
			onClick: null,
			defaultColor: 'rgba(0,0,0,0.1)',
			defaultFontColor: '#666',
			defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			defaultFontSize: 12,
			defaultFontStyle: 'normal',
			showLines: true,

			// Element defaults defined in element extensions
			elements: {},

			// Legend callback string
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
				for (var i = 0; i < chart.data.datasets.length; i++) {
					text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
					if (chart.data.datasets[i].label) {
						text.push(chart.data.datasets[i].label);
					}
					text.push('</li>');
				}
				text.push('</ul>');

				return text.join('');
			}
		}
	};

	Chart.Chart = Chart;

	return Chart;
};

},{}],29:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	// The layout service is very self explanatory.  It's responsible for the layout within a chart.
	// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
	// It is this service's responsibility of carrying out that layout.
	Chart.layoutService = {
		defaults: {},

		// Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
		addBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				chartInstance.boxes = [];
			}
			chartInstance.boxes.push(box);
		},

		removeBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				return;
			}
			chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
		},

		// The most important function
		update: function(chartInstance, width, height) {

			if (!chartInstance) {
				return;
			}

			var layoutOptions = chartInstance.options.layout;
			var padding = layoutOptions ? layoutOptions.padding : null;

			var leftPadding = 0;
			var rightPadding = 0;
			var topPadding = 0;
			var bottomPadding = 0;

			if (!isNaN(padding)) {
				// options.layout.padding is a number. assign to all
				leftPadding = padding;
				rightPadding = padding;
				topPadding = padding;
				bottomPadding = padding;
			} else {
				leftPadding = padding.left || 0;
				rightPadding = padding.right || 0;
				topPadding = padding.top || 0;
				bottomPadding = padding.bottom || 0;
			}

			var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'left';
			});
			var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'right';
			});
			var topBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'top';
			});
			var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'bottom';
			});

			// Boxes that overlay the chartarea such as the radialLinear scale
			var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'chartArea';
			});

			// Ensure that full width boxes are at the very top / bottom
			topBoxes.sort(function(a, b) {
				return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
			});
			bottomBoxes.sort(function(a, b) {
				return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
			});

			// Essentially we now have any number of boxes on each of the 4 sides.
			// Our canvas looks like the following.
			// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
			// B1 is the bottom axis
			// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
			// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
			// an error will be thrown.
			//
			// |----------------------------------------------------|
			// |                  T1 (Full Width)                   |
			// |----------------------------------------------------|
			// |    |    |                 T2                  |    |
			// |    |----|-------------------------------------|----|
			// |    |    | C1 |                           | C2 |    |
			// |    |    |----|                           |----|    |
			// |    |    |                                     |    |
			// | L1 | L2 |           ChartArea (C0)            | R1 |
			// |    |    |                                     |    |
			// |    |    |----|                           |----|    |
			// |    |    | C3 |                           | C4 |    |
			// |    |----|-------------------------------------|----|
			// |    |    |                 B1                  |    |
			// |----------------------------------------------------|
			// |                  B2 (Full Width)                   |
			// |----------------------------------------------------|
			//
			// What we do to find the best sizing, we do the following
			// 1. Determine the minimum size of the chart area.
			// 2. Split the remaining width equally between each vertical axis
			// 3. Split the remaining height equally between each horizontal axis
			// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
			// 5. Adjust the sizes of each axis based on it's minimum reported size.
			// 6. Refit each axis
			// 7. Position each axis in the final location
			// 8. Tell the chart the final location of the chart area
			// 9. Tell any axes that overlay the chart area the positions of the chart area

			// Step 1
			var chartWidth = width - leftPadding - rightPadding;
			var chartHeight = height - topPadding - bottomPadding;
			var chartAreaWidth = chartWidth / 2; // min 50%
			var chartAreaHeight = chartHeight / 2; // min 50%

			// Step 2
			var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

			// Step 3
			var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

			// Step 4
			var maxChartAreaWidth = chartWidth;
			var maxChartAreaHeight = chartHeight;
			var minBoxSizes = [];

			function getMinimumBoxSize(box) {
				var minSize;
				var isHorizontal = box.isHorizontal();

				if (isHorizontal) {
					minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
					maxChartAreaHeight -= minSize.height;
				} else {
					minSize = box.update(verticalBoxWidth, chartAreaHeight);
					maxChartAreaWidth -= minSize.width;
				}

				minBoxSizes.push({
					horizontal: isHorizontal,
					minSize: minSize,
					box: box,
				});
			}

			helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

			// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
			var maxHorizontalLeftPadding = 0;
			var maxHorizontalRightPadding = 0;
			var maxVerticalTopPadding = 0;
			var maxVerticalBottomPadding = 0;

			helpers.each(topBoxes.concat(bottomBoxes), function(horizontalBox) {
				if (horizontalBox.getPadding) {
					var boxPadding = horizontalBox.getPadding();
					maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPadding, boxPadding.left);
					maxHorizontalRightPadding = Math.max(maxHorizontalRightPadding, boxPadding.right);
				}
			});

			helpers.each(leftBoxes.concat(rightBoxes), function(verticalBox) {
				if (verticalBox.getPadding) {
					var boxPadding = verticalBox.getPadding();
					maxVerticalTopPadding = Math.max(maxVerticalTopPadding, boxPadding.top);
					maxVerticalBottomPadding = Math.max(maxVerticalBottomPadding, boxPadding.bottom);
				}
			});

			// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
			// be if the axes are drawn at their minimum sizes.
			// Steps 5 & 6
			var totalLeftBoxesWidth = leftPadding;
			var totalRightBoxesWidth = rightPadding;
			var totalTopBoxesHeight = topPadding;
			var totalBottomBoxesHeight = bottomPadding;

			// Function to fit a box
			function fitBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
					return minBox.box === box;
				});

				if (minBoxSize) {
					if (box.isHorizontal()) {
						var scaleMargin = {
							left: Math.max(totalLeftBoxesWidth, maxHorizontalLeftPadding),
							right: Math.max(totalRightBoxesWidth, maxHorizontalRightPadding),
							top: 0,
							bottom: 0
						};

						// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
						// on the margin. Sometimes they need to increase in size slightly
						box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
					} else {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight);
					}
				}
			}

			// Update, and calculate the left and right margins for the horizontal boxes
			helpers.each(leftBoxes.concat(rightBoxes), fitBox);

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			// Set the Left and Right margins for the horizontal boxes
			helpers.each(topBoxes.concat(bottomBoxes), fitBox);

			// Figure out how much margin is on the top and bottom of the vertical boxes
			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});

			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			function finalFitVerticalBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
					return minSize.box === box;
				});

				var scaleMargin = {
					left: 0,
					right: 0,
					top: totalTopBoxesHeight,
					bottom: totalBottomBoxesHeight
				};

				if (minBoxSize) {
					box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
				}
			}

			// Let the left layout know the final margin
			helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

			// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
			totalLeftBoxesWidth = leftPadding;
			totalRightBoxesWidth = rightPadding;
			totalTopBoxesHeight = topPadding;
			totalBottomBoxesHeight = bottomPadding;

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});
			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// We may be adding some padding to account for rotated x axis labels
			var leftPaddingAddition = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
			totalLeftBoxesWidth += leftPaddingAddition;
			totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - totalRightBoxesWidth, 0);

			var topPaddingAddition = Math.max(maxVerticalTopPadding - totalTopBoxesHeight, 0);
			totalTopBoxesHeight += topPaddingAddition;
			totalBottomBoxesHeight += Math.max(maxVerticalBottomPadding - totalBottomBoxesHeight, 0);

			// Figure out if our chart area changed. This would occur if the dataset layout label rotation
			// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
			// without calling `fit` again
			var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
			var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

			if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
				helpers.each(leftBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(rightBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(topBoxes, function(box) {
					if (!box.options.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				helpers.each(bottomBoxes, function(box) {
					if (!box.options.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				maxChartAreaHeight = newMaxChartAreaHeight;
				maxChartAreaWidth = newMaxChartAreaWidth;
			}

			// Step 7 - Position the boxes
			var left = leftPadding + leftPaddingAddition;
			var top = topPadding + topPaddingAddition;

			function placeBox(box) {
				if (box.isHorizontal()) {
					box.left = box.options.fullWidth ? leftPadding : totalLeftBoxesWidth;
					box.right = box.options.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
					box.top = top;
					box.bottom = top + box.height;

					// Move to next point
					top = box.bottom;

				} else {

					box.left = left;
					box.right = left + box.width;
					box.top = totalTopBoxesHeight;
					box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

					// Move to next point
					left = box.right;
				}
			}

			helpers.each(leftBoxes.concat(topBoxes), placeBox);

			// Account for chart width and height
			left += maxChartAreaWidth;
			top += maxChartAreaHeight;

			helpers.each(rightBoxes, placeBox);
			helpers.each(bottomBoxes, placeBox);

			// Step 8
			chartInstance.chartArea = {
				left: totalLeftBoxesWidth,
				top: totalTopBoxesHeight,
				right: totalLeftBoxesWidth + maxChartAreaWidth,
				bottom: totalTopBoxesHeight + maxChartAreaHeight
			};

			// Step 9
			helpers.each(chartAreaBoxes, function(box) {
				box.left = chartInstance.chartArea.left;
				box.top = chartInstance.chartArea.top;
				box.right = chartInstance.chartArea.right;
				box.bottom = chartInstance.chartArea.bottom;

				box.update(maxChartAreaWidth, maxChartAreaHeight);
			});
		}
	};
};

},{}],30:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var noop = helpers.noop;

	Chart.defaults.global.legend = {

		display: true,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
		reverse: false,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var data = chart.data;
				return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
					return {
						text: dataset.label,
						fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
						hidden: !chart.isDatasetVisible(i),
						lineCap: dataset.borderCapStyle,
						lineDash: dataset.borderDash,
						lineDashOffset: dataset.borderDashOffset,
						lineJoin: dataset.borderJoinStyle,
						lineWidth: dataset.borderWidth,
						strokeStyle: dataset.borderColor,
						pointStyle: dataset.pointStyle,

						// Below is extra data used for toggling the datasets
						datasetIndex: i
					};
				}, this) : [];
			}
		}
	};

	/**
	 * Helper function to get the box width based on the usePointStyle option
	 * @param labelopts {Object} the label options on the legend
	 * @param fontSize {Number} the label font size
	 * @return {Number} width of the color box area
	 */
	function getBoxWidth(labelOpts, fontSize) {
		return labelOpts.usePointStyle ?
			fontSize * Math.SQRT2 :
			labelOpts.boxWidth;
	}

	Chart.Legend = Chart.Element.extend({

		initialize: function(config) {
			helpers.extend(this, config);

			// Contains hit boxes for each dataset (in dataset order)
			this.legendHitBoxes = [];

			// Are we in doughnut mode which has a different data type
			this.doughnutMode = false;
		},

		// These methods are ordered by lifecycle. Utilities then follow.
		// Any function defined here is inherited by all legend types.
		// Any function can be extended by the legend type

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;
		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: function() {
			var me = this;
			var labelOpts = me.options.labels;
			var legendItems = labelOpts.generateLabels.call(me, me.chart);

			if (labelOpts.filter) {
				legendItems = legendItems.filter(function(item) {
					return labelOpts.filter(item, me.chart.data);
				});
			}

			if (me.options.reverse) {
				legendItems.reverse();
			}

			me.legendItems = legendItems;
		},
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var display = opts.display;

			var ctx = me.ctx;

			var globalDefault = Chart.defaults.global,
				itemOrDefault = helpers.getValueOrDefault,
				fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
				fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
				fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
				labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

			// Reset hit boxes
			var hitboxes = me.legendHitBoxes = [];

			var minSize = me.minSize;
			var isHorizontal = me.isHorizontal();

			if (isHorizontal) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? 10 : 0;
			} else {
				minSize.width = display ? 10 : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			// Increase sizes here
			if (display) {
				ctx.font = labelFont;

				if (isHorizontal) {
					// Labels

					// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
					var lineWidths = me.lineWidths = [0];
					var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

					ctx.textAlign = 'left';
					ctx.textBaseline = 'top';

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
							totalHeight += fontSize + (labelOpts.padding);
							lineWidths[lineWidths.length] = me.left;
						}

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: width,
							height: fontSize
						};

						lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
					});

					minSize.height += totalHeight;

				} else {
					var vPadding = labelOpts.padding;
					var columnWidths = me.columnWidths = [];
					var totalWidth = labelOpts.padding;
					var currentColWidth = 0;
					var currentColHeight = 0;
					var itemHeight = fontSize + vPadding;

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						// If too tall, go to new column
						if (currentColHeight + itemHeight > minSize.height) {
							totalWidth += currentColWidth + labelOpts.padding;
							columnWidths.push(currentColWidth); // previous column width

							currentColWidth = 0;
							currentColHeight = 0;
						}

						// Get max width
						currentColWidth = Math.max(currentColWidth, itemWidth);
						currentColHeight += itemHeight;

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: itemWidth,
							height: fontSize
						};
					});

					totalWidth += currentColWidth;
					columnWidths.push(currentColWidth);
					minSize.width += totalWidth;
				}
			}

			me.width = minSize.width;
			me.height = minSize.height;
		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},

		// Actually draw the legend on the canvas
		draw: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var globalDefault = Chart.defaults.global,
				lineDefault = globalDefault.elements.line,
				legendWidth = me.width,
				lineWidths = me.lineWidths;

			if (opts.display) {
				var ctx = me.ctx,
					cursor,
					itemOrDefault = helpers.getValueOrDefault,
					fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
					fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
					fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
					fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
					labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

				// Canvas setup
				ctx.textAlign = 'left';
				ctx.textBaseline = 'top';
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = fontColor; // for strikethrough effect
				ctx.fillStyle = fontColor; // render in correct colour
				ctx.font = labelFont;

				var boxWidth = getBoxWidth(labelOpts, fontSize),
					hitboxes = me.legendHitBoxes;

				// current position
				var drawLegendBox = function(x, y, legendItem) {
					if (isNaN(boxWidth) || boxWidth <= 0) {
						return;
					}

					// Set the ctx for the box
					ctx.save();

					ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
					ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
					ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
					ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
					ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
					ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
					var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);

					if (ctx.setLineDash) {
						// IE 9 and 10 do not support line dash
						ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
					}

					if (opts.labels && opts.labels.usePointStyle) {
						// Recalculate x and y for drawPoint() because its expecting
						// x and y to be center of figure (instead of top left)
						var radius = fontSize * Math.SQRT2 / 2;
						var offSet = radius / Math.SQRT2;
						var centerX = x + offSet;
						var centerY = y + offSet;

						// Draw pointStyle as legend symbol
						Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
					} else {
						// Draw box as legend symbol
						if (!isLineWidthZero) {
							ctx.strokeRect(x, y, boxWidth, fontSize);
						}
						ctx.fillRect(x, y, boxWidth, fontSize);
					}

					ctx.restore();
				};
				var fillText = function(x, y, legendItem, textWidth) {
					ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);

					if (legendItem.hidden) {
						// Strikethrough the text if hidden
						ctx.beginPath();
						ctx.lineWidth = 2;
						ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
						ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
						ctx.stroke();
					}
				};

				// Horizontal
				var isHorizontal = me.isHorizontal();
				if (isHorizontal) {
					cursor = {
						x: me.left + ((legendWidth - lineWidths[0]) / 2),
						y: me.top + labelOpts.padding,
						line: 0
					};
				} else {
					cursor = {
						x: me.left + labelOpts.padding,
						y: me.top + labelOpts.padding,
						line: 0
					};
				}

				var itemHeight = fontSize + labelOpts.padding;
				helpers.each(me.legendItems, function(legendItem, i) {
					var textWidth = ctx.measureText(legendItem.text).width,
						width = boxWidth + (fontSize / 2) + textWidth,
						x = cursor.x,
						y = cursor.y;

					if (isHorizontal) {
						if (x + width >= legendWidth) {
							y = cursor.y += itemHeight;
							cursor.line++;
							x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
						}
					} else if (y + itemHeight > me.bottom) {
						x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
						y = cursor.y = me.top + labelOpts.padding;
						cursor.line++;
					}

					drawLegendBox(x, y, legendItem);

					hitboxes[i].left = x;
					hitboxes[i].top = y;

					// Fill the actual label
					fillText(x, y, legendItem, textWidth);

					if (isHorizontal) {
						cursor.x += width + (labelOpts.padding);
					} else {
						cursor.y += itemHeight;
					}

				});
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @return {Boolean} true if a change occured
		 */
		handleEvent: function(e) {
			var me = this;
			var opts = me.options;
			var type = e.type === 'mouseup' ? 'click' : e.type;
			var changed = false;

			if (type === 'mousemove') {
				if (!opts.onHover) {
					return;
				}
			} else if (type === 'click') {
				if (!opts.onClick) {
					return;
				}
			} else {
				return;
			}

			// Chart event already has relative position in it
			var x = e.x,
				y = e.y;

			if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
				// See if we are touching one of the dataset boxes
				var lh = me.legendHitBoxes;
				for (var i = 0; i < lh.length; ++i) {
					var hitBox = lh[i];

					if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
						// Touching an element
						if (type === 'click') {
							// use e.native for backwards compatibility
							opts.onClick.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						} else if (type === 'mousemove') {
							// use e.native for backwards compatibility
							opts.onHover.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						}
					}
				}
			}

			return changed;
		}
	});

	function createNewLegendAndAttach(chartInstance, legendOpts) {
		var legend = new Chart.Legend({
			ctx: chartInstance.chart.ctx,
			options: legendOpts,
			chart: chartInstance
		});
		chartInstance.legend = legend;
		Chart.layoutService.addBox(chartInstance, legend);
	}

	// Register the legend plugin
	Chart.plugins.register({
		beforeInit: function(chartInstance) {
			var legendOpts = chartInstance.options.legend;

			if (legendOpts) {
				createNewLegendAndAttach(chartInstance, legendOpts);
			}
		},
		beforeUpdate: function(chartInstance) {
			var legendOpts = chartInstance.options.legend;

			if (legendOpts) {
				legendOpts = helpers.configMerge(Chart.defaults.global.legend, legendOpts);

				if (chartInstance.legend) {
					chartInstance.legend.options = legendOpts;
				} else {
					createNewLegendAndAttach(chartInstance, legendOpts);
				}
			} else {
				Chart.layoutService.removeBox(chartInstance, chartInstance.legend);
				delete chartInstance.legend;
			}
		},
		afterEvent: function(chartInstance, e) {
			var legend = chartInstance.legend;
			if (legend) {
				legend.handleEvent(e);
			}
		}
	});
};

},{}],31:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.plugins = {};

	/**
	 * The plugin service singleton
	 * @namespace Chart.plugins
	 * @since 2.1.0
	 */
	Chart.plugins = {
		/**
		 * Globally registered plugins.
		 * @private
		 */
		_plugins: [],

		/**
		 * This identifier is used to invalidate the descriptors cache attached to each chart
		 * when a global plugin is registered or unregistered. In this case, the cache ID is
		 * incremented and descriptors are regenerated during following API calls.
		 * @private
		 */
		_cacheId: 0,

		/**
		 * Registers the given plugin(s) if not already registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		register: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				if (p.indexOf(plugin) === -1) {
					p.push(plugin);
				}
			});

			this._cacheId++;
		},

		/**
		 * Unregisters the given plugin(s) only if registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		unregister: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				var idx = p.indexOf(plugin);
				if (idx !== -1) {
					p.splice(idx, 1);
				}
			});

			this._cacheId++;
		},

		/**
		 * Remove all registered plugins.
		 * @since 2.1.5
		 */
		clear: function() {
			this._plugins = [];
			this._cacheId++;
		},

		/**
		 * Returns the number of registered plugins?
		 * @returns {Number}
		 * @since 2.1.5
		 */
		count: function() {
			return this._plugins.length;
		},

		/**
		 * Returns all registered plugin instances.
		 * @returns {Array} array of plugin objects.
		 * @since 2.1.5
		 */
		getAll: function() {
			return this._plugins;
		},

		/**
		 * Calls enabled plugins for `chart` on the specified hook and with the given args.
		 * This method immediately returns as soon as a plugin explicitly returns false. The
		 * returned value can be used, for instance, to interrupt the current action.
		 * @param {Object} chart - The chart instance for which plugins should be called.
		 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
		 * @param {Array} [args] - Extra arguments to apply to the hook call.
		 * @returns {Boolean} false if any of the plugins return false, else returns true.
		 */
		notify: function(chart, hook, args) {
			var descriptors = this.descriptors(chart);
			var ilen = descriptors.length;
			var i, descriptor, plugin, params, method;

			for (i=0; i<ilen; ++i) {
				descriptor = descriptors[i];
				plugin = descriptor.plugin;
				method = plugin[hook];
				if (typeof method === 'function') {
					params = [chart].concat(args || []);
					params.push(descriptor.options);
					if (method.apply(plugin, params) === false) {
						return false;
					}
				}
			}

			return true;
		},

		/**
		 * Returns descriptors of enabled plugins for the given chart.
		 * @returns {Array} [{ plugin, options }]
		 * @private
		 */
		descriptors: function(chart) {
			var cache = chart._plugins || (chart._plugins = {});
			if (cache.id === this._cacheId) {
				return cache.descriptors;
			}

			var plugins = [];
			var descriptors = [];
			var config = (chart && chart.config) || {};
			var defaults = Chart.defaults.global.plugins;
			var options = (config.options && config.options.plugins) || {};

			this._plugins.concat(config.plugins || []).forEach(function(plugin) {
				var idx = plugins.indexOf(plugin);
				if (idx !== -1) {
					return;
				}

				var id = plugin.id;
				var opts = options[id];
				if (opts === false) {
					return;
				}

				if (opts === true) {
					opts = helpers.clone(defaults[id]);
				}

				plugins.push(plugin);
				descriptors.push({
					plugin: plugin,
					options: opts || {}
				});
			});

			cache.descriptors = descriptors;
			cache.id = this._cacheId;
			return descriptors;
		}
	};

	/**
	 * Plugin extension hooks.
	 * @interface IPlugin
	 * @since 2.1.0
	 */
	/**
	 * @method IPlugin#beforeInit
	 * @desc Called before initializing `chart`.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterInit
	 * @desc Called after `chart` has been initialized and before the first update.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeUpdate
	 * @desc Called before updating `chart`. If any plugin returns `false`, the update
	 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart update.
	 */
	/**
	 * @method IPlugin#afterUpdate
	 * @desc Called after `chart` has been updated and before rendering. Note that this
	 * hook will not be called if the chart update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsUpdate
 	 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
	 * the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} false to cancel the datasets update.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#afterDatasetsUpdate
	 * @desc Called after the `chart` datasets have been updated. Note that this hook
	 * will not be called if the datasets update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#beforeLayout
	 * @desc Called before laying out `chart`. If any plugin returns `false`,
	 * the layout update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart layout.
	 */
	/**
	 * @method IPlugin#afterLayout
	 * @desc Called after the `chart` has been layed out. Note that this hook will not
	 * be called if the layout update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeRender
	 * @desc Called before rendering `chart`. If any plugin returns `false`,
	 * the rendering is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart rendering.
	 */
	/**
	 * @method IPlugin#afterRender
	 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
	 * that this hook will not be called if the rendering has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDraw
	 * @desc Called before drawing `chart` at every animation frame specified by the given
	 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
	 * another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart drawing.
	 */
	/**
	 * @method IPlugin#afterDraw
	 * @desc Called after the `chart` has been drawn for the specific easing value. Note
	 * that this hook will not be called if the drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsDraw
 	 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
	 * the datasets drawing is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetsDraw
	 * @desc Called after the `chart` datasets have been drawn. Note that this hook
	 * will not be called if the datasets drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeEvent
 	 * @desc Called before processing the specified `event`. If any plugin returns `false`,
	 * the event will be discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterEvent
	 * @desc Called after the `event` has been consumed. Note that this hook
	 * will not be called if the `event` has been previously discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#resize
	 * @desc Called after the chart as been resized.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#destroy
	 * @desc Called after the chart as been destroyed.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */

	/**
	 * Provided for backward compatibility, use Chart.plugins instead
	 * @namespace Chart.pluginService
	 * @deprecated since version 2.1.5
	 * @todo remove at version 3
	 * @private
	 */
	Chart.pluginService = Chart.plugins;

	/**
	 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
	 * effect, instead simply create/register plugins via plain JavaScript objects.
	 * @interface Chart.PluginBase
	 * @deprecated since version 2.5.0
	 * @todo remove at version 3
	 * @private
	 */
	Chart.PluginBase = helpers.inherits({});
};

},{}],32:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.scale = {
		display: true,
		position: 'left',

		// grid line settings
		gridLines: {
			display: true,
			color: 'rgba(0, 0, 0, 0.1)',
			lineWidth: 1,
			drawBorder: true,
			drawOnChartArea: true,
			drawTicks: true,
			tickMarkLength: 10,
			zeroLineWidth: 1,
			zeroLineColor: 'rgba(0,0,0,0.25)',
			offsetGridLines: false,
			borderDash: [],
			borderDashOffset: 0.0
		},

		// scale label
		scaleLabel: {
			// actual label
			labelString: '',

			// display property
			display: false
		},

		// label settings
		ticks: {
			beginAtZero: false,
			minRotation: 0,
			maxRotation: 50,
			mirror: false,
			padding: 0,
			reverse: false,
			display: true,
			autoSkip: true,
			autoSkipPadding: 0,
			labelOffset: 0,
			// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
			callback: Chart.Ticks.formatters.values
		}
	};

	function computeTextSize(context, tick, font) {
		return helpers.isArray(tick) ?
			helpers.longestText(context, font, tick) :
			context.measureText(tick).width;
	}

	function parseFontOptions(options) {
		var getValueOrDefault = helpers.getValueOrDefault;
		var globalDefaults = Chart.defaults.global;
		var size = getValueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var style = getValueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle);
		var family = getValueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily);

		return {
			size: size,
			style: style,
			family: family,
			font: helpers.fontString(size, style, family)
		};
	}

	Chart.Scale = Chart.Element.extend({
		/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */
		getPadding: function() {
			var me = this;
			return {
				left: me.paddingLeft || 0,
				top: me.paddingTop || 0,
				right: me.paddingRight || 0,
				bottom: me.paddingBottom || 0
			};
		},

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all scale types.
		// Any function can be extended by the scale type

		beforeUpdate: function() {
			helpers.callCallback(this.options.beforeUpdate, [this]);
		},
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = helpers.extend({
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, margins);
			me.longestTextCache = me.longestTextCache || {};

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();

			// Data min/max
			me.beforeDataLimits();
			me.determineDataLimits();
			me.afterDataLimits();

			// Ticks
			me.beforeBuildTicks();
			me.buildTicks();
			me.afterBuildTicks();

			me.beforeTickToLabelConversion();
			me.convertTicksToLabels();
			me.afterTickToLabelConversion();

			// Tick Rotation
			me.beforeCalculateTickRotation();
			me.calculateTickRotation();
			me.afterCalculateTickRotation();
			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: function() {
			helpers.callCallback(this.options.afterUpdate, [this]);
		},

		//

		beforeSetDimensions: function() {
			helpers.callCallback(this.options.beforeSetDimensions, [this]);
		},
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;
		},
		afterSetDimensions: function() {
			helpers.callCallback(this.options.afterSetDimensions, [this]);
		},

		// Data limits
		beforeDataLimits: function() {
			helpers.callCallback(this.options.beforeDataLimits, [this]);
		},
		determineDataLimits: helpers.noop,
		afterDataLimits: function() {
			helpers.callCallback(this.options.afterDataLimits, [this]);
		},

		//
		beforeBuildTicks: function() {
			helpers.callCallback(this.options.beforeBuildTicks, [this]);
		},
		buildTicks: helpers.noop,
		afterBuildTicks: function() {
			helpers.callCallback(this.options.afterBuildTicks, [this]);
		},

		beforeTickToLabelConversion: function() {
			helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
		},
		convertTicksToLabels: function() {
			var me = this;
			// Convert ticks to strings
			var tickOpts = me.options.ticks;
			me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback);
		},
		afterTickToLabelConversion: function() {
			helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
		},

		//

		beforeCalculateTickRotation: function() {
			helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
		},
		calculateTickRotation: function() {
			var me = this;
			var context = me.ctx;
			var tickOpts = me.options.ticks;

			// Get the width of each grid by calculating the difference
			// between x offsets between 0 and 1.
			var tickFont = parseFontOptions(tickOpts);
			context.font = tickFont.font;

			var labelRotation = tickOpts.minRotation || 0;

			if (me.options.display && me.isHorizontal()) {
				var originalLabelWidth = helpers.longestText(context, tickFont.font, me.ticks, me.longestTextCache);
				var labelWidth = originalLabelWidth;
				var cosRotation;
				var sinRotation;

				// Allow 3 pixels x2 padding either side for label readability
				var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

				// Max label rotation can be set or default to 90 - also act as a loop counter
				while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
					var angleRadians = helpers.toRadians(labelRotation);
					cosRotation = Math.cos(angleRadians);
					sinRotation = Math.sin(angleRadians);

					if (sinRotation * originalLabelWidth > me.maxHeight) {
						// go back one step
						labelRotation--;
						break;
					}

					labelRotation++;
					labelWidth = cosRotation * originalLabelWidth;
				}
			}

			me.labelRotation = labelRotation;
		},
		afterCalculateTickRotation: function() {
			helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
		},

		//

		beforeFit: function() {
			helpers.callCallback(this.options.beforeFit, [this]);
		},
		fit: function() {
			var me = this;
			// Reset
			var minSize = me.minSize = {
				width: 0,
				height: 0
			};

			var opts = me.options;
			var tickOpts = opts.ticks;
			var scaleLabelOpts = opts.scaleLabel;
			var gridLineOpts = opts.gridLines;
			var display = opts.display;
			var isHorizontal = me.isHorizontal();

			var tickFont = parseFontOptions(tickOpts);
			var scaleLabelFontSize = parseFontOptions(scaleLabelOpts).size * 1.5;
			var tickMarkLength = opts.gridLines.tickMarkLength;

			// Width
			if (isHorizontal) {
				// subtract the margins to line up with the chartArea if we are a full width scale
				minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
			} else {
				minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			}

			// height
			if (isHorizontal) {
				minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			} else {
				minSize.height = me.maxHeight; // fill all the height
			}

			// Are we showing a title for the scale?
			if (scaleLabelOpts.display && display) {
				if (isHorizontal) {
					minSize.height += scaleLabelFontSize;
				} else {
					minSize.width += scaleLabelFontSize;
				}
			}

			// Don't bother fitting the ticks if we are not showing them
			if (tickOpts.display && display) {
				var largestTextWidth = helpers.longestText(me.ctx, tickFont.font, me.ticks, me.longestTextCache);
				var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
				var lineSpace = tickFont.size * 0.5;

				if (isHorizontal) {
					// A horizontal axis is more constrained by the height.
					me.longestLabelWidth = largestTextWidth;

					var angleRadians = helpers.toRadians(me.labelRotation);
					var cosRotation = Math.cos(angleRadians);
					var sinRotation = Math.sin(angleRadians);

					// TODO - improve this calculation
					var labelHeight = (sinRotation * largestTextWidth)
						+ (tickFont.size * tallestLabelHeightInLines)
						+ (lineSpace * tallestLabelHeightInLines);

					minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
					me.ctx.font = tickFont.font;

					var firstTick = me.ticks[0];
					var firstLabelWidth = computeTextSize(me.ctx, firstTick, tickFont.font);

					var lastTick = me.ticks[me.ticks.length - 1];
					var lastLabelWidth = computeTextSize(me.ctx, lastTick, tickFont.font);

					// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
					// by the font height
					if (me.labelRotation !== 0) {
						me.paddingLeft = opts.position === 'bottom'? (cosRotation * firstLabelWidth) + 3: (cosRotation * lineSpace) + 3; // add 3 px to move away from canvas edges
						me.paddingRight = opts.position === 'bottom'? (cosRotation * lineSpace) + 3: (cosRotation * lastLabelWidth) + 3;
					} else {
						me.paddingLeft = firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
						me.paddingRight = lastLabelWidth / 2 + 3;
					}
				} else {
					// A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
					// Account for padding

					if (tickOpts.mirror) {
						largestTextWidth = 0;
					} else {
						largestTextWidth += me.options.ticks.padding;
					}
					minSize.width += largestTextWidth;
					me.paddingTop = tickFont.size / 2;
					me.paddingBottom = tickFont.size / 2;
				}
			}

			me.handleMargins();

			me.width = minSize.width;
			me.height = minSize.height;
		},

		/**
		 * Handle margins and padding interactions
		 * @private
		 */
		handleMargins: function() {
			var me = this;
			if (me.margins) {
				me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
				me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
				me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
				me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
			}
		},

		afterFit: function() {
			helpers.callCallback(this.options.afterFit, [this]);
		},

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},
		isFullWidth: function() {
			return (this.options.fullWidth);
		},

		// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
		getRightValue: function(rawValue) {
			// Null and undefined values first
			if (rawValue === null || typeof(rawValue) === 'undefined') {
				return NaN;
			}
			// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
			if (typeof(rawValue) === 'number' && !isFinite(rawValue)) {
				return NaN;
			}
			// If it is in fact an object, dive in one more level
			if (typeof(rawValue) === 'object') {
				if ((rawValue instanceof Date) || (rawValue.isValid)) {
					return rawValue;
				}
				return this.getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
			}

			// Value is good, return it
			return rawValue;
		},

		// Used to get the value to display in the tooltip for the data at the given index
		// function getLabelForIndex(index, datasetIndex)
		getLabelForIndex: helpers.noop,

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: helpers.noop,

		// Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		getValueForPixel: helpers.noop,

		// Used for tick location, should
		getPixelForTick: function(index, includeOffset) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
				var pixel = (tickWidth * index) + me.paddingLeft;

				if (includeOffset) {
					pixel += tickWidth / 2;
				}

				var finalVal = me.left + Math.round(pixel);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
			return me.top + (index * (innerHeight / (me.ticks.length - 1)));
		},

		// Utility for getting the pixel location of a percentage of scale
		getPixelForDecimal: function(decimal /* , includeOffset*/) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var valueOffset = (innerWidth * decimal) + me.paddingLeft;

				var finalVal = me.left + Math.round(valueOffset);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			return me.top + (decimal * me.height);
		},

		getBasePixel: function() {
			return this.getPixelForValue(this.getBaseValue());
		},

		getBaseValue: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.beginAtZero ? 0:
				min < 0 && max < 0? max :
				min > 0 && max > 0? min :
				0;
		},

		// Actually draw the scale on the canvas
		// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
		draw: function(chartArea) {
			var me = this;
			var options = me.options;
			if (!options.display) {
				return;
			}

			var context = me.ctx;
			var globalDefaults = Chart.defaults.global;
			var optionTicks = options.ticks;
			var gridLines = options.gridLines;
			var scaleLabel = options.scaleLabel;

			var isRotated = me.labelRotation !== 0;
			var skipRatio;
			var useAutoskipper = optionTicks.autoSkip;
			var isHorizontal = me.isHorizontal();

			// figure out the maximum number of gridlines to show
			var maxTicks;
			if (optionTicks.maxTicksLimit) {
				maxTicks = optionTicks.maxTicksLimit;
			}

			var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
			var tickFont = parseFontOptions(optionTicks);

			var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;
			var borderDash = helpers.getValueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
			var borderDashOffset = helpers.getValueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);

			var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
			var scaleLabelFont = parseFontOptions(scaleLabel);

			var labelRotationRadians = helpers.toRadians(me.labelRotation);
			var cosRotation = Math.cos(labelRotationRadians);
			var longestRotatedLabel = me.longestLabelWidth * cosRotation;

			// Make sure we draw text in the correct color and font
			context.fillStyle = tickFontColor;

			var itemsToDraw = [];

			if (isHorizontal) {
				skipRatio = false;

				// Only calculate the skip ratio with the half width of longestRotateLabel if we got an actual rotation
				// See #2584
				if (isRotated) {
					longestRotatedLabel /= 2;
				}

				if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
					skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
				}

				// if they defined a max number of optionTicks,
				// increase skipRatio until that number is met
				if (maxTicks && me.ticks.length > maxTicks) {
					while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
						if (!skipRatio) {
							skipRatio = 1;
						}
						skipRatio += 1;
					}
				}

				if (!useAutoskipper) {
					skipRatio = false;
				}
			}


			var xTickStart = options.position === 'right' ? me.left : me.right - tl;
			var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
			var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
			var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;

			helpers.each(me.ticks, function(label, index) {
				// If the callback returned a null or undefined value, do not draw this line
				if (label === undefined || label === null) {
					return;
				}

				var isLastTick = me.ticks.length === index + 1;

				// Since we always show the last tick,we need may need to hide the last shown one before
				var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
				if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
					return;
				}

				var lineWidth, lineColor;
				if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
					// Draw the first index specially
					lineWidth = gridLines.zeroLineWidth;
					lineColor = gridLines.zeroLineColor;
				} else {
					lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
					lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
				}

				// Common properties
				var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
				var textAlign = 'middle';
				var textBaseline = 'middle';

				if (isHorizontal) {

					if (options.position === 'bottom') {
						// bottom
						textBaseline = !isRotated? 'top':'middle';
						textAlign = !isRotated? 'center': 'right';
						labelY = me.top + tl;
					} else {
						// top
						textBaseline = !isRotated? 'bottom':'middle';
						textAlign = !isRotated? 'center': 'left';
						labelY = me.bottom - tl;
					}

					var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth); // xvalues for grid lines
					labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)

					tx1 = tx2 = x1 = x2 = xLineValue;
					ty1 = yTickStart;
					ty2 = yTickEnd;
					y1 = chartArea.top;
					y2 = chartArea.bottom;
				} else {
					var isLeft = options.position === 'left';
					var tickPadding = optionTicks.padding;
					var labelXOffset;

					if (optionTicks.mirror) {
						textAlign = isLeft ? 'left' : 'right';
						labelXOffset = tickPadding;
					} else {
						textAlign = isLeft ? 'right' : 'left';
						labelXOffset = tl + tickPadding;
					}

					labelX = isLeft ? me.right - labelXOffset : me.left + labelXOffset;

					var yLineValue = me.getPixelForTick(index); // xvalues for grid lines
					yLineValue += helpers.aliasPixel(lineWidth);
					labelY = me.getPixelForTick(index, gridLines.offsetGridLines);

					tx1 = xTickStart;
					tx2 = xTickEnd;
					x1 = chartArea.left;
					x2 = chartArea.right;
					ty1 = ty2 = y1 = y2 = yLineValue;
				}

				itemsToDraw.push({
					tx1: tx1,
					ty1: ty1,
					tx2: tx2,
					ty2: ty2,
					x1: x1,
					y1: y1,
					x2: x2,
					y2: y2,
					labelX: labelX,
					labelY: labelY,
					glWidth: lineWidth,
					glColor: lineColor,
					glBorderDash: borderDash,
					glBorderDashOffset: borderDashOffset,
					rotation: -1 * labelRotationRadians,
					label: label,
					textBaseline: textBaseline,
					textAlign: textAlign
				});
			});

			// Draw all of the tick labels, tick marks, and grid lines at the correct places
			helpers.each(itemsToDraw, function(itemToDraw) {
				if (gridLines.display) {
					context.save();
					context.lineWidth = itemToDraw.glWidth;
					context.strokeStyle = itemToDraw.glColor;
					if (context.setLineDash) {
						context.setLineDash(itemToDraw.glBorderDash);
						context.lineDashOffset = itemToDraw.glBorderDashOffset;
					}

					context.beginPath();

					if (gridLines.drawTicks) {
						context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
						context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
					}

					if (gridLines.drawOnChartArea) {
						context.moveTo(itemToDraw.x1, itemToDraw.y1);
						context.lineTo(itemToDraw.x2, itemToDraw.y2);
					}

					context.stroke();
					context.restore();
				}

				if (optionTicks.display) {
					context.save();
					context.translate(itemToDraw.labelX, itemToDraw.labelY);
					context.rotate(itemToDraw.rotation);
					context.font = tickFont.font;
					context.textBaseline = itemToDraw.textBaseline;
					context.textAlign = itemToDraw.textAlign;

					var label = itemToDraw.label;
					if (helpers.isArray(label)) {
						for (var i = 0, y = 0; i < label.length; ++i) {
							// We just make sure the multiline element is a string here..
							context.fillText('' + label[i], 0, y);
							// apply same lineSpacing as calculated @ L#320
							y += (tickFont.size * 1.5);
						}
					} else {
						context.fillText(label, 0, 0);
					}
					context.restore();
				}
			});

			if (scaleLabel.display) {
				// Draw the scale label
				var scaleLabelX;
				var scaleLabelY;
				var rotation = 0;

				if (isHorizontal) {
					scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
					scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFont.size / 2) : me.top + (scaleLabelFont.size / 2);
				} else {
					var isLeft = options.position === 'left';
					scaleLabelX = isLeft ? me.left + (scaleLabelFont.size / 2) : me.right - (scaleLabelFont.size / 2);
					scaleLabelY = me.top + ((me.bottom - me.top) / 2);
					rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
				}

				context.save();
				context.translate(scaleLabelX, scaleLabelY);
				context.rotate(rotation);
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = scaleLabelFontColor; // render in correct colour
				context.font = scaleLabelFont.font;
				context.fillText(scaleLabel.labelString, 0, 0);
				context.restore();
			}

			if (gridLines.drawBorder) {
				// Draw the line at the edge of the axis
				context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
				context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
				var x1 = me.left,
					x2 = me.right,
					y1 = me.top,
					y2 = me.bottom;

				var aliasPixel = helpers.aliasPixel(context.lineWidth);
				if (isHorizontal) {
					y1 = y2 = options.position === 'top' ? me.bottom : me.top;
					y1 += aliasPixel;
					y2 += aliasPixel;
				} else {
					x1 = x2 = options.position === 'left' ? me.right : me.left;
					x1 += aliasPixel;
					x2 += aliasPixel;
				}

				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
				context.stroke();
			}
		}
	});
};

},{}],33:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.scaleService = {
		// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
		// use the new chart options to grab the correct scale
		constructors: {},
		// Use a registration function so that we can move to an ES6 map when we no longer need to support
		// old browsers

		// Scale config defaults
		defaults: {},
		registerScaleType: function(type, scaleConstructor, defaults) {
			this.constructors[type] = scaleConstructor;
			this.defaults[type] = helpers.clone(defaults);
		},
		getScaleConstructor: function(type) {
			return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
		},
		getScaleDefaults: function(type) {
			// Return the scale defaults merged with the global settings so that we always use the latest ones
			return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
		},
		updateScaleDefaults: function(type, additions) {
			var defaults = this.defaults;
			if (defaults.hasOwnProperty(type)) {
				defaults[type] = helpers.extend(defaults[type], additions);
			}
		},
		addScalesToLayout: function(chartInstance) {
			// Adds each scale to the chart.boxes array to be sized accordingly
			helpers.each(chartInstance.scales, function(scale) {
				Chart.layoutService.addBox(chartInstance, scale);
			});
		}
	};
};

},{}],34:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	/**
	 * Namespace to hold static tick generation functions
	 * @namespace Chart.Ticks
	 */
	Chart.Ticks = {
		/**
		 * Namespace to hold generators for different types of ticks
		 * @namespace Chart.Ticks.generators
		 */
		generators: {
			/**
			 * Interface for the options provided to the numeric tick generator
			 * @interface INumericTickGenerationOptions
			 */
			/**
			 * The maximum number of ticks to display
			 * @name INumericTickGenerationOptions#maxTicks
			 * @type Number
			 */
			/**
			 * The distance between each tick.
			 * @name INumericTickGenerationOptions#stepSize
			 * @type Number
			 * @optional
			 */
			/**
			 * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
			 * @name INumericTickGenerationOptions#min
			 * @type Number
			 * @optional
			 */
			/**
			 * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
			 * @name INumericTickGenerationOptions#max
			 * @type Number
			 * @optional
			 */

			/**
			 * Generate a set of linear ticks
			 * @method Chart.Ticks.generators.linear
			 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
			 * @param dataRange {IRange} the range of the data
			 * @returns {Array<Number>} array of tick values
			 */
			linear: function(generationOptions, dataRange) {
				var ticks = [];
				// To get a "nice" value for the tick spacing, we will use the appropriately named
				// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
				// for details.

				var spacing;
				if (generationOptions.stepSize && generationOptions.stepSize > 0) {
					spacing = generationOptions.stepSize;
				} else {
					var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
					spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
				}
				var niceMin = Math.floor(dataRange.min / spacing) * spacing;
				var niceMax = Math.ceil(dataRange.max / spacing) * spacing;

				// If min, max and stepSize is set and they make an evenly spaced scale use it.
				if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
					// If very close to our whole number, use it.
					if (helpers.almostWhole((generationOptions.max - generationOptions.min) / generationOptions.stepSize, spacing / 1000)) {
						niceMin = generationOptions.min;
						niceMax = generationOptions.max;
					}
				}

				var numSpaces = (niceMax - niceMin) / spacing;
				// If very close to our rounded value, use it.
				if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
					numSpaces = Math.round(numSpaces);
				} else {
					numSpaces = Math.ceil(numSpaces);
				}

				// Put the values into the ticks array
				ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
				for (var j = 1; j < numSpaces; ++j) {
					ticks.push(niceMin + (j * spacing));
				}
				ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);

				return ticks;
			},

			/**
			 * Generate a set of logarithmic ticks
			 * @method Chart.Ticks.generators.logarithmic
			 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
			 * @param dataRange {IRange} the range of the data
			 * @returns {Array<Number>} array of tick values
			 */
			logarithmic: function(generationOptions, dataRange) {
				var ticks = [];
				var getValueOrDefault = helpers.getValueOrDefault;

				// Figure out what the max number of ticks we can support it is based on the size of
				// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
				// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
				// the graph
				var tickVal = getValueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));

				var endExp = Math.floor(helpers.log10(dataRange.max));
				var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
				var exp;
				var significand;

				if (tickVal === 0) {
					exp = Math.floor(helpers.log10(dataRange.minNotZero));
					significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

					ticks.push(tickVal);
					tickVal = significand * Math.pow(10, exp);
				} else {
					exp = Math.floor(helpers.log10(tickVal));
					significand = Math.floor(tickVal / Math.pow(10, exp));
				}

				do {
					ticks.push(tickVal);

					++significand;
					if (significand === 10) {
						significand = 1;
						++exp;
					}

					tickVal = significand * Math.pow(10, exp);
				} while (exp < endExp || (exp === endExp && significand < endSignificand));

				var lastTick = getValueOrDefault(generationOptions.max, tickVal);
				ticks.push(lastTick);

				return ticks;
			}
		},

		/**
		 * Namespace to hold formatters for different types of ticks
		 * @namespace Chart.Ticks.formatters
		 */
		formatters: {
			/**
			 * Formatter for value labels
			 * @method Chart.Ticks.formatters.values
			 * @param value the value to display
			 * @return {String|Array} the label to display
			 */
			values: function(value) {
				return helpers.isArray(value) ? value : '' + value;
			},

			/**
			 * Formatter for linear numeric ticks
			 * @method Chart.Ticks.formatters.linear
			 * @param tickValue {Number} the value to be formatted
			 * @param index {Number} the position of the tickValue parameter in the ticks array
			 * @param ticks {Array<Number>} the list of ticks being converted
			 * @return {String} string representation of the tickValue parameter
			 */
			linear: function(tickValue, index, ticks) {
				// If we have lots of ticks, don't use the ones
				var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

				// If we have a number like 2.5 as the delta, figure out how many decimal places we need
				if (Math.abs(delta) > 1) {
					if (tickValue !== Math.floor(tickValue)) {
						// not an integer
						delta = tickValue - Math.floor(tickValue);
					}
				}

				var logDelta = helpers.log10(Math.abs(delta));
				var tickString = '';

				if (tickValue !== 0) {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				} else {
					tickString = '0'; // never show decimal places for 0
				}

				return tickString;
			},

			logarithmic: function(tickValue, index, ticks) {
				var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));

				if (tickValue === 0) {
					return '0';
				} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
					return tickValue.toExponential();
				}
				return '';
			}
		}
	};
};

},{}],35:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.title = {
		display: false,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)

		fontStyle: 'bold',
		padding: 10,

		// actual title
		text: ''
	};

	var noop = helpers.noop;
	Chart.Title = Chart.Element.extend({

		initialize: function(config) {
			var me = this;
			helpers.extend(me, config);

			// Contains hit boxes for each dataset (in dataset order)
			me.legendHitBoxes = [];
		},

		// These methods are ordered by lifecycle. Utilities then follow.

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: noop,
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this,
				valueOrDefault = helpers.getValueOrDefault,
				opts = me.options,
				globalDefaults = Chart.defaults.global,
				display = opts.display,
				fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
				minSize = me.minSize;

			if (me.isHorizontal()) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? fontSize + (opts.padding * 2) : 0;
			} else {
				minSize.width = display ? fontSize + (opts.padding * 2) : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			me.width = minSize.width;
			me.height = minSize.height;

		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			var pos = this.options.position;
			return pos === 'top' || pos === 'bottom';
		},

		// Actually draw the title block on the canvas
		draw: function() {
			var me = this,
				ctx = me.ctx,
				valueOrDefault = helpers.getValueOrDefault,
				opts = me.options,
				globalDefaults = Chart.defaults.global;

			if (opts.display) {
				var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
					fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
					fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
					titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
					rotation = 0,
					titleX,
					titleY,
					top = me.top,
					left = me.left,
					bottom = me.bottom,
					right = me.right,
					maxWidth;

				ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
				ctx.font = titleFont;

				// Horizontal
				if (me.isHorizontal()) {
					titleX = left + ((right - left) / 2); // midpoint of the width
					titleY = top + ((bottom - top) / 2); // midpoint of the height
					maxWidth = right - left;
				} else {
					titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
					titleY = top + ((bottom - top) / 2);
					maxWidth = bottom - top;
					rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
				}

				ctx.save();
				ctx.translate(titleX, titleY);
				ctx.rotate(rotation);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText(opts.text, 0, 0, maxWidth);
				ctx.restore();
			}
		}
	});

	function createNewTitleBlockAndAttach(chartInstance, titleOpts) {
		var title = new Chart.Title({
			ctx: chartInstance.chart.ctx,
			options: titleOpts,
			chart: chartInstance
		});
		chartInstance.titleBlock = title;
		Chart.layoutService.addBox(chartInstance, title);
	}

	// Register the title plugin
	Chart.plugins.register({
		beforeInit: function(chartInstance) {
			var titleOpts = chartInstance.options.title;

			if (titleOpts) {
				createNewTitleBlockAndAttach(chartInstance, titleOpts);
			}
		},
		beforeUpdate: function(chartInstance) {
			var titleOpts = chartInstance.options.title;

			if (titleOpts) {
				titleOpts = helpers.configMerge(Chart.defaults.global.title, titleOpts);

				if (chartInstance.titleBlock) {
					chartInstance.titleBlock.options = titleOpts;
				} else {
					createNewTitleBlockAndAttach(chartInstance, titleOpts);
				}
			} else {
				Chart.layoutService.removeBox(chartInstance, chartInstance.titleBlock);
				delete chartInstance.titleBlock;
			}
		}
	});
};

},{}],36:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	/**
 	 * Helper method to merge the opacity into a color
 	 */
	function mergeOpacity(colorString, opacity) {
		var color = helpers.color(colorString);
		return color.alpha(opacity * color.alpha()).rgbaString();
	}

	Chart.defaults.global.tooltips = {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers.noop,
			title: function(tooltipItems, data) {
				// Pick first xLabel for now
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];

					if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers.noop,
			label: function(tooltipItem, data) {
				var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
				return datasetLabel + ': ' + tooltipItem.yLabel;
			},
			labelColor: function(tooltipItem, chartInstance) {
				var meta = chartInstance.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			afterLabel: helpers.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers.noop,
			footer: helpers.noop,
			afterFooter: helpers.noop
		}
	};

	// Helper to push or concat based on if the 2nd parameter is an array or not
	function pushOrConcat(base, toPush) {
		if (toPush) {
			if (helpers.isArray(toPush)) {
				// base = base.concat(toPush);
				Array.prototype.push.apply(base, toPush);
			} else {
				base.push(toPush);
			}
		}

		return base;
	}

	// Private helper to create a tooltip item model
	// @param element : the chart element (point, arc, bar) to create the tooltip item for
	// @return : new tooltip item
	function createTooltipItem(element) {
		var xScale = element._xScale;
		var yScale = element._yScale || element._scale; // handle radar || polarArea charts
		var index = element._index,
			datasetIndex = element._datasetIndex;

		return {
			xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
			yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
			index: index,
			datasetIndex: datasetIndex,
			x: element._model.x,
			y: element._model.y
		};
	}

	/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */
	function getBaseModel(tooltipOpts) {
		var globalDefaults = Chart.defaults.global;
		var getValueOrDefault = helpers.getValueOrDefault;

		return {
			// Positioning
			xPadding: tooltipOpts.xPadding,
			yPadding: tooltipOpts.yPadding,
			xAlign: tooltipOpts.xAlign,
			yAlign: tooltipOpts.yAlign,

			// Body
			bodyFontColor: tooltipOpts.bodyFontColor,
			_bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
			_bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
			_bodyAlign: tooltipOpts.bodyAlign,
			bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
			bodySpacing: tooltipOpts.bodySpacing,

			// Title
			titleFontColor: tooltipOpts.titleFontColor,
			_titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
			_titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
			titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
			_titleAlign: tooltipOpts.titleAlign,
			titleSpacing: tooltipOpts.titleSpacing,
			titleMarginBottom: tooltipOpts.titleMarginBottom,

			// Footer
			footerFontColor: tooltipOpts.footerFontColor,
			_footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
			_footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
			footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
			_footerAlign: tooltipOpts.footerAlign,
			footerSpacing: tooltipOpts.footerSpacing,
			footerMarginTop: tooltipOpts.footerMarginTop,

			// Appearance
			caretSize: tooltipOpts.caretSize,
			cornerRadius: tooltipOpts.cornerRadius,
			backgroundColor: tooltipOpts.backgroundColor,
			opacity: 0,
			legendColorBackground: tooltipOpts.multiKeyBackground,
			displayColors: tooltipOpts.displayColors
		};
	}

	/**
	 * Get the size of the tooltip
	 */
	function getTooltipSize(tooltip, model) {
		var ctx = tooltip._chart.ctx;

		var height = model.yPadding * 2; // Tooltip Padding
		var width = 0;

		// Count of all lines in the body
		var body = model.body;
		var combinedBodyLength = body.reduce(function(count, bodyItem) {
			return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
		}, 0);
		combinedBodyLength += model.beforeBody.length + model.afterBody.length;

		var titleLineCount = model.title.length;
		var footerLineCount = model.footer.length;
		var titleFontSize = model.titleFontSize,
			bodyFontSize = model.bodyFontSize,
			footerFontSize = model.footerFontSize;

		height += titleLineCount * titleFontSize; // Title Lines
		height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
		height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
		height += combinedBodyLength * bodyFontSize; // Body Lines
		height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
		height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
		height += footerLineCount * (footerFontSize); // Footer Lines
		height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

		// Title width
		var widthPadding = 0;
		var maxLineWidth = function(line) {
			width = Math.max(width, ctx.measureText(line).width + widthPadding);
		};

		ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
		helpers.each(model.title, maxLineWidth);

		// Body width
		ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
		helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

		// Body lines may include some extra width due to the color box
		widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
		helpers.each(body, function(bodyItem) {
			helpers.each(bodyItem.before, maxLineWidth);
			helpers.each(bodyItem.lines, maxLineWidth);
			helpers.each(bodyItem.after, maxLineWidth);
		});

		// Reset back to 0
		widthPadding = 0;

		// Footer width
		ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
		helpers.each(model.footer, maxLineWidth);

		// Add padding
		width += 2 * model.xPadding;

		return {
			width: width,
			height: height
		};
	}

	/**
	 * Helper to get the alignment of a tooltip given the size
	 */
	function determineAlignment(tooltip, size) {
		var model = tooltip._model;
		var chart = tooltip._chart;
		var chartArea = tooltip._chartInstance.chartArea;
		var xAlign = 'center';
		var yAlign = 'center';

		if (model.y < size.height) {
			yAlign = 'top';
		} else if (model.y > (chart.height - size.height)) {
			yAlign = 'bottom';
		}

		var lf, rf; // functions to determine left, right alignment
		var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
		var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
		var midX = (chartArea.left + chartArea.right) / 2;
		var midY = (chartArea.top + chartArea.bottom) / 2;

		if (yAlign === 'center') {
			lf = function(x) {
				return x <= midX;
			};
			rf = function(x) {
				return x > midX;
			};
		} else {
			lf = function(x) {
				return x <= (size.width / 2);
			};
			rf = function(x) {
				return x >= (chart.width - (size.width / 2));
			};
		}

		olf = function(x) {
			return x + size.width > chart.width;
		};
		orf = function(x) {
			return x - size.width < 0;
		};
		yf = function(y) {
			return y <= midY ? 'top' : 'bottom';
		};

		if (lf(model.x)) {
			xAlign = 'left';

			// Is tooltip too wide and goes over the right side of the chart.?
			if (olf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		} else if (rf(model.x)) {
			xAlign = 'right';

			// Is tooltip too wide and goes outside left edge of canvas?
			if (orf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		}

		var opts = tooltip._options;
		return {
			xAlign: opts.xAlign ? opts.xAlign : xAlign,
			yAlign: opts.yAlign ? opts.yAlign : yAlign
		};
	}

	/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */
	function getBackgroundPoint(vm, size, alignment) {
		// Background Position
		var x = vm.x;
		var y = vm.y;

		var caretSize = vm.caretSize,
			caretPadding = vm.caretPadding,
			cornerRadius = vm.cornerRadius,
			xAlign = alignment.xAlign,
			yAlign = alignment.yAlign,
			paddingAndSize = caretSize + caretPadding,
			radiusAndPadding = cornerRadius + caretPadding;

		if (xAlign === 'right') {
			x -= size.width;
		} else if (xAlign === 'center') {
			x -= (size.width / 2);
		}

		if (yAlign === 'top') {
			y += paddingAndSize;
		} else if (yAlign === 'bottom') {
			y -= size.height + paddingAndSize;
		} else {
			y -= (size.height / 2);
		}

		if (yAlign === 'center') {
			if (xAlign === 'left') {
				x += paddingAndSize;
			} else if (xAlign === 'right') {
				x -= paddingAndSize;
			}
		} else if (xAlign === 'left') {
			x -= radiusAndPadding;
		} else if (xAlign === 'right') {
			x += radiusAndPadding;
		}

		return {
			x: x,
			y: y
		};
	}

	Chart.Tooltip = Chart.Element.extend({
		initialize: function() {
			this._model = getBaseModel(this._options);
		},

		// Get the title
		// Args are: (tooltipItem, data)
		getTitle: function() {
			var me = this;
			var opts = me._options;
			var callbacks = opts.callbacks;

			var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
				title = callbacks.title.apply(me, arguments),
				afterTitle = callbacks.afterTitle.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeTitle);
			lines = pushOrConcat(lines, title);
			lines = pushOrConcat(lines, afterTitle);

			return lines;
		},

		// Args are: (tooltipItem, data)
		getBeforeBody: function() {
			var lines = this._options.callbacks.beforeBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Args are: (tooltipItem, data)
		getBody: function(tooltipItems, data) {
			var me = this;
			var callbacks = me._options.callbacks;
			var bodyItems = [];

			helpers.each(tooltipItems, function(tooltipItem) {
				var bodyItem = {
					before: [],
					lines: [],
					after: []
				};
				pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));

				bodyItems.push(bodyItem);
			});

			return bodyItems;
		},

		// Args are: (tooltipItem, data)
		getAfterBody: function() {
			var lines = this._options.callbacks.afterBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Get the footer and beforeFooter and afterFooter lines
		// Args are: (tooltipItem, data)
		getFooter: function() {
			var me = this;
			var callbacks = me._options.callbacks;

			var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
			var footer = callbacks.footer.apply(me, arguments);
			var afterFooter = callbacks.afterFooter.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeFooter);
			lines = pushOrConcat(lines, footer);
			lines = pushOrConcat(lines, afterFooter);

			return lines;
		},

		update: function(changed) {
			var me = this;
			var opts = me._options;

			// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
			// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
			// which breaks any animations.
			var existingModel = me._model;
			var model = me._model = getBaseModel(opts);
			var active = me._active;

			var data = me._data;
			var chartInstance = me._chartInstance;

			// In the case where active.length === 0 we need to keep these at existing values for good animations
			var alignment = {
				xAlign: existingModel.xAlign,
				yAlign: existingModel.yAlign
			};
			var backgroundPoint = {
				x: existingModel.x,
				y: existingModel.y
			};
			var tooltipSize = {
				width: existingModel.width,
				height: existingModel.height
			};
			var tooltipPosition = {
				x: existingModel.caretX,
				y: existingModel.caretY
			};

			var i, len;

			if (active.length) {
				model.opacity = 1;

				var labelColors = [];
				tooltipPosition = Chart.Tooltip.positioners[opts.position](active, me._eventPosition);

				var tooltipItems = [];
				for (i = 0, len = active.length; i < len; ++i) {
					tooltipItems.push(createTooltipItem(active[i]));
				}

				// If the user provided a filter function, use it to modify the tooltip items
				if (opts.filter) {
					tooltipItems = tooltipItems.filter(function(a) {
						return opts.filter(a, data);
					});
				}

				// If the user provided a sorting function, use it to modify the tooltip items
				if (opts.itemSort) {
					tooltipItems = tooltipItems.sort(function(a, b) {
						return opts.itemSort(a, b, data);
					});
				}

				// Determine colors for boxes
				helpers.each(tooltipItems, function(tooltipItem) {
					labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, chartInstance));
				});

				// Build the Text Lines
				model.title = me.getTitle(tooltipItems, data);
				model.beforeBody = me.getBeforeBody(tooltipItems, data);
				model.body = me.getBody(tooltipItems, data);
				model.afterBody = me.getAfterBody(tooltipItems, data);
				model.footer = me.getFooter(tooltipItems, data);

				// Initial positioning and colors
				model.x = Math.round(tooltipPosition.x);
				model.y = Math.round(tooltipPosition.y);
				model.caretPadding = helpers.getValueOrDefault(tooltipPosition.padding, 2);
				model.labelColors = labelColors;

				// data points
				model.dataPoints = tooltipItems;

				// We need to determine alignment of the tooltip
				tooltipSize = getTooltipSize(this, model);
				alignment = determineAlignment(this, tooltipSize);
				// Final Size and Position
				backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
			} else {
				model.opacity = 0;
			}

			model.xAlign = alignment.xAlign;
			model.yAlign = alignment.yAlign;
			model.x = backgroundPoint.x;
			model.y = backgroundPoint.y;
			model.width = tooltipSize.width;
			model.height = tooltipSize.height;

			// Point where the caret on the tooltip points to
			model.caretX = tooltipPosition.x;
			model.caretY = tooltipPosition.y;

			me._model = model;

			if (changed && opts.custom) {
				opts.custom.call(me, model);
			}

			return me;
		},
		drawCaret: function(tooltipPoint, size, opacity) {
			var vm = this._view;
			var ctx = this._chart.ctx;
			var x1, x2, x3;
			var y1, y2, y3;
			var caretSize = vm.caretSize;
			var cornerRadius = vm.cornerRadius;
			var xAlign = vm.xAlign,
				yAlign = vm.yAlign;
			var ptX = tooltipPoint.x,
				ptY = tooltipPoint.y;
			var width = size.width,
				height = size.height;

			if (yAlign === 'center') {
				// Left or right side
				if (xAlign === 'left') {
					x1 = ptX;
					x2 = x1 - caretSize;
					x3 = x1;
				} else {
					x1 = ptX + width;
					x2 = x1 + caretSize;
					x3 = x1;
				}

				y2 = ptY + (height / 2);
				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			} else {
				if (xAlign === 'left') {
					x1 = ptX + cornerRadius;
					x2 = x1 + caretSize;
					x3 = x2 + caretSize;
				} else if (xAlign === 'right') {
					x1 = ptX + width - cornerRadius;
					x2 = x1 - caretSize;
					x3 = x2 - caretSize;
				} else {
					x2 = ptX + (width / 2);
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				}

				if (yAlign === 'top') {
					y1 = ptY;
					y2 = y1 - caretSize;
					y3 = y1;
				} else {
					y1 = ptY + height;
					y2 = y1 + caretSize;
					y3 = y1;
				}
			}

			ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.lineTo(x3, y3);
			ctx.closePath();
			ctx.fill();
		},
		drawTitle: function(pt, vm, ctx, opacity) {
			var title = vm.title;

			if (title.length) {
				ctx.textAlign = vm._titleAlign;
				ctx.textBaseline = 'top';

				var titleFontSize = vm.titleFontSize,
					titleSpacing = vm.titleSpacing;

				ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
				ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

				var i, len;
				for (i = 0, len = title.length; i < len; ++i) {
					ctx.fillText(title[i], pt.x, pt.y);
					pt.y += titleFontSize + titleSpacing; // Line Height and spacing

					if (i + 1 === title.length) {
						pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
					}
				}
			}
		},
		drawBody: function(pt, vm, ctx, opacity) {
			var bodyFontSize = vm.bodyFontSize;
			var bodySpacing = vm.bodySpacing;
			var body = vm.body;

			ctx.textAlign = vm._bodyAlign;
			ctx.textBaseline = 'top';

			var textColor = mergeOpacity(vm.bodyFontColor, opacity);
			ctx.fillStyle = textColor;
			ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

			// Before Body
			var xLinePadding = 0;
			var fillLineOfText = function(line) {
				ctx.fillText(line, pt.x + xLinePadding, pt.y);
				pt.y += bodyFontSize + bodySpacing;
			};

			// Before body lines
			helpers.each(vm.beforeBody, fillLineOfText);

			var drawColorBoxes = vm.displayColors;
			xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;

			// Draw body lines now
			helpers.each(body, function(bodyItem, i) {
				helpers.each(bodyItem.before, fillLineOfText);

				helpers.each(bodyItem.lines, function(line) {
					// Draw Legend-like boxes if needed
					if (drawColorBoxes) {
						// Fill a white rect so that colours merge nicely if the opacity is < 1
						ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
						ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Border
						ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
						ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Inner square
						ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
						ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);

						ctx.fillStyle = textColor;
					}

					fillLineOfText(line);
				});

				helpers.each(bodyItem.after, fillLineOfText);
			});

			// Reset back to 0 for after body
			xLinePadding = 0;

			// After body lines
			helpers.each(vm.afterBody, fillLineOfText);
			pt.y -= bodySpacing; // Remove last body spacing
		},
		drawFooter: function(pt, vm, ctx, opacity) {
			var footer = vm.footer;

			if (footer.length) {
				pt.y += vm.footerMarginTop;

				ctx.textAlign = vm._footerAlign;
				ctx.textBaseline = 'top';

				ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
				ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

				helpers.each(footer, function(line) {
					ctx.fillText(line, pt.x, pt.y);
					pt.y += vm.footerFontSize + vm.footerSpacing;
				});
			}
		},
		drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
			ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
			helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
			ctx.fill();
		},
		draw: function() {
			var ctx = this._chart.ctx;
			var vm = this._view;

			if (vm.opacity === 0) {
				return;
			}

			var tooltipSize = {
				width: vm.width,
				height: vm.height
			};
			var pt = {
				x: vm.x,
				y: vm.y
			};

			// IE11/Edge does not like very small opacities, so snap to 0
			var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

			if (this._options.enabled) {
				// Draw Background
				this.drawBackground(pt, vm, ctx, tooltipSize, opacity);

				// Draw Caret
				this.drawCaret(pt, tooltipSize, opacity);

				// Draw Title, Body, and Footer
				pt.x += vm.xPadding;
				pt.y += vm.yPadding;

				// Titles
				this.drawTitle(pt, vm, ctx, opacity);

				// Body
				this.drawBody(pt, vm, ctx, opacity);

				// Footer
				this.drawFooter(pt, vm, ctx, opacity);
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me._options;
			var changed = false;

			me._lastActive = me._lastActive || [];

			// Find Active Elements for tooltips
			if (e.type === 'mouseout') {
				me._active = [];
			} else {
				me._active = me._chartInstance.getElementsAtEventForMode(e, options.mode, options);
			}

			// Remember Last Actives
			changed = !helpers.arrayEquals(me._active, me._lastActive);
			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				var model = me._model;
				me.update(true);
				me.pivot();

				// See if our tooltip position changed
				changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
			}

			return changed;
		}
	});

	/**
	 * @namespace Chart.Tooltip.positioners
	 */
	Chart.Tooltip.positioners = {
		/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */
		average: function(elements) {
			if (!elements.length) {
				return false;
			}

			var i, len;
			var x = 0;
			var y = 0;
			var count = 0;

			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var pos = el.tooltipPosition();
					x += pos.x;
					y += pos.y;
					++count;
				}
			}

			return {
				x: Math.round(x / count),
				y: Math.round(y / count)
			};
		},

		/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */
		nearest: function(elements, eventPosition) {
			var x = eventPosition.x;
			var y = eventPosition.y;

			var nearestElement;
			var minDistance = Number.POSITIVE_INFINITY;
			var i, len;
			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var center = el.getCenterPoint();
					var d = helpers.distanceBetweenPoints(eventPosition, center);

					if (d < minDistance) {
						minDistance = d;
						nearestElement = el;
					}
				}
			}

			if (nearestElement) {
				var tp = nearestElement.tooltipPosition();
				x = tp.x;
				y = tp.y;
			}

			return {
				x: x,
				y: y
			};
		}
	};
};

},{}],37:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		globalOpts = Chart.defaults.global;

	globalOpts.elements.arc = {
		backgroundColor: globalOpts.defaultColor,
		borderColor: '#fff',
		borderWidth: 2
	};

	Chart.elements.Arc = Chart.Element.extend({
		inLabelRange: function(mouseX) {
			var vm = this._view;

			if (vm) {
				return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
			}
			return false;
		},
		inRange: function(chartX, chartY) {
			var vm = this._view;

			if (vm) {
				var pointRelativePosition = helpers.getAngleFromPoint(vm, {
						x: chartX,
						y: chartY
					}),
					angle = pointRelativePosition.angle,
					distance = pointRelativePosition.distance;

				// Sanitise angle range
				var startAngle = vm.startAngle;
				var endAngle = vm.endAngle;
				while (endAngle < startAngle) {
					endAngle += 2.0 * Math.PI;
				}
				while (angle > endAngle) {
					angle -= 2.0 * Math.PI;
				}
				while (angle < startAngle) {
					angle += 2.0 * Math.PI;
				}

				// Check if within the range of the open/close angle
				var betweenAngles = (angle >= startAngle && angle <= endAngle),
					withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

				return (betweenAngles && withinRadius);
			}
			return false;
		},
		getCenterPoint: function() {
			var vm = this._view;
			var halfAngle = (vm.startAngle + vm.endAngle) / 2;
			var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
			return {
				x: vm.x + Math.cos(halfAngle) * halfRadius,
				y: vm.y + Math.sin(halfAngle) * halfRadius
			};
		},
		getArea: function() {
			var vm = this._view;
			return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
		},
		tooltipPosition: function() {
			var vm = this._view;

			var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
				rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
			return {
				x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
				y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw: function() {

			var ctx = this._chart.ctx,
				vm = this._view,
				sA = vm.startAngle,
				eA = vm.endAngle;

			ctx.beginPath();

			ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
			ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

			ctx.closePath();
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = vm.borderWidth;

			ctx.fillStyle = vm.backgroundColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (vm.borderWidth) {
				ctx.stroke();
			}
		}
	});
};

},{}],38:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var globalDefaults = Chart.defaults.global;

	Chart.defaults.global.elements.line = {
		tension: 0.4,
		backgroundColor: globalDefaults.defaultColor,
		borderWidth: 3,
		borderColor: globalDefaults.defaultColor,
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		capBezierPoints: true,
		fill: true, // do we fill in the area between the line and its base axis
	};

	Chart.elements.Line = Chart.Element.extend({
		draw: function() {
			var me = this;
			var vm = me._view;
			var spanGaps = vm.spanGaps;
			var fillPoint = vm.scaleZero;
			var loop = me._loop;

			// Handle different fill modes for cartesian lines
			if (!loop) {
				if (vm.fill === 'top') {
					fillPoint = vm.scaleTop;
				} else if (vm.fill === 'bottom') {
					fillPoint = vm.scaleBottom;
				}
			}

			var ctx = me._chart.ctx;
			ctx.save();

			// Helper function to draw a line to a point
			function lineToPoint(previousPoint, point) {
				var pointVM = point._view;
				if (point._view.steppedLine === true) {
					ctx.lineTo(pointVM.x, previousPoint._view.y);
					ctx.lineTo(pointVM.x, pointVM.y);
				} else if (point._view.tension === 0) {
					ctx.lineTo(pointVM.x, pointVM.y);
				} else {
					ctx.bezierCurveTo(
						previousPoint._view.controlPointNextX,
						previousPoint._view.controlPointNextY,
						pointVM.controlPointPreviousX,
						pointVM.controlPointPreviousY,
						pointVM.x,
						pointVM.y
					);
				}
			}

			var points = me._children.slice(); // clone array
			var lastDrawnIndex = -1;

			// If we are looping, adding the first point again
			if (loop && points.length) {
				points.push(points[0]);
			}

			var index, current, previous, currentVM;

			// Fill Line
			if (points.length && vm.fill) {
				ctx.beginPath();

				for (index = 0; index < points.length; ++index) {
					current = points[index];
					previous = helpers.previousItem(points, index);
					currentVM = current._view;

					// First point moves to it's starting position no matter what
					if (index === 0) {
						if (loop) {
							ctx.moveTo(fillPoint.x, fillPoint.y);
						} else {
							ctx.moveTo(currentVM.x, fillPoint);
						}

						if (!currentVM.skip) {
							lastDrawnIndex = index;
							ctx.lineTo(currentVM.x, currentVM.y);
						}
					} else {
						previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

						if (currentVM.skip) {
							// Only do this if this is the first point that is skipped
							if (!spanGaps && lastDrawnIndex === (index - 1)) {
								if (loop) {
									ctx.lineTo(fillPoint.x, fillPoint.y);
								} else {
									ctx.lineTo(previous._view.x, fillPoint);
								}
							}
						} else {
							if (lastDrawnIndex !== (index - 1)) {
								// There was a gap and this is the first point after the gap. If we've never drawn a point, this is a special case.
								// If the first data point is NaN, then there is no real gap to skip
								if (spanGaps && lastDrawnIndex !== -1) {
									// We are spanning the gap, so simple draw a line to this point
									lineToPoint(previous, current);
								} else if (loop) {
									ctx.lineTo(currentVM.x, currentVM.y);
								} else {
									ctx.lineTo(currentVM.x, fillPoint);
									ctx.lineTo(currentVM.x, currentVM.y);
								}
							} else {
								// Line to next point
								lineToPoint(previous, current);
							}
							lastDrawnIndex = index;
						}
					}
				}

				if (!loop && lastDrawnIndex !== -1) {
					ctx.lineTo(points[lastDrawnIndex]._view.x, fillPoint);
				}

				ctx.fillStyle = vm.backgroundColor || globalDefaults.defaultColor;
				ctx.closePath();
				ctx.fill();
			}

			// Stroke Line Options
			var globalOptionLineElements = globalDefaults.elements.line;
			ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

			// IE 9 and 10 do not support line dash
			if (ctx.setLineDash) {
				ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
			}

			ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
			ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
			ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
			ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

			// Stroke Line
			ctx.beginPath();
			lastDrawnIndex = -1;

			for (index = 0; index < points.length; ++index) {
				current = points[index];
				previous = helpers.previousItem(points, index);
				currentVM = current._view;

				// First point moves to it's starting position no matter what
				if (index === 0) {
					if (!currentVM.skip) {
						ctx.moveTo(currentVM.x, currentVM.y);
						lastDrawnIndex = index;
					}
				} else {
					previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

					if (!currentVM.skip) {
						if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
							// There was a gap and this is the first point after the gap
							ctx.moveTo(currentVM.x, currentVM.y);
						} else {
							// Line to next point
							lineToPoint(previous, current);
						}
						lastDrawnIndex = index;
					}
				}
			}

			ctx.stroke();
			ctx.restore();
		}
	});
};

},{}],39:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		globalOpts = Chart.defaults.global,
		defaultColor = globalOpts.defaultColor;

	globalOpts.elements.point = {
		radius: 3,
		pointStyle: 'circle',
		backgroundColor: defaultColor,
		borderWidth: 1,
		borderColor: defaultColor,
		// Hover
		hitRadius: 1,
		hoverRadius: 4,
		hoverBorderWidth: 1
	};

	function xRange(mouseX) {
		var vm = this._view;
		return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
	}

	function yRange(mouseY) {
		var vm = this._view;
		return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
	}

	Chart.elements.Point = Chart.Element.extend({
		inRange: function(mouseX, mouseY) {
			var vm = this._view;
			return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
		},

		inLabelRange: xRange,
		inXRange: xRange,
		inYRange: yRange,

		getCenterPoint: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y
			};
		},
		getArea: function() {
			return Math.PI * Math.pow(this._view.radius, 2);
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y,
				padding: vm.radius + vm.borderWidth
			};
		},
		draw: function(chartArea) {
			var vm = this._view;
			var model = this._model;
			var ctx = this._chart.ctx;
			var pointStyle = vm.pointStyle;
			var radius = vm.radius;
			var x = vm.x;
			var y = vm.y;
			var color = Chart.helpers.color;
			var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
			var ratio = 0;

			if (vm.skip) {
				return;
			}

			ctx.strokeStyle = vm.borderColor || defaultColor;
			ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
			ctx.fillStyle = vm.backgroundColor || defaultColor;

			// Cliping for Points.
			// going out from inner charArea?
			if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right*errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom*errMargin < model.y))) {
				// Point fade out
				if (model.x < chartArea.left) {
					ratio = (x - model.x) / (chartArea.left - model.x);
				} else if (chartArea.right*errMargin < model.x) {
					ratio = (model.x - x) / (model.x - chartArea.right);
				} else if (model.y < chartArea.top) {
					ratio = (y - model.y) / (chartArea.top - model.y);
				} else if (chartArea.bottom*errMargin < model.y) {
					ratio = (model.y - y) / (model.y - chartArea.bottom);
				}
				ratio = Math.round(ratio*100) / 100;
				ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
				ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
			}

			Chart.canvasHelpers.drawPoint(ctx, pointStyle, radius, x, y);
		}
	});
};

},{}],40:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var globalOpts = Chart.defaults.global;

	globalOpts.elements.rectangle = {
		backgroundColor: globalOpts.defaultColor,
		borderWidth: 0,
		borderColor: globalOpts.defaultColor,
		borderSkipped: 'bottom'
	};

	function isVertical(bar) {
		return bar._view.width !== undefined;
	}

	/**
	 * Helper function to get the bounds of the bar regardless of the orientation
	 * @private
	 * @param bar {Chart.Element.Rectangle} the bar
	 * @return {Bounds} bounds of the bar
	 */
	function getBarBounds(bar) {
		var vm = bar._view;
		var x1, x2, y1, y2;

		if (isVertical(bar)) {
			// vertical
			var halfWidth = vm.width / 2;
			x1 = vm.x - halfWidth;
			x2 = vm.x + halfWidth;
			y1 = Math.min(vm.y, vm.base);
			y2 = Math.max(vm.y, vm.base);
		} else {
			// horizontal bar
			var halfHeight = vm.height / 2;
			x1 = Math.min(vm.x, vm.base);
			x2 = Math.max(vm.x, vm.base);
			y1 = vm.y - halfHeight;
			y2 = vm.y + halfHeight;
		}

		return {
			left: x1,
			top: y1,
			right: x2,
			bottom: y2
		};
	}

	Chart.elements.Rectangle = Chart.Element.extend({
		draw: function() {
			var ctx = this._chart.ctx;
			var vm = this._view;
			var left, right, top, bottom, signX, signY, borderSkipped;
			var borderWidth = vm.borderWidth;

			if (!vm.horizontal) {
				// bar
				left = vm.x - vm.width / 2;
				right = vm.x + vm.width / 2;
				top = vm.y;
				bottom = vm.base;
				signX = 1;
				signY = bottom > top? 1: -1;
				borderSkipped = vm.borderSkipped || 'bottom';
			} else {
				// horizontal bar
				left = vm.base;
				right = vm.x;
				top = vm.y - vm.height / 2;
				bottom = vm.y + vm.height / 2;
				signX = right > left? 1: -1;
				signY = 1;
				borderSkipped = vm.borderSkipped || 'left';
			}

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (borderWidth) {
				// borderWidth shold be less than bar width and bar height.
				var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
				borderWidth = borderWidth > barSize? barSize: borderWidth;
				var halfStroke = borderWidth / 2;
				// Adjust borderWidth when bar top position is near vm.base(zero).
				var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
				var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
				var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
				var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
				// not become a vertical line?
				if (borderLeft !== borderRight) {
					top = borderTop;
					bottom = borderBottom;
				}
				// not become a horizontal line?
				if (borderTop !== borderBottom) {
					left = borderLeft;
					right = borderRight;
				}
			}

			ctx.beginPath();
			ctx.fillStyle = vm.backgroundColor;
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = borderWidth;

			// Corner points, from bottom-left to bottom-right clockwise
			// | 1 2 |
			// | 0 3 |
			var corners = [
				[left, bottom],
				[left, top],
				[right, top],
				[right, bottom]
			];

			// Find first (starting) corner with fallback to 'bottom'
			var borders = ['bottom', 'left', 'top', 'right'];
			var startCorner = borders.indexOf(borderSkipped, 0);
			if (startCorner === -1) {
				startCorner = 0;
			}

			function cornerAt(index) {
				return corners[(startCorner + index) % 4];
			}

			// Draw rectangle from 'startCorner'
			var corner = cornerAt(0);
			ctx.moveTo(corner[0], corner[1]);

			for (var i = 1; i < 4; i++) {
				corner = cornerAt(i);
				ctx.lineTo(corner[0], corner[1]);
			}

			ctx.fill();
			if (borderWidth) {
				ctx.stroke();
			}
		},
		height: function() {
			var vm = this._view;
			return vm.base - vm.y;
		},
		inRange: function(mouseX, mouseY) {
			var inRange = false;

			if (this._view) {
				var bounds = getBarBounds(this);
				inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
			}

			return inRange;
		},
		inLabelRange: function(mouseX, mouseY) {
			var me = this;
			if (!me._view) {
				return false;
			}

			var inRange = false;
			var bounds = getBarBounds(me);

			if (isVertical(me)) {
				inRange = mouseX >= bounds.left && mouseX <= bounds.right;
			} else {
				inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
			}

			return inRange;
		},
		inXRange: function(mouseX) {
			var bounds = getBarBounds(this);
			return mouseX >= bounds.left && mouseX <= bounds.right;
		},
		inYRange: function(mouseY) {
			var bounds = getBarBounds(this);
			return mouseY >= bounds.top && mouseY <= bounds.bottom;
		},
		getCenterPoint: function() {
			var vm = this._view;
			var x, y;
			if (isVertical(this)) {
				x = vm.x;
				y = (vm.y + vm.base) / 2;
			} else {
				x = (vm.x + vm.base) / 2;
				y = vm.y;
			}

			return {x: x, y: y};
		},
		getArea: function() {
			var vm = this._view;
			return vm.width * Math.abs(vm.y - vm.base);
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y
			};
		}
	});

};

},{}],41:[function(require,module,exports){
'use strict';

// Chart.Platform implementation for targeting a web browser
module.exports = function(Chart) {
	var helpers = Chart.helpers;

	// DOM event types -> Chart.js event types.
	// Note: only events with different types are mapped.
	// https://developer.mozilla.org/en-US/docs/Web/Events
	var eventTypeMap = {
		// Touch events
		touchstart: 'mousedown',
		touchmove: 'mousemove',
		touchend: 'mouseup',

		// Pointer events
		pointerenter: 'mouseenter',
		pointerdown: 'mousedown',
		pointermove: 'mousemove',
		pointerup: 'mouseup',
		pointerleave: 'mouseout',
		pointerout: 'mouseout'
	};

	/**
	 * The "used" size is the final value of a dimension property after all calculations have
	 * been performed. This method uses the computed style of `element` but returns undefined
	 * if the computed style is not expressed in pixels. That can happen in some cases where
	 * `element` has a size relative to its parent and this last one is not yet displayed,
	 * for example because of `display: none` on a parent node.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
	 * @returns {Number} Size in pixels or undefined if unknown.
	 */
	function readUsedSize(element, property) {
		var value = helpers.getStyle(element, property);
		var matches = value && value.match(/(\d+)px/);
		return matches? Number(matches[1]) : undefined;
	}

	/**
	 * Initializes the canvas style and render size without modifying the canvas display size,
	 * since responsiveness is handled by the controller.resize() method. The config is used
	 * to determine the aspect ratio to apply in case no explicit height has been specified.
	 */
	function initCanvas(canvas, config) {
		var style = canvas.style;

		// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
		// returns null or '' if no explicit value has been set to the canvas attribute.
		var renderHeight = canvas.getAttribute('height');
		var renderWidth = canvas.getAttribute('width');

		// Chart.js modifies some canvas values that we want to restore on destroy
		canvas._chartjs = {
			initial: {
				height: renderHeight,
				width: renderWidth,
				style: {
					display: style.display,
					height: style.height,
					width: style.width
				}
			}
		};

		// Force canvas to display as block to avoid extra space caused by inline
		// elements, which would interfere with the responsive resize process.
		// https://github.com/chartjs/Chart.js/issues/2538
		style.display = style.display || 'block';

		if (renderWidth === null || renderWidth === '') {
			var displayWidth = readUsedSize(canvas, 'width');
			if (displayWidth !== undefined) {
				canvas.width = displayWidth;
			}
		}

		if (renderHeight === null || renderHeight === '') {
			if (canvas.style.height === '') {
				// If no explicit render height and style height, let's apply the aspect ratio,
				// which one can be specified by the user but also by charts as default option
				// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
				canvas.height = canvas.width / (config.options.aspectRatio || 2);
			} else {
				var displayHeight = readUsedSize(canvas, 'height');
				if (displayWidth !== undefined) {
					canvas.height = displayHeight;
				}
			}
		}

		return canvas;
	}

	function createEvent(type, chart, x, y, native) {
		return {
			type: type,
			chart: chart,
			native: native || null,
			x: x !== undefined? x : null,
			y: y !== undefined? y : null,
		};
	}

	function fromNativeEvent(event, chart) {
		var type = eventTypeMap[event.type] || event.type;
		var pos = helpers.getRelativePosition(event, chart);
		return createEvent(type, chart, pos.x, pos.y, event);
	}

	function createResizer(handler) {
		var iframe = document.createElement('iframe');
		iframe.className = 'chartjs-hidden-iframe';
		iframe.style.cssText =
			'display:block;'+
			'overflow:hidden;'+
			'border:0;'+
			'margin:0;'+
			'top:0;'+
			'left:0;'+
			'bottom:0;'+
			'right:0;'+
			'height:100%;'+
			'width:100%;'+
			'position:absolute;'+
			'pointer-events:none;'+
			'z-index:-1;';

		// Prevent the iframe to gain focus on tab.
		// https://github.com/chartjs/Chart.js/issues/3090
		iframe.tabIndex = -1;

		// If the iframe is re-attached to the DOM, the resize listener is removed because the
		// content is reloaded, so make sure to install the handler after the iframe is loaded.
		// https://github.com/chartjs/Chart.js/issues/3521
		helpers.addEvent(iframe, 'load', function() {
			helpers.addEvent(iframe.contentWindow || iframe, 'resize', handler);

			// The iframe size might have changed while loading, which can also
			// happen if the size has been changed while detached from the DOM.
			handler();
		});

		return iframe;
	}

	function addResizeListener(node, listener, chart) {
		var stub = node._chartjs = {
			ticking: false
		};

		// Throttle the callback notification until the next animation frame.
		var notify = function() {
			if (!stub.ticking) {
				stub.ticking = true;
				helpers.requestAnimFrame.call(window, function() {
					if (stub.resizer) {
						stub.ticking = false;
						return listener(createEvent('resize', chart));
					}
				});
			}
		};

		// Let's keep track of this added iframe and thus avoid DOM query when removing it.
		stub.resizer = createResizer(notify);

		node.insertBefore(stub.resizer, node.firstChild);
	}

	function removeResizeListener(node) {
		if (!node || !node._chartjs) {
			return;
		}

		var resizer = node._chartjs.resizer;
		if (resizer) {
			resizer.parentNode.removeChild(resizer);
			node._chartjs.resizer = null;
		}

		delete node._chartjs;
	}

	return {
		acquireContext: function(item, config) {
			if (typeof item === 'string') {
				item = document.getElementById(item);
			} else if (item.length) {
				// Support for array based queries (such as jQuery)
				item = item[0];
			}

			if (item && item.canvas) {
				// Support for any object associated to a canvas (including a context2d)
				item = item.canvas;
			}

			if (item instanceof HTMLCanvasElement) {
				// To prevent canvas fingerprinting, some add-ons undefine the getContext
				// method, for example: https://github.com/kkapsner/CanvasBlocker
				// https://github.com/chartjs/Chart.js/issues/2807
				var context = item.getContext && item.getContext('2d');
				if (context instanceof CanvasRenderingContext2D) {
					initCanvas(item, config);
					return context;
				}
			}

			return null;
		},

		releaseContext: function(context) {
			var canvas = context.canvas;
			if (!canvas._chartjs) {
				return;
			}

			var initial = canvas._chartjs.initial;
			['height', 'width'].forEach(function(prop) {
				var value = initial[prop];
				if (value === undefined || value === null) {
					canvas.removeAttribute(prop);
				} else {
					canvas.setAttribute(prop, value);
				}
			});

			helpers.each(initial.style || {}, function(value, key) {
				canvas.style[key] = value;
			});

			// The canvas render size might have been changed (and thus the state stack discarded),
			// we can't use save() and restore() to restore the initial state. So make sure that at
			// least the canvas context is reset to the default state by setting the canvas width.
			// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
			canvas.width = canvas.width;

			delete canvas._chartjs;
		},

		addEventListener: function(chart, type, listener) {
			var canvas = chart.chart.canvas;
			if (type === 'resize') {
				// Note: the resize event is not supported on all browsers.
				addResizeListener(canvas.parentNode, listener, chart.chart);
				return;
			}

			var stub = listener._chartjs || (listener._chartjs = {});
			var proxies = stub.proxies || (stub.proxies = {});
			var proxy = proxies[chart.id + '_' + type] = function(event) {
				listener(fromNativeEvent(event, chart.chart));
			};

			helpers.addEvent(canvas, type, proxy);
		},

		removeEventListener: function(chart, type, listener) {
			var canvas = chart.chart.canvas;
			if (type === 'resize') {
				// Note: the resize event is not supported on all browsers.
				removeResizeListener(canvas.parentNode, listener);
				return;
			}

			var stub = listener._chartjs || {};
			var proxies = stub.proxies || {};
			var proxy = proxies[chart.id + '_' + type];
			if (!proxy) {
				return;
			}

			helpers.removeEvent(canvas, type, proxy);
		}
	};
};

},{}],42:[function(require,module,exports){
'use strict';

// By default, select the browser (DOM) platform.
// @TODO Make possible to select another platform at build time.
var implementation = require(41);

module.exports = function(Chart) {
	/**
	 * @namespace Chart.platform
	 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
	 * @since 2.4.0
	 */
	Chart.platform = {
		/**
		 * Called at chart construction time, returns a context2d instance implementing
		 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
		 * @param {*} item - The native item from which to acquire context (platform specific)
		 * @param {Object} options - The chart options
		 * @returns {CanvasRenderingContext2D} context2d instance
		 */
		acquireContext: function() {},

		/**
		 * Called at chart destruction time, releases any resources associated to the context
		 * previously returned by the acquireContext() method.
		 * @param {CanvasRenderingContext2D} context - The context2d instance
		 * @returns {Boolean} true if the method succeeded, else false
		 */
		releaseContext: function() {},

		/**
		 * Registers the specified listener on the given chart.
		 * @param {Chart} chart - Chart from which to listen for event
		 * @param {String} type - The ({@link IEvent}) type to listen for
		 * @param {Function} listener - Receives a notification (an object that implements
		 * the {@link IEvent} interface) when an event of the specified type occurs.
		 */
		addEventListener: function() {},

		/**
		 * Removes the specified listener previously registered with addEventListener.
		 * @param {Chart} chart -Chart from which to remove the listener
		 * @param {String} type - The ({@link IEvent}) type to remove
		 * @param {Function} listener - The listener function to remove from the event target.
		 */
		removeEventListener: function() {}
	};

	/**
	 * @interface IPlatform
	 * Allows abstracting platform dependencies away from the chart
	 * @borrows Chart.platform.acquireContext as acquireContext
	 * @borrows Chart.platform.releaseContext as releaseContext
	 * @borrows Chart.platform.addEventListener as addEventListener
	 * @borrows Chart.platform.removeEventListener as removeEventListener
	 */

	/**
	 * @interface IEvent
	 * @prop {String} type - The event type name, possible values are:
	 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
	 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
	 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
	 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
	 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
	 */

	Chart.helpers.extend(Chart.platform, implementation(Chart));
};

},{"41":41}],43:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	// Default config for a category scale
	var defaultConfig = {
		position: 'bottom'
	};

	var DatasetScale = Chart.Scale.extend({
		/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/
		getLabels: function() {
			var data = this.chart.data;
			return (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
		},
		// Implement this so that
		determineDataLimits: function() {
			var me = this;
			var labels = me.getLabels();
			me.minIndex = 0;
			me.maxIndex = labels.length - 1;
			var findIndex;

			if (me.options.ticks.min !== undefined) {
				// user specified min value
				findIndex = helpers.indexOf(labels, me.options.ticks.min);
				me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
			}

			if (me.options.ticks.max !== undefined) {
				// user specified max value
				findIndex = helpers.indexOf(labels, me.options.ticks.max);
				me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
			}

			me.min = labels[me.minIndex];
			me.max = labels[me.maxIndex];
		},

		buildTicks: function() {
			var me = this;
			var labels = me.getLabels();
			// If we are viewing some subset of labels, slice the original array
			me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
		},

		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var data = me.chart.data;
			var isHorizontal = me.isHorizontal();

			if (data.yLabels && !isHorizontal) {
				return me.getRightValue(data.datasets[datasetIndex].data[index]);
			}
			return me.ticks[index - me.minIndex];
		},

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			var me = this;
			// 1 is added because we need the length but we have the indexes
			var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);

			if (value !== undefined && isNaN(index)) {
				var labels = me.getLabels();
				var idx = labels.indexOf(value);
				index = idx !== -1 ? idx : index;
			}

			if (me.isHorizontal()) {
				var valueWidth = me.width / offsetAmt;
				var widthOffset = (valueWidth * (index - me.minIndex));

				if (me.options.gridLines.offsetGridLines && includeOffset || me.maxIndex === me.minIndex && includeOffset) {
					widthOffset += (valueWidth / 2);
				}

				return me.left + Math.round(widthOffset);
			}
			var valueHeight = me.height / offsetAmt;
			var heightOffset = (valueHeight * (index - me.minIndex));

			if (me.options.gridLines.offsetGridLines && includeOffset) {
				heightOffset += (valueHeight / 2);
			}

			return me.top + Math.round(heightOffset);
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.ticks[index], index + this.minIndex, null, includeOffset);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var value;
			var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
			var horz = me.isHorizontal();
			var valueDimension = (horz ? me.width : me.height) / offsetAmt;

			pixel -= horz ? me.left : me.top;

			if (me.options.gridLines.offsetGridLines) {
				pixel -= (valueDimension / 2);
			}

			if (pixel <= 0) {
				value = 0;
			} else {
				value = Math.round(pixel / valueDimension);
			}

			return value;
		},
		getBasePixel: function() {
			return this.bottom;
		}
	});

	Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);

};

},{}],44:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: 'left',
		ticks: {
			callback: Chart.Ticks.formatters.linear
		}
	};

	var LinearScale = Chart.LinearScaleBase.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var isHorizontal = me.isHorizontal();

			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// First Calculate the range
			me.min = null;
			me.max = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = {
							positiveValues: [],
							negativeValues: []
						};
					}

					// Store these per type
					var positiveValues = valuesPerStack[key].positiveValues;
					var negativeValues = valuesPerStack[key].negativeValues;

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							positiveValues[index] = positiveValues[index] || 0;
							negativeValues[index] = negativeValues[index] || 0;

							if (opts.relativePoints) {
								positiveValues[index] = 100;
							} else if (value < 0) {
								negativeValues[index] += value;
							} else {
								positiveValues[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
					var minVal = helpers.min(values);
					var maxVal = helpers.max(values);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}
						});
					}
				});
			}

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			this.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var maxTicks;
			var me = this;
			var tickOpts = me.options.ticks;

			if (me.isHorizontal()) {
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
			} else {
				// The factor of 2 used to scale the font size has been experimentally determined.
				var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
			}

			return maxTicks;
		},
		// Called after the ticks are built. We need
		handleDirectionalChanges: function() {
			if (!this.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				this.ticks.reverse();
			}
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		// Utils
		getPixelForValue: function(value) {
			// This must be called after fit has been run so that
			// this.left, this.top, this.right, and this.bottom have been defined
			var me = this;
			var start = me.start;

			var rightValue = +me.getRightValue(value);
			var pixel;
			var range = me.end - start;

			if (me.isHorizontal()) {
				pixel = me.left + (me.width / range * (rightValue - start));
				return Math.round(pixel);
			}

			pixel = me.bottom - (me.height / range * (rightValue - start));
			return Math.round(pixel);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var isHorizontal = me.isHorizontal();
			var innerDimension = isHorizontal ? me.width : me.height;
			var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
			return me.start + ((me.end - me.start) * offset);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.ticksAsNumbers[index]);
		}
	});
	Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);

};

},{}],45:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		noop = helpers.noop;

	Chart.LinearScaleBase = Chart.Scale.extend({
		handleTickRangeOptions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
			// do nothing since that would make the chart weird. If the user really wants a weird chart
			// axis, they can manually override it
			if (tickOpts.beginAtZero) {
				var minSign = helpers.sign(me.min);
				var maxSign = helpers.sign(me.max);

				if (minSign < 0 && maxSign < 0) {
					// move the top up to 0
					me.max = 0;
				} else if (minSign > 0 && maxSign > 0) {
					// move the bottom down to 0
					me.min = 0;
				}
			}

			if (tickOpts.min !== undefined) {
				me.min = tickOpts.min;
			} else if (tickOpts.suggestedMin !== undefined) {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
			}

			if (tickOpts.max !== undefined) {
				me.max = tickOpts.max;
			} else if (tickOpts.suggestedMax !== undefined) {
				me.max = Math.max(me.max, tickOpts.suggestedMax);
			}

			if (me.min === me.max) {
				me.max++;

				if (!tickOpts.beginAtZero) {
					me.min--;
				}
			}
		},
		getTickLimit: noop,
		handleDirectionalChanges: noop,

		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph. Make sure we always have at least 2 ticks
			var maxTicks = me.getTickLimit();
			maxTicks = Math.max(2, maxTicks);

			var numericGeneratorOptions = {
				maxTicks: maxTicks,
				min: tickOpts.min,
				max: tickOpts.max,
				stepSize: helpers.getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
			};
			var ticks = me.ticks = Chart.Ticks.generators.linear(numericGeneratorOptions, me);

			me.handleDirectionalChanges();

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			var me = this;
			me.ticksAsNumbers = me.ticks.slice();
			me.zeroLineIndex = me.ticks.indexOf(0);

			Chart.Scale.prototype.convertTicksToLabels.call(me);
		}
	});
};

},{}],46:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: 'left',

		// label settings
		ticks: {
			callback: Chart.Ticks.formatters.logarithmic
		}
	};

	var LogarithmicScale = Chart.Scale.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var getValueOrDefault = helpers.getValueOrDefault;
			var isHorizontal = me.isHorizontal();
			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// Calculate Range
			me.min = null;
			me.max = null;
			me.minNotZero = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						if (valuesPerStack[key] === undefined) {
							valuesPerStack[key] = [];
						}

						helpers.each(dataset.data, function(rawValue, index) {
							var values = valuesPerStack[key];
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							values[index] = values[index] || 0;

							if (opts.relativePoints) {
								values[index] = 100;
							} else {
								// Don't need to split positive and negative since the log scale can't handle a 0 crossing
								values[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var minVal = helpers.min(valuesForType);
					var maxVal = helpers.max(valuesForType);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}

							if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
								me.minNotZero = value;
							}
						});
					}
				});
			}

			me.min = getValueOrDefault(tickOpts.min, me.min);
			me.max = getValueOrDefault(tickOpts.max, me.max);

			if (me.min === me.max) {
				if (me.min !== 0 && me.min !== null) {
					me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
					me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
				} else {
					me.min = 1;
					me.max = 10;
				}
			}
		},
		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			var generationOptions = {
				min: tickOpts.min,
				max: tickOpts.max
			};
			var ticks = me.ticks = Chart.Ticks.generators.logarithmic(generationOptions, me);

			if (!me.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				ticks.reverse();
			}

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			this.tickValues = this.ticks.slice();

			Chart.Scale.prototype.convertTicksToLabels.call(this);
		},
		// Get the correct tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.tickValues[index]);
		},
		getPixelForValue: function(value) {
			var me = this;
			var innerDimension;
			var pixel;

			var start = me.start;
			var newVal = +me.getRightValue(value);
			var range;
			var opts = me.options;
			var tickOpts = opts.ticks;

			if (me.isHorizontal()) {
				range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
				if (newVal === 0) {
					pixel = me.left;
				} else {
					innerDimension = me.width;
					pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			} else {
				// Bottom - top since pixels increase downward on a screen
				innerDimension = me.height;
				if (start === 0 && !tickOpts.reverse) {
					range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
					if (newVal === start) {
						pixel = me.bottom;
					} else if (newVal === me.minNotZero) {
						pixel = me.bottom - innerDimension * 0.02;
					} else {
						pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
					}
				} else if (me.end === 0 && tickOpts.reverse) {
					range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
					if (newVal === me.end) {
						pixel = me.top;
					} else if (newVal === me.minNotZero) {
						pixel = me.top + innerDimension * 0.02;
					} else {
						pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
					}
				} else {
					range = helpers.log10(me.end) - helpers.log10(start);
					innerDimension = me.height;
					pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			}
			return pixel;
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var range = helpers.log10(me.end) - helpers.log10(me.start);
			var value, innerDimension;

			if (me.isHorizontal()) {
				innerDimension = me.width;
				value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
			} else {  // todo: if start === 0
				innerDimension = me.height;
				value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
			}
			return value;
		}
	});
	Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);

};

},{}],47:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var globalDefaults = Chart.defaults.global;

	var defaultConfig = {
		display: true,

		// Boolean - Whether to animate scaling the chart from the centre
		animate: true,
		lineArc: false,
		position: 'chartArea',

		angleLines: {
			display: true,
			color: 'rgba(0, 0, 0, 0.1)',
			lineWidth: 1
		},

		// label settings
		ticks: {
			// Boolean - Show a backdrop to the scale label
			showLabelBackdrop: true,

			// String - The colour of the label backdrop
			backdropColor: 'rgba(255,255,255,0.75)',

			// Number - The backdrop padding above & below the label in pixels
			backdropPaddingY: 2,

			// Number - The backdrop padding to the side of the label in pixels
			backdropPaddingX: 2,

			callback: Chart.Ticks.formatters.linear
		},

		pointLabels: {
			// Number - Point label font size in pixels
			fontSize: 10,

			// Function - Used to convert point labels
			callback: function(label) {
				return label;
			}
		}
	};

	function getValueCount(scale) {
		return !scale.options.lineArc ? scale.chart.data.labels.length : 0;
	}

	function getPointLabelFontOptions(scale) {
		var pointLabelOptions = scale.options.pointLabels;
		var fontSize = helpers.getValueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
		var fontStyle = helpers.getValueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
		var fontFamily = helpers.getValueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
		var font = helpers.fontString(fontSize, fontStyle, fontFamily);

		return {
			size: fontSize,
			style: fontStyle,
			family: fontFamily,
			font: font
		};
	}

	function measureLabelSize(ctx, fontSize, label) {
		if (helpers.isArray(label)) {
			return {
				w: helpers.longestText(ctx, ctx.font, label),
				h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
			};
		}

		return {
			w: ctx.measureText(label).width,
			h: fontSize
		};
	}

	function determineLimits(angle, pos, size, min, max) {
		if (angle === min || angle === max) {
			return {
				start: pos - (size / 2),
				end: pos + (size / 2)
			};
		} else if (angle < min || angle > max) {
			return {
				start: pos - size - 5,
				end: pos
			};
		}

		return {
			start: pos,
			end: pos + size + 5
		};
	}

	/**
	 * Helper function to fit a radial linear scale with point labels
	 */
	function fitWithPointLabels(scale) {
		/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */

		var plFont = getPointLabelFontOptions(scale);

		// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
		// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		var furthestLimits = {
			l: scale.width,
			r: 0,
			t: scale.height,
			b: 0
		};
		var furthestAngles = {};
		var i;
		var textSize;
		var pointPosition;

		scale.ctx.font = plFont.font;
		scale._pointLabelSizes = [];

		var valueCount = getValueCount(scale);
		for (i = 0; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, largestPossibleRadius);
			textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
			scale._pointLabelSizes[i] = textSize;

			// Add quarter circle to make degree 0 mean top of circle
			var angleRadians = scale.getIndexAngle(i);
			var angle = helpers.toDegrees(angleRadians) % 360;
			var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
			var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

			if (hLimits.start < furthestLimits.l) {
				furthestLimits.l = hLimits.start;
				furthestAngles.l = angleRadians;
			}

			if (hLimits.end > furthestLimits.r) {
				furthestLimits.r = hLimits.end;
				furthestAngles.r = angleRadians;
			}

			if (vLimits.start < furthestLimits.t) {
				furthestLimits.t = vLimits.start;
				furthestAngles.t = angleRadians;
			}

			if (vLimits.end > furthestLimits.b) {
				furthestLimits.b = vLimits.end;
				furthestAngles.b = angleRadians;
			}
		}

		scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
	}

	/**
	 * Helper function to fit a radial linear scale with no point labels
	 */
	function fit(scale) {
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		scale.drawingArea = Math.round(largestPossibleRadius);
		scale.setCenterPoint(0, 0, 0, 0);
	}

	function getTextAlignForAngle(angle) {
		if (angle === 0 || angle === 180) {
			return 'center';
		} else if (angle < 180) {
			return 'left';
		}

		return 'right';
	}

	function fillText(ctx, text, position, fontSize) {
		if (helpers.isArray(text)) {
			var y = position.y;
			var spacing = 1.5 * fontSize;

			for (var i = 0; i < text.length; ++i) {
				ctx.fillText(text[i], position.x, y);
				y+= spacing;
			}
		} else {
			ctx.fillText(text, position.x, position.y);
		}
	}

	function adjustPointPositionForLabelHeight(angle, textSize, position) {
		if (angle === 90 || angle === 270) {
			position.y -= (textSize.h / 2);
		} else if (angle > 270 || angle < 90) {
			position.y -= textSize.h;
		}
	}

	function drawPointLabels(scale) {
		var ctx = scale.ctx;
		var getValueOrDefault = helpers.getValueOrDefault;
		var opts = scale.options;
		var angleLineOpts = opts.angleLines;
		var pointLabelOpts = opts.pointLabels;

		ctx.lineWidth = angleLineOpts.lineWidth;
		ctx.strokeStyle = angleLineOpts.color;

		var outerDistance = scale.getDistanceFromCenterForValue(opts.reverse ? scale.min : scale.max);

		// Point Label Font
		var plFont = getPointLabelFontOptions(scale);

		ctx.textBaseline = 'top';

		for (var i = getValueCount(scale) - 1; i >= 0; i--) {
			if (angleLineOpts.display) {
				var outerPosition = scale.getPointPosition(i, outerDistance);
				ctx.beginPath();
				ctx.moveTo(scale.xCenter, scale.yCenter);
				ctx.lineTo(outerPosition.x, outerPosition.y);
				ctx.stroke();
				ctx.closePath();
			}
			// Extra 3px out for some label spacing
			var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);

			// Keep this in loop since we may support array properties here
			var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
			ctx.font = plFont.font;
			ctx.fillStyle = pointLabelFontColor;

			var angleRadians = scale.getIndexAngle(i);
			var angle = helpers.toDegrees(angleRadians);
			ctx.textAlign = getTextAlignForAngle(angle);
			adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
			fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
		}
	}

	function drawRadiusLine(scale, gridLineOpts, radius, index) {
		var ctx = scale.ctx;
		ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
		ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

		if (scale.options.lineArc) {
			// Draw circular arcs between the points
			ctx.beginPath();
			ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.stroke();
		} else {
			// Draw straight lines connecting each index
			var valueCount = getValueCount(scale);

			if (valueCount === 0) {
				return;
			}

			ctx.beginPath();
			var pointPosition = scale.getPointPosition(0, radius);
			ctx.moveTo(pointPosition.x, pointPosition.y);

			for (var i = 1; i < valueCount; i++) {
				pointPosition = scale.getPointPosition(i, radius);
				ctx.lineTo(pointPosition.x, pointPosition.y);
			}

			ctx.closePath();
			ctx.stroke();
		}
	}

	function numberOrZero(param) {
		return helpers.isNumber(param) ? param : 0;
	}

	var LinearRadialScale = Chart.LinearScaleBase.extend({
		setDimensions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			// Set the unconstrained dimension before label rotation
			me.width = me.maxWidth;
			me.height = me.maxHeight;
			me.xCenter = Math.round(me.width / 2);
			me.yCenter = Math.round(me.height / 2);

			var minSize = helpers.min([me.height, me.width]);
			var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
		},
		determineDataLimits: function() {
			var me = this;
			var chart = me.chart;
			var min = Number.POSITIVE_INFINITY;
			var max = Number.NEGATIVE_INFINITY;

			helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
				if (chart.isDatasetVisible(datasetIndex)) {
					var meta = chart.getDatasetMeta(datasetIndex);

					helpers.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						if (isNaN(value) || meta.data[index].hidden) {
							return;
						}

						min = Math.min(value, min);
						max = Math.max(value, max);
					});
				}
			});

			me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
			me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			me.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var tickOpts = this.options.ticks;
			var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
		},
		convertTicksToLabels: function() {
			var me = this;
			Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

			// Point labels
			me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		fit: function() {
			if (this.options.lineArc) {
				fit(this);
			} else {
				fitWithPointLabels(this);
			}
		},
		/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */
		setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
			var me = this;
			var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
			var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
			var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
			var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);

			radiusReductionLeft = numberOrZero(radiusReductionLeft);
			radiusReductionRight = numberOrZero(radiusReductionRight);
			radiusReductionTop = numberOrZero(radiusReductionTop);
			radiusReductionBottom = numberOrZero(radiusReductionBottom);

			me.drawingArea = Math.min(
				Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
				Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
			me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
		},
		setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
			var me = this;
			var maxRight = me.width - rightMovement - me.drawingArea,
				maxLeft = leftMovement + me.drawingArea,
				maxTop = topMovement + me.drawingArea,
				maxBottom = me.height - bottomMovement - me.drawingArea;

			me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
			me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
		},

		getIndexAngle: function(index) {
			var angleMultiplier = (Math.PI * 2) / getValueCount(this);
			var startAngle = this.chart.options && this.chart.options.startAngle ?
				this.chart.options.startAngle :
				0;

			var startAngleRadians = startAngle * Math.PI * 2 / 360;

			// Start from the top instead of right, so remove a quarter of the circle
			return index * angleMultiplier + startAngleRadians;
		},
		getDistanceFromCenterForValue: function(value) {
			var me = this;

			if (value === null) {
				return 0; // null always in center
			}

			// Take into account half font size + the yPadding of the top value
			var scalingFactor = me.drawingArea / (me.max - me.min);
			if (me.options.reverse) {
				return (me.max - value) * scalingFactor;
			}
			return (value - me.min) * scalingFactor;
		},
		getPointPosition: function(index, distanceFromCenter) {
			var me = this;
			var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
			return {
				x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
				y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
			};
		},
		getPointPositionForValue: function(index, value) {
			return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
		},

		getBasePosition: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.getPointPositionForValue(0,
				me.beginAtZero? 0:
				min < 0 && max < 0? max :
				min > 0 && max > 0? min :
				0);
		},

		draw: function() {
			var me = this;
			var opts = me.options;
			var gridLineOpts = opts.gridLines;
			var tickOpts = opts.ticks;
			var getValueOrDefault = helpers.getValueOrDefault;

			if (opts.display) {
				var ctx = me.ctx;

				// Tick Font
				var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
				var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

				helpers.each(me.ticks, function(label, index) {
					// Don't draw a centre value (if it is minimum)
					if (index > 0 || opts.reverse) {
						var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
						var yHeight = me.yCenter - yCenterOffset;

						// Draw circular lines around the scale
						if (gridLineOpts.display && index !== 0) {
							drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
						}

						if (tickOpts.display) {
							var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
							ctx.font = tickLabelFont;

							if (tickOpts.showLabelBackdrop) {
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = tickOpts.backdropColor;
								ctx.fillRect(
									me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX,
									yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY,
									labelWidth + tickOpts.backdropPaddingX * 2,
									tickFontSize + tickOpts.backdropPaddingY * 2
								);
							}

							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';
							ctx.fillStyle = tickFontColor;
							ctx.fillText(label, me.xCenter, yHeight);
						}
					}
				});

				if (!opts.lineArc) {
					drawPointLabels(me);
				}
			}
		}
	});
	Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);

};

},{}],48:[function(require,module,exports){
/* global window: false */
'use strict';

var moment = require(1);
moment = typeof(moment) === 'function' ? moment : window.moment;

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var time = {
		units: [{
			name: 'millisecond',
			steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
		}, {
			name: 'second',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'minute',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'hour',
			steps: [1, 2, 3, 6, 12]
		}, {
			name: 'day',
			steps: [1, 2, 5]
		}, {
			name: 'week',
			maxStep: 4
		}, {
			name: 'month',
			maxStep: 3
		}, {
			name: 'quarter',
			maxStep: 4
		}, {
			name: 'year',
			maxStep: false
		}]
	};

	var defaultConfig = {
		position: 'bottom',

		time: {
			parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
			format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
			unit: false, // false == automatic or override with week, month, year, etc.
			round: false, // none, or override with week, month, year, etc.
			displayFormat: false, // DEPRECATED
			isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
			minUnit: 'millisecond',

			// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
			displayFormats: {
				millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
				second: 'h:mm:ss a', // 11:20:01 AM
				minute: 'h:mm:ss a', // 11:20:01 AM
				hour: 'MMM D, hA', // Sept 4, 5PM
				day: 'll', // Sep 4 2015
				week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
				month: 'MMM YYYY', // Sept 2015
				quarter: '[Q]Q - YYYY', // Q3
				year: 'YYYY' // 2015
			}
		},
		ticks: {
			autoSkip: false
		}
	};

	var TimeScale = Chart.Scale.extend({
		initialize: function() {
			if (!moment) {
				throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
			}

			Chart.Scale.prototype.initialize.call(this);
		},
		getLabelMoment: function(datasetIndex, index) {
			if (datasetIndex === null || index === null) {
				return null;
			}

			if (typeof this.labelMoments[datasetIndex] !== 'undefined') {
				return this.labelMoments[datasetIndex][index];
			}

			return null;
		},
		getLabelDiff: function(datasetIndex, index) {
			var me = this;
			if (datasetIndex === null || index === null) {
				return null;
			}

			if (me.labelDiffs === undefined) {
				me.buildLabelDiffs();
			}

			if (typeof me.labelDiffs[datasetIndex] !== 'undefined') {
				return me.labelDiffs[datasetIndex][index];
			}

			return null;
		},
		getMomentStartOf: function(tick) {
			var me = this;
			if (me.options.time.unit === 'week' && me.options.time.isoWeekday !== false) {
				return tick.clone().startOf('isoWeek').isoWeekday(me.options.time.isoWeekday);
			}
			return tick.clone().startOf(me.tickUnit);
		},
		determineDataLimits: function() {
			var me = this;
			me.labelMoments = [];

			// Only parse these once. If the dataset does not have data as x,y pairs, we will use
			// these
			var scaleLabelMoments = [];
			if (me.chart.data.labels && me.chart.data.labels.length > 0) {
				helpers.each(me.chart.data.labels, function(label) {
					var labelMoment = me.parseTime(label);

					if (labelMoment.isValid()) {
						if (me.options.time.round) {
							labelMoment.startOf(me.options.time.round);
						}
						scaleLabelMoments.push(labelMoment);
					}
				}, me);

				me.firstTick = moment.min.call(me, scaleLabelMoments);
				me.lastTick = moment.max.call(me, scaleLabelMoments);
			} else {
				me.firstTick = null;
				me.lastTick = null;
			}

			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var momentsForDataset = [];
				var datasetVisible = me.chart.isDatasetVisible(datasetIndex);

				if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
					helpers.each(dataset.data, function(value) {
						var labelMoment = me.parseTime(me.getRightValue(value));

						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							momentsForDataset.push(labelMoment);

							if (datasetVisible) {
								// May have gone outside the scale ranges, make sure we keep the first and last ticks updated
								me.firstTick = me.firstTick !== null ? moment.min(me.firstTick, labelMoment) : labelMoment;
								me.lastTick = me.lastTick !== null ? moment.max(me.lastTick, labelMoment) : labelMoment;
							}
						}
					}, me);
				} else {
					// We have no labels. Use the ones from the scale
					momentsForDataset = scaleLabelMoments;
				}

				me.labelMoments.push(momentsForDataset);
			}, me);

			// Set these after we've done all the data
			if (me.options.time.min) {
				me.firstTick = me.parseTime(me.options.time.min);
			}

			if (me.options.time.max) {
				me.lastTick = me.parseTime(me.options.time.max);
			}

			// We will modify these, so clone for later
			me.firstTick = (me.firstTick || moment()).clone();
			me.lastTick = (me.lastTick || moment()).clone();
		},
		buildLabelDiffs: function() {
			var me = this;
			me.labelDiffs = [];
			var scaleLabelDiffs = [];
			// Parse common labels once
			if (me.chart.data.labels && me.chart.data.labels.length > 0) {
				helpers.each(me.chart.data.labels, function(label) {
					var labelMoment = me.parseTime(label);

					if (labelMoment.isValid()) {
						if (me.options.time.round) {
							labelMoment.startOf(me.options.time.round);
						}
						scaleLabelDiffs.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
					}
				}, me);
			}

			helpers.each(me.chart.data.datasets, function(dataset) {
				var diffsForDataset = [];

				if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
					helpers.each(dataset.data, function(value) {
						var labelMoment = me.parseTime(me.getRightValue(value));

						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							diffsForDataset.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
						}
					}, me);
				} else {
					// We have no labels. Use common ones
					diffsForDataset = scaleLabelDiffs;
				}

				me.labelDiffs.push(diffsForDataset);
			}, me);
		},
		buildTicks: function() {
			var me = this;

			me.ctx.save();
			var tickFontSize = helpers.getValueOrDefault(me.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(me.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(me.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
			me.ctx.font = tickLabelFont;

			me.ticks = [];
			me.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
			me.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)

			// Set unit override if applicable
			if (me.options.time.unit) {
				me.tickUnit = me.options.time.unit || 'day';
				me.displayFormat = me.options.time.displayFormats[me.tickUnit];
				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, 1);
			} else {
				// Determine the smallest needed unit of the time
				var innerWidth = me.isHorizontal() ? me.width : me.height;

				// Crude approximation of what the label length might be
				var tempFirstLabel = me.tickFormatFunction(me.firstTick, 0, []);
				var tickLabelWidth = me.ctx.measureText(tempFirstLabel).width;
				var cosRotation = Math.cos(helpers.toRadians(me.options.ticks.maxRotation));
				var sinRotation = Math.sin(helpers.toRadians(me.options.ticks.maxRotation));
				tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
				var labelCapacity = innerWidth / (tickLabelWidth);

				// Start as small as possible
				me.tickUnit = me.options.time.minUnit;
				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				me.displayFormat = me.options.time.displayFormats[me.tickUnit];

				var unitDefinitionIndex = 0;
				var unitDefinition = time.units[unitDefinitionIndex];

				// While we aren't ideal and we don't have units left
				while (unitDefinitionIndex < time.units.length) {
					// Can we scale this unit. If `false` we can scale infinitely
					me.unitScale = 1;

					if (helpers.isArray(unitDefinition.steps) && Math.ceil(me.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
						// Use one of the predefined steps
						for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
							if (unitDefinition.steps[idx] >= Math.ceil(me.scaleSizeInUnits / labelCapacity)) {
								me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, unitDefinition.steps[idx]);
								break;
							}
						}

						break;
					} else if ((unitDefinition.maxStep === false) || (Math.ceil(me.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
						// We have a max step. Scale this unit
						me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, Math.ceil(me.scaleSizeInUnits / labelCapacity));
						break;
					} else {
						// Move to the next unit up
						++unitDefinitionIndex;
						unitDefinition = time.units[unitDefinitionIndex];

						me.tickUnit = unitDefinition.name;
						var leadingUnitBuffer = me.firstTick.diff(me.getMomentStartOf(me.firstTick), me.tickUnit, true);
						var trailingUnitBuffer = me.getMomentStartOf(me.lastTick.clone().add(1, me.tickUnit)).diff(me.lastTick, me.tickUnit, true);
						me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true) + leadingUnitBuffer + trailingUnitBuffer;
						me.displayFormat = me.options.time.displayFormats[unitDefinition.name];
					}
				}
			}

			var roundedStart;

			// Only round the first tick if we have no hard minimum
			if (!me.options.time.min) {
				me.firstTick = me.getMomentStartOf(me.firstTick);
				roundedStart = me.firstTick;
			} else {
				roundedStart = me.getMomentStartOf(me.firstTick);
			}

			// Only round the last tick if we have no hard maximum
			if (!me.options.time.max) {
				var roundedEnd = me.getMomentStartOf(me.lastTick);
				var delta = roundedEnd.diff(me.lastTick, me.tickUnit, true);
				if (delta < 0) {
					// Do not use end of because we need me to be in the next time unit
					me.lastTick = me.getMomentStartOf(me.lastTick.add(1, me.tickUnit));
				} else if (delta >= 0) {
					me.lastTick = roundedEnd;
				}

				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
			}

			// Tick displayFormat override
			if (me.options.time.displayFormat) {
				me.displayFormat = me.options.time.displayFormat;
			}

			// first tick. will have been rounded correctly if options.time.min is not specified
			me.ticks.push(me.firstTick.clone());

			// For every unit in between the first and last moment, create a moment and add it to the ticks tick
			for (var i = me.unitScale; i <= me.scaleSizeInUnits; i += me.unitScale) {
				var newTick = roundedStart.clone().add(i, me.tickUnit);

				// Are we greater than the max time
				if (me.options.time.max && newTick.diff(me.lastTick, me.tickUnit, true) >= 0) {
					break;
				}

				me.ticks.push(newTick);
			}

			// Always show the right tick
			var diff = me.ticks[me.ticks.length - 1].diff(me.lastTick, me.tickUnit);
			if (diff !== 0 || me.scaleSizeInUnits === 0) {
				// this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
				// but the last tick was not rounded.
				if (me.options.time.max) {
					me.ticks.push(me.lastTick.clone());
					me.scaleSizeInUnits = me.lastTick.diff(me.ticks[0], me.tickUnit, true);
				} else {
					me.ticks.push(me.lastTick.clone());
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				}
			}

			me.ctx.restore();

			// Invalidate label diffs cache
			me.labelDiffs = undefined;
		},
		// Get tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[index] : '';
			var value = me.chart.data.datasets[datasetIndex].data[index];

			if (value !== null && typeof value === 'object') {
				label = me.getRightValue(value);
			}

			// Format nicely
			if (me.options.time.tooltipFormat) {
				label = me.parseTime(label).format(me.options.time.tooltipFormat);
			}

			return label;
		},
		// Function to format an individual tick mark
		tickFormatFunction: function(tick, index, ticks) {
			var formattedTick = tick.format(this.displayFormat);
			var tickOpts = this.options.ticks;
			var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);

			if (callback) {
				return callback(formattedTick, index, ticks);
			}
			return formattedTick;
		},
		convertTicksToLabels: function() {
			var me = this;
			me.tickMoments = me.ticks;
			me.ticks = me.ticks.map(me.tickFormatFunction, me);
		},
		getPixelForValue: function(value, index, datasetIndex) {
			var me = this;
			var offset = null;
			if (index !== undefined && datasetIndex !== undefined) {
				offset = me.getLabelDiff(datasetIndex, index);
			}

			if (offset === null) {
				if (!value || !value.isValid) {
					// not already a moment object
					value = me.parseTime(me.getRightValue(value));
				}
				if (value && value.isValid && value.isValid()) {
					offset = value.diff(me.firstTick, me.tickUnit, true);
				}
			}

			if (offset !== null) {
				var decimal = offset !== 0 ? offset / me.scaleSizeInUnits : offset;

				if (me.isHorizontal()) {
					var valueOffset = (me.width * decimal);
					return me.left + Math.round(valueOffset);
				}

				var heightOffset = (me.height * decimal);
				return me.top + Math.round(heightOffset);
			}
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.tickMoments[index], null, null);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var innerDimension = me.isHorizontal() ? me.width : me.height;
			var offset = (pixel - (me.isHorizontal() ? me.left : me.top)) / innerDimension;
			offset *= me.scaleSizeInUnits;
			return me.firstTick.clone().add(moment.duration(offset, me.tickUnit).asSeconds(), 'seconds');
		},
		parseTime: function(label) {
			var me = this;
			if (typeof me.options.time.parser === 'string') {
				return moment(label, me.options.time.parser);
			}
			if (typeof me.options.time.parser === 'function') {
				return me.options.time.parser(label);
			}
			// Date objects
			if (typeof label.getMonth === 'function' || typeof label === 'number') {
				return moment(label);
			}
			// Moment support
			if (label.isValid && label.isValid()) {
				return label;
			}
			// Custom parsing (return an instance of moment)
			if (typeof me.options.time.format !== 'string' && me.options.time.format.call) {
				console.warn('options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale');
				return me.options.time.format(label);
			}
			// Moment format parsing
			return moment(label, me.options.time.format);
		}
	});
	Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);

};

},{"1":1}]},{},[7])(7)
});
;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map
;
//# sourceMappingURL=scripts.js.map