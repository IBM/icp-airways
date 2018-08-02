#!/bin/bash

if [ "${PWD##*/}" == "create" ]; then
	:
elif [ "${PWD##*/}" == "scripts" ]; then
	:
else
    echo "Please run the script from 'scripts' or 'scripts/create' folder"
fi

# echo ""
# echo "=> CREATE_ALL: Creating storage"
# create/create_storage.sh $@

echo ""
echo "=> CREATE_ALL: Creating blockchain"
create/create_blockchain.sh $@

echo ""
echo "=> CREATE_ALL: Running Create Channel"
PEER_MSPID="Org1MSP" CHANNEL_NAME="channel1" create/create_channel.sh

echo ""
echo "=> CREATE_ALL: Running Join Channel on Org1 Peer1"
CHANNEL_NAME="channel1" PEER_MSPID="Org1MSP" PEER_ADDRESS="blockchain-org1peer0:30110" MSP_CONFIGPATH="/shared/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp" CORE_PEER_TLS_ROOTCERT_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/ca.crt" CORE_PEER_TLS_KEY_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/server.key" CORE_PEER_TLS_CERT_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/server.crt" create/join_channel.sh

echo "=> CREATE_ALL: Running Join Channel on Org2 Peer1"
CHANNEL_NAME="channel1" PEER_MSPID="Org2MSP" PEER_ADDRESS="blockchain-org2peer0:30210" MSP_CONFIGPATH="/shared/crypto-config/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp" CORE_PEER_TLS_ROOTCERT_FILE="/shared/crypto-config/peerOrganizations/org2.example.com/peers/blockchain-org2peer0.org2.example.com/tls/ca.crt" CORE_PEER_TLS_KEY_FILE="/shared/crypto-config/peerOrganizations/org2.example.com/peers/blockchain-org2peer0.org2.example.com/tls/server.key" CORE_PEER_TLS_CERT_FILE="/shared/crypto-config/peerOrganizations/org2.example.com/peers/blockchain-org2peer0.org2.example.com/tls/server.crt" create/join_channel.sh

echo ""
echo "=> CREATE_ALL: Running Install Chaincode on Org1 Peer1"
CHAINCODE_NAME="example02" CHAINCODE_VERSION="v1" MSP_CONFIGPATH="/shared/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp"  PEER_MSPID="Org1MSP" PEER_ADDRESS="blockchain-org1peer0:30110" CORE_PEER_TLS_ROOTCERT_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/ca.crt" CORE_PEER_TLS_KEY_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/server.key" CORE_PEER_TLS_CERT_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/server.crt" create/chaincode_install.sh

echo ""
echo "=> CREATE_ALL: Running Install Chaincode on Org2 Peer1"
CHAINCODE_NAME="example02" CHAINCODE_VERSION="v1" MSP_CONFIGPATH="/shared/crypto-config/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp"  PEER_MSPID="Org2MSP" PEER_ADDRESS="blockchain-org2peer0:30210" CORE_PEER_TLS_ROOTCERT_FILE="/shared/crypto-config/peerOrganizations/org2.example.com/peers/blockchain-org2peer0.org2.example.com/tls/ca.crt" CORE_PEER_TLS_KEY_FILE="/shared/crypto-config/peerOrganizations/org2.example.com/peers/blockchain-org2peer0.org2.example.com/tls/server.key" CORE_PEER_TLS_CERT_FILE="/shared/crypto-config/peerOrganizations/org2.example.com/peers/blockchain-org2peer0.org2.example.com/tls/server.crt" create/chaincode_install.sh

echo ""
echo "=> CREATE_ALL: Running instantiate chaincode on channel \"channel1\" using \"Org1MSP\""
CHANNEL_NAME="channel1" CHAINCODE_NAME="example02" CHAINCODE_VERSION="v1" MSP_CONFIGPATH="/shared/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp"  PEER_MSPID="Org1MSP" PEER_ADDRESS="blockchain-org1peer0:30110" CORE_PEER_TLS_ROOTCERT_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/ca.crt" CORE_PEER_TLS_KEY_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/server.key" CORE_PEER_TLS_CERT_FILE="/shared/crypto-config/peerOrganizations/org1.example.com/peers/blockchain-org1peer0.org1.example.com/tls/server.crt" create/chaincode_instantiate.sh
