import Popper from "popper.js";

require("bootstrap");

//1. Create a class to access the "Dicebar Avatars API": https://avatars.dicebear.com/
//2. Create a small website
//3. create a button
//4. Make it generate 3 random avatars each time the button is clicked
//5. ensure that also they are created on page is reloaded (edited)

("use strict");
//create class and endpoints
class AvatarApi {
  constructor() {
    this.apiUrl = "https://avatars.dicebear.com/v2";
    this.apiAvatarGenderEndpoint = "/:sprites";
    this.apiAvatarNameEndpoint = "/:seed.svg";
    this.registerEvents();
  }

  //register form events
  registerEvents() {
    //register button click
    const button = document.querySelector(".btn");

    button.addEventListener("click", e => {
      e.preventDefault()
      //console.log("I have been clicked");

      const url = this.getAvatars();
      //making the HTML
      document.querySelector(".avatar-holder0").innerHTML = 
      `<img src="${url[0]}" alt="Avatar" padding="5%" width="100%">`;

      document.querySelector(".avatar-holder1").innerHTML = 
    `<img src="${url[1]}" alt="Avatar" padding="5%" width="100%">`;
    
    document.querySelector(".avatar-holder2").innerHTML = 
    `<img src="${url[2]}" alt="Avatar" padding="5%" width="100%">`;
    });
  }

  getAvatars() {
    let url1 = `${this.apiUrl}${this.getUrl()}`;
    let url2 = `${this.apiUrl}${this.getUrl()}`;
    let url3 = `${this.apiUrl}${this.getUrl()}`;

    console.log("get data", url1, url2, url3);
    return [url1, url2, url3];
  }
  getUrl() {
    const uuid = require("uuid/v4");

    const endpointOne = this.apiAvatarGenderEndpoint.replace(":sprites", "female");
    const endpointTwo = this.apiAvatarNameEndpoint.replace(":seed", uuid());
    const endpoint = `${endpointOne}${endpointTwo}`;
    return endpoint;
  }
}

const avatarApi = new AvatarApi();
console.log(avatarApi);


