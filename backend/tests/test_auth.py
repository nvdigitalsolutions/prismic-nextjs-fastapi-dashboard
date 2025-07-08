import os
import sys
from pathlib import Path

os.environ.setdefault("DATABASE_URL", "sqlite:///./test.db")
os.environ.setdefault("SECRET_KEY", "testsecret")

sys.path.append(str(Path(__file__).resolve().parents[1]))

from fastapi.testclient import TestClient
import main

client = TestClient(main.app)


def test_login_bad_credentials():
    response = client.post("/token", data={"username": "foo", "password": "bar"})
    assert response.status_code == 400
