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
        { 
            game: "Deadlock", 
            rank: "Loading...", 
            label: "Rank", 
            apiUrl: "https://api.deadlock-api.com/v1/commands/resolve?region=Europe&account_id=1022404092&template=%7Bleaderboard_rank%7D%0A%7Bleaderboard_place%7D",
            type: "deadlock"
        }
    ],
    games: [
        // {
        //     name: "CS2",
        //     settings: [
        //         { label: "Sensitivity", value: "0.95" },
        //         { label: "DPI", value: "800" },
        //         { label: "eDPI", value: "760" },
        //         { label: "Resolution", value: "1920x1080" },
        //         { label: "Aspect Ratio", value: "16:9" },
        //         { label: "Scaling Mode", value: "Native" },
        //         { label: "Crosshair", value: "CSGO-xxxxx-xxxxx" }
        //     ]
        // },
        // {
        //     name: "Valorant",
        //     settings: [
        //         { label: "Sensitivity", value: "0.38" },
        //         { label: "DPI", value: "800" },
        //         { label: "eDPI", value: "304" },
        //         { label: "Resolution", value: "1920x1080" },
        //         { label: "Crosshair Color", value: "White" }
        //     ]
        // },
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
        }
    ]
};
