import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text } from "../../components";
import Header from "../../components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

export default function SettingPageSecurityPage() {
  return (
    <>
      <Helmet>
        <title>bank_app</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row justify-center items-start w-full">
          <Sidebar />
          <div className="flex flex-col items-center justify-start w-[83%] gap-[31px]">
            <Header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-start justify-start w-full gap-8 p-[30px] bg-white-A700 rounded-[25px]">
                <div className="flex flex-row justify-start w-full mt-1.5">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-between w-[37%] ml-4">
                      <Text as="p" className="!text-blue_gray-400 !font-medium">
                        Edit Profile
                      </Text>
                      <Text as="p" className="!text-blue_gray-400 !font-medium">
                        Preferences
                      </Text>
                      <Text as="p" className="!text-indigo-600_01 !font-medium">
                        Security
                      </Text>
                    </div>
                    <div className="h-[3px] w-[11%] mt-1.5 ml-[315px] rounded-tl-[10px] rounded-tr-[10px] z-[1] bg-indigo-600_01" />
                    <div className="h-px w-full mt-[-1px] bg-gray-300" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[39%] gap-[18px]">
                  <Text size="md" as="p">
                    Two-factor Authentication
                  </Text>
                  <div className="flex flex-row justify-start items-center w-full gap-5">
                    <Switch variant="swtFillGreen600" className="w-[14%]" />
                    <Text as="p" className="!text-blue_gray-400">
                      Enable or disable two factor authentication
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[49%]">
                  <Text size="md" as="p">
                    Change Password
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full mt-[13px] gap-2.5">
                    <Text as="p" className="!text-blue_gray-400">
                      Current Password
                    </Text>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Charlene@123"
                      className="w-full border-gray-300 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mt-[21px] gap-2.5">
                    <Text as="p" className="!text-blue_gray-400">
                      New Password
                    </Text>
                    <Input
                      type="password"
                      name="newpassword"
                      placeholder="Charlene@123"
                      className="w-full border-gray-300 border border-solid"
                    />
                  </div>
                </div>
                <Button
                  color="indigo_600_01"
                  size="lg"
                  className="ml-[860px] font-medium min-w-[190px] rounded-[15px]"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
