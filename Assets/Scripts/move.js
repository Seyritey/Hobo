#pragma strict

function Update() {
	
	if (Input.GetKey(KeyCode.A)) {
		transform.Translate(-0.035, 0, 0);
	}
	
	if (Input.GetKey(KeyCode.D)) {
		transform.Translate(0.035, 0, 0);
	}
}



function OnTriggerStay2D(other: Collider2D) {
	
	if (other.name == "Door") 	{
		if (Input.GetKeyDown(KeyCode.W)) {
			Application.LoadLevel("Market"); 
		}
	}
	
	if (other.name == "Portal") 	{
		Application.LoadLevel("Market"); 
	}
}