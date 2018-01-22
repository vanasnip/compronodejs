//RESTful APIs and JSON
//REST: is an architechural style for building APIs
//Representational state transfer : this mean that when we handle http requests we decide that the HTTP verbs and URLs mean something

//Standardise the way of using the http requests, so when they are sent, when you read them they match whats happening

//the follwoing demonstrates the idea of a restful api where the verbs or url describe whats going on

//having a restful api means that you design the use of your verbs such they respond in a way that is expected

//you also look at the url and understand what its doing 

//for example below, looking at app.get and the url person, its speaking about getting a person. same goes for app.post url: person etc

// Its very easy building basic rest APIs with 
app.get('/api/person', function(req, res){
    //get that data from the database
})

app.post('/api/person', function(req, res){
    //save that data to the database
});

app.delete('/api/person', function(req, res){
    //delete that data to the database
});
app.listen(port);