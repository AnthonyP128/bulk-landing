import '../styles/globals.css';
import Script from 'next/script';
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
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1019934936393294&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>

                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1019934936393294');
                        fbq('track', 'PageView');
                    `}
                </Script>

                <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16513618146" strategy="afterInteractive" />
                <Script id="google-ads-gtag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16513618146');
                    `}
                </Script>

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
