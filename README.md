# getir_assignment
There is task getir_assignment presented.

To  deploy application locally:
* `git clone https://github.com/Maksym-Samoilenko/getir_assignment`
* `cd getir_assignment`
* `npm install`
* `npm start` to start application locally
* `npm test` to run test

Also application is deployed on heroku: https://getir-assignment-maksym.herokuapp.com/

Example of json query to https://getir-assignment-maksym.herokuapp.com/ :

` {"startDate": "2016-01-26", 
      "endDate": "2018-02-02", 
      "minCount": 23, 
      "maxCount": 1000
 }`
 
 Answer
 
 `{
    "code": 0,
    "msg": "Success",
    "record": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 150
        },
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 170
        }
        ...
        ]
  }`
