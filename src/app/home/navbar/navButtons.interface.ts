export interface NavButton {
  label: string;
  submenu: boolean;
  navLink?: string;
  clickHandler?: () => void;
}
