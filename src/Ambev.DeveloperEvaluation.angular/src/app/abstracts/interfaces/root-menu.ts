export interface RootMenu {
    classImage: string;
    caption: string;
    router?: string | null;
    showSubItems: boolean;
    children: RootMenu[];
}