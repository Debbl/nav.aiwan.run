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
    <div className="border inline-block p-2 w-80 rounded-sm ">
      <a title={tile.name} href={tile.link} className="flex items-center gap-3">
        <div>
          <Image
            src={tile.favicon}
            alt={tile.name}
            width={30}
            height={30}
            unoptimized
          ></Image>
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
