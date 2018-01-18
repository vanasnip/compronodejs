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

//sockets the connection between two pcs