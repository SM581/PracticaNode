//protocolo de intercambio
var http=require('http');
//creando servidor mediante http
var server=http.createServer();

//servicio web
function mensaje(req,resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write('hola mundo_Sara Gómez');
    resp.end();
}

server.on('request',mensaje);
server.listen(3000,function(){
    console.log("la solicitud fue realizada mediate el puerto 3000");
});