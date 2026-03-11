import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ScrollRestorationFix } from '../components/scroll-restoration-fix';

export const metadata = {
    title: {
        template: '%s | BULK',
        default: 'BULK'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className=" text-black ">
                <ScrollRestorationFix />
                <div className="flex flex-col min-h-screen px-6  sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
