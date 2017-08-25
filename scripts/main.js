/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// fixed

  function handValue (hand) {
    let player = hand;
    let playerHand = 0;

  for (var i = 0; i < player.length; i++) {

    if (player[i]=== "K" ||player[i]=== "Q" || player[i]=== "J" ) {
      console.log(player);
      player[i] = 10;
      playerHand += 10;
    }else if(player[i] == "A" && playerHand <= 10){
         playerHand += 11;
       }else if(player[i] == "A" && playerHand > 10){
         playerHand += 1;
       } else if (player[i] === "A" && playerHand > "A" ) {
           playerHand += 1;
         }else{
          playerHand += parseInt(player[i]);
         }
       }
       if(playerHand > 21){
         playerHand -= 10;
  }
  return playerHand;
}
