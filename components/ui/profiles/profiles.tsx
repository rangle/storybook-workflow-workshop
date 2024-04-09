import React from "react";
import { SitterProfile, SitterProfileProps } from "../sitter";

export interface ProfilesProps {
  profiles: SitterProfileProps[] | undefined;
}

export const Profiles = ({ profiles, ...props }: ProfilesProps) => {
  if (!profiles) {
    return null;
  }
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {profiles.length > 0 &&
                profiles.map((profile, index) => {
                  return (
                    <div key={index}>
                      <SitterProfile {...profile} />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};
