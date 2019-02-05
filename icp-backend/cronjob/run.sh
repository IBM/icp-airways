# siege -c 50 -r 10 -b http://loginsvc.icp-airways:3003/healthz
# siege -c 50 -r 800 -b http://mapsvc.icp-airways:3016/healthz
# siege -c 50 -r 800 -b http://odmsvc.icp-airways:3005/healthz
# siege -c 50 -r 800 -b http://bookingsvc.icp-airways:3000/healthz
# siege -c 50 -r 800 -b http://listingsvc.icp-airways:7000/healthz
while true; do echo hello; sleep 10;done
