export const SOLUTIONS = [
    {
        id: "small-office-network",
        slug: "small-office-network",
        title: "Small Office Network Infrastructure",
        category: "Corporate & SME",
        badge: "Most Popular",
        shortDesc: "Complete plug-and-play Gigabit networking, secure Wi-Fi, and VoIP infrastructure for offices with 10 to 50 employees.",
        problem: "Growing startups and small businesses often suffer from slow internet sharing, erratic consumer Wi-Fi routers that crash when multiple laptops connect, and messy tangled cabling on office floors causing sudden network dropouts during client video calls.",
        recommendedSetup: "A rack-mounted Gigabit infrastructure featuring an 8-Port or 16-Port Gigabit PoE switch, a dual-band Wi-Fi 6 router or ceiling access points, pure copper CAT6 structured cabling punched into a wall-mount 6U/9U server rack, and dedicated printer/server connections.",
        equipmentList: [
            { item: "Gigabit Switch", model: "Cisco CBS110-16T-EU or TP-Link TL-SG1016D (16-Port Gigabit)" },
            { item: "Central Router / Gateway", model: "TP-Link Archer AX73 AX5400 Wi-Fi 6 Router" },
            { item: "Server Rack", model: "D-Link 6U Wall Mount Rack with Glass Door & PDU" },
            { item: "Patch Panel & Organizers", model: "D-Link 24-Port CAT6 Loaded Patch Panel + Cable Manager" },
            { item: "Structured Cabling", model: "D-Link CAT6 UTP 100% Solid Copper Cable (305m Roll)" },
            { item: "RJ45 Connectors & Keystone", model: "D-Link CAT6 Keystone Jacks & RJ45 Modular Plugs" }
        ],
        implementationSteps: [
            "Site walk-through to map employee desks, printer locations, and server/broadband entry point.",
            "Mount 6U wall rack at a secure, well-ventilated central location.",
            "Run CAT6 solid copper cables through PVC conduits along perimeter walls to modular faceplates.",
            "Punch cables into 24-port patch panel and dress using horizontal cable managers.",
            "Install Gigabit switch, connect broadband fiber modem to router WAN, and assign static IP pools.",
            "Verify link speeds across all desk ports with digital LAN testers."
        ],
        benefits: [
            "Flawless Gigabit file transfer speeds between office PCs",
            "Zero router freezes even during high-bandwidth Zoom conferences",
            "Clean, organized rack aesthetics that impress clients",
            "Easily expandable as new team members join"
        ]
    },
    {
        id: "retail-store-surveillance",
        slug: "retail-store-surveillance",
        title: "Retail Store & Showroom CCTV Surveillance",
        category: "Retail & Commercial",
        badge: "High Security",
        shortDesc: "High-resolution 4MP AcuSense cameras for cash registers, billing counters, customer aisles, and entrance gates.",
        problem: "Retail shops, apparel showrooms, and jewelry stores face inventory shrinkage, billing disputes at cash counters, shoplifting, and blind spots around storage stockrooms that standard low-grade analog cameras cannot clearly identify.",
        recommendedSetup: "A focused IP surveillance system consisting of 4 to 8 high-definition 4MP IP Dome cameras inside the showroom, weatherproof bullet cameras pointing outside entrance gates, an 8-Channel 4K NVR with H.265+ compression, and a dedicated 2TB/4TB WD Purple 24/7 surveillance drive.",
        equipmentList: [
            { item: "Cash Counter Camera", model: "Hikvision DS-2CD2143G2-I 4MP AcuSense Dome with Audio" },
            { item: "Aisle & Showroom Cameras", model: "CP Plus 4MP Full-HD IP Dome Cameras (3-4 units)" },
            { item: "Entrance & Street Camera", model: "Hikvision 4MP Weatherproof IP Bullet Camera (WDR)" },
            { item: "Video Recorder", model: "Hikvision DS-7608NI-Q1 8 Channel 4K NVR" },
            { item: "Surveillance Hard Drive", model: "Western Digital WD Purple 4TB 24/7 Surveillance HDD" },
            { item: "PoE Switch", model: "TP-Link 8-Port Gigabit PoE Switch (65W Budget)" },
            { item: "Power Backup", model: "Microtek 600VA Line Interactive UPS" }
        ],
        implementationSteps: [
            "Pinpoint critical surveillance zones: Cash register cash-drawer, customer billing counter, main glass door, and storage backroom.",
            "Install discreet dome cameras flush with the false ceiling for an aesthetically pleasing retail interior.",
            "Run single CAT6 cables to each camera utilizing Power over Ethernet (no separate power adapters needed at cameras).",
            "Connect all camera cables to the central PoE switch and NVR in the manager's office.",
            "Configure motion detection zones, email alerts, and the Hik-Connect mobile app on the owner's smartphone for 24/7 live monitoring from anywhere."
        ],
        benefits: [
            "Read currency notes and invoice details at the billing counter with crystal-clear 4MP resolution",
            "Real-time mobile viewing and instant playback when traveling",
            "Audio recording capability for settling customer counter disputes",
            "Up to 30 days of continuous 24/7 recorded footage"
        ]
    },
    {
        id: "corporate-networking",
        slug: "corporate-networking",
        title: "Corporate Multi-Floor Network Infrastructure",
        category: "Enterprise",
        badge: "Enterprise Grade",
        shortDesc: "Layer 2/3 Smart Managed Switches, Gigabit backbone, fiber inter-floor links, and segregated VLANs.",
        problem: "Corporate enterprises spanning multiple floors or large departments face broadcast storms, network congestion, unauthorized device access, and severe bandwidth throttling between guest Wi-Fi, accounting databases, and VoIP systems.",
        recommendedSetup: "A high-performance enterprise backbone featuring Cisco or Ubiquiti smart managed switches, 10G/Gigabit SFP fiber optic uplinks between floor distribution racks, segregated 802.1Q VLANs for Staff, Guests, VoIP, and Surveillance, backed by redundant power.",
        equipmentList: [
            { item: "Core Managed Switch", model: "Cisco CBS250-24T-4G 24-Port Gigabit Smart Managed Switch" },
            { item: "PoE Distribution Switch", model: "Cisco CBS250-24P-4G 24-Port PoE+ (195W Budget)" },
            { item: "Inter-Floor Uplink", model: "D-Link Single-Mode Armored Fiber Optic Cable + SFP Transceivers" },
            { item: "Central Server Rack", model: "Valrack / D-Link 24U Floor Standing Server Rack" },
            { item: "Cabling Infrastructure", model: "Schneider Actassi CAT6A 100% Solid Copper Shielded Cable" },
            { item: "Patch Panels", model: "24-Port CAT6A STP Fully Shielded Patch Panels" }
        ],
        implementationSteps: [
            "Formulate IP subnet scheme and VLAN topology (VLAN 10: Management, VLAN 20: Corporate Data, VLAN 30: VoIP Phones, VLAN 40: CCTV, VLAN 50: Guest Wi-Fi).",
            "Install primary 24U server rack in ground floor data room and secondary 9U distribution racks on upper floors.",
            "Pull fiber optic backbone cables between floor racks through dedicated risers and terminate with LC duplex couplers.",
            "Configure 802.1Q VLAN tagging and Quality of Service (QoS) prioritization for voice and video traffic on Cisco switches.",
            "Document cable drop patch chart and provide as-built network diagram."
        ],
        benefits: [
            "Complete network isolation preventing guest devices from accessing accounting files",
            "Uncompromised VoIP call clarity with zero jitter",
            "Massive inter-floor bandwidth capacity without bottlenecks",
            "Centralized SNMP management and rapid port troubleshooting"
        ]
    },
    {
        id: "warehouse-surveillance",
        slug: "warehouse-surveillance",
        title: "Warehouse & Industrial Perimeter Surveillance",
        category: "Industrial & Logistics",
        badge: "Heavy Duty",
        shortDesc: "Long-range IR bullet cameras, high-bay coverage, PTZ perimeter tracking, and weatherproof outdoor cabling.",
        problem: "Logistics hubs, industrial godowns, and manufacturing plants have wide expansive spaces, high metal ceilings, heavy machinery electrical interference, poor ambient night lighting, and loading docks where cargo theft and vehicle movement must be tracked.",
        recommendedSetup: "Heavy-duty outdoor IP67-rated bullet cameras with 50-80 meter Smart IR night vision, 25x optical zoom PTZ cameras for perimeter patrol, industrial long-range PoE switches (up to 250m transmission), and 16/32 Channel 4K NVR with RAID storage.",
        equipmentList: [
            { item: "High-Bay & Aisle Cameras", model: "Hikvision 4MP Motorized Varifocal Bullet Cameras (2.8-12mm)" },
            { item: "Perimeter & Yard PTZ", model: "Dahua / Hikvision 4MP 25x Speed Dome PTZ Camera" },
            { item: "Long-Range PoE Switch", model: "D-Link 16-Port Long-Distance Extended PoE Switch (250m mode)" },
            { item: "Central NVR", model: "Hikvision DS-7716NI-I4 16 Channel 4K 4-SATA NVR" },
            { item: "High-Capacity Storage", model: "Western Digital Purple 8TB Surveillance Drives (x2 in RAID)" },
            { item: "Outdoor Armored Cable", model: "CAT6 Outdoor Double-Sheathed UV-Resistant Copper Cable" }
        ],
        implementationSteps: [
            "Survey yard perimeter, loading docks, container bays, and material entry/exit gates.",
            "Install weatherproof GI/PVC conduit piping along warehouse steel beams to prevent rodent damage.",
            "Mount cameras inside IP66 weatherproof die-cast junction boxes with lightning surge protectors.",
            "Utilize Extended PoE switches to drive power and video signals over 200 meters without mid-span repeaters.",
            "Set up virtual tripwire intrusion zones and vehicle license plate capture protocols on the NVR."
        ],
        benefits: [
            "Comprehensive 24/7 surveillance across dark yards with Smart EXIR night vision",
            "Zero blind spots across high racking storage aisles",
            "Automated perimeter breach alerts directly to security control room",
            "60+ days of redundant video retention"
        ]
    },
    {
        id: "school-institution-networking",
        slug: "school-institution-networking",
        title: "School, College & Campus Networking",
        category: "Education & Public",
        badge: "High Density",
        shortDesc: "High-density student Wi-Fi, computer lab cabling, PA system integration, and campus-wide safety surveillance.",
        problem: "Educational institutions require dense simultaneous Wi-Fi connectivity for classrooms, auditorium halls, and libraries, along with strict student content filtering, centralized intercom announcements, and campus-wide perimeter safety surveillance.",
        recommendedSetup: "Centrally managed ceiling access points with captive guest portals, dedicated Gigabit cabling for 60+ computer lab terminals, high-power PoE infrastructure, and high-channel IP cameras monitoring corridors, sports grounds, and gates.",
        equipmentList: [
            { item: "Campus Wi-Fi APs", model: "Ubiquiti UniFi 6 Long-Range (U6-LR) / TP-Link Omada EAP225" },
            { item: "Lab Gigabit Switches", model: "TP-Link TL-SG1024D 24-Port Gigabit Desktop/Rackmount" },
            { item: "Central Controller", model: "TP-Link Omada Hardware Controller OC200" },
            { item: "Corridor CCTV", model: "CP Plus 2MP/4MP Vandal-Resistant Dome Cameras" },
            { item: "Lab Cabling", model: "D-Link CAT6 Solid Bare Copper (Multiple 305m Rolls)" },
            { item: "Racks & Accessories", model: "9U Wall Racks with Locking Front Glass Door" }
        ],
        implementationSteps: [
            "Compute peak simultaneous concurrent device density for auditorium and lecture halls.",
            "Install Omada/UniFi ceiling access points uniformly spaced across corridors and open halls.",
            "Terminate all computer lab desks to central 24-port patch panels inside a locked teacher cabinet.",
            "Enable Band Steering, Guest Network Isolation, and Web Content Filtering on the gateway.",
            "Deploy corridor dome cameras with wide dynamic range to handle contrasting outdoor daylight."
        ],
        benefits: [
            "Reliable online exam conduction without unexpected LAN disconnects",
            "Seamless campus-wide roaming as students move between lecture halls",
            "Enhanced child safety and prompt review of student corridor events",
            "Easy administrative control via centralized web dashboard"
        ]
    },
    {
        id: "office-communication-systems",
        slug: "office-communication-systems",
        title: "Office EPABX & Intercom Telephony",
        category: "Voice & Communication",
        badge: "Telephony",
        shortDesc: "Panasonic hybrid telephone exchanges, digital key phones, departmental intercoms, and video gatekeeper systems.",
        problem: "Front-desk receptionists struggle to route incoming customer telephone calls to appropriate departments, while employees waste productive time walking between desks or incurring external phone charges for internal consultations.",
        recommendedSetup: "A robust Panasonic or Matrix hybrid EPABX system supporting 3 to 8 incoming telecom lines (CO) and 8 to 24 internal intercom extensions, paired with Beetel caller ID display phones, a master receptionist console, and video door phone at the reception door.",
        equipmentList: [
            { item: "Central Hybrid EPABX", model: "Panasonic KX-TES824 Advanced Hybrid Phone System (3 CO / 8 Ext)" },
            { item: "Master Reception Console", model: "Panasonic KX-T7730 Proprietary Master Display Key Phone" },
            { item: "Department Extension Handsets", model: "Beetel M71 Caller ID Display Corded Telephones (x8 to x16)" },
            { item: "Reception Video Door Phone", model: "Panasonic VL-SV74 Video Intercom with 7-inch Color Screen" },
            { item: "Intercom Cabling", model: "Delton / D-Link 2-Pair & 4-Pair Pure Copper Telecom Cable" },
            { item: "MDF & Distribution", model: "Krone Type MDF Connection Block & Protective Enclosure" }
        ],
        implementationSteps: [
            "Identify extension numbers for Reception (Ext 101), Accounts (Ext 102), Sales (Ext 103), and Director Cabin (Ext 104).",
            "Mount Panasonic KX-TES824 PBX controller in a dry, ventilated electrical utility cabinet.",
            "Run 2-pair copper telephone wiring to each desk and terminate with modular RJ11 telephone rosettes.",
            "Program incoming call routing logic: Auto-receptionist DISA greeting, ring groups, and night-mode diversion.",
            "Mount video door phone camera station outside the main glass entrance with internal electronic door-strike control."
        ],
        benefits: [
            "Professional automated greeting for all incoming customer phone calls",
            "Free, instantaneous inter-department voice communication",
            "Visual verification of visitors before buzzing open the main entrance door",
            "Expandable up to 24 extensions as business headcount expands"
        ]
    },
    {
        id: "home-networking-residential",
        slug: "home-networking-residential",
        title: "Residential Villa & Multi-Story Home Networking",
        category: "Residential & Smart Home",
        badge: "Smart Living",
        shortDesc: "Eliminate Wi-Fi dead zones across thick concrete floors, power smart TVs, gaming consoles, and home security.",
        problem: "Modern multi-story Indian houses have thick RCC concrete slabs and brick walls that severely degrade Wi-Fi signals from a single ISP router, causing buffering on 4K Smart TVs, laggy work-from-home video meetings, and offline smart home IoT devices.",
        recommendedSetup: "A high-speed seamless Mesh Wi-Fi network or hardwired CAT6 access points on every floor connected back to a central Gigabit switch in the utility box, combined with an IP video door phone kit for gate security.",
        equipmentList: [
            { item: "Mesh Wi-Fi 6 System", model: "TP-Link Deco X50 AX3000 Whole Home Mesh (Pack of 3)" },
            { item: "Core Distribution Switch", model: "D-Link DGS-1008P 8-Port Gigabit PoE Switch" },
            { item: "Home Security Intercom", model: "Hikvision DS-KIS603-P IP Video Door Phone with Mobile App" },
            { item: "Backbone Cabling", model: "D-Link CAT6 Solid Bare Copper Cable (100-300m)" },
            { item: "Smart TV Drops", model: "Direct CAT6 wired connections for 4K streaming & gaming" }
        ],
        implementationSteps: [
            "Position central Wi-Fi nodes on Ground, First, and Second floors with wired Ethernet backhauls.",
            "Wire high-bandwidth devices (Smart TVs, gaming rigs, home office desktop) directly to CAT6 ports.",
            "Mount outdoor doorbell camera at main gate and touch-display monitor inside the family living hall.",
            "Link mobile apps so family members can answer gate visitors and view home CCTV cameras on their phones."
        ],
        benefits: [
            "Zero Wi-Fi dead zones across all floors, balconies, and terrace gardens",
            "Single unified Wi-Fi name (SSID) that auto-connects without manual switching",
            "Buffer-free 4K/8K Netflix and YouTube streaming",
            "Answer the front door bell and unlock the gate directly from your mobile"
        ]
    },
    {
        id: "structured-cabling-architecture",
        slug: "structured-cabling-architecture",
        title: "Enterprise Structured Cabling & Server Rack Architecture",
        category: "Infrastructure",
        badge: "TIA/EIA Standard",
        shortDesc: "ANSI/TIA-568 standards-compliant structured copper & fiber cabling layout with certified cable testing.",
        problem: "Unstructured loose cabling ('rat's nest') leads to unidentifiable wire cuts, downtime during server maintenance, cross-talk noise interference, and safety hazards that disrupt business operations.",
        recommendedSetup: "Standards-compliant structured cabling utilizing 23AWG 100% solid copper CAT6/CAT6A cables, factory-tested patch cords, 19-inch rack-mounted patch panels with cable managers, color-coded jack terminations, and heat-shrink labeling.",
        equipmentList: [
            { item: "Solid Copper Cables", model: "Schneider Actassi / D-Link CAT6 UTP 305m (23AWG Solid Copper)" },
            { item: "Server Enclosures", model: "Netrack / D-Link 9U / 12U / 42U Server Racks with High Static Load" },
            { item: "Loaded Patch Panels", model: "D-Link 24-Port / 48-Port CAT6 Modular Patch Panels" },
            { item: "Cable Management", model: "1U Horizontal Cable Organizers with Removable Cover" },
            { item: "Keystone & Faceplates", model: "D-Link Toolless Keystone Jacks & Dual-Port Faceplates" },
            { item: "Molded Patch Cords", model: "Factory-Molded Snagless Patch Cords (1m, 2m, 3m, 5m)" }
        ],
        implementationSteps: [
            "Establish cable containment pathways (cable trays, PVC trunking, floor raceways).",
            "Maintain proper separation distances from AC high-voltage power conduits to eliminate EMI noise.",
            "Execute neat cable combing, velcro bundling, and proper bend-radius compliance inside the server rack.",
            "Punch terminations according to TIA/EIA-568B color standard on all patch panels and faceplates.",
            "Perform wiremap, length, attenuation, and NEXT cross-talk validation testing."
        ],
        benefits: [
            "Predictable, guaranteed 1000BASE-T Gigabit data throughput",
            "Effortless troubleshooting with indexed port-to-desk documentation",
            "Professional server room presentation compliant with IT audit standards",
            "Extended physical cable lifespan exceeding 15 to 20 years"
        ]
    }
];
