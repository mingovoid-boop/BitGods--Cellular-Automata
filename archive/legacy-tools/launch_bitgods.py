#!/usr/bin/env python3
from pathlib import Path
import http.server, socketserver, threading, webbrowser, os
ROOT=Path(__file__).resolve().parents[1]/"client"
os.chdir(ROOT)
PORT=8080
class Handler(http.server.SimpleHTTPRequestHandler):
    pass
with socketserver.TCPServer(("127.0.0.1",PORT),Handler) as httpd:
    url=f"http://127.0.0.1:{PORT}/"
    print("BITGODS ALPHA")
    print("Serving:",url)
    threading.Timer(.6,lambda:webbrowser.open(url)).start()
    try:httpd.serve_forever()
    except KeyboardInterrupt:pass
