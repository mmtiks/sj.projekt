//https://stackoverflow.com/questions/13975891/change-image-in-html-page-every-few-seconds - eelneva küsimuse arutelust inspireeritud kood, mis muudab iga mõne aja tagant lehekülje ülemisel ribal olevat tsitaati ja ka lehekülge, millele tsitaadile vajutades kasutaja viiakse //

var links = ["https://et.wikipedia.org/wiki/Emanuel_Lasker",'https://et.wikipedia.org/wiki/Siegbert_Tarrasch','https://et.wikipedia.org/wiki/Robert_Fischer','https://et.wikipedia.org/wiki/Herbert_George_Wells','https://en.wikipedia.org/wiki/Hans_Ree','https://en.wikipedia.org/wiki/Mikhail_Chigorin'];
var images = ['“When you see a good move, look for a better one.” – Emanuel Lasker','“Chess, like love, like music, has the power to make men happy.” – Siegbert Tarrasch','“I don’t believe in psychology. I believe in good moves.” – Bobby Fischer','“There is no remorse like the remorse of chess.” – H. G. Wells','“Chess is beautiful enough to waste your life for.” – Hans Ree','“Even a poor plan is better than no plan at all.” – Mikhail Chigorin'];
var i = 0;
var renew = setInterval(function(){
              if(links.length == i){
  document.getElementById("upquotes").innerHTML=images[0];           document.getElementById("bannerLink").href = links[0];
                  i = 1;
              }
              else {
document.getElementById("upquotes").innerHTML=images[i];           document.getElementById("bannerLink").href = links[i];
                i++;
          }
          },8000);



// https://codepen.io/storm11/pen/pZXxBB - parempoolse nn 'küljepealkirja' liigutamiseks kasutatakse suuresti eelviidatud lehel leiduvat javascripti, mis järgib hiire asukohta ja mõjutab lehe css-i vastavalt hiire koordinaatidele

$(document).on("click mousemove","html",function(e){ 
var x = e.clientX;
var y = e.clientY;
var newposX = x/6 - 80;
var newposY = y - 60; $("#t2hed").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});