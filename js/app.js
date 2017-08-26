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
var tim= document.createElement("div");
tim.id="alias8";
tim.innerHTML= "Old Man Riverwalk";
aliasParent.appendChild(tim);



//Final Boss
/*9. Create your own profile.*/

var damn= document.getElementsByClassName("block3 col-sm-4")[2];
var nameBox= document.createElement("div");
nameBox.id= "name9";
nameBox.innerHTML="Arnold Schwarzenegger";
damn.appendChild(nameBox);

var positionBox= document.createElement("div");
positionBox.id= "position9";
positionBox.innerHTML="T-800 Cybernetic Organism";
damn.appendChild(positionBox);
var aliasBox= document.createElement("div");
aliasBox.id= "alias9";
aliasBox.innerHTML="Terminator";
damn.appendChild(aliasBox);
var bioBox= document.createElement("div");
bioBox.id= "bio9";
bioBox.innerHTML="Based on your pupil dilation, skin temperature, and motor functions, I calculate an 83% probability that you will not pull the trigger.";
damn.appendChild(bioBox);

//var shit= 'img[name=""]'.src= "https://s3.amazonaws.com/lawgical/assets/data/2689/original.png";
//var terminator= document.createElement("img");
//terminator.src="http://r.fod4.com/c=sq/s=w1000,pd1/o=80/http://a.fod4.com/images/user_photos/1208619/7baa6dfd4f761ad84e0c7aad13c62c46_square_fullsize.jpg";
//damn.appendChild(terminator)



