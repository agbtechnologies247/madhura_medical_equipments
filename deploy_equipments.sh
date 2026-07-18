#!/bin/bash
# deploy_equipments.sh
# Deployment script for Madhura Medical Equipments Next.js App

VPS_USER="root"
VPS_IP="82.29.164.106"
WEB_DIR="/var/www/madhuramedical"

echo "Building Next.js app for production..."
npm run build

# Ensure static export is configured in next.config.mjs
echo "Deploying to VPS at $VPS_IP..."
rsync -avz --delete out/ $VPS_USER@$VPS_IP:$WEB_DIR

echo "Deployment complete!"
