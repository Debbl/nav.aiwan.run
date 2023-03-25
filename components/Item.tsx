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
    <div className="mx-auto mt-6 w-[22rem] md:w-[44rem] lg:w-[63rem]">
      <h1 className="text-xl font-medium">{item.name}</h1>
      <div className="mt-3 grid grid-cols-1 items-center justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-3">
        {item.children.map((tile) => (
          <Tile tile={tile} key={tile.link} />
        ))}
      </div>
    </div>
  );
}

export default Item;
