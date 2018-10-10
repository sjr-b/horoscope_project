// THIS IS ALL ASSUMING THAT THE PERSON WAS NOT BORN ON FEB 29 (on a leap year)

var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn",];
var messages = ["blah", "bleep", "bloop"];
var images = [image, other image, etc];
var userSign = "";
var invalidSubmission = "I'm sorry, but something went wrong. Can you please check your input? Thank you!"

// REMEMBER TO COMPLETE MESSAGES AND IMAGES, and use invalidSubmission if you want, just find a nice place for it. Also, that nice place might be in the "determineSign" final else option.

// Grab the user's entered variables, call other methods to use that data, and then update page with new data.
function onSubmit(){
    determineSign(document.getElementById("dayChoice").value, document.getElementById("monthChoice").value);
    determineHoroscope();
    determineImage();
}

// Given the user's birthday, return their sign as a number (use it as a [key] into your Signs array).
function determineSign(day, month){
    if (month == "January" &&  20 <= day <= 31){
        userSign += signs[0];
        // Aquarius
    } else if (month == "February" && 1 <= day <= 18){
        userSign += signs[0];
        // Aquarius
    } else if (month == "February" && 19 <= day <= 28){
        userSign += signs[1];
        // Pisces
    } else if (month == "March" && 1 <= day <= 20){
        userSign += signs[1];
        // Pisces
    } else if (month == "March" && 21 <= day <= 31){
        userSign += signs[2];
        // Aries
    } else if (month == "April" && 1 <= day <= 19){
        userSign += signs[2];
        // Aries
    } else if (month == "April" && 20 <= day <= 30){
        userSign += signs[3];
        // Taurus
    } else if (month == "May" && 1 <= day <= 20){
        userSign += signs[3];
        // Taurus
    } else if (month == "May" && 21 <= day <= 31){
        userSign += signs[4];
        // Gemini
    } else if (month == "June" && 1 <= day <= 20){
        userSign += signs[4];
        // Gemini
    } else if (month == "June" && 21 <= day <= 30){
        userSign += signs[5];
        // Cancer
    } else if (month == "July" && 1 <= day <= 22){
        userSign += signs[5];
        // Cancer
    } else if (month == "July" && 23 <= day <= 31){
        userSign += signs[6];
        // Leo
    } else if (month == "August" && 1 <= day <= 22){
        userSign += signs[6];
        // Leo
    } else if (month == "August" && 23 <= day <= 31){
        userSign += signs[7];
        // Virgo
    } else if (month == "September" && 1 <= day <= 22){
        userSign += signs[7];
        // Virgo
    } else if (month == "September" && 23 <= day <= 30){
        userSign += signs[8];
        // Libra
    } else if (month == "October" && 1 <= day <= 22){
        userSign += signs[8];
        // Libra
    } else if (month == "October" && 23 <= day <= 31){
        userSign += signs[9];
        // Scorpio
    } else if (month == "November" && 1 <= day <= 21){
        userSign += signs[9];
        // Scorpio
    } else if (month == "November" && 22 <= day <= 30){
        userSign += signs[10];
        // Sagittarius
    } else if (month == "December" && 1 <= day <= 21){
        userSign += signs[10];
        // Sagittarius
    } else if (month == "December" && 22 <= day <= 31){
        userSign += signs[11];
        // Capricorn
    } else if (month == "January" && 1 <= day <= 19){
        userSign += signs[11];
        // Capricorn
    } else {
        // fill this in if you want.
    }
    return userSign();
}

// Given a user’s sign, return the horoscope text
function determineHoroscope(userSign){

}

// Given a user’s sign, return the horoscope image.
function determineImage(userSign){

}