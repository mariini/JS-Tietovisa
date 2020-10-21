//JS-harjoitus Kyselylomake Riina Marin KKTI19

/*Koodi kirjoitettu annetun ohjeen mukaan,
mutta en saa jostain syystä toimimaan.
Käyty läpi rivi riviltä ja googlattu ratkaisua useasta lähteestä */


function lahetaVastaukset()
{
    var yhteensa = 5;
    var pisteet = 0;
    var huom = 0;

    

    //Haetaan pelaajan vastaukset lomakkeelta
    var k1 = document.forms["kyselyLomake"]["k1"].value;
    var k2 = document.forms["kyselyLomake"]["k2"].value;
    var k3 = document.forms["kyselyLomake"]["k3"].value;
    var k4 = document.forms["kyselyLomake"]["k4"].value;
    var k5 = document.forms["kyselyLomake"]["k5"].value;
 
    
    //Tarkastetaan onko lomakkeella kaikki vastaukset
    for(i = 1; i <= yhteensa; i++)
    {
        if(eval('k'+i) == null || eval('k'+i) == '')
        {
            alert('Et vastannut kysymykseen numero: ' + i);
            huom = 1;
        }
        if(huom == 1) return false;
    }


   //Asetetaan oikeat vastaukset
   var vastaukset = ["b", "a", "d", "b", "d"];

    //Tarkistetaan oikeat vastaukset
    for(i = 1; i <= yhteensa; i++)
    {
        if(eval('k'+i) == vastaukset[i-1])
        {
            pisteet++;
        }
    }
    //Pisteiden esitys
    var tulokset = document.getElementById('tulokset');
    alert('Sait ' + pisteet + ' pistettä, kun maksimipistemäärä oli ' + yhteensa);
    tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span> pistettä, kun maksimipistemäärä oli <span>' + yhteensa + '.</span></h3>';
    return false;
}