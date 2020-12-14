export type pageInfoType = {
    page: {
        title: String;
        description?: String;
        goToHome?: String;
    };
};

export type fragmentPropsType = {
    className?: string;
    infoElement: {
        fragment: {
            text?: string;
        },
    },
    onClick: () => void;
};

export type buttonPropsType = {
    className?: string;
    infoElement: {
        button: {
            type: string;
            className?: string;
            id?: string;
            text?: string;
        },
    },
    onClick?: (e: any) => void;
};

export interface EventType {
    on: (event: string, callback: () => void) => void;
    off: (event: string, callback: () => void) => void;
    emit: (event: string, ...props: any) => void;
};

export interface Props {
    eventBus?: EventType;
    props: [];
    infoElement?: object;
};
