import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Semester — Your campus, in balance', description: 'A calmer home for your college life. Plan classes, assignments, grades, and meals.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
