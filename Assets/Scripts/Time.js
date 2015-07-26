#pragma strict
var num : int = 0;
var sprite1 : Sprite;
var sprite2 : Sprite;
//var temp : float = 0;



function Start() {
   StartCoroutine("timeChange");
}
 
function timeChange() {
	yield WaitForSeconds(2);
	//temp = UnityEngine.Time.time - temp;
	//print(temp);
	
    if (num == 0) {
		GetComponent(SpriteRenderer).sprite = sprite1;
		num++;
	} else {
		num--;
		GetComponent(SpriteRenderer).sprite = sprite2;
	}
     StartCoroutine("timeChange");
}

function Update () {
	
}