#!/bin/bash
# setup_vps.sh
# VPS Configuration and User Management Script

USERNAME="madhuramedical"
PASSWORD="Madhura@123"
WEB_DIR="/var/www/madhuramedical"

# Check if script is run as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root"
  exit
fi

# Create user with specified password
echo "Creating user $USERNAME..."
useradd -m -s /bin/bash $USERNAME
echo "$USERNAME:$PASSWORD" | chpasswd

# Setup Web Directory
echo "Setting up web directory at $WEB_DIR..."
mkdir -p $WEB_DIR
chown -R $USERNAME:www-data $WEB_DIR
chmod -R 755 $WEB_DIR

# Install Nginx and Certbot if not present
echo "Installing Nginx and Certbot..."
apt-get update
apt-get install -y nginx certbot python3-certbot-nginx

# Configure Nginx (Basic setup)
cat > /etc/nginx/sites-available/$USERNAME <<EOF
server {
    listen 80;
    server_name madhura-medical-equipments.com www.madhura-medical-equipments.com;
    
    root $WEB_DIR;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

ln -sf /etc/nginx/sites-available/$USERNAME /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

echo "VPS setup complete. User $USERNAME has been created and granted access to $WEB_DIR."
