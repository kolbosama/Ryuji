#pragma strict
private var goalFlag : boolean;
function Start () {
	goalFlag = false;
}

function Update () {
	}

function OnTriggerEnter (other : Collider) {
if (other.gameObject.tag.Equals("PlayerBallTag")) {
	goalFlag = true;
	}
}
function OnTriggerExit (other : Collider) {
}

function OnGUI () {
	if (goalFlag == true) {
	GUI.Label(Rect(10,10,Screen.width - 20,Screen.height -20),"Goal!");
	}
}