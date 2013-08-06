#pragma strict

var hoverMat : Material;
var selectedMat: Material;
var originalMat : Material;
var placementLayerMask : LayerMask;

var lastHitObj : GameObject;


function Start () {
	
}

function Update () {
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;

	if (Physics.Raycast(ray, hit, 1000, placementLayerMask)) {
		if (lastHitObj) {
			if (lastHitObj.tag == "Grid_Empty")
				lastHitObj.renderer.material = originalMat;
		}

		lastHitObj = hit.collider.gameObject;

		if (lastHitObj.tag == "Grid_Empty")
			lastHitObj.renderer.material = hoverMat;
	} else {
		if (lastHitObj) {
			lastHitObj.renderer.material = originalMat;
			lastHitObj = null;
		}
	}

	if (Input.GetMouseButtonDown(0) && lastHitObj) {
		if (lastHitObj.tag == "Grid_Empty") {
			lastHitObj.renderer.material = selectedMat;
			lastHitObj.tag = "Grid_Taken";

			print('change status (' + lastHitObj.name + ') to "Taken"');
		}
	}

	if (Input.GetMouseButtonDown(1) && lastHitObj) {
		if (lastHitObj.tag == "Grid_Taken") {
			lastHitObj.renderer.material = originalMat;
			lastHitObj.tag = "Grid_Empty";

			print('change status (' + lastHitObj.name + ') to "Empty"');
		}	
	}
}