# Setup
```
python3 -m venv venv_app
source venv_app/bin/activate
pip install -r requirements.txt
python3 create_db.py
```
# Running
```
gunicorn wsgi:app
```
