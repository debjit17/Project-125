value = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

UsersNameIs = prompt("Dear User, \nI am requesting you to enter your name: ");
if(UsersNameIs == null || UsersNameIs == "")
{
    UsersNameIs = "Debjit"
}

function setup()
{

    video = createCapture(VIDEO);
    video.size(350, 350);
    video.position(100, 150);

    canvas = createCanvas(600, 400)
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Something is Initializing...");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x
        console.log(rightWrist);

        v1 = rightWrist - 12
        v2 = rightWrist + 12
        difference = floor(leftWrist - rightWrist);
        difference = floor(difference - ( difference - ( Math.random()  *  (100 - 25) + 25 ) ) );
        document.getElementById("size").innerHTML = difference + "px";
        textSize(difference)
        
    }
}

function draw()
{
    background('#2596be');
    text(UsersNameIs, 170, 200);
}