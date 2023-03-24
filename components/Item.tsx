import Tile from "./Tile";

interface IProps {
  item: {
    name: string;
    children: {
      name: string;
      favicon: string;
      link: string;
      description: string;
    }[];
  };
}

function Item(props: IProps) {
  const { item } = props;
  return (
    <div className="mt-6">
      <h1 className="text-xl font-medium">{item.name}</h1>
      <div className="mt-3 flex items-center gap-2">
        {item.children.map((tile) => (
          <Tile tile={tile} key={tile.link} />
        ))}
      </div>
    </div>
  );
}

export default Item;
