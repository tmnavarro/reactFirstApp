'use strict';

const http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');

const miniTypes= {
	'html' : 'text/html',
	'jpeg' : 'text/jpeg',
	'jpg'  : 'text/jpeg',
	'png'  : 'text/png',
	'js'   : 'text/javascript',
	'css'  : 'text/css'
};


const error404 = (res, err) => {
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.write('<h1>Erro 404</h1></br><p>Ocorreu um '+ err +'<p>');
	res.end();
};


http.createServer((req, res) => {

	let uri = url.parse(req.url).pathname,
		filename = path.join(process.cwd(), uri);

	if(uri.indexOf('/app') !== -1){
		
		fs.exists(filename, (exists) => {
			if(!exists){
				error404(res);
			}

			let miniType = miniTypes[path.extname(filename).split('.')[1]];

			res.writeHead(200, miniType);
			var fileStream = fs.createReadStream(filename);
        	fileStream.pipe(res);
		});

	}else if( uri === '/' ){
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