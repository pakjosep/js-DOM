/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var newName1 = "Tay-Tay";
var changeName = document.getElementById("name1");
changeName.innerHTML = newName1;



/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var newPosition2 = "Project Manager";
var changePosition2 = document.getElementById("position2");
changePosition2.innerHTML = newPosition2;



/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var newAlias3 = "Concatenation";
var changeAlias3 = document.getElementById("alias3");
changeAlias3.innerHTML=newAlias3;



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var newProfile= "So tonight I'm gonna party like it's 1999!";
var changeProfile = document.querySelector(".profile");
changeProfile.innerHTML= newProfile;



/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

const myProfile = document.getElementsByClassName('profile');
myProfile[1].innerHTML = "Be water, my friend.";



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var myAlias = document.getElementsByClassName('alias');
myAlias[2].innerHTML = "Jules";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var familyGuy= document.createElement("div");
familyGuy.id = "name7";
familyGuy.innerHTML = 'Peter Griffin';
nameParent.appendChild(familyGuy);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

