//================================
//	view your project using anvil at:
//	http://images.dev
//
// or after you upload it to github at:
//	http://yourusername.github.io/images/
//================================

//STEP 1: Declare global variables for your images and upload button

var uploadButton
	img
	grumpyCatR
 	grumpyCatL;


function preload(){
	//STEP 2:
	// Load your image with loadImage("path/to/image.jpg")
	//and save it to your global variable:

}

function setup() {
	//STEP 3
	//add a file upload button with CreateFileInput(_____);

	//STEP 4:
  //set up your canvas with createCanvas(__,__);
 uploadButton = createFileInput(imageUploaded);
}

function imageUploaded(file) {
	img = loadImage (file.data, drawMyImage);
}

//function drawMyImage (){
	//image (img);

//}

function draw() {

	if (img){
		image(img);
		background(img);
	}


	//STEP 5:
	//draw your images with image(imagevariable);

	//STEP 7:
	//You're also going to need an if statement here to check
	//if the image the user uploaded exists to then draw it
	//(see image upload example version 2)

}

//STEP 6:
//create a callback function (you can name it anything you'd like)
//which will be called when the user uploads an image:

	//and inside it you will need to save the loaded image to a global variable


//	The design thinking of the past has always pushed for more time for productive thinking, holidng de-stressed thinking as an essential part of the INNOVATION process. This article,
