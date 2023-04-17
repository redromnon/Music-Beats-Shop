#This script is purely for testing

from flask import Flask, request

api = Flask(__name__)

@api.route('/profile', methods=["GET", "POST"])
def my_profile():
        
    if request.method == "GET":
        response_body = {
            "name": "Rishabh",
            "about" :"Hello! I'm a full stack developer that loves python and javascript"
        }

        return response_body
    else:
        response_body = {
            "name": f"{request.args.get('name')}",
            "about" :"Hello! I'm a full stack developer that loves python and javascript"
        }

'''
How to define POST method:
- Add methods arg to route() where method=["GET", "POST"]
- Use request class to get the passed variable (value) 
  from frontend and store in a (key)
  Eg) Below 'text' is the key and whatever value is sent 
  from frontend is the value
'''
@api.route('/tagline', methods=["GET", "POST"])
def tagline():
    
    word = request.args.get('text')
    
    return f'You wanted {word}, right?'
