export const CATEGORIES = [
    {
        id: "network-switches",
        slug: "network-switches",
        name: "Network Switches",
        shortDesc: "Gigabit, Managed, Unmanaged & High-Power PoE Switches",
        description: "Explore enterprise and small-business network switches from 5 ports up to 48 ports. Featuring unmanaged plug-and-play models, Layer 2/Layer 3 smart managed switches, and high-budget PoE/PoE+ switches for IP surveillance and Wi-Fi access points.",
        icon: "Network",
        productCount: 14,
        featured: true,
        popularBrands: ["Cisco", "TP-Link", "D-Link", "Ubiquiti", "Netgear"],
        buyingGuide: "For CCTV cameras and Access Points, select PoE+ (802.3at) switches with adequate wattage budget. For office data networks, opt for Gigabit managed switches with VLAN support.",
        faqs: [
            {
                q: "What is the difference between Managed and Unmanaged switches?",
                a: "Unmanaged switches work straight out of the box with zero configuration, ideal for simple home and small shop networks. Managed switches provide VLAN isolation, QoS traffic prioritization, bandwidth throttling, and remote SNMP monitoring."
            },
            {
                q: "Can I connect non-PoE devices to a PoE switch?",
                a: "Yes, modern active PoE switches (802.3af/at) automatically detect connected devices and will not send power to non-PoE devices, keeping them completely safe."
            }
        ]
    },
    {
        id: "cctv-cameras",
        slug: "cctv-cameras",
        name: "CCTV & IP Cameras",
        shortDesc: "High-Definition 2MP, 4MP, 8MP Bullet, Dome & PTZ Surveillance",
        description: "Commercial and residential CCTV cameras engineered for crystal-clear surveillance day and night. Including IP AcuSense human/vehicle detection cameras, HD-Analog dome cameras, weatherproof bullet cameras, and full-color night vision cameras.",
        icon: "Camera",
        productCount: 18,
        featured: true,
        popularBrands: ["Hikvision", "CP Plus", "Dahua", "Honeywell"],
        buyingGuide: "Choose Dome cameras for indoor ceilings in offices and stores; choose Bullet cameras with IP67 weatherproof ratings and long-range IR LEDs for outdoor perimeters.",
        faqs: [
            {
                q: "What camera resolution do I need for my shop or office?",
                a: "A 2MP (1080p) camera is suitable for general area monitoring. For cash counters, entrance gates, and license plate identification, 4MP or 8MP (4K) AcuSense cameras are strongly recommended."
            },
            {
                q: "Do your IP cameras support audio recording?",
                a: "Yes, many of our featured IP cameras from Hikvision and CP Plus include built-in high-sensitivity microphones for clear two-way audio or synchronized audio recording."
            }
        ]
    },
    {
        id: "routers-wifi",
        slug: "routers-wifi",
        name: "Wi-Fi Routers & Modems",
        shortDesc: "Dual-Band AC, Wi-Fi 6 AX, Gigabit & Multi-WAN Load Balancers",
        description: "High-performance wireless routers and modems designed for reliable bandwidth, ultra-low latency, and wide signal coverage in homes, retail stores, and commercial workspaces.",
        icon: "Router",
        productCount: 12,
        featured: true,
        popularBrands: ["TP-Link", "D-Link", "Tenda", "Netgear", "Cisco"],
        buyingGuide: "For fiber broadband connections above 100 Mbps, always select a router with Full Gigabit WAN/LAN ports and Wi-Fi 6 (802.11ax) dual-band capability.",
        faqs: [
            {
                q: "What is the benefit of Wi-Fi 6 over Wi-Fi 5?",
                a: "Wi-Fi 6 handles multiple simultaneous client devices without speed drops, features OFDMA and MU-MIMO technology, reduces battery consumption on phones, and delivers 38% faster throughput."
            }
        ]
    },
    {
        id: "network-cables",
        slug: "network-cables",
        name: "Network & Fiber Cables",
        shortDesc: "CAT5e, CAT6, CAT6A 100% Solid Copper & Fiber Optic Patch Cables",
        description: "Certified structured cabling products for enterprise data centers and office backbones. 305-meter rolls of 23AWG CAT6/CAT6A solid bare copper, shielded cabling, fiber optic patch cords (SC, LC, ST), and factory-molded patch cords.",
        icon: "Cable",
        productCount: 16,
        featured: true,
        popularBrands: ["D-Link", "Digilink", "Schneider", "CommScope"],
        buyingGuide: "Beware of CCA (Copper Clad Aluminum) cables in the market. Garg Telecom strictly supplies 100% pure annealed solid copper cables certified for high-gigabit transmission and PoE performance.",
        faqs: [
            {
                q: "Why should I use pure copper instead of CCA cable?",
                a: "CCA cables have high electrical resistance, cause severe voltage drops with PoE cameras, and are prone to wire breakage. Pure copper ensures stable Gigabit throughput and maximum longevity."
            }
        ]
    },
    {
        id: "dvr-nvr",
        slug: "dvr-nvr",
        name: "DVR & NVR Systems",
        shortDesc: "4, 8, 16 & 32 Channel 4K Standalone Video Recorders",
        description: "Robust Network Video Recorders (NVR) and Digital Video Recorders (DVR) supporting 4K Ultra-HD decoding, H.265+ smart video compression, multi-channel synchronous playback, and mobile app live viewing.",
        icon: "HardDrive",
        productCount: 10,
        featured: true,
        popularBrands: ["Hikvision", "CP Plus", "Dahua"],
        buyingGuide: "Match the incoming bandwidth of the NVR with your IP camera bitrates. Look for H.265+ compression to save up to 75% on hard drive storage costs.",
        faqs: [
            {
                q: "Can I view my cameras on my mobile phone remotely?",
                a: "Yes, all our DVRs and NVRs connect securely to cloud P2P services (Hik-Connect, gCMOB, DMSS) allowing instant live viewing and playback from your smartphone anywhere in the world."
            }
        ]
    },
    {
        id: "intercom-telecom",
        slug: "intercom-telecom",
        name: "Intercom & EPABX Systems",
        shortDesc: "Office PBX, Video Door Phones & Hybrid Telephone Systems",
        description: "Complete voice communication setups for corporate offices, hospitals, residential societies, and multi-story homes. Advanced hybrid EPABX systems, video door phone intercom kits, and multi-tenant intercoms.",
        icon: "PhoneCall",
        productCount: 8,
        featured: true,
        popularBrands: ["Panasonic", "Matrix", "Hikvision", "Beetel"],
        buyingGuide: "Calculate your present number of telephone CO lines and internal intercom extensions, then select an EPABX model with room for future card expansion.",
        faqs: [
            {
                q: "What is an EPABX system?",
                a: "An Electronic Private Automatic Branch Exchange (EPABX) is a telephone switching system that allows users to share a few external telephone lines while calling between internal departments without phone call charges."
            }
        ]
    },
    {
        id: "wifi-access-points",
        slug: "wifi-access-points",
        name: "Wi-Fi Access Points & Extenders",
        shortDesc: "Ceiling Mount, Outdoor Long-Range & Mesh APs",
        description: "Enterprise-grade wireless access points with centralized cloud controller management, seamless client roaming, captive guest portals, and high-density user support for hotels, cafes, and open offices.",
        icon: "Wifi",
        productCount: 9,
        featured: false,
        popularBrands: ["Ubiquiti", "TP-Link Omada", "D-Link", "Cisco"],
        buyingGuide: "Ceiling-mounted APs distribute radio signal uniformly downward in an umbrella pattern, providing superior coverage compared to standard desktop routers.",
        faqs: [
            {
                q: "What is seamless fast roaming?",
                a: "Seamless roaming (802.11k/v/r) enables smartphones and laptops to switch between access points as you walk around the premises without dropping Zoom or WhatsApp calls."
            }
        ]
    },
    {
        id: "network-racks-accessories",
        slug: "network-racks-accessories",
        name: "Network Racks & Accessories",
        shortDesc: "4U to 42U Wall & Floor Racks, Patch Panels & Cable Organizers",
        description: "Heavy-duty CRCA steel network server racks, front glass doors with locks, 24/48 port loaded patch panels, horizontal wire managers, PDU power distribution units, and installation accessories.",
        icon: "Server",
        productCount: 15,
        featured: false,
        popularBrands: ["D-Link", "Netrack", "Digilink", "Valrack"],
        buyingGuide: "A standard small office usually requires a 6U or 9U wall-mounted rack (550mm width x 450mm depth) to house a switch, patch panel, router, and CCTV DVR.",
        faqs: [
            {
                q: "What does 'U' stand for in server racks?",
                a: "1U equals 1.75 inches (44.45mm) of vertical rack mounting height. A 9U rack provides 15.75 inches of usable equipment mounting space."
            }
        ]
    },
    {
        id: "surveillance-storage",
        slug: "surveillance-storage",
        name: "Surveillance Storage (HDDs)",
        shortDesc: "24/7 Heavy Duty Surveillance Hard Drives (1TB to 10TB)",
        description: "Specialized surveillance-class hard drives engineered for continuous 24/7 video write workloads, high temperature tolerance, and reduced frame loss in multi-camera security systems.",
        icon: "Disc",
        productCount: 6,
        featured: false,
        popularBrands: ["Western Digital", "Seagate"],
        buyingGuide: "Never use regular desktop PC hard drives in a CCTV DVR/NVR. Desktop drives are built for 8x5 read-heavy use, whereas surveillance drives (WD Purple, SkyHawk) are built for 24x7 write-heavy continuous recording.",
        faqs: [
            {
                q: "How many days of recording will a 4TB HDD store?",
                a: "For 4 IP cameras recording at 4MP H.265+ continuous stream, a 4TB drive typically provides approximately 25 to 30 days of continuous footage."
            }
        ]
    },
    {
        id: "connectors-tools",
        slug: "connectors-tools",
        name: "Connectors, Tools & Power Supplies",
        shortDesc: "RJ45 Clips, Crimping Tools, LAN Testers & 12V SMPS Units",
        description: "Professional networking accessories for installers: gold-plated RJ45 modular connectors, heavy-duty ratchet crimpers, wire strippers, digital LAN cable continuity testers, and multi-channel CCTV SMPS power units.",
        icon: "Wrench",
        productCount: 12,
        featured: false,
        popularBrands: ["D-Link", "CP Plus", "Pro'sKit", "AMP"],
        buyingGuide: "For CAT6 cables with thick 23AWG conductors, use CAT6 specific RJ45 connectors with staggered pin alignments to prevent signal crosstalk.",
        faqs: [
            {
                q: "Do you supply bulk boxes of RJ45 connectors?",
                a: "Yes, we maintain ready stock of 100-piece boxes and master cartons of 1,000 pieces with wholesale pricing for IT contractors and system installers."
            }
        ]
    }
];
