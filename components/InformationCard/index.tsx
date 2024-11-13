"use client";
import { TInformationItem } from "@/types";
import React, { useState } from "react";
import LocationInfo from "./LocationInfo";
import ActionSection from "./ActionSection";
import Note from "../Note";
import SelfInfo from "./SelfInfo";
import GradientButton from "../Button";
import { NoteAlert } from "@/data";

type TProps = {
  data: TInformationItem[];
};

const InformationCard = ({ data }: TProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {data?.map((information, index) => (
        <div key={index} className="flex justify-between items-center">
          {/* Left side */}
          <SelfInfo
            status={information?.status}
            experience={information?.experience}
            profession={information?.profession}
          />

          {/* Right side */}
          <div className="flex items-center gap-6">
            <LocationInfo
              country={information.country}
              location={information.location}
            />

            {/* Actions container */}
            <div className="flex items-center gap-4">
              <ActionSection
                icon="/assets/icons/fav.svg"
                alt="Add to favorites"
                isHovered={hoveredIndex === index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                note={information?.isSubscribed && <Note text="Вы подписаны" />}
                data={information?.likes}
              />

              <ActionSection
                icon="/assets/icons/comment.svg"
                alt="Add comment"
                isHovered={hoveredIndex === index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data={information?.comments}
              />
            </div>
          </div>
        </div>
      ))}
      <GradientButton className="w-[257px] h-[45px]">
        Связаться с заводчиком
      </GradientButton>
      <Note text={NoteAlert} />
    </div>
  );
};

export default InformationCard;
