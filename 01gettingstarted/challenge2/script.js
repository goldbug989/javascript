var team1='john';
var team2='mike';
t1score1=89;
t1score2=141;
t1score3=103;
t2score1=116;
t2score2=94;
t2score3=123;
//calculate averages
team1avg = (t1score1+t1score2+t1score3)/3;
team2avg = (t2score1+t2score2+t2score3)/3;
//compare averages
difference = team1avg - team2avg;

if (difference === 0) {
  console.log('the averages are the same!');
  console.log(team1 + '\'s avg was ' + team1avg);
  console.log(team2 + '\'s avg was ' + team2avg);
}
 else if (difference < 0) {
  console.log(team2 + '\s team had the higher avg!');
  console.log(team1 + '\'s avg was ' + team1avg);
  console.log(team2 + '\'s avg was ' + team2avg);
}
else {
  console.log(team1 + '\s team had the higher avg!');
  console.log(team1 + '\'s avg was ' + team1avg);
  console.log(team2 + '\'s avg was ' + team2avg);
}
