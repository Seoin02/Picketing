import { useListOpenState } from './hooks/useListOpen';

export type TriggerProps = {
  title: string;
};

const Trigger = ({ title, isClicked, handleClick }: TriggerProps & useListOpenState) => {
  return (
    <div className={`w-full h-6 border-2 border-gold-50 flex items-center p-1 justify-between`}>
      <p className="text-xs font-bold">{title}</p>
      <p className="text-gold-50 text-lg cursor-pointer" onClick={handleClick}>
        {isClicked ? '▲' : '▼'}
      </p>
    </div>
  );
};

export default Trigger;
