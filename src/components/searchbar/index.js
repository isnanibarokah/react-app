const Searchbar = () => {
    return (
        <form id="form" className="formSearch">
          <div className="form-group">
            <input type="text" name="title"/>
            <button id="btnSearch" type="submit">Search</button>
          </div>
        </form>
    );
  };
  
  export default Searchbar;