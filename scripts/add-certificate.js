import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';

const CERTIFICATES_FILE = path.join(process.cwd(), 'data', 'certificates.json');
const PUBLIC_CERTS_DIR = path.join(process.cwd(), 'public', 'certificates');

if (!fs.existsSync(PUBLIC_CERTS_DIR)) {
    fs.mkdirSync(PUBLIC_CERTS_DIR, { recursive: true });
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

    const certificateId = args.id || args.certificateId || `GT-CERT-${Date.now().toString().slice(-4)}`;
    const recipientName = args.name || args.recipientName || 'Hardik Bindal';
    const certificateTitle = args.title || args.certificateTitle || 'Internship Completion Certificate';
    const trainingName = args.training || args.trainingName || args.course || 'Full Stack Web Development';
    const role = args.role || args.internshipRole || 'Full Stack Web Development Intern';
    const organization = args.org || args.organization || 'Garg Telecom Pvt. Ltd.';
    const issueDate = args.date || args.issueDate || 'July 15, 2026';
    const certificateImageUrl = args.image || args.certificateImageUrl || `/certificates/hardik-bindal-certificate.jpg`;
    const description = args.desc || args.description || `Successfully completed ${trainingName} training/internship at Garg Telecom Pvt. Ltd.`;

    // 1. Generate 64-char cryptographically secure token (32 bytes = 64 hex characters)
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');

    // Production URL (Permanent target domain)
    const prodBaseUrl = 'https://gargtelecom.in';
    const prodVerificationUrl = `${prodBaseUrl}/verify/${rawToken}`;

    // 2. Generate QR code files (PNG 1000px, SVG, Level H, Margin 4)
    const pngQrPath = path.join(PUBLIC_CERTS_DIR, `${certificateId}-qr.png`);
    const svgQrPath = path.join(PUBLIC_CERTS_DIR, `${certificateId}-qr.svg`);

    await QRCode.toFile(pngQrPath, prodVerificationUrl, {
        type: 'png',
        width: 1000,
        margin: 4,
        color: { dark: '#000000', light: '#FFFFFF' },
        errorCorrectionLevel: 'H'
    });

    const svgQr = await QRCode.toString(prodVerificationUrl, {
        type: 'svg',
        margin: 4,
        color: { dark: '#000000', light: '#FFFFFF' },
        errorCorrectionLevel: 'H'
    });
    fs.writeFileSync(svgQrPath, svgQr, 'utf-8');

    // 3. Save into certificates store
    let certificates = [];
    if (fs.existsSync(CERTIFICATES_FILE)) {
        try {
            certificates = JSON.parse(fs.readFileSync(CERTIFICATES_FILE, 'utf-8'));
        } catch (e) {
            certificates = [];
        }
    }

    // Check for existing ID
    if (certificates.some((c) => c.certificateId.toLowerCase() === certificateId.toLowerCase())) {
        console.error(`Error: Certificate with ID "${certificateId}" already exists.`);
        process.exit(1);
    }

    const newRecord = {
        certificateId,
        recipientName,
        certificateTitle,
        trainingName,
        course: trainingName,
        role,
        internshipRole: role,
        organization,
        issueDate,
        verificationTokenHash: tokenHash,
        status: 'Verified',
        description,
        certificateImageUrl,
        certificateImage: certificateImageUrl,
        createdAt: new Date().toISOString()
    };

    certificates.push(newRecord);
    fs.writeFileSync(CERTIFICATES_FILE, JSON.stringify(certificates, null, 2), 'utf-8');

    console.log('\n======================================================');
    console.log('✓ NEW CERTIFICATE ISSUED & REGISTERED SUCCESSFULLY');
    console.log('======================================================');
    console.log(`Certificate ID       : ${certificateId}`);
    console.log(`Recipient Name       : ${recipientName}`);
    console.log(`Certificate Title    : ${certificateTitle}`);
    console.log(`Training Program     : ${trainingName}`);
    console.log(`Role                 : ${role}`);
    console.log(`Organization         : ${organization}`);
    console.log(`Issue Date           : ${issueDate}`);
    console.log(`Status               : Verified`);
    console.log(`Verification Hash    : ${tokenHash}`);
    console.log(`Secret Raw Token     : ${rawToken}`);
    console.log(`Production URL       : ${prodVerificationUrl}`);
    console.log(`PNG QR Code (1000px) : public/certificates/${certificateId}-qr.png`);
    console.log(`SVG QR Code (Vector) : public/certificates/${certificateId}-qr.svg`);
    console.log('======================================================\n');
}

main().catch(console.error);
