import sqlite3
import requests
import pprint
import json

def prep_data(toilet):
        prefix = "Öffentliche Toilette \""
        lat = toilet['latitude']
        long = toilet['longitude']
        name = toilet['bezeichnung']

        if name.startswith(prefix):
                name = name[len(prefix):-1]
        return (name, lat, long)


url = 'https://opendata.muenchen.de/api/3/action/datastore_search?resource_id=cc327030-a5e4-4a27-8a99-aaa8a5ab6200'  
resp = requests.get(url=url)
toilets = resp.json()['result']['records']

toilets = [(n,lat,long) for (n, lat, long) in map(prep_data, toilets)]

with open('sqlite_schema.sql', 'r') as sql_file:
    sql_script = sql_file.read()

db = sqlite3.connect("toilets.db")
cursor = db.cursor()
cursor.executescript(sql_script)

for (n,lat,long) in toilets:
        query = "INSERT INTO toilets VALUES (NULL,\"{}\", {}, {}, {});".format(n, lat, long, False)
        cursor.execute(query)

db.commit()

query = "SELECT * from toilets;"
res = cursor.execute(query)

db.close()
