import Searchbar from "../../components/searchbar";
import Gif from "../../components/gif";
import Data from "../../components/gif/data";

function Mario() {

  const GifList = Data
    .filter((item) => item.rating === "g")
    .map((item) => <Gif key={item.id} title={item.title} url={item.url} />);
    return (
      <div className="container">
        <h1>GIPHY YEAY</h1>
        <Searchbar />
        <div className="gif-list">{GifList}</div>
      </div>
    );
  }
  
export default Mario;