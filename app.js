//Events and the events emitter
//Events: something that has happened in our app that we can respond to

//In node we talk about two different kind of events

//:::1- system events : c++ core libuv
//eg. 'I've finished reading a file', 'the file is open', 'I've received date from the internet'. These are things that javascript doesnt have, c++ wrapping on the javascript engine means we can now access those events

//:::2- custom events : Javascript core | Event emmitter(custom events)
//A javascript library of events 
//C++ core libuv sends lower level events to the javascript core(event emitter)

//often times when an event happens in libuv it generates a custom event for the javascript engine so we can make use of it. thats what it's there for however it is important to make the distinction between the two..

// JS side is faking it, there is not real eventing or event object. create our own event library.
