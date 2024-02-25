import { cn } from '@promptus/web/shared/util';
import { Github, Linkedin, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import logo from './../../assets/dummy-logo-5b.png';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { FunctionComponent } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

export interface SidebarItem {
  link: string;
  label: string;
  icon: LucideIcon;
}

export interface SidebarProps {
  sidebarItems: Array<SidebarItem>;
  setActiveLink: (active: string) => void;
  activeLink: string;
  show: boolean;
  toggleSidebar: () => void;
}

interface ModalOverlayProps {
  onClick: () => void;
}

const ModalOverlay: FunctionComponent<ModalOverlayProps> = ({ onClick }) => (
  <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={onClick} />
);

export function Sidebar({
  sidebarItems,
  setActiveLink,
  activeLink,
  show,
  toggleSidebar,
}: SidebarProps) {
  const links = sidebarItems.map((item) => (
    <NavigationMenuItem key={item.label}>
      <Link href={item.link} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <item.icon className="mr-4 h-6 w-6" />
          {item.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    // <Button variant="ghost" asChild>
    //   <Link
    //     className={cn(
    //       `flex items-center text-lg font-medium px-2.5
    //     py-3`,
    //       item.label === activeLink && `bg-sky-500 bg-opacity-20`
    //     )}
    //     href={item.link}
    //     key={item.label}
    //     onClick={() => {
    //       setActiveLink(item.label);
    //       toggleSidebar();
    //     }}
    //   >
    //     <item.icon className="mr-4 h-6 w-6" />
    //     {item.label}
    //   </Link>
    // </Button>
  ));

  return (
    <>
      <div
        className={cn(
          `flex flex-col min-h-screen p-4 border-r transition-[margin-left] ease-in-out duration-500 
          fixed md:static top-0 bottom-0 left-0 z-40`,
          show ? `ml-0` : `ml-[-300px] md:ml-0`,
          styles.sidebar
        )}
      >
        <div className="flex-1">
          <div className="pb-4 mb-10">
            <Image src={logo} alt="logo" priority={true} />
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start">
              {links}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-between items-center border-t">
          <div className="mt-3">
            <a href="/" onClick={(event) => event.preventDefault()}>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4"></Linkedin>
              </Button>
            </a>
            <a href="/" onClick={(event) => event.preventDefault()}>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4"></Github>
              </Button>
            </a>
          </div>
          <Badge variant="outline" className="mt-3 px-4 max-h-6">
            v3.1.1
          </Badge>
        </div>
      </div>
      {show && <ModalOverlay onClick={toggleSidebar} />}
    </>
  );
}

export default Sidebar;