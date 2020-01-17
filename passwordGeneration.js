var password = document.querySelector("#password");

var regenerate = document.querySelector("#regenerate");

var copy = document.querySelector("#copy");

const specialChars = "~`!@#$%^&*()_+-=[]{}\\|:;\'\",<.>/?".split("");

const numberChars = "1234567890".split("");

const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm".split("");

function yesOrNo(input)
{
    if ((input =="yes") ||
        (input =="y") ||
        (input =="Yes") ||
        (input =="Y"))
    {
        return true;
    } 
    else
    {
        return false;
    }
}

function arraysShareValue(a1,a2)
{
    for (let i = 0; i < a1.length; i++) {
        if (a2.includes(a1[i]))
        {
            return true;
        }
    }
    return false;
}

function getRandom(a) //returns a random item from an array
{
    return a[Math.floor(Math.random()*a.length)];
}

function getRandomIndex(a)
{
   return Math.floor(Math.random()*a.length);
}

function getLength()
{
    let length = parseInt(prompt("how long do you want your password to be?\n(must be between 8 and 128)"))
    if (!((length > 7) && (length < 129)))
    {
        alert("You must enter a value between 8 and 128!")
        return getLength();
    } else
    {
        return length;
    }
}

function generate()
{
    let passGen = new Array(passLength);

    for (let i = 0; i < passGen.length; i++) {
        passGen[i] = getRandom(lowercaseChars);
    }

    for (let i = 0; i < special; i++) {
        passGen[getRandomIndex(passGen)] = getRandom(specialChars);
    }

    for (let i = 0; i < numbers; i++) {
        passGen[getRandomIndex(passGen)] = getRandom(numberChars);
    }

    for (let i = 0; i < uppercase; i++) {
        passGen[getRandomIndex(passGen)] = getRandom(uppercaseChars);
    }
    password.value = passGen.join("");
}

var passLength = getLength();

if (yesOrNo(prompt("Do you want special characters?")))
{
    var special = Math.floor(passLength/4);
}
if (yesOrNo(prompt("Do you want numbers?")))
{
    var numbers = Math.floor(passLength/4);
}
if (yesOrNo(prompt("Do you want uppercase characters?")))
{
    var uppercase = Math.floor(passLength/4);
}


generate();

regenerate.onclick = generate;

copy.onclick = function() {
    password.select();
    document.execCommand("copy");
}