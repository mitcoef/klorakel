```
python3 -m venv venv-app
python3 create_db.py
source venv-app/bin/activate
pip install -r requirements.txt
gunicorn wsgi:app
```