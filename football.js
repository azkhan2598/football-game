//array of 11 football players
var playersInfo = new Array(11);

//generating an array of numbers between 1 to 11 in random order
var randNumArr = new Array(11);
var count=0 , randNum ;
while ( count < 11) 
{
    randNum = Math.round(1 + Math.random() * 10);//to get a random number between 1 to 11
    if (randNumArr.indexOf(randNum) == -1) 
    {
        randNumArr[count]=randNum;
        count++;
    }
}        

//defining array of 11 football players.
for(let i=0;i<11;i++)
{
    let incrementedNo= i+1;
    playersInfo[i]={id:incrementedNo,name:"player"+incrementedNo,jersey_number:randNumArr[i]};
}


//printing array of players before replacement
console.log(`Before replacement :`);
console.log(playersInfo);


//performing 3 replacements and printing after every one of it
var tempCount=13, index;
count=1;
while ( count <= 3) 
{
    if (count==1) //to ensure first replacement is not of goalkeeper
    {
        randNum = Math.round(2 + Math.random() * 9);
        
        index=playersInfo.findIndex(item => item.jersey_number === randNum);
        playersInfo[index] = {id:12,name:"player12",jersey_number:12};
        
        //printing array of players after 1st replacement
        console.log(`After replacement ${count}:`);
        console.log(playersInfo);
        
        count++;
    }
    else
    {
        randNum = Math.round(1 + Math.random() * 10); 
        
        if (randNum == 1) //to keep track of replacement of goalkeeper
        {
                index=playersInfo.findIndex(item => item.jersey_number === randNum);
                playersInfo[index] = {id:tempCount,name:"player"+tempCount,jersey_number:1};
                
                //printing array of players after replacement
                console.log(`After replacement ${count}:`);
                console.log(playersInfo);
                
                tempCount++;count++;
            
        } 
        else 
        {
            index=playersInfo.findIndex(item => item.jersey_number === randNum);
            if (index !== -1) 
            {
                playersInfo[index] = {id:tempCount,name:"player"+tempCount,jersey_number:tempCount};
                
                //printing array of players after replacement
                console.log(`After replacement ${count}:`);
                console.log(playersInfo);
                
                tempCount++;count++;
            }
            
        }       
    }
}       