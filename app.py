#https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates

from flask import Flask, jsonify, request, render_template

#__name__ of script file
app = Flask(__name__)

#first view function
#any view that is specified must be decorated by app.route to be a functional part of the app
@app.route('/')
def index():
    user = {'name' : 'Sample Name'}
    return render_template("index.html", title = 'Shopping List', user=user)

#https://towardsdatascience.com/talking-to-python-from-javascript-flask-and-the-fetch-api-e0ef3573c451
@app.route('/test', methods=['GET', 'POST'])
def testfn():
    # GET request
    if request.method == 'GET':
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers
    # POST request
    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        return 'Sucesss', 200

app.run()