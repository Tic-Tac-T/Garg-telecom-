import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Garg Telecom Pvt. Ltd.',
    robots: {
        index: false,
        follow: false,
        noarchive: true
    }
};

export default function VerifyIndexPage() {
    // Hidden verification system: /verify itself is not a public directory or search page.
    redirect('/');
}
