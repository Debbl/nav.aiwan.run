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
    <div>
      <h1>{item.name}</h1>
      {item.children.map((tile) => (
        <Tile tile={tile} key={tile.link} />
      ))}
    </div>
  );
}

export default Item;
