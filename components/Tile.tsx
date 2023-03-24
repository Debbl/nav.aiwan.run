import Image from "next/image";
interface IProps {
  tile: {
    name: string;
    favicon: string;
    link: string;
    description: string;
  };
}
function Tile(props: IProps) {
  const { tile } = props;
  return (
    <div className="inline-block h-24 w-80 rounded-xl border-2 px-2">
      <a
        title={tile.name}
        href={tile.link}
        className="flex h-full w-full items-center gap-3"
      >
        <div className="w-[30px] shrink-0 overflow-hidden rounded-sm">
          <Image src={tile.favicon} alt={tile.name} width={30} height={30} />
        </div>
        <div>
          <h2>{tile.name}</h2>
          <p className="text-gray-500">{tile.description}</p>
        </div>
      </a>
    </div>
  );
}

export default Tile;
