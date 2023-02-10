let totalprice = 0;
let countitem = 0;

function dogtotal()
{
    let dogSum = 0;
    let chosen = document.getElementById("dogtotal");

    for(let i=0 ; i < chosen.dogpro.length ; i++)
    {
        if(chosen.dogpro[i].checked)
        {
            switch(i)
            {
                case 0:
                    dogSum += 25;
                    countitem ++;
                    break;
                case 1:
                    dogSum += 35;
                    countitem ++;
                    break;
                case 2:
                    dogSum += 50;
                    countitem ++;
                    break;
                case 3:
                    dogSum += 45;
                    countitem ++;
                    break;
                case 4:
                    dogSum += 15;
                    countitem ++;
                    break;
                case 5:
                    dogSum += 20;
                    countitem ++;
                    break;
            }
        }

    }

    totalprice += dogSum;
   document.getElementById("dogprice").innerHTML = `$ ${dogSum}`;
   document.getElementById("@").innerHTML = `x ${countitem}`;
   document.getElementById("$").innerHTML = `$ ${totalprice}`;


}

function cattotal()
{
    let catSum = 0;
    let chosen = document.getElementById("cattotal");

    for(let i=0 ; i < chosen.catpro.length ; i++)
    {
        if(chosen.catpro[i].checked)
        {
            switch(i)
            {
                case 0:
                    catSum += 25;
                    countitem ++;
                    break;
                case 1:
                    catSum += 20;
                    countitem ++;
                    break;
                case 2:
                    catSum += 20;
                    countitem ++;
                    break;
                case 3:
                    catSum += 60;
                    countitem ++;
                    break;
                case 4:
                    catSum += 50;
                    countitem ++;
                    break;
                case 5:
                    catSum += 40;
                    countitem ++;
                    break;
            }
        }

    }

    totalprice += catSum;
   document.getElementById("catprice").innerHTML = `$ ${catSum}`;
   document.getElementById("@").innerHTML = `x ${countitem}`;
   document.getElementById("$").innerHTML = `$ ${totalprice}`;
}

function birdtotal()
{
    let birdSum = 0;
    let chosen = document.getElementById("birdtotal");

    for(let i=0 ; i < chosen.birdpro.length ; i++)
    {
        if(chosen.birdpro[i].checked)
        {
            switch(i)
            {
                case 0:
                    birdSum += 65;
                    countitem ++;
                    break;
                case 1:
                    birdSum += 40;
                    countitem ++;
                    break;
                case 2:
                    birdSum += 25;
                    countitem ++;
                    break;
                case 3:
                    birdSum += 30;
                    countitem ++;
                    break;
                case 4:
                    birdSum += 10;
                    countitem ++;
                    break;
                case 5:
                    birdSum += 10;
                    countitem ++;
                    break;
            }
        }

    }


    totalprice += birdSum;
   document.getElementById("birdprice").innerHTML = `$ ${birdSum}`;
   document.getElementById("@").innerHTML = `x ${countitem}`;
   document.getElementById("$").innerHTML = `$ ${totalprice}`;
}

function checkout()
{
    if(totalprice < 1000)
    {
        totalprice += (totalprice * 0.10);
        alert("10% Delivery Cost is added to your total cost!" + "\nTotal Cost is : $" + totalprice );
        document.getElementById("$").innerHTML = `$ ${totalprice}`;
    }

    else
    {
        alert("Congratulations!Delivery Cost will not be calculated for you.");
    }

   if( confirm("Do you confirm your shopping?"))
   {
    alert("Thank you for trusting us!");
   }

   else
   {
        alert("Your shopping basket is canceled!");
        window.location.reload();
   }

}

function emptycart()
{
    window.location.reload();
}