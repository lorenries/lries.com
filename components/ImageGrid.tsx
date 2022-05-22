interface Props {
  children: React.ReactNode;
}

const ImageGrid = ({ children }: Props) => {
  return <div className="grid grid-flow-col gap-2">{children}</div>;
};

export default ImageGrid;
