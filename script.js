const DEADLOCK_RANK_NAMES = [
    'Obscurus', 'Initiate', 'Seeker', 'Acolyte', 'Sentinel', 'Mystic',
    'Ritualist', 'Emissary', 'Oracle', 'Phantom', 'Ascendant', 'Eternus'
];

// ---------- DOM helpers (text only, never innerHTML) ----------

// el('div', { className: 'x', text: 'hi', id: 'y' }, [child, 'text', null])
function el(tag, props = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
        if (value === undefined || value === null || value === false) return;
        if (key === 'className') node.className = value;
        else if (key === 'text') node.textContent = value;
        else node.setAttribute(key, value === true ? '' : value);
    });
    children.forEach(child => {
        if (child === null || child === undefined) return;
        node.append(child instanceof Node ? child : String(child));
    });
    return node;
}

// "fa-solid fa-question" is an icon class; URLs and paths like "assets/x.png" are images
function isImageSource(value) {
    return /^(https?:|data:|\/|\.)/i.test(value) || value.includes('/') ||
        /\.(png|jpe?g|webp|gif|svg|avif)(\?.*)?$/i.test(value);
}

// Image or icon-font element for a config "image"/"icon" value
function media(source, alt, className) {
    if (isImageSource(source)) {
        return el('img', { src: source, alt, className, loading: 'lazy', decoding: 'async' });
    }
    return el('i', { className: `${source} ${className}`.trim(), 'aria-hidden': 'true' });
}

// A real link when there is a URL (middle-click, keyboard, SEO), a plain div otherwise
function card(url, props, children) {
    if (!url) return el('div', props, children);
    return el('a', { ...props, href: url, target: '_blank', rel: 'noopener noreferrer' }, children);
}

// "nvidiaReflexLowLatency" -> "Nvidia Reflex Low Latency"
function camelToTitle(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
}

function formatValue(value) {
    if (value === true) return 'Yes';
    if (value === false) return 'No';
    return value;
}

// ---------- Profile ----------

function renderProfile() {
    const { profile, socials } = CONFIG;
    document.getElementById('username').textContent = profile.username;
    document.getElementById('location').textContent = profile.location;
    document.getElementById('profileImage').src = profile.image;
    const profileFlag = document.getElementById('profileFlag');
    if (profileFlag && profile.flagImage) {
        profileFlag.src = profile.flagImage;
    }

    const socialLinks = document.getElementById('socialLinks');
    socials.forEach(social => {
        const name = social.name || socialName(social);
        const link = card(social.url, { className: 'social-link', 'aria-label': name, title: name }, [
            media(social.icon, '', '')
        ]);
        socialLinks.append(link);
    });
}

// Readable name for a social link, from its icon class or domain
function socialName(social) {
    const brand = social.icon.match(/fa-(youtube|twitch|steam|discord|x-twitter|twitter|instagram|tiktok|github)/);
    if (brand) return camelToTitle(brand[1]);
    try {
        const host = new URL(social.url).hostname.replace(/^www\./, '');
        return host.split('.')[0].replace(/^./, s => s.toUpperCase());
    } catch {
        return 'Link';
    }
}

// ---------- Gear & specs ----------

function renderItems(gridId, items, prefix) {
    const grid = document.getElementById(gridId);
    items.forEach(item => {
        grid.append(card(item.url, { className: `${prefix}-item` }, [
            media(item.image, item.name, `${prefix}-image`),
            el('div', { className: `${prefix}-category`, text: item.category }),
            el('div', { className: `${prefix}-name`, text: item.name })
        ]));
    });
}

// ---------- Ranks ----------

function renderRanks() {
    const ranksGrid = document.getElementById('ranksGrid');
    CONFIG.ranks.forEach((rank, index) => {
        const image = rank.rankImage
            ? el('img', { className: 'rank-image', src: rank.rankImage, alt: `${rank.game} rank` })
            : el('img', { className: 'rank-image', id: `rank-image-${index}`, alt: `${rank.game} rank`, hidden: true });

        ranksGrid.append(card(rank.openProfileUrl, { className: 'rank-card' }, [
            el('div', { className: 'rank-game', text: rank.game }),
            image,
            el('div', { className: 'rank-value', id: `rank-value-${index}`, text: rank.rank }),
            el('div', { className: 'rank-label', text: rank.label }),
            rank.peakRank ? el('div', { className: 'rank-peak', id: `rank-peak-${index}`, text: `Peak: ${rank.peakRank}` }) : null
        ]));

        if (rank.apiUrl) {
            fetchRankData(rank.apiUrl, index);
            if (rank.refreshInterval) {
                window.setInterval(() => fetchRankData(rank.apiUrl, index), rank.refreshInterval);
            }
        }
    });
}

// ---------- Game settings ----------

async function copyText(value) {
    try {
        await navigator.clipboard.writeText(value);
        return true;
    } catch {
        // Fallback for browsers/contexts without the async clipboard API
        const area = el('textarea', { readonly: true, 'aria-hidden': 'true' });
        area.value = value;
        area.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
        document.body.append(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        return ok;
    }
}

function copyButton(value) {
    const button = el('button', { type: 'button', className: 'copy-button', 'aria-label': 'Copy to clipboard', title: 'Copy' }, [
        el('i', { className: 'fa-regular fa-copy', 'aria-hidden': 'true' })
    ]);
    button.addEventListener('click', async () => {
        const icon = button.querySelector('i');
        if (await copyText(value)) {
            icon.className = 'fa-solid fa-check';
            button.classList.add('copied');
        } else {
            icon.className = 'fa-solid fa-xmark';
        }
        setTimeout(() => {
            icon.className = 'fa-regular fa-copy';
            button.classList.remove('copied');
        }, 1500);
    });
    return button;
}

function settingRow({ label, value, copy }) {
    return el('div', { className: 'setting-item' }, [
        el('span', { className: 'setting-label', text: label }),
        el('span', { className: 'setting-value-wrap' }, [
            el('span', { className: 'setting-value', text: formatValue(value) }),
            copy ? copyButton(String(value)) : null
        ])
    ]);
}

// Extra sections stored as objects: { camelCaseKey: value }
const SETTING_SECTIONS = [
    ['videoSettings', 'VIDEO SETTINGS'],
    ['gameSettings', 'GAME SETTINGS'],
    ['crosshair', 'CROSSHAIR']
];

function renderGames() {
    const gameTabs = document.getElementById('gameTabs');
    const container = document.getElementById('gameSettingsContainer');

    CONFIG.games.forEach((game, index) => {
        const active = index === 0;
        const tab = el('button', {
            type: 'button',
            className: 'game-tab' + (active ? ' active' : ''),
            'aria-pressed': String(active),
            text: game.name
        });
        tab.addEventListener('click', () => switchGame(index));
        gameTabs.append(tab);

        const grid = el('div', { className: 'settings-grid' }, game.settings.map(settingRow));

        SETTING_SECTIONS.forEach(([key, title]) => {
            if (!game[key]) return;
            grid.append(el('div', { className: 'setting-divider', text: title }));
            Object.entries(game[key]).forEach(([name, value]) => {
                grid.append(settingRow({ label: camelToTitle(name), value }));
            });
        });

        container.append(el('div', { className: 'game-settings' + (active ? ' active' : ''), id: `game-${index}` }, [grid]));
    });
}

function switchGame(index) {
    document.querySelectorAll('.game-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        tab.setAttribute('aria-pressed', String(i === index));
    });
    document.querySelectorAll('.game-settings').forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
    });
}

// ---------- Rank data ----------

// Share in-flight requests so cards with the same apiUrl (CS2 + Faceit) fetch once
const pendingRequests = new Map();

function fetchJson(url) {
    if (!pendingRequests.has(url)) {
        const request = fetch(url, { cache: 'no-store' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json();
            })
            .finally(() => pendingRequests.delete(url));
        pendingRequests.set(url, request);
    }
    return pendingRequests.get(url);
}

// rows: [[[label, value], ...], 'Divider title', [[label, value], ...]]
function setStats(rankIndex, rows) {
    const rankCard = document.getElementById(`rank-value-${rankIndex}`)?.closest('.rank-card');
    if (!rankCard) return;
    rankCard.querySelector('.cs2-stats')?.remove();
    const stats = el('div', { className: 'cs2-stats' }, rows.map(row => {
        if (typeof row === 'string') return el('div', { className: 'cs2-stat-divider', text: row });
        return el('div', { className: 'cs2-stat-row' }, row.map(([label, value]) =>
            el('div', { className: 'cs2-stat-item' }, [el('strong', { text: label }), ` ${value}`])
        ));
    }));
    rankCard.append(stats);
}

function setRankValue(rankIndex, text) {
    const node = document.getElementById(`rank-value-${rankIndex}`);
    if (node) node.textContent = text;
}

function setRankImage(rankIndex, src) {
    const img = document.getElementById(`rank-image-${rankIndex}`);
    if (img && src) {
        img.src = src;
        img.hidden = false;
    }
}

function fixed(value, digits) {
    return typeof value === 'number' ? value.toFixed(digits) : 'N/A';
}

const RANK_HANDLERS = {
    cs2(data, index) {
        if (!data?.ranks) return;
        setRankValue(index, fixed(data.ranks.leetify, 2));
        setStats(index, [
            [['Premier', data.ranks.premier || 'Unranked'], ['Winrate', `${data.winrate ? (data.winrate * 100).toFixed(1) : 0}%`]],
            'Ratings',
            [['Aim', fixed(data.rating?.aim, 1)], ['Positioning', fixed(data.rating?.positioning, 1)], ['Utility', fixed(data.rating?.utility, 1)]]
        ]);
    },

    faceit(data, index) {
        if (!data?.ranks) return;
        setRankValue(index, `Level ${data.ranks.faceit || 'N/A'}`);
        if (data.ranks.faceit_elo) {
            setStats(index, [[['ELO', data.ranks.faceit_elo]]]);
        }
    },

    deadlock(data, index, config) {
        if (!Number.isInteger(data?.rank)) return;
        const rankName = DEADLOCK_RANK_NAMES[data.rank] || 'Unknown';
        setRankValue(index, data.rank === 0 ? 'Unranked' : `${rankName} ${data.subrank || ''}`.trim());
        if (config.rankImageUrl) {
            setRankImage(index, `${config.rankImageUrl}?format=webp&v=${encodeURIComponent(data.badge)}`);
        }
    },

    valorant(data, index) {
        if (!data?.currentRank) return;
        setRankValue(index, data.currentRank);
        // Only accept https images from the proxy response
        if (typeof data.rankImage === 'string' && data.rankImage.startsWith('https://')) {
            setRankImage(index, data.rankImage);
        }
        if (data.peakRank) {
            const peak = document.getElementById(`rank-peak-${index}`);
            if (peak) peak.textContent = `Peak: ${data.peakRank}`;
        }
    }
};

async function fetchRankData(apiUrl, rankIndex) {
    const rankConfig = CONFIG.ranks[rankIndex];
    try {
        const data = await fetchJson(apiUrl);
        RANK_HANDLERS[rankConfig.type]?.(data, rankIndex, rankConfig);
    } catch (error) {
        console.error(`Failed to fetch rank data for ${rankConfig.game}:`, error);
        setRankValue(rankIndex, 'Error loading');
    }
}

// ---------- Start ----------

renderProfile();
renderItems('gearGrid', CONFIG.gear, 'gear');
renderItems('specsGrid', CONFIG.specs, 'spec');
renderRanks();
renderGames();
