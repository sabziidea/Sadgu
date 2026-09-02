#!/usr/bin/env python3
"""Start Flowly locally and open it in the default browser."""

from __future__ import annotations

import contextlib
import http.server
import os
from pathlib import Path
import socket
import socketserver
import threading
import webbrowser


HOST = "127.0.0.1"
PREFERRED_PORT = 4173
PROJECT_DIR = Path(__file__).resolve().parent


def available_port() -> int:
    """Use Flowly's default port, or ask the OS for a free one if it is busy."""
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as probe:
        try:
            probe.bind((HOST, PREFERRED_PORT))
        except OSError:
            probe.bind((HOST, 0))
        return probe.getsockname()[1]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: object) -> None:
        return


def main() -> None:
    os.chdir(PROJECT_DIR)
    port = available_port()
    url = f"http://{HOST}:{port}/"

    with socketserver.TCPServer((HOST, port), QuietHandler) as server:
        print("\n  Flowly is ready")
        print(f"  Open: {url}")
        print("  Keep this window open. Press Ctrl+C to stop.\n")
        threading.Timer(0.5, lambda: webbrowser.open(url)).start()
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\n  Flowly stopped.")


if __name__ == "__main__":
    main()
