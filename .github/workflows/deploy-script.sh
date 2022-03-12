#!/bin/bash

apt-get update
apt-get -qq install git-ftp
# git config git.ftp.syncroot <origin-folder>
# git config git-ftp.url ftp://<dest-folder>
# git config git-ftp.user <ftp-user>
# git config git-ftp.password <ftp-password>
# git ftp push

# git ftp push --user $FTP_production_username --passwd $FTP_production_password $FTP_production_url

echo $username;
echo $server;
echo $port;
echo $ssh_private_key;
echo $local_path;
echo $remote_path;
echo $sftp_only;
echo $args;
