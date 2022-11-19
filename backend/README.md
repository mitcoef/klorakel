```
python3 -m venv venv-app
source venv-app/bin/activate
pip install -r requirements.txt
gunicorn wsgi:app
```