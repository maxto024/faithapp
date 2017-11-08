import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
var Parse = require('parse');

import 'rxjs/add/operator/map';
export class User {
  constructor(

    public name: any,
    public username: any,
    public password: any,
    public psswdcheck: any,
    public email: any,
    public country: any,
    public city: any,
    public TimeZone: any,



  ) { }
}


export class nearby {
  constructor(

    public lat: any,
    public lon: any,
    public type: any,
    public rankby: any,
    public key: any,


  ) { }
}
export class Reminder {
  constructor(
    public id: any,
    public fajri: any,
    public dhuhr: any,
    public asr: any,
    public maghrib: any,
    public isha: any,

  ) { }
}

export class Evalute {
  constructor(
    public id: any,
    public fajri: any,
    public dhuhr: any,
    public asr: any,
    public maghrib: any,
    public isha: any,

  ) { }
}

export class prayer {
  constructor(

    public lon: any,
    public lat: any,
    public method: any,
    public continent: any,
    public city: any,
    public month: any,
    public year: any

  ) { }
}

@Injectable()

export class Getservice {
  lat;
  lon;
  city;
  country;
  timezone;
  constructor(
    public http: Http
  ) {

    Parse.initialize("final","backend");
    Parse.serverURL = 'https://faithbackend.herokuapp.com/parse'
  //Parse.serverURL = 'http://127.0.0.1:1337/parse'
  }
  // this is  setiing location and also the city 
  setLocation(lat, lon) {
    this.lat = lat;
    this.lon = lon;
    console.log("service ")
    console.log(this.lat, this.lon);

    localStorage.setItem('lat', this.lat);
    localStorage.setItem('lon', this.lon);
  }
  setData(c, timezone) {
    this.city = c;
    this.timezone = timezone;

  }



  getPrayerTime(data) {
    data.lat = localStorage.getItem('lat');
    data.lon = localStorage.getItem('lon');


    console.log('maxay', this.city)



    console.log(data);
    return Parse.Cloud.run("prayer", {
      "lon": data.lon, "lat": data.lat,
      "continent": data.continent,
      "city": data.city, "method": data.method
    }).then(function (result) {

      return result;
    }, function (error) {
      // error
    });
  }
  register(reg) {
    var user = new Parse.User();
    user.set("username", reg.username);
    user.set("password", reg.password);
    user.set("email", reg.email);

    // other fields can be set just like with Parse.Object
    user.set("name", reg.name);
    user.set("country", reg.country);
    user.set("city", reg.city);
    user.set("TimeZone", reg.TimeZone);

    return user.signUp(null, {
      success: function (user) {
        // Hooray! Let them use the app now.
        console.log("registered");
        return user;
      },
      error: function (user, error) {
        // Show the error message somewhere and let the user try again.
        return user;
      }
    });

  }
  reminderService(rem) {

    var reminder = new Parse.Object("Reminder");
    reminder.set("Id", rem.id);
    reminder.set("Fajri", rem.fajri);
    reminder.set("Dhuhr", rem.dhuhr);
    reminder.set("Asr", rem.asr);
    reminder.set("Maghrib", rem.maghrib);
    reminder.set("Isha", rem.isha);

    return reminder.save(null, {
      success: function (remind) {
        // Execute any logic that should take place after the object is saved.
        return remind;
      },
      error: function (remind, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        return error;
      }
    });
  }
  EvalationResult(){
    var query = new Parse.Query("Evaluation");
     return query.find({
      success: function(results) {
     console.log(results);
     return results;

      },
      error: function(error) {
  
      }
    });
  }

  reminderGet(id) {

    var Reminder = Parse.Object.extend("Reminder");
    var query = new Parse.Query(Reminder);
    query.equalTo("Id", id);

    return query.first({
      success: function (object) {
        // Successfully retrieved the object.

        return Object;




      },
      error: function (error) {
        return error;
      }
    });

  }
  reminderUpdate(rem) {
    var Reminder = Parse.Object.extend("Reminder");
    var query = new Parse.Query(Reminder);
    query.equalTo("Id", rem.id);
    return query.first({
      success: function (reminder) {
        // Successfully retrieved the object.
        reminder.set("Id", rem.id);
        reminder.set("Fajri", rem.fajri);
        reminder.set("Dhuhr", rem.dhuhr);
        reminder.set("Asr", rem.asr);
        reminder.set("Maghrib", rem.maghrib);
        reminder.set("Isha", rem.isha);
        console.log(rem);
        reminder.save();
        return reminder;




      },
      error: function (error) {
        return error;
      }
    });
  }

  login(log) {


    console.log(log.password, log.username);

    return Parse.User.logIn(log.username, log.password, {
      success: function (user) {
        // Do stuff after successful login.

        localStorage.setItem('id', user.id);
        localStorage.setItem('city', user.get('city'));
        localStorage.setItem('TimeZone', user.get('TimeZone'));
        localStorage.setItem('username', user.get('username'))
        console.log(localStorage.getItem('id'));
        return user;
      },
      error: function (user, error) {
        // The login failed. Check error to see why.
        console.log(user, error);
        return user;
      }
    });


  }

  nearbyme(data) {

    // var _url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + query.lat + ',' + query.lon + '&rankby=' + query.rankby + '&types=' + query.type + '&key= ' + query.key

    return Parse.Cloud.run("mosques", {
      "lon": data.lon, "lat": data.lat,
      "rankby": data.rankby,
      "type": data.type, "key": data.key
    }).then(function (result) {

      return result;
    }, function (error) {
      // error
    });

  }

//here is functions of evalutation
  setEvalute(rem) {

    var reminder = new Parse.Object("Evaluation");
    reminder.set("Id", rem.id);
    reminder.set("Fajri", rem.fajri);
    reminder.set("Dhuhr", rem.dhuhr);
    reminder.set("Asr", rem.asr);
    reminder.set("Maghrib", rem.maghrib);
    reminder.set("Isha", rem.isha);

    return reminder.save(null, {
      success: function (remind) {
        // Execute any logic that should take place after the object is saved.
        return remind;
      },
      error: function (remind, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        return error;
      }
    });
  }

  //here is function of get all Asma Al Husna
  
  asmaAlHusna(data) {

    // var _url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + query.lat + ',' + query.lon + '&rankby=' + query.rankby + '&types=' + query.type + '&key= ' + query.key

    return Parse.Cloud.run("asmaAlHusna", {
    }).then(function (result) {

      return result;
    }, function (error) {
      // error
    });

  }


}
