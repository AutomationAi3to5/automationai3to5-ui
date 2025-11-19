#!/bin/bash

# Start Vite dev server in background
(cd react-ui && npm run dev) &
VITE_PID=$!

# Wait for Vite to be ready
sleep 3

# Start Express server
node server.js

# Kill Vite on exit
trap "kill $VITE_PID" EXIT
