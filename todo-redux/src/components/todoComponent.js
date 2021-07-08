import React from 'react'

const Todo = () => {
    return (
        <>
        <html lang="en-us">
        <head>
            <meta charset="UTF-8" />
            <title>ToDo Redux</title>
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            />
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <script src="https://code.jquery.com/jquery.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </head>
        
        <body>
            <div class="container">
                <div class="jumbotron">
                    <h1>Tasks to do</h1>
                </div>
                <div class="row">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Add a task"></input>
                        <button type="button" class="btn btn-dark m-2"><i className="fa fa-plus add-btn"></i></button>
                    </div>
                </div>
            </div>
        </body>
        </html>
    
        </>
      )
}
  
  export default Todo