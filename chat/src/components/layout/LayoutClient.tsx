import React, {FC, PropsWithChildren} from 'react';
import Sidebar from "@/components/layout/sidebar/Sidebar";
import styles from './Layout.module.scss'

const LayoutClient: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <main className={styles.layout}>
            <Sidebar />

            <section>{children}</section>
        </main>
    );
}

export default LayoutClient;
