from flask import Flask, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import requests
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Rate limiting - max 60 requests per minute per IP
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["60 per minute"],
    storage_uri="memory://"
)

# Get API key from environment variable
HENRIK_API_KEY = os.getenv('HENRIK_API_KEY')

# Cache settings
CACHE_DURATION_MINUTES = 5  # Cache data for 5 minutes
cache = {
    'data': None,
    'timestamp': None
}

def is_cache_valid():
    """Check if cached data is still valid"""
    if cache['data'] is None or cache['timestamp'] is None:
        return False
    
    time_elapsed = datetime.now() - cache['timestamp']
    return time_elapsed < timedelta(minutes=CACHE_DURATION_MINUTES)

@app.route('/valorant-rank', methods=['GET'])
@limiter.limit("30 per minute")  # Extra protection: max 30 req/min per IP
def get_valorant_rank():
    """Fetch Valorant rank data from Henrik API with caching"""
    try:
        # Return cached data if still valid
        if is_cache_valid():
            return jsonify(cache['data']), 200
        
        # Make request to Henrik API with your secret key
        response = requests.get(
            'https://api.henrikdev.xyz/valorant/v2/mmr/eu/aurum/6570',
            headers={'Authorization': HENRIK_API_KEY},
            timeout=10
        )
        
        # Get the data
        data = response.json()
        
        # Update cache
        if response.status_code == 200:
            cache['data'] = data
            cache['timestamp'] = datetime.now()
        
        return jsonify(data), response.status_code
        
    except requests.exceptions.Timeout:
        # Return cached data if available, even if expired
        if cache['data']:
            return jsonify(cache['data']), 200
        return jsonify({'error': 'API request timeout'}), 504
        
    except Exception as e:
        # Return cached data if available on error
        if cache['data']:
            return jsonify(cache['data']), 200
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    # Run on all interfaces so it's accessible from outside
    app.run(host='0.0.0.0', port=5000, debug=False)
