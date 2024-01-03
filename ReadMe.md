# in the backend, from the auth.controller we obtained the username,email,password in the req.body.
=> Then it will be saved in a function called newUser from user.model. Then newUser was saved using newUser.save().
using the .save() will be slow on saving the user's details so we had to put an await in the code line await newUser.save(){so the code will stay in this line until it finishes before going to the next line} and the whole function had to be changed from a synchronous function to an unsynchronous function using the (async).
Then a res.status().json was sent to the browser to indicate if the user was created successfully.
=> We then created a middleware solely for handling errors this method prevents to many api routes in our code. so creating the middleware in the server takes 4 parameters (err, req, res, next). we create a statusCode
#  we add a proxy in the vite config so that when we fetch the data from the user input it goes directly to the link specified
<!-- we changed the formData to a string -->