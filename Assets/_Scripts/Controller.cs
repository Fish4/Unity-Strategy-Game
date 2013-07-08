using UnityEngine;
using System.Collections;

public class Controller : MonoBehaviour {
	//public Player player1 = new Player();
	//public Player player2 = new Player();
	
	// Use this for initialization
	void Start () {
		//player1._turn = true;
		Debug.Log("workedd");
	}
	void Awake(){
		Debug.Log ("worked");	
	}
	
	// Update is called once per frame
	void Update () {
		//if space is pressed then switch turns
		bool pressed = Input.GetKeyDown(KeyCode.Space);
		/*
		if(pressed){
			if(player1._turn){
				Debug.Log("player1 turn completed");
			}
			else if(player2._turn){
				Debug.Log("player2 turn completed");		
			}
			
			
		}
		*/
	}
}
