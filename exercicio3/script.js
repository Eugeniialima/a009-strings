const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")

console.log(`${novaFrase}.
Tem verde na frase? ${novaFrase.includes("verde")}
E laranja? ${novaFrase.includes("laranja")}`)

//console.log(novaFrase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))

console.log(novaFrase.replace(novaFrase.substring(novaFrase.indexOf("mas")), novaFrase.substring(novaFrase.indexOf("mas")).toUpperCase()))