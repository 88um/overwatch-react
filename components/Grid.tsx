"use client";

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-3 gap-3">
      {children}
    </div>
  );
};

export default Grid;
