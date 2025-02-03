import styles from "./nav.module.css";
import Link from "next/link";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}> 
          <div className={styles.logo}><Link href="/">BRYCE TOBIANO</Link></div>
          <div className={styles.links}>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="https://www.linkedin.com/in/bryce-tobiano">LinkedIn</Link>
              <Link href="/BryceTobianoResume.pdf">Resume</Link>
          </div>
          <Menu>
            <MenuButton className={styles.menuIcon}>
              <span className={styles.iconWrapper}>
                <HamburgerMenuIcon className={styles.hamburgerIcon} width="22" height="22" />
                <Cross2Icon className={styles.crossIcon} width="22" height="22" />
              </span>
            </MenuButton>
            <MenuItems anchor={{ to: 'bottom start', gap: '2em' }}  className={`${styles.menuItems}`} >
                <MenuItem>
                  <Link className={styles.menuItem} href="/about">About</Link>
                </MenuItem>
                <MenuItem>
                  <Link className={styles.menuItem} href="/portfolio">Portfolio</Link>
                </MenuItem>
                <MenuItem>
                  <Link className={styles.menuItem}  href="https://www.linkedin.com/in/bryce-tobiano">LinkedIn</Link>
                </MenuItem>
                <MenuItem>
                  <Link className={styles.menuItem} href="/BryceTobianoResume.pdf">Resume</Link>            
                </MenuItem>
              </MenuItems>
          </Menu>
      </nav>
    </>
  );
}
