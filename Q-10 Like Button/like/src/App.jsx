import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { ImSpinner2 } from "react-icons/im";

function App() {
  const [liked, setLiked] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const handleLikeUnlike = () => {
    setIsFetching(true);
    setTimeout(() => {
      console.log("Hello");
      setIsFetching(false);
    }, 2000);
    
  };
  return (
    <div className="container">
      <button
      disabled={isFetching}
        className={`likeBtn ${liked ? "liked" : ""}`}
        onClick={handleLikeUnlike}
      >
        {isFetching ? <ImSpinner2 /> : <CiHeart size={25} />}{" "}
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default App;
