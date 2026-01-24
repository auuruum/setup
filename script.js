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

        // Add video settings if they exist
        if (game.videoSettings) {
            const divider = document.createElement('div');
            divider.className = 'setting-divider';
            divider.textContent = 'VIDEO SETTINGS';
            settingsGrid.appendChild(divider);

            Object.entries(game.videoSettings).forEach(([key, value]) => {
                const item = document.createElement('div');
                item.className = 'setting-item';
                // Convert camelCase to Title Case
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                item.innerHTML = `
                    <span class="setting-label">${label}</span>
                    <span class="setting-value">${value}</span>
                `;
                settingsGrid.appendChild(item);
            });
        }

        // Add game settings if they exist
        if (game.gameSettings) {
            const divider = document.createElement('div');
            divider.className = 'setting-divider';
            divider.textContent = 'GAME SETTINGS';
            settingsGrid.appendChild(divider);

            Object.entries(game.gameSettings).forEach(([key, value]) => {
                const item = document.createElement('div');
                item.className = 'setting-item';
                // Convert camelCase to Title Case
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                item.innerHTML = `
                    <span class="setting-label">${label}</span>
                    <span class="setting-value">${value}</span>
                `;
                settingsGrid.appendChild(item);
            });
        }

        // Add crosshair settings if they exist
        if (game.crosshair) {
            // Add a divider before crosshair settings
            const divider = document.createElement('div');
            divider.className = 'setting-divider';
            divider.textContent = 'CROSSHAIR';
            settingsGrid.appendChild(divider);

            // Convert crosshair object to display format
            const crosshairSettings = [
                { label: 'Themed Hero Reticles', value: game.crosshair.themedHeroReticles ? 'Yes' : 'No' },
                { label: 'Reticle Motion', value: game.crosshair.reticleMotion ? 'Yes' : 'No' },
                { label: 'Line Width', value: game.crosshair.lineWidth },
                { label: 'Line Height', value: game.crosshair.lineHeight },
                { label: 'Line Gap', value: game.crosshair.lineGap },
                { label: 'Line Opacity', value: game.crosshair.lineOpacity },
                { label: 'Line Border', value: game.crosshair.lineBorder },
                { label: 'Line Border Gap', value: game.crosshair.lineBorderGap },
                { label: 'Line Border Opacity', value: game.crosshair.lineBorderOpacity },
                { label: 'Dot Size', value: game.crosshair.dotSize },
                { label: 'Dot Opacity', value: game.crosshair.dotOpacity },
                { label: 'Dot Border', value: game.crosshair.dotBorder },
                { label: 'Dot Border Gap', value: game.crosshair.dotBorderGap },
                { label: 'Dot Border Opacity', value: game.crosshair.dotBorderOpacity }
            ];

            crosshairSettings.forEach(setting => {
                const item = document.createElement('div');
                item.className = 'setting-item';
                item.innerHTML = `
                    <span class="setting-label">${setting.label}</span>
                    <span class="setting-value">${setting.value}</span>
                `;
                settingsGrid.appendChild(item);
            });
        }

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
        const rankConfig = CONFIG.ranks[rankIndex];
        
        // Handle different response types
        let data;
        if (rankConfig.type === 'deadlock') {
            data = await response.text();
        } else {
            data = await response.json();
        }
        
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
                            <div class="cs2-stat-item"><strong>Premier</strong> ${premierRank}</div>
                            <div class="cs2-stat-item"><strong>Winrate</strong> ${winrate}%</div>
                        </div>
                        <div class="cs2-stat-divider">Ratings</div>
                        <div class="cs2-stat-row">
                            <div class="cs2-stat-item"><strong>Aim</strong> ${aim}</div>
                            <div class="cs2-stat-item"><strong>Positioning</strong> ${positioning}</div>
                            <div class="cs2-stat-item"><strong>Utility</strong> ${utility}</div>
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
                            <div class="cs2-stat-item"><strong>ELO</strong> ${faceitElo}</div>
                        </div>
                    `;
                    
                    rankCard.appendChild(statsDiv);
                }
            }
        } else if (rankConfig.type === 'deadlock') {
            // Handle Deadlock API response
            if (data) {
                // API returns text in format: "rank\nleaderboard_place"
                const lines = data.trim().split('\n');
                const rank = lines[0] || 'Unknown';
                const leaderboardPlace = lines[1] || 'N/A';
                
                const rankElement = document.getElementById(`rank-value-${rankIndex}`);
                if (rankElement) {
                    rankElement.textContent = rank;
                }
                
                // Add leaderboard place
                const rankCard = rankElement?.closest('.rank-card');
                if (rankCard) {
                    const existingStats = rankCard.querySelector('.cs2-stats');
                    if (existingStats) existingStats.remove();
                    
                    const statsDiv = document.createElement('div');
                    statsDiv.className = 'cs2-stats';
                    statsDiv.innerHTML = `
                        <div class="cs2-stat-row">
                            <div class="cs2-stat-item"><strong>Leaderboard</strong> ${leaderboardPlace}</div>
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
        console.error(`Failed to fetch rank data for ${CONFIG.ranks[rankIndex].game}:`, error);
        const rankElement = document.getElementById(`rank-value-${rankIndex}`);
        if (rankElement) {
            rankElement.textContent = 'Error loading';
        }
    }
}

init();
