"use client";
import { TInformationItem } from "@/types";
import React, { useState } from "react";
import LocationInfo from "./LocationInfo";
import ActionSection from "./ActionSection";
import Note from "../Note";
import SelfInfo from "./SelfInfo";
import GradientButton from "../Button";
import { NoteAlert } from "@/data";

type THoverState = {
  index: number;
  type: 'fav' | 'comment';
} | null;

const InformationCard = ({ data }: { data: TInformationItem[] }) => {
  const [hoveredState, setHoveredState] = useState<THoverState>(null);

  const isHovered = (index: number, type: 'fav' | 'comment') => 
    hoveredState?.index === index && hoveredState.type === type;

  return (
    <div className="flex flex-col gap-4">
      {data?.map((information, index) => (
        <div key={index} className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Left side */}
          <SelfInfo
            status={information?.status}
            experience={information?.experience}
            profession={information?.profession}
          />

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-6">
            <LocationInfo
              country={information.country}
              location={information.location}
            />

            {/* Actions container */}
            <div className="flex items-center gap-4">
              <ActionSection
                icon="/assets/icons/fav.svg"
                alt="Add to favorites"
                isHovered={isHovered(index, 'fav')}
                onMouseEnter={() => setHoveredState({ index, type: 'fav' })}
                onMouseLeave={() => setHoveredState(null)}
                note={information?.isSubscribed && <Note text="Вы подписаны" />}
                data={information?.likes}
              />

              <ActionSection
                icon="/assets/icons/comment.svg"
                alt="Add comment"
                isHovered={isHovered(index, 'comment')}
                onMouseEnter={() => setHoveredState({ index, type: 'comment' })}
                onMouseLeave={() => setHoveredState(null)}
                data={information?.comments}
              />
            </div>
          </div>
        </div>
      ))}
      <GradientButton className="w-[257px] h-[45px] mx-auto md:mx-0">
        Связаться с заводчиком
      </GradientButton>
      <Note text={NoteAlert} />
    </div>
  );
};

export default InformationCard;