/*
 * Configuração básicas para servidor HTTP com requisição em pasta
 * pública de repositórios estáticos
*/
'use strict';

//Requisição me modulos Node
const http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');

//Objeto de extenção de arquivos com seu respectivos Content-Types
const miniTypes= {
	'html' : 'text/html',
	'jpeg' : 'text/jpeg',
	'jpg'  : 'text/jpeg',
	'png'  : 'text/png',
	'js'   : 'text/javascript',
	'css'  : 'text/css'
};


//Callback para página 404 - Página não encontrada
const error404 = (res, err) => {
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.write('<h1>Erro 404</h1></br><p>Ocorreu um '+ err +'<p>');
	res.end();
};



//Criação de server com página inicial e repositório público
//Rotas em '/' e arquivos públicos em '/app'
http.createServer((req, res) => {

	let uri = url.parse(req.url).pathname,
		filename = path.join(process.cwd(), uri);

	//Verificação de acesso a diretório público
	if(uri.indexOf('/app') !== -1){

		//Se Arquivo existir
		fs.exists(filename, (exists) => {
			if(!exists){
				error404(res);
			}

			//Cria Content-Type com extenção correta de arquivos
			let miniType = miniTypes[path.extname(filename).split('.')[1]];

			//Faz a leitura do arquivo
			let fileStream = fs.createReadStream(filename);

			//Gera retorno com head 200 e arquivo lido
			res.writeHead(200, miniType);
        	fileStream.pipe(res);
		});

	}

	//Requisição na raiz da aplicação retona página inicial
	else if( uri === '/' ){
		fs.readFile('app/index.html', (err, data) => {
			if(data){
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				res.end();	
			}else{
				error404(res, err);
			}
		});
	}else{
		error404(res);
	}

})
.listen(3000, function(){
	console.log('Server UP!!');
});