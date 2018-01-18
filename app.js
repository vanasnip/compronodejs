//Streams
//Chunks: data is split in chunks and streamed
//Streams are event emiters have access to on and emit
//Old stream code and new stream code.
//now there is a variety of streams
//Stream .Readbale, .Writable, .Duplex, .Transfom, .PassThrough
//they are what they sound like
//Streams are an abstract class, a type of constructer you never work directly work with, but inherit from.

//Pipes 
//how you connect two streams by writing to one stream what is being read from another 
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt'); //read from source (container)

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt'); //writing to destination (container)

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz'); // so we can write to gzip (container)

var gzip = zlib.createGzip(); //container that willapply zlib algo to compress when called

//here we actually invoke something we send our source to desination
readable.pipe(writable);

//here we are sending out source to gzip to compress
//straight after that because the pipe function returns the result, we send it to compressed another writable stream
readable.pipe(gzip).pipe(compressed);