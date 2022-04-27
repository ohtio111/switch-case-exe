var JohnTeamscore= (89, 120 ,123)
var MikeTeamScore= (89,120,123)
var MaryTeamScore=(97,134,105)
aveJohnTeam= (89+120+123)/3
aveMikeTeam= (89+120+123)/3
aveMaryTeam= (89+120+123)/3
console.log(aveJohnTeam,aveMikeTeam,aveMaryTeam);

   switch(true){
        case 1:
            aveJohnTeam > aveMikeTeam && aveJohnTeam>aveMaryTeam;
            console.log('John\'s Team wins on average of' + " "+ aveJohnTeam + " "+'points');
            break;
        case 2:
            aveMikeTeam>aveJohnTeam && aveMikeTeam>aveMaryTeam;
            console.log('mike\'s team wins on average points with' +" "+ aveMikeTeam+" "+ 'points');
            break;
        case 3:
            aveMaryTeam>aveMikeTeam&&aveMaryTeam>aveJohnTeam;
            console.log('Mary\'s team wins on average points');
            break;
        case 4:
            aveJohnTeam===aveMaryTeam===aveMikeTeam;
            console.log('The whole tournament is a draw. let there be re-match');
            break;            
        case 5:
            aveJohnTeam===aveMikeTeam;
            console.log('it\'s a draw between Team Mike and John . There will be re-match between them');
            break;
        case 6:
            aveJohnTeam===aveMaryTeam;
            console.log('it\'s a draw between Team John and Team Mary. There will be a re-match');
            break;
        case 7:
            aveMaryTeam===aveMikeTeam;
            console.log('it\'s a draw between Team Mary and team Mike. There will be a re-match');
            break;
        default:
            console.log('We have a difficult situation here. We will be back');
            break;
        
}
