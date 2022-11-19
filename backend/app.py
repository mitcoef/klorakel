from flask import Flask, g, request
import sqlite3
import pprint
import json

app = Flask(__name__, static_url_path='/static')


def connect_db():
        db = sqlite3.connect("toilets.db")
        return db

@app.route('/')
def home():
        return "Nothing here"

@app.route('/existingKlos', methods = ["GET"])
def existing():
        db = connect_db()
        cursor = db.cursor()
        query = "SELECT * from toilets;"
        res = cursor.execute(query)

        res2 = (json.dumps(res.fetchall()))
        db.close()
        return res2

@app.route('/requestedKlos', methods = ["GET"])
def requested():
        db = connect_db()
        cursor = db.cursor()
        query = "SELECT * from toilets WHERE requested = TRUE;"
        res = cursor.execute(query)

        res2 = (json.dumps(res.fetchall()))
        db.close()
        return res2

@app.route('/newRequest', methods = ["POST"])
def request():
        pass