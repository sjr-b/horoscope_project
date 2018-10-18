var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var messages = ["Your determination and sheer desire to do your own thing will be successful. Relationships will become stronger. You can stabilize your situation if you compromise.", "Heart to heart talks will clear up vague issues. Accept the inevitable and continue to do your job. Use your own ideas to further your interests.", "Quarrels will erupt if you get into philosophical debates with friends. You are best to do your research before taking on such a venture. You'll meet new friends if you try new activities.", "You can make new friends by taking part in social events involving colleagues. Cultural activities will prove to be quite enlightening for everyone. You could find yourself having problems with coworkers and employers.", "Stress coupled with diet will add to stomach problems. Don't believe everything you hear. Don't let the cat out of the bag.", "Be careful not to confuse issues when discussing the matters at hand. You may find that your quick wit and charm will help you in obtaining allies. You will get bored quickly, so make sure that you have scheduled enough activity to hold your interest.", "You have two choices; Get out on your own, or bend to others' whims. Get busy on those home improvement projects that you've been procrastinating about. Put your thoughts into action.", "Get back into the swing of things. You may be the recipient of false information. Someone you least expect could be trying to make you look bad.", "Your charm and generosity will bring new friends and romantic opportunities. This will not be the best day to try to push your ideas or concerns. Don't push your luck with authority figures.", "Creative endeavors will give you somewhat of an outlet. Try to curb overindulgence today. Delve into worthwhile causes that will show results if you put in the effort.", "Curb the impulse to make lavish purchases and maybe spend some time with good friends. You will gain new friends if you get involved in environmental issues. Finish off old projects before starting something new.", "You need to control your temper and deal with the situation rationally. Someone you least expect could be trying to make you look bad. You may have the day off but your thoughts will be on your work and your cash situation.", "I'm sorry! Something went wrong. Can you please check your input? Thank you!"];
var images = ["http://www.horoscope.com/images-US/signs/profile-aquarius.png", "http://www.horoscope.com/images-US/signs/profile-pisces.png", "http://www.horoscope.com/images-US/signs/profile-aries.png", "http://www.horoscope.com/images-US/signs/profile-taurus.png", "http://www.horoscope.com/images-US/signs/profile-gemini.png", "http://www.horoscope.com/images-US/signs/profile-cancer.png", "http://www.horoscope.com/images-US/signs/profile-leo.png", "http://www.horoscope.com/images-US/signs/profile-virgo.png", "http://www.horoscope.com/images-US/signs/profile-libra.png", "http://www.horoscope.com/images-US/signs/profile-scorpio.png", "http://www.horoscope.com/images-US/signs/profile-sagittarius.png", "http://www.horoscope.com/images-US/signs/profile-capricorn.png"];

// Grab the user's entered variables, call other methods to use that data, and then update page with new data.
function onSubmit(){
    var userSign = "";
    var name = document.getElementById("nameInput").value;
    var birthdayResult = document.getElementById("birthdayCheck").value;
    var day = document.getElementById("dayChoice").value;
    var month = document.getElementById("monthChoice").value;
    determineSign(name, birthdayResult, day, month);
    determineHoroscope(userSign, birthdayResult);
    determineImage(userSign);
    if (determineSign() != null){
        document.getElementById("signReveal").innerHTML = "Hello, " + name + ", your sign is " + determineSign() + "!";
        document.getElementById("horoscopeReveal").innerHTML = determineHoroscope();
        document.getElementById("imageReveal").src = determineImage(userSign);

    }
}

// Determines the sign of the user based on the month and day they proviuded
function determineSign(name, birthdayResult, day, month){
    if (name == "" || birthdayResult == "noChoice" ||  month == "noChoice" || day == "noChoice"){
        alert("Oops! You didn't fill everything out. Could you please do so now? Thank you!");
        return null;
    }
    if (month == "feb" && day > "29" || month == "apr" && day == "31" || month == "jun" && day == "31" || month == "sep" && day == "31" || month == "nov" && day == "31"){
        alert("We're sorry! Something went wrong. Could you please check to make sure the dates are correct? Thank you.");
        return null;
    }
    if (month == "dec" && "22" <= day || month == "jan" && day <= "19"){
        userSign = signs[11];
        // Capricorn
    } else if (month == "jan" &&  "20" <= day || month == "feb" && day <= "18"){
        userSign = signs[0];
        // Aquarius
    } else if (month == "feb" && "19" <= day || month == "mar" && day <= "20"){
        userSign = signs[1];
        // Pisces
    } else if (month == "mar" && "21" <= day || month == "apr" && day <= "19"){
        userSign = signs[2];
        // Aries
    } else if (month == "apr" && "20" <= day || month == "may" && day <= "20"){
        userSign = signs[3];
        // Taurus
    } else if (month == "may" && "21" <= day || month == "jun" && day <= "20"){
        userSign = signs[4];
        // Gemini
    } else if (month == "jun" && "21" <= day || month == "jul" && day <= "22"){
        userSign = signs[5];
        // Cancer
    } else if (month == "jul" && "23" <= day || month == "aug" && day <= "22"){
        userSign = signs[6];
        // Leo
    } else if (month == "aug" && "23" <= day || month == "sep" && day <= "22"){
        userSign = signs[7];
        // Virgo
    } else if (month == "sep" && "23" <= day || month == "oct" && day <= "22"){
        userSign = signs[8];
        // Libra
    } else if (month == "oct" && "23" <= day || month == "nov" && day <= "21"){
        userSign = signs[9];
        // Scorpio
    } else if (month == "nov" && "22" <= day || month == "dec" && day <= "21"){
        userSign = signs[10];
        // Sagittarius
    }
    return userSign;
}

// Given a user’s sign, this function returns their horoscope.
function determineHoroscope(determineSign, birthdayResult){
    var userHoroscope = "";
    if (birthdayResult == "yes"){
        userHoroscope = "Happy birthday! Today will be a day to remember, with great company, fantastic food, and an abundance of embarrassing memories! Your next year will be exciting and chaotic, with ups and downs, but you will not regret it!";
        return userHoroscope;
    } else if (determineSign() == null){
        return null;
    } else if (determineSign() == "Aquarius"){
        userHoroscope = messages[0];
    } else if (determineSign() == "Pisces"){
        userHoroscope = messages[1];
    } else if (determineSign() == "Aries"){
        userHoroscope = messages[2];
    } else if (determineSign() == "Taurus"){
        userHoroscope = messages[3];
    } else if (determineSign() == "Gemini"){
        userHoroscope = messages[4];
    } else if (determineSign() == "Cancer"){
        userHoroscope = messages[5];
    } else if (determineSign() == "Leo"){
        userHoroscope = messages[6];
    } else if (determineSign() == "Virgo"){
        userHoroscope = messages[7];
    } else if (determineSign() == "Libra"){
        userHoroscope = messages[8];
    } else if (determineSign() == "Scorpio"){
        userHoroscope = messages[9];
    } else if (determineSign() == "Sagittarius"){
        userHoroscope = messages[10];
    } else if (determineSign() == "Capricorn"){
        userHoroscope = messages[11];
    } else {
        userHoroscope = "unavailable";
    }
    return userHoroscope;
}

// Given a user’s sign, return the horoscope image.
function determineImage(determineSign) {
    var userImage = "";
    if (determineSign() == null) {
        return null;
    } else if (determineSign() == "Aquarius") {
        userImage = images[0];
    } else if (determineSign() == "Pisces") {
        userImage = images[1];
    } else if (determineSign() == "Aries") {
        userImage = images[2];
    } else if (determineSign() == "Taurus") {
        userImage = images[3];
    } else if (determineSign() == "Gemini") {
        userImage = images[4];
    } else if (determineSign() == "Cancer") {
        userImage = images[5];
    } else if (determineSign() == "Leo") {
        userImage = images[6];
    } else if (determineSign() == "Virgo") {
        userImage = images[7];
    } else if (determineSign() == "Libra") {
        userImage = images[8];
    } else if (determineSign() == "Scorpio") {
        userImage = images[9];
    } else if (determineSign() == "Sagittarius") {
        userImage = images[10];
    } else if (determineSign() == "Capricorn") {
        userImage = images[11];
    }
    return userImage;
}