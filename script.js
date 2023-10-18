console.log("Velib");

fetch(
    "https://velib-metropole-opendata.smovengo.cloud/")
).then(function(reponse){
    return reponse.json ();
}).then(function(reponse)){
    console.log(reponse)
}