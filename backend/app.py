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

        reslist = ([{"id":row[0], "name":row[1], "lat":row[2], "long":row[3], "req":row[4]} 
                for row in res.fetchall()])

        db.close()

        return json.dumps(reslist)

@app.route('/requestedKlos', methods = ["GET"])
def requested():
        db = connect_db()
        cursor = db.cursor()
        query = "SELECT * from toilets WHERE requested = TRUE;"
        res = cursor.execute(query)

        reslist = ([{"id":row[0], "name":row[1], "lat":row[2], "long":row[3], "req":row[4]} 
                for row in res.fetchall()])
        db.close()
        return json.dumps(reslist)

@app.route('/newRequest', methods = ["POST"])
def req():
        db = connect_db()
        cursor = db.cursor()
        data = request.get_json(force=True)

        query = "INSERT INTO toilets VALUES (NULL,\"{}\", {}, {}, {});".format(
                data['name'], data['lat'], data['long'], data['req'])

        cursor.execute(query)
        db.commit()
        db.close()
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 
