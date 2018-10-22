// These are all storage variables.
var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var messages = ["Your determination and sheer desire to do your own thing will be successful. Relationships will become stronger. You can stabilize your situation if you compromise.", "Heart to heart talks will clear up vague issues. Accept the inevitable and continue to do your job. Use your own ideas to further your interests.", "Quarrels will erupt if you get into philosophical debates with friends. You are best to do your research before taking on such a venture. You'll meet new friends if you try new activities.", "You can make new friends by taking part in social events involving colleagues. Cultural activities will prove to be quite enlightening for everyone. You could find yourself having problems with coworkers and employers.", "Stress coupled with diet will add to stomach problems. Don't believe everything you hear. Don't let the cat out of the bag.", "Be careful not to confuse issues when discussing the matters at hand. You may find that your quick wit and charm will help you in obtaining allies. You will get bored quickly, so make sure that you have scheduled enough activity to hold your interest.", "You have two choices; Get out on your own, or bend to others' whims. Get busy on those home improvement projects that you've been procrastinating about. Put your thoughts into action.", "Get back into the swing of things. You may be the recipient of false information. Someone you least expect could be trying to make you look bad.", "Your charm and generosity will bring new friends and romantic opportunities. This will not be the best day to try to push your ideas or concerns. Don't push your luck with authority figures.", "Creative endeavors will give you somewhat of an outlet. Try to curb overindulgence today. Delve into worthwhile causes that will show results if you put in the effort.", "Curb the impulse to make lavish purchases and maybe spend some time with good friends. You will gain new friends if you get involved in environmental issues. Finish off old projects before starting something new.", "You need to control your temper and deal with the situation rationally. Someone you least expect could be trying to make you look bad. You may have the day off but your thoughts will be on your work and your cash situation.", "I'm sorry! Something went wrong. Can you please check your input? Thank you!"];
var images = ["http://www.horoscope.com/images-US/signs/profile-aquarius.png", "http://www.horoscope.com/images-US/signs/profile-pisces.png", "http://www.horoscope.com/images-US/signs/profile-aries.png", "http://www.horoscope.com/images-US/signs/profile-taurus.png", "http://www.horoscope.com/images-US/signs/profile-gemini.png", "http://www.horoscope.com/images-US/signs/profile-cancer.png", "http://www.horoscope.com/images-US/signs/profile-leo.png", "http://www.horoscope.com/images-US/signs/profile-virgo.png", "http://www.horoscope.com/images-US/signs/profile-libra.png", "http://www.horoscope.com/images-US/signs/profile-scorpio.png", "http://www.horoscope.com/images-US/signs/profile-sagittarius.png", "http://www.horoscope.com/images-US/signs/profile-capricorn.png"];

// Grab the user's entered variables, call other methods to use that data, and then update page with new data.
function onSubmit(){
    // These are all variables used to determine the user's information (name, sign, etc).
    var name = document.getElementById("nameInput").value;
    var birthdayResult = document.getElementById("birthdayCheck").value;
    var day = document.getElementById("dayChoice").value;
    var month = document.getElementById("monthChoice").value;
    // These alerts are used to make sure that all of the provided information is valid, and that the user filled everything out.
    if (name == "" || birthdayResult == "noChoice" || month == "noChoice" || day == "noChoice"){
        alert("Oops! You didn't fill everything out. Could you please do so now? Thank you!");
    }
    if (month == "feb" && day > 29 || month == 3 && day == 31 || month == "may" && day == 31 || month == "sep" && day == 31 || month == "nov" && day == 31){
        alert("We're sorry! Something went wrong. Could you please check to make sure the dates are correct? Thank you.");
    }
    // This gives the user their sign, horoscope, and image.
    if (name != "" && birthdayResult != "noChoice" && month != "noChoice" && day != "noChoice" && determineSign(day, month) != null){
        var sign = determineSign(day, month);
        document.getElementById("sign").innerText = "Your Sign";
        document.getElementById("signReveal").innerHTML = "Hello " + name + ", your sign is " + sign + "!";
        document.getElementById("horoscope").innerText = "Your Horoscope";
        document.getElementById("horoscopeReveal").innerHTML = determineHoroscope(sign, birthdayResult);
        document.getElementById("imageReveal").src = determineImage(sign);
    } else { // this makes sure that if the user recieved an alert the page is reset.
        document.getElementById("sign").innerText = "";
        document.getElementById("signReveal").innerHTML = "";
        document.getElementById("horoscope").innerText = "";
        document.getElementById("horoscopeReveal").innerHTML = "";
        document.getElementById("imageReveal").src = "https://user-images.githubusercontent.com/6753949/41509588-16212fda-721c-11e8-8650-dc1cdd619072.png";
    }
}

// Determines the sign of the user based on the month and day they provided
function determineSign(day, month){
    // The first if statement helps to make sure that if the user enters an impossible date for their birthday, the page remains blank.
    if (month == "feb" && day > 29 || month == 3 && day == 31 || month == "may" && day == 31 || month == "sep" && day == 31 || month == "nov" && day == 31){
        return null;
    } else if (month == "dec" && day >= 22 || month == "jan" && day <= 19){ /* the next series of if statements finds the user's sign. */
        return signs[11];
        // Capricorn
    } else if (month == "jan" &&  day >= 20 || month == "feb" && day <= 18){
        return signs[0];
        // Aquarius
    } else if (month == "feb" && day >= 19 || month == "mar" && day <= 20){
        return signs[1];
        // Pisces
    } else if (month == "mar" && day >= 21 || month == "apr" && day <= 19){
        return signs[2];
        // Aries
    } else if (month == "apr" && day >= 20 || month == "may" && day <= 20){
        return signs[3];
        // Taurus
    } else if (month == "may" && day >= 21 || month == "jun" && day <= 20){
        return signs[4];
        // Gemini
    } else if (month == "jun" && day >= 21 || month == "jul" && day <= 22){
        return signs[5];
        // Cancer
    } else if (month == "jul" && day >= 23 || month == "aug" && day <= 22){
        return signs[6];
        // Leo
    } else if (month == "aug" && day >= 23 || month == "sep" && day <= 22){
        return signs[7];
        // Virgo
    } else if (month == "sep" && day >= 23 || month == "oct" && day <= 22){
        return signs[8];
        // Libra
    } else if (month == "oct" && day >= 23 || month == "nov" && day <= 21){
        return signs[9];
        // Scorpio
    } else if (month == "nov" && day >= 22 || month == "dec" && day <= 21){
        return signs[10];
        // Sagittarius
    }
}

// Given a user’s sign, this function returns their horoscope.
function determineHoroscope(sign, birthdayResult){
    var userHoroscope = "";
    if (sign == "Aquarius"){
        userHoroscope = messages[0];
    } else if (sign == "Pisces"){
        userHoroscope = messages[1];
    } else if (sign == "Aries"){
        userHoroscope = messages[2];
    } else if (sign == "Taurus"){
        userHoroscope = messages[3];
    } else if (sign == "Gemini"){
        userHoroscope = messages[4];
    } else if (sign == "Cancer"){
        userHoroscope = messages[5];
    } else if (sign == "Leo"){
        userHoroscope = messages[6];
    } else if (sign == "Virgo"){
        userHoroscope = messages[7];
    } else if (sign == "Libra"){
        userHoroscope = messages[8];
    } else if (sign == "Scorpio"){
        userHoroscope = messages[9];
    } else if (sign == "Sagittarius"){
        userHoroscope = messages[10];
    } else if (sign == "Capricorn"){
        userHoroscope = messages[11];
    }
    if (birthdayResult == "yes"){
        userHoroscope = "Happy birthday! Today will be a day to remember, with great company, fantastic food, and an abundance of embarrassing memories! Your next year will be exciting and chaotic, with ups and downs, but you will not regret it!";
    }
    return userHoroscope;
}

// Given a user’s sign, return the horoscope image.
function determineImage(sign) {
    var userImage = "";
    if (sign == "Aquarius") {
        userImage = images[0];
    } else if (sign == "Pisces") {
        userImage = images[1];
    } else if (sign == "Aries") {
        userImage = images[2];
    } else if (sign == "Taurus") {
        userImage = images[3];
    } else if (sign == "Gemini") {
        userImage = images[4];
    } else if (sign == "Cancer") {
        userImage = images[5];
    } else if (sign == "Leo") {
        userImage = images[6];
    } else if (sign == "Virgo") {
        userImage = images[7];
    } else if (sign == "Libra") {
        userImage = images[8];
    } else if (sign == "Scorpio") {
        userImage = images[9];
    } else if (sign == "Sagittarius") {
        userImage = images[10];
    } else if (sign == "Capricorn") {
        userImage = images[11];
    }
    return userImage;
}