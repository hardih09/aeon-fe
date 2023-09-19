import React from 'react';
import styles from './page.module.css';
import { Input } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="i-y-top x-center">
      <div className={styles.navbarBody}>
        <p className={styles.navTitle}>Navbar</p>
        <div className={styles.navWrap}>
          <div className={styles.navContainer}>
            <div className={styles.navItem}>
              <a href="/" className={styles.navItemText}>AEON</a>
              <div className={styles.mIcon}>
                <div className={styles.itemIcon}>
                  <SearchOutlined />
                </div>
                <div className={styles.itemIcon}>
                  <CloseOutlined />
                </div>
              </div>
            </div>
            <div className={styles.navItem}>
              <a href="/" className={styles.navItemText}>Showcase</a>
            </div>
            <div className={styles.navItem}>
              <a href="/" className={styles.navItemText}>Docs</a>
            </div>
            <div className={styles.navItem}>
              <a href="/" className={styles.navItemText}>Blog</a>
            </div>
            <div className={styles.navItem}>
              <a href="/" className={styles.navItemText}>Analytics</a>
            </div>
            <div className={styles.navItem}>
              <a href="/" className={styles.navItemText}>Template</a>
            </div>
            <div className={styles.navItem}>
              <a href="/" className={styles.navItemText}>Enterprise</a>
            </div>
          </div>
          <div className={styles.navSearch}>
            <Input type="text" size="middle" placeholder="Search documentation..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar