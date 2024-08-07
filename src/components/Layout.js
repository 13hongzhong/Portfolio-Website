import React from 'react';
import Link from 'next/link';
import { LinkArrow } from '../components/Icons';
import Image from 'next/image';

const Layout = () => {
  return (
    <main className="flex items-center justify-center text-dark w-full min-h-screen" style={{ 
        backgroundColor: '#f4f5f6',
        backgroundImage: "url('/13yao/images/background/square.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px'
    }}>
      <div className="container mx-auto my-5 p-3 rounded-lg shadow-lg" style={{ maxWidth: '1200px', backgroundColor: '#f3f4f6' }}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 mb-3">
            <div
              style={{
                backgroundImage: "url('/13yao/images/profile/photo1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '16px',
                minHeight: '450px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              }}
              className="rounded-lg h-full"
            ></div>
          </div>
          <div className="w-full lg:w-5/12 px-3">
            <div className="relative py-3 mb-3 rounded-lg" style={{ backgroundColor: ' #d7d7d7', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="text-white text-center py-3">
                <h1 className="text-3xl font-bold uppercase mb-1" style={{ letterSpacing: '2.5px' }}>
                  Tina ✿ 崔黛倩
                </h1>
                <p className="text-sm" style={{ letterSpacing: '1px' }}>
                  illustrator • writer • developer
                </p>
              </div>
            </div>
            <div className="p-3 bg-gray-100 mb-3 rounded-lg overflow-auto" style={{ height: '270px', lineHeight: '1.4', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <p>
                Hi! I&rsquo;m Tina, an artist and developer based in the United States. I began programming in middle school through online forum games and have now
                graduated with a bachelor&rsquo;s degree in Computer Science. I am currently learning how to draw in my free time and brushing up on
                cybersecurity. I also enjoy creating games, designing websites, data science, and anything tech-related! I&rsquo;m open to learning about
                anything that catches my interest. Currently, I&rsquo;m addicted to playing Dynasty Warriors 3, Ashes of the Kingdom, and Gujian 3.
                The character on the screen is of an original character from my novel! I cherish him very much!
                If you are ever interested in working with me, please send me an email at <a className="text-darkbeige" href="mailto:cuit980@gmail.com">cuit980@gmail.com</a>!
              </p>
            </div>
            <div className='flex justify-center lg:self-center md:mb-9 md:mt-9 sm:mt-6 sm:mb-6 mb-4'>
              <div className='flex'>
                <Link
                  href="/Tina_Cui_Resume_6_27_24.pdf"
                  target="_blank"
                  className="flex items-center bg-beige text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-beige border-2 border-solid border-transparent hover:border-pink"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:cuit980@gmail.com"
                  target="_blank"
                  className="ml-4 bg-beige text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-beige border-2 border-solid border-transparent hover:border-pink"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/12">
            <div className="h-full flex flex-col justify-between">
              <div
                style={{
                  backgroundImage: "url('/13yao/images/background/beige_paw.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '150px',
                  borderRadius: '16px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
                className="mb-3"
              ></div>
              <div
                style={{
                  backgroundImage: "url('/13yao/images/background/blue_paw.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '150px',
                  borderRadius: '16px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
                className="mb-3"
              ></div>
              <div
                style={{
                  backgroundImage: "url('/13yao/images/background/pink_paw.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '150px',
                  borderRadius: '16px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
                className="mb-3"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
