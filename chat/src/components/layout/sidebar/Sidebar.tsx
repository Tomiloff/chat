'use client';

import cn from 'clsx';
import React from 'react';
import Image from "next/image";
import {Sun} from "lucide-react";
import styles from './Sidebar.module.scss'
import Link from "next/link";
// import {headers} from "next/headers";
import {MENU} from "@/components/layout/sidebar/sidebar.data";

const Sidebar = () => {
    // const headerList = headers();
    // const headerUrl = headerList.get('referer');
    //
    // console.log(headerUrl?.split('/').slice(3).join('/'))

    return (
        <aside className={styles.sidebar}>
            <Image
                src="./logo.svg"
                priority
                alt=""
                width={45}
                height={45}
            />

            <div>
                {MENU.map(item => {
                    return (
                        <Link
                            href={item.url}
                            key={item.url}
                            className={cn({
                                [styles.active]: false,
                            })}
                        >
                            <item.icon size={27} />
                        </Link>
                    )
                })
                }
            </div>

            <Sun/>
        </aside>
    );
}

export default Sidebar;
