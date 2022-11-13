import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faItunes,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function WorkCard({ title, links, img, handleModalVideo }) {
  return (
    <div
      style={{
        backgroundImage: `url(/images/${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "12px",
      }}
      className="work_card"
    >
      <h2>{title}</h2>
      <div
        style={{
          display: "inline",
        }}
        className="work_card_buttons"
      >
        <button
          onClick={() => {
            if (links?.spotify) window.open(links?.spotify, "_blank");
          }}
        >
          <FontAwesomeIcon icon={faSpotify} />
        </button>
        <button
          onClick={() => {
            if (links?.itunes) window.open(links?.itunes, "_blank");
          }}
        >
          <FontAwesomeIcon icon={faItunes} />
        </button>
        <button
          onClick={() => {
            handleModalVideo(links?.youtube || "");
          }}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </button>
      </div>
    </div>
  );
}

export default function Work({ handleModalVideo }) {
  return (
    <div
      id="work_grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "98%",
        gap: "12px",
        margin: "0 auto",
      }}
    >
      <h1>Albums</h1>
      <h1>Singles</h1>
      <WorkCard
        title="Evening Melodies Vol. 1"
        img="evening_melodies_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify: "https://open.spotify.com/album/055xRzbgPZX9XwDW5cGs3D",
          itunes:
            "https://music.apple.com/us/album/evening-melodies-vol-1-single/1558377874",
          youtube: "rRkeV-Vuc_I",
        }}
      />
      <WorkCard
        title="Overture: Entropy"
        img="overture_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify: "https://open.spotify.com/album/6fa3qXqsUwdfxCkCzhP87P",
          itunes:
            "https://music.apple.com/us/album/overture-entropy-single/1566826835",
          youtube: "yjp8nYsuZkE",
        }}
      />
      <WorkCard
        title="Journey I"
        img="journey_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify:
            "https://open.spotify.com/album/07Kp9yAlrn9cb9PXclvGZk?si=yrm0lkRwSLWWLft9zgIHvg",
          itunes: "https://music.apple.com/us/album/journey-i/1555575638",
          youtube: "ex9sty5eDJg",
        }}
      />
      <WorkCard
        title="Redirection"
        img="redirection_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify: "https://open.spotify.com/track/5xODV3v08muiz9ao9omfDl",
          itunes:
            "https://music.apple.com/us/album/redirection-single/1539690207",
          youtube: "1Xd34KJ0nHA",
        }}
      />
      <WorkCard
        title="Serenades and Lullabies"
        img="sal_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify: "https://open.spotify.com/album/2Bq8Dlbj3xTDMhPd7algGO",
          itunes:
            "https://music.apple.com/us/album/serenades-and-lullabies/1540166836",
          youtube: "SOfDBcE_e0M",
        }}
      />
      <WorkCard
        title="Betrayal"
        img="betrayal_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify: "https://open.spotify.com/track/2QI6BgA6S3dEVCGfOankbm",
          itunes: "https://music.apple.com/us/album/betrayal-single/1531726076",
          youtube: "XZ_u0ZQs12g",
        }}
      />
      <WorkCard
        title="And I wandered aimlessly"
        img="aiwa_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify:
            "https://open.spotify.com/album/4y0lSUJQYa5BsPQQco6jRm?si=6WFqqKuUSROK9wvp7M7Kvg",
          itunes:
            "https://music.apple.com/us/album/and-i-wandered-aimlessly/1526705263",
          youtube: "L8ivBIiiimE",
        }}
      />
      <WorkCard
        title="Artemis"
        img="artemis_blur.png"
        handleModalVideo={handleModalVideo}
        links={{
          spotify: "https://open.spotify.com/track/2YjQDfTd46lvIoBxMDXluc",
          itunes: "https://music.apple.com/us/album/artemis-single/1538459979",
          youtube: "E_vPGelQd08",
        }}
      />
    </div>
  );
}
