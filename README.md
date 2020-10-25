# Patient-Prep

## Ionic Setup Guide

1.  Clone the repo
2.  Navigate to the **_patient-prep-frontend_** directory
3.  Execute `npm install` to install dependencies
4.  Execute `ionic serve` to run the application on local host

## Firebase API (Database)

Get all data:

    GET https://patient-prep.firebaseio.com/.json

Get user profile data:

    GET https://patient-prep.firebaseio.com/users/auth/{username}/.json

Get user responses data:

    GET https://patient-prep.firebaseio.com/answers/{username}/.json

### Firebase database screenshot:

![firebase-screenshot](https://firebasestorage.googleapis.com/v0/b/patient-prep.appspot.com/o/firebase.JPG?alt=media&token=2fa54735-3425-431a-bfe8-9ef7d163b28f)

## Data Generator

Data Generator directory:

    patient-prep\data-generator

Following command will install all dependencies:

    npm install

Following command will generate 200 entries:

    node index.js 200

## News API

The API is used to fetch three trending articles according to the user's responses to the questionnaire.

    GET   https://newsapi.org/v2/everything?q={ACCORDING_TO_RESPONSES}&apiKey={API_KEY}&pageSize=3&sortBy=popularity
