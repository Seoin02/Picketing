import Dropdown from '.';
const meta = {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {
        title: { control: 'text' },
        width: { control: 'text' },
    },
};
export default meta;
export const Default = {
    args: {
        title: '다른 사이트의 서버 시간',
        width: 'small',
    },
};
