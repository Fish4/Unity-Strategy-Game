#pragma strict

var hoverMat : Material;
var selectedMat: Material;
var originalMat : Material;
var placementLayerMask : LayerMask;

var lastHitObj : GameObject;

private var gridLevel : GameObject[, ];

private final var WIDTH:int = 8;
private final var HEIGHT:int = 8;


function Start () {
	gridLevel = new GameObject[WIDTH, HEIGHT];

	for (var x = 0; x < WIDTH; x ++) {
		for (var y = 0; y < HEIGHT; y ++) {
			gridLevel[x, y] = GameObject.Find("Plane" + x + "_" + y);
		}
	}
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

			for (var x : int = 0; x < gridLevel.GetLength(0); x ++) {
				for (var y : int = 0; y < gridLevel.GetLength(1); y ++) {
					if(gridLevel[x, y].name == lastHitObj.name) {
						print('found grid');
					}
				}
			}
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