import React from "react";
import Cards from "./Cards";

function Works() {
  const cardData = [
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
    {
      image:
        "https://www.ipvanish.com/wp-content/uploads/2023/02/world-wide-web-vs-internet_IPV-blog-1536x1024.png",
      text: "sample",
    },
  ];

  return (
    <div
      id="explore"
      className="w-screen  pt-[8vh] h-screen text-white bg-[#070A29]"
    >
      <div className="our works w-[80vw] pt-[5vh] h-[20vh] flex flex-col items-center ">
        <div className="our-works bg-[#182066] px-2 rounded-md font-mono ">
          <p>Our Speciality</p>
        </div>
        <div className="work-title text-[2.5vmax] max-sm:px-4 max-sm:text-[4.5vmax] mt-[1vw] font-rfont ">
          <h1>Our Collection</h1>
        </div>
      </div>
      <div className="w-screen mt-[5vh] h-[22rem] justify-center   items-center overflow-hidden gap-4 flex whitespace-nowrap ">
        {cardData.map((items, index) => {
          return (
            <Cards
              key={index}
              imageurl={`${items.image}`}
              cardtext={`${items.text}`}
            ></Cards>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
