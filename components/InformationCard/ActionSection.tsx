import CircleElement from "../CircleElement";
import IconButton from "./IconButton";

interface ActionSectionProps {
    icon: string;
    alt: string;
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    note?: React.ReactNode;
    data: number
  }
  
  const ActionSection = ({ 
    icon, 
    alt, 
    isHovered, 
    onMouseEnter, 
    onMouseLeave, 
    note,
    data 
  }: ActionSectionProps) => {
    return (
      <div className='w-24 flex flex-col items-center gap-3'>
        <div className='flex items-center gap-x-1'>
          <IconButton
            icon={icon}
            isHovered={isHovered}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            alt={alt}
          />
          <CircleElement count={data}/>
        </div>
        <div className="h-6">
          {note}
        </div>
      </div>
    );
  };

  export default ActionSection