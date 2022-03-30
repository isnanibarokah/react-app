const Searchbar = () => {
    return (
      <form className="formSearch">
        <div className="form-group">
          <input type="text" name="query" placeholder="Search gif..." required />
          <input type="submit" id="btnSearch" value="Search" />
        </div>
      </form>
    );
  };
  
  export default Searchbar;