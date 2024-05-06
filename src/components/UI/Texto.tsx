interface TextProps {
    size?: string | null | undefined;
    color?: string | null | undefined;
    weight?: string | null | undefined;
    children: string | React.ReactNode | null | undefined;
}

const Text = ({ size, color, children, weight }: TextProps) => {
    return <span className={[`text-${size}`, `text-color-${color}`, `text-weight-${weight}`].join(" ")}>{children}</span>;
};

export default Text