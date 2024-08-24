import { ReactNode } from "react";

const Container = ({children} : {children : ReactNode}) => {
    return(
        <div className="min-h-custom">
             {children}
        </div>
    )}
export default Container;