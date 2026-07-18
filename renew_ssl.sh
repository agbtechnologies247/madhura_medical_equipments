#!/bin/bash
# renew_ssl.sh
# Single click script to renew SSL certificates

echo "Stopping Nginx to free up port 80..."
systemctl stop nginx

echo "Renewing SSL certificates with Certbot..."
certbot renew

echo "Starting Nginx..."
systemctl start nginx

echo "SSL renewal process completed."
