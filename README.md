# football-game
javascript project displaying array of players before and after replacements

question:
  ● Create an array of 11 football players.
  ● Each player represents an object with the properties id,name,jersey_number.(player
    name can be like player1,player2,.. and so on,and jersey_number can be any number
    between 1 to 11 and jersey_number=1 will always be a goalkeeper)
  ● The coach of this team replaces three players in the entire match with three new players
      {id:12,name:player12,jersey_number:12},
      {id:13,name:player13,jersey_number:13} and
      {id:14,name:player14,jersey_number:14}
  ● Everytime the coach replaces a player, he chooses any random number between 1 to 11
    and replaces the player with the same jerysey_number with the new player.
  ● But he can't replace goalkeeper as a first replacement but can replace in the subsequent
    replacements with no change in jersey_number which is 1.
  ● Print array of players before replacement and print array of players every time when
    there is a replacement.
