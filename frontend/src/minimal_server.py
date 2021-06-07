from typing import Optional
from fastapi import FastAPI
from flask import Flask, render_template, request
app = Flask(__name__)

# array=[]
# @app.route("/",methods=['GET'])
# def root():
#     input = request.args.get("data","")
#     array.append(input)
#     return render_template("test",name="1233")

@app.route("/")
def index():
    return render_template("test")

if __name__ == "__main__":    
	app.run(port="3000")