import fs from 'fs';
import path from 'path';
import os from 'os';
import QRCode from 'qrcode';

// Permanent Certificate ID and Permanent Secret Token specified by user
const PERMANENT_TOKEN = '3091b5959db245ae7f609ba8d39ec0081350b8810354fecfd915b19a4095d85e';
const CERT_ID = 'GT-FSD-2026-001';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'certificates');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Automatically detects the computer's local Wi-Fi / LAN IP address
 */
function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

function parseArgs() {
    const args = process.argv.slice(2);
    const params = {};
    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith('--')) {
            const key = args[i].replace(/^--/, '');
            const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
            params[key] = value;
            if (value !== true) i++;
        }
    }
    return params;
}

async function main() {
    const args = parseArgs();
    const token = args.token || PERMANENT_TOKEN;
    const certId = args.id || CERT_ID;
    const localIp = getLocalIpAddress();
    const devPort = process.env.PORT || '3000';

    // Target Production URL (Must always encode https://gargtelecom.in/verify/{token})
    const prodBaseUrl = 'https://gargtelecom.in';
    const prodVerifyUrl = `${prodBaseUrl}/verify/${token}`;

    // Local Wi-Fi testing URL for mobile scanner testing before domain is live
    const devWifiBaseUrl = `http://${localIp}:${devPort}`;
    const devWifiVerifyUrl = `${devWifiBaseUrl}/verify/${token}`;

    console.log('\n======================================================');
    console.log(' GARG TELECOM • CERTIFICATE QR CODE GENERATOR');
    console.log('======================================================');
    console.log(`Certificate ID    : ${certId}`);
    console.log(`Permanent Token   : ${token}`);
    console.log(`Production URL    : ${prodVerifyUrl}`);
    console.log(`Local Wi-Fi IP    : ${localIp}`);

    // =========================================================================
    // 1. PRODUCTION QR CODES (PNG + SVG with margin 4, errorCorrectionLevel H)
    // =========================================================================
    console.log('\n[1/2] Generating Production QR Codes (for certificate artwork)...');
    
    // Exact requested names: <CERTIFICATE-ID>-qr.png and <CERTIFICATE-ID>-qr.svg
    const pngPath = path.join(OUTPUT_DIR, `${certId}-qr.png`);
    const svgPath = path.join(OUTPUT_DIR, `${certId}-qr.svg`);

    await QRCode.toFile(pngPath, prodVerifyUrl, {
        type: 'png',
        width: 1000,
        margin: 4,
        color: { dark: '#000000', light: '#FFFFFF' },
        errorCorrectionLevel: 'H'
    });

    const svgString = await QRCode.toString(prodVerifyUrl, {
        type: 'svg',
        margin: 4,
        color: { dark: '#000000', light: '#FFFFFF' },
        errorCorrectionLevel: 'H'
    });
    fs.writeFileSync(svgPath, svgString, 'utf-8');

    // Also write alias with -production suffix for clarity
    fs.copyFileSync(pngPath, path.join(OUTPUT_DIR, `${certId}-qr-production.png`));
    fs.copyFileSync(svgPath, path.join(OUTPUT_DIR, `${certId}-qr-production.svg`));

    // =========================================================================
    // 2. LOCAL WI-FI TESTING QR CODE (For phone scanning during development)
    // =========================================================================
    console.log('\n[2/2] Generating Local Wi-Fi QR Code (for testing on phone before deploy)...');
    const devWifiPngPath = path.join(OUTPUT_DIR, `${certId}-qr-dev-wifi.png`);

    await QRCode.toFile(devWifiPngPath, devWifiVerifyUrl, {
        type: 'png',
        width: 1000,
        margin: 4,
        color: { dark: '#000000', light: '#FFFFFF' },
        errorCorrectionLevel: 'H'
    });

    console.log('\n======================================================');
    console.log('✓ ASSETS GENERATED SUCCESSFULLY');
    console.log('======================================================');
    console.log('Production QR (Encodes https://gargtelecom.in/verify/...):');
    console.log(`  • PNG : public/certificates/${certId}-qr.png (1000x1000, Level H, Margin 4)`);
    console.log(`  • SVG : public/certificates/${certId}-qr.svg (Vector SVG, Level H, Margin 4)`);
    console.log('\nDevelopment Wi-Fi QR (For scanning on phone right now on local Wi-Fi):');
    console.log(`  • PNG : public/certificates/${certId}-qr-dev-wifi.png`);
    console.log(`  • URL : ${devWifiVerifyUrl}`);
    console.log('======================================================\n');
}

main().catch(console.error);
