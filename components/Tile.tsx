interface IProps {
  tile: {
    name: string;
    favicon: string;
    link: string;
  };
}
function Tile(props: IProps) {
  return (
    <div>
      <h2>{props.tile.name}</h2>
    </div>
  );
}

export default Tile;
