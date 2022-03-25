import Searchbar from "../../components/searchbar";
import Gif from "../../components/gif";
import Data from "../../components/gif/data";

function Mario() {
    return (
      <div className="container">
        <Searchbar />
        <Gif title={Data.title} url={Data.url} />
      </div>
    );
  }
  
export default Mario;