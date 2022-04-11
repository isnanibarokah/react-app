const Gif = ({ title, url }) => {
  return (
    <div className="card-gif">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
  
export default Gif;