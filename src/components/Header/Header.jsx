import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input, Heading } from "..";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1110px]">
        <Heading size="3xl" as="h3" className="!text-gray-900">
          Online Banking System
        </Heading>
        <div className="flex flex-row justify-between items-center w-auto">
          <Input
            color="gray_100_03"
            name="search"
            placeholder="Search for something"
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            prefix={
              <Img
                src="images/img_search.svg"
                alt="search"
                className="cursor-pointer"
              />
            }
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue("")}
                  fillColor="#888ea2ff"
                />
              ) : null
            }
            className="w-[50%] gap-[15px] text-blue_gray-400 rounded-[25px]"
          />

          <Link to="/settings" className="text-right ml-2">
            <Img src="images/img_settings_1.svg" />
          </Link>
          <Link to="/" className="text-right ml-2">
            <Img src="images/img_002_notification_1.svg" />
          </Link>
          <Img
            src="images/img_ellipse_1.png"
            alt="circleimage"
            className="h-[60px] w-[60px] rounded-[50%]"
          />
        </div>
      </div>
    </header>
  );
}
