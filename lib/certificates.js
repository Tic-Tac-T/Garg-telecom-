import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const CERTIFICATES_FILE = path.join(process.cwd(), 'data', 'certificates.json');

/**
 * Validates whether a token string is a 64-character hexadecimal string
 * (32 bytes = 64 hex chars).
 */
export function isValidTokenFormat(token) {
    if (!token || typeof token !== 'string') return false;
    const trimmed = token.trim();
    return /^[a-fA-F0-9]{64}$/.test(trimmed);
}

/**
 * Generates a SHA-256 hash for a given token string.
 */
export function hashToken(token) {
    if (!token || typeof token !== 'string') return '';
    return crypto.createHash('sha256').update(token.trim()).digest('hex');
}

/**
 * Reads all certificates from the certificates store.
 * (Internal only - never exposed directly via public API).
 */
function readCertificatesStore() {
    try {
        if (!fs.existsSync(CERTIFICATES_FILE)) {
            return [];
        }
        const fileData = fs.readFileSync(CERTIFICATES_FILE, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        console.error('Error reading certificates data:', error);
        return [];
    }
}

/**
 * Writes updated certificates back to the certificates store.
 */
function writeCertificatesStore(certificates) {
    try {
        fs.writeFileSync(CERTIFICATES_FILE, JSON.stringify(certificates, null, 2), 'utf-8');
        return true;
    } catch (error) {
        console.error('Error writing certificates data:', error);
        return false;
    }
}

/**
 * Queries the certificate database using the provided raw token.
 * 1. Validates token format (must be 64-char hex)
 * 2. Hashes token using SHA-256
 * 3. Compares against verificationTokenHash in database
 * 4. Returns only safe, public verification fields
 * 5. Handles both 'Verified' and 'Revoked' statuses gracefully
 */
export async function getCertificateByToken(token) {
    if (!isValidTokenFormat(token)) {
        return null;
    }

    const tokenHash = hashToken(token);
    const certificates = readCertificatesStore();

    const cert = certificates.find((c) => 
        c.verificationTokenHash === tokenHash || 
        (Array.isArray(c.verificationTokenHashes) && c.verificationTokenHashes.includes(tokenHash))
    );

    if (!cert) {
        return null;
    }

    // Return sanitized data - never expose token hashes or internal database metadata
    return {
        certificateId: cert.certificateId,
        recipientName: cert.recipientName,
        certificateTitle: cert.certificateTitle || 'Internship Completion Certificate',
        trainingName: cert.trainingName || cert.course || 'Full Stack Web Development',
        role: cert.role || cert.internshipRole || 'Full Stack Web Development Intern',
        organization: cert.organization || 'Garg Telecom Pvt. Ltd.',
        issueDate: cert.issueDate,
        status: cert.status || 'Verified',
        certificateImageUrl: cert.certificateImageUrl || cert.certificateImage || null,
        // Additional context for rich display
        period: cert.period || null,
        description: cert.description || '',
        competencies: cert.competencies || [],
        contributions: cert.contributions || cert.competencies || []
    };
}

/**
 * Resolves the base website URL dynamically without hardcoding.
 * Priority:
 * 1. process.env.NEXT_PUBLIC_SITE_URL (e.g. https://gargtelecom.in in production, http://localhost:3000 in dev)
 * 2. Fallback to https://gargtelecom.in
 */
export function getSiteBaseUrl() {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
    }
    return 'https://gargtelecom.in';
}

/**
 * Returns the absolute verification URL for a given token using the configured base URL.
 */
export function formatVerificationUrl(token, customBaseUrl = null) {
    const base = (customBaseUrl || getSiteBaseUrl()).replace(/\/$/, '');
    return `${base}/verify/${token}`;
}

/**
 * Helper to add a new legitimate certificate record.
 */
export function addCertificate({
    certificateId,
    recipientName,
    certificateTitle = 'Internship Completion Certificate',
    trainingName = 'Full Stack Web Development',
    role = 'Full Stack Web Development Intern',
    organization = 'Garg Telecom Pvt. Ltd.',
    issueDate,
    description = '',
    competencies = [],
    certificateImageUrl = null,
    baseUrl = null
}) {
    const rawToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = hashToken(rawToken);
    const certificates = readCertificatesStore();

    // Check for duplicate certificateId
    if (certificates.some((c) => c.certificateId.toLowerCase() === certificateId.toLowerCase())) {
        throw new Error(`Certificate with ID "${certificateId}" already exists.`);
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
        competencies,
        certificateImageUrl,
        certificateImage: certificateImageUrl,
        createdAt: new Date().toISOString()
    };

    certificates.push(newRecord);
    writeCertificatesStore(certificates);

    return {
        certificate: newRecord,
        rawToken,
        verificationUrl: formatVerificationUrl(rawToken, baseUrl)
    };
}

/**
 * Helper to revoke a certificate.
 */
export function revokeCertificate(certificateId) {
    const certificates = readCertificatesStore();
    const certIndex = certificates.findIndex((c) => c.certificateId.toLowerCase() === certificateId.toLowerCase());

    if (certIndex === -1) {
        return false;
    }

    certificates[certIndex].status = 'Revoked';
    certificates[certIndex].updatedAt = new Date().toISOString();
    return writeCertificatesStore(certificates);
}
