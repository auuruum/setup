# Python Proxy Server for Valorant Rank

## Setup on Your Server

### 1. Install Python 3.8+
Make sure Python is installed on your server.

### 2. Install Dependencies
```bash
cd proxy-server
pip install -r requirements.txt
```

### 3. Configure API Key
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your actual API key
nano .env
```

Replace `your_api_key_here` with your actual Henrik API key.

### 4. Run the Server

#### Development (testing):
```bash
python app.py
```

#### Production (recommended with gunicorn):
```bash
# Install gunicorn
pip install gunicorn

# Run with gunicorn (more stable for production)
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

#### Run in background (with nohup):
```bash
nohup python app.py > server.log 2>&1 &
```

#### Or use systemd (recommended for production):
Create `/etc/systemd/system/valorant-proxy.service`:
```ini
[Unit]
Description=Valorant Rank Proxy Server
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/path/to/proxy-server
Environment="PATH=/usr/bin:/usr/local/bin"
ExecStart=/usr/bin/python3 /path/to/proxy-server/app.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Then:
```bash
sudo systemctl daemon-reload
sudo systemctl start valorant-proxy
sudo systemctl enable valorant-proxy
```

### 5. Test the Server
```bash
# Test locally
curl http://localhost:5000/health

# Test the rank endpoint
curl http://localhost:5000/valorant-rank
```

### 6. Setup Firewall (if needed)
```bash
# Allow port 5000
sudo ufw allow 5000/tcp
```

### 7. Update Your GitHub Pages Site
In `script.js`, change the apiUrl to your server:
```javascript
apiUrl: "http://your-server-ip:5000/valorant-rank",
```

Or if you have a domain:
```javascript
apiUrl: "https://api.yourdomain.com/valorant-rank",
```

## Using with Nginx (Recommended)

If you want to use HTTPS and a proper domain:

### 1. Install Nginx
```bash
sudo apt install nginx
```

### 2. Configure Nginx
Create `/etc/nginx/sites-available/valorant-proxy`:
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location /valorant-rank {
        proxy_pass http://localhost:5000/valorant-rank;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        
        # CORS headers
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, OPTIONS';
    }
}
```

### 3. Enable and restart Nginx
```bash
sudo ln -s /etc/nginx/sites-available/valorant-proxy /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Add SSL with Let's Encrypt (optional but recommended)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d api.yourdomain.com
```

## Security Notes
- Never commit `.env` file to GitHub!
- The `.env.example` is safe to commit
- Your API key stays secure on your server
- Consider adding rate limiting if needed
