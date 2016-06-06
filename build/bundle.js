(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Ocp-Apim-Subscription-Key", "KEY_GOES_HERE");

var myInit = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({
    'url': 'https://stachepublic.blob.core.windows.net/samples/face5.png'
  })
};

fetch('https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false', myInit)
  .then((data) => data.json())
  .then((data) => console.log("success", data))
  .catch((err) => {
    console.log("error", err);
  });

},{}]},{},[1]);
