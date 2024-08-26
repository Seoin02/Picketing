import { useListOpenState } from './hooks/useListOpen';
export type TriggerProps = {
    title: string;
};
declare const Trigger: ({ title, isClicked, handleClick }: TriggerProps & useListOpenState) => import("react/jsx-runtime").JSX.Element;
export default Trigger;
