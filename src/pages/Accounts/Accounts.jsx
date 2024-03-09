import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../../components";
import Header from "../../components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

export default function AccountsPage() {
  return (
    <>
      <Helmet>
        <title>Bank_App</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full bg-gray-100">
        <Sidebar />
        <div className="flex flex-col items-center justify-start w-[83%] gap-[31px]">
          <Header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[94%] gap-[23px]">
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[23%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px] ml-[11px]">
                  <Img src="images/img_money_tag_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[48%] mr-[11px] gap-[5px]">
                  <Text as="p">My Balance</Text>
                  <Heading size="2xl" as="h1" className="!text-indigo-600_01">
                    $12,750
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-[23%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px] ml-4">
                  <Img src="images/img_group_400.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[43%] mr-[15px] gap-[7px]">
                  <Text as="p">Income</Text>
                  <Heading size="2xl" as="h2" className="!text-indigo-600_01">
                    $5,600
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-[23%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px] ml-4">
                  <Img src="images/img_001_medical.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[44%] mr-[15px] gap-[5px]">
                  <Text as="p">Expense</Text>
                  <Heading size="2xl" as="h3" className="!text-indigo-600_01">
                    $3,460
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] gap-[15px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px] ml-3.5">
                  <Img src="images/img_003_saving.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[46%] mr-[13px] gap-[5px]">
                  <Text as="p">Total Saving</Text>
                  <Heading size="2xl" as="h4" className="!text-indigo-600_01">
                    $7,920
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-[66%] gap-[19px]">
                <Heading as="h5">Last Transaction</Heading>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col w-full gap-2.5 p-[25px] bg-white-A700 rounded-[25px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-center items-center w-[83%]">
                        <Button size="2xl" shape="round" className="w-[55px]">
                          <Img src="images/img_renew_1.svg" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[28%] ml-[25px] gap-1">
                          <Text
                            as="p"
                            className="!text-blue_gray-900 !font-medium"
                          >
                            Spotify Subscription
                          </Text>
                          <Text size="lg" as="p">
                            25 Jan 2021
                          </Text>
                        </div>
                        <Text as="p" className="ml-[31px]">
                          Shopping
                        </Text>
                        <Text as="p" className="ml-[43px]">
                          1234 ****
                        </Text>
                        <Text as="p" className="ml-[45px]">
                          Pending
                        </Text>
                      </div>
                      <Text
                        as="p"
                        className="!text-red-700 text-right !font-medium"
                      >
                        -$150
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-start w-[29%] gap-[25px]">
                        <Button size="2xl" shape="round" className="w-[55px]">
                          <Img src="images/img_group_327.svg" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[59%] mt-1 gap-1.5">
                          <Text
                            as="p"
                            className="!text-blue_gray-900 !font-medium"
                          >
                            Mobile Service
                          </Text>
                          <Text size="lg" as="p">
                            25 Jan 2021
                          </Text>
                        </div>
                      </div>
                      <Text as="p">Service</Text>
                      <div className="flex flex-row justify-between w-auto">
                        <Text as="p">1234 ****</Text>
                        <Text as="p">Completed</Text>
                        <Text
                          as="p"
                          className="!text-red-700 text-right !font-medium"
                        >
                          -$340
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[27%] gap-[25px]">
                        <Button size="2xl" shape="round" className="w-[55px]">
                          <Img src="images/img_group_326.svg" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[56%] gap-1">
                          <Text
                            as="p"
                            className="!text-blue_gray-900 !font-medium"
                          >
                            Emilly Wilson
                          </Text>
                          <Text size="lg" as="p">
                            25 Jan 2021
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between w-auto">
                        <Text as="p">Transfer</Text>
                        <Text as="p">1234 ****</Text>
                        <Text as="p">Completed</Text>
                        <Text
                          as="p"
                          className="!text-green-600 text-right !font-medium"
                        >
                          +$780
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[32%]">
                <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading as="h6">My Card</Heading>
                    <a href="#">
                      <Heading size="md" as="h6" className="text-right">
                        See All
                      </Heading>
                    </a>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full pt-6 gap-[37px] bg-indigo-600_01 rounded-[25px]">
                      <div className="flex flex-col items-start justify-start w-[86%] gap-[22px]">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-col items-start justify-start gap-[3px]">
                            <Text size="xs" as="p" className="!text-white-A700">
                              Balance
                            </Text>
                            <Text
                              size="3xl"
                              as="p"
                              className="!text-white-A700"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            src="images/img_chip_card.png"
                            alt="chipcard_one"
                            className="w-[34px] object-cover"
                          />
                        </div>
                        <div className="flex flex-row justify-between w-[77%]">
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text
                              size="xs"
                              as="p"
                              className="!text-white-A700_b2"
                            >
                              CARD HOLDER
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700">
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text
                              size="xs"
                              as="p"
                              className="!text-white-A700_b2"
                            >
                              VALID THRU
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700">
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                          <div className="flex flex-row justify-between items-center w-[97%] ml-1.5 mr-1">
                            <Text
                              size="4xl"
                              as="p"
                              className="!text-white-A700"
                            >
                              3778 **** **** 1234
                            </Text>
                            <Img
                              src="images/img_group_17.svg"
                              alt="image_one"
                              className="h-[30px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-[66%] gap-[19px]">
                <Heading as="h5">Debit & Credit Overview</Heading>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-center w-full p-[26px] bg-white-A700 rounded-[25px]">
                    <div className="flex flex-col items-center justify-start w-[99%] gap-[26px] mx-[3px]">
                      <div className="flex flex-row justify-between w-full">
                        <Text as="p" className="mt-px">
                          <span className="text-blue_gray_800_01">$7,560</span>
                          <span className="text-blue_gray-400">Debited & </span>
                          <span className="text-blue_gray_800_01">$5,420</span>
                          <span className="text-blue_gray-400">
                            Credited in this Week
                          </span>
                        </Text>
                        <div className="flex flex-row justify-start w-[25%] gap-[25px]">
                          <div className="flex flex-row justify-start items-center w-[41%] gap-2.5">
                            <div className="h-[15px] w-[15px] bg-indigo-600_01 shadow-bs rounded-[5px]" />
                            <Text as="p">Debit</Text>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
                            <div className="h-[15px] w-[15px] bg-indigo-200 rounded-[5px]" />
                            <Text as="p">Credit</Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-3">
                          <div className="flex flex-row justify-center items-end w-full">
                            <div className="h-[135px] w-[5%] bg-indigo-600_01 rounded-[10px]" />
                            <div className="h-[234px] w-[5%] ml-2.5 bg-indigo-200 rounded-[10px]" />
                            <div className="h-[106px] w-[5%] ml-[30px] bg-indigo-600_01 rounded-[10px]" />
                            <div className="h-[186px] w-[5%] ml-2.5 bg-indigo-200 rounded-[10px]" />
                            <div className="h-[102px] w-[5%] ml-[30px] bg-indigo-600_01 rounded-[10px]" />
                            <div className="h-[139px] w-[5%] ml-2.5 bg-indigo-200 rounded-[10px]" />
                            <div className="h-[212px] w-[5%] ml-[30px] bg-indigo-600_01 rounded-[10px]" />
                            <div className="h-[123px] w-[5%] ml-2.5 bg-indigo-200 rounded-[10px]" />
                            <div className="h-[150px] w-[5%] ml-[30px] bg-indigo-600_01 rounded-[10px]" />
                            <div className="h-[214px] w-[5%] ml-2.5 bg-indigo-200 rounded-[10px]" />
                            <div className="h-[158px] w-[5%] ml-[30px] bg-indigo-600_01 rounded-[10px]" />
                            <div className="h-[105px] w-[5%] ml-2.5 bg-indigo-200 rounded-[10px]" />
                            <div className="h-[179px] w-[5%] ml-[30px] bg-indigo-600_01 rounded-[10px]" />
                            <div className="h-[216px] w-[5%] ml-2.5 bg-indigo-200 rounded-[10px]" />
                          </div>
                          <div className="flex flex-row justify-between w-[93%]">
                            <Text size="md" as="p" className="text-center">
                              Sat
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Sun
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Mon
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Tue
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Wed
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Thu
                            </Text>
                            <Text
                              size="md"
                              as="p"
                              className="h-[17px] text-center"
                            >
                              Fri
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] gap-[19px]">
                <Heading as="h5">Invoices Sent</Heading>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col w-full gap-[21px] p-[25px] bg-white-A700 rounded-[25px]">
                    <div className="flex flex-row justify-between items-center w-full mt-[5px]">
                      <div className="flex flex-row justify-start items-center w-[57%] gap-5">
                        <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                          <Button size="3xl" shape="round" className="w-[60px]">
                            <Img src="images/img_apple_2_1.svg" />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[53%] gap-[5px]">
                          <Text
                            as="p"
                            className="!text-blue_gray-900 !font-medium"
                          >
                            Apple Store
                          </Text>
                          <Text size="lg" as="p">
                            5h ago
                          </Text>
                        </div>
                      </div>
                      <Heading
                        size="s"
                        as="h6"
                        className="!text-indigo-600_01 text-right"
                      >
                        $450
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[53%] gap-5">
                        <Button size="3xl" shape="round" className="w-[60px]">
                          <Img src="images/img_group_326.svg" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[50%] gap-[7px]">
                          <Text
                            as="p"
                            className="!text-blue_gray-900 !font-medium"
                          >
                            Michael
                          </Text>
                          <Text size="lg" as="p">
                            2 days ago
                          </Text>
                        </div>
                      </div>
                      <Heading
                        size="s"
                        as="h6"
                        className="!text-indigo-600_01 text-right"
                      >
                        $160
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[56%] gap-5">
                        <Button size="3xl" shape="round" className="w-[60px]">
                          <Img src="images/img_group_935.svg" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[52%] gap-1.5">
                          <Text
                            as="p"
                            className="!text-blue_gray-900 !font-medium"
                          >
                            Playstation
                          </Text>
                          <Text size="lg" as="p">
                            5 days ago
                          </Text>
                        </div>
                      </div>
                      <Heading
                        size="s"
                        as="h6"
                        className="!text-indigo-600_01 text-right"
                      >
                        $1085
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full mb-1.5">
                      <div className="flex flex-row justify-start items-center w-[56%] gap-5">
                        <Button size="3xl" shape="round" className="w-[60px]">
                          <Img src="images/img_group_326.svg" />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[52%] gap-[7px]">
                          <Text
                            as="p"
                            className="!text-blue_gray-900 !font-medium"
                          >
                            William
                          </Text>
                          <Text size="lg" as="p">
                            10 days ago
                          </Text>
                        </div>
                      </div>
                      <Heading
                        size="s"
                        as="h6"
                        className="!text-indigo-600_01 text-right"
                      >
                        $90
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
