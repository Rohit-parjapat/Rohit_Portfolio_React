import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.addEventListener("scroll", listenToScroll);
  });

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .top-btn {
    font-size: 1.7rem;
    width: 3rem;
    height: 3rem;
    color: white;
    background-color: #1b1b9d;
    box-shadow: rgb(16 141 239 / 57%) 0px 0px 6px 4px;
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.12s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.4rem);
      }
      100% {
        transform: translateY(0.4rem);
      }
    }
  }
`;
export default GoToTop;
