import React, { Component } from "react";
import axios from "axios";

export default class ApiTest extends Component {
  handleClick() {
    fetch("http://localhost:8080/update-details", {
      method: "POST",
      // params: {
      //   name: "Reyansh kumar",
      //   phone: "1234567890",
      // },
      body: JSON.stringify({ name: "reyansh", phone: "1234567890" }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkeXN1MTM1QGdtYWlsLmNvbSIsImV4cCI6MTYzNDY2Njk2NiwiaWF0IjoxNjM0NjMwOTY2fQ.mdUroiEx-Nu5Ea1EOvGz_iKf2IO_C_z59z0yWTKlHIE",
      },
    })
      .then((response) => response.json())
      .then((jsondata) => console.log(jsondata))
      .catch((error) => {
        console.log(error);
      });

    // const data = axios
    //   .post("http://127.0.0.1:8080/update-details", {
    //     Headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJna2FyYWwiLCJleHAiOjE2MzUyMzI0NDAsImlhdCI6MTYzNDYyNzY0MH0.auFMx-FpUVIN1vscuSCvVhzX7yLTHoMx3ppRgYJmp0DJuemVY8m9urn3zxQLU7nsD8-kUqeZ3CUM8zBfQpa8Wg",
    //     },

    //     // params: {
    //     //   name: "Reyansh kumar",
    //     //   phone: "1234567890",
    //     // },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });

    // AuthenticationService.createJWTToken(
    //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJna2FyYWwiLCJleHAiOjE2MzUyMzI0NDAsImlhdCI6MTYzNDYyNzY0MH0.auFMx-FpUVIN1vscuSCvVhzX7yLTHoMx3ppRgYJmp0DJuemVY8m9urn3zxQLU7nsD8-kUqeZ3CUM8zBfQpa8Wg"
    // );
    // AuthenticationService.executeJwtAuthenticationService({
    //   username: "test",
    //   password: "test123",
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(() => {});
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
