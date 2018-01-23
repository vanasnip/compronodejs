module.exports = function(app){
    app.get('/api/person', function(req, res){
        //get that data from the database
    })
    
    app.post('/api/person', function(req, res){
        //save that data to the database
    });
    
    app.delete('/api/person', function(req, res){
        //delete that data to the database
    });
}