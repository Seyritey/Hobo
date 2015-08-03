#pragma strict
var num: int = 0;
var num2: int = 0; 
var sprite1: Sprite;
var sprite2: Sprite;
var temp: float = 0;
var night: int = 0;
var day: int = 0;
var nightTime: int = 0;


function Start() {
	StartCoroutine("timeChange");
}

function timeChange2() {
	//var temp : int = UnityEngine.Time.time;
	if (Input.GetMouseButtonDown(0)) {


		if (num2 == 0) {
			StopCoroutine("timeChange");
			num2++;
		} else {
			num2--;
			StartCoroutine("timeChange");
		}

		var hit: RaycastHit;

		var ray: Ray;
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);

		if (Physics.Raycast(ray, hit, 100)) {

			if (hit.transform.tag == "Player") {
				temp = UnityEngine.Time.time - (day * 2);
				print(temp);
			}
		}

	}
}

function timeChange() {
	yield WaitForSeconds(2);
	temp = UnityEngine.Time.time - temp;

	if (num == 0) {
		GetComponent(SpriteRenderer).sprite = sprite1;
		num++;
	} else {
		num--;
		GetComponent(SpriteRenderer).sprite = sprite2;
	}
	day++;
	StartCoroutine("timeChange");
}

function Update() {
	timeChange2();
}