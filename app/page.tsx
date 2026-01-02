import DataTable from '@/components/DataTable'
import CoinOverview from '@/components/home/CoinOverview';
import TrendingCoin from '@/components/home/TrendingCoin';
import { fetcher } from '@/lib/coingecko.action';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { Suspense } from 'react'



const page = async () => {

  return (
    <main className='main-container'>
      <section className='home-grid'>
        <Suspense fallback={ <div>Loading Overview...</div> }>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={ <div>Loading Trending...</div> }>
          <TrendingCoin />
        </Suspense>
      </section>

      <section className='w-full mt-7 space-y-4'>
        <p>Categories</p>
      </section>
    </main>
  )
}

export default page