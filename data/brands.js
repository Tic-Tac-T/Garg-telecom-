export const BRANDS = [
    {
        id: "cisco",
        name: "Cisco",
        tagline: "Enterprise Networking & Security Switching",
        description: "World leader in enterprise networking equipment, business switches, and structured IT routing infrastructure.",
        categories: ["Network Switches", "PoE Switches", "Routers & Wi-Fi"],
        popularProducts: ["CBS110 Unmanaged Series", "CBS250 Smart Managed PoE+", "CBS350 Layer 3 Switches"],
        accentColor: "#049fd9"
    },
    {
        id: "tp-link",
        name: "TP-Link",
        tagline: "Consumer & Omada Enterprise Wireless & Switches",
        description: "Reliable Wi-Fi routers, Gigabit unmanaged and smart PoE switches, Omada cloud SDN access points, and range extenders.",
        categories: ["Wi-Fi Routers & Modems", "Network Switches", "Wi-Fi Access Points"],
        popularProducts: ["Archer AX73 WiFi 6", "TL-SG108 8-Port Gigabit", "TL-SG1008P PoE Switch", "Omada EAP225"],
        accentColor: "#4acbd6"
    },
    {
        id: "d-link",
        name: "D-Link",
        tagline: "Structured Cabling, Racks, Switches & Routers",
        description: "Pioneer in certified solid-copper CAT6 structured cabling, server racks, patch panels, Gigabit switches, and fiber accessories.",
        categories: ["Network Cables", "Network Switches", "Network Racks & Accessories", "Connectors"],
        popularProducts: ["CAT6 305m Solid Copper Cable", "DGS-1016D 16-Port Gigabit", "9U Server Wall Rack", "24-Port Patch Panel"],
        accentColor: "#eb6c24"
    },
    {
        id: "hikvision",
        name: "Hikvision",
        tagline: "World's Leading Video Surveillance & Security Solutions",
        description: "High-definition AcuSense IP cameras, 4K NVRs, HD Analog cameras, video door phones, and surveillance access control.",
        categories: ["CCTV & IP Cameras", "DVR & NVR Systems", "Intercom & EPABX Systems"],
        popularProducts: ["DS-2CD2043G2-I 4MP Bullet", "DS-7608NI-Q1 8CH 4K NVR", "DS-KIS603-P IP Video Door Phone"],
        accentColor: "#d91f26"
    },
    {
        id: "cp-plus",
        name: "CP Plus",
        tagline: "Intelligent Security & CCTV Surveillance Solutions",
        description: "India's trusted security camera brand offering high-performance analog and IP bullet, dome cameras, DVRs, and SMPS power supplies.",
        categories: ["CCTV & IP Cameras", "DVR & NVR Systems", "Connectors, Tools & Power Supplies"],
        popularProducts: ["CP-UNC-TA41L3-VMD 4MP Dome", "CP-UVR-0801E1 8CH DVR", "12V 5A CCTV SMPS Power Box"],
        accentColor: "#e62129"
    },
    {
        id: "dahua",
        name: "Dahua Technology",
        tagline: "Smart IoT & Video-Centric Surveillance",
        description: "Advanced video surveillance solutions including HDCVI cameras, WizSense AI NVRs, and commercial security equipment.",
        categories: ["CCTV & IP Cameras", "DVR & NVR Systems"],
        popularProducts: ["DH-HAC-HFW1200T 2MP Bullet", "NVR4116HS-4KS2 16CH 4K NVR"],
        accentColor: "#d8242a"
    },
    {
        id: "ubiquiti",
        name: "Ubiquiti",
        tagline: "Next-Generation Enterprise Wi-Fi & UniFi Systems",
        description: "Premium enterprise UniFi wireless access points, cloud gateways, edge routers, and centralized network management systems.",
        categories: ["Wi-Fi Access Points & Extenders", "Network Switches"],
        popularProducts: ["UniFi 6 Lite (U6-Lite)", "UniFi 6 Pro (U6-Pro)", "EdgeRouter X"],
        accentColor: "#0559C9"
    },
    {
        id: "netgear",
        name: "Netgear",
        tagline: "Business ProSAFE Switches & Orbi Mesh Wi-Fi",
        description: "ProSAFE unmanaged and smart web-managed switches, high-throughput desktop switches, and multi-gigabit hardware.",
        categories: ["Network Switches", "Wi-Fi Routers & Modems"],
        popularProducts: ["GS308 8-Port Gigabit", "GS316 16-Port Switch", "Orbi Mesh Tri-Band"],
        accentColor: "#3d1152"
    },
    {
        id: "panasonic",
        name: "Panasonic",
        tagline: "Telecom EPABX, Intercoms & Video Phones",
        description: "Industry gold-standard hybrid telephone systems, office EPABX exchanges, and color video door phone intercoms.",
        categories: ["Intercom & EPABX Systems"],
        popularProducts: ["KX-TES824 Advanced Hybrid PBX", "VL-SV74 Video Intercom System", "KX-TS500 Corded Phone"],
        accentColor: "#003b93"
    },
    {
        id: "western-digital",
        name: "Western Digital",
        tagline: "WD Purple 24/7 Surveillance Storage",
        description: "Engineered specifically for continuous 24/7 high-temperature surveillance recording with AllFrame AI technology.",
        categories: ["Surveillance Storage (HDDs)"],
        popularProducts: ["WD Purple 2TB HDD", "WD Purple 4TB Surveillance HDD", "WD Purple 6TB AI Drive"],
        accentColor: "#2b0a3d"
    },
    {
        id: "tenda",
        name: "Tenda",
        tagline: "Cost-Effective Wi-Fi 6 Routers & PoE Switches",
        description: "Affordable and robust Wi-Fi 6 routers, plug-and-play PoE switches, and long-range outdoor wireless bridges.",
        categories: ["Wi-Fi Routers & Modems", "Network Switches"],
        popularProducts: ["TX9 Pro AX3000 Wi-Fi 6", "TEF1105P 5-Port PoE Switch"],
        accentColor: "#e65100"
    },
    {
        id: "grandstream",
        name: "Grandstream",
        tagline: "Enterprise IP Telephony & VoIP Phones",
        description: "Award-winning SIP IP phones, IP PBX telephone appliances, and enterprise voice communication hardware.",
        categories: ["Intercom & EPABX Systems"],
        popularProducts: ["GXP1625 HD IP Phone", "UCM6202 IP PBX Appliance"],
        accentColor: "#1d589e"
    },
    {
        id: "digilink",
        name: "Digilink (Schneider)",
        tagline: "Structured Cabling & Copper Networking",
        description: "Trusted Indian brand for CAT5e/CAT6 solid copper cables, keystone jacks, patch panels, and faceplates.",
        categories: ["Network Cables", "Network Racks & Accessories", "Connectors, Tools & Power Supplies"],
        popularProducts: ["Digilink CAT6 UTP 305m", "Digilink 24-Port Patch Panel"],
        accentColor: "#009530"
    },
    {
        id: "honeywell",
        name: "Honeywell",
        tagline: "Commercial Grade Video Surveillance & Accessories",
        description: "High-reliability commercial surveillance cameras, impact-resistant dome cameras, and enterprise security accessories.",
        categories: ["CCTV & IP Cameras"],
        popularProducts: ["Honeywell 2MP IP IR Dome", "Honeywell 4MP WDR Bullet Camera"],
        accentColor: "#e51b24"
    }
];
