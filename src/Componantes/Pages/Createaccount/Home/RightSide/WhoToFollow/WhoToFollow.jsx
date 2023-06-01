import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./WhoToFollow.module.css";
import Buttons from "../WhatHappening/Buttons";
import VerifiedIcon from "@mui/icons-material/Verified";

function WhoToFollow() {
    const [followContainer, setFollowContainer] = useState([
        {
          id: 1,
          tag: <i className="far fa-solid fa-badge-check"></i>,
          src: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
          text: "Elon Musk",
          text2: "@elonmusk",
        },
    
        {
          id: 3,
          tag: <i className="fa fa-solid fa-badge-check"></i>,
          src: "https://pbs.twimg.com/profile_images/1189494401359208448/AwbXHtpn_400x400.jpg",
          text: "Ratan Tata",
          text2: "@tataratan",
        },
    
        {
          id: 6,
          tag: <i className="fa fa-solid fa-badge-check"></i>,
          src: "https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg",
          text: "Virat Kohli",
          text2: "@kohlivirat",
        },
        {
          id: 4,
          tag: <i className="fa fa-solid fa-badge-check"></i>,
          src: "https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
          text: "Narendra Modi",
          text2: "@modi",
        },
        {
          id: 5,
          tag: <i className="fa fa-solid fa-badge-check"></i>,
          src: "https://pbs.twimg.com/profile_images/1611332347470692353/h5JnKeil_400x400.jpg",
          text: "Lionel Messi",
          text2: "@Messi",
        },
      ]);
      const [trendingpage, setTrendings] = useState(followContainer.slice(0, 4));
      const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);
 
      const handleClick = (id) => {
        const updatedFollowContainer = followContainer.map((item) => {
          if (item.id === id) {
            item.followed = !item.followed;
          }
          return item;
        });
        setFollowContainer(updatedFollowContainer);
      };
    
      // handle seeAll request
      function handleRequestSeeAll() {
        setIsShowingAllTrendings(!isShowingAllTrendings);
        if (isShowingAllTrendings) {
          return setTrendings(followContainer.slice(0, 4));
        }
        setTrendings(followContainer);
      }   
  return (
    <div className={style.container}>
    <h1>Who to follow</h1>
    <div className={style.main}>
      {trendingpage.map((menu, id) => {
        return (
          <div key={id} className={style.wrapper}>
            <Avatar alt="Remy Sharp" src={menu.src} />
            <div  className={style.img}>
           
                <span className="data">
                {menu.text}
                <span style={{ color: "blue" }}> {menu.tag} </span>
               <spam><VerifiedIcon style={{ color: "#1D9BF0", width: "1rem" }} />
            </spam> 
             </span>  
              <span  className="dataa">{menu.text2}</span>  
           
            </div>
            <div className={style.btntxt}>
              <Buttons
                buttonText={menu.followed ? "Following" : "Follow"}
                btnNext={() => handleClick(menu.id)}
                key={menu.id}
                customCss={style.follwButton}
                disabled={menu.followed}
              />
            </div>
          </div>
        );
      })}
      <div className={style.btn2}>
        <Buttons
          customCss={style.btn2}
          buttonText={isShowingAllTrendings ? "Show Less" : "Show More"}
          btnNext={handleRequestSeeAll}
        />
       
      </div>
     
    </div>
    {/* <p>Terms of Service
Privacy Policy
Cookie Policy
Accessibility
Ads info
More
© 2023 X Corp.</p> */}
  </div>
  )
}

export default WhoToFollow