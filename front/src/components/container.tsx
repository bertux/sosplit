import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="bg-[#141414] text-white min-h-screen p-6">
      {children}
    </div>
  );
};

export default Container;
