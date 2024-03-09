import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Switch, Input } from "../../components";
import Header from "../../components/Header/Header";
import Sidebar1 from "../../components/Sidebar1";

export default function SettingPagePreferencesPage() {
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
          <Sidebar1 className="w-[252px] h-screen top-0 !sticky overflow-auto" />
          <div className="flex flex-col items-center justify-start w-[83%] gap-[31px]">
            <Header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-center justify-start w-full gap-[41px] p-[30px] bg-white-A700 rounded-[25px]">
                <div className="flex flex-row justify-center w-full mt-1.5">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-between w-[37%] ml-4">
                      <Text as="p" className="!text-blue_gray-400 !font-medium">
                        Edit Profile
                      </Text>
                      <Text as="p" className="!text-indigo-600_01 !font-medium">
                        Preferences
                      </Text>
                      <Text as="p" className="!text-blue_gray-400 !font-medium">
                        Security
                      </Text>
                    </div>
                    <div className="h-[3px] w-[11%] mt-1.5 ml-40 rounded-tl-[10px] rounded-tr-[10px] z-[1] bg-indigo-600_01" />
                    <div className="h-px w-full mt-[-1px] bg-gray-300" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row justify-start items-center w-full gap-[30px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-[9px]">
                      <Text as="p" className="!text-blue_gray-400">
                        Currency
                      </Text>
                      <Input
                        name="usd"
                        placeholder="USD"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-2.5">
                      <Text as="p" className="!text-blue_gray-400">
                        Time Zone
                      </Text>
                      <Input
                        name="time"
                        placeholder="(GMT-12:00) International Date Line West"
                        className="w-full border-gray-300 border border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[39%] mt-[27px] gap-[18px]">
                    <Text size="md" as="p">
                      Notification
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                      <div className="flex flex-row justify-start items-center w-[80%] gap-5">
                        <Switch className="w-[18%]" />
                        <Text as="p" className="!text-blue_gray-400">
                          I send or receive digita currency
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[66%] gap-[21px]">
                        <Switch className="w-[22%]" />
                        <Text as="p" className="!text-blue_gray-400">
                          I receive merchant order
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-[21px]">
                        <Switch className="w-[15%]" />
                        <Text as="p" className="!text-blue_gray-400">
                          There are recommendation for my account
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="indigo_600_01"
                    size="lg"
                    className="mt-[72px] ml-[860px] font-medium min-w-[190px] rounded-[15px]"
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
