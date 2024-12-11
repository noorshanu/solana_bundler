import { ArrowRight, Github } from 'lucide-react';
import Link from "next/link";
import { Button } from "../ui/button";
import Image from 'next/image';


export default function HeroSection() {
    return (
        <section className='flex flex-col items-center justify-center leading-6 mt-[3rem]' aria-label="Nextjs Starter Kit Hero">
            <div className=' flex justify-between items-center gap-4 flex-col sm:flex-row max-w-max sm:max-w-[1120px] mb-4'>
                <div className=' w-full sm:w-1/2'>
                    <h1 className='text-[4rem] pb-4 font-semibold tracking-tight  '>SPL BUNDLER</h1>
                    <p className=' mt-4'>A cutting-edge tool designed to optimize Solana transactions, Solana Bundler aggregates multiple transactions into a single, cost-efficient bundle. Maximize speed, reduce fees, and streamline your on-chain operations with seamless integration and superior performance. Perfect for developers, traders, and projects seeking efficiency in the Solana ecosystem.</p>
                    <div className="flex justify-start items-center gap-3">
                <Link href="/dashboard" className="mt-5">
                    <Button className="a rounded-md bg-btn text-sm font-semibold text-white">
                        Login
                    </Button>
                </Link>
                <Link href="/dashboard" className="mt-5">
                    <Button className=" rounded-md bg-btn text-sm font-semibold text-white">
                        Procced
                    </Button>
                </Link>

                <Link
                    href=""
                    target='_blank'
                    className="mt-5"
                    aria-label="Join Discord (opens in a new tab)"
                >
                    <Button variant="outline" className="flex gap-1">
                        Join Discord
                        <ArrowRight className='w-4 h-4' aria-hidden="true" />
                    </Button>
                </Link>
            
            </div>
                </div>
                <div className=' w-full sm:w-1/2'>
                    <Image src='/hero.png' height={500} width={400} alt='Illustration of Solana Bundler' className=' mx-auto' priority/>
                </div>
            </div>
            {/* <h1 className={`${TITLE_TAILWIND_CLASS} scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white mt-6`}>
            Launch your first token and go to the moon
            </h1> */}
          
           
            <div>
         
            </div>
        </section>
    )
}
