# Site map

This is the proposed site map:

- /
- /entrar
- /reporta
- /redada/id
- /alertas

## /

This is the home page. It will include the following:

- Map of Raids that have been reported overall (it would be cool to toggle between reported overal and reported within the last 5 hours)
- Prompt to report a raid
- Facebook feed of videos or pictures on specific hashtag
- Form to login
- Counter of how many people have visited/reported/created accounts

## /entrar

This is the view where people will be able to login or create a new account.

We can use Meteor's accounts system. To make it simpler, we should only use Facebook authentication

Kudos if we can use Facebook Account Kit or Twilio Authy for passwordless login!

## /reporta

This is where people will be able to report a raid

Info to be collected:
- Zip Code (number)
- Location (string)
- Description (string)
- Media (pictures or videos)

## /redada/id

People will be able to click on each raid in the map and be led to this page that displays:

 - Considered Active (if reported within the last 5 hours)
 - Time reported
 - Zip code
 - Description
 - Media

## /alertas

Here people will be able to enable/disable alerts for raids near them.

If we haven't collected phone number info, we can collect that info + carrier (if we need that to make sending SMS's easier)