time for i in {1..2000}; do
    seq 1000 | parallel -n0 -j5  "curl -H 'Content-Type: application/json' https://google.com --insecure -m 1000"
  done