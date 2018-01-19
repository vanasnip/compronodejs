//::HTTP and being a web server
//protocol: a set of rules that two sides aggree on when communicating, so the server and the client are programmed to understand

//how do the client and server identify each other
//thats where tcp and ip come in.
//socket is where the information flow through

//the way the info is sent is TCP 
//all travelling from computer to computer using internet protocal to identify

//how do we send that information, http, ftp and smtp
//not just how the information is structured
// the was that information is sent is called TCP
//Transmition control protocol

//TCP is what says we will take that information, however its structured and split it into pieces and send those pieces one at a time through the socket. Each piece is called a packet.

//the act of separating out whatever protocol construct into little peices and sending it through the wire is called TCP.

//Because we need IP to know where to send them, we typically refer to these together TCP IP

//This resembles streams in node and indeed node does treat this process as such. more to come on this.

//sockets the connection between two pcs, specifically the end

//Ports, once the computer recieves a packet, a port is how it knows what program to send it to. It is said that the program is listening to that port
// the port is specifed as part of the address

// 78.132.160.4:443 // https://www.google.com
//the whole thing is know as the socket address
// 78.132.160.4 is the ip and 443 is the port


//http - hypertext markup language, the format of the information being sent is http

//simplified eg of a HTTP request
//CONNECT www.google.com:443 HTTP/1.1
//Host:www.google.com
//Connection: keep-alive

//simplified eg of a HTTP request
//status //HTTP/1.1 200 OK
//headers//Content-Length: 44
//       //Content-Type:text/html <<MIME type|||||
                    // Multipurpose internet main extensions
                    // A standard for specifying the type of data being sent. image/jpeg, application/json
//body   //<html><head> ...</head></html>

// in general these are called headers

//this is just a protocol that both the client and the server are programmed to use.