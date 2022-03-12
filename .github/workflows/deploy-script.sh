#!/bin/bash

apt-get update
apt-get -qq install git-ftp
# git config git.ftp.syncroot <origin-folder>
# git config git-ftp.url ftp://<dest-folder>
# git config git-ftp.user <ftp-user>
# git config git-ftp.password <ftp-password>
# git ftp push

# git ftp push --user $FTP_production_username --passwd $FTP_production_password $FTP_production_url

echo $DEPLOY_USERNAME;
echo $DEPLOY_SERVER;
echo $DEPLOY_PORT;
echo $DEPLOY_SSH_PRIVATE_KEY;
echo $DEPLOY_LOCAL_PATH;
echo $DEPLOY_REMOTE_PATH;
