var brojac = 0;
function Zamjena() {
    if(brojac % 2 == 0) {
	document.getElementById('bank').src = "slike/bitcoins.png";
	document.getElementById('bitcoins').src = "slike/bank.png";
	document.getElementById("f1").innerHTML = "BTC";
	document.getElementById("f2").innerHTML = "BAM";
	document.getElementById("f3").innerHTML = "Broj bankovnog racuna";
	document.getElementById("f4").innerHTML = "Naziv primatelja";
	document.getElementById("text3").innerHTML = "Bitcoin";
	document.getElementById("text4").innerHTML = "Bankovni racun";
  } else {
	document.getElementById('bank').src = "slike/bank.png";
	document.getElementById('bitcoins').src = "slike/bitcoins.png";
	document.getElementById("f1").innerHTML = "BAM";
	document.getElementById("f2").innerHTML = "BTC";
	document.getElementById("f3").innerHTML = "BTC adresa (tu saljemo)";
	document.getElementById("f4").innerHTML = "OIB platitelja";
	document.getElementById("text3").innerHTML = "Bankovni racun";
	document.getElementById("text4").innerHTML = "Bitcoin";
    }
   brojac++;	
}
