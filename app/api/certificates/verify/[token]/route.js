import { NextResponse } from 'next/server';
import { getCertificateByToken, isValidTokenFormat } from '@/lib/certificates';

export async function GET(request, { params }) {
    try {
        // Next.js 15: params is a Promise that should be awaited
        const resolvedParams = await params;
        const token = resolvedParams?.token;

        // Security check: validate token format (64 hex characters)
        if (!token || !isValidTokenFormat(token)) {
            return NextResponse.json(
                {
                    verified: false,
                    message: 'Certificate not found'
                },
                {
                    status: 404,
                    headers: {
                        'X-Robots-Tag': 'noindex, nofollow, noarchive',
                        'Cache-Control': 'no-store, max-age=0'
                    }
                }
            );
        }

        // Query certificate on the server using SHA-256 hash comparison
        const certificate = await getCertificateByToken(token);

        if (!certificate) {
            return NextResponse.json(
                {
                    verified: false,
                    message: 'Certificate not found'
                },
                {
                    status: 404,
                    headers: {
                        'X-Robots-Tag': 'noindex, nofollow, noarchive',
                        'Cache-Control': 'no-store, max-age=0'
                    }
                }
            );
        }

        // Check if certificate has been revoked
        if (certificate.status === 'Revoked') {
            return NextResponse.json(
                {
                    verified: false,
                    status: 'Revoked',
                    message: 'This certificate has been revoked by the issuing authority.',
                    certificate: {
                        certificateId: certificate.certificateId,
                        recipientName: certificate.recipientName,
                        certificateTitle: certificate.certificateTitle,
                        trainingName: certificate.trainingName,
                        role: certificate.role,
                        organization: certificate.organization,
                        issueDate: certificate.issueDate,
                        status: 'Revoked',
                        certificateImageUrl: certificate.certificateImageUrl,
                        period: certificate.period,
                        description: certificate.description
                    }
                },
                {
                    status: 200,
                    headers: {
                        'X-Robots-Tag': 'noindex, nofollow, noarchive',
                        'Cache-Control': 'no-store, max-age=0'
                    }
                }
            );
        }

        // Return verified certificate (strictly sanitized - no tokens, hashes, or database IDs)
        return NextResponse.json(
            {
                verified: true,
                certificate: {
                    certificateId: certificate.certificateId,
                    recipientName: certificate.recipientName,
                    certificateTitle: certificate.certificateTitle,
                    trainingName: certificate.trainingName,
                    role: certificate.role,
                    organization: certificate.organization,
                    issueDate: certificate.issueDate,
                    status: certificate.status,
                    certificateImageUrl: certificate.certificateImageUrl,
                    period: certificate.period,
                    description: certificate.description,
                    competencies: certificate.competencies,
                    contributions: certificate.contributions
                }
            },
            {
                status: 200,
                headers: {
                    'X-Robots-Tag': 'noindex, nofollow, noarchive',
                    'Cache-Control': 'private, no-cache, no-store, must-revalidate'
                }
            }
        );
    } catch (error) {
        // Never expose stack traces or internal implementation details
        return NextResponse.json(
            {
                verified: false,
                message: 'Certificate verification failed'
            },
            {
                status: 500,
                headers: {
                    'X-Robots-Tag': 'noindex, nofollow, noarchive',
                    'Cache-Control': 'no-store, max-age=0'
                }
            }
        );
    }
}
