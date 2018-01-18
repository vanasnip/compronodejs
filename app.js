//Streams
//Chunks: data is split in chunks and streamed
//Streams are event emiters have access to on and emit
//Old stream code and new stream code.
//now there is a variety of streams
//Stream .Readbale, .Writable, .Duplex, .Transfom, .PassThrough
//they are what they sound like
//Streams are an abstract class, a type of constructer you never work directly work with, but inherit from.

var fs = require('fs');
//the stream will fill a buffer with contents
//if the contents are the same size or smaller than the buffer
//then we'll just get all the data
//if its bigger than the buffer size then we will get peices or the data so read data, fill buffer, emit peice repeat, until we have all the data
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding:'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk){
    console.log(chunk.length);
    writable.write('#####################################################################################################################################################################################################################################################################################################################################\n' 
    + chunk + '\n');
    //just copied the files by listening for the data event because a stream is an event emitter
})