#pragma strict

function Start () {

}

function Update () {
	transform.position.x +=
	Input.GetAxis("Horizontal") * (30.0 * Time.deltaTime);
	transform.position.y +=
	Input.GetAxis("Vertical") * (30.0 * Time.deltaTime);
}