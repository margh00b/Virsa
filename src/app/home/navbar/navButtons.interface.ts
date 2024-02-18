export interface NavButton {
  label: string;
  submenu: boolean;
  isSubmenuOpen?: boolean;
  navLink?: string;
  clickHandler?: () => void;
  submenuContent?: NavButton[];
}
