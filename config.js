// CONFIG - Edit this object to customize everything!
const CONFIG = {
    profile: {
        username: "AUURUUM",
        location: "Lithuania",
        flagImage: "assets/flags/lithuania.svg",
        image: "assets/profile.png"
    },
    socials: [
        { icon: "fa-brands fa-youtube", url: "https://youtube.com/@auurummm" },
        { icon: "fa-brands fa-twitch", url: "https://www.twitch.tv/auurummm" },
        { icon: "fa-brands fa-steam", url: "https://steamcommunity.com/id/auuruum/" },
        { icon: "assets/icons/faceit.svg", url: "https://www.faceit.com/ru/players/auurruum" },
        { icon: "bi bi-globe", url: "https://auuruum.me/" }
    ],
    gear: [
        {
            category: "MOUSE",
            name: "Logitech G Pro X Superlight 2 Black",
            url: "https://www.logitechg.com/en-eu/shop/p/pro-x2-superlight-wireless-mouse.910-006630",
            image: "assets/gear/logitech-g-pro-x-superlight-2.png"
        },
        {
            category: "KEYBOARD",
            name: "MonsGeek MG75S HE",
            url: "https://monsgeek.eu/products/monsgeek-mg75s-he-shine-through-magnetic-switch-keyboard",
            image: "assets/gear/monsgeek-mg75s-he.webp"
        },
        {
            category: "HEADSET",
            name: "SteelSeries Arctis Nova Pro Wireless",
            url: "https://steelseries.com/gaming-headsets/arctis-nova-pro?color=black&connectivityType=wireless&primaryPlatform=pc",
            image: "assets/gear/steelseries-arctis-nova-pro.webp"
        },
        {
            category: "MIC",
            name: "RODE PodMic USB",
            url: "https://rode.com/en/microphones/usb/podmic-usb",
            image: "assets/gear/rode-podmic-usb.webp"
        },
        {
            category: "MIC ARM",
            name: "FIFINE BM88",
            url: "https://fifinemicrophone.com/products/fifine-bm88-microphone-boom-arm-stand",
            image: "assets/gear/fifine-bm88.webp"
        },
        {
            category: "WEBCAM",
            name: "OBSBOT Tiny 3 Lite",
            url: "https://www.obsbot.com/store/products/tiny-3-series?product_id=9fb836209eec4",
            image: "assets/gear/obsbot-tiny3-lite.webp"
        },
        {
            category: "STREAM DECK",
            name: "Elgato Stream Deck",
            url: "https://www.elgato.com/ww/en/p/stream-deck",
            image: "assets/gear/elgato-stream-deck.webp"
        },
        {
            category: "MONITOR",
            name: "Dell Alienware AW2523HF 25 360Hz",
            url: "https://www.dell.com/en-us/shop/alienware-25-gaming-monitor-aw2523hf/apd/210-bfed/monitors-monitor-accessories",
            image: "assets/gear/dell-aw2523hf.webp"
        },
        {
            category: "MONITOR",
            name: "Samsung C27F390 27",
            url: "https://www.samsung.com/ie/business/monitors/curved/curved-cf390-lc27f390fhrxxu/",
            image: "assets/gear/samsung-c27f390.webp"
        },
        {
            category: "MONITOR",
            name: "Dell P2214H",
            image: "assets/gear/dell-p2214h.webp"
        }
    ],
    specs: [
        {
            category: "CPU",
            name: "AMD Ryzen 7 7700X",
            image: "assets/specs/amd-ryzen-7-7700x.webp"
        },
        {
            category: "GPU",
            name: "Asus Dual GeForce RTX 4060 Ti 8GB",
            image: "assets/specs/rtx-4060-ti.webp"
        },
        {
            category: "RAM",
            name: "32GB DDR5",
            image: "fa-solid fa-question"
        }
    ],
    ranks: [
        { 
            game: "CS2", 
            rank: "Loading...", 
            label: "Leetify Rating", 
            apiUrl: "https://api-public.cs-prod.leetify.com/v3/profile?steam64_id=76561198982669820",
            openProfileUrl: "https://leetify.com/app/profile/76561198982669820",
            type: "cs2"
        },
        { 
            game: "Faceit", 
            rank: "Loading...", 
            label: "Level", 
            apiUrl: "https://api-public.cs-prod.leetify.com/v3/profile?steam64_id=76561198982669820",
            openProfileUrl: "https://www.faceit.com/ru/players/auurruum",
            type: "faceit"
        },
        { 
            game: "Valorant", 
            rank: "Loading...", 
            label: "Rank", 
            // Change this to your public server IP when deploying
            apiUrl: "https://aurumoracle.duckdns.org/api/valorant-rank/",
            peakRank: "Loading...",
            openProfileUrl: "https://tracker.gg/valorant/profile/riot/aurum%236570",
            type: "valorant" 
        },
        { 
            game: "Deadlock", 
            rank: "Loading...",
            label: "Rank", 
            apiUrl: "https://api.deadlock-api.com/v1/players/1022404092/rank",
            rankImageUrl: "https://api.deadlock-api.com/v1/players/1022404092/rank/image",
            refreshInterval: 60000,
            openProfileUrl: "https://statlocker.gg/profile/1022404092/matches",
            type: "deadlock"
        }
    ],
    games: [
        {
            name: "Deadlock",
            settings: [
                { label: "Resolution", value: "1920x1080" },
                { label: "Sensitivity", value: "1.25" },
                { label: "Vertical Scaling", value: "1.0" },
                { label: "Zoom Sensitivity ratio", value: "1.0" },
                { label: "DPI", value: "400" },
                { label: "eDPI", value: "500" }
            ],
            crosshair: {
                themedHeroReticles: false,
                reticleMotion: false,
                
                // Line settings
                lineWidth: 4,
                lineHeight: 10,
                lineGap: 0,
                lineOpacity: 0,
                lineBorder: 1,
                lineBorderGap: 0,
                lineBorderOpacity: 0,
                
                // Dot settings
                dotSize: 2,
                dotOpacity: 100,
                dotBorder: 0,
                dotBorderGap: 0,
                dotBorderOpacity: 0
            }
        },
        {
            name: "CS2",
            settings: [
                { label: "Display Mode", value: "Fullscreen" },
                { label: "Resolution", value: "1280x1024" },
                { label: "Aspect Ratio", value: "Normal 4:3" },
                { label: "Brightness", value: "93%" },
                { label: "Sensitivity", value: "1.25" },
                { label: "Zoom Sensitivity Multiplier", value: "1.00" },
                { label: "DPI", value: "400" },
                { label: "eDPI", value: "500" },
                { label: "Crosshair Code", value: "CSGO-2RUBu-scDtn-hZzBm-UKU64-WsdqA" }
            ],
            videoSettings: {
                boostPlayerContrast: "Enabled",
                vSync: "Disabled",
                nvidiaGSync: "Disabled",
                nvidiaReflexLowLatency: "Enabled",
                multisamplingAntiAliasing: "4X MSAA",
                globalShadowQuality: "Very High",
                dynamicShadows: "All",
                modelTextureDetail: "Low",
                textureFilteringMode: "Bilinear",
                shaderDetail: "Low",
                particleDetail: "Low",
                ambientOcclusion: "Disabled",
                highDynamicRange: "Quality",
                fidelityFXSuperResolution: "Disabled (Highest Quality)"
            }
        },
        {
            name: "Valorant",
            settings: [
                { label: "Resolution", value: "1280x1024 5:4 (360Hz)" },
                { label: "Sensitivity", value: "0.393" },
                { label: "Scoped Sensitivity", value: "0.8" },
                { label: "ADS Sensitivity", value: "1.0" },
                { label: "DPI", value: "400" },
                { label: "eDPI", value: "157.2" },
                { label: "Enemy Highlight", value: "Yellow (Deuteranopia)" },
                { label: "Crosshair Code", value: "0;s;1;P;c;6;o;0;f;0;0t;1;0l;4;0v;4;0o;1;0a;1;0f;0;1t;0;1l;0;1v;0;1o;39;1a;0;1m;0;1f;0;S;s;0.601;o;0.938" }
            ],
            videoSettings: {
                displayMode: "Fullscreen",
                aspectRatioMethod: "Fill",
                multithreadedRendering: "On",
                materialQuality: "High",
                textureQuality: "High",
                detailQuality: "Low",
                uiQuality: "High",
                vignette: "Off",
                vSync: "Off",
                antiAliasing: "MSAA 4x",
                anisotropicFiltering: "16x",
                improveClarity: "Off",
                experimentalSharpening: "Off",
                bloom: "Off",
                distortion: "Off",
                castShadows: "On",
                nvidiaReflex: "On + Boost"
            }
        }
    ]
};
