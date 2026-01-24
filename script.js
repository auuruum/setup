// CONFIG - Edit this object to customize everything!
const CONFIG = {
    profile: {
        username: "AUURUUM",
        location: "Lithuania",
        flag: "🇱🇹",
        image: "https://i.ibb.co/hRtSbyDW/128x128.png"
    },
    socials: [
        { icon: "fa-brands fa-youtube", url: "https://youtube.com/@auurummm" },
        { icon: "fa-brands fa-twitch", url: "https://www.twitch.tv/auurummm" },
        { icon: "fa-brands fa-steam", url: "https://steamcommunity.com/id/auuruum/" },
        { icon: "https://www.svgrepo.com/show/330406/faceit.svg", url: "https://www.faceit.com/ru/players/aurimas42" },
        { icon: "bi bi-globe", url: "https://auuruum.me/" }
    ],
    gear: [
        {
            category: "MOUSE",
            name: "Logitech G Pro X Superlight 2 Black",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNnNURWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2ec90ad0db6aa206bf13b920f3ba74fe60682092/gallery-1-pro-x-superlight-2-gaming-mouse-black.png"
        },
        {
            category: "KEYBOARD",
            name: "MG7SS HE",
            image: "https://api.konect.gg/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBempUWFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e18a80a592d2ac838748e8ea284e79c8d151b182/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hSeVpYTnBlbVZmZEc5ZmJHbHRhWFJiQjJrQzlBRnBBdlFCIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--4a43f73be9eb68366704d8c3b619f2c564b76608/MG75-HE-Shine-Through-1-2000-2000.png"
        },
        {
            category: "HEADSET",
            name: "SteelSeries Arctis Nova Pro Wireless",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL0VaRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--772b68bfd39416bc15c4eb90d03d055e16e2bd3d/SteelSeries%20Arctis%20Nova%20Pro%20Wireless.webp"
        },
        {
            category: "MONITOR",
            name: "Dell Alienware AW2523HF 25",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNUVPRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f391d5765cd04f3f819fea86814a69f54f281ec7/Dell%20Alienware%20AW2523HF%2025.webp"
        },
        {
            category: "MONITOR",
            name: "Samsung C27F390 27",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN0VTRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--37609680146e399136da7d72684003782827b559/Samsung%20C27F390%2027.webp"
        },
        {
            category: "MONITOR",
            name: "Dell P2214H",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUFPRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--754365768a79e71c729b7ac84c420612fb4f14b9/Dell%20P2214H.webp"
        }
    ],
    specs: [
        {
            category: "CPU",
            name: "AMD Ryzen 7 7700X",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNmNjRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--99dadb6220998f91cc0b8f59cfb0de1680cab07e/AMD%20Ryzen%207%207700X.webp"
        },
        {
            category: "GPU",
            name: "Asus Dual GeForce RTX 4060 Ti 8GB",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBODRyRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d371b4feef09ed124144ce6168f64cea818630f6/Asus%20Dual%20GeForce%20RTX%204060%20Ti%208GB.webp"
        },
        {
            category: "RAM",
            name: "32GB DDR5",
            image: "fa-solid fa-question"
        },
        {
            category: "STREAM DECK",
            name: "Elgato Stream Deck",
            image: "https://api.konect.gg/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHFhIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7b052383419811429b4d2c0f1e4d2a84d8f99685/elgato%20stream%20deck.png"
        }
    ],
    ranks: [
        { 
            game: "CS2", 
            rank: "Loading...", 
            label: "Leetify Rating", 
            apiUrl: "https://api-public.cs-prod.leetify.com/v3/profile?steam64_id=76561198982669820",
            type: "cs2"
        },
        { 
            game: "Faceit", 
            rank: "Loading...", 
            label: "Level", 
            apiUrl: "https://api-public.cs-prod.leetify.com/v3/profile?steam64_id=76561198982669820",
            type: "faceit"
        },
        { 
            game: "Valorant", 
            rank: "Loading...", 
            label: "Rank", 
            // Change this to your public server IP when deploying
            apiUrl: "http://192.168.0.116:5000/valorant-rank",
            peakRank: "Loading...",
            type: "valorant" 
        },
        { game: "Deadlock", rank: "Phantom", label: "Rank", apiUrl: null }
    ],
    games: [
        {
            name: "CS2",
            settings: [
                { label: "Sensitivity", value: "0.95" },
                { label: "DPI", value: "800" },
                { label: "eDPI", value: "760" },
                { label: "Resolution", value: "1920x1080" },
                { label: "Aspect Ratio", value: "16:9" },
                { label: "Scaling Mode", value: "Native" },
                { label: "Crosshair", value: "CSGO-xxxxx-xxxxx" }
            ]
        },
        {
            name: "Valorant",
            settings: [
                { label: "Sensitivity", value: "0.38" },
                { label: "DPI", value: "800" },
                { label: "eDPI", value: "304" },
                { label: "Resolution", value: "1920x1080" },
                { label: "Crosshair Color", value: "White" }
            ]
        },
        {
            name: "Deadlock",
            settings: [
                { label: "Sensitivity", value: "1.2" },
                { label: "DPI", value: "800" },
                { label: "eDPI", value: "960" }
            ]
        }
    ]
};

// Initialize page
function init() {
    // Profile
    document.getElementById('username').textContent = CONFIG.profile.username;
    document.getElementById('location').textContent = CONFIG.profile.location;
    document.getElementById('profileImage').src = CONFIG.profile.image;

    // Social links
    const socialLinks = document.getElementById('socialLinks');
    CONFIG.socials.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'social-link';
        link.target = '_blank';
        
        // Check if icon is a URL (for custom SVG icons)
        if (social.icon.startsWith('http')) {
            const img = document.createElement('img');
            img.src = social.icon;
            img.alt = 'Social icon';
            link.appendChild(img);
        } else {
            // Font Awesome icon
            const icon = document.createElement('i');
            icon.className = social.icon;
            link.appendChild(icon);
        }
        
        socialLinks.appendChild(link);
    });

    // Gear
    const gearGrid = document.getElementById('gearGrid');
    CONFIG.gear.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gear-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="gear-image">
            <div class="gear-category">${item.category}</div>
            <div class="gear-name">${item.name}</div>
        `;
        gearGrid.appendChild(div);
    });

    // Specs
    const specsGrid = document.getElementById('specsGrid');
    CONFIG.specs.forEach(item => {
        const div = document.createElement('div');
        div.className = 'spec-item';
        
        // Check if image is a URL or Font Awesome icon
        let imageHtml;
        if (item.image.startsWith('http')) {
            imageHtml = `<img src="${item.image}" alt="${item.name}" class="spec-image">`;
        } else {
            // Font Awesome icon
            imageHtml = `<i class="${item.image} spec-image"></i>`;
        }
        
        div.innerHTML = `
            ${imageHtml}
            <div class="spec-category">${item.category}</div>
            <div class="spec-name">${item.name}</div>
        `;
        specsGrid.appendChild(div);
    });

    // Ranks
    const ranksGrid = document.getElementById('ranksGrid');
    CONFIG.ranks.forEach((rank, index) => {
        const div = document.createElement('div');
        div.className = 'rank-card';
        
        // Show peak rank for games that have it
        const peakRankHtml = rank.peakRank ? `<div class="rank-peak" id="rank-peak-${index}">Peak: ${rank.peakRank}</div>` : '';
        
        div.innerHTML = `
            <div class="rank-game">${rank.game}</div>
            <img class="rank-image" id="rank-image-${index}" style="display: none;" alt="${rank.game} Rank">
            <div class="rank-value" id="rank-value-${index}">${rank.rank}</div>
            <div class="rank-label">${rank.label}</div>
            ${peakRankHtml}
        `;
        ranksGrid.appendChild(div);
        
        // Fetch dynamic rank data if apiUrl is provided
        if (rank.apiUrl) {
            fetchRankData(rank.apiUrl, index);
        }
    });

    // Game settings
    const gameTabs = document.getElementById('gameTabs');
    const gameSettingsContainer = document.getElementById('gameSettingsContainer');

    CONFIG.games.forEach((game, index) => {
        // Create tab
        const tab = document.createElement('button');
        tab.className = 'game-tab' + (index === 0 ? ' active' : '');
        tab.textContent = game.name;
        tab.onclick = () => switchGame(index);
        gameTabs.appendChild(tab);

        // Create settings panel
        const panel = document.createElement('div');
        panel.className = 'game-settings' + (index === 0 ? ' active' : '');
        panel.id = `game-${index}`;

        const settingsGrid = document.createElement('div');
        settingsGrid.className = 'settings-grid';

        game.settings.forEach(setting => {
            const item = document.createElement('div');
            item.className = 'setting-item';
            item.innerHTML = `
                <span class="setting-label">${setting.label}</span>
                <span class="setting-value">${setting.value}</span>
            `;
            settingsGrid.appendChild(item);
        });

        panel.appendChild(settingsGrid);
        gameSettingsContainer.appendChild(panel);
    });
}

function switchGame(index) {
    // Update tabs
    document.querySelectorAll('.game-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });

    // Update panels
    document.querySelectorAll('.game-settings').forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
    });
}

// Fetch rank data from API
async function fetchRankData(apiUrl, rankIndex) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const rankConfig = CONFIG.ranks[rankIndex];
        
        if (rankConfig.type === 'cs2') {
            // Handle CS2/Leetify API response
            if (data && data.ranks) {
                const rankElement = document.getElementById(`rank-value-${rankIndex}`);
                
                // Update Leetify rating
                if (rankElement) {
                    rankElement.textContent = data.ranks.leetify ? data.ranks.leetify.toFixed(2) : 'N/A';
                }
                
                // Add additional CS2 stats
                const rankCard = rankElement?.closest('.rank-card');
                if (rankCard) {
                    // Remove existing stats if any
                    const existingStats = rankCard.querySelector('.cs2-stats');
                    if (existingStats) existingStats.remove();
                    
                    // Create stats container
                    const statsDiv = document.createElement('div');
                    statsDiv.className = 'cs2-stats';
                    
                    const premierRank = data.ranks.premier || 'Unranked';
                    const winrate = data.winrate ? (data.winrate * 100).toFixed(1) : 0;
                    
                    // Ratings
                    const aim = data.rating?.aim ? data.rating.aim.toFixed(1) : 'N/A';
                    const positioning = data.rating?.positioning ? data.rating.positioning.toFixed(1) : 'N/A';
                    const utility = data.rating?.utility ? data.rating.utility.toFixed(1) : 'N/A';
                    
                    statsDiv.innerHTML = `
                        <div class="cs2-stat-row">
                            <div class="cs2-stat-item"><strong>Premier:</strong> ${premierRank}</div>
                        </div>
                        <div class="cs2-stat-row">
                            <div class="cs2-stat-item"><strong>Winrate:</strong> ${winrate}%</div>
                        </div>
                        <div class="cs2-stat-divider">Ratings</div>
                        <div class="cs2-stat-row">
                            <div class="cs2-stat-item"><strong>Aim:</strong> ${aim}</div>
                            <div class="cs2-stat-item"><strong>Positioning:</strong> ${positioning}</div>
                            <div class="cs2-stat-item"><strong>Utility:</strong> ${utility}</div>
                        </div>
                    `;
                    
                    rankCard.appendChild(statsDiv);
                }
            }
        } else if (rankConfig.type === 'faceit') {
            // Handle Faceit data from Leetify API
            if (data && data.ranks) {
                const rankElement = document.getElementById(`rank-value-${rankIndex}`);
                const faceitLevel = data.ranks.faceit || 'N/A';
                const faceitElo = data.ranks.faceit_elo || '';
                
                if (rankElement) {
                    rankElement.textContent = `Level ${faceitLevel}`;
                }
                
                // Add ELO if available
                const rankCard = rankElement?.closest('.rank-card');
                if (rankCard && faceitElo) {
                    const existingStats = rankCard.querySelector('.cs2-stats');
                    if (existingStats) existingStats.remove();
                    
                    const statsDiv = document.createElement('div');
                    statsDiv.className = 'cs2-stats';
                    statsDiv.innerHTML = `
                        <div class="cs2-stat-row">
                            <div class="cs2-stat-item"><strong>ELO:</strong> ${faceitElo}</div>
                        </div>
                    `;
                    
                    rankCard.appendChild(statsDiv);
                }
            }
        } else if (rankConfig.type === 'valorant') {
            // Handle Valorant API response
            if (data.status === 200 && data.data) {
                // Update current rank
                const currentRank = data.data.current_data?.currenttierpatched || 'Unknown';
                const rankElement = document.getElementById(`rank-value-${rankIndex}`);
                if (rankElement) {
                    rankElement.textContent = currentRank;
                }
                
                // Update rank image
                const rankImage = data.data.current_data?.images?.large || data.data.current_data?.images?.small;
                const imgElement = document.getElementById(`rank-image-${rankIndex}`);
                if (imgElement && rankImage) {
                    imgElement.src = rankImage;
                    imgElement.style.display = 'block';
                }
                
                // Update peak rank if it exists
                const peakRank = data.data.highest_rank?.patched_tier || null;
                if (peakRank) {
                    const peakElement = document.getElementById(`rank-peak-${rankIndex}`);
                    if (peakElement) {
                        peakElement.textContent = `Peak: ${peakRank}`;
                    }
                }
            }
        }
    } catch (error) {
        console.error('Failed to fetch rank data:', error);
        const rankElement = document.getElementById(`rank-value-${rankIndex}`);
        if (rankElement) {
            rankElement.textContent = 'Error loading';
        }
    }
}

init();
