// Copyright (c) 202X Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Jan 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-6-JS/sw.js", {
    scope: "/ICS2O-Assignment-6-JS/",
  })
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getAdvice = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()

    let advice = jsonData.slip.advice
    console.log(advice)

    if (jsonData.slip.advice != "none") {
      document.getElementById("advice").innerHTML =
        "<p>Your advice for the day is... " + advice + "</p>"
    } else {
      document.getElementById("advice").innerHTML =
        "<p>Your advice for the day is... unknown</p>"
    }
  } catch (err) {
    console.log(err)
  }
}

getAdvice("https://api.adviceslip.com/advice")
