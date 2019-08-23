class GameState {

  constructor() {
  	this.halfway = 0;
  	this.backing = 0;
  }
 


	get start(){
		return {
	    x:0,
	    y:0,
	    width:32,
	    height: 32,
	    color: 'yellow'
	}
	}

	get end(){
		return {
    x:320,
    y:320,
    width:32,
    height: 32,
    color: 'green'
}
	}


	checkHalfway(player,level)
	{
	  if(player.sprite.x==end.x && player.sprite.y==end.y){
	    this.backing=1;
	    this.halfway=1;
	  }
	}
	checkStageClear(player,level)
	{
		if(player.sprite.x==level.startLocation[0]*32 && player.sprite.y==level.startLocation[1]*32 && gameState.halfway==1){
		  alert('You win');
		  return true;
		}

		return false;
	}

	initiateLevel(player, start, end, level)
	{
	  	this.halfway = 0;
  		this.backing = 0;
		player.sprite.x=level.playerLocation[0]*32;
		player.sprite.y=level.playerLocation[1]*32;

		start.x=level.startLocation[0]*32;
		start.y=level.startLocation[1]*32;

		end.x=level.endLocation[0]*32;
		end.y=level.endLocation[1]*32;		
	}
}