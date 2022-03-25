const Gif = ({ title, url }) => {
    return (
      <div className="gif">
        <h3>{title}</h3>
        <img src={url} alt={title} />
      </div>
    );
  };
  
  export default Gif;