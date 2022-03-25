function Mario() {
    return (
      <div className="container">
        <form id="form" className="formSearch">
          <div className="form-group">
            <input type="text" name="title"/>
            <button id="btnSearch" type="submit">Search</button>
          </div>
        </form>
        <img
          src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
          className="image"
          alt="GIF"
        />
      </div>
    );
  }
  
export default Mario;