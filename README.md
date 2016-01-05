Meteor Get Coordinates
============

Get the coordinates of an address using the Google Geocoding API

### Setup ###
1) Install `meteor add muriloventuroso:get-coordinates`

2) Get a key to access the Google Geocoding API: https://developers.google.com/

3) Use:
```
Coordinates.key = 'xxxxxxxxxxxxxxxxxxxxxx';
var loc = Coordinates.getFromAdress('1600 Amphitheatre Parkway, Mountain View, CA');
```

Return is:
```
{ status: 'OK',
location: { lat: 37.4224764, lng: -122.0842499 } }
```
