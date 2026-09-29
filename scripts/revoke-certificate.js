import fs from 'fs';
import path from 'path';

const CERTIFICATES_FILE = path.join(process.cwd(), 'data', 'certificates.json');

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

function main() {
    const args = parseArgs();
    const certificateId = args.id || args.certificateId;

    if (!certificateId) {
        console.error('Please specify a certificate ID to revoke: node scripts/revoke-certificate.js --id <CERT_ID>');
        process.exit(1);
    }

    if (!fs.existsSync(CERTIFICATES_FILE)) {
        console.error('Certificates data file not found.');
        process.exit(1);
    }

    const certificates = JSON.parse(fs.readFileSync(CERTIFICATES_FILE, 'utf-8'));
    const index = certificates.findIndex((c) => c.certificateId.toLowerCase() === certificateId.toLowerCase());

    if (index === -1) {
        console.error(`Certificate "${certificateId}" not found in database.`);
        process.exit(1);
    }

    certificates[index].status = 'Revoked';
    certificates[index].revokedAt = new Date().toISOString();
    fs.writeFileSync(CERTIFICATES_FILE, JSON.stringify(certificates, null, 2), 'utf-8');

    console.log(`\n✓ Certificate "${certificateId}" for ${certificates[index].recipientName} has been REVOKED.`);
    console.log('Any verification requests for this certificate will now report its status as "Revoked".\n');
}

main();
