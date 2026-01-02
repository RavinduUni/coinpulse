import React from 'react'
import DataTable from '../DataTable';
import { fetcher } from '@/lib/coingecko.action';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { cn, formatCurrency } from '@/lib/utils';
import Link from 'next/link';

const TrendingCoin = async () => {

    const trendingCoins = await fetcher<{ coins: TrendingCoin[] }>('/search/trending', undefined, 300);

    const columns: DataTableColumn<TrendingCoin>[] = [
        {
            header: 'Name',
            cellClassName: 'name-cell',
            cell: (coin) => {
                const item = coin.item;

                return (
                    <Link href={`/coins/${item.id}`}>
                        <Image src={item.large} alt={item.name} width={36} height={36} />
                        <p>{item.name}</p>
                    </Link>
                )
            }
        },
        {
            header: '24h Change',
            cellClassName: 'name-cell',
            cell: (coin) => {
                const item = coin.item;
                const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
                const percentage = item.data.price_change_percentage_24h.usd.toFixed(2);

                return (
                    <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
                        <p>
                            {isTrendingUp ? (
                                <TrendingUp width={16} height={16} />
                            ) : (
                                <TrendingDown width={16} height={16} />
                            )}
                        </p>
                        <p>{percentage}%</p>
                    </div>
                )
            }
        },
        {
            header: 'Price',
            cellClassName: 'price-cell',
            cell: (coin) => formatCurrency(coin.item.data.price)
        }
    ]

    return (
        <div id='trending-coins'>
            <h4>Trending Coins</h4>
            <div id='trending-coins'>
                <DataTable
                    columns={columns}
                    data={trendingCoins.coins.slice(0, 6) || []}
                    rowKey={(coin) => coin.item.id}
                    tableClassName='trending-coins-table'
                    headerCellClassName='py-3!'
                    bodyCellClassName='py-2!'
                />
            </div>
        </div>
    )
}

export default TrendingCoin