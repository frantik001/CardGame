export {};

type ApplicationType = {
    blocks: {
        [key: string]: (container: HTMLElement, ...args: string[]) => void;
    };
    screens: { [key: string]: () => void };
    renderScreen: (screenName: string) => void;
    renderBlock: (
        blockName: string,
        container: HTMLElement,
        ...args: string[]
    ) => void;
};

declare global {
    interface Window {
        application: ApplicationType;
    }
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
