import React from 'react';
import Image from "next/image";
import {MessagesSquare, Phone, Settings, Sun, Users2} from "lucide-react";
import styles from './Sidebar.module.scss'
import Link from "next/link";

const Sidebar = () => {
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
                <Link href="/friends">
                    <Users2 size={35} />
                </Link>
                <Link href="/call">
                    <Phone size={35} />
                </Link>
                <Link href="/chats">
                    <MessagesSquare size={35} />
                </Link>
                <Link href="/setting">
                    <Settings size={35} />
                </Link>
            </div>


            <Sun/>
        </aside>
    );
}

export default Sidebar;
