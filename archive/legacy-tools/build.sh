#!/usr/bin/env sh
set -eu
python3 "$(dirname "$0")/validate.py"
echo "BitGods bundle validation complete."
