import { createContext, useState } from "react";

export interface ModalProviderProps {
    children: JSX.Element;
}

export interface ModalContextProps {
    setModalState(ModalState: boolean): void;
    ModalState: boolean;
}


export const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
    const [ModalState, setStateModal] = useState<boolean>(false);


    function setModalState(status: boolean): void {
        setStateModal(status);
    }


    return (
        <ModalContext.Provider
            value={{
                ModalState,
                setModalState,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}
