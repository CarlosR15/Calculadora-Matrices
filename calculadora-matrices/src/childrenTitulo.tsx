import { ReactNode } from "react";

const ChildrenTt: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

export default ChildrenTt;