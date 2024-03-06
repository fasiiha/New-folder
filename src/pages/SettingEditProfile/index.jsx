import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, SelectBox, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingEditProfilePage() {
  return (
    <>
      <Helmet>
        <title>bank_app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full bg-gray-100">
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] gap-[31px]">
          <Header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-row justify-center w-[94%]">
            <div className="flex flex-col items-center justify-start w-full gap-[51px] p-[30px] bg-white-A700 rounded-[25px]">
              <div className="flex flex-col items-start justify-start w-full mt-1.5">
                <div className="flex flex-row justify-start items-start w-[39%] z-[1]">
                  <div className="flex flex-col items-center justify-start w-[29%] gap-2">
                    <Text as="p" className="!text-indigo-600_01 !font-medium">
                      Edit Profile
                    </Text>
                    <div className="h-[3px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-indigo-600_01" />
                  </div>
                  <Text as="p" className="ml-[57px] !text-blue_gray-400 !font-medium">
                    Preferences
                  </Text>
                  <Text as="p" className="ml-[76px] !text-blue_gray-400 !font-medium">
                    Security
                  </Text>
                </div>
                <div className="h-px w-full mt-[-1px] bg-gray-300" />
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-row justify-center w-[13%] mt-[3px]">
                  <div className="flex flex-row justify-center items-center w-full">
                    <Img
                      src="images/img_ellipse_28.png"
                      alt="circleimage_one"
                      className="h-[130px] w-[130px] rounded-[50%]"
                    />
                    <Button color="indigo_600_01" size="sm" className="w-[30px] ml-[-28px]">
                      <Img src="images/img_group_194.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[83%]">
                  <div className="flex flex-row justify-start w-full gap-[29px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Your Name
                      </Text>
                      <Input
                        name="name"
                        placeholder="Charlene Reed "
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        User Name
                      </Text>
                      <Input
                        name="userName"
                        placeholder="Charlene Reed "
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full mt-[21px] gap-[29px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Email
                      </Text>
                      <Input
                        name="email"
                        placeholder="user@gmail.com "
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Password
                      </Text>
                      <Input
                        type="password"
                        name="password"
                        placeholder="**********"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full mt-[21px] gap-[29px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Date of Birth
                      </Text>
                      <SelectBox
                        indicator={<Img src="images/img_arrowdown_blue_gray_400.svg" alt="arrow_down" />}
                        name="dateOfBirth"
                        placeholder="25 January 1990"
                        options={dropDownOptions}
                        className="w-full gap-px border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Present Address
                      </Text>
                      <Input
                        name="address"
                        placeholder="San Jose, California, USA"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mt-[21px] gap-[29px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Permanent Address
                      </Text>
                      <Input
                        name="address"
                        placeholder="San Jose, California, USA"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-[9px]">
                      <Text as="p" className="!text-blue_gray-400">
                        City
                      </Text>
                      <Input
                        name="city"
                        placeholder="San Jose"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mt-[21px] gap-[29px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Postal Code
                      </Text>
                      <Input
                        name="zipcode"
                        placeholder="45962"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-[9px]">
                      <Text as="p" className="!text-blue_gray-400">
                        Country
                      </Text>
                      <Input name="country" placeholder="USA" className="w-full border-gray-300 border border-solid" />
                    </div>
                  </div>
                  <Button
                    color="indigo_600_01"
                    size="lg"
                    className="mt-[30px] font-medium min-w-[190px] rounded-[15px]"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
