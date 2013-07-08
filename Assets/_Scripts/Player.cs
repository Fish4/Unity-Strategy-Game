using UnityEngine;
using System.Collections;

public class Player : MonoBehaviour {
	
	//Whether it is this player's turn or not
	public bool _turn = false;
	//displays how many units this player has left
	public int _units = 0;
	//represents the number of units whose turn's have been completed. this number cannot be 
	//larger than units
	public int _unitsTurnsCompleted = 0;
	//this should contain a list of all the units of this player
	public int[] _unitList;
	//the amount of currency this player contains left. 
	//this number should start off high.
	public int _resources = 0;
	//this should represent how many times the player has won.
	//may not be necessary
	public int _wins = 0;
	//points represents the amount of points this player has obtained.
	public int _points = 0;
	
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
